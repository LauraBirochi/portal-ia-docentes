/**
 * Módulo do Apresentador de Slides Integrado às Notas da Professora
 * Portal de Apoio Docente – Curso de IA
 */

class SlidePresenter {
  constructor(slidesComNotas, containerElementId) {
    this.slides = slidesComNotas;
    this.container = document.getElementById(containerElementId);
    this.currentIndex = 0;
    this.isFullscreen = false;
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  getCurrentSlide() {
    return this.slides[this.currentIndex];
  }

  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
      this.render();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.render();
    }
  }

  goTo(index) {
    if (index >= 0 && index < this.slides.length) {
      this.currentIndex = index;
      this.render();
    }
  }

  toggleFullscreen() {
    if (!this.container) return;
    const box = this.container.querySelector('.slide-presentation-box') || this.container;
    if (!document.fullscreenElement) {
      if (box.requestFullscreen) {
        box.requestFullscreen().catch(() => {
          box.classList.toggle('fullscreen');
        });
      } else {
        box.classList.toggle('fullscreen');
      }
      this.isFullscreen = true;
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      this.isFullscreen = false;
    }
  }

  bindEvents() {
    // 1. Botões de navegação
    const btnPrev = document.getElementById('btn-slide-prev');
    const btnNext = document.getElementById('btn-slide-next');
    const btnFullscreen = document.getElementById('btn-slide-fullscreen');

    if (btnPrev) {
      btnPrev.onclick = (e) => {
        e.preventDefault();
        this.prev();
      };
    }
    if (btnNext) {
      btnNext.onclick = (e) => {
        e.preventDefault();
        this.next();
      };
    }
    if (btnFullscreen) {
      btnFullscreen.onclick = (e) => {
        e.preventDefault();
        this.toggleFullscreen();
      };
    }

    // 2. Atalhos de teclado
    document.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        this.next();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        this.prev();
      } else if (e.key.toLowerCase() === 'f') {
        this.toggleFullscreen();
      }
    });

    document.addEventListener('fullscreenchange', () => {
      const box = this.container ? this.container.querySelector('.slide-presentation-box') : null;
      if (box) box.classList.toggle('fullscreen', !!document.fullscreenElement);
    });
  }

  render() {
    if (!this.container || !this.slides || this.slides.length === 0) return;
    const slide = this.getCurrentSlide();
    const stage = this.container.querySelector('.slide-canvas');
    const counter = document.getElementById('slide-counter-badge');
    const notesPanel = document.getElementById('teacher-notes-content');
    const btnPrev = document.getElementById('btn-slide-prev');
    const btnNext = document.getElementById('btn-slide-next');

    if (counter) {
      counter.textContent = `Slide ${this.currentIndex + 1} de ${this.slides.length}`;
    }

    if (btnPrev) {
      btnPrev.disabled = this.currentIndex === 0;
      btnPrev.style.opacity = this.currentIndex === 0 ? '0.5' : '1';
      btnPrev.style.cursor = this.currentIndex === 0 ? 'not-allowed' : 'pointer';
    }

    if (btnNext) {
      btnNext.disabled = this.currentIndex === this.slides.length - 1;
      btnNext.style.opacity = this.currentIndex === this.slides.length - 1 ? '0.5' : '1';
      btnNext.style.cursor = this.currentIndex === this.slides.length - 1 ? 'not-allowed' : 'pointer';
    }

    if (!stage) return;

    // 1. Renderizar Conteúdo Visual do Slide
    let slideHtml = '';

    if (slide.tipo === 'capa') {
      slideHtml = `
        <div class="slide-tag">${slide.categoria}</div>
        <h1 class="slide-heading" style="font-size: 2.1rem;">${slide.titulo}</h1>
        <p class="slide-subheading" style="color: var(--ocean-teal);">${slide.subtitulo}</p>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1.5rem;">
          ${slide.detalhes.map(d => `<span class="chip chip-teal">${d}</span>`).join('')}
        </div>
      `;
    } else if (slide.tipo === 'conteudo') {
      slideHtml = `
        <div class="slide-tag">${slide.categoria}</div>
        <h2 class="slide-heading">${slide.titulo}</h2>
        <p class="slide-subheading">${slide.subtitulo}</p>
        <div class="slide-columns">
          ${slide.colunas.map(col => `
            <div class="slide-panel">
              <div class="slide-panel-title">${col.icone} ${col.tag}</div>
              <ul class="slide-bullets">
                ${col.itens.map(it => `<li>${it}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      `;
    } else if (slide.tipo === 'comparativo') {
      slideHtml = `
        <div class="slide-tag">${slide.categoria}</div>
        <h2 class="slide-heading">${slide.titulo}</h2>
        <p class="slide-subheading">${slide.subtitulo}</p>
        <div class="slide-columns">
          <div class="slide-panel">
            <div class="slide-panel-title">⚙️ ${slide.caixa1.titulo}</div>
            <div class="slide-formula">${slide.caixa1.formula}</div>
            <p style="font-size: 0.85rem; margin-bottom: 0.35rem;"><strong>Analogia:</strong> ${slide.caixa1.analogia}</p>
            <p style="font-size: 0.8rem; color: var(--text-muted);"><strong>Exemplo:</strong> ${slide.caixa1.exemplo}</p>
          </div>
          <div class="slide-panel" style="border-color: var(--ocean-teal);">
            <div class="slide-panel-title" style="color: var(--ocean-teal);">🧠 ${slide.caixa2.titulo}</div>
            <div class="slide-formula" style="color: var(--ocean-teal); background-color: var(--ocean-teal-subtle);">${slide.caixa2.formula}</div>
            <p style="font-size: 0.85rem; margin-bottom: 0.35rem;"><strong>Analogia:</strong> ${slide.caixa2.analogia}</p>
            <p style="font-size: 0.8rem; color: var(--text-muted);"><strong>Exemplo:</strong> ${slide.caixa2.exemplo}</p>
          </div>
        </div>
      `;
    } else if (slide.tipo === 'timeline') {
      slideHtml = `
        <div class="slide-tag">${slide.categoria}</div>
        <h2 class="slide-heading">${slide.titulo}</h2>
        <p class="slide-subheading">${slide.subtitulo}</p>
        <div class="slide-timeline">
          ${slide.marcos.map(m => `
            <div class="timeline-step">
              <span class="timeline-year">${m.ano}</span>
              <strong style="font-size: 0.9rem; display: block; color: var(--text-main); margin-bottom: 0.2rem;">${m.titulo}</strong>
              <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.4;">${m.desc}</p>
            </div>
          `).join('')}
        </div>
      `;
    } else if (slide.tipo === 'grid-exemplos') {
      slideHtml = `
        <div class="slide-tag">${slide.categoria}</div>
        <h2 class="slide-heading">${slide.titulo}</h2>
        <p class="slide-subheading">${slide.subtitulo}</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 0.75rem;">
          ${slide.exemplos.map(it => `
            <div class="slide-panel" style="display: flex; gap: 0.75rem; align-items: flex-start; padding: 0.75rem;">
              <div style="font-size: 1.5rem;">${it.icone}</div>
              <div>
                <div style="font-weight: 700; font-size: 0.92rem;">${it.nome} <span style="font-weight: normal; font-size: 0.78rem; color: var(--text-muted);">(${it.app})</span></div>
                <p style="font-size: 0.8rem; margin-top: 0.2rem;">${it.papel}</p>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (slide.tipo === 'atividade') {
      slideHtml = `
        <div class="slide-tag">${slide.categoria}</div>
        <h2 class="slide-heading">${slide.titulo}</h2>
        <p class="slide-subheading" style="color: var(--ocean-teal);">${slide.subtitulo}</p>
        <div class="slide-panel" style="margin-top: 0.75rem;">
          <ul class="slide-bullets" style="line-height: 1.6;">
            ${slide.passos.map(p => `<li style="font-size: 0.92rem;">${p}</li>`).join('')}
          </ul>
        </div>
      `;
    } else if (slide.tipo === 'fechamento') {
      slideHtml = `
        <div class="slide-tag">${slide.categoria}</div>
        <h2 class="slide-heading">${slide.titulo}</h2>
        <p class="slide-subheading">${slide.subtitulo}</p>
        <div class="slide-panel" style="padding: 1.25rem; margin-bottom: 0.75rem;">
          <p style="font-size: 1rem; color: var(--text-main); line-height: 1.5;">${slide.conclusao}</p>
        </div>
        <div class="slide-panel" style="border-left: 4px solid var(--ocean-teal);">
          <div style="font-size: 0.72rem; text-transform: uppercase; font-weight: 700; color: var(--ocean-teal);">Próximo Encontro</div>
          <div style="font-size: 0.98rem; font-weight: 700; color: var(--text-main); margin-top: 0.2rem;">🚀 ${slide.proximoEncontro}</div>
        </div>
      `;
    }

    stage.innerHTML = slideHtml;

    // 2. Renderizar Painel de Notas da Professora para este slide
    if (notesPanel && slide.notasProfessora) {
      notesPanel.innerHTML = `
        <div class="note-block">
          <span class="note-label">🎯 Objetivo Pedagógico deste Slide</span>
          <div class="note-content">${slide.notasProfessora.objetivoSlide}</div>
        </div>

        <div class="note-block">
          <span class="note-label">💬 Como Apresentar / O que Falar</span>
          <div class="speech-quote">${slide.notasProfessora.oQueFalar}</div>
        </div>

        <div class="note-block" style="margin-bottom: 0;">
          <span class="note-label">⏱️ Tempo Estimado em Sala</span>
          <div style="font-family: var(--font-mono); font-size: 0.88rem; font-weight: 600; color: var(--ocean-blue);">
            ${slide.notasProfessora.tempoSugerido}
          </div>
        </div>
      `;
    }
  }
}

window.SlidePresenter = SlidePresenter;
