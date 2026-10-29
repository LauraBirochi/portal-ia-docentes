# Assunto 5: Engenharia de Prompt Básica — O Framework PCTFR e o Refinamento Iterativo

**Módulo:** Encontro 2 – *Como acessar os modelos de IAGen e Criação de Prompts Básicos*  
**Bloco da Aula:** Bloco 2 (Etapa 2.2 – 15 min) e Bloco 3 (Missão 2 e 3 do Laboratório – 55 min)  
**Motivação no Diagnóstico:**  
* **Pergunta 4:** 66,7% (2 de 3) sabem fazer apenas *"pedidos simples"*; 33,3% (1) faz instruções detalhadas.  
* **Pergunta 5:** Quando a resposta sai ruim, 2 reformulam o pedido e 1 pede para a IA corrigir/melhorar.  
* **Pergunta 8:** 1 aluno ainda escolheu o pedido genérico *"Me dê dicas de alimentação saudável"*, enquanto 2 escolheram o pedido contextualizado.  
* **Pergunta 9:** Hábitos de contexto divididos (1 nunca informa, 1 raramente, 1 sempre).  
* **Pergunta 15:** Contraste real entre o Exemplo 1 (*"Monte um cronograma de estudos para revisão de acordo com o material"*) e o Exemplo 2 (contextualizado na engenharia elétrica).

---

## 1. Visão Geral para as Docentes (Laura & Maria)

Este é o coração prático da aula. O diagnóstico mostrou que **todos querem respostas melhores**, mas dois terços da turma ainda não têm um "molde mental" fácil de lembrar na hora de digitar o comando — e por isso acabam esquecendo de colocar o contexto (Pergunta 9).

O objetivo deste assunto é entregar uma **fórmula simples de 5 peças (PCTFR)** que qualquer aluno — do iniciante ao engenheiro — consegue aplicar em menos de 1 minuto para transformar respostas vagas em entregas profissionais.

---

## 2. O Que é um Prompt e a Lei do "Pedido Vago = Resposta Genérica"

* **Prompt** é o comando, pergunta ou instrução em português que você escreve para orientar a IA.
* Na computação, existe um princípio famoso chamado **GIGO (*Garbage In, Garbage Out*)**: se a instrução que entra é vaga, a resposta que sai também será vaga.
* **A Regra da Estagiária Genial no 1º Dia de Trabalho:**
  > Imagine que a IA é uma pessoa extremamente culta, que leu milhões de livros, mas **acabou de chegar hoje na sua vida**. Ela não sabe quem você é, quanto tempo você tem livre, qual é o seu orçamento, o que você já sabe sobre o assunto nem como você prefere ler a resposta. Se você não contar esse **contexto**, ela será obrigada a adivinhar!

---

## 3. A Anatomia de um Comando Perfeito: O Framework PCTFR

Para nunca mais esquecer de dar contexto (resolvendo a Pergunta 9), ensine os 5 ingredientes da sigla **PCTFR**:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ [P] PAPEL (Quem a IA é)     ──► "Atue como um [especialista / professor / técnico]..." │
│ [C] CONTEXTO (Quem eu sou)  ──► "Estou na situação [X], tenho nível [Y] e tempo [Z]..."│
│ [T] TAREFA (O que fazer)    ──► "Crie / Analise / Compare / Monte um..."               │
│ [F] FORMATO (Como entregar) ──► "Apresente em forma de [tabela / lista / checklist]..."│
│ [R] RESTRIÇÕES (Limites)    ──► "Não use [jargões / itens caros]; limite a [X] linhas."│
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Detalhamento de cada peça para explicar no Slide:
1. **P — Papel (Persona):** Define o vocabulário e a lente de análise da rede neural (*"Atue como um nutricionista prático"*, *"Atue como um tutor universitário"*, *"Atue como um engenheiro de automação sênior"*).
2. **C — Contexto:** É a peça mais importante apontada pelo nosso diagnóstico! Responde: *Quem sou eu? Qual é o meu problema real? Qual é meu nível de conhecimento prévio? Para que vou usar essa resposta?*
3. **T — Tarefa (Objetivo claro):** Comece sempre com um verbo de ação direto (*"Monte um cronograma"*, *"Explique a função dos pinos"*, *"Resuma os 5 pontos principais"*).
4. **F — Formato de Saída:** Se você não pedir formato, a IA entrega um "blocão de texto" cansativo de ler. Peça formatos visuais: **Tabela com colunas específicas**, **Checklist passo a passo**, **Tópicos resumidos (Bullet points)** ou **Comparativo Lado a Lado**.
5. **R — Restrições (Regras e Limites):** Diga o que você **não quer** (*"Sem ingredientes difíceis de achar"*, *"Não passe de 1 hora de estudo por dia"*, *"Avise se não tiver certeza do dado técnico"*).

---

## 4. As 3 Demonstrações Comparativas "Antes vs. Depois" (Casos Reais da Turma)

Projete no telão estes 3 casos retirados diretamente das respostas da turma no diagnóstico para que eles vejam a transformação ao vivo:

### Caso 1: Alimentação e Rotina (Da Pergunta 8 do Diagnóstico)

| 🔴 Pedido Genérico (Sem Contexto) | 🟢 Pedido Estruturado (Com PCTFR) |
| :--- | :--- |
| *"Me dê dicas de alimentação saudável."* | **"[P]** Atue como um nutricionista focado em rotina prática.<br>**[C]** Trabalho fora o dia inteiro, chego cansado à noite e tenho no máximo 20 minutos para cozinhar.<br>**[T]** Monte um cardápio de jantar para 3 dias.<br>**[F]** Apresente em uma tabela com: Dia, Prato, Tempo de preparo e Lista de compras.<br>**[R]** Use apenas ingredientes baratos de supermercado comum e receitas de uma panela só." |
| **O que a IA responde:** Um texto genérico dizendo *"beba 2 litros de água, coma frutas, evite frituras e durma bem"* — coisas que todo mundo já sabe e que não resolvem o jantar de hoje! | **O que a IA responde:** Uma tabela pronta para usar hoje à noite (ex: Omelete de forno rápida, Frango de frigideira com legumes, Rap10 integral) + checklist exato do que comprar! |

---

### Caso 2: Organização dos Estudos (Da Pergunta 15 — Exemplo 1 da Turma)

| 🔴 Pedido Inicial do Diagnóstico | 🟢 Versão Turbinada com PCTFR |
| :--- | :--- |
| *"Monte um cronograma de estudos para revisão de acordo com o material."* | **"[P]** Atue como um mentor especialista em organização de estudos.<br>**[C]** Preciso revisar os tópicos que vou colar abaixo para uma prova daqui a 7 dias. Só tenho 1 hora disponível por noite de segunda a sexta e 2 horas no sábado.<br>**[T]** Crie um cronograma distribuindo os assuntos por prioridade e intercalando teoria com exercícios.<br>**[F]** Entregue em uma tabela com as colunas: Dia da Semana, Tópico, O que fazer (Leitura vs Exercício) e Tempo em minutos.<br>**[R]** Reserve o sábado apenas para revisão geral e deixe o domingo livre." |

---

### Caso 3: Engenharia e Automação (Da Pergunta 15 — Exemplo 2 da Turma)

* Como o Exemplo 2 do diagnóstico **já tinha um ótimo Contexto e Tarefa**, mostre à turma como adicionar **Formato [F]** e **Restrição Anti-Alucinação [R]** deixa o comando blindado:
  > **"[P]** Atue como um engenheiro eletricista especialista em automação industrial.  
  > **[C]** Sou engenheiro eletricista, tenho conhecimentos básicos de drivers de motor de passo e preciso montar o circuito de acionamento de um motor.  
  > **[T]** Verifique se o código correto do componente é A4899 ou A4988 e explique a pinagem de conexão.  
  > **[F]** Organize em uma tabela dividindo os pinos por função (Alimentação lógica, Potência do motor, Controle de pulso/direção e Microstepping).  
  > **[R]** Destaque os 3 principais riscos de queima do componente na bancada e indique quais valores devo confirmar obrigatoriamente no datasheet oficial."

---

## 5. Como Agir Quando a Resposta Não Fica Boa? (Aprofundando a Pergunta 5)

Na **Pergunta 5**, descobrimos que:
* 2 alunos **reformulam o pedido do zero**;
* 1 aluno **pede para a IA corrigir/melhorar a resposta**.

Ensine que **as duas estratégias são excelentes**, mas cada uma serve para um momento diferente:

1. **Quando usar o "Pedir para ajustar na sequência" (Conversa Iterativa):**
   * Quando a IA acertou 80% do que você queria, mas você quer refinar o formato ou o detalhe.
   * *Fórmulas de 2º turno prontas para usar:*
     * *"Gostei do resultado, mas achei muito longo. Resuma pela metade mantendo a tabela."*
     * *"Reescreva a explicação do item 3 usando um exemplo prático do dia a dia."*
     * *"Adapte esse cronograma considerando que na quarta-feira eu não terei tempo de estudar."*
2. **Quando usar o "Reformular o pedido inicial" (Botão de Lápis ✏️):**
   * Quando a IA entendeu tudo errado desde o começo porque faltou contexto. Nesse caso, clique no lápis na primeira pergunta, adicione o **PCTFR** e mande gerar de novo!
