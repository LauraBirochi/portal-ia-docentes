/**
 * Módulo 3 – Metadados Curriculares e Blocos Temáticos
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const moduloInfo = {
  numero: 3,
  total: 7,
  data: "06/11",
  titulo: "Encontro 3: ChatGPT na Prática",
  subtitulo: "Do Comando Simples ao Trabalho Real: Estrutura C-T-F-R, Diálogo Iterativo e Meta-Prompting",
  cargaHoraria: "Encontro 3 • 3 horas presenciais (180 min)",
  modalidade: "Presencial em Laboratório de Informática",
  publico: "Iniciantes e público geral (sem pré-requisitos técnicos)",
  ferramentaPrincipal: "Navegador Web + ChatGPT (OpenAI)",
  avaliacao: "Oficina de Bancada: Desafios Práticos no Portfólio Digital (Etapa 1: Duelo C-T-F-R • Etapa 2: Meta-Prompting)"
};

export const blocosTematicos = [
  {
    id: 1,
    icone: "🧩",
    titulo: "Bloco 1: Fundamentos & Estrutura C-T-F-R",
    subtitulo: "Acolhimento, Handoff do Estagiário Inteligente e a Evolução do PCTFR para os 4 Blocos",
    slidesRange: [1, 5],
    tempoEstimado: "45 min",
    conducao: "Co-docência (Laura & Maria)"
  },
  {
    id: 2,
    icone: "⚡",
    titulo: "Bloco 2: Práticas no Mundo Real & Blindagem de Privacidade",
    subtitulo: "Organização Pessoal e Redação/Simplificação de Jargões + Regra do Cartão-Postal e Café com Prosa",
    slidesRange: [6, 9],
    tempoEstimado: "45 min (c/ intervalo)",
    conducao: "Co-docência (Laura & Maria)"
  },
  {
    id: 3,
    icone: "🤖",
    titulo: "Bloco 3: Diálogo Iterativo, Ética & Oficina de Bancada",
    subtitulo: "Meta-Prompting com Demonstração no Telão, Travas [necessita verificação] e Oficina nos Computadores",
    slidesRange: [10, 13],
    tempoEstimado: "70 min",
    conducao: "Co-docência (Laura & Maria)"
  },
  {
    id: 4,
    icone: "🎉",
    titulo: "Bloco 4: Socialização & Fechamento",
    subtitulo: "Roda de Conversa (Show & Tell), Checklist de Bolso, Próximos Passos e Referências Bibliográficas",
    slidesRange: [14, 16],
    tempoEstimado: "20 min",
    conducao: "Co-docência (Laura & Maria)"
  }
];
