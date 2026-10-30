/**
 * Encontro 2 – Deck de Slides com Roteiro da Docente para o Projetor
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 * 
 * Tema Central: Do Funcionamento dos Tokens à Engenharia de Prompts Avançada e Segura
 * Coordenação Pedagógica: Prof. Lúcio Rodrigo
 * Docência Compartilhada: Laura & Maria
 * 
 * Design System: CKW Design System + Frontend Slides (16:9 Widescreen Nativo, Deep Navy Contrast)
 */

export const slidesComNotas = [
  // =========================================================================
  // BLOCO 1: ACOLHIMENTO & ENQUETES (Slides 1 e 2)
  // =========================================================================
  {
    numero: 1,
    id: 1,
    bloco: 1,
    tipo: "capa",
    categoria: "Abertura",
    titulo: "Encontro 2: Prompts",
    subtitulo: "Do Funcionamento dos Tokens à Engenharia de Prompts Avançada e Segura",
    detalhes: ["32 Horas Certificadas • 7 Encontros", "Docência: Laura & Maria", "Coordenação: Prof. Lúcio Rodrigo"],
    conducao: "Co-docência (Laura & Maria)",
    notasProfessora: {
      tempoSugerido: "5 min",
      objetivoSlide: "Acolher a turma no segundo encontro, apresentar o tema central dos prompts e situar os alunos na evolução prática do curso.",
      oQueFalar: "Olá a todos! Sejam muito bem-vindos ao nosso segundo encontro. Hoje damos um salto fundamental: vamos desmistificar o que acontece por dentro da máquina quando digitamos um comando e aprender a construir prompts estruturados, robustos e seguros. Preparem-se porque hoje abriremos as ferramentas e colocaremos a mão na massa!"
    }
  },
  {
    numero: 2,
    id: 2,
    bloco: 1,
    tipo: "apresentacao",
    categoria: "Diagnóstico Pedagógico",
    titulo: "A Importância das Enquetes no Nosso Curso",
    subtitulo: "Como as respostas dos professores orientam o ritmo, os exemplos e o foco de cada aula",
    conducao: "Co-docência (Laura & Maria)",
    itensDestaque: [
      {
        icone: "📊",
        titulo: "Voz Ativa dos Docentes",
        desc: "As respostas das enquetes revelam onde estão as maiores curiosidades e os medos reais da turma."
      },
      {
        icone: "🎯",
        titulo: "Ajuste Fino do Conteúdo",
        desc: "No nosso formulário, 66,7% achavam que a IA era um buscador e 100% queriam entender as alucinações. É nisso que focaremos hoje!"
      },
      {
        icone: "🤝",
        titulo: "Ambiente Sob Medida",
        desc: "Nenhum aluno fica para trás. As enquetes garantem que os exemplos falem diretamente com a realidade prática de vocês."
      }
    ],
    notasProfessora: {
      tempoSugerido: "5 min",
      objetivoSlide: "Valorizar o preenchimento dos formulários diagnósticos pelos alunos, mostrando que a aula foi personalizada a partir das respostas reais da turma.",
      oQueFalar: "Antes de entrarmos na parte técnica, queremos agradecer a todos que responderam à nossa enquete diagnóstica. Por que isso é tão importante? Porque este curso não é uma gravação pronta: nós lemos cada resposta de vocês! Notamos, por exemplo, que a maioria tinha curiosidade sobre como a IA pensa e por que ela comete erros. Por isso, a aula de hoje foi desenhada sob medida para responder exatamente às dúvidas que vocês trouxeram."
    }
  },

  // =========================================================================
  // BLOCO 2: MÓDULO 1 — O FUNCIONAMENTO INTERNO: TOKENS, ATENÇÃO E ALUCINAÇÕES (Slides 3 a 13)
  // =========================================================================
  {
    numero: 3,
    id: 3,
    bloco: 2,
    tipo: "secao",
    categoria: "Entrada de Módulo",
    badge: "Módulo 1",
    titulo: "Módulo 1: O Funcionamento Interno — Tokens, Concatenação e Atenção",
    subtitulo: "Desmistificando a caixa-preta: da busca de dados ao processamento probabilístico",
    citacao: "A IA não pensa nem pesquisa páginas prontas: ela calcula continuidades de texto guiada pela atenção.",
    conducao: "Laura",
    notasProfessora: {
      tempoSugerido: "3 min",
      objetivoSlide: "Marcar visualmente o início do Módulo 1, criando uma pausa reflexiva e focando a atenção da turma na quebra da caixa-preta da IA.",
      oQueFalar: "Entramos agora no nosso Módulo 1: O Funcionamento Interno. Vamos abrir a tampa da máquina e entender o que acontece nos bastidores. Como é possível um computador receber uma frase nossa e responder em segundos com um português perfeito? É mágica? É um buscador disfarçado? Vamos descobrir juntos agora."
    }
  },
  {
    numero: 4,
    id: 4,
    bloco: 2,
    tipo: "comparativo",
    categoria: "Mecanismo Fundamental",
    titulo: "Buscador Tradicional vs. IA Generativa: Indexação vs. Concatenação",
    subtitulo: "A diferença fundamental entre recuperar páginas prontas e processar uma esteira contínua de texto",
    conducao: "Laura (com apoio de Maria)",
    caixa1: {
      titulo: "Mecanismo de Busca (Google, Bing Clássico)",
      formula: "Indexação & Recuperação (PageRank)",
      analogia: "Um bibliotecário que localiza o livro exato na estante.",
      exemplo: "Vasculha bilhões de páginas já existentes na web. Recebe palavras soltas e devolve uma lista de links indexados para leitura."
    },
    caixa2: {
      titulo: "IA Generativa / LLM (ChatGPT, Claude, Gemini)",
      formula: "Concatenação Direta & Síntese Probabilística",
      analogia: "Um redator técnico compondo um texto inédito sob medida agora.",
      exemplo: "Não consulta gavetas nem links prontos. Recebe seu prompt como uma esteira contínua de texto concatenado e gera a resposta token a token."
    },
    colunas: [
      {
        tag: "Buscador Tradicional",
        icone: "🔍",
        itens: [
          "Vasculha páginas e links já escritos por terceiros na web",
          "Entrega uma lista de links ordenados por relevância",
          "Repete exatamente os mesmos resultados para a mesma busca",
          "Se a informação não existir na web, avisa que não encontrou"
        ]
      },
      {
        tag: "IA Generativa (LLM)",
        icone: "⚡",
        itens: [
          "Recebe instruções e contexto em uma esteira concatenada contínua",
          "Gera uma resposta inédita, formulada sob medida na hora",
          "Prevê matematicamente o próximo token por probabilidade",
          "Risco de alucinar caso o prompt seja vago ou contenha ruídos"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "5 min",
      objetivoSlide: "Corrigir a falsa crença de que a IA 'dá um Google', ensinando que ela processa o prompt como uma esteira contínua de texto concatenado.",
      oQueFalar: "Muitas vezes chegamos à IA achando que ela é um 'super Google', mas o mecanismo por trás é totalmente diferente. Um motor de busca tradicional vasculha um índice de páginas prontas que já existem na web e nos entrega uma lista de links. Já uma LLM não possui gavetas de arquivos guardados. Tudo o que você digita — cada instrução, cada dado de contexto e cada exemplo — é recebido pelo modelo como uma concatenação direta, ou seja, um único bloco de texto contínuo. Ela não 'pesquisa' uma resposta que já estava escrita: ela lê a sequência que você forneceu e começa a redigir uma resposta inédita em tempo real, baseando-se unicamente nesse fluxo concatenado."
    }
  },
  {
    numero: 5,
    id: 5,
    bloco: 2,
    tipo: "apresentacao",
    categoria: "Mecanismo Fundamental",
    titulo: "Por Que a IA Não Tem 'Gavetas' de Respostas?",
    subtitulo: "Compreendendo a síntese em tempo real: o texto é gerado na hora, nunca copiado",
    conducao: "Laura (com apoio de Maria)",
    itensDestaque: [
      {
        icone: "🧠",
        titulo: "Conhecimento em Pesos Numéricos",
        desc: "O conhecimento da IA não está gravado como textos ou arquivos em pastas, mas diluído em bilhões de conexões e pesos matemáticos ajustados no treinamento."
      },
      {
        icone: "🎲",
        titulo: "Natureza Probabilística",
        desc: "Se você fizer a mesma pergunta duas vezes, o buscador trará os mesmos links, mas a IA escolherá caminhos probabilísticos ligeiramente diferentes a cada vez."
      },
      {
        icone: "🔌",
        titulo: "O Teste do Cabo Desconectado",
        desc: "Se desligarmos a internet do servidor onde a LLM roda, ela continua conversando e explicando física perfeitamente, porque o conhecimento já está em sua estrutura neural interna."
      }
    ],
    notasProfessora: {
      tempoSugerido: "5 min",
      objetivoSlide: "Fixar o conceito de que a IA é um gerador de texto inédito e não um banco de dados de 'copia e cola'.",
      oQueFalar: "Laura abre o Módulo 1: 'Perguntem-se: onde fica a resposta que o ChatGPT dá? Muita gente imagina um armário com milhões de gavetas digitais. Mas a realidade é fascinante: não há nenhuma gaveta! O texto gerado nunca existiu antes naquele formato exato. O conhecimento foi absorvido e transformado em pesos matemáticos. É por isso que, se desligarmos a internet da máquina onde o modelo está gravado, ele continua dialogando com você perfeitamente. Ele não consulta a web para saber gramática ou ciência: ele sintetiza na hora!'"
    }
  },
  {
    numero: 6,
    id: 6,
    bloco: 2,
    tipo: "apresentacao",
    categoria: "Estrutura de Dados",
    titulo: "A Unidade Básica: O Que São Tokens?",
    subtitulo: "A máquina não lê letras nem palavras completas: ela enxerga fragmentos numéricos",
    conducao: "Laura (com apoio de Maria)",
    itensDestaque: [
      {
        icone: "🧩",
        titulo: "Pedaços de Palavras",
        desc: "O modelo divide qualquer frase em fragmentos chamados tokens. Palavras comuns viram 1 token ('casa'); palavras longas ou com acentos são fatiadas em 2 ou mais pedaços ('intelig' + 'ência')."
      },
      {
        icone: "🔢",
        titulo: "Conversão para Números (IDs)",
        desc: "Cada token possui um número de identificação único em um dicionário interno de cerca de 100.000 tokens. Para a IA, seu texto vira uma lista pura de números inteiros."
      },
      {
        icone: "📏",
        titulo: "A Regra Prática de Proporção",
        desc: "Em língua portuguesa, 1.000 tokens equivalem em média a 700 a 750 palavras (ou aproximadamente 1 página e meia de texto corrido em folha A4)."
      }
    ],
    notasProfessora: {
      tempoSugerido: "5 min",
      objetivoSlide: "Apresentar o conceito de token de forma intuitiva e visual, permitindo aos alunos entenderem como a máquina enxerga a linguagem humana.",
      oQueFalar: "Laura explica o conceito: 'Muitas vezes chegamos à IA achando que ela é um Google turbinado. Mas o Google é um bibliotecário: você pede algo e ele aponta links já prontos na web. A IA Generativa é uma escritora que lê o seu prompt, concatena tudo em uma esteira única e escreve uma resposta inédita palavra por palavra!'"
    }
  },
  {
    numero: 7,
    id: 7,
    bloco: 2,
    tipo: "comparativo",
    categoria: "Processamento Probabilístico",
    titulo: "O Cálculo Probabilístico: O 'Super Autocompletar'",
    subtitulo: "A matemática em ação: como a IA escolhe o próximo token a cada fração de segundo",
    conducao: "Laura (com apoio de Maria)",
    caixa1: {
      titulo: "Entrada Concatenada (Prompt do Usuário)",
      formula: "Sequência de Tokens Anteriores",
      analogia: "A frase incompleta no teclado preditivo do celular.",
      exemplo: "O professor entrou na [ ... ]"
    },
    caixa2: {
      titulo: "Distribuição de Probabilidade do Próximo Token",
      formula: "P(Token n+1 | Tokens 1..n)",
      analogia: "A máquina calculando qual palavra melhor fecha o padrão estatístico.",
      exemplo: "• 'sala' (78% de chance) | • 'escola' (13% de chance) | • 'reunião' (7% de chance) | • 'piscina' (0,01% de chance)"
    },
    colunas: [
      {
        tag: "O Ciclo Contínuo de Geração",
        icone: "⚙️",
        itens: [
          "1. Lê toda a sequência concatenada anterior",
          "2. Calcula a probabilidade matemática de todos os tokens possíveis",
          "3. Escolhe o próximo token mais plausível para o contexto",
          "4. Anexa esse novo token ao texto e repete o cálculo 50 a 100 vezes por segundo"
        ]
      },
      {
        tag: "O Que Isso Significa na Prática",
        icone: "💡",
        itens: [
          "A IA não 'sabe' o que vai dizer no final do parágrafo quando começa a primeira palavra",
          "Ela é um motor de continuação probabilística guiado rigorosamente pela sua instrução",
          "Cada palavra que ela gera torna-se contexto imediato para a palavra seguinte"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "6 min",
      objetivoSlide: "Explicar como a predição probabilística token a token acontece em tempo real e desmistificar a ilusão de 'pensamento premeditado' da IA.",
      oQueFalar: "Laura detalha o processo de previsão: 'Como a IA escreve tão rápido? Pensem no teclado do celular, que sugere 3 palavras enquanto digitamos. A IA faz algo parecido, só que em uma escala trilionária de sofisticação probabilística calculando o próximo token a cada fração de segundo!'"
    }
  },
  {
    numero: 8,
    id: 8,
    bloco: 2,
    tipo: "comparativo",
    categoria: "Engenharia de Prompt",
    titulo: "O Colapso do 'Pedido Simples': A Árvore de Probabilidades",
    subtitulo: "Por que comandos genéricos produzem respostas clichês e como o contexto fecha o leque estatístico",
    conducao: "Laura (com apoio de Maria)",
    caixa1: {
      titulo: "O Pedido Simples (Vago e Sem Contexto)",
      formula: "Árvore Estatística Aberta (Dispersão)",
      analogia: "Dizer a um motorista 'ande por aí' sem informar o destino.",
      exemplo: "Prompt: 'Faça um plano de aula sobre água.' -> O modelo calcula a média estatística de milhões de textos genéricos da internet, entregando algo infantil ou raso."
    },
    caixa2: {
      titulo: "O Prompt Estruturado (Com Contexto e Restrições)",
      formula: "Funil de Probabilidade Restrito (Alta Precisão)",
      analogia: "Entregar o endereço com CEP, ponto de referência e horário de chegada.",
      exemplo: "Prompt: 'Plano de 50 min para 9º ano sobre crise hídrica no semiárido, com metodologia ativa e sem jargões.' -> O modelo desativa caminhos irrelevantes e foca no alvo."
    },
    colunas: [
      {
        tag: "Quando o Pedido é Vago",
        icone: "⚠️",
        itens: [
          "Milhares de caminhos prováveis competem entre si",
          "A IA escolhe o caminho mais seguro e comum: a média da internet",
          "Resultado: clichês pedagógicos, superficialidade e frustração"
        ]
      },
      {
        tag: "Quando Você Adiciona Contexto",
        icone: "🎯",
        itens: [
          "Você desliga fisicamente os caminhos irrelevantes da rede neural",
          "A probabilidade se concentra apenas no vocabulário do seu objetivo",
          "Resultado: uma proposta sob medida, profunda e diretamente aplicável"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "6 min",
      objetivoSlide: "Demonstrar aos professores a relação de causa e efeito direta entre a falta de contexto no prompt e a mediocridade da resposta da IA.",
      oQueFalar: "Laura apresenta os tokens: 'Vejam que revelação importante: quando alguém diz que a IA 'pensa', na verdade ela quebrou o texto em fatias chamadas tokens. 100 tokens equivalem a mais ou menos 75 palavras em português. Cada token é convertido em um vetor numérico que viaja pela rede neural.'"
    }
  },
  {
    numero: 9,
    id: 9,
    bloco: 2,
    tipo: "apresentacao",
    categoria: "Arquitetura Neural",
    titulo: "A Revolução dos Transformers: Autoatenção",
    subtitulo: "O 'T' de ChatGPT: como a máquina olha para todas as palavras ao mesmo tempo e entende conexões",
    conducao: "Laura (com apoio de Maria)",
    itensDestaque: [
      {
        icone: "📄",
        titulo: "O Marco Científico de 2017",
        desc: "No artigo clássico 'Attention Is All You Need' (Vaswani et al., Google Brain), os cientistas criaram a arquitetura Transformer, superando as antigas redes que liam palavra por palavra e esqueciam o começo da frase."
      },
      {
        icone: "💡",
        titulo: "Os Holofotes Matemáticos",
        desc: "O mecanismo de autoatenção calcula o peso relativo entre cada palavra do texto. Ele mede quanta atenção o token 'banco' deve dar a outros tokens na mesma frase."
      },
      {
        icone: "⚖️",
        titulo: "Desambiguação Contextual",
        desc: "Em 'Fui ao banco depositar um cheque', a atenção conecta 'banco' a 'cheque' (instituição financeira). Em 'Sentei no banco da praça', conecta a 'praça' (assento de madeira)."
      }
    ],
    notasProfessora: {
      tempoSugerido: "6 min",
      objetivoSlide: "Apresentar a arquitetura Transformer e o conceito de autoatenção com clareza visual, sem equações assustadoras.",
      oQueFalar: "Laura desmistifica a predição: 'Reparem: a IA calcula probabilidades. Se a frase começa com \"A capital da França é...\", o token \"Paris\" tem 99,8% de chance estatística. Mas se o prompt for vago ou ambíguo, a probabilidade se divide entre muitas opções, aumentando o risco de respostas medianas ou inventadas!'"
    }
  },
  {
    numero: 10,
    id: 10,
    bloco: 2,
    tipo: "comparativo",
    categoria: "Alocação de Atenção",
    titulo: "Alocação de Atenção em Prompts Estruturados",
    subtitulo: "Como posicionar os holofotes matemáticos da rede neural exatamente nos pontos críticos da tarefa",
    conducao: "Laura (com apoio de Maria)",
    caixa1: {
      titulo: "Prompt em Bloco Único Corrido (Sem Destaques)",
      formula: "Atenção Diluída e Uniforme",
      analogia: "Ler um contrato de 10 páginas sem títulos, sem parágrafos e sem negrito.",
      exemplo: "Um texto corrido onde objetivo, dados de alunos e regras de formatação estão misturados no mesmo parágrafo -> A atenção se dissipa entre os termos secundários."
    },
    caixa2: {
      titulo: "Prompt com Hierarquia Clara (Papel, Tarefa, Regras)",
      formula: "Atenção Focal e Alta Densidade de Pesos",
      analogia: "Um relatório com sumário executivo, tópicos numerados e alertas em destaque.",
      exemplo: "Separar claramente: [Papel do Modelo], [Contexto da Turma], [Tarefa Principal] e [Critérios de Não-Fazer] -> Os holofotes mantêm intensidade máxima nos limites da instrução."
    },
    colunas: [
      {
        tag: "O Comportamento da Atenção na Rede",
        icone: "🔍",
        itens: [
          "Em prompts bem divididos, a rede mantém alta conexão entre a regra e a saída gerada",
          "Restrições colocadas em tópicos recebem peso de atenção significativamente superior",
          "A hierarquia visual do texto humano reflete-se na matriz matemática de atenção da máquina"
        ]
      },
      {
        tag: "Impacto Direto na Sala de Aula",
        icone: "✨",
        itens: [
          "Respostas que respeitam rigorosamente o tempo da sua aula",
          "Conteúdos que não fogem do público-alvo estipulado",
          "Eliminação de trechos dispensáveis e economia de tempo na revisão"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "5 min",
      objetivoSlide: "Ensinar que a organização visual e textual do prompt não é capricho estético, mas a ferramenta que guia a atenção matemática da máquina.",
      oQueFalar: "Laura introduz a autoatenção dos Transformers: 'Vocês já se perguntaram o que significa o \"T\" de ChatGPT? É de Transformer, a arquitetura criada em 2017 pelo Google. O grande salto foi o Mecanismo de Atenção: a rede calcula ao mesmo tempo o peso e a relação entre todas as palavras de um texto!'"
    }
  },
  {
    numero: 11,
    id: 11,
    bloco: 2,
    tipo: "apresentacao",
    categoria: "Fontes de Divergência",
    titulo: "O Ruído Invisível: O Que Dispersa a Máquina?",
    subtitulo: "As três fontes de ruído no prompt que sequestram os holofotes de atenção do modelo",
    conducao: "Laura (com apoio de Maria)",
    itensDestaque: [
      {
        icone: "⚠️",
        titulo: "1. Erros Sutis de Digitação",
        desc: "Inverter letras, códigos de componentes, datas ou artigos de lei (ex: digitar 'A4899' em vez de 'A4988'). A IA ancora sua atenção no código errado e assume que ele existe."
      },
      {
        icone: "🌀",
        titulo: "2. Instruções Ambíguas ou Conflitantes",
        desc: "Comandos contraditórios como 'Escreva um resumo super detalhado e completo em no máximo 3 linhas'. A atenção entra em curto-circuito sobre qual restrição obedecer."
      },
      {
        icone: "📢",
        titulo: "3. Prolixidade e Dados Irrelevantes",
        desc: "Contar histórias longas antes de dizer a tarefa principal. O excesso de palavras acessórias dilui a atenção que deveria estar concentrada na entrega real."
      }
    ],
    notasProfessora: {
      tempoSugerido: "5 min",
      objetivoSlide: "Identificar as três principais armadilhas de redação que inserem ruído no prompt e provocam desvio no raciocínio da IA.",
      oQueFalar: "Laura orienta a turma: 'Reparem nisto: quando estruturamos nosso comando com cabeçalhos, tópicos e seções bem definidas, estamos literalmente ajudando o mecanismo de atenção a mirar os holofotes matemáticos nos lugares certos! Um prompt organizado economiza esforço computacional e blinda contra erros.'"
    }
  },
  {
    numero: 12,
    id: 12,
    bloco: 2,
    tipo: "comparativo",
    categoria: "Mecânica de Desvio",
    titulo: "A Divergência de Atenção: O Desvio de Rota",
    subtitulo: "Como o ruído altera a matriz de foco e faz a probabilidade deslizar para fora da realidade",
    conducao: "Laura (com apoio de Maria)",
    caixa1: {
      titulo: "Foco Alinhado (Prompt Limpo e Preciso)",
      formula: "Pesos Concentrados no Alvo Factual",
      analogia: "Um trem viajando sobre trilhos firmes e bem fixados.",
      exemplo: "Os termos-chave ancoram a probabilidade. O próximo token gerado é matematicamente obrigado a orbitar o conceito correto."
    },
    caixa2: {
      titulo: "Divergência de Atenção (Prompt Ruidoso ou Indutor)",
      formula: "Desvio Probabilístico para Caminhos Falsos",
      analogia: "O trem descarrilando suavemente para um desvio que parece o caminho certo.",
      exemplo: "A atenção se ancora no erro ou na contradição. A partir do primeiro token desviado, todo o restante do texto calcula probabilidades sobre uma premissa falsa."
    },
    colunas: [
      {
        tag: "O Efeito Dominó do Próximo Token",
        icone: "⚡",
        itens: [
          "Se o primeiro token de uma explicação sair ligeiramente fora de rota, ele é concatenado à frase",
          "O token seguinte agora usará esse erro como contexto de verdade",
          "O erro se multiplica linha após linha, tornando-se cada vez mais elaborado e convincente"
        ]
      },
      {
        tag: "A Aversão ao Silêncio",
        icone: "🤐",
        itens: [
          "Os modelos de linguagem foram treinados com reforço humano para nunca deixarem de responder",
          "Quando a atenção diverge, a máquina prefere confabular a admitir que não compreendeu",
          "Ela preenche a lacuna com a narrativa mais plausível estatisticamente"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "6 min",
      objetivoSlide: "Explicar fisicamente a divergência de atenção: um desvio na escolha de tokens que desencadeia um efeito dominó cumulativo.",
      oQueFalar: "Laura alerta sobre as armadilhas: 'Agora entramos no território das armadilhas: ambiguidades e ruídos que dispersam a atenção da máquina. Frases vagas, informações irrelevantes ou erros de digitação forçam a IA a dividir sua atenção entre o que importa e o que é lixo textual!'"
    }
  },
  {
    numero: 13,
    id: 13,
    bloco: 2,
    tipo: "comparativo",
    categoria: "Auditoria e Segurança",
    titulo: "A Origem Real das Alucinações: Fluência vs. Verdade",
    subtitulo: "Por que a IA mente com tanta convicção: otimização de plausibilidade gramatical vs. verdade factual",
    conducao: "Laura (com apoio de Maria)",
    caixa1: {
      titulo: "O Que a Turma Costuma Fazer: Revisão de Forma",
      formula: "Nível 1 — 'O texto está bem escrito?'",
      analogia: "Corrigir a pontuação e a concordância de um documento.",
      exemplo: "Olhar para o texto, achar bonito, fluente e sem erros de português, e assumir automaticamente que a informação é verdadeira."
    },
    caixa2: {
      titulo: "O Que a Turma Precisa Aprender: Auditoria de Fato",
      formula: "Nível 2 — 'Esse dado crítico existe na realidade?'",
      analogia: "Um perito checando números de processo, datas e datasheets oficiais.",
      exemplo: "Conferir o número da lei, a pinagem do circuito ou o autor citado no Google Acadêmico antes de publicar ou aplicar em sala."
    },
    colunas: [
      {
        tag: "A Anatomia da Alucinação",
        icone: "🎭",
        itens: [
          "A IA não otimiza a verdade factual; ela otimiza a plausibilidade da linguagem",
          "Alucinações não vêm em linguagem truncada: vêm em português impecável e tom acadêmico seguro",
          "Fontes fantasmas, leis inventadas e códigos trocados parecem 100% autênticos à primeira vista"
        ]
      },
      {
        tag: "A Blindagem pelo Prompt",
        icone: "🛡️",
        itens: [
          "Adicione permissão para a dúvida: 'Se não tiver certeza absoluta, avise e não invente'",
          "Forneça o material-base (grounding): anexe o texto ou PDF e mande responder apenas com base nele",
          "Engenharia de Prompt não é estética: é o controle físico da atenção contra a alucinação"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "7 min",
      objetivoSlide: "Consolidar o aprendizado do Módulo 1, diferenciando revisão textual de auditoria factual e ensinando a blindagem via prompt.",
      oQueFalar: "Laura explica a divergência de atenção: 'O que acontece na máquina quando há divergência de atenção? Pensem em um efeito dominó cumulativo. Quando a atenção se fixa em um detalhe secundário ou ambíguo, o próximo token gerado já sai ligeiramente desalinhado. O token seguinte se apoia no erro anterior, e em poucas linhas o modelo está alucinando com total convicção!'"
    }
  },

  // =========================================================================
  // BLOCO 3: MÓDULO 2 — ENGENHARIA DE PROMPTS NA PRÁTICA (Slides 14 a 22)
  // =========================================================================
  {
    numero: 14,
    id: 14,
    bloco: 3,
    tipo: "secao",
    categoria: "Entrada de Módulo",
    badge: "Módulo 2",
    titulo: "Módulo 2: Engenharia de Prompts na Prática — Superando o 'Pedido Simples'",
    subtitulo: "Estruturas avançadas para maximizar a precisão e eliminar ambiguidades na resposta",
    citacao: "Engenharia de prompt não é truque de mágica: é a calibração precisa da atenção da máquina.",
    conducao: "Laura (com apoio de Maria)",
    notasProfessora: {
      tempoSugerido: "3 min",
      objetivoSlide: "Abrir o Módulo 2 apresentando a transição do entendimento interno para a técnica aplicada de prompt engineering.",
      oQueFalar: "Laura sintetiza o Módulo 1 e passa a palavra: 'Vejam este caso real do driver de motor A4988. Como um único dígito trocado desvia a atenção da rede e inventa uma pinagem falsa com risco de queimar componentes! Agora, Maria vai nos conduzir no Módulo 2 para aprendermos as técnicas de Engenharia de Prompts que blindam os comandos e eliminam esses desvios na raiz!'"
    }
  },
  {
    numero: 15,
    id: 15,
    bloco: 3,
    tipo: "apresentacao",
    categoria: "Estrutura de Prompt",
    titulo: "2.1 Estruturação do Prompt: O Papel (Role-Oriented)",
    subtitulo: "Como atribuir uma identidade técnica ou didática para calibrar vocabulário, profundidade e tom",
    conducao: "Maria (com apoio de Laura)",
    itensDestaque: [
      {
        icone: "🎭",
        titulo: "Ativação de Especialista",
        desc: "Ao dizer 'Atue como um coordenador pedagógico com 20 anos de experiência...', o modelo ativa os parâmetros neurais associados à literatura educacional de alto nível."
      },
      {
        icone: "🎯",
        titulo: "Calibração de Tom e Vocabulário",
        desc: "O papel elimina respostas infantis ou excessivamente acadêmicas, calibrando o nível exato de interlocução para quem vai ler o documento."
      },
      {
        icone: "🚫",
        titulo: "Fim do 'Assistente Genérico'",
        desc: "Sem papel, a IA responde como um robô genérico de internet. Com papel, ela assume uma postura profissional comprometida com as dores do seu cenário."
      }
    ],
    notasProfessora: {
      tempoSugerido: "5 min",
      objetivoSlide: "Ensinar a técnica de definição de papel (Role-Oriented) e explicar como ela altera a distribuição de probabilidade das palavras geradas.",
      oQueFalar: "Maria assume a condução do Módulo 2: 'Muito bem! Agora que Laura nos mostrou como os tokens e a atenção operam por dentro, vamos para a prática: como comandar essa máquina de forma profissional? Bem-vindos ao Módulo 2: Engenharia de Prompts na Prática! Vamos sair do pedido simples e dominar a estruturação de excelência.'"
    }
  },
  {
    numero: 16,
    id: 16,
    bloco: 3,
    tipo: "comparativo",
    categoria: "Estrutura de Prompt",
    titulo: "2.1 Estruturação do Prompt: A Tarefa (Task-Oriented)",
    subtitulo: "Instrução direta, delimitação de restrições e definição do formato de saída",
    conducao: "Maria (com apoio de Laura)",
    caixa1: {
      titulo: "Instrução Sem Limites (Vaga)",
      formula: "Ação Solta sem Parâmetros",
      analogia: "Pedir 'faça um relatório' sem dizer tamanho nem público.",
      exemplo: "'Me dê uma dinâmica para a minha aula de história.' -> A IA escreve 10 parágrafos soltos, difíceis de colocar em prática no tempo da aula."
    },
    caixa2: {
      titulo: "Tarefa Estruturada (Ação + Restrições + Formato)",
      formula: "Verbo Direto + Restrições + Formato Fechado",
      analogia: "A encomenda de um serviço com especificações técnicas exatas.",
      exemplo: "'Elabore 1 dinâmica de 20 min para 9º ano sobre a Era Vargas. Formato: Tabela com 3 colunas (Etapa, Minutos, Papel do Aluno). Restrição: Não use celulares.'"
    },
    colunas: [
      {
        tag: "Os 3 Elementos da Tarefa",
        icone: "🎯",
        itens: [
          "1. Verbo de ação imperativo e inequívoco (Elabore, Analise, Estruture)",
          "2. Restrições negativas explícitas (O que NÃO fazer, limites de tempo e recursos)",
          "3. Formato de saída fechado (Tabela, tópicos numerados, tópicos em negrito)"
        ]
      },
      {
        tag: "Por Que Funciona na Rede Neural",
        icone: "⚙️",
        itens: [
          "Reduz o espaço estatístico de busca probabilística a quase zero",
          "Elimina respostas prolixas, introduções desnecessárias e enrolação",
          "Garante material imediatamente utilizável na sala de aula"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "6 min",
      objetivoSlide: "Apresentar a tríade da Tarefa Estruturada (Verbo de Ação, Restrições Negativas e Formato de Saída).",
      oQueFalar: "Maria ensina a técnica do Papel (Role): 'A primeira ferramenta do nosso cinto é o Papel. Se você não dá um papel à IA, ela assume a postura média de qualquer usuário da internet. Mas quando você diz: \"Atue como um coordenador pedagógico sênior especialista em BNCC\", os pesos de atenção se alinham imediatamente com o vocabulário e a profundidade dessa área!'"
    }
  },
  {
    numero: 17,
    id: 17,
    bloco: 3,
    tipo: "comparativo",
    categoria: "Aplicação Prática",
    titulo: "Papel + Tarefa: O Contraste na Sala de Aula",
    subtitulo: "A diferença radical entre o pedido amador e o comando docente profissional",
    conducao: "Maria (com apoio de Laura)",
    caixa1: {
      titulo: "O Pedido Amador",
      formula: "Sem Papel + Sem Restrição",
      analogia: "Jogar uma moeda na fonte de desejos.",
      exemplo: "'Faça exercícios sobre frações para minha turma.' -> A IA gera 5 contas mecânicas descontextualizadas de nível incerto."
    },
    caixa2: {
      titulo: "O Prompt Papel + Tarefa",
      formula: "[Papel Especialista] + [Instrução + Restrição + Formato]",
      analogia: "Uma requisição pedagógica oficial de coordenação de curso.",
      exemplo: "'Atue como professor de matemática do 6º ano. Crie 3 situações-problema contextualizadas sobre frações na culinária. Restrição: inclua o gabarito comentado ao final.'"
    },
    colunas: [
      {
        tag: "O Que Muda no Resultado?",
        icone: "📊",
        itens: [
          "Engajamento: os problemas dialogam com a realidade cotidiana da turma",
          "Precisão: as frações são proporcionais e adequadas à faixa etária",
          "Praticidade: gabarito pronto e comentado para correção imediata"
        ]
      },
      {
        tag: "A Regra de Ouro da Concatenação",
        icone: "⛓️",
        itens: [
          "O modelo lê Papel e Tarefa como um bloco concatenado coeso",
          "O papel ancora o tom pedagógico; a tarefa ancora a entrega física",
          "A atenção matemática se mantém fixa nos critérios do início ao fim"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "5 min",
      objetivoSlide: "Demonstrar na prática docente a diferença de qualidade entre um prompt ingênuo e um prompt com Papel e Tarefa combinados.",
      oQueFalar: "Maria apresenta a Tarefa Estruturada (Task & Bounds): 'Depois do Papel, vem a Tarefa. E uma tarefa de excelência precisa de três coisas: um verbo de ação muito firme (como \"elabore\", \"classifique\"), limites negativos claros (o que a IA NÃO pode fazer) e o formato exato de saída, como uma tabela ou tópicos numerados.'"
    }
  },
  {
    numero: 18,
    id: 18,
    bloco: 3,
    tipo: "comparativo",
    categoria: "Técnica Avançada",
    titulo: "2.2 Aprendizado por Exemplos: Zero-Shot vs. Few-Shot",
    subtitulo: "A diferença decisiva entre pedir sem referências e fornecer modelos de entrada e saída",
    conducao: "Maria (com apoio de Laura)",
    caixa1: {
      titulo: "Zero-Shot (Zero Exemplos)",
      formula: "Apenas o Pedido ('Adivinhe o Padrão')",
      analogia: "Pedir a um marceneiro 'faça uma cadeira' sem mostrar nenhuma foto de referência.",
      exemplo: "'Classifique as dúvidas dos alunos em Fácil, Média ou Difícil.' -> A IA escreve parágrafos longos, inventa critérios próprios e varia o formato a cada execução."
    },
    caixa2: {
      titulo: "Few-Shot (2 a 3 Exemplos Demonstrativos)",
      formula: "Exemplos de Entrada/Saída Dentro do Prompt",
      analogia: "Entregar a foto e o desenho técnico de duas cadeiras antes de pedir a terceira.",
      exemplo: "'Exemplo 1: \"O que é célula?\" -> Fácil\nExemplo 2: \"Por que a mitocôndria tem DNA próprio?\" -> Difícil\nAgora classifique: \"Como a planta respira?\" -> '"
    },
    colunas: [
      {
        tag: "A Limitação do Zero-Shot",
        icone: "⚠️",
        itens: [
          "O modelo depende exclusivamente do treinamento prévio genérico",
          "A formatação e o estilo variam a cada nova mensagem",
          "Alta probabilidade de incluir introduções e enrolações inúteis"
        ]
      },
      {
        tag: "O Poder do Few-Shot",
        icone: "💎",
        itens: [
          "O modelo aprende o padrão sintático e estilístico por imitação imediata",
          "A saída segue rigorosamente a estrutura dos exemplos fornecidos",
          "Ideal para tarefas repetitivas, correções e padronização institucional"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "6 min",
      objetivoSlide: "Explicar a técnica de Few-Shot Prompting, demonstrando como 2 a 3 exemplos ensinam o modelo por indução de padrão imediato.",
      oQueFalar: "Maria explica o Few-Shot Prompting: 'Aqui está um dos maiores segredos dos profissionais: o Few-Shot, que significa dar poucos exemplos. Em vez de explicar uma regra em 20 linhas de texto, você entrega 2 exemplos prontos de entrada e saída. Quando a IA lê os exemplos no prompt, ela não adivinha: ela imita o padrão instantaneamente!'"
    }
  },
  {
    numero: 19,
    id: 19,
    bloco: 3,
    tipo: "apresentacao",
    categoria: "Técnica Avançada",
    titulo: "O Ganho de Robustez com Few-Shot Prompting",
    subtitulo: "Como 2 ou 3 exemplos eliminam a sensibilidade a ambiguidades e blindam a consistência",
    conducao: "Maria (com apoio de Laura)",
    itensDestaque: [
      {
        icone: "🧲",
        titulo: "Imitação de Padrão (In-Context Learning)",
        desc: "A rede neural alinha os vetores de atenção na simetria dos exemplos, aprendendo a sintaxe sem precisar de reprogramação."
      },
      {
        icone: "🛡️",
        titulo: "Eliminação de Ambiguidades",
        desc: "Em tarefas subjetivas (como calibrar o rigor de uma correção de redação), os exemplos ensinam o critério muito melhor do que uma regra teórica."
      },
      {
        icone: "📐",
        titulo: "Padronização Institucional Sem Código",
        desc: "A IA replica pontuação, tabelas, códigos ou marcadores exatamente como você estruturou nos modelos anteriores."
      }
    ],
    notasProfessora: {
      tempoSugerido: "5 min",
      objetivoSlide: "Destacar o ganho de consistência que o Few-Shot traz para tarefas docentes recorrentes.",
      oQueFalar: "Maria aprofunda a robustez do Few-Shot: 'Por que o Few-Shot é tão robusto? Porque regras escritas sempre abrem margem para dupla interpretação. Se você mostra na prática como quer a resposta através de 2 modelos, a IA replica a formatação, o tom e o rigor sem nenhuma ambiguidade!'"
    }
  },
  {
    numero: 20,
    id: 20,
    bloco: 3,
    tipo: "apresentacao",
    categoria: "Raciocínio Estruturado",
    titulo: "2.3 Raciocínio Passo a Passo: Chain of Thought (CoT)",
    subtitulo: "Como a instrução 'pense passo a passo' transforma a capacidade analítica da rede neural",
    conducao: "Maria (com apoio de Laura)",
    itensDestaque: [
      {
        icone: "🧠",
        titulo: "O Marco Científico de Wei et al. (Google, 2022)",
        desc: "Pesquisadores descobriram que exigir do modelo a descrição dos passos intermediários de raciocínio antes da resposta final multiplica a acurácia em problemas complexos."
      },
      {
        icone: "⛓️",
        titulo: "Por Que Funciona na Mecânica dos Tokens?",
        desc: "Ao gerar as etapas intermediárias na tela, esses passos tornam-se tokens concatenados que servem de apoio e âncora factual para a conclusão final."
      },
      {
        icone: "🪄",
        titulo: "O Gatilho Simples",
        desc: "Basta incluir no final do prompt: 'Pense passo a passo antes de responder e mostre seu raciocínio intermediário' para desativar palpites impulsivos."
      }
    ],
    notasProfessora: {
      tempoSugerido: "6 min",
      objetivoSlide: "Apresentar o Chain of Thought (CoT) e fundamentar por que o desdobramento de passos intermediários melhora a precisão da IA.",
      oQueFalar: "Maria ensina o Chain of Thought (CoT): 'Vejam que técnica fascinante: o Chain of Thought, ou Cadeia de Pensamento. Se você pedir para a IA responder direto uma questão difícil, ela tenta prever o resultado num salto cego e erra. Mas se você disser \"Pense passo a passo antes de concluir\", a taxa de acerto salta para mais de 80%!'"
    }
  },
  {
    numero: 21,
    id: 21,
    bloco: 3,
    tipo: "comparativo",
    categoria: "Raciocínio Estruturado",
    titulo: "Chain of Thought em Ação: Evitando Erros Lógicos",
    subtitulo: "A comparação direta entre a resposta impulsiva e a resolução deliberada passo a passo",
    conducao: "Maria (com apoio de Laura)",
    caixa1: {
      titulo: "Sem Chain of Thought (Resposta Direta)",
      formula: "Pergunta Complexa -> Resposta Impulsiva",
      analogia: "Um aluno chutando uma conta de cabeça sem armar a equação no papel.",
      exemplo: "'Uma escola tem 120 alunos no 9º ano. 45% praticam futebol e, desses, 20% praticam natação. Quantos fazem ambos?' -> A IA tenta prever o número final diretamente e erra com facilidade."
    },
    caixa2: {
      titulo: "Com Chain of Thought (Passo a Passo)",
      formula: "Pergunta -> Etapa 1 -> Etapa 2 -> Conclusão",
      analogia: "Armar a equação linha por linha no quadro-negro até a resposta final.",
      exemplo: "'Passo 1: 45% de 120 = 54 alunos no futebol. Passo 2: 20% de 54 = 10,8 alunos. Como são pessoas, o contexto exige arredondar ou apontar a inconsistência.' -> Raciocínio perfeito."
    },
    colunas: [
      {
        tag: "O Efeito no Processamento",
        icone: "⚙️",
        itens: [
          "Cada linha calculada vira âncora matemática na esteira concatenada",
          "A conclusão final se apoia em fatos intermediários já validados",
          "Evita o salto probabilístico cego que gera alucinações de cálculo"
        ]
      },
      {
        tag: "Aplicações na Rotina Docente",
        icone: "📚",
        itens: [
          "Validação de gabaritos e resolução comentada de exercícios",
          "Análise de casos complexos de indisciplina ou adaptação curricular",
          "Organização de cronogramas integrados com múltiplos prazos e turmas"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "6 min",
      objetivoSlide: "Demonstrar a eficácia prática do Chain of Thought em tarefas que demandam lógica, etapas encadeadas ou planejamento.",
      oQueFalar: "Maria demonstra o CoT em ação: 'Reparem neste exemplo matemático na tela. Sem o passo a passo, a IA chuta um número qualquer. Com o Chain of Thought, cada linha calculada serve de degrau e âncora matemática para a conclusão final. Isso vale para contas, projetos pedagógicos e avaliações!'"
    }
  },
  {
    numero: 22,
    id: 22,
    bloco: 3,
    tipo: "apresentacao",
    categoria: "Síntese de Engenharia",
    titulo: "A Caixa de Ferramentas da Engenharia de Prompts",
    subtitulo: "Os 4 pilares avançados reunidos para transformar sua interação com qualquer modelo",
    conducao: "Maria (com apoio de Laura)",
    itensDestaque: [
      {
        icone: "🎭",
        titulo: "1. Papel (Role)",
        desc: "Define o tom, a especialidade profissional e o horizonte de vocabulário ideal para o seu público."
      },
      {
        icone: "🎯",
        titulo: "2. Tarefa (Task & Bounds)",
        desc: "Verbo de ação imperativo, restrições negativas claras (o que NÃO fazer) e formato de saída fechado."
      },
      {
        icone: "💎",
        titulo: "3. Exemplos (Few-Shot)",
        desc: "Fornece de 2 a 3 modelos prontos de entrada e saída para calibrar o estilo sem margem para dúvidas."
      },
      {
        icone: "🧠",
        titulo: "4. Raciocínio (Chain of Thought)",
        desc: "Exige que o modelo mostre o raciocínio intermediário passo a passo antes de chegar à resposta final."
      }
    ],
    notasProfessora: {
      tempoSugerido: "5 min",
      objetivoSlide: "Consolidar os 4 pilares de Engenharia de Prompts do Módulo 2 antes de entrar na discussão de governança e ética.",
      oQueFalar: "Maria consolida os 4 pilares: 'Pronto! Aqui está o mapa dos 4 pilares da Engenharia de Prompts: Papel, Tarefa com Limites, Exemplos Few-Shot e Raciocínio Passo a Passo. Guardem bem essa caixa de ferramentas! Agora, Laura vai nos guiar pelo Módulo 3 sobre Governança, Privacidade e Validação Crítica.'"
    }
  },

  // =========================================================================
  // BLOCO 4: MÓDULO 3 — GOVERNANÇA, PROTEÇÃO DE DADOS E AUTONOMIA DOCENTE (Slides 23 a 27)
  // =========================================================================
  {
    numero: 23,
    id: 23,
    bloco: 4,
    tipo: "secao",
    categoria: "Entrada de Módulo",
    badge: "Módulo 3",
    titulo: "Módulo 3: Governança, Proteção de Dados e Autonomia Docente",
    subtitulo: "Da influência dos algoritmos no indivíduo à responsabilidade ética e pedagógica do professor na Sociedade de Dados",
    citacao: "A inteligência artificial não apenas facilita tarefas: ela molda escolhas, afeta a autonomia e reproduz estruturas sociais.",
    conducao: "Co-docência (Laura & Maria)",
    notasProfessora: {
      tempoSugerido: "3 min",
      objetivoSlide: "Abrir o Módulo 3 conectando a tecnologia à cidadania digital, dividindo o bloco em duas frentes complementares: Laura aborda os dados e a privacidade; Maria aprofunda a autonomia e os vieses com Dora Kaufman.",
      oQueFalar: "Laura e Maria abrem o Módulo 3 juntas: 'Entramos no nosso terceiro módulo do dia: Governança, Proteção de Dados e Autonomia Docente. Saber formular prompts avançados é apenas metade da jornada; a outra metade é compreender como a IA afeta o indivíduo e como preservar nossa soberania ética e pedagógica na Sociedade de Dados. Dividiremos este momento em duas partes complementares: Laura apresentará o cerco algorítmico, bolhas e a blindagem de dados; em seguida, Maria trará as implicações éticas sobre autonomia e vieses com base nas pesquisas de Dora Kaufman na PUC-SP.'"
    }
  },
  {
    numero: 24,
    id: 24,
    bloco: 4,
    tipo: "comparativo",
    categoria: "Riscos ao Indivíduo & LGPD",
    titulo: "3.1 Os Riscos ao Indivíduo (I): Dados, Escolhas e Bolhas de Filtro",
    subtitulo: "Como o rastreamento invisível e a personalização extrema direcionam decisões e afetam a privacidade",
    conducao: "Laura (com apoio de Maria)",
    caixa1: {
      titulo: "Influência nas Escolhas & Limitação da Individualidade",
      formula: "Recomendações Algorítmicas e Bolhas de Eco",
      analogia: "Um espelho mágico que só reflete o que você já gosta, estreitando seu mundo.",
      exemplo: "A personalização excessiva nos expõe repetidamente a conteúdos semelhantes, reduzindo o contato com diferentes perspectivas e direcionando o que consumimos e compramos."
    },
    caixa2: {
      titulo: "Perda de Privacidade & A Fronteira da LGPD",
      formula: "Coleta Opaca de Hábitos e Dados Pessoais",
      analogia: "Escrever informações confidenciais de alunos em um cartão-postal público.",
      exemplo: "Nossos dados e hábitos são coletados sem plena consciência. Na escola, a LGPD proíbe inserir nomes reais, laudos, CPFs e notas de alunos em ferramentas públicas de IA."
    },
    colunas: [
      {
        tag: "O Que a IA Faz com Seus Hábitos?",
        icone: "👁️",
        itens: [
          "Recomendações algorítmicas direcionam silenciosamente o que consumimos, assistimos e pesquisamos",
          "A hiperpersonalização cria bolhas de filtro que reduzem o contato com visões plurais de mundo",
          "Nas contas gratuitas padrão, seus prompts e hábitos podem ser usados para re-treinar modelos corporativos"
        ]
      },
      {
        tag: "Blindagem e Boas Práticas Imediatas",
        icone: "🔒",
        itens: [
          "Nas opções de conta (ChatGPT/Gemini/Claude), desative o salvamento de dados para treinamento",
          "Violação grave da LGPD (Lei 13.709/2018): jamais insira nomes de alunos, laudos médicos ou notas",
          "Substitua qualquer caso escolar por dados fictícios ou arquétipos didáticos 100% anonimizados"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "6 min",
      objetivoSlide: "Sensibilizar sobre a influência dos algoritmos nas escolhas e bolhas de filtro, estabelecendo o protocolo prático de privacidade e proteção de dados (LGPD).",
      oQueFalar: "Laura conduz a reflexão com firmeza: 'A IA não apenas responde ao que pedimos; suas recomendações algorítmicas direcionam nossas escolhas, o que consumimos, assistimos e compramos. Além disso, a personalização excessiva limita nossa individualidade, nos expondo repetidamente a conteúdos semelhantes e nos fechando em bolhas. E no centro disso está a perda de privacidade: nossos dados e hábitos são coletados sem que tenhamos plena consciência. Por isso, na escola, a regra de ouro da LGPD é absoluta: NUNCA coloquem dados pessoais de alunos, notas ou laudos! Desativem o treino nas configurações e anonimizem tudo antes de perguntar à IA!'"
    }
  },
  {
    numero: 25,
    id: 25,
    bloco: 4,
    tipo: "apresentacao",
    categoria: "Higiene de Prompt",
    titulo: "3.2 Sanitização da Entrada (Input Preprocessing)",
    subtitulo: "Como a limpeza e anonimização prévia do texto blindam a privacidade e evitam desvios da IA",
    conducao: "Laura (com apoio de Maria)",
    itensDestaque: [
      {
        icone: "🛡️",
        titulo: "Anonimização Ativa de Pessoas",
        desc: "Troque nomes reais, turmas e diagnósticos por arquétipos didáticos neutros ('Estudante de 12 anos com facilidade visual'). Protege a privacidade e atende plenamente à LGPD."
      },
      {
        icone: "✂️",
        titulo: "Corte de Ruído e Exposição",
        desc: "Elimine desabafos, dados de rotina pessoal ou detalhes confidenciais da instituição. Menos exposição preserva a atenção da IA concentrada na tarefa pedagógica."
      },
      {
        icone: "🧱",
        titulo: "Uso de Delimitadores Visuais",
        desc: 'Isole textos de apoio com aspas triplas (\'\'\') ou tags como [TEXTO_BASE] e [TAREFA]. Impede que a IA confunda dados de análise com regras de execução.'
      }
    ],
    notasProfessora: {
      tempoSugerido: "4 min",
      objetivoSlide: "Ensinar a prática de higienização do prompt (Input Preprocessing) como protocolo preventivo de segurança, privacidade e foco atencional da máquina.",
      oQueFalar: "Laura ensina a higienização: 'Antes de clicar no botão de enviar seu comando, façam a sanitização da entrada em 3 passos: anonimizem qualquer menção a pessoas reais, cortem dados institucionais confidenciais e usem delimitadores visuais para organizar o texto. Uma entrada limpa protege sua privacidade e economiza a atenção da IA!'"
    }
  },
  {
    numero: 26,
    id: 26,
    bloco: 4,
    tipo: "comparativo",
    categoria: "Autonomia & Sociedade de Dados",
    titulo: "3.3 Os Riscos ao Indivíduo (II): Autonomia, Vieses e a Sociedade de Dados",
    subtitulo: "Com base nos estudos de Dora Kaufman (PUC-SP): desmistificando a neutralidade e assumindo o papel de auditor",
    conducao: "Maria (com apoio de Laura)",
    caixa1: {
      titulo: "O Protagonismo dos Algoritmos (Dora Kaufman)",
      formula: "Vieses, Discriminação e Falsa Neutralidade",
      analogia: "Achar que um modelo matemático é neutro e decide com justiça social.",
      exemplo: "Decisões automatizadas reproduzem preconceitos presentes nos dados. Como analisa Dora Kaufman (TECCOGS/PUC-SP), os algoritmos não são neutros: eles refletem as assimetrias históricas da sociedade de dados."
    },
    caixa2: {
      titulo: "A Soberania Docente (Human-in-the-Loop)",
      formula: "Combater a Redução da Autonomia Cognitiva",
      analogia: "O professor como maestro rigoroso, não como mero espectador da orquestra.",
      exemplo: "A dependência cega enfraquece nossa iniciativa e nossa capacidade de tomar decisões. O professor atua como Auditor Docente: a IA rascunha opções, mas o discernimento pedagógico é 100% humano."
    },
    colunas: [
      {
        tag: "As Lições de Dora Kaufman (TECCOGS/PUC-SP)",
        icone: "📚",
        itens: [
          "O protagonismo algorítmico: os modelos matemáticos deixaram de ser ferramentas passivas e medeiam decisões humanas",
          "Opacidade da 'Caixa-Preta': confiar cegamente em decisões que não compreendemos aliena o usuário e o docente",
          "Vieses estruturais: a IA reproduz desigualdades históricas de gênero, raça e território sob roupagem de precisão matemática"
        ]
      },
      {
        tag: "A Postura Ativa do Auditor Docente",
        icone: "👨‍🏫",
        itens: [
          "Redução da autonomia: a dependência de sistemas inteligentes pode enfraquecer nossa iniciativa e raciocínio crítico",
          "O princípio Human-in-the-Loop: a inteligência humana deve ser sempre a guardiã do julgamento ético e factual",
          "A IA é uma assistente probabilística rápida; jamais um juiz infalível ou substituto da sensibilidade pedagógica"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "6 min",
      objetivoSlide: "Fundamentar a reflexão ética sobre a sociedade de dados e vieses algorítmicos com Dora Kaufman, consolidando a postura ativa do professor contra a terceirização cognitiva.",
      oQueFalar: "Maria assume a condução com entusiasmo reflexivo: 'Professores, a pesquisadora Dora Kaufman, da PUC-SP, nos traz um alerta fundamental em seu artigo na revista TECCOGS: vivemos a era do protagonismo dos algoritmos na Sociedade de Dados. E há dois riscos imensos ao indivíduo: primeiro, a redução da nossa autonomia — quando começamos a depender de sistemas inteligentes a ponto de enfraquecer nossa iniciativa e nossa capacidade de tomar decisões próprias. Segundo, os vieses e a discriminação: decisões automatizadas reproduzem preconceitos presentes nos dados históricos de treinamento. A IA não tem consciência nem neutralidade; ela reflete os dados da sociedade. Por isso, vocês são os auditores docentes: a máquina sugere e rascunha, mas quem valida, assina e responde perante a turma é você, professor!'"
    }
  },
  {
    numero: 27,
    id: 27,
    bloco: 4,
    tipo: "apresentacao",
    categoria: "Validação Crítica",
    titulo: "3.4 O Checklist do Auditor Docente em 3 Passos",
    subtitulo: "O protocolo de 2 minutos para checar fatos, adequação curricular e viés ético antes de levar à turma",
    conducao: "Maria (com apoio de Laura)",
    itensDestaque: [
      {
        icone: "🔍",
        titulo: "1. O Teste da Fonte Primária",
        desc: "Fure a 'caixa-preta' da IA: confira nomes de autores, fórmulas, datas e artigos de lei em fontes oficiais e confiáveis (Google Acadêmico, livros ou datasheets)."
      },
      {
        icone: "🎯",
        titulo: "2. O Teste da Adequação Real",
        desc: "O vocabulário e a complexidade do texto realmente cabem na realidade sociocultural da sua turma ou a IA gerou uma resposta artificial, fria e distante dos alunos?"
      },
      {
        icone: "🛡️",
        titulo: "3. O Teste Ético e de Viés (Herança Kaufman)",
        desc: "Examine se o conteúdo traz estereótipos de gênero, raça ou profissão, apagamento de perspectivas plurais ou desinformação camuflada de neutralidade técnica."
      }
    ],
    notasProfessora: {
      tempoSugerido: "5 min",
      objetivoSlide: "Entregar o roteiro prático e rápido de auditoria docente com ênfase no teste ético e de viés inspirado na literatura de governança de IA.",
      oQueFalar: "Maria entrega o checklist de validação factual: 'Para facilitar a vida na escola, guardem este checklist de 3 passos rápidos: o teste da fonte primária para furar a caixa-preta, o teste de adequação pedagógica e o teste ético de viés que Dora Kaufman nos ensina. Com a entrada sanitizada pela Laura e a saída auditada por vocês, estamos 100% prontos para o nosso laboratório prático de bancada!'"
    }
  },
  
  // BLOCO 5: LABORATÓRIO PRÁTICO — ENGENHARIA DE PROMPTS (Slides 28 e 29)
  // =========================================================================
  {
    numero: 28,
    id: 28,
    bloco: 5,
    tipo: "missao-diagnostica",
    categoria: "Laboratório Prático: Bancada",
    titulo: "Missão no Computador: O Desafio da Rotina de Estudos",
    subtitulo: "Do pedido genérico ao comando de alta precisão com ChatGPT no laboratório",
    tempoEstimado: "40 a 60 min",
    conducao: "Maria (com apoio de Laura)",
    passos: [
      "1. Configuração Segura: Abra o ChatGPT em Chat Temporário ('Não personalizado', sem memórias ou dados sensíveis).",
      "2. 1ª Tentativa (Prompt Livre): Digite 'Crie uma rotina de estudos para mim.' e analise as respostas genéricas e omissões.",
      "3. Análise Crítica: Identifique o que faltou (horários vagos, disciplinas ausentes e sobrecarga irreal).",
      "4. Aprimoramento com os 5 Elementos: Reescreva o comando aplicando Papel, Contexto, Instrução, Formato e Restrições.",
      "5. 2ª Tentativa & Reflexão: Envie o prompt aprimorado, compare os resultados lado a lado e registre as conclusões."
    ],
    destaqueDiagnostica: {
      icone: "🎯",
      titulo: "Situação-Problema do Aluno",
      desc: "Você tem provas de Matemática e História semana que vem, trabalha/estuda em outros horários e precisa de constância. Crie uma rotina de 7 dias realista, com limite de 2h/dia e foco em Matemática.",
      tagAviso: "Chat Temporário • Zero Dados Sensíveis (LGPD) • Tutoria Individual Ativa"
    },
    notasProfessora: {
      tempoSugerido: "45 min de laboratório",
      objetivoSlide: "Apresentar a situação-problema da oficina de prompts, orientar a configuração segura do ChatGPT e guiar o roteiro prático em 5 etapas.",
      oQueFalar: "Maria assume a apresentação da oficina prática: 'Chegou o momento mais esperado da nossa aula: laboratório prático nos computadores! A nossa missão hoje é criar uma rotina de estudos realista para provas de Matemática e História. Mas atenção ao Passo 1: abram um Chat Temporário no ChatGPT para evitar que o histórico interfira e nunca insiram dados sensíveis. Primeiro vocês farão um prompt livre para verem o resultado genérico na prática; depois, vão estruturar com os 5 elementos! Laura e eu estamos circulando nas bancadas para apoiar cada um de vocês!'"
    }
  },
  {
    numero: 29,
    id: 29,
    bloco: 5,
    tipo: "comparativo",
    categoria: "Engenharia na Prática",
    titulo: "O Duelo dos Prompts: Livre vs. Estruturado (Os 5 Elementos)",
    subtitulo: "A anatomia comparativa da transformação do comando e a tabela dos 5 elementos essenciais",
    conducao: "Maria (com apoio de Laura)",
    caixa1: {
      titulo: "1ª Tentativa: Prompt Livre (Vago)",
      formula: "Crie uma rotina de estudos para mim.",
      analogia: "Entrar numa farmácia e dizer apenas 'estou com dor' sem dizer onde nem o que tomou.",
      exemplo: "Falhas reais: A IA não sabe as disciplinas, não sabe as datas das provas, não conhece o tempo disponível (2h/dia) e gera uma rotina genérica e impraticável de 6 horas diárias."
    },
    caixa2: {
      titulo: "2ª Tentativa: Prompt Estruturado (5 Elementos)",
      formula: "Papel + Contexto + Instrução + Formato + Restrições",
      analogia: "A receita médica completa: dosagem, horários, contraindicações e formato de uso.",
      exemplo: "'Atue como um orientador de estudos. Crie uma rotina de estudos para os próximos 7 dias para um estudante que tem prova de Matemática e História no fim da semana. Ele tem 2 horas livres por dia (seg-sex) e 4 horas no sábado. Priorize Matemática, mas inclua História. Apresente em tabela com dia, horário, disciplina, atividade e objetivo. Não sugira mais de 2 horas por dia.'"
    },
    colunas: [
      {
        tag: "Os 5 Elementos Aplicados",
        icone: "🧩",
        itens: [
          "🎭 Papel: 'Atue como um orientador de estudos' (define a perspectiva profissional)",
          "🌐 Contexto: Provas no fim da semana, 2h livres/dia (ancora a resposta na realidade)",
          "🎯 Instrução: 'Crie uma rotina de estudos para os próximos 7 dias' (indica a tarefa central)",
          "📊 Formato: 'Apresente em tabela com dia, horário e metas' (organiza a saída)",
          "🛑 Restrições: 'Não sugira mais de 2h/dia; incluir pausas' (evita sobrecargas irreais)"
        ]
      },
      {
        tag: "Critérios de Comparação & Reflexão",
        icone: "⚖️",
        itens: [
          "Personalização: A resposta atendeu exatamente à restrição de 2 horas diárias?",
          "Clareza Visual: A tabela facilitou a execução diária em comparação a blocos de texto?",
          "Redução de Alucinação: As restrições impediram a IA de sugerir horários conflitantes?",
          "Reflexão Docente: Qual prompt gerou mais valor pedagógico e por quê?"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min de debate",
      objetivoSlide: "Sistematizar a comparação visual entre o pedido vago e o comando estruturado, dissecando os 5 elementos fundamentais da Engenharia de Prompts.",
      oQueFalar: "Maria conduz o duelo dos prompts no telão: 'Reparem na comparação no projetor. Na primeira tentativa, vocês viram como o pedido livre gerou respostas genéricas e sobrecarregadas de 6 horas por dia. Já na segunda tentativa com os 5 elementos — Papel, Contexto, Instrução, Formato e Restrições —, a IA entregou exatamente o que o estudante precisava. É esse o poder da Engenharia de Prompts na vida real!'"
    }
  },

  // =========================================================================
  // BLOCO 6: SÍNTESE FORMATIVA & FECHAMENTO (Slides 30 a 32)
  // =========================================================================
  {
    numero: 30,
    id: 30,
    bloco: 6,
    tipo: "secao",
    categoria: "Síntese do Encontro",
    badge: "Consolidação",
    titulo: "Consolidação dos Grandes Aprendizados do Dia",
    subtitulo: "Do funcionamento mecânico dos tokens ao comando consciente, estruturado e seguro",
    citacao: "Saber conversar com a máquina é entender como ela pensa, como ela erra e onde reside o julgamento humano.",
    conducao: "Co-docência (Laura & Maria)",
    notasProfessora: {
      tempoSugerido: "3 min",
      objetivoSlide: "Criar o momento de desaceleração e síntese reflexiva dos módulos e da oficina vivenciados no Encontro 2.",
      oQueFalar: "Laura e Maria abrem o momento de síntese: 'Chegamos à nossa etapa final de consolidação. Hoje foi um dia de transformação profunda: começamos desmontando o mito do buscador, entendemos o que são tokens e a autoatenção, construímos prompts profissionais com Papel, Tarefa, Exemplos e Raciocínio, e experimentamos na prática a enorme diferença que a estruturação faz!'"
    }
  },
  {
    numero: 31,
    id: 31,
    bloco: 6,
    tipo: "apresentacao",
    categoria: "Síntese do Encontro",
    titulo: "As 4 Certezas que Levamos para Casa Hoje",
    subtitulo: "A síntese definitiva do Encontro 2 para sua prática docente cotidiana",
    conducao: "Co-docência (Laura & Maria)",
    itensDestaque: [
      {
        icone: "⛓️",
        titulo: "1. A IA Não é um Buscador",
        desc: "Ela processa um fluxo contínuo de texto concatenado e prevê o próximo token matematicamente. O que entra define o que sai."
      },
      {
        icone: "💡",
        titulo: "2. Atenção é Tudo",
        desc: "Prompts vagos dispersam a atenção da rede e causam alucinações. Comandos estruturados guiam os holofotes do modelo."
      },
      {
        icone: "🚀",
        titulo: "3. Few-Shot e CoT São Superpoderes",
        desc: "Incluir 2 exemplos práticos e pedir para 'pensar passo a passo' eliminam a grande maioria dos erros e ambiguidades."
      },
      {
        icone: "👨‍🏫",
        titulo: "4. A Decisão é Sempre Humana",
        desc: "A máquina é nossa copiloto mais veloz, mas a autoria, a ética pedagógica e a validação final são sempre do educador."
      }
    ],
    notasProfessora: {
      tempoSugerido: "5 min",
      objetivoSlide: "Fixar os 4 pilares conceituais do dia na memória de longo prazo dos professores.",
      oQueFalar: "Laura e Maria fixam as 4 certezas: 'Se vocês precisarem resumir o dia de hoje em 4 frases para contar a um colega professor na sala dos professores amanhã, são essas 4 na tela: 1) A IA não busca, ela concatena e calcula; 2) Prompts organizados controlam a atenção da máquina; 3) Exemplos e passo a passo blindam contra erros; e 4) O crivo final do que vai para a sala de aula é sempre e unicamente nosso!'"
    }
  },
  {
    numero: 32,
    id: 32,
    bloco: 6,
    tipo: "fechamento",
    categoria: "Fechamento",
    badge: "Próximo Encontro",
    titulo: "Próxima Parada: Encontro 3 (06/11)",
    subtitulo: "A Arte do Prompt Avançado — O Método PCTFR e Prompts Especializados para a Educação",
    conducao: "Co-docência (Laura & Maria)",
    detalhes: [
      "Encontro 3 de 7 • Carga Horária: 3h presenciais",
      "Tema: O Método PCTFR (Papel, Contexto, Tarefa, Formato, Restrição)",
      "Tragam seus planos de aula e avaliações reais para a nossa oficina!"
    ],
    
    referencias: [
      "https://arxiv.org/html/2306.04528",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC12396994/"
    ],
    notasProfessora: {
      tempoSugerido: "4 min",
      objetivoSlide: "Agradecer a dedicação da turma, celebrar a evolução do dia e criar expectativa motivadora para o Encontro 3.",
      oQueFalar: "Laura e Maria encerram a aula calorosamente: 'Parabéns a todos vocês pela dedicação e pelo salto gigantesco que demos hoje! No projetor estão os links com as referências primárias da aula de hoje para quem quiser aprofundar na literatura acadêmica: o paper do ArXiv sobre alinhamento e o estudo da PMC. No próximo encontro, em 06 de novembro, vamos dar o passo definitivo na Engenharia de Prompts com a metodologia completa PCTFR e criar juntos avaliações formativas e planos reais de aula. Tragam suas ideias, bom descanso e até a próxima semana!'"
    }
  }
];