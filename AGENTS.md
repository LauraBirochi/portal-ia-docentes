# AGENTS.md — Diretrizes e Orientações do Projeto

Este arquivo contém as diretrizes principais, notas de alinhamento e instruções para os agentes de IA e desenvolvedores que atuam neste repositório (**portal-ia-docentes / Curso IA**).

---

## 📌 Primeiro Contato & Registro do Projeto

### 🎯 Encontro 1
- **Foco Principal:** Implementar as **ideias e orientações do coordenador**.
- **Objetivo:** Garantir que as demandas e a visão pedagógica/técnica estabelecidas pelo coordenador na primeira reunião/contato sejam priorizadas e integradas no início do desenvolvimento.
- **Transição Histórica (Slide 7):** Inclusão de slide de transição de impacto (tipo `secao`) entre o Slide 6 (Requisito de E-mail) e o Slide 8 (Os 3 Grandes Marcos da História da IA), com a provocação *"A IA Não Nasceu em 2022 com o ChatGPT!"*.
- **Transição Mitos (Slide 18):** Inclusão de tela de transição de impacto (tipo `secao`) entre o Slide 17 (De Onde Vem o Nosso Medo?) e os 5 Mitos (Slides 19 a 23), intitulada *"Os 5 Grandes Mitos da Inteligência Artificial"*, expandindo o deck para **29 slides** com co-docência (Maria: Mitos 1-2, Laura: Mitos 3-5).
- **Deck Consolidado (32 Slides):** Todos os 32 slides possuem `numero`, `id` (`1..32`) e `bloco` (`1..6`) explícitos e normalizados tanto no Cockpit quanto no Projetor.
- **Fluxo Ágil de Conteúdo (Fonte Única de Verdade):** Edite exclusivamente os arquivos modulares em `static/js/data/encontro-1/` (especialmente `deck-slides.js`). Para gerar o bundle unificado de produção, execute `python scripts/build_data.py`.
- **Arquitetura Modular do Projetor e Dados:**
  - `MEETINGS_DATA` em `app.py` é a fonte única de verdade (SSOT) do cronograma dos 7 módulos (`09/10`, `30/10`, `06/11`, `13/11`, `20/11`, `27/11`, `04/12`), injetado em `window.MEETINGS_DATA` via `templates/base.html`.
  - O motor do projetor está modularizado em `templates/slides.html` (estrutura HTML), `static/css/projector.css` (estilos) e `static/js/projector-engine.js` (renderizadores Strategy Map `SLIDE_RENDERERS` e controles de palco).
  - Janela de slides reutiliza a mesma aba via `target="portal_ia_slides_window"` e fecha sem duplicar painel pelo botão *"Fechar Projetor"* (`window.close()`).
  - Aba 3 do Cockpit padronizada como *"Atividade em Aula"* (atende provas diagnósticas, oficinas de prompts e laboratórios práticos).
  - **Exportação Headless para PDF 16:9 Widescreen Nativo:** Motor de geração automatizada via Playwright e PyMuPDF (`scripts/export_pdf.py [meeting_id]`), gerando PDFs vetoriais com exatamente 1 slide por página em 1920x1080 Full Bleed nativo (`page.emulate_media(media="screen")`, margens zero e CSS flat sem sombras). Rota oficial `/download/slides/<meeting_id>.pdf` protegida via `@login_required` com download direto no Cockpit.
  - **HUD de Palco do Projetor (CKW Design System):** Header do projetor (`.projector-topbar`) redesenhado como um HUD minimalista de 58px com glassmorphism:
    - *Identificação à Esquerda:* Pill sem ruído `.brand-pill-module` com módulo e título curto.
    - *Navegação Central:* `.nav-capsule` unificada com setas direcionais limpas e contador tabular `X / Total`.
    - *Ferramentas de Apoio:* Botões de notas/painel com micro-pontos luminosos `.tool-active-dot` indicando ativação sem sobrecarregar a visão.
    - *Utilitários à Direita:* Apenas ícones puros de tela cheia (`⛶`) e fechamento isolado (`✕`).
    - *Microbarra Linear de Progresso:* Trilho de 2px (`.projector-progress-rail` e `.projector-progress-bar`) sincronizado via `scaleX` no rodapé da barra, fornecendo feedback temporal contínuo e subconsciente.
  - **Ocultamento Imersivo em Tela Cheia (F / Fullscreen):** Ao ativar Fullscreen (seja pelo atalho `F`, botão do palco ou F11), a barra superior é recolhida suavemente via `transform: translateY(-100%)` e o palco 16:9 expande dinamicamente para ocupar 100% da viewport vertical (`fitStageToViewport`). Caso o orador precise acessar controles ou notas, aproximar o cursor do topo (`clientY <= 28px`) revela a barra flutuante sem causar layout shift.
  - **Redimensionamento dos Botões dos Módulos (Design System):** Calibração compacta dos botões dos módulos (`.timeline-step`) na timeline do Dashboard (redução de mais de 40% de altura inerte, padding 0.45rem 0.35rem, texto em linha única com ellipsis e min-height 56px conforme Fitts's Law) e harmonização dos cards de módulos no Projetor (`.cronograma-col-card` a 320px com proporção equilibrada).

### 🎯 Encontro 2 (30/10)
- **Tema:** *O Salto da IA Generativa – Como acessar os modelos de IAGen, funcionamento das LLMs e criação de prompts básicos.*
- **Paleta Óptica dos Slides (Deep Navy):** Aplicada **exclusivamente no Encontro 2** (`body[data-meeting="2"]` em `static/css/projector.css`) a paleta **Azul Marinho Profundo / Deep Navy (`#0f172a` e `#1e293b`)** com tipografia branca pura (`#ffffff`) para garantir alto contraste (14:1+) e nitidez sob luz ambiente no telão do laboratório, corrigindo o problema de lavagem de contraste ocorrido com o marrom no Encontro 1.
- **Base Documental Pedagógica:** Síntese diagnóstica dos formulários dos alunos arquivada em `docs/encontro-2-assuntos/00_sintese_diagnostico_forms_alunos.md`.

---

## 🤖 Instruções para Agentes de IA

1. **Leitura Obrigatória:** Sempre leia este arquivo no início de novas conversas/tarefas para se situar no contexto atual do projeto.
2. **Separação Rígida entre Infraestrutura e Conteúdo (Economia de Tokens):** Ao receber comandos como *"vamos preparar o encontro X"*, limite-se estritamente à **organização arquitetural** (pastas `encontro-X/`, rotas, compilador e layout de dados). **NUNCA** redija nem gere conteúdo pedagógico ou slides especulativamente sem instrução explícita do usuário. A autoria do curso é prerrogativa do usuário, baseada nos planos e relatórios em `docs/`.
3. **Edição de Slides & Dados:** Ao adicionar, alterar ou reordenar slides, edite **apenas** `static/js/data/encontro-X/deck-slides.js` e execute `python scripts/build_data.py X`. Não faça edições manuais nos bundles `encontroX-data.js`.
4. **Respeito ao Alinhamento:** Ao planejar ou propor alterações, verifique se estão alinhadas com as ideias trazidas pela coordenação e pelos documentos em `docs/`.
5. **Atualização Contínua:** Registre novos acordos, decisões de encontros futuros e mudanças arquiteturais neste documento conforme o projeto evoluir.
