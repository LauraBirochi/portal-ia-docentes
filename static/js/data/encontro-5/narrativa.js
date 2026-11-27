/**
 * Módulo 5 – Fio da Meada e Narrativa Pedagógica
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const fioDaMeada = {
  objetivoCentral: "Superar o uso exclusivo do ChatGPT, dominando a escolha e a combinação estratégica de ferramentas gratuitas a partir da adequação à tarefa e tipo de evidência: Perplexity (investigação na web com fontes verificáveis) e Google NotebookLM (respostas fundamentadas no material selecionado e artefatos de estudo).",
  mensagemChave: "Use o Perplexity para investigar com fontes atuais, o NotebookLM para interrogar e organizar seu material próprio e o ChatGPT para conversar, raciocinar e criar — sempre com supervisão humana e validação crítica antes de decidir.",
  explicacaoObjetivo: "No Encontro 4, a turma aprendeu a instruir o ChatGPT com C-T-F-R e a colocar a trava [necessita verificação]. No Encontro 5, mostramos que o docente não precisa forçar um único assistente para todas as tarefas. Apresentamos o ecossistema especializado fundamentado na adequação à tarefa e à proveniência da evidência, operacionalizando a auditoria de fontes em 4 passos, o estudo com corpus próprio e a abordagem centrada no ser humano da UNESCO.",
  atos: [
    {
      ato: 1,
      titulo: "Adequação à Tarefa & Os 3 Especialistas (Sem Divisão Rígida)",
      tempo: "40 min",
      desc: "Desconstrução da ideia de 'IA única faz-tudo' e matização da metáfora: o ChatGPT também ajuda na busca com navegação, o Perplexity estrutura ideias e o NotebookLM gera resumos. O foco é a adequação à tarefa e à fonte de evidência necessária. Análise da matriz comparativa com critérios explícitos de atualização, risco, verificabilidade e privacidade.",
      gatilho: "Tentar usar só o ChatGPT para tudo na vida é como tentar consertar uma casa inteira usando apenas um martelo. Hoje vamos abrir a nossa caixa de ferramentas a partir do tipo de evidência necessária."
    },
    {
      ato: 2,
      titulo: "Perplexity na Prática: Investigação e Protocolo de Auditoria em 4 Passos",
      tempo: "45 min",
      desc: "Como funciona o RAG aberto em tempo real. Desmistificação da ilusão da citação: número [1] só prova que o link existe na web. Apresentação da anatomia da interface (painel de fontes no topo, citações no texto e perguntas de desdobramento). Operacionalização do Protocolo de Auditoria em 4 Passos (Fonte, Afirmação, Método, Triangulação) na Missão 1 com uma pergunta prática do dia a dia.",
      gatilho: "Citação não é sinônimo de verdade. A IA encontrou a página, mas cabe a você abrir o link, checar a afirmação e triangular com uma fonte independente."
    },
    {
      ato: 3,
      titulo: "Google NotebookLM: Fontes Selecionadas, Artefatos de Estudo & Agência Humana",
      tempo: "95 min",
      desc: "Como funciona o NotebookLM com respostas fundamentadas nas fontes selecionadas. Regra de ouro: 'O NotebookLM é excelente para interrogar e organizar seu material; não é substituto da leitura nem fonte autônoma de verdade.' Os outputs do Studio (áudio, mapas, guias) são andaimes temporários de estudo e revisão, não conhecimento acabado. Rigor na governança de dados pessoais de terceiros (LGPD), verificação prévia de OCR, quadro das 6 armadilhas e diretrizes da UNESCO.",
      gatilho: "A IA generativa na educação deve seguir uma abordagem centrada no ser humano, protegendo a agência humana, a diversidade cultural e a validação ética e pedagógica."
    }
  ],
  glossario: [
    {
      termo: "RAG Aberto (Open-Web Retrieval)",
      def: "Arquitetura usada pelo Perplexity: o modelo busca ativamente em páginas públicas da internet em tempo real e sintetiza a resposta acompanhada de links numerados para cada afirmação."
    },
    {
      termo: "Respostas Fundamentadas em Fontes (Grounding)",
      def: "Arquitetura usada pelo NotebookLM: a geração da IA é fundamentada nas fontes selecionadas pelo usuário no caderno, reduzindo consideravelmente o risco de informações externas inventadas, embora não elimine erros de leitura, interpretação ou síntese."
    },
    {
      termo: "Protocolo de Auditoria em 4 Passos",
      def: "Procedimento crítico de conferência: (1) Identificar quem publicou e a competência da fonte; (2) Conferir se a citação sustenta a frase específica; (3) Avaliar metodologia e data; (4) Triangular com ao menos uma fonte independente."
    },
    {
      termo: "Artefatos de Estudo do Studio",
      def: "Outputs sintéticos gerados pelo NotebookLM (Audio Overview, Mapas Mentais, FAQ e Guia de Estudo) que atuam como andaimes cognitivos de revisão e fixação, mas podem simplificar nuances e não substituem a leitura do material-fonte."
    },
    {
      termo: "Governança de Dados de Terceiros (LGPD)",
      def: "Princípio legal e ético que exige base legal adequada e autorização institucional antes de carregar documentos contendo dados pessoais de terceiros (estudantes, pacientes, colegas, gravações ou atas com CPFs) em serviços de IA na nuvem, aplicando anonimização sempre que possível."
    },
    {
      termo: "Abordagem Centrada no Ser Humano (UNESCO)",
      def: "Diretriz internacional que estabelece a primazia da agência humana, da inclusão, da equidade e da validação ética e pedagógica, assegurando que a tecnologia apoie o educando sem terceirizar o pensamento crítico."
    }
  ]
};
