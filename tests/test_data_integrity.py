"""
Suíte de Testes Automatizados de Integridade da Camada de Dados (Encontro 1)
Valida se a estrutura modular e o bundle unificado contêm todos os dados pedagógicos.
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

    def test_bundle_contains_all_27_slides(self):
        """Garante que o bundle principal contenha exatamente os 27 slides numerados de 1 a 27."""
        with open(self.encontro1_path, 'r', encoding='utf-8') as f:
            content = f.read()

        for slide_num in range(1, 28):
            pattern = rf'numero:\s*{slide_num}\b'
            self.assertTrue(
                bool(re.search(pattern, content)),
                f"Slide {slide_num} ausente em encontro1-data.js"
            )

    def test_submodule_deck_contains_all_27_slides(self):
        """Garante que o submódulo deck-slides.js contenha todos os 27 slides."""
        deck_path = os.path.join(self.submodules_dir, 'deck-slides.js')
        with open(deck_path, 'r', encoding='utf-8') as f:
            content = f.read()

        for slide_num in range(1, 28):
            pattern = rf'numero:\s*{slide_num}\b'
            self.assertTrue(
                bool(re.search(pattern, content)),
                f"Slide {slide_num} ausente em deck-slides.js"
            )

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

if __name__ == '__main__':
    unittest.main()
