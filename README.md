# 👩‍🏫 Portal de Apoio Docente & Co-Docência (Minicurso de IA - 32h)

Ambiente web interativo para planejamento, acompanhamento pedagógico e condução das aulas do **Minicurso de Extensão Universitária em Inteligência Artificial (32 horas)**.

---

## 🚀 Funcionalidades

- **Dashboard Geral**: Visualização do cronograma dos 7 encontros presenciais, locais e equipe.
- **Cockpit Pedagógico da Aula**: Linha narrativa dos encontros (Fio da Meada), roteiro de fala e projeção.
- **Slides em Alta Definição (16:9)**: Apresentação interativa otimizada para projetores com atalhos de teclado e notas.
- **Parecer do Professor**: Painel centralizado para registro e consulta de pareceres e orientações pedagógicas.
- **Autenticação Segura & RBAC**: Controle de acesso por perfil (Coordenação e Corpo Docente).

---

## 🛠️ Tecnologias Utilizadas

- **Backend**: Python / Flask, Gunicorn
- **Frontend**: HTML5 Semântico, CSS3 Moderno (Warm Paper & Walnut), Vanilla JavaScript
- **Segurança**: Criptografia de senhas (PBKDF2/SHA256), proteção de cookies de sessão (HttpOnly, SameSite), sanitização de redirecionamento e headers HTTP de proteção.

---

## 💻 Como Executar Localmente

### 1. Clonar o repositório
```bash
git clone https://github.com/LauraBirochi/portal-ia-docentes.git
cd portal-ia-docentes
```

### 2. Instalar as dependências
```bash
pip install -r requirements.txt
```

### 3. Configurar as variáveis de ambiente
Crie um arquivo `.env` baseado no `.env.example`:
```bash
cp .env.example .env
```

### 4. Iniciar a aplicação
```bash
python app.py
```
Acesse no navegador: `http://localhost:5000`
