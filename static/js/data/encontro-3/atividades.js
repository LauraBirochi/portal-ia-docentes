/**
 * Módulo 3 – Atividades Práticas e Laboratório: ChatGPT no Mundo Real
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 * 
 * Especialidade: Engenharia de Prompt e Aplicações Práticas (Framework C-T-F-R & Meta-Prompting)
 * Scaffolding Pedagógico: Andaime gradual em 3 níveis (Vago ➔ Limpar Ruído ➔ Auto-Entrevista com Trava UNESCO)
 */

export const oficinaPratica = {
  isDiagnostica: false,
  titulo: "Oficina de Bancada: Do Pedido Simples ao Prompt Mestre (C-T-F-R)",
  tema: "Aplicações Reais no ChatGPT: Organização, Redação/Simplificação e Meta-Prompting",
  duracao: "40 a 45 minutos de Bancada nos Computadores (Scaffolding em 3 Níveis)",
  peso: "Instrumento Formativo no Portfólio Digital • Encontro 3 (0,5 ponto)",
  conducao: "Co-docência (Profª Laura & Profª Maria com suporte individual nas bancadas)",
  ferramenta: "Navegador Web + ChatGPT (Modo Chat Temporário / Convencional sem memórias)",
  objetivo: "Capacitar os participantes a construir instruções profissionais sob medida no ChatGPT aplicando os 4 Blocos da Estrutura Perfeita (Contexto & Papel, Tarefa, Formato e Restrições), desmontar a ilusão da persona, dominar a auto-entrevista (Meta-Prompting) e implementar travas contra alucinações e riscos de privacidade.",

  situacaoProblema: {
    contexto: "No cotidiano de estudos e trabalho, a maioria dos usuários comete o erro do 'pedido de uma linha só' (ex: 'me ajude a planejar minha rotina') ou cai na armadilha do 'Falso Bom Prompt' usando adjetivos vazios ('atue como o melhor do mundo e faça algo incrível'). O resultado costuma ser vago, verborrágico e sem utilidade prática real.",
    missao: "Assumir o papel de gestor de um estagiário inteligente de alta capacidade com contexto zero: selecionar 1 tarefa real da sua rotina e executar o roteiro em 3 Níveis de Scaffolding (Nível 1: Transformar o Vago; Nível 2: Limpar o Ruído da Persona; Nível 3: Auto-Entrevista com Meta-Prompting e Trava [necessita verificação]), registrando a evolução empírica no Portfólio Digital."
  },

  comoExecutar: [
    {
      etapa: 1,
      titulo: "Nível 1 (Iniciante | 10 min) — Transformar o Vago (Prompt Livre)",
      desc: "Abra um novo chat no ChatGPT e envie um pedido simples de 1 linha sobre uma tarefa real sua (ex: rotina, síntese ou resposta a um e-mail). Copie a resposta e observe como o modelo ativa a média estatística rasa."
    },
    {
      etapa: 2,
      titulo: "Nível 2 (Intermediário | 10 min) — Limpar o Ruído (O Falso Bom Prompt)",
      desc: "Em novo chat, teste o prompt com adjetivos vazios ('atue como o maior especialista incrível e faça um plano perfeito'). Comprove a verborragia e a ausência de limites práticos."
    },
    {
      etapa: 3,
      titulo: "Nível 3 (Avançado | 10 min) — O Prompt Mestre C-T-F-R com Markdown",
      desc: "Reformule a solicitação usando marcadores claros: # Contexto & Papel (cenário real); # Tarefa (verbos diretos); # Formato (tabela ou tópicos); e # Restrições (limites de tempo e de não-invenção)."
    },
    {
      etapa: 4,
      titulo: "Intervenção Guiada (3 min) — Demonstração no Telão",
      desc: "Pausa rápida com a turma para assistir à demonstração ao vivo de Meta-Prompting com escopo prévio conduzida por Laura e Maria no projetor."
    },
    {
      etapa: 5,
      titulo: "Etapa 2 (15 min) — Auto-Entrevista & Trava [necessita verificação]",
      desc: "Delimite o escopo e envie o modelo de Meta-Prompting pedindo 4 perguntas essenciais. Responda à IA no chat e acione a trava de segurança UNESCO contra alucinações."
    }
  ],

  primeiraTentativa: {
    prompt: "Me ajude a organizar minha semana de trabalho e estudos.",
    problemasProvaveis: [
      "A IA não conhece a sua carga horária real nem o horário em que você rende melhor.",
      "Gera recomendações genéricas de autoajuda ('beba 2L de água', 'durma bem', 'faça pausas').",
      "Não define horários concretos nem estabelece prioridade entre tarefas fáceis e difíceis.",
      "Apresenta um bloco longo de texto corrido difícil de bater o olho e executar no dia a dia.",
      "Ignora suas restrições da vida real (filhos, deslocamento no trânsito, plantões ou imprevistos)."
    ]
  },

  falsoBomPrompt: {
    prompt: "Atue como o melhor especialista em produtividade do mundo, um mentor premiado e super renomado. Faça um plano semanal incrível, perfeito e super detalhado para a minha rotina.",
    problemasProvaveis: [
      "Adjetivos superlativos ('incrível', 'perfeito', 'o melhor do mundo') geram verborragia e jargão, sem definir formato ou disponibilidade real.",
      "Pesquisas científicas comprovam que personas superlativas têm efeito nulo ou negativo na precisão factual em tarefas objetivas.",
      "Gera um texto longo e cansativo que exige retrabalho manual para extrair o que realmente importa.",
      "Não estabelece horários, limites diários ou critérios de descanso."
    ]
  },

  segundaTentativa: {
    prompt: `# Contexto & Papel
Sou estudante e trabalho 8 horas por dia em regime presencial (das 8h às 17h). Tenho exatamente 1h30 líquida livre no período noturno (das 20h às 21h30) de segunda a quinta-feira.

# Tarefa Principal
Monte um plano semanal de estudos focado na revisão de 2 disciplinas (Tecnologia Aplicada e Gestão de Projetos), equilibrando leitura teórica com resolução de exercícios práticos.

# Formato de Saída
Apresente a resposta estritamente em uma tabela com as colunas:
1. Dia da Semana | 2. Horário Exato | 3. Disciplina | 4. Atividade Específica | 5. Técnica (Pomodoro/Leitura Ativa) | 6. Meta do Dia.

# Restrições Negativas & Travas
- Não ultrapasse o limite rígido de 90 minutos diários.
- Reserve os últimos 15 minutos de cada dia para anotação de dúvidas.
- Não inclua nenhuma tarefa na sexta-feira à noite nem no domingo (dias de descanso sagrado).
- Não faça introduções prolixas nem conclusões motivacionais: inicie a resposta diretamente na tabela.`
  },

  promptsModelo: [
    {
      titulo: "1. Trava de Segurança / UNESCO (Anti-Alucinação)",
      icone: "🛡️",
      cor: "#ef4444",
      descricao: "Obriga a IA a sinalizar lacunas factuais em vez de inventar dados ou leis.",
      codigo: `[Trava de Segurança / UNESCO]
Se você não tiver certeza absoluta de alguma informação ou se faltarem dados no contexto fornecido, responda "Informação não especificada no material" ou marque o trecho com o rótulo [necessita verificação]. Não tente adivinhar ou inventar fatos.`
    },
    {
      titulo: "2. Meta-Prompting / Handoff com Escopo",
      icone: "🤖",
      cor: "#3b82f6",
      descricao: "Inverte o papel e faz a IA entrevistar você com foco em uma entrega delimitada.",
      codigo: `[Meta-Prompting / Handoff com Escopo]
Quero criar um modelo de [e-mail / relatório / cronograma de estudos] para a minha rotina. Antes de escrever a resposta final, atue como um especialista em comunicação e me faça 4 perguntas essenciais para entender meu contexto, tom de voz, formato desejado e restrições.`
    },
    {
      titulo: "3. Anonimização de Dados (LGPD / Privacidade)",
      icone: "🔒",
      cor: "#22c55e",
      descricao: "Aplica a Regra do Cartão-Postal substituindo identidades reais por placeholders.",
      codigo: `[Anonimização de Dados / LGPD]
Reescreva a mensagem abaixo mantendo a estrutura profissional. Substitua nomes reais de pessoas por [NOME A], empresas por [EMPRESA X] e valores por [VALOR Y].
Texto base: [cole o texto com dados mascarados aqui]`
    }
  ],

  cincoElementos: [
    {
      elemento: "1. Contexto & Papel (Quem & Onde)",
      comoAparece: "# Contexto & Papel: 'Sou estudante e trabalho 8h... tenho 1h30 livre à noite...'",
      funcao: "Ancora a atenção da rede neural, integrando o Papel (Persona) com o cenário de restrições reais. Personas devem regular tom e perspectiva, nunca substituir dados factuais."
    },
    {
      elemento: "2. Tarefa Clara (O que fazer)",
      comoAparece: "# Tarefa Principal: 'Monte um plano semanal focado na revisão de 2 disciplinas...'",
      funcao: "Define a meta direta com verbos de ação específicos, eliminando ambiguidade e evitando dispersão em múltiplos pedidos concorrentes."
    },
    {
      elemento: "3. Formato Específico (Como entregar)",
      comoAparece: "# Formato de Saída: 'Apresente estritamente em uma tabela com 6 colunas específicas...'",
      funcao: "Padroniza a estrutura visual da resposta para leitura imediata, com uso de Markdown (#) para facilitar a hierarquia semântica do modelo."
    },
    {
      elemento: "4. Restrições Negativas (O que evitar)",
      comoAparece: "# Restrições: 'Não ultrapasse 90 min; sem estudos no domingo; sem introdução ou conclusões prolixas...'",
      funcao: "Fecha brechas probabilísticas, podando respostas genéricas, clichês e desvios de rota."
    },
    {
      elemento: "5. Trava Anti-Alucinação (Grounding)",
      comoAparece: "[Trava UNESCO]: 'Se não constar no material ou faltarem dados, marque com [necessita verificação]'",
      funcao: "Impede o modelo de preencher lacunas probabilísticas com dados ou referências bibliográficas inventadas."
    }
  ],

  comparacaoRespostas: [
    { pergunta: "Qual foi a diferença entre o Prompt Vago (Nível 1) e o Falso Bom Prompt com adjetivos vazios (Nível 2)?" },
    { pergunta: "Qual foi o impacto visual de exigir a resposta em formato de tabela em vez de texto corrido no Nível 3?" },
    { pergunta: "A restrição negativa ('não inclua tarefas no domingo') foi respeitada com exatidão pela IA?" },
    { pergunta: "Ao usar o Meta-Prompting com escopo prévio, as perguntas da IA ajudaram a lembrar detalhes esquecidos?" },
    { pergunta: "Por que a distinção entre Revisão Textual e Checagem Factual com [necessita verificação] é indispensável?" }
  ],

  reflexaoFinal: {
    perguntaGuia: "Qual elemento do framework C-T-F-R provocou a mudança mais radical na resposta do ChatGPT? Por que fazer a IA entrevistar você (Meta-Prompting) a partir de um escopo delimitado tornou o processo mais seguro e produtivo?"
  },

  configuracaoChatGPT: [
    "Utilize preferencialmente o modo 'Chat Temporário' para garantir privacidade e evitar contaminação do histórico anterior.",
    "Caso utilize o chat convencional, desative as 'Instruções Personalizadas' (Custom Instructions) para testar o comportamento puro dos prompts.",
    "Mantenha cada missão em um chat novo e isolado para que o contexto de uma atividade não influencie a outra.",
    "Aplique a Regra do Cartão-Postal: nunca insira dados reais de clientes, nomes de alunos, senhas, CPFs ou relatórios médicos sigilosos.",
    "Utilize placeholders de anonimização: substitua dados confidenciais por [EMPRESA X], [ALUNO A] e [VALOR Y]."
  ],

  criteriosAvaliacao: [
    {
      criterio: "Estrutura do Prompt (C-T-F-R)",
      ponto1: "Prompt vago de 1 linha ou poluído com adjetivos vazios sem restrições.",
      ponto2: "Apresenta tarefa e contexto, mas não delimita formato em tabela ou restrições negativas.",
      ponto3: "Domínio pleno dos 4 blocos C-T-F-R com Markdown (#), contexto real e restrições negativas explícitas."
    },
    {
      criterio: "Diálogo & Meta-Prompting",
      ponto1: "Aceita a primeira resposta sem refinamento ou tenta meta-prompting sem definir escopo.",
      ponto2: "Solicita ajustes genéricos ('melhore o texto') ou responde poucas perguntas da IA.",
      ponto3: "Usa meta-prompting com escopo prévio delimitado, responde às perguntas e lapida iterativamente."
    },
    {
      criterio: "Validação Crítica & Segurança",
      ponto1: "Copia a resposta sem ler ou confunde texto fluente com dado verdadeiro.",
      ponto2: "Revisa apenas a gramática superficial, sem checar referências bibliográficas ou fatos.",
      ponto3: "Aplica travas anti-alucinação com rótulo [necessita verificação], anonimiza dados (LGPD) e audita a veracidade."
    }
  ],

  diretrizesDocentes: [
    "Acolhimento Total ao Iniciante: tranquilizar a turma de que o objetivo é sentir a diferença prática entre pedir no impulso e instruir com método.",
    "Desmistificar a Persona: alertar enfaticamente que adjetivos como 'o melhor do mundo' geram apenas verborragia sem formato.",
    "Modelagem Visual Prévia: rodar rigorosamente a demonstração de 3 minutos no projetor antes de soltar a turma para o Meta-Prompting.",
    "Fragmentação da Bancada: monitorar os tempos dos 3 níveis de complexidade (10 min + 10 min + 15 min) com pausas de alinhamento.",
    "Intervenção Cirúrgica: ao ver um aluno com resposta prolixa, ensine na hora o comando de poda: 'Reescreva a resposta anterior apenas nos tópicos 2 e 3 em 4 linhas'.",
    "Roda de Conversa: reservar os 15 minutos finais para valorizar a evolução de quem começou inseguro e conseguiu criar um prompt mestre."
  ],

  planoB: "Caso a conexão com o ChatGPT oscile no laboratório, as docentes projetarão o ChatGPT na tela central e conduzirão a oficina em modo de 'Prompt Coletivo': os alunos ditarão em voz alta as restrições e o contexto a partir das suas bancadas, acompanhando o antes e o depois no telão."
};
