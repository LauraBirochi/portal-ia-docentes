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
- **Paleta Óptica dos Slides (Deep Navy):** Introduzida a paleta **Azul Marinho Profundo / Deep Navy (`#0f172a` e `#1e293b`)** com tipografia branca pura (`#ffffff`) para garantir alto contraste (14:1+) e nitidez sob luz ambiente no telão do laboratório, corrigindo o problema de lavagem de contraste ocorrido com o marrom no Encontro 1.
- **Base Documental Pedagógica:** Síntese diagnóstica dos formulários dos alunos arquivada em `docs/encontro-2-assuntos/00_sintese_diagnostico_forms_alunos.md`.

### 🎯 Encontro 3 (06/11)
- **Tema:** *Aula privada com aluno.*
- **Natureza do Encontro:** Sessão reservada exclusivamente para atendimento pedagógico individualizado e acompanhamento privado com aluno no laboratório.
- **Inacessibilidade & Popup de Bloqueio:** O Módulo 3 foi configurado como inativo/inacessível (`isAccessible: false`, `isReady: false`). No Dashboard, a tentativa de abertura do cockpit emite um popup modal estilizado único notificando a indisponibilidade por se tratar de aula privada (sem duplicar com alert nativo). As rotas `/encontro/3` e `/slides/3` redirecionam automaticamente ao dashboard com mensagem de bloqueio.

### 🎯 Encontro 4 (13/11)
- **Tema:** *ChatGPT na Prática: Do Comando Simples ao Trabalho Real – Como instruir, refinar e colaborar com a IA de forma produtiva, ética e segura.*
- **Diretriz de Ferramentas:** Foco exclusivo no ChatGPT durante o encontro para evitar sobrecarga cognitiva nos alunos e acolher o aluno iniciante.
- **Paleta Óptica dos Slides (CKW Clean Light - Fundo Branco):** Implementada a paleta **Clean Light (`#ffffff` e `#f8fafc`)** para o Encontro 4 (`body[data-meeting="4"]` em `static/css/projector.css`), orientada pelo CKW Design System:
  - Fundo do palco em branco puro (`#ffffff`) com cartões brancos e bordas sutis Slate-200 (`#e2e8f0`).
  - Tipografia de alto contraste Slate-900 (`#0f172a`) e Slate-700 (`#334155`) garantindo legibilidade 14:1+ no telão.
  - Acentos funcionais em Azul Real (`#0284c7`), Esmeralda (`#059669`) e Âmbar (`#d97706`).
  - Terminais de prompt preservados em ardósia escura (`#0f172a`) para ancoragem visual e autenticidade de ferramenta técnica.
  - O Encontro 2 permanece 100% preservado em Deep Navy (`#0f172a`) e o Encontro 1 em Warm Walnut (`#fdfbf7`).
- **Deck Consolidado (22 Slides):** 22 slides distribuídos em 4 blocos temáticos, incluindo abertura das 3 camadas práticas (Slide 6), bancada de testes reais de prompts (Slides 13 a 15), quadro comparativo (Slide 16), exercício 2 de auto-entrevista ancorada (Slide 17), demonstração empírica do teste 4 em dois atos (Slide 18: Turno 1 Comando & 4 Perguntas da IA; Slide 19: Turno 2 Respostas do Usuário & Prompt Mestre Gerado), roda show & tell (Slide 20), checklist de bolso (Slide 21) e referências bibliográficas da OpenAI e UNESCO/OSSE (Slide 22).
- **Divisão de Palco Atualizada:** Laura assume os Slides 2 a 5 (Revisão, Estagiário, Duelo de 3 Vias e Framework C-T-F-R); Maria assume os Slides 6 a 9 (Abertura das 3 Camadas, Camadas 1 e 2 e Cartão-Postal/Anonimização) e Slides 10 e 11 (Diálogo Iterativo e Agência Humana UNESCO); co-docência integrada na Abertura (Slide 1), Missão 1 (Slide 12), Bancada de Testes Empíricos e Quadro Comparativo (Slides 13 a 16), Missão 2 (Slide 17), Teste 4 Parte 1 (Slide 18), Teste 4 Parte 2 (Slide 19), Roda Show & Tell (Slide 20), Fechamento (Slide 21) e Referências (Slide 22).
- **Refinamento Pedagógico (NotebookLM & CKW Design System):**
  - *Duelo de 3 Vias (Slide 4):* Desconstrução da Ilusão da Persona (`❌ Vago` vs `⚠️ Falso Bom Prompt` vs `✅ Mestre C-T-F-R`), comprovando que adjetivos vazios geram verborragia sem ganho factual.
  - *Framework C-T-F-R com Markdown (Slide 5):* Persona integrada a Contexto e padronização com cabeçalhos `#`.
  - *Abertura de Aplicações Práticas (Slide 6):* Transição de impacto introduzindo onde usar o prompt estruturado na rotina em 3 camadas (Organização, Redação e Diálogo).
  - *Camada 1 (Slide 7) & Camada 2 (Slide 8):* Casos práticos reais de rotina de estudos concorrida e redação de e-mails executivos / tradução de editais burocráticos.
  - *Regra do Cartão-Postal (Slide 9):* Protocolo de segurança e anonimização de dados sensíveis antes das técnicas de diálogo.
  - *Meta-Prompting Ancorado (Slide 10):* Inversão de papel com escopo prévio delimitado para evitar travamento da IA.
  - *Agência Humana UNESCO (Slide 11):* Diferenciação entre *Revisão Textual* e *Checagem Factual* com trava operacional `[necessita verificação]`.
  - *Scaffolding em 3 Níveis & Dontpad (Slides 12, 17 e Cockpit):* Oficina de bancada com andaime gradual (Vago ➔ Limpar Ruído ➔ Auto-Entrevista) e suporte a clipboard ágil via Dontpad (`dontpad.com/CURSO-IA-2026-IFSP`). Pílula de apresentador flutuante omitida nos slides práticos de bancada (12 e 17) para focar a atenção dos alunos exclusivamente no roteiro de passos e no timer de atividade.
  - *Bancada de Testes Empíricos (Slides 13 a 15):* Demonstração real com receita de Macarrão Parisiense nos 3 níveis:
    - *Teste 1 (Vago - Slide 13):* 1 linha simples gerou receita convencional, mas arbitrou 2-3 pessoas, tempo de 30 min e terminou com pergunta sobre estilo.
    - *Teste 2 (Falso Bom - Slide 14):* Persona de chef francês gerou tom teatral, incluiu vinho branco, aumentou tempo para 40 min, 5 segredos de chef e 3 perguntas complexas ao final.
    - *Teste 3 (Estruturado C-T-F-R - Slide 15):* Cálculo automático de 1 kg de massa para 5 pessoas, preparo paralelo para economizar tempo, restrição de comer à vontade atendida e ZERO perguntas residuais.
    - *Calibração de Projetor (1.5rem / 24px) & Omissão de Pílula:* Textos, diagnósticos e saídas ajustados para 1.5rem (24px) com zero overflow; pílula de apresentador flutuante (`slide-presenter-pill`) omitida nos slides 13 a 15 para liberar área útil dos cards, mantendo a condução salva nas notas das professoras (`N`).
  - *Quadro Comparativo das Diferenças (Slide 16):* Tabela consolidada em slide único analisando 9 critérios lado a lado (Contexto, Tom, Rendimento, Gestão do Tempo, Dicas, Ingredientes, Detalhamento, Perguntas Adicionais e Aderência às Restrições). Escala tipográfica expandida para telão (+48%, `th` a 1.45rem / 21.6px e `td` a 1.3rem / 20.8px, altura de 560px), balanceamento proporcional 16%/26%/28%/30% e 83px de folga até a pílula de apresentador.
  - *Missão 2 de Bancada (Slide 17):* Auto-entrevista guiada aplicada logo após o comparativo, potencializando a absorção prática antes da socialização.
  - *Teste 4 em Dois Atos (Slides 18 e 19):* Demonstração empírica dividida em dois momentos para absorção máxima:
    - *Slide 18 (Turno 1):* Comando solicitando 4 perguntas essenciais + as 4 perguntas geradas pelo ChatGPT (Contexto, Público, Formato, Restrições) cobrindo todo o escopo antes da resposta.
    - *Slide 19 (Turno 2):* As 4 respostas sucintas fornecidas pelo usuário + geração automática do Prompt Mestre estruturado em `# Contexto`, `# Instruções` e `# Restrições` com tema Cyan Deep Navy (`#38bdf8`), tipografia calibrada a `1.5rem` (24px) e zero overflow.
  - *Calibração Espacial CKW (Zero Overflow):* Otimização tipográfica e dimensional de cartões, terminais e tabelas para eliminar cortes ou overflow em 1920x1080 Full Bleed.
  - *Ficha Técnica Conceitual Docente (Atalho N / Drawer de Notas):* Reestruturação completa do eixo do painel de notas do projetor (tecla `N`). Substituição dos roteiros de fala teatralizada em primeira pessoa por uma ficha técnica estruturada em 4 blocos rigorosos para todos os 22 slides do Encontro 4:
    1. 📖 **O Que É o Conceito:** Definição teórica e epistemológica do conceito (ex: Meta-Prompting, Inversão de Papel, C-T-F-R, Regressão à Média, Trava de Grounding UNESCO).
    2. ⚙️ **Mecânica do Slide:** Como ler o que está na tela, articulação dos elementos visuais e o que demonstrar.
    3. ⚠️ **Armadilha Comum:** Vício típico dos alunos/usuários e erros clássicos de formulação.
    4. 💡 **Dúvidas dos Alunos (FAQ):** Perguntas frequentes e difíceis com respostas-chave fundamentadas.
    O layout foi desenhado com visual Deep Navy em grid responsivo de 2 colunas com cartões coloridos (`#38bdf8`, `#10b981`, `#f59e0b`, `#a78bfa`), garantindo ao professor domínio substancial do conteúdo com consulta ágil no palco sem depender de falas decoradas.
- **Roteiro de Palco Completo:** Co-docência equilibrada entre Laura e Maria com tempos sugeridos (minuto a minuto), objetivos pedagógicos e fichas conceituais para cada slide.
- **Harmonização da Aba "Atividade em Aula" (Cockpit Encontro 4):** Conteúdo prático reformulado em `static/js/data/encontro-4/atividades.js` para espelhar integralmente o estudo de caso empírico dos slides: duelo de prompts de 3 vias baseado no caso do *Macarrão Parisiense* (Slide 13 a 15), quadro comparativo de 9 critérios (Slide 16), auto-entrevista guiada em dois atos (Slides 18 e 19), anatomia C-T-F-R, protocolo de anonimização (Slide 9) e trava de checagem factual UNESCO `[necessita verificação]` (Slide 11).
- **Calibração Tipográfica do Meio do Palco (Projetor HD):** Aumento das fontes de parágrafos gerais (`<p>`), itens de lista (`li`), passos de bancada e descrições dos cards no Encontro 4 (elevação de 1.12rem~1.45rem para 1.36rem~1.68rem / 21.8px~26.9px), preservando a escala dos grandes títulos e garantindo nitidez óptica sem pixelização ou overflow em 1920x1080.
- **Infraestrutura Modular & PDF 16:9:** Compilado em `static/js/data/encontro4-data.js` via `python scripts/build_data.py 4` e exportado como PDF vetorial nativo em `static/pdf/slides-encontro-4.pdf`. Rota `/slides/4` e Cockpit `/encontro/4` ativos e 100% integrados.

---

## 🤖 Instruções para Agentes de IA

1. **Leitura Obrigatória:** Sempre leia este arquivo no início de novas conversas/tarefas para se situar no contexto atual do projeto.
2. **Separação Rígida entre Infraestrutura e Conteúdo (Economia de Tokens):** Ao receber comandos como *"vamos preparar o encontro X"*, limite-se estritamente à **organização arquitetural** (pastas `encontro-X/`, rotas, compilador e layout de dados). **NUNCA** redija nem gere conteúdo pedagógico ou slides especulativamente sem instrução explícita do usuário. A autoria do curso é prerrogativa do usuário, baseada nos planos e relatórios em `docs/`.
3. **Edição de Slides & Dados:** Ao adicionar, alterar ou reordenar slides, edite **apenas** `static/js/data/encontro-X/deck-slides.js` e execute `python scripts/build_data.py X`. Não faça edições manuais nos bundles `encontroX-data.js`.
4. **Respeito ao Alinhamento:** Ao planejar ou propor alterações, verifique se estão alinhadas com as ideias trazidas pela coordenação e pelos documentos em `docs/`.
5. **Atualização Contínua:** Registre novos acordos, decisões de encontros futuros e mudanças arquiteturais neste documento conforme o projeto evoluir.
6. **Exportação de PDF sob Demanda:** **NÃO** execute a exportação de PDF (`python scripts/export_pdf.py [X]`) automaticamente a cada alteração ou commit. Execute a geração do PDF **exclusivamente quando o usuário solicitar explicitamente**. Mantenha apenas a compilação rápida do bundle de dados (`python scripts/build_data.py X`) ao editar slides.
