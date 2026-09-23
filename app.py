"""
Portal de Apoio Docente & Co-Docência – Minicurso de Inteligência Artificial (32h)
Servidor Flask 100% Stateless com autenticação segura e controle de papéis (RBAC).
"""

import os
import secrets
import functools
import urllib.parse
from dotenv import load_dotenv
from flask import (
    Flask, render_template, jsonify, request, redirect,
    url_for, session, flash
)
from werkzeug.security import generate_password_hash, check_password_hash

# Carrega variáveis de ambiente do .env
load_dotenv()

app = Flask(__name__)

# ==============================================================================
# CONFIGURAÇÕES DE SEGURANÇA E SESSÃO (hunt-session & hunt-source-leak)
# ==============================================================================
app.secret_key = os.getenv('SECRET_KEY') or secrets.token_hex(32)

# Proteção de Cookies de Sessão
app.config.update(
    SESSION_COOKIE_HTTPONLY=True,           # Impede leitura do cookie via JavaScript (anti-XSS token theft)
    SESSION_COOKIE_SAMESITE='Lax',          # Protege contra requisições cross-site não intencionais (anti-CSRF)
    SESSION_COOKIE_SECURE=(
        os.getenv('FLASK_ENV') == 'production' or 
        os.getenv('COOKIE_SECURE', 'false').lower() in ('true', '1')
    ),                                      # Transmite o cookie apenas por HTTPS em produção
    PERMANENT_SESSION_LIFETIME=60 * 60 * 8  # Sessão ativa por 8 horas de trabalho docente
)

# ==============================================================================
# BASE DE USUÁRIOS AUTORIZADOS (3 Usuários com Senhas Criptografadas)
# ==============================================================================
def load_authorized_users():
    """Carrega os 3 usuários autorizados a partir das variáveis de ambiente."""
    users = {}
    
    # Usuário 1 (Docente: Laura)
    u1_user = os.getenv('USER1_USERNAME', 'laura').strip().lower()
    u1_name = os.getenv('USER1_NAME', 'Laura')
    u1_pass = os.getenv('USER1_PASSWORD', 'docente@laura2026')
    u1_role = os.getenv('USER1_ROLE', 'Docente')
    users[u1_user] = {
        "username": u1_user,
        "name": u1_name,
        "password_hash": generate_password_hash(u1_pass, method='pbkdf2:sha256'),
        "role": u1_role
    }

    # Usuário 2 (Docente: Maria)
    u2_user = os.getenv('USER2_USERNAME', 'maria').strip().lower()
    u2_name = os.getenv('USER2_NAME', 'Maria')
    u2_pass = os.getenv('USER2_PASSWORD', 'docente@maria2026')
    u2_role = os.getenv('USER2_ROLE', 'Docente')
    users[u2_user] = {
        "username": u2_user,
        "name": u2_name,
        "password_hash": generate_password_hash(u2_pass, method='pbkdf2:sha256'),
        "role": u2_role
    }

    # Usuário 3 (Coordenação: Lúcio)
    u3_user = os.getenv('USER3_USERNAME', 'lucio').strip().lower()
    u3_name = os.getenv('USER3_NAME', 'Lúcio Rodrigo')
    u3_pass = os.getenv('USER3_PASSWORD', 'coord@lucio2026')
    u3_role = os.getenv('USER3_ROLE', 'Coordenação')
    users[u3_user] = {
        "username": u3_user,
        "name": u3_name,
        "password_hash": generate_password_hash(u3_pass, method='pbkdf2:sha256'),
        "role": u3_role
    }

    return users

USERS_DB = load_authorized_users()




# ==============================================================================
# UTILITÁRIOS DE SEGURANÇA E DECORADORES (hunt-auth-bypass, RBAC, hunt-open-redirect)
# ==============================================================================
def is_safe_url(target):
    """
    Garante que a URL de redirecionamento (ex: ?next=...) seja interna e segura.
    Impede ataques de Open Redirect para domínios de phishing externos.
    """
    if not target or not isinstance(target, str):
        return False
    
    target_clean = target.strip()
    
    if target_clean.startswith('//') or '\\' in target_clean:
        return False
    
    if target_clean.startswith('/') and not target_clean.startswith('//'):
        ref_url = urllib.parse.urlparse(request.host_url)
        test_url = urllib.parse.urlparse(urllib.parse.urljoin(request.host_url, target_clean))
        return test_url.scheme in ('http', 'https') and ref_url.netloc == test_url.netloc

    return False


def login_required(f):
    """
    Decorador para proteger rotas contra acesso não autorizado (hunt-auth-bypass).
    """
    @functools.wraps(f)
    def decorated_function(*args, **kwargs):
        current_username = session.get('user')
        if not current_username or current_username not in USERS_DB:
            if request.path.startswith('/api/'):
                return jsonify({
                    "error": "Unauthorized",
                    "message": "Autenticação obrigatória para acessar este recurso."
                }), 401
            
            next_url = request.full_path if request.method == 'GET' else request.path
            if next_url.endswith('?'):
                next_url = next_url[:-1]
            
            return redirect(url_for('login', next=next_url))
        return f(*args, **kwargs)
    return decorated_function





@app.context_processor
def inject_auth_context():
    """Injeta os dados do usuário autenticado e papéis em todos os templates Jinja2."""
    username = session.get('user')
    user_data = USERS_DB.get(username) if username else None
    is_coord = (user_data.get('role') == 'Coordenação') if user_data else False
    return {
        'current_user': user_data,
        'current_username': username,
        'is_authenticated': user_data is not None,
        'is_coordinator': is_coord
    }


@app.after_request
def set_security_headers(response):
    """
    Injeta cabeçalhos defensivos HTTP contra Clickjacking e Sniffing (hunt-clickjacking).
    """
    response.headers['X-Frame-Options'] = 'SAMEORIGIN'
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-XSS-Protection'] = '1; mode=block'
    response.headers['Referrer-Policy'] = 'strict-origin-when-cross-origin'
    return response


# ==============================================================================
# DADOS ESTRUTURADOS DO CURSO E EQUIPE
# ==============================================================================
MEETINGS_DATA = {
    1: {
        "num": 1,
        "date": "09 de Outubro",
        "duration": "3 Horas Presenciais",
        "location": "Laboratório X",
        "title": "Encontro 1: A gênese da Inteligência Artificial, tipos, modelos e exemplos de uso. Ética na utilização da IAGen. Oportunidades e desafios.",
        "desc": "Desmistificação dos mitos do cinema vs. IA real, introdução à história e evolução dos modelos, aplicações cotidianas invisíveis e debate crítico sobre ética, oportunidades e desafios no uso de IA Generativa.",
        "statusBadge": "🟢 Cockpit Liberado",
        "isReady": True,
        "actionTip": "Módulo 1 totalmente formatado com Fio da Meada, Slides, Gabarito e Perguntas dos Alunos."
    },
    2: {
        "num": 2,
        "date": "23 de Outubro",
        "duration": "3 Horas Presenciais",
        "location": "Laboratório X",
        "title": "Encontro 2: Como acessar os modelos de IAGen. Criação de prompts básicos.",
        "desc": "Visão prática das principais plataformas e modelos de IA Generativa. Primeiros passos na formulação de instruções claras, contextualização e construção de prompts iniciais.",
        "statusBadge": "🟡 Em Planejamento",
        "isReady": False,
        "actionTip": "Roteiro e dinâmicas de laboratório em fase de alinhamento com a Coordenação."
    },
    3: {
        "num": 3,
        "date": "30 de Outubro",
        "duration": "3 Horas Presenciais",
        "location": "Laboratório X",
        "title": "Encontro 3: Criação de prompts.",
        "desc": "Aprofundamento na engenharia de instrução: papéis, contexto, restrições, personas docentes e técnicas de refinamento iterativo para respostas de alta qualidade.",
        "statusBadge": "🟡 Em Planejamento",
        "isReady": False,
        "actionTip": "Material pedagógico e exercícios em elaboração pela dupla docente."
    },
    4: {
        "num": 4,
        "date": "06 de Novembro",
        "duration": "3 Horas Presenciais",
        "location": "Laboratório X",
        "title": "Encontro 4: Criação de prompts.",
        "desc": "Técnicas intermediárias e avançadas de prompt: estruturação de saídas em tabelas e markdown, raciocínio passo a passo e resolução orientada de problemas.",
        "statusBadge": "⚪ Sequência",
        "isReady": False,
        "actionTip": "Encontro programado na sequência da grade curricular (32h)."
    },
    5: {
        "num": 5,
        "date": "13 de Novembro",
        "duration": "3 Horas Presenciais",
        "location": "Laboratório X",
        "title": "Encontro 5: Criação de prompts.",
        "desc": "Oficina prática de prompts para apoio a estudos, redação, sínteses e rotinas de produtividade com foco no olhar crítico e prevenção de alucinações.",
        "statusBadge": "⚪ Sequência",
        "isReady": False,
        "actionTip": "Encontro programado na sequência da grade curricular (32h)."
    },
    6: {
        "num": 6,
        "date": "27 de Novembro",
        "duration": "3 Horas Presenciais",
        "location": "Laboratório X",
        "title": "Encontro 6: Criação de prompts.",
        "desc": "Refinamento prático, comparação de comportamento entre diferentes modelos e estratégias para criar fluxos contínuos e consistentes com IAGen.",
        "statusBadge": "⚪ Sequência",
        "isReady": False,
        "actionTip": "Encontro programado na sequência da grade curricular (32h)."
    },
    7: {
        "num": 7,
        "date": "04 de Dezembro",
        "duration": "3 Horas Presenciais",
        "location": "Laboratório X",
        "title": "Encontro 7: Fechamento do curso e avaliação.",
        "desc": "Consolidação das aprendizagens, apresentação das produções dos estudantes, avaliação reflexiva e encerramento oficial com certificação de 32 horas.",
        "statusBadge": "⚪ Encerramento",
        "isReady": False,
        "actionTip": "Encontro final de fechamento, síntese e avaliação formativa."
    }
}

CO_TEACHING_TEAM = {
    "docentes": "Laura & Maria (Co-docência)",
    "coordenacao": "Lúcio Rodrigo de Carvalho",
    "local": "Laboratório X",
    "horas_totais": "32 Horas Totais",
    "horas_detalhes": "7 Encontros Presenciais de 3h (21h) + 11h Autônomas"
}


# ==============================================================================
# ROTAS DE AUTENTICAÇÃO (LOGIN & LOGOUT)
# ==============================================================================
@app.route('/login', methods=['GET', 'POST'])
def login():
    """Tela de login e processamento de credenciais."""
    # Se o usuário já estiver logado e acessar via GET, redireciona ao dashboard
    if request.method == 'GET' and session.get('user') in USERS_DB:
        return redirect(url_for('dashboard'))

    next_target = request.args.get('next', '')

    if request.method == 'POST':
        username = (request.form.get('username') or '').strip().lower()
        password = request.form.get('password') or ''
        form_next = request.form.get('next', '').strip()

        # Proteção contra Session Fixation: limpa qualquer sessão pré-existente
        session.clear()

        user_record = USERS_DB.get(username)

        # Validação segura com hash PBKDF2/SHA256
        if user_record and check_password_hash(user_record['password_hash'], password):
            session['user'] = username
            session.permanent = True

            if form_next and is_safe_url(form_next):
                return redirect(form_next)
            return redirect(url_for('dashboard'))
        else:
            flash("Usuário ou senha incorretos. Por favor, tente novamente.", "error")
            return render_template('login.html', next=form_next or next_target, initial_user=username), 401

    return render_template('login.html', next=next_target)



@app.route('/logout')
def logout():
    """Encerra a sessão atual com invalidação completa (hunt-session)."""
    session.clear()
    flash("Sua sessão foi encerrada com segurança.", "info")
    return redirect(url_for('login'))


# ==============================================================================
# ROTAS PRINCIPAIS PROTEGIDAS (@login_required)
# ==============================================================================
@app.route('/')
@login_required
def dashboard():
    """Rota principal: Renderiza o Dashboard Geral."""
    return render_template(
        'index.html',
        meetings=MEETINGS_DATA,
        team=CO_TEACHING_TEAM,
        active_view='dashboard',
        active_meeting_id=1
    )


@app.route('/encontro/<int:meeting_id>')
@login_required
def cockpit(meeting_id):
    """Rota dedicada ao Cockpit de um encontro específico."""
    meeting = MEETINGS_DATA.get(meeting_id, MEETINGS_DATA[1])
    return render_template(
        'index.html',
        meetings=MEETINGS_DATA,
        team=CO_TEACHING_TEAM,
        active_view='cockpit',
        active_meeting=meeting,
        active_meeting_id=meeting_id
    )


@app.route('/slides')
@app.route('/slides/<int:meeting_id>')
@login_required
def slides(meeting_id=1):
    """Rota para abertura dos slides no projetor (tela cheia)."""
    meeting = MEETINGS_DATA.get(meeting_id, MEETINGS_DATA[1])
    return render_template('slides.html', meeting=meeting, meeting_id=meeting_id)


# ==============================================================================
# APIS JSON PROTEGIDAS (@login_required & RBAC)
# ==============================================================================
@app.route('/api/encontros')
@login_required
def api_encontros():
    """API JSON para listar todos os encontros."""
    return jsonify(MEETINGS_DATA)


@app.route('/api/encontros/<int:meeting_id>')
@login_required
def api_encontro(meeting_id):
    """API JSON com dados de um encontro específico."""
    meeting = MEETINGS_DATA.get(meeting_id)
    if meeting:
        return jsonify(meeting)
    return jsonify({"error": "Encontro não encontrado"}), 404


@app.route('/api/auth/status')
@login_required
def api_auth_status():
    """Endpoint para verificar status da sessão e papel ativo."""
    username = session.get('user')
    user_record = USERS_DB.get(username, {})
    return jsonify({
        "authenticated": True,
        "username": username,
        "name": user_record.get('name'),
        "role": user_record.get('role'),
        "is_coordinator": user_record.get('role') == 'Coordenação'
    })





if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    debug_mode = os.environ.get('FLASK_ENV') != 'production'
    app.run(debug=debug_mode, host='127.0.0.1', port=port)

