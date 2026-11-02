/**
 * Módulo 3 – Atividades Práticas e Laboratório: ChatGPT no Mundo Real
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const oficinaPratica = {
  isDiagnostica: false,
  titulo: "Atividade Prática: Do Comando Simples ao Prompt Mestre",
  tema: "Aplicações no Mundo Real com os 4 Blocos e Meta-Prompting",
  duracao: "40 a 50 minutos em Laboratório",
  peso: "Instrumento Formativo no Portfólio Digital (0,5 ponto)",
  conducao: "Co-docência (Laura & Maria circulando pelas mesas)",
  ferramenta: "Navegador Web + ChatGPT (Modo Chat Temporário ou Convencional)",
  objetivo: "Desenvolver a habilidade prática de transformar pedidos vagos em instruções estruturadas (Contexto, Tarefa, Formato e Restrições) e experimentar o diálogo investigativo (Meta-Prompting) com checagem anti-alucinação.",

  situacaoProblema: {
    contexto: "Na rotina de estudos e trabalho, solicitações abertas à IA geram respostas superficiais e exigem retrabalho. Orientar a IA como um estagiário inteligente economiza tempo e garante entregas sob medida.",
    missao: "Executar no computador a Missão 1 (transformação antes/depois de uma tarefa real da sua rotina) e a Missão 2 (entrevista ativa com meta-prompting e trava anti-alucinação)."
  },

  comoExecutar: [
    {
      etapa: 1,
      titulo: "Missão 1 — Passo A: O Pedido Simples",
      desc: "Escolha uma tarefa real da sua rotina (estudos, trabalho ou organização). Digite um comando de 1 linha sem estrutura no ChatGPT e observe a resposta."
    },
    {
      etapa: 2,
      titulo: "Missão 1 — Passo B: O Prompt Mestre",
      desc: "Em um novo chat, envie a mesma solicitação estruturada com os 4 blocos: Contexto (papel/cenário), Tarefa (verbo direto), Formato (tabela/tópicos) e Restrições (limites e regras)."
    },
    {
      etapa: 3,
      titulo: "Missão 1 — Passo C: Análise Crítica",
      desc: "Compare visualmente o resultado antes e depois e anote no Portfólio Digital o impacto das restrições e do contexto."
    },
    {
      etapa: 4,
      titulo: "Missão 2 — Entrevista de Meta-Prompting",
      desc: "Peça à IA: 'Quero resolver [meu problema]. Antes de sugerir a solução, me faça 3 a 5 perguntas para entender meu cenário, tom e restrições'."
    },
    {
      etapa: 5,
      titulo: "Missão 2 — Trava Anti-Alucinação",
      desc: "Insira a trava 'se não tiver certeza, responda não especificado' e faça a auditoria final dos dados antes de registrar no portfólio."
    }
  ],

  primeiraTentativa: {
    prompt: "Me ajude a organizar minha semana de trabalho e estudos.",
    problemasProvaveis: [
      "A IA não sabe quantas horas livres você realmente tem por dia.",
      "Gera frases motivacionais genéricas ('beba água', 'durma 8 horas').",
      "Não prioriza as tarefas difíceis no período mais produtivo.",
      "Não define o formato visual ideal para acompanhamento."
    ]
  }
};
