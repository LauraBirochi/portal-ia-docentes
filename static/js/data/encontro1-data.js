/**
 * Base de Dados Completa – Módulo do Encontro 1 (21 Slides)
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32 Horas Total)
 * Tema: Warm Paper & Walnut
 */

const ENCONTRO_1_DATA = {
  moduloInfo: {
    numero: 1,
    total: 7,
    titulo: "Desmistificando a IA: Da Ficção Científica à Realidade",
    subtitulo: "Fundamentos, a inteligência invisível do dia a dia, desconstrução de mitos e como as máquinas aprendem",
    cargaHoraria: "Encontro 1 • 3 horas presenciais (180 min)",
    modalidade: "Presencial em Laboratório X",
    publico: "Iniciantes e público geral (sem pré-requisitos técnicos)",
    ferramentaPrincipal: "Navegador Web + Template do Portfólio Digital individual",
    avaliacao: "Atividade 1 no Portfólio Digital Contínuo (0,5 ponto)"
  },

  // =========================================================================
  // ABA 1: O FIO DA MEADA (NARRATIVA & CONCEITOS)
  // =========================================================================
  fioDaMeada: {
    objetivoCentral: "Qual é a grande mensagem que os alunos precisam levar hoje?",
    mensagemChave: "A IA já faz parte da nossa vida há anos sem que a gente perceba; ela não é mágica nem tem consciência: é matemática, probabilidade e reconhecimento de padrões em dados.",
    explicacaoObjetivo: "Nosso objetivo hoje não é ensinar código ou fórmulas, mas dar à turma o discernimento para reconhecer a IA invisível que já opera no bolso, separar os mitos do cinema da tecnologia real e entender a lógica de aprendizado por dados.",
    atos: [
      {
        ato: 1,
        tempo: "00h00 às 00h45",
        titulo: "Acolhimento & Onde a IA Já Está",
        desc: "Acolhemos a turma, aliviamos o medo técnico e revelamos o choque da invisibilidade: a IA já opera nos smartphones (câmeras, biometria), bancos (antifraude em <300ms), rotas e e-mails (99,9% spam barrado).",
        gatilho: "Vocês achavam que precisavam abrir o ChatGPT para usar IA? Pois saibam que vocês já usam IA dezenas de vezes por dia sem perceber!"
      },
      {
        ato: 2,
        tempo: "00h45 às 01h25",
        titulo: "Desmistificando a IA & Como ela Aprende",
        desc: "Com base na IA especializada que acabamos de ver, desmontamos os 5 grandes mitos do cinema (consciência, infalibilidade, medo da substituição) e explicamos como as máquinas aprendem por repetição e autocompletar de linguagem.",
        gatilho: "Se o algoritmo que detecta fraude bancária não sabe escrever um poema, ele não tem consciência: é cálculo estatístico focado em uma única tarefa!"
      },
      {
        ato: 3,
        tempo: "01h25 às 03h00",
        titulo: "Mão na Massa no Laboratório & Fechamento",
        desc: "Oficina prática: Garantir o acesso ao e-mail no computador do laboratório, realizar o Raio-X da IA no Portfólio Digital (0,5 pt) e fechar com a ponte para a IA Generativa do Encontro 2.",
        gatilho: "Hoje entendemos a IA que prevê e classifica. No Encontro 2, abriremos o ChatGPT para dominar a IA que CRIA!"
      }
    ],
    glossario: [
      {
        termo: "IA Estreita (ANI / Narrow AI)",
        def: "É 100% da IA existente no planeta hoje. Hiperespecialista em apenas UMA tarefa específica (ex: detectar fraude bancária, transcrever voz, sugerir rotas). Não possui consciência nem sentimentos."
      },
      {
        termo: "IA Geral (AGI)",
        def: "Conceito puramente teórico de ficção científica. Máquina com flexibilidade intelectual humana completa. NÃO existe no mundo real."
      },
      {
        termo: "Fotografia Computacional",
        def: "Uso de redes neurais e processadores de IA (NPU) em smartphones para capturar múltiplos quadros, separar planos e gerar fotos nítidas instantaneamente."
      },
      {
        termo: "Machine Learning (ML)",
        def: "Subcampo da IA onde o computador encontra padrões e ajusta equações matemáticas sozinho com base em milhões de dados históricos."
      },
      {
        termo: "Efeito IA (Invisibilidade)",
        def: "Fenômeno sociotécnico: quando uma tecnologia de IA funciona com estabilidade e perfeição no cotidiano, as pessoas deixam de chamá-la de 'IA' e passam a chamá-la apenas de 'software' ou 'recurso'."
      },
      {
        termo: "Alucinação de Modelo",
        def: "Quando a IA gera respostas gramaticalmente perfeitas e convincentes, mas com fatos, datas ou leis completamente inventados por pura combinação probabilística."
      }
    ]
  },

  // =========================================================================
  // ABA 2: SLIDES & ROTEIRO VISUAL (21 SLIDES)
  // =========================================================================
  slidesComNotas: [
    // -----------------------------------------------------------------------
    // BLOCO 1: ACOLHIMENTO, CONTRATO PEDAGÓGICO & ESTRUTURA (SLIDES 1 A 6)
    // -----------------------------------------------------------------------
    {
      numero: 1,
      id: 1,
      tipo: "capa",
      categoria: "Abertura",
      titulo: "Inteligência Artificial: Fundamentos e Boas Práticas",
      subtitulo: "Encontro 1: Desmistificando a IA – Da Ficção Científica à Realidade",
      detalhes: ["32 Horas Certificadas • 7 Encontros", "Docência: Laura & Maria", "Coordenação: Lúcio Rodrigo"],
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
        tempoSugerido: "7 minutos"
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
          desc: "Saber identificar quando a IA erra (alucinações), proteger seus dados pessoais e usar a ferramenta com responsabilidade."
        }
      ],
      notasProfessora: {
        objetivoSlide: "Apresentar a proposta de valor do curso: não formar técnicos, mas cidadãos e profissionais autônomos.",
        oQueFalar: "Destaque: 'Nosso objetivo não é fazer vocês decorarem termos em inglês, mas sim aprender a usar a IA como uma calculadora moderna para acelerar suas ideias com senso crítico e segurança.'",
        tempoSugerido: "6 minutos"
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
        tempoSugerido: "7 minutos"
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
        { icone: "🛠️", titulo: "Missão no Laboratório de Hoje", desc: "No final da aula de hoje, vamos aos computadores testar se todos conseguem abrir o seu e-mail." }
      ],
      notasProfessora: {
        objetivoSlide: "Evitar o gargalo comum do Encontro 2 (metade da sala perder tempo tentando recuperar senha de e-mail).",
        oQueFalar: "Seja muito empática: 'Todo mundo aqui tem um e-mail cadastrado no celular, mas muitos não lembram a senha de cabeça. Hoje, na nossa parte prática no laboratório, vamos garantir que cada um de vocês consiga abrir o seu e-mail com calma. Se precisar criar um novo, nós fazemos juntos!'",
        tempoSugerido: "8 minutos"
      }
    },

    // -----------------------------------------------------------------------
    // BLOCO 2: A IA INVISÍVEL DO DIA A DIA / ONDE A IA JÁ ESTÁ (SLIDES 7 A 10)
    // -----------------------------------------------------------------------
    {
      numero: 7,
      id: 7,
      tipo: "apresentacao",
      categoria: "A IA Invisível",
      titulo: "O Paradoxo da Invisibilidade: A IA que Opera no seu Bolso",
      subtitulo: "Você não precisa abrir um chatbot para usar IA: ela já processa sua realidade em milissegundos",
      itensDestaque: [
        {
          icone: "📸",
          titulo: "Fotografia Computacional nos Celulares",
          desc: "Em qualquer iPhone (Deep Fusion), Samsung Galaxy (ProVisual) ou Google Pixel (Night Sight), não é apenas a lente que tira a foto. Uma rede neural (NPU) combina dezenas de imagens em 100ms para ajustar luz, nitidez e cores."
        },
        {
          icone: "👤",
          titulo: "Biometria e Reconhecimento Facial",
          desc: "Sensores leem milhares de pontos invisíveis de infravermelho. A IA reconhece seu rosto no escuro, com óculos ou com novo corte de cabelo por padrão geométrico contínuo."
        },
        {
          icone: "⚡",
          titulo: "O 'Efeito IA' (Invisibilidade)",
          desc: "Fenômeno real: quando uma Inteligência Artificial se torna 100% eficiente e estável no dia a dia, nós paramos de chamá-la de 'IA' e passamos a chamá-la apenas de 'recurso'."
        }
      ],
      notasProfessora: {
        objetivoSlide: "Provocar o primeiro choque de realidade: provar com exemplos de hardware que todos na sala já são usuários ativos de IA.",
        oQueFalar: "Peçam para a turma olhar para o próprio celular: 'Muitos pensam que a IA começou agora com o ChatGPT. Mas vocês sabiam que toda vez que tiram uma foto com um iPhone, Samsung ou Pixel, uma rede neural dedicada roda em milissegundos para montar a imagem? A IA real não tem pernas nem fala com você: ela é a engenharia invisível que faz seu aparelho funcionar!'",
        tempoSugerido: "7 minutos"
      },
      embasamentoCientifico: {
        titulo: "Fotografia Computacional, NPUs e Biometria (Para Docentes de T.I)",
        resumo: "Como redes neurais convolucionais (CNNs), processadores neurais de borda (NPUs) e fusão multi-frame substituíram a ótica analógica e tornaram a IA a espinha dorsal dos smartphones.",
        topicos: [
          {
            titulo: "1. Fotografia Computacional Multi-Frame & Alinhamento Sub-pixel",
            conteudo: "Ao pressionar o obturador, o smartphone não tira uma foto: ele recupera um buffer circular contínuo de até 15 frames RAW subexpostos. Modelos profundos estimam o <em>Optical Flow</em> em grade densa, alinham os quadros compensando o tremor da mão (<em>Homography Alignment</em>) e fundem os sinais através de redes de desruído e super-resolução, superando as limitações físicas de difração de sensores de 1/1.5\":<br><br><div class='tech-formula-box'>I_{final}(x,y) = \\sum_{k=1}^N w_k(x,y) \\cdot \\mathcal{W}(I_k, \\mathbf{u}_k)(x,y)</div>"
          },
          {
            titulo: "2. Arquitetura de Hardware Dedicado: NPUs e Aceleração de Tensores",
            conteudo: "Processar redes neurais convolucionais e transformadores visuais em tempo real (60 fps) esgotaria a bateria em CPUs tradicionais. Os smartphones utilizam <strong>NPUs (Neural Processing Units / Apple Neural Engine / Tensor TPU)</strong>: matrizes de multiplicação e acumulação sistólica (MAC) otimizadas para operações tensoriais em baixa precisão quantizada (INT8 e FP16), atingindo de 15 a 45 TOPS (Trilhões de Operações por Segundo) com consumo inferior a 2 Watts."
          },
          {
            titulo: "3. Reconhecimento Facial 3D: Embeddings Profundos & Triplet Loss",
            conteudo: "A biometria facial de ponta (ex: Apple FaceID, Android Biometric) emite mais de 30.000 pontos infravermelhos estruturados (VCSEL) gerando uma malha de profundidade 3D. Uma rede neural profunda projeta esses dados em um espaço latente contínuo de 128 a 512 dimensões (<em>FaceNet / Schroff et al.</em>). A autenticação não compara pixels, mas calcula a distância Euclidiana <em>L2</em> entre o vetor atual e o vetor de referência:<br><br><div class='tech-formula-box'>\\| f(x_i^a) - f(x_i^p) \\|_2^2 + \\alpha &lt; \\| f(x_i^a) - f(x_i^n) \\|_2^2</div>"
          },
          {
            titulo: "4. O Teorema do 'Efeito IA' (Larry Tesler & John McCarthy)",
            conteudo: "Epistemologicamente, o 'Efeito IA' (formalizado como o <em>Teorema de Tesler</em>) estabelece que: <em>'Inteligência Artificial é tudo aquilo que ainda não foi totalmente resolvido na computação'</em>. Assim que um problema clássico de visão computacional, reconhecimento de voz ou roteamento de tráfego é resolvido de forma estável e massiva por redes neurais, o público e a indústria deixam de rotulá-lo como IA e o reclassificam como algoritmo determinístico de sistema operacional."
          }
        ],
        fontesCientificas: [
          {
            autor: "Hasinoff et al. (Google Research / SIGGRAPH Asia 2016)",
            titulo: "Burst photography for high dynamic range and low-light imaging on mobile cameras",
            publicacao: "ACM Transactions on Graphics (TOG)",
            relevancia: "Artigo seminal que definiu a base do HDR+ no Google Pixel e a fotografia computacional multi-frame moderna.",
            link: "https://graphics.stanford.edu/papers/bursthdr/hasinoff-bursthdr-sigasia16.pdf"
          },
          {
            autor: "Schroff, Kalenichenko & Philbin (Google, CVPR 2015)",
            titulo: "FaceNet: A Unified Embedding for Face Recognition and Clustering",
            publicacao: "IEEE Conference on Computer Vision and Pattern Recognition",
            relevancia: "Criação do método de embeddings faciais via Triplet Loss que fundamenta a biometria neural em smartphones.",
            link: "https://arxiv.org/abs/1503.03832"
          },
          {
            autor: "Levoy, M. (Stanford University & Google, CACM 2020)",
            titulo: "Synthetic Depth-of-Field and Computational Photography in Mobile Devices",
            publicacao: "Communications of the ACM",
            relevancia: "Fundamentação do modo retrato, mapas de profundidade via IA e superação das restrições ópticas em lentes móveis.",
            link: "https://cacm.acm.org/magazines/2020/12/248795-synthetic-depth-of-field/fulltext"
          },
          {
            autor: "Jouppi et al. (Google / ISCA 2017 & 2021)",
            titulo: "In-Datacenter and Edge Performance Analysis of a Tensor Processing Unit",
            publicacao: "ACM/IEEE International Symposium on Computer Architecture",
            relevancia: "Arquitetura formal de aceleradores neurais (TPUs/NPUs) para execução de tensores com alta eficiência energética.",
            link: "https://arxiv.org/abs/1704.04760"
          },
          {
            autor: "Pamela McCorduck (2004)",
            titulo: "Machines Who Think: A Personal Inquiry into the History and Prospects of AI",
            publicacao: "A K Peters/CRC Press (2nd Edition)",
            relevancia: "Documentação histórica e formalização do Efeito IA e do Teorema de Larry Tesler na Ciência da Computação.",
            link: "https://www.routledge.com/Machines-Who-Think-A-Personal-Inquiry-into-the-History-and-Prospects-of/McCorduck/p/book/9781568812052"
          }
        ]
      }
    },
    {
      numero: 8,
      id: 8,
      tipo: "grid-exemplos",
      categoria: "Fatos & Provas Reais",
      titulo: "A IA Silenciosa Aplicada",
      subtitulo: "Números auditáveis que comprovam como a IA já sustenta a rotina do planeta todos os dias",
      exemplos: [
        {
          icone: "🛡️",
          nome: "Filtros de E-mail e Phishing",
          app: "Gmail / Outlook",
          papel: "<strong style='color: var(--text-amber);'>+99,9% dos spams e golpes</strong> são barrados antes da sua caixa de entrada por modelos de classificação neural em tempo real."
        },
        {
          icone: "💳",
          nome: "Prevenção a Fraudes Bancárias",
          app: "Cartões / Pix / Bancos",
          papel: "Em <strong style='color: var(--text-amber);'>menos de 300 milissegundos</strong>, a IA cruza mais de 500 variáveis (horário, localização, valor, comportamento) para aprovar ou barrar transações suspeitas."
        },
        {
          icone: "🗺️",
          nome: "Roteamento Dinâmico de Trânsito",
          app: "Google Maps / Waze",
          papel: "Telemetria de milhões de celulares em movimento permite <strong style='color: var(--text-amber);'>prever o tráfego dos próximos 20 minutos</strong> e recalcular rotas ativamente."
        },
        {
          icone: "🎯",
          nome: "Buscas e Recomendações",
          app: "Google / Streaming / Mídia",
          papel: "<strong style='color: var(--text-amber);'>Mais de 75% do conteúdo consumido</strong> em streaming e buscas vem de curadoria estatística e modelos de intenção (RankBrain)."
        }
      ],
      notasProfessora: {
        objetivoSlide: "Apresentar dados concretos e inquestionáveis da indústria que provam a escala monumental da IA no cotidiano.",
        oQueFalar: "Apresentem os quatro quadrantes com ênfase nos números: 'Vejam que fascinante: 99,9% dos vírus no e-mail são parados por IA. Quando você passa o cartão, a IA decide em 300 milissegundos se a compra é legítima. E o mapa prevê o engarrafamento antes de você chegar lá. Isso não é mágica, é cálculo de probabilidade em larga escala!'",
        tempoSugerido: "8 minutos"
      },
      embasamentoCientifico: {
        titulo: "Sistemas Preditivos de Alta Escala, GNNs e Filtragem Neural (Para Docentes de T.I)",
        resumo: "Arquitetura técnica, grafos dinâmicos e modelos de aprendizado de máquina que sustentam segurança bancária, filtragem de spam e tráfego em tempo real.",
        topicos: [
          {
            titulo: "1. Filtragem de E-mails com Vetorização Resiliente (Google RETVec)",
            conteudo: "Modelos de segurança modernos no Gmail e Outlook utilizam arquiteturas como o <strong>RETVec (Resilient & Efficient Text Vectorizer / Google Research)</strong>. Em vez de listas de palavras proibidas, o modelo converte caracteres em representações visuais compactas (UTF-8 bytes to visual embeddings), neutralizando ataques adversariais como homóglifos ('P@ypal', 'B4nco') com inferência ultrarrápida de menos de 1 milissegundo por mensagem."
          },
          {
            titulo: "2. Detecção de Anomalias Financeiras via Redes Neurais em Grafos (GNNs)",
            conteudo: "Redes de pagamento (Visa, Mastercard, Nubank) modelam transações financeiras como grafos heterogêneos dinâmicos (nós = usuários/lojas, arestas = transferências). Modelos como <strong>Temporal Graph Networks (TGNs)</strong> e árvores de decisão aumentadas por gradiente (LightGBM) calculam a probabilidade de fraude em inferência sub-300ms:<br><br><div class='tech-formula-box'>P(Fraude = 1 \\mid x, \\mathcal{G}_{t}) = \\sigma\\left( \\mathbf{W} \\cdot \\text{Aggregate}(\\{h_v^{(t)} : v \\in \\mathcal{N}(u)\\} ) \\right)</div>"
          },
          {
            titulo: "3. Previsão de Tráfego Spatio-Temporal no Google Maps (DeepMind ST-GNN)",
            conteudo: "A previsão de rotas do Google Maps e Waze foi revolucionada pela colaboração com a <strong>DeepMind</strong> usando Redes Neurais Grafos Espaço-Temporais (Spatial-Temporal Graph Neural Networks). A malha viária é dividida em 'Supersegments' que agregam telemetria anônima instantânea e séries temporais históricas, prevendo o fluxo dinâmico até 60 minutos no futuro com redução de até 50% de erros em cidades congestionadas."
          },
          {
            titulo: "4. Sistemas de Recomendação 'Two-Tower' e Aprendizado por Reforço",
            conteudo: "Plataformas como YouTube, Spotify e Netflix utilizam a arquitetura neural de <strong>Duas Torres (Two-Tower Architecture)</strong>: uma rede neural codifica o vetor de contexto do usuário e outra codifica os milhões de itens do catálogo. A busca pelo conteúdo ideal é resolvida em milissegundos via busca de vizinhos mais próximos no espaço vetorial (<em>Approximate Nearest Neighbors - ANN</em>)."
          }
        ],
        fontesCientificas: [
          {
            autor: "Google Research & Security (2023)",
            titulo: "RETVec: The next-generation text vectorizer for efficient and resilient multilingual NLP & Email Security",
            publicacao: "Google Open Source & arXiv Security",
            relevancia: "Modelo de IA de código aberto do Google que protege mais de 1 bilhão de usuários do Gmail contra phishing e spam.",
            link: "https://arxiv.org/abs/2302.09207"
          },
          {
            autor: "DeepMind & Google Maps Team (2020 / 2021)",
            titulo: "Traffic prediction with Spatial-Temporal Graph Neural Networks in Google Maps",
            publicacao: "DeepMind Research & JMLR",
            relevancia: "Pesquisa que implementou modelos de grafos no Google Maps para prever tempos de viagem e engarrafamentos.",
            link: "https://deepmind.google/discover/blog/traffic-prediction-with-advanced-graph-neural-networks/"
          },
          {
            autor: "Wang et al. (ACM SIGKDD / IEEE TKDE, 2021)",
            titulo: "A Comprehensive Survey on Graph Neural Networks for Anti-Money Laundering and Fraud Detection",
            publicacao: "IEEE Transactions on Knowledge and Data Engineering",
            relevancia: "Revisão formal sobre como GNNs detectam anomalias e fraudes bancárias em milissegundos em dados relacionais.",
            link: "https://arxiv.org/abs/2106.15780"
          },
          {
            autor: "Covington, Adams & Sargin (Google / ACM RecSys)",
            titulo: "Deep Neural Networks for YouTube Recommendations",
            publicacao: "Proceedings of the 10th ACM Conference on Recommender Systems",
            relevancia: "Artigo fundamental sobre sistemas de recomendação em escala planetária baseado em Deep Learning e Embeddings.",
            link: "https://static.googleusercontent.com/media/research.google.com/pt-BR//pubs/archive/45530.pdf"
          }
        ]
      }
    },
    {
      numero: 9,
      id: 9,
      tipo: "apresentacao",
      categoria: "Consciência Crítica",
      titulo: "O Ponto Cego: Quem Toma as Microdecisões por Você?",
      subtitulo: "A importância de compreender que a tecnologia que usamos não é neutra",
      itensDestaque: [
        {
          icone: "🔍",
          titulo: "A Ilusão da 'Internet Igual para Todos'",
          desc: "Se duas pessoas pesquisarem exatamente a mesma palavra no mesmo minuto, os resultados não serão iguais. A IA personaliza a vitrine de acordo com seu perfil e histórico."
        },
        {
          icone: "📦",
          titulo: "A Logística que Abastece o Mundo",
          desc: "Grandes centros de distribuição, portos e frotas aéreas dependem de IA preditiva para prever demandas, otimizar estoques e evitar quebras de suprimentos."
        },
        {
          icone: "👁️",
          titulo: "Do Usuário Passivo ao Cidadão Crítico",
          desc: "Entender como a IA invisível funciona liberta você da ingenuidade: você passa a reconhecer os filtros e intenções por trás de cada serviço digital."
        }
      ],
      notasProfessora: {
        objetivoSlide: "Despertar a postura de cidadão e profissional consciente, mostrando que todo serviço digital possui intenção de design e otimização.",
        oQueFalar: "Provoquem com gentileza: 'Se a IA já escolhe o que você lê, as músicas que ouve e as rotas por onde dirige, quem está tomando as microdecisões do seu dia? O objetivo do nosso curso é tirar você da posição de consumidor passivo e transformá-lo em alguém que entende e pilota a tecnologia com autonomia!'",
        tempoSugerido: "7 minutos"
      }
    },
    {
      numero: 10,
      id: 10,
      tipo: "quebra-gelo",
      categoria: "Ponte para os Mitos",
      titulo: "A Grande Provocação: Por que Temos Medo da IA?",
      subtitulo: "Se já convivemos com IA há anos no bolso e no banco, de onde vêm as ideias de robôs rebeldes?",
      colunas: [
        {
          tag: "A Ficção & Os Mitos do Cinema",
          icone: "🎬",
          itens: [
            "Robôs humanoides com sentimentos, revolta e sede de poder.",
            "Uma inteligência suprema e onisciente que sabe tudo sobre tudo.",
            "Medo paralisante de que as máquinas tomem o controle do planeta amanhã."
          ]
        },
        {
          tag: "A Realidade: IA Estreita (Narrow AI)",
          icone: "⚙️",
          itens: [
            "100% da IA do mundo hoje é 'Estreita': hiperespecializada em UMA só tarefa.",
            "A IA que bloqueia fraude bancária não sabe sugerir uma música nem escrever um poema.",
            "Não há consciência, dor, sentimentos ou vontades: é matemática pura sobre dados."
          ]
        }
      ],
      notasProfessora: {
        objetivoSlide: "Criar o gancho perfeito para a sequência de 5 mitos, desmistificando o conceito de IA Estreita versus ficção científica.",
        oQueFalar: "Façam a grande ponte reflexiva: 'Se a gente já confia na IA para cuidar do nosso dinheiro e guiar nosso carro, por que quando ouvimos falar em IA pensamos em robôs dominando o mundo? Porque confundimos a tecnologia real (que é hiperespecializada e sem consciência) com os filmes de ficção! A partir de agora, vamos desmontar os 5 maiores mitos que impedem as pessoas de usarem IA!'",
        tempoSugerido: "7 minutos"
      }
    },

    // -----------------------------------------------------------------------
    // BLOCO 3: DESMISTIFICANDO A IA – OS 5 GRANDES MITOS (SLIDES 11 A 15)
    // -----------------------------------------------------------------------
    {
      numero: 11,
      id: 11,
      tipo: "quebra-gelo",
      categoria: "Desmistificando a IA",
      titulo: "Mito 1: 'A IA pensa, sente e tem consciência própria'",
      subtitulo: "A diferença fundamental entre imitar a linguagem humana e ter compreensão real",
      colunas: [
        {
          tag: "O Mito da Consciência",
          icone: "🤖",
          itens: [
            "Achar que a IA tem vontades, sentimentos, desejos ou consciência.",
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
        tempoSugerido: "6 minutos"
      }
    },
    {
      numero: 12,
      id: 12,
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
        tempoSugerido: "7 minutos"
      }
    },
    {
      numero: 13,
      id: 13,
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
          icone: "👵🏽",
          titulo: "Para Todas as Idades",
          desc: "Professores, aposentados, comerciantes, estudantes: qualquer pessoa que saiba ler e escrever pode usar plenamente."
        }
      ],
      notasProfessora: {
        objetivoSlide: "Elevar a autoestima técnica dos alunos que não têm formação em exatas ou TI.",
        oQueFalar: "Olhe para a sala e tranquilize: 'Antigamente, para mandar no computador precisamos aprender programação avançada. Hoje, a linguagem de instrução da IA Generativa é o bom português. Se você sabe pedir uma informação com clareza, você já sabe a base de um bom prompt.'",
        tempoSugerido: "5 minutos"
      }
    },
    {
      numero: 14,
      id: 14,
      tipo: "quebra-gelo",
      categoria: "O Futuro do Trabalho e Estudos",
      titulo: "Mito 4: 'A IA vai substituir os seres humanos em tudo'",
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
    {
      numero: 15,
      id: 15,
      tipo: "quebra-gelo",
      categoria: "Ética & Autoria",
      titulo: "Mito 5: 'Usar IA significa necessariamente trapacear'",
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
        tempoSugerido: "7 minutos"
      }
    },

    // -----------------------------------------------------------------------
    // BLOCO 4: COMO A IA APRENDE (SLIDES 16 A 18)
    // -----------------------------------------------------------------------
    {
      numero: 16,
      id: 16,
      tipo: "apresentacao",
      categoria: "Como a IA Funciona",
      titulo: "A Grande Ideia: Como uma IA Realmente Aprende?",
      subtitulo: "A mudança de regras manuais para o aprendizado por exemplos do dia a dia",
      itensDestaque: [
        {
          icone: "📋",
          titulo: "Antigamente: Regras Rígidas",
          desc: "O computador funcionava como uma calculadora comum: só executava o que tinha um manual escrito passo a passo. Se faltasse uma vírgula, ele travava."
        },
        {
          icone: "👶🏽",
          titulo: "Hoje: Aprendendo com Exemplos",
          desc: "A IA aprende como uma criança reconhecendo animais: não ensinamos biologia, mostramos milhares de fotos de gatos até ela reconhecer qualquer gato sozinha."
        },
        {
          icone: "💡",
          titulo: "O Segredo da Aprendizagem",
          desc: "A IA não tem consciência; ela apenas descobriu os padrões em milhões de livros, textos e conversas humanas arquivadas na internet."
        }
      ],
      notasProfessora: {
        objetivoSlide: "Construir a intuição de que a IA aprende por repetição de exemplos, sem recorrer a jargões matemáticos.",
        oQueFalar: "Explique com calma e acolhimento: 'Pensem na IA como alguém que leu uma biblioteca inteira e aprendeu a identificar como as pessoas escrevem e pensam. Ela não memorizou regras chatas; ela aprendeu a reconhecer os padrões de tanto ver exemplos.'",
        tempoSugerido: "8 minutos"
      }
    },
    {
      numero: 17,
      id: 17,
      tipo: "apresentacao",
      categoria: "Como a IA Funciona",
      titulo: "O Segredo da Linguagem: O 'Super Autocompletar'",
      subtitulo: "Como o ChatGPT e outras IAs conseguem conversar com você em bom português",
      itensDestaque: [
        {
          icone: "📱",
          titulo: "Igual ao Teclado do WhatsApp",
          desc: "Quando você digita 'Bom...', o seu celular já sugere 'dia'. A IA faz exatamente isso, calculando a palavra mais provável que deve vir a seguir."
        },
        {
          icone: "🧠",
          titulo: "Em Escala Gigantesca",
          desc: "A diferença é que a IA consegue ler a sua pergunta inteira, entender o contexto e gerar frases e parágrafos completos que fazem sentido."
        },
        {
          icone: "⚠️",
          titulo: "Por que Ela às Vezes Erra?",
          desc: "Como ela busca o que 'soa bem' e não o que é 'verdade', às vezes ela inventa dados com muita certeza. Por isso o olho humano é insubstituível!"
        }
      ],
      notasProfessora: {
        objetivoSlide: "Desmistificar o funcionamento dos Modelos de Linguagem usando a analogia universal do corretor de celular.",
        oQueFalar: "Peça para os alunos olharem para seus celulares: 'Quem aqui já viu o teclado do celular sugerir a próxima palavra? O ChatGPT é esse mesmo motorzinho de autocompletar, só que com a capacidade de ler um livro inteiro e responder qualquer pergunta em segundos.'",
        tempoSugerido: "8 minutos"
      },
      embasamentoCientifico: {
        titulo: "Fundamentação Matemática & Arquitetura LLM (Para Docentes de T.I)",
        resumo: "Por que a afirmação de que 'o ChatGPT é um super autocompletar' é rigorosamente exata do ponto de vista da Ciência da Computação e Processamento de Linguagem Natural (NLP).",
        topicos: [
          {
            titulo: "1. Modelagem Autorregressiva (Next-Token Prediction)",
            conteudo: "Matematicamente, Grandes Modelos de Linguagem (LLMs) modelam a probabilidade conjunta de uma sequência de texto como o produto de probabilidades condicionais direcionadas passo a passo:<br><br><div class='tech-formula-box'>P(w₁, w₂, ..., w_T) = ∏_{t=1}^T P(w_t | w₁, w₂, ..., w_{t-1})</div><br>A cada passo <em>t</em>, o modelo não gera a frase inteira; ele calcula um vetor de logits <em>z</em> sobre o vocabulário <em>V</em> (~50.000 a 100.000 tokens) e aplica a função Softmax com temperatura <em>T</em>:<br><br><div class='tech-formula-box'>P(w_t = v_i | w_{&lt;t}) = exp(z_i / T) / ∑_j exp(z_j / T)</div>"
          },
          {
            titulo: "2. Transformers & Mecanismo de Auto-Atenção (Self-Attention)",
            conteudo: "O autocompletar do celular usa N-Grams ou Cadeias de Markov rasas que olham apenas 1 ou 2 palavras atrás (P(w_t | w_{t-1})). O Transformer (Vaswani et al., 2017) substitui isso por matrizes de Projeção Linear (Query, Key, Value) calculando pesos de atenção cruzada entre todos os tokens da janela de contexto:<br><br><div class='tech-formula-box'>Attention(Q, K, V) = softmax( (Q Kᵀ) / √d_k ) V</div><br>Isso permite que o modelo autocomplete mantendo coerência semântica com uma instrução dada 8.000 tokens atrás."
          },
          {
            titulo: "3. Por que a IA 'Varia' e 'Alucina'? (Amostragem Estocástica)",
            conteudo: "Se a IA escolhesse sempre a palavra de probabilidade máxima (<em>Greedy Search / Argmax</em>), ela entraria em loops repetitivos. Modelos modernos usam amostragem probabilística:<br>• <strong>Top-p / Nucleus Sampling (Holtzman et al., 2020):</strong> Amostra apenas no menor subconjunto de tokens cuja probabilidade acumulada atinge <em>p</em> (ex: 90%).<br>• <strong>Temperatura (T):</strong> Controla o grau de aleatoriedade do sorteio.<br><br><strong>Origem da Alucinação:</strong> O modelo não consulta uma tabela verdade nem possui ontologia formal; ele simplesmente segue o caminho estatístico mais fluente para a distribuição aprendida no pré-treinamento."
          },
          {
            titulo: "4. RLHF: A Camada que Transforma Autocompletar em Assistente",
            conteudo: "O modelo base bruto (GPT-3 Base) apenas completa sequências (ex: se receber uma pergunta, pode autocompletar com outra pergunta). A OpenAI introduziu o <strong>InstructGPT (Ouyang et al., 2022)</strong> aplicando <em>Supervised Fine-Tuning (SFT)</em> e <em>Reinforcement Learning from Human Feedback (RLHF / PPO)</em> para treinar o motor de autocompletar a prever a resposta que um humano classificaria como prestativa, honesta e inofensiva."
          }
        ],
        fontesCientificas: [
          {
            autor: "Vaswani et al. (NeurIPS 2017)",
            titulo: "Attention Is All You Need",
            publicacao: "Advances in Neural Information Processing Systems",
            relevancia: "Introdução formal da arquitetura Transformer e do mecanismo de Auto-Atenção que substituiu RNNs.",
            link: "https://arxiv.org/abs/1706.03762"
          },
          {
            autor: "Radford et al. (OpenAI, 2019)",
            titulo: "Language Models are Unsupervised Multitask Learners (GPT-2)",
            publicacao: "OpenAI Technical Report",
            relevancia: "Prova empírica de que prever o próximo token em grande escala gera capacidade de tradução, síntese e raciocínio.",
            link: "https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf"
          },
          {
            autor: "Brown et al. (NeurIPS 2020)",
            titulo: "Language Models are Few-Shot Learners (GPT-3)",
            publicacao: "Advances in Neural Information Processing Systems",
            relevancia: "Demonstração das Leis de Escala (Scaling Laws) em modelos autorregressivos de 175 bilhões de parâmetros.",
            link: "https://arxiv.org/abs/2005.14165"
          },
          {
            autor: "Ouyang et al. (NeurIPS 2022)",
            titulo: "Training language models to follow instructions with human feedback (InstructGPT)",
            publicacao: "Advances in Neural Information Processing Systems",
            relevancia: "Base do ChatGPT: alinhamento do motor de autocompletar via RLHF e recompensas humanas.",
            link: "https://arxiv.org/abs/2203.02155"
          },
          {
            autor: "Holtzman et al. (ICLR 2020)",
            titulo: "The Curious Case of Neural Text Degeneration",
            publicacao: "International Conference on Learning Representations",
            relevancia: "Criação do Nucleus Sampling (Top-p) e formalização da amostragem estatística em redes neurais de linguagem.",
            link: "https://arxiv.org/abs/1904.09751"
          },
          {
            autor: "Claude E. Shannon (1948)",
            titulo: "A Mathematical Theory of Communication",
            publicacao: "Bell System Technical Journal",
            relevancia: "Fundação matemática clássica da teoria da informação, entropia e modelagem probabilística de sequências.",
            link: "https://archive.org/details/bstj27-3-379"
          }
        ]
      }
    },
    {
      numero: 18,
      id: 18,
      tipo: "apresentacao",
      categoria: "Como a IA Funciona",
      titulo: "Os 3 Ingredientes que Fazem a Mágica Acontecer",
      subtitulo: "O que existe por trás de qualquer ferramenta moderna de Inteligência Artificial",
      itensDestaque: [
        {
          icone: "📖",
          titulo: "1. A Biblioteca de Exemplos",
          desc: "Milhões de páginas de livros, artigos, notícias e receitas que servem de material de leitura e aprendizado para a máquina."
        },
        {
          icone: "⚡",
          titulo: "2. Computadores Potentes",
          desc: "Máquinas velozes que conseguem processar essa biblioteca inteira em poucas semanas para encontrar todos os padrões."
        },
        {
          icone: "🧑‍🏫",
          titulo: "3. Orientação Humana",
          desc: "Pessoas reais que testam e ensinam a IA a ser educada, prestativa, evitar ofensas e responder com clareza em português."
        }
      ],
      notasProfessora: {
        objetivoSlide: "Mostrar que a tecnologia é fruto do trabalho e da curadoria humana, reforçando o papel das pessoas no processo.",
        oQueFalar: "Destaque o terceiro ponto: 'A IA não nasceu pronta no computador. Milhares de pessoas reais trabalharam conversando com ela e corrigindo os erros para que hoje ela consiga nos responder com simpatia e utilidade.'",
        tempoSugerido: "7 minutos"
      }
    },

    // -----------------------------------------------------------------------
    // BLOCO 5: LABORATÓRIO PRÁTICO & FECHAMENTO (SLIDES 19 A 21)
    // -----------------------------------------------------------------------
    {
      numero: 19,
      id: 19,
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
        tempoSugerido: "25 minutos de tutoria individual"
      }
    },
    {
      numero: 20,
      id: 20,
      tipo: "missao-portfolio",
      categoria: "Laboratório Prático 2",
      titulo: "Missão 2 no Computador: Atividade 1 no Portfólio Digital",
      subtitulo: "Oficina do Raio-X da IA no Cotidiano (Vale 0,5 ponto no Portfólio)",
      passos: [
        "1. Abra o arquivo modelo do seu Portfólio Digital que a professora indicar.",
        "2. Escolha 2 aplicativos do seu smartphone (ex: Waze, Spotify, Nubank, Netflix).",
        "3. Preencha o Raio-X: Quais dados o app coleta? O que a IA calcula? Qual benefício entrega?",
        "4. Responda com suas palavras: 'Como seria a sua vida se esse aplicativo parasse de usar IA?'.",
        "5. Salve o arquivo no computador. Laura & Maria estarão passando nas mesas para validar!"
      ],
      notasProfessora: {
        objetivoSlide: "Acompanhar a realização da primeira entrega formativa dos alunos, garantindo que compreendam a relação dados ➔ IA ➔ benefício.",
        oQueFalar: "Circulem entre as mesas. Elogiem os exemplos trazidos pelos alunos e ajudem aqueles que tiverem dificuldade de digitação ou formatação de texto.",
        tempoSugerido: "45 minutos de oficina ativa"
      }
    },
    {
      numero: 21,
      id: 21,
      tipo: "fechamento",
      categoria: "Síntese & Próximos Passos",
      titulo: "Síntese do Encontro 1 & O Salto para a Próxima Aula",
      subtitulo: "A base está construída. No próximo encontro, entraremos no mundo da criação!",
      conclusao: "A Inteligência Artificial não é mágica, nem pensa como um cérebro biológico: é matemática, probabilidade e reconhecimento de padrões em dados.",
      proximoEncontro: "Encontro 2 (23 de Outubro): O Salto da IA Generativa – Como Acessar o ChatGPT e Criar seus Primeiros Prompts!",
      lembretesFinais: [
        "Guarde bem seu e-mail e senha para a próxima aula",
        "Parabéns pelo primeiro passo dado na sua jornada com Inteligência Artificial!"
      ],
      notasProfessora: {
        objetivoSlide: "Fechar o encontro com celebração, sensação de vitória e expectativa positiva para a aula do ChatGPT.",
        oQueFalar: "Finalize parabenizando a turma: 'Parabéns a todos! Vocês deram hoje um passo enorme. Desmistificamos a IA, garantimos o e-mail de todo mundo e analisamos serviços reais. No dia 23 de outubro, traremos a IA que CRIA: vamos abrir o ChatGPT e colocar a IA para trabalhar para vocês. Até lá!'",
        tempoSugerido: "5 minutos"
      }
    }
  ],

  // =========================================================================
  // ABA 3: ATIVIDADES & GABARITO COMENTADO
  // =========================================================================
  oficinaPratica: {
    titulo: "Atividade 1: Raio-X da Inteligência Artificial no Cotidiano",
    duracao: "Bloco 3 • 75 min",
    peso: "0,5 ponto no Portfólio Digital",
    ferramenta: "Navegador Web + Portfólio Digital (Google Docs ou Word)",
    descricao: "Os alunos escolhem 3 aplicativos ou serviços que usam com frequência (de categorias distintas) e preenchem uma análise em 4 quadrantes: (1) Dados de Entrada, (2) O que a IA faz, (3) Saída para o Usuário e (4) Contraprova: Por que programação com regras tradicionais falharia aqui?",
    casosGabarito: [
      {
        caso: "Caso 1: Spotify / YouTube (Recomendação Musical e Vídeos)",
        categoria: "Streaming & Mídia",
        entradas: "Músicas tocadas até o fim, músicas puladas antes de 30s, horário do dia, playlists curtidas, volume de busca.",
        oQueIaFaz: "Algoritmos de Filtragem Colaborativa cruzam o comportamento do usuário com o de milhões de outras pessoas com perfis acústicos parecidos.",
        saida: "Playlist semanal personalizada ('Descobertas da Semana') e sequência da fila de reprodução automática.",
        contraprova: "Seria inviável contratar curadores humanos para escrever regras 'SE usuário tem 20 anos E gosta de rock ENTÃO recomende música X' para 500 milhões de usuários com gostos únicos."
      },
      {
        caso: "Caso 2: Waze / Google Maps (Roteamento Dinâmico de Trânsito)",
        categoria: "Mobilidade & Mapas",
        entradas: "Coordenadas GPS e velocidade instantânea de milhares de celulares conectados na via naquele exato minuto.",
        oQueIaFaz: "Calcula algoritmos de caminho ótimo em grafos dinâmicos e prevê probabilidade de congestionamento futuro antes de você chegar ao cruzamento.",
        saida: "Estimativa exata de tempo de chegada (ETA) e rotas alternativas para fugir do tráfego.",
        contraprova: "Um mapa fixo mede apenas distância em quilômetros. Não tem capacidade de reagir a acidentes repentinos ou semáforos quebrados sem dados em tempo real."
      },
      {
        caso: "Caso 3: Nubank / Bancos (Detecção de Fraudes em Pix / Cartão)",
        categoria: "Finanças & Segurança",
        entradas: "Valor da transação, horário da madrugada, geolocalização do aparelho, velocidade de digitação da senha e histórico habitual de gastos.",
        oQueIaFaz: "Modelos de detecção de anomalias calculam a probabilidade estatística de que aquela transação seja ilegítima em milissegundos.",
        saida: "Aprovação imediata ou bloqueio preventivo exigindo reconhecimento facial.",
        contraprova: "Criminosos descobrem regras fixas rapidamente (ex: 'comprar R$ 999 se o limite de bloqueio for R$ 1.000'). A IA detecta padrões sutis de comportamento fora da curva."
      }
    ],
    planoB: "Caso a internet do laboratório caia ou fique lenta: (1) Peça que os alunos façam a análise dos aplicativos diretamente pelos seus smartphones (redes móveis 4G/5G). (2) Caso algum aluno esteja sem celular, organize em duplas no computador com editor de texto offline."
  },

  // =========================================================================
  // ABA 4: PERGUNTAS DOS ALUNOS & ARMADILHAS
  // =========================================================================
  perguntasAlunos: [
    {
      numero: 1,
      duvida: "A IA vai criar consciência própria e se rebelar?",
      resposta: "Cientificamente não há base para isso. A IA não possui biologia, desejos, instinto de sobrevivência ou sentimentos. Ela é código calculando probabilidades estatísticas com base em dados do passado. O risco real da IA não é um robô malvado, mas sim humanos usando algoritmos com preconceitos (vieses) ou dados errados para tomar decisões injustas.",
      pontoDidatico: "Redirecione o medo fictício para a responsabilidade ética humana real."
    },
    {
      numero: 2,
      duvida: "Isso não é só um monte de IF/ELSE gigante no código?",
      resposta: "Excelente pergunta! Na programação tradicional, sim, é puro IF/ELSE manual escrito linha por linha por um programador. Mas em Machine Learning e Redes Neurais não: nenhum humano escreveu as regras. O algoritmo ajustou milhões de pesos matemáticos sozinho ao ver milhões de fotos ou textos. Ele não checa uma regra fixa; ele calcula uma probabilidade contínua.",
      pontoDidatico: "Mostre que a escala matemática de milhões de parâmetros torna o IF/ELSE humano inviável."
    },
    {
      numero: 3,
      duvida: "A IA vai roubar todos os empregos?",
      resposta: "A IA transforma tarefas repetitivas e rotineiras, e não profissões inteiras da noite para o dia. Quem entende e usa IA como copiloto para pensar melhor e produzir com mais qualidade terá vantagem sobre quem a ignora. É exatamente por isso que estamos aqui neste curso: para sermos profissionais e cidadãos conscientes, e não meros espectadores.",
      pontoDidatico: "Empodere os alunos e valorize a presença deles no minicurso."
    }
  ],

  // =========================================================================
  // ABA 5: ANOTAÇÕES & COMBINADOS DA DUPLA
  // =========================================================================
  divisaoPapeis: [
    { bloco: "Bloco 1 (00h-45m)", tema: "Acolhimento & IA Invisível (Slides 1 a 10)", papel: "radio" },
    { bloco: "Bloco 2 (45m-85m)", tema: "Mitos & Como a IA Aprende (Slides 11 a 18)", papel: "radio" },
    { bloco: "Bloco 3 (85m-160m)", tema: "Oficina no Laboratório (Slides 19 e 20)", papel: "ambas" },
    { bloco: "Bloco 4 (160m-180m)", tema: "Síntese & Fechamento (Slide 21)", papel: "radio" }
  ]
};

// Compatibilidade Global
window.ENCONTRO_1_DATA = ENCONTRO_1_DATA;
window.CURSO_IA_CURRENT_DATA = ENCONTRO_1_DATA;
