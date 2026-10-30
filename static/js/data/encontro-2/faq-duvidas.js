/**
 * Módulo 2 – Perguntas dos Alunos, Dúvidas Clássicas e Armadilhas Pedagógicas
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const perguntasAlunos = [
  {
    numero: 1,
    duvida: "Se a IA não busca respostas prontas na internet, como ela sabe fatos, datas históricas e conceitos científicos?",
    resposta: "A IA passou por uma fase massiva de pré-treinamento onde leu bilhões de textos da internet e de livros. Todo esse conhecimento foi convertido em pesos matemáticos dentro de uma rede neural profunda. Quando você envia um comando, ela não 'abre um arquivo salvo', mas ativa essas conexões neurais e sintetiza um texto inédito do zero, palavra por palavra, que reflete os padrões factuais que aprendeu.",
    pontoDidatico: "Fixe a metáfora do escritor que estudou uma vida inteira e escreve na hora vs. o bibliotecário que apenas localiza e entrega um livro existente na estante."
  },
  {
    numero: 2,
    duvida: "Por que um pequeno erro de digitação no prompt (como trocar uma letra de um código) pode fazer a IA alucinar?",
    resposta: "A IA processa texto fatiado em tokens. Quando uma letra é trocada em um termo técnico (como o caso do driver A4899 em vez de A4988), o token gerado cai em coordenadas matemáticas desconhecidas. Isso provoca uma 'divergência de atenção': os holofotes do modelo se desviam e a rede tenta prever uma continuação lógica para uma premissa inexistente, inventando dados técnicos (como pinagens falsas) com total convicção.",
    pontoDidatico: "Ensine a importância prática da higienização prévia do prompt (Input Preprocessing): uma entrada limpa evita o efeito dominó de desvio de rota."
  },
  {
    numero: 3,
    duvida: "O que muda na prática se eu usar Few-Shot (dar 2 exemplos) em vez de só explicar a regra no prompt?",
    resposta: "Regras descritas em texto longo sempre deixam brechas para dupla interpretação da IA. Quando você fornece 2 ou 3 exemplos demonstrativos de entrada e saída esperadas (Few-Shot), a rede neural alinha seus pesos de atenção pela simetria dos exemplos, aprendendo a estrutura, o tom e a métrica por imitação imediata sem precisar adivinhar o que você quer.",
    pontoDidatico: "O Few-Shot é o atalho mais poderoso para padronização institucional de relatórios, correções de redações e planos de aula."
  },
  {
    numero: 4,
    duvida: "Quando eu peço para a IA 'pensar passo a passo' (Chain of Thought), ela realmente reflete ou gasta mais tokens?",
    resposta: "A IA não tem reflexão biológica, mas gera texto token por token. Quando você exige que ela detalhe as etapas intermediárias de raciocínio, cada etapa calculada vira uma âncora matemática no fluxo de texto concatenado. Em vez de tentar adivinhar a conclusão num salto cego, a resposta final se apoia em premissas anteriores já validadas, reduzindo falhas lógicas em mais de 70%.",
    pontoDidatico: "O Chain of Thought (CoT) é obrigatório para planejamento pedagógico encadeado, cálculos e análise de situações complexas."
  },
  {
    numero: 5,
    duvida: "Por que abrimos um 'Chat Temporário' na oficina de rotina de estudos?",
    resposta: "Por dois motivos fundamentais: primeiro, para isolar a experiência pedagógica, garantindo que o modelo não use históricos antigos da sua conta para adivinhar preferências e possamos comparar os prompts com rigor científico; segundo, para praticar a conformidade estrita com a LGPD, garantindo que nenhum dado sensível pessoal ou escolar seja retido pela plataforma.",
    pontoDidatico: "A cultura de segurança e anonimização de dados deve ser praticada desde o primeiro laboratório nos computadores."
  },
  {
    numero: 6,
    duvida: "Na nossa oficina, por que o prompt livre 'Crie uma rotina de estudos para mim' sugeriu 6 horas diárias impraticáveis?",
    resposta: "Porque sem os 5 Elementos (especialmente Contexto e Restrições), a IA não sabe sua disponibilidade real de 2 horas nem suas prioridades de Matemática. Ela ativou a média estatística de cronogramas genéricos de concurseiros na internet. Quando você introduz Restrições ('máximo de 2 horas diárias'), o mecanismo de atenção descarta rotinas pesadas e calcula uma solução viável.",
    pontoDidatico: "Mostre que a mediocridade da primeira resposta não foi erro da máquina, mas reflexo direto da ausência de contexto do comando."
  },
  {
    numero: 7,
    duvida: "Se a resposta da IA vier com um português impecável e elegante, eu já posso usá-la na sala de aula?",
    resposta: "Não! A fluência gramatical é a maior armadilha da IA Generativa. Como ela domina a sintaxe probabilística, ela escreve com elegância e coesão mesmo quando está alucinando uma data, uma lei ou uma bibliografia. A leitura do professor deve ir além da revisão de português: exige a auditoria factual (o Checklist de 3 Passos) para garantir veracidade.",
    pontoDidatico: "Reafirme o princípio do Human-in-the-Loop: a IA é uma excelente copiloto de redação, mas o crivo ético e factual é sempre do educador."
  },
  {
    numero: 8,
    duvida: "O que fundamentam as referências acadêmicas citadas no fechamento da aula (ArXiv e PMC)?",
    resposta: "O artigo do ArXiv (arxiv.org/html/2306.04528) é uma referência seminal de ciência da computação sobre o funcionamento interno das LLMs, a autoatenção dos Transformers e a emergência do raciocínio passo a passo; já o estudo da PMC (ncbi.nlm.nih.gov/articles/PMC12396994/) avalia a aplicação da Engenharia de Prompts na prática formativa e profissional, comprovando como estruturas deliberadas aumentam a precisão e reduzem alucinações.",
    pontoDidatico: "Demonstre à turma que o curso é respaldado na literatura científica primária de fronteira, e não em achismos ou modismos da internet."
  }
];
