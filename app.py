"""
Portal de Apoio Docente & Co-Docência – Minicurso de Inteligência Artificial (32h)
Servidor Flask 100% Stateless com autenticação segura e controle de papéis (RBAC).
"""

import os
import secrets
import warnings
import functools
import urllib.parse
from typing import Dict, Any, Callable
from dotenv import load_dotenv
from flask import (
    Flask, render_template, jsonify, request, redirect,
    url_for, session, flash, Response, send_file, abort
)
from werkzeug.security import generate_password_hash, check_password_hash

# Carrega variáveis de ambiente do .env
load_dotenv()

app = Flask(__name__)

# ==============================================================================
# CONFIGURAÇÕES DE SEGURANÇA E SESSÃO (hunt-session & hunt-source-leak)
# ==============================================================================
_env_secret_key = os.getenv('SECRET_KEY')
if not _env_secret_key and os.getenv('FLASK_ENV') == 'production':
    warnings.warn(
        "SECRET_KEY não definida em ambiente de produção! "
        "Defina SECRET_KEY no ambiente para evitar invalidação de sessões entre workers.",
        RuntimeWarning
    )
app.secret_key = _env_secret_key or secrets.token_hex(32)

# Proteção de Cookies de Sessão
app.config.update(
    SESSION_COOKIE_HTTPONLY=True,           # Impede leitura do cookie via JavaScript (anti-XSS token theft)
    SESSION_COOKIE_SAMESITE='Lax',          # Protege contra requisições cross-site não intencionais (anti-CSRF)
    SESSION_COOKIE_SECURE=(
        os.getenv('FLASK_ENV') == 'production' or
        os.getenv('COOKIE_SECURE', 'false').lower() in ('true', '1')
    ),                                      # Transmite o cookie apenas por HTTPS em produção
    PERMANENT_SESSION_LIFETIME=int(os.getenv('SESSION_LIFETIME_SECONDS', 60 * 60 * 8))
)

# ==============================================================================
# BASE DE USUÁRIOS AUTORIZADOS (3 Usuários com Senhas Criptografadas)
# ==============================================================================
DEFAULT_USERS_SPEC = (
    (1, 'laura', 'Laura', 'docente@laura2026', 'Docente'),
    (2, 'maria', 'Maria', 'docente@maria2026', 'Docente'),
    (3, 'lucio', 'Lúcio Rodrigo', 'coord@lucio2026', 'Coordenação'),
)


def load_authorized_users() -> Dict[str, Dict[str, str]]:
    """Carrega os usuários autorizados a partir das variáveis de ambiente."""
    users: Dict[str, Dict[str, str]] = {}
    for idx, default_user, default_name, default_pass, default_role in DEFAULT_USERS_SPEC:
        username = os.getenv(f'USER{idx}_USERNAME', default_user).strip().lower()
        name = os.getenv(f'USER{idx}_NAME', default_name)
        password = os.getenv(f'USER{idx}_PASSWORD', default_pass)
        role = os.getenv(f'USER{idx}_ROLE', default_role)
        users[username] = {
            "username": username,
            "name": name,
            "password_hash": generate_password_hash(password, method='pbkdf2:sha256'),
            "role": role
        }
    return users


USERS_DB: Dict[str, Dict[str, str]] = load_authorized_users()


# ==============================================================================
# UTILITÁRIOS DE SEGURANÇA E DECORADORES (hunt-auth-bypass, RBAC, hunt-open-redirect)
# ==============================================================================
def is_safe_url(target: Any) -> bool:
    """
    Garante que a URL de redirecionamento (ex: ?next=...) seja interna e segura.
    Impede ataques de Open Redirect para domínios de phishing externos.
    """
    if not target or not isinstance(target, str):
        return False

    target_clean = target.strip()

    if target_clean.startswith('//') or '\\' in target_clean:
        return False

    if target_clean.startswith('/'):
        ref_url = urllib.parse.urlparse(request.host_url)
        test_url = urllib.parse.urlparse(urllib.parse.urljoin(request.host_url, target_clean))
        return test_url.scheme in ('http', 'https') and ref_url.netloc == test_url.netloc

    return False


def login_required(f: Callable) -> Callable:
    """
    Decorador para proteger rotas contra acesso não autorizado (hunt-auth-bypass).
    """
    @functools.wraps(f)
    def decorated_function(*args: Any, **kwargs: Any) -> Any:
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
def inject_auth_context() -> Dict[str, Any]:
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
def set_security_headers(response: Response) -> Response:
    """
    Injeta cabeçalhos defensivos HTTP contra Clickjacking e Sniffing (hunt-clickjacking).
    """
    response.headers['X-Frame-Options'] = 'SAMEORIGIN'
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-XSS-Protection'] = '1; mode=block'
    response.headers['Referrer-Policy'] = 'strict-origin-when-cross-origin'
    return response


# ==============================================================================
# DADOS ESTRUTURADOS DO CURSO E EQUIPE (FONTE ÚNICA DA VERDADE)
# ==============================================================================
MEETINGS_DATA: Dict[int, Dict[str, Any]] = {
    1: {
        "num": 1,
        "date": "09/10",
        "duration": "3 Horas Presenciais",
        "location": "Laboratório X",
        "shortTitle": "Gênese da IA & Ética",
        "title": "Módulo 1 (09/10): A gênese da Inteligência Artificial, tipos, modelos e exemplos de uso. Ética na utilização da IAGen. Oportunidades e desafios.",
        "desc": "Desmistificação dos mitos do cinema vs. IA real, introdução à história e evolução dos modelos, aplicações cotidianas invisíveis e debate crítico sobre ética, oportunidades e desafios no uso de IA Generativa.",
        "statusBadge": "🟢 Cockpit Liberado",
        "isReady": True,
        "actionTip": "Módulo 1 totalmente formatado com Fio da Meada, Slides, Prova Diagnóstica e Perguntas dos Alunos."
    },
    2: {
        "num": 2,
        "date": "30/10",
        "duration": "3 Horas Presenciais",
        "location": "Laboratório X",
        "shortTitle": "O Salto da IA Generativa",
        "title": "Módulo 2 (30/10): O Salto da IA Generativa – Como acessar os modelos de IAGen, funcionamento das LLMs e criação de prompts básicos.",
        "desc": "Visão prática das principais plataformas e modelos de IA Generativa, compreensão descomplicada do funcionamento das LLMs (previsão de tokens) e criação dos primeiros prompts básicos em laboratório.",
        "statusBadge": "🟢 Cockpit Liberado",
        "isReady": True,
        "actionTip": "Módulo 2 estruturado com Fio da Meada, 30 Slides no Projetor, Oficina de Laboratório e FAQ."
    },
    3: {
        "num": 3,
        "date": "06/11",
        "duration": "3 Horas Presenciais",
        "location": "Laboratório X",
        "shortTitle": "A Arte do Prompt (PCTFR)",
        "title": "Módulo 3 (06/11): A Arte do Prompt – Engenharia de instruções, estrutura PCTFR (Papel, Contexto, Tarefa, Formato e Restrições) e refinamento iterativo.",
        "desc": "Aprofundamento na engenharia de instruções com aplicação prática do método PCTFR (Papel, Contexto, Tarefa, Formato e Restrições) e técnicas de refinamento iterativo para respostas de alta precisão.",
        "statusBadge": "🟡 Em Planejamento",
        "isReady": False,
        "actionTip": "Material pedagógico e exercícios em elaboração pela dupla docente."
    },
    4: {
        "num": 4,
        "date": "13/11",
        "duration": "3 Horas Presenciais",
        "location": "Laboratório X",
        "shortTitle": "IA na Prática",
        "title": "Módulo 4 (13/11): IA na Prática – Criação de prompts intermediários/avançados para trabalho, estudos, síntese e produtividade.",
        "desc": "Aplicação prática de prompts intermediários e avançados voltados para resolução de problemas reais no trabalho, apoio aos estudos, síntese de textos e ganho de produtividade.",
        "statusBadge": "⚪ Sequência",
        "isReady": False,
        "actionTip": "Encontro programado na sequência da grade curricular (32h)."
    },
    5: {
        "num": 5,
        "date": "20/11",
        "duration": "3 Horas Presenciais",
        "location": "Laboratório X",
        "shortTitle": "Olhar Crítico & Auditoria",
        "title": "Módulo 5 (20/11): Olhar Crítico e Oficina de Prompts – Alucinações, limitações, verificação de fatos e auditoria de respostas.",
        "desc": "Oficina prática voltada à postura crítica diante da IA: identificação de alucinações, compreensão das limitações técnicas dos modelos, checagem de fatos e auditoria de respostas.",
        "statusBadge": "⚪ Sequência",
        "isReady": False,
        "actionTip": "Encontro programado na sequência da grade curricular (32h)."
    },
    6: {
        "num": 6,
        "date": "27/11",
        "duration": "3 Horas Presenciais",
        "location": "Laboratório X",
        "shortTitle": "Refinamento & Uso Responsável",
        "title": "Módulo 6 (27/11): Refinamento Contínuo e Uso Responsável – Comparação entre modelos, privacidade (LGPD), vieses, autoria e fluxos consistentes com IAGen.",
        "desc": "Comparação prática entre diferentes modelos de IA Generativa, boas práticas de privacidade e proteção de dados (LGPD), análise de vieses algorítmicos, ética de autoria e fluxos consistentes de trabalho.",
        "statusBadge": "⚪ Sequência",
        "isReady": False,
        "actionTip": "Encontro programado na sequência da grade curricular (32h)."
    },
    7: {
        "num": 7,
        "date": "04/12",
        "duration": "3 Horas Presenciais",
        "location": "Laboratório X",
        "shortTitle": "Fechamento & Avaliação Final",
        "title": "Módulo 7 (04/12): Fechamento do Curso e Avaliação Final – Consolidação das aprendizagens e desafio prático individual.",
        "desc": "Consolidação das aprendizagens desenvolvidas ao longo do curso, realização do desafio prático individual no laboratório e encerramento oficial com certificação de 32 horas.",
        "statusBadge": "⚪ Encerramento",
        "isReady": False,
        "actionTip": "Encontro final de fechamento, síntese e avaliação formativa."
    }
}

CO_TEACHING_TEAM: Dict[str, str] = {
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
def login() -> Any:
    """Tela de login e processamento de credenciais."""
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
def logout() -> Any:
    """Encerra a sessão atual com invalidação completa (hunt-session)."""
    session.clear()
    flash("Sua sessão foi encerrada com segurança.", "info")
    return redirect(url_for('login'))


# ==============================================================================
# ROTAS PRINCIPAIS PROTEGIDAS (@login_required)
# ==============================================================================
@app.route('/')
@login_required
def dashboard() -> Any:
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
def cockpit(meeting_id: int) -> Any:
    """Rota dedicada ao Cockpit de um encontro específico."""
    meeting = MEETINGS_DATA.get(meeting_id, MEETINGS_DATA[1])
    effective_id = meeting['num'] if meeting.get('isReady') else 1
    return render_template(
        'index.html',
        meetings=MEETINGS_DATA,
        team=CO_TEACHING_TEAM,
        active_view='cockpit',
        active_meeting=meeting,
        active_meeting_id=effective_id
    )


@app.route('/slides')
@app.route('/slides/<int:meeting_id>')
@login_required
def slides(meeting_id: int = 1) -> Any:
    """Rota para abertura dos slides no projetor (tela cheia)."""
    meeting = MEETINGS_DATA.get(meeting_id, MEETINGS_DATA[1])
    effective_id = meeting['num'] if meeting.get('isReady') else 1
    return render_template('slides.html', meeting=meeting, meeting_id=effective_id)


@app.route('/download/slides/<int:meeting_id>.pdf')
@login_required
def download_slides_pdf(meeting_id: int = 1) -> Any:
    """Rota para download do PDF oficial 16:9 widescreen dos slides."""
    meeting = MEETINGS_DATA.get(meeting_id, MEETINGS_DATA[1])
    effective_id = meeting['num'] if meeting.get('isReady') else 1
    pdf_filename = f"slides-encontro-{effective_id}.pdf"
    pdf_path = os.path.join(app.root_path, 'static', 'pdf', pdf_filename)
    # Se o PDF ainda não foi compilado no disco, compila sob demanda usando a URL do host da requisição
    if not os.path.exists(pdf_path):
        try:
            from scripts.export_pdf import generate_slides_pdf
            current_host_url = request.host_url.rstrip('/')
            generate_slides_pdf(effective_id, pdf_path, base_url=current_host_url)
        except Exception as e:
            app.logger.error(f"Erro ao gerar PDF sob demanda para o encontro {effective_id}: {e}")
            abort(404, description=f"Arquivo PDF dos slides do Encontro {effective_id} não encontrado. Execute 'python scripts/export_pdf.py {effective_id}' no terminal para gerá-lo.")

    return send_file(pdf_path, as_attachment=True, download_name=pdf_filename, mimetype='application/pdf')


# ==============================================================================
# APIS JSON PROTEGIDAS (@login_required & RBAC)
# ==============================================================================
@app.route('/api/encontros')
@login_required
def api_encontros() -> Any:
    """API JSON para listar todos os encontros."""
    return jsonify(MEETINGS_DATA)


@app.route('/api/encontros/<int:meeting_id>')
@login_required
def api_encontro(meeting_id: int) -> Any:
    """API JSON com dados de um encontro específico."""
    meeting = MEETINGS_DATA.get(meeting_id)
    if meeting:
        return jsonify(meeting)
    return jsonify({"error": "Encontro não encontrado"}), 404


@app.route('/api/auth/status')
@login_required
def api_auth_status() -> Any:
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
    host = os.environ.get('HOST', '127.0.0.1')
    debug_mode = os.environ.get('FLASK_ENV') != 'production'
    app.run(debug=debug_mode, host=host, port=port)
