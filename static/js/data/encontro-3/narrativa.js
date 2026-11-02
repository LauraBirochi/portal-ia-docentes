/**
 * Módulo 3 – Fio da Meada, Narrativa Pedagógica e Glossário de Engenharia de Prompt
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const fioDaMeada = {
  objetivoCentral: "Qual é a grande mensagem que os alunos precisam levar hoje?",
  mensagemChave: "Trate o ChatGPT como um estagiário brilhante de alta capacidade que possui contexto zero: a utilidade e precisão da resposta dependem da aplicação dos 4 Blocos Estruturais (Contexto, Tarefa, Formato e Restrições) e do domínio do Diálogo Iterativo (Meta-Prompting), com supervisão e validação crítica 100% humana.",
  explicacaoObjetivo: "Superar de forma definitiva o 'pedido vago' (que desperdiça tempo e gera clichês), compreendendo como orientar a atenção da rede neural no ChatGPT através do modelo mental do estagiário, dominando a arquitetura dos 4 blocos (C-T-F-R) em tarefas reais do cotidiano e do trabalho, utilizando o Meta-Prompting para interrogar o usuário e aplicando travas anti-alucinação e protocolos de privacidade (LGPD).",
  atos: [
    {
      ato: 1,
      tempo: "00:00 às 00:45 (45 min)",
      titulo: "Ato 1: O Handoff do Estagiário Inteligente & os 4 Blocos da Estrutura Perfeita (Co-docência Laura & Maria)",
      desc: "Acolhimento da turma e conexão com as descobertas dos Encontros 1 e 2. Introdução do modelo mental do estagiário de alta capacidade com contexto zero. Apresentação do confronto de bancada 'Prompt or Flop' para demonstrar empiricamente por que comandos livres ativam a média estatística rasa e como os 4 Blocos (Contexto, Tarefa, Formato e Restrições) destravam o potencial sob medida da ferramenta.",
      gatilho: "Quem digita um pedido genérico recebe um clichê motivacional; quem faz o handoff estruturado com contexto e limites recebe trabalho pronto!"
    },
    {
      ato: 2,
      tempo: "00:45 às 01:30 (45 min c/ Intervalo)",
      titulo: "Ato 2: Práticas no Mundo Real, Regra do Cartão-Postal & Intervalo Pedagógico (Maria & Laura)",
      desc: "Demonstração de casos práticos em camadas: Camada 1 (organização pessoal, rotinas e cronogramas de estudos realistas) e Camada 2 (redação executiva, síntese de rascunhos e simplificação de comunicados). Blindagem de segurança de dados através da 'Regra do Cartão-Postal' e da técnica de anonimização (placeholders), preparando a turma para a pausa de 15 minutos do café.",
      gatilho: "Nunca envie à IA o que você não escreveria em um cartão-postal aberto: anonimize identidades, use [CLIENTE X] e proteja seus dados profissionais!"
    },
    {
      ato: 3,
      tempo: "01:30 às 03:00 (90 min)",
      titulo: "Ato 3: Meta-Prompting, Oficina Prática no Portfólio Digital & Show and Tell (Laura & Maria)",
      desc: "Retorno do intervalo com a Camada 3: diálogo iterativo e Meta-Prompting (como colocar a IA na posição de entrevistadora investigativa para desenhar o prompt ideal). Alinhamento ético com as diretrizes da UNESCO sobre Agência Humana e aplicação de travas anti-alucinação. Condução da Oficina de Bancada nos computadores (Missões 1 e 2 no Portfólio Digital), seguida de Roda de Socialização (Show & Tell) e consolidação do Checklist de Bolso.",
      gatilho: "Quando você não souber exatamente como estruturar o comando, faça a IA perguntar: o Meta-Prompting transfere o esforço da pergunta para a máquina!"
    }
  ],
  glossario: [
    {
      termo: "Modelo Mental do Estagiário Inteligente",
      def: "Abordagem cognitiva que enxerga o ChatGPT como um assistente que leu bilhões de textos e domina regras formais, mas não tem intuição sobre seus objetivos, empresa ou preferências se você não fornecer o briefing completo."
    },
    {
      termo: "Framework C-T-F-R (Os 4 Blocos)",
      def: "Arquitetura mestre de engenharia de instruções composta por: Contexto (papel/persona e cenário real), Tarefa (verbo direto e ação clara), Formato (tabela, tópicos, tom e extensão) e Restrições (regras negativas e travas de não-invenção)."
    },
    {
      termo: "Multi-turn Prompting (Diálogo Iterativo)",
      def: "Técnica de lapidação conversacional contínua na mesma sessão, onde o usuário solicita ajustes específicos (tom, tamanho, inclusão de colunas) sem descartar a resposta anterior ou recomeçar o chat do zero."
    },
    {
      termo: "Meta-Prompting (Prompt Reverso)",
      def: "Estratégia avançada onde se instrui o modelo a atuar como engenheiro de requisitos e fazer perguntas de sondagem ao usuário para esclarecer dúvidas e lacunas de contexto antes de gerar a entrega final."
    },
    {
      termo: "Trava Anti-Alucinação (Grounding Constraint)",
      def: "Restrição negativa explícita adicionada ao prompt (ex: 'Se não houver dados comprovados no texto fornecido, responda apenas não especificado') que impede o modelo de 'chutar' fatos ou datas com tom de certeza."
    },
    {
      termo: "Regra do Cartão-Postal & Anonimização",
      def: "Protocolo de higiene e privacidade (LGPD) que consiste em substituir dados sensíveis reais (nomes, CPFs, empresas e valores sigilosos) por identificadores neutros como [PROFESSOR A] ou [ESCOLA Y] antes de submeter o prompt à IA."
    },
    {
      termo: "Agência Humana (Diretriz UNESCO)",
      def: "Princípio ético inegociável segundo o qual a inteligência artificial é exclusivamente um instrumento de apoio cognitivo: a responsabilidade, o julgamento final e a curadoria sobre a veracidade do conteúdo são sempre 100% humanos."
    }
  ]
};
