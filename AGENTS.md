# AGENTS.md — Diretrizes e Orientações do Projeto

Este arquivo contém as diretrizes principais, notas de alinhamento e instruções para os agentes de IA e desenvolvedores que atuam neste repositório (**portal-ia-docentes / Curso IA**).

---

## 📌 Primeiro Contato & Registro do Projeto

### 🎯 Encontro 1
- **Foco Principal:** Implementar as **ideias e orientações do coordenador**.
- **Objetivo:** Garantir que as demandas e a visão pedagógica/técnica estabelecidas pelo coordenador na primeira reunião/contato sejam priorizadas e integradas no início do desenvolvimento.
- **Transição Histórica (Slide 7):** Inclusão de slide de transição de impacto (tipo `secao`) entre o Slide 6 (Requisito de E-mail) e o Slide 8 (Os 3 Grandes Marcos da História da IA), com a provocação *"A IA Não Nasceu em 2022 com o ChatGPT!"*.
- **Transição Mitos (Slide 18):** Inclusão de tela de transição de impacto (tipo `secao`) entre o Slide 17 (De Onde Vem o Nosso Medo?) e os 5 Mitos (Slides 19 a 23), intitulada *"Os 5 Grandes Mitos da Inteligência Artificial"*, expandindo o deck para **29 slides** com co-docência (Maria: Mitos 1-2, Laura: Mitos 3-5).
- **Fluxo Ágil de Conteúdo (Fonte Única de Verdade):** Edite exclusivamente os arquivos modulares em `static/js/data/encontro-1/` (especialmente `deck-slides.js`). Para gerar o bundle unificado de produção, execute `python scripts/build_data.py`. O motor de slides em `templates/slides.html` auto-numera e ajusta os índices dinamicamente em tempo de execução.

---

## 🤖 Instruções para Agentes de IA

1. **Leitura Obrigatória:** Sempre leia este arquivo no início de novas conversas/tarefas para se situar no contexto atual do projeto.
2. **Edição de Slides:** Ao adicionar, alterar ou reordenar slides, edite **apenas** `static/js/data/encontro-1/deck-slides.js` e execute `python scripts/build_data.py`. Não faça edições manuais em `encontro1-data.js`.
3. **Respeito ao Alinhamento:** Ao planejar ou propor alterações para o Encontro 1, verifique se estão alinhadas com as ideias trazidas pela coordenação.
4. **Atualização Contínua:** Registre novos acordos, decisões de encontros futuros e mudanças arquiteturais neste documento conforme o projeto evoluir.
