# 🚀 Guia de Publicação (Deploy) – Portal de Apoio Docente

Este guia detalha o passo a passo para colocar o **Portal de Apoio Docente** no ar na nuvem de forma **100% gratuita**, com certificado de segurança **HTTPS automático** e acesso restrito aos **3 usuários**.

---

## 👥 Credenciais Padrão dos 3 Usuários

As credenciais iniciais configuradas no sistema são:

| Usuário (Login) | Nome de Exibição | Papel / Função | Senha Padrão Inicial |
| :--- | :--- | :--- | :--- |
| `laura` | **Laura** | Docente | `docente@laura2026` |
| `maria` | **Maria** | Docente | `docente@maria2026` |
| `lucio` | **Lúcio Rodrigo** | Coordenação | `coord@lucio2026` |

> [!TIP]
> Você pode alterar qualquer um desses nomes de usuário ou senhas diretamente nas **Variáveis de Ambiente (Environment Variables)** no painel da hospedagem ou no arquivo `.env`.

---

## 🌐 Opção Recomendada: Render.com (Gratuito, Rápido & Automático)

O **Render** é a melhor plataforma para subir aplicações Python/Flask integradas ao Git.

### Passo 1: Subir o projeto para o GitHub / GitLab
Abra o terminal na pasta do projeto e envie os commits:
```bash
git add .
git commit -m "feat: sistema de autenticacao seguro para 3 usuarios"
git push origin main
```

### Passo 2: Criar o Web Service no Render
1. Acesse [dashboard.render.com](https://dashboard.render.com) e faça login (com sua conta GitHub).
2. Clique no botão **New +** no canto superior direito e selecione **Web Service**.
3. Selecione o repositório do projeto **CursoIA**.
4. Preencha as configurações básicas:
   - **Name**: `portal-ia-docentes` (ou o nome que preferir)
   - **Region**: `Ohio (US East)` ou `Frankfurt (EU)`
   - **Branch**: `main`
   - **Runtime**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
   - **Instance Type**: `Free`

### Passo 3: Configurar as Variáveis de Ambiente
Na mesma tela, role até a seção **Environment Variables** (ou acesse a aba *Environment* após criar) e adicione:

| Key (Chave) | Value (Valor Sugerido) |
| :--- | :--- |
| `FLASK_ENV` | `production` |
| `SECRET_KEY` | *(Clique em 'Generate' ou digite uma chave aleatória longa)* |
| `USER1_USERNAME` | `laura` |
| `USER1_PASSWORD` | `sua_senha_segura_laura` |
| `USER2_USERNAME` | `maria` |
| `USER2_PASSWORD` | `sua_senha_segura_maria` |
| `USER3_USERNAME` | `lucio` |
| `USER3_PASSWORD` | `sua_senha_segura_lucio` |

### Passo 4: Concluir e Compartilhar o Link
1. Clique em **Create Web Service**.
2. Em 1 a 2 minutos, o Render construirá e publicará a aplicação.
3. Você receberá uma URL pública segura (ex: `https://portal-ia-docentes.onrender.com`).
4. Basta enviar a URL e o login individual para cada uma das 3 pessoas!

---

## 💻 Opção Local: Testar no seu Computador

Se você quiser testar ou rodar localmente antes de subir:

```bash
# Iniciar o servidor Flask localmente
python app.py
```
Acesse no seu navegador: `http://localhost:5000`

---

## 🛡️ Camadas de Segurança Ativas

1. **`hunt-session`**: Cookies protegidos contra roubo (`HttpOnly`, `SameSite=Lax`), rotação de sessão para prevenir *Session Fixation* e destruição completa no logout.
2. **`hunt-auth-bypass`**: Bloqueio de acesso não autorizado em todas as rotas de cockpit, slides e APIs JSON.
3. **`hunt-open-redirect`**: Sanitização rigorosa do parâmetro `?next=` na tela de login.
4. **`hunt-clickjacking`**: Headers HTTP `X-Frame-Options: SAMEORIGIN` e `X-Content-Type-Options: nosniff`.
5. **`hunt-source-leak`**: `.gitignore` configurado para impedir que senhas ou arquivos `.env` sejam expostos no histórico público do Git.
