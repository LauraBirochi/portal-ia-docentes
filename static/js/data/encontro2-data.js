/**
 * Base de Dados Unificada – Módulo do Encontro 2 (30 Slides)
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 * 
 * ARQUIVO GERADO AUTOMATICAMENTE POR: scripts/build_data.py
 * FONTE ÚNICA DA VERDADE: static/js/data/encontro-2/
 * Edite os submódulos em static/js/data/encontro-2/ e execute 'python scripts/build_data.py'
 */

(function (global) {
  'use strict';

  // 1. Dossiês Científicos e Jurídicos
  /**
 * Módulo 2 – Dossiês de Embasamento Científico, Filosófico e Jurídico
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

const dossies = {
  transformersAttention: {
    tipoDossie: "cientifico",
    titulo: "Arquitetura Transformer e Mecanismo de Autoatenção (Vaswani et al., 2017)",
    resumo: "Como o artigo 'Attention Is All You Need' superou as limitações das redes recorrentes (RNNs/LSTMs) e permitiu o treinamento massivo paralelo que deu origem às LLMs modernas.",
    topicos: [
      {
        titulo: "1. O Fim do Gargalo Sequencial (RNNs vs Transformers)",
        conteudo: "Antes de 2017, modelos de linguagem processavam texto palavra por palavra sequencialmente. A arquitetura Transformer introduziu a autoatenção paralela, permitindo analisar todo o contexto simultaneamente."
      },
      {
        titulo: "2. Tokens e Espaço Vetorial de Significado (Embeddings)",
        conteudo: "Modelos de linguagem não operam com letras ou palavras humanas diretamente, mas com 'tokens' (fragmentos de palavras) mapeados em vetores numéricos multidimensionais de significado."
      },
      {
        titulo: "3. Previsão de Próximo Token e Probabilidade",
        conteudo: "Uma LLM calcula a distribuição de probabilidade condicional para determinar qual token tem maior verossimilhança estatística de continuar a sequência informada pelo prompt."
      }
    ],
    fontesCientificas: [
      {
        autor: "Vaswani, A. et al. (2017)",
        titulo: "Attention Is All You Need",
        publicacao: "Advances in Neural Information Processing Systems (NeurIPS 2017)",
        relevancia: "Artigo seminal da equipe do Google Brain que introduziu a arquitetura Transformer.",
        link: "https://arxiv.org/abs/1706.03762"
      },
      {
        autor: "Brown, T. et al. (2020)",
        titulo: "Language Models are Few-Shot Learners",
        publicacao: "NeurIPS 2020",
        relevancia: "Artigo inaugural do GPT-3 demonstrando capacidade emergente de generalização por prompts.",
        link: "https://arxiv.org/abs/2005.14165"
      }
    ]
  },
  privacidadeModelos: {
    tipoDossie: "juridico",
    titulo: "Privacidade, Dados de Treinamento e Segurança em Modelos de Linguagem",
    resumo: "Implicações de segurança, tratamento de dados sensíveis e governança sob a ótica da LGPD ao submeter informações a serviços públicos de IA.",
    topicos: [
      {
        titulo: "1. Termos de Uso e Retenção para Treinamento",
        conteudo: "Diferença crucial entre contas gratuitas com opt-out/opt-in para retreinamento de modelos e planos corporativos com garantias de privacidade de dados."
      },
      {
        titulo: "2. Princípios da LGPD Aplicados aos Prompts",
        conteudo: "Aplicação dos princípios da finalidade, necessidade e segurança da LGPD (Lei 13.709/2018) ao manipular dados pedagógicos e pessoais de estudantes em ferramentas externas."
      }
    ],
    fontesCientificas: [
      {
        autor: "ANPD (2023/2024)",
        titulo: "Diretrizes sobre Inteligência Artificial e Proteção de Dados Pessoais",
        publicacao: "Autoridade Nacional de Proteção de Dados",
        relevancia: "Guia orientador sobre conformidade de sistemas generativos de IA no Brasil.",
        link: "https://www.gov.br/anpd/pt-br"
      }
    ]
  }
};

  // 2. Metadados Curriculares e Blocos Temáticos
  /**
 * Módulo 2 – Metadados Curriculares e Blocos Temáticos
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

const moduloInfo = {
  numero: 2,
  total: 7,
  titulo: "O Salto da IA Generativa: Modelos, LLMs e Prompts Básicos",
  subtitulo: "Como acessar os modelos de IAGen, funcionamento das LLMs e criação de prompts básicos",
  cargaHoraria: "Encontro 2 • 3 horas presenciais (180 min)",
  modalidade: "Presencial em Laboratório de Informática",
  publico: "Iniciantes e público geral (sem pré-requisitos técnicos ou matemáticos)",
  ferramentaPrincipal: "Navegador Web + Ferramentas de IA Generativa",
  avaliacao: "Oficina Prática de Prompts Básicos (Instrumento Formativo)"
};

const blocosTematicos = [
  {
    id: 1,
    icone: "🤝",
    titulo: "Bloco 1: Acolhimento & Retomada Pedagógica",
    subtitulo: "Revisão dos mitos do Encontro 1, verificação de acesso nos computadores e apresentação dos objetivos",
    slidesRange: [1, 5],
    tempoEstimado: "25 min"
  },
  {
    id: 2,
    icone: "⚡",
    titulo: "Bloco 2: O Salto dos Transformers & Funcionamento das LLMs",
    subtitulo: "Previsão probabilística do próximo token, autocompletar inteligente e diferença entre saber e prever",
    slidesRange: [6, 11],
    tempoEstimado: "30 min",
    conducao: "Maria"
  },
  {
    id: 3,
    icone: "🧭",
    titulo: "Bloco 3: O Ecossistema de Modelos de IAGen",
    subtitulo: "Comparação de interfaces, planos gratuitos e janelas de contexto (ChatGPT, Gemini, Claude, Copilot)",
    slidesRange: [12, 17],
    tempoEstimado: "30 min",
    conducao: "Laura"
  },
  {
    id: 4,
    icone: "✍️",
    titulo: "Bloco 4: Anatomia de um Prompt Básico",
    subtitulo: "Estrutura essencial: instrução clara, contexto inicial, restrições e formato desejado",
    slidesRange: [18, 23],
    tempoEstimado: "25 min",
    conducao: "Maria"
  },
  {
    id: 5,
    icone: "💻",
    titulo: "Bloco 5: Oficina Prática no Laboratório",
    subtitulo: "Mão na massa nos computadores: testes comparativos e refinamento de prompts em dupla",
    slidesRange: [24, 28],
    tempoEstimado: "45 min",
    conducao: "Laura"
  },
  {
    id: 6,
    icone: "🎯",
    titulo: "Bloco 6: Síntese Formativa & Fechamento",
    subtitulo: "Compartilhamento dos achados, dúvidas comuns e contrato pedagógico para o Encontro 3",
    slidesRange: [29, 30],
    tempoEstimado: "25 min"
  }
];

  // 3. Fio da Meada e Narrativa Pedagógica
  /**
 * Módulo 2 – Fio da Meada, Narrativa em 3 Atos e Glossário Rápido
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

const fioDaMeada = {
  objetivoCentral: "Qual é a grande mensagem que os alunos precisam levar hoje?",
  mensagemChave: "Modelos de IA Generativa não 'pensam' nem possuem consciência: são calculadoras estatísticas de alta precisão que prevêem o próximo token a partir das instruções e do contexto que fornecemos no prompt.",
  explicacaoObjetivo: "Desmistificar o funcionamento interno das LLMs, ambientar todos os participantes no acesso às ferramentas gratuitas reais e capacitá-los na estruturação de prompts elementares funcionais e seguros.",
  atos: [
    {
      ato: 1,
      tempo: "00h00 às 00h55 (55 min)",
      titulo: "Retomada, O Salto Tecnológico & Como as LLMs Operam",
      desc: "Acolhimento da turma, alinhamento dos objetivos da aula e desmistificação do funcionamento dos Transformers: como o modelo fatia o texto em tokens e prevê a continuação estatisticamente mais provável.",
      gatilho: "A IA não tem opinião nem busca em enciclopédias como o Google: ela calcula qual palavra faz mais sentido vir em seguida com base no que aprendeu com bilhões de textos!"
    },
    {
      ato: 2,
      tempo: "00h55 às 02h05 (70 min c/ Intervalo)",
      titulo: "O Ecossistema de Ferramentas, Anatomia do Prompt & Intervalo",
      desc: "Navegação guiada pelos principais modelos de mercado (ChatGPT, Gemini, Claude, Copilot), diferenças práticas de interface e apresentação dos 4 pilares de um prompt básico.",
      gatilho: "A qualidade da resposta da IA é um espelho direto da clareza e do contexto da sua pergunta!"
    },
    {
      ato: 3,
      tempo: "02h05 às 03h00 (55 min)",
      titulo: "Oficina no Laboratório, Síntese & Próximos Passos",
      desc: "Prática mão na massa nos computadores: primeiro prompt supervisionado, testes comparativos em duplas e roda de conversa com síntese e preparação para o Módulo 3.",
      gatilho: "Hoje vocês dominaram os primeiros comandos; no Encontro 3, refinaremos essa técnica com engenharia de instruções avançada!"
    }
  ],
  glossario: [
    {
      termo: "LLM (Large Language Model)",
      def: "Modelo de Linguagem de Grande Escala: rede neural profunda treinada em volumes massivos de texto para compreender padrões linguísticos e gerar respostas coerentes."
    },
    {
      termo: "Token",
      def: "Unidade básica de processamento dos modelos de linguagem. Pode representar uma palavra, parte de uma palavra ou até um único caractere pontual (em média, 100 tokens equivalem a ~75 palavras)."
    },
    {
      termo: "Prompt",
      def: "A instrução, comando, contexto ou pergunta enviada pelo usuário para guiar a resposta gerada pelo modelo de inteligência artificial."
    },
    {
      termo: "Janela de Contexto",
      def: "A quantidade máxima de texto (em tokens) que um modelo consegue 'lembrar' e processar simultaneamente em uma mesma conversa."
    },
    {
      termo: "Alucinação",
      def: "Quando o modelo gera respostas factualmente incorretas, inventadas ou fictícias com tom de convicção absoluta e fluência gramatical perfeita."
    }
  ]
};

  // 4. Slides com Notas da Professora
  /**
 * Módulo 2 – Deck de Slides com Roteiro da Docente para o Projetor
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

const slidesComNotas = [
  // =========================================================================
  // BLOCO 1: ACOLHIMENTO & RETOMADA PEDAGÓGICA (Slides 1 a 5)
  // =========================================================================
  {
    numero: 1,
    id: 1,
    bloco: 1,
    tipo: "abertura",
    titulo: "O Salto da IA Generativa",
    subtitulo: "Modelos, Funcionamento das LLMs e Prompts Básicos",
    layout: "hero-cover",
    conducao: "Co-docência (Laura & Maria)",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Boas-vindas ao Encontro 2, acolhimento afetivo e contextualização da jornada.",
      falaSugerida: "Olá a todos! Sejam muito bem-vindos ao nosso segundo encontro. Hoje damos o salto da IA que apenas classifica para a IA que cria e gera conteúdos.",
      pontosAtencao: "Garantir que todos os participantes estejam acomodados com computador ligado."
    }
  },
  {
    numero: 2,
    id: 2,
    bloco: 1,
    tipo: "conceito",
    titulo: "Retomada do Encontro 1: O que já sabemos?",
    subtitulo: "A IA não é mágica, não possui consciência e opera por reconhecimento de padrões",
    layout: "duas-colunas",
    conducao: "Co-docência (Laura & Maria)",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Breve revisão dos pilares do Encontro 1 para garantir nivelamento da turma.",
      falaSugerida: "No primeiro encontro desmistificamos os grandes mitos: vimos que a IA não é consciente e que opera por matemática em dados.",
      pontosAtencao: "Validar se alguém faltou no primeiro encontro e tranquilizar sobre a continuidade."
    }
  },
  {
    numero: 3,
    id: 3,
    bloco: 1,
    tipo: "cronograma",
    titulo: "Nosso Mapa de Voo – Encontro 2",
    subtitulo: "Como organizaremos nossas 3 horas de aprendizagem hoje",
    layout: "timeline-grid",
    conducao: "Co-docência (Laura & Maria)",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Apresentação da pauta e estrutura dos blocos do dia.",
      falaSugerida: "Hoje passaremos pelo funcionamento interno dos modelos, conheceremos as ferramentas gratuitas e faremos uma oficina prática de prompts.",
      pontosAtencao: "Ressaltar o intervalo pedagógico previsto na metade da aula."
    }
  },
  {
    numero: 4,
    id: 4,
    bloco: 1,
    tipo: "conceito",
    titulo: "Da IA Preditiva à IA Generativa",
    subtitulo: "A grande mudança de paradigma que aconteceu na última década",
    layout: "duas-colunas",
    conducao: "Maria",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Diferenciar modelos preditivos/classificadores de modelos generativos.",
      falaSugerida: "Antes a IA apenas filtrava spams e sugeria rotas. Agora, a IA é capaz de produzir novos textos, códigos, imagens e áudios a partir de comandos.",
      pontosAtencao: "Utilizar analogias simples do dia a dia."
    }
  },
  {
    numero: 5,
    id: 5,
    bloco: 1,
    tipo: "secao",
    titulo: "Por Dentro do Cérebro da Máquina",
    subtitulo: "Como as Large Language Models (LLMs) realmente funcionam?",
    layout: "secao-impacto",
    conducao: "Maria",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Transição para o Bloco 2.",
      falaSugerida: "Vamos abrir a caixa-preta da IA. Como um computador consegue responder com frases perfeitas em português?",
      pontosAtencao: "Preparar o quadro ou recursos visuais de tokens."
    }
  },

  // =========================================================================
  // BLOCO 2: O SALTO DOS TRANSFORMERS & FUNCIONAMENTO DAS LLMS (Slides 6 a 11)
  // =========================================================================
  {
    numero: 6,
    id: 6,
    bloco: 2,
    tipo: "conceito",
    titulo: "O que é uma LLM (Large Language Model)?",
    subtitulo: "Redes neurais treinadas em bilhões de páginas de texto humano",
    layout: "cards-conceituais",
    conducao: "Maria",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Definição de modelos de linguagem de grande escala sem jargões matemáticos.",
      falaSugerida: "Uma LLM é um sistema computacional treinado com uma biblioteca gigantesca de textos para aprender as regras e estilos da linguagem humana.",
      pontosAtencao: "Evitar formalismos desnecessários."
    }
  },
  {
    numero: 7,
    id: 7,
    bloco: 2,
    tipo: "conceito",
    titulo: "A Unidade Básica: O que são Tokens?",
    subtitulo: "A máquina não lê letras nem palavras inteiras: ela calcula fragmentos",
    layout: "visual-exemplo",
    conducao: "Maria",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Explicar como o texto é quebrado em tokens numéricos.",
      falaSugerida: "Para o computador, cada frase é dividida em pedacinhos chamados tokens, cada um representado por um número.",
      pontosAtencao: "Mostrar o exemplo prático de tokenização."
    }
  },
  {
    numero: 8,
    id: 8,
    bloco: 2,
    tipo: "conceito",
    titulo: "A Mágica da Previsão: O Próximo Token",
    subtitulo: "Por que uma LLM pode ser compreendida como um 'super autocompletar'",
    layout: "duas-colunas",
    conducao: "Maria",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Desmistificar a geração textual como cálculo estatístico condicional.",
      falaSugerida: "A cada palavra digitada, a IA calcula qual token tem maior probabilidade estatística de vir em seguida.",
      pontosAtencao: "Fazer analogia com o teclado preditivo do celular."
    }
  },
  {
    numero: 9,
    id: 9,
    bloco: 2,
    tipo: "dossie",
    titulo: "Dossiê Científico: O Mecanismo de Autoatenção",
    subtitulo: "A revolução do artigo 'Attention Is All You Need' (Vaswani et al., 2017)",
    layout: "dossie-tecnico",
    dossieKey: "transformersAttention",
    conducao: "Maria",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Apresentar a base científica do Transformer e autoatenção.",
      falaSugerida: "Em 2017 pesquisadores do Google desenvolveram a autoatenção, que permite à máquina olhar para todas as palavras da frase ao mesmo tempo.",
      pontosAtencao: "Destacar que este dossiê está disponível para leitura no Cockpit."
    }
  },
  {
    numero: 10,
    id: 10,
    bloco: 2,
    tipo: "conceito",
    titulo: "Probabilidade vs Compreensão Real",
    subtitulo: "Por que a fluência gramatical não garante a verdade dos fatos",
    layout: "alerta-pedagogico",
    conducao: "Maria",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Explicar a origem das alucinações a partir da previsão probabilística.",
      falaSugerida: "A IA é especialista em parecer convincente. Porém, como não tem consciência do mundo real, pode inventar respostas verossímeis.",
      pontosAtencao: "Fixar a necessidade de verificação ativa pelo humano."
    }
  },
  {
    numero: 11,
    id: 11,
    bloco: 2,
    tipo: "secao",
    titulo: "Conhecendo o Ecossistema de Ferramentas",
    subtitulo: "Quais são os principais modelos disponíveis e como acessá-los?",
    layout: "secao-impacto",
    conducao: "Laura",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Transição para o Bloco 3, passando a fala para Laura.",
      falaSugerida: "Agora que entendemos a engenharia interna, vamos conhecer as ferramentas práticas que utilizaremos no laboratório.",
      pontosAtencao: "Verificar se as telas dos computadores estão nos navegadores."
    }
  },

  // =========================================================================
  // BLOCO 3: O ECOSSISTEMA DE MODELOS DE IAGEN (Slides 12 a 17)
  // =========================================================================
  {
    numero: 12,
    id: 12,
    bloco: 3,
    tipo: "comparativo",
    titulo: "Os Grandes Modelos do Mercado Atual",
    subtitulo: "ChatGPT (OpenAI), Gemini (Google), Claude (Anthropic) e Copilot (Microsoft)",
    layout: "quadro-comparativo",
    conducao: "Laura",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Apresentar o panorama das principais plataformas de IA Generativa.",
      falaSugerida: "Hoje temos quatro grandes referências de mercado, cada uma com seus diferenciais e características próprias.",
      pontosAtencao: "Mostrar os logotipos e interfaces conhecidas."
    }
  },
  {
    numero: 13,
    id: 13,
    bloco: 3,
    tipo: "conceito",
    titulo: "Gratuito vs Pago: O que muda na prática?",
    subtitulo: "Entenda os limites de mensagens, velocidade e modelos de raciocínio",
    layout: "tabela-clara",
    conducao: "Laura",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Esclarecer que as versões gratuitas atendem perfeitamente aos propósitos da formação.",
      falaSugerida: "Você não precisa gastar nenhum centavo: as contas gratuitas já entregam capacidade excepcional para nosso aprendizado.",
      pontosAtencao: "Aliviar preocupações com assinaturas financeiras."
    }
  },
  {
    numero: 14,
    id: 14,
    bloco: 3,
    tipo: "conceito",
    titulo: "O que é Janela de Contexto?",
    subtitulo: "A 'memória de trabalho' do modelo durante uma conversa",
    layout: "duas-colunas",
    conducao: "Laura",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Conceituar memória de sessão e tamanho de contexto.",
      falaSugerida: "A janela de contexto é o limite de leitura que a IA consegue manter na memória ativa de um único diálogo.",
      pontosAtencao: "Explicar por que conversas muito longas podem 'esquecer' instruções iniciais."
    }
  },
  {
    numero: 15,
    id: 15,
    bloco: 3,
    tipo: "dossie",
    titulo: "Dossiê Jurídico: Privacidade e Proteção de Dados (LGPD)",
    subtitulo: "Cuidados indispensáveis ao submeter informações nas plataformas públicas",
    layout: "dossie-tecnico",
    dossieKey: "privacidadeModelos",
    conducao: "Maria",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Abordar as diretrizes de privacidade ao usar ferramentas em nuvem.",
      falaSugerida: "Nunca compartilhe dados pessoais de alunos, documentos sigilosos ou senhas nos chats das IAs públicas.",
      pontosAtencao: "Reforçar as responsabilidades éticas e legais com a LGPD."
    }
  },
  {
    numero: 16,
    id: 16,
    bloco: 3,
    tipo: "conceito",
    titulo: "Como Criar Conta e Acessar com Segurança",
    subtitulo: "Passo a passo no navegador utilizando sua conta institucional ou pessoal",
    layout: "passo-a-passo",
    conducao: "Laura",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Orientações para o login que será realizado na oficina prática.",
      falaSugerida: "Mostraremos na tela como fazer o login seguro direto pelo navegador, sem necessidade de instalar programas pesados.",
      pontosAtencao: "Orientar os participantes a terem a senha do e-mail em mãos."
    }
  },
  {
    numero: 17,
    id: 17,
    bloco: 3,
    tipo: "secao",
    titulo: "A Arte de Conversar com a Máquina",
    subtitulo: "O que torna um prompt eficiente, claro e produtivo?",
    layout: "secao-impacto",
    conducao: "Maria",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Transição para o Bloco 4 antes do intervalo ou após o intervalo.",
      falaSugerida: "Saber pedir é a chave do sucesso na IA. Vamos agora entender como montar um prompt de alta qualidade.",
      pontosAtencao: "Convidar a turma a pensar nas perguntas que costumam fazer aos computadores."
    }
  },

  // =========================================================================
  // BLOCO 4: ANATOMIA DE UM PROMPT BÁSICO (Slides 18 a 23)
  // =========================================================================
  {
    numero: 18,
    id: 18,
    bloco: 4,
    tipo: "conceito",
    titulo: "O que é um Prompt?",
    subtitulo: "A ponte de comunicação e alinhamento entre o humano e o modelo",
    layout: "cards-conceituais",
    conducao: "Maria",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Definição de prompt como instrução contextualizada.",
      falaSugerida: "Um prompt não é apenas uma palavra solta de busca: é uma instrução rica com contexto, intenção e objetivos definidos.",
      pontosAtencao: "Contrastar uma busca no Google com um prompt conversacional."
    }
  },
  {
    numero: 19,
    id: 19,
    bloco: 4,
    tipo: "conceito",
    titulo: "Os 4 Pilares de um Prompt Básico",
    subtitulo: "Instrução Clara, Contexto, Exemplos e Formato de Saída",
    layout: "pilares-grid",
    conducao: "Maria",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Estrutura fundamental de um bom prompt elementar.",
      falaSugerida: "Para obter uma resposta precisa, forneça: 1) o que fazer, 2) quem é o público, 3) restrições e 4) como formatar.",
      pontosAtencao: "Destacar a simplicidade e eficácia da estrutura."
    }
  },
  {
    numero: 20,
    id: 20,
    bloco: 4,
    tipo: "comparativo",
    titulo: "Prompt Vago vs Prompt Eficaz",
    subtitulo: "Veja a diferença real no resultado gerado pela mesma ferramenta",
    layout: "duas-colunas-exemplo",
    conducao: "Maria",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Demonstração prática de um prompt genérico versus contextualizado.",
      falaSugerida: "Pedir 'faça um plano de aula' gera algo genérico. Adicionar série, tema, tempo e objetivo transforma o resultado.",
      pontosAtencao: "Pedir que os alunos comentem qual resposta preferem."
    }
  },
  {
    numero: 21,
    id: 21,
    bloco: 4,
    tipo: "conceito",
    titulo: "O Papel das Restrições Negativas",
    subtitulo: "Dizer o que NÃO fazer é tão importante quanto dizer o que fazer",
    layout: "destaque-dica",
    conducao: "Maria",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Importância de impor limites (ex: sem termos técnicos, máximo de 3 parágrafos).",
      falaSugerida: "Quando você diz 'não use jargões complexos' e 'limite a 5 tópicos', você calibra a probabilidade dos tokens certos.",
      pontosAtencao: "Incentivar o uso consciente de restrições."
    }
  },
  {
    numero: 22,
    id: 22,
    bloco: 4,
    tipo: "conceito",
    titulo: "Iteração: A Conversa não Acaba no 1º Prompt",
    subtitulo: "Aprenda a dialogar, corrigir e refinar a resposta passo a passo",
    layout: "ciclo-iterativo",
    conducao: "Maria",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Desmistificar a necessidade de acertar o prompt perfeito de primeira.",
      falaSugerida: "A IA é um diálogo. Se a primeira resposta ficou longa, peça para resumir; se faltou um tópico, peça para complementar.",
      pontosAtencao: "Tranquilizar quem sente insegurança em digitar comandos perfeitos."
    }
  },
  {
    numero: 23,
    id: 23,
    bloco: 4,
    tipo: "secao",
    titulo: "Hora do Laboratório Prático",
    subtitulo: "Mãos no teclado: vamos colocar os prompts em ação!",
    layout: "secao-impacto",
    conducao: "Laura",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Transição para o Bloco 5 de prática nos computadores.",
      falaSugerida: "Chega de teoria por agora! Vamos abrir as ferramentas nos computadores e testar os primeiros comandos.",
      pontosAtencao: "Indicar que Laura coordenará as bancadas com apoio de Maria."
    }
  },

  // =========================================================================
  // BLOCO 5: OFICINA PRÁTICA NO LABORATÓRIO (Slides 24 a 28)
  // =========================================================================
  {
    numero: 24,
    id: 24,
    bloco: 5,
    tipo: "laboratorio",
    titulo: "Missão 1: Acesso e Primeiro Prompt Guiado",
    subtitulo: "Abra o navegador, acesse o modelo e envie o prompt de teste inicial",
    layout: "instrucoes-praticas",
    conducao: "Laura",
    notasProfessora: {
      duracaoSugerida: "10 min",
      resumo: "Supervisão do acesso e disparo do primeiro prompt padronizado.",
      falaSugerida: "Sigam o passo a passo na tela. Vamos todos digitar juntos o mesmo comando para ver as respostas geradas.",
      pontosAtencao: "Verificar se todos conseguiram carregar a página da IA."
    }
  },
  {
    numero: 25,
    id: 25,
    bloco: 5,
    tipo: "laboratorio",
    titulo: "Missão 2: Comparação de Dois Modelos",
    subtitulo: "Envie o mesmo comando no ChatGPT e no Gemini e observe as diferenças",
    layout: "comparacao-pratica",
    conducao: "Laura",
    notasProfessora: {
      duracaoSugerida: "15 min",
      resumo: "Exercício de análise comparativa de estilo, extensão e precisão.",
      falaSugerida: "Observem como um modelo é mais direto e outro traz formatações diferentes para a mesma pergunta.",
      pontosAtencao: "Estimular a curiosidade e o olhar crítico dos participantes."
    }
  },
  {
    numero: 26,
    id: 26,
    bloco: 5,
    tipo: "laboratorio",
    titulo: "Missão 3: Refinamento Iterativo em Dupla",
    subtitulo: "Faça 3 pedidos consecutivos ajustando tom, tamanho e formato",
    layout: "desafio-dupla",
    conducao: "Laura",
    notasProfessora: {
      duracaoSugerida: "10 min",
      resumo: "Prática de iteração e refinamento conversacional em bancadas.",
      falaSugerida: "Peçam para a IA reescrever a resposta como se fosse para uma criança de 10 anos e depois em formato de tabela.",
      pontosAtencao: "Celebrar as descobertas que surgirem nas bancadas."
    }
  },
  {
    numero: 27,
    id: 27,
    bloco: 5,
    tipo: "conceito",
    titulo: "Armadilhas Observadas na Prática",
    subtitulo: "Alucinações sutis, respostas genéricas e excesso de confiança",
    layout: "alerta-pedagogico",
    conducao: "Laura & Maria",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Pausa no laboratório para comentar armadilhas encontradas pelos alunos.",
      falaSugerida: "Alguém percebeu alguma informação estranha ou excessivamente genérica? Vamos analisar juntos.",
      pontosAtencao: "Validar exemplos reais que aconteceram nas bancadas."
    }
  },
  {
    numero: 28,
    id: 28,
    bloco: 5,
    tipo: "secao",
    titulo: "Consolidação e Síntese da Aprendizagem",
    subtitulo: "O que levamos deste segundo encontro para o nosso dia a dia?",
    layout: "secao-impacto",
    conducao: "Co-docência (Laura & Maria)",
    notasProfessora: {
      duracaoSugerida: "5 min",
      resumo: "Transição para o Bloco 6 de encerramento.",
      falaSugerida: "Vamos reunir as impressões da turma e sintetizar os aprendizados do dia.",
      pontosAtencao: "Pedir que os participantes guardem seus prompts preferidos."
    }
  },

  // =========================================================================
  // BLOCO 6: SÍNTESE FORMATIVA & FECHAMENTO (Slides 29 e 30)
  // =========================================================================
  {
    numero: 29,
    id: 29,
    bloco: 6,
    tipo: "conceito",
    titulo: "Síntese dos Grandes Aprendizados do Dia",
    subtitulo: "As 3 certezas essenciais que você leva para casa hoje",
    layout: "cards-conclusao",
    conducao: "Co-docência (Laura & Maria)",
    notasProfessora: {
      duracaoSugerida: "15 min",
      resumo: "Recapitulação dos pontos centrais da aula.",
      falaSugerida: "Hoje compreendemos o que é um token, desmistificamos as LLMs e descobrimos que um bom prompt faz toda a diferença.",
      pontosAtencao: "Abrir para 2 a 3 depoimentos rápidos de alunos."
    }
  },
  {
    numero: 30,
    id: 30,
    bloco: 6,
    tipo: "fechamento",
    titulo: "Próxima Parada: Encontro 3 (06/11)",
    subtitulo: "A Arte do Prompt – Engenharia de Instruções e o Método PCTFR",
    layout: "convite-proximo",
    conducao: "Co-docência (Laura & Maria)",
    notasProfessora: {
      duracaoSugerida: "10 min",
      resumo: "Encerramento formal, agradecimentos e gancho para o Encontro 3.",
      falaSugerida: "No próximo encontro aprenderemos a metodologia PCTFR para criar instruções de alta precisão. Parabéns a todos pelo trabalho hoje!",
      pontosAtencao: "Orientar o desligamento seguro dos computadores do laboratório."
    }
  }
];

  // 5. Atividades Práticas e Laboratório
  /**
 * Módulo 2 – Atividades Práticas e Laboratório
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

const oficinaPratica = {
  isDiagnostica: false,
  titulo: "Oficina Prática de Laboratório: Primeiros Acessos e Prompts Básicos",
  duracao: "45 minutos em Laboratório",
  peso: "Instrumento Formativo Prático",
  ferramenta: "Navegador Web (Google Chrome / Edge) + ChatGPT / Google Gemini",
  descricao: "Atividade prática nos computadores individuais do laboratório. Cada participante fará login em sua conta e executará um exercício estruturado de prompts básicos, comparando respostas e aplicando técnicas de instrução clara e contexto.",
  diretrizesDocentes: [
    "Apoiar os participantes que encontrarem dificuldades com senha ou confirmação de login.",
    "Orientar a turma a digitar o prompt inicial padronizado no projetor para comparação visual.",
    "Estimular a comparação entre a resposta gerada por dois modelos diferentes (ex: ChatGPT e Gemini).",
    "Auxiliar os alunos a identificar nuances de estilo e possíveis alucinações na resposta.",
    "Laura & Maria circulam pelo laboratório prestando auxílio individualizado nas bancadas."
  ],
  planoB: "Caso algum aluno enfrente bloqueio temporário de conta ou instabilidade de rede, organizar duplas de trabalho para que nenhum participante fique sem praticar."
};

  // 6. Perguntas dos Alunos e Dúvidas Frequentes
  /**
 * Módulo 2 – Perguntas dos Alunos, Dúvidas Clássicas e Armadilhas Pedagógicas
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

const perguntasAlunos = [
  {
    numero: 1,
    duvida: "Qual é a diferença real entre o ChatGPT, o Gemini e o Copilot?",
    resposta: "Todos são interfaces baseadas em Large Language Models (LLMs), mas foram treinados por empresas diferentes (OpenAI, Google e Microsoft) com conjuntos de dados, alinhamentos e integrações distintas. O ChatGPT destaca-se pela versatilidade em conversação e raciocínio textual; o Gemini integra-se fortemente ao ecossistema Google e pesquisa em tempo real; o Copilot conecta-se aos aplicativos da Microsoft e ambiente Web.",
    pontoDidatico: "Destaque que o fundamento da tecnologia (Transformer/Tokens) é similar em todos, mudando a interface e os pontos fortes."
  },
  {
    numero: 2,
    duvida: "Preciso pagar a versão 'Plus' ou 'Pro' para conseguir usar a IA no dia a dia?",
    resposta: "Não. Para a imensa maioria das tarefas cotidianas, pedagógicas, de escrita e de produtividade, as versões gratuitas disponibilizadas atualmente atendem com excelente qualidade. As assinaturas pagas trazem prioritariamente modelos de raciocínio mais recentes, maiores limites de uso e recursos avançados de análise de dados pesados.",
    pontoDidatico: "Tranquilize a turma quanto ao custo financeiro: todo o aprendizado deste curso é 100% praticável em planos gratuitos."
  },
  {
    numero: 3,
    duvida: "A IA guarda tudo o que eu digito para treinar as próximas versões?",
    resposta: "Por padrão, contas gratuitas podem utilizar interações para refinamento contínuo dos modelos, a menos que o usuário desative essa opção nas configurações de privacidade de dados. Por essa razão, a regra de ouro é nunca inserir senhas, dados bancários ou informações sensíveis/pessoais de terceiros nos prompts.",
    pontoDidatico: "Reforce a cultura de responsabilidade e privacidade de dados (LGPD) aprendida no Encontro 1."
  },
  {
    numero: 4,
    duvida: "Por que às vezes a IA responde algo completamente errado com tanta segurança?",
    resposta: "Porque a IA não tem um modelo de mundo ou compromisso intrínseco com a verdade: ela prevê a sequência de palavras que soa mais coerente estatisticamente para o prompt recebido. Quando falta informação factual no treinamento ou o prompt é ambíguo, ela preenche a lacuna prevendo tokens verossímeis, gerando o que chamamos de alucinação.",
    pontoDidatico: "Ensine os alunos a adotarem sempre a postura de copiloto e revisor crítico da resposta (Human-in-the-loop)."
  }
];

  // 7. Divisão de Papéis e Co-Docência
  /**
 * Módulo 2 – Divisão de Papéis e Momentos da Co-Docência (Laura & Maria)
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

const divisaoPapeis = [
  { bloco: "Bloco 1 (00h-25m)", tema: "Acolhimento, Retomada do Encontro 1 & Objetivos (Slides 1 a 5)", papel: "radio" },
  { bloco: "Bloco 2 (25m-55m)", tema: "O Salto dos Transformers & Funcionamento das LLMs (Slides 6 a 11) • Condução: Maria", papel: "radio", padrao: "maria" },
  { bloco: "Bloco 3 (55m-85m)", tema: "O Ecossistema de Modelos de IAGen (Slides 12 a 17) • Condução: Laura", papel: "radio", padrao: "laura" },
  { bloco: "Intervalo (15m)", tema: "Intervalo Pedagógico / Café com Prosa (Atalho Tecla I)", papel: "ambas" },
  { bloco: "Bloco 4 (100m-125m)", tema: "Anatomia de um Prompt Básico (Slides 18 a 23) • Condução: Maria", papel: "radio", padrao: "maria" },
  { bloco: "Bloco 5 (125m-170m)", tema: "Oficina Prática no Laboratório (Slides 24 a 28) • Condução: Laura", papel: "radio", padrao: "laura" },
  { bloco: "Bloco 6 (170m-180m)", tema: "Síntese Formativa & Fechamento (Slides 29 a 30)", papel: "ambas" }
];

  // Normalização determinística de numeração e IDs dos slides no bundle
  if (Array.isArray(slidesComNotas)) {
    slidesComNotas.forEach(function (slide, idx) {
      slide.numero = idx + 1;
      slide.id = idx + 1;
    });
  }

  const ENCONTRO_2_DATA = {
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
    window.ENCONTRO_2_DATA = ENCONTRO_2_DATA;
    window.CURSO_IA_CURRENT_DATA = ENCONTRO_2_DATA;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ENCONTRO_2_DATA;
  }

  global.ENCONTRO_2_DATA = ENCONTRO_2_DATA;
  global.CURSO_IA_CURRENT_DATA = ENCONTRO_2_DATA;

})(typeof window !== 'undefined' ? window : globalThis);
