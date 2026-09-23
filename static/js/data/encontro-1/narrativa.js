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
      tempo: "00h00 às 00h55 (55 min)",
      titulo: "Acolhimento, Gênese Histórica & Definição Real da IA",
      desc: "Acolhimento afetivo da turma, alívio de ansiedades (sem fórmulas ou programação), revelação dos 70 anos de história (Alan Turing 1950 e John McCarthy em Dartmouth 1956), virada paradigmática (regras manuais vs aprendizado por padrões) e os 3 ingredientes da IA moderna (Dados, Algoritmos e Poder Computacional).",
      gatilho: "Vocês achavam que a IA nasceu ontem com o ChatGPT? Cientistas pesquisam isso há quase 70 anos e ela não é mágica: é pura matemática e aprendizado por padrões em dados!"
    },
    {
      ato: 2,
      tempo: "00h55 às 02h25 (90 min c/ Intervalo)",
      titulo: "A IA Invisível do Cotidiano, Mitos Desmontados & Soberania Brasileira",
      desc: "Mapeamento da IA invisível que já opera no bolso e nos serviços (antifraude <300ms, Teorema de Tesler), desconstrução rigorosa dos 5 grandes mitos (consciência, alucinações, matemática, trapaça e futuro do trabalho) e apresentação da soberania nacional com o Plano Brasileiro de IA (PBIA 2024–2028: SUS, inclusão) e o Marco Legal (PL 2338/2023).",
      gatilho: "A IA não veio para substituir você: ela veio para assumir o trabalho mecânico e devolver tempo para o que só o ser humano sabe fazer, com regras claras que protegem nossos direitos!"
    },
    {
      ato: 3,
      tempo: "02h25 às 03h00 (35 min)",
      titulo: "Laboratório Prático, Prova Diagnóstica de Nivelamento & Fechamento",
      desc: "Verificação de acesso e login com e-mail nos computadores (Missão 1), condução acolhedora da Missão 2: Prova Diagnóstica de Nivelamento (instrumento formativo sem nota punitiva com auxílio individual nas mesas) e gancho inspirador para a IA Generativa (ChatGPT) do Encontro 2.",
      gatilho: "Hoje dominamos a IA invisível que classifica e prevê. No Encontro 2, abriremos as ferramentas práticas para dominar a IA que CRIA!"
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
      termo: "Os 3 Ingredientes da IA Moderna",
      def: "A tríade essencial que impulsionou a IA na última década: Dados Massivos (Big Data gerado pela internet), Algoritmos Inteligentes (redes neurais profundas) e Poder Computacional (GPUs aceleradas em nuvem)."
    },
    {
      termo: "Efeito IA (Invisibilidade / Teorema de Tesler)",
      def: "Fenômeno sociotécnico formulado por Larry Tesler: quando uma tecnologia de IA funciona com estabilidade e perfeição no cotidiano, as pessoas deixam de chamá-la de 'IA' e passam a tratá-la como mero 'recurso de software comum'."
    },
    {
      termo: "Alucinação de Modelo",
      def: "Quando a IA gera respostas sintaticamente perfeitas e convincentes, mas com fatos, datas, leis ou autores completamente inventados por pura combinação probabilística."
    },
    {
      termo: "Super Autocompletar (Previsão de Tokens)",
      def: "Princípio fundamental dos Grandes Modelos de Linguagem (LLMs): prever estatisticamente qual é a próxima palavra mais provável com base no contexto da conversa e em bilhões de textos processados."
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
      termo: "Supervisão Humana (Human-in-the-Loop)",
      def: "Princípio pedagógico e ético inegociável: a IA atua como copiloto e assistente cognitivo, mas a autoria, validação crítica, discernimento moral e responsabilidade final são sempre 100% humanas."
    }
  ]
};
