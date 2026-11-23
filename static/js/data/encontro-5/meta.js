/**
 * Módulo 5 – Metadados Curriculares e Blocos Temáticos
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const moduloInfo = {
  numero: 5,
  total: 7,
  data: "27/11",
  titulo: "Encontro 5: Ferramentas de IA na Prática",
  subtitulo: "Do Chatbot Generalista aos Especialistas em Busca (Perplexity) e Ancoragem em Documentos (NotebookLM)",
  cargaHoraria: "Encontro 5 • 3 horas presenciais (180 min)",
  modalidade: "Presencial em Laboratório de Informática",
  publico: "Iniciantes e público geral (sem pré-requisitos técnicos)",
  ferramentaPrincipal: "Perplexity AI + Google NotebookLM (+ ChatGPT)",
  avaliacao: "Oficina de Bancada em Duas Etapas: Missão 1 (Detetive de Fontes) e Missão 2 (Do PDF ao Guia e Áudio)"
};

export const blocosTematicos = [
  {
    id: 1,
    icone: "🧰",
    titulo: "Bloco 1: As Ferramentas (ChatGPT, Perplexity e NotebookLM)",
    subtitulo: "A metáfora dos 3 especialistas, origem das respostas e matriz de decisão",
    slidesRange: [1, 4],
    tempoEstimado: "40 min",
    conducao: "Co-docência (Laura & Maria)"
  },
  {
    id: 2,
    icone: "🔍",
    titulo: "Bloco 2: Perplexity na Prática — O Detetive da Web",
    subtitulo: "RAG em web aberta, busca com links auditáveis, filtros e oficina de checagem",
    slidesRange: [5, 8],
    tempoEstimado: "45 min",
    conducao: "Condução: Laura"
  },
  {
    id: 3,
    icone: "📓",
    titulo: "Bloco 3: Google NotebookLM — O Bibliotecário Particular",
    subtitulo: "RAG fechado nos seus documentos, citações linha a linha, painel Studio e oficina",
    slidesRange: [9, 13],
    tempoEstimado: "55 min",
    conducao: "Condução: Maria"
  },
  {
    id: 4,
    icone: "⚖️",
    titulo: "Bloco 4: Armadilhas Críticas, Ética UNESCO & Fechamento",
    subtitulo: "Vícios de iniciantes, agência humana, checklist de bolso e referências oficiais",
    slidesRange: [14, 17],
    tempoEstimado: "40 min",
    conducao: "Co-docência (Laura & Maria)"
  }
];
