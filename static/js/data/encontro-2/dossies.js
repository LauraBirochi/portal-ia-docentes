/**
 * Módulo 2 – Dossiês de Embasamento Científico, Filosófico e Jurídico
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const dossies = {
  transformersAttention: {
    tipoDossie: "cientifico",
    titulo: "Arquitetura Transformer, Mecanismo de Autoatenção e Geração Autorregressiva",
    resumo: "Como o artigo 'Attention Is All You Need' superou as limitações das redes recorrentes (RNNs/LSTMs), viabilizou o treinamento massivo paralelo e introduziu a previsão autorregressiva por tokens em LLMs.",
    topicos: [
      {
        titulo: "1. O Fim do Gargalo Sequencial (RNNs vs Transformers)",
        conteudo: "Antes de 2017, modelos de linguagem processavam texto palavra por palavra sequencialmente. A arquitetura Transformer introduziu a autoatenção paralela, permitindo analisar todo o contexto simultaneamente."
      },
      {
        titulo: "2. Tokens e Espaço Vetorial de Significado (Embeddings)",
        conteudo: "Modelos de linguagem não operam com letras ou palavras humanas diretamente, mas com 'tokens' (fragmentos de subpalavras via BPE ou WordPiece) mapeados em vetores numéricos multidimensionais de significado."
      },
      {
        titulo: "3. Previsão de Próximo Token e a Origem das Alucinações",
        conteudo: "Uma LLM calcula a distribuição de probabilidade condicional para determinar qual token tem maior verossimilhança estatística de continuar a sequência. Se o contexto for ambíguo, o modelo pode inventar dados factualmente falsos (alucinação/confabulação)."
      }
    ],
    fontesCientificas: [
      {
        autor: "Vaswani, A. et al. (2017)",
        titulo: "Attention Is All You Need",
        publicacao: "Advances in Neural Information Processing Systems 30 (NeurIPS 2017)",
        relevancia: "Artigo seminal da equipe do Google Brain que introduziu a arquitetura Transformer e a atenção multi-cabeça.",
        link: "https://arxiv.org/abs/1706.03762"
      },
      {
        autor: "Radford, A. et al. (2019)",
        titulo: "Language Models are Unsupervised Multitask Learners",
        publicacao: "OpenAI Technical Report",
        relevancia: "Fundamentação da previsão autorregressiva de próximo token e modelagem em larga escala do GPT-2.",
        link: "https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf"
      },
      {
        autor: "Sennrich, R.; Haddow, B.; Birch, A. (2016)",
        titulo: "Neural Machine Translation of Rare Words with Subword Units",
        publicacao: "Proceedings of the 54th Annual Meeting of the ACL (ACL 2016)",
        relevancia: "Artigo clássico que introduziu o algoritmo Byte Pair Encoding (BPE) para tokenização eficiente de subpalavras.",
        link: "https://doi.org/10.18653/v1/P16-1162"
      },
      {
        autor: "Ji, Z. et al. (2023)",
        titulo: "Survey of Hallucination in Natural Language Generation",
        publicacao: "ACM Computing Surveys, 55(12), Article 248, 1–38",
        relevancia: "Taxonomia e análise abrangente sobre a origem física e probabilística das alucinações em LLMs.",
        link: "https://doi.org/10.1145/3571730"
      }
    ]
  },

  engenhariaPrompts: {
    tipoDossie: "cientifico",
    titulo: "Engenharia de Prompts: Few-Shot, Chain-of-Thought e Delimitadores",
    resumo: "Fundamentos experimentais das técnicas que guiam o raciocínio dos modelos de linguagem em tarefas complexas sem necessidade de retreinamento de pesos.",
    topicos: [
      {
        titulo: "1. Aprendizado em Contexto (In-Context Few-Shot Learning)",
        conteudo: "Modelos a partir de 175 bilhões de parâmetros (GPT-3) demonstraram capacidade emergente de aprender o formato e a regra da tarefa recebendo 1 a 3 exemplos diretamente no prompt."
      },
      {
        titulo: "2. Cadeia de Pensamento (Chain-of-Thought - CoT)",
        conteudo: "Instruir a IA a gerar uma sequência de etapas intermediárias de raciocínio ('pense passo a passo') decompõe problemas de lógica e matemática, elevando expressivamente a taxa de acerto."
      },
      {
        titulo: "3. Delimitadores e Estruturação Semântica",
        conteudo: "O isolamento de contextos com marcadores visuais (aspas triplas, Markdown e tags) impede vazamento de instruções e reduz a entropia do modelo."
      }
    ],
    fontesCientificas: [
      {
        autor: "Brown, T. B. et al. (2020)",
        titulo: "Language Models are Few-Shot Learners",
        publicacao: "Advances in Neural Information Processing Systems 33 (NeurIPS 2020)",
        relevancia: "Artigo inaugural do GPT-3 demonstrando capacidade emergente de generalização zero-shot e few-shot.",
        link: "https://arxiv.org/abs/2005.14165"
      },
      {
        autor: "Wei, J. et al. (2022)",
        titulo: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
        publicacao: "Advances in Neural Information Processing Systems 35 (NeurIPS 2022)",
        relevancia: "Artigo seminal do Google Research demonstrando a técnica de raciocínio intermediário passo a passo.",
        link: "https://proceedings.neurips.cc/paper_files/paper/2022/hash/9d5609613524ecf4f15af0f7b31abca4-Abstract-Conference.html"
      },
      {
        autor: "OpenAI (2024–2026)",
        titulo: "Prompt Engineering Guide & Best Practices",
        publicacao: "OpenAI Platform & Help Center",
        relevancia: "Guia oficial de boas práticas técnicas: delimitadores, especificação de formato e decomposição de tarefas.",
        link: "https://platform.openai.com/docs/guides/prompt-engineering"
      },
      {
        autor: "Anthropic (2024–2026)",
        titulo: "Prompt Engineering Interactive Tutorial",
        publicacao: "Anthropic Documentation",
        relevancia: "Tutorial metodológico interativo cobrindo role prompting, clareza instrucional e mitigação de alucinações.",
        link: "https://github.com/anthropics/prompt-eng-interactive-tutorial"
      }
    ]
  },

  privacidadeModelos: {
    tipoDossie: "juridico",
    titulo: "Privacidade, Dados de Treinamento e Segurança em Modelos de Linguagem (LGPD/ANPD)",
    resumo: "Implicações regulatórias, tratamento de dados de terceiros e conformidade da LGPD ao interagir com serviços públicos e corporativos de inteligência artificial.",
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
        autor: "ANPD (2024)",
        titulo: "Nota Técnica nº 27/2024/FIS/CGF/ANPD",
        publicacao: "Autoridade Nacional de Proteção de Dados",
        relevancia: "Diretrizes sobre tratamento de dados pessoais de terceiros com finalidade de desenvolver e treinar modelos de IAGen.",
        link: "https://www.gov.br/anpd/pt-br/centrais-de-conteudo/documentos-tecnicos-orientativos"
      },
      {
        autor: "ANPD (2024)",
        titulo: "Nota Técnica nº 39/2024/FIS/ANPD",
        publicacao: "Autoridade Nacional de Proteção de Dados",
        relevancia: "Análise do plano de conformidade para regularização de tratamento de dados pessoais no treinamento de modelos da Meta Platforms.",
        link: "https://www.gov.br/anpd/pt-br/centrais-de-conteudo/documentos-tecnicos-orientativos"
      },
      {
        autor: "Brasil (2018)",
        titulo: "Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018)",
        publicacao: "Presidência da República / Diário Oficial da União",
        relevancia: "Norma jurídica brasileira que disciplina a proteção, privacidade e tratamento ético de dados pessoais.",
        link: "http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
      }
    ]
  },

  governancaIAGenUNESCO: {
    tipoDossie: "juridico",
    titulo: "Governança da IA Generativa na Educação e Abordagem Centrada no Humano (UNESCO/ANPD)",
    resumo: "Diretrizes globais da UNESCO para IA generativa na educação e notas técnicas da ANPD sobre treinamento de LLMs e proteção de dados.",
    topicos: [
      {
        titulo: "1. A Abordagem Centrada no Humano da UNESCO (2023)",
        conteudo: "A recomendação internacional da UNESCO para IA generativa na educação e pesquisa exige que a tecnologia seja subordinada à agência humana, com supervisão crítica de professores e salvaguarda da autonomia intelectual dos educandos."
      },
      {
        titulo: "2. Conformidade Regulatória no Treinamento de LLMs (ANPD)",
        conteudo: "As Notas Técnicas 27 e 39/2024 da ANPD estabelecem parâmetros de conformidade com a LGPD para o tratamento de dados pessoais de terceiros no treinamento e ajuste fino de modelos fundacionais generativos."
      }
    ],
    fontesCientificas: [
      {
        autor: "UNESCO; Miao, F.; Holmes, W. (2023)",
        titulo: "Guidance for Generative AI in Education and Research",
        publicacao: "Paris: UNESCO (DOI: 10.54675/EWZM9535)",
        relevancia: "Marco orientador global da UNESCO para uso ético, agência docente e proteção da privacidade com IA generativa na educação.",
        link: "https://doi.org/10.54675/EWZM9535"
      },
      {
        autor: "ANPD (2024)",
        titulo: "Nota Técnica nº 27/2024/FIS/CGF/ANPD",
        publicacao: "Autoridade Nacional de Proteção de Dados",
        relevancia: "Tratamento de dados pessoais de terceiros com a finalidade de desenvolver modelos de inteligência artificial generativa.",
        link: "https://www.gov.br/anpd/pt-br/centrais-de-conteudo/documentos-tecnicos-orientativos"
      },
      {
        autor: "ANPD (2024)",
        titulo: "Nota Técnica nº 39/2024/FIS/ANPD",
        publicacao: "Autoridade Nacional de Proteção de Dados",
        relevancia: "Análise do plano de conformidade para o treinamento de modelos generativos da Meta Platforms no Brasil.",
        link: "https://www.gov.br/anpd/pt-br/centrais-de-conteudo/documentos-tecnicos-orientativos"
      }
    ]
  }
};
