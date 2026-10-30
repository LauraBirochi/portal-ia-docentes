#!/usr/bin/env python3
"""
scripts/export_pdf.py — Gerador Headless de Slides em PDF 16:9 Nativo
Utiliza Playwright e PyMuPDF para renderizar e compilar todos os slides em PDF vetorial de alta definição.
"""

import os
import sys
import time
import socket
import threading
import argparse

# Garante acesso à raiz do projeto
ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if ROOT_DIR not in sys.path:
    sys.path.insert(0, ROOT_DIR)

if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

import pymupdf as fitz
from playwright.sync_api import sync_playwright

def find_free_port() -> int:
    """Encontra uma porta TCP livre no localhost."""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('127.0.0.1', 0))
        return s.getsockname()[1]

def is_port_listening(host: str, port: int) -> bool:
    """Verifica se uma porta TCP está ativa e respondendo conexões."""
    try:
        with socket.create_connection((host, port), timeout=0.2):
            return True
    except OSError:
        return False

def ensure_server_running(port: int = None) -> int:
    """Inicia o servidor Flask em background caso não exista um ativo, aguardando confirmação de socket."""
    # Se nenhuma porta foi especificada, verifica se o servidor principal (porta 5000) já está ativo
    if port is None and is_port_listening('127.0.0.1', 5000):
        return 5000

    from app import app

    server_port = port or find_free_port()
    server_thread = threading.Thread(
        target=lambda: app.run(host='127.0.0.1', port=server_port, debug=False, use_reloader=False),
        daemon=True
    )
    server_thread.start()

    # Polling ativo até que a porta passe a aceitar conexões (até 6 segundos)
    start_time = time.time()
    while time.time() - start_time < 6.0:
        if is_port_listening('127.0.0.1', server_port):
            return server_port
        time.sleep(0.15)

    return server_port

def generate_slides_pdf(meeting_id: int = 1, output_path: str = None, base_url: str = None) -> str:
    """
    Gera o PDF consolidado de alta fidelidade para o encontro informado.
    Retorna o caminho absoluto do arquivo PDF gerado.
    """
    if output_path is None:
        pdf_dir = os.path.join(ROOT_DIR, 'static', 'pdf')
        os.makedirs(pdf_dir, exist_ok=True)
        output_path = os.path.join(pdf_dir, f'slides-encontro-{meeting_id}.pdf')

    print(f"\n=======================================================")
    print(f"[EXPORTACAO] INICIANDO EXPORTACAO HEADLESS - ENCONTRO {meeting_id}")
    print(f"=======================================================")

    if not base_url:
        port = ensure_server_running()
        base_url = f"http://127.0.0.1:{port}"

    with sync_playwright() as p:
        print("[1/4] Inicializando navegador Chromium headless (1920x1080)...")
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 1920, 'height': 1080},
            device_scale_factor=1
        )
        page = context.new_page()

        page.on("pageerror", lambda err: print(f"[BROWSER ERROR] {err}"))

        # 1. Login seguro para obter acesso autenticado
        print("[2/4] Autenticando sessao com perfil docente...")
        page.goto(f"{base_url}/login")
        page.fill('input[name="username"]', 'lucio')
        page.fill('input[name="password"]', 'coord@lucio2026')
        page.click('button[type="submit"]')
        page.wait_for_url(f"{base_url}/")

        # 2. Acesso à página do projetor
        slides_url = f"{base_url}/slides/{meeting_id}?slide=1"
        page.goto(slides_url)
        page.wait_for_selector('#deck-stage', timeout=10000)
        page.wait_for_function("() => typeof window.__projectorEngine !== 'undefined'", timeout=10000)

        # 3. Configura midia como screen e injeta folha de estilo 16:9 full bleed
        page.emulate_media(media="screen")
        page.add_style_tag(content="""
            @page {
                size: 1920px 1080px;
                margin: 0 !important;
            }
            * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                animation: none !important;
                transition: none !important;
            }
            html, body {
                width: 1920px !important;
                height: 1080px !important;
                margin: 0 !important;
                padding: 0 !important;
                overflow: hidden !important;
                background: #100d0a !important;
            }
            .projector-topbar,
            .presenter-notes-drawer,
            .interval-overlay-stage,
            #questions-overlay,
            .topbar-revealed {
                display: none !important;
            }
            #deck-viewport {
                width: 1920px !important;
                height: 1080px !important;
                margin: 0 !important;
                padding: 0 !important;
                background: transparent !important;
                display: block !important;
                overflow: hidden !important;
            }
            #deck-stage {
                width: 1920px !important;
                height: 1080px !important;
                margin: 0 !important;
                padding: 0 !important;
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                transform: none !important;
                box-sizing: border-box !important;
            }
            #slide-container.slide-card {
                width: 1920px !important;
                height: 1080px !important;
                border-radius: 0 !important;
                border: none !important;
                box-shadow: none !important;
                padding: 55px 75px !important;
                box-sizing: border-box !important;
                background: #1a1511 !important;
                animation: none !important;
                transition: none !important;
            }
            body[data-meeting="2"] #slide-container.slide-card {
                background: #0f172a !important;
            }
        """)

        total_slides = page.evaluate("() => window.__projectorEngine ? window.__projectorEngine.getSlideCount() : 32")
        print(f"[3/4] Renderizando e compilando {total_slides} slides vetoriais 16:9...")

        master_pdf = fitz.open()

        for idx in range(total_slides):
            slide_num = idx + 1
            # Renderiza o slide instantaneamente via API interna
            page.evaluate(f"() => window.__projectorEngine.renderSlide({idx})")
            page.wait_for_timeout(100)

            # Exporta o slide atual em PDF vetorial 1920x1080
            pdf_bytes = page.pdf(
                width="1920px",
                height="1080px",
                print_background=True,
                prefer_css_page_size=True,
                margin={"top": "0", "right": "0", "bottom": "0", "left": "0"}
            )
            slide_doc = fitz.open(stream=pdf_bytes, filetype="pdf")
            if len(slide_doc) > 0:
                master_pdf.insert_pdf(slide_doc, from_page=0, to_page=0)
            
            # Progresso visual
            sys.stdout.write(f"\r   -> Processado slide {slide_num}/{total_slides} ({int((slide_num/total_slides)*100)}%)")
            sys.stdout.flush()

        print(f"\n[4/4] Gravando arquivo PDF final em alta definicao...")
        page_count = len(master_pdf)
        master_pdf.save(output_path, deflate=True)
        master_pdf.close()
        browser.close()

    file_size_kb = os.path.getsize(output_path) / 1024
    print(f"[OK] CONCLUIDO COM SUCESSO:")
    print(f"   - Arquivo: {output_path}")
    print(f"   - Paginas: {page_count} paginas 16:9 widescreen nativas")
    print(f"   - Tamanho: {file_size_kb:.1f} KB\n")

    return output_path

def main():
    parser = argparse.ArgumentParser(description="Exporta slides do curso de IA em PDF 16:9 de alta definição.")
    parser.add_argument("encontro", nargs="?", default="1", help="Número do encontro (1, 2) ou 'all'")
    parser.add_argument("-o", "--output", help="Caminho de saída personalizado para o arquivo PDF")
    args = parser.parse_args()

    if args.encontro.lower() == 'all':
        generate_slides_pdf(1)
        generate_slides_pdf(2)
    else:
        try:
            meeting_id = int(args.encontro)
        except ValueError:
            print(f"[ERRO] Encontro inválido: {args.encontro}. Use um número como 1 ou 2, ou 'all'.")
            sys.exit(1)

        generate_slides_pdf(meeting_id, args.output)

if __name__ == '__main__':
    main()
