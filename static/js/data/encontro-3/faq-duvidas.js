/**
 * Módulo 3 – Perguntas Capciosas e Dúvidas Clássicas de Engenharia de Prompt
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const perguntasAlunos = [
  {
    id: 1,
    pergunta: "Por que duas pessoas no laboratório digitam exatamente o mesmo prompt no ChatGPT e recebem respostas diferentes?",
    respostaCurta: "Por causa da natureza probabilística dos modelos (amostragem por temperatura) e de pequenas diferenças invisíveis de contexto.",
    explicacaoDetalhada: "O ChatGPT não possui uma tabela fixa de respostas prontas. A cada novo token (fragmento de palavra), a rede neural calcula probabilidades e realiza um sorteio ponderado (guiado pelo parâmetro de temperatura do sistema). Além disso, o histórico anterior da conversa e as configurações de conta influenciam os pesos de autoatenção do modelo.",
    dicaPratica: "Para obter respostas mais previsíveis e consistentes, adicione restrições de formato rígidas (ex: 'responda estritamente em uma tabela com 3 colunas') e utilize chats temporários ou conversas recém-abertas."
  },
  {
    id: 2,
    pergunta: "Como fazer o ChatGPT parar de 'enrolar' com introduções corteses e respostas gigantescas cheias de clichês?",
    respostaCurta: "Utilize restrições negativas de formato e proibições explícitas de preâmbulos e conclusões no final do prompt.",
    explicacaoDetalhada: "Os modelos da OpenAI foram treinados por Reforço com Feedback Humano (RLHF) para soarem extremamente prestativos, corteses e completos. Se você não limitar a saída, ele naturalmente adicionará frases de boas-vindas ('Com certeza! Aqui está...'), explicações redundantes e mensagens motivacionais de encerramento.",
    dicaPratica: "Acrescente no bloco de restrições: 'Inicie a resposta diretamente no primeiro item, sem introduções de cortesia, sem saudações e sem conclusão. Limite cada ponto a no máximo 2 linhas.'"
  },
  {
    id: 3,
    pergunta: "Dizer 'Atue como um especialista em X' realmente melhora a qualidade da resposta ou é apenas um mito da internet?",
    respostaCurta: "Funciona de verdade: na engenharia de prompt, isso se chama 'Persona Prompting' e direciona a atenção da rede neural para subespaços semânticos específicos.",
    explicacaoDetalhada: "Quando você define um papel ('Atue como um auditor pedagógico experiente' ou 'Atue como um engenheiro eletricista'), você 'acende' clusters de conceitos e vocabulário técnico aprendidos durante o treinamento do modelo. Isso eleva o rigor dos critérios, melhora o vocabulário e reduz drasticamente respostas superficiais de senso comum.",
    dicaPratica: "Combine o papel com o público-alvo: 'Atue como um professor de física experiente explicando o conceito de autoatenção para estudantes do ensino médio sem conhecimento de cálculo.'"
  },
  {
    id: 4,
    pergunta: "O que fazer quando o ChatGPT inventa com convicção absoluta dados, artigos de lei ou referências que não existem?",
    respostaCurta: "Aplique técnicas de ancoragem (Grounding): forneça o texto de base e use travas negativas rígidas contra adivinhação.",
    explicacaoDetalhada: "A IA é um gerador de verossimilhança estatística, não um banco de dados de validação de verdade. Quando o modelo não encontra a informação com alta certeza, ele alucina um dado que soa perfeitamente plausível e convincente para manter o fluxo do texto.",
    dicaPratica: "Cole o texto oficial dentro do prompt entre delimitadores (ex: `\"\"\"texto\"\"\"`) e adicione a trava mestre: 'Baseie-se estritamente nas informações acima. Se um dado ou data não estiver presente no texto fornecido, responda apenas: Dado não especificado. Não tente adivinhar.'"
  },
  {
    id: 5,
    pergunta: "É melhor continuar conversando na mesma janela de chat ou abrir um chat novo a cada comando?",
    respostaCurta: "Abra um chat novo para tarefas diferentes; permaneça no mesmo chat apenas para refinar a mesma entrega (Multi-turn Prompting).",
    explicacaoDetalhada: "Toda vez que você envia uma nova mensagem, o ChatGPT reenvia todo o histórico anterior daquela conversa para o modelo. Se a conversa ficar longa demais ou misturar assuntos diferentes, ocorre a chamada 'contaminação de contexto': o modelo perde o foco, mistura regras antigas com as novas e pode degradar a qualidade da resposta.",
    dicaPratica: "Adote a regra do consultor: use 3 a 5 turnos no mesmo chat para lapidar um texto até a versão final. Concluído o trabalho, abra uma conversa nova para o próximo desafio."
  },
  {
    id: 6,
    pergunta: "Vale mais a pena escrever prompts em inglês para obter respostas melhores do que em português?",
    respostaCurta: "Para conceitos gerais, redação e realidade brasileira, o português é excelente e preserva o contexto cultural; o inglês só é vantajoso em código de programação ou pesquisas ultra-especializadas.",
    explicacaoDetalhada: "Embora o volume de dados em inglês durante o pré-treinamento seja maior, os modelos modernos (como GPT-4o e similares) possuem alinhamento multilíngue avançado. Escrever em português garante que nuances da legislação brasileira, expressões de trabalho e normas pedagógicas locais sejam respeitadas com fidelidade.",
    dicaPratica: "Escreva no seu idioma nativo com máxima clareza e estrutura. A qualidade da sua especificação (C-T-F-R) é dez vezes mais importante do que traduzir o prompt para o inglês."
  },
  {
    id: 7,
    pergunta: "Como pedir para a IA simplificar um texto técnico ou edital sem perder prazos, deveres e informações cruciais?",
    respostaCurta: "Use a técnica em duas etapas: primeiro peça a extração analítica dos fatos; depois peça a reescrita em linguagem simples.",
    explicacaoDetalhada: "Se você pedir apenas 'simplifique este edital', a IA pode resumir demais e cortar cláusulas essenciais. Dividir em duas etapas garante que o modelo primeiro processe e garanta os fatos antes de aplicar o estilo de linguagem acessível.",
    dicaPratica: "Prompt em duas partes: 'Passo 1: Extraia em tópicos apenas os prazos, valores e obrigações do texto abaixo. Passo 2: Reescreva esses tópicos em linguagem simples e cidadã, como se estivesse explicando para alguém que nunca leu um edital.'"
  }
];
