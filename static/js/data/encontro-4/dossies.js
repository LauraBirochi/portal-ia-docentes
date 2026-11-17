/**
 * Módulo 4 – Dossiês de Embasamento Científico e Prático
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const dossies = {
  engenhariaInstrucoes: {
    tipoDossie: "cientifico",
    titulo: "Engenharia de Instruções e Interação Humano-IA",
    resumo: "Princípios teóricos e práticos para guiar a atenção dos modelos de linguagem através de instruções claras, especificações de contexto e restrições de formato.",
    topicos: [
      {
        titulo: "1. Clareza e Especificidade sobre Ambiguidade",
        conteudo: "Modelos de linguagem respondem de forma genérica quando instruções não delimitam escopo, público-alvo ou formato esperado."
      },
      {
        titulo: "2. O Paradigma do Diálogo Iterativo",
        conteudo: "A interação com IA é um processo conversacional: a melhor resposta geralmente decorre de ajustes e refinamentos sucessivos, e não de um comando isolado."
      }
    ],
    fontesCientificas: [
      {
        autor: "OpenAI (2024–2026)",
        titulo: "Prompt Engineering Guide & Best Practices for ChatGPT",
        publicacao: "OpenAI Developer Platform & Help Center",
        relevancia: "Guia oficial de boas práticas para formulação de instruções em modelos GPT.",
        link: "https://platform.openai.com/docs/guides/prompt-engineering"
      }
    ]
  },

  competenciasDocentesUNESCO: {
    tipoDossie: "juridico",
    titulo: "Marcos de Competências em IA para Docentes e Agência Humana (UNESCO & OSSE)",
    resumo: "Diretrizes internacionais sobre agência humana, integridade ética, prevenção de dependência cognitiva e design de prompts em contextos educacionais.",
    topicos: [
      {
        titulo: "1. AI Competency Framework for Teachers (UNESCO 2024)",
        conteudo: "O referencial internacional da UNESCO estabelece competências centrais para educadores: uso ético, agência centrada no humano, supervisão pedagógica crítica e salvaguarda da autonomia intelectual dos alunos."
      },
      {
        titulo: "2. Desenho Efetivo de Prompts na Prática Educacional (OSSE 2024)",
        conteudo: "Metodologias práticas para educadores transformarem o diálogo com modelos generativos em instrumentos de planejamento, diferenciação instrucional e cocriação formativa com verificação factual ativa."
      }
    ],
    fontesCientificas: [
      {
        autor: "UNESCO (2024)",
        titulo: "AI Competency Framework for Teachers",
        publicacao: "Paris: UNESCO",
        relevancia: "Referencial global oficial de competências docentes em inteligência artificial e agência humana.",
        link: "https://unesdoc.unesco.org/ark:/48223/pf0000391104"
      },
      {
        autor: "Office of the State Superintendent of Education - OSSE (2024)",
        titulo: "Designing Effective Prompts: Enhancing Educational and Professional Practice with ChatGPT",
        publicacao: "District of Columbia: OSSE",
        relevancia: "Guia prático para desenho de prompts educacionais, ética e supervisão docente com ChatGPT.",
        link: "https://osse.dc.gov/"
      }
    ]
  }
};
