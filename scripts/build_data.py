"""
Build Script – Compilador de Base de Dados dos Encontros
Compila os submódulos em static/js/data/encontro-X/ no bundle unificado static/js/data/encontroX-data.js

Uso:
    python scripts/build_data.py [encontro_num]
    (Padrão: encontro 1)
"""

import os
import re
import sys

def clean_module_code(content: str) -> str:
    """Remove declarações de import e export do código do submódulo ES6."""
    lines = []
    for line in content.splitlines():
        # Ignora imports
        if re.match(r'^\s*import\s+', line):
            continue
        # Converte 'export const/let/var x =' para 'const/let/var x ='
        line = re.sub(r'^\s*export\s+(const|let|var|function|class)\s+', r'\1 ', line)
        # Ignora export { ... } ou export default ...
        if re.match(r'^\s*export\s*(\{[^}]*\}|default\s+[^;]+);?', line):
            continue
        lines.append(line)
    return '\n'.join(lines).strip()

def build_meeting_bundle(meeting_num: int = 1, base_dir: str = None) -> str:
    if base_dir is None:
        base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

    submodules_dir = os.path.join(base_dir, 'static', 'js', 'data', f'encontro-{meeting_num}')
    bundle_path = os.path.join(base_dir, 'static', 'js', 'data', f'encontro{meeting_num}-data.js')

    if not os.path.exists(submodules_dir):
        raise FileNotFoundError(f"Diretório de submódulos não encontrado: {submodules_dir}")

    # Lista dos submódulos esperados na ordem correta de dependências
    files_order = [
        ('dossies.js', 'Dossiês Científicos e Jurídicos'),
        ('meta.js', 'Metadados Curriculares e Blocos Temáticos'),
        ('narrativa.js', 'Fio da Meada e Narrativa Pedagógica'),
        ('deck-slides.js', 'Slides com Notas da Professora'),
        ('atividades.js', 'Atividades Práticas e Laboratório'),
        ('faq-duvidas.js', 'Perguntas dos Alunos e Dúvidas Frequentes'),
        ('papeis.js', 'Divisão de Papéis e Co-Docência')
    ]

    parts = []
    for idx, (filename, description) in enumerate(files_order, start=1):
        filepath = os.path.join(submodules_dir, filename)
        if not os.path.exists(filepath):
            raise FileNotFoundError(f"Submódulo obrigatório ausente: {filepath}")
        
        with open(filepath, 'r', encoding='utf-8') as f:
            raw_content = f.read()

        cleaned = clean_module_code(raw_content)
        parts.append(f"  // {idx}. {description}\n  {cleaned}\n")

    # Contagem dinâmica de slides baseada nos objetos de nível superior em slidesComNotas
    deck_path = os.path.join(submodules_dir, 'deck-slides.js')
    with open(deck_path, 'r', encoding='utf-8') as f:
        deck_content = f.read()
    
    slide_matches = re.findall(r'^  \{', deck_content, re.MULTILINE)
    num_slides = len(slide_matches) if slide_matches else "N"

    bundle_template = f"""/**
 * Base de Dados Unificada – Módulo do Encontro {meeting_num} ({num_slides} Slides)
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 * 
 * ARQUIVO GERADO AUTOMATICAMENTE POR: scripts/build_data.py
 * FONTE ÚNICA DA VERDADE: static/js/data/encontro-{meeting_num}/
 * Edite os submódulos em static/js/data/encontro-{meeting_num}/ e execute 'python scripts/build_data.py'
 */

(function (global) {{
  'use strict';

{chr(10).join(parts)}
  const ENCONTRO_{meeting_num}_DATA = {{
    moduloInfo: moduloInfo,
    fioDaMeada: fioDaMeada,
    blocosTematicos: blocosTematicos,
    slidesComNotas: slidesComNotas,
    oficinaPratica: oficinaPratica,
    perguntasAlunos: perguntasAlunos,
    divisaoPapeis: divisaoPapeis,
    dossies: dossies
  }};

  // Exposição Global no Navegador (Window) e Node.js
  if (typeof window !== 'undefined') {{
    window.ENCONTRO_{meeting_num}_DATA = ENCONTRO_{meeting_num}_DATA;
    window.CURSO_IA_CURRENT_DATA = ENCONTRO_{meeting_num}_DATA;
  }}
  if (typeof module !== 'undefined' && module.exports) {{
    module.exports = ENCONTRO_{meeting_num}_DATA;
  }}

  global.ENCONTRO_{meeting_num}_DATA = ENCONTRO_{meeting_num}_DATA;
  global.CURSO_IA_CURRENT_DATA = ENCONTRO_{meeting_num}_DATA;

}})(typeof window !== 'undefined' ? window : globalThis);
"""

    with open(bundle_path, 'w', encoding='utf-8') as f:
        f.write(bundle_template)

    print(f"[OK] Bundle compilado com sucesso: {bundle_path}")
    print(f"   - Encontro: {meeting_num}")
    print(f"   - Slides detectados: {num_slides}")
    return bundle_path

if __name__ == '__main__':
    meeting = 1
    if len(sys.argv) > 1:
        try:
            meeting = int(sys.argv[1])
        except ValueError:
            print("Número de encontro inválido. Usando 1.")
    build_meeting_bundle(meeting)
