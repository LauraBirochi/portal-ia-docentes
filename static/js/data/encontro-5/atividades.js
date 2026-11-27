/**
 * Módulo 5 – Atividades Práticas e Laboratório
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const oficinaPratica = {
  titulo: "Oficina de Bancada: Fato ou Informação Duvidosa?",
  duracao: "20 min em Laboratório (Investigação no Perplexity + NotebookLM)",
  peso: "Instrumento Formativo e Prático (Rubrica de 3 Pontos no Portfólio Digital)",
  objetivo: "Desenvolver o pensamento crítico e a capacidade de utilizar prompts para investigar afirmações no Perplexity, organizar evidências no NotebookLM, confrontar fontes originais e construir um veredito fundamentado.",

  situacaoProblema: {
    contexto: "Na internet, muitas afirmações são compartilhadas como fatos, mesmo quando são incompletas, exageradas ou não possuem comprovação suficiente. Como diferenciar informação confiável de conteúdo duvidoso?",
    missao: "Investigue uma afirmação usando Perplexity e NotebookLM. Confronte as informações encontradas, avalie as fontes e produza um veredito fundamentado em evidências."
  },

  comoExecutar: [
    {
      etapa: 1,
      titulo: "Escolha sua afirmação",
      desc: "Selecione uma afirmação da lista disponibilizada pelas professoras. Não pesquise a resposta antecipadamente."
    },
    {
      etapa: 2,
      titulo: "Investigue no Perplexity",
      desc: "Pesquise a afirmação. Solicite explicações, evidências, fontes confiáveis e possíveis contrapontos."
    },
    {
      etapa: 3,
      titulo: "Reúna no NotebookLM",
      desc: "Adicione as fontes encontradas e pergunte o que elas comprovam, quais limitações possuem e se existem divergências."
    },
    {
      etapa: 4,
      titulo: "Analise e formule o veredito",
      desc: "Classifique a afirmação como verdadeira, falsa, parcialmente verdadeira ou inconclusiva. Justifique com evidências."
    },
    {
      etapa: 5,
      titulo: "Registre sua descoberta",
      desc: "Produza um breve registro com a afirmação, o veredito, duas evidências e as fontes consultadas."
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
      criterio: "Qualidade da investigação",
      ponto1: "Pesquisa superficial, sem evidências verificadas.",
      ponto2: "Pesquisa com evidências, mas verificação parcial das fontes.",
      ponto3: "Pesquisa consistente, fontes verificadas e análise crítica das evidências."
    },
    {
      criterio: "Uso do prompting",
      ponto1: "Prompts genéricos, sem direcionamento ou refinamento.",
      ponto2: "Prompts contextualizados, com solicitações parcialmente estruturadas.",
      ponto3: "Prompts claros e direcionados, solicitando evidências, explicações e contrapontos."
    },
    {
      criterio: "Conclusão fundamentada",
      ponto1: "Veredito sem justificativa ou baseado apenas na resposta da IA.",
      ponto2: "Veredito com justificativa, mas pouco relacionado às fontes.",
      ponto3: "Veredito coerente, sustentado por evidências e reconhecimento de limitações."
    }
  ],

  diretrizesDocentes: [
    "Disponibilizar previamente uma lista de afirmações para investigação, evitando temas sensíveis, informações pessoais ou conteúdos que possam expor os alunos.",
    "Orientar os alunos a verificar as fontes originais, não apenas os resumos ou citações apresentados pelas IAs.",
    "Incentivar a elaboração e o refinamento de prompts, sem fornecer comandos prontos para todas as etapas.",
    "Reforçar que as ferramentas são auxiliares e que o veredito deve ser construído pelos alunos, com autonomia, senso crítico e responsabilidade.",
    "Não inserir dados pessoais, documentos privados ou informações identificáveis de terceiros nas ferramentas.",
    "Priorizar fontes científicas, institucionais, acadêmicas e especializadas, considerando autoria, data, contexto e qualidade das evidências."
  ],

  planoB: "Se o Perplexity estiver indisponível, realizar a investigação com pesquisa manual em buscadores e selecionar duas fontes confiáveis. Se o NotebookLM falhar, ler e comparar as fontes diretamente, registrando evidências, divergências e veredito em um documento ou bloco de notas local. A missão e os critérios de investigação permanecem os mesmos, independentemente das ferramentas."
};
