/**
 * Módulo 3 – Perguntas dos Alunos, Dúvidas Clássicas e Armadilhas de Engenharia de Prompt
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const perguntasAlunos = [
  {
    numero: 1,
    duvida: "Por que duas pessoas no laboratório digitam exatamente o mesmo prompt no ChatGPT e recebem respostas diferentes?",
    resposta: "O ChatGPT não possui uma tabela fixa de respostas prontas. A cada novo token (fragmento de palavra), a rede neural calcula probabilidades e realiza um sorteio ponderado (guiado pelo parâmetro de temperatura do sistema). Além disso, o histórico anterior da conversa e as configurações de conta influenciam os pesos de autoatenção do modelo.",
    pontoDidatico: "Explique a natureza probabilística da IA vs. a certeza determinística de uma calculadora: a máquina calcula a continuação mais provável, não busca em uma gaveta.",
    dicaPratica: "Para respostas mais consistentes, adicione restrições rígidas de formato (ex: 'tabela com 3 colunas') e utilize sempre chats novos ou temporários."
  },
  {
    numero: 2,
    duvida: "Como fazer o ChatGPT parar de 'enrolar' com introduções corteses e respostas gigantescas cheias de clichês?",
    resposta: "Os modelos da OpenAI foram alinhados por Reforço com Feedback Humano (RLHF) para soarem extremamente prestativos, corteses e completos. Se você não limitar a saída, ele naturalmente adicionará frases de boas-vindas ('Com certeza! Aqui está...'), explicações redundantes e mensagens motivacionais de encerramento.",
    pontoDidatico: "Demonstre a força das 'Restrições Negativas': proibir preâmbulos e delimitar tamanho em linhas é a ferramenta mais rápida de ganho de produtividade.",
    dicaPratica: "Acrescente no bloco de restrições: 'Inicie a resposta diretamente no primeiro item, sem introduções de cortesia, sem saudações e sem conclusão. Limite cada ponto a no máximo 2 linhas.'"
  },
  {
    numero: 3,
    duvida: "Dizer 'Atue como o maior especialista do mundo incrível e perfeito' realmente melhora a precisão factual?",
    resposta: "Não! Pesquisas científicas recentes comprovam que personas superlativas ('o maior especialista do mundo', 'plano perfeito e incrível') têm efeito nulo ou até negativo na exatidão factual de tarefas objetivas. Elas geram verborragia, jargões desnecessários e textos mais longos sem nenhum ganho real de substância. A persona serve exclusivamente para regular o tom de voz, público-alvo e estilo de comunicação (Diferenciação Funcional da Persona), mas deve ser omitida ou minimizada em cálculos, tabelas de rotina e análises diretas.",
    pontoDidatico: "Desmistifique o 'Falso Bom Prompt': ensine que a precisão vem de contexto com dados reais, verbos de tarefa diretos e restrições negativas, e não de elogios mágicos à IA.",
    dicaPratica: "Em vez de adjetivos vazios, use o papel apenas para o tom e foque nas restrições: 'Atue como comunicador público. Explique este edital para alunos iniciantes em uma tabela com 3 colunas, sem usar juridiquês.'"
  },
  {
    numero: 4,
    duvida: "O que fazer quando o ChatGPT inventa com convicção absoluta dados, artigos de lei ou referências que não existem?",
    resposta: "A IA é um gerador de verossimilhança estatística, não um banco de dados de validação de verdade. Quando o modelo não encontra a informação com alta certeza, ele alucina um dado que soa perfeitamente plausível e convincente para manter o fluxo do texto. Para neutralizar isso, aplicamos a ancoragem (Grounding) fornecendo o texto de referência e usando travas explícitas de incerteza.",
    pontoDidatico: "Reafirme o princípio da Agência Humana (UNESCO): fluência gramatical impecável não é sinônimo de veracidade; o crivo e a checagem externa são sempre humanos.",
    dicaPratica: "Cole o texto oficial entre aspas e adicione: 'Baseie-se estritamente nas informações fornecidas. Se um dado não estiver explícito no texto, responda apenas: Dado não especificado. Não tente adivinhar.'"
  },
  {
    numero: 5,
    duvida: "É melhor continuar conversando na mesma janela de chat ou abrir um chat novo a cada comando?",
    resposta: "Abra um chat novo para tarefas diferentes; permaneça no mesmo chat apenas para refinar a mesma entrega (Multi-turn Prompting). Toda vez que você envia uma mensagem, o ChatGPT reenvia o histórico anterior da conversa. Se a conversa ficar longa demais ou misturar temas distintos, ocorre a 'contaminação de contexto': o modelo perde o foco e degrada a qualidade da resposta.",
    pontoDidatico: "Ensine a regra dos 3 a 5 turnos: use poucos comandos para lapidar uma entrega até a versão final; ao iniciar um novo desafio, abra um chat limpo.",
    dicaPratica: "Para mudar de assunto com segurança: abra uma nova conversa ('Novo chat') ou ative o 'Chat Temporário' para não registrar histórico."
  },
  {
    numero: 6,
    duvida: "Vale mais a pena escrever prompts em inglês para obter respostas melhores do que em português?",
    resposta: "Para conceitos gerais, redação e realidade profissional brasileira, o português é excelente e preserva o contexto cultural e normativo. O inglês só traz vantagem técnica em programação ou pesquisas científicas ultra-específicas. A qualidade da resposta depende 90% da clareza dos seus 4 blocos (C-T-F-R) e não da tradução do idioma.",
    pontoDidatico: "Desmistifique o preconceito de que 'a IA só entende bem inglês': modelos atuais têm treinamento multilíngue denso e compreendem nuances do português com perfeição.",
    dicaPratica: "Priorize escrever no seu idioma com clareza cristalina, contexto e restrições bem definidas."
  },
  {
    numero: 7,
    duvida: "Como pedir para a IA simplificar um texto denso ou burocrático sem perder prazos, deveres e informações cruciais?",
    resposta: "A melhor estratégia é a técnica em dois estágios: primeiro force a IA a extrair analiticamente os dados fatuais e as obrigações em tópicos; depois peça a reescrita desses tópicos em linguagem simples e acessível. Pedir simplificação direta de uma só vez aumenta o risco de a IA resumir demais e cortar cláusulas essenciais.",
    pontoDidatico: "A técnica de decomposição de tarefas complexas em etapas sucessivas é uma das ferramentas mais sofisticadas da engenharia de prompt.",
    dicaPratica: "Use a instrução encadeada: 'Passo 1: Extraia em tópicos apenas os prazos e obrigações do texto abaixo. Passo 2: Reescreva esses tópicos em linguagem simples para que qualquer pessoa compreenda sem jargões.'"
  },
  {
    numero: 8,
    duvida: "Se o texto gerado pelo ChatGPT está fluente, elegante e sem erros de português, posso confiar que as informações são verdadeiras?",
    resposta: "Nunca! Esse é o maior ponto cego dos usuários iniciantes: confundir revisão textual com checagem factual. O ChatGPT é um escritor improvisador que prevê palavras com base em probabilidade; ele não possui consciência nem verifica prateleiras como um bibliotecário. Um texto pode ser gramaticalmente perfeito e, ao mesmo tempo, conter leis inexistentes, citações inventadas e números distorcidos. A curadoria factual externa é responsabilidade 100% humana (UNESCO).",
    pontoDidatico: "Reforce a distinção essencial: coesão textual é papel da máquina; verdade e responsabilidade ética e jurídica são prerrogativas humanas inegociáveis.",
    dicaPratica: "Inclua sempre no prompt a Trava de Segurança da UNESCO: 'Se você não tiver certeza de algum dado, responda não especificado ou marque o trecho com [necessita verificação]. Não tente adivinhar.'"
  }
];

export default perguntasAlunos;
