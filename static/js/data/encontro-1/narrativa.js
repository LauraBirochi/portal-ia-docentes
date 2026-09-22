/**
 * Módulo 1 – Fio da Meada, Narrativa em 3 Atos e Glossário Rápido
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const fioDaMeada = {
  objetivoCentral: "Qual é a grande mensagem que os alunos precisam levar hoje?",
  mensagemChave: "A Inteligência Artificial é uma ciência de mais de 70 anos que já opera silenciosamente em nosso cotidiano; ela não tem consciência nem sentimentos: é matemática, probabilidade e reconhecimento de padrões em dados para nos potencializar como cidadãos conscientes e autônomos.",
  explicacaoObjetivo: "Nosso objetivo hoje não é ensinar código ou fórmulas, mas dar à turma o discernimento para entender a origem da tecnologia (1950–1956), separar os mitos do cinema da tecnologia real, reconhecer a estratégia e as leis do Brasil (PBIA e Marco Legal) e dominar o laboratório prático com segurança.",
  atos: [
    {
      ato: 1,
      tempo: "00h00 às 00h40 (40 min)",
      titulo: "Acolhimento, Gênese Histórica & Definição Real da IA",
      desc: "Acolhemos a turma, aliviamos a ansiedade (sem matemática ou programação), revelamos os 70 anos de história (Alan Turing 1950 e John McCarthy em Dartmouth 1956) e construímos a definição intuitiva: a virada de regras cegas manuais para o aprendizado por padrões em dados.",
      gatilho: "Vocês achavam que a IA nasceu ontem com o ChatGPT? Cientistas pesquisam isso há quase 70 anos e ela não é mágica: é aprendizado por padrões!"
    },
    {
      ato: 2,
      tempo: "00h40 às 01h15 (35 min)",
      titulo: "A IA Invisível, Desmistificando os 5 Mitos, O Brasil e as Leis",
      desc: "Mapeamos a IA que já opera no bolso e nos bancos (câmeras, antifraude <300ms, GPS), desmontamos os 5 grandes mitos (consciência, alucinações, matemática, trapaça e trabalho) e apresentamos o Plano Brasileiro de IA (PBIA) e o Marco Legal (PL 2338/2023).",
      gatilho: "A IA não veio para substituir você: ela veio para tirar o trabalho mecânico e devolver tempo para o que só você sabe fazer, com regras claras que protegem nossos direitos!"
    },
    {
      ato: 3,
      tempo: "01h30 às 03h00 (90 min)",
      titulo: "Como a IA Aprende, Laboratório Prático & Fechamento",
      desc: "Explicamos a lógica do Super Autocompletar, testamos o login de e-mail de todos os alunos no computador, conduzimos a oficina do Raio-X da IA no Portfólio Digital (0,5 pt) e fazemos a ponte para a IA Generativa (ChatGPT) do Encontro 2.",
      gatilho: "Hoje dominamos a IA invisível que classifica e prevê. No Encontro 2, abriremos o ChatGPT para dominar a IA que CRIA!"
    }
  ],
  glossario: [
    {
      termo: "IA Estreita (ANI / Narrow AI)",
      def: "É 100% da IA existente no planeta hoje. Hiperespecialista em apenas UMA tarefa específica (ex: detectar fraude bancária, transcrever voz, sugerir rotas). Não possui consciência nem sentimentos."
    },
    {
      termo: "IA Geral (AGI / General AI)",
      def: "Conceito puramente teórico de ficção científica. Máquina com flexibilidade intelectual humana universal e autoconsciência. NÃO existe no mundo real."
    },
    {
      termo: "PBIA (Plano Brasileiro de IA 2024–2028)",
      def: "Política pública nacional lançada pelo Governo Federal que destina R$ 23 bilhões para soberania digital, IA na saúde pública (SUS), infraestrutura de supercomputadores e capacitação da população."
    },
    {
      termo: "Marco Legal da IA (PL 2338/2023)",
      def: "Projeto de lei em tramitação no Congresso Nacional que estabelece regras éticas, direitos dos cidadãos, proteção de dados (LGPD) e classificação de risco para sistemas de IA no Brasil."
    },
    {
      termo: "Efeito IA (Invisibilidade / Teorema de Tesler)",
      def: "Fenômeno sociotécnico: quando uma tecnologia de IA funciona com estabilidade e perfeição no cotidiano, as pessoas deixam de chamá-la de 'IA' e passam a chamá-la apenas de 'recurso comum'."
    },
    {
      termo: "Alucinação de Modelo",
      def: "Quando a IA gera respostas gramaticalmente perfeitas e convincentes, mas com fatos, datas, leis ou autores completamente inventados por pura combinação probabilística."
    },
    {
      termo: "Super Autocompletar (Previsão de Tokens)",
      def: "Princípio fundamental dos Grandes Modelos de Linguagem (LLMs): prever estatisticamente qual é a próxima palavra mais provável com base no contexto do diálogo e em bilhões de textos lidos."
    }
  ]
};
