/**
 * Encontro 3 – Deck de Slides com Roteiro da Docente para o Projetor
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 * 
 * Tema Central: ChatGPT na Prática: Do Comando Simples ao Trabalho Real
 * Data: 06/11/2026 • 3 horas presenciais
 * Docência Compartilhada: Laura & Maria
 * 
 * Design System: CKW Design System + Frontend Slides (16:9 Widescreen Nativo, Deep Navy)
 * Diretrizes: OpenAI Enterprise Guide, UNESCO (Agência Humana) e OSSE (Scaffolding Gradual)
 */

export const slidesComNotas = [
  // =========================================================================
  // BLOCO 1: FUNDAMENTOS & ESTRUTURA C-T-F-R (Slides 1 a 5)
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
    conducao: "Condução: Laura",
    colunas: [
      {
        tag: "Revisão Encontros 1 e 2",
        icone: "✅",
        tipo: "positivo",
        bullet: "✓",
        itens: [
          "IA Generativa ≠ Buscador do Google (Gerador Probabilístico token a token)",
          "Blindagem de Dados Sensíveis e Conta Protegida (Opt-out de Treinamento)",
          "Reconhecimento das alucinações e limites técnicos dos modelos"
        ]
      },
      {
        tag: "Desafio de Hoje (Encontro 3)",
        icone: "🎯",
        tipo: "marrom",
        bullet: "➔",
        itens: [
          "Superar pedidos genéricos ('me dê dicas') que geram respostas rasas",
          "Dominar a estrutura de instruções sob medida (Contexto & Papel, Tarefa, Formato e Restrições)",
          "Assumir o controle crítico dos resultados (Agência Humana na Curadoria)"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (00:05 - 00:15)",
      objetivoSlide: "Validar o progresso dos alunos e estabelecer a ponte cognitiva entre a teoria inicial e o prompting estruturado.",
      oQueFalar: "(Laura) \"No Encontro 1, vimos que a IA não é mágica nem robô humanoide, mas sim um poderoso sistema estatístico. No Encontro 2, aprendemos a desativar o treinamento de dados e entendemos que o ChatGPT constrói textos palavra por palavra. Hoje, vamos resolver a principal frustração que vocês relataram: por que às vezes a IA responde algo genérico ou vago? A resposta está na forma como fazemos o pedido. Vamos transformar pedidos simples em comandos profissionais!\""
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
        desc: "Exige 3 elementos essenciais: onde estamos (cenário & papel), o que fazer (tarefa) e o que é um bom trabalho (critérios)."
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
    categoria: "Duelo de 3 Vias (Prompt or Flop)",
    titulo: "Prompt or Flop? O Duelo de 3 Vias",
    subtitulo: "Do pedido vago à ilusão da persona: por que adjetivos vazios não orientam a IA",
    docente: "Laura",
    conducao: "Condução: Laura",
    colunas: [
      {
        tag: "❌ Prompt Vago (FLOP)",
        icone: "⚠️",
        tipo: "alerta",
        bullet: "✕",
        itens: [
          "Comando: \"Me ajude a organizar minha semana.\"",
          "Diagnóstico: Ativa o caminho médio estatístico mais genérico da rede neural.",
          "Resultado da IA: Dicas vazias de autoajuda e frases motivacionais ('beba água', 'durma bem')."
        ]
      },
      {
        tag: "⚠️ Falso Bom Prompt (A Ilusão da Persona)",
        icone: "🎭",
        tipo: "marrom",
        bullet: "•",
        itens: [
          "Comando: \"Atue como o melhor especialista em produtividade do mundo e faça um plano incrível e super detalhado.\"",
          "Diagnóstico: Adjetivos vazios têm efeito nulo/negativo em precisão factual; geram verborragia e jargão.",
          "Resultado da IA: Texto longo, prolixo e cansativo, sem horários reais, formato ou limites executáveis."
        ]
      },
      {
        tag: "✅ Prompt Estruturado (PROMPT C-T-F-R)",
        icone: "✓",
        tipo: "positivo",
        bullet: "✓",
        itens: [
          "Comando: \"# Contexto: Trabalho 8h, livre 20h às 21h30. # Tarefa: Rotina de estudos para 5 dias. # Formato: Tabela com Dia/Meta/Tempo. # Restrições: Sem tarefas no domingo.\"",
          "Diagnóstico: Papel funcional, disponibilidade real, formato delimitado e critérios de poda negativos.",
          "Resultado da IA: Plano semanal sob medida pronto para execução imediata, sem clichês."
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (00:25 - 00:35)",
      objetivoSlide: "Desmontar o 'Falso Bom Prompt' e a ilusão da persona, comprovando que adjetivos vazios não orientam o modelo.",
      oQueFalar: "(Laura) \"Olhem com muita atenção para o telão! Durante muito tempo, ensinaram na internet que para a IA funcionar bem bastava dizer: 'Atue como o maior especialista do mundo e faça algo incrível e perfeito'. Pesquisas científicas recentes comprovaram que essas personas superlativas têm efeito nulo ou até negativo na precisão factual! Elas só geram verborragia e respostas longas sem substância. O que realmente muda o jogo é a terceira coluna: dar contexto real, verbos diretos, formato em tabela e restrições negativas!\""
    }
  },
  {
    numero: 5,
    id: 5,
    bloco: 1,
    tipo: "apresentacao",
    layout: "grid-4cards",
    categoria: "Framework de Prompting",
    titulo: "Os 4 Blocos da Estrutura Perfeita (Evolução do PCTFR)",
    subtitulo: "Do método do Encontro 2 à organização modular definitiva com Marcadores Markdown (#)",
    conducao: "Condução: Maria",
    itensDestaque: [
      {
        icone: "🧩",
        titulo: "1. CONTEXTO & PAPEL",
        desc: "Engloba a Persona do PCTFR: o papel define tom e postura (use com parcimônia), mas o cenário e os dados definem a precisão."
      },
      {
        icone: "⚙️",
        titulo: "2. TAREFA CLARA",
        desc: "Ação principal descrita com verbos diretos. Evite sobrecarregar o modelo com 10 tarefas misturadas no mesmo comando."
      },
      {
        icone: "📐",
        titulo: "3. FORMATO ESPECÍFICO",
        desc: "Tabela, tópicos, e-mail executivo e extensão máxima. Use cabeçalhos Markdown (# Contexto, # Tarefa) para hierarquia visual."
      },
      {
        icone: "🛑",
        titulo: "4. RESTRIÇÕES NEGATIVAS",
        desc: "Regras invioláveis, limites de tempo, critérios de poda de clichês e a trava inegociável de 'não inventar dados'."
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (00:35 - 00:45)",
      objetivoSlide: "Demonstrar que o bloco de Contexto engloba a Persona do Encontro 2 e introduzir marcadores visuais (Markdown) para organizar a atenção do modelo.",
      oQueFalar: "(Maria) \"Pessoal, quando organizamos nosso pedido usando cabeçalhos claros como # Contexto, # Tarefa e # Restrições, estamos literalmente organizando o mapa de atenção da rede neural. A IA não acerta mais porque dissemos que ela é uma 'especialista sênior premiada', mas porque reduzimos a ambiguidade do espaço de busca das palavras! As restrições negativas são a nossa trava de segurança para impedir que ela invente dados onde não deve!\""
    }
  },

  // =========================================================================
  // BLOCO 2: PRÁTICAS NO MUNDO REAL & PRIVACIDADE (Slides 6 a 9)
  // =========================================================================
  {
    numero: 6,
    id: 6,
    bloco: 2,
    tipo: "secao",
    categoria: "Aplicações Práticas • Casos de Uso",
    badge: "APLICAÇÕES PRÁTICAS • CASOS DE USO",
    titulo: "Exemplos Práticos: Onde Usar um Prompt Estruturado?",
    subtitulo: "Do planejamento pessoal à comunicação de trabalho: como aplicar a estrutura C-T-F-R na sua rotina em 3 camadas",
    pills: [
      { tipo: "real", texto: "📅 Camada 1: Organização & Estudos" },
      { tipo: "real", texto: "✉️ Camada 2: Redação & Simplificação" },
      { tipo: "real", texto: "🤖 Camada 3: Diálogo & Meta-Prompting" }
    ],
    conducao: "Condução: Maria",
    notasProfessora: {
      tempoSugerido: "5 min (00:45 - 00:50)",
      objetivoSlide: "Apresentar a visão geral das 3 camadas de aplicação do framework C-T-F-R no dia a dia acadêmico e profissional.",
      oQueFalar: "(Maria) \"Agora que dominamos a arquitetura dos 4 blocos C-T-F-R, surge a grande pergunta: onde e como colocar isso para rodar na vida real? Para que vocês tenham um roteiro claro de aplicação, dividimos o uso prático em 3 camadas: primeiro na nossa rotina pessoal e organização de estudos; segundo no trabalho e comunicação profissional; e terceiro no diálogo iterativo com a máquina. Vamos começar pela nossa Camada 1!\""
    }
  },
  {
    numero: 7,
    id: 7,
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
          "Estudante que trabalha 8h por dia em horário comercial",
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
          "[Contexto & Papel] Sou estudante e trabalho 8h por dia. Tenho apenas 1h30 livre à noite.",
          "[Tarefa] Crie um cronograma de estudos focado na revisão de conteúdos acadêmicos para 5 dias.",
          "[Formato] Apresente em uma tabela com colunas: Dia, Tópico, Técnica e Tempo em minutos.",
          "[Restrições] Reserve os últimos 15 min para questões práticas e não inclua tarefas no domingo."
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (00:50 - 01:00)",
      objetivoSlide: "Demonstrar a aplicação da primeira camada de tarefas (organização pessoal e cronogramas de estudo com marcadores visuais).",
      oQueFalar: "(Maria) \"Vamos para a nossa primeira camada prática: organização pessoal! Vejam como o prompt do telão especifica exatamente a disponibilidade de tempo do aluno usando as etiquetas entre colchetes. Em vez de receber conselhos genéricos, o ChatGPT gera uma rotina real cabível na semana. Repararam na restrição final 'não inclua tarefas no domingo'? É esse tipo de trava que garante que o resultado respeite a sua vida real!\""
    }
  },
  {
    numero: 8,
    id: 8,
    bloco: 2,
    tipo: "comparativo",
    categoria: "Prática no Mundo Real (Camada 2)",
    titulo: "Camada 2: Redação Profissional & Simplificação",
    subtitulo: "Dois superpoderes do dia a dia: e-mails executivos e tradução de jargões burocráticos",
    conducao: "Condução: Maria",
    colunas: [
      {
        tag: "✉️ Caso A: Rascunho ➔ E-mail Executivo",
        icone: "💼",
        tipo: "marrom",
        bullet: "•",
        itens: [
          "[Contexto & Papel] Atue como um assistente de comunicação profissional claro e conciso.",
          "[Tarefa] Reescreva as notas brutas abaixo em um e-mail de atualização de projeto.",
          "[Formato] 1 parágrafo de resumo + lista de conquistas + próximos passos.",
          "[Restrições] Mantenha tom cordial. Não invente datas ou prazos não citados."
        ]
      },
      {
        tag: "📄 Caso B: Jargão / Edital ➔ Linguagem Clara",
        icone: "📝",
        tipo: "positivo",
        bullet: "✓",
        itens: [
          "[Contexto & Papel] Atue como um comunicador público focado em linguagem cidadã e acessível.",
          "[Tarefa] Simplifique o artigo burocrático abaixo para uma pessoa que nunca leu um edital.",
          "[Formato] Liste estritamente: 1. Quem tem direito; 2. Qual é o prazo; 3. O que deve fazer.",
          "[Restrições] Elimine juridiquês e termos latinos. Máximo de 2 linhas por item."
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (01:00 - 01:10)",
      objetivoSlide: "Apresentar a redação executiva e a simplificação de textos complexos (linguagem clara) com preservação de fatos.",
      oQueFalar: "(Maria) \"Na segunda camada, abordamos duas grandes dores do trabalho adulto: transformar anotações soltas de reunião em um e-mail formal e traduzir documentos difíceis — como editais, termos de contrato e regulamentos — em linguagem simples e cidadã! Vejam o Caso B: ao pedir que a IA extraia quem tem direito, prazos e obrigações, eliminamos horas de sofrimento com burocratês, sem perder nenhum dado importante!\""
    }
  },
  {
    numero: 9,
    id: 9,
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
      tempoSugerido: "10 min (01:10 - 01:20)",
      objetivoSlide: "Reforçar os protocolos de proteção à privacidade e ensinar a técnica prática de anonimização de dados sensíveis.",
      oQueFalar: "(Maria) \"Antes de seguirmos para as técnicas avançadas de diálogo, um lembrete fundamental sobre segurança: lembrem-se da Regra do Cartão-Postal. Nunca insiram dados confidenciais de trabalho ou documentos com nomes reais. Usamos a técnica da anonimização: trocamos nomes por [CLIENTE A] e empresas por [EMPRESA X]. Assim, usaremos a inteligência da IA para estruturar o texto sem expor nenhuma informação sensível!\""
    }
  },

  // =========================================================================
  // BLOCO 3: DIÁLOGO ITERATIVO, ÉTICA & OFICINA DE BANCADA (Slides 10 a 13)
  // =========================================================================
  {
    numero: 10,
    id: 10,
    bloco: 3,
    tipo: "comparativo",
    categoria: "Técnica de Diálogo (Camada 3)",
    titulo: "Camada 3: Diálogo Iterativo & Meta-Prompting",
    subtitulo: "Como fazer o ChatGPT entrevistar você para criar o prompt perfeito (com escopo delimitado)",
    conducao: "Condução: Laura",
    colunas: [
      {
        tag: "🔄 Diálogo Iterativo & Escopo Prévio",
        icone: "🤖",
        tipo: "marrom",
        bullet: "•",
        itens: [
          "Diálogo Iterativo: A IA não é disparo único; refine a resposta em múltiplos turnos na mesma conversa",
          "Alerta de Escopo: O Meta-Prompting funciona melhor quando você já sabe qual problema quer resolver",
          "Evite a Paralisia: Sem intenção delimitada, a IA não sabe quais perguntas fazer; defina o escopo antes",
          "Inversão de Papel: Quando não souber todo o detalhe, faça a máquina atuar como entrevistadora!"
        ]
      },
      {
        tag: "💬 Instrução de Auto-Entrevista no Telão",
        icone: "💬",
        tipo: "positivo",
        bullet: "➔",
        itens: [
          "\"Quero criar um modelo de [e-mail / relatório / cronograma] para a minha rotina.\"",
          "\"Antes de escrever a resposta final, atue como um especialista em comunicação e me faça 4 perguntas essenciais para entender meu contexto, tom de voz, formato e restrições.\"",
          "A IA assume papel investigativo, ajuda a clarear seu pensamento e gera uma solução sob medida"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "15 min (01:30 - 01:45)",
      objetivoSlide: "Apresentar o Meta-Prompting com escopo prévio delimitado para a prática dos alunos.",
      oQueFalar: "(Laura) \"Bem-vindos de volta do café! Agora entramos na Camada 3: o Diálogo Iterativo e o Meta-Prompting! Mas atenção a uma regra de ouro dos nossos diagnósticos: o Meta-Prompting só funciona bem se você já tiver um escopo mínimo na cabeça. Se você disser apenas 'me faça perguntas sobre qualquer coisa', a IA vai travar ou fazer perguntas genéricas. Vejam o telão: delimitamos o escopo — 'Quero criar um modelo de e-mail de cobrança para minha rotina'. E pedimos 4 perguntas. Ela fará perguntas cirúrgicas sobre tom, prazo e valores, ajudando você a clarear o seu pensamento antes de gerar o rascunho final! É essa dinâmica que faremos no laboratório!\""
    }
  },
  {
    numero: 11,
    id: 11,
    bloco: 3,
    tipo: "comparativo",
    categoria: "Responsabilidade Humana",
    titulo: "Agência Humana & Travas de Incerteza (UNESCO)",
    subtitulo: "A IA gera rascunhos; a decisão, a curadoria e a responsabilidade final são sempre humanas",
    conducao: "Condução: Laura",
    colunas: [
      {
        tag: "⚖️ Princípio da UNESCO & Revisão Crítica",
        icone: "⚠️",
        tipo: "alerta",
        bullet: "•",
        itens: [
          "Revisão Textual ≠ Checagem Factual: um texto fluente, coeso e sem erros pode conter dados 100% inventados",
          "O ChatGPT é um escritor improvisador probabilístico (predição de tokens), não um bibliotecário que busca livros",
          "A responsabilidade profissional, pedagógica e legal sobre o conteúdo gerado é 100% de quem o assina"
        ]
      },
      {
        tag: "🛡️ TRAVA EXPLÍCITA: [necessita verificação]",
        icone: "✓",
        tipo: "positivo",
        bullet: "✓",
        itens: [
          "Trava de Segurança: \"Se não tiver certeza absoluta de alguma informação ou faltarem dados, responda 'não especificado' ou marque com [necessita verificação]\"",
          "Instrução de Grounding: \"Baseie-se estritamente nas informações fornecidas. Não tente adivinhar ou inventar fatos\"",
          "Auditoria Ativa: Datas, referências bibliográficas, valores e artigos de lei devem ser conferidos fora da IA"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "15 min (01:45 - 02:00)",
      objetivoSlide: "Conscientizar sobre os limites factuais da IA, desmistificar a falsa segurança de textos bem escritos e ensinar a trava '[necessita verificação]'.",
      oQueFalar: "(Laura) \"Atenção máxima para este ponto ético da UNESCO: 100% das pessoas revisam se o texto está bonito e bem escrito. Mas coerência gramatical NÃO significa verdade! O ChatGPT é um escritor improvisador que prevê a próxima palavra; ele não confere se a lei existe ou se a data é real. Por isso, nunca assinem nada sem checar. Usem sempre a nossa Trava Anti-Alucinação no prompt: exijam que a IA marque dados duvidosos com o rótulo '[necessita verificação]'!\""
    }
  },
  {
    numero: 12,
    id: 12,
    bloco: 3,
    tipo: "missao-diagnostica",
    categoria: "Prática Guiada no Laboratório (Etapa 1)",
    titulo: "Oficina de Bancada: Missão 1 (Etapa 1: 20 min)",
    subtitulo: "Scaffolding: do vago ao estruturado, desmontando a ilusão da persona e aplicando restrições negativas que eliminam retrabalho.",
    tempoEstimado: "20 min",
    passos: [
      "1. Abra o Portfólio Digital - Encontro 3 e escolha 1 tarefa real da sua rotina de estudos ou trabalho.",
      "2. Nível 1 (Prompt Vago): Digite o pedido simples de 1 linha no ChatGPT e cole a resposta obtida (observe os clichês genéricos).",
      "3. Nível 2 (Falso Bom Prompt): Adicione adjetivos vazios ('atue como o melhor especialista incrível') e comprove a verborragia sem formato.",
      "4. Nível 3 (Prompt Mestre): Reescreva aplicando os 4 blocos C-T-F-R (# Contexto, # Tarefa, # Formato, # Restrições).",
      "5. Compare as saídas lado a lado no Portfólio e registre a evolução prática."
    ],
    destaqueDiagnostica: {
      icone: "💻",
      titulo: "Etapa 1: O Duelo de Prompts",
      desc: "Scaffolding: do vago ao estruturado, desmontando a ilusão da persona e aplicando restrições negativas que eliminam retrabalho.",
      tagAviso: "Portfólio Digital • 20 Minutos Focados"
    },
    conducao: "Co-docência (Laura e Maria circulando pela turma)",
    notasProfessora: {
      tempoSugerido: "20 min (02:00 - 02:20)",
      objetivoSlide: "Conduzir a Etapa 1 da oficina com scaffolding em 3 níveis (vago -> ruído -> mestre) antes de passar para o Meta-Prompting.",
      oQueFalar: "(Laura) \"Chegou a hora da prática nas bancadas! Vamos com calma, passo a passo: teremos 20 minutos focados na Missão 1. Abram o Portfólio Digital, peguem uma tarefa real da rotina de vocês e façam os 3 níveis: primeiro o pedido simples, depois o teste com adjetivos vazios para sentir o ruído, e por fim o prompt mestre com os 4 blocos! (Maria) Eu e a Laura estamos passando nas mesas para orientar o contexto e as restrições. Vamos lá!\""
    }
  },

  // =========================================================================
  // BANCADA DE TESTES: RESULTADOS REAIS DOS PROMPTS (Slides 13 a 16)
  // =========================================================================
  {
    numero: 13,
    id: 13,
    bloco: 3,
    tipo: "teste-prompt",
    tipoPrompt: "negativo",
    categoria: "Bancada de Testes Empíricos (Teste 1)",
    titulo: "Teste 1: Prompt Vago (1 Linha Sem Parâmetros)",
    subtitulo: "Resultado obtido com pedido genérico: ausência de contexto e decisões arbitrárias do modelo",
    promptUtilizado: "Quero aprender a fazer macarrão parisiense.",
    diagnosticoPrompt: "Pedido de uma única linha. O modelo não tem nenhuma pista sobre para quem é a refeição, quanto tempo há disponível ou restrições de porções. Por padrão, ele assume um cenário médio arbitrário.",
    respostaObtida: {
      resumo: "Receita descrita como cremosa, deliciosa e fácil de fazer.",
      metricas: [
        "Tempo: 30 minutos",
        "Rendimento: 2 a 3 pessoas (arbitrado)",
        "Nível: fácil",
        "5 etapas convencionais"
      ],
      ingredientes: "Macarrão, presunto, ervilha, cebola, manteiga, creme de leite, leite, farinha de trigo, parmesão e temperos.",
      modoPreparo: [
        "1. Cozinhar o macarrão.",
        "2. Refogar a cebola.",
        "3. Preparar o molho branco.",
        "4. Acrescentar os ingredientes.",
        "5. Finalizar misturando o macarrão ao molho."
      ],
      orientacoesAdicionais: [
        "Não deixar o molho muito grosso.",
        "Utilizar parmesão ralado na hora.",
        "Acrescentar leite caso o molho fique muito consistente.",
        "Evitar ferver demais o creme de leite."
      ],
      perguntaAssistente: "Ao final, o assistente perguntou se o usuário preferia aprender a fazer o macarrão à parisiense com molho bem branquinho e cremoso, no estilo de restaurante, ou uma versão mais simples e econômica para fazer em casa."
    },
    conducao: "Co-docência (Laura e Maria)",
    notasProfessora: {
      tempoSugerido: "3 min (02:20 - 02:23)",
      objetivoSlide: "Demonstrar o comportamento padrão da IA diante de prompts de 1 linha: ela assume decisões arbitrárias (2-3 pessoas, 30 min) e tenta adivinhar a intenção ao final.",
      oQueFalar: "(Laura) \"Vejam o resultado real na tela: mandamos apenas 'Quero aprender a fazer macarrão parisiense'. A IA respondeu uma receita bonita e correta, mas vejam o que ela fez por conta própria: definiu que a refeição é para 2 a 3 pessoas e que demora 30 minutos! E no final, ela mesma percebeu a falta de contexto e perguntou se queríamos estilo restaurante ou econômico. Isso gera retrabalho e não resolve a demanda real da sua rotina!\""
    }
  },
  {
    numero: 14,
    id: 14,
    bloco: 3,
    tipo: "teste-prompt",
    tipoPrompt: "marrom",
    categoria: "Bancada de Testes Empíricos (Teste 2)",
    titulo: "Teste 2: Falso Bom Prompt (A Ilusão da Persona)",
    subtitulo: "Papel de 'melhor chef da França' gera tom teatral, aumenta tempo e adiciona itens sem resolver restrições",
    promptUtilizado: "Atua como o melhor cozinheiro chef da França para me ensinar a fazer um verdadeiro macarrão parisiense.",
    diagnosticoPrompt: "Uso de adjetivos superlativos e persona exagerada sem parâmetros técnicos. O modelo adota uma postura teatral, introduz ingredientes não solicitados (vinho branco) e expande o tempo de preparo.",
    respostaObtida: {
      resumo: "O assistente assumiu o papel de um chef francês e apresentou uma receita descrita como cremosa, elegante e com toque de bistrô francês.",
      metricas: [
        "Tempo: 30 a 40 minutos",
        "Rendimento: 2 a 3 pessoas (arbitrado)",
        "Nível: fácil a intermediário",
        "5 segredos de chef incluídos"
      ],
      ingredientes: "Massa (fettuccine, tagliatelle ou penne, água e sal), molho parisiense (presunto cozido, ervilhas, creme de leite fresco, cebola, manteiga, azeite, parmesão, noz-moscada, pimenta e sal). Opcionais: vinho branco seco e salsinha fresca.",
      modoPreparo: [
        "1. Começar pelo refogado de cebola, manteiga e azeite.",
        "2. Acrescentar presunto, vinho branco (opcional), ervilhas e creme de leite.",
        "3. Cozinhar a massa até ficar al dente e reservar a água do cozimento.",
        "4. Finalizar a massa diretamente na frigideira com o molho, parmesão e água do cozimento.",
        "Montagem do prato: disposição no prato com finalização de parmesão, pimenta e salsinha."
      ],
      orientacoesAdicionais: [
        "1. Utilizar creme de leite fresco.",
        "2. Não exagerar na quantidade de presunto.",
        "3. Utilizar noz-moscada com moderação.",
        "4. Utilizar parmesão de verdade.",
        "5. Finalizar a massa na frigideira."
      ],
      perguntaAssistente: "Ao final, solicitou mais informações sobre três aspectos: estilo de preparo (bistrô francês, luxo ou tradicional brasileiro); proteína (presunto, frango ou ambos); e tipo de molho (branco/delicado, béchamel francês ou alta gastronomia). Ofereceu também preparar a receita de chef."
    },
    conducao: "Co-docência (Laura e Maria)",
    notasProfessora: {
      tempoSugerido: "3 min (02:23 - 02:26)",
      objetivoSlide: "Evidenciar que personas sem restrições geram verborragia, teatro e complexidade desnecessária (vinho branco, 3 perguntas adicionais) sem saber quem vai comer.",
      oQueFalar: "(Maria) \"Olhem o que aconteceu quando pedimos para 'atuar como o melhor chef da França': a receita ficou elegante, com toque de bistrô, sugeriu vinho branco e acrescentou cinco 'segredos de chef'. Mas resolveu a nossa vida? Não! O tempo subiu para 40 minutos, o rendimento continuou genérico em 2 a 3 pessoas e a IA fez 3 perguntas complexas ao final. Persona vazia só produz maquiagem no texto, não inteligência operacional!\""
    }
  },
  {
    numero: 15,
    id: 15,
    bloco: 3,
    tipo: "teste-prompt",
    tipoPrompt: "positivo",
    categoria: "Bancada de Testes Empíricos (Teste 3)",
    titulo: "Teste 3: Prompt Estruturado (Framework C-T-F-R)",
    subtitulo: "Contexto, Tarefa, Formato e Restrições Negativas: resposta exata na primeira tentativa, sem perguntas residuais",
    promptUtilizado: "Contexto:\nQuero fazer um macarrão parisiense para a minha família, somos em 5 pessoas, tenho pouco tempo para fazer.\n\nTarefa:\nMe ensine como fazer o macarrão parisiense.\n\nFormato:\nListe todos os ingredientes primeiro, depois a ordem de execução com esses ingredientes. Não deixe instruções essenciais ao final da receita e sim no momento de sua execução.\n\nRestrição:\nNão invente dados, não dê porções limitadas a cada pessoa da minha família, quero que eles possam comer à vontade.",
    diagnosticoPrompt: "Prompt com 4 blocos explícitos: público definido (família, 5 pessoas), restrição de tempo (pouco tempo), formato funcional (ingredientes primeiro + ordem sem pontas soltas) e restrição negativa de abundância (comer à vontade, sem limites artificiais).",
    respostaObtida: {
      resumo: "Receita para cinco pessoas, descrita como prática e cremosa, com possibilidade de repetição à vontade e estruturação rigorosa.",
      metricas: [
        "Rendimento: 5 pessoas com fartura",
        "Preparo paralelo (ganho de tempo)",
        "1 kg de macarrão (calculado)",
        "Zero perguntas adicionais"
      ],
      ingredientes: "1 kg de macarrão (penne, parafuso ou espaguete), 400g a 500g de presunto picado, 2 latas ou 300g de ervilha (preferência congelada), 2 caixinhas de creme de leite (400g), 1 copo de requeijão ou 200g de queijo cremoso, 1 cebola média picada, 2 dentes de alho picados, 2 colheres de sopa de manteiga ou azeite, 1 xícara de leite (se necessário), 100g de queijo parmesão ralado e temperos (sal, noz-moscada, pimenta-do-reino).",
      modoPreparo: [
        "1. Colocar água para ferver com sal em panela grande.",
        "2. Em fogo médio, refogar cebola e alho na manteiga até dourar levemente.",
        "3. Adicionar presunto picado e refogar por 2 a 3 minutos.",
        "4. Acrescentar ervilha e misturar delicadamente.",
        "5. Abaixar o fogo, colocar creme de leite e requeijão; mexer até formar creme homogêneo. Adicionar leite caso fique muito espesso. Ajustar sal, noz-moscada e pimenta.",
        "6. Cozinhar macarrão até al dente; retirar direto da água e juntar à panela do molho.",
        "7. Misturar em fogo baixo por 1 a 2 minutos para absorção do sabor. Adicionar parmesão ralado e servir imediatamente."
      ],
      orientacoesAdicionais: [
        "Dica de tempo: enquanto a água esquenta e o macarrão cozinha, faça o molho em fogo médio.",
        "Dica de fartura: a combinação de presunto em cubos com requeijão garante volume e cremosidade para 5 pessoas comerem à vontade."
      ],
      perguntaAssistente: ""
    },
    conducao: "Co-docência (Laura e Maria)",
    notasProfessora: {
      tempoSugerido: "3 min (02:26 - 02:29)",
      objetivoSlide: "Demonstrar a eficácia do C-T-F-R: cálculo correto de ingredientes (1 kg), preparo em paralelo para economizar tempo e ausência de perguntas residuais.",
      oQueFalar: "(Laura) \"E agora olhem a mágica da estrutura C-T-F-R: quando você define que são 5 pessoas e que quer fartura, a IA calcula automaticamente 1 kg de macarrão e 500g de presunto! Quando você avisa que tem pouco tempo, ela organiza o modo de preparo em paralelo: fazer o molho enquanto a água ferve. E o mais impressionante: quantas perguntas ela fez ao final? NENHUMA! Porque o contexto e os limites humanos já estavam todos definidos no prompt!\""
    }
  },
  {
    numero: 16,
    id: 16,
    bloco: 3,
    tipo: "quadro-comparativo",
    categoria: "Síntese dos Testes Empíricos",
    titulo: "Quadro Comparativo: As Diferenças Reais nos Três Prompts",
    subtitulo: "Análise lado a lado dos 9 critérios comprovando o impacto direto da estrutura na resposta da IA",
    colunasTabela: [
      "Critério de Análise",
      "1. Prompt Vago",
      "2. Falso Bom Prompt",
      "3. Prompt Estruturado (C-T-F-R)"
    ],
    linhasTabela: [
      {
        criterio: "Contexto inicial",
        vago: "Nenhum contexto fornecido",
        falsoBom: "Foco na persona de chef",
        estruturado: "Contexto familiar, 5 pessoas, pouco tempo"
      },
      {
        criterio: "Tom da resposta",
        vago: "Direto e simples",
        falsoBom: "Elegante e descritivo",
        estruturado: "Prático e explicativo"
      },
      {
        criterio: "Rendimento",
        vago: "2 a 3 pessoas (não solicitado)",
        falsoBom: "2 a 3 pessoas (não solicitado)",
        estruturado: "5 pessoas com repetição (1 kg de massa)"
      },
      {
        criterio: "Gestão do tempo",
        vago: "Tempo estimado em 30 min",
        falsoBom: "Tempo estimado em 30 a 40 min",
        estruturado: "Preparo paralelo durante fervura da água"
      },
      {
        criterio: "Dicas e segredos",
        vago: "Dicas ao final da receita",
        falsoBom: "Cinco segredos e montagem de prato",
        estruturado: "Dicas integradas durante o modo de preparo"
      },
      {
        criterio: "Ingredientes adicionais",
        vago: "Nenhum ingrediente especial",
        falsoBom: "Vinho branco e salsinha",
        estruturado: "Requeijão ou queijo cremoso"
      },
      {
        criterio: "Detalhamento das etapas",
        vago: "Cinco etapas resumidas",
        falsoBom: "Quatro etapas com foco técnico",
        estruturado: "Sete etapas sequenciais sem pontas soltas"
      },
      {
        criterio: "Perguntas adicionais",
        vago: "Uma pergunta sobre estilo de preparo",
        falsoBom: "Três perguntas para detalhar receita",
        estruturado: "Nenhuma pergunta adicional (entrega pronta)"
      },
      {
        criterio: "Aderência às restrições",
        vago: "Não aplicável",
        falsoBom: "Não aplicável",
        estruturado: "Atendeu a todas as restrições solicitadas"
      }
    ],
    conducao: "Co-docência (Laura e Maria)",
    notasProfessora: {
      tempoSugerido: "4 min (02:29 - 02:33)",
      objetivoSlide: "Consolidar os aprendizados práticos da bancada antes do Exercício 2 através da tabela comparativa dos 9 critérios.",
      oQueFalar: "(Maria) \"Este quadro resume com precisão cirúrgica a grande lição do nosso Encontro 3. Vejam a linha de 'Perguntas adicionais': o prompt vago exigiu mais conversa; o falso bom prompt exigiu três decisões complexas; o estruturado entregou o trabalho pronto. E vejam o 'Rendimento': só o estruturado garantiu comida para as 5 pessoas com fartura! É isso que transforma a IA em uma ferramenta de produtividade real no trabalho e nos estudos.\""
    }
  },
  {
    numero: 17,
    id: 17,
    bloco: 3,
    tipo: "missao-diagnostica",
    categoria: "Prática Guiada no Laboratório (Etapa 2)",
    titulo: "Oficina de Bancada: Missão 2 (Etapa 2: 15 min)",
    subtitulo: "Auto-Entrevista com Escopo & Trava [necessita verificação]",
    tempoEstimado: "15 min",
    passos: [
      "1. Delimite o Escopo: Escolha 1 entrega concreta da sua rotina (e-mail formal, roteiro de aula ou cronograma).",
      "2. Auto-Entrevista Guiada: Envie o modelo de Meta-Prompting solicitando que o ChatGPT faça 4 perguntas antes de responder.",
      "3. Diálogo e Refinamento: Responda às perguntas da IA no chat e observe como a resposta nasce personalizada.",
      "4. Trava de Segurança UNESCO: Adicione a trava anti-alucinação: 'Marque qualquer dado incerto com [necessita verificação]'.",
      "5. Registre o prompt final e sua reflexão crítica no Portfólio Digital."
    ],
    destaqueDiagnostica: {
      icone: "🤖",
      titulo: "Etapa 2: Auto-Entrevista Ativa",
      desc: "Transfira o esforço da pergunta para a IA, mantendo o escopo delimitado e blindando a resposta com rótulo de incerteza.",
      tagAviso: "Meta-Prompting & Rótulo de Incerteza"
    },
    conducao: "Co-docência (Laura e Maria circulando pela turma)",
    notasProfessora: {
      tempoSugerido: "15 min (02:33 - 02:48)",
      objetivoSlide: "Conduzir a Etapa 2 da oficina com auto-entrevista ancorada em escopo prévio e trava de grounding.",
      oQueFalar: "(Maria) \"Viram no comparativo como o prompt estruturado eliminou o retrabalho e zerou as perguntas desnecessárias? Agora é a vez de vocês dominarem a Etapa 2: vamos praticar a Auto-Entrevista guiada (Meta-Prompting) e aplicar a Trava de Segurança [necessita verificação]! Definam o escopo da tarefa de vocês e deixem a IA formular 4 perguntas essenciais. 15 minutos focados na bancada!\""
    }
  },

  // =========================================================================
  // BLOCO 4: SOCIALIZAÇÃO & FECHAMENTO (Slides 18 a 20)
  // =========================================================================
  {
    numero: 18,
    id: 18,
    bloco: 4,
    tipo: "apresentacao",
    categoria: "Avaliação & Socialização",
    titulo: "Roda de Socialização (Show & Tell)",
    subtitulo: "Compartilhando evoluções, quebras de mitos e lições aprendidas na bancada",
    conducao: "Co-docência (Laura e Maria)",
    itensDestaque: [
      {
        icone: "🎯",
        titulo: "Tarefa Escolhida",
        desc: "Qual tarefa da sua rotina real você escolheu testar no computador?"
      },
      {
        icone: "⚡",
        titulo: "O Efeito do Ruído",
        desc: "O que aconteceu quando você usou adjetivos vazios vs. quando usou os 4 blocos estruturados?"
      },
      {
        icone: "🛡️",
        titulo: "Trava de Incerteza",
        desc: "Como a trava [necessita verificação] ou a anonimização ajudaram a dar segurança ao resultado?"
      },
      {
        icone: "📝",
        titulo: "Rubrica Formativa",
        desc: "Apresentação do antes/depois + reflexão crítica no Portfólio Digital (0,5 ponto formativo)."
      }
    ],
    notasProfessora: {
      tempoSugerido: "10 min (02:51 - 03:01)",
      objetivoSlide: "Consolidar o aprendizado por meio da aprendizagem entre pares e realizar a avaliação formativa contínua.",
      oQueFalar: "(Laura) \"Que oficina produtiva! Vamos abrir a nossa roda de socialização. Quem gostaria de projetar o seu exercício e mostrar como o prompt evoluiu do vago para o estruturado?\" (Maria) \"Vejam que fascinante o relato do colega: a IA só entregou um resultado de alto nível porque ele assumiu o comando do contexto e das restrições. A inteligência da entrega continua sendo 100% de vocês!\""
    }
  },
  {
    numero: 19,
    id: 19,
    bloco: 4,
    tipo: "fechamento",
    categoria: "Fechamento & Ponte",
    titulo: "Checklist de Bolso & Próximos Passos",
    subtitulo: "Leve estas regras para a sua rotina e prepare-se para o Encontro 4",
    conclusao: "A qualidade e a utilidade da resposta da IA não dependem de tentar fazê-la parecer esperta, mas sim da clareza, especificidade e limitação do contexto humano que a orienta.",
    badge: "ENCONTRO 3 CONCLUÍDO COM SUCESSO!",
    proximoEncontro: "Encontro 4 (13/11): Criação de Imagens e Multimodalidade (Áudio, Documentos em PDF e Análises Visuais)",
    lembretesFinais: [
      "Tratei a IA como um estagiário inteligente no 1º dia (capacidade alta, contexto zero)?",
      "Estruturei meu pedido nos 4 blocos: Contexto, Tarefa, Formato e Restrições Negativas?",
      "Desmontei adjetivos vazios e utilizei marcadores visuais claros (# Contexto, # Tarefa)?",
      "Anonimizei dados sensíveis (Regra do Cartão-Postal com [CLIENTE A])?",
      "Diferenciei revisão textual de checagem factual e acionei a trava [necessita verificação]?"
    ],
    conducao: "Co-docência (Laura e Maria)",
    notasProfessora: {
      tempoSugerido: "6 min (03:01 - 03:07)",
      objetivoSlide: "Síntese final dos pilares da aula, reforço da reflexão ética e motivação para o próximo encontro.",
      oQueFalar: "(Maria) \"Para encerrar o nosso Encontro 3, levem este checklist de bolso para a vida de vocês! Sempre que abrirem o ChatGPT, lembrem-se: nada de pedidos genéricos e nada de personas mágicas. O que funciona é Contexto, Tarefa, Formato e Restrições!\" (Laura) \"E lembrem-se da nossa mensagem central: a agência e a validação crítica continuam com vocês. No Encontro 4, daremos um salto fascinante: sairemos do texto puro e entraremos na IA Multimodal, analisando imagens, documentos em PDF e áudios! Um grande abraço a todos e até a próxima semana!\""
    }
  },
  {
    numero: 20,
    id: 20,
    bloco: 4,
    tipo: "comparativo",
    categoria: "Referências Bibliográficas",
    titulo: "Referências Bibliográficas & Leituras Recomendadas",
    subtitulo: "Fundamentação técnica e marcos regulatórios: guias oficiais da OpenAI, UNESCO e OSSE",
    conducao: "Co-docência (Laura e Maria)",
    colunas: [
      {
        tag: "🤖 Fontes da OpenAI (Técnica & Estrutura de Prompting)",
        icone: "📖",
        tipo: "marrom",
        bullet: "•",
        itens: [
          "OpenAI — ChatGPT Enterprise Prompting Guide",
          "OpenAI Help Center — Prompt engineering best practices for ChatGPT",
          "OpenAI Help Center — How do I create a good prompt for an AI model?",
          "OpenAI Platform — Prompt engineering"
        ]
      },
      {
        tag: "🏛️ UNESCO & OSSE (Agência Humana, Ética & Educação)",
        icone: "🎓",
        tipo: "positivo",
        bullet: "•",
        itens: [
          "UNESCO — AI Competency Framework for Teachers (PDF)",
          "UNESCO — AI competency framework for teachers",
          "UNESCO — What you need to know about UNESCO’s new AI competency frameworks for students and teachers",
          "UNESCO — Artificial intelligence in education: UNESCO advances key competencies for teachers and learners",
          "OSSE — Designing Effective Prompts: Enhancing Educational and Professional Practice with ChatGPT (PDF)"
        ]
      }
    ],
    notasProfessora: {
      tempoSugerido: "3 min (ou consulta assíncrona)",
      objetivoSlide: "Apresentar as fontes primárias internacionais que embasam o conteúdo e as diretrizes pedagógicas do Encontro 3.",
      oQueFalar: "(Laura) \"Para quem quiser aprofundar os estudos, reunimos aqui as referências primárias que embasam a nossa aula. De um lado, os guias oficiais da OpenAI sobre as melhores práticas de engenharia de prompt.\" (Maria) \"E do outro lado, os marcos da UNESCO sobre competências docentes em IA e o guia da OSSE, que garantem a nossa visão de que a agência crítica e a curadoria humana são o coração da educação! Todos esses materiais estão disponíveis para consulta no portal!\""
    }
  }
];
