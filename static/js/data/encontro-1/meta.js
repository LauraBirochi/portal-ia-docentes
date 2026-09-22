/**
 * Módulo 1 – Metadados Curriculares e Blocos Temáticos
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const moduloInfo = {
  numero: 1,
  total: 7,
  titulo: "Desmistificando a IA: Da Ficção Científica à Realidade",
  subtitulo: "Gênese histórica, definição descomplicada, a IA invisível do dia a dia, mitos, visão do Brasil, regulação e fundamentos de aprendizado",
  cargaHoraria: "Encontro 1 • 3 horas presenciais (180 min)",
  modalidade: "Presencial em Laboratório de Informática",
  publico: "Iniciantes e público geral (sem pré-requisitos técnicos ou matemáticos)",
  ferramentaPrincipal: "Navegador Web + Template do Portfólio Digital individual",
  avaliacao: "Atividade 1 no Portfólio Digital Contínuo (0,5 ponto)"
};

export const blocosTematicos = [
  {
    id: 1,
    icone: "🤝",
    titulo: "Bloco 1: Acolhimento, Contrato Pedagógico & Estrutura",
    subtitulo: "Apresentação da co-docência, cronograma dos 7 encontros, alívio de ansiedade e requisito de e-mail",
    slidesRange: [1, 6],
    tempoEstimado: "30 min"
  },
  {
    id: 2,
    icone: "🕰️",
    titulo: "Bloco 2: Gênese Histórica, Definição & Os 3 Ingredientes",
    subtitulo: "Origem (Turing 1950, Dartmouth 1956), programação vs padrões e os 3 ingredientes da IA moderna",
    slidesRange: [7, 10],
    tempoEstimado: "25 min"
  },
  {
    id: 3,
    icone: "📱",
    titulo: "Bloco 3: A IA Invisível do Dia a Dia & Teorema de Tesler",
    subtitulo: "A IA da ficção (Rosie) vs IA estreita real, Teorema de Larry Tesler e os 4 exemplos cotidianos",
    slidesRange: [11, 15],
    tempoEstimado: "30 min"
  },
  {
    id: 4,
    icone: "🎭",
    titulo: "Bloco 4: Desmistificando a IA – Os 5 Grandes Mitos",
    subtitulo: "Desconstrução de mitos: consciência, alucinações, linguagem/matemática, ética/trapaça e o futuro do trabalho",
    slidesRange: [16, 21],
    tempoEstimado: "30 min"
  },
  {
    id: 5,
    icone: "🇧🇷",
    titulo: "Bloco 5: Brasil, Cidadania & Legislação",
    subtitulo: "Plano Brasileiro de IA (PBIA 2024–2028: SUS, Soberania) e o Marco Legal da IA (PL 2338/2023 / LGPD)",
    slidesRange: [22, 24],
    tempoEstimado: "20 min"
  },
  {
    id: 6,
    icone: "💻",
    titulo: "Bloco 6: Laboratório Prático & Fechamento",
    subtitulo: "Missão login de e-mail, oficina prática Raio-X da IA no Portfólio Digital (0,5 pt) e síntese do Encontro 1",
    slidesRange: [25, 27],
    tempoEstimado: "45 min"
  }
];
