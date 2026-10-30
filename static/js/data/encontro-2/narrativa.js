/**
 * Módulo 2 – Fio da Meada, Narrativa em 3 Atos e Glossário Rápido
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const fioDaMeada = {
  objetivoCentral: "Qual é a grande mensagem que os alunos precisam levar hoje?",
  mensagemChave: "Modelos de IA Generativa não funcionam como motores de busca: são motores probabilísticos que fatiam texto em tokens e alocam atenção de forma concatenada. Prompts estruturados (Papel, Tarefa, Exemplos e Raciocínio) guiam essa atenção, enquanto ruídos provocam alucinações.",
  explicacaoObjetivo: "Superar o 'pedido simples', compreendendo os mecanismos internos de tokens e atenção (Módulo 1 - Laura), dominando a Engenharia de Prompts na prática (Módulo 2 - Maria), blindando dados com privacidade e validação crítica (Módulo 3 - Laura) e aplicando tudo na oficina de bancada com chat temporário (Atividade - Maria).",
  atos: [
    {
      ato: 1,
      tempo: "00h00 às 01h00 (60 min)",
      titulo: "Módulo 1: O Funcionamento Interno — Tokens, Concatenação e Atenção (Condução: Laura)",
      desc: "Desmistificação da IA como 'buscador': demonstração de que as LLMs recebem prompts como texto concatenado contínuo, dividem entradas em tokens e calculam a probabilidade do próximo token. Laura explica a autoatenção dos Transformers e como ruídos de digitação causam desvios de rota e alucinações factuais.",
      gatilho: "A IA não pesquisa na internet: ela calcula estatisticamente qual é o próximo pedaço de palavra mais provável com base no que você acabou de escrever!"
    },
    {
      ato: 2,
      tempo: "01h00 às 01h40 (40 min)",
      titulo: "Módulo 2: Engenharia de Prompts na Prática (Condução: Maria)",
      desc: "Maria assume a liderança pedagógica para ensinar a arte de superar o pedido ingênuo: prompts orientados a Papel (Role), Tarefa com limites negativos (Task & Bounds), Aprendizado por Exemplos (Few-Shot) e Raciocínio Passo a Passo (Chain of Thought).",
      gatilho: "Dar 2 exemplos de resposta e pedir para a IA 'pensar passo a passo' elimina mais de 80% das respostas genéricas e dos erros de cálculo!"
    },
    {
      ato: 3,
      tempo: "01h40 às 03h00 (80 min c/ Intervalo)",
      titulo: "Módulo 3: Governança (Laura) & Laboratório da Rotina de Estudos (Maria)",
      desc: "Laura conduz as regras de ouro da privacidade (LGPD, semáforo de dados e higienização prévia) e a auditoria humana indispensável. Em seguida, Maria assume a apresentação e condução da Atividade Prática no laboratório: teste do ChatGPT temporário, confronto entre o prompt livre e o prompt estruturado de 5 elementos, reflexão comparativa e síntese final com referências acadêmicas.",
      gatilho: "O prompt estruturado não é mágica nem estética: é a linguagem exata que orienta a atenção probabilística da máquina a serviço da educação!"
    }
  ],
  glossario: [
    {
      termo: "Token",
      def: "Unidade atômica de processamento dos modelos de linguagem. Pode ser um caractere, uma sílaba ou pedaço de palavra (em português, 100 tokens equivalem em média a ~75 palavras)."
    },
    {
      termo: "Concatenação de Entrada",
      def: "A esteira contínua de texto onde as instruções do sistema, o prompt do usuário e a resposta gerada até o momento são unificados em um único bloco de cálculo."
    },
    {
      termo: "Mecanismo de Atenção (Transformers)",
      def: "Algoritmo que calcula pesos matemáticos entre todos os tokens do texto, permitindo ao modelo focar nas partes centrais da instrução e entender concordâncias e referências contextuais."
    },
    {
      termo: "Alucinação Factual",
      def: "Erro de predição em que a IA gera informações falsas, datas erradas ou bibliografias inexistentes com tom gramatical impecável e convicção absoluta."
    },
    {
      termo: "Few-Shot Prompting",
      def: "Técnica que inclui 2 a 3 exemplos demonstrativos de entrada e saída dentro do próprio comando, ensinando o formato e o estilo esperado por imitação direta."
    },
    {
      termo: "Chain of Thought (CoT)",
      def: "Instrução deliberada ('Pense passo a passo') que força o modelo a desdobrar raciocínios intermediários antes da conclusão, evitando saltos probabilísticos e falhas lógicas."
    },
    {
      termo: "Chat Temporário / Sanitização",
      def: "Modo de uso que desativa o histórico e o treinamento corporativo sobre a conversa, complementado pela remoção obrigatória de dados pessoais sensíveis (LGPD)."
    }
  ]
};
