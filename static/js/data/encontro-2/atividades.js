/**
 * Módulo 2 – Atividades Práticas e Laboratório: Engenharia de Prompts
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const oficinaPratica = {
  isDiagnostica: false,
  titulo: "Atividade Prática: Engenharia de Prompts",
  tema: "Organizar uma rotina de estudos",
  duracao: "40 a 60 minutos em Laboratório",
  peso: "Instrumento Formativo de Desenvolvimento de Habilidades Práticas",
  conducao: "Maria (com apoio de Laura)",
  ferramenta: "Navegador Web + ChatGPT (Chat Temporário / Modo Não Personalizado)",
  objetivo: "Desenvolver a capacidade de formular, analisar e aprimorar prompts para obter respostas mais úteis, claras e adequadas de uma IA generativa.",

  situacaoProblema: {
    contexto: "Você tem provas de Matemática e História na próxima semana, trabalha ou estuda em outros horários e está com dificuldade de manter constância.",
    missao: "Usar uma IA generativa para produzir uma rotina de estudos realista para os próximos sete dias. O resultado deve ser útil, claro, organizado e adequado à sua necessidade real."
  },

  comoExecutar: [
    {
      etapa: 1,
      titulo: "Primeira tentativa",
      desc: "Escreva um prompt livre, sem usar a estrutura estudada na teoria."
    },
    {
      etapa: 2,
      titulo: "Análise",
      desc: "Envie o prompt à IA e observe a resposta. Identifique o que faltou, o que ficou genérico ou o que não atendeu à necessidade."
    },
    {
      etapa: 3,
      titulo: "Aprimoramento",
      desc: "Reescreva o prompt utilizando os cinco elementos: papel, contexto, instrução, formato e restrições."
    },
    {
      etapa: 4,
      titulo: "Nova tentativa",
      desc: "Envie o segundo prompt e compare os resultados."
    },
    {
      etapa: 5,
      titulo: "Reflexão",
      desc: "Explique o que mudou e por que a segunda resposta ficou mais adequada — ou não."
    }
  ],

  primeiraTentativa: {
    prompt: "Crie uma rotina de estudos para mim.",
    problemasProvaveis: [
      "A IA não sabe quais disciplinas você precisa estudar.",
      "Não conhece as datas das provas.",
      "Não sabe quanto tempo você tem disponível por dia.",
      "Não considera suas dificuldades ou prioridades.",
      "Não define o formato ideal da resposta.",
      "Pode gerar uma rotina genérica e pouco realista."
    ]
  },

  segundaTentativa: {
    prompt: "Atue como um orientador de estudos. Crie uma rotina de estudos para os próximos 7 dias para um estudante que tem prova de Matemática e História no fim da semana. Ele tem 2 horas livres por dia, de segunda a sexta, e 4 horas no sábado. Priorize Matemática, porque tem mais dificuldade nela, mas inclua revisão de História. Apresente o resultado em uma tabela com dia, horário, disciplina, atividade específica e objetivo. Inclua pausas e uma revisão geral no sábado. Não sugira mais de 2 horas de estudo por dia."
  },

  cincoElementos: [
    {
      elemento: "Papel",
      comoAparece: "“Atue como um orientador de estudos”",
      funcao: "Define a perspectiva e o tipo de resposta esperada"
    },
    {
      elemento: "Contexto",
      comoAparece: "Provas, disciplinas, tempo disponível e dificuldade",
      funcao: "Personaliza a resposta"
    },
    {
      elemento: "Instrução",
      comoAparece: "“Crie uma rotina de estudos para os próximos 7 dias”",
      funcao: "Indica a tarefa principal"
    },
    {
      elemento: "Formato",
      comoAparece: "“Apresente o resultado em uma tabela…”",
      funcao: "Organiza a saída"
    },
    {
      elemento: "Restrições",
      comoAparece: "“Não sugira mais de 2 horas por dia”; incluir pausas",
      funcao: "Limita e torna o resultado realista"
    }
  ],

  comparacaoRespostas: [
    { pergunta: "A IA entendeu minha necessidade?" },
    { pergunta: "O resultado foi genérico ou personalizado?" },
    { pergunta: "O formato foi adequado?" },
    { pergunta: "Faltou alguma informação importante?" },
    { pergunta: "O que eu mudaria em uma terceira tentativa?" }
  ],

  reflexaoFinal: {
    perguntaGuia: "Qual prompt produziu a melhor resposta? O que você acrescentou ou corrigiu no segundo prompt? Por que essas mudanças melhoraram — ou não melhoraram — o resultado?"
  },

  configuracaoChatGPT: [
    "Abra um Chat temporário.",
    "Selecione “Não personalizado”, se essa opção estiver disponível.",
    "Não utilize memórias, instruções personalizadas ou plugins.",
    "Faça as duas tentativas dentro da mesma conversa temporária.",
    "Não salve a conversa ao final.",
    "Importante: não insira dados pessoais sensíveis, como CPF, endereço, senhas, notas ou informações identificáveis."
  ],

  criteriosAvaliacao: [
    {
      criterio: "Clareza do prompt",
      ponto1: "Muito vago",
      ponto2: "Parcialmente claro",
      ponto3: "Claro, específico e contextualizado"
    },
    {
      criterio: "Uso dos cinco elementos",
      ponto1: "Usa até 1 elemento",
      ponto2: "Usa 2 ou 3 elementos",
      ponto3: "Usa os 5 elementos"
    },
    {
      criterio: "Análise da resposta",
      ponto1: "Não identifica problemas",
      ponto2: "Identifica problemas gerais",
      ponto3: "Identifica falhas específicas"
    },
    {
      criterio: "Aprimoramento",
      ponto1: "Não melhora o prompt",
      ponto2: "Melhora parcialmente",
      ponto3: "Melhora o prompt de forma significativa"
    },
    {
      criterio: "Reflexão",
      ponto1: "Ausente ou superficial",
      ponto2: "Parcial",
      ponto3: "Explica as mudanças e seus efeitos"
    }
  ],

  outrasSituacoesPossiveis: [
    "Compreender um conteúdo difícil.",
    "Criar um planejamento de projeto.",
    "Revisar um texto acadêmico.",
    "Resolver um problema de programação.",
    "Organizar informações de um documento.",
    "Elaborar um plano de ação profissional."
  ],

  diretrizesDocentes: [
    "Maria assume a liderança da apresentação da atividade no projetor, explicando com clareza a situação-problema e o ciclo em 5 passos.",
    "Laura e Maria circulam ativamente pelo laboratório verificando se todos abriram o Chat Temporário antes de digitar.",
    "Estimular os alunos a não terem vergonha de testar o prompt livre ('Crie uma rotina...'): o contraste com o prompt estruturado é o maior catalisador de aprendizado.",
    "Maria orienta a leitura da resposta da 1ª tentativa: apontar onde a IA colocou 6 horas diárias de estudo irrealistas.",
    "Auxiliar na digitação do prompt estruturado e conferir se todos os 5 elementos foram contemplados.",
    "Maria conduz uma rodada rápida de 5 minutos compartilhando as reflexões mais marcantes na tela do projetor."
  ],

  planoB: "Caso algum aluno enfrente bloqueio temporário ou instabilidade de rede, organizar duplas de trabalho ou utilizar modelos alternativos (Google Gemini ou Microsoft Copilot) em aba anônima."
};
