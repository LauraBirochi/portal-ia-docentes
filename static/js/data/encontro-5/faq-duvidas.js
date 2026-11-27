/**
 * Módulo 5 – Perguntas dos Alunos, Dúvidas Frequentes e Armadilhas de Ferramentas de IA
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const perguntasAlunos = [
  {
    numero: 1,
    duvida: "Se o Perplexity colocou um número com link [1], significa que a informação é 100% verdadeira e comprovada?",
    resposta: "Não! O número indica apenas onde a IA encontrou aquele fragmento de texto na internet, mas não atesta que o site original seja confiável, imparcial ou cientificamente correto. Se a página de origem contiver um boato, erro de dados ou viés, o Perplexity irá sintetizar o erro e citar o link. Ter um link citado não atesta a qualidade da página. O pesquisador deve aplicar o Protocolo de 4 Passos: (1) Identificar a fonte, (2) Conferir se o trecho sustenta a frase gerada, (3) Avaliar a metodologia e data, e (4) Triangular com ao menos uma fonte independente.",
    pontoDidatico: "Diferencie 'Rastreabilidade' de 'Veracidade Absoluta': a citação permite auditoria humana rápida, mas jamais substitui o julgamento crítico e a triangulação de fontes.",
    dicaPratica: "Ensine os alunos a abrir a citação [1] em uma nova aba e aplicar o protocolo: 'Quem publicou isso, a frase da IA é fiel ao original, qual o método do estudo e outra fonte confirma?'"
  },
  {
    numero: 2,
    duvida: "O NotebookLM vai na internet buscar informações complementares se o meu PDF for antigo ou incompleto?",
    resposta: "O NotebookLM foi projetado para trabalhar prioritariamente com o material que você selecionou para o caderno. Ele não é um buscador geral: em geral, se a informação não constar das fontes adicionadas, ele indicará que não encontrou. Contudo, ele não valida se o seu PDF está desatualizado, equivocado ou incompleto: um material com erros continuará gerando respostas com erros. Para complementar, o usuário pode adicionar deliberadamente novas fontes da web ou arquivos atualizados ao caderno.",
    pontoDidatico: "Destaque a fronteira de segurança: a ancoragem nas fontes selecionadas reduz alucinações exógenas, mas a qualidade da resposta depende estritamente da qualidade das fontes escolhidas pelo usuário.",
    dicaPratica: "Se precisar de dados externos para enriquecer seu caderno, pesquise fontes confiáveis na web e adicione novos links ou PDFs deliberadamente ao caderno."
  },
  {
    numero: 3,
    duvida: "A Google ou a Perplexity usam os documentos confidenciais que eu subo para treinar seus modelos de IA?",
    resposta: "No NotebookLM, uploads, perguntas e respostas são usados para construir a base de conhecimento do caderno. A Google informa que esse conteúdo não é usado para treinar diretamente seus modelos fundamentais, salvo quando o usuário opta por enviar feedback. Em contas corporativas ou educacionais (Google Workspace for Education), há proteções contratuais adicionais. Porém, as regras dependem do tipo de conta e da política institucional. Mais importante: em termos de LGPD, antes de enviar materiais com dados pessoais de terceiros, verifique se há base legal adequada, autorização e orientação institucional, aplicando pseudonimização ou anonimização sempre que possível.",
    pontoDidatico: "Destaque a responsabilidade ética e jurídica: nunca suba dados sensíveis de terceiros para a nuvem sem base legal adequada, consentimento e higienização prévia.",
    dicaPratica: "Antes de carregar documentos institucionais, higienize os arquivos tarjando dados de identificação pessoal ou utilize apenas materiais públicos e didáticos autorizados."
  },
  {
    numero: 4,
    duvida: "Como o Perplexity escolhe quais sites e fontes vai consultar para responder à minha pergunta?",
    resposta: "O Perplexity analisa a sua pergunta em linguagem natural, identifica os conceitos-chave, realiza buscas simultâneas na internet pública em tempo real e seleciona as páginas mais relevantes para compor a resposta acompanhada de citações numeradas.",
    pontoDidatico: "Explique o processo de recuperação e síntese: a IA não responde de cabeça nem inventa links; ela lê a web viva e extrai os trechos mais aderentes à dúvida do usuário.",
    dicaPratica: "Perguntas claras, objetivas e com contexto prático ajudam o Perplexity a encontrar fontes muito mais precisas e pertinentes."
  },
  {
    numero: 5,
    duvida: "Os recursos do painel Studio (Audio Overview, Video Overview, Mapas Mentais) substituem a leitura integral dos textos?",
    resposta: "De forma alguma! Há um risco pedagógico importante em encarar esses recursos como 'conhecimento pronto'. Eles são artefatos de estudo e revisão — excelentes para mobilização prévia, acessibilidade e fixação —, mas representam sínteses automatizadas que comprimem, simplificam e podem até distorcer nuances dos textos originais. Lembre-se sempre da regra de ouro: 'O NotebookLM é excelente para interrogar e organizar seu material; ele não é um substituto da leitura, nem uma fonte autônoma de verdade.'",
    pontoDidatico: "Enfatize a Agência Humana da UNESCO: a IA apoia a cognição como andaime, mas a apropriação do saber exige leitura crítica, reflexão analítica e anotações próprias.",
    dicaPratica: "Ouça o áudio ou explore o mapa mental como panorama prévio ou andaime de revisão, retornando sempre ao texto original para aprofundar."
  },
  {
    numero: 6,
    duvida: "Se o link citado pelo Perplexity for de uma fonte oficial ou governamental, a resposta é 100% garantida?",
    resposta: "Não necessariamente! Embora portais institucionais e oficiais tenham alta credibilidade, a IA pode interpretar ou sintetizar o dado de forma incompleta, ou a regra citada pode ter sofrido alterações posteriores. O protocolo de abrir o link, checar o trecho original e triangular continua indispensável.",
    pontoDidatico: "Treine a competência de curadoria e checagem: fontes oficiais são excelentes aliadas, mas a leitura humana direta do documento original é o que garante a precisão.",
    dicaPratica: "Ao consultar editais, prazos ou regras oficiais, sempre abra o link de origem e confirme a data da publicação oficial."
  },
  {
    numero: 7,
    duvida: "Quantos documentos posso colocar no NotebookLM e por que às vezes ele parece não ler ou destacar um PDF?",
    resposta: "A Google documenta que cada caderno suporta até 50 fontes no plano gratuito. Cada fonte pode ter até 500.000 palavras ou até 200 MB (para arquivos enviados localmente). Suporta PDFs, Google Docs, Slides, URLs da web, texto colado e links de vídeos do YouTube (dependendo da disponibilidade de legendas). Se o NotebookLM parecer não encontrar trechos de um PDF, verifique antes se o arquivo possui OCR e permite seleção de texto com o cursor: PDFs digitalizados como imagem pura não permitem extração correta de texto.",
    pontoDidatico: "Destaque que mais fontes não significam melhor caderno: é muito mais eficaz subir 3 a 5 fontes excelentes e com bom OCR sobre um tema específico do que 40 documentos heterogêneos que dispersam a atenção do modelo.",
    dicaPratica: "Antes de carregar um PDF digitalizado, passe o mouse para testar se as palavras são selecionáveis como texto; se não forem, aplique uma ferramenta de OCR antes."
  }
];
