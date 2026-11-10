/**
 * Módulo 4 – Atividades Práticas e Laboratório: ChatGPT no Mundo Real
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 * 
 * Especialidade: Engenharia de Prompt e Aplicações Práticas (Framework C-T-F-R & Meta-Prompting)
 * Scaffolding Pedagógico: Andaime gradual em 3 níveis (Vago ➔ Limpar Ruído da Persona ➔ Auto-Entrevista com Trava UNESCO)
 * Caso Empírico Alinhado aos Slides: Preparo do Macarrão Parisiense (Slides 13 a 16) e Auto-Entrevista em Dois Atos (Slides 18 e 19)
 */

export const oficinaPratica = {
  isDiagnostica: false,
  titulo: "Oficina de Bancada: Do Pedido Simples ao Prompt Mestre (C-T-F-R)",
  tema: "Engenharia de Prompts na Prática: Desconstrução do Pedido Vago, Ilusão da Persona e Auto-Entrevista Guiada",
  duracao: "40 a 45 minutos de Bancada nos Computadores (Scaffolding em 3 Níveis)",
  peso: "Instrumento Formativo no Portfólio Digital • Encontro 4 (0,5 ponto)",
  conducao: "Co-docência (Profª Laura & Profª Maria com suporte individual nas bancadas)",
  ferramenta: "Navegador Web + ChatGPT (Modo Chat Temporário / Convencional sem memórias)",
  objetivo: "Capacitar os participantes a construir instruções profissionais sob medida no ChatGPT aplicando os 4 Blocos da Estrutura Perfeita (Contexto & Papel, Tarefa, Formato e Restrições Negativas), desmontar a ilusão da persona, dominar a auto-entrevista em dois atos (Meta-Prompting) e implementar travas contra alucinações e riscos de privacidade.",

  situacaoProblema: {
    contexto: "Você vai cozinhar para um almoço de domingo em família com 5 adultos que comem bem. Você tem pouco tempo (máximo 25 minutos), quer uma receita caseira, cremosa e tradicional de macarrão parisiense, mas não quer gastar com ingredientes caros ou difíceis de achar (proibido vinho branco ou itens gourmet). Na internet, as receitas são genéricas ou complexas demais.",
    missao: "Assumir o controle da IA aplicando o Scaffolding em 3 Níveis no laboratório: comparar a saída de um pedido de 1 linha (Nível 1 - Vago), comprovar a verborragia e o custo de um comando teatral (Nível 2 - Falso Bom Prompt do Chef Francês) e formular o Prompt Mestre C-T-F-R (Nível 3). Em seguida, experimentar a Auto-Entrevista com Meta-Prompting e Trava UNESCO [necessita verificação], registrando os resultados no Portfólio Digital."
  },

  comoExecutar: [
    {
      etapa: 1,
      titulo: "Nível 1 (Prompt Vago | 5 min) — O Pedido de Uma Linha",
      desc: "No ChatGPT, envie o pedido simples de 1 linha: 'Quero aprender a fazer macarrão parisiense.'. Observe como o modelo sofre regressão à média, arbitra 2 a 3 pessoas e 30 minutos sem saber da sua realidade, e encerra transferindo uma dúvida."
    },
    {
      etapa: 2,
      titulo: "Nível 2 (Falso Bom Prompt | 5 min) — A Ilusão da Persona",
      desc: "Em novo chat, envie o prompt inflado de adjetivos superlativos ('atue como o melhor chef de cozinha do mundo, premiado internacionalmente...'). Comprove a verborragia teatral, o aumento de tempo para 40 min, a inclusão de vinho branco e 3 perguntas adicionais ao final."
    },
    {
      etapa: 3,
      titulo: "Nível 3 (Prompt Mestre C-T-F-R | 10 min) — Os 4 Blocos com Markdown",
      desc: "Reescreva a instrução estruturada com cabeçalhos #: # Contexto & Papel (almoço de domingo para 5 pessoas), # Tarefa Principal (receita caseira e tradicional), # Formato da Saída (ingredientes exatos, etapas cronológicas e tempo) e # Restrições Negativas (sem vinho branco, teto de 25 min, sem perguntas residuais)."
    },
    {
      etapa: 4,
      titulo: "Intervenção Guiada no Telão (3 min) — Demonstração de Auto-Entrevista",
      desc: "Pausa rápida com a turma para assistir à demonstração ao vivo de Meta-Prompting (Teste 4 em dois atos) no projetor: como inverter o papel e fazer o ChatGPT formular 4 perguntas investigativas antes de entregar o artefato final."
    },
    {
      etapa: 5,
      titulo: "Etapa 2 de Bancada (Auto-Entrevista Ativa & Trava UNESCO | 15 min)",
      desc: "Envie o comando de Auto-Entrevista para o almoço em família ('...me faça 4 perguntas essenciais...'). Responda em tópicos curtos (Turno 2) e observe a IA gerar o Prompt Mestre executivo. Em seguida, teste a trava de grounding: 'Marque qualquer dado incerto com [necessita verificação]'."
    }
  ],

  primeiraTentativa: {
    prompt: "Quero aprender a fazer macarrão parisiense.",
    problemasProvaveis: [
      "Sem público definido: a IA arbitrou aleatoriamente 2 a 3 pessoas (insuficiente para 5 pessoas que comem bem).",
      "Sem tempo definido: arbitrou 30 minutos sem considerar a sua pressa ou disponibilidade.",
      "Sem restrições de custo ou ingredientes: sugeriu receita convencional genérica de internet com itens que você pode não ter.",
      "Dúvida transferida ao final: encerrou perguntando se você prefere versão restaurante ou caseira, exigindo novo turno de conversa.",
      "Regressão à média estatística: respostas previsíveis, medianas e sem personalização real."
    ]
  },

  falsoBomPrompt: {
    prompt: "Atue como o melhor chef de cozinha do mundo, premiado internacionalmente, um verdadeiro mestre da gastronomia clássica. Faça uma receita incrível, perfeita e maravilhosa de macarrão parisiense.",
    problemasProvaveis: [
      "Tom cerimonioso e teatral: introduções prolixas ('Bienvenue à la haute cuisine...') que gastam tokens sem utilidade prática.",
      "Aumento do tempo de preparo: elevou o tempo para 40 minutos com técnicas culinárias desnecessariamente complexas.",
      "Ingredientes caros/gourmet: incluiu vinho branco seco, manteiga clarificada e queijo importado, ignorando a restrição de custo.",
      "Verborragia de chef: despejou 5 segredos culinários longos e cansativos de ler durante o cozimento.",
      "Transferência de 3 perguntas difíceis ao final, sem resolver a entrega de forma direta."
    ]
  },

  segundaTentativa: {
    prompt: `# Contexto & Papel
Estou cozinhando para 5 pessoas que comem bem em um almoço de domingo em família.

# Tarefa Principal
Me ensine a fazer macarrão parisiense tradicional caseiro, cremoso e saboroso.

# Formato da Saída
Apresente a resposta estritamente em:
1. Ingredientes com medidas exatas (em gramas/xícaras) para 5 porções.
2. Modo de preparo em etapas numeradas e cronológicas.
3. Tempo total estimado de preparo.

# Restrições Negativas
- Não use vinho branco nem ingredientes caros ou difíceis de achar.
- O tempo total não pode passar de 25 minutos.
- Inicie a resposta diretamente nos ingredientes, sem introduções motivacionais ou saudações.
- Não faça perguntas adicionais ao final.`
  },

  promptsModelo: [
    {
      titulo: "1. Auto-Entrevista Guiada com Escopo (Meta-Prompting)",
      icone: "🤖",
      cor: "#38bdf8",
      descricao: "Inverte o papel e faz o ChatGPT formular 4 perguntas investigativas antes de entregar o artefato final (Turnos 1 e 2).",
      codigo: `[Auto-Entrevista Guiada / Meta-Prompting]
Quero aprender a fazer macarrão parisiense para um almoço em família. Antes de me dar a receita, atue como um chef especialista em cozinha prática e me faça 4 perguntas essenciais para que a receita fique perfeita para a minha realidade.`
    },
    {
      titulo: "2. Trava de Segurança / UNESCO (Grounding & Incerteza)",
      icone: "🛡️",
      cor: "#ef4444",
      descricao: "Obriga a IA a marcar lacunas de conhecimento com rótulo explícito em vez de inventar dados ou fatos.",
      codigo: `[Trava de Segurança / UNESCO]
Se você não tiver certeza absoluta de alguma informação ou se faltarem dados no contexto fornecido, responda "Informação não especificada no material" ou marque o trecho com o rótulo [necessita verificação]. Não tente adivinhar ou inventar fatos.`
    },
    {
      titulo: "3. Anonimização de Dados (Regra do Cartão-Postal & LGPD)",
      icone: "🔒",
      cor: "#10b981",
      descricao: "Aplica a Regra do Cartão-Postal substituindo identidades e valores reais por placeholders seguros.",
      codigo: `[Anonimização de Dados / Regra do Cartão-Postal]
Reescreva a mensagem abaixo mantendo a estrutura profissional. Substitua nomes reais de pessoas por [NOME A], empresas por [EMPRESA X] e valores por [VALOR Y].
Texto base: [cole o texto com dados mascarados aqui]`
    }
  ],

  cincoElementos: [
    {
      elemento: "1. Contexto & Papel (Quem & Onde)",
      comoAparece: "# Contexto & Papel: 'Estou cozinhando para 5 pessoas que comem bem em um almoço de domingo em família.'",
      funcao: "Ancora a atenção da rede neural no cenário real de rendimento e clima, definindo tom e perspectiva sem gerar teatro ou verborragia inútil."
    },
    {
      elemento: "2. Tarefa Clara (O que fazer)",
      comoAparece: "# Tarefa Principal: 'Me ensine a fazer macarrão parisiense tradicional caseiro, cremoso e saboroso.'",
      funcao: "Define a meta direta com verbos de ação específicos, eliminando ambiguidade e evitando dispersão em receitas alternativas."
    },
    {
      elemento: "3. Formato Específico (Como entregar)",
      comoAparece: "# Formato da Saída: '1. Ingredientes com medidas exatas para 5 porções | 2. Modo de preparo cronológico | 3. Tempo total...'",
      funcao: "Padroniza a estrutura visual da resposta para leitura imediata no fogão, com uso de Markdown (#) para facilitar a hierarquia semântica do modelo."
    },
    {
      elemento: "4. Restrições Negativas (O que evitar)",
      comoAparece: "# Restrições Negativas: 'Não use vinho branco nem itens caros; tempo máximo de 25 min; inicie direto; sem perguntas adicionais.'",
      funcao: "Fecha brechas probabilísticas, podando respostas genéricas, gourmetização cara e eliminando perguntas residuais no rodapé."
    },
    {
      elemento: "5. Trava Anti-Alucinação (Grounding)",
      comoAparece: "[Trava UNESCO]: 'Se não constar no material ou faltarem dados, marque com [necessita verificação]'",
      funcao: "Impede o modelo de preencher lacunas probabilísticas com dados inventados, garantindo confiabilidade factual na entrega."
    }
  ],

  comparacaoRespostas: [
    { pergunta: "Qual foi a diferença entre o pedido vago de 1 linha (que arbitrou 2-3 pessoas) e a persona superlativada do chef francês (que incluiu vinho branco e 40 minutos)?" },
    { pergunta: "Como a delimitação do formato (# Formato da Saída) e do público (# Contexto para 5 pessoas) evitou que faltasse comida na mesa?" },
    { pergunta: "As restrições negativas ('não use vinho branco' e 'tempo máximo de 25 min') foram rigorosamente respeitadas pelo ChatGPT no Teste 3?" },
    { pergunta: "Por que a ausência de perguntas adicionais ao final do Teste 3 eliminou a necessidade de novos turnos de conversa na cozinha?" },
    { pergunta: "Na Auto-Entrevista (Teste 4), de que forma responder a apenas 4 tópicos curtos gerou um Prompt Mestre executivo superior a qualquer pedido manual?" }
  ],

  reflexaoFinal: {
    perguntaGuia: "Por que adjetivos superlativos ('o melhor chef do mundo') geram apenas verborragia e teatro, enquanto o framework C-T-F-R entrega a solução exata na primeira tentativa? De que forma a técnica de Auto-Entrevista (Meta-Prompting) transfere o esforço de engenharia para a própria IA?"
  },

  configuracaoChatGPT: [
    "Utilize preferencialmente o modo 'Chat Temporário' para garantir privacidade e evitar contaminação do histórico anterior.",
    "Abra um chat novo para cada nível de teste para avaliar o comportamento puro do modelo sem viés de memória acumulada.",
    "Caso utilize o chat convencional, desative as 'Instruções Personalizadas' (Custom Instructions) para testar o comportamento nativo dos prompts.",
    "Aplique a Regra do Cartão-Postal: nunca insira dados reais de clientes, nomes de alunos, senhas, CPFs ou relatórios confidenciais.",
    "Utilize placeholders de anonimização: substitua dados confidenciais por [EMPRESA X], [ALUNO A] e [VALOR Y]."
  ],

  criteriosAvaliacao: [
    {
      criterio: "Estrutura do Prompt (C-T-F-R)",
      ponto1: "Prompt vago de 1 linha ou poluído com adjetivos superlativos sem formato ou restrições.",
      ponto2: "Apresenta tarefa e contexto, mas não delimita formato fechado nem restrições negativas explícitas.",
      ponto3: "Domínio pleno dos 4 blocos C-T-F-R com Markdown (#), rendimento exato para 5 porções e restrições negativas cumpridas."
    },
    {
      criterio: "Diálogo & Auto-Entrevista",
      ponto1: "Aceita a primeira resposta sem refinamento ou tenta meta-prompting sem definir escopo.",
      ponto2: "Faz perguntas genéricas à IA ou responde superficialmente aos questionamentos do assistente.",
      ponto3: "Conduz a auto-entrevista em dois atos com escopo delimitado, responde aos 4 tópicos e obtém o Prompt Mestre estruturado."
    },
    {
      criterio: "Validação Crítica & Segurança",
      ponto1: "Copia a resposta sem ler ou confunde fluência textual com precisão factual.",
      ponto2: "Revisa apenas aspectos estéticos superficiais, sem auditar restrições ou limitações de tempo.",
      ponto3: "Aplica travas anti-alucinação com rótulo [necessita verificação], anonimiza dados (LGPD) e audita o resultado com senso crítico."
    }
  ],

  diretrizesDocentes: [
    "Acolhimento Total ao Iniciante: tranquilizar a turma demonstrando que errar no pedido de 1 linha é o primeiro passo para enxergar o valor do método.",
    "Desconstrução da Persona: reforçar enfaticamente no telão que 'o melhor do mundo' gera apenas teatro, vinho branco e 40 minutos de espera.",
    "Modelagem Visual em Dois Atos: demonstrar os Slides 18 e 19 no projetor antes de liberar os alunos para a Auto-Entrevista nos computadores.",
    "Fragmentação da Bancada: monitorar os tempos dos níveis práticos (Missão 1 em 20 min e Missão 2 em 15 min) com pausas breves de alinhamento.",
    "Intervenção Cirúrgica: ao ver um aluno com resposta prolixa, ensine na hora o comando de poda com restrição negativa imediata.",
    "Roda Show & Tell: reservar os 10 minutos finais da aula para valorizar a evolução de quem começou no vago e conseguiu criar um prompt mestre."
  ],

  planoB: "Caso a conexão com o ChatGPT oscile no laboratório, as docentes projetarão o ChatGPT na tela central e conduzirão a oficina em modo de 'Bancada Coletiva': os alunos ditarão em voz alta as restrições e o contexto a partir das suas bancadas, acompanhando o antes e o depois no telão."
};
