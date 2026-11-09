/**
 * Encontro 4 – Deck de Slides com Ficha Técnica Conceitual Docente para o Projetor
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 * 
 * Tema Central: ChatGPT na Prática: Do Comando Simples ao Trabalho Real
 * Data: 13/11/2026 • 3 horas presenciais
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
    subtitulo: "Encontro 4 • Como instruir, refinar e colaborar com a IA de forma produtiva, ética e segura",
    detalhes: [
      "32 Horas Certificadas • Encontro 4 de 7",
      "13/11/2026 • 3 Horas Presenciais",
      "Docência: Laura & Maria",
      "Coordenação: Prof. Lúcio Rodrigo"
    ],
    conducao: "Co-docência (Laura e Maria)",
    notasProfessora: {
      tempoSugerido: "5 min (00:00 - 00:05)",
      objetivoSlide: "Acolher a turma, reduzir a ansiedade sobre a complexidade da IA e definir o objetivo prático do dia.",
      conceito: {
        titulo: "O Salto do Consumo Passivo para a Engenharia de Instrução",
        definicao: "Prompting não é conversar informalmente; é uma técnica de programação em linguagem natural (Programmatic Natural Language). O objetivo deste encontro é transformar a interação do docente com LLMs de uma tentativa e erro frustrante em um fluxo previsível e reproduzível de trabalho intelectual."
      },
      mecanica: "Slide de acolhimento e ambientação visual. Situa a turma no terceiro marco do curso: passar da compreensão dos mecanismos internos da IA (Encontros 1 e 2) para a governança operacional e escrita de instruções eficazes.",
      armadilhaComum: "O aluno acreditar que para obter resultados profissionais precisa aprender linguagens de código complexas (como Python), ou o extremo oposto: achar que a IA adivinha intenções sem comandos claros.",
      faqAlunos: [
        {
          pergunta: "Eu preciso assinar a versão paga do ChatGPT (Plus) para usar essas técnicas?",
          resposta: "Não. Todas as estruturas ensinadas hoje (C-T-F-R, Meta-Prompting e restrições) funcionam perfeitamente na versão gratuita (GPT-4o mini)."
        }
      ]
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
        tag: "Desafio de Hoje (Encontro 4)",
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
      conceito: {
        titulo: "A Ponte Cognitiva: Do Mecanismo Probabilístico ao Comando Estruturado",
        definicao: "As LLMs predizem o próximo token com base na probabilidade condicionada ao contexto fornecido. Se o contexto é pobre ou ambíguo, a distribuição probabilística se dispersa gerando respostas genéricas; se o contexto é estreito e guiado, a resposta colapsa exatamente para a solução desejada."
      },
      mecanica: "Quadro comparativo de dois blocos contrastando a bagagem já consolidada (fundamentos estatísticos e blindagem de privacidade) com a nova fronteira de hoje (superar pedidos vagos e assumir a curadoria humana ativa).",
      armadilhaComum: "Tratar a IA generativa como um buscador tradicional. No Google, palavras-chave soltas ('cronograma estudos') bastam; nas LLMs, palavras-chave soltas geram clichês de internet sem aplicabilidade real.",
      faqAlunos: [
        {
          pergunta: "Por que a IA às vezes responde coisas diferentes para a mesma pergunta?",
          resposta: "Porque a geração de tokens envolve temperatura estocástica (probabilística). Quanto mais vago o prompt, maior a dispersão das palavras possíveis."
        }
      ]
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
      conceito: {
        titulo: "O Modelo Mental do Handoff (Teoria da Mente na IA)",
        definicao: "Calibragem da expectativa do usuário: o modelo possui imenso conhecimento factual e enciclopédico de linguagem (terabytes de leitura prévia), mas possui ZERO contexto tácito ou situacional sobre a instituição, preferências pessoais, prazos e critérios implícitos de quem faz o pedido."
      },
      mecanica: "Sequência visual de 3 cards demonstrando a assimetria entre capacidade de processamento (alta) e contexto local (zero), concluindo na necessidade de um 'handoff' (passagem de bastão detalhada com critérios de aceite).",
      armadilhaComum: "Ilusão de transparência: o usuário pressupõe que o que está implícito na sua mente (ex: 'minha aula dura 50 min', 'meus alunos são calouros') é de conhecimento óbvio do modelo.",
      faqAlunos: [
        {
          pergunta: "Se o modelo é tão inteligente, por que ele não deduz o que eu preciso?",
          resposta: "Dedução sem premissas é adivinhação aleatória. Para o modelo, 'fazer um relatório' pode ser para a diretoria de um banco ou para um grêmio estudantil."
        }
      ]
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
      conceito: {
        titulo: "A Ilusão da Persona e a Ineficácia de Adjetivos Superlativos",
        definicao: "Pesquisas empíricas de engenharia de prompt comprovam que injetar adjetivos superlativos ('especialista genial do mundo', 'plano perfeito') ativa embeddings literários e teatrais. Isso eleva a verborragia e o jargão, mas possui efeito nulo ou negativo sobre a precisão factual e a densidade informativa."
      },
      mecanica: "Tabela comparativa em 3 colunas contrastando o Prompt Vago (respostas rasas), o Falso Bom Prompt (teatro verbal prolixo) e o Prompt C-T-F-R (parâmetros operacionais reais e critérios de poda negativa).",
      armadilhaComum: "Cair na receita de 'prompts mágicos' de redes sociais, que prometem resultados milagrosos usando 50 adjetivos laudatórios em vez de dados reais e restrições.",
      faqAlunos: [
        {
          pergunta: "Então definir uma persona (papel) nunca serve para nada?",
          resposta: "Serve exclusivamente para definir tom, vocabulário e postura (ex: 'orientador acolhedor'), mas jamais para substituir contexto numérico, prazos e formato."
        }
      ]
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
    docente: "Laura",
    conducao: "Condução: Laura",
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
      conceito: {
        titulo: "Arquitetura Modular C-T-F-R e o Mecanismo de Atenção dos Marcadores (#)",
        definicao: "O framework C-T-F-R (Contexto/Papel, Tarefa, Formato, Restrições) decompõe a instrução em 4 eixos de controle. O uso de marcadores semânticos de Markdown (# Contexto, # Restrições) funciona como âncoras na matriz de self-attention do Transformer, impedindo que regras sejam soterradas ao longo do texto."
      },
      mecanica: "Grid de 4 cards explicando a evolução metodológica: a Persona agora está integrada ao Contexto, a Tarefa usa verbos no imperativo, o Formato dita a estrutura e as Restrições atuam como poda negativa de erros.",
      armadilhaComum: "Escrever comandos em blocos monolíticos de texto corrido sem cabeçalhos, onde a IA 'esquece' restrições que ficaram perdidas no meio do parágrafo.",
      faqAlunos: [
        {
          pergunta: "A ordem dos blocos (# Contexto antes de # Tarefa) altera a qualidade da resposta?",
          resposta: "Sim. Fornecer o Contexto antes ancora o espaço semântico antes de a IA gerar os tokens da Tarefa, reduzindo significativamente a deriva temática."
        }
      ]
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
      conceito: {
        titulo: "Taxonomia das 3 Camadas de Interação Humano-IA",
        definicao: "Organização pedagógica em 3 níveis progressivos de complexidade cognitiva: Camada 1 (Organização & Produtividade Individual), Camada 2 (Comunicação Profissional & Tradução de Textos Complexos) e Camada 3 (Diálogo Iterativo, Meta-Prompting & Curadoria Ética com Trava de Grounding)."
      },
      mecanica: "Slide de transição de alto impacto com 3 pílulas temáticas, estabelecendo o roteiro conceitual dos blocos 2 e 3 para ancorar a atenção da turma.",
      armadilhaComum: "Querer saltar diretamente para técnicas avançadas de Meta-Prompting (Camada 3) sem ter internalizado a disciplina de não emitir comandos vagos na rotina simples (Camada 1).",
      faqAlunos: [
        {
          pergunta: "Em qual dessas 3 camadas o professor economiza mais tempo no dia a dia?",
          resposta: "No dia a dia imediato, na Camada 2 (redação de comunicados e tradução de editais); no planejamento de disciplinas, na Camada 3."
        }
      ]
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
      conceito: {
        titulo: "Poda de Arbitrariedade em Otimização de Rotina e Tempo",
        definicao: "Aplicações de planejamento pessoal funcionam como problemas de otimização sob restrições estritas. As LLMs conseguem calcular trade-offs e distribuir cargas cognitivas eficientemente, desde que os limites temporais e de descanso sejam expressos de forma quantitativa e inegociável."
      },
      mecanica: "Comparativo lado a lado entre o cenário real de um estudante com jornada dupla e a formulação exata do comando com marcadores entre colchetes e restrições negativas.",
      armadilhaComum: "Pedir um 'plano de estudos' sem fornecer a disponibilidade líquida diária de horas e sem proibir explicitamente o uso de finais de semana.",
      faqAlunos: [
        {
          pergunta: "A tabela gerada pelo ChatGPT pode ser colada no Excel ou Google Planilhas?",
          resposta: "Sim. O ChatGPT renderiza tabelas em formato Markdown padrão; basta copiar e colar direto na sua planilha que as colunas se alinham perfeitamente."
        }
      ]
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
      conceito: {
        titulo: "Transposição de Registro Linguístico e Linguagem Clara (Plain Language)",
        definicao: "Capacidade das LLMs de transitar entre registros formais e informais sem degradar o valor proposicional do texto: transformar notas brutas e caóticas em comunicação diplomática executiva, e traduzir termos herméticos (jurídicos/regulatórios) para Linguagem Cidadã acessível."
      },
      mecanica: "Contraste entre dois cenários corporativos frequentes: Caso A (estruturação de comunicados formais sem alucinação de prazos) e Caso B (tradução de editais em 3 tópicos acionáveis: direito, prazo e ação).",
      armadilhaComum: "Pedir para a IA 'resumir' um regulamento sem a restrição explícita de 'não inventar dados nem alterar prazos', gerando resumos que omitem condicionalidades legais cruciais.",
      faqAlunos: [
        {
          pergunta: "A IA pode distorcer uma regra jurídica ao tentar simplificar o texto?",
          resposta: "Sim, se não for delimitada. Por isso é mandatório instruí-la a listar apenas os fatos explícitos e checar os prazos na fonte original."
        }
      ]
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
      conceito: {
        titulo: "Governança de Dados, LGPD e o Princípio da Exposição Pública",
        definicao: "Princípio de segurança da informação: qualquer input submetido a chats comerciais deve ser tratado como mensagem escrita no verso de um cartão-postal público. A técnica de anonimização por marcadores (`[ALUNO A]`, `[EMPRESA X]`) permite usar a inteligência do modelo com conformidade jurídica e risco zero de vazamento."
      },
      mecanica: "Quadro de contraste entre os vetores de risco proibidos (CPFs, nomes reais, relatórios confidenciais) e a técnica sintática de substituição por pseudônimos entre colchetes.",
      armadilhaComum: "Acreditar que o modo 'temporário' do chat ou o opt-out de treinamento autorizam colar dados pessoais e confidenciais de alunos ou clientes sem pseudonimização.",
      faqAlunos: [
        {
          pergunta: "A anonimização por marcadores prejudica a qualidade da escrita da IA?",
          resposta: "De forma alguma. Para a rede neural, [ALUNO A] e 'João Silva' desempenham exatamente o mesmo papel gramatical e sintático na oração."
        }
      ]
    }
  },

  // =========================================================================
  // BLOCO 3: DIÁLOGO ITERATIVO, ÉTICA & OFICINA DE BANCADA (Slides 10 a 19)
  // =========================================================================
  {
    numero: 10,
    id: 10,
    bloco: 3,
    tipo: "comparativo",
    categoria: "Técnica de Diálogo (Camada 3)",
    titulo: "Camada 3: Diálogo Iterativo & Meta-Prompting",
    subtitulo: "Como fazer o ChatGPT entrevistar você para criar o prompt perfeito (com escopo delimitado)",
    docente: "Maria",
    conducao: "Condução: Maria",
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
      conceito: {
        titulo: "Meta-Prompting e a Inversão do Fluxo de Informação (Auto-Entrevista)",
        definicao: "Meta-prompting é a prática de empregar o próprio modelo para elicitar, refinar ou diagnosticar os requisitos de uma tarefa. Na auto-entrevista ancorada, a IA assume o papel de consultora investigativa, identificando as variáveis críticas antes de iniciar a geração de texto."
      },
      mecanica: "Demonstração do comando de inversão de papel: o usuário define o escopo macro ('quero criar um e-mail de cobrança') e trava a geração imediata exigindo que a IA faça 4 perguntas de diagnóstico.",
      armadilhaComum: "Meta-prompting totalmente aberto ('me faça perguntas sobre qualquer coisa da minha vida'), que gera interrogatórios infinitos ou perguntas superficiais por falta de ancoragem inicial.",
      faqAlunos: [
        {
          pergunta: "Qual a vantagem de a IA me entrevistar em vez de eu mesmo escrever tudo no prompt?",
          resposta: "Economia cognitiva. Quando você não sabe todas as variáveis que influenciam uma boa resposta, a IA antecipa os critérios e você apenas responde com dados factuais."
        }
      ]
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
    docente: "Maria",
    conducao: "Condução: Maria",
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
      conceito: {
        titulo: "A Ilusão da Coerência Formal e a Trava de Grounding [necessita verificação]",
        definicao: "Diretriz central do AI Competency Framework da UNESCO: a fluência gramatical de um modelo de linguagem não possui correspondência necessária com a veracidade epistemológica. A 'Trava de Grounding' instrui explicitamente a rede a sinalizar ausência de evidência, combatendo a alucinação confiante."
      },
      mecanica: "Quadro conceitual contrastando Revisão Textual (estética) com Checagem Factual (verdade), apresentando a cláusula textual obrigatória que obriga a IA a marcar termos duvidosos com a etiqueta `[necessita verificação]`.",
      armadilhaComum: "O 'Efeito Cópia-e-Cola': presumir que porque o texto está elegante, formal e sem erros de concordância, os números, artigos de lei ou datas históricas são reais.",
      faqAlunos: [
        {
          pergunta: "A trava [necessita verificação] impede 100% das alucinações?",
          resposta: "Não 100%, mas reduz drasticamente as alucinações assertivas (quando o modelo inventa com tom de autoridade), facilitando a checagem humana pontual."
        }
      ]
    }
  },
  {
    numero: 12,
    id: 12,
    bloco: 3,
    tipo: "missao-diagnostica",
    ocultarPresenterPill: true,
    categoria: "Prática Guiada no Laboratório (Etapa 1)",
    titulo: "Oficina de Bancada: Missão 1 (Etapa 1: 20 min)",
    subtitulo: "Scaffolding: do vago ao estruturado, desmontando a ilusão da persona e aplicando restrições negativas que eliminam retrabalho.",
    tempoEstimado: "20 min",
    passos: [
      "1. Abra o Portfólio Digital - Encontro 4 e escolha 1 tarefa real da sua rotina de estudos ou trabalho.",
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
      conceito: {
        titulo: "Scaffolding Cognitivo Gradual e Aprendizagem Experiencial de Bancada",
        definicao: "Aplicação da teoria pedagógica do Scaffolding (andaime): para internalizar a eficácia do C-T-F-R, o aluno deve experimentar o contraste tátil em sua própria máquina entre uma saída rasa (nível 1), uma saída prolixa (nível 2) e uma entrega cirúrgica (nível 3) sobre a mesmíssima tarefa."
      },
      mecanica: "Slide de comando prático com passos de 1 a 5 no laboratório. As docentes circulam pelas mesas auxiliando os alunos a formularem restrições negativas realistas.",
      armadilhaComum: "O aluno tentar pular diretamente para o nível 3 sem vivenciar o nível 2, perdendo a oportunidade de comprovar por que a 'ilusão da persona' gera retrabalho.",
      faqAlunos: [
        {
          pergunta: "Onde os alunos registram as saídas dos testes?",
          resposta: "No Portfólio Digital do Encontro 4, disponível pelo Cockpit Docente ou no link compartilhado no telão."
        }
      ]
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
    ocultarPresenterPill: true,
    categoria: "Bancada de Testes Empíricos (Teste 1)",
    titulo: "Teste 1: Prompt Vago (1 Linha Sem Parâmetros)",
    subtitulo: "Resultado obtido com pedido genérico: ausência de contexto e decisões arbitrárias do modelo",
    promptUtilizado: "Quero aprender a fazer macarrão parisiense.",
    diagnosticoPrompt: "Pedido de uma linha sem contexto. O modelo não sabe quem come, o tempo nem restrições, assumindo um cenário médio arbitrário.",
    parametrosAusentes: [
      "Sem público: arbitrou 2 a 3 pessoas",
      "Sem tempo: arbitrou 30 minutos",
      "Sem restrições: receita convencional de internet",
      "Dúvida transferida: encerrou com pergunta aberta"
    ],
    respostaObtida: {
      resumo: "Receita descrita como cremosa, deliciosa e fácil.",
      metricas: [
        "Tempo: 30 minutos",
        "Rendimento: 2 a 3 pessoas",
        "Nível: fácil",
        "5 etapas convencionais"
      ],
      ingredientes: "Massa, presunto, ervilha, cebola, manteiga, creme de leite, leite e queijo.",
      modoPreparo: [
        "1. Cozinhar macarrão até ficar al dente.",
        "2. Refogar cebola na manteiga.",
        "3. Preparar molho branco e juntar presunto e ervilha.",
        "4. Misturar o macarrão ao molho e servir."
      ],
      orientacoesAdicionais: [
        "4 dicas genéricas sobre ponto do molho, queijo e creme."
      ],
      perguntaAssistente: "A IA perguntou se o usuário preferia estilo restaurante (bem cremoso) ou versão caseira econômica."
    },
    conducao: "Co-docência (Laura e Maria)",
    notasProfessora: {
      tempoSugerido: "3 min (02:20 - 02:23)",
      objetivoSlide: "Demonstrar o comportamento padrão da IA diante de prompts de 1 linha: ela assume decisões arbitrárias (2-3 pessoas, 30 min) e tenta adivinhar a intenção ao final.",
      conceito: {
        titulo: "Regressão à Média Estatística e Arbitrariedade de Parâmetros",
        definicao: "Diante de um comando minimalista sem restrições, a LLM colapsa para o centróide estatístico da sua base de treinamento (receitas médias da internet). O modelo é obrigado a arbitrar variáveis essenciais (rendimento para 2-3 pessoas, tempo de 30 min) e transfere a dúvida de volta ao usuário no final."
      },
      mecanica: "Layout de bancada empírica: coluna da esquerda exibe o comando de 1 linha e o diagnóstico das lacunas; coluna da direita exibe a resposta real gerada pelo ChatGPT, destacando o rendimento arbitrário e a pergunta residual.",
      armadilhaComum: "O aluno achar que o resultado é 'ótimo' porque a receita parece gostosa, falhando em notar que ela não atende à necessidade específica de quem vai cozinhar.",
      faqAlunos: [
        {
          pergunta: "Por que a IA terminou com uma pergunta sobre estilo restaurante ou econômico?",
          resposta: "Porque o modelo detecta que a distribuição de probabilidade das opções culinárias continua em aberto e busca desambiguação para o próximo turno."
        }
      ]
    }
  },
  {
    numero: 14,
    id: 14,
    bloco: 3,
    tipo: "teste-prompt",
    tipoPrompt: "marrom",
    ocultarPresenterPill: true,
    categoria: "Bancada de Testes Empíricos (Teste 2)",
    titulo: "Teste 2: Falso Bom Prompt (A Ilusão da Persona)",
    subtitulo: "Papel de 'melhor chef da França' gera tom teatral, aumenta tempo e adiciona itens sem resolver restrições",
    promptUtilizado: "Atua como o melhor chef da França para me ensinar a fazer um verdadeiro macarrão parisiense.",
    diagnosticoPrompt: "Adjetivos superlativos e persona exagerada. O modelo inflou complexidade e tempo sem parâmetros reais.",
    parametrosAusentes: [
      "Persona sem escopo: gerou teatro de bistrô",
      "Adicionou vinho branco e elevou para 40 min",
      "Manteve rendimento arbitrário em 2 a 3 pessoas",
      "Encerrou com 3 perguntas complexas da IA"
    ],
    respostaObtida: {
      resumo: "Receita com vocabulário rebuscado de bistrô francês.",
      metricas: [
        "Tempo: 40 minutos",
        "Rendimento: 2 a 3 pessoas",
        "Nível: intermediário",
        "5 segredos de chef"
      ],
      ingredientes: "Fettuccine, presunto cozido, ervilha, creme fresco, manteiga, noz-moscada e vinho branco opcional.",
      modoPreparo: [
        "1. Refogar na manteiga com toque de vinho branco.",
        "2. Cozinhar massa e reservar água do cozimento.",
        "3. Emulsionar o molho na frigideira com a massa.",
        "4. Finalizar com parmesão legítimo e noz-moscada."
      ],
      orientacoesAdicionais: [
        "5 segredos de chef incluídos (creme fresco e finalização na frigideira)."
      ],
      perguntaAssistente: "Fez 3 perguntas complexas: estilo de preparo (bistrô ou tradicional), escolha de proteína e tipo de molho."
    },
    conducao: "Co-docência (Laura e Maria)",
    notasProfessora: {
      tempoSugerido: "3 min (02:23 - 02:26)",
      objetivoSlide: "Evidenciar que personas sem restrições geram verborragia, teatro e complexidade desnecessária (vinho branco, 3 perguntas adicionais) sem saber quem vai comer.",
      conceito: {
        titulo: "Ativação de Estilo Teatral e Desvio Instrumental por Persona",
        definicao: "A persona superlativa ('melhor chef da França') altera o espaço de amostragem de vocabulário para termos gourmetizados e bistrô, elevando a complexidade do prato (vinho branco, emulsão) e dilatando o tempo para 40 min. Contudo, não resolve as variáveis pragmáticas (número de pessoas e tempo disponível)."
      },
      mecanica: "Demonstração empírica da coluna da direita: a receita adotou tom de aula de culinária sofisticada, mas encerrou com 3 perguntas difíceis para o usuário responder, gerando sobrecarga em vez de solução.",
      armadilhaComum: "Confundir sofisticação estilística com utilidade prática. Em ambientes corporativos e educacionais, respostas teatrais aumentam o ruído e o tempo de leitura.",
      faqAlunos: [
        {
          pergunta: "A receita não ficou melhor que a do Teste 1?",
          resposta: "Ficou mais sofisticada gastronomicamente, mas pior operacionalmente: demorou mais, ficou mais cara e continuou sem saber quem vai comer."
        }
      ]
    }
  },
  {
    numero: 15,
    id: 15,
    bloco: 3,
    tipo: "teste-prompt",
    tipoPrompt: "positivo",
    ocultarPresenterPill: true,
    categoria: "Bancada de Testes Empíricos (Teste 3)",
    titulo: "Teste 3: Prompt Estruturado (Framework C-T-F-R)",
    subtitulo: "Contexto, Tarefa, Formato e Restrições Negativas: resposta exata na primeira tentativa, sem perguntas residuais",
    promptUtilizado: "Contexto: Família de 5 pessoas, pouco tempo.\nTarefa: Receita de macarrão parisiense.\nFormato: Ingredientes e preparo em ordem lógica.\nRestrição: Sem inventar dados, farto para repetir.",
    diagnosticoPrompt: "Briefing C-T-F-R completo: público definido, tempo otimizado, formato lógico e restrição de fartura.",
    parametrosAusentes: [
      "Cálculo exato: ajustou 1 kg para 5 pessoas",
      "Preparo paralelo: molho enquanto a água ferve",
      "Restrição atendida: rendimento farto para repetir",
      "Zero perguntas: briefing autônomo sem dúvidas"
    ],
    respostaObtida: {
      resumo: "Receita prática e farta calculada exatamente para 5 pessoas.",
      metricas: [
        "Rendimento: 5 pessoas",
        "Preparo paralelo",
        "1 kg de macarrão",
        "0 perguntas adicionais"
      ],
      ingredientes: "1 kg de massa, 500g de presunto picado, 300g de ervilha, 2 cremes de leite, requeijão, alho, cebola e queijo.",
      modoPreparo: [
        "1. Ferver água com sal em panela grande.",
        "2. Preparo paralelo: refogar alho, cebola e presunto.",
        "3. Adicionar ervilhas, creme de leite e requeijão cremoso.",
        "4. Escorrer macarrão direto no molho e envolver por 2 min."
      ],
      orientacoesAdicionais: [
        "Dica de tempo: molho feito simultaneamente enquanto a massa ferve."
      ],
      perguntaAssistente: ""
    },
    conducao: "Co-docência (Laura e Maria)",
    notasProfessora: {
      tempoSugerido: "3 min (02:26 - 02:29)",
      objetivoSlide: "Demonstrar a eficácia do C-T-F-R: cálculo correto de ingredientes (1 kg), preparo em paralelo para economizar tempo e ausência de perguntas residuais.",
      conceito: {
        titulo: "Condicionamento Estrito de Contexto e Eliminação de Retrabalho",
        definicao: "Ao receber os 4 blocos C-T-F-R (5 pessoas, pouco tempo, ordem lógica, farto para repetir), a LLM realiza ancoragem aritmética e de processos: calcula 1 kg de macarrão (200g/pessoa), organiza as tarefas em paralelo para economizar tempo e zera qualquer pergunta residual."
      },
      mecanica: "Bancada exibindo a resposta perfeita da IA: rendimento exato para 5 pessoas, ingrediente dimensionado (1 kg de massa) e ausência total do bloco de perguntas adicionais.",
      armadilhaComum: "Achar que prompts estruturados precisam ser longos. O comando do Teste 3 tem apenas 4 linhas concisas e objetivas.",
      faqAlunos: [
        {
          pergunta: "Como a IA calculou que precisava de 1 kg de massa se ninguém escreveu '1 kg' no prompt?",
          resposta: "A rede neural correlaciona os tokens '5 pessoas' e 'farto para repetir' com uma porção generosa (~200g de massa crua por adulto), chegando automaticamente a 1 kg."
        }
      ]
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
      conceito: {
        titulo: "Matriz Multicritério de Eficácia de Instrução",
        definicao: "Sistematização analítica dos 9 parâmetros fundamentais de avaliação de saídas de LLM. Comprova que a produtividade real não decorre do tamanho do texto gerado, mas da aderência estrita às restrições e da eliminação de turnos desnecessários de clarificação."
      },
      mecanica: "Tabela comparativa ocupando a área útil do telão com tipografia expandida (1.45rem). Destaque visual especial para as linhas de Rendimento e Perguntas Adicionais.",
      armadilhaComum: "Avaliar uma resposta de IA apenas pela 'beleza' da escrita, desconsiderando se ela obrigou o usuário a responder perguntas residuais para chegar ao resultado útil.",
      faqAlunos: [
        {
          pergunta: "Qual a linha mais importante deste comparativo para a rotina de trabalho?",
          resposta: "'Perguntas adicionais' e 'Aderência às restrições': são elas que determinam se a tarefa foi concluída ou se você terá retrabalho."
        }
      ]
    }
  },
  {
    numero: 17,
    id: 17,
    bloco: 3,
    tipo: "missao-diagnostica",
    ocultarPresenterPill: true,
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
      conceito: {
        titulo: "Operacionalização do Meta-Prompting e Grounding Ético",
        definicao: "Exercício de bancada desenhado para que o participante vivencie a transição do papel de 'escritor de comandos perfeitos' para 'avaliador de perguntas diagnósticas'. Integra a exigência da trava explícita de verificação como protocolo rotineiro de segurança."
      },
      mecanica: "Slide de bancada com 5 passos objetivos. As professoras circulam auxiliando os alunos a responderem de forma sucinta às perguntas geradas pelo modelo.",
      armadilhaComum: "Responder às perguntas da IA com monossílabos soltos ou textos excessivamente longos, em vez de respostas pontuais e factuais.",
      faqAlunos: [
        {
          pergunta: "Quantas perguntas a IA deve fazer no máximo na auto-entrevista?",
          resposta: "Recomendamos estritamente entre 3 e 4 perguntas. Mais de 5 perguntas gera fadiga cognitiva e desvia do objetivo da tarefa."
        }
      ]
    }
  },
  {
    numero: 18,
    id: 18,
    bloco: 3,
    tipo: "teste-prompt",
    tipoPrompt: "meta",
    ocultarPresenterPill: true,
    categoria: "Bancada de Testes Empíricos (Teste 4 • Parte 1)",
    titulo: "Teste 4: Auto-Entrevista — O Comando & As Perguntas da IA",
    subtitulo: "Turno 1: Usuário solicita diagnóstico e o ChatGPT formula 4 perguntas essenciais de escopo",
    origemComando: "Entrada 1: Inversão de Papel",
    badgePrompt: "🔄 META-PROMPTING (INVERSÃO DE PAPEL)",
    promptUtilizado: "Quero fazer macarrão parisiense para minha família.\nAntes de responder, atue como especialista e me faça 4 perguntas (contexto, público, formato e restrições).\nApós minhas respostas, apresente o prompt mestre (# Contexto, # Instruções, # Restrições).",
    tituloDiagnostico: "Estratégia do Meta-Prompting:",
    diagnosticoPrompt: "O usuário não tenta adivinhar os detalhes: transfere o esforço da estruturação para o modelo pedindo uma auto-entrevista prévia.",
    tituloParametros: "Ganhos da Inversão de Papel (Turno 1):",
    parametrosAusentes: [
      "Inversão de esforço: a IA diagnostica as necessidades",
      "Escopo delimitado: 4 perguntas cobrem todo o briefing",
      "Sem tela em branco: usuário não precisa começar do zero"
    ],
    respostaObtida: {
      badgeRespostaAI: "🤖 Perguntas Formuladas pelo ChatGPT",
      origemRespostaAI: "Saída 1: As 4 Perguntas da IA",
      resumo: "Perfeito! Antes de elaborar o prompt, preciso de 4 respostas essenciais:",
      metricas: [
        "Inversão de Papel",
        "4 Perguntas da IA",
        "Turno 1 de 2"
      ],
      secoesPersonalizadas: [
        {
          titulo: "1. Contexto:",
          texto: "Para quantas pessoas pretende preparar o macarrão? Almoço especial, jantar ou refeição do dia a dia?"
        },
        {
          titulo: "2. Público:",
          texto: "Quem vai comer? Crianças, adultos ou idosos? Alergias ou restrições a presunto, ervilha ou creme?"
        },
        {
          titulo: "3. Formato desejado:",
          texto: "Passo a passo de chef ensinando, receita simples e prática sem complicações, sofisticada ou completa?"
        },
        {
          titulo: "4. Restrições:",
          texto: "Orçamento, equipamentos disponíveis, versão econômica/tradicional e limite de tempo?"
        }
      ],
      destaqueConclusao: {
        icone: "🎯",
        titulo: "Diagnóstico Ativo da IA:",
        texto: "A IA não tentou adivinhar nem inventou dados: mapeou exatamente as 4 lacunas que precisavam ser preenchidas antes de agir!"
      }
    },
    conducao: "Co-docência (Laura e Maria)",
    notasProfessora: {
      tempoSugerido: "2 min (02:48 - 02:50)",
      objetivoSlide: "Demonstrar o Turno 1 do Meta-Prompting: como um comando de inversão de papel faz a IA formular perguntas de diagnóstico em vez de gerar uma resposta precipitada.",
      conceito: {
        titulo: "O Turno de Diagnóstico: Mapeamento Ativo de Requisitos",
        definicao: "No Turno 1 do Meta-Prompting, o usuário transfere a carga de estruturação para o modelo. A cláusula 'antes de responder, me faça 4 perguntas' atua como trava comportamental, forçando a IA a mapear variáveis críticas (público, restrições, formato) antes de comprometer tokens com a resposta final."
      },
      mecanica: "Layout terminal cyan Deep Navy. Coluna da esquerda mostra o comando de inversão com delimitação explícita de 4 perguntas; coluna da direita mostra a IA cumprindo rigorosamente o papel de entrevistadora investigativa.",
      armadilhaComum: "Omitir a instrução de parada ('antes de responder'): sem isso, muitos modelos geram a receita imediatamente e só colocam as perguntas no rodapé.",
      faqAlunos: [
        {
          pergunta: "Posso usar essa técnica para planejar um curso inteiro ou um artigo científico?",
          resposta: "Sim, é uma das melhores aplicações. Peça para a IA agir como avaliadora pedagógica e lhe fazer 4 perguntas sobre público-alvo, carga horária e objetivos antes de sugerir o plano de ensino."
        }
      ]
    }
  },
  {
    numero: 19,
    id: 19,
    bloco: 3,
    tipo: "teste-prompt",
    tipoPrompt: "meta",
    ocultarPresenterPill: true,
    categoria: "Bancada de Testes Empíricos (Teste 4 • Parte 2)",
    titulo: "Teste 4: Auto-Entrevista — Respostas & Prompt Mestre Gerado",
    subtitulo: "Turno 2: Usuário responde 4 tópicos curtos e a IA gera o briefing executivo em C-T-F-R",
    origemComando: "Entrada 2: Respostas do Usuário",
    badgePrompt: "💬 RESPOSTAS DO USUÁRIO",
    promptUtilizado: "1. 5 pessoas, será um almoço\n2. Adultos, ninguém tem alergias\n3. Receita simples e prática, sem complicações\n4. O macarrão não pode levar mais de 2 horas de preparo, siga a receita tradicional",
    tituloDiagnostico: "Esforço Humano no Diálogo:",
    diagnosticoPrompt: "O usuário respondeu em linguagem natural e direta, sem comandos complexos. Apenas forneceu os dados da sua realidade cotidiana em 4 linhas.",
    tituloParametros: "Ganhos da Entrada 2 (Turno 2):",
    parametrosAusentes: [
      "Zero esforço de redação: apenas dados factuais",
      "Sem comandos mágicos: linguagem natural direta",
      "Briefing completo: a IA estrutura as seções (#)"
    ],
    respostaObtida: {
      badgeRespostaAI: "🤖 Prompt Mestre Gerado pelo ChatGPT",
      origemRespostaAI: "Saída Final: Artefato C-T-F-R",
      resumo: "Prompt Mestre gerado pela IA a partir das 4 respostas do usuário:",
      metricas: [
        "4 Respostas Curtas",
        "< 1 Minuto",
        "Turno 2 de 2"
      ],
      secoesPersonalizadas: [
        {
          titulo: "# Contexto (Gerado pela IA):",
          texto: "Almoço para 5 adultos. Receita tradicional caseira, saborosa e sem complicações técnicas."
        },
        {
          titulo: "# Instruções (Gerado pela IA):",
          itens: [
            "Atuar como chef em culinária tradicional ítalo-brasileira.",
            "Ingredientes exatos para 5 pessoas de supermercado comum.",
            "Passo a passo simples, molho cremoso e dicas para servir."
          ]
        },
        {
          titulo: "# Restrições (Gerado pela IA):",
          itens: [
            "Tempo máximo de 2 horas e seguir receita tradicional.",
            "Sem ingredientes exóticos ou gourmetização desnecessária.",
            "Medidas exatas e lista de compras organizada ao final."
          ]
        }
      ],
      destaqueConclusao: {
        icone: "🎯",
        titulo: "Conclusão da Auto-Entrevista:",
        texto: "A IA assumiu toda a engenharia de instrução: 4 respostas sucintas geraram um Prompt Mestre executivo pronto para uso!"
      }
    },
    conducao: "Co-docência (Laura e Maria)",
    notasProfessora: {
      tempoSugerido: "2 min (02:50 - 02:52)",
      objetivoSlide: "Demonstrar o Turno 2 do Meta-Prompting: como respostas telegráficas do usuário geram um Prompt Mestre estruturado em seções (# Contexto, # Instruções, # Restrições).",
      conceito: {
        titulo: "A Síntese do Prompt Mestre a Partir de Respostas Telegráficas",
        definicao: "No Turno 2, o usuário alimenta a IA apenas com fatos brutos em tópicos telegráficos (estilo WhatsApp). O modelo compila esses dados e redige um Prompt Mestre estruturado em cabeçalhos Markdown (#), assumindo toda a carga de engenharia de instruções."
      },
      mecanica: "Bancada exibindo na esquerda as 4 respostas curtas do usuário e na direita o artefato de alto nível entregue pela IA: um Prompt Mestre pronto para reuso em futuras ocasiões.",
      armadilhaComum: "Achar que no Turno 2 é necessário escrever com vocabulário rebuscado. A força do Meta-Prompting está exatamente em permitir que o usuário responda em linguagem natural coloquial.",
      faqAlunos: [
        {
          pergunta: "Esse Prompt Mestre gerado pela IA pode ser salvo para usar outras vezes?",
          resposta: "Exatamente! Ele vira um template institucional permanente que pode ser guardado no seu bloco de notas ou compartilhado com colegas de departamento."
        }
      ]
    }
  },

  // =========================================================================
  // BLOCO 4: SOCIALIZAÇÃO & FECHAMENTO (Slides 20 a 22)
  // =========================================================================
  {
    numero: 20,
    id: 20,
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
      tempoSugerido: "10 min (02:52 - 03:02)",
      objetivoSlide: "Consolidar o aprendizado por meio da aprendizagem entre pares e realizar a avaliação formativa contínua.",
      conceito: {
        titulo: "Aprendizagem Social entre Pares e Avaliação Formativa Contínua",
        definicao: "Fundamentação na teoria sócio-histórica de Vygotsky: a socialização das criações na roda Show & Tell permite que a turma observe a diversidade de contextos e soluções de prompting dos colegas, consolidando o repertório prático através da aprendizagem vicária."
      },
      mecanica: "Slide com 4 eixos de partilha para o microfone aberto. As docentes mediam a fala dos voluntários, destacando como o controle do contexto transformou os resultados de cada colega.",
      armadilhaComum: "Permitir que a roda de conversa divague para discussões genéricas e apocalípticas sobre o futuro da IA, em vez de focar nas evidências empíricas obtidas nos computadores.",
      faqAlunos: [
        {
          pergunta: "Vale nota a participação no Show & Tell?",
          resposta: "Sim, integra a rubrica formativa contínua (0,5 ponto atribuído ao registro do exercício e da reflexão crítica no Portfólio Digital)."
        }
      ]
    }
  },
  {
    numero: 21,
    id: 21,
    bloco: 4,
    tipo: "fechamento",
    categoria: "Fechamento & Consolidação",
    titulo: "Checklist de Bolso & Próximos Passos",
    subtitulo: "Diretrizes práticas para consolidar o aprendizado na sua rotina",
    conclusao: "A qualidade e a utilidade da resposta da IA não dependem de tentar fazê-la parecer esperta, mas sim da clareza, especificidade e limitação do contexto humano que a orienta.",
    badge: "ENCONTRO 4 CONCLUÍDO COM SUCESSO!",
    proximoEncontro: "Encontro 5 (20/11): Olhar Crítico e Oficina de Prompts",
    lembretesFinais: [
      "Tratei a IA como um estagiário inteligente no 1º dia (capacidade alta, contexto zero)?",
      "Estruturei meu pedido nos 4 blocos: Contexto, Tarefa, Formato e Restrições Negativas?",
      "Desmontei adjetivos vazios e utilizei marcadores visuais claros (# Contexto, # Tarefa)?",
      "Anonimizei dados sensíveis (Regra do Cartão-Postal com [CLIENTE A])?",
      "Diferenciei revisão textual de checagem factual e acionei a trava [necessita verificação]?"
    ],
    conducao: "Co-docência (Laura e Maria)",
    notasProfessora: {
      tempoSugerido: "5 min (03:02 - 03:07)",
      objetivoSlide: "Síntese final dos pilares da aula, reforço da reflexão ética e consolidação prática dos aprendizados.",
      conceito: {
        titulo: "Mnemônica de Retenção e Fixação Operacional",
        definicao: "Consolidação dos princípios da engenharia de prompt em regras mnemônicas de sobrevivência operacional (Checklist de Bolso), permitindo a internalização dos 4 pilares do C-T-F-R para aplicação autônoma no cotidiano acadêmico e profissional."
      },
      mecanica: "Slide de encerramento com badge comemorativa, caixa de conclusão de impacto e 5 perguntas de autoavaliação para consolidação dos conceitos trabalhados na aula.",
      armadilhaComum: "O docente sair da aula achando que precisa decorar frameworks complexos, em vez de salvar o checklist mnemônico para consultar na bancada de trabalho.",
      faqAlunos: [
        {
          pergunta: "Como consultar este checklist após o término da aula?",
          resposta: "O checklist completo está disponível na aba de materiais do portal e no arquivo de slides para download."
        }
      ]
    }
  },
  {
    numero: 22,
    id: 22,
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
      objetivoSlide: "Apresentar as fontes primárias internacionais que embasam o conteúdo e as diretrizes pedagógicas do Encontro 4.",
      conceito: {
        titulo: "Bases Primárias Internacionais e Governança Epistêmica",
        definicao: "Articulação de duas fontes epistemológicas primárias: de um lado, a engenharia de prompts da OpenAI (provedora técnica); de outro lado, os marcos regulatórios da UNESCO e OSSE sobre competências docentes em IA, assegurando rigor científico e respaldo institucional."
      },
      mecanica: "Quadro com links e títulos oficiais das publicações para consulta assíncrona dos participantes e verificação dos fundamentos pedagógicos do curso.",
      armadilhaComum: "Consumir tutoriais superficiais de mídias sociais em vez de consultar as diretrizes oficiais validadas por pesquisadores e órgãos internacionais de educação.",
      faqAlunos: [
        {
          pergunta: "Onde posso baixar o framework completo da UNESCO para docentes?",
          resposta: "O link oficial para o documento em PDF está catalogado na aba de referências do portal e pode ser acessado diretamente pelo material deste slide."
        }
      ]
    }
  }
];
