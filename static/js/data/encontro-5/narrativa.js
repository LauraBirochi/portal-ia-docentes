/**
 * Módulo 5 – Fio da Meada e Narrativa Pedagógica
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const fioDaMeada = {
  objetivoCentral: "Superar o uso exclusivo do ChatGPT, dominando a escolha e a combinação estratégica de ferramentas gratuitas especializadas: Perplexity (pesquisa na web aberta com fontes verificáveis) e Google NotebookLM (estudo ancorado em documentos próprios sem alucinação).",
  mensagemChave: "Use o Perplexity para encontrar e checar, o NotebookLM para estudar o que você escolheu e o ChatGPT para conversar, criar e reformular — sempre conferindo as fontes antes de decidir.",
  explicacaoObjetivo: "No Encontro 4, a turma aprendeu a instruir o ChatGPT com C-T-F-R e a colocar a trava [necessita verificação]. No Encontro 5, mostramos que o docente não precisa forçar um assistente de texto a atuar como buscador ou leitor de PDFs. Apresentamos a 'Caixa de Ferramentas Especializadas', desmistificando o RAG aberto e fechado e praticando a verificação de fontes e a geração de artefatos de estudo (guias, mapas e podcasts).",
  atos: [
    {
      ato: 1,
      titulo: "A Metáfora dos 3 Especialistas & O Roteamento de Tarefas",
      tempo: "40 min",
      desc: "Desconstrução da ideia de 'IA única faz-tudo'. Apresentação dos 3 papéis: ChatGPT (Roteirista Criativo que trabalha de cabeça), Perplexity (Detetive que pesquisa na web aberta) e NotebookLM (Bibliotecário que tranca a porta e só lê seus arquivos). Análise da tabela comparativa dos 7 critérios.",
      gatilho: "Tentar usar só o ChatGPT para tudo na vida é como tentar consertar uma casa inteira usando apenas um martelo. Hoje vamos abrir a nossa caixa de ferramentas especializadas."
    },
    {
      ato: 2,
      titulo: "Perplexity na Prática: O Detetive da Web e a Checagem de Fatos",
      tempo: "45 min",
      desc: "Como funciona o RAG aberto em tempo real. Demonstração dos recursos gratuitos: buscas básicas ilimitadas, Pro Search diário, filtros de foco (Academic/Web) e rótulos de fontes. Alerta crítico sobre a ilusão do hiperlink e realização da Missão 1 de bancada ('Detetive de Fontes').",
      gatilho: "Citação com link não é sinônimo automático de verdade. A IA encontrou a página, mas cabe a você abrir e conferir se o dado procede."
    },
    {
      ato: 3,
      titulo: "Google NotebookLM: Estudo Ativo, Studio Multimodal & Agência Humana",
      tempo: "95 min",
      desc: "Como funciona o RAG fechado nos seus próprios documentos. Upload de até 50 fontes, chat com citação que destaca a linha exata no PDF e exploração do painel Studio (Guia de Estudo, Mapa Mental, Audio Overview em português e Video Overview). Realização da Missão 2 de bancada ('Do PDF ao Guia e Áudio'), quadro de 6 armadilhas e fechamento com as diretrizes da UNESCO.",
      gatilho: "A IA não substitui a leitura: ela organiza o caminho até a leitura, mas a responsabilidade pela verificação continua sendo humana."
    }
  ],
  glossario: [
    {
      termo: "RAG Aberto (Open-Web Retrieval)",
      def: "Arquitetura usada pelo Perplexity: o modelo busca ativamente em páginas públicas da internet em tempo real e sintetiza a resposta acompanhada de links numerados para cada afirmação."
    },
    {
      termo: "RAG Fechado (Closed-Corpus Grounding)",
      def: "Arquitetura usada pelo NotebookLM: a geração da IA é estritamente restrita aos arquivos carregados pelo usuário no caderno, impedindo alucinações baseadas na internet externa."
    },
    {
      termo: "Citação em Linha (In-line Citation)",
      def: "Marcador interativo presente na resposta da IA que, ao ser clicado, abre o documento original e destaca visualmente o parágrafo exato de onde a informação foi extraída."
    },
    {
      termo: "Audio Overview (Podcast Sintético)",
      def: "Recurso do painel Studio do NotebookLM que gera uma discussão em áudio entre dois apresentadores virtuais em português sintetizando os pontos-chave das fontes importadas."
    },
    {
      termo: "Foco de Busca (Search Focus)",
      def: "Seletor do Perplexity que delimita o escopo de varredura a repositórios acadêmicos (Academic), páginas financeiras (Finance) ou busca aberta (Web)."
    },
    {
      termo: "Agência Humana na Curadoria (UNESCO)",
      def: "Princípio ético que estabelece que a IA deve atuar apenas como andaime cognitivo de apoio, cabendo exclusivamente ao ser humano a validação final, a interpretação crítica e a responsabilidade autoral."
    }
  ]
};
