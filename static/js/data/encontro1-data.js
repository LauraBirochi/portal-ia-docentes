/**
 * Base de Dados Unificada – Módulo do Encontro 1 (27 Slides Atualizados)
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 * 
 * ARQUITETURA MODULAR:
 * Os dados deste módulo foram decompostos em submódulos especializados em /data/encontro-1/:
 * - meta.js: Metadados curriculares e blocos temáticos
 * - narrativa.js: Fio da meada, 3 atos e glossário alinhado
 * - dossies.js: Dossiês científicos e normativos (Turing, Tesler, PBIA, PL 2338)
 * - deck-slides.js: 27 slides com notas pedagógicas da professora
 * - atividades.js: Atividade 1 no Portfólio Digital e gabaritos
 * - faq-duvidas.js: 9 perguntas dos alunos e armadilhas conceituais
 * - papeis.js: Divisão de momentos da co-docência (Laura & Maria)
 */

(function (global) {
  'use strict';

  // 1. Dossiês Científicos e Jurídicos
  const dossies = {
    turingDartmouth: {
      titulo: "Gênese Histórica e Epistemológica da Inteligência Artificial (1950–1956)",
      resumo: "Como os trabalhos seminais de Alan Turing, John McCarthy, Marvin Minsky e Claude Shannon estabeleceram as bases da computação neural e simbólica.",
      topicos: [
        {
          titulo: "1. O Artigo Seminal de Turing (1950) e o Jogo da Imitação",
          conteudo: "Em 1950, Alan M. Turing publicou na revista <em>Mind</em> o artigo <em>'Computing Machinery and Intelligence'</em>. Turing contornou a armadilha filosófica de definir 'pensamento biológico' propondo o <strong>Jogo da Imitação (The Imitation Game)</strong>, hoje conhecido como Teste de Turing: se um interrogador humano não conseguir distinguir as respostas textuais de uma máquina das de um humano, o comportamento da máquina é funcionalmente inteligente."
        },
        {
          titulo: "2. O Workshop de Dartmouth (1956) e a Criação da Disciplina",
          conteudo: "No verão de 1956, John McCarthy (Dartmouth), Marvin Minsky (Harvard), Nathaniel Rochester (IBM) e Claude Shannon (Bell Labs) submeteram a proposta da <em>'Dartmouth Summer Research Project on Artificial Intelligence'</em>. Foi nessa proposta que a expressão <strong>'Artificial Intelligence'</strong> foi cunhada formalmente com a premissa de que: <em>'cada aspecto da aprendizagem ou qualquer outro traço de inteligência pode, em princípio, ser tão precisamente descrito que uma máquina possa ser programada para simulá-lo'</em>."
        },
        {
          titulo: "3. As Três Ondas da IA: Simbólica, Conexionista e Generativa",
          conteudo: "A evolução histórica divide-se em 3 eras:<br>• <strong>1ª Onda (1956–1980): IA Simbólica / Baseada em Regras:</strong> Lógica proposicional e sistemas especialistas (*SE... ENTÃO*). Falhava pela incapacidade de lidar com incerteza.<br>• <strong>2ª Onda (1980–2010): Aprendizado Estatístico & Redes Neurais (ML):</strong> Backpropagation e algoritmos estatísticos alimentados por dados.<br>• <strong>3ª Onda (2012–Presente): Deep Learning & Transformers:</strong> Redes profundas aceleradas por GPUs (AlexNet 2012) e arquiteturas de auto-atenção (Transformer 2017) que viabilizaram os LLMs modernos."
        }
      ],
      fontesCientificas: [
        {
          autor: "Alan M. Turing (1950)",
          titulo: "Computing Machinery and Intelligence",
          publicacao: "Mind, 59(236), 433-460",
          relevancia: "Artigo fundador da filosofia da computação e do Teste de Turing.",
          link: "https://doi.org/10.1093/mind/LIX.236.433"
        },
        {
          autor: "McCarthy, Minsky, Rochester & Shannon (1955/1956)",
          titulo: "A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence",
          publicacao: "Dartmouth College Technical Report / AI Magazine",
          relevancia: "Documento histórico onde o termo 'Inteligência Artificial' foi formalmente cunhado.",
          link: "http://www-formal.stanford.edu/jmc/history/dartmouth/dartmouth.html"
        },
        {
          autor: "Russell, S. & Norvig, P. (2020)",
          titulo: "Artificial Intelligence: A Modern Approach (4th Edition)",
          publicacao: "Pearson Education",
          relevancia: "O livro-texto universitário padrão mundial de IA em Ciência da Computação.",
          link: "http://aima.cs.berkeley.edu/"
        }
      ]
    },
    teslerAiEffect: {
      titulo: "O Teorema de Larry Tesler e a Epistemologia do 'AI Effect'",
      resumo: "Como o efeito de fronteira móvel (moving baseline) na ciência da computação faz com que problemas resolvidos deixem de ser considerados inteligentes pelo público.",
      topicos: [
        {
          titulo: "1. A Formulação Original do Teorema de Tesler",
          conteudo: "Larry Tesler (pioneiro de interfaces e ex-vice-presidente da Apple) formulou o axioma citado por Douglas Hofstadter em <em>Gödel, Escher, Bach</em> (1979): <em>'AI is whatever hasn't been done yet'</em> (IA é tudo aquilo que ainda não foi feito)."
        },
        {
          titulo: "2. O Fenômeno Sociotécnico do 'Efeito IA'",
          conteudo: "Pamela McCorduck documentou em <em>Machines Who Think</em> que o sucesso da IA acarreta sua própria descaracterização: o reconhecimento óptico de caracteres (OCR), o xadrez computacional (Deep Blue 1997) e a transcrição de voz deixaram de ser vistos como 'IA' assim que se tornaram comoditizados."
        }
      ],
      fontesCientificas: [
        {
          autor: "Hofstadter, Douglas R. (1979)",
          titulo: "Gödel, Escher, Bach: An Eternal Golden Braid",
          publicacao: "Basic Books (Prêmio Pulitzer)",
          relevancia: "Registro seminal do Teorema de Larry Tesler sobre a fronteira móvel da IA.",
          link: "https://www.pulitzer.org/winners/douglas-r-hofstadter"
        },
        {
          autor: "McCorduck, Pamela (2004)",
          titulo: "Machines Who Think: A Personal Inquiry into the History and Prospects of Artificial Intelligence",
          publicacao: "A K Peters/CRC Press",
          relevancia: "Análise histórica e sociológica detalhada do Efeito IA.",
          link: "https://www.crcpress.com/Machines-Who-Think/McCorduck/p/book/9781568812113"
        }
      ]
    },
    pbiaBrasil: {
      titulo: "Dossiê Oficial: Plano Brasileiro de Inteligência Artificial (PBIA 2024–2028)",
      resumo: "Estrutura programática, investimentos de R$ 23 bilhões, infraestrutura computacional soberana e eixos estratégicos do CNDI e MCTI.",
      topicos: [
        {
          titulo: "1. O Lançamento do PBIA 'IA para o Bem de Todos' (MCTI / CNDI)",
          conteudo: "Apresentado oficialmente na 5ª Conferência Nacional de Ciência, Tecnologia e Inovação (julho de 2024), o <strong>PBIA 2024–2028</strong> prevê R$ 23,03 bilhões distribuídos em 5 eixos estruturantes: (1) Infraestrutura e Supercomputação; (2) Difusão, Formação e Capacitação; (3) Melhoria dos Serviços Públicos; (4) Inovação Empresarial; (5) Apoio ao Processo Regulatório e Governança."
        },
        {
          titulo: "2. Soberania de Dados e Expansão do Supercomputador Santos Dumont",
          conteudo: "O plano destina mais de R$ 1,8 bilhão para a aquisição de um novo supercomputador de alta performance no <strong>LNCC (Laboratório Nacional de Computação Científica)</strong> em Petrópolis-RJ, posicionando o Brasil entre os 5 maiores centros públicos de supercomputação do mundo para treinamento de LLMs soberanos em português e dados biomédicos tropicais."
        },
        {
          titulo: "3. Aplicações Prioritárias no Setor Público (Saúde, Meio Ambiente e Gestão)",
          conteudo: "Projetos de impacto imediato:<br>• <strong>Saúde Digital (SUS):</strong> Triagem inteligente de exames de imagem e otimização do complexo econômico-industrial da saúde.<br>• <strong>Transição Ecológica e Clima:</strong> Modelagem preditiva de desmatamento e queimadas no INPE/Cemaden.<br>• <strong>Educação e Inclusão:</strong> Financiamento de programas de extensão universitária e bolsas de letramento em IA para a população geral."
        }
      ],
      fontesCientificas: [
        {
          autor: "Governo Federal do Brasil / MCTI / CNDI (2024)",
          titulo: "Plano Brasileiro de Inteligência Artificial 2024-2028: IA para o Bem de Todos",
          publicacao: "Ministério da Ciência, Tecnologia e Inovação (MCTI)",
          relevancia: "Documento oficial da estratégia nacional de IA do Brasil.",
          link: "https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/noticias/2024/07/conheca-o-plano-brasileiro-de-inteligencia-artificial"
        },
        {
          autor: "Conselho Nacional de Desenvolvimento Industrial - CNDI (2024)",
          titulo: "Nova Indústria Brasil (NIB) - Missão 4: Transformação Digital da Indústria",
          publicacao: "MDIC / Governo Federal",
          relevancia: "Diretrizes industriais de digitalização e inteligência de dados.",
          link: "https://www.gov.br/mdic/pt-br/assuntos/noticias/2024/janeiro/conheca-as-metas-da-nova-industria-brasil"
        }
      ]
    },
    marcoLegal: {
      titulo: "Dossiê Jurídico: Marco Legal da IA (PL 2338/2023) e Normas Globais",
      resumo: "Análise técnica do Projeto de Lei nº 2338/2023 no Senado Federal, matriz de riscos (Risk-Based Approach), direitos dos afetados e conformidade com a LGPD.",
      topicos: [
        {
          titulo: "1. Estrutura do PL 2338/2023 no Senado Federal",
          conteudo: "Elaborado a partir da Comissão de Juristas (CJIAEX), o <strong>PL 2338/2023</strong> adota a abordagem baseada em risco (inspirada no <em>EU AI Act</em> da União Europeia). Divide os sistemas em:<br>• <strong>Risco Excessivo / Inaceitável (Proibidos):</strong> Técnicas subliminares, pontuação social governamental (social scoring) e identificação biométrica remota contínua em massa.<br>• <strong>Alto Risco (Regulamentados):</strong> Sistemas em veículos autônomos, diagnósticos de saúde, triagem de empregos e concessão de crédito, exigindo Avaliação de Impacto Algorítmico (AIA).<br>• <strong>Baixo Risco:</strong> Livres de obrigações pesadas, com incentivo a boas práticas e transparência."
        },
        {
          titulo: "2. Direitos Fundamentais dos Titulares (Cidadãos)",
          conteudo: "O Marco Legal estabelece garantias essenciais:<br>• <strong>Direito à Informação Prévia:</strong> O usuário deve saber se está interagindo com IA.<br>• <strong>Direito à Explicação:</strong> Obter explicação inteligível sobre a lógica de uma decisão automatizada.<br>• <strong>Direito à Revisão Humana:</strong> Exigir que uma decisão tomada por IA que gere prejuízo seja revisada por um profissional humano.<br>• <strong>Não Discriminação Algorítmica:</strong> Obrigação de mitigar vieses sobre raça, etnia, gênero, orientação sexual e idade."
        },
        {
          titulo: "3. Intersecção com a LGPD (Lei 13.709/2018) e Direitos Autorais",
          conteudo: "O treinamento de IA deve respeitar as bases legais da LGPD. Além disso, o texto do marco legal inclui mecanismos de compensação e transparência para o uso de obras intelectuais protegidas por direitos autorais no treinamento de modelos generativos (*Text and Data Mining - TDM* com cláusula de *opt-out*)."
        }
      ],
      fontesCientificas: [
        {
          autor: "Senado Federal do Brasil (2023/2024)",
          titulo: "Projeto de Lei nº 2338, de 2023 (Marco Legal da Inteligência Artificial)",
          publicacao: "Comissão Temporária sobre Inteligência Artificial no Brasil (CTIA)",
          relevancia: "Texto legislativo principal em tramitação no Congresso Nacional.",
          link: "https://www25.senado.leg.br/web/atividade/materias/-/materia/157233"
        },
        {
          autor: "União Europeia (2024)",
          titulo: "Artificial Intelligence Act (Regulation EU 2024/1689)",
          publicacao: "Official Journal of the European Union",
          relevancia: "Primeira legislação abrangente do mundo sobre IA baseada em riscos.",
          link: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj"
        },
        {
          autor: "Presidência da República do Brasil (2018)",
          titulo: "Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018)",
          publicacao: "Diário Oficial da União",
          relevancia: "Norma brasileira de proteção de dados pessoais e privacidade.",
          link: "http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
        }
      ]
    }
  };

  // 2. Objeto Principal do Encontro 1
  const ENCONTRO_1_DATA = {
    moduloInfo: {
      numero: 1,
      total: 7,
      titulo: "Desmistificando a IA: Da Ficção Científica à Realidade",
      subtitulo: "Gênese histórica, definição descomplicada, a IA invisível do dia a dia, mitos, visão do Brasil, regulação e fundamentos de aprendizado",
      cargaHoraria: "Encontro 1 • 3 horas presenciais (180 min)",
      modalidade: "Presencial em Laboratório de Informática",
      publico: "Iniciantes e público geral (sem pré-requisitos técnicos ou matemáticos)",
      ferramentaPrincipal: "Navegador Web + Template do Portfólio Digital individual",
      avaliacao: "Atividade 1 no Portfólio Digital Contínuo (0,5 ponto)"
    },

    fioDaMeada: {
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
    },

    blocosTematicos: [
      {
        id: 1,
        icone: "🤝",
        titulo: "Bloco 1: Acolhimento, Contrato Pedagógico & Estrutura",
        subtitulo: "Apresentação da co-docência, cronograma dos 7 encontros, alívio de ansiedade e requisito de e-mail",
        slidesRange: [1, 6],
        tempoEstimado: "30 min"
      },
      {
        id: 2,
        icone: "🕰️",
        titulo: "Bloco 2: Gênese Histórica, Definição & Os 3 Ingredientes",
        subtitulo: "Origem (Turing 1950, Dartmouth 1956), programação vs padrões e os 3 ingredientes da IA moderna",
        slidesRange: [7, 10],
        tempoEstimado: "25 min"
      },
      {
        id: 3,
        icone: "📱",
        titulo: "Bloco 3: A IA Invisível do Dia a Dia & Teorema de Tesler",
        subtitulo: "A IA da ficção (Rosie) vs IA estreita real, Teorema de Larry Tesler e os 4 exemplos cotidianos",
        slidesRange: [11, 15],
        tempoEstimado: "30 min"
      },
      {
        id: 4,
        icone: "🎭",
        titulo: "Bloco 4: Desmistificando a IA – Os 5 Grandes Mitos",
        subtitulo: "Desconstrução de mitos: consciência, alucinações, linguagem/matemática, ética/trapaça e o futuro do trabalho",
        slidesRange: [16, 21],
        tempoEstimado: "30 min"
      },
      {
        id: 5,
        icone: "🇧🇷",
        titulo: "Bloco 5: Brasil, Cidadania & Legislação",
        subtitulo: "Plano Brasileiro de IA (PBIA 2024–2028: SUS, Soberania) e o Marco Legal da IA (PL 2338/2023 / LGPD)",
        slidesRange: [22, 24],
        tempoEstimado: "20 min"
      },
      {
        id: 6,
        icone: "💻",
        titulo: "Bloco 6: Laboratório Prático & Fechamento",
        subtitulo: "Missão login de e-mail, oficina prática Raio-X da IA no Portfólio Digital (0,5 pt) e síntese do Encontro 1",
        slidesRange: [25, 27],
        tempoEstimado: "45 min"
      }
    ],

    slidesComNotas: [
      // BLOCO 1
      {
        numero: 1,
        id: 1,
        tipo: "capa",
        categoria: "Abertura",
        titulo: "Inteligência Artificial: Fundamentos e Boas Práticas",
        subtitulo: "Encontro 1: Desmistificando a IA – Da Ficção Científica à Realidade",
        detalhes: ["32 Horas Certificadas • 7 Encontros", "Docência: Laura & Maria", "Coordenação: Prof. Lúcio Rodrigo"],
        notasProfessora: {
          objetivoSlide: "Acolher a turma, quebrar a barreira de ansiedade tecnológica e criar um clima de segurança psicológica.",
          oQueFalar: "Diga com serenidade e simpatia: 'Sejam muito bem-vindos! Este minicurso foi desenhado para qualquer pessoa adulta que queira entender e usar IA, independentemente da idade ou de nunca ter mexido com tecnologia. Ninguém aqui precisa saber matemática ou informática avançada.'",
          tempoSugerido: "5 minutos"
        }
      },
      {
        numero: 2,
        id: 2,
        tipo: "apresentacao",
        categoria: "Acolhimento",
        titulo: "Quem Somos & Nosso Compromisso Pedagógico",
        subtitulo: "Um ambiente colaborativo onde ninguém fica para trás",
        itensDestaque: [
          { icone: "👥", titulo: "Co-Docência Compartilhada", desc: "Laura & Maria estarão juntas na sala conduzindo as dinâmicas e auxiliando você na sua mesa." },
          { icone: "🤝", titulo: "Ritmo Respeitoso e Paciente", desc: "Toda dúvida é legítima. Explicaremos quantas vezes forem necessárias com exemplos do dia a dia." },
          { icone: "🎓", titulo: "Coordenação Pedagógica", desc: "Sob coordenação do Prof. Lúcio Rodrigo de Carvalho, garantindo rigor acadêmico com linguagem humana." }
        ],
        notasProfessora: {
          objetivoSlide: "Apresentar a dinâmica da dupla docente e garantir que alunos mais velhos ou tímidos sintam que terão suporte individual nas máquinas.",
          oQueFalar: "Explique como funciona a co-docência: 'Enquanto uma de nós estiver falando no projetor, a outra estará circulando para ajudar quem tiver dúvida no computador ou precisar de um apoio. Vocês nunca estarão sozinhos.'",
          tempoSugerido: "5 minutos"
        }
      },
      {
        numero: 3,
        id: 3,
        tipo: "cronograma",
        categoria: "Estrutura do Curso",
        titulo: "Cronograma Completo: Onde Estamos e Até Onde Vamos",
        subtitulo: "7 Encontros Presenciais de 3h (21h) + 11h de Prática Autônoma = 32 Horas",
        encontros: [
          { data: "09/Out", num: "1", tema: "Gênese da IA & Ética", status: "Hoje (Aula 1)" },
          { data: "23/Out", num: "2", tema: "Acesso & Prompts Básicos", status: "Próxima" },
          { data: "30/Out", num: "3", tema: "Engenharia de Instruções", status: "Planejado" },
          { data: "06/Nov", num: "4", tema: "Refinamento & Formatos", status: "Planejado" },
          { data: "13/Nov", num: "5", tema: "IA nos Estudos & Trabalho", status: "Planejado" },
          { data: "27/Nov", num: "6", tema: "Comparação de Modelos", status: "Planejado" },
          { data: "04/Dez", num: "7", tema: "Avaliação & Certificação", status: "Encerramento" }
        ],
        notasProfessora: {
          objetivoSlide: "Dar previsibilidade temporal à turma e reforçar o compromisso de presença até 04 de dezembro para a certificação de 32h.",
          oQueFalar: "Aponte as datas no telão: 'Hoje é nosso ponto de partida. Vamos nos encontrar a cada duas semanas até 04 de dezembro. Marquem essas datas na agenda. A certificação de 32 horas depende da presença nos encontros presenciais e das entregas no Portfólio.'",
          tempoSugerido: "5 minutos"
        }
      },
      {
        numero: 4,
        id: 4,
        tipo: "pilares",
        categoria: "Objetivos de Aprendizagem",
        titulo: "O Que Você Vai Aprender Conosco?",
        subtitulo: "Os 3 grandes pilares que transformarão sua relação com a tecnologia",
        pilares: [
          {
            num: "1",
            icone: "💡",
            titulo: "Compreender sem Mitos",
            desc: "Entender de verdade como a IA funciona por dentro, separando os filmes de ficção científica da tecnologia real que já usamos."
          },
          {
            num: "2",
            icone: "✍️",
            titulo: "Dominar a Escrita de Prompts",
            desc: "Aprender a conversar e dar comandos claros para o ChatGPT e outras IAs para resolver problemas, estudar, escrever e resumir."
          },
          {
            num: "3",
            icone: "🛡️",
            titulo: "Uso Consciente, Ético e Seguro",
            desc: "Saber identificar quando a IA erra (alucinações), proteger seus dados pessoais e usar a ferramenta com responsabilidade cidadã."
          }
        ],
        notasProfessora: {
          objetivoSlide: "Apresentar a proposta de valor do curso: não formar técnicos, mas cidadãos e profissionais autônomos.",
          oQueFalar: "Destaque: 'Nosso objetivo não é fazer vocês decorarem termos em inglês, mas sim aprender a usar a IA como uma calculadora moderna para acelerar suas ideias com senso crítico e segurança.'",
          tempoSugerido: "5 minutos"
        }
      },
      {
        numero: 5,
        id: 5,
        tipo: "fora-escopo",
        categoria: "Contrato Pedagógico",
        titulo: "O Que NÃO É Este Minicurso? (Alívio de Ansiedade)",
        subtitulo: "Deixando claro o que está fora do escopo para ninguém se preocupar",
        comparacao: {
          nao: [
            "NÃO ensinaremos programação nem código (sem Python, C++ ou Java)",
            "NÃO cobraremos fórmulas matemáticas nem cálculos estatísticos",
            "NÃO construiremos peças físicas, robôs ou circuitos eletrônicos",
            "NÃO usaremos ferramentas pagas (tudo será em versões 100% gratuitas)"
          ],
          sim: [
            "SIM! Ensinaremos a usar a IA através de linguagem comum (Português)",
            "SIM! Ensinaremos como aplicar no seu trabalho, estudo e tarefas da vida real",
            "SIM! Ensinaremos como fazer perguntas que geram respostas excelentes",
            "SIM! Criaremos um Portfólio Digital que comprova seu aprendizado prático"
          ]
        },
        notasProfessora: {
          objetivoSlide: "Desarmar completamente o medo de quem acha que computação exige ser gênio da matemática.",
          oQueFalar: "Faça uma pausa e leia o lado esquerdo com um sorriso: 'Respirem fundo: ninguém aqui vai ter que digitar códigos estranhos nem resolver equações. Usar IA hoje é como dirigir um carro moderno: você só precisa saber onde quer ir e guiar o volante, sem precisar ser mecânico nem desmontar o motor!'",
          tempoSugerido: "5 minutos"
        }
      },
      {
        numero: 6,
        id: 6,
        tipo: "requisito-email",
        categoria: "Requisito Prático",
        titulo: "O Nosso Único Requisito: Ter um E-mail Válido",
        subtitulo: "A chave de acesso para as ferramentas de IA a partir do Encontro 2",
        pontosChave: [
          { icone: "📧", titulo: "E-mail Ativo e Senha Lembrada", desc: "Para acessar o ChatGPT (OpenAI) e outras ferramentas a partir da próxima aula, cada aluno precisará fazer login com um e-mail pessoal (Gmail, Outlook, Yahoo, etc.)." },
          { icone: "🔐", titulo: "Caderninho da Senha", desc: "Se você tem dificuldade para lembrar a senha do seu e-mail, anote-a hoje no seu celular ou traga anotada em um papel para a sala de aula." },
          { icone: "🛠️", titulo: "Missão no Laboratório de Hoje", desc: "No final da aula de hoje, vamos aos computadores testar se todos conseguem abrir o seu e-mail com apoio da Laura e da Maria." }
        ],
        notasProfessora: {
          objetivoSlide: "Evitar o gargalo comum do Encontro 2 (metade da sala perder tempo tentando recuperar senha de e-mail).",
          oQueFalar: "Seja muito empática: 'Todo mundo aqui tem um e-mail cadastrado no celular, mas muitos não lembram a senha de cabeça. Hoje, na nossa parte prática no laboratório, vamos garantir que cada um de vocês consiga abrir o seu e-mail com calma. Se precisar criar um novo, nós fazemos juntos!'",
          tempoSugerido: "5 minutos"
        }
      },

      // BLOCO 2
      {
        numero: 7,
        id: 7,
        tipo: "apresentacao",
        categoria: "Gênese Histórica",
        titulo: "A IA Não Nasceu em 2022 com o ChatGPT!",
        subtitulo: "Uma história de quase 70 anos de ciência que agora chegou ao nosso bolso",
        itensDestaque: [
          {
            icone: "🕰️",
            titulo: "1950 – Alan Turing & O Teste de Turing",
            desc: "O britânico Alan Turing, pai da computação, publicou o artigo clássico 'Computing Machinery and Intelligence', perguntando: 'As máquinas podem pensar?' e criando o famoso teste de diálogo humano."
          },
          {
            icone: "🏛️",
            titulo: "1956 – O Nascimento do Termo (Dartmouth)",
            desc: "O cientista John McCarthy reuniu os maiores pesquisadores dos EUA na Conferência de Dartmouth e cunhou oficialmente a expressão 'Inteligência Artificial'."
          },
          {
            icone: "🚀",
            titulo: "Por Que Explodiu Agora?",
            desc: "A teoria tem 70 anos, mas a IA precisou de 3 fatores modernos para explodir: bilhões de dados na internet (Big Data), chips gráficos velozes (GPUs/NPUs) e celulares em nossas mãos."
          }
        ],
        notasProfessora: {
          objetivoSlide: "Desfazer a falsa impressão de que IA é modismo recente de 2022 e valorizar a profundidade histórica da ciência da computação.",
          oQueFalar: "Diga com entusiasmo: 'Muita gente acha que IA é uma invenção novinha de 2022 porque o ChatGPT ficou famoso. Mas a verdade é fascinante: cientistas pesquisam IA há mais de 70 anos! O que mudou é que antes as máquinas eram lentas e caras; hoje, temos supercomputadores na nuvem e celulares potentes em nossos bolsos.'",
          tempoSugerido: "6 minutos"
        },
        embasamentoCientifico: dossies.turingDartmouth
      },
      {
        numero: 8,
        id: 8,
        tipo: "secao",
        categoria: "Definição Fundamental",
        badge: "Conceito Central",
        titulo: "Mas Afinal... O Que É Inteligência Artificial de Verdade?",
        subtitulo: "A virada de chave: da programação com regras cegas para o aprendizado por padrões em dados",
        notasProfessora: {
          objetivoSlide: "Criar uma pausa dramática e focar 100% da atenção da turma para a grande pergunta conceitual do curso.",
          oQueFalar: "Faça uma pausa no projetor, olhe nos olhos da turma e pergunte com entusiasmo: 'Até agora vimos que a IA não nasceu ontem e tem 70 anos de história. Mas afinal... o que é Inteligência Artificial de verdade? Vamos ver agora a diferença fundamental entre como um computador tradicional funciona e como a IA aprende!'",
          tempoSugerido: "3 minutos"
        }
      },
      {
        numero: 9,
        id: 9,
        tipo: "comparativo",
        categoria: "Definição Descomplicada",
        titulo: "Programação Tradicional vs. Aprendizado por Padrões",
        subtitulo: "A grande virada: do código com regras fixas manuais para o reconhecimento de padrões em dados",
        caixa1: {
          titulo: "Programação Tradicional (Regras Rígidas)",
          formula: "Dados + Regras Manuais ➔ Resposta Fixa",
          analogia: "Receita de Bolo Rígida: Segue estritamente o manual. Se faltar um ovo ou o forno mudar, o programa trava.",
          exemplo: "Calculadora comum, planilhas simples, semáforos de tempo fixo."
        },
        caixa2: {
          titulo: "Inteligência Artificial (Aprendizado por Padrões)",
          formula: "Dados de Entrada + Exemplos ➔ A Máquina Descobre o Padrão",
          analogia: "Aprender Observando: Analisa milhares de bolos prontos até entender sozinha o padrão do bolo perfeito.",
          exemplo: "Filtro anti-spam do Gmail, câmeras inteligentes, ChatGPT, Waze."
        },
        notasProfessora: {
          objetivoSlide: "Construir a intuição de que a IA moderna não é uma lista manual de IF/ELSE, mas sim ajuste estatístico baseado em dados.",
          oQueFalar: "Use a metáfora do bolo com muita calma: 'Antigamente, para o computador fazer algo, um humano precisava escrever um manual gigantesco de regras. Se acontecesse algo fora do manual, o computador falhava. A IA moderna é diferente: nós mostramos milhares de exemplos reais do passado e ela aprende sozinha a reconhecer padrões!'",
          tempoSugerido: "7 minutos"
        }
      },
      {
        numero: 10,
        id: 10,
        tipo: "apresentacao",
        categoria: "Definição Fundamental",
        titulo: "Os 3 Ingredientes que Fazem a Mágica Acontecer",
        subtitulo: "O tripé essencial por trás de qualquer ferramenta moderna de Inteligência Artificial",
        itensDestaque: [
          {
            icone: "📖",
            titulo: "1. A Biblioteca de Exemplos (Dados)",
            desc: "Milhões de páginas de livros, artigos, notícias e receitas públicas que servem de material de leitura e aprendizado estatístico para a máquina."
          },
          {
            icone: "⚡",
            titulo: "2. Computadores Potentes (Chips)",
            desc: "Máquinas velozes em nuvem que conseguem processar essa biblioteca inteira para calcular e encontrar todos os padrões de linguagem."
          },
          {
            icone: "🧑‍🏫",
            titulo: "3. Orientação e Supervisão Humana",
            desc: "Pessoas reais que testam e ensinam a IA a ser educada, prestativa, evitar ofensas e responder com clareza em bom português."
          }
        ],
        notasProfessora: {
          objetivoSlide: "Mostrar que a tecnologia é fruto do trabalho e da curadoria humana, reforçando o papel das pessoas no processo.",
          oQueFalar: "Destaque o terceiro ponto com entusiasmo: 'A IA não nasceu pronta no computador. Ela precisa de dados, processamento e, acima de tudo, de seres humanos ensinando e calibrando o sistema para que hoje ela consiga nos responder com simpatia e utilidade.'",
          tempoSugerido: "5 minutos"
        }
      },

      // BLOCO 3
      {
        numero: 11,
        id: 11,
        tipo: "secao",
        categoria: "Classificação Tecnológica",
        badge: "Classificação Tecnológica",
        titulo: "Os 2 Tipos de IA: O Que É Real vs. O Que É Ficção",
        subtitulo: "A grande bifurcação: a tecnologia prática de hoje versus a imaginação do cinema",
        pills: [
          { tipo: "ficcao", texto: "🎬 1. IA da Ficção (AGI)" },
          { tipo: "real", texto: "⚙️ 2. IA Estreita Real (ANI)" }
        ],
        notasProfessora: {
          objetivoSlide: "Apresentar a grande bifurcação temática antes de mergulhar nos detalhes da Rosie e da IA no bolso.",
          oQueFalar: "Diga com entusiasmo e clareza: 'Agora vamos entrar em um momento chave da nossa aula. Quando ouvimos falar de IA, há dois mundos: o que o cinema inventou e o que a ciência realmente construiu. Vamos conhecer primeiro o mito da ficção e, logo em seguida, a IA real do nosso dia a dia!'",
          tempoSugerido: "3 minutos"
        }
      },
      {
        numero: 12,
        id: 12,
        tipo: "ia-ficcao",
        categoria: "Ficção Científica",
        titulo: "1. A IA da Ficção: Robôs, Cinema & Imaginação",
        subtitulo: "Como os filmes e desenhos animados criaram robôs humanoides com sentimentos e consciência",
        imagem: "/static/img/ia_ficcao_rosie.jpg",
        badge: "IA Geral (AGI / Cinema) — 0% REAL HOJE",
        personagens: [
          { nome: "Robô Rosie (Os Jetsons)", desc: "Androide doméstica com avental, humor, afeto e broncas na família." },
          { nome: "C-3PO & R2-D2 (Star Wars)", desc: "Robôs com lealdade, medo e personalidades humanas expressivas." },
          { nome: "Exterminador do Futuro (Skynet)", desc: "Máquinas conscientes que ganham vida própria e se voltam contra a humanidade." }
        ],
        conclusaoFiccao: "Na ficção, máquinas têm consciência, desejos e sentimentos. No mundo real, isso é 0% real hoje.",
        notasProfessora: {
          objetivoSlide: "Acolher o imaginário popular dos alunos e desmistificar de forma leve a ideia de robôs com sentimentos.",
          oQueFalar: "Aponte para o telão com simpatia: 'Quem aqui lembra da robô Rosie dos Jetsons? No cinema, os robôs cozinham, sentem raiva, amam e têm consciência. Isso rende ótimas histórias, mas não existe na ciência real. A IA de verdade não tem corpo metálico nem sentimentos!'",
          tempoSugerido: "5 minutos"
        }
      },
      {
        numero: 13,
        id: 13,
        tipo: "ia-estreita",
        categoria: "A IA Real",
        titulo: "2. A IA Estreita: A Tecnologia que Move o Planeta Real",
        subtitulo: "Hiperespecialista, focada em uma única tarefa e presente em 100% dos serviços modernos",
        badge: "IA Estreita (Narrow AI / ANI) — 100% DA IA EXISTENTE",
        recursos: [
          { icone: "👤", titulo: "Biometria Facial", desc: "Cálculo de distâncias geométricas para desbloqueio seguro do celular e acesso a bancos." },
          { icone: "🗺️", titulo: "Rotas e Trânsito", desc: "Previsão de congestionamentos e caminhos mais rápidos no Google Maps e Waze." },
          { icone: "🛡️", titulo: "Filtros Anti-Spam", desc: "Classificação em tempo real de mensagens suspeitas e golpes no Gmail e Outlook." },
          { icone: "💳", titulo: "Segurança Bancária", desc: "Detecção instantânea de compras fraudulentas no cartão de crédito e no Pix." },
          { icone: "🎬", titulo: "Recomendações", desc: "Sugestão de músicas, vídeos e compras personalizadas no Spotify, YouTube e Netflix." },
          { icone: "📱", titulo: "Teclado Inteligente", desc: "Previsão da próxima palavra e correção ortográfica enquanto você digita no WhatsApp." }
        ],
        destaque: "A IA que bloqueia fraude no seu cartão não sabe sugerir uma rota. E a que sugere rota não sabe escrever poema: cada uma é hiperespecialista!",
        notasProfessora: {
          objetivoSlide: "Provar que a IA real é uma coleção de especialistas matemáticos que os alunos já utilizam diariamente.",
          oQueFalar: "Destaque a lista: 'Vejam que fascinante: a IA de verdade é essa lista inteira de recursos que já estão no seu bolso. Ela não é um robô faz-tudo: cada programa é hiperespecialista em fazer uma única tarefa matemática com perfeição!'",
          tempoSugerido: "6 minutos"
        }
      },
      {
        numero: 14,
        id: 14,
        tipo: "secao",
        categoria: "O Efeito IA",
        badge: "O Efeito IA (The AI Effect)",
        titulo: "O Teorema de Larry Tesler: Por Que a IA Parece Desaparecer?",
        citacao: "A Inteligência Artificial é tudo aquilo que o computador ainda não sabe fazer. Assim que funciona com perfeição, passa a ser chamada apenas de software comum.",
        autor: "Larry Tesler (1945–2020)",
        autorDesc: "Pioneiro da computação (Xerox PARC, Apple, Amazon e Yahoo) e criador do Copiar/Colar (Ctrl+C / Ctrl+V)",
        notasProfessora: {
          objetivoSlide: "Apresentar a grande lei sociotécnica que explica por que a sociedade normaliza a tecnologia e esquece que biometria e câmeras são IA.",
          oQueFalar: "Leiam a frase no telão com calma e ênfase: 'Larry Tesler, um dos maiores cientistas da história da computação e criador do nosso amado Copiar e Colar (Ctrl+C / Ctrl+V), criou esta frase genial: toda vez que a IA resolve um problema difícil, as pessoas se acostumam e dizem: \"ah, isso é só um recurso normal do celular\". A IA parece invisível porque ela venceu e virou rotina!'",
          tempoSugerido: "5 minutos"
        },
        embasamentoCientifico: dossies.teslerAiEffect
      },
      {
        numero: 15,
        id: 15,
        tipo: "grid-exemplos",
        categoria: "O Teorema de Tesler na Prática",
        titulo: "O Efeito IA no Cotidiano: Quando a Tecnologia Vira Rotina",
        subtitulo: "Quatro tecnologias que já foram o auge da Inteligência Artificial e hoje chamamos de 'recursos comuns':",
        exemplos: [
          {
            icone: "🔤",
            nome: "Leitura de Texto em Fotos (OCR)",
            app: "Antes: 'Super IA' • Hoje: 'Normal'",
            papel: "Nas décadas de 70 e 80, ensinar uma máquina a <strong style='color: var(--text-amber);'>ler caracteres impressos</strong> era o ápice da IA. Hoje, você apenas aponta a câmera do celular para copiar um texto."
          },
          {
            icone: "📱",
            nome: "Corretor & Autocompletar",
            app: "Antes: 'Ficção Científica' • Hoje: 'Normal'",
            papel: "Nos anos 90, <strong style='color: var(--text-amber);'>prever a próxima palavra</strong> parecia telepatia computacional. Hoje, é apenas o teclado do WhatsApp sugerindo termos no dia a dia."
          },
          {
            icone: "🎙️",
            nome: "Reconhecimento de Voz",
            app: "Antes: 'Milagre da IA' • Hoje: 'Normal'",
            papel: "Converter a fala humana em <strong style='color: var(--text-amber);'>texto legível em tempo real</strong> exigiu décadas de redes neurais. Hoje, você apenas dita uma mensagem no WhatsApp ou fala com a assistente do celular."
          },
          {
            icone: "🖼️",
            nome: "Reconhecimento de Imagem",
            app: "Antes: 'Visão Computacional' • Hoje: 'Normal'",
            papel: "Identificar rostos, animais ou objetos em <strong style='color: var(--text-amber);'>fotos e vídeos automaticamente</strong> já foi um grande desafio da ciência. Hoje, o celular separa sozinho fotos de pessoas e pets na galeria."
          }
        ],
        notasProfessora: {
          objetivoSlide: "Demonstrar na prática a tese de Larry Tesler com 4 recursos cotidianos que os alunos usam todo dia sem perceber que são IA.",
          oQueFalar: "Apresentem os quatro quadrantes ligando-os ao Teorema de Tesler: 'Vejam que fascinante: ler texto em foto (OCR), corretor ortográfico, transcrever nossa voz em áudios e reconhecer rostos em fotos já foram considerados o topo da Inteligência Artificial. Hoje, ninguém chama de IA, chama apenas de recurso comum do celular. A IA venceu porque virou rotina!'",
          tempoSugerido: "6 minutos"
        }
      },

      // BLOCO 4
      {
        numero: 16,
        id: 16,
        tipo: "quebra-gelo",
        categoria: "Transição para os Mitos",
        titulo: "De Onde Vem o Nosso Medo? Do Cinema às Falácias da Internet",
        subtitulo: "Se a IA real é tão útil no banco e no bolso, por que as manchetes geram tanto pânico?",
        colunas: [
          {
            tag: "O Sensacionalismo & A Ficção",
            icone: "📰",
            itens: [
              "<strong style='color: var(--text-red);'>Manchetes Caça-Cliques:</strong> Notícias alarmistas prometendo que a IA 'vai criar consciência e dominar o mundo amanhã'.",
              "<strong style='color: var(--text-red);'>Vilões do Cinema:</strong> Skynet e robôs assassinos confundidos propositalmente com ferramentas de dados reais.",
              "<strong style='color: var(--text-red);'>Misticismo Digital:</strong> Boatos virais que tratam cálculos estatísticos de computador como se fossem mentes sobrenaturais."
            ]
          },
          {
            tag: "A Realidade dos Fatos & Nosso Olhar Crítico",
            icone: "💡",
            itens: [
              "<strong style='color: var(--text-green);'>Matemática, Não Mente:</strong> A IA não tem desejos, rancor ou consciência: é processamento estatístico de dados.",
              "<strong style='color: var(--text-green);'>Pânico do Desconhecido:</strong> O medo nasce da falta de explicação clara sobre como o software realmente funciona.",
              "<strong style='color: var(--text-green);'>Postura Cidadã e Crítica:</strong> Para usar a tecnologia com segurança e autonomia, vamos desmontar os 5 Grandes Mitos!"
            ]
          }
        ],
        notasProfessora: {
          objetivoSlide: "Criar o gancho perfeito de transição para a sequência de mitos, desarmando o pânico de notícias sensacionalistas.",
          oQueFalar: "Façam a grande provocação: 'Se a gente já confia na IA para cuidar do nosso dinheiro e guiar nosso carro, por que quando vemos notícias na internet temos a impressão de que o mundo vai acabar amanhã? Porque manchetes sensacionalistas vendem mais do que explicar matemática! A partir de agora, vamos desmontar os 5 maiores mitos!'",
          tempoSugerido: "5 minutos"
        }
      },
      {
        numero: 17,
        id: 17,
        tipo: "quebra-gelo",
        categoria: "Desmistificando a IA",
        titulo: "Mito 1: 'A IA pensa, sente e tem consciência própria'",
        subtitulo: "A diferença fundamental entre imitar a linguagem humana e ter compreensão real",
        colunas: [
          {
            tag: "O Mito da Consciência",
            icone: "🤖",
            itens: [
              "Achar que a IA tem vontades, sentimentos, desejos ou consciência biológica.",
              "Acreditar que o sistema 'sabe' o que está dizendo como uma pessoa humana.",
              "Medo de que o computador ganhe 'vida própria' ou intenções ocultas."
            ]
          },
          {
            tag: "A Realidade Estatística",
            icone: "📊",
            itens: [
              "É um modelo matemático de previsão probabilística de palavras e dados.",
              "Não possui sentimentos, consciência, dor ou empatia: é pura computação.",
              "Funciona como um autocompletar avançadíssimo treinado em bilhões de textos."
            ]
          }
        ],
        notasProfessora: {
          objetivoSlide: "Desarmar o medo existencial de que a IA 'tem mente própria' e fixar a ideia de cálculo estatístico.",
          oQueFalar: "Explique com clareza: 'Quando o ChatGPT responde com simpatia e diz \"entendi sua dúvida\", ele não está sentindo nada nem entendendo no sentido humano. Ele apenas calculou quais palavras têm maior probabilidade estatística de vir em seguida em um diálogo amigável.'",
          tempoSugerido: "5 minutos"
        }
      },
      {
        numero: 18,
        id: 18,
        tipo: "quebra-gelo",
        categoria: "Postura Crítica",
        titulo: "Mito 2: 'Se a IA respondeu com certeza, está 100% correto'",
        subtitulo: "O fenômeno das 'alucinações' e por que você nunca deve aceitar respostas cegamente",
        colunas: [
          {
            tag: "O Mito do Oráculo Infalível",
            icone: "🔮",
            itens: [
              "Tratar a IA como uma enciclopédia sagrada que nunca comete erros.",
              "Copiar e colar respostas sem conferir as fontes ou os dados.",
              "Achar que precisão factual vem garantida de fábrica pelo computador."
            ]
          },
          {
            tag: "A Realidade: Alucinações",
            icone: "🧭",
            itens: [
              "A IA pode inventar leis, autores, remédios e datas com total convicção.",
              "O fenômeno chama-se tecnicamente 'Alucinação' do modelo.",
              "A IA é uma excelente bússola de ideias, mas o piloto e verificador é SEMPRE você."
            ]
          }
        ],
        notasProfessora: {
          objetivoSlide: "Vacinar os alunos contra a confiança cega e introduzir o conceito de alucinação de forma simples.",
          oQueFalar: "Destaque com firmeza: 'A IA é uma geradora de textos fluentes, não uma fiscal da verdade. Ela pode inventar um livro que nunca existiu com uma elegância impressionante. Por isso, a regra de ouro do nosso curso é: IA ajuda no rascunho, mas o olho humano sempre confere!'",
          tempoSugerido: "6 minutos"
        }
      },
      {
        numero: 19,
        id: 19,
        tipo: "apresentacao",
        categoria: "Acessibilidade & Inclusão",
        titulo: "Mito 3: 'Preciso ser um gênio da matemática ou programador'",
        subtitulo: "A maior revolução da IAGen: a linguagem natural em português é o novo código",
        itensDestaque: [
          {
            icone: "🗣️",
            titulo: "Português Claro e Direto",
            desc: "Você não digita linhas de código. Você conversa em português natural do mesmo jeito que fala com um colega de trabalho."
          },
          {
            icone: "🎯",
            titulo: "Contexto e Clareza > Informática",
            desc: "Quem se comunica bem e sabe explicar o que precisa tira muito mais proveito da IA do que quem apenas domina informática."
          },
          {
            icone: "🧒🏻👨🏽🧓",
            titulo: "Para Todas as Idades",
            desc: "Professores, aposentados, comerciantes, estudantes: qualquer pessoa que saiba ler e escrever pode usar plenamente."
          }
        ],
        notasProfessora: {
          objetivoSlide: "Elevar a autoestima técnica dos alunos que não têm formação em exatas ou TI.",
          oQueFalar: "Olhe para a sala e tranquilize: 'Antigamente, para mandar no computador precisávamos aprender programação avançada. Hoje, a linguagem de instrução da IA Generativa é o bom português. Se você sabe pedir uma informação com clareza, você já sabe a base de um bom prompt.'",
          tempoSugerido: "5 minutos"
        }
      },
      {
        numero: 20,
        id: 20,
        tipo: "quebra-gelo",
        categoria: "Ética & Autoria",
        titulo: "Mito 4: 'Usar IA significa necessariamente trapacear'",
        subtitulo: "A fronteira entre atalho desonesto (terceirização) e uso formativo e potencializador",
        colunas: [
          {
            tag: "O Estigma da 'Trapaça'",
            icone: "🚫",
            itens: [
              "Achar que qualquer consulta à IA é plágio ou preguiça mental.",
              "Copiar e colar 100% da resposta e entregar sem ler, sem pensar e sem aprender.",
              "Sentir culpa ou medo de usar ferramentas modernas de produtividade e estudo."
            ]
          },
          {
            tag: "Uso Ético, Crítico & Potencializador",
            icone: "🎓",
            itens: [
              "Usar a IA como tutor particular: tirar dúvidas, pedir exemplos e debater ideias.",
              "Transparência e responsabilidade: o autor e tomador de decisão final é você.",
              "A verdadeira inteligência está em formular boas perguntas e validar as respostas."
            ]
          }
        ],
        notasProfessora: {
          objetivoSlide: "Eliminar a culpa ou o tabu ético do uso da IA, ensinando a postura do estudante ativo e responsável.",
          oQueFalar: "Aborde o tema com tranquilidade e rigor: 'Muitos sentem culpa ao usar IA, achando que estão trapaceando. Trapaça é mandar a IA fazer seu trabalho e você fingir que fez, sem entender nada. Mas usar a IA para te explicar uma matéria difícil de três jeitos diferentes ou revisar seu rascunho é estudar com inteligência! Aqui aprenderemos o uso ético e transparente.'",
          tempoSugerido: "6 minutos"
        }
      },
      {
        numero: 21,
        id: 21,
        tipo: "quebra-gelo",
        categoria: "O Futuro do Trabalho e Estudos",
        titulo: "Mito 5: 'A IA vai substituir os seres humanos em tudo'",
        subtitulo: "Automação de tarefas mecânicas vs. O valor insubstituível do julgamento humano",
        colunas: [
          {
            tag: "O Medo da Substituição",
            icone: "⚠️",
            itens: [
              "Achar que professores, redatores ou profissionais deixarão de existir.",
              "Imaginar que criatividade, empatia e contexto ético serão automatizados.",
              "Sensação de obsolescência e ansiedade frente ao desconhecido."
            ]
          },
          {
            tag: "A Potencialização Humana",
            icone: "💡",
            itens: [
              "A IA não substitui você; quem aprende a usar IA com senso crítico se destaca.",
              "Ela assume o trabalho repetitivo (resumos, formatação, primeiros rascunhos).",
              "Você ganha tempo para o que é humano: empatia, decisão e criatividade."
            ]
          }
        ],
        notasProfessora: {
          objetivoSlide: "Substituir o medo de substituição por uma perspectiva de autonomia e empoderamento profissional e pessoal.",
          oQueFalar: "Conclua a sequência de mitos: 'A IA é como uma calculadora ou um processador de texto muito poderoso. A calculadora não acabou com os matemáticos nem o Word com os escritores. A IA tira o trabalho mecânico da frente para sobrar tempo para o que só você sabe fazer.'",
          tempoSugerido: "6 minutos"
        }
      },

      // BLOCO 5
      {
        numero: 22,
        id: 22,
        tipo: "secao",
        categoria: "Brasil, Cidadania & Legislação",
        badge: "Estratégia Nacional & Cidadania",
        titulo: "E o Brasil? Cidadania, Soberania & As Leis de IA",
        subtitulo: "Como o nosso país se posiciona no cenário mundial: do Plano Brasileiro de IA (PBIA) aos direitos e proteção do cidadão",
        pills: [
          { tipo: "real", texto: "🇧🇷 1. Plano Brasileiro de IA (PBIA 2024–2028)" },
          { tipo: "real", texto: "⚖️ 2. Marco Legal & LGPD (PL 2338/2023)" }
        ],
        notasProfessora: {
          objetivoSlide: "Fazer a transição para o bloco de cidadania e soberania, valorizando o protagonismo do Brasil e conectando o curso à política pública nacional.",
          oQueFalar: "Faça uma pausa e provoque a turma com entusiasmo: 'Desmistificamos o que é IA e como ela funciona. Mas e o Brasil nessa história? O nosso país tem um plano oficial de R$ 23 bilhões e leis pioneiras para garantir nossos direitos e soberania. Vamos conhecer o Plano Brasileiro de IA e o Marco Legal dos nossos direitos!'",
          tempoSugerido: "3 minutos"
        }
      },
      {
        numero: 23,
        id: 23,
        tipo: "apresentacao",
        categoria: "Plano Brasileiro de IA",
        titulo: "O Plano Brasileiro de IA (PBIA): 'IA para o Bem de Todos'",
        subtitulo: "Os 3 eixos estratégicos do investimento público nacional: supercomputadores, SUS e inclusão digital",
        itensDestaque: [
          {
            icone: "🇧🇷",
            titulo: "1. Soberania e Dados Nacionais",
            desc: "Investimento de R$ 23 bilhões no Plano 'IA para o Bem de Todos' (2024–2028), expandindo supercomputadores nacionais (Santos Dumont/LNCC) e modelos treinados na nossa língua e cultura."
          },
          {
            icone: "🏥",
            titulo: "2. IA para Serviços Públicos & SUS",
            desc: "Foco prioritário na redução de filas e diagnósticos no Sistema Único de Saúde (SUS), monitoramento da Amazônia e agricultura familiar."
          },
          {
            icone: "🎓",
            titulo: "3. Capacitação Popular em Massa",
            desc: "O objetivo é formar e letrar digitalmente milhões de cidadãos para gerar empregos qualificados — exatamente a missão deste nosso minicurso de extensão!"
          }
        ],
        notasProfessora: {
          objetivoSlide: "Mostrar a política pública oficial do Brasil e valorizar a presença dos alunos como agentes de transformação e soberania digital.",
          oQueFalar: "Apresente com orgulho e cidadania: 'O Brasil não quer ser apenas um comprador de tecnologia de outros países. O Governo Federal lançou o Plano Brasileiro de IA com foco em usar a inteligência artificial para melhorar o SUS, proteger o meio ambiente e, principalmente, capacitar as pessoas. Vocês estarem aqui hoje faz parte dessa missão nacional de inclusão digital!'",
          tempoSugerido: "7 minutos"
        },
        embasamentoCientifico: dossies.pbiaBrasil
      },
      {
        numero: 24,
        id: 24,
        tipo: "apresentacao",
        categoria: "Legislação & Direitos",
        titulo: "Regulamentação da IA: Leis, Direitos e Proteção ao Cidadão",
        subtitulo: "Como o Marco Legal da IA (PL 2338/2023) e a LGPD protegem você de abusos",
        itensDestaque: [
          {
            icone: "🚦",
            titulo: "1. Classificação por Níveis de Risco",
            desc: "Sistemas simples (filtros de spam) são livres. Sistemas de alto risco (decisões sobre crédito, contratação de emprego e saúde) exigem auditoria, teste de preconceito e supervisão humana."
          },
          {
            icone: "🔒",
            titulo: "2. Privacidade e Proteção de Dados (LGPD)",
            desc: "Suas fotos, voz e dados pessoais não podem ser usados por empresas para alimentar robôs comerciais sem consentimento prévio e seguro."
          },
          {
            icone: "⚖️",
            titulo: "3. Direito à Explicação & Direitos Autorais",
            desc: "Se uma IA tomar uma decisão que afete você, você tem o direito legal de saber o porquê. Além disso, criadores de conteúdo e artistas têm seus trabalhos protegidos contra cópia desautorizada."
          }
        ],
        notasProfessora: {
          objetivoSlide: "Transmitir segurança jurídica e cidadã, mostrando que regular não é proibir, mas garantir que a tecnologia sirva à dignidade humana.",
          oQueFalar: "Explique com clareza: 'Regulamentar a IA não é proibir a tecnologia, mas colocar regras claras e cinto de segurança no carro! O Congresso Nacional está votando o Marco Legal da IA para garantir que nenhum algoritmo possa discriminar pessoas por idade, gênero ou cor, e que nossa privacidade seja respeitada.'",
          tempoSugerido: "7 minutos"
        },
        embasamentoCientifico: dossies.marcoLegal
      },

      // BLOCO 6
      {
        numero: 25,
        id: 25,
        tipo: "missao-email",
        categoria: "Laboratório Prático 1",
        titulo: "Missão 1 no Computador: Garantir o Acesso ao seu E-mail",
        subtitulo: "Preparando o terreno para ninguém travar no login do ChatGPT no Encontro 2",
        passos: [
          "1. Ligue o monitor e abra o navegador de internet (Google Chrome ou Edge).",
          "2. Acesse a página do seu provedor de e-mail (gmail.com, outlook.com ou outro).",
          "3. Faça login com seu endereço de e-mail e sua senha habitual.",
          "4. Verifique se você consegue ver sua caixa de entrada aberta na tela.",
          "5. Caso não lembre a senha ou não tenha e-mail, chame a Laura ou a Maria agora para criarmos juntos!"
        ],
        notasProfessora: {
          objetivoSlide: "Resolver presencialmente todo e qualquer problema de senha de e-mail antes do Encontro 2.",
          oQueFalar: "Oriente com clareza: 'Nossa primeira missão prática de hoje é simples, mas fundamental: abrir seu e-mail no computador do laboratório. Se esquecer a senha, não se preocupe: levantem a mão que nós ajudamos a redefinir ou criar uma conta nova.'",
          tempoSugerido: "20 minutos de tutoria individual"
        }
      },
      {
        numero: 26,
        id: 26,
        tipo: "missao-diagnostica",
        categoria: "Laboratório Prático 2",
        titulo: "Missão 2 no Computador: Prova Diagnóstica",
        subtitulo: "Mapeamento inicial de conhecimentos e expectativas para calibrar os próximos encontros",
        tempoEstimado: "25 minutos",
        passos: [
          "1. Abra a nova aba do navegador no link da Prova Diagnóstica indicado na lousa.",
          "2. Preencha seu nome e responda cada questão com tranquilidade e sinceridade.",
          "3. Lembre-se: não há pegadinhas nem nota punitiva — o objetivo é conhecermos a turma!",
          "4. Se tiver qualquer dúvida de leitura ou no computador, chame a Laura ou a Maria na sua mesa.",
          "5. Ao finalizar todas as questões, clique no botão 'Enviar Respostas'."
        ],
        destaqueDiagnostica: {
          icone: "📋",
          titulo: "Avaliação Diagnóstica Sem Medo",
          desc: "Um raio-x formativo para descobrirmos o que você já conhece sobre tecnologia e ajustarmos o ritmo das próximas oficinas práticas.",
          tagAviso: "Zero Pressão • Instrumento Pedagógico de Nivelamento"
        },
        notasProfessora: {
          objetivoSlide: "Conduzir a Prova Diagnóstica acolhendo os alunos, desmistificando o medo de testes e garantindo que todos enviem suas respostas no tempo disponível.",
          oQueFalar: "Tranquilizem a turma: 'Nossa segunda missão de hoje é a Prova Diagnóstica. Quero que todos façam com muita calma e tranquilidade: ninguém aqui vai ser reprovado ou julgado pelas respostas. Essa sondagem serve exclusivamente para nós, professoras, sabermos exatamente onde podemos aprofundar e onde devemos ir mais devagar nos próximos 6 encontros. Estamos passando nas mesas para ajudar com qualquer dúvida!'",
          tempoSugerido: "25 a 30 minutos de aplicação presencial"
        }
      },
      {
        numero: 27,
        id: 27,
        tipo: "fechamento",
        categoria: "Síntese & Próximos Passos",
        titulo: "Síntese do Encontro 1 & O Salto para a Próxima Aula",
        subtitulo: "A base está construída com sucesso! No próximo encontro, entraremos no universo da criação.",
        conclusao: "A Inteligência Artificial não é mágica, nem pensa como um cérebro biológico: é matemática, probabilidade e reconhecimento de padrões em dados para potencializar a inteligência humana.",
        proximoEncontro: "Encontro 2 (23 de Outubro): O Salto da IA Generativa – Como Acessar o ChatGPT e Criar seus Primeiros Prompts!",
        lembretesFinais: [
          "Guarde com segurança seu e-mail e senha testados hoje",
          "Prova diagnóstica concluída: turma 100% mapeada para a prática!",
          "Parabéns pelo primeiro passo dado na sua jornada com Inteligência Artificial!"
        ],
        notasProfessora: {
          objetivoSlide: "Fechar o Encontro 1 com celebração, sensação de vitória pedagógica e grande expectativa para a oficina do ChatGPT.",
          oQueFalar: "Finalizem calorosamente: 'Parabéns a todos! Vocês deram hoje um passo fundamental. Desmistificamos a ficção, entendemos como a IA invisível funciona no nosso cotidiano, testamos o e-mail de todos e concluímos nossa avaliação diagnóstica. No dia 23 de outubro, traremos a IA que CRIA: abriremos o ChatGPT para criar prompts reais no laboratório. Excelente semana a todos e até o Encontro 2!'",
          tempoSugerido: "5 minutos de encerramento"
        }
      }
    ],

    oficinaPratica: {
      titulo: "Atividade 1: Raio-X da IA no Cotidiano & Mapeamento de Dados",
      duracao: "40 minutos em Laboratório",
      peso: "0,5 ponto no Portfólio Digital",
      ferramenta: "Portfólio Digital Individual + Navegador Web",
      descricao: "Oficina prática em computadores onde cada estudante escolhe dois aplicativos do seu cotidiano (ex: Waze, Spotify, Nubank, Netflix, Câmera/Google Fotos) e disseca a cadeia: Dados Coletados ➔ Padrão que a IA Calcula ➔ Benefício Entregue ao Usuário, finalizando com reflexão crítica sobre a vida sem essa automação.",
      casosGabarito: [
        {
          caso: "Exemplo 1: Waze / Google Maps (Navegação & Trânsito)",
          categoria: "Geolocalização & Previsão",
          entradas: "Localização GPS em tempo real de milhares de motoristas, velocidade de deslocamento e alertas de acidentes enviados pela comunidade.",
          oQueIaFaz: "Calcula a velocidade média dos trechos a cada segundo, identifica padrões de lentidão/gargalos e simula milhares de rotas alternativas em milissegundos.",
          saida: "Tempo estimado de chegada (ETA) hiperpreciso e desvio de rota sugerido antes do motorista travar no engarrafamento.",
          contraprova: "Programação fixa manual exigiria que um humano ligasse para cada rua para saber a situação. A IA aprende o trânsito a partir dos dados contínuos de milhares de celulares."
        },
        {
          caso: "Exemplo 2: Spotify / Netflix / YouTube (Sistemas de Recomendação)",
          categoria: "Filtragem Colaborativa & Mídia",
          entradas: "Histórico de reprodução, músicas puladas nos primeiros 30s, horário em que ouve e playlists salvas.",
          oQueIaFaz: "Compara o perfil de escuta do usuário com milhões de outros ouvintes com gostos semelhantes (filtragem colaborativa) e calcula a probabilidade estatística de afinidade com faixas inéditas.",
          saida: "Playlist 'Descobertas da Semana' ou fila de reprodução contínua que mantém o ouvinte engajado.",
          contraprova: "Um funcionário humano jamais conseguiria fazer a curadoria musical manual diária para 500 milhões de usuários."
        },
        {
          caso: "Exemplo 3: Antifraude Bancária (Pix / Cartão de Crédito Nubank, BB, Itaú)",
          categoria: "Classificação Anômala & Segurança",
          entradas: "Valor da transação, horário, localização habitual do usuário, tipo de estabelecimento e dispositivo usado.",
          oQueIaFaz: "Calcula em menos de 300 milissegundos o score de risco: quão distante essa compra está do padrão de comportamento histórico daquela pessoa.",
          saida: "Aprovação instantânea ou bloqueio preventivo com aviso no app.",
          contraprova: "Regras manuais rígidas (ex: 'bloquear compras acima de R$ 500') bloqueariam compras legítimas de quem viaja e deixariam passar fraudes pequenas de R$ 50."
        }
      ],
      planoB: "Caso a conexão de internet do laboratório oscile, Laura & Maria conduzirão a oficina em formato impresso/caderno físico, preenchendo a tabela do Raio-X em duplas e transferindo para o arquivo digital na aula seguinte."
    },

    perguntasAlunos: [
      {
        numero: 1,
        duvida: "Se a Inteligência Artificial já existe desde os anos 1950 (Turing e Dartmouth), por que ela 'explodiu' e virou febre só agora?",
        resposta: "A teoria matemática e os algoritmos fundamentais já existiam há quase 70 anos, mas faltavam dois ingredientes físicos indispensáveis: um volume astronômico de dados digitalizados pela internet (Big Data) e chips de processamento gráfico hiperpotentes (GPUs). Quando a tríade Dados + Chips + Algoritmos se encontrou na última década, a IA deu o salto gigantesco que hoje vemos no bolso e nos serviços.",
        pontoDidatico: "Conecte a linha do tempo (Slide 7) diretamente aos 3 Ingredientes (Slide 10), demonstrando que a ciência depende de infraestrutura tecnológica para florescer."
      },
      {
        numero: 2,
        duvida: "Isso tudo não é só um monte de comandos IF/ELSE (Se/Então) gigante programado por alguém?",
        resposta: "Na programação tradicional, sim: cada regra e exceção precisa ser escrita manualmente por um ser humano (como uma receita de bolo estrita). No aprendizado de máquina (Machine Learning), nenhum programador escreveu regras para cada situação: o computador analisou milhões de exemplos e ajustou pesos matemáticos sozinho para reconhecer padrões. Se fosse IF/ELSE humano, seria humanamente impossível programar todas as variações de um rosto ou da fala humana!",
        pontoDidatico: "Fixe a metáfora do Slide 9: regra estrita prescrita versus observação estatística de padrões em escala."
      },
      {
        numero: 3,
        duvida: "Se o corretor do celular, o filtro antispam e o reconhecimento de voz são IA, por que a gente nunca chamou isso de Inteligência Artificial?",
        resposta: "Isso é exatamente o que chamamos de 'Teorema de Larry Tesler' ou 'Efeito IA': quando uma tecnologia de inteligência artificial funciona com extrema estabilidade e vira rotina no nosso dia a dia, ela perde o mistério de 'mágica' e passa a ser chamada apenas de 'recurso comum de informática'. A IA costuma parecer IA apenas enquanto ainda é novidade ou está no cinema.",
        pontoDidatico: "Reforce o conceito de invisibilidade da IA cotidiana trabalhado nos Slides 14 e 15."
      },
      {
        numero: 4,
        duvida: "A IA pode desenvolver sentimentos, ter consciência própria e se rebelar contra a humanidade?",
        resposta: "Cientificamente não há base real para isso. A IA que existe no mundo é 100% IA Estreita (ANI): não possui biologia, desejos, instinto de sobrevivência, sentimentos ou consciência. Ela é código calculando probabilidades estatísticas a partir de dados do passado. O risco real da IA não são robôs rebeldes da ficção científica, mas o uso humano irresponsável com dados tendenciosos (vieses) ou decisões automatizadas sem supervisão ética.",
        pontoDidatico: "Redirecione o pânico da ficção científica (Slides 12, 16 e 17) para a responsabilidade ética e governança humana no mundo real."
      },
      {
        numero: 5,
        duvida: "Se a IA responde com tanta certeza, fluência e vocabulário formal, como descubro se ela está inventando (alucinando)?",
        resposta: "A IA não tem compromisso ético com a verdade nem 'compreende' o sentido real das palavras: ela prevê a combinação estatística mais provável e gramaticalmente convincente de termos. Por isso, fatos históricos, leis, autores, referências e cálculos nunca devem ser aceitos cegamente. A IA é uma excelente copiloto para sugerir caminhos, mas a validação factual e o senso crítico final são sempre 100% responsabilidade do usuário (Human-in-the-loop).",
        pontoDidatico: "Ensine a postura de verificação ativa contra a alucinação (Slide 18), antecipando a postura crítica necessária para o ChatGPT no Encontro 2."
      },
      {
        numero: 6,
        duvida: "Usar IA no trabalho, nos estudos ou para escrever e-mails não é uma forma de trapaça ou plágio?",
        resposta: "Usar IA para copiar e colar respostas cegas sem ler, sem pensar e sem declarar autoria é plágio e desonestidade. Por outro lado, usar a IA como copiloto — para destravar a folha em branco, pedir analogias, organizar tópicos de uma aula ou revisar clareza — é potencialização do intelecto humano. A calculadora não acabou com a matemática; ela tirou o esforço mecânico da conta para permitir que o humano resolva problemas mais complexos.",
        pontoDidatico: "Estabeleça a linha clara entre trapaça passiva e coprodução crítica / copilotagem ética (Slide 20)."
      },
      {
        numero: 7,
        duvida: "A IA vai roubar todos os empregos e substituir os profissionais?",
        resposta: "A IA automatiza tarefas repetitivas, mecânicas e burocráticas, mas não substitui competências humanas fundamentais: empatia, discernimento ético, criatividade contextual, afeto e negociação. A IA não vai substituir o professor ou o profissional consciente, mas o profissional que aprende a usar IA como copiloto terá enorme vantagem sobre quem a ignora. Este curso existe para nos colocar no controle dessa transformação!",
        pontoDidatico: "Acolha a ansiedade profissional (Slide 21) e empodere os alunos a assumirem o papel de autores e gestores de tecnologia."
      },
      {
        numero: 8,
        duvida: "A IA pode ler minhas mensagens, fotos e dados pessoais sem permissão? O Brasil tem leis para nos proteger?",
        resposta: "Sim, no Brasil temos a LGPD (Lei Geral de Proteção de Dados) e o novo Marco Legal da IA (PL 2338/2023), que exigem consentimento, finalidade legítima e respeito à privacidade para o uso de dados de cidadãos. Além disso, o Plano Brasileiro de IA (PBIA) investe R$ 23 bilhões para garantir que o país desenvolva tecnologia própria e soberana, aplicando IA em benefício público (como no SUS) e capacitando a população.",
        pontoDidatico: "Valorize a dimensão cidadã, jurídica e soberana da tecnologia (Slides 22 a 24), desmistificando a ideia de que a internet é uma 'terra sem leis'."
      },
      {
        numero: 9,
        duvida: "Eu não sei nada de matemática, não sou da área de exatas e tenho receio de computador. Eu vou conseguir acompanhar as aulas práticas?",
        resposta: "Com certeza absoluta! O minicurso foi construído com linguagem 100% acessível, sem exigir qualquer fórmula matemática ou conhecimento de programação. A única habilidade necessária é a nossa capacidade humana de nos comunicar em português e ter curiosidade. Ter um e-mail válido (Slide 6) é o nosso único ponto de partida e estaremos juntas ao lado de vocês em todas as etapas no laboratório.",
        pontoDidatico: "Garanta o acolhimento afetivo e a redução de ansiedade técnica (Slides 5 e 6), fortalecendo o vínculo de confiança entre a dupla docente e a turma."
      }
    ],

    divisaoPapeis: [
      { bloco: "Bloco 1 (00h-30m)", tema: "Acolhimento, Contrato Pedagógico & Estrutura (Slides 1 a 6)", papel: "radio" },
      { bloco: "Bloco 2 (30m-55m)", tema: "Gênese Histórica, Definição & Os 3 Ingredientes (Slides 7 a 10)", papel: "radio" },
      { bloco: "Bloco 3 (55m-85m)", tema: "A IA Invisível do Dia a Dia & Teorema de Tesler (Slides 11 a 15)", papel: "radio" },
      { bloco: "Intervalo (15m)", tema: "Intervalo Pedagógico / Café com Prosa (Atalho Tecla I)", papel: "ambas" },
      { bloco: "Bloco 4 (100m-130m)", tema: "Desmistificando a IA – Os 5 Grandes Mitos (Slides 16 a 21)", papel: "radio" },
      { bloco: "Bloco 5 (130m-150m)", tema: "Brasil, Cidadania & Legislação (Slides 22 a 24)", papel: "radio" },
      { bloco: "Bloco 6 (150m-180m)", tema: "Laboratório Prático de E-mail, Portfólio Digital & Fechamento (Slides 25 a 27)", papel: "ambas" }
    ],

    dossies: dossies
  };

  // Exposição Global no Navegador (Window) e Node.js
  if (typeof window !== 'undefined') {
    window.ENCONTRO_1_DATA = ENCONTRO_1_DATA;
    window.CURSO_IA_CURRENT_DATA = ENCONTRO_1_DATA;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ENCONTRO_1_DATA;
  }

  global.ENCONTRO_1_DATA = ENCONTRO_1_DATA;
  global.CURSO_IA_CURRENT_DATA = ENCONTRO_1_DATA;

})(typeof window !== 'undefined' ? window : globalThis);
