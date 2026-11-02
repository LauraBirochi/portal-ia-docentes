#!/usr/bin/env python3
"""
scripts/md_to_pdf.py — Conversor de Markdown para PDF com KaTeX e Estilo Editorial
Converte arquivos Markdown com fórmulas matemáticas (LaTeX/KaTeX), tabelas e código
em documentos PDF de alta definição formatados para impressão em folha A4.
"""

import os
import sys
import argparse
import markdown
from playwright.sync_api import sync_playwright

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>{title}</title>
  
  <!-- Fontes Tipográficas Profissionais -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&family=Lora:ital,wght@0,500;0,600;1,400&display=swap" rel="stylesheet">
  
  <!-- KaTeX para Fórmulas Matemáticas em Alta Resolução -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js"></script>

  <style>
    @page {{
      size: A4 portrait;
      margin: 22mm 18mm 22mm 18mm;
      @bottom-right {{
        content: counter(page);
      }}
    }}

    *, *::before, *::after {{
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }}

    body {{
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 10.5pt;
      line-height: 1.65;
      color: #1e293b;
      background-color: #ffffff;
      margin: 0;
      padding: 0;
    }}

    /* Títulos e Hierarquia Tipográfica */
    h1, h2, h3, h4, h5, h6 {{
      color: #0f172a;
      font-weight: 700;
      line-height: 1.3;
      page-break-after: avoid;
      break-after: avoid;
    }}

    h1 {{
      font-size: 22pt;
      font-weight: 800;
      color: #0f172a;
      border-bottom: 3px solid #3b82f6;
      padding-bottom: 8px;
      margin-top: 0;
      margin-bottom: 14px;
      letter-spacing: -0.02em;
    }}

    h2 {{
      font-size: 14pt;
      color: #1e293b;
      border-bottom: 1.5px solid #e2e8f0;
      padding-bottom: 6px;
      margin-top: 24pt;
      margin-bottom: 10pt;
      letter-spacing: -0.01em;
    }}

    h3 {{
      font-size: 12pt;
      color: #2563eb;
      margin-top: 16pt;
      margin-bottom: 8pt;
    }}

    h4 {{
      font-size: 11pt;
      color: #334155;
      margin-top: 12pt;
      margin-bottom: 6pt;
    }}

    p {{
      margin-top: 0;
      margin-bottom: 9pt;
      text-align: justify;
    }}

    /* Links */
    a {{
      color: #2563eb;
      text-decoration: underline;
      text-underline-offset: 2px;
      word-break: break-all;
    }}

    /* Código Inline e Blocos */
    code {{
      font-family: 'JetBrains Mono', Consolas, Monaco, monospace;
      font-size: 9pt;
      background-color: #f1f5f9;
      color: #0f172a;
      padding: 1.5px 5px;
      border-radius: 4px;
      border: 1px solid #e2e8f0;
    }}

    pre {{
      background-color: #0f172a;
      color: #f8fafc;
      padding: 12px 16px;
      border-radius: 6px;
      overflow-x: auto;
      font-size: 8.5pt;
      line-height: 1.5;
      margin: 12pt 0;
      page-break-inside: avoid;
      break-inside: avoid;
    }}

    pre code {{
      background-color: transparent;
      color: inherit;
      padding: 0;
      border: none;
      font-size: inherit;
    }}

    /* Citações e Destaques */
    blockquote {{
      margin: 12pt 0;
      padding: 10pt 16pt;
      background-color: #f8fafc;
      border-left: 4px solid #3b82f6;
      border-radius: 0 6px 6px 0;
      font-style: italic;
      color: #334155;
      page-break-inside: avoid;
      break-inside: avoid;
    }}

    blockquote p:last-child {{
      margin-bottom: 0;
    }}

    /* Tabelas */
    table {{
      width: 100%;
      border-collapse: collapse;
      margin: 14pt 0;
      font-size: 9pt;
      page-break-inside: avoid;
      break-inside: avoid;
    }}

    th, td {{
      padding: 8px 10px;
      border: 1px solid #cbd5e1;
      text-align: left;
      vertical-align: top;
    }}

    th {{
      background-color: #f1f5f9;
      font-weight: 700;
      color: #0f172a;
      border-bottom: 2px solid #94a3b8;
    }}

    tr:nth-child(even) td {{
      background-color: #f8fafc;
    }}

    /* Listas */
    ul, ol {{
      margin-top: 0;
      margin-bottom: 10pt;
      padding-left: 20px;
    }}

    li {{
      margin-bottom: 4pt;
    }}

    /* Linhas Horizontais */
    hr {{
      border: 0;
      height: 1px;
      background-color: #e2e8f0;
      margin: 18pt 0;
    }}

    /* Equações KaTeX */
    .katex-display {{
      margin: 10pt 0 !important;
      padding: 6pt 0 !important;
      overflow-x: hidden !important;
      page-break-inside: avoid;
      break-inside: avoid;
    }}

    .katex {{
      font-size: 1.05em !important;
    }}

    /* Badges e Destaques Customizados */
    .doc-meta-badge {{
      display: inline-block;
      background-color: #eff6ff;
      border: 1px solid #bfdbfe;
      color: #1e40af;
      font-size: 8.5pt;
      font-weight: 600;
      padding: 3px 8px;
      border-radius: 4px;
      margin-bottom: 12pt;
    }}
  </style>
</head>
<body>
  {body}

  <script>
    document.addEventListener("DOMContentLoaded", function() {{
      if (typeof renderMathInElement !== 'undefined') {{
        renderMathInElement(document.body, {{
          delimiters: [
            {{left: '$$', right: '$$', display: true}},
            {{left: '$', right: '$', display: false}},
            {{left: '\\\\(', right: '\\\\)', display: false}},
            {{left: '\\\\[', right: '\\\\]', display: true}}
          ],
          throwOnError: false
        }});
      }}
    }});
  </script>
</body>
</html>
"""

def convert_md_to_pdf(input_md_path: str, output_pdf_path: str = None) -> str:
    if not os.path.exists(input_md_path):
        raise FileNotFoundError(f"Arquivo Markdown não encontrado: {input_md_path}")

    if output_pdf_path is None:
        base_name = os.path.splitext(input_md_path)[0]
        output_pdf_path = f"{base_name}.pdf"

    print(f"\n=======================================================")
    print(f"[CONVERSÃO MD -> PDF]")
    print(f"   Origem : {input_md_path}")
    print(f"   Destino: {output_pdf_path}")
    print(f"=======================================================")

    with open(input_md_path, 'r', encoding='utf-8') as f:
        md_text = f.read()

    # Extrai o primeiro título como nome do documento
    doc_title = "Documento Técnico"
    for line in md_text.splitlines():
        if line.strip().startswith('# '):
            doc_title = line.strip()[2:].strip()
            break

    # Converte Markdown para HTML com suporte a tabelas e blocos de código
    html_body = markdown.markdown(
        md_text,
        extensions=['fenced_code', 'tables', 'toc', 'sane_lists']
    )

    full_html = HTML_TEMPLATE.format(title=doc_title, body=html_body)

    # Renderiza com Playwright em Chromium Headless
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Carrega o HTML na página
        page.set_content(full_html, wait_until="networkidle")

        # Aguarda a renderização das fórmulas matemáticas KaTeX
        page.wait_for_timeout(1000)

        # Gera o PDF A4 vetorial com numeração e cabeçalho editorial
        page.pdf(
            path=output_pdf_path,
            format="A4",
            print_background=True,
            margin={
                "top": "22mm",
                "right": "18mm",
                "bottom": "22mm",
                "left": "18mm"
            },
            display_header_footer=True,
            header_template='''
                <div style="font-family: 'Inter', sans-serif; font-size: 7.5pt; color: #94a3b8; width: 100%; padding: 0 18mm; display: flex; justify-content: space-between;">
                    <span>Minicurso de IA para Docentes • Caderno Técnico</span>
                    <span>Encontro 2</span>
                </div>
            ''',
            footer_template='''
                <div style="font-family: 'Inter', sans-serif; font-size: 8pt; color: #64748b; width: 100%; padding: 0 18mm; display: flex; justify-content: space-between;">
                    <span>Portal de Apoio Docente</span>
                    <span>Página <span class="pageNumber"></span> de <span class="totalPages"></span></span>
                </div>
            '''
        )
        browser.close()

    size_kb = os.path.getsize(output_pdf_path) / 1024
    print(f"[OK] PDF GERADO COM SUCESSO:")
    print(f"   Arquivo: {output_pdf_path}")
    print(f"   Tamanho: {size_kb:.1f} KB\n")
    return output_pdf_path

def main():
    parser = argparse.ArgumentParser(description="Converte arquivos Markdown em PDFs editoriais A4.")
    parser.add_argument("input", nargs="?", default="docs/caderno_tecnico_docente_encontro_2.md", help="Caminho do arquivo Markdown")
    parser.add_argument("-o", "--output", help="Caminho do arquivo PDF de saída")
    args = parser.parse_args()

    input_path = os.path.abspath(args.input)
    output_path = os.path.abspath(args.output) if args.output else None

    convert_md_to_pdf(input_path, output_path)

if __name__ == '__main__':
    main()

