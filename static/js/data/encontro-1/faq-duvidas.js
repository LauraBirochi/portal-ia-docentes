/**
 * Módulo 1 – Perguntas dos Alunos, Dúvidas Clássicas e Armadilhas Pedagógicas
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const perguntasAlunos = [
  {
    numero: 1,
    duvida: "Se a Inteligência Artificial já existe desde os anos 1950 (Turing e Dartmouth), por que ela 'explodiu' e virou febre só agora?",
    resposta: "A teoria matemática e os algoritmos fundamentais já existiam há quase 70 anos, mas faltavam dois ingredientes físicos indispensáveis: um volume astronômico de dados digitalizados pela internet (Big Data) e chips de processamento gráfico hiperpotentes (GPUs). Quando a tríade Dados + Chips + Algoritmos se encontrou na última década, a IA deu o salto gigantesco que hoje vemos no bolso e nos serviços.",
    pontoDidatico: "Conecte a linha do tempo (Slide 7) diretamente aos 3 Ingredientes (Slide 10), demonstrando que a ciência depende de infraestrutura tecnológica para florescer."
  },
  {
    numero: 2,
    duvida: "Isso tudo não é só um monte de comandos IF/ELSE (Se/Então) gigante programado por alguém?",
    resposta: "Na programação tradicional, sim: cada regra e exceção precisa ser escrita manualmente por um ser humano (como uma receita de bolo estrita). No aprendizado de máquina (Machine Learning), nenhum programador escreveu regras para cada situação: o computador analisou milhões de exemplos e ajustou pesos matemáticos sozinho para reconhecer padrões. Se fosse IF/ELSE humano, seria humanamente impossível programar todas as variações de um rosto ou da fala humana!",
    pontoDidatico: "Fixe a metáfora do Slide 9: regra estrita prescrita versus observação estatística de padrões em escala."
  },
  {
    numero: 3,
    duvida: "Se o corretor do celular, o filtro antispam e o reconhecimento de voz são IA, por que a gente nunca chamou isso de Inteligência Artificial?",
    resposta: "Isso é exatamente o que chamamos de 'Teorema de Larry Tesler' ou 'Efeito IA': quando uma tecnologia de inteligência artificial funciona com extrema estabilidade e vira rotina no nosso dia a dia, ela perde o mistério de 'mágica' e passa a ser chamada apenas de 'recurso comum de informática'. A IA costuma parecer IA apenas enquanto ainda é novidade ou está no cinema.",
    pontoDidatico: "Reforce o conceito de invisibilidade da IA cotidiana trabalhado nos Slides 14 e 15."
  },
  {
    numero: 4,
    duvida: "A IA pode desenvolver sentimentos, ter consciência própria e se rebelar contra a humanidade?",
    resposta: "Cientificamente não há base real para isso. A IA que existe no mundo é 100% IA Estreita (ANI): não possui biologia, desejos, instinto de sobrevivência, sentimentos ou consciência. Ela é código calculando probabilidades estatísticas a partir de dados do passado. O risco real da IA não são robôs rebeldes da ficção científica, mas o uso humano irresponsável com dados tendenciosos (vieses) ou decisões automatizadas sem supervisão ética.",
    pontoDidatico: "Redirecione o pânico da ficção científica (Slides 12, 16 e 17) para a responsabilidade ética e governança humana no mundo real."
  },
  {
    numero: 5,
    duvida: "Se a IA responde com tanta certeza, fluência e vocabulário formal, como descubro se ela está inventando (alucinando)?",
    resposta: "A IA não tem compromisso ético com a verdade nem 'compreende' o sentido real das palavras: ela prevê a combinação estatística mais provável e gramaticalmente convincente de termos. Por isso, fatos históricos, leis, autores, referências e cálculos nunca devem ser aceitos cegamente. A IA é uma excelente copiloto para sugerir caminhos, mas a validação factual e o senso crítico final são sempre 100% responsabilidade do usuário (Human-in-the-loop).",
    pontoDidatico: "Ensine a postura de verificação ativa contra a alucinação (Slide 18), antecipando a postura crítica necessária para o ChatGPT no Encontro 2."
  },
  {
    numero: 6,
    duvida: "Usar IA no trabalho, nos estudos ou para escrever e-mails não é uma forma de trapaça ou plágio?",
    resposta: "Usar IA para copiar e colar respostas cegas sem ler, sem pensar e sem declarar autoria é plágio e desonestidade. Por outro lado, usar a IA como copiloto — para destravar a folha em branco, pedir analogias, organizar tópicos de uma aula ou revisar clareza — é potencialização do intelecto humano. A calculadora não acabou com a matemática; ela tirou o esforço mecânico da conta para permitir que o humano resolva problemas mais complexos.",
    pontoDidatico: "Estabeleça a linha clara entre trapaça passiva e coprodução crítica / copilotagem ética (Slide 20)."
  },
  {
    numero: 7,
    duvida: "A IA vai roubar todos os empregos e substituir os profissionais?",
    resposta: "A IA automatiza tarefas repetitivas, mecânicas e burocráticas, mas não substitui competências humanas fundamentais: empatia, discernimento ético, criatividade contextual, afeto e negociação. A IA não vai substituir o professor ou o profissional consciente, mas o profissional que aprende a usar IA como copiloto terá enorme vantagem sobre quem a ignora. Este curso existe para nos colocar no controle dessa transformação!",
    pontoDidatico: "Acolha a ansiedade profissional (Slide 21) e empodere os alunos a assumirem o papel de autores e gestores de tecnologia."
  },
  {
    numero: 8,
    duvida: "A IA pode ler minhas mensagens, fotos e dados pessoais sem permissão? O Brasil tem leis para nos proteger?",
    resposta: "Sim, no Brasil temos a LGPD (Lei Geral de Proteção de Dados) e o novo Marco Legal da IA (PL 2338/2023), que exigem consentimento, finalidade legítima e respeito à privacidade para o uso de dados de cidadãos. Além disso, o Plano Brasileiro de IA (PBIA) investe R$ 23 bilhões para garantir que o país desenvolva tecnologia própria e soberana, aplicando IA em benefício público (como no SUS) e capacitando a população.",
    pontoDidatico: "Valorize a dimensão cidadã, jurídica e soberana da tecnologia (Slides 22 a 24), desmistificando a ideia de que a internet é uma 'terra sem leis'."
  },
  {
    numero: 9,
    duvida: "Eu não sei nada de matemática, não sou da área de exatas e tenho receio de computador. Eu vou conseguir acompanhar as aulas práticas?",
    resposta: "Com certeza absoluta! O minicurso foi construído com linguagem 100% acessível, sem exigir qualquer fórmula matemática ou conhecimento de programação. A única habilidade necessária é a nossa capacidade humana de nos comunicar em português e ter curiosidade. Ter um e-mail válido (Slide 6) é o nosso único ponto de partida e estaremos juntas ao lado de vocês em todas as etapas no laboratório.",
    pontoDidatico: "Garanta o acolhimento afetivo e a redução de ansiedade técnica (Slides 5 e 6), fortalecendo o vínculo de confiança entre a dupla docente e a turma."
  }
];
