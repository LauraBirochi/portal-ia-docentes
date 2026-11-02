/**
 * Base de Dados Unificada – Módulo do Encontro 3 (15 Slides)
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 * 
 * ARQUIVO GERADO AUTOMATICAMENTE POR: scripts/build_data.py
 * FONTE ÚNICA DA VERDADE: static/js/data/encontro-3/
 * Edite os submódulos em static/js/data/encontro-3/ e execute 'python scripts/build_data.py'
 */

(function (global) {
  'use strict';

  // 1. Dossiês Científicos e Jurídicos
  /**
 * Módulo 3 – Dossiês de Embasamento Científico e Prático
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

const dossies = {
  engenhariaInstrucoes: {
    tipoDossie: "cientifico",
    titulo: "Engenharia de Instruções e Interação Humano-IA",
    resumo: "Princípios teóricos e práticos para guiar a atenção dos modelos de linguagem através de instruções claras, especificações de contexto e restrições de formato.",
    topicos: [
      {
        titulo: "1. Clareza e Especificidade sobre Ambiguidade",
        conteudo: "Modelos de linguagem respondem de forma genérica quando instruções não delimitam escopo, público-alvo ou formato esperado."
      },
      {
        titulo: "2. O Paradigma do Diálogo Iterativo",
        conteudo: "A interação com IA é um processo conversacional: a melhor resposta geralmente decorre de ajustes e refinamentos sucessivos, e não de um comando isolado."
      }
    ],
    fontesCientificas: [
      {
        autor: "OpenAI (2024)",
        titulo: "Prompt Engineering Guide",
        publicacao: "OpenAI Developer Platform",
        relevancia: "Guia oficial de boas práticas para formulação de instruções em modelos GPT.",
        link: "https://platform.openai.com/docs/guides/prompt-engineering"
      }
    ]
  }
};

  // 2. Metadados Curriculares e Blocos Temáticos
  /**
 * Módulo 3 – Metadados Curriculares e Blocos Temáticos
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

const moduloInfo = {
  numero: 3,
  total: 7,
  data: "06/11",
  titulo: "Encontro 3: ChatGPT na Prática",
  subtitulo: "Do Comando Simples ao Trabalho Real: Estrutura C-T-F-R, Diálogo Iterativo e Meta-Prompting",
  cargaHoraria: "Encontro 3 • 3 horas presenciais (180 min)",
  modalidade: "Presencial em Laboratório de Informática",
  publico: "Iniciantes e público geral (sem pré-requisitos técnicos)",
  ferramentaPrincipal: "Navegador Web + ChatGPT (OpenAI)",
  avaliacao: "Oficina de Bancada: Desafios Práticos no Portfólio Digital (Etapa 1: Duelo C-T-F-R • Etapa 2: Meta-Prompting)"
};

const blocosTematicos = [
  {
    id: 1,
    icone: "🧩",
    titulo: "Bloco 1: Fundamentos & Estrutura C-T-F-R",
    subtitulo: "Acolhimento, Handoff do Estagiário Inteligente e a Evolução do PCTFR para os 4 Blocos",
    slidesRange: [1, 5],
    tempoEstimado: "45 min",
    conducao: "Co-docência (Laura & Maria)"
  },
  {
    id: 2,
    icone: "⚡",
    titulo: "Bloco 2: Práticas no Mundo Real & Blindagem de Privacidade",
    subtitulo: "Organização Pessoal e Redação/Simplificação de Jargões + Regra do Cartão-Postal e Café com Prosa",
    slidesRange: [6, 9],
    tempoEstimado: "45 min (c/ intervalo)",
    conducao: "Co-docência (Laura & Maria)"
  },
  {
    id: 3,
    icone: "🤖",
    titulo: "Bloco 3: Diálogo Iterativo, Ética & Oficina de Bancada",
    subtitulo: "Meta-Prompting com Demonstração no Telão, Travas [necessita verificação] e Oficina nos Computadores",
    slidesRange: [10, 13],
    tempoEstimado: "70 min",
    conducao: "Co-docência (Laura & Maria)"
  },
  {
    id: 4,
    icone: "🎉",
    titulo: "Bloco 4: Socialização & Fechamento",
    subtitulo: "Roda de Conversa (Show & Tell), Checklist de Bolso e Próximos Passos (Multimodalidade no Encontro 4)",
    slidesRange: [14, 15],
    tempoEstimado: "20 min",
    conducao: "Co-docência (Laura & Maria)"
  }
];

  // 3. Fio da Meada e Narrativa Pedagógica
  /**
 * Módulo 3 – Fio da Meada, Narrativa Pedagógica e Glossário de Engenharia de Prompt
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

const fioDaMeada = {
  objetivoCentral: "Qual é a grande mensagem que os alunos precisam levar hoje?",
  mensagemChave: "Trate o ChatGPT como um estagiário brilhante de alta capacidade que possui contexto zero: a utilidade e precisão da resposta dependem da aplicação dos 4 Blocos Estruturais (Contexto & Papel, Tarefa, Formato e Restrições) e do domínio do Diálogo Iterativo (Meta-Prompting), com supervisão e validação crítica 100% humana.",
  explicacaoObjetivo: "Superar de forma definitiva o 'pedido vago' (que desperdiça tempo e gera clichês), compreendendo como orientar a atenção da rede neural no ChatGPT através do modelo mental do estagiário, evoluindo a sigla PCTFR do Encontro 2 para a arquitetura C-T-F-R (com Papel incorporado em Contexto), dominando a redação e a simplificação de jargões complexos, experimentando o Meta-Prompting com modelagem visual guiada e aplicando travas de incerteza [necessita verificação] e protocolos de privacidade (LGPD).",
  atos: [
    {
      ato: 1,
      tempo: "00:00 às 00:45 (45 min)",
      titulo: "Ato 1: O Handoff do Estagiário & os 4 Blocos C-T-F-R (Evolução do PCTFR) — Laura & Maria",
      desc: "Acolhimento da turma e conexão com as descobertas dos Encontros 1 e 2. Introdução do modelo mental do estagiário de alta capacidade com contexto zero. Apresentação do confronto de bancada 'Prompt or Flop' para demonstrar empiricamente por que comandos livres ativam a média estatística rasa e como os 4 Blocos (Contexto & Papel, Tarefa, Formato e Restrições) destravam o potencial sob medida da ferramenta.",
      gatilho: "Quem digita um pedido genérico recebe um clichê motivacional; quem faz o handoff estruturado com contexto, papel e limites recebe trabalho pronto!"
    },
    {
      ato: 2,
      tempo: "00:45 às 01:30 (45 min c/ Intervalo)",
      titulo: "Ato 2: Práticas no Mundo Real, Regra do Cartão-Postal & Intervalo Pedagógico (Maria & Laura)",
      desc: "Demonstração de casos práticos em camadas: Camada 1 (organização pessoal, rotinas e cronogramas de estudos realistas) e Camada 2 (redação executiva e simplificação de jargões/editais burocráticos em linguagem clara). Blindagem de segurança de dados através da 'Regra do Cartão-Postal' e da técnica de anonimização (placeholders), preparando a turma para a pausa de 15 minutos do café.",
      gatilho: "Nunca envie à IA o que você não escreveria em um cartão-postal aberto: anonimize identidades, use [CLIENTE X] e proteja seus dados profissionais!"
    },
    {
      ato: 3,
      tempo: "01:30 às 03:00 (90 min)",
      titulo: "Ato 3: Meta-Prompting Guiado, Bancada Fragmentada & Show and Tell (Laura & Maria)",
      desc: "Retorno do intervalo com a Camada 3: diálogo iterativo e Meta-Prompting (com demonstração guiada de 3 minutos no projetor antes da prática). Alinhamento ético com as diretrizes da UNESCO sobre Agência Humana e aplicação de travas com rótulo [necessita verificação]. Condução da Oficina de Bancada nos computadores em duas etapas fragmentadas (Etapa 1: Duelo de Prompts por 20 min; Etapa 2: Meta-Prompting por 15 min), seguida de Roda de Socialização (Show & Tell) e consolidação do Checklist de Bolso.",
      gatilho: "Quando você não souber exatamente como estruturar o comando, faça a IA perguntar: o Meta-Prompting transfere o esforço da pergunta para a máquina!"
    }
  ],
  glossario: [
    {
      termo: "Modelo Mental do Estagiário Inteligente",
      def: "Abordagem cognitiva que enxerga o ChatGPT como um assistente que leu bilhões de textos e domina regras formais, mas não tem intuição sobre seus objetivos, empresa ou preferências se você não fornecer o briefing completo."
    },
    {
      termo: "Framework C-T-F-R (Evolução do PCTFR)",
      def: "Arquitetura mestre de engenharia de instruções composta por: Contexto & Papel (Persona incorporada e cenário real), Tarefa (verbo direto e ação clara), Formato (tabela, tópicos, tom e extensão) e Restrições (regras negativas e travas de não-invenção)."
    },
    {
      termo: "Multi-turn Prompting (Diálogo Iterativo)",
      def: "Técnica de lapidação conversacional contínua na mesma sessão, onde o usuário solicita ajustes específicos (tom, tamanho, inclusão de colunas) sem descartar a resposta anterior ou recomeçar o chat do zero."
    },
    {
      termo: "Meta-Prompting (Prompt Reverso)",
      def: "Estratégia avançada onde se instrui o modelo a atuar como engenheiro de requisitos e fazer perguntas de sondagem ao usuário para esclarecer dúvidas e lacunas de contexto antes de gerar a entrega final."
    },
    {
      termo: "Modelagem Visual Guiada (Andaimes / Scaffolding)",
      def: "Prática pedagógica em que a dupla docente demonstra a dinâmica de meta-prompting ao vivo no telão por 3 minutos antes de liberar os estudantes para a prática individual nos computadores, prevenindo a paralisia do iniciante."
    },
    {
      termo: "Trava com Rótulo de Incerteza ([necessita verificação])",
      def: "Restrição negativa explícita recomendada pela OpenAI (ex: 'Se não constar no material ou faltarem dados, responda não especificado ou marque com [necessita verificação]') que impede a IA de preencher lacunas factuais com dados inventados."
    },
    {
      termo: "Regra do Cartão-Postal & Anonimização",
      def: "Protocolo de higiene e privacidade (LGPD) que consiste em substituir dados sensíveis reais (nomes, CPFs, empresas e valores sigilosos) por identificadores neutros como [PROFESSOR A] ou [ESCOLA Y] antes de submeter o prompt à IA."
    },
    {
      termo: "Agência Humana (Diretriz UNESCO)",
      def: "Princípio ético inegociável segundo o qual a inteligência artificial é exclusivamente um instrumento de apoio cognitivo: a responsabilidade, o julgamento final e a curadoria sobre a veracidade do conteúdo são sempre 100% humanos."
    }
  ]
};

  // 4. Slides com Notas da Professora
  /**
 * Encontro 3 – Deck de Slides com Roteiro da Docente para o Projetor
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 * 
 * Tema Central: ChatGPT na Prática: Do Comando Simples ao Trabalho Real
 * Data: 06/11/2026 • 3 horas presenciais
 * Docência Compartilhada: Laura & Maria
 * 
 * Design System: CKW Design System + Frontend Slides (16:9 Widescreen Nativo, Deep Navy)
 * Diretrizes: OpenAI Enterprise Guide, UNESCO (Agência Humana) e OSSE (Scaffolding Gradual)
 */

const slidesComNotas = [
  // =========================================================================
  // BLOCO 1: FUNDAMENTOS & ESTRUTURA C-T-F-R (Slides 1 a 5)
  // =========================================================================
  {
    numero: 1,
    id: 1,
    bloco: 1,
    tipo: "capa",
    categoria: "Abertura",
    titulo: "ChatGPT na Prática: Do Comando Simples ao Trabalho Real",
    subtitulo: "Encontro 3 • Como instruir, refinar e colaborar com a IA de forma produtiva, ética e segura",
    detalhes: [
      "32 Horas Certificadas • Encontro 3 de 7",
      "06/11/2026 • 3 Horas Presenciais",
      "Docência: Laura & Maria",
      "Coordenação: Prof. Lúcio Rodrigo"
    ],
    conducao: "Co-docência (Laura e Maria)",
    notasProfessora: {
      tempoSugerido: "5 min (00:00 - 00:05)",
      objetivoSlide: "Acolher a turma, reduzir a ansiedade sobre a complexidade da IA e definir o objetivo prático do dia.",
      oQueFalar: "(Laura) \"Olá, pessoal! Sejam muito bem-vindos ao nosso Encontro 3! Nas aulas anteriores, desmistificamos a IA, vimos como as redes neurais preveem palavras e aprendemos a proteger nossos dados de privacidade. Hoje daremos o passo definitivo: aprender a conversar com o ChatGPT para resolver tarefas reais da nossa rotina de estudos, trabalho e vida pessoal.\" (Maria) \"Isso mesmo! Hoje ninguém precisa saber programar. Vamos aprender a arte de orientar a IA com clareza, exatamente como orientamos um colega de trabalho. Vamos juntos!\""
    }
  },
  {
    numero: 2,
    id: 2,
    bloco: 1,
    tipo: "comparativo",
    categoria: "Devolutiva Acolhedora",
    titulo: "Onde Estamos e Aonde Vamos Hoje",
    subtitulo: "Conectando os aprendizados anteriores à prática de comunicação com a IA",
    conducao: "Condução: Maria",
    colunas: [
      {
        tag: "Revisão Encontros 1 e 2",
        icone: "✅",
        tipo: "positivo",
        bullet: "✓",
        itens: [
          "IA Generativa ≠ Buscador do Google (Gerador Probabilístico token a token)",
          "Blindagem de Dados Sensíveis e Conta Protegida (Opt-out de Treinamento)",
          "Reconhecimento das alucinações e limites técnicos dos modelos"
        ]
      },
      {
        tag: "Desafio de Hoje (Encontro 3)",
        icone: "🎯",
        tipo: "marrom",
        bullet: "➔",
        itens: [
          "Superar pedidos genéricos ('me dê dicas') que geram respostas rasas",
          "Dominar a estrutura de instruções sob medida (Contexto & Papel, Tarefa, Formato e Restrições)",
          "Assumir o controle crítico dos resultados (Agência Humana na Curadoria)"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (00:05 - 00:15)",
      objetivoSlide: "Validar o progresso dos alunos e estabelecer a ponte cognitiva entre a teoria inicial e o prompting estruturado.",
      oQueFalar: "(Maria) \"No Encontro 1, vimos que a IA não é mágica nem robô humanoide, mas sim um poderoso sistema estatístico. No Encontro 2, aprendemos a desativar o treinamento de dados e entendemos que o ChatGPT constrói textos palavra por palavra. Hoje, vamos resolver a principal frustração que vocês relataram: por que às vezes a IA responde algo genérico ou vago? A resposta está na forma como fazemos o pedido. Vamos transformar pedidos simples em comandos profissionais!\""
    }
  },
  {
    numero: 3,
    id: 3,
    bloco: 1,
    tipo: "apresentacao",
    categoria: "Fundamento de Prompting",
    titulo: "A Metáfora do Estagiário Inteligente",
    subtitulo: "Trate o ChatGPT como um estagiário de alta capacidade no seu primeiro dia de trabalho",
    conducao: "Condução: Laura",
    itensDestaque: [
      {
        icone: "🧠",
        titulo: "Capacidade Alta",
        desc: "Ele leu bilhões de textos, domina gramática e processa grandes volumes de informação em segundos."
      },
      {
        icone: "❓",
        titulo: "Contexto Zero",
        desc: "Não conhece sua rotina, sua instituição, suas preferências implícitas ou o que você considera prioritário."
      },
      {
        icone: "📋",
        titulo: "O Handoff Perfeito",
        desc: "Exige 3 elementos essenciais: onde estamos (cenário & papel), o que fazer (tarefa) e o que é um bom trabalho (critérios)."
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (00:15 - 00:25)",
      objetivoSlide: "Fornecer um modelo mental intuitivo (Handoff do Estagiário) para orientar a formulação de prompts claros.",
      oQueFalar: "(Laura) \"Imagine que você contratou um estagiário brilhante no primeiro dia de trabalho. Ele tem muita vontade e leu bibliotecas inteiras, mas não sabe absolutamente nada sobre a sua rotina ou sobre como você gosta das coisas. Se você apenas disser 'faça um relatório sobre as reuniões', ele vai entregar algo genérico ou fora do tom. Mas se você explicar o contexto, qual é o objetivo, quem vai ler e como quer o resultado, ele entregará um trabalho impecável. O ChatGPT funciona exatamente assim!\""
    }
  },
  {
    numero: 4,
    id: 4,
    bloco: 1,
    tipo: "comparativo",
    categoria: "Demonstração \"Prompt or Flop\"",
    titulo: "Prompt or Flop? O Impacto da Clareza",
    subtitulo: "Por que pedidos livres geram respostas vagas e como a estrutura altera o resultado",
    conducao: "Condução: Maria",
    colunas: [
      {
        tag: "❌ Prompt Livre / Vago (FLOP)",
        icone: "⚠️",
        tipo: "alerta",
        bullet: "✕",
        itens: [
          "Comando: \"Me ajude a organizar minha semana.\"",
          "Diagnóstico: A rede neural ativa o caminho médio mais genérico possível sem restrições.",
          "Resultado da IA: Dicas genéricas de produtividade e frases motivacionais padrão ('beba água', 'durma bem')."
        ]
      },
      {
        tag: "✅ Prompt Estruturado (PROMPT)",
        icone: "✓",
        tipo: "positivo",
        bullet: "✓",
        itens: [
          "Comando: \"Atue como mentor de organização pessoal. Tenho 4 blocos de estudo de 2h e 3 metas de trabalho nesta semana. Monte uma agenda em tabela de segunda a sexta, priorizando as tarefas mais difíceis no período da manhã.\"",
          "Diagnóstico: Papel definido, disponibilidade real, formato delimitado e critério explícito.",
          "Resultado da IA: Um plano semanal pronto, personalizado, sem clichês e executável."
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (00:25 - 00:35)",
      objetivoSlide: "Evidenciar visualmente a diferença entre prompts abertos/incompletos e comandos estruturados.",
      oQueFalar: "(Maria) \"Olhem para o telão. Quando digitamos apenas 'Me ajude a organizar minha semana', a rede neural ativa o caminho médio mais genérico possível. Ela não sabe quantas horas você tem, se estuda ou trabalha. Já no segundo exemplo, fornecemos papel, contexto, tarefa e formato. Reparem na mudança drástica de qualidade! A estrutura não limita a IA; ela libera o potencial de resposta sob medida.\""
    }
  },
  {
    numero: 5,
    id: 5,
    bloco: 1,
    tipo: "apresentacao",
    layout: "grid-4cards",
    categoria: "Framework de Prompting",
    titulo: "Os 4 Blocos da Estrutura Perfeita (Evolução do PCTFR)",
    subtitulo: "Do método do Encontro 2 à organização modular definitiva no ChatGPT",
    conducao: "Condução: Laura",
    itensDestaque: [
      {
        icone: "🧩",
        titulo: "1. CONTEXTO & PAPEL",
        desc: "Quem a IA deve ser (Persona do PCTFR) e qual é o cenário real da situação (onde estamos)."
      },
      {
        icone: "⚙️",
        titulo: "2. TAREFA CLARA",
        desc: "A ação principal descrita com clareza cristalina e verbos de ação diretos (o que fazer)."
      },
      {
        icone: "📐",
        titulo: "3. FORMATO ESPECÍFICO",
        desc: "Tabela, lista de tópicos, e-mail executivo, extensão máxima e tom de voz (como entregar)."
      },
      {
        icone: "🛑",
        titulo: "4. RESTRIÇÕES NEGATIVAS",
        desc: "Regras invioláveis, limites, critérios de poda e trava explícita de 'não inventar dados'."
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (00:35 - 00:45)",
      objetivoSlide: "Conectar explicitamente o método PCTFR do Encontro 2 à arquitetura dos 4 Blocos C-T-F-R (mostrando que o Papel está acolhido dentro de Contexto).",
      oQueFalar: "(Laura) \"Lembram do método PCTFR que vimos no Encontro 2: Papel, Contexto, Tarefa, Formato e Restrições? Hoje damos um passo além na maturidade do comando: unificamos o Papel (Persona) dentro do grande bloco de CONTEXTO! Assim, trabalhamos com 4 blocos robustos: 1. Contexto & Papel; 2. Tarefa; 3. Formato; e 4. Restrições. Quando você organiza o seu texto usando marcadores entre colchetes como [Contexto] e [Tarefa], o ChatGPT entende a hierarquia com precisão cirúrgica!\""
    }
  },

  // =========================================================================
  // BLOCO 2: PRÁTICAS NO MUNDO REAL & PRIVACIDADE (Slides 6 a 9)
  // =========================================================================
  {
    numero: 6,
    id: 6,
    bloco: 2,
    tipo: "comparativo",
    categoria: "Prática no Mundo Real (Camada 1)",
    titulo: "Camada 1: Organização Pessoal e Rotina",
    subtitulo: "Usando a IA para estruturar horários, estudos e listas de planejamento diário",
    conducao: "Condução: Maria",
    colunas: [
      {
        tag: "📌 Caso Prático: Rotina Concorrida",
        icone: "⏱️",
        tipo: "marrom",
        bullet: "•",
        itens: [
          "Estudante que trabalha 8h por dia em horário comercial",
          "Apenas 1h30 líquida livre no período noturno",
          "Necessidade de manter constância de revisão sem estresse"
        ]
      },
      {
        tag: "💬 Comando Estruturado na Tela",
        icone: "💬",
        tipo: "positivo",
        bullet: "➔",
        itens: [
          "[Contexto & Papel] Sou estudante e trabalho 8h por dia. Tenho apenas 1h30 livre à noite.",
          "[Tarefa] Crie um cronograma de estudos focado na revisão de conteúdos acadêmicos para 5 dias.",
          "[Formato] Apresente em uma tabela com colunas: Dia, Tópico, Técnica e Tempo em minutos.",
          "[Restrições] Reserve os últimos 15 min para questões práticas e não inclua tarefas no domingo."
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (00:45 - 00:55)",
      objetivoSlide: "Demonstrar a aplicação da primeira camada de tarefas (organização pessoal e cronogramas de estudo com marcadores visuais).",
      oQueFalar: "(Maria) \"Vamos para a nossa primeira camada prática: organização pessoal! Vejam como o prompt do telão especifica exatamente a disponibilidade de tempo do aluno usando as etiquetas entre colchetes. Em vez de receber conselhos genéricos, o ChatGPT gera uma rotina real cabível na semana. Repararam na restrição final 'não inclua tarefas no domingo'? É esse tipo de trava que garante que o resultado respeite a sua vida real!\""
    }
  },
  {
    numero: 7,
    id: 7,
    bloco: 2,
    tipo: "comparativo",
    categoria: "Prática no Mundo Real (Camada 2)",
    titulo: "Camada 2: Redação Profissional & Simplificação",
    subtitulo: "Dois superpoderes do dia a dia: e-mails executivos e tradução de jargões burocráticos",
    conducao: "Condução: Laura",
    colunas: [
      {
        tag: "✉️ Caso A: Rascunho ➔ E-mail Executivo",
        icone: "💼",
        tipo: "marrom",
        bullet: "•",
        itens: [
          "[Contexto & Papel] Atue como um assistente de comunicação profissional claro e conciso.",
          "[Tarefa] Reescreva as notas brutas abaixo em um e-mail de atualização de projeto.",
          "[Formato] 1 parágrafo de resumo + lista de conquistas + próximos passos.",
          "[Restrições] Mantenha tom cordial. Não invente datas ou prazos não citados."
        ]
      },
      {
        tag: "📄 Caso B: Jargão / Edital ➔ Linguagem Clara",
        icone: "📝",
        tipo: "positivo",
        bullet: "✓",
        itens: [
          "[Contexto & Papel] Atue como um comunicador público focado em linguagem cidadã e acessível.",
          "[Tarefa] Simplifique o artigo burocrático abaixo para uma pessoa que nunca leu um edital.",
          "[Formato] Liste estritamente: 1. Quem tem direito; 2. Qual é o prazo; 3. O que deve fazer.",
          "[Restrições] Elimine juridiquês e termos latinos. Máximo de 2 linhas por item."
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (00:55 - 01:05)",
      objetivoSlide: "Apresentar a redação executiva e a simplificação de textos complexos (linguagem clara) com preservação de fatos.",
      oQueFalar: "(Laura) \"Na segunda camada, abordamos duas grandes dores do trabalho adulto: transformar anotações soltas de reunião em um e-mail formal e traduzir documentos difíceis — como editais, termos de contrato e regulamentos — em linguagem simples e cidadã! Vejam o Caso B: ao pedir que a IA extraia quem tem direito, prazos e obrigações, eliminamos horas de sofrimento com burocratês, sem perder nenhum dado importante!\""
    }
  },
  {
    numero: 8,
    id: 8,
    bloco: 2,
    tipo: "comparativo",
    categoria: "Blindagem de Privacidade",
    titulo: "A Regra do Cartão-Postal e a Anonimização",
    subtitulo: "O que nunca deve ser enviado ao ChatGPT em tarefas profissionais",
    conducao: "Condução: Maria",
    colunas: [
      {
        tag: "🚫 NUNCA INCLUA (Regra do Cartão-Postal)",
        icone: "⚠️",
        tipo: "alerta",
        bullet: "✕",
        itens: [
          "Trate a caixa de texto da IA como uma mensagem pública aberta",
          "Proibido: CPFs, senhas, chaves de API e dados bancários",
          "Proibido: Nomes reais de alunos/clientes, dados médicos ou processos sigilosos"
        ]
      },
      {
        tag: "🛡️ TÉCNICA DA ANONIMIZAÇÃO",
        icone: "✓",
        tipo: "positivo",
        bullet: "✓",
        itens: [
          "Em vez de: \"O cliente João da Silva da Empresa X deve R$ 5.000...\"",
          "Substitua por: \"O [CLIENTE A] da [EMPRESA Y] possui um saldo pendente de [VALOR Z]...\"",
          "Preserva 100% da inteligência da IA sem expor nenhuma informação sensível (LGPD)"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (01:05 - 01:15)",
      objetivoSlide: "Reforçar os protocolos de proteção à privacidade e ensinar a técnica prática de anonimização de dados sensíveis.",
      oQueFalar: "(Maria) \"Antes de irmos para o intervalo, um lembrete fundamental sobre segurança: lembrem-se da Regra do Cartão-Postal. Nunca insiram dados confidenciais de trabalho ou documentos com nomes reais. Usamos a técnica da anonimização: trocamos nomes por [CLIENTE A] e empresas por [EMPRESA X]. Assim, usaremos a inteligência da IA para estruturar o texto sem expor nenhuma informação sensível!\""
    }
  },
  {
    numero: 9,
    id: 9,
    bloco: 2,
    tipo: "secao",
    categoria: "Intervalo Pedagógico",
    badge: "Café com Prosa • 15 minutos",
    titulo: "Pausa para Café e Descanso Cognitivo",
    subtitulo: "Retornaremos em 15 minutos para a Oficina Prática no Computador",
    pills: [
      { tipo: "real", texto: "☕ Café & Hidratação" },
      { tipo: "real", texto: "💬 Troca Informal" },
      { tipo: "real", texto: "💻 Preparação das Bancadas" }
    ],
    conducao: "Co-docência (Laura e Maria)",
    notasProfessora: {
      tempoSugerido: "15 min (01:15 - 01:30)",
      objetivoSlide: "Permitir o descanso cognitivo, interação social e checagem técnica dos computadores pelas professoras.",
      oQueFalar: "(Laura) \"Chegamos ao nosso intervalo pedagógico de 15 minutos! Aproveitem para tomar um café, esticar as pernas e assimilar o que vimos até aqui. (Maria) Enquanto vocês descansam, eu e a professora Laura vamos passar nos computadores do laboratório para verificar as conexões para a nossa oficina prática na volta. Até já!\""
    }
  },

  // =========================================================================
  // BLOCO 3: DIÁLOGO ITERATIVO, ÉTICA & OFICINA DE BANCADA (Slides 10 a 13)
  // =========================================================================
  {
    numero: 10,
    id: 10,
    bloco: 3,
    tipo: "comparativo",
    categoria: "Técnica de Diálogo (Camada 3)",
    titulo: "Camada 3: Diálogo Iterativo & Meta-Prompting",
    subtitulo: "Como fazer o ChatGPT entrevistar você para criar o prompt perfeito",
    conducao: "Condução: Laura (com Demonstração de 3 min ao vivo no telão)",
    colunas: [
      {
        tag: "🔄 Diálogo Iterativo & Meta-Prompting",
        icone: "🤖",
        tipo: "marrom",
        bullet: "•",
        itens: [
          "Diálogo Iterativo: A IA não é disparo único; ajuste e refine a resposta em múltiplos turnos",
          "O que é Meta-Prompting? Pedir à própria IA que atue como engenheira de prompt especializada",
          "Inversão de Papel: Quando não souber todo o contexto, faça a IA perguntar primeiro!"
        ]
      },
      {
        tag: "💬 Instrução de Auto-Entrevista no Telão",
        icone: "💬",
        tipo: "positivo",
        bullet: "➔",
        itens: [
          "\"Quero criar um modelo de e-mail para cobrança amigável de fornecedores.\"",
          "\"Antes de escrever, me faça 4 a 5 perguntas essenciais para entender meu cenário, tom e restrições.\"",
          "A IA assume papel investigativo e ajuda você a clarear seu próprio pensamento"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "15 min (01:30 - 01:45)",
      objetivoSlide: "Apresentar o Meta-Prompting e realizar uma MODELAGEM VISUAL GUIADA DE 3 MINUTOS no projetor antes de os alunos irem para as bancadas.",
      oQueFalar: "(Laura) \"Bem-vindos de volta! Agora entraremos na Camada 3: o Diálogo Iterativo e o Meta-Prompting! Se você não souber exatamente como preencher os 4 blocos de um prompt, você não precisa sofrer sozinho: peça para o ChatGPT fazer as perguntas para você! Atenção aqui no telão: vou rodar um exemplo ao vivo de 3 minutos. Vou colar este comando no ChatGPT... olhem só: ele não gerou o e-mail ainda; ele acabou de me fazer 4 perguntas sobre os fornecedores e o tom! Agora a Maria vai responder a pergunta 1 no chat... viram como a IA respondeu com precisão cirúrgica? É essa mesma dinâmica que vocês vão testar daqui a pouco!\""
    }
  },
  {
    numero: 11,
    id: 11,
    bloco: 3,
    tipo: "comparativo",
    categoria: "Responsabilidade Humana",
    titulo: "Agência Humana & Travas de Incerteza (UNESCO)",
    subtitulo: "A IA gera rascunhos; a decisão e a responsabilidade final são sempre do usuário",
    conducao: "Condução: Maria",
    colunas: [
      {
        tag: "⚖️ Princípio da UNESCO & Alucinações",
        icone: "⚠️",
        tipo: "alerta",
        bullet: "•",
        itens: [
          "A IA é instrumento de apoio; nunca substitui o julgamento profissional humano",
          "Revisão Textual ≠ Checagem de Fatos: um texto fluente pode conter dados totalmente inventados",
          "A responsabilidade profissional e legal sobre qualquer conteúdo gerado é 100% de quem o assina"
        ]
      },
      {
        tag: "🛡️ TRAVA COM RÓTULO DE INCERTEZA",
        icone: "✓",
        tipo: "positivo",
        bullet: "✓",
        itens: [
          "Adicione ao comando: \"Se você não tiver certeza de algum dado, responda 'Não consta no material' ou marque com [necessita verificação]\"",
          "Instrução explícita: \"Baseie-se estritamente nas informações fornecidas. Não tente adivinhar\"",
          "Auditoria ativa: Fatos, números e legislações devem ser validados fora da IA antes do uso"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "15 min (01:45 - 02:00)",
      objetivoSlide: "Conscientizar sobre os limites da IA e ensinar a técnica operacional de ancoragem com o rótulo '[necessita verificação]'.",
      oQueFalar: "(Maria) \"Atenção total para este pilar ético: a UNESCO estabelece que a responsabilidade final sobre qualquer conteúdo gerado por IA é sempre humana. Nunca aceitem uma resposta sem ler criticamente. Lembrem-se da nossa regra de ouro do Encontro 2: arrumar a gramática deixa o texto bonito, mas não garante que o dado seja verdadeiro. Usem a trava operacional da OpenAI: peçam para a IA marcar com '[necessita verificação]' sempre que ela não tiver certeza factual de um dado!\""
    }
  },
  {
    numero: 12,
    id: 12,
    bloco: 3,
    tipo: "missao-diagnostica",
    categoria: "Prática Guiada no Laboratório (Etapa 1)",
    titulo: "Oficina Mão na Massa: Missão 1 (Etapa 1: 20 min)",
    subtitulo: "Transformando um pedido simples da sua rotina em um Prompt Mestre",
    tempoEstimado: "20 min",
    passos: [
      "1. Abra seu arquivo do Portfólio Digital - Encontro 3.",
      "2. Escolha 1 tarefa real da sua rotina (estudos, trabalho ou organização pessoal).",
      "3. Passo A (Prompt Simples): Digite o pedido curto de 1 linha no ChatGPT e cole a resposta obtida.",
      "4. Passo B (Prompt Mestre): Escreva o prompt completo aplicando os 4 blocos (Contexto & Papel, Tarefa, Formato e Restrições) e envie em novo chat.",
      "5. Passo C (Análise): Compare os dois resultados e anote o que mudou na utilidade prática."
    ],
    destaqueDiagnostica: {
      icone: "💻",
      titulo: "Etapa 1: O Duelo de Prompts",
      desc: "Transformação prática de um comando do seu cotidiano aplicando a tabela dos 4 blocos essenciais. Foco total em comparar a saída vaga vs. a saída estruturada.",
      tagAviso: "Portfólio Digital • 20 Minutos Focados"
    },
    conducao: "Co-docência (Laura e Maria circulando pela turma)",
    notasProfessora: {
      tempoSugerido: "20 min (02:00 - 02:20)",
      objetivoSlide: "Conduzir a Etapa 1 da oficina no computador com foco exclusivo no Duelo de Prompts antes de passar para o Meta-Prompting.",
      oQueFalar: "(Laura) \"Agora é a vez de vocês nos computadores! Vamos trabalhar de forma fragmentada para ninguém se afobar: teremos 20 minutos focados exclusivamente na Missão 1! Acessem o Portfólio Digital, peguem um pedido simples da vida de vocês e façam a transformação usando os 4 blocos. (Maria) Eu e a Laura estaremos passando nas mesas para ajudar com as restrições e o contexto. Ao final dos 20 minutos, faremos uma pausa verbal de 2 minutos antes da Missão 2!\""
    }
  },
  {
    numero: 13,
    id: 13,
    bloco: 3,
    tipo: "missao-diagnostica",
    categoria: "Prática Guiada no Laboratório (Etapa 2)",
    titulo: "Oficina Mão na Massa: Missão 2 (Etapa 2: 15 min)",
    subtitulo: "Experimentando o Meta-Prompting e o Rótulo [necessita verificação]",
    tempoEstimado: "15 min",
    passos: [
      "1. Entrevista de Meta-Prompting: Peça ao ChatGPT para fazer 3 a 5 perguntas sobre um problema complexo que você deseja resolver.",
      "2. Refinamento Iterativo: Responda às perguntas da IA no chat e avalie o prompt estruturado gerado por ela.",
      "3. Checagem de Segurança: Aplique a trava com o rótulo '[necessita verificação]' para identificar dados que exigem auditoria fora da IA.",
      "4. Registre o prompt final e sua reflexão crítica no Portfólio Digital."
    ],
    destaqueDiagnostica: {
      icone: "🤖",
      titulo: "Etapa 2: Auto-Entrevista Ativa",
      desc: "Coloque a IA para trabalhar como sua entrevistadora investigativa e refine soluções complexas sem sobrecarga.",
      tagAviso: "Meta-Prompting & Rótulo de Incerteza"
    },
    conducao: "Co-docência (Laura e Maria circulando pela turma)",
    notasProfessora: {
      tempoSugerido: "15 min (02:20 - 02:35)",
      objetivoSlide: "Conduzir a Etapa 2 da oficina após a pausa verbal de alinhamento, estimulando a autonomia no meta-prompting.",
      oQueFalar: "(Maria) \"Excelente trabalho na Missão 1! Pausa rápida de 2 minutos para alinharmos a Etapa 2: agora vocês vão colocar o ChatGPT para trabalhar como entrevistador de vocês, exatamente como mostramos no telão há pouco! Peçam a ele: 'Faça 5 perguntas antes de me dar a resposta'. E adicionem a trava: marque qualquer incerteza com '[necessita verificação]'. Vocês têm 15 minutos de bancada para experimentar essa técnica fantástica!\""
    }
  },

  // =========================================================================
  // BLOCO 4: SOCIALIZAÇÃO & FECHAMENTO (Slides 14 e 15)
  // =========================================================================
  {
    numero: 14,
    id: 14,
    bloco: 4,
    tipo: "apresentacao",
    categoria: "Avaliação & Socialização",
    titulo: "Roda de Socialização (Show & Tell)",
    subtitulo: "Compartilhando evoluções, prompts transformados e lições aprendidas",
    conducao: "Co-docência (Laura e Maria)",
    itensDestaque: [
      {
        icone: "🎯",
        titulo: "Tarefa Escolhida",
        desc: "Qual tarefa da sua rotina real você escolheu testar no computador?"
      },
      {
        icone: "⚡",
        titulo: "Diferença Gritante",
        desc: "Qual foi a diferença mais marcante entre o prompt simples e o prompt estruturado?"
      },
      {
        icone: "🛡️",
        titulo: "Restrição de Ouro",
        desc: "Qual detalhe de contexto ou restrição negativa fez toda a diferença no resultado final?"
      },
      {
        icone: "📝",
        titulo: "Rubrica Formativa",
        desc: "Apresentação do antes/depois + reflexão crítica no Portfólio Digital (0,5 ponto formativo)."
      }
    ],
    notasProfessora: {
      tempoSugerido: "15 min (02:35 - 02:50)",
      objetivoSlide: "Consolidar o aprendizado por meio da aprendizagem entre pares e realizar a avaliação formativa contínua.",
      oQueFalar: "(Laura) \"Que momento rico! Vamos abrir nossa roda de socialização. Quem gostaria de compartilhar no projetor o seu prompt simples e como ele se transformou após adicionar contexto e restrições?\" (Maria) \"Reparem como o exemplo do colega mostra exatamente o que a UNESCO defende: a inteligência da solução veio do contexto humano que ele forneceu, não apenas da máquina. Parabéns a todos pelo empenho nos exercícios!\""
    }
  },
  {
    numero: 15,
    id: 15,
    bloco: 4,
    tipo: "fechamento",
    categoria: "Fechamento & Ponte",
    titulo: "Checklist de Bolso & Próximos Passos",
    subtitulo: "Leve estas regras para a sua rotina e prepare-se para o Encontro 4",
    conclusao: "A qualidade do resultado da IA reflete a clareza do contexto humano que a orienta.",
    badge: "ENCONTRO 3 CONCLUÍDO COM SUCESSO!",
    proximoEncontro: "Encontro 4 (13/11): Criação de Imagens e Multimodalidade (Áudio, Documentos e Análises Visuais)",
    lembretesFinais: [
      "Tratei a IA como um estagiário de alta capacidade que precisa de contexto e critérios?",
      "Incluí os 4 blocos: Contexto & Papel, Tarefa, Formato e Restrições Negativas?",
      "Anonimizei dados pessoais e informações sensíveis (Regra do Cartão-Postal)?",
      "Validei os fatos criticamente e usei a trava [necessita verificação]?"
    ],
    conducao: "Co-docência (Laura e Maria)",
    notasProfessora: {
      tempoSugerido: "10 min (02:50 - 03:00)",
      objetivoSlide: "Síntese final dos pilares da aula, reforço da reflexão ética e motivação para o próximo encontro.",
      oQueFalar: "(Maria) \"Para encerrar o nosso Encontro 3, levem este checklist de bolso para a vida de vocês! Sempre que forem usar o ChatGPT no trabalho ou nos estudos, lembrem-se: Contexto, Tarefa, Formato e Restrições!\" (Laura) \"E nunca se esqueçam de que a inteligência crítica e a decisão final continuam sendo de vocês. Na próxima aula (Encontro 4), daremos um salto incrível: vamos aprender sobre IA multimodal, trabalhando com imagens, documentos em PDF e áudio! Um grande abraço e até lá!\""
    }
  }
];

  // 5. Atividades Práticas e Laboratório
  /**
 * Módulo 3 – Atividades Práticas e Laboratório: ChatGPT no Mundo Real
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 * 
 * Especialidade: Engenharia de Prompt e Aplicações Práticas (Framework C-T-F-R & Meta-Prompting)
 * Ajustes Pedagógicos: Fragmentação em 2 etapas de bancada e trava [necessita verificação]
 */

const oficinaPratica = {
  isDiagnostica: false,
  titulo: "Oficina de Bancada: Do Pedido Simples ao Prompt Mestre (C-T-F-R)",
  tema: "Aplicações Reais no ChatGPT: Organização, Redação/Simplificação e Meta-Prompting",
  duracao: "40 a 45 minutos de Bancada nos Computadores (2 Etapas Fragmentadas)",
  peso: "Instrumento Formativo no Portfólio Digital • Encontro 3 (0,5 ponto)",
  conducao: "Co-docência (Profª Laura & Profª Maria com suporte individual nas mesas)",
  ferramenta: "Navegador Web + ChatGPT (Modo Chat Temporário / Convencional sem memórias)",
  objetivo: "Capacitar os participantes a construir instruções profissionais sob medida no ChatGPT aplicando os 4 Blocos da Estrutura Perfeita (Contexto & Papel, Tarefa, Formato e Restrições), dominar o diálogo iterativo através do Meta-Prompting e implementar travas de blindagem contra alucinações e riscos de privacidade.",

  situacaoProblema: {
    contexto: "No cotidiano de estudos e trabalho, a maioria dos usuários comete o erro do 'pedido de uma linha só' (ex: 'me ajude a planejar minha rotina' ou 'faça um e-mail sobre o projeto'). O resultado costuma ser vago, prolixo, recheado de clichês motivacionais ou dados imprecisos que exigem retrabalho e geram frustração.",
    missao: "Assumir o papel de gestor de um estagiário inteligente de alta capacidade: selecionar 1 tarefa real da sua rotina e executar a Etapa 1 (Duelo de Prompts: Simples vs. Mestre C-T-F-R por 20 min) e a Etapa 2 (Auto-Entrevista com Meta-Prompting e Trava [necessita verificação] por 15 min), registrando a evolução empírica no Portfólio Digital."
  },

  comoExecutar: [
    {
      etapa: 1,
      titulo: "Etapa 1 (20 min) — Passo A: O Disparo Ingênuo (Prompt Livre)",
      desc: "Abra um novo chat no ChatGPT e envie uma solicitação curta de 1 linha sobre uma tarefa real sua (ex: rotina, síntese ou resposta a um e-mail). Copie a resposta gerada e observe suas generalidades."
    },
    {
      etapa: 2,
      titulo: "Etapa 1 (20 min) — Passo B: A Engenharia dos 4 Blocos (Prompt Mestre)",
      desc: "Abra outro chat novo e reformule a solicitação aplicando os 4 blocos explícitos: [Contexto & Papel] seu papel e cenário; [Tarefa] ação com verbos diretos; [Formato] visual da saída (tabela ou tópicos); e [Restrições] travas de tempo e de não-invenção."
    },
    {
      etapa: 3,
      titulo: "Etapa 1 (20 min) — Passo C: Análise Crítica Comparativa",
      desc: "Coloque as duas respostas lado a lado. Identifique o ganho imediato de aplicabilidade, a eliminação de clichês e o impacto das restrições negativas."
    },
    {
      etapa: 4,
      titulo: "Intervenção Guiada (3 min) — Demonstração no Telão",
      desc: "Pausa verbal rápida com a turma para assistir à demonstração ao vivo de Meta-Prompting conduzida por Laura e Maria no projetor."
    },
    {
      etapa: 5,
      titulo: "Etapa 2 (15 min) — Meta-Prompting & Trava [necessita verificação]",
      desc: "Em um chat novo, use o prompt reverso: 'Antes de escrever, me faça 4 perguntas sobre meu cenário'. Responda à IA e inclua a trava: 'Marque qualquer dado não comprovado com [necessita verificação]'."
    }
  ],

  primeiraTentativa: {
    prompt: "Me ajude a organizar minha semana de trabalho e estudos.",
    problemasProvaveis: [
      "A IA não conhece a sua carga horária real nem o horário em que você rende melhor.",
      "Gera recomendações genéricas de autoajuda ('beba 2L de água', 'durma bem', 'faça pausas').",
      "Não define horários concretos nem estabelece prioridade entre tarefas fáceis e difíceis.",
      "Apresenta um bloco longo de texto corrido difícil de bater o olho e executar no dia a dia.",
      "Ignora suas restrições da vida real (filhos, deslocamento no trânsito, plantões ou imprevistos)."
    ]
  },

  segundaTentativa: {
    prompt: `[Contexto & Papel] Atue como um mentor executivo de produtividade e organização pessoal. Trabalho 8 horas por dia em regime presencial (das 8h às 17h) e tenho exatamente 1h30 líquida livre no período noturno (das 20h às 21h30) de segunda a quinta-feira.

[Tarefa Principal] Monte um plano semanal de estudos focado na revisão de 2 disciplinas (Tecnologia Aplicada e Gestão de Projetos), equilibrando leitura teórica com resolução de exercícios práticos.

[Formato de Saída] Apresente a resposta estritamente em uma tabela com as seguintes colunas:
1. Dia da Semana | 2. Horário Exato | 3. Disciplina | 4. Atividade Específica | 5. Técnica Recomendada (ex: Pomodoro, Leitura Ativa) | 6. Meta do Dia.

[Restrições & Limites Invioláveis]
- Não ultrapasse o limite rígido de 90 minutos diários.
- Reserve os últimos 15 minutos de cada dia para anotação de dúvidas.
- Não inclua nenhuma tarefa de estudo na sexta-feira à noite nem no domingo (dias de descanso sagrado).
- Não faça introduções prolixas nem conclusões com frases motivacionais: inicie a resposta diretamente na tabela.`
  },

  cincoElementos: [
    {
      elemento: "1. Contexto & Papel (Quem & Onde)",
      comoAparece: "[Contexto & Papel] 'Atue como mentor executivo... trabalho das 8h às 17h e tenho 1h30 livre à noite...'",
      funcao: "Ancora o espaço semântico da rede neural, integrando o Papel (Persona do PCTFR) com o cenário de restrições reais."
    },
    {
      elemento: "2. Tarefa Clara (O que fazer)",
      comoAparece: "[Tarefa] 'Monte um plano semanal de estudos focado na revisão de 2 disciplinas...'",
      funcao: "Define a meta direta com verbos de ação específicos, eliminando ambiguidade sobre qual entrega concreta é esperada."
    },
    {
      elemento: "3. Formato Específico (Como entregar)",
      comoAparece: "[Formato] 'Apresente estritamente em uma tabela com 6 colunas específicas...'",
      funcao: "Padroniza a estrutura visual da resposta para leitura imediata, evitando blocos prolixos de texto corrido."
    },
    {
      elemento: "4. Restrições Negativas (O que evitar)",
      comoAparece: "[Restrições] 'Não ultrapasse 90 min; sem estudos no domingo; sem introdução ou conclusões prolixas...'",
      funcao: "Fecha brechas probabilísticas, podando respostas genéricas, desvios de rota e alucinações de formato."
    },
    {
      elemento: "5. Trava Anti-Alucinação (Grounding)",
      comoAparece: "[Trava] 'Se não constar no material ou faltarem dados, responda não especificado ou marque com [necessita verificação]'",
      funcao: "Impede o modelo de inventar referências, datas, artigos de lei ou dados factuais quando houver incerteza."
    }
  ],

  comparacaoRespostas: [
    { pergunta: "A resposta do Prompt Livre serviria para você aplicar imediatamente amanhã de manhã?" },
    { pergunta: "Qual foi o impacto visual de exigir a resposta em formato de tabela em vez de texto corrido?" },
    { pergunta: "A restrição negativa ('não inclua tarefas no domingo') foi respeitada com exatidão pela IA?" },
    { pergunta: "Ao usar o Meta-Prompting na Etapa 2, as perguntas da IA ajudaram a lembrar detalhes que você tinha esquecido?" },
    { pergunta: "Onde você percebe que a revisão humana e o rótulo [necessita verificação] foram indispensáveis?" }
  ],

  reflexaoFinal: {
    perguntaGuia: "Qual elemento do framework C-T-F-R provocou a mudança mais radical na resposta do ChatGPT? Por que fazer a IA entrevistar você (Meta-Prompting) após ver a demonstração no telão tornou o processo mais seguro e produtivo?"
  },

  configuracaoChatGPT: [
    "Utilize preferencialmente o modo 'Chat Temporário' para garantir privacidade e evitar contaminação do histórico anterior.",
    "Caso utilize o chat convencional, desative as 'Instruções Personalizadas' (Custom Instructions) para testar o comportamento puro dos prompts.",
    "Mantenha cada missão em um chat novo e isolado para que o contexto de uma atividade não influencie a outra.",
    "Aplique a Regra do Cartão-Postal: nunca insira dados reais de clientes, nomes de alunos, senhas, CPFs ou relatórios médicos sigilosos.",
    "Utilize placeholders de anonimização: substitua dados confidenciais por [EMPRESA X], [ALUNO A] e [VALOR Y]."
  ],

  criteriosAvaliacao: [
    {
      criterio: "Estrutura do Prompt (C-T-F-R)",
      ponto1: "Prompt vago de 1 linha sem especificação de formato ou contexto.",
      ponto2: "Apresenta tarefa e contexto, mas não delimita formato ou restrições negativas.",
      ponto3: "Domínio pleno dos 4 blocos (Contexto & Papel, Tarefa, Formato e Restrições explícitas)."
    },
    {
      criterio: "Diálogo & Meta-Prompting",
      ponto1: "Aceita a primeira resposta sem refinamento ou iteração.",
      ponto2: "Solicita ajustes genéricos ('melhore o texto', 'ficou ruim').",
      ponto3: "Usa meta-prompting ('me faça perguntas'), ajusta turnos e refina com comandos cirúrgicos."
    },
    {
      criterio: "Validação Crítica & Segurança",
      ponto1: "Copia a resposta sem ler ou valida sem checar fatos.",
      ponto2: "Revisa apenas a gramática superficial, sem atentar para dados inventados.",
      ponto3: "Aplica travas anti-alucinação com rótulo [necessita verificação], anonimiza dados sensíveis e audita a veracidade."
    }
  ],

  diretrizesDocentes: [
    "Acolhimento Total ao Iniciante: reforçar que o Papel (Persona) do Encontro 2 continua vivo dentro do bloco de Contexto.",
    "Modelagem Visual Prévia: rodar rigorosamente a demonstração ao vivo de 3 minutos no projetor antes de soltar a turma para a Etapa 2 de Meta-Prompting.",
    "Fragmentação da Bancada: monitorar o tempo de 20 minutos para a Etapa 1 e fazer a pausa verbal de alinhamento antes da Etapa 2.",
    "Intervenção Cirúrgica: ao ver um aluno com resposta prolixa, ensine na hora o comando de poda: 'Reescreva a resposta anterior apenas nos tópicos 2 e 3 em 4 linhas'.",
    "Roda de Conversa: reservar os 15 minutos finais para valorizar a evolução de quem começou inseguro e conseguiu criar um prompt mestre."
  ],

  planoB: "Caso a conexão com o ChatGPT oscile no laboratório, as docentes projetarão o ChatGPT na tela central e conduzirão a oficina em modo de 'Prompt Coletivo': os alunos ditarão em voz alta as restrições e o contexto a partir das suas bancadas, acompanhando o antes e o depois no telão."
};

  // 6. Perguntas dos Alunos e Dúvidas Frequentes
  /**
 * Módulo 3 – Perguntas dos Alunos, Dúvidas Clássicas e Armadilhas de Engenharia de Prompt
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

const perguntasAlunos = [
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
    duvida: "Dizer 'Atue como um especialista em X' realmente melhora a qualidade da resposta ou é apenas um mito da internet?",
    resposta: "Funciona de verdade! Na engenharia de prompt, isso se chama 'Persona Prompting'. Quando você define um papel ('Atue como um auditor pedagógico experiente' ou 'Atue como um engenheiro eletricista'), você 'acende' clusters de conceitos e vocabulário técnico aprendidos durante o treinamento, elevando o rigor analítico e podando termos vagos de senso comum.",
    pontoDidatico: "Diferencie a persona 'cosmética' (dizer apenas 'seja inteligente') da persona contextualizada ('atue como orientador de estudos focado em estudantes trabalhadores').",
    dicaPratica: "Combine o papel com o público-alvo: 'Atue como um professor experiente explicando o conceito de autoatenção para alunos iniciantes sem conhecimento técnico prévio.'"
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
  }
];

  // 7. Divisão de Papéis e Co-Docência
  /**
 * Módulo 3 – Divisão de Papéis e Momentos da Co-Docência (Laura & Maria)
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

const divisaoPapeis = [
  { bloco: "Bloco 1 (00:00 - 00:15)", tema: "Acolhimento, Conexão com Encontros 1 & 2 e Onde Vamos Hoje (Slides 1 e 2)", papel: "ambas" },
  { bloco: "Bloco 1 (00:15 - 00:25)", tema: "A Metáfora do Estagiário Inteligente (Slide 3) • Condução: Laura", papel: "radio", padrao: "laura" },
  { bloco: "Bloco 1 (00:25 - 00:35)", tema: "Prompt or Flop? O Impacto da Clareza (Slide 4) • Condução: Maria", papel: "radio", padrao: "maria" },
  { bloco: "Bloco 1 (00:35 - 00:45)", tema: "Os 4 Blocos da Estrutura Perfeita (Slide 5) • Condução: Laura", papel: "radio", padrao: "laura" },
  { bloco: "Bloco 2 (00:45 - 00:55)", tema: "Camada 1: Organização Pessoal e Rotina (Slide 6) • Condução: Maria", papel: "radio", padrao: "maria" },
  { bloco: "Bloco 2 (00:55 - 01:05)", tema: "Camada 2: Redação e Simplificação Profissional (Slide 7) • Condução: Laura", papel: "radio", padrao: "laura" },
  { bloco: "Bloco 2 (01:05 - 01:15)", tema: "Regra do Cartão-Postal e Anonimização (Slide 8) • Condução: Maria", papel: "radio", padrao: "maria" },
  { bloco: "Intervalo (01:15 - 01:30)", tema: "Intervalo Pedagógico / Café com Prosa (Slide 9)", papel: "ambas" },
  { bloco: "Bloco 3 (01:30 - 01:45)", tema: "Camada 3: Diálogo Iterativo e Meta-Prompting (Slide 10) • Condução: Laura", papel: "radio", padrao: "laura" },
  { bloco: "Bloco 3 (01:45 - 02:00)", tema: "Agência Humana e Validação Crítica (UNESCO) (Slide 11) • Condução: Maria", papel: "radio", padrao: "maria" },
  { bloco: "Bloco 3 (02:00 - 02:40)", tema: "Oficina Prática de Bancada: Missão 1 e Missão 2 (Slides 12 e 13)", papel: "ambas" },
  { bloco: "Bloco 4 (02:40 - 03:00)", tema: "Roda de Socialização (Show & Tell) e Checklist de Bolso (Slides 14 e 15)", papel: "ambas" }
];

  // Normalização determinística de numeração e IDs dos slides no bundle
  if (Array.isArray(slidesComNotas)) {
    slidesComNotas.forEach(function (slide, idx) {
      slide.numero = idx + 1;
      slide.id = idx + 1;
    });
  }

  const ENCONTRO_3_DATA = {
    moduloInfo: moduloInfo,
    fioDaMeada: fioDaMeada,
    blocosTematicos: blocosTematicos,
    slidesComNotas: slidesComNotas,
    oficinaPratica: oficinaPratica,
    perguntasAlunos: perguntasAlunos,
    divisaoPapeis: divisaoPapeis,
    dossies: dossies
  };

  // Exposição Global no Navegador (Window) e Node.js
  if (typeof window !== 'undefined') {
    window.ENCONTRO_3_DATA = ENCONTRO_3_DATA;
    window.CURSO_IA_CURRENT_DATA = ENCONTRO_3_DATA;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ENCONTRO_3_DATA;
  }

  global.ENCONTRO_3_DATA = ENCONTRO_3_DATA;
  global.CURSO_IA_CURRENT_DATA = ENCONTRO_3_DATA;

})(typeof window !== 'undefined' ? window : globalThis);
