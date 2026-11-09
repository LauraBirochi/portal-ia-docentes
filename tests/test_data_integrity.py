"""
Suíte de Testes Automatizados de Integridade da Camada de Dados (Encontros 1 e 2)
Valida se a estrutura modular e os bundles unificados contêm todos os dados pedagógicos e contratos arquiteturais.
"""

import os
import re
import json
import unittest

class TestDataIntegrity(unittest.TestCase):
    def setUp(self):
        # Resolve a raiz do projeto a partir do diretório tests/
        self.base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        self.encontro1_path = os.path.join(self.base_dir, 'static', 'js', 'data', 'encontro1-data.js')
        self.submodules_dir = os.path.join(self.base_dir, 'static', 'js', 'data', 'encontro-1')

    def test_bundle_file_exists(self):
        """Verifica se encontro1-data.js existe e não está vazio."""
        self.assertTrue(os.path.exists(self.encontro1_path))
        self.assertGreater(os.path.getsize(self.encontro1_path), 5000)

    def test_submodules_exist(self):
        """Verifica se todos os 8 arquivos submódulos existem no diretório encontro-1."""
        expected_files = [
            'meta.js',
            'narrativa.js',
            'dossies.js',
            'deck-slides.js',
            'atividades.js',
            'faq-duvidas.js',
            'papeis.js',
            'index.js'
        ]
        for fname in expected_files:
            fpath = os.path.join(self.submodules_dir, fname)
            self.assertTrue(os.path.exists(fpath), f"Arquivo ausente: {fname}")
            self.assertGreater(os.path.getsize(fpath), 100, f"Arquivo vazio ou corrompido: {fname}")

    def test_bundle_contains_all_slides(self):
        """Garante que o bundle principal contenha pelo menos 31 slides."""
        with open(self.encontro1_path, 'r', encoding='utf-8') as f:
            content = f.read()

        slide_matches = re.findall(r'^\s*\{\s*\n\s*(?:numero|tipo|conducao|categoria)', content, re.MULTILINE)
        self.assertGreaterEqual(len(slide_matches), 30, f"Total de slides menor que o esperado: {len(slide_matches)}")

    def test_submodule_deck_contains_all_slides(self):
        """Garante que o submódulo deck-slides.js contenha todos os slides."""
        deck_path = os.path.join(self.submodules_dir, 'deck-slides.js')
        with open(deck_path, 'r', encoding='utf-8') as f:
            content = f.read()

        slide_matches = re.findall(r'^  \{', content, re.MULTILINE)
        self.assertGreaterEqual(len(slide_matches), 30, f"Total de slides no deck menor que o esperado: {len(slide_matches)}")

    def test_narrativa_contains_3_acts_and_glossary(self):
        """Valida se narrativa.js contém os 3 atos e os 7 termos de glossário."""
        narrativa_path = os.path.join(self.submodules_dir, 'narrativa.js')
        with open(narrativa_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Verifica os 3 atos
        for ato_num in [1, 2, 3]:
            self.assertIn(f"ato: {ato_num}", content)

        # Verifica termos-chave do glossário
        glossary_terms = [
            "IA Estreita (ANI / Narrow AI)",
            "IA Geral (AGI / General AI)",
            "PBIA (Plano Brasileiro de IA 2024–2028)",
            "Marco Legal da IA (PL 2338/2023)",
            "Efeito IA (Invisibilidade / Teorema de Tesler)",
            "Alucinação de Modelo",
            "Super Autocompletar (Previsão de Tokens)"
        ]
        for term in glossary_terms:
            self.assertIn(term, content)

    def test_dossies_completeness(self):
        """Garante que os 4 grandes dossiês estejam presentes em dossies.js."""
        dossies_path = os.path.join(self.submodules_dir, 'dossies.js')
        with open(dossies_path, 'r', encoding='utf-8') as f:
            content = f.read()

        self.assertIn("turingDartmouth", content)
        self.assertIn("teslerAiEffect", content)
        self.assertIn("pbiaBrasil", content)
        self.assertIn("marcoLegal", content)

        # Referências cruciais
        self.assertIn("Alan M. Turing (1950)", content)
        self.assertIn("Larry Tesler", content)
        self.assertIn("Santos Dumont", content)
        self.assertIn("PL 2338/2023", content)
        self.assertIn("LGPD", content)

    def test_faq_contains_9_questions(self):
        """Garante que faq-duvidas.js contenha todas as 9 perguntas com pontoDidatico."""
        faq_path = os.path.join(self.submodules_dir, 'faq-duvidas.js')
        with open(faq_path, 'r', encoding='utf-8') as f:
            content = f.read()

        for q_num in range(1, 10):
            self.assertIn(f"numero: {q_num}", content)
        
        self.assertEqual(content.count("pontoDidatico:"), 9)

    def test_papeis_contains_7_blocks(self):
        """Garante que papeis.js contenha os 7 blocos de dinâmica da aula."""
        papeis_path = os.path.join(self.submodules_dir, 'papeis.js')
        with open(papeis_path, 'r', encoding='utf-8') as f:
            content = f.read()

        for b_num in range(1, 7):
            self.assertIn(f"Bloco {b_num}", content)
        self.assertIn("Intervalo", content)

    def test_global_window_export(self):
        """Garante que encontro1-data.js exporta para window e module."""
        with open(self.encontro1_path, 'r', encoding='utf-8') as f:
            content = f.read()

        self.assertIn("window.ENCONTRO_1_DATA = ENCONTRO_1_DATA", content)
        self.assertIn("window.CURSO_IA_CURRENT_DATA = ENCONTRO_1_DATA", content)
        self.assertIn("module.exports = ENCONTRO_1_DATA", content)

    def test_build_data_script_execution(self):
        """Valida se o compilador de dados scripts/build_data.py executa e compila com sucesso."""
        scripts_dir = os.path.join(self.base_dir, 'scripts')
        build_script = os.path.join(scripts_dir, 'build_data.py')
        self.assertTrue(os.path.exists(build_script), "Script build_data.py ausente em scripts/")

        import sys
        if scripts_dir not in sys.path:
            sys.path.insert(0, scripts_dir)
        import build_data
        result_path1 = build_data.build_meeting_bundle(1, self.base_dir)
        self.assertTrue(os.path.exists(result_path1))
        self.assertGreater(os.path.getsize(result_path1), 5000)

        result_path2 = build_data.build_meeting_bundle(2, self.base_dir)
        self.assertTrue(os.path.exists(result_path2))
        self.assertGreater(os.path.getsize(result_path2), 5000)

    def test_encontro2_submodules_and_bundle(self):
        """Valida a integridade arquitetural dos submódulos e bundle do Encontro 2."""
        submodules_dir2 = os.path.join(self.base_dir, 'static', 'js', 'data', 'encontro-2')
        encontro2_path = os.path.join(self.base_dir, 'static', 'js', 'data', 'encontro2-data.js')

        expected_files = [
            'meta.js', 'narrativa.js', 'dossies.js', 'deck-slides.js',
            'atividades.js', 'faq-duvidas.js', 'papeis.js', 'index.js'
        ]
        for fname in expected_files:
            fpath = os.path.join(submodules_dir2, fname)
            self.assertTrue(os.path.exists(fpath), f"Arquivo do Encontro 2 ausente: {fname}")

        self.assertTrue(os.path.exists(encontro2_path))
        with open(encontro2_path, 'r', encoding='utf-8') as f:
            content = f.read()
        self.assertIn("window.ENCONTRO_2_DATA = ENCONTRO_2_DATA", content)
        self.assertIn("moduloInfo:", content)
        self.assertIn("slidesComNotas:", content)
        self.assertIn("https://arxiv.org/html/2306.04528", content)
        self.assertIn("https://pmc.ncbi.nlm.nih.gov/articles/PMC12396994/", content)

    def test_pdf_export_and_print_styles_integrity(self):
        """Valida se o projector.css e projector-engine.js contêm contratos de exportação e impressão limpa."""
        projector_css = os.path.join(self.base_dir, 'static', 'css', 'projector.css')
        self.assertTrue(os.path.exists(projector_css), "Arquivo projector.css ausente")
        with open(projector_css, 'r', encoding='utf-8') as f:
            css = f.read()

        self.assertIn("@media print", css, "projector.css deve conter bloco @media print")
        self.assertIn("size: A4 landscape", css, "projector.css deve configurar A4 landscape para exportação")
        self.assertIn("print-color-adjust: exact", css, "projector.css deve preservar cores de impressão")
        self.assertIn("export-mode", css, "projector.css deve conter suporte a .export-mode")
        self.assertIn("break-after: page", css, "projector.css deve conter quebra de página por slide")

        projector_js = os.path.join(self.base_dir, 'static', 'js', 'projector-engine.js')
        self.assertTrue(os.path.exists(projector_js), "Arquivo projector-engine.js ausente")
        with open(projector_js, 'r', encoding='utf-8') as f:
            js = f.read()

        self.assertIn("buildSlideHTML", js, "projector-engine.js deve conter a função modular buildSlideHTML")
        self.assertIn("mode", js)
        self.assertIn("export", js)

        slides_html = os.path.join(self.base_dir, 'templates', 'slides.html')
        self.assertTrue(os.path.exists(slides_html), "templates/slides.html ausente")
        with open(slides_html, 'r', encoding='utf-8') as f:
            html = f.read()
        self.assertIn("btn-prev", html)
        self.assertIn("btn-next", html)
        self.assertIn("btn-close-projector", html)

        export_script = os.path.join(self.base_dir, 'scripts', 'export_pdf.py')
        self.assertTrue(os.path.exists(export_script), "scripts/export_pdf.py deve existir")
        with open(export_script, 'r', encoding='utf-8') as f:
            script_code = f.read()
        self.assertIn("generate_slides_pdf", script_code)

    def test_encontro3_aula_privada_integrity(self):
        """Valida que o Encontro 3 é exclusivamente um anúncio de Aula privada com aluno."""
        submodules_dir3 = os.path.join(self.base_dir, 'static', 'js', 'data', 'encontro-3')
        encontro3_path = os.path.join(self.base_dir, 'static', 'js', 'data', 'encontro3-data.js')

        self.assertTrue(os.path.exists(encontro3_path))
        with open(encontro3_path, 'r', encoding='utf-8') as f:
            content = f.read()

        self.assertIn("window.ENCONTRO_3_DATA = ENCONTRO_3_DATA", content)
        self.assertIn("Aula privada com aluno", content)
        self.assertIn("isAulaPrivada: true", content)

    def test_encontro4_submodules_and_bundle_integrity(self):
        """Valida que o Encontro 4 recebeu com fidelidade o conteúdo de ChatGPT na Prática."""
        submodules_dir4 = os.path.join(self.base_dir, 'static', 'js', 'data', 'encontro-4')
        encontro4_path = os.path.join(self.base_dir, 'static', 'js', 'data', 'encontro4-data.js')

        expected_files = [
            'meta.js', 'narrativa.js', 'dossies.js', 'deck-slides.js',
            'atividades.js', 'faq-duvidas.js', 'papeis.js', 'index.js'
        ]
        for fname in expected_files:
            fpath = os.path.join(submodules_dir4, fname)
            self.assertTrue(os.path.exists(fpath), f"Arquivo do Encontro 4 ausente: {fname}")

        self.assertTrue(os.path.exists(encontro4_path))
        with open(encontro4_path, 'r', encoding='utf-8') as f:
            content = f.read()

        self.assertIn("window.ENCONTRO_4_DATA = ENCONTRO_4_DATA", content)
        self.assertIn("ChatGPT na Prática", content)
        self.assertIn("C-T-F-R", content)

    def test_meetings_data_in_app(self):
        """Valida o cronograma oficial em MEETINGS_DATA em app.py para os Módulos 3 e 4."""
        import app
        m3 = app.MEETINGS_DATA.get(3)
        self.assertIsNotNone(m3)
        self.assertFalse(m3.get('isReady'))
        self.assertFalse(m3.get('isAccessible'))
        self.assertIn("Aula privada com aluno", m3.get('title'))
        self.assertEqual(m3.get('statusBadge'), "🔒 Inacessível")

        m4 = app.MEETINGS_DATA.get(4)
        self.assertIsNotNone(m4)
        self.assertTrue(m4.get('isReady'))
        self.assertIn("ChatGPT na Prática", m4.get('title'))

    def test_modulo3_inaccessible_redirect(self):
        """Valida que acessar diretamente as rotas do Módulo 3 redireciona para o dashboard."""
        import app
        app.app.config['TESTING'] = True
        client = app.app.test_client()
        with client.session_transaction() as sess:
            sess['user'] = 'laura'

        resp_cockpit = client.get('/encontro/3')
        self.assertEqual(resp_cockpit.status_code, 302)
        self.assertIn('/', resp_cockpit.headers['Location'])

        resp_slides = client.get('/slides/3')
        self.assertEqual(resp_slides.status_code, 302)
        self.assertIn('/', resp_slides.headers['Location'])

if __name__ == '__main__':
    unittest.main()
