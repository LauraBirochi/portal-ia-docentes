/**
 * Módulo 2 – Dossiês de Embasamento Científico, Filosófico e Jurídico
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const dossies = {
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

