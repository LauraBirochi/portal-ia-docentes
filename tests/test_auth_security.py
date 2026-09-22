"""
Suíte de Testes Automatizados de Segurança, Autenticação e RBAC
Baseado nas diretrizes de: hunt-auth-bypass, hunt-session, hunt-open-redirect, hunt-clickjacking
"""

import sys
import os
import json
import unittest
import urllib.parse

# Garante que o diretório raiz do projeto esteja no sys.path para execução direta
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app import app, USERS_DB

class TestAuthAndSecurity(unittest.TestCase):
    def setUp(self):
        app.config['TESTING'] = True
        app.config['SECRET_KEY'] = 'test-secret-key-12345'
        self.client = app.test_client()

    # ==========================================================================
    # 1. HUNT-AUTH-BYPASS: Proteção Estrita de Rotas & APIs
    # ==========================================================================
    def test_unauthenticated_dashboard_redirects_to_login(self):
        """Acesso não autenticado à raiz deve redirecionar para /login com next."""
        res = self.client.get('/')
        self.assertEqual(res.status_code, 302)
        self.assertIn('/login', res.headers['Location'])
        unquoted_loc = urllib.parse.unquote(res.headers['Location'])
        self.assertIn('next=/', unquoted_loc)

    def test_unauthenticated_cockpit_redirects_to_login(self):
        """Acesso não autenticado ao cockpit de um encontro deve redirecionar para /login."""
        res = self.client.get('/encontro/1')
        self.assertEqual(res.status_code, 302)
        self.assertIn('/login', res.headers['Location'])
        unquoted_loc = urllib.parse.unquote(res.headers['Location'])
        self.assertIn('next=/encontro/1', unquoted_loc)

    def test_unauthenticated_slides_redirects_to_login(self):
        """Acesso não autenticado aos slides deve redirecionar para /login."""
        res = self.client.get('/slides/1')
        self.assertEqual(res.status_code, 302)
        self.assertIn('/login', res.headers['Location'])
        unquoted_loc = urllib.parse.unquote(res.headers['Location'])
        self.assertIn('next=/slides/1', unquoted_loc)

    def test_unauthenticated_api_returns_401_json(self):
        """Acesso não autenticado a endpoints /api/... deve retornar 401 JSON (não redirect HTML)."""
        res = self.client.get('/api/encontros')
        self.assertEqual(res.status_code, 401)
        data = res.get_json()
        self.assertEqual(data.get('error'), 'Unauthorized')

    def test_unauthenticated_auth_status_returns_401(self):
        """Verificação de status da sessão sem login deve retornar 401."""
        res = self.client.get('/api/auth/status')
        self.assertEqual(res.status_code, 401)

    # ==========================================================================
    # 2. AUTENTICAÇÃO DOS 3 USUÁRIOS & CREDENCIAIS
    # ==========================================================================
    def test_login_page_renders_successfully(self):
        """A página /login deve renderizar normalmente com status 200."""
        res = self.client.get('/login')
        self.assertEqual(res.status_code, 200)
        self.assertIn('Portal de Apoio Docente'.encode('utf-8'), res.data)
        self.assertIn('Acessar Cockpit Docente'.encode('utf-8'), res.data)

    def test_login_with_invalid_credentials_fails(self):
        """Tentativa de login com senha incorreta deve falhar com status 401 e flash de erro."""
        res = self.client.post('/login', data={
            'username': 'laura',
            'password': 'senha_errada_123'
        })
        self.assertEqual(res.status_code, 401)
        self.assertIn('Usuário ou senha incorretos'.encode('utf-8'), res.data)

    def test_login_user1_laura_success(self):
        """Usuário 1 (Laura) autentica com sucesso e acessa dashboard."""
        res = self.client.post('/login', data={
            'username': 'laura',
            'password': os.getenv('USER1_PASSWORD', 'docente@laura2026')
        }, follow_redirects=True)
        self.assertEqual(res.status_code, 200)
        self.assertIn('Laura'.encode('utf-8'), res.data)
        self.assertIn('Minicurso de IA'.encode('utf-8'), res.data)

    def test_login_user2_maria_success(self):
        """Usuário 2 (Maria) autentica com sucesso e acessa dashboard."""
        res = self.client.post('/login', data={
            'username': 'maria',
            'password': os.getenv('USER2_PASSWORD', 'docente@maria2026')
        }, follow_redirects=True)
        self.assertEqual(res.status_code, 200)
        self.assertIn('Maria'.encode('utf-8'), res.data)

    def test_login_user3_lucio_success(self):
        """Usuário 3 (Lúcio - Coordenação) autentica com sucesso."""
        res = self.client.post('/login', data={
            'username': 'lucio',
            'password': os.getenv('USER3_PASSWORD', 'coord@lucio2026')
        }, follow_redirects=True)
        self.assertEqual(res.status_code, 200)
        self.assertIn('Lúcio Rodrigo'.encode('utf-8'), res.data)

    # ==========================================================================
    # 3. RBAC: VISÕES DIFERENCIADAS & EXPORTAÇÃO DE PARECER STATELESS
    # ==========================================================================
    def test_coordinator_view_cockpit_tabs(self):
        """Coordenador vê Fio da Meada, Slides e Parecer, mas não vê Atividades/Perguntas exclusivas de aula."""
        # Login como Lúcio (Coordenador)
        self.client.post('/login', data={
            'username': 'lucio',
            'password': os.getenv('USER3_PASSWORD', 'coord@lucio2026')
        })
        res = self.client.get('/encontro/1')
        self.assertEqual(res.status_code, 200)
        # Deve ter Parecer do Professor em modo stateless com botão de exportação TXT
        self.assertIn('Parecer do Professor'.encode('utf-8'), res.data)
        self.assertIn('btn-export-notes'.encode('utf-8'), res.data)
        self.assertIn('Exportar Parecer (.txt)'.encode('utf-8'), res.data)
        # Não deve ter botões de salvar/excluir no servidor
        self.assertNotIn('btn-save-parecer'.encode('utf-8'), res.data)
        self.assertNotIn('btn-delete-parecer'.encode('utf-8'), res.data)
        # Não deve renderizar o painel exclusivo de gabarito para coordenação
        self.assertNotIn('PAINEL 3: 🧪 ATIVIDADES & GABARITO COMENTADO (DOCENTES ONLY)'.encode('utf-8'), res.data)

    def test_docente_view_cockpit_tabs(self):
        """Docente (Laura) vê todas as abas, divisão docente e exportação TXT."""
        # Login como Laura (Docente)
        self.client.post('/login', data={
            'username': 'laura',
            'password': os.getenv('USER1_PASSWORD', 'docente@laura2026')
        })
        res = self.client.get('/encontro/1')
        self.assertEqual(res.status_code, 200)
        # Deve ter todas as abas
        self.assertIn('Atividades & Gabarito'.encode('utf-8'), res.data)
        self.assertIn('Perguntas dos Alunos'.encode('utf-8'), res.data)
        self.assertIn('Parecer do Professor'.encode('utf-8'), res.data)
        self.assertIn('btn-export-notes'.encode('utf-8'), res.data)
        self.assertIn('cockpit-papeis-container'.encode('utf-8'), res.data)

    def test_parecer_api_routes_are_removed(self):
        """Rotas de persistência de parecer /api/parecer/1 foram removidas (arquitetura 100% stateless)."""
        self.client.post('/login', data={
            'username': 'lucio',
            'password': os.getenv('USER3_PASSWORD', 'coord@lucio2026')
        })
        res_get = self.client.get('/api/parecer/1')
        self.assertEqual(res_get.status_code, 404)

        res_post = self.client.post('/api/parecer/1', data={'texto': 'teste'})
        self.assertEqual(res_post.status_code, 404)

    # ==========================================================================
    # 4. HUNT-OPEN-REDIRECT: Sanitização Rigorosa do Parâmetro 'next'
    # ==========================================================================
    def test_open_redirect_external_domain_blocked(self):
        """Tentativa de Open Redirect para domínio externo malicioso deve ser bloqueada."""
        res = self.client.post('/login', data={
            'username': 'laura',
            'password': os.getenv('USER1_PASSWORD', 'docente@laura2026'),
            'next': 'https://malicious-phishing-site.com/steal'
        })
        self.assertEqual(res.status_code, 302)
        self.assertNotIn('malicious-phishing-site.com', res.headers['Location'])
        self.assertTrue(res.headers['Location'].endswith('/'))

    def test_open_redirect_protocol_relative_blocked(self):
        """Tentativa de bypass via //evil.com deve ser bloqueada."""
        res = self.client.post('/login', data={
            'username': 'laura',
            'password': os.getenv('USER1_PASSWORD', 'docente@laura2026'),
            'next': '//evil.com'
        })
        self.assertEqual(res.status_code, 302)
        self.assertNotIn('evil.com', res.headers['Location'])

    def test_safe_internal_redirect_allowed(self):
        """Redirecionamento para rota interna válida (ex: /encontro/1) deve ser permitido."""
        res = self.client.post('/login', data={
            'username': 'laura',
            'password': os.getenv('USER1_PASSWORD', 'docente@laura2026'),
            'next': '/encontro/1'
        })
        self.assertEqual(res.status_code, 302)
        self.assertEqual(res.headers['Location'], '/encontro/1')

    # ==========================================================================
    # 5. HUNT-SESSION: Gestão de Sessão, Invalidação & Logout
    # ==========================================================================
    def test_session_lifecycle_and_logout(self):
        """Ciclo de vida completo: Login -> Acesso Autorizado -> Logout -> Bloqueio."""
        self.client.post('/login', data={
            'username': 'laura',
            'password': os.getenv('USER1_PASSWORD', 'docente@laura2026')
        })

        status_res = self.client.get('/api/auth/status')
        self.assertEqual(status_res.status_code, 200)
        self.assertEqual(status_res.get_json()['username'], 'laura')

        logout_res = self.client.get('/logout')
        self.assertEqual(logout_res.status_code, 302)

        dashboard_res = self.client.get('/')
        self.assertEqual(dashboard_res.status_code, 302)
        self.assertIn('/login', dashboard_res.headers['Location'])

        api_res = self.client.get('/api/auth/status')
        self.assertEqual(api_res.status_code, 401)

    # ==========================================================================
    # 6. HUNT-CLICKJACKING & HEADERS DE SEGURANÇA
    # ==========================================================================
    def test_security_headers_present(self):
        """Verifica se headers defensivos contra clickjacking e sniffing são enviados."""
        res = self.client.get('/login')
        self.assertEqual(res.headers.get('X-Frame-Options'), 'SAMEORIGIN')
        self.assertEqual(res.headers.get('X-Content-Type-Options'), 'nosniff')
        self.assertEqual(res.headers.get('Referrer-Policy'), 'strict-origin-when-cross-origin')


if __name__ == '__main__':
    unittest.main()
