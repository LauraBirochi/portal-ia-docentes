/**
 * Módulo 1 – Deck Completo de Slides (27 Slides) & Notas da Professora
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

import { dossies } from './dossies.js';

export const slidesComNotas = [
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

  // -----------------------------------------------------------------------
  // BLOCO 2: GÊNESE HISTÓRICA, DEFINIÇÃO & OS 3 INGREDIENTES (SLIDES 7 A 10)
  // -----------------------------------------------------------------------
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

  // -----------------------------------------------------------------------
  // BLOCO 3: A IA INVISÍVEL DO DIA A DIA (SLIDES 11 A 15)
  // -----------------------------------------------------------------------
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

  // -----------------------------------------------------------------------
  // BLOCO 4: DESMISTIFICANDO A IA – OS 5 GRANDES MITOS (SLIDES 16 A 21)
  // -----------------------------------------------------------------------
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

  // -----------------------------------------------------------------------
  // BLOCO 5: BRASIL, CIDADANIA & REGULAÇÕES (SLIDES 22 A 24)
  // -----------------------------------------------------------------------
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

  // -----------------------------------------------------------------------
  // BLOCO 6: LABORATÓRIO PRÁTICO & FECHAMENTO (SLIDES 25 A 27)
  // -----------------------------------------------------------------------
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
      "Preencha seu nome e responda cada questão com tranquilidade e sinceridade.",
      "Lembre-se: não há pegadinhas nem nota punitiva — o objetivo é conhecermos a turma!",
      "Se tiver qualquer dúvida de leitura ou no computador, chame a Laura ou a Maria na sua mesa."
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
];
