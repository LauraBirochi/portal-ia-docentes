/**
 * Módulo 3 – Perguntas Frequentes e Dúvidas dos Alunos
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const perguntasAlunos = [
  {
    id: 1,
    pergunta: "Por que o ChatGPT às vezes responde de forma tão diferente para duas pessoas que digitaram pedidos parecidos?",
    respostaCurta: "Pequenas variações de palavras, o histórico anterior da conversa e a temperatura probabilística do modelo afetam os tokens selecionados na resposta.",
    explicacaoDetalhada: "Mesmo em comandos similares, cada palavra adicional atua como um peso na autoatenção da rede neural. Quanto mais específico e delimitado for o seu prompt, menor a chance de divergência indesejada.",
    dicaPratica: "Ao compartilhar prompts com colegas, padronize papel, contexto, restrições e use conversas novas (ou chats temporários) para evitar contaminação de contexto."
  },
  {
    id: 2,
    pergunta: "O que fazer quando a resposta do ChatGPT vem longa demais ou cheia de 'enrolação'?",
    respostaCurta: "Defina limites explícitos de formato e tamanho no próprio comando (ex: 'responda em no máximo 3 tópicos de 2 linhas').",
    explicacaoDetalhada: "Por padrão, o modelo tende a ser cordial e prolixo. Quando você estabelece restrições de formato ('sem introdução', 'em tabela', 'tópicos objetivos'), você força o modelo a alocar atenção apenas ao conteúdo essencial.",
    dicaPratica: "Acrescente ao final do prompt: 'Seja direto e objetivo, sem preâmbulos ou conclusões genéricas.'"
  }
];
