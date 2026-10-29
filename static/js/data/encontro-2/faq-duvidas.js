/**
 * Módulo 2 – Perguntas dos Alunos, Dúvidas Clássicas e Armadilhas Pedagógicas
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const perguntasAlunos = [
  {
    numero: 1,
    duvida: "Qual é a diferença real entre o ChatGPT, o Gemini e o Copilot?",
    resposta: "Todos são interfaces baseadas em Large Language Models (LLMs), mas foram treinados por empresas diferentes (OpenAI, Google e Microsoft) com conjuntos de dados, alinhamentos e integrações distintas. O ChatGPT destaca-se pela versatilidade em conversação e raciocínio textual; o Gemini integra-se fortemente ao ecossistema Google e pesquisa em tempo real; o Copilot conecta-se aos aplicativos da Microsoft e ambiente Web.",
    pontoDidatico: "Destaque que o fundamento da tecnologia (Transformer/Tokens) é similar em todos, mudando a interface e os pontos fortes."
  },
  {
    numero: 2,
    duvida: "Preciso pagar a versão 'Plus' ou 'Pro' para conseguir usar a IA no dia a dia?",
    resposta: "Não. Para a imensa maioria das tarefas cotidianas, pedagógicas, de escrita e de produtividade, as versões gratuitas disponibilizadas atualmente atendem com excelente qualidade. As assinaturas pagas trazem prioritariamente modelos de raciocínio mais recentes, maiores limites de uso e recursos avançados de análise de dados pesados.",
    pontoDidatico: "Tranquilize a turma quanto ao custo financeiro: todo o aprendizado deste curso é 100% praticável em planos gratuitos."
  },
  {
    numero: 3,
    duvida: "A IA guarda tudo o que eu digito para treinar as próximas versões?",
    resposta: "Por padrão, contas gratuitas podem utilizar interações para refinamento contínuo dos modelos, a menos que o usuário desative essa opção nas configurações de privacidade de dados. Por essa razão, a regra de ouro é nunca inserir senhas, dados bancários ou informações sensíveis/pessoais de terceiros nos prompts.",
    pontoDidatico: "Reforce a cultura de responsabilidade e privacidade de dados (LGPD) aprendida no Encontro 1."
  },
  {
    numero: 4,
    duvida: "Por que às vezes a IA responde algo completamente errado com tanta segurança?",
    resposta: "Porque a IA não tem um modelo de mundo ou compromisso intrínseco com a verdade: ela prevê a sequência de palavras que soa mais coerente estatisticamente para o prompt recebido. Quando falta informação factual no treinamento ou o prompt é ambíguo, ela preenche a lacuna prevendo tokens verossímeis, gerando o que chamamos de alucinação.",
    pontoDidatico: "Ensine os alunos a adotarem sempre a postura de copiloto e revisor crítico da resposta (Human-in-the-loop)."
  }
];

