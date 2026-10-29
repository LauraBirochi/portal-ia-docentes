# Assunto 2: Alucinações em IA, Verificação Factual e o Caso Técnico (`A4899` vs. `A4988`)

**Módulo:** Encontro 2 – *Como acessar os modelos de IAGen e Criação de Prompts Básicos*  
**Bloco da Aula:** Bloco 1 (Etapa 1.3 – 15 min) e Bloco 3 (Missão 3 do Laboratório)  
**Motivação no Diagnóstico:**  
* **Pergunta 6:** 100% reconhecem que a IA pode cometer erros.  
* **Pergunta 7:** 1 aluno **nunca ouviu falar** em alucinação; 1 já ouviu falar mas **nunca percebeu acontecer**; 1 já vivenciou.  
* **Pergunta 13:** 100% afirmam que *"leem e ajustam a resposta antes de utilizá-la"*.  
* **Pergunta 15 (Exemplo 2):** O pedido técnico sobre a pinagem do componente eletrônico **`A4899`** para controle de motor.

---

## 1. Visão Geral para as Docentes (Laura & Maria)

O diagnóstico revelou uma combinação muito interessante e potencialmente perigosa:
1. Todos os 3 alunos sabem que a IA pode errar e todos leem o texto antes de usar;
2. Porém, dois terços da turma ainda não dominam ou nunca flagraram uma **alucinação** na prática.

Quem apenas "lê e ajusta o texto" costuma corrigir o tom, trocar uma palavra difícil ou melhorar a gramática — mas **a alucinação da IA vem escrita em um português impecável!** Portanto, o objetivo deste assunto é ensinar a diferença entre **Revisão Textual (Forma)** e **Verificação Factual (Verdade)**.

---

## 2. O Que é uma "Alucinação" em Inteligência Artificial?

Na ciência da computação, chamamos de **alucinação** (ou *confabulação estatística*) o fenômeno em que um modelo de linguagem gera uma informação **falsa, inventada ou distorcida**, mas a apresenta com **total fluência gramatical e tom de certeza absoluta**.

### Por que a IA alucina?
1. **Ela otimiza plausibilidade, não verdade:** Como vimos no Assunto 1, a rede neural foi treinada para prever qual palavra "soa melhor" na sequência estatística, e não para consultar um banco de dados de fatos verificados.
2. **Aversão ao "Eu não sei":** Durante o treinamento, os modelos aprendem a ser prestativos e completar padrões. Quando você faz uma pergunta sobre algo muito específico, raro ou com um pequeno erro na pergunta, o modelo tende a "preencher as lacunas" inventando detalhes que parecem verossímeis.
3. **Compressão com perdas:** Os bilhões de textos lidos no treinamento não ficam guardados letra por letra; eles viram uma "lembrança estatística nebulosa". Por isso, a IA é excelente para explicar conceitos gerais, mas falha em números de páginas, links exatos, artigos de leis ou numeração física de pinos de um chip.

---

## 3. Estudo de Caso Real da Turma: O Chip `A4899` vs. `A4988`

No formulário diagnóstico (Pergunta 15, Exemplo 2), um participante escreveu um excelente prompt contextualizado:
> *Contexto:* Engenheiro eletricista em automação industrial.  
> *Objetivo:* Compreender a pinagem do componente **A4899** para utilizá-lo como driver em um circuito de motor.

### Por que esse exemplo é uma aula viva perfeita sobre IA?
1. **O Ponto Forte do Prompt:** O participante deu um contexto exemplar (disse sua formação, área de atuação, objetivo do circuito e seu nível de conhecimento prévio).
2. **A Armadilha Sutil do Código:** Na eletrônica de potência e automação (muito comum em CNCs, robótica e impressoras 3D), o clássico circuito integrado *microstepping motor driver* da fabricante Allegro Microsystems é o **A4988** (com dois oitos no final), enquanto **A4899** é uma inversão numérica de digitação muito comum!
3. **Como a IA reage a isso?**
   * **Se o modelo for induzido pela pergunta:** Uma IA menos cautelosa aceita a premissa do usuário (*"já que o engenheiro pediu o A4899, vou falar sobre o A4899"*) e monta uma tabela de pinos misturando características de outros componentes.
   * **O Risco Físico Real:** Em um texto de história, uma alucinação gera uma nota baixa. Na engenharia elétrica, ligar a alimentação de potência (`VMOT` de 12V/24V) no pino lógico de `3.3V/5V` ou inverter `GND` por causa de uma pinagem alucinada **queima o driver e o microcontrolador na hora!**

---

## 4. Os 4 Tipos Mais Comuns de Alucinação para Mostrar em Sala

| Tipo de Alucinação | Como aparece na prática | Exemplo Clássico |
| :--- | :--- | :--- |
| **1. Citações e Fontes Fantasmas** | A IA inventa nomes de livros, artigos científicos, autores reais com títulos falsos ou links (URLs) que dão "Erro 404". | Pedir *"Me dê 3 artigos acadêmicos com link sobre automação"* e descobrir no Google Acadêmico que os artigos nunca existiram. |
| **2. Dados Técnicos / Numéricos Trocados** | A IA acerta a explicação geral do funcionamento, mas troca números de pinos, valores de resistores, datas históricas ou números de leis. | Explicar perfeitamente como funciona um motor de passo, mas errar qual pino é o `ENABLE` e qual é o `STEP`. |
| **3. Concordância com Premissa Falsa** | O usuário faz uma pergunta com um erro embutido e a IA inventa uma justificativa para concordar com o usuário. | Perguntar *"Por que a Lei Brasileira proíbe usar lâmpadas LED verdes em escritórios?"* e a IA inventar uma lei falsa para explicar. |
| **4. Raciocínio Lógico / Matemático Aparente** | A explicação parece passo a passo correta, mas o resultado da conta no final está errado (porque ela prevê texto, não usa calculadora). | Pedir para somar uma lista de 15 despesas do mês diretamente no texto sem ativar ferramenta de código. |

---

## 5. Revisar a Redação vs. Verificar a Informação (Pergunta 13)

Todos os 3 participantes responderam na Pergunta 13 que **"leem e ajustam a resposta antes de utilizá-la"**. Na aula, vamos elevar esse hábito do Nível 1 para o Nível 2:

```
┌─────────────────────────────────────────┐       ┌─────────────────────────────────────────┐
│     NÍVEL 1: REVISÃO DE TEXTO (Forma)   │       │  NÍVEL 2: AUDITORIA DE FATO (Verdade)   │
├─────────────────────────────────────────┤       ├─────────────────────────────────────────┤
│ • "O texto ficou claro e bem escrito?"  │  ──►  │ • "Esse código/lei/autor existe mesmo?" │
│ • "O tom está adequado para meu chefe?" │       │ • "Conferi o dado crítico no manual/    │
│ • "Tirei as palavras robóticas da IA?"  │       │    datasheet ou site oficial?"          │
└─────────────────────────────────────────┘       └─────────────────────────────────────────┘
```

---

## 6. Três Técnicas Práticas Anti-Alucinação (Para Ensinar Hoje)

1. **Dar "Permissão para a IA Duvidar" (Restrição no Prompt):**
   * Adicione sempre no final de prompts técnicos:
     > *"Se você não tiver 100% de certeza sobre algum dado exato (como numeração de pinos, datas ou artigos de lei), avise explicitamente o que precisa ser conferido no documento oficial e não invente."*
2. **Fornecer o Material-Base no Próprio Prompt (Grounding):**
   * Em vez de pedir para a IA tirar da "memória" dela a pinagem do chip ou o conteúdo da apostila de estudos, **copie e cole o texto do manual/apostila (ou anexe o PDF)** e diga: *"Responda APENAS com base no documento anexado"*. Quando a IA lê o documento na hora, a taxa de alucinação cai drasticamente!
3. **Regra da Fonte Primária (Checagem Cruzada):**
   * Use a IA para **entender a lógica** (ex: *"como funciona o controle de corrente num driver de motor"* ou *"como estruturar meu plano de estudos"*), mas confirme **parâmetros críticos** no Google/Datasheet oficial.

---

## 7. Referências de Embasamento para as Docentes

1. **Ji, Z. et al. (2023).** *Survey of Hallucination in Natural Language Generation*. ACM Computing Surveys, 55(12). — Revisão científica abrangente sobre causas e taxonomias de alucinações em LLMs.
2. **OpenAI (2024).** *Why language models hallucinate and how to mitigate it with retrieval and prompting*. OpenAI Documentation.
3. **Allegro MicroSystems.** *A4988 Datasheet: DMOS Microstepping Driver with Translator and Overcurrent Protection*. — Documento oficial para mostrar na tela em 30 segundos durante a aula.
