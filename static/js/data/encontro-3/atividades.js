/**
 * Módulo 3 – Atividades Práticas e Laboratório: ChatGPT no Mundo Real
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 * 
 * Especialidade: Engenharia de Prompt e Aplicações Práticas (Framework C-T-F-R & Meta-Prompting)
 * Ajustes Pedagógicos: Fragmentação em 2 etapas de bancada e trava [necessita verificação]
 */

export const oficinaPratica = {
  isDiagnostica: false,
  titulo: "Oficina de Bancada: Do Pedido Simples ao Prompt Mestre (C-T-F-R)",
  tema: "Aplicações Reais no ChatGPT: Organização, Redação/Simplificação e Meta-Prompting",
  duracao: "40 a 45 minutos de Bancada nos Computadores (2 Etapas Fragmentadas)",
  peso: "Instrumento Formativo no Portfólio Digital • Encontro 3 (0,5 ponto)",
  conducao: "Co-docência (Profª Laura & Profª Maria com suporte individual nas mesas)",
  ferramenta: "Navegador Web + ChatGPT (Modo Chat Temporário / Convencional sem memórias)",
  objetivo: "Capacitar os participantes a construir instruções profissionais sob medida no ChatGPT aplicando os 4 Blocos da Estrutura Perfeita (Contexto & Papel, Tarefa, Formato e Restrições), dominar o diálogo iterativo através do Meta-Prompting e implementar travas de blindagem contra alucinações e riscos de privacidade.",

  situacaoProblema: {
    contexto: "No cotidiano de estudos e trabalho, a maioria dos usuários comete o erro do 'pedido de uma linha só' (ex: 'me ajude a planejar minha rotina' ou 'faça um e-mail sobre o projeto'). O resultado costuma ser vago, prolixo, recheado de clichês motivacionais ou dados imprecisos que exigem retrabalho e geram frustração.",
    missao: "Assumir o papel de gestor de um estagiário inteligente de alta capacidade: selecionar 1 tarefa real da sua rotina e executar a Etapa 1 (Duelo de Prompts: Simples vs. Mestre C-T-F-R por 20 min) e a Etapa 2 (Auto-Entrevista com Meta-Prompting e Trava [necessita verificação] por 15 min), registrando a evolução empírica no Portfólio Digital."
  },

  comoExecutar: [
    {
      etapa: 1,
      titulo: "Etapa 1 (20 min) — Passo A: O Disparo Ingênuo (Prompt Livre)",
      desc: "Abra um novo chat no ChatGPT e envie uma solicitação curta de 1 linha sobre uma tarefa real sua (ex: rotina, síntese ou resposta a um e-mail). Copie a resposta gerada e observe suas generalidades."
    },
    {
      etapa: 2,
      titulo: "Etapa 1 (20 min) — Passo B: A Engenharia dos 4 Blocos (Prompt Mestre)",
      desc: "Abra outro chat novo e reformule a solicitação aplicando os 4 blocos explícitos: [Contexto & Papel] seu papel e cenário; [Tarefa] ação com verbos diretos; [Formato] visual da saída (tabela ou tópicos); e [Restrições] travas de tempo e de não-invenção."
    },
    {
      etapa: 3,
      titulo: "Etapa 1 (20 min) — Passo C: Análise Crítica Comparativa",
      desc: "Coloque as duas respostas lado a lado. Identifique o ganho imediato de aplicabilidade, a eliminação de clichês e o impacto das restrições negativas."
    },
    {
      etapa: 4,
      titulo: "Intervenção Guiada (3 min) — Demonstração no Telão",
      desc: "Pausa verbal rápida com a turma para assistir à demonstração ao vivo de Meta-Prompting conduzida por Laura e Maria no projetor."
    },
    {
      etapa: 5,
      titulo: "Etapa 2 (15 min) — Meta-Prompting & Trava [necessita verificação]",
      desc: "Em um chat novo, use o prompt reverso: 'Antes de escrever, me faça 4 perguntas sobre meu cenário'. Responda à IA e inclua a trava: 'Marque qualquer dado não comprovado com [necessita verificação]'."
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

  segundaTentativa: {
    prompt: `[Contexto & Papel] Atue como um mentor executivo de produtividade e organização pessoal. Trabalho 8 horas por dia em regime presencial (das 8h às 17h) e tenho exatamente 1h30 líquida livre no período noturno (das 20h às 21h30) de segunda a quinta-feira.

[Tarefa Principal] Monte um plano semanal de estudos focado na revisão de 2 disciplinas (Tecnologia Aplicada e Gestão de Projetos), equilibrando leitura teórica com resolução de exercícios práticos.

[Formato de Saída] Apresente a resposta estritamente em uma tabela com as seguintes colunas:
1. Dia da Semana | 2. Horário Exato | 3. Disciplina | 4. Atividade Específica | 5. Técnica Recomendada (ex: Pomodoro, Leitura Ativa) | 6. Meta do Dia.

[Restrições & Limites Invioláveis]
- Não ultrapasse o limite rígido de 90 minutos diários.
- Reserve os últimos 15 minutos de cada dia para anotação de dúvidas.
- Não inclua nenhuma tarefa de estudo na sexta-feira à noite nem no domingo (dias de descanso sagrado).
- Não faça introduções prolixas nem conclusões com frases motivacionais: inicie a resposta diretamente na tabela.`
  },

  cincoElementos: [
    {
      elemento: "1. Contexto & Papel (Quem & Onde)",
      comoAparece: "[Contexto & Papel] 'Atue como mentor executivo... trabalho das 8h às 17h e tenho 1h30 livre à noite...'",
      funcao: "Ancora o espaço semântico da rede neural, integrando o Papel (Persona do PCTFR) com o cenário de restrições reais."
    },
    {
      elemento: "2. Tarefa Clara (O que fazer)",
      comoAparece: "[Tarefa] 'Monte um plano semanal de estudos focado na revisão de 2 disciplinas...'",
      funcao: "Define a meta direta com verbos de ação específicos, eliminando ambiguidade sobre qual entrega concreta é esperada."
    },
    {
      elemento: "3. Formato Específico (Como entregar)",
      comoAparece: "[Formato] 'Apresente estritamente em uma tabela com 6 colunas específicas...'",
      funcao: "Padroniza a estrutura visual da resposta para leitura imediata, evitando blocos prolixos de texto corrido."
    },
    {
      elemento: "4. Restrições Negativas (O que evitar)",
      comoAparece: "[Restrições] 'Não ultrapasse 90 min; sem estudos no domingo; sem introdução ou conclusões prolixas...'",
      funcao: "Fecha brechas probabilísticas, podando respostas genéricas, desvios de rota e alucinações de formato."
    },
    {
      elemento: "5. Trava Anti-Alucinação (Grounding)",
      comoAparece: "[Trava] 'Se não constar no material ou faltarem dados, responda não especificado ou marque com [necessita verificação]'",
      funcao: "Impede o modelo de inventar referências, datas, artigos de lei ou dados factuais quando houver incerteza."
    }
  ],

  comparacaoRespostas: [
    { pergunta: "A resposta do Prompt Livre serviria para você aplicar imediatamente amanhã de manhã?" },
    { pergunta: "Qual foi o impacto visual de exigir a resposta em formato de tabela em vez de texto corrido?" },
    { pergunta: "A restrição negativa ('não inclua tarefas no domingo') foi respeitada com exatidão pela IA?" },
    { pergunta: "Ao usar o Meta-Prompting na Etapa 2, as perguntas da IA ajudaram a lembrar detalhes que você tinha esquecido?" },
    { pergunta: "Onde você percebe que a revisão humana e o rótulo [necessita verificação] foram indispensáveis?" }
  ],

  reflexaoFinal: {
    perguntaGuia: "Qual elemento do framework C-T-F-R provocou a mudança mais radical na resposta do ChatGPT? Por que fazer a IA entrevistar você (Meta-Prompting) após ver a demonstração no telão tornou o processo mais seguro e produtivo?"
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
      ponto1: "Prompt vago de 1 linha sem especificação de formato ou contexto.",
      ponto2: "Apresenta tarefa e contexto, mas não delimita formato ou restrições negativas.",
      ponto3: "Domínio pleno dos 4 blocos (Contexto & Papel, Tarefa, Formato e Restrições explícitas)."
    },
    {
      criterio: "Diálogo & Meta-Prompting",
      ponto1: "Aceita a primeira resposta sem refinamento ou iteração.",
      ponto2: "Solicita ajustes genéricos ('melhore o texto', 'ficou ruim').",
      ponto3: "Usa meta-prompting ('me faça perguntas'), ajusta turnos e refina com comandos cirúrgicos."
    },
    {
      criterio: "Validação Crítica & Segurança",
      ponto1: "Copia a resposta sem ler ou valida sem checar fatos.",
      ponto2: "Revisa apenas a gramática superficial, sem atentar para dados inventados.",
      ponto3: "Aplica travas anti-alucinação com rótulo [necessita verificação], anonimiza dados sensíveis e audita a veracidade."
    }
  ],

  diretrizesDocentes: [
    "Acolhimento Total ao Iniciante: reforçar que o Papel (Persona) do Encontro 2 continua vivo dentro do bloco de Contexto.",
    "Modelagem Visual Prévia: rodar rigorosamente a demonstração ao vivo de 3 minutos no projetor antes de soltar a turma para a Etapa 2 de Meta-Prompting.",
    "Fragmentação da Bancada: monitorar o tempo de 20 minutos para a Etapa 1 e fazer a pausa verbal de alinhamento antes da Etapa 2.",
    "Intervenção Cirúrgica: ao ver um aluno com resposta prolixa, ensine na hora o comando de poda: 'Reescreva a resposta anterior apenas nos tópicos 2 e 3 em 4 linhas'.",
    "Roda de Conversa: reservar os 15 minutos finais para valorizar a evolução de quem começou inseguro e conseguiu criar um prompt mestre."
  ],

  planoB: "Caso a conexão com o ChatGPT oscile no laboratório, as docentes projetarão o ChatGPT na tela central e conduzirão a oficina em modo de 'Prompt Coletivo': os alunos ditarão em voz alta as restrições e o contexto a partir das suas bancadas, acompanhando o antes e o depois no telão."
};
