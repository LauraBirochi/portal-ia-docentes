/**
 * Módulo 2 – Fio da Meada, Narrativa em 3 Atos e Glossário Rápido
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const fioDaMeada = {
  objetivoCentral: "Qual é a grande mensagem que os alunos precisam levar hoje?",
  mensagemChave: "Modelos de IA Generativa não 'pensam' nem possuem consciência: são calculadoras estatísticas de alta precisão que prevêem o próximo token a partir das instruções e do contexto que fornecemos no prompt.",
  explicacaoObjetivo: "Desmistificar o funcionamento interno das LLMs, ambientar todos os participantes no acesso às ferramentas gratuitas reais e capacitá-los na estruturação de prompts elementares funcionais e seguros.",
  atos: [
    {
      ato: 1,
      tempo: "00h00 às 00h55 (55 min)",
      titulo: "Retomada, O Salto Tecnológico & Como as LLMs Operam",
      desc: "Acolhimento da turma, alinhamento dos objetivos da aula e desmistificação do funcionamento dos Transformers: como o modelo fatia o texto em tokens e prevê a continuação estatisticamente mais provável.",
      gatilho: "A IA não tem opinião nem busca em enciclopédias como o Google: ela calcula qual palavra faz mais sentido vir em seguida com base no que aprendeu com bilhões de textos!"
    },
    {
      ato: 2,
      tempo: "00h55 às 02h05 (70 min c/ Intervalo)",
      titulo: "O Ecossistema de Ferramentas, Anatomia do Prompt & Intervalo",
      desc: "Navegação guiada pelos principais modelos de mercado (ChatGPT, Gemini, Claude, Copilot), diferenças práticas de interface e apresentação dos 4 pilares de um prompt básico.",
      gatilho: "A qualidade da resposta da IA é um espelho direto da clareza e do contexto da sua pergunta!"
    },
    {
      ato: 3,
      tempo: "02h05 às 03h00 (55 min)",
      titulo: "Oficina no Laboratório, Síntese & Próximos Passos",
      desc: "Prática mão na massa nos computadores: primeiro prompt supervisionado, testes comparativos em duplas e roda de conversa com síntese e preparação para o Módulo 3.",
      gatilho: "Hoje vocês dominaram os primeiros comandos; no Encontro 3, refinaremos essa técnica com engenharia de instruções avançada!"
    }
  ],
  glossario: [
    {
      termo: "LLM (Large Language Model)",
      def: "Modelo de Linguagem de Grande Escala: rede neural profunda treinada em volumes massivos de texto para compreender padrões linguísticos e gerar respostas coerentes."
    },
    {
      termo: "Token",
      def: "Unidade básica de processamento dos modelos de linguagem. Pode representar uma palavra, parte de uma palavra ou até um único caractere pontual (em média, 100 tokens equivalem a ~75 palavras)."
    },
    {
      termo: "Prompt",
      def: "A instrução, comando, contexto ou pergunta enviada pelo usuário para guiar a resposta gerada pelo modelo de inteligência artificial."
    },
    {
      termo: "Janela de Contexto",
      def: "A quantidade máxima de texto (em tokens) que um modelo consegue 'lembrar' e processar simultaneamente em uma mesma conversa."
    },
    {
      termo: "Alucinação",
      def: "Quando o modelo gera respostas factualmente incorretas, inventadas ou fictícias com tom de convicção absoluta e fluência gramatical perfeita."
    }
  ]
};

