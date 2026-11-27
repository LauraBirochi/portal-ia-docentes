/**
 * Módulo 5 – Atividades Práticas e Laboratório
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const oficinaPratica = {
  titulo: "Oficina de Bancada: Do Detetive da Web ao Bibliotecário de Arquivos",
  duracao: "40 min em Laboratório (Missão 1: Perplexity • Missão 2: NotebookLM)",
  peso: "Instrumento Formativo e Prático (Rubrica de 3 Pontos no Portfólio Digital)",
  objetivo: "Capacitar o participante a escolher a ferramenta certa para cada desafio: realizar buscas na web com links auditáveis (Perplexity) e converter documentos estáticos em recursos interativos de estudo fundamentados nas fontes (NotebookLM).",

  situacaoProblema: {
    contexto: "No dia a dia acadêmico e profissional, precisamos tanto investigar informações atualizadas na web aberta quanto estudar documentos extensos sem que a IA invente dados de fora. Confiar cegamente em um número de citação [1] ou em um resumo em áudio sem conferir o texto original pode levar a erros graves.",
    missao: "Executar duas missões práticas de bancada: (1) Investigar uma dúvida prática no Perplexity aplicando o Protocolo de Auditoria em 4 Passos sobre a fonte citada; e (2) Criar um caderno fundamentado em fontes próprias no Google NotebookLM, auditando os trechos originais e testando os artefatos de estudo do painel Studio."
  },

  comoExecutar: [
    {
      etapa: 1,
      titulo: "Missão 1 (Perplexity | 5 min) — Pergunta Prática e Leitura das Fontes",
      desc: "Escolha uma dúvida cotidiana ou do curso (ex.: regras institucionais, documentos para renovação, recomendações oficiais). Faça a pergunta no Perplexity e observe a resposta, as citações numeradas [1], [2] e os links de origem antes de copiar qualquer trecho."
    },
    {
      etapa: 2,
      titulo: "Missão 1 (Auditoria | 10 min) — Protocolo de Conferência e Veredito",
      desc: "Abra uma fonte citada e verifique: Quem publicou? Quando? A página realmente sustenta o que o Perplexity afirmou? Registre o veredito ('Confirmada / Parcialmente confirmada / Não confirmada pela fonte') e compartilhe com a turma."
    },
    {
      etapa: 3,
      titulo: "Missão 2 (NotebookLM | 5 min) — Criação do Caderno e Checagem de OCR",
      desc: "Acesse notebooklm.google.com, crie um caderno e importe um PDF autorizado com texto selecionável (OCR) ou link público. Atenção à LGPD: nunca envie dados pessoais de terceiros sem base legal e autorização institucional."
    },
    {
      etapa: 4,
      titulo: "Missão 2 (Ancoragem | 10 min) — Interrogação e Rastreabilidade por Citações",
      desc: "Pergunte no chat: 'Quais são as três ideias centrais deste material? Indique os trechos de onde tirou cada uma.' Clique nos marcadores numéricos das citações para conferir o destaque direto no trecho original do documento."
    },
    {
      etapa: 5,
      titulo: "Missão 2 (Painel Studio | 10 min) — Artefatos de Estudo e Revisão",
      desc: "Gere um 'Guia de Estudo' ou 'Audio Overview' no painel Studio como andaime de revisão e compare com o texto original para identificar eventuais simplificações."
    }
  ],

  cincoElementos: [
    {
      elemento: "ChatGPT",
      comoAparece: "Raciocínio & Estruturação (Paramétrico)",
      funcao: "Elaborar, reformular, estruturar com C-T-F-R, brainstormar e raciocinar interativamente com o usuário."
    },
    {
      elemento: "Perplexity",
      comoAparece: "Investigação na Web (Open-Web RAG)",
      funcao: "Vasculhar a internet em tempo real, trazendo respostas com links auditáveis e painel de fontes."
    },
    {
      elemento: "NotebookLM",
      comoAparece: "Estudo Ancorado em Fontes Selecionadas (Grounding)",
      funcao: "Interrogar e organizar o material selecionado, com citações que remetem aos trechos originais e artefatos de revisão."
    }
  ],

  criteriosAvaliacao: [
    {
      criterio: "1. Auditoria Crítica de Fontes (Perplexity)",
      ponto1: "Aceitou a resposta da IA sem clicar nos links ou confiou cegamente apenas na presença da citação.",
      ponto2: "Clicou no link [1], mas apenas conferiu superficialmente sem confrontar a afirmação.",
      ponto3: "Aplicou o protocolo de 4 passos: checou autor/data, validou a frase e triangulou com fonte independente."
    },
    {
      criterio: "2. Ancoragem e Governança no NotebookLM",
      ponto1: "Subiu arquivos desordenados ou com dados pessoais de terceiros sem base legal ou orientação institucional.",
      ponto2: "Carregou fontes e conversou no chat, mas tratou o áudio/resumo como verdade pronta sem ler o texto ou checar citações.",
      ponto3: "Dominou a navegação por citações, respeitou as regras de LGPD de terceiros e usou o Studio como andaime de revisão temporário."
    },
    {
      criterio: "3. Abordagem Centrada no Humano (UNESCO)",
      ponto1: "Tratou as ferramentas com divisão rígida ou terceirizou a decisão crítica e autoral para a IA.",
      ponto2: "Compreendeu a adequação à tarefa, mas ainda tem dúvidas sobre quando aplicar supervisão humana.",
      ponto3: "Aplica com autonomia a regra de adequação à tarefa e tipo de evidência, mantendo a agência humana inegociável."
    }
  ],

  diretrizesDocentes: [
    "Circulação ativa da dupla: Laura orienta o protocolo de 4 passos e triangulação no Perplexity, e Maria apoia o upload, ancoragem e Studio no NotebookLM.",
    "Acolhimento e verificação de OCR: orientar alunos a testar se conseguem selecionar texto no PDF com o mouse antes de carregar no caderno.",
    "Rigor com LGPD e dados de terceiros: alertar explicitamente para não subirem prontuários, dados de pesquisa identificáveis, atas com CPFs ou gravações de aula sem base legal e autorização institucional.",
    "Postura com artefatos do Studio: lembrar que o áudio e os resumos são andaimes temporários de revisão que podem comprimir nuances."
  ],

  planoB: "Se o áudio do Studio demorar ou não carregar no idioma desejado, orientar a pedir no chat 'um resumo estruturado de revisão em tópicos'. Se a internet do laboratório oscilar ou houver bloqueio de login Google, as professoras projetam a demonstração ao vivo no telão e os alunos realizam o teste de busca no Duck.ai (que roda sem login) ou trabalham com PDFs baixados localmente."
};
