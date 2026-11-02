/**
 * Módulo 3 – Dossiês de Embasamento Científico e Prático
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
        autor: "OpenAI (2024)",
        titulo: "Prompt Engineering Guide",
        publicacao: "OpenAI Developer Platform",
        relevancia: "Guia oficial de boas práticas para formulação de instruções em modelos GPT.",
        link: "https://platform.openai.com/docs/guides/prompt-engineering"
      }
    ]
  }
};
