/**
 * Módulo 5 – Perguntas dos Alunos, Dúvidas Frequentes e Armadilhas de Ferramentas de IA
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const perguntasAlunos = [
  {
    numero: 1,
    duvida: "Se o Perplexity colocou um número com link [1], significa que a informação é 100% verdadeira e comprovada?",
    resposta: "Não! O número indica apenas onde a IA encontrou aquele fragmento de texto na internet, mas não atesta que o site original seja confiável, imparcial ou cientificamente correto. Se a página de origem contiver um boato, erro de dados ou viés ideológico, o Perplexity irá sintetizar o erro e citar o link. O papel do pesquisador é sempre clicar na citação e avaliar a autoridade da instituição e a data da publicação.",
    pontoDidatico: "Diferencie 'Rastreabilidade' de 'Veracidade Absoluta': a citação permite checagem humana rápida, mas nunca substitui o julgamento crítico do leitor.",
    dicaPratica: "Ensine os alunos a abrir a citação [1] em uma nova aba e fazer a pergunta de ouro: 'Quem publicou isso, quando foi publicado e qual a metodologia usada?'"
  },
  {
    numero: 2,
    duvida: "O NotebookLM vai na internet buscar informações complementares se o meu PDF for antigo ou incompleto?",
    resposta: "Não! Por arquitetura fundamental, o NotebookLM opera em 'RAG fechado' (Retrieval-Augmented Generation restrito ao corpus do usuário). Ele lê, indexa e consulta estritamente os documentos que você carregou no caderno. Se você fizer uma pergunta sobre um fato que não consta nos seus arquivos, ele responderá com honestidade que a informação não foi encontrada nas fontes adicionadas.",
    pontoDidatico: "Destaque a fronteira de segurança: o confinamento no corpus fechado é a maior defesa contra alucinações de modelos de linguagem em ambientes acadêmicos e técnicos.",
    dicaPratica: "Se precisar de dados externos para enriquecer seu caderno, use o recurso 'Fast Research' para pesquisar na web ou Drive e deliberadamente importar novas fontes validadas."
  },
  {
    numero: 3,
    duvida: "A Google ou a Perplexity usam os documentos confidenciais que eu subo para treinar seus modelos de IA?",
    resposta: "A Google declara formalmente na documentação de privacidade do NotebookLM que os arquivos, anotações e perguntas dos cadernos não são utilizados para treinar seus modelos fundamentais e permanecem privados para a sua conta. No Perplexity e no ChatGPT gratuito, os dados de busca podem ser anonimizados e usados para aperfeiçoar o serviço, a menos que o usuário desative a opção de compartilhamento nas configurações de privacidade.",
    pontoDidatico: "Relembre a Regra do Cartão-Postal vista no Encontro 4: nunca suba dados sensíveis de alunos, senhas, prontuários médicos ou dados pessoais não anonimizados em ferramentas públicas de IA.",
    dicaPratica: "Antes de carregar documentos de trabalho, faça uma higienização prévia (tarjando nomes reais, CPFs e matrículas) ou consulte a política de privacidade institucional da sua instituição."
  },
  {
    numero: 4,
    duvida: "Qual é a diferença real entre a busca gratuita do Perplexity e o 'Pro Search'?",
    resposta: "A busca gratuita padrão faz uma consulta rápida em um motor de busca na web e sintetiza 3 a 5 fontes diretas. Já o 'Pro Search' (disponível com cota diária limitada no plano gratuito) atua como um pesquisador em múltiplos turnos: ele analisa a complexidade da pergunta, elabora subperguntas de refinamento, consulta dezenas de fontes em paralelo e produz uma resposta mais estruturada e aprofundada.",
    pontoDidatico: "Ensine economia de recursos: use a busca comum para checagens factuais pontuais e reserve o Pro Search para dúvidas conceituais densas ou comparativos de teses.",
    dicaPratica: "Se o Pro Search sugerir perguntas de esclarecimento, clique nelas para orientar a pesquisa com mais precisão antes da geração final."
  },
  {
    numero: 5,
    duvida: "O resumo em áudio (Audio Overview / 'podcast') do NotebookLM substitui a leitura integral dos textos e livros?",
    resposta: "De forma alguma! O Audio Overview é uma síntese em formato de diálogo informal entre dois apresentadores virtuais. É uma ferramenta espetacular para introdução rápida, revisão auditiva ou assimilação de ideias centrais, mas a própria Google adverte que os apresentadores de IA podem simplificar conceitos complexos, emitir analogias imprecisas ou omitir dados numéricos essenciais.",
    pontoDidatico: "Enfatize a Agência Humana da UNESCO: a IA apoia a cognição, mas a apropriação do saber exige leitura ativa, reflexão analítica e anotações próprias.",
    dicaPratica: "Ouça o áudio como um panorama prévio do tema antes de mergulhar na leitura aprofundada dos trechos-chave do documento."
  },
  {
    numero: 6,
    duvida: "Ao selecionar o filtro 'Academic' no Perplexity, posso confiar que todos os artigos retornados foram revisados por pares?",
    resposta: "Não necessariamente. O filtro Academic direciona as buscas para repositórios como Semantic Scholar, PubMed, arXiv e JSTOR. Contudo, plataformas como arXiv hospedam 'pré-prints' (artigos científicos ainda não submetidos a revisão por pares). Além disso, artigos podem ter sido contestados ou superados por evidências mais recentes.",
    pontoDidatico: "Treine a competência de curadoria acadêmica: ler o título e a citação da IA não basta; é preciso verificar o veículo de publicação, o método e o ano.",
    dicaPratica: "Ao citar em aula ou pesquisa, abra o PDF original pelo DOI ou link do artigo e valide a seção de metodologia e conclusões."
  },
  {
    numero: 7,
    duvida: "Quantos documentos posso colocar no NotebookLM e quais formatos são aceitos no plano gratuito?",
    resposta: "A Google documenta que cada caderno gratuito suporta até 50 fontes distintas. Cada fonte pode ter até 500.000 palavras ou até 200 MB de tamanho. Os formatos aceitos incluem arquivos PDF, documentos do Google Docs, apresentações do Google Slides, URLs de sites da web, texto colado diretamente e até links de vídeos do YouTube com legendas ativadas.",
    pontoDidatico: "Mostre o poder da curadoria focada: é muito mais eficaz subir 3 a 5 fontes excelentes sobre um tema específico do que 40 documentos genéricos que dispersam o foco do modelo.",
    dicaPratica: "Organize cadernos temáticos separados por disciplina ou projeto em vez de criar um caderno único para tudo."
  }
];
