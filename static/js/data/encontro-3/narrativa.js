/**
 * Módulo 3 – Fio da Meada, Narrativa Pedagógica e Glossário de Engenharia de Prompt
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const fioDaMeada = {
  objetivoCentral: "Qual é a grande mensagem que os alunos precisam levar hoje?",
  mensagemChave: "A qualidade e a utilidade da resposta da IA não dependem de tentar fazê-la parecer esperta com adjetivos vazios, mas sim da clareza, especificidade e limitação do contexto humano que a orienta.",
  explicacaoObjetivo: "Superar de forma definitiva o 'pedido vago' e desmistificar a 'Ilusão da Persona' (demonstrando que adjetivos vazios como 'incrível' e 'especialista premiado' geram verborragia sem ganho factual). Ensinar a orientar a atenção da rede neural no ChatGPT através do modelo mental do estagiário no 1º dia, evoluindo a sigla PCTFR para a arquitetura C-T-F-R estruturada com marcadores Markdown (#), dominando a redação e a simplificação de jargões complexos, experimentando o Meta-Prompting com escopo prévio e aplicando travas de incerteza [necessita verificação], a distinção entre revisão textual e checagem factual, e a Regra do Cartão-Postal (LGPD).",
  atos: [
    {
      ato: 1,
      tempo: "00:00 às 00:50 (50 min)",
      titulo: "Ato 1: O Handoff do Estagiário, Duelo de 3 Vias, As 3 Camadas & Estrutura C-T-F-R — Laura (Slides 2-4), Co-docência (Slide 5) & Maria (Slide 6)",
      desc: "Acolhimento da turma e conexão com os aprendizados dos Encontros 1 e 2 [00:00 - 00:15]. Laura conduz o modelo mental do estagiário inteligente no 1º dia (alta capacidade, contexto zero) [00:15 - 00:25] e o Duelo de 3 Vias ('Prompt or Flop') para desconstruir a ilusão da persona e provar que adjetivos vazios geram verborragia sem formato [00:25 - 00:35]. Em co-docência, Laura e Maria apresentam o mapa dos Exemplos no Mundo Real com as 3 Camadas da IA (Slide 5) [00:35 - 00:42]. Maria assume para apresentar os 4 Blocos C-T-F-R (Contexto & Papel, Tarefa, Formato e Restrições) com organização via Markdown (#) no Slide 6 [00:42 - 00:50].",
      gatilho: "Quem digita um pedido vago recebe um clichê; quem usa adjetivos vazios recebe verborragia; quem faz o handoff estruturado com contexto e restrições recebe trabalho pronto!"
    },
    {
      ato: 2,
      tempo: "00:50 às 01:30 (40 min)",
      titulo: "Ato 2: Aplicações Práticas nas Camadas 1 e 2 & Regra do Cartão-Postal — Maria (Slides 7 a 9)",
      desc: "Maria conduz as demonstrações práticas em camadas: Camada 1 (organização pessoal, rotinas e cronogramas de estudos realistas - Slide 7) [00:50 - 01:02] e Camada 2 (redação profissional e simplificação de jargões/editais burocráticos em linguagem clara - Slide 8) [01:02 - 01:16]. Em seguida, Maria aprofunda a blindagem de privacidade através da 'Regra do Cartão-Postal' e da técnica de anonimização com placeholders ([CLIENTE A], [VALOR Y]) no Slide 9 [01:16 - 01:30].",
      gatilho: "Nunca envie à IA o que você não escreveria em um cartão-postal aberto: anonimize identidades, use [CLIENTE A] e proteja seus dados profissionais!"
    },
    {
      ato: 3,
      tempo: "01:30 às 03:00 (90 min)",
      titulo: "Ato 3: Meta-Prompting, Bancada, Testes Reais, Comparativo & Missão 2 — Laura & Maria",
      desc: "Retorno do intervalo com Laura conduzindo a Camada 3: diálogo iterativo e Meta-Prompting com escopo prévio delimitado [01:30 - 01:45], seguido dos princípios éticos da UNESCO (Agência Humana, Revisão Textual ≠ Checagem Factual e Trava [necessita verificação]) [01:45 - 02:00]. Oficina de Bancada: Missão 1 nos computadores (Slide 12) [02:00 - 02:20]. Apresentação da Bancada de Testes Empíricos (Macarrão Parisiense: Vago, Falso Bom, Estruturado) e do Quadro Comparativo das Diferenças no telão (Slides 13 a 16) [02:20 - 02:33]. Oficina de Bancada: Missão 2 com Auto-Entrevista ancorada e trava de incerteza (Slide 17) [02:33 - 02:48]. Roda de socialização (Show & Tell - Slide 18) [02:48 - 02:56] e consolidação do Checklist de Bolso, referências bibliográficas da OpenAI/UNESCO/OSSE e encerramento (Slides 19 e 20) [02:56 - 03:00].",
      gatilho: "Quando você não souber como estruturar todos os detalhes, delimite o escopo e faça a IA perguntar: o Meta-Prompting transfere o esforço da pergunta para a máquina!"
    }
  ],
  glossario: [
    {
      termo: "Modelo Mental do Estagiário Inteligente",
      def: "Abordagem cognitiva que enxerga o ChatGPT como um estagiário de alta capacidade de processamento que leu bilhões de textos, mas possui contexto zero sobre a sua rotina, critérios de qualidade ou preferências se você não fornecer o briefing completo (handoff)."
    },
    {
      termo: "A Ilusão da Persona ('Falso Bom Prompt')",
      def: "Crença equivocada de que adicionar instruções superlativas ('atue como o melhor especialista do mundo', 'faça um plano incrível e perfeito') torna a IA mais precisa. Pesquisas científicas comprovam efeito nulo ou negativo na exatidão factual em tarefas objetivas, gerando verborragia e jargão sem substância."
    },
    {
      termo: "Diferenciação Funcional da Persona",
      def: "Diretriz pedagógica segundo a qual personas servem exclusivamente para regular tom de voz, público-alvo, perspectiva ou estilo de comunicação, devendo ser omitidas em cálculos, tabelas organizacionais e análises de dados diretas."
    },
    {
      termo: "Framework C-T-F-R (Evolução do PCTFR)",
      def: "Arquitetura mestre de engenharia de instruções composta por: Contexto & Papel (Persona incorporada e cenário real), Tarefa (verbo direto e ação clara), Formato (tabela, tópicos, tom e extensão com marcadores Markdown #) e Restrições (regras negativas e travas de não-invenção)."
    },
    {
      termo: "Scaffolding Pedagógico em 3 Níveis (Andaime)",
      def: "Estratégia gradual de aprendizagem para adultos iniciantes: Nível 1 (transformar o pedido vago de 1 linha), Nível 2 (limpar adjetivos vazios e focar em funções) e Nível 3 (auto-entrevista com meta-prompting e travas de incerteza), prevenindo ansiedade e gerando autonomia."
    },
    {
      termo: "O Escritor Improvisador vs. O Bibliotecário",
      def: "Metáfora cognitiva: o Google funciona como um bibliotecário que busca livros prontos na prateleira; o ChatGPT é um escritor improvisador probabilístico que monta o texto palavra por palavra por predição estatística (super autocompletar), podendo soar fluente mesmo ao alucinar."
    },
    {
      termo: "Revisão Textual vs. Checagem Factual",
      def: "Distinção crítica de agência humana: revisar a fluência, ortografia e coesão de um texto não garante sua verdade. Um texto gramaticalmente perfeito gerado por IA pode conter citações, leis e dados totalmente inventados, exigindo auditoria fora do modelo."
    },
    {
      termo: "Meta-Prompting com Escopo Prévio",
      def: "Estratégia avançada onde se instrui o modelo a atuar como entrevistador para fazer 4 perguntas essenciais antes de gerar a resposta. Exige delimitação prévia de escopo para evitar travamento da IA e perguntas genéricas."
    },
    {
      termo: "Trava com Rótulo de Incerteza ([necessita verificação])",
      def: "Restrição negativa explícita recomendada pela UNESCO e OpenAI ('Se não tiver certeza ou faltarem dados, responda não especificado ou marque com [necessita verificação]') que impede a IA de preencher lacunas com dados inventados."
    },
    {
      termo: "Regra do Cartão-Postal & Anonimização (LGPD)",
      def: "Protocolo de higiene e privacidade que trata a caixa de texto da IA como um cartão-postal aberto, substituindo nomes, empresas e valores sigilosos por identificadores neutros ([CLIENTE A], [EMPRESA X], [VALOR Y]) antes do envio."
    },
    {
      termo: "Agência Humana (Diretriz UNESCO)",
      def: "Princípio ético inegociável segundo o qual a inteligência artificial é exclusivamente um instrumento de apoio cognitivo: a responsabilidade, o julgamento final e a curadoria sobre a veracidade do conteúdo são sempre 100% humanos."
    }
  ]
};
