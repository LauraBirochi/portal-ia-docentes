/**
 * Módulo 2 – Metadados Curriculares e Blocos Temáticos
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const moduloInfo = {
  numero: 2,
  total: 7,
  titulo: "Encontro 2: Prompts",
  subtitulo: "Do Funcionamento dos Tokens à Engenharia de Prompts Avançada e Segura",
  cargaHoraria: "Encontro 2 • 3 horas presenciais (180 min)",
  modalidade: "Presencial em Laboratório de Informática",
  publico: "Iniciantes e público geral (sem pré-requisitos técnicos ou matemáticos)",
  ferramentaPrincipal: "Navegador Web + Ferramentas de IA Generativa (ChatGPT / Gemini / Claude)",
  avaliacao: "Laboratório Prático: Desafio da Rotina de Estudos (Oficina de Prompts)"
};

export const blocosTematicos = [
  {
    id: 1,
    icone: "🤝",
    titulo: "Bloco 1: Acolhimento & Pauta do Encontro",
    subtitulo: "Abertura, importância das enquetes diagnósticas e visão geral da pauta do dia",
    slidesRange: [1, 4],
    tempoEstimado: "15 min",
    conducao: "Co-docência (Laura & Maria)"
  },
  {
    id: 2,
    icone: "⚡",
    titulo: "Bloco 2: Módulo 1 — O Funcionamento Interno (Tokens, Concatenação e Atenção)",
    subtitulo: "Buscadores vs. LLMs, previsão probabilística, autoatenção e a origem física das alucinações",
    slidesRange: [5, 14],
    tempoEstimado: "45 min",
    conducao: "Co-docência (Laura & Maria)"
  },
  {
    id: 3,
    icone: "✍️",
    titulo: "Bloco 3: Módulo 2 — Engenharia de Prompts na Prática",
    subtitulo: "Superando o pedido simples: Papel (Role), Tarefa (Task), Few-Shot e Chain of Thought",
    slidesRange: [15, 22],
    tempoEstimado: "40 min",
    conducao: "Co-docência (Laura & Maria)"
  },
  {
    id: 4,
    icone: "🛡️",
    titulo: "Bloco 4: Módulo 3 — Governança, Privacidade e Validação Crítica",
    subtitulo: "Proteção de dados (LGPD), higienização de entrada e checklist de validação factual",
    slidesRange: [23, 27],
    tempoEstimado: "25 min",
    conducao: "Co-docência (Laura & Maria)"
  },
  {
    id: 5,
    icone: "💻",
    titulo: "Bloco 5: Laboratório Prático — Oficina de Prompts (Rotina de Estudos)",
    subtitulo: "Aplicação nos computadores: ChatGPT temporário, prompt livre vs. 5 elementos e reflexão crítica",
    slidesRange: [28, 29],
    tempoEstimado: "45 min",
    conducao: "Co-docência (Laura & Maria)"
  },
  {
    id: 6,
    icone: "🎯",
    titulo: "Bloco 6: Síntese Formativa & Fechamento",
    subtitulo: "As 4 certezas para a prática docente cotidiana e convite para o Encontro 3",
    slidesRange: [30, 32],
    tempoEstimado: "10 min",
    conducao: "Co-docência (Laura & Maria)"
  }
];
