/**
 * Encontro 1 – Agregador do Módulo (Manifest / Bundle)
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

import { moduloInfo, blocosTematicos } from './meta.js';
import { fioDaMeada } from './narrativa.js';
import { dossies } from './dossies.js';
import { slidesComNotas } from './deck-slides.js';
import { oficinaPratica } from './atividades.js';
import { perguntasAlunos } from './faq-duvidas.js';
import { divisaoPapeis } from './papeis.js';

export const ENCONTRO_1_DATA = {
  moduloInfo,
  fioDaMeada,
  blocosTematicos,
  slidesComNotas,
  dossies,
  oficinaPratica,
  perguntasAlunos,
  divisaoPapeis
};

// Exportações nomeadas de submódulos para consumo granular
export {
  moduloInfo,
  blocosTematicos,
  fioDaMeada,
  dossies,
  slidesComNotas,
  oficinaPratica,
  perguntasAlunos,
  divisaoPapeis
};

export default ENCONTRO_1_DATA;
