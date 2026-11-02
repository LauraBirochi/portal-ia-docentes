/**
 * Módulo 3 – Fio da Meada, Narrativa Pedagógica e Glossário de Engenharia de Prompt
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const fioDaMeada = {
  objetivoCentral: "Qual é a grande mensagem que os alunos precisam levar hoje?",
  mensagemChave: "Trate o ChatGPT como um estagiário brilhante de alta capacidade que possui contexto zero: a utilidade e precisão da resposta dependem da aplicação dos 4 Blocos Estruturais (Contexto & Papel, Tarefa, Formato e Restrições) e do domínio do Diálogo Iterativo (Meta-Prompting), com supervisão e validação crítica 100% humana.",
  explicacaoObjetivo: "Superar de forma definitiva o 'pedido vago' (que desperdiça tempo e gera clichês), compreendendo como orientar a atenção da rede neural no ChatGPT através do modelo mental do estagiário, evoluindo a sigla PCTFR do Encontro 2 para a arquitetura C-T-F-R (com Papel incorporado em Contexto), dominando a redação e a simplificação de jargões complexos, experimentando o Meta-Prompting com modelagem visual guiada e aplicando travas de incerteza [necessita verificação] e protocolos de privacidade (LGPD).",
  atos: [
    {
      ato: 1,
      tempo: "00:00 às 00:45 (45 min)",
      titulo: "Ato 1: O Handoff do Estagiário & os 4 Blocos C-T-F-R (Evolução do PCTFR) — Laura & Maria",
      desc: "Acolhimento da turma e conexão com as descobertas dos Encontros 1 e 2. Introdução do modelo mental do estagiário de alta capacidade com contexto zero. Apresentação do confronto de bancada 'Prompt or Flop' para demonstrar empiricamente por que comandos livres ativam a média estatística rasa e como os 4 Blocos (Contexto & Papel, Tarefa, Formato e Restrições) destravam o potencial sob medida da ferramenta.",
      gatilho: "Quem digita um pedido genérico recebe um clichê motivacional; quem faz o handoff estruturado com contexto, papel e limites recebe trabalho pronto!"
    },
    {
      ato: 2,
      tempo: "00:45 às 01:30 (45 min c/ Intervalo)",
      titulo: "Ato 2: Práticas no Mundo Real, Regra do Cartão-Postal & Intervalo Pedagógico (Maria & Laura)",
      desc: "Demonstração de casos práticos em camadas: Camada 1 (organização pessoal, rotinas e cronogramas de estudos realistas) e Camada 2 (redação executiva e simplificação de jargões/editais burocráticos em linguagem clara). Blindagem de segurança de dados através da 'Regra do Cartão-Postal' e da técnica de anonimização (placeholders), preparando a turma para a pausa de 15 minutos do café.",
      gatilho: "Nunca envie à IA o que você não escreveria em um cartão-postal aberto: anonimize identidades, use [CLIENTE X] e proteja seus dados profissionais!"
    },
    {
      ato: 3,
      tempo: "01:30 às 03:00 (90 min)",
      titulo: "Ato 3: Meta-Prompting Guiado, Bancada Fragmentada & Show and Tell (Laura & Maria)",
      desc: "Retorno do intervalo com a Camada 3: diálogo iterativo e Meta-Prompting (com demonstração guiada de 3 minutos no projetor antes da prática). Alinhamento ético com as diretrizes da UNESCO sobre Agência Humana e aplicação de travas com rótulo [necessita verificação]. Condução da Oficina de Bancada nos computadores em duas etapas fragmentadas (Etapa 1: Duelo de Prompts por 20 min; Etapa 2: Meta-Prompting por 15 min), seguida de Roda de Socialização (Show & Tell) e consolidação do Checklist de Bolso.",
      gatilho: "Quando você não souber exatamente como estruturar o comando, faça a IA perguntar: o Meta-Prompting transfere o esforço da pergunta para a máquina!"
    }
  ],
  glossario: [
    {
      termo: "Modelo Mental do Estagiário Inteligente",
      def: "Abordagem cognitiva que enxerga o ChatGPT como um assistente que leu bilhões de textos e domina regras formais, mas não tem intuição sobre seus objetivos, empresa ou preferências se você não fornecer o briefing completo."
    },
    {
      termo: "Framework C-T-F-R (Evolução do PCTFR)",
      def: "Arquitetura mestre de engenharia de instruções composta por: Contexto & Papel (Persona incorporada e cenário real), Tarefa (verbo direto e ação clara), Formato (tabela, tópicos, tom e extensão) e Restrições (regras negativas e travas de não-invenção)."
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
      termo: "Modelagem Visual Guiada (Andaimes / Scaffolding)",
      def: "Prática pedagógica em que a dupla docente demonstra a dinâmica de meta-prompting ao vivo no telão por 3 minutos antes de liberar os estudantes para a prática individual nos computadores, prevenindo a paralisia do iniciante."
    },
    {
      termo: "Trava com Rótulo de Incerteza ([necessita verificação])",
      def: "Restrição negativa explícita recomendada pela OpenAI (ex: 'Se não constar no material ou faltarem dados, responda não especificado ou marque com [necessita verificação]') que impede a IA de preencher lacunas factuais com dados inventados."
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
