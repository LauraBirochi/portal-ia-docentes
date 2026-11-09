/**
 * Base de Dados Unificada – Módulo do Encontro 3 (1 Slides)
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 * 
 * ARQUIVO GERADO AUTOMATICAMENTE POR: scripts/build_data.py
 * FONTE ÚNICA DA VERDADE: static/js/data/encontro-3/
 * Edite os submódulos em static/js/data/encontro-3/ e execute 'python scripts/build_data.py'
 */

(function (global) {
  'use strict';

  // 1. Dossiês Científicos e Jurídicos
  /**
 * Módulo 3 – Dossiês de Embasamento
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

const dossies = {};

  // 2. Metadados Curriculares e Blocos Temáticos
  /**
 * Módulo 3 – Metadados Curriculares
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

const moduloInfo = {
  numero: 3,
  total: 7,
  data: "06/11",
  titulo: "Aula privada com aluno",
  subtitulo: "Sessão individual / atendimento pedagógico reservado",
  cargaHoraria: "Encontro 3 • 3 horas presenciais (180 min)",
  modalidade: "Presencial em Laboratório de Informática",
  publico: "Atendimento individual",
  ferramentaPrincipal: "Atendimento Pedagógico Reservado",
  avaliacao: "Acompanhamento formativo individual",
  isAulaPrivada: true
};

const blocosTematicos = [
  {
    id: 1,
    icone: "🔒",
    titulo: "Aula privada com aluno",
    subtitulo: "Sessão individual / atendimento pedagógico reservado",
    slidesRange: [1, 1],
    tempoEstimado: "180 min",
    conducao: "Co-docência (Laura & Maria)"
  }
];

  // 3. Fio da Meada e Narrativa Pedagógica
  /**
 * Módulo 3 – Fio da Meada e Narrativa Pedagógica
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

const fioDaMeada = {
  isAulaPrivada: true,
  objetivoCentral: "Aula privada com aluno",
  mensagemChave: "Aula privada com aluno",
  explicacaoObjetivo: "Sessão dedicada exclusivamente ao atendimento individualizado e acompanhamento pedagógico privado com aluno.",
  atos: [],
  glossario: []
};

  // 4. Slides com Notas da Professora
  /**
 * Módulo 3 – Deck de Slides
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

const slidesComNotas = [
  {
    numero: 1,
    id: 1,
    bloco: 1,
    tipo: "capa",
    categoria: "Aula Privada",
    titulo: "Aula privada com aluno",
    subtitulo: "Encontro 3 • 06/11/2026 • Atendimento individualizado e tutoria pedagógica",
    conducao: "Co-docência (Laura & Maria)",
    detalhes: [
      "Atendimento individualizado e personalizado",
      "Acompanhamento direto e tutoria de projetos",
      "Sessão reservada para aula privada com aluno"
    ],
    notasProfessora: {
      tempoSugerido: "180 min",
      objetivoSlide: "Apresentar a destinação reservada deste encontro para aula privada com aluno.",
      conceito: {
        titulo: "Aula privada com aluno",
        definicao: "Sessão dedicada exclusivamente ao atendimento pedagógico individualizado e acompanhamento privado com aluno."
      },
      mecanica: "Registro institucional da aula privada com aluno realizada no laboratório.",
      armadilhaComum: "Nenhuma.",
      faqAlunos: [
        {
          pergunta: "Qual é a programação deste encontro?",
          resposta: "Aula privada com aluno."
        }
      ]
    }
  }
];

  // 5. Atividades Práticas e Laboratório
  /**
 * Módulo 3 – Atividades Práticas e Laboratório
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

const oficinaPratica = {
  isDiagnostica: false,
  isAulaPrivada: true,
  titulo: "Aula privada com aluno",
  tema: "Aula privada com aluno",
  duracao: "180 min",
  peso: "Atendimento Individual",
  conducao: "Co-docência (Laura & Maria)",
  ferramenta: "Atendimento Pedagógico Reservado",
  objetivo: "Aula privada com aluno",
  situacaoProblema: null,
  comoExecutar: null,
  primeiraTentativa: null,
  falsoBomPrompt: null,
  promptMestre: null,
  gabarito: null,
  desafioExtra: null
};

  // 6. Perguntas dos Alunos e Dúvidas Frequentes
  /**
 * Módulo 3 – Perguntas dos Alunos e Dúvidas Frequentes
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

const perguntasAlunos = [];

  // 7. Divisão de Papéis e Co-Docência
  /**
 * Módulo 3 – Divisão de Papéis e Co-Docência
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

const divisaoPapeis = [
  {
    bloco: "Período Completo (180 min)",
    tema: "Aula privada com aluno",
    papel: "ambas"
  }
];

  // Normalização determinística de numeração e IDs dos slides no bundle
  if (Array.isArray(slidesComNotas)) {
    slidesComNotas.forEach(function (slide, idx) {
      slide.numero = idx + 1;
      slide.id = idx + 1;
    });
  }

  const ENCONTRO_3_DATA = {
    moduloInfo: moduloInfo,
    fioDaMeada: fioDaMeada,
    blocosTematicos: blocosTematicos,
    slidesComNotas: slidesComNotas,
    oficinaPratica: oficinaPratica,
    perguntasAlunos: perguntasAlunos,
    divisaoPapeis: divisaoPapeis,
    dossies: dossies
  };

  // Exposição Global no Navegador (Window) e Node.js
  if (typeof window !== 'undefined') {
    window.ENCONTRO_3_DATA = ENCONTRO_3_DATA;
    window.CURSO_IA_CURRENT_DATA = ENCONTRO_3_DATA;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ENCONTRO_3_DATA;
  }

  global.ENCONTRO_3_DATA = ENCONTRO_3_DATA;
  global.CURSO_IA_CURRENT_DATA = ENCONTRO_3_DATA;

})(typeof window !== 'undefined' ? window : globalThis);
