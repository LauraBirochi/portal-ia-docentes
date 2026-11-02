/**
 * Encontro 3 – Deck de Slides com Roteiro da Docente para o Projetor
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 * 
 * Tema Central: ChatGPT na Prática: Do Comando Simples ao Trabalho Real
 * Data: 06/11/2026 • 3 horas presenciais
 * Docência Compartilhada: Laura & Maria
 * 
 * Design System: CKW Design System + Frontend Slides (16:9 Widescreen Nativo)
 */

export const slidesComNotas = [
  // =========================================================================
  // BLOCO 1: FUNDAMENTOS & ESTRUTURA (Slides 1 a 5)
  // =========================================================================
  {
    numero: 1,
    id: 1,
    bloco: 1,
    tipo: "capa",
    categoria: "Abertura",
    titulo: "ChatGPT na Prática: Do Comando Simples ao Trabalho Real",
    subtitulo: "Encontro 3 • Como instruir, refinar e colaborar com a IA de forma produtiva, ética e segura",
    detalhes: [
      "32 Horas Certificadas • Encontro 3 de 7",
      "06/11/2026 • 3 Horas Presenciais",
      "Docência: Laura & Maria",
      "Coordenação: Prof. Lúcio Rodrigo"
    ],
    conducao: "Co-docência (Laura e Maria)",
    notasProfessora: {
      tempoSugerido: "5 min (00:00 - 00:05)",
      objetivoSlide: "Acolher a turma, reduzir a ansiedade sobre a complexidade da IA e definir o objetivo prático do dia.",
      oQueFalar: "(Laura) \"Olá, pessoal! Sejam muito bem-vindos ao nosso Encontro 3! Nas aulas anteriores, desmistificamos a IA, vimos como as redes neurais preveem palavras e aprendemos a proteger nossos dados de privacidade. Hoje daremos o passo definitivo: aprender a conversar com o ChatGPT para resolver tarefas reais da nossa rotina de estudos, trabalho e vida pessoal.\" (Maria) \"Isso mesmo! Hoje ninguém precisa saber programar. Vamos aprender a arte de orientar a IA com clareza, exatamente como orientamos um colega de trabalho. Vamos juntos!\""
    }
  },
  {
    numero: 2,
    id: 2,
    bloco: 1,
    tipo: "comparativo",
    categoria: "Devolutiva Acolhedora",
    titulo: "Onde Estamos e Aonde Vamos Hoje",
    subtitulo: "Conectando os aprendizados anteriores à prática de comunicação com a IA",
    conducao: "Condução: Maria",
    colunas: [
      {
        tag: "Revisão Encontros 1 e 2",
        icone: "✅",
        tipo: "positivo",
        bullet: "✓",
        itens: [
          "IA Generativa ≠ Buscador do Google (Gerador Probabilístico token a token)",
          "Blindagem de Dados Sensíveis e Conta Protegida (Opt-out de Treinamento)",
          "Reconhecimento das alucinações e dos limites técnicos dos modelos"
        ]
      },
      {
        tag: "Desafio de Hoje (Encontro 3)",
        icone: "🎯",
        tipo: "marrom",
        bullet: "➔",
        itens: [
          "Superar pedidos genéricos ('me dê dicas') que geram respostas vagas",
          "Dominar a estrutura de instruções sob medida (Contexto, Tarefa, Formato e Restrições)",
          "Assumir o controle crítico dos resultados (Agência Humana na Curadoria)"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (00:05 - 00:15)",
      objetivoSlide: "Validar o progresso dos alunos e estabelecer a ponte cognitiva entre a teoria inicial e o prompting estruturado.",
      oQueFalar: "(Maria) \"No Encontro 1, vimos que a IA não é mágica nem robô humanoide, mas sim um poderoso sistema estatístico. No Encontro 2, aprendemos a desativar o treinamento de dados e entendemos que o ChatGPT constrói textos palavra por palavra. Hoje, vamos resolver a principal frustração que vocês relataram: por que às vezes a IA responde algo genérico ou vago? A resposta está na forma como fazemos o pedido. Vamos transformar pedidos simples em comandos profissionais!\""
    }
  },
  {
    numero: 3,
    id: 3,
    bloco: 1,
    tipo: "apresentacao",
    categoria: "Fundamento de Prompting",
    titulo: "A Metáfora do Estagiário Inteligente",
    subtitulo: "Trate o ChatGPT como um estagiário de alta capacidade no seu primeiro dia de trabalho",
    conducao: "Condução: Laura",
    itensDestaque: [
      {
        icone: "🧠",
        titulo: "Capacidade Alta",
        desc: "Ele leu bilhões de textos, domina gramática e processa grandes volumes de informação em segundos."
      },
      {
        icone: "❓",
        titulo: "Contexto Zero",
        desc: "Não conhece sua rotina, sua instituição, suas preferências implícitas ou o que você considera prioritário."
      },
      {
        icone: "📋",
        titulo: "O Handoff Perfeito",
        desc: "Exige 3 elementos essenciais: onde estamos (cenário), o que fazer (tarefa) e o que é um bom trabalho (critérios)."
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (00:15 - 00:25)",
      objetivoSlide: "Fornecer um modelo mental intuitivo (Handoff do Estagiário) para orientar a formulação de prompts claros.",
      oQueFalar: "(Laura) \"Imagine que você contratou um estagiário brilhante no primeiro dia de trabalho. Ele tem muita vontade e leu bibliotecas inteiras, mas não sabe absolutamente nada sobre a sua rotina ou sobre como você gosta das coisas. Se você apenas disser 'faça um relatório sobre as reuniões', ele vai entregar algo genérico ou fora do tom. Mas se você explicar o contexto, qual é o objetivo, quem vai ler e como quer o resultado, ele entregará um trabalho impecável. O ChatGPT funciona exatamente assim!\""
    }
  },
  {
    numero: 4,
    id: 4,
    bloco: 1,
    tipo: "comparativo",
    categoria: "Demonstração \"Prompt or Flop\"",
    titulo: "Prompt or Flop? O Impacto da Clareza",
    subtitulo: "Por que pedidos livres geram respostas vagas e como a estrutura altera o resultado",
    conducao: "Condução: Maria",
    colunas: [
      {
        tag: "❌ Prompt Livre / Vago (FLOP)",
        icone: "⚠️",
        tipo: "alerta",
        bullet: "✕",
        itens: [
          "Comando: \"Me ajude a organizar minha semana.\"",
          "Diagnóstico: A rede neural ativa o caminho médio mais genérico possível sem restrições.",
          "Resultado da IA: Dicas genéricas de produtividade e frases motivacionais padrão ('beba água', 'durma bem')."
        ]
      },
      {
        tag: "✅ Prompt Estruturado (PROMPT)",
        icone: "✓",
        tipo: "positivo",
        bullet: "✓",
        itens: [
          "Comando: \"Atue como mentor de organização pessoal. Tenho 4 blocos de estudo de 2h e 3 metas de trabalho nesta semana. Monte uma agenda em tabela de segunda a sexta, priorizando as tarefas mais difíceis no período da manhã.\"",
          "Diagnóstico: Papel definido, disponibilidade real, formato delimitado e critério explícito.",
          "Resultado da IA: Um plano semanal pronto, personalizado, sem clichês e executável."
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (00:25 - 00:35)",
      objetivoSlide: "Evidenciar visualmente a diferença entre prompts abertos/incompletos e comandos estruturados.",
      oQueFalar: "(Maria) \"Olhem para o telão. Quando digitamos apenas 'Me ajude a organizar minha semana', a rede neural ativa o caminho médio mais genérico possível. Ela não sabe quantas horas você tem, se estuda ou trabalha. Já no segundo exemplo, fornecemos papel, contexto, tarefa e formato. Reparem na mudança drástica de qualidade! A estrutura não limita a IA; ela libera o potencial de resposta sob medida.\""
    }
  },
  {
    numero: 5,
    id: 5,
    bloco: 1,
    tipo: "apresentacao",
    layout: "grid-4cards",
    categoria: "Framework de Prompting",
    titulo: "Os 4 Blocos da Estrutura Perfeita",
    subtitulo: "O mapa de construção para qualquer solicitação no ChatGPT",
    conducao: "Condução: Laura",
    itensDestaque: [
      {
        icone: "🧩",
        titulo: "1. CONTEXTO (Quem & Onde)",
        desc: "Quem a IA deve ser (papel/persona) e qual é o cenário real de fundo da situação."
      },
      {
        icone: "⚙️",
        titulo: "2. TAREFA (O que fazer)",
        desc: "A ação principal descrita com clareza cristalina e verbos de ação diretos."
      },
      {
        icone: "📐",
        titulo: "3. FORMATO (Como entregar)",
        desc: "Tabela, lista de marcadores, e-mail executivo, extensão máxima e tom de voz."
      },
      {
        icone: "🛑",
        titulo: "4. RESTRIÇÕES (O que evitar)",
        desc: "Regras invioláveis, limites, critérios e trava explícita de 'não inventar dados'."
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (00:35 - 00:45)",
      objetivoSlide: "Ensinar os 4 blocos fundamentais (Contexto, Tarefa, Formato e Restrições) sintetizados das melhores práticas da OpenAI e frameworks educacionais (RACE/TRACI).",
      oQueFalar: "(Laura) \"Para nunca mais esquecer como montar um comando, gravem estes 4 blocos: Contexto, Tarefa, Formato e Restrições. O Contexto dá a cor de fundo; a Tarefa diz exatamente o que fazer; o Formato define a estrutura visual da resposta; e as Restrições colocam os limites necessários para a IA não inventar fatos ou usar um tom inadequado. Agora vamos ver como aplicar isso em tarefas reais do cotidiano!\""
    }
  },

  // =========================================================================
  // BLOCO 2: PRÁTICAS NO MUNDO REAL & PRIVACIDADE (Slides 6 a 9)
  // =========================================================================
  {
    numero: 6,
    id: 6,
    bloco: 2,
    tipo: "comparativo",
    categoria: "Prática no Mundo Real (Camada 1)",
    titulo: "Camada 1: Organização Pessoal e Rotina",
    subtitulo: "Usando a IA para estruturar horários, estudos e listas de planejamento diário",
    conducao: "Condução: Maria",
    colunas: [
      {
        tag: "📌 Caso Prático: Rotina Concorrida",
        icone: "⏱️",
        tipo: "marrom",
        bullet: "•",
        itens: [
          "Estudante que trabalha 8h por dia",
          "Apenas 1h30 líquida livre no período noturno",
          "Necessidade de manter constância de revisão sem estresse"
        ]
      },
      {
        tag: "💬 Comando Estruturado na Tela",
        icone: "💬",
        tipo: "positivo",
        bullet: "➔",
        itens: [
          "[Contexto] Sou estudante e trabalho 8h por dia. Tenho apenas 1h30 livre à noite.",
          "[Tarefa] Crie um cronograma de estudos focado na revisão de conteúdos acadêmicos para 5 dias.",
          "[Formato] Apresente em uma tabela com colunas: Dia, Tópico, Técnica e Tempo em minutos.",
          "[Restrições] Reserve os últimos 15 min para questões práticas e não inclua tarefas no domingo."
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (00:45 - 00:55)",
      objetivoSlide: "Demonstrar a aplicação da primeira camada de tarefas (organização pessoal e cronogramas de estudo).",
      oQueFalar: "(Maria) \"Vamos para a nossa primeira camada prática: organização pessoal! Vejam como o prompt do telão especifica exatamente a disponibilidade de tempo do aluno. Em vez de receber conselhos genéricos, o ChatGPT gera uma rotina real cabível na semana. Repararam na restrição final 'não inclua tarefas no domingo'? É esse tipo de trava que garante que o resultado respeite a sua vida real!\""
    }
  },
  {
    numero: 7,
    id: 7,
    bloco: 2,
    tipo: "comparativo",
    categoria: "Prática no Mundo Real (Camada 2)",
    titulo: "Camada 2: Redação e Simplificação Profissional",
    subtitulo: "Elaborando e-mails, ajustando o tom e simplificando textos de trabalho",
    conducao: "Condução: Laura",
    colunas: [
      {
        tag: "✉️ Caso Prático: Atualização de Projeto",
        icone: "💼",
        tipo: "marrom",
        bullet: "•",
        itens: [
          "Anotações soltas e rascunhos de reuniões",
          "Necessidade de enviar síntese executiva para gestão/clientes",
          "Risco de perder precisão ou parecer prolixo"
        ]
      },
      {
        tag: "💬 Comando Estruturado na Tela",
        icone: "💬",
        tipo: "positivo",
        bullet: "➔",
        itens: [
          "[Contexto] Atue como um assistente de comunicação profissional claro e conciso.",
          "[Tarefa] Reescreva as notas brutas abaixo em um e-mail de atualização de projeto.",
          "[Formato] Estrutura: 1 parágrafo de resumo + lista de conquistas + próximos passos.",
          "[Restrições] Mantenha tom cordial e profissional. Não invente datas ou prazos não citados."
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (00:55 - 01:05)",
      objetivoSlide: "Ensinar a redação, reescrita e simplificação de textos de trabalho com controle de tom e prevenção de invenção de dados.",
      oQueFalar: "(Laura) \"Na segunda camada, abordamos a escrita de trabalho. Muitas vezes temos ideias em anotações soltas, mas precisamos enviar um e-mail formal. Ao passar os rascunhos para o ChatGPT com a instrução 'não invente datas não citadas', garantimos que a IA organize a estrutura sem alterar a verdade dos fatos. Isso economiza horas de redação mantendo a precisão profissional!\""
    }
  },
  {
    numero: 8,
    id: 8,
    bloco: 2,
    tipo: "comparativo",
    categoria: "Blindagem de Privacidade",
    titulo: "A Regra do Cartão-Postal e a Anonimização",
    subtitulo: "O que nunca deve ser enviado ao ChatGPT em tarefas profissionais",
    conducao: "Condução: Maria",
    colunas: [
      {
        tag: "🚫 NUNCA INCLUA (Regra do Cartão-Postal)",
        icone: "⚠️",
        tipo: "alerta",
        bullet: "✕",
        itens: [
          "Trate a caixa de texto da IA como uma mensagem pública aberta",
          "Proibido: CPFs, senhas, chaves de API e dados bancários",
          "Proibido: Nomes reais de alunos/clientes, dados médicos ou processos sigilosos"
        ]
      },
      {
        tag: "🛡️ TÉCNICA DA ANONIMIZAÇÃO",
        icone: "✓",
        tipo: "positivo",
        bullet: "✓",
        itens: [
          "Em vez de: \"O cliente João da Silva da Empresa X deve R$ 5.000...\"",
          "Substitua por: \"O [CLIENTE A] da [EMPRESA Y] possui um saldo pendente de [VALOR Z]...\"",
          "Preserva 100% da inteligência da IA sem expor nenhuma informação sensível (LGPD)"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (01:05 - 01:15)",
      objetivoSlide: "Reforçar os protocolos de proteção à privacidade e ensinar a técnica prática de anonimização de dados sensíveis.",
      oQueFalar: "(Maria) \"Antes de irmos para o intervalo, um lembrete fundamental sobre segurança: lembrem-se da Regra do Cartão-Postal. Nunca insiram dados confidenciais de trabalho ou documentos com nomes reais. Usamos a técnica da anonimização: trocamos nomes por [CLIENTE A] e empresas por [EMPRESA X]. Assim, usaremos a inteligência da IA para estruturar o texto sem expor nenhuma informação sensível!\""
    }
  },
  {
    numero: 9,
    id: 9,
    bloco: 2,
    tipo: "secao",
    categoria: "Intervalo Pedagógico",
    badge: "Café com Prosa • 15 minutos",
    titulo: "Pausa para Café e Descanso Cognitivo",
    subtitulo: "Retornaremos em 15 minutos para a Oficina Prática no Computador",
    pills: [
      { tipo: "real", texto: "☕ Café & Hidratação" },
      { tipo: "real", texto: "💬 Troca Informal" },
      { tipo: "real", texto: "💻 Preparação das Bancadas" }
    ],
    conducao: "Co-docência (Laura e Maria)",
    notasProfessora: {
      tempoSugerido: "15 min (01:15 - 01:30)",
      objetivoSlide: "Permitir o descanso cognitivo, interação social e checagem técnica dos computadores pelas professoras.",
      oQueFalar: "(Laura) \"Chegamos ao nosso intervalo pedagógico de 15 minutos! Aproveitem para tomar um café, esticar as pernas e assimilar o que vimos até aqui. (Maria) Enquanto vocês descansam, eu e a professora Laura vamos passar nos computadores do laboratório para verificar as conexões para a nossa oficina prática na volta. Até já!\""
    }
  },

  // =========================================================================
  // BLOCO 3: DIÁLOGO ITERATIVO & OFICINA DE BANCADA (Slides 10 a 13)
  // =========================================================================
  {
    numero: 10,
    id: 10,
    bloco: 3,
    tipo: "comparativo",
    categoria: "Técnica de Diálogo (Camada 3)",
    titulo: "Camada 3: Diálogo Iterativo e Meta-Prompting",
    subtitulo: "Como fazer o ChatGPT entrevistar você para criar o prompt perfeito",
    conducao: "Condução: Laura",
    colunas: [
      {
        tag: "🔄 Diálogo Iterativo & Meta-Prompting",
        icone: "🤖",
        tipo: "marrom",
        bullet: "•",
        itens: [
          "Diálogo Iterativo: A IA não é disparo único; ajuste e refine a resposta em múltiplos turnos",
          "O que é Meta-Prompting? Pedir à própria IA que atue como engenheira de prompt",
          "Inversão de Papel: Faça a IA perguntar antes de você ter que explicar tudo sozinho"
        ]
      },
      {
        tag: "💬 Prompt de Meta-Prompting no Telão",
        icone: "💬",
        tipo: "positivo",
        bullet: "➔",
        itens: [
          "\"Quero criar um modelo de e-mail para cobrança amigável de fornecedores.\"",
          "\"Antes de escrever, me faça 5 perguntas essenciais para entender meu contexto, tom desejado e restrições.\"",
          "A IA assume papel investigativo e formula a instrução perfeita sob medida"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "15 min (01:30 - 01:45)",
      objetivoSlide: "Introduzir a terceira camada de aprendizado (diálogo iterativo e meta-prompting), ensinando a IA a atuar como co-criadora de instruções.",
      oQueFalar: "(Laura) \"Bem-vindos de volta! Agora entraremos na Camada 3: o Diálogo Iterativo e o Meta-Prompting! Se você não souber exatamente como preencher os 4 blocos de um prompt, não tem problema. Você pode pedir para o ChatGPT fazer as perguntas para você! Olhem a instrução no telão: 'Me faça 5 perguntas antes de escrever'. A IA vira uma entrevistadora que ajuda você a clarear o seu próprio pensamento antes de produzir a resposta!\""
    }
  },
  {
    numero: 11,
    id: 11,
    bloco: 3,
    tipo: "comparativo",
    categoria: "Responsabilidade Humana",
    titulo: "Agência Humana e Validação Crítica",
    subtitulo: "A IA gera rascunhos; a decisão e a responsabilidade final são sempre do usuário",
    conducao: "Condução: Maria",
    colunas: [
      {
        tag: "⚖️ Princípio da UNESCO & Alucinações",
        icone: "⚠️",
        tipo: "alerta",
        bullet: "•",
        itens: [
          "A IA é uma ferramenta de apoio que deve potencializar — e nunca substituir — o julgamento humano",
          "Revisão Textual ≠ Checagem de Fatos: um texto bem escrito e coeso pode conter dados totalmente inventados",
          "A responsabilidade profissional e legal sobre qualquer conteúdo gerado é 100% de quem o assina"
        ]
      },
      {
        tag: "🛡️ TRAVAS ANTI-ALUCINAÇÃO",
        icone: "✓",
        tipo: "positivo",
        bullet: "✓",
        itens: [
          "Inclua no prompt: \"Se você não tiver certeza ou faltarem dados, responda 'não especificado'\"",
          "Instrução explícita: \"Não invente dados, referências bibliográficas ou datas não citadas\"",
          "Auditoria ativa: Valide datas, números, citações e fontes oficiais fora da IA antes de utilizar"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "15 min (01:45 - 02:00)",
      objetivoSlide: "Conscientizar sobre os limites da IA, o fenômeno das alucinações e a obrigatoriedade da responsabilidade e agência humana conforme diretrizes da UNESCO.",
      oQueFalar: "(Maria) \"Atenção total para este pilar ético: a UNESCO estabelece que a responsabilidade final sobre qualquer conteúdo gerado por IA é sempre humana. Nunca aceitem uma resposta sem ler criticamente. Lembrem-se da nossa regra de ouro do Encontro 2: arrumar a gramática deixa o texto bonito, mas não garante que o dado seja verdadeiro. Usem travas de restrição como 'não invente dados' e chequem informações críticas em fontes oficiais!\""
    }
  },
  {
    numero: 12,
    id: 12,
    bloco: 3,
    tipo: "missao-diagnostica",
    categoria: "Prática Guiada no Laboratório",
    titulo: "Oficina Mão na Massa: Missão 1",
    subtitulo: "Transformando um pedido simples da sua rotina em um Prompt Mestre",
    tempoEstimado: "25 min",
    passos: [
      "1. Abra seu arquivo do Portfólio Digital - Encontro 3.",
      "2. Escolha 1 tarefa real da sua rotina (estudos, trabalho ou organização pessoal).",
      "3. Passo A (Prompt Simples): Digite o pedido curto de 1 linha no ChatGPT e cole a resposta obtida.",
      "4. Passo B (Prompt Mestre): Escreva o prompt completo aplicando os 4 blocos (Contexto, Tarefa, Formato e Restrições) e envie em novo chat.",
      "5. Passo C (Análise): Compare os dois resultados e anote o que mudou na utilidade prática."
    ],
    destaqueDiagnostica: {
      icone: "💻",
      titulo: "Oficina nos Computadores",
      desc: "Transformação prática de um comando do seu cotidiano aplicando a tabela dos 4 blocos essenciais.",
      tagAviso: "Portfólio Digital • Registro Antes vs. Depois"
    },
    conducao: "Co-docência (Laura e Maria circulando pela turma)",
    notasProfessora: {
      tempoSugerido: "25 min (02:00 - 02:25)",
      objetivoSlide: "Permitir a experimentação prática direta do aluno, registrando a evolução do prompt antes e depois no Portfólio Digital.",
      oQueFalar: "(Laura) \"Agora é a vez de vocês nos computadores! Acessem o Portfólio Digital e realizem a Missão 1. Vocês vão pegar um pedido simples da vida de vocês e transformá-lo usando a nossa tabela dos 4 blocos. (Maria) Eu e a professora Laura estaremos circulando pelas bancadas para tirar dúvidas e ajudar cada um de vocês a ajustar as restrições e o contexto!\""
    }
  },
  {
    numero: 13,
    id: 13,
    bloco: 3,
    tipo: "missao-diagnostica",
    categoria: "Prática Guiada no Laboratório",
    titulo: "Oficina Mão na Massa: Missão 2",
    subtitulo: "Experimentando o Meta-Prompting e a Validação Crítica",
    tempoEstimado: "15 min",
    passos: [
      "1. Entrevista de Meta-Prompting: Peça ao ChatGPT para fazer 3 a 5 perguntas sobre um problema complexo que você deseja resolver.",
      "2. Refinamento Iterativo: Responda às perguntas da IA no chat e avalie o prompt estruturado gerado por ela.",
      "3. Checagem de Segurança: Aplique a trava anti-alucinação e identifique se há alguma informação que precisa de validação fora da IA.",
      "4. Registre o prompt final e sua reflexão crítica no Portfólio Digital."
    ],
    destaqueDiagnostica: {
      icone: "🤖",
      titulo: "Meta-Prompting na Prática",
      desc: "Coloque a IA para trabalhar como sua entrevistadora investigativa e refine soluções complexas.",
      tagAviso: "Auditoria Crítica & Entrevista Ativa"
    },
    conducao: "Co-docência (Laura e Maria circulando pela turma)",
    notasProfessora: {
      tempoSugerido: "15 min (02:25 - 02:40)",
      objetivoSlide: "Desenvolver a autonomia na aplicação do meta-prompting e no hábito de auditoria de confiabilidade.",
      oQueFalar: "(Maria) \"Excelente trabalho na Missão 1! Agora vamos para a Missão 2. Testem colocar o ChatGPT para trabalhar como entrevistador de vocês. Peçam a ele: 'Faça 5 perguntas antes de me dar a resposta'. Vejam como as perguntas da IA ajudam a lembrar de detalhes que vocês não tinham pensado de início! Registrem as descobertas no arquivo do portfólio.\""
    }
  },

  // =========================================================================
  // BLOCO 4: SOCIALIZAÇÃO & FECHAMENTO (Slides 14 e 15)
  // =========================================================================
  {
    numero: 14,
    id: 14,
    bloco: 4,
    tipo: "apresentacao",
    categoria: "Avaliação & Socialização",
    titulo: "Roda de Socialização (Show & Tell)",
    subtitulo: "Compartilhando evoluções, prompts transformados e lições aprendidas",
    conducao: "Co-docência (Laura e Maria)",
    itensDestaque: [
      {
        icone: "🎯",
        titulo: "Tarefa Escolhida",
        desc: "Qual tarefa da sua rotina real você escolheu testar no computador?"
      },
      {
        icone: "⚡",
        titulo: "Diferença Gritante",
        desc: "Qual foi a diferença mais marcante entre o prompt simples e o prompt estruturado?"
      },
      {
        icone: "🛡️",
        titulo: "Restrição de Ouro",
        desc: "Qual detalhe de contexto ou restrição negativa fez toda a diferença no resultado final?"
      },
      {
        icone: "📝",
        titulo: "Rubrica Formativa",
        desc: "Apresentação do antes/depois + reflexão crítica no Portfólio Digital (0,5 ponto formativo)."
      }
    ],
    notasProfessora: {
      tempoSugerido: "12 min (02:40 - 02:52)",
      objetivoSlide: "Consolidar o aprendizado por meio da aprendizagem entre pares e realizar a avaliação formativa contínua.",
      oQueFalar: "(Laura) \"Que momento rico! Vamos abrir nossa roda de socialização. Quem gostaria de compartilhar no projetor o seu prompt simples e como ele se transformou após adicionar contexto e restrições?\" (Maria) \"Reparem como o exemplo do colega mostra exatamente o que a UNESCO defende: a inteligência da solução veio do contexto humano que ele forneceu, não apenas da máquina. Parabéns a todos pelo empenho nos exercícios!\""
    }
  },
  {
    numero: 15,
    id: 15,
    bloco: 4,
    tipo: "fechamento",
    categoria: "Fechamento & Ponte",
    titulo: "Checklist de Bolso & Próximos Passos",
    subtitulo: "Leve estas regras para a sua rotina e prepare-se para o Encontro 4",
    conclusao: "A qualidade do resultado da IA reflete a clareza do contexto humano que a orienta.",
    badge: "ENCONTRO 3 CONCLUÍDO COM SUCESSO!",
    proximoEncontro: "Encontro 4 (13/11): Criação de Imagens e Multimodalidade (Áudio, Documentos e Análises Visuais)",
    lembretesFinais: [
      "Tratei a IA como um estagiário de alta capacidade que precisa de contexto?",
      "Incluí os 4 blocos: Contexto, Tarefa, Formato e Restrições?",
      "Anonimizei dados pessoais e informações sensíveis (Regra do Cartão-Postal)?",
      "Validei os fatos criticamente e assumi a responsabilidade final pelo resultado?"
    ],
    conducao: "Co-docência (Laura e Maria)",
    notasProfessora: {
      tempoSugerido: "8 min (02:52 - 03:00)",
      objetivoSlide: "Síntese final dos pilares da aula, reforço da reflexão ética e motivação para o próximo encontro.",
      oQueFalar: "(Maria) \"Para encerrar o nosso Encontro 3, levem este checklist de bolso para a vida de vocês! Sempre que forem usar o ChatGPT no trabalho ou nos estudos, lembrem-se: Contexto, Tarefa, Formato e Restrições!\" (Laura) \"E nunca se esqueçam de que a inteligência crítica e a decisão final continuam sendo de vocês. Na próxima aula (Encontro 4), daremos um salto incrível: vamos aprender sobre IA multimodal, trabalhando com imagens, documentos em PDF e áudio! Um grande abraço e até lá!\""
    }
  }
];
