/**
 * Módulo 5 – Deck de Slides com Ficha Técnica Conceitual Docente para o Projetor
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 *
 * Tema Central: Ferramentas de IA na Prática – Além do ChatGPT
 * Data: 27/11/2026 • 3 horas presenciais
 * Docência Compartilhada: Laura & Maria
 *
 * Design System: CKW Design System (16:9 Widescreen Nativo, Clean Light)
 */

export const slidesComNotas = [
  // =========================================================================
  // BLOCO 1: AS FERRAMENTAS – OS 3 ESPECIALISTAS (Slides 1 a 4)
  // =========================================================================
  {
    numero: 1,
    id: 1,
    bloco: 1,
    tipo: "capa",
    categoria: "Abertura",
    titulo: "Ferramentas de IA na Prática: Além do ChatGPT",
    subtitulo: "Encontro 5 • Como escolher e combinar Perplexity, NotebookLM e outras soluções gratuitas na sua rotina",
    detalhes: [
      "32 Horas Certificadas • Encontro 5 de 7",
      "27/11/2026 • 3 Horas Presenciais",
      "Docência: Laura & Maria",
      "Coordenação: Prof. Lúcio Rodrigo"
    ],
    conducao: "Co-docência (Laura & Maria)",
    notasProfessora: {
      tempoSugerido: "5 min (00:00 - 00:05)",
      objetivoSlide: "Acolher a turma, resgatar a jornada do Encontro 4 (ChatGPT + C-T-F-R) e abrir a visão para o ecossistema de ferramentas gratuitas especializadas.",
      conceito: {
        titulo: "Do Modelo Único ao Ecossistema de Ferramentas Especializadas",
        definicao: "Na prática contemporânea de IA, produtividade e confiabilidade não dependem de forçar um único chatbot generalista a fazer tudo, mas de escolher a arquitetura certa para cada tarefa: geração criativa/estruturada (ChatGPT), busca verificada na web aberta (Perplexity) e análise fechada de fontes próprias (NotebookLM)."
      },
      mecanica: "Capa oficial do Encontro 5 no padrão Clean Light. Situa o aluno na transição do domínio de prompts no ChatGPT (Encontro 4) para a seleção estratégica de ferramentas gratuitas.",
      armadilhaComum: "O aluno acreditar que aprender ferramentas diferentes exige reaprender tudo do zero, quando na verdade os 4 blocos do C-T-F-R continuam sendo a base de comando.",
      oQueFalar: "Na aula passada dominamos o ChatGPT com a estrutura C-T-F-R e vimos que precisávamos da trava [necessita verificação]. Hoje vamos dar um passo além: conhecer ferramentas gratuitas feitas para pesquisar com fontes reais e estudar seus próprios arquivos sem invenções.",
      faqAlunos: [
        {
          pergunta: "As ferramentas que veremos hoje são pagas ou funcionam na conta gratuita?",
          resposta: "Todas as ferramentas escolhidas para hoje funcionam perfeitamente em planos gratuitos com login Google, sem precisar de assinatura ou cartão de crédito."
        }
      ]
    }
  },
  {
    numero: 2,
    id: 2,
    bloco: 1,
    tipo: "secao",
    categoria: "Etapa 1 • O Ecossistema de IA",
    badge: "ETAPA 1 • O ECOSSISTEMA DE IA",
    titulo: "As Ferramentas",
    citacao: "Tentar usar apenas o ChatGPT para todas as tarefas da rotina é como tentar consertar uma casa inteira usando apenas um martelo.",
    subtitulo: "Da IA única faz-tudo para a caixa de ferramentas especializadas: qual abrir para cada problema?",
    pills: [
      { tipo: "real", texto: "💬 ChatGPT: Criar & Estruturar" },
      { tipo: "real", texto: "🔍 Perplexity: Pesquisar na Web" },
      { tipo: "real", texto: "📓 NotebookLM: Dominar Seus Arquivos" }
    ],
    conducao: "Co-docência (Laura & Maria)",
    notasProfessora: {
      tempoSugerido: "5 min (00:05 - 00:10)",
      objetivoSlide: "Provocar a turma a superar a visão de 'IA = ChatGPT' e apresentar a tríade inicial de ferramentas do encontro.",
      conceito: {
        titulo: "Especialização Arquitetural (Chatbot vs. Search RAG vs. Grounded Workspace)",
        definicao: "Cada plataforma utiliza uma arquitetura de recuperação e geração distinta. Chatbots geram texto a partir de pesos paramétricos pré-treinados; motores de busca generativos acoplam recuperação em tempo real na web (Open-Web RAG); espaços de trabalho ancorados restringem a janela de contexto exclusivamente aos arquivos carregados pelo usuário (Closed-Corpus RAG)."
      },
      mecanica: "Slide de transição de etapa com metáfora visual do martelo e 3 pílulas horizontais sintetizando os papéis de ChatGPT, Perplexity e NotebookLM.",
      armadilhaComum: "Usar o ChatGPT como substituto direto do Google para dados factuais recentes e depois se frustrar com links quebrados ou dados inventados.",
      oQueFalar: "Lembram que no Encontro 4 precisávamos colocar a trava [necessita verificação] sempre que pedíamos fatos reais ao ChatGPT? Hoje vamos abrir nossa caixa de ferramentas especializadas e descobrir qual IA usar em cada situação.",
      faqAlunos: [
        {
          pergunta: "Se o ChatGPT já tem botão de busca na internet hoje, por que ainda precisamos do Perplexity e do NotebookLM?",
          resposta: "Porque o Perplexity é projetado do zero como motor de pesquisa com citações numeradas frase a frase, e o NotebookLM trava a IA apenas nos seus documentos, impedindo mistura com a internet aberta."
        }
      ]
    }
  },
  {
    numero: 3,
    id: 3,
    bloco: 1,
    tipo: "comparativo",
    categoria: "Etapa 1 • As Ferramentas",
    titulo: "Os 3 Especialistas: Quem Faz o Quê na Sua Rotina?",
    subtitulo: "Entenda o modo de trabalho de cada ferramenta antes de digitar seu comando",
    conducao: "Co-docência (Laura & Maria)",
    colunas: [
      {
        tag: "💬 ChatGPT: O Roteirista Criativo",
        icone: "✍️",
        tipo: "marrom",
        bullet: "•",
        itens: [
          "Como trabalha: Responde 'de cabeça' usando os padrões aprendidos no treinamento.",
          "Ponto forte: Redigir e-mails, criar ideias, estruturar planos (C-T-F-R) e fazer auto-entrevista.",
          "Atenção: Pode inventar fatos ou links (alucinar) se usado como buscador sem verificação."
        ]
      },
      {
        tag: "🔍 Perplexity: O Detetive da Web",
        icone: "🌐",
        tipo: "azul",
        bullet: "➔",
        itens: [
          "Como trabalha: Não responde de memória; vasculha a internet em tempo real antes de escrever.",
          "Ponto forte: Numera cada frase ([1], [2], [3]) com o link clicável da fonte original para checagem.",
          "Atenção: Ideal para fatos, notícias e normas abertas; não analisa pastas de arquivos privados."
        ]
      },
      {
        tag: "📓 NotebookLM: O Bibliotecário",
        icone: "📚",
        tipo: "positivo",
        bullet: "✓",
        itens: [
          "Como trabalha: Tranca a porta para a internet e lê somente os arquivos que você enviou.",
          "Ponto forte: Risco mínimo de invenção; aponta o trecho exato do seu PDF e gera Podcast e Mapa Mental.",
          "Atenção: É cego para o que está fora dos seus documentos; não serve para buscar novidades na web."
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "15 min (00:10 - 00:25)",
      objetivoSlide: "Fixar o modelo mental dos 3 Especialistas (Roteirista, Detetive da Web e Bibliotecário Particular) sem jargões técnicos pesados.",
      conceito: {
        titulo: "Modelos Mentais de Uso: Memória Paramétrica vs. Web Aberta vs. Corpus Fechado",
        definicao: "Traduzir a diferença técnica entre geração pura, RAG em web aberta e RAG em corpus fechado em três perfis profissionais intuitivos ajuda o aluno iniciante a prever acertos e falhas de cada ferramenta antes mesmo de enviar o prompt."
      },
      mecanica: "Layout comparativo em 3 colunas coloridas por identidade funcional: Âmbar (ChatGPT / criação), Azul Real (Perplexity / web ao vivo) e Esmeralda (NotebookLM / documentos ancorados).",
      armadilhaComum: "Achar que o NotebookLM vai 'pesquisar no Google' informações que faltam no PDF enviado, ou esperar que o Perplexity escreva longos textos literários criativos no estilo do ChatGPT.",
      oQueFalar: "Pensem neles como 3 especialistas diferentes na sua equipe: o ChatGPT é o roteirista que trabalha de cabeça; o Perplexity é o detetive que vai na rua checar os sites ao vivo; e o NotebookLM é o bibliotecário que tranca a porta e só responde olhando os seus PDFs.",
      faqAlunos: [
        {
          pergunta: "Se eu subir um arquivo errado no NotebookLM, ele percebe ou usa o dado errado?",
          resposta: "Ele confia 100% nas fontes que você subiu. Ele evita inventar coisas de fora, mas a qualidade da resposta depende diretamente da qualidade dos documentos que você entregou a ele."
        }
      ]
    }
  },
  {
    numero: 4,
    id: 4,
    bloco: 1,
    tipo: "quadro-comparativo",
    estiloColunas: "ferramentas",
    iconesColunas: ["💬", "🔍", "📓"],
    categoria: "Etapa 1 • Síntese Comparativa",
    titulo: "Tabela Comparativa: ChatGPT vs. Perplexity vs. NotebookLM",
    subtitulo: "Critérios práticos lado a lado para decidir em segundos qual especialista acionar",
    colunasTabela: [
      "Critério de Escolha",
      "ChatGPT",
      "Perplexity",
      "NotebookLM"
    ],
    linhasTabela: [
      {
        criterio: "Papel principal",
        vago: "Roteirista e redator criativo",
        falsoBom: "Pesquisador da internet ao vivo",
        estruturado: "Bibliotecário dos seus arquivos"
      },
      {
        criterio: "De onde vem a resposta?",
        vago: "Memória do treinamento (+ busca secundária)",
        falsoBom: "Sites abertos na web lidos na hora",
        estruturado: "Exclusivamente dos arquivos que você subiu"
      },
      {
        criterio: "Como mostra a fonte?",
        vago: "Geralmente não cita ou exige pedir links",
        falsoBom: "Numera cada frase ([1], [2]) com link real",
        estruturado: "Cita o trecho e a página exata do seu PDF"
      },
      {
        criterio: "Risco de alucinação",
        vago: "Médio a alto (exige checagem manual)",
        falsoBom: "Baixo (permite auditar o link em 1 clique)",
        estruturado: "Mínimo (restrito 100% às suas fontes)"
      },
      {
        criterio: "Melhor para...",
        vago: "Escrever e-mails, planejar e estruturar",
        falsoBom: "Pesquisar fatos, leis, preços e notícias",
        estruturado: "Estudar apostilas, editais e resumir aulas"
      },
      {
        criterio: "Destaques gratuitos",
        vago: "Diálogo iterativo, C-T-F-R e Canvas",
        falsoBom: "Buscas padrão ilimitadas e filtros por fonte",
        estruturado: "Podcast em áudio, vídeo, mapa mental e guia"
      },
      {
        criterio: "Regra de bolso",
        vago: "\"Preciso escrever ou criar algo\"",
        falsoBom: "\"Preciso descobrir ou checar na web\"",
        estruturado: "\"Preciso dominar este documento\""
      }
    ],
    conducao: "Co-docência (Laura & Maria)",
    notasProfessora: {
      tempoSugerido: "15 min (00:25 - 00:40)",
      objetivoSlide: "Consolidar a comparação objetiva em 7 critérios práticos e mostrar como os 3 especialistas se complementam em um único fluxo de trabalho.",
      conceito: {
        titulo: "Matriz de Decisão por Fonte de Verdade e Fluxo Combinado",
        definicao: "Tabela de roteamento cognitivo que orienta o usuário a escolher a ferramenta pela origem da verdade necessária (criação autoral, web atualizada ou corpus documental próprio) e abre caminho para pipelines combinados (Pesquisar no Perplexity -> Organizar no NotebookLM -> Redigir no ChatGPT)."
      },
      mecanica: "Quadro comparativo lado a lado com 7 linhas de alta legibilidade em 16:9, utilizando código de cores por especialista (Âmbar para ChatGPT, Azul Real para Perplexity e Esmeralda para NotebookLM).",
      armadilhaComum: "Encarar as ferramentas como rivais ('qual é a melhor de todas?') em vez de peças complementares de um mesmo fluxo de trabalho.",
      oQueFalar: "Não existe uma única ferramenta campeã em tudo. Quando precisar pesquisar fatos reais na web, abra o Perplexity; quando precisar estudar um PDF ou edital sem erro, jogue no NotebookLM; quando precisar redigir ou estruturar a entrega final, leve para o ChatGPT.",
      faqAlunos: [
        {
          pergunta: "Eu posso combinar as três ferramentas na mesma tarefa?",
          resposta: "Sim! Esse é o fluxo mais poderoso: pesquisar fontes no Perplexity, consolidar os documentos no NotebookLM para entender tudo sem invenções e usar o ChatGPT para formatar o texto ou e-mail final."
        }
      ]
    }
  },

  // =========================================================================
  // BLOCO 2: PERPLEXITY NA PRÁTICA – O DETETIVE DA WEB (Slides 5 a 8)
  // =========================================================================
  {
    numero: 5,
    id: 5,
    bloco: 2,
    tipo: "apresentacao",
    categoria: "Etapa 2 • Perplexity AI",
    titulo: "Como Funciona o Perplexity: O RAG em Web Aberta",
    subtitulo: "A anatomia de uma resposta construída com busca ao vivo e fontes auditáveis",
    conducao: "Condução: Laura",
    itensDestaque: [
      {
        icone: "💬",
        titulo: "1. Pergunta em Linguagem Natural",
        desc: "Você pergunta normalmente, como faria no ChatGPT. Não precisa digitar termos booleanos rígidos de buscadores antigos."
      },
      {
        icone: "🌐",
        titulo: "2. Varredura na Web em Tempo Real",
        desc: "Em segundos, o motor dispara buscas paralelas na internet aberta, consultando múltiplos sites, portais e periódicos atualizados."
      },
      {
        icone: "🔗",
        titulo: "3. Síntese com Citações Numeradas",
        desc: "A resposta é escrita com marcadores [1], [2], [3] clicáveis ao final de cada frase, permitindo auditar a fonte original imediatamente."
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (00:40 - 00:50)",
      objetivoSlide: "Apresentar a mecânica do RAG aberto no Perplexity, demonstrando como a busca e a síntese cooperam para evitar alucinações.",
      conceito: {
        titulo: "Open-Web RAG (Retrieval-Augmented Generation em Tempo Real)",
        definicao: "Arquitetura que combina um indexador de busca ao vivo com um modelo de linguagem sintetizador. Em vez de gerar texto puramente a partir de pesos estáticos, o sistema recupera passagens relevantes da web em tempo real e condiciona a geração textual a esses fragmentos documentais, anexando marcadores de proveniência numérica."
      },
      mecanica: "Sequência de 3 cards ilustrando os 3 passos: Entrada humana em linguagem natural -> Recuperação ativa de fontes na internet -> Síntese com citações numeradas clicáveis.",
      armadilhaComum: "Achar que o Perplexity é apenas um 'Google tradicional com texto em cima'. A diferença é que ele lê os sites inteiros para você e sintetiza a resposta direta com rastreabilidade.",
      oQueFalar: "Observem a diferença: o ChatGPT tenta lembrar o que leu meses atrás. O Perplexity corre na internet no segundo em que você aperta Enter, lê várias páginas e devolve o resumo dizendo exatamente onde achou cada dado.",
      faqAlunos: [
        {
          pergunta: "O Perplexity consegue ler páginas que exigem assinatura ou senha?",
          resposta: "Não. Ele acessa páginas públicas da web aberta. Páginas bloqueadas por paywall ou login restrito não entram na varredura."
        }
      ]
    }
  },
  {
    numero: 6,
    id: 6,
    bloco: 2,
    tipo: "apresentacao",
    categoria: "Etapa 2 • Perplexity AI",
    titulo: "Recursos Gratuitos de Destaque no Perplexity",
    subtitulo: "Filtros de foco, Pro Search diário e identificação rápida de confiabilidade",
    conducao: "Condução: Laura",
    itensDestaque: [
      {
        icone: "⚡",
        titulo: "Pro Search Diário",
        desc: "Aprofunda perguntas complexas com múltiplas rodadas de busca e perguntas de refinamento (uso limitado por dia no plano gratuito)."
      },
      {
        icone: "🎓",
        titulo: "Filtros de Foco (Focus)",
        desc: "Restringe a pesquisa ao tipo desejado: 'Academic' para artigos científicos e teses; 'Web' para varredura aberta; 'Finance' para dados de mercado."
      },
      {
        icone: "🏷️",
        titulo: "Rótulos de Confiabilidade",
        desc: "Identifica com etiquetas transparentes a categoria da fonte citada (Government, Academic, Trusted) para acelerar sua triagem crítica."
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (00:50 - 01:00)",
      objetivoSlide: "Capacitar o aluno a usar os recursos do plano gratuito do Perplexity que trazem maior ganho de qualidade na pesquisa.",
      conceito: {
        titulo: "Filtros de Domínio e Triagem Rápida de Proveniência",
        definicao: "Capacidade de restringir o espaço amostral de recuperação documental (Search Scope) a repositórios de alta autoridade epistemológica (como bases acadêmicas indexadas) e utilizar metadados de domínio para acelerar a validação da fonte primária."
      },
      mecanica: "Grid de 3 cards destacando o modo Pro Search (para perguntas que exigem pesquisa em várias etapas), o seletor Focus (Academic vs. Web) e a leitura dos rótulos de procedência das fontes.",
      armadilhaComum: "Gastar todos os Pro Searches gratuitos em perguntas simples de 'sim ou não' ou fatos triviais que a busca padrão gratuita resolve perfeitamente.",
      oQueFalar: "No plano gratuito temos buscas normais ilimitadas e algumas buscas Pro diárias. Usem a busca normal para o dia a dia e guardem o Pro Search para quando estiverem montando um trabalho acadêmico ou relatório de peso.",
      faqAlunos: [
        {
          pergunta: "O que muda ao ativar o filtro 'Academic'?",
          resposta: "Ele ignora blogs de opinião e redes sociais, priorizando artigos científicos, revistas acadêmicas revisadas por pares e repositórios universitários."
        }
      ]
    }
  },
  {
    numero: 7,
    id: 7,
    bloco: 2,
    tipo: "comparativo",
    categoria: "Etapa 2 • Pensamento Crítico",
    titulo: "Armadilha do Detetive: Citação Não É Sinônimo de Verdade",
    subtitulo: "Como avaliar criticamente os links encontrados antes de aceitar uma resposta",
    conducao: "Condução: Laura",
    colunas: [
      {
        tag: "⚠️ O Vício do Usuário Apressado",
        icone: "❌",
        tipo: "alerta",
        bullet: "✕",
        itens: [
          "Ver um número de citação [1] e assumir que a afirmação é verdade absoluta.",
          "Confiar cegamente no selo 'Academic' sem conferir a data ou o resumo do estudo.",
          "Copiar o texto gerado sem nunca abrir ao menos uma das páginas originais citadas."
        ]
      },
      {
        tag: "✓ O Protocolo Crítico de Verificação",
        icone: "✅",
        tipo: "positivo",
        bullet: "✓",
        itens: [
          "Clicar na citação e conferir se o número ou afirmação realmente consta no texto original.",
          "Verificar quem publicou (instituição/autor), em que ano e se o estudo não é preliminar.",
          "Lembrar que o rótulo ajuda na triagem inicial, mas não substitui a leitura humana atenta."
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (01:00 - 01:10)",
      objetivoSlide: "Alertar a turma sobre a falsa sensação de infalibilidade gerada pela presença de links e números de citação.",
      conceito: {
        titulo: "A Falácia da Autoridade Rastreável e a Ilusão do Hiperlink",
        definicao: "A presença de um link válido e numerado comprova a existência de uma página na web, mas não garante a veracidade científica, a contemporaneidade ou a ausência de viés no conteúdo. A verificação humana de autoria, data e método permanece mandatória."
      },
      mecanica: "Quadro comparativo de dois lados: o erro de confundir link com verdade vs. os 3 passos do protocolo crítico de conferência.",
      armadilhaComum: "Achar que ter um link de artigo científico encerra a discussão, sem perceber que artigos antigos ou preliminares podem ter sido refutados pela comunidade.",
      oQueFalar: "Cuidado: a IA achou um link real, mas quem garante que aquela página diz a verdade ou que a IA não distorceu uma frase? O trabalho do detetive só termina quando você clica e confere o original com seus próprios olhos.",
      faqAlunos: [
        {
          pergunta: "A Perplexity já foi pega citando links que não diziam exatamente o que ela escreveu?",
          resposta: "Sim. Como qualquer IA, ela pode sintetizar um dado fora de contexto. A própria empresa orienta em seu manual: 'Abrir a fonte original é a melhor maneira de ter certeza'."
        }
      ]
    }
  },
  {
    numero: 8,
    id: 8,
    bloco: 2,
    tipo: "missao-diagnostica",
    ocultarPresenterPill: true,
    categoria: "Prática de Bancada • Missão 1",
    titulo: "Oficina de Bancada: Missão 1 — O Detetive de Fontes",
    subtitulo: "Comparando uma resposta genérica com uma auditoria de links em tempo real",
    tempoEstimado: "15 min",
    passos: [
      "1. Escolha uma afirmação cotidiana ou polêmica (ex.: 'Estudar ouvindo música sempre prejudica a concentração' ou 'Café logo após o almoço impede absorção de nutrientes').",
      "2. Teste no ChatGPT: Peça uma explicação curta sobre o tema e repare como ele responde 'de cabeça', sem trazer links diretos às fontes.",
      "3. Teste no Perplexity: Faça a mesma pergunta no perplexity.ai com o filtro 'Academic' ativado e observe as citações [1], [2], [3].",
      "4. Auditoria da Fonte: Clique em ao menos um link original, abra a página e confirme se o que a IA escreveu realmente está no documento.",
      "5. Registro Formativo: Registre no seu Portfólio Digital: Afirmação testada, o que o ChatGPT disse, o link auditado no Perplexity e seu veredito."
    ],
    destaqueDiagnostica: {
      icone: "🔍",
      titulo: "Missão 1: Da Opinião à Evidência",
      desc: "Experimente a transição prática entre uma resposta plausível gerada de memória e uma síntese com links reais auditáveis.",
      tagAviso: "RAG Aberto & Checagem Factual"
    },
    conducao: "Co-docência (Laura e Maria circulando pelas mesas)",
    notasProfessora: {
      tempoSugerido: "15 min (01:10 - 01:25)",
      objetivoSlide: "Conduzir a Missão 1 de bancada no laboratório, garantindo que cada aluno abra e confira ao menos um link real no Perplexity.",
      conceito: {
        titulo: "Operacionalização da Checagem de Fatos e Triagem de Fontes",
        definicao: "Exercício prático de bancada que desenvolve a habilidade de auditoria ativa: comparar a resposta puramente textual de uma LLM com a recuperação de links em tempo real, realizando o confronto empírico da síntese com o texto original da fonte."
      },
      mecanica: "Roteiro de 5 passos no laboratório. As professoras circulam conferindo se os alunos conseguiram ativar o filtro de foco e abrir a aba da fonte primária.",
      armadilhaComum: "O aluno apenas ler a tela do Perplexity sem clicar no link [1] para ver a página original.",
      oQueFalar: "Todo mundo abrindo o perplexity.ai no navegador. Podem logar com a conta Google. Escolham uma afirmação comum e vamos ver se a ciência confirma ou se é mito de internet!",
      faqAlunos: [
        {
          pergunta: "Preciso pagar para usar o filtro Academic?",
          resposta: "Não! O botão 'Focus' (Foco) com opção 'Academic' é totalmente gratuito para todos os usuários."
        }
      ]
    }
  },

  // =========================================================================
  // BLOCO 3: GOOGLE NOTEBOOKLM – O BIBLIOTECÁRIO PARTICULAR (Slides 9 a 13)
  // =========================================================================
  {
    numero: 9,
    id: 9,
    bloco: 3,
    tipo: "apresentacao",
    categoria: "Etapa 3 • Google NotebookLM",
    titulo: "Como Funciona o NotebookLM: O RAG Fechado nos Seus Documentos",
    subtitulo: "A tecnologia que fecha as portas para a internet externa e elimina alucinações",
    conducao: "Condução: Maria",
    itensDestaque: [
      {
        icone: "📂",
        titulo: "1. Seu Corpus de Confiança",
        desc: "Você cria um caderno e faz upload de PDFs, apostilas, Google Docs, slides ou vídeos do YouTube (até 50 fontes por caderno no plano gratuito)."
      },
      {
        icone: "🔒",
        titulo: "2. Ancoragem Estrita (Grounding)",
        desc: "O modelo responde EXCLUSIVAMENTE a partir do material carregado. Se a informação não estiver nos seus arquivos, ele avisa que não encontrou."
      },
      {
        icone: "📌",
        titulo: "3. Citação Linha a Linha",
        desc: "Cada afirmação traz um marcador clicável que abre o PDF e destaca em cor forte o parágrafo exato de onde o dado foi extraído."
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (01:25 - 01:35)",
      objetivoSlide: "Apresentar a tecnologia de RAG fechado do NotebookLM e demonstrar por que ele é a ferramenta ideal para estudar materiais complexos.",
      conceito: {
        titulo: "Closed-Corpus Grounding (Ancoragem em Corpus Fechado)",
        definicao: "Mecanismo pelo qual a geração da IA é estritamente condicionada e delimitada ao conjunto de documentos estáticos importados pelo usuário. Elimina alucinações exógenas (provenientes de dados de treino abertos) ao priorizar como única fonte de verdade os fragmentos indexados no caderno."
      },
      mecanica: "Sequência visual de 3 etapas demonstrando a barreira contra a internet aberta: upload dos documentos do aluno -> resposta 100% ancorada -> destaque visual no parágrafo original.",
      armadilhaComum: "Achar que o NotebookLM vai atualizar o arquivo sozinho se ele mudar no Google Drive. As fontes importadas são cópias estáticas no momento do envio.",
      oQueFalar: "Aqui a lógica muda completamente: enquanto o Perplexity abre a porta para a internet inteira, o NotebookLM tranca a porta. Ele vira o seu bibliotecário pessoal: ele só fala do que está dentro dos arquivos que você colocou na mesa dele.",
      faqAlunos: [
        {
          pergunta: "Quantos documentos posso colocar em um caderno gratuito?",
          resposta: "A Google permite até 50 fontes por caderno, e cada arquivo pode ter até 500 mil palavras (ou 200 MB), o que é mais do que suficiente para livros e apostilas inteiras."
        }
      ]
    }
  },
  {
    numero: 10,
    id: 10,
    bloco: 3,
    tipo: "apresentacao",
    categoria: "Etapa 3 • Google NotebookLM",
    titulo: "Navegação e Rastreabilidade: Como Dominar o Caderno",
    subtitulo: "Citações em linha clicáveis, seleção seletiva de fontes e o Source Guide automático",
    conducao: "Condução: Maria",
    itensDestaque: [
      {
        icone: "🎯",
        titulo: "Citação em Linha Clicável",
        desc: "Ao clicar no número da citação, o painel lateral abre o PDF exatamente no parágrafo original destacado em cor de alto contraste."
      },
      {
        icone: "☑️",
        titulo: "Seleção Granular de Fontes",
        desc: "Você pode desmarcar fontes na barra lateral e fazer perguntas focando em apenas um ou dois arquivos específicos, evitando misturas de matérias."
      },
      {
        icone: "🗺️",
        titulo: "Source Guide Automático",
        desc: "Assim que um PDF é importado, a ferramenta gera um resumo executivo, tópicos-chave e perguntas sugeridas para guiar sua leitura."
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (01:35 - 01:45)",
      objetivoSlide: "Demonstrar a usabilidade prática da interface do NotebookLM (citações clicáveis, checkboxes de fontes e Source Guide).",
      conceito: {
        titulo: "Rastreabilidade Bidirecional e Escopo Dinâmico de Atenção",
        definicao: "A interface do NotebookLM implementa um link direto entre a resposta sintetizada e o trecho de origem no visualizador de documentos. A seleção manual de fontes permite ao usuário modular a atenção do modelo (Context Pruning), isolando materiais para evitar contaminação conceitual."
      },
      mecanica: "3 cards práticos explicando a navegação da tela: o clique na citação que leva ao texto original, o filtro por caixas de seleção (checkboxes) e o guia do documento gerado na hora.",
      armadilhaComum: "Deixar 20 PDFs marcados com temas totalmente diferentes e fazer uma pergunta genérica, fazendo a IA misturar conceitos de matérias distintas.",
      oQueFalar: "Vejam que recurso fantástico: você não precisa ler 80 páginas procurando uma linha. Você pergunta no chat, ele responde e você clica no número: o PDF abre ao lado com o texto pintado de amarelo para você conferir.",
      faqAlunos: [
        {
          pergunta: "Posso colocar links de vídeos do YouTube como fonte?",
          resposta: "Sim! Se o vídeo tiver legendas ou transcrição, o NotebookLM importa o texto falado do vídeo como fonte de estudo do caderno."
        }
      ]
    }
  },
  {
    numero: 11,
    id: 11,
    bloco: 3,
    tipo: "apresentacao",
    layout: "grid-4cards",
    categoria: "Etapa 3 • Google NotebookLM",
    titulo: "O Painel Studio: Transformando Documentos em Produtos",
    subtitulo: "Outputs multimídia gerados automaticamente a partir dos seus arquivos de estudo",
    conducao: "Condução: Maria",
    itensDestaque: [
      {
        icone: "🎙️",
        titulo: "Audio Overview (Podcast)",
        desc: "Dois apresentadores de IA debatem as ideias dos seus PDFs em uma conversa dinâmica e descontraída em português."
      },
      {
        icone: "📋",
        titulo: "Guia de Estudo & FAQ",
        desc: "Gera automaticamente questionários de revisão, glossários de conceitos e perguntas frequentes extraídas das fontes."
      },
      {
        icone: "🧠",
        titulo: "Mapas Mentais & Linha do Tempo",
        desc: "Visualização esquemática das conexões conceituais do documento e ordem cronológica de acontecimentos históricos ou processos."
      },
      {
        icone: "🎬",
        titulo: "Video Overview (Vídeo)",
        desc: "Gera um resumo visual narrado em vídeo (formatos explicativo ou curto) ilustrando os conceitos centrais do seu caderno."
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (01:45 - 01:55)",
      objetivoSlide: "Apresentar a suíte Studio do NotebookLM (Podcast em áudio, Guia de Estudo, Mapas Mentais e Vídeo explicativo).",
      conceito: {
        titulo: "Multimodalidade Sintética e Artefatos Derivados de Estudo",
        definicao: "Capacidade de reconfigurar o mesmo conjunto de dados textuais estruturados em múltiplos formatos sensoriais e cognitivos: áudio dialógico conversacional (podcast sintético), representações diagramáticas em grafos (mapas mentais) e questionários formativos de autoavaliação (guias de estudo)."
      },
      mecanica: "Grid de 4 cards ilustrando os 4 grandes artefatos do painel Studio. Destaque especial para a geração do Audio Overview e do Guia de Estudo.",
      armadilhaComum: "Achar que o podcast é gerado instantaneamente como uma resposta de chat. Ele exige processamento de voz e leva de 2 a 5 minutos para ficar pronto.",
      oQueFalar: "O painel Studio é onde a mágica acontece. Você joga a apostila e pede um Guia de Estudo para testar seus conhecimentos, ou clica em Audio Overview e vai ouvindo o podcast no ônibus enquanto volta para casa.",
      faqAlunos: [
        {
          pergunta: "O podcast funciona em português?",
          resposta: "Sim! Se o seu documento estiver em português, os dois apresentadores de IA conversarão em português do Brasil com naturalidade impressionante."
        }
      ]
    }
  },
  {
    numero: 12,
    id: 12,
    bloco: 3,
    tipo: "comparativo",
    categoria: "Etapa 3 • Pensamento Crítico",
    titulo: "Armadilha do Bibliotecário: O Que o NotebookLM NÃO Faz",
    subtitulo: "Cegueira para fontes externas, sínteses imperfeitas e privacidade de dados",
    conducao: "Condução: Maria",
    colunas: [
      {
        tag: "⚠️ Cuidados Críticos de Uso",
        icone: "❌",
        tipo: "alerta",
        bullet: "✕",
        itens: [
          "Usar o NotebookLM como buscador geral (ele é cego para o que você não subiu no caderno).",
          "Ouvir o Audio Overview (podcast) achando que ele substitui a leitura atenta do documento.",
          "Subir documentos com dados pessoais sigilosos ou materiais de terceiros sem autorização."
        ]
      },
      {
        tag: "✓ As Boas Práticas do Caderno",
        icone: "✅",
        tipo: "positivo",
        bullet: "✓",
        itens: [
          "Carregar materiais complementares (ex: um artigo científico, uma lei oficial e uma cartilha).",
          "Conferir as citações nos trechos originais antes de usar resumos em relatórios de trabalho.",
          "Usar o áudio, o mapa mental e o FAQ como andaimes de revisão para fixar os conceitos."
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (01:55 - 02:05)",
      objetivoSlide: "Alertar a turma sobre as limitações do NotebookLM e reforçar os princípios de privacidade e direitos autorais.",
      conceito: {
        titulo: "Limites Epistêmicos do RAG Fechado e Governança de Dados",
        definicao: "A robustez do RAG fechado contra alucinações externas cria, por design, uma fronteira epistêmica rígida: o modelo ignora o mundo fora do caderno. Paralelamente, materiais importados para a nuvem devem respeitar as diretrizes da LGPD e os direitos autorais aplicáveis."
      },
      mecanica: "Quadro comparativo de dois lados: equívocos comuns no uso do NotebookLM vs. boas práticas de alimentação documental e privacidade.",
      armadilhaComum: "Achar que carregar um único PDF desatualizado é suficiente para ter uma visão completa e moderna sobre um tema complexo.",
      oQueFalar: "Lembrem-se: o NotebookLM é tão bom quanto os arquivos que você colocar nele. Se você subir um texto enviesado ou incompleto, a resposta dele será enviesada ou incompleta. E nunca subam documentos confidenciais com dados pessoais!",
      faqAlunos: [
        {
          pergunta: "A Google usa os documentos que eu subo no NotebookLM para treinar os modelos dela?",
          resposta: "A Google documenta oficialmente que os dados e documentos que você envia para o NotebookLM pessoal não são utilizados para treinar novos modelos públicos de IA."
        }
      ]
    }
  },
  {
    numero: 13,
    id: 13,
    bloco: 3,
    tipo: "missao-diagnostica",
    ocultarPresenterPill: true,
    categoria: "Prática de Bancada • Missão 2",
    titulo: "Oficina de Bancada: Missão 2 — Do PDF ao Guia e Áudio",
    subtitulo: "Carregando materiais no caderno, explorando citações e gerando recursos de estudo",
    tempoEstimado: "20 min",
    passos: [
      "1. Acesse notebooklm.google.com com sua conta Google e crie um novo caderno de estudos.",
      "2. Importe uma fonte: Faça o upload de um PDF curto fornecido pelas professoras (ou adicione o link de um artigo ou vídeo da aula).",
      "3. Explore as Citações: No chat, pergunte: 'Quais são as três ideias centrais deste material? Indique os trechos de onde tirou cada uma.' Clique nos números e veja o destaque no PDF.",
      "4. Teste o Painel Studio: Clique em 'Guia de Estudo' para gerar perguntas de revisão e clique em 'Gerar' no Audio Overview.",
      "5. Validação Humana: Ouça um minuto do podcast gerado e confira se a conversa sintetiza fielmente o que está escrito no seu material."
    ],
    destaqueDiagnostica: {
      icone: "📓",
      titulo: "Missão 2: Estudo Ativo com Grounding",
      desc: "Transforme um documento estático em um espaço interativo de estudo com citações linha a linha, guia de perguntas e áudio.",
      tagAviso: "RAG Fechado & Painel Studio"
    },
    conducao: "Co-docência (Laura e Maria circulando pelas mesas)",
    notasProfessora: {
      tempoSugerido: "20 min (02:05 - 02:25)",
      objetivoSlide: "Conduzir a Missão 2 de bancada, garantindo que cada participante consiga subir um arquivo, fazer uma pergunta ancorada e gerar um output no Studio.",
      conceito: {
        titulo: "Operacionalização de Cadernos Inteligentes e Aprendizagem Aumentada",
        definicao: "Exercício prático de bancada que consolida o fluxo completo de estudo aumentado por IA: ingestão documental -> extração orientada por prompts -> navegação por citações interativas -> produção de artefatos de revisão multimídia."
      },
      mecanica: "Slide de bancada com 5 passos claros. As professoras auxiliam na conexão da conta Google e na exploração do painel Studio.",
      armadilhaComum: "Ficar esperando o áudio na tela sem fazer outras perguntas no chat. Explique que o áudio renderiza em segundo plano na nuvem enquanto eles podem continuar conversando com o PDF.",
      oQueFalar: "Todos no notebooklm.google.com! Vamos criar o caderno e subir o documento da aula. Reparem como ao clicar nas citações o texto do PDF acende na tela ao lado. E não deixem de colocar o áudio para gerar!",
      faqAlunos: [
        {
          pergunta: "Posso fechar a aba enquanto o áudio está gerando?",
          resposta: "Sim! Como o processamento acontece nos servidores da Google, você pode fechar o navegador e voltar mais tarde que o áudio estará salvo no seu caderno."
        }
      ]
    }
  },

  // =========================================================================
  // BLOCO 4: ARMADILHAS, ÉTICA UNESCO & FECHAMENTO (Slides 14 a 17)
  // =========================================================================
  {
    numero: 14,
    id: 14,
    bloco: 4,
    tipo: "quadro-comparativo",
    estiloColunas: "ferramentas",
    iconesColunas: ["⚠️", "🧠", "💡"],
    categoria: "Etapa 4 • Armadilhas & Pensamento Crítico",
    titulo: "Quadro de Armadilhas: Evite os 6 Erros Clássicos de Iniciante",
    subtitulo: "Os equívocos mais comuns mapeados na pesquisa e como superá-los na prática cotidiana",
    colunasTabela: [
      "Armadilha Comum",
      "O Que o Usuário Faz",
      "Por Que Dá Errado",
      "Como Corrigir"
    ],
    linhasTabela: [
      {
        criterio: "1. Tratar Perplexity como ChatGPT",
        vago: "Pede criação livre ou texto sem fontes",
        falsoBom: "Estranha resposta cheia de links curtos",
        estruturado: "Use Perplexity para fatos e ChatGPT para rascunho"
      },
      {
        criterio: "2. Citação = Verdade Absoluta",
        vago: "Vê o link [1] e aceita sem conferir",
        falsoBom: "O link pode ser defasado ou fora de contexto",
        estruturado: "Abra o link e leia ao menos um parágrafo original"
      },
      {
        criterio: "3. Confundir 'Academic' com Fato",
        vago: "Acha que selo 'Academic' valida a resposta",
        falsoBom: "O selo indica tipo de site, não verdade do estudo",
        estruturado: "Use o selo como triagem inicial, avaliando autoria"
      },
      {
        criterio: "4. NotebookLM como Buscador Aberto",
        vago: "Pergunta fatos que não estão no PDF",
        falsoBom: "A IA avisa que não achou ou fica sem resposta",
        estruturado: "Lembre-se: ele só lê o que você colocou no caderno"
      },
      {
        criterio: "5. Ouvir Áudio sem Ler o Texto",
        vago: "Usa o podcast como única fonte de estudo",
        falsoBom: "O áudio é uma síntese que pode omitir detalhes",
        estruturado: "Use o áudio como revisão e fixação, nunca substituto"
      },
      {
        criterio: "6. Subir Documentos sem Autorização",
        vago: "Carrega contratos ou dados pessoais sigilosos",
        falsoBom: "Viola privacidade, termos de uso e a LGPD",
        estruturado: "Suba materiais públicos, didáticos ou próprios"
      }
    ],
    conducao: "Co-docência (Laura & Maria)",
    notasProfessora: {
      tempoSugerido: "10 min (02:25 - 02:35)",
      objetivoSlide: "Sistematizar os 6 principais erros operacionais identificados em usuários iniciantes e fixar os comportamentos corretivos.",
      conceito: {
        titulo: "Matriz de Vulnerabilidades Operacionais e Vícios de Transferência",
        definicao: "Sistematização dos vícios gerados pela transferência indiscriminada de hábitos: o usuário acostumado com chatbots generalistas tenta aplicar as mesmas expectativas em ferramentas de busca ou de ancoragem documental fechada, gerando falhas de alinhamento."
      },
      mecanica: "Tabela comparativa de 4 colunas analisando 6 armadilhas clássicas lado a lado (Ação do usuário -> Por que dá errado -> Como corrigir).",
      armadilhaComum: "Achar que basta aprender a ferramenta uma vez para não cometer mais esses erros. Essas armadilhas decorrem da pressa do dia a dia.",
      oQueFalar: "Reparem como a maioria desses erros vem da pressa. Quando vocês sentirem a tentação de copiar direto sem abrir a fonte, lembrem-se desta tabela. É ela que separa o amador de quem usa IA com postura profissional.",
      faqAlunos: [
        {
          pergunta: "Qual dessas 6 armadilhas é a mais perigosa na prática?",
          resposta: "A número 6 (subir dados pessoais sigilosos sem autorização) por riscos jurídicos, e a número 2 (achar que link [1] é verdade inquestionável) por riscos acadêmicos e profissionais."
        }
      ]
    }
  },
  {
    numero: 15,
    id: 15,
    bloco: 4,
    tipo: "secao",
    categoria: "Etapa 4 • Governança & Ética UNESCO",
    badge: "DIRETRIZES DA UNESCO • AGÊNCIA HUMANA NA EDUCAÇÃO",
    titulo: "A IA Não Substitui a Leitura: Ela Organiza o Caminho Até Ela",
    citacao: "A inteligência artificial generativa deve ser utilizada para potencializar e apoiar a capacidade crítica humana, e jamais para terceirizar a reflexão e a responsabilidade ética pela verdade.",
    autor: "UNESCO (2023–2024)",
    autorDesc: "Guidance for Generative AI in Education and Research",
    subtitulo: "A tecnologia organiza o volume de dados e acelera o acesso; a validação e o discernimento continuam sendo prerrogativas humanas.",
    pills: [
      { tipo: "real", texto: "🧭 IA como Andaime Cognitivo" },
      { tipo: "real", texto: "🔍 Curadoria & Checagem Ativa" },
      { tipo: "real", texto: "🛡️ Agência Humana Inegociável" }
    ],
    conducao: "Co-docência (Laura & Maria)",
    notasProfessora: {
      tempoSugerido: "10 min (02:35 - 02:45)",
      objetivoSlide: "Fundamentar a postura ética do curso nas diretrizes internacionais da UNESCO para uso de IA na educação e pesquisa.",
      conceito: {
        titulo: "Agência Humana, Andaime Cognitivo e Responsabilidade Epistêmica",
        definicao: "Conforme preconizado pela UNESCO, as ferramentas de IA devem atuar estritamente como andaimes de suporte ao desenvolvimento cognitivo (Cognitive Scaffolding), preservando a centralidade da agência humana, a autonomia do julgamento crítico e a responsabilidade intransferível do autor."
      },
      mecanica: "Slide solene de transição conceitual destacando a citação da UNESCO e as 3 pílulas de princípio ético do curso.",
      armadilhaComum: "Achar que ter ferramentas eficientes significa ler menos. O objetivo da IA é nos poupar do trabalho mecânico de busca para sobrar mais tempo para a reflexão profunda.",
      oQueFalar: "A UNESCO deixa um recado muito claro para todos nós: a IA pode resumir, encontrar links e montar podcasts, mas ela não pensa por nós. A responsabilidade por qualquer trabalho entregue é sempre do ser humano que assina embaixo.",
      faqAlunos: [
        {
          pergunta: "O que a UNESCO recomenda sobre o uso de IA por alunos em sala de aula?",
          resposta: "A UNESCO recomenda que as ferramentas sejam usadas para estimular o questionamento crítico e o debate, e nunca como atalhos para entregar trabalhos sem compreensão do conteúdo."
        }
      ]
    }
  },
  {
    numero: 16,
    id: 16,
    bloco: 4,
    tipo: "apresentacao",
    categoria: "Etapa 4 • Síntese Prática",
    titulo: "Checklist de Bolso: Qual Ferramenta Abrir?",
    subtitulo: "Três perguntas simples para escolher o especialista certo antes de iniciar qualquer tarefa",
    conducao: "Co-docência (Laura & Maria)",
    itensDestaque: [
      {
        icone: "💬",
        titulo: "1. Preciso ESCREVER, CRIAR ou ESTRUTURAR?",
        desc: "Abra o ChatGPT (ou Claude). Use a estrutura C-T-F-R para redigir e-mails, criar roteiros, fazer brainstorming criativo e pedir auto-entrevista."
      },
      {
        icone: "🔍",
        titulo: "2. Preciso PESQUISAR, CHECAR ou COMPARAR NA WEB?",
        desc: "Abra o Perplexity. Use filtros por foco (Web/Academic) e audite os links [1], [2] para garantir notícias e dados factuais atualizados."
      },
      {
        icone: "📓",
        titulo: "3. Preciso ESTUDAR, RESUMIR ou DOMINAR MEUS ARQUIVOS?",
        desc: "Abra o NotebookLM. Suba seus PDFs, leia com citações que remetem à página original e gere guias de estudo e podcasts."
      }
    ],
    notasProfessora: {
      tempoSugerido: "5 min (02:45 - 02:50)",
      objetivoSlide: "Fornecer uma regra mnemônica de sobrevivência para a rotina diária dos alunos após o término da aula.",
      conceito: {
        titulo: "Heurística de Decisão Rápida para Seleção de Ferramentas",
        definicao: "Regra heurística de bolso que reduz a sobrecarga de escolha do usuário: classificar a intenção da tarefa em Criação/Estruturação (Chatbot), Verificação na Web Aberta (Search RAG) ou Domínio de Corpus Próprio (Grounded Workspace)."
      },
      mecanica: "3 cards de síntese em formato de pergunta direta e ação correspondente em cada uma das ferramentas exploradas.",
      armadilhaComum: "Tentar memorizar nomes técnicos de modelos e versões em vez de memorizar a finalidade prática de cada plataforma.",
      oQueFalar: "Gravem este slide no celular ou na memória. Quando sentarem no computador para trabalhar: vou criar do zero? ChatGPT. Vou pesquisar dados reais na web? Perplexity. Vou estudar um PDF meu? NotebookLM.",
      faqAlunos: [
        {
          pergunta: "Posso manter as três abas abertas no navegador durante o trabalho?",
          resposta: "Com certeza! É exatamente assim que os profissionais mais produtivos trabalham hoje: combinando as três ferramentas em um fluxo integrado."
        }
      ]
    }
  },
  {
    numero: 17,
    id: 17,
    bloco: 4,
    tipo: "fechamento",
    categoria: "Fechamento & Referências Bibliográficas",
    titulo: "Fechamento do Encontro 5 & Referências Oficiais",
    subtitulo: "Consolidação dos aprendizados do dia e fundamentação técnica oficial",
    badge: "MÓDULO 5 CONCLUÍDO COM SUCESSO!",
    conclusao: "Use o Perplexity para encontrar e checar, o NotebookLM para estudar o que você escolheu e o ChatGPT para conversar, criar e reformular — sempre conferindo as fontes antes de decidir.",
    proximoEncontro: "Encontro 6 (04/12): Refinamento Contínuo e Uso Responsável (Comparação entre Modelos, LGPD e Vieses)",
    lembretesFinais: [
      "Testei a mesma pergunta no ChatGPT e no Perplexity para ver a diferença das fontes?",
      "Abri ao menos um link de citação para auditar se o dado procedia?",
      "Criei meu primeiro caderno no NotebookLM e explorei o destaque de citação no PDF?",
      "Gerei um resumo em áudio ou guia de estudo no painel Studio?",
      "Lembrei da regra da UNESCO: a IA organiza o caminho, mas a responsabilidade pela leitura é minha?"
    ],
    referencias: [
      "Perplexity AI Help Center: How Perplexity Works & Source Labels (https://www.perplexity.ai/help-center)",
      "Google Support: Google NotebookLM Sources, Studio & Audio Overviews (https://support.google.com/notebooklm)",
      "UNESCO (2023–2024): Guidance for Generative AI in Education and Research (https://unesdoc.unesco.org/ark:/48223/pf0000386693)",
      "ANPD: Guia Orientativo para Tratamento de Dados Pessoais e Inteligência Artificial (https://www.gov.br/anpd)"
    ],
    conducao: "Co-docência (Laura & Maria)",
    notasProfessora: {
      tempoSugerido: "10 min (02:50 - 03:00)",
      objetivoSlide: "Encerrar o encontro celebrando o domínio prático do ecossistema de ferramentas e fazer a ponte para o Módulo 6.",
      conceito: {
        titulo: "Consolidação Curricular e Fundamentação Documental",
        definicao: "Fechamento formativo que valida as competências adquiridas nas oficinas de bancada, ancora o aprendizado em literatura técnica oficial (Google, Perplexity, UNESCO e ANPD) e prepara o terreno para os debates de privacidade, governança e LGPD do próximo encontro."
      },
      mecanica: "Slide de encerramento com badge comemorativa, frase-síntese de impacto, 5 perguntas de autoavaliação e links das referências oficiais.",
      armadilhaComum: "Achar que o curso terminou aqui. O Encontro 6 amarrará como proteger seus dados pessoais na LGPD e comparar modelos avançados.",
      oQueFalar: "Parabéns a todos! Hoje quebramos a barreira de usar apenas o ChatGPT. Vocês agora dominam o Perplexity para buscar evidências reais e o NotebookLM para estudar qualquer documento com tranquilidade. Na próxima aula, vamos falar de privacidade, LGPD e comparar grandes modelos!",
      faqAlunos: [
        {
          pergunta: "Os cadernos que criamos no NotebookLM continuam salvos para a próxima aula?",
          resposta: "Sim! Tudo o que vocês criaram fica salvo na nuvem da sua conta Google para consultar quando quiserem."
        }
      ]
    }
  }
];
