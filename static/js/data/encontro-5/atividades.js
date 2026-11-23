/**
 * Módulo 5 – Atividades Práticas e Laboratório
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const oficinaPratica = {
  isDiagnostica: false,
  titulo: "Oficina de Bancada: Do Detetive da Web ao Bibliotecário de Arquivos",
  tema: "Pesquisa Rastreável com Perplexity e Estudo Ancorado em Documentos com NotebookLM",
  duracao: "40 min em Laboratório (divididos em Etapa 1 e Etapa 2)",
  peso: "Instrumento Formativo e Prático (Rubrica de 3 Pontos no Portfólio Digital)",
  conducao: "Co-docência (Laura e Maria circulando pelas mesas)",
  ferramenta: "Navegador Web + Perplexity AI (Gratuito) + Google NotebookLM (Gratuito)",
  objetivo: "Capacitar o participante a escolher a ferramenta certa para cada desafio: realizar buscas na web com links auditáveis (Perplexity) e converter documentos estáticos em recursos interativos de estudo sem alucinação (NotebookLM).",

  etapa1: {
    titulo: "Etapa 1: Missão 'O Detetive de Fontes' (Perplexity AI • 15 min)",
    foco: "Pesquisa na web aberta com citações numeradas [1], [2] e auditoria ativa do link original.",
    passoAPasso: [
      "1. Escolha uma afirmação controversa ou comum (ex.: 'Estudar ouvindo música prejudica a memória' ou 'Café após o almoço atrapalha a absorção de nutrientes').",
      "2. Teste inicial no ChatGPT: Faça a pergunta e observe como ele responde 'de cabeça', sem trazer links diretos às fontes.",
      "3. Teste no Perplexity: Acesse perplexity.ai, ative o filtro Focus em 'Academic' e faça a mesma pergunta observando as fontes [1], [2], [3].",
      "4. Auditoria de Link: Abra ao menos uma fonte primária clicando no número correspondente e confira se a síntese da IA é fiel ao artigo.",
      "5. Registro no Portfólio: Anote: Afirmação testada, evidência encontrada no artigo e o link auditado."
    ]
  },

  etapa2: {
    titulo: "Etapa 2: Missão 'Do PDF ao Guia e Áudio' (Google NotebookLM • 20 min)",
    foco: "Criação de caderno inteligente, perguntas com destaque de linha e geração de artefatos multimídia no Studio.",
    passoAPasso: [
      "1. Acesse notebooklm.google.com com sua conta Google e crie um novo caderno de estudos.",
      "2. Faça o upload do PDF da aula (ou adicione o link de um artigo ou vídeo do YouTube da disciplina).",
      "3. Pergunte no Chat: 'Quais são as três ideias centrais deste material? Indique os trechos de onde tirou cada uma.'",
      "4. Clique nas citações numeradas e veja o painel lateral destacar a linha exata no PDF original.",
      "5. No painel Studio, clique em 'Guia de Estudo' e coloque o 'Audio Overview' para gerar, ouvindo um trecho da conversa dos apresentadores."
    ]
  },

  cincoElementos: [
    {
      elemento: "ChatGPT",
      comoAparece: "Roteirista Criativo (de cabeça)",
      funcao: "Redigir e-mails, estruturar planos com C-T-F-R, reformular textos e fazer auto-entrevista."
    },
    {
      elemento: "Perplexity",
      comoAparece: "Detetive da Web (Open RAG)",
      funcao: "Vasculhar a internet em tempo real, filtrar por periódicos (Academic) e trazer links auditáveis."
    },
    {
      elemento: "NotebookLM",
      comoAparece: "Bibliotecário Particular (Closed RAG)",
      funcao: "Travar a IA estritamente nos seus PDFs, destacar trechos no original e gerar podcasts e guias de estudo."
    }
  ],

  criteriosAvaliacao: [
    {
      criterio: "1. Auditoria de Fontes no Perplexity",
      ponto1: "Aceitou a resposta da IA sem clicar nem conferir os links originais.",
      ponto2: "Clicou no link [1], mas apenas passou o olho sem confrontar com a afirmação.",
      ponto3: "Abriu a fonte original, checou autoria/data e registrou a evidência fundamentada."
    },
    {
      criterio: "2. Ancoragem no NotebookLM",
      ponto1: "Fez perguntas desconectadas do material e estranhou a falta de resposta.",
      ponto2: "Carregou o PDF e conversou no chat, mas não explorou os cliques de citação.",
      ponto3: "Importou fontes, navegou pelos destaques no PDF e gerou guia ou áudio no Studio."
    },
    {
      criterio: "3. Postura Crítica e Discernimento (UNESCO)",
      ponto1: "Tratou todas as ferramentas como concorrentes idênticas ao ChatGPT.",
      ponto2: "Compreendeu a diferença de uso, mas ainda tem dúvidas sobre quando abrir cada uma.",
      ponto3: "Aplica com autonomia a regra de bolso: criar (ChatGPT), pesquisar (Perplexity) e estudar (NotebookLM)."
    }
  ],

  diretrizes: [
    "Circulação ativa da dupla: Laura auxilia na checagem de links no Perplexity e Maria apoia o upload e áudio no NotebookLM.",
    "Acolhimento a alunos com conexão lenta: o NotebookLM processa na nuvem da Google; tranquilize o aluno de que o áudio não trava a máquina.",
    "Reforço de privacidade: lembrar aos alunos para não subirem documentos com dados sigilosos ou pessoais durante a aula."
  ],

  planoB: "Se a internet do laboratório oscilar ou houver bloqueio de login Google, as professoras projetam a demonstração ao vivo no telão e os alunos realizam o teste de busca no Duck.ai (que roda sem login) ou trabalham com PDFs baixados localmente."
};
