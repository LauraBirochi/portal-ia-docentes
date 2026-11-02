/**
 * Módulo 3 – Atividades Práticas e Laboratório: ChatGPT no Mundo Real
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 * 
 * Especialidade: Engenharia de Prompt e Aplicações Práticas (Framework C-T-F-R & Meta-Prompting)
 */

export const oficinaPratica = {
  isDiagnostica: false,
  titulo: "Oficina de Bancada: Do Pedido Simples ao Prompt Mestre (C-T-F-R)",
  tema: "Aplicações Reais no ChatGPT: Organização, Redação Profissional e Meta-Prompting",
  duracao: "50 a 60 minutos de Laboratório nos Computadores",
  peso: "Instrumento Formativo no Portfólio Digital • Encontro 3 (0,5 ponto)",
  conducao: "Co-docência (Profª Laura & Profª Maria circulando pelas mesas)",
  ferramenta: "Navegador Web + ChatGPT (Modo Chat Temporário / Convencional sem memórias)",
  objetivo: "Capacitar os participantes a construir instruções profissionais sob medida no ChatGPT aplicando os 4 Blocos da Estrutura Perfeita (Contexto, Tarefa, Formato e Restrições), dominar o diálogo iterativo através do Meta-Prompting e implementar travas de blindagem contra alucinações e riscos de privacidade.",

  situacaoProblema: {
    contexto: "No cotidiano de estudos e trabalho, a maioria dos usuários comete o erro do 'pedido de uma linha só' (ex: 'me ajude a planejar minha rotina' ou 'faça um e-mail sobre o projeto'). O resultado costuma ser vago, prolixo, recheado de clichês motivacionais ou dados imprecisos que exigem retrabalho e geram frustração.",
    missao: "Assumir o papel de gestor de um estagiário inteligente de alta capacidade: selecionar 1 tarefa real da sua rotina e executar a Missão 1 (Duelo de Prompts: Livre vs. Mestre C-T-F-R) e a Missão 2 (Entrevista Investigativa com Meta-Prompting e Trava Anti-Alucinação), registrando a evolução empírica no Portfólio Digital."
  },

  comoExecutar: [
    {
      etapa: 1,
      titulo: "Missão 1 — Passo A: O Disparo Ingênuo (Prompt Livre)",
      desc: "Abra um novo chat no ChatGPT e envie uma solicitação curta de 1 linha sobre uma tarefa real sua (ex: rotina, síntese ou resposta a um e-mail). Copie a resposta gerada e observe suas generalidades."
    },
    {
      etapa: 2,
      titulo: "Missão 1 — Passo B: A Engenharia dos 4 Blocos (Prompt Mestre)",
      desc: "Abra outro chat novo e reformule a solicitação aplicando os 4 blocos explícitos: [Contexto] seu papel e cenário; [Tarefa] ação com verbos diretos; [Formato] visual da saída (tabela ou tópicos); e [Restrições] travas de tempo e de não-invenção."
    },
    {
      etapa: 3,
      titulo: "Missão 1 — Passo C: Análise Crítica Comparativa",
      desc: "Coloque as duas respostas lado a lado. Identifique o ganho imediato de aplicabilidade, a eliminação de clichês e o impacto das restrições negativas."
    },
    {
      etapa: 4,
      titulo: "Missão 2 — Entrevista de Meta-Prompting (Prompt Reverso)",
      desc: "Em um novo chat, inverta a dinâmica: descreva um objetivo complexo e instrua: 'Antes de redigir qualquer resposta, atue como engenheiro de prompt e me faça 4 a 5 perguntas cruciais para entender meu cenário, tom e limites'."
    },
    {
      etapa: 5,
      titulo: "Missão 2 — Refinamento Iterativo & Trava Anti-Alucinação",
      desc: "Responda às perguntas da IA, insira a trava 'se não tiver certeza, responda não especificado' e faça a auditoria final dos dados antes de salvar no seu Portfólio Digital."
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
      elemento: "1. Contexto (Quem & Onde)",
      comoAparece: "[Contexto] 'Atue como mentor executivo... trabalho das 8h às 17h e tenho 1h30 livre à noite...'",
      funcao: "Ancora o espaço semântico da rede neural, delimitando persona, público-alvo e o cenário de restrições do mundo real."
    },
    {
      elemento: "2. Tarefa (O que fazer)",
      comoAparece: "[Tarefa] 'Monte um plano semanal de estudos focado na revisão de 2 disciplinas...'",
      funcao: "Define a meta direta com verbos de ação específicos, eliminando ambiguidade sobre qual entrega concreta é esperada."
    },
    {
      elemento: "3. Formato (Como entregar)",
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
      comoAparece: "[Trava] 'Se faltarem informações ou não tiver certeza, responda apenas não especificado'",
      funcao: "Impede o modelo de inventar referências, datas, artigos de lei ou dados factuais quando houver incerteza."
    }
  ],

  comparacaoRespostas: [
    { pergunta: "A resposta do Prompt Livre serviria para você aplicar imediatamente amanhã de manhã?" },
    { pergunta: "Qual foi o impacto visual de exigir a resposta em formato de tabela em vez de texto corrido?" },
    { pergunta: "A restrição negativa ('não inclua tarefas no domingo') foi respeitada com exatidão pela IA?" },
    { pergunta: "Ao usar o Meta-Prompting na Missão 2, as perguntas da IA ajudaram a lembrar detalhes que você tinha esquecido?" },
    { pergunta: "Onde você percebe que a revisão humana foi indispensável para validar a entrega?" }
  ],

  reflexaoFinal: {
    perguntaGuia: "Qual elemento do framework C-T-F-R provocou a mudança mais radical na resposta do ChatGPT? Por que fazer a IA entrevistar você (Meta-Prompting) é mais eficiente do que tentar adivinhar todo o contexto sozinho no primeiro comando?"
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
      ponto3: "Domínio pleno dos 4 blocos (Contexto, Tarefa, Formato e Restrições explícitas)."
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
      ponto3: "Aplica travas anti-alucinação, anonimiza dados sensíveis e audita a veracidade das informações."
    }
  ],

  diretrizesDocentes: [
    "Acolhimento Total ao Iniciante: desmistificar que é necessário 'saber programar'; engenharia de prompt é clareza de comunicação em português.",
    "Circulação Ativa: Laura e Maria circulam pelas bancadas logo após os alunos enviarem o Prompt Livre para que eles vejam a frustração do genérico.",
    "Intervenção Cirúrgica: ao ver um aluno com resposta prolixa, ensine na hora o comando de poda: 'Reescreva a resposta anterior apenas nos tópicos 2 e 3 em 4 linhas'.",
    "Estímulo ao Portfólio Digital: certificar-se de que os alunos estão colando o antes/depois no arquivo individual para fixação do aprendizado.",
    "Roda de Conversa: reservar os 15 minutos finais para valorizar a evolução de quem começou inseguro e conseguiu criar um prompt mestre."
  ],

  planoB: "Caso a conexão com o ChatGPT oscile no laboratório, as docentes projetarão o ChatGPT na tela central e conduzirão a oficina em modo de 'Prompt Coletivo': os alunos ditarão em voz alta as restrições e o contexto a partir das suas bancadas, acompanhando o antes e o depois no telão."
};
