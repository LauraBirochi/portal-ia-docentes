# Especificação de Design: Portal & Cockpit de Co-Docência do Minicurso de IA
**Data:** 05/09/2026  
**Público-alvo:** Dupla de Docentes (Você & Maria), Professor orientador/coordenador e Visão Pública de Alunos.  
**Módulo Âncora:** Módulo 1 – *Desmistificando a IA: Da Ficção Científica à Realidade*  

---

## 1. Visão Geral e Filosofia da Plataforma

A plataforma evolui de uma apostila estática com excesso de texto para um **Hub Organizador e Operacional de Co-docência em Dois Níveis**:

1. **Nível 1 – Dashboard Central do Curso (Visão Global):**
   - Recepção para Docentes, Orientador e Alunos.
   - Widget de **Data de Hoje** e **Mini-Calendário** dos 7 encontros semanais.
   - **Seletor de Modo/Perfil:**
     - 🛠️ **Modo Trabalho / Preparação (Docente):** Foco em estudar a aula, alinhar conceitos e preparar anotações da dupla.
     - ⚡ **Modo Aula / Ao Vivo (Apresentador):** Foco em execução na sala (Slides para o computador do projetor + Gabarito rápido e Timer no notebook da mesa).
     - 🎓 **Modo Aluno (Visão Limpa):** Acesso apenas a materiais liberados, slides públicos e enunciados das atividades (com gabaritos e notas internas ocultos).
   - Grade dos 7 Módulos com status visual claro.

2. **Nível 2 – Cockpit de Aula (Ao selecionar um Módulo, ex: Módulo 1):**
   - Estrutura com **5 Abas de Foco** sem rolagem infinita.
   - Navegação limpa para consulta rápida antes ou durante a aula.

---

## 2. Arquitetura das Telas

### 2.1. Tela 1: Dashboard Central do Minicurso (Home)

```
+-----------------------------------------------------------------------------------------+
| 👩‍🏫 Portal Minicurso de IA (32h)   [Data: Sábado, 05/09/2026]    [Modo: 🛠️ Trabalho ▾] |
+-----------------------------------------------------------------------------------------+
| BOAS-VINDAS & PAINEL DE CONTROLE                                                        |
| Docentes: Você & Maria  |  Orientação: Prof. Coordenador                                |
| Próximo Encontro: Módulo 1 – Hoje no Lab Informática (14h00 às 17h00)                   |
+-----------------------------------------------------------------------------------------+
| [🗓️ CALENDÁRIO DOS 7 ENCONTROS]                                                         |
| (1) 05/09 [Hoje] ➔ (2) 12/09 ➔ (3) 19/09 ➔ (4) 26/09 ➔ (5) 03/10 ➔ (6) 10/10 ➔ (7) 17/10|
+-----------------------------------------------------------------------------------------+
| GRADE DOS MÓDULOS                                                                       |
| +-----------------------------+  +-----------------------------+                        |
| | MÓDULO 1: Desmistificando   |  | MÓDULO 2: O Salto da IA     |  ... (Módulos 3 a 7)   |
| | Status: 🟢 Pronto p/ Aula   |  | Status: 🟡 Em Preparação    |                        |
| | [Entrar no Cockpit ➔]      |  | [Ver Planejamento ➔]        |                        |
| +-----------------------------+  +-----------------------------+                        |
+-----------------------------------------------------------------------------------------+
```

#### Recursos da Tela 1 (Dashboard):
1. **Widget de Data & Próxima Aula:**
   - Detecta a data atual automaticamente via JavaScript.
   - Indica qual encontro está agendado e quanto tempo falta para o início.
2. **Alternador de Modos de Visualização:**
   - `🛠️ Modo Trabalho`: Exibe notas da dupla, gabaritos e checklists pedagógicos.
   - `⚡ Modo Aula`: Foco nos atalhos de projeção, timer regressivo de 3h e gabarito em 1 clique.
   - `🎓 Modo Aluno`: Oculta anotações privadas e respostas, deixando apenas slides públicos e links práticos.
3. **Mini-Calendário Interativo:**
   - Lista horizontal ou em grade com as 7 semanas de aula presenciais (3h cada) e prazos do portfólio autônomo.
4. **Cards dos Módulos:**
   - Cada card exibe título, duração, tag de status e botão para entrar no módulo correspondente.

---

### 2.2. Tela 2: Cockpit do Módulo 1 (Modo Co-docência)

Ao clicar no Card do **Módulo 1**, o usuário transita suavemente para a visão de trabalho do encontro:

- **Barra de Retorno:** Botão `[← Voltar ao Dashboard Geral]`.
- **Barra de Ações:** Botão `[🖥️ Abrir Slides para Projetor]`, `[🖨️ PDF/A4]` e `[🌙 Modo Escuro]`.
- **As 5 Abas de Foco:**
  1. `[🎯 1. Fio da Meada]`: Objetivo pedagógico, narrativa em 3 Atos (Abertura, Conceito Central, Fechamento) e glossário alinhado da dupla.
  2. `[🖥️ 2. Slides & Roteiro]`: Índice dos slides da aula 1, tópicos-chave para falar em cada um e dicas didáticas.
  3. `[🧪 3. Atividades & Gabarito]`: Enunciados práticos (Teachable Machine / Quick, Draw!), passo a passo da solução e gabarito completo (oculto no Modo Aluno).
  4. `[⚠️ 4. Perguntas & Armadilhas]`: Dúvidas capciosas dos alunos e respostas fundamentadas prontas.
  5. `[📝 5. Anotações da Dupla]`: Divisão de papéis (Você vs Maria) e bloco de anotações persistente via `localStorage`.

---

## 3. Gestão dos Modos (Trabalho vs Aula vs Aluno)

| Elemento da Interface | Modo Trabalho (Docente) | Modo Aula (Ao Vivo) | Modo Aluno (Público) |
| :--- | :--- | :--- | :--- |
| **Gabarito das Atividades** | ✅ Visível com comentários | ✅ Visível em modal rápido | ❌ Oculto |
| **Anotações da Dupla** | ✅ Editável (`localStorage`) | ✅ Visível como consulta | ❌ Oculto |
| **Slides da Aula** | ✅ Índice com dicas de fala | ✅ Botão tela cheia projetor | ✅ Visualizador para estudo |
| **Timer da Aula** | ⚪ Opcional | ✅ Destacado no topo | ❌ Oculto |
| **Glossário e Conceitos** | ✅ Visão completa | ✅ Consulta rápida | ✅ Visível |

---

## 4. Distribuição e Acesso Online (Deploy Gratuito)

- **Arquitetura 100% Estática:** HTML5, CSS3 moderno com Design Tokens (paleta aconchegante e modo escuro), Vanilla JS modular.
- **Deploy Imediato:**
  - Compatível com **Vercel** ou **Netlify** (geração de link público tipo `https://minicurso-ia-docente.vercel.app`).
  - Compatível com **GitHub Pages** (`https://usuario.github.io/CursoIA`).
- **Acesso:**
  - O Professor e a Maria podem abrir o link em qualquer computador, tablet ou celular.
  - Para alunos, basta ativar o `Modo Aluno` ou fornecer a visualização pública.
- **Funcionamento Offline:**
  - Funciona 100% offline em pen-drive caso o laboratório fique sem internet.

---

## 5. Critérios de Aceitação e Verificação

- [ ] A página inicial abre no **Dashboard Central** com widget de data dinâmica e calendário dos 7 encontros.
- [ ] O alternador de modos permite trocar entre **Modo Trabalho**, **Modo Aula** e **Modo Aluno**, adaptando a visibilidade de gabaritos e anotações.
- [ ] O clique no Card do Módulo 1 abre o **Cockpit do Módulo 1** com as 5 abas de foco funcionais.
- [ ] O botão `[← Voltar ao Dashboard Geral]` retorna à tela inicial sem recarregar a página.
- [ ] O botão `[🖥️ Abrir Slides para Projetor]` abre a apresentação limpa para o Computador 1.
- [ ] As anotações digitadas persistem no navegador via `localStorage`.
- [ ] O layout é responsivo, elegante e conta com modo escuro/claro funcional.
- [ ] Os arquivos estão prontos para deploy gratuito imediato na Vercel/Netlify.
