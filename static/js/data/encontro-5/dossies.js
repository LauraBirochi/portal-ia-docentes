/**
 * Módulo 5 – Dossiês de Embasamento Científico, Técnico e Pedagógico
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const dossies = {
  arquiteturaRAG: {
    tipoDossie: "cientifico",
    titulo: "Arquiteturas RAG (Retrieval-Augmented Generation): Aberto vs. Fechado",
    resumo: "Fundamentos teóricos e técnicos de modelos de linguagem combinados com mecanismos de recuperação de informação, comparando busca aberta na web com indexação vetorial em corpus documental fechado.",
    topicos: [
      {
        titulo: "1. O Paradigma RAG (Lewis et al., 2020)",
        conteudo: "Modelos de linguagem paramétricos (como GPT-4) possuem limites rígidos de data de corte e tendência a alucinações factuais. A técnica de Recuperação Aumentada por Geração (RAG) desacopla a memória paramétrica da factual: diante de uma pergunta, um módulo recuperador busca passagens relevantes em bases externas e as injeta no contexto da janela de atenção antes da geração da resposta."
      },
      {
        titulo: "2. RAG Aberto na Web (Perplexity & Search Engines Neurais)",
        conteudo: "No RAG aberto, o recuperador faz varreduras em motores de busca na internet em tempo real, filtra os trechos mais promissores, atribui índices numéricos de citação e instrui o modelo sintetizador a apoiar cada oração declarativa em uma fonte URL rastreável."
      },
      {
        titulo: "3. RAG Fechado em Corpus Pessoal (NotebookLM & Embeddings Locais)",
        conteudo: "No RAG fechado, o espaço de busca é rigidamente delimitado aos documentos fornecidos pelo usuário (PDFs, Docs, apresentações). Os textos são fragmentados em pedaços (chunks), convertidos em vetores semânticos (embeddings) e armazenados em uma base vetorial. O modelo é instruído a responder estritamente com base nesses fragmentos e a recusar extrapolações se o dado estiver ausente."
      }
    ],
    fontesCientificas: [
      {
        autor: "Lewis, P. et al. (2020)",
        titulo: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
        publicacao: "Advances in Neural Information Processing Systems (NeurIPS 2020)",
        relevancia: "Artigo seminal que formalizou a arquitetura RAG combinando modelos neurais geradores e recuperadores densos.",
        link: "https://arxiv.org/abs/2005.11401"
      },
      {
        autor: "Gao, Y. et al. (2023)",
        titulo: "Retrieval-Augmented Generation for Large Language Models: A Survey",
        publicacao: "arXiv preprint arXiv:2312.10997",
        relevancia: "Mapeamento sistemático das arquiteturas Naive RAG, Advanced RAG e Modular RAG aplicadas a LLMs.",
        link: "https://arxiv.org/abs/2312.10997"
      }
    ]
  },

  pesquisaAcademicaIA: {
    tipoDossie: "tecnico",
    titulo: "Pesquisa Factual, Rotulagem de Fontes e Alucinação (Perplexity & Google)",
    resumo: "Análise das metodologias de ancoragem de motores neurais, categorização de fontes de informação e mitigação de erros na síntese de conhecimento.",
    topicos: [
      {
        titulo: "1. A Ilusão da Citação Perfeita",
        conteudo: "A presença de uma citação ou link [1] não garante a veracidade do conteúdo. Motores neurais podem citar sites comerciais com conflitos de interesse, notícias falsas ou artigos refutados. O rótulo 'Academic' filtra repositórios científicos, mas inclui pré-prints que ainda não passaram pelo crivo de revisão por pares."
      },
      {
        titulo: "2. Grounding e Citações em Linha (In-line Grounding)",
        conteudo: "O diferencial de ferramentas como NotebookLM e Perplexity é a ancoragem auditável: cada afirmação carrega um identificador clicável que remete o leitor ao parágrafo exato do documento original, permitindo checagem humana em segundos."
      }
    ],
    fontesCientificas: [
      {
        autor: "Perplexity AI (2024–2026)",
        titulo: "Understanding Sources, Source Labels & Pro Search Architecture",
        publicacao: "Perplexity Help Center & Documentation",
        relevancia: "Documentação oficial dos algoritmos de busca, síntese e rotulagem de fontes públicas.",
        link: "https://www.perplexity.ai/help-center"
      },
      {
        autor: "Google Labs (2024–2026)",
        titulo: "NotebookLM Product Documentation, Source Grounding & Audio Overview Guidelines",
        publicacao: "Google Support & Labs Hub",
        relevancia: "Diretrizes de engenharia de ancoragem documental, limites de cadernos e geração de áudio explicativo.",
        link: "https://support.google.com/notebooklm"
      }
    ]
  },

  diretrizesUNESCO: {
    tipoDossie: "juridico",
    titulo: "Diretrizes Internacionais de Ética, Integridade e Agência Humana (UNESCO)",
    resumo: "Marcos éticos e normativos para o uso responsável de ferramentas de IA generativa em ambientes acadêmicos e educacionais.",
    topicos: [
      {
        titulo: "1. Agência Humana Centrada no Educando e no Docente",
        conteudo: "A UNESCO recomenda que as ferramentas de IA sejam empregadas como andaimes cognitivos de apoio, e nunca como substitutas da reflexão crítica, do esforço de leitura e da autoria intelectual dos estudantes."
      },
      {
        titulo: "2. Privacidade, Proteção de Dados e Transparência",
        conteudo: "Instituições educacionais devem assegurar a conformidade com leis de proteção de dados (como LGPD e GDPR), orientando alunos e docentes a não alimentar modelos abertos com informações pessoais sensíveis ou propriedade intelectual não autorizada."
      }
    ],
    fontesCientificas: [
      {
        autor: "UNESCO (2023)",
        titulo: "Guidance for Generative AI in Education and Research",
        publicacao: "Paris: United Nations Educational, Scientific and Cultural Organization",
        relevancia: "Guia global normativo com princípios éticos para integração de ferramentas de IA no ensino e na ciência.",
        link: "https://unesdoc.unesco.org/ark:/48223/pf0000386693"
      },
      {
        autor: "UNESCO (2024)",
        titulo: "AI Competency Framework for Students and Teachers",
        publicacao: "Paris: UNESCO",
        relevancia: "Matriz internacional de competências em IA, dividida em agência humana, ética e domínio técnico.",
        link: "https://www.unesco.org/en/articles/ai-competency-frameworks"
      }
    ]
  }
};
