# Plano de Aula e Estratégia Pedagógica – Encontro 2 (Pós-Diagnóstico)

## Curso: Inteligência Artificial: Fundamentos e Boas Práticas
* **Encontro:** 02 de 07
* **Data Prevista:** 23 de Outubro de 2026
* **Tema:** Como Acessar os Modelos de IAGen, Como Eles Funcionam (Buscador vs. Gerador) e Criação de Prompts Estruturados com Segurança
* **Carga Horária:** 3 horas (180 minutos)
* **Perfil Real da Turma (Pós-Diagnóstico):** 3 participantes com perfis complementares (1 usuário diário/técnico da área de Engenharia Elétrica e Automação; 1 usuário semanal focado em estudos; 1 usuário eventual explorando possibilidades).
* **Modalidade:** Presencial em Laboratório de Informática (Mentoria de Alta Proximidade)
* **Softwares Utilizados:** ChatGPT, Google Gemini, Microsoft Copilot e Claude + Template do Portfólio Digital

---

## 1. Mapa de Calibragem Pedagógica (Diagnóstico ➔ Ação Docente)

Com base no **Relatório de Análise do Diagnóstico Inicial (N = 3)**, este encontro foi desenhado cirurgicamente para corrigir os pontos cegos identificados e potencializar os hábitos positivos já existentes na turma:

| Achado do Diagnóstico | Evidência nos Dados | Intervenção Direta no Encontro 2 |
| :--- | :--- | :--- |
| **1. Confusão: IA = Buscador da Internet** | **66,7% (2 de 3)** acham que o ChatGPT/Claude "busca respostas prontas na internet" (Pergunta 11). | **Ato 1:** Desconstruir o mito do "buscador". Explicar de forma acessível **Redes Neurais** (atendendo à Pergunta 14) e geração probabilística token a token vs. índice de links do Google. |
| **2. Ponto Cego Crítico em Privacidade** | **66,7% (2 de 3)** não se preocupam com privacidade e **33,3% (1)** não sabe o que evitar (Pergunta 10). | **Ato 2:** Oficina imediata de **"Blindagem de Conta"** (desativar treinamento de dados no ChatGPT) + **Regra do Semáforo de Dados** (dados pessoais, segredos industriais de engenharia e senhas). |
| **3. Falta de Contexto nos Comandos** | **66,7% (2 de 3)** só fazem pedidos simples (P4) e nunca/raramente dão contexto (P9). **1 aluno** preferiu o pedido genérico de saúde (P8). | **Ato 2 e 3:** Demonstração ao vivo comparando exatamente os casos do diagnóstico (Alimentação Saudável e Cronograma de Estudos) antes e depois de aplicar a estrutura **PCTFR** (Papel, Contexto, Tarefa, Formato, Restrições). |
| **4. Alucinação e Revisão de Texto vs. Checagem de Fato** | **100%** revisam o texto (P13), mas **1 nunca ouviu falar** em alucinação e **1 nunca percebeu** (P7). | **Ato 2:** Usar o caso real do **Driver A4899 / A4988** (Pergunta 15) para provar que *"revisar se o texto está bonito não impede um curto-circuito"*: a IA pode inventar uma pinagem falsa se o código do chip tiver 1 dígito trocado! |
| **5. Heterogeneidade de Frequência e Interesses** | 1 usa todo dia, 1 toda semana, 1 raramente (P1). Interesses vão de *"Usos possíveis"* a *"Redes neurais por trás"* (P14). | **Ato 3:** Atividade prática em camadas (Desafios Cotidianos, Acadêmicos e Técnicos/Profissionais) aproveitando o formato de **3 alunos** para tutoria individualizada por Laura e Maria. |

---

## 2. Objetivos de Aprendizagem do Encontro 2

Ao final destas 3 horas, cada participante será capaz de:
1. **Diferenciar na prática** um mecanismo de busca (Google) de um Modelo de Linguagem Grande (LLM como ChatGPT, Gemini, Claude e Copilot), compreendendo o papel básico das **redes neurais** e da predição probabilística.
2. **Configurar a privacidade** nas principais plataformas de IA Generativa e aplicar o protocolo de proteção de dados sensíveis/profissionais antes de enviar qualquer prompt.
3. **Transformar pedidos vagos em prompts estruturados** utilizando os 5 elementos essenciais: **P**apel, **C**ontexto, **T**arefa, **F**ormato e **R**estrições (Framework PCTFR).
4. **Distinguir edição textual de verificação factual**, identificando alucinações técnicas ou bibliográficas e utilizando estratégias de iteração/refinamento quando a primeira resposta não for satisfatória.

---

## 3. Metáforas e Explicações Sob Medida para a Turma

Para atender simultaneamente quem busca **"Usos possíveis"** e quem quer entender **"As redes neurais por trás"**:

> 🧠 **1. O Bibliotecário (Google) vs. O Escritor Improvisador (ChatGPT/Claude):**
> * **Buscador (Google):** É um bibliotecário ultrarrápido. Quando você pede algo, ele corre pelas prateleiras da internet, pega os livros/sites que já existem e te entrega a lista de páginas. Ele não escreve nada do zero.
> * **IA Generativa (LLM):** É um escritor que leu bilhões de textos durante anos de estudo (treinamento), guardou as conexões estatísticas entre os conceitos na memória (os pesos da **Rede Neural**) e agora está numa sala trancada escrevendo uma resposta inédita palavra por palavra com base no que faz mais sentido estatístico.
> * **Consequência prática:** Como ele constrói a frase por probabilidade (e não copiando de um arquivo oficial), se ele não souber um detalhe exato — como um pino de um circuito eletrônico ou uma data — ele pode "chutar" algo que **soa muito técnico e convincente, mas é inventado (Alucinação)**!

> 🔌 **2. Como funcionam "As Redes Neurais por trás" (Pílula Técnica Acessível):**
> * Imagine uma fábrica com milhares de pequenos interruptores (neurônios matemáticos) organizados em camadas.
> * Na **1ª camada**, o texto que você digitou é quebrado em pedacinhos chamados **tokens** (sílabas ou palavras) e transformado em números.
> * Nas **camadas do meio (Camadas Ocultas)**, a rede calcula a proximidade de significado: ela sabe que a palavra *"motor"* está matematicamente perto de *"driver"*, *"tensão"* e *"pino"*, mas longe de *"alface"*.
> * Na **última camada**, ela sorteia qual é a próxima palavra com maior probabilidade de completar o raciocínio. Quanto mais **contexto** você dá no prompt, mais você "acende" apenas a região certa da rede neural, evitando respostas genéricas!

> 🛡️ **3. A Regra do Cartão-Postal (Privacidade):**
> * Tudo o que você digita em uma IA gratuita com configuração padrão é como escrever atrás de um **cartão-postal aberto**: pode ser lido por revisores da empresa ou absorvido para treinar a próxima versão do modelo. Nunca coloque no prompt o que você não colocaria num mural público (CPFs, senhas, nomes reais de clientes ou esquemas confidenciais da empresa).

---

## 4. Cronograma Detalhado da Sequência Didática (180 minutos)

```
[00:00 - 00:45] Bloco 1: Devolutiva do Diagnóstico, Buscador vs. LLM & Redes Neurais (45 min)
[00:45 - 01:15] Bloco 2: Panorama de Ferramentas, Privacidade & Demo "Antes vs. Depois" (30 min)
[01:15 - 01:30] Intervalo Pedagógico & Café (15 min)
[01:30 - 02:40] Bloco 3: Laboratório Mão na Massa: Do Pedido Simples ao Prompt Completo (70 min)
[02:40 - 03:00] Bloco 4: Auditoria Cruzada, Revisão vs. Checagem & Fechamento (20 min)
```

---

### BLOCO 1: Devolutiva Acolhedora, Buscador vs. LLM & Redes Neurais (00:00 – 00:45 | 45 min)

#### Etapa 1.1: Devolutiva Positiva do Diagnóstico (10 min | 00:00 - 00:10)
* **Condução (Laura & Maria):**
  * Mostrar à turma que as respostas do formulário diagnóstico foram lidas com atenção e guiarão a aula de hoje.
  * **Elogiar os 2 grandes pontos fortes da turma:**
    1. *100% da turma não aceita a primeira resposta de olhos fechados* — todos leem, ajustam ou reformulam o pedido quando sai ruim (Perguntas 5 e 13).
    2. *100% sabem que a IA pode cometer erros* (Pergunta 6).
  * Anunciar que hoje vamos responder às duas grandes curiosidades da turma: **"Quais são os usos possíveis no dia a dia/trabalho"** e **"Como funcionam as redes neurais por trás"**.

#### Etapa 1.2: IA Generativa NÃO é um Buscador! E o que são Redes Neurais? (20 min | 00:10 - 00:30)
* **Exposição Dialogada:**
  * Abordar a **Pergunta 11 do diagnóstico**: Por que é tão fácil confundir o ChatGPT com o Google?
  * Explicar a diferença entre **Buscar páginas existentes (Google)** vs. **Gerar texto novo por probabilidade (ChatGPT/Claude/Gemini)**.
  * **Explicação visual das Redes Neurais:** Mostrar como o modelo transforma palavras em coordenadas numéricas (vetores/embeddings) e prevê o próximo token.
  * Mostrar por que, quando fazemos um pedido sem contexto (*"Me dê dicas de alimentação saudável"*), a rede neural ativa o "caminho médio mais genérico possível".

#### Etapa 1.3: O Fenômeno da Alucinação — O Caso Real do Componente `A4899` vs `A4988` (15 min | 00:30 - 00:45)
* **Conexão com a Pergunta 7 e a Pergunta 15 (Exemplo 2 do Diagnóstico):**
  * Projetar (sem citar nomes, valorizando a excelência da pergunta!) o exemplo técnico trazido no diagnóstico: o pedido sobre a pinagem do driver de motor **A4899**.
  * **Revelação didática poderosa:** Na eletrônica de automação/impressoras 3D, o driver clássico da Allegro chama-se **A4988** (e não A4899!).
  * **Pergunta para a turma:** *"O que um buscador (Google) faz se você digitar A4899? Ele diz 'Você quis dizer A4988?' ou mostra poucos resultados. E o que uma IA Generativa pode fazer se não tomar cuidado?"*
  * Ela pode **alucinar** que o "A4899" existe e inventar uma tabela de pinos (VDD, GND, STEP, DIR) misturada que, na bancada real, queima o componente!
  * **Regra de Ouro nº 1:** *"Ler e ajustar o português da resposta (Pergunta 13) deixa o texto bonito, mas NÃO garante que o dado técnico seja verdadeiro. Dados críticos exigem conferência na fonte oficial (datasheet, lei, artigo original)."*

---

### BLOCO 2: Ecossistema de Ferramentas, Privacidade & Demonstração Ao Vivo (00:45 – 01:15 | 30 min)

#### Etapa 2.1: As 4 Grandes Plataformas & Blindagem de Privacidade (15 min | 00:45 - 01:00)
* **Panorama das ferramentas que a turma já conhece (Pergunta 2):**
  * **ChatGPT (OpenAI):** O mais versátil para estruturação de textos, raciocínio e rotina.
  * **Google Gemini:** Forte integração com Google Workspace (Docs, Gmail, Drive) e busca rápida.
  * **Microsoft Copilot:** Integrado ao Windows/Edge e pacote Office, ótimo para buscar com links citados.
  * **Claude (Anthropic):** Excelente qualidade de redação natural, leitura de PDFs longos e programação/engenharia.
* **Prática Imediata de Privacidade (Resolvendo a Pergunta 10):**
  * Projetar a tela do ChatGPT: `Configurações (Settings) ➔ Controle de Dados (Data Controls) ➔ Melhorar o modelo para todos (Improve the model for everyone) [Ativar/Desativar]` e mostrar o **Chat Temporário (Temporary Chat)**.
  * **Técnica da Anonimização:** Como pedir ajuda sobre um documento de trabalho trocando nomes reais por `[EMPRESA A]`, `[CLIENTE X]` e valores fictícios.

#### Etapa 2.2: Demonstração Guiada "Antes vs. Depois" com a Ficha PCTFR (15 min | 01:00 - 01:15)
* Apresentar a fórmula prática de 5 passos para sair do "pedido simples" (Pergunta 4) para o "comando de alta precisão":
  * **[P] Papel:** Quem a IA deve ser? (*Ex: Nutricionista prático / Mentor de estudos / Engenheiro sênior*)
  * **[C] Contexto:** Qual é a minha situação real, meu nível atual e minha limitação de tempo?
  * **[T] Tarefa:** O que exatamente ela deve fazer? (Verbo de ação claro)
  * **[F] Formato:** Como quero a entrega? (*Tabela, lista de tópicos, passo a passo, checklist*)
  * **[R] Restrições:** O que ela NÃO deve fazer ou qual limite respeitar? (*Sem ingredientes caros, máximo de 20 min de preparo, avise se não tiver certeza da pinagem*)
* **Teste Ao Vivo no Projetor (Casos do Diagnóstico):**
  1. **Caso Alimentação (Pergunta 8):** Rodar *"Me dê dicas de alimentação saudável"* vs. o prompt completo com rotina de trabalho e 20 min de cozinha. Comparar na tela a diferença brutal de utilidade!
  2. **Caso Cronograma de Estudos (Pergunta 15 - Exemplo 1):** Pegar a frase *"Monte um cronograma de estudos para revisão de acordo com o material"* e aplicar o PCTFR ao vivo com a turma.

---

### INTERVALO PEDAGÓGICO (01:15 – 01:30 | 15 min)
* Pausa para café e conversa informal. As docentes verificam se os 3 alunos estão logados no ChatGPT e com o documento do Portfólio Digital aberto.

---

### BLOCO 3: Laboratório Prático "Do Pedido Simples ao Prompt Mestre" (01:30 – 02:40 | 70 min)

Como a turma tem **3 participantes**, a dinâmica de co-docência (Laura & Maria) permite acompanhamento individualizado lado a lado em 3 missões práticas no Portfólio Digital (valendo **0,5 ponto**):

#### Missão 1: Blindagem de Privacidade e Comparação Buscador vs. Gerador (15 min | 01:30 - 01:45)
1. O aluno acessa as Configurações de Dados do ChatGPT, localiza a opção de privacidade/treinamento e tira dúvidas.
2. Faz uma mesma pergunta específica no **Google** e no **ChatGPT**, registrando em 2 linhas no Portfólio qual foi a diferença na forma como cada ferramenta entregou a resposta.

#### Missão 2: Transformação Antes vs. Depois com PCTFR (30 min | 01:45 - 02:15)
Cada aluno escolhe **1 problema real da sua rotina** (Estudos, Trabalho Técnico ou Vida Cotidiana — ampliando os *"Usos possíveis"* da Pergunta 3 e 14):
1. **Passo A (Prompt Simples):** Digita no ChatGPT o pedido de 1 linha como faria normalmente (sem contexto) e cola a resposta obtida no Portfólio.
2. **Passo B (Aplicação do PCTFR):** Preenche a tabela dos 5 elementos (**P**apel, **C**ontexto, **T**arefa, **F**ormato, **R**estrições) e envia o novo prompt completo em um novo chat.
3. **Passo C (Análise Comparativa):** Cola a segunda resposta e destaca o que mudou na qualidade e utilidade prática.

#### Missão 3: Iteração Guiada e Teste de Verificação / Anti-Alucinação (25 min | 02:15 - 02:40)
Aproveitando que todos já tentam reformular ou pedir correções (Pergunta 5):
1. **Refinamento em 2º Turno:** Em vez de aceitar a resposta da Missão 2 ou apagar tudo, o aluno envia um comando de ajuste cirúrgico (*"Gostei da tabela, mas agora adapte a coluna X para [nova restrição] e adicione um exemplo prático"*).
2. **Auditoria de Confiabilidade:** O aluno pede para a IA listar as fontes ou especificações técnicas do que afirmou e confere pelo menos **1 informação crítica** fora da IA (no Google/documentação oficial), anotando se a IA acertou ou alucinou.

---

### BLOCO 4: Roda de Socialização, Síntese & Fechamento (02:40 – 03:00 | 20 min)

* **02:40 - 02:52 (12 min):** **Show & Tell dos 3 Participantes:**
  * Como são 3 alunos, cada um tem 3 a 4 minutos para comentar ou mostrar qual caso testou na Missão 2 e qual foi a diferença entre o prompt simples e o prompt com contexto (PCTFR).
* **02:52 - 03:00 (8 min):** **Fechamento e Ponte para o Encontro 3:**
  * Recapitulação dos 4 pilares vencidos hoje:
    1. *IA não é buscador: é gerador probabilístico baseado em redes neurais.*
    2. *Contexto transforma respostas genéricas em soluções sob medida (PCTFR).*
    3. *Privacidade: nada de dados sensíveis ou segredos profissionais no prompt.*
    4. *Revisar o português ≠ checar a verdade (cuidado com as alucinações!).*
  * **Spoiler do Encontro 3 (30 de Outubro):** Aprofundamento na Engenharia de Prompt — como dar exemplos para a IA imitar seu estilo (*Few-Shot*), como dividir problemas grandes em etapas e como criar assistentes especialistas!

---

## 5. Folha de Apoio Docente: Exemplos Prontos para Usar na Aula

Para facilitar a mediação de Laura e Maria durante o laboratório com os 3 perfis da turma, aqui estão 3 cartões de bolso calibrados com o diagnóstico:

### Card 1 — Foco em Estudos e Organização (Perfil Acadêmico)
* ❌ **Pedido Simples (Sem Contexto):**
  > *"Monte um cronograma de estudos para revisão de acordo com o material."*
* ✅ **Prompt Estruturado (PCTFR):**
  > **Papel:** Atue como um tutor especialista em organização de estudos universitários.
  > **Contexto:** Tenho uma prova importante daqui a 7 dias sobre [Tema] e disponho de apenas 1h30 por noite (de segunda a sexta) e 3h no sábado. Tenho facilidade com leitura, mas dificuldade em memorizar fórmulas/conceitos abstratos.
  > **Tarefa:** Monte um cronograma de revisão ativa para esses 6 dias de estudo.
  > **Formato:** Apresente em uma tabela com as colunas: Dia, Tópico Prioritário, Técnica de Estudo Sugerida (ex: resumo, exercícios, explicação em voz alta) e Tempo em minutos.
  > **Restrições:** Reserve os últimos 20 minutos de cada dia para resolução de questões práticas e não ultrapasse o limite de horas diárias.

### Card 2 — Foco Técnico / Engenharia e Automação (Perfil Profissional)
* ❌ **Pedido Simples (Com Risco de Alucinação):**
  > *"Qual é a pinagem do driver A4899 para ligar num motor?"*
* ✅ **Prompt Estruturado e Blindado contra Alucinação (PCTFR):**
  > **Papel:** Atue como um engenheiro eletricista sênior especialista em automação industrial e controle de motores de passo.
  > **Contexto:** Sou engenheiro eletricista e estou projetando um circuito de acionamento de motor de passo com microcontrolador. Tenho conhecimentos básicos do módulo driver, mas preciso mapear as conexões com segurança.
  > **Tarefa:** Primeiro, verifique se o código do componente é A4899 ou A4988 (Allegro). Em seguida, explique a função de cada grupo de pinos (Alimentação lógica VDD, Alimentação do motor VMOT, Controle STEP/DIR, Microstepping MS1-MS3 e Bobinas 1A/1B/2A/2B).
  > **Formato:** Uma tabela técnica organizada por grupo funcional + uma lista de 3 cuidados elétricos obrigatórios antes de energizar a bancada (ex: capacitor de desacoplamento e ajuste de corrente Vref).
  > **Restrições:** Se houver qualquer incerteza sobre a numeração física dos pinos, avise explicitamente para consultar o datasheet oficial da Allegro para evitar queima do componente.

### Card 3 — Foco Cotidiano, Criativo e Novos Usos (Perfil Explorador)
* ❌ **Pedido Simples:**
  > *"Me dê dicas de alimentação saudável."*
* ✅ **Prompt Estruturado (PCTFR):**
  > **Papel:** Atue como um planejador culinário prático focado em rotina corrida.
  > **Contexto:** Trabalho fora o dia todo, chego em casa cansado às 19h30 e tenho no máximo 25 minutos para preparar o jantar. Quero comer de forma mais equilibrada usando ingredientes simples de feira/supermercado comum no Brasil.
  > **Tarefa:** Crie um cardápio de jantares para 3 dias da semana, acompanhado da lista de compras exata.
  > **Formato:** 1) Tabela com os 3 dias (Prato, Tempo de preparo e Modo de fazer em 3 passos); 2) Checklist de compras separado por setor (hortifrúti, proteínas, despensa).
  > **Restrições:** Não inclua ingredientes caros ou difíceis de achar e evite receitas que sujem mais de duas panelas.

---

## 6. Rubrica de Avaliação da Atividade 2 (Portfólio Digital — 0,5 ponto)

| Critério | Pontuação | O que observar na entrega do aluno |
| :--- | :---: | :--- |
| **1. Diferenciação Buscador vs. Gerador** | **0,15 pt** | O aluno registrou a diferença prática entre pesquisar links no Google e gerar uma resposta sintetizada no ChatGPT. |
| **2. Evolução do Prompt (Antes vs. Depois com Contexto)** | **0,20 pt** | O segundo prompt inclui claramente contexto, objetivo específico e formato desejado, superando o pedido inicial de 1 linha. |
| **3. Refinamento e Checagem Crítica** | **0,15 pt** | O aluno realizou pelo menos 1 pedido de ajuste na resposta e conferiu se havia alguma imprecisão/alucinação ou cuidado de privacidade. |
| **TOTAL DA ATIVIDADE 2** | **0,50 pt** | Soma cumulativa no Portfólio Digital Contínuo. |

---

## 7. Checklist Pré-Aula para a Dupla Docente (Laura & Maria)

- [ ] Testar o projetor com a comparação lado a lado: Google vs. ChatGPT.
- [ ] Deixar abertas as telas de **Configurações de Privacidade** do ChatGPT para mostrar onde desativar o uso de dados para treinamento.
- [ ] Ter os 3 exemplos do diagnóstico (Alimentação, Cronograma de Estudos e Driver A4988) prontos no bloco de notas do Cockpit para colar ao vivo durante a demonstração.
- [ ] Garantir que os 3 participantes tenham acesso ao seu arquivo do **Portfólio Digital** iniciado no Encontro 1.
