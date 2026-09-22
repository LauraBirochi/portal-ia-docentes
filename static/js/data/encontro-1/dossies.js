/**
 * Módulo 1 – Dossiês de Embasamento Científico, Filosófico e Jurídico
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const dossies = {
  // Dossiê 1: Slide 7 (Alan Turing e Conferência de Dartmouth)
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

  // Dossiê 2: Slide 14 (Teorema de Larry Tesler e o Efeito IA)
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

  // Dossiê 3: Slide 23 (Plano Brasileiro de IA - PBIA 2024-2028)
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

  // Dossiê 4: Slide 24 (Marco Legal da IA - PL 2338/2023 e LGPD)
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
