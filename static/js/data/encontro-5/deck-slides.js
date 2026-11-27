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
  // BLOCO 1: AS FERRAMENTAS – OS 3 ESPECIALISTAS (Slides 1 a 6)
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
      { tipo: "real", texto: "💬 ChatGPT: Elaborar, Estruturar & Raciocinar" },
      { tipo: "real", texto: "🔍 Perplexity: Investigar na Web com Fontes" },
      { tipo: "real", texto: "📓 NotebookLM: Dominar Corpus Próprio Rastreável" }
    ],
    conducao: "Condução: Laura",
    notasProfessora: {
      tempoSugerido: "5 min (00:05 - 00:10)",
      objetivoSlide: "Provocar a turma a superar a visão de 'IA = ChatGPT' e apresentar o ecossistema a partir da adequação à tarefa e tipo de evidência necessária.",
      conceito: {
        titulo: "Adequação à Tarefa e Tipo de Evidência (Não Especialização Absoluta)",
        definicao: "Embora a metáfora dos '3 especialistas' seja didática, cada ferramenta não possui uma divisão rígida absoluta: o ChatGPT também pode pesquisar com navegação, o Perplexity ajuda a estruturar ideias e o NotebookLM gera textos. O critério determinante é a origem da evidência e a adequação à tarefa pretendida."
      },
      mecanica: "Slide de transição de etapa com metáfora visual da caixa de ferramentas e 3 pílulas sintetizando os papéis centrais de elaboração (ChatGPT), investigação na web (Perplexity) e domínio de corpus próprio (NotebookLM).",
      armadilhaComum: "Usar o ChatGPT como substituto direto do Google para dados factuais recentes e depois se frustrar com links quebrados ou dados inventados.",
      faqAlunos: [
        {
          pergunta: "Se o ChatGPT já tem botão de busca na internet hoje, por que ainda precisamos do Perplexity e do NotebookLM?",
          resposta: "Porque o Perplexity foi arquitetado como motor de investigação com citações verificáveis frase a frase, e o NotebookLM restringe a IA aos seus documentos, impedindo mistura com a internet aberta."
        }
      ]
    }
  },
  {
    numero: 3,
    id: 3,
    bloco: 1,
    tipo: "apresentacao",
    categoria: "Etapa 1 • Preparando a Bancada",
    titulo: "Antes de Tudo: Preparando Nossa Bancada",
    subtitulo: "Abra estas três abas essenciais no seu navegador para acompanhar a aula prática de hoje",
    conducao: "Co-docência (Laura & Maria)",
    itensDestaque: [
      {
        icone: "📋",
        titulo: "1. Dontpad da Turma",
        desc: "Acesse <strong>dontpad.com/CURSO-IA-2026-IFSPCAT</strong> para copiar links, textos de exemplo, prompts e materiais de apoio compartilhados em tempo real."
      },
      {
        icone: "📓",
        titulo: "2. Google NotebookLM",
        desc: "Acesse <strong>notebooklm.google.com</strong> e faça login com sua conta Google para criar cadernos de estudo e carregar documentos."
      },
      {
        icone: "🔍",
        titulo: "3. Perplexity AI",
        desc: "Acesse <strong>perplexity.ai</strong> no navegador (gratuito) para realizar investigações na web com fontes e citações verificáveis."
      }
    ],
    notasProfessora: {
      tempoSugerido: "5 min (00:10 - 00:15)",
      objetivoSlide: "Garantir que todos os alunos estejam com o Dontpad, o NotebookLM e o Perplexity abertos em abas do navegador antes de aprofundar os conceitos teóricos.",
      conceito: {
        titulo: "Setup Operacional e Redução do Atrito de Laboratório",
        definicao: "A preparação antecipada do ambiente de trabalho garante fluidez pedagógica: o Dontpad serve como área de transferência coletiva de links e roteiros, enquanto NotebookLM e Perplexity permanecem autenticados e prontos para alternância imediata durante a aula."
      },
      mecanica: "Slide com 3 cards limpos no padrão Clean Light destacando as URLs exatas para digitação direta pelos alunos.",
      armadilhaComum: "Alunos deixarem para abrir as ferramentas ou fazer login apenas na hora das missões práticas, gerando filas de dúvidas técnicas pontuais.",
      faqAlunos: [
        {
          pergunta: "Preciso pagar ou cadastrar cartão para abrir o NotebookLM ou o Perplexity?",
          resposta: "Não! Ambas as ferramentas funcionam com acesso gratuito. No NotebookLM basta usar sua conta Google comum; no Perplexity você pode usar sem conta ou entrar com a conta Google."
        },
        {
          pergunta: "Para que serve o Dontpad?",
          resposta: "O Dontpad é um bloco de notas online coletivo: tudo o que as professoras colarem no link CURSO-IA-2026-IFSPCAT fica visível na hora para você copiar, sem precisar digitar URLs longas."
        }
      ]
    }
  },
  {
    numero: 4,
    id: 4,
    bloco: 1,
    tipo: "secao",
    categoria: "Etapa 1 • Introdução aos Especialistas",
    badge: "ETAPA 1 • VAMOS COMEÇAR!",
    titulo: "Vamos Começar!",
    subtitulo: "Do modelo único para o ecossistema: quem são e o que fazem os 3 especialistas?",
    pills: [
      { tipo: "real", texto: "💬 ChatGPT" },
      { tipo: "real", texto: "🔍 Perplexity" },
      { tipo: "real", texto: "📓 NotebookLM" }
    ],
    conducao: "Co-docência (Laura & Maria)",
    notasProfessora: {
      tempoSugerido: "2 min (00:15 - 00:17)",
      objetivoSlide: "Slide-título de transição de impacto para abrir a apresentação dos 3 especialistas, alinhando a turma após o setup da bancada.",
      conceito: {
        titulo: "Transição e Foco de Palco",
        definicao: "Momento de ancoragem de atenção que encerra o setup de abas no navegador e direciona os olhares para a tela grande, introduzindo a lógica de adequação à tarefa."
      },
      mecanica: "Slide-título minimalista de transição no padrão Clean Light.",
      armadilhaComum: "Avançar direto para a comparação sem criar a expectativa e o enquadramento mental sobre quem são os 3 especialistas.",
      faqAlunos: [
        {
          pergunta: "Por que não usamos apenas o ChatGPT que já conhecemos?",
          resposta: "Porque hoje você vai descobrir que combinar as ferramentas certas economiza tempo e evita erros que o ChatGPT sozinho cometeria."
        }
      ]
    }
  },
  {
    numero: 5,
    id: 5,
    bloco: 1,
    tipo: "comparativo",
    categoria: "Etapa 1 • As Ferramentas",
    titulo: "Os 3 Especialistas: Adequação à Tarefa e Tipo de Evidência",
    subtitulo: "A escolha depende da tarefa e da evidência necessária, não de uma especialização rígida absoluta",
    conducao: "Condução: Maria",
    colunas: [
      {
        tag: "💬 ChatGPT: Raciocínio & Estruturação",
        icone: "✍️",
        tipo: "marrom",
        bullet: "•",
        itens: [
          "Como trabalha: Responde a partir dos pesos pré-treinados do modelo e do diálogo iterativo com o usuário.",
          "Ponto forte: Elaborar, reformular, estruturar, brainstormar, revisar e raciocinar passo a passo.",
          "Atenção: Adequado para pensar junto e criar; alucina com facilidade se usado como fonte factual sem checagem."
        ]
      },
      {
        tag: "🔍 Perplexity: Investigação na Web Aberta",
        icone: "🌐",
        tipo: "azul",
        bullet: "➔",
        itens: [
          "Como trabalha: Vasculha ativamente a internet em tempo real e recupera páginas indexadas para compor a resposta.",
          "Ponto forte: Investigar na web, encontrar fontes atuais e obter respostas acompanhadas de citações verificáveis.",
          "Atenção: Depende da qualidade dos sites encontrados; exige auditar se o link sustenta a frase específica."
        ]
      },
      {
        tag: "📓 NotebookLM: Estudo e Síntese em Documentos Próprios",
        icone: "📚",
        tipo: "positivo",
        bullet: "✓",
        itens: [
          "Como trabalha: Gera respostas fundamentadas prioritariamente nas fontes que você selecionou para o caderno.",
          "Ponto forte: Interrogar, comparar e organizar materiais de estudo (PDFs, anotações, slides), com citações aos trechos originais.",
          "Atenção: Reduz o risco de dados inventados de fora, mas não elimina erros de interpretação ou síntese; não substitui a leitura."
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "8 min (00:17 - 00:25)",
      objetivoSlide: "Apresentar os 3 especialistas enfatizando a adequação à tarefa e à fonte de evidência, evitando criar uma falsa dicotomia rígida entre eles.",
      conceito: {
        titulo: "Adequação à Tarefa e Epistemologia da Evidência",
        definicao: "A metáfora dos especialistas organiza o pensamento do aluno iniciante, mas deve ser matizada: o ChatGPT também auxilia na pesquisa com browsing ativado, o Perplexity organiza raciocínios e o NotebookLM redige resumos. A diferença fundamental reside no tipo de evidência requerida: geração paramétrica, recuperação na web viva ou ancoragem em corpus documental próprio."
      },
      mecanica: "Layout comparativo em 3 colunas coloridas por identidade funcional: Âmbar (ChatGPT / elaboração e raciocínio), Azul Real (Perplexity / investigação na web) e Esmeralda (NotebookLM / corpus próprio rastreável).",
      armadilhaComum: "Achar que as ferramentas são 'gavetas fechadas' que não podem dialogar, ou esperar que o NotebookLM invente dados externos que não constam dos PDFs carregados.",
      faqAlunos: [
        {
          pergunta: "Se eu subir um arquivo errado no NotebookLM, ele percebe ou usa o dado errado?",
          resposta: "Ele confia 100% nas fontes que você subiu. Ele evita inventar coisas de fora, mas a qualidade da resposta depende diretamente da qualidade dos documentos que você entregou a ele."
        }
      ]
    }
  },
  {
    numero: 6,
    id: 6,
    bloco: 1,
    tipo: "quadro-comparativo",
    estiloColunas: "ferramentas",
    iconesColunas: ["💬", "🔍", "📓"],
    categoria: "Etapa 1 • Síntese Comparativa",
    titulo: "Tabela Comparativa: ChatGPT vs. Perplexity vs. NotebookLM",
    subtitulo: "Critérios essenciais de evidência, atualização, risco e privacidade lado a lado",
    colunasTabela: [
      "Critério de Escolha",
      "ChatGPT",
      "Perplexity",
      "NotebookLM"
    ],
    linhasTabela: [
      {
        criterio: "Fonte primária",
        vago: "Pesos do modelo de treino (+ busca secundária)",
        falsoBom: "Páginas e índices da web aberta em tempo real",
        estruturado: "Fontes e documentos selecionados pelo usuário para o caderno"
      },
      {
        criterio: "Atualização",
        vago: "Pode ser defasada (limite do corte de treino)",
        falsoBom: "Ao vivo (depende do índice e fontes recuperadas)",
        estruturado: "Depende do material enviado (verifique a versão do documento)"
      },
      {
        criterio: "Verificabilidade",
        vago: "Geralmente opaca (citações raras ou ausentes)",
        falsoBom: "Citações e links externos ([1], [2]) para a web",
        estruturado: "Citações que remetem aos trechos originais no caderno"
      },
      {
        criterio: "Risco principal",
        vago: "Alucinação factual e generalização plausível",
        falsoBom: "Seleção ou interpretação falha de fontes da web",
        estruturado: "Erro de leitura/síntese ou baixa qualidade das fontes enviadas"
      },
      {
        criterio: "Privacidade",
        vago: "Prompts podem alimentar treino (salvo opt-out)",
        falsoBom: "Consultas trafegam na web; política da conta",
        estruturado: "Base para o caderno; Google diz não treinar (Workspace tem salvaguardas)"
      },
      {
        criterio: "Melhor para...",
        vago: "Elaborar, reformular, estruturar e raciocinar",
        falsoBom: "Investigar na web, encontrar fontes e checar fatos",
        estruturado: "Interrogar, comparar e revisar materiais selecionados"
      },
      {
        criterio: "Regra de bolso",
        vago: "\"Preciso criar, raciocinar ou redigir\"",
        falsoBom: "\"Preciso de fatos e fontes atuais na internet\"",
        estruturado: "\"Preciso estudar e organizar os materiais que selecionei\""
      }
    ],
    conducao: "Condução: Maria",
    notasProfessora: {
      tempoSugerido: "15 min (00:25 - 00:40)",
      objetivoSlide: "Consolidar a matriz comparativa explícita em 7 dimensões cruciais: fonte primária, atualização, verificabilidade, risco principal, privacidade, tarefas ideais e regra de bolso.",
      conceito: {
        titulo: "Matriz Multidimensional de Adequação Tecnológica",
        definicao: "Quadro de governança cognitiva que avalia cada ferramenta por critérios técnicos explícitos: proveniência da informação (paramétrica vs. web indexada vs. corpus pessoal), janela de atualização temporal, auditabilidade de citações, vetores de vulnerabilidade e conformidade com privacidade e LGPD."
      },
      mecanica: "Quadro comparativo lado a lado com 7 linhas de alta legibilidade em 16:9, utilizando código de cores por especialista (Âmbar para ChatGPT, Azul Real para Perplexity e Esmeralda para NotebookLM).",
      armadilhaComum: "Encarar as ferramentas como rivais em vez de peças complementares de um fluxo produtivo (Pesquisar no Perplexity -> Dominar no NotebookLM -> Redigir no ChatGPT).",
      faqAlunos: [
        {
          pergunta: "Eu posso combinar as três ferramentas na mesma tarefa?",
          resposta: "Sim! Esse é o fluxo mais poderoso: pesquisar fontes no Perplexity, consolidar os documentos no NotebookLM para entender tudo sem invenções e usar o ChatGPT para formatar o texto ou e-mail final."
        }
      ]
    }
  },

  // =========================================================================
  // BLOCO 2: PERPLEXITY NA PRÁTICA – O DETETIVE DA WEB (Slides 7 a 10)
  // =========================================================================
  {
    numero: 7,
    id: 7,
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
      faqAlunos: [
        {
          pergunta: "O Perplexity consegue ler páginas que exigem assinatura ou senha?",
          resposta: "Não. Ele acessa páginas públicas da web aberta. Páginas bloqueadas por paywall ou login restrito não entram na varredura."
        }
      ]
    }
  },
  {
    numero: 8,
    id: 8,
    bloco: 2,
    tipo: "apresentacao",
    categoria: "Etapa 2 • Perplexity AI",
    titulo: "A Anatomia da Resposta no Perplexity",
    subtitulo: "Painel de fontes, síntese em linguagem natural e perguntas de desdobramento",
    conducao: "Condução: Laura",
    itensDestaque: [
      {
        icone: "🌐",
        titulo: "Painel de Fontes Consultadas",
        desc: "Exibe no topo da resposta a lista dos sites e páginas que a IA leu na internet em tempo real para formular a explicação."
      },
      {
        icone: "🔗",
        titulo: "Citações em Linha Clicáveis",
        desc: "Cada afirmação traz marcadores numerados ([1], [2]) que abrem diretamente a página de origem para conferência imediata."
      },
      {
        icone: "💬",
        titulo: "Perguntas de Desdobramento",
        desc: "Ao final da resposta, a ferramenta sugere perguntas complementares para aprofundar a investigação sem recomeçar do zero."
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (00:50 - 01:00)",
      objetivoSlide: "Apresentar a interface de leitura do Perplexity, capacitando os alunos a identificar o painel de fontes, as citações em linha e a continuidade da busca.",
      conceito: {
        titulo: "Anatomia da Interface de Resposta Baseada em Evidências",
        definicao: "A interface do Perplexity é organizada para dar visibilidade imediata à procedência: o painel superior de fontes explicita quais páginas foram lidas, o corpo do texto distribui marcadores numerados e o rodapé oferece perguntas de desdobramento para manter o fluxo investigativo ativo."
      },
      mecanica: "Grid de 3 cards destacando os elementos centrais da tela de resposta: as fontes no topo, as citações numeradas no texto e as sugestões de continuidade ao final.",
      armadilhaComum: "O aluno apenas ler o texto gerado sem olhar as fontes listadas no topo ou ignorar os marcadores numerados de citação.",
      faqAlunos: [
        {
          pergunta: "A busca padrão do Perplexity é gratuita e ilimitada?",
          resposta: "Sim! A busca padrão é totalmente gratuita, ilimitada e não exige cartão de crédito nem assinatura paga."
        }
      ]
    }
  },
  {
    numero: 9,
    id: 9,
    bloco: 2,
    tipo: "comparativo",
    categoria: "Etapa 2 • Pensamento Crítico",
    titulo: "Armadilha do Detetive: Citação Não É Sinônimo de Verdade",
    subtitulo: "A citação comprova que o link existe na web, não que a afirmação é verdadeira",
    conducao: "Condução: Laura",
    colunas: [
      {
        tag: "⚠️ O Risco da Confiança Cega",
        icone: "❌",
        tipo: "alerta",
        bullet: "✕",
        itens: [
          "Ver o link [1] e aceitar a resposta sem checar: a IA pode sintetizar páginas com boatos ou erros.",
          "Assumir que qualquer site ou link citado pela IA é infalível ou livre de viés e erros.",
          "Aceitar conclusões de estudos preliminares (pré-prints) ou pesquisas antigas já refutadas."
        ]
      },
      {
        tag: "✓ Protocolo de Auditoria em 4 Passos",
        icone: "✅",
        tipo: "positivo",
        bullet: "✓",
        itens: [
          "1. Identificar a fonte: quem publicou, quando, qual a finalidade e a competência do autor.",
          "2. Conferir a afirmação: a citação no link realmente sustenta a frase específica feita pela IA?",
          "3. Avaliar o método: verificar data, amostra, se há revisão por pares e se é estudo primário ou notícia.",
          "4. Triangular: comparar a conclusão com ao menos uma fonte independente e de autoridade reconhecida."
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (01:00 - 01:10)",
      objetivoSlide: "Alertar a turma sobre a ilusão do hiperlink e operacionalizar a checagem crítica através do protocolo de auditoria em 4 passos.",
      conceito: {
        titulo: "Protocolo de Auditoria Quadripolar e Checagem da Fonte Primária",
        definicao: "A presença de um hiperlink válido comprova a indexação de uma URL na web, mas não garante solidez epistemológica. O protocolo de quatro passos (Identificar Fonte -> Conferir Afirmação -> Avaliar Método -> Triangular com Fonte Independente) transforma a leitura passiva em auditoria ativa, deixando claro que a presença de um link é um ponto de partida para a checagem humana, e não um atestado de verdade."
      },
      mecanica: "Quadro comparativo de dois lados: os 3 riscos da confiança cega em links vs. os 4 passos operacionais do protocolo de auditoria crítica.",
      armadilhaComum: "Achar que ter um link de artigo científico encerra a discussão, sem perceber que artigos antigos ou preliminares podem ter sido refutados pela comunidade.",
      faqAlunos: [
        {
          pergunta: "A Perplexity já foi pega citando links que não diziam exatamente o que ela escreveu?",
          resposta: "Sim. Como qualquer IA, ela pode sintetizar um dado fora de contexto. A própria empresa orienta em seu manual: 'Abrir a fonte original é a melhor maneira de ter certeza'."
        }
      ]
    }
  },
  {
    numero: 10,
    id: 10,
    bloco: 2,
    tipo: "missao-diagnostica",
    ocultarPresenterPill: true,
    categoria: "Prática de Bancada • Missão 1",
    titulo: "Oficina de Bancada: Missão 1 — Conheça o Perplexity",
    subtitulo: "Faça uma pergunta prática, abra uma fonte citada e descubra se a resposta é sustentada por ela",
    tempoEstimado: "15 min",
    passos: [
      "1. Escolha uma pergunta simples (2 min): Pergunta prática do cotidiano ou do curso (ex.: regras de documentos, serviços públicos, editais ou vagas). Evite polêmicas agora.",
      "2. Pergunte no Perplexity (3 min): Digite a pergunta e observe 3 elementos: a resposta em texto natural, as citações numeradas [1], [2] e os links. Não copie ainda: veja de onde veio.",
      "3. Abra 1 fonte e confira (5 min): Abra apenas uma citação e avalie: Quem publicou? Quando? A fonte realmente diz o que a IA afirmou? Ela parece adequada para o tema?",
      "4. Registre o resultado (3 min): Anote: Pergunta feita, fonte aberta, data e veredito: 'A citação sustenta a resposta? (Sim / Parcialmente / Não)' e o que você verificaria antes de usar.",
      "5. Pistas, não verdades (2 min): Dois voluntários compartilham. Lembre-se: 'O Perplexity não entrega verdade pronta: entrega pistas. Nossa tarefa é seguir as pistas e julgar a evidência'."
    ],
    destaqueDiagnostica: {
      icone: "🔍",
      titulo: "Missão 1: Da Opinião à Evidência",
      desc: "O Perplexity não entrega uma verdade pronta: entrega uma resposta com pistas. Nossa tarefa é seguir as pistas e julgar se elas sustentam a afirmação.",
      tagAviso: "Lembrete: Citação não é verdade — é convite para verificar"
    },
    conducao: "Co-docência (Laura & Maria)",
    notasProfessora: {
      tempoSugerido: "15 min (01:10 - 01:25)",
      objetivoSlide: "Conhecer a lógica do Perplexity em perguntas práticas do dia a dia: fazer pergunta em linguagem natural, ler fontes citadas e checar se a citação realmente sustenta a afirmação.",
      conceito: {
        titulo: "Investigação Prática: A Resposta como Conjunto de Pistas",
        definicao: "O Perplexity busca na web e entrega respostas conversacionais com citações e links. A missão estabelece o modelo mental central: 'O Perplexity não entrega uma verdade pronta: entrega uma resposta com pistas. Nossa tarefa é seguir as pistas e julgar se elas sustentam a afirmação.' Citação não é sinônimo de verdade — ela é um convite aberto para verificar."
      },
      mecanica: "Roteiro em 5 momentos: (1) Escolha de pergunta prática simples, sem temas polêmicos; (2) Envio da pergunta e observação dos 3 elementos; (3) Abertura de apenas 1 citação para checar autoria, data e aderência; (4) Registro simples no caderno ou formulário; (5) Compartilhamento com a turma. Em turmas com menos familiaridade digital, adote a 'Versão Ainda Mais Simples' (1 pergunta prática -> abre 1 fonte -> completa a frase 'A resposta foi confirmada/não confirmada porque...').",
      armadilhaComum: "O aluno copiar a resposta da IA imediatamente sem abrir o link citado, ou escolher temas excessivamente polêmicos/técnicos logo na primeira atividade.",
      faqAlunos: [
        {
          pergunta: "A citação com link garante que a informação foi totalmente comprovada?",
          resposta: "Não! A citação indica onde a IA encontrou o texto, mas a página de origem pode conter erros, boatos ou estar desatualizada. Por isso, abrir a fonte original continua sendo indispensável."
        },
        {
          pergunta: "E se a página que eu abrir disser algo um pouco diferente do resumo da IA?",
          resposta: "Esse é o maior aprendizado da oficina! Registre 'Parcialmente confirmada' ou 'Não' e anote a diferença. A IA resume, mas a decisão sobre o que é verdadeiro é do olhar humano."
        }
      ]
    }
  },

  // =========================================================================
  // BLOCO 3: GOOGLE NOTEBOOKLM – O BIBLIOTECÁRIO PARTICULAR (Slides 11 a 16)
  // =========================================================================
  {
    numero: 11,
    id: 11,
    bloco: 3,
    tipo: "secao",
    categoria: "Etapa 3 • Google NotebookLM",
    badge: "ETAPA 3 • GOOGLE NOTEBOOKLM",
    titulo: "Google NotebookLM",
    subtitulo: "O bibliotecário particular: respostas fundamentadas nos seus materiais e artefatos de estudo com grounding",
    pills: [
      { tipo: "real", texto: "📂 Seus Documentos" },
      { tipo: "real", texto: "🔒 Grounding nas Fontes" },
      { tipo: "real", texto: "🎙️ Painel Studio" }
    ],
    conducao: "Condução: Maria",
    notasProfessora: {
      tempoSugerido: "2 min (01:40 - 01:42)",
      objetivoSlide: "Slide-título de transição de impacto para abrir a Etapa 3 após o intervalo, direcionando a atenção para o Google NotebookLM e o conceito de corpus próprio.",
      conceito: {
        titulo: "Transição para Grounding Documental",
        definicao: "Marcação do início da terceira grande etapa do encontro, transacionando da pesquisa na web aberta com o Perplexity para o estudo ancorado nos documentos pessoais do usuário."
      },
      mecanica: "Slide-título minimalista de transição no padrão Clean Light.",
      armadilhaComum: "Achar que o NotebookLM é apenas outro buscador como o Perplexity, sem compreender a mudança de foco para o material selecionado pelo próprio usuário.",
      faqAlunos: [
        {
          pergunta: "Por que mudar de ferramenta agora se o Perplexity já busca tão bem?",
          resposta: "Porque quando você precisa estudar uma apostila, ler um edital ou preparar uma aula a partir de textos específicos, o NotebookLM garante foco estrito nos seus documentos."
        }
      ]
    }
  },
  {
    numero: 12,
    id: 12,
    bloco: 3,
    tipo: "apresentacao",
    categoria: "Etapa 3 • Google NotebookLM",
    titulo: "Como Funciona o NotebookLM: Respostas Fundamentadas nas Fontes",
    subtitulo: "Respostas geradas a partir do material que você seleciona, com citações para facilitar a conferência",
    conducao: "Condução: Maria",
    itensDestaque: [
      {
        icone: "📂",
        titulo: "1. Seu Caderno de Fontes",
        desc: "Você cria um caderno e adiciona arquivos locais ou da web (PDFs, Docs, Slides, texto ou links do YouTube, dependendo da disponibilidade de legendas)."
      },
      {
        icone: "🔒",
        titulo: "2. Respostas Fundamentadas (Grounding)",
        desc: "O modelo responde prioritariamente a partir das fontes selecionadas. Reduz o risco de dados externos inventados, mas não elimina erros de leitura ou síntese."
      },
      {
        icone: "📌",
        titulo: "3. Citação para Conferência",
        desc: "Cada afirmação traz citações que levam diretamente ao trecho original usado na fonte, facilitando a verificação humana ativa."
      }
    ],
    notasProfessora: {
      tempoSugerido: "8 min (01:42 - 01:50)",
      objetivoSlide: "Apresentar o funcionamento do NotebookLM com foco em respostas fundamentadas nas fontes selecionadas pelo usuário, desfazendo mitos de infalibilidade.",
      conceito: {
        titulo: "Respostas Fundamentadas em Fontes Selecionadas (Grounding)",
        definicao: "O NotebookLM cria respostas fundamentadas nas fontes que você selecionou para o caderno e usa citações para ajudar você a localizar e conferir os trechos originais. Importante: isso reduz o risco de respostas baseadas em informações externas, mas não elimina erros de leitura, interpretação, inferência ou síntese. Em geral, se uma informação não constar das fontes, o modelo deve indicar isso; ainda assim, teste com perguntas fora do corpus e confira as respostas."
      },
      mecanica: "Sequência visual de 3 etapas: seleção do caderno de fontes -> geração fundamentada no material -> citação que leva ao trecho original.",
      armadilhaComum: "Achar que a ferramenta elimina alucinações por completo ou que sincroniza arquivos dinamicamente. Verifique sempre se a versão no caderno corresponde à versão atual do documento; não assuma sincronização automática.",
      faqAlunos: [
        {
          pergunta: "Quantos documentos posso colocar em um caderno gratuito?",
          resposta: "No plano gratuito, até 50 fontes por caderno; cada fonte pode ter até 500.000 palavras ou até 200 MB (para arquivos enviados localmente)."
        },
        {
          pergunta: "Ele pesquisa na internet se a informação não estiver no meu PDF?",
          resposta: "O NotebookLM é projetado para trabalhar com o material que você selecionou. Ele não é um buscador geral: se uma informação não estiver nas fontes do caderno, ela não deveria ser tratada como verificada."
        }
      ]
    }
  },
  {
    numero: 13,
    id: 13,
    bloco: 3,
    tipo: "apresentacao",
    categoria: "Etapa 3 • Google NotebookLM",
    titulo: "Navegação e Rastreabilidade: Como Dominar o Caderno",
    subtitulo: "Citações diretas aos trechos originais, seleção granular de fontes e resumo automático das fontes",
    conducao: "Condução: Maria",
    itensDestaque: [
      {
        icone: "🎯",
        titulo: "Citação ao Trecho Original",
        desc: "A citação leva ao trecho original usado na resposta, facilitando a conferência e o cotejamento direto com a fonte."
      },
      {
        icone: "☑️",
        titulo: "Seleção Granular de Fontes",
        desc: "Você pode marcar ou desmarcar fontes na barra lateral para direcionar o foco da IA a arquivos específicos, modulando a atenção da IA."
      },
      {
        icone: "🗺️",
        titulo: "Resumo Automático e Tópicos-Chave",
        desc: "Ao importar um documento, a ferramenta gera um sumário executivo e tópicos centrais para orientar sua leitura inicial."
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (01:35 - 01:45)",
      objetivoSlide: "Demonstrar a usabilidade prática da interface do NotebookLM (citações clicáveis, checkboxes de fontes e resumo inicial).",
      conceito: {
        titulo: "Rastreabilidade Documental e Escopo Modular de Atenção",
        definicao: "A interface do NotebookLM implementa um link direto entre a resposta sintetizada e o trecho de origem no documento. A seleção manual de fontes modula a atenção do modelo. Porém, citação interna não valida a qualidade da fonte: um PDF ruim ou enviesado continuará ruim — apenas mais fácil de interrogar."
      },
      mecanica: "3 cards práticos explicando a navegação da tela: citação com atalho ao trecho, filtro por checkboxes e sumário executivo gerado na importação.",
      armadilhaComum: "Achar que mais fontes significam um caderno melhor. Mais fontes não significam melhor resultado: selecione materiais relevantes, confiáveis, atuais e complementares.",
      faqAlunos: [
        {
          pergunta: "Por que às vezes subo um PDF e ele não consegue ler ou destacar citações?",
          resposta: "Antes de culpar a IA, verifique se o PDF permite seleção de texto e se o OCR reconheceu corretamente o conteúdo. PDFs escaneados como imagem podem gerar extração incompleta ou erros de leitura."
        },
        {
          pergunta: "Posso colocar links de vídeos do YouTube como fonte?",
          resposta: "Sim, dependendo do vídeo e da disponibilidade de transcrição ou legendas na plataforma."
        }
      ]
    }
  },
  {
    numero: 14,
    id: 14,
    bloco: 3,
    tipo: "apresentacao",
    layout: "grid-4cards",
    categoria: "Etapa 3 • Google NotebookLM",
    titulo: "O Painel Studio: Artefatos de Estudo e Revisão",
    subtitulo: "Recursos sintéticos para revisão e engajamento — andaimes temporários que não substituem o material-fonte",
    conducao: "Condução: Maria",
    itensDestaque: [
      {
        icone: "🎙️",
        titulo: "Audio Overview (Áudio)",
        desc: "Resumo em áudio conduzido por apresentadores de IA (quando disponível no idioma selecionado), útil para introdução ou revisão auditiva."
      },
      {
        icone: "📋",
        titulo: "Guia de Estudo & FAQ",
        desc: "Gera questionários de revisão, glossários e perguntas frequentes ancoradas nos arquivos para autoavaliação formativa."
      },
      {
        icone: "🧠",
        titulo: "Mapas Mentais & Linha do Tempo",
        desc: "Visualização esquemática das conexões conceituais do documento e ordem cronológica para suporte visual e síntese prévia."
      },
      {
        icone: "🎬",
        titulo: "Video Overview (Vídeo)",
        desc: "Transforma as fontes em visualizações ou sínteses em vídeo para introdução temática (formato e disponibilidade podem variar)."
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (01:45 - 01:55)",
      objetivoSlide: "Apresentar a suíte Studio do NotebookLM destacando que seus outputs multimídia são andaimes temporários de estudo, e não conhecimento pronto.",
      conceito: {
        titulo: "Andaimes de Aprendizagem (Scaffolding) vs. Compreensão Ativa",
        definicao: "Os recursos do painel Studio (Audio Overview, Video Overview, mapas conceituais, guias e briefings) constituem andaimes de aprendizagem (Scaffolding). São valiosos para mobilização prévia, acessibilidade e revisão, mas representam compressões sintéticas que podem simplificar ou distorcer nuances dos textos originais. Jamais substituem a construção de compreensão autônoma pelo estudante."
      },
      mecanica: "Grid de 4 cards ilustrando os 4 grandes artefatos do painel Studio. Destaque para o valor pedagógico de apoio e a advertência contra a ilusão de 'conhecimento pronto'.",
      armadilhaComum: "Achar que ouvir o áudio elimina a necessidade de ler as páginas do material fornecido pelas professoras.",
      faqAlunos: [
        {
          pergunta: "O áudio funciona em qualquer idioma e conta?",
          resposta: "A disponibilidade de idiomas e recursos de geração de áudio depende da sua conta e das configurações de idioma do Google; em geral o suporte ao português tem se expandido, mas sempre teste no seu ambiente."
        }
      ]
    }
  },
  {
    numero: 15,
    id: 15,
    bloco: 3,
    tipo: "comparativo",
    categoria: "Etapa 3 • Pensamento Crítico",
    titulo: "Armadilha do Bibliotecário: O Que o NotebookLM NÃO Faz",
    subtitulo: "“O NotebookLM é excelente para interrogar e organizar o seu material; ele não é um substituto da leitura, nem uma fonte autônoma de verdade.”",
    conducao: "Condução: Maria",
    colunas: [
      {
        tag: "⚠️ Riscos Críticos & Ilusões Comuns",
        icone: "❌",
        tipo: "alerta",
        bullet: "✕",
        itens: [
          "Achar que citação interna é atestado de verdade: um PDF ruim ou desatualizado continuará sendo ruim — apenas mais fácil de interrogar.",
          "Enviar dados pessoais ou sensíveis de terceiros (prontuários, dados de pesquisa identificáveis, atas com CPFs, gravações) sem base legal, autorização e orientação institucional.",
          "Tratar o NotebookLM como buscador geral ou assumir que arquivos desatualizados se corrigem sozinhos sem conferência da versão."
        ]
      },
      {
        tag: "✓ Boas Práticas & Uso Responsável",
        icone: "✅",
        tipo: "positivo",
        bullet: "✓",
        itens: [
          "Conferir a citação no trecho original: rastrear o trecho não garante que a interpretação da IA esteja 100% correta.",
          "Regra prática da LGPD: se o documento não fosse seguro para envio público ou institucional, não envie à IA; aplique anonimização.",
          "Verificar a versão do documento e a qualidade do OCR antes de concluir que a ferramenta 'não encontrou' uma informação."
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (01:55 - 02:05)",
      objetivoSlide: "Fixar a regra de ouro do NotebookLM e aprofundar os cuidados de LGPD relativos a dados pessoais de terceiros, bases legais e direitos autorais.",
      conceito: {
        titulo: "Governança de Dados, Base Legal e Limites da Ancoragem",
        definicao: "Regra norteadora: 'O NotebookLM é excelente para interrogar e organizar o seu material; ele não é um substituto da leitura, nem uma fonte autônoma de verdade.' Em governança e LGPD, o consentimento é apenas uma das bases legais; para dados sensíveis (saúde, biometria, dados de menores) os cuidados são ainda mais rigorosos. Citação interna não valida a qualidade da fonte: 'lixo entra, lixo sai'. A ferramenta potencializa o material que recebe."
      },
      mecanica: "Quadro comparativo de dois lados: os 3 riscos críticos (qualidade das fontes e LGPD de terceiros) vs. as 3 boas práticas fundamentadas de uso ético e seguro.",
      armadilhaComum: "Achar que a política de privacidade da plataforma autoriza subir qualquer documento de terceiros sem base legal e orientação institucional prévia.",
      faqAlunos: [
        {
          pergunta: "A Google usa os arquivos que eu subo no NotebookLM para treinar a inteligência artificial?",
          resposta: "A Google informa que uploads, perguntas e respostas são usados para construir a base do caderno e não são usados para treinar seus modelos fundamentais, salvo quando o usuário opta por enviar feedback. Em contas Google Workspace for Education, há proteções contratuais adicionais. Porém, as regras dependem do tipo de conta e da política da sua instituição."
        }
      ]
    }
  },

  {
    numero: 16,
    id: 16,
    bloco: 3,
    tipo: "somente-imagem",
    categoria: "Etapa 3 • Google NotebookLM",
    titulo: "Interface Real do NotebookLM: O Projeto Tila na Prática",
    subtitulo: "Visualização empírica das 3 zonas de trabalho: fontes selecionadas, guia/chat fundamentado e painel Estúdio",
    imagem: "/static/img/notebooklm_interface_tila.jpg",
    conducao: "Condução: Maria",
    notasProfessora: {
      tempoSugerido: "8 min (02:05 - 02:13)",
      objetivoSlide: "Apresentar a interface real do Google NotebookLM aos alunos utilizando o projeto Tila (saúde digital), demonstrando visualmente onde ficam as fontes, o chat e o Estúdio.",
      conceito: {
        titulo: "Topologia Visual do NotebookLM: As 3 Zonas Operacionais",
        definicao: "O NotebookLM organiza o fluxo de trabalho do pesquisador em três colunas simultâneas: 1. Curadoria de Fontes (alimentação e filtros via checkboxes); 2. Diálogo & Raciocínio Grounded (o modelo consulta as fontes ativas para responder); 3. Estúdio de Síntese Multimodal (conversão do conhecimento em áudio, vídeo, mapas, relatórios e quizzes didáticos)."
      },
      mecanica: "Projetar a interface em tela inteira sem ruído visual para que a turma leia com nitidez cada detalhe: apontar à esquerda as 4 fontes com checkboxes; no centro o resumo do projeto Tila com 3 perguntas sugeridas e a barra de chat; à direita o Estúdio com os botões de ferramentas e os artefatos já gerados.",
      armadilhaComum: "O aluno achar que o Estúdio substitui o estudo aprofundado dos textos ou esquecer de conferir se as checkboxes corretas estão ativadas antes de fazer uma pergunta no chat.",
      faqAlunos: [
        {
          pergunta: "Posso desmarcar fontes para perguntar sobre um documento específico?",
          resposta: "Sim! Ao desmarcar checkboxes na coluna esquerda, o NotebookLM foca o raciocínio apenas nos arquivos selecionados, permitindo testes isolados de conteúdo."
        },
        {
          pergunta: "Por que os arquivos gerados no Estúdio têm ícones diferentes?",
          resposta: "Cada formato de artefato tem um ícone próprio: o microfone/ondas sonoras para Áudio, a câmera para Vídeo, o diagrama para Mapa Mental e a prancheta para Relatórios."
        }
      ]
    }
  },

  // =========================================================================
  // BLOCO 4: ARMADILHAS, ÉTICA UNESCO & FECHAMENTO (Slides 17 a 21)
  // =========================================================================
  {
    numero: 17,
    id: 17,
    bloco: 4,
    tipo: "quadro-comparativo",
    estiloColunas: "armadilhas",
    iconesColunas: ["⚠️", "🧠", "💡"],
    categoria: "Etapa 4 • Armadilhas & Pensamento Crítico",
    titulo: "Quadro de Armadilhas: 6 Erros Típicos de Iniciantes",
    subtitulo: "Armadilhas frequentes observadas na prática com o ecossistema e as posturas corretivas recomendadas",
    colunasTabela: [
      "Armadilha Típica",
      "O Que o Usuário Faz",
      "Por Que Dá Errado",
      "Como Corrigir"
    ],
    linhasTabela: [
      {
        criterio: "1. Perplexity como Chatbot Criativo",
        vago: "Pede criação livre ou texto sem fontes",
        falsoBom: "Estranha respostas curtas fatiadas por links",
        estruturado: "Use Perplexity para investigar fatos e ChatGPT para rascunhar"
      },
      {
        criterio: "2. NotebookLM como Buscador Geral",
        vago: "Pergunta sobre fatos externos ou espera busca viva na web",
        falsoBom: "A ferramenta trabalha com o material selecionado, não como buscador",
        estruturado: "Use Perplexity para investigar a web e NotebookLM para seus documentos"
      },
      {
        criterio: "3. Confundir Citação com Verificação",
        vago: "Vê o número [1] e aceita sem conferir",
        falsoBom: "O link pode ser defasado, preliminar ou distorcido",
        estruturado: "Aplique o protocolo de 4 passos: fonte, afirmação, método e triangulação"
      },
      {
        criterio: "4. Aceitar a Primeira Resposta",
        vago: "Adota o primeiro texto gerado sem checagem",
        falsoBom: "A primeira fonte pode ser incompleta ou enviesada",
        estruturado: "Compare múltiplos links, alterne termos e cruze visões"
      },
      {
        criterio: "5. Enviar Dados sem Base Legal ou Autorização",
        vago: "Sobe prontuários, atas com CPFs ou dados identificáveis",
        falsoBom: "Viola a LGPD e expõe dados pessoais/sensíveis na nuvem",
        estruturado: "Verifique base legal e orientação institucional; aplique anonimização"
      },
      {
        criterio: "6. Terceirizar a Aprendizagem",
        vago: "Delega a autoria e a decisão crítica para a IA",
        falsoBom: "Atrofia o raciocínio e anula a responsabilidade ética",
        estruturado: "Trate a IA como andaime cognitivo; a decisão é intransferível"
      }
    ],
    conducao: "Co-docência (Laura & Maria)",
    notasProfessora: {
      tempoSugerido: "15 min (02:20 - 02:35)",
      objetivoSlide: "Sistematizar os 6 erros típicos observados na prática com o ecossistema de ferramentas e fixar posturas corretivas operacionais.",
      conceito: {
        titulo: "Armadilhas Frequentes Observadas na Prática e Alinhamento Operacional",
        definicao: "Mapeamento dos 6 desvios operacionais mais recorrentes no uso prático de IA: transferência inadequada de papéis (Perplexity como chatbot criativo ou NotebookLM como buscador geral), falácias de autoridade (confundir link com verificação e aceitar a primeira resposta sem checar datas), violação de privacidade (envio de dados sensíveis de terceiros sem autorização) e terceirização indevida da autoria ou da aprendizagem."
      },
      mecanica: "Tabela comparativa de 4 colunas analisando 6 armadilhas típicas lado a lado (Ação do usuário -> Por que dá errado -> Como corrigir).",
      armadilhaComum: "Achar que basta aprender a ferramenta uma vez para não cometer mais esses erros. Essas armadilhas decorrem da pressa do dia a dia.",
      faqAlunos: [
        {
          pergunta: "Qual dessas 6 armadilhas é a mais perigosa na prática?",
          resposta: "A número 5 (subir dados pessoais de terceiros sem autorização) por graves riscos jurídicos e éticos, e a número 3 (achar que link [1] é verdade inquestionável) por riscos conceituais e profissionais."
        }
      ]
    }
  },
  {
    numero: 18,
    id: 18,
    bloco: 4,
    tipo: "secao",
    categoria: "Etapa 4 • Governança & Ética UNESCO",
    badge: "DIRETRIZES DA UNESCO • ABORDAGEM CENTRADA NO SER HUMANO",
    titulo: "A IA Não Substitui a Leitura: Ela Organiza o Caminho Até Ela",
    citacao: "A inteligência artificial generativa na educação e na pesquisa exige uma abordagem centrada no ser humano: protegendo a agência humana, a inclusão, a equidade, a diversidade linguística e cultural e a validação ética e pedagógica.",
    autor: "UNESCO (2023–2024)",
    autorDesc: "Guidance for Generative AI in Education and Research",
    subtitulo: "A IA pode organizar o caminho para a leitura, mas não pode assumir a responsabilidade pela compreensão, pela validação das fontes ou pela autoria.",
    pills: [
      { tipo: "real", texto: "🧭 Abordagem Centrada no Humano" },
      { tipo: "real", texto: "🛡️ Proteção da Agência Humana" },
      { tipo: "real", texto: "🌐 Inclusão & Diversidade Cultural" },
      { tipo: "real", texto: "⚖️ Validação Ética & Pedagógica" }
    ],
    conducao: "Condução: Laura",
    notasProfessora: {
      tempoSugerido: "10 min (02:35 - 02:45)",
      objetivoSlide: "Fundamentar a postura ética do curso nas diretrizes internacionais da UNESCO para uso de IA generativa na educação e pesquisa.",
      conceito: {
        titulo: "Abordagem Centrada no Ser Humano e Diretrizes da UNESCO",
        definicao: "Conforme preconizado pela UNESCO (2023), o uso de IAGen deve obedecer a cinco pilares: (1) abordagem centrada no ser humano, (2) proteção intransferível da agência humana e da autonomia pedagógica, (3) garantia de inclusão e equidade, (4) respeito à diversidade linguística e cultural, e (5) validação ética e pedagógica prévia antes de qualquer adoção curricular."
      },
      mecanica: "Slide solene de transição conceitual destacando a citação oficial da UNESCO e as 4 pílulas com os pilares normativos de governança.",
      armadilhaComum: "Achar que ter ferramentas eficientes significa ler menos. O objetivo da IA é nos poupar do trabalho mecânico de busca para sobrar mais tempo para a reflexão profunda.",
      faqAlunos: [
        {
          pergunta: "O que a UNESCO recomenda sobre o uso de IA por alunos em sala de aula?",
          resposta: "A UNESCO recomenda que as ferramentas sejam usadas para estimular o questionamento crítico, a inclusão e o debate, e jamais para terceirizar a reflexão ou entregar trabalhos sem compreensão do conteúdo."
        }
      ]
    }
  },
  {
    numero: 19,
    id: 19,
    bloco: 4,
    tipo: "apresentacao",
    categoria: "Etapa 4 • Síntese Prática",
    titulo: "Checklist de Bolso: Qual Ferramenta Abrir?",
    subtitulo: "Três perguntas simples para escolher o especialista certo antes de iniciar qualquer tarefa",
    conducao: "Condução: Maria",
    itensDestaque: [
      {
        icone: "💬",
        titulo: "1. Preciso ESCREVER, CRIAR ou ESTRUTURAR?",
        desc: "Abra o ChatGPT (ou Claude). Use a estrutura C-T-F-R para redigir e-mails, criar roteiros, fazer brainstorming criativo e pedir auto-entrevista."
      },
      {
        icone: "🔍",
        titulo: "2. Preciso PESQUISAR, CHECAR ou COMPARAR NA WEB?",
        desc: "Abra o Perplexity. Faça sua pergunta em linguagem natural e audite as citações [1], [2] para checar fatos e notícias com fontes abertas."
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
      faqAlunos: [
        {
          pergunta: "Posso manter as três abas abertas no navegador durante o trabalho?",
          resposta: "Com certeza! É exatamente assim que os profissionais mais produtivos trabalham hoje: combinando as três ferramentas em um fluxo integrado."
        }
      ]
    }
  },
  {
    numero: 20,
    id: 20,
    bloco: 4,
    tipo: "fechamento",
    categoria: "Fechamento & Consolidação",
    titulo: "Fechamento do Encontro 5: O Ecossistema na Prática",
    subtitulo: "Consolidação dos aprendizados do dia e preparação para o Encontro 6",
    badge: "MÓDULO 5 CONCLUÍDO COM SUCESSO!",
    conclusao: "Use o Perplexity para encontrar e checar, o NotebookLM para estudar o que você escolheu e o ChatGPT para conversar, criar e reformular — sempre conferindo as fontes antes de decidir.",
    proximoEncontro: "Encontro 6 (04/12): Refinamento Contínuo e Uso Responsável (Comparação entre Modelos, LGPD e Vieses)",
    lembretesFinais: [
      "Testei a mesma pergunta no ChatGPT e no Perplexity para contrastar raciocínio e fontes?",
      "Apliquei os 4 passos do protocolo para auditar se o link [1] realmente sustentava a frase?",
      "Criei meu primeiro caderno no NotebookLM e explorei o destaque de citação no PDF?",
      "Usei os recursos do Studio como andaimes de estudo, lembrando que não substituem o texto original?",
      "Lembrei das regras da UNESCO e da LGPD: abordagem centrada no ser humano e proteção de dados de terceiros?"
    ],
    conducao: "Co-docência (Laura & Maria)",
    notasProfessora: {
      tempoSugerido: "5 min (02:50 - 02:55)",
      objetivoSlide: "Encerrar o encontro celebrando o domínio prático do ecossistema de ferramentas, consolidar autoavaliação e fazer a ponte para o Módulo 6.",
      conceito: {
        titulo: "Consolidação Curricular e Autoavaliação Formativa",
        definicao: "Fechamento formativo que valida as competências adquiridas nas oficinas de bancada, estimula a metacognição através de um checklist reflexivo e prepara o terreno para os debates de privacidade, governança e LGPD do próximo encontro."
      },
      mecanica: "Slide solene de encerramento com badge comemorativa, frase-síntese de impacto, card do próximo encontro e 5 perguntas de autoavaliação formativa.",
      armadilhaComum: "Achar que o curso terminou aqui. O Encontro 6 amarrará como proteger seus dados pessoais na LGPD e comparar modelos avançados.",
      faqAlunos: [
        {
          pergunta: "Os cadernos que criamos no NotebookLM continuam salvos para a próxima aula?",
          resposta: "Sim! Tudo o que vocês criaram fica salvo na nuvem da sua conta Google para consultar quando quiserem."
        }
      ]
    }
  },
  {
    numero: 21,
    id: 21,
    bloco: 4,
    tipo: "comparativo",
    categoria: "Referências Bibliográficas",
    titulo: "Referências Bibliográficas & Leituras Recomendadas",
    subtitulo: "Fundamentação técnica e marcos regulatórios: guias oficiais da Perplexity, Google, UNESCO e ANPD",
    conducao: "Co-docência (Laura & Maria)",
    colunas: [
      {
        tag: "🛠️ Documentações Oficiais de Ferramentas",
        icone: "📖",
        tipo: "azul",
        bullet: "•",
        itens: [
          "Perplexity AI — Help Center: How Perplexity Works, Verification & Source Labels",
          "Perplexity AI — Help Center: How Perplexity Works, Verification & Citation Architecture",
          "Google Support — Google NotebookLM Sources, Studio & Audio Overviews",
          "Google Labs — Grounded Generation, Context Pruning & Privacy Controls"
        ]
      },
      {
        tag: "🏛️ Governança, Ética & Diretrizes Oficiais",
        icone: "⚖️",
        tipo: "positivo",
        bullet: "✓",
        itens: [
          "UNESCO (2023) — Guidance for Generative AI in Education and Research (Abordagem centrada no ser humano, agência, inclusão e ética)",
          "UNESCO (2024) — AI Competency Framework for Students and Teachers",
          "ANPD (2024) — Guia Orientativo: Tratamento de Dados Pessoais e Inteligência Artificial",
          "Brasil (Lei 13.709/2018) — LGPD: Regras de Consentimento e Proteção de Dados de Terceiros"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "5 min (02:55 - 03:00)",
      objetivoSlide: "Apresentar a fundamentação acadêmica, técnica e regulatória oficial que ancora o uso responsável do ecossistema de ferramentas.",
      conceito: {
        titulo: "Fundamentação Técnica Oficial e Conformidade Regulatória",
        definicao: "Adoção rigorosa de fontes primárias de documentação dos mantenedores de tecnologia e marcos internacionais (UNESCO) e nacionais (ANPD/LGPD) para respaldar o letramento em IA em ambiente educacional público."
      },
      mecanica: "Layout comparativo de 2 colunas em Clean Light: Azul Real para manuais técnicos de ferramentas e Esmeralda para marcos éticos e regulatórios da UNESCO e ANPD.",
      armadilhaComum: "Achar que as referências são apenas teóricas; elas contêm as diretrizes exatas de como a IA deve ser implementada em sala de aula de acordo com a legislação brasileira.",
      faqAlunos: [
        {
          pergunta: "Onde posso acessar esses guias e links oficiais?",
          resposta: "Todos os links e documentos completos estão disponibilizados com acesso direto no Cockpit Docente e no Dontpad da turma."
        }
      ]
    }
  }
];
