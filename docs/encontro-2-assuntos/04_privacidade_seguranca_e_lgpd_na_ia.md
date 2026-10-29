# Assunto 4: Privacidade, Segurança da Informação e LGPD no Uso de IA

**Módulo:** Encontro 2 – *Como acessar os modelos de IAGen e Criação de Prompts Básicos*  
**Bloco da Aula:** Bloco 2 (Etapa 2.1 – 10 minutos + Missão 1 do Laboratório)  
**Motivação no Diagnóstico:**  
* **Pergunta 10:** **66,7% (2 de 3 alunos)** afirmam **não se preocupar** com a privacidade ao usar IA, e **33,3% (1 aluno)** já pensou sobre o assunto, mas **não sabe bem o que deve evitar**.  
* **Alerta Pedagógico:** Este foi o maior ponto cego coletivo identificado no formulário diagnóstico (100% da turma vulnerável).

---

## 1. Visão Geral para as Docentes (Laura & Maria)

Quando conversamos com o ChatGPT, a interface de chat parece uma conversa íntima e privada de WhatsApp. Isso cria uma **falsa sensação de sigilo**. 

Como a turma inclui profissionais atuantes (como na área de engenharia e automação industrial) e estudantes, é fundamental ensinar logo no Encontro 2:
1. O que acontece nos bastidores quando apertamos `Enter` no chat;
2. Quais informações **jamais** devem ser digitadas;
3. Como usar a técnica da **Anonimização** para continuar usando a IA no trabalho com 100% de segurança;
4. Como desligar o compartilhamento de dados nas configurações da conta.

---

## 2. Para Onde Vão os Dados que Digitamos na IA?

Por padrão, nas contas gratuitas das principais plataformas (ChatGPT, Gemini, Copilot, Claude), tudo o que o usuário digita passa por dois caminhos:

1. **Processamento em Servidores na Nuvem:** O texto sai do seu computador e vai para servidores externos (geralmente nos EUA).
2. **Treinamento de Futuras Versões e Revisão Humana:** Se você não alterar as configurações padrão, os termos de uso autorizam a empresa a usar suas conversas para **treinar os próximos modelos de IA** e permitem que **avaliadores humanos terceirizados** leiam amostras de conversas para checar a qualidade das respostas do robô.

### O Caso Real da Samsung (2023) — Exemplo para Contar em Sala
* Em 2023, engenheiros da divisão de semicondutores da **Samsung** tiveram problemas com um código de equipamento industrial e com a ata de uma reunião estratégica confidencial.
* Para ganhar tempo, eles copiaram e colaram o código-fonte secreto e a transcrição da reunião dentro do ChatGPT público pedindo para a IA corrigir e resumir.
* **Resultado:** Os segredos industriais da empresa entraram na base de treinamento externa da OpenAI, gerando um incidente global de segurança da informação e levando a Samsung a bloquear o uso sem controle.

---

## 3. O Semáforo da Privacidade: O Que Evitar? (Respondendo à Pergunta 10)

Para que o aluno que respondeu *"não sei bem o que devo evitar"* (e os dois que não se preocupavam) tenham um guia claro e memorável, apresente a **Regra do Semáforo**:

| Cor | Categoria de Informação | Exemplos Práticos | Como Proceder |
| :---: | :--- | :--- | :--- |
| 🔴 **VERMELHO**<br>*(Proibido)* | **Dados Pessoais Sensíveis, Credenciais e Segredos** | • CPF, RG, endereço residencial, telefone privado;<br>• Senhas, chaves de acesso (API Keys), dados bancários;<br>• Prontuários médicos ou exames com nome de pacientes;<br>• Contratos, orçamentos internos, plantas industriais ou códigos proprietários da empresa onde trabalha. | **NUNCA digite nem anexe** esses documentos originais em IAs públicas. |
| 🟡 **AMARELO**<br>*(Com Cuidado)* | **Situações de Trabalho, Estudos ou Textos Internos** | • E-mail difícil para um cliente ou fornecedor;<br>• Relatório técnico de manutenção de um equipamento;<br>• Planilha de vendas ou dados de um projeto. | **ANONIMIZE ANTES!** Remova os nomes reais das pessoas e empresas antes de colar no chat. |
| 🟢 **VERDE**<br>*(Livre)* | **Conhecimento Público, Conceitos e Criação Geral** | • Dúvidas sobre componentes comerciais públicos (ex: datasheet do A4988);<br>• Cronogramas de estudo, resumos de artigos públicos, receitas, aprendizado de idiomas. | **Uso livre!** Aproveite todo o potencial da ferramenta. |

---

## 4. A Técnica da Anonimização (Como Usar no Trabalho Sem Risco)

Ensine aos alunos que se proteger **não significa deixar de usar a IA no trabalho**, mas sim "mascarar" os dados sensíveis em 10 segundos antes de enviar o prompt:

* ❌ **Errado (Vazando dados reais e ferindo a LGPD):**
  > *"Escreva uma notificação de cobrança para o cliente João da Silva (CPF 123.456.789-00), diretor da Metalúrgica ABC de Campinas, referente ao atraso da nota fiscal nº 4590 no valor de R$ 48.500,00 do projeto da linha de montagem Y."*
* ✅ **Certo (Prompt Anonimizado e 100% Seguro):**
  > *"Escreva um modelo de notificação formal e cordial de cobrança para o diretor `[NOME DO CLIENTE]` da empresa `[NOME DA EMPRESA]`, referente ao atraso da nota fiscal `[NÚMERO]` no valor de `[VALOR]`. Depois que você gerar o texto, eu mesmo preencho os dados reais no meu Word."*

---

## 5. Passo a Passo Prático: "Blindando sua Conta no ChatGPT"

Durante a aula (e na Missão 1 do Laboratório), guie os 3 participantes para fazerem este ajuste ao vivo em seus computadores:

```
┌────────────────────────────────────────────────────────────────────────────┐
│ PASSO A PASSO NO CHATGPT (Navegador Web)                                   │
├────────────────────────────────────────────────────────────────────────────┤
│ 1. Clique no ícone do seu Perfil (canto inferior ou superior direito).     │
│ 2. Clique em "Configurações" (Settings).                                   │
│ 3. Vá na aba "Controle de Dados" (Data Controls).                          │
│ 4. Localize a opção "Melhorar o modelo para todos"                         │
│    (Improve the model for everyone).                                       │
│ 5. Mude a chave para DESATIVADO (Off) e clique em Concluído!               │
└────────────────────────────────────────────────────────────────────────────┘
```

* **O que muda ao desativar essa chave?**
  * Você **continua tendo todo o seu histórico de conversas salvo normalmente** na barra lateral para consultar depois;
  * Porém, a OpenAI fica proibida de usar os seus textos para treinar os modelos futuros dela!
* **Bônus — O "Chat Temporário" (Temporary Chat):**
  * Mostre o botão de **Chat Temporário** (no topo da tela, onde se escolhe o modelo). Ele funciona como a "Aba Anônima" do navegador: a conversa não fica salva no histórico e é apagada após o uso.

---

## 6. Conexão com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)

* Pela **LGPD brasileira**, qualquer profissional ou estudante que lida com dados de terceiros (clientes, alunos, pacientes, colegas de trabalho) tem o dever de guarda e sigilo.
* Inserir o nome completo, CPF ou dados privados de outra pessoa em uma plataforma de IA sem autorização configura compartilhamento indevido de dados pessoais com terceiros internacionais.
* **Resumo para levar para a vida:** *"Se o dado tem dono e não é público, anonimize antes de dar o comando!"*
