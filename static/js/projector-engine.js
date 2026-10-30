/**
 * Projector Engine – Motor Modular de Projeção 16:9 (1920x1080)
 * Utiliza Strategy Map para layouts de slides, atalhos seguros e sincronização de sessão.
 */

function initProjectorEngine() {
  'use strict';

  const data = window.CURSO_IA_CURRENT_DATA || window.ENCONTRO_1_DATA || {};
  const slides = Array.isArray(data.slidesComNotas) ? data.slidesComNotas : [];
  slides.forEach((s, idx) => {
    s.numero = idx + 1;
    if (!s.id) s.id = idx + 1;
  });

  let currentIndex = 0;

  const container = document.getElementById('slide-container');
  const counter = document.getElementById('slide-counter');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnFullscreen = document.getElementById('btn-fullscreen');
  const btnCloseProjector = document.getElementById('btn-close-projector');
  const btnNotes = document.getElementById('btn-notes');
  const btnQuestions = document.getElementById('btn-questions');
  const btnInterval = document.getElementById('btn-interval');

  const intervalOverlay = document.getElementById('interval-overlay');
  const btnCloseInterval = document.getElementById('btn-close-interval');

  const questionsOverlay = document.getElementById('questions-overlay');
  const btnCloseQuestions = document.getElementById('btn-close-questions');

  const notesDrawer = document.getElementById('notes-drawer');
  const notesTitle = document.getElementById('notes-title');
  const notesBody = document.getElementById('notes-body');
  const btnCloseNotes = document.getElementById('btn-close-notes');
  const deckStage = document.getElementById('deck-stage');
  const topbar = document.querySelector('.projector-topbar');

  // =======================================================================
  // 1. ESCALONAMENTO RESPONSIVO DO PALCO 16:9 (1920x1080)
  // =======================================================================
  let resizeRafId = null;

  function isFullscreenActive() {
    return !!(document.fullscreenElement || document.body.classList.contains('fullscreen-mode'));
  }

  function fitStageToViewport() {
    if (!deckStage) return;
    const isFs = isFullscreenActive();
    const isTopbarHidden = topbar && (topbar.classList.contains('topbar-hidden') || isFs);
    const topbarHeight = isTopbarHidden ? 0 : (topbar ? topbar.offsetHeight : 62);
    const availWidth = window.innerWidth;
    const availHeight = window.innerHeight - topbarHeight;
    const marginX = isFs ? 0 : (availWidth <= 640 ? 8 : (availWidth <= 1200 ? 16 : 24));
    const marginY = isFs ? 0 : (availWidth <= 640 ? 8 : (availWidth <= 1200 ? 12 : 20));
    const scale = Math.min((availWidth - marginX) / 1920, (availHeight - marginY) / 1080);
    deckStage.style.transform = `scale(${Math.max(0.1, scale)})`;
  }

  function scheduleFitStage() {
    if (resizeRafId) cancelAnimationFrame(resizeRafId);
    resizeRafId = requestAnimationFrame(() => {
      fitStageToViewport();
      resizeRafId = null;
    });
  }

  function applyFullscreenUIState(active) {
    if (active) {
      document.body.classList.add('fullscreen-mode');
      if (topbar) {
        topbar.classList.add('topbar-hidden');
        topbar.classList.remove('topbar-revealed');
      }
      if (btnFullscreen) {
        btnFullscreen.classList.add('active');
        btnFullscreen.title = 'Sair da tela cheia (F / Esc)';
      }
    } else {
      document.body.classList.remove('fullscreen-mode');
      if (topbar) {
        topbar.classList.remove('topbar-hidden');
        topbar.classList.remove('topbar-revealed');
      }
      if (btnFullscreen) {
        btnFullscreen.classList.remove('active');
        btnFullscreen.title = 'Tela cheia (F)';
      }
    }
    fitStageToViewport();
  }

  window.addEventListener('resize', scheduleFitStage);
  window.addEventListener('orientationchange', () => setTimeout(fitStageToViewport, 120));
  document.addEventListener('fullscreenchange', () => {
    applyFullscreenUIState(!!document.fullscreenElement);
    setTimeout(fitStageToViewport, 80);
  });

  // Revelação fluida por aproximação do cursor ao topo em tela cheia (ergonomia de palco)
  let topbarHideTimeout = null;
  document.addEventListener('mousemove', (e) => {
    if (!document.body.classList.contains('fullscreen-mode') || !topbar) return;
    if (e.clientY <= 28) {
      topbar.classList.add('topbar-revealed');
      if (topbarHideTimeout) clearTimeout(topbarHideTimeout);
    } else if (e.clientY > 80 && topbar.classList.contains('topbar-revealed')) {
      if (topbarHideTimeout) clearTimeout(topbarHideTimeout);
      topbarHideTimeout = setTimeout(() => {
        if (document.body.classList.contains('fullscreen-mode')) {
          topbar.classList.remove('topbar-revealed');
        }
      }, 1000);
    }
  });

  fitStageToViewport();

  // =======================================================================
  // 2. STRATEGY MAP DE LAYOUTS DE SLIDE (BAIXA COMPLEXIDADE CICLOMÁTICA)
  // =======================================================================
  function resolveColumnStyle(col, idx) {
    if (col.tipo === 'positivo' || col.tipo === 'verde') {
      return { colClass: 'col-positivo', bulletChar: col.bullet || '✓', defaultIcon: '✓' };
    }
    if (col.tipo === 'marrom' || col.tipo === 'amber' || col.tipo === 'neutro') {
      return { colClass: 'col-marrom', bulletChar: col.bullet || '•', defaultIcon: '💡' };
    }
    if (col.tipo === 'alerta' || col.tipo === 'vermelho') {
      return { colClass: 'col-alerta', bulletChar: col.bullet || '✕', defaultIcon: '⚠️' };
    }
    if (col.classe) {
      const isPos = col.classe.includes('positivo');
      const isMid = col.classe.includes('marrom') || col.classe.includes('amber');
      return {
        colClass: col.classe,
        bulletChar: col.bullet || (isPos ? '✓' : (isMid ? '•' : '✕')),
        defaultIcon: isPos ? '✓' : (isMid ? '💡' : '⚠️')
      };
    }
    const isAlert = idx === 0;
    return {
      colClass: isAlert ? 'col-alerta' : 'col-positivo',
      bulletChar: col.bullet || (isAlert ? '✕' : '✓'),
      defaultIcon: isAlert ? '⚠️' : '✓'
    };
  }

  function renderColumnsGeneric(colunas) {
    return `
      <div class="grid-colunas">
        ${(colunas || []).map((col, idx) => {
      const { colClass, bulletChar, defaultIcon } = resolveColumnStyle(col, idx);
      return `
            <div class="card-coluna ${colClass}">
              <div class="card-col-header">
                <span>${col.icone || defaultIcon}</span>
                <span>${col.tag}</span>
              </div>
              <ul class="card-col-list">
                ${(col.itens || []).map(item => `
                  <li>
                    <span class="bullet">${bulletChar}</span>
                    <span>${item}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          `;
    }).join('')}
      </div>
    `;
  }

  function renderSecaoLayout(s) {
    return `
      <div class="layout-secao ${s.citacao ? 'has-quote' : ''}">
        <div class="secao-badge-wrap">
          <span class="secao-chip">${s.badge || s.categoria || 'Classificação Tecnológica'}</span>
        </div>
        <h1 class="secao-title">${s.titulo}</h1>
        ${s.citacao ? `
          <div class="secao-quote-container">
            <blockquote class="secao-quote">
              "${s.citacao}"
            </blockquote>
            ${s.autor ? `
              <div class="secao-author">
                <strong>${s.autor}</strong>
                ${s.autorDesc ? `<span>${s.autorDesc}</span>` : ''}
              </div>
            ` : ''}
          </div>
        ` : ''}
        ${s.subtitulo ? `<p class="secao-sub">${s.subtitulo}</p>` : ''}
        ${(s.pills && s.pills.length) ? `
          <div class="secao-pills">
            ${s.pills.map((p, idx) => `
              <span class="secao-pill ${p.tipo || 'real'}">${p.texto}</span>
              ${idx < s.pills.length - 1 ? `<span class="secao-pill-divider">➔</span>` : ''}
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }

  const SLIDE_RENDERERS = {
    'capa': (s) => `
      <div class="layout-capa">
        <div class="capa-icon">✨</div>
        <h1 class="capa-title">${s.titulo}</h1>
        <p class="capa-sub">${s.subtitulo}</p>
        <div class="capa-tags">
          ${(s.detalhes || []).map(d => `<span class="capa-chip">${d}</span>`).join('')}
        </div>
      </div>
    `,

    'apresentacao': (s) => {
      const items = s.itensDestaque || [];
      const count = items.length;
      let gridClass = 'grid-3cards';
      if (s.layout === '2x2' || s.layout === 'grid-2x2') {
        gridClass = 'grid-2x2';
      } else if (count === 4) {
        gridClass = 'grid-4cards';
      } else if (count === 2) {
        gridClass = 'grid-2cards';
      }
      return `
        <div class="${gridClass}">
          ${items.map(item => `
            <div class="card-item-destaque">
              <div class="icon">${item.icone}</div>
              <div class="card-item-content">
                <h4>${item.titulo}</h4>
                <p>${item.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    },

    'cronograma': (s) => `
      <div class="cronograma-full-track">
        ${(s.encontros || []).map(e => `
          <div class="cronograma-col-card ${e.num === '1' ? 'current' : ''}">
            <span class="crono-date-badge">${e.data}</span>
            <div class="crono-num">Módulo ${e.num}</div>
            <div class="crono-tema">${e.tema}</div>
            <div class="crono-status">${e.status}</div>
          </div>
        `).join('')}
      </div>
    `,

    'pilares': (s) => `
      <div class="grid-3cards">
        ${(s.pilares || []).map(p => `
          <div class="card-item-destaque" style="border-top: 4px solid var(--accent-warm);">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span class="icon">${p.icone}</span>
              <span style="font-family: var(--font-mono); font-size: 2.2rem; font-weight: 800; color: var(--text-amber);">0${p.num}</span>
            </div>
            <h4>${p.titulo}</h4>
            <p>${p.desc}</p>
          </div>
        `).join('')}
      </div>
    `,

    'fora-escopo': (s) => {
      const comp = s.comparacao || { nao: [], sim: [] };
      return `
        <div class="grid-escopo">
          <div class="box-escopo nao">
            <div class="box-escopo-header">
              <span>❌</span>
              <span>O Que NÃO Faremos</span>
            </div>
            <ul class="escopo-list">
              ${(comp.nao || []).map(item => `
                <li>
                  <span style="color: var(--text-red); font-weight: bold;">✕</span>
                  <span>${item}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="box-escopo sim">
            <div class="box-escopo-header">
              <span>✅</span>
              <span>O Nosso Foco Real</span>
            </div>
            <ul class="escopo-list">
              ${(comp.sim || []).map(item => `
                <li>
                  <span style="color: var(--text-green); font-weight: bold;">✓</span>
                  <span>${item}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      `;
    },

    'requisito-email': (s) => `
      <div class="grid-3cards">
        ${(s.pontosChave || []).map(pt => `
          <div class="card-item-destaque" style="border-color: var(--border-amber); background: #261f18;">
            <div class="icon">${pt.icone}</div>
            <h4>${pt.titulo}</h4>
            <p>${pt.desc}</p>
          </div>
        `).join('')}
      </div>
    `,

    'quebra-gelo': (s) => renderColumnsGeneric(s.colunas),

    'comparativo': (s) => {
      if (s.caixa1 && s.caixa2) {
        return `
          <div class="grid-comparativo">
            <div class="box-comparativo">
              <div>
                <div class="box-comp-header">
                  <span>⚙️</span>
                  <span>${s.caixa1.titulo || ''}</span>
                </div>
                <div class="formula-tag">${s.caixa1.formula || ''}</div>
                <p class="box-comp-desc"><strong>Analogia:</strong> ${s.caixa1.analogia || ''}</p>
              </div>
              <div class="box-comp-exemplo">
                <strong>Exemplos do cotidiano:</strong> ${s.caixa1.exemplo || ''}
              </div>
            </div>

            <div class="box-comparativo highlight">
              <div>
                <div class="box-comp-header" style="color: var(--text-amber);">
                  <span>🧠</span>
                  <span>${s.caixa2.titulo || ''}</span>
                </div>
                <div class="formula-tag" style="border-color: var(--border-amber); color: var(--text-main);">${s.caixa2.formula || ''}</div>
                <p class="box-comp-desc"><strong>Analogia:</strong> ${s.caixa2.analogia || ''}</p>
              </div>
              <div class="box-comp-exemplo" style="border-left-color: var(--border-amber);">
                <strong>Exemplos do cotidiano:</strong> ${s.caixa2.exemplo || ''}
              </div>
            </div>
          </div>
        `;
      }
      if (s.colunas) {
        return renderColumnsGeneric(s.colunas);
      }
      return `
        <div style="font-size: 1.8rem; line-height: 1.6; color: var(--text-secondary); width: 100%;">
          <p>${s.subtitulo || ''}</p>
        </div>
      `;
    },

    'secao': renderSecaoLayout,
    'titulo-secao': renderSecaoLayout,
    'citacao': renderSecaoLayout,

    'grid-exemplos': (s) => `
      <div class="grid-exemplos-4">
        ${(s.exemplos || []).map(ex => `
          <div class="exemplo-card-item">
            <div class="exemplo-icon">${ex.icone || '📱'}</div>
            <div class="exemplo-info">
              <span class="exemplo-badge">${ex.app}</span>
              <h4>${ex.nome}</h4>
              <p class="exemplo-desc">${ex.papel}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `,

    'missao-email': (s) => `
      <div class="grid-colunas" style="align-items: center;">
        <div class="card-coluna" style="border-color: var(--border-amber); background: #251e18;">
          <div class="card-col-header">
            <span>🎯</span>
            <span>Passo a Passo no Computador</span>
          </div>
          <ul class="card-col-list">
            ${(s.passos || []).map(p => `
              <li>
                <span class="bullet" style="color: var(--text-amber);">✓</span>
                <span>${p}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="card-coluna" style="background: var(--bg-card-subtle); display: flex; flex-direction: column; justify-content: center; text-align: center; padding: 3rem;">
          <div style="font-size: 5rem; margin-bottom: 1rem;">🔐</div>
          <h3 style="font-size: 2.2rem; color: var(--text-main); margin-bottom: 1rem;">Não lembra a senha?</h3>
          <p style="font-size: 1.45rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1.5rem;">
            Não passe aperto sozinho! Levante a mão que a <strong>Laura ou a Maria</strong> vão até a sua mesa para ajudar a redefinir ou criar uma conta novinha na hora.
          </p>
          <span class="slide-tag" style="margin: 0 auto; background: var(--bg-stage);">Suporte Individual nas Mesas</span>
        </div>
      </div>
    `,

    'missao-diagnostica': (s) => {
      const diag = s.destaqueDiagnostica || {
        icone: "📋",
        titulo: "Avaliação Diagnóstica Sem Medo",
        desc: "Um raio-x formativo para descobrirmos o que você já conhece sobre tecnologia e ajustarmos o ritmo das próximas oficinas práticas.",
        tagAviso: "Zero Pressão • Instrumento Pedagógico de Nivelamento"
      };
      return `
        <div class="layout-diagnostica-wrap">
          <div class="diagnostica-passos-card">
            <div class="diagnostica-card-header">
              <div class="header-left">
                <span>🚀</span>
                <span>Roteiro Prático no Computador</span>
              </div>
              <span class="tempo-chip">⏱️ ${s.tempoEstimado || '25 min'}</span>
            </div>
            <div class="diagnostica-steps-list">
              ${(s.passos || []).map((p, idx) => `
                <div class="diag-step-item">
                  <div class="step-num">${idx + 1}</div>
                  <div class="step-text">${p.replace(/^[0-9]+\.\s*/, '')}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="diagnostica-info-card">
            <div class="diag-icon-halo">${diag.icone}</div>
            <h3 class="diag-title">${diag.titulo}</h3>
            <p class="diag-desc">${diag.desc}</p>
            <div class="diag-badge-pill">
              <span>✨</span>
              <span>${diag.tagAviso}</span>
            </div>
            <div class="diag-support-banner">
              <span>🙋</span>
              <span><strong>Laura & Maria</strong> estão circulando nas mesas para ajudar com qualquer dúvida!</span>
            </div>
          </div>
        </div>
      `;
    },

    'fechamento': (s) => `
      <div class="layout-fechamento-wrap">
        <div class="fechamento-banner-card">
          <div class="fechamento-celebrate-badge">🎉 ${s.badge || 'MISSÃO CUMPRIDA COM SUCESSO!'}</div>
          <h3>"${s.conclusao || s.subtitulo || ''}"</h3>
        </div>

        <div class="fechamento-next-card">
          <div class="fechamento-next-icon">🚀</div>
          <div class="fechamento-next-info">
            <div class="next-label">Próximo Encontro Presencial</div>
            <div class="next-title">${s.proximoEncontro || s.titulo || ''}</div>
          </div>
        </div>

        ${s.lembretesFinais && s.lembretesFinais.length ? `
          <div class="fechamento-lembretes-grid">
            ${s.lembretesFinais.map((lembrete, idx) => `
              <div class="fechamento-lembrete-pill">
                <span class="pill-icon">${idx === 0 ? '🔐' : (idx === 1 ? '📋' : '⭐')}</span>
                <span>${lembrete}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}

        ${s.referencias && s.referencias.length ? `
          <div class="fechamento-referencias-card" style="background: var(--bg-card); border: 1.5px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem 1.75rem; width: 100%; box-sizing: border-box;">
            <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-amber); margin-bottom: 0.65rem; display: flex; align-items: center; gap: 0.5rem;">
              <span>📚</span> <span>Referências da Aula de Hoje:</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.55rem;">
              ${s.referencias.map(ref => `
                <a href="${ref}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-warm); font-family: var(--font-mono); font-size: 1.15rem; text-decoration: underline; word-break: break-all;">
                  ${ref}
                </a>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `,

    'ia-ficcao': (s) => `
      <div class="layout-ia-ficcao-wrap">
        <div class="ia-ficcao-media-card">
          <div class="ia-ficcao-img-box">
            <img src="${s.imagem || '/static/img/ia_ficcao_rosie.jpg'}" alt="${s.titulo}" />
          </div>
          <div style="text-align: center; color: var(--text-muted); font-size: 1.15rem; font-style: italic;">
            ${s.legendaImagem || 'Ícones da Ficção: Rosie, Robby, Gort, C-3PO, R2-D2 e Exterminador'}
          </div>
        </div>

        <div class="ia-ficcao-content">
          <div class="ia-ficcao-badge">
            <span>🎬</span>
            <span>${s.badge || 'IA Geral (AGI / Cinema) — 0% REAL HOJE'}</span>
          </div>

          <div class="ia-ficcao-characters-list">
            ${(s.personagens || []).map(p => `
              <div class="ia-ficcao-char-card">
                <h4><span>🤖</span> ${p.nome}</h4>
                <p>${p.desc}</p>
              </div>
            `).join('')}
          </div>

          ${s.conclusaoFiccao ? `
            <div class="ia-ficcao-conclusion">
              💡 <strong>Conclusão:</strong> ${s.conclusaoFiccao}
            </div>
          ` : ''}
        </div>
      </div>
    `,

    'ia-estreita': (s) => `
      <div class="layout-ia-estreita-wrap">
        <div class="ia-estreita-topbar">
          <div class="ia-estreita-badge">
            <span>⚙️</span>
            <span>${s.badge || 'IA Estreita (Narrow AI / ANI) — 100% DA IA DO PLANETA'}</span>
          </div>
          <span style="font-size: 1.25rem; color: var(--text-amber); font-weight: 700;">
            Hiperespecialista em UMA tarefa • Zero sentimentos
          </span>
        </div>

        <div class="ia-estreita-grid">
          ${(s.recursos || []).map(rec => `
            <div class="ia-estreita-item-card">
              <div class="ia-estreita-item-header">
                <span class="ia-estreita-item-icon">${rec.icone || '📱'}</span>
                <span class="ia-estreita-item-title">${rec.titulo}</span>
              </div>
              <p class="ia-estreita-item-desc">${rec.desc}</p>
            </div>
          `).join('')}
        </div>

        ${s.destaque ? `
          <div class="ia-estreita-footer-banner">
            💡 <strong>Regra de Ouro:</strong> ${s.destaque}
          </div>
        ` : ''}
      </div>
    `
  };

  const meetingId = document.body.getAttribute('data-meeting') || '1';

  function buildSlideHTML(s, idx, totalSlides, currentMeetingId) {
    const renderer = SLIDE_RENDERERS[s.tipo];
    let bodyHTML = '';
    if (renderer) {
      bodyHTML = renderer(s);
    } else if (s.colunas) {
      bodyHTML = renderColumnsGeneric(s.colunas);
    } else {
      bodyHTML = `
        <div style="font-size: 2rem; line-height: 1.6; color: var(--text-secondary); width: 100%;">
          <p>${s.subtitulo || ''}</p>
        </div>
      `;
    }

    const isFullscreenCover = (s.tipo === 'capa' || s.tipo === 'secao' || s.tipo === 'titulo-secao');
    const condutor = (!isFullscreenCover && (s.conducao || s.docente)) ? (s.conducao || s.docente) : null;
    const presenterHTML = condutor ? `
      <div class="slide-presenter-pill" title="Apresentação: ${condutor}">
        <span class="presenter-dot"></span>
        <span>👩‍🏫 ${condutor}</span>
      </div>
    ` : '';

    const slideNum = s.numero || (idx + 1);
    const modLabel = s.categoria || (currentMeetingId ? `Módulo ${currentMeetingId}` : 'Módulo');

    return `
      ${presenterHTML}
      <div>
        ${!isFullscreenCover ? `
          <div class="slide-header">
            <span class="slide-tag">${modLabel} • Slide ${slideNum} de ${totalSlides}</span>
            <h2 class="slide-title">${s.titulo}</h2>
            ${s.subtitulo ? `<p class="slide-subtitle">${s.subtitulo}</p>` : ''}
          </div>
        ` : ''}
      </div>

      <div class="slide-body">
        ${bodyHTML}
      </div>
    `;
  }

  function renderSlide(index) {
    if (!slides.length) {
      if (container) {
        container.innerHTML = `
          <div class="layout-secao">
            <h1 class="secao-title">Nenhum slide disponível para este encontro</h1>
            <p class="secao-sub">Verifique o carregamento da base de dados do módulo.</p>
          </div>
        `;
      }
      if (counter) counter.textContent = 'Slide 0 de 0';
      if (btnPrev) btnPrev.disabled = true;
      if (btnNext) btnNext.disabled = true;
      return;
    }

    const safeIndex = Math.max(0, Math.min(index, slides.length - 1));
    currentIndex = safeIndex;
    const s = slides[safeIndex];
    const condutor = s.conducao || s.docente || null;

    container.innerHTML = buildSlideHTML(s, safeIndex, slides.length, meetingId);

    counter.textContent = `${safeIndex + 1} / ${slides.length}`;
    btnPrev.disabled = (safeIndex === 0);
    btnNext.disabled = (safeIndex === slides.length - 1);

    const progressBar = document.getElementById('projector-progress-bar');
    if (progressBar && slides.length > 0) {
      const progressFraction = (safeIndex + 1) / slides.length;
      progressBar.style.transform = `scaleX(${progressFraction})`;
    }

    if (s.notasProfessora) {
      const conducaoLabel = condutor ? ` • Condução: ${condutor}` : '';
      notesTitle.textContent = `Slide ${s.numero}: ${s.titulo}${conducaoLabel} (Tempo Sugerido: ${s.notasProfessora.tempoSugerido})`;
      notesBody.innerHTML = `
        ${condutor ? `<p style="margin-bottom: 0.5rem;"><span class="capa-chip" style="font-size: 0.88rem; padding: 0.25rem 0.75rem; background: rgba(212, 163, 115, 0.2); color: var(--text-amber); border: 1px solid var(--border-amber);">👩‍🏫 Condução Principal: <strong>${condutor}</strong></span></p>` : ''}
        <p style="margin-bottom: 0.75rem;"><strong>🎯 Objetivo Pedagógico:</strong> ${s.notasProfessora.objetivoSlide}</p>
        <p style="margin-bottom: 0.5rem;"><strong>🎙️ O que falar para a turma:</strong></p>
        <blockquote style="background: rgba(0,0,0,0.3); border-left: 4px solid var(--text-amber); padding: 0.75rem 1.25rem; border-radius: 4px; font-style: italic; color: var(--text-main); font-size: 1.15rem; line-height: 1.5;">
          ${s.notasProfessora.oQueFalar}
        </blockquote>
      `;
    } else {
      notesTitle.textContent = `Slide ${s.numero}: ${s.titulo}`;
      notesBody.innerHTML = '<p>Sem notas pedagógicas adicionais para este slide.</p>';
    }
  }

  // =======================================================================
  // 3. NAVEGAÇÃO ENTRE OS SLIDES & EXCLUSÃO MÚTUA DE OVERLAYS
  // =======================================================================
  function nextSlide() {
    if (currentIndex < slides.length - 1) {
      renderSlide(currentIndex + 1);
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      renderSlide(currentIndex - 1);
    }
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
          .then(() => applyFullscreenUIState(true))
          .catch(() => {
            const willBeActive = !document.body.classList.contains('fullscreen-mode');
            applyFullscreenUIState(willBeActive);
          });
      } else {
        const willBeActive = !document.body.classList.contains('fullscreen-mode');
        applyFullscreenUIState(willBeActive);
      }
    } else if (document.exitFullscreen) {
      document.exitFullscreen()
        .then(() => applyFullscreenUIState(false))
        .catch(() => applyFullscreenUIState(false));
    } else {
      applyFullscreenUIState(false);
    }
  }

  function toggleNotes() {
    notesDrawer.classList.toggle('open');
    btnNotes.classList.toggle('active');
  }

  function toggleQuestions() {
    if (!questionsOverlay) return;
    const isHidden = (questionsOverlay.style.display === 'none' || !questionsOverlay.style.display);
    if (isHidden && intervalOverlay && intervalOverlay.style.display === 'flex') {
      intervalOverlay.style.display = 'none';
      if (btnInterval) btnInterval.classList.remove('active');
    }
    questionsOverlay.style.display = isHidden ? 'flex' : 'none';
    if (btnQuestions) btnQuestions.classList.toggle('active', isHidden);
  }

  function toggleInterval() {
    if (!intervalOverlay) return;
    const isHidden = (intervalOverlay.style.display === 'none' || !intervalOverlay.style.display);
    if (isHidden && questionsOverlay && questionsOverlay.style.display === 'flex') {
      questionsOverlay.style.display = 'none';
      if (btnQuestions) btnQuestions.classList.remove('active');
    }
    intervalOverlay.style.display = isHidden ? 'flex' : 'none';
    if (btnInterval) btnInterval.classList.toggle('active', isHidden);
  }

  btnNext.addEventListener('click', nextSlide);
  btnPrev.addEventListener('click', prevSlide);
  btnFullscreen.addEventListener('click', toggleFullscreen);

  btnNotes.addEventListener('click', toggleNotes);
  btnCloseNotes.addEventListener('click', toggleNotes);

  if (btnQuestions) btnQuestions.addEventListener('click', toggleQuestions);
  if (btnCloseQuestions) btnCloseQuestions.addEventListener('click', toggleQuestions);
  if (questionsOverlay) {
    questionsOverlay.addEventListener('click', (e) => {
      if (e.target === questionsOverlay) toggleQuestions();
    });
  }

  if (btnInterval) btnInterval.addEventListener('click', toggleInterval);
  if (btnCloseInterval) btnCloseInterval.addEventListener('click', toggleInterval);
  if (intervalOverlay) {
    intervalOverlay.addEventListener('click', (e) => {
      if (e.target === intervalOverlay) toggleInterval();
    });
  }

  // =======================================================================
  // 4. ATALHOS DE TECLADO (IGNORANDO COMBINAÇÕES CTRL/ALT/META DO SISTEMA)
  // =======================================================================
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      toggleFullscreen();
    } else if (e.key === 'n' || e.key === 'N') {
      e.preventDefault();
      toggleNotes();
    } else if (e.key === 'p' || e.key === 'P') {
      e.preventDefault();
      toggleQuestions();
    } else if (e.key === 'i' || e.key === 'I') {
      e.preventDefault();
      toggleInterval();
    } else if (e.key === 'Home') {
      e.preventDefault();
      renderSlide(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      if (slides.length > 0) {
        renderSlide(slides.length - 1);
      }
    } else if (e.key === 'Escape') {
      if (questionsOverlay && questionsOverlay.style.display === 'flex') {
        toggleQuestions();
      } else if (intervalOverlay && intervalOverlay.style.display === 'flex') {
        toggleInterval();
      } else if (notesDrawer.classList.contains('open')) {
        toggleNotes();
      } else if (isFullscreenActive()) {
        toggleFullscreen();
      } else {
        closeProjectorWindow();
      }
    }
  });

  function closeProjectorWindow() {
    try {
      window.close();
    } catch (err) {
      console.warn('Falha ao fechar janela do projetor:', err);
    }
    // Fallback caso a janela tenha sido aberta sem contexto direto de window.close
    setTimeout(() => {
      if (!window.closed) {
        window.location.href = `/`;
      }
    }, 200);
  }

  if (btnCloseProjector) {
    btnCloseProjector.addEventListener('click', (e) => {
      e.preventDefault();
      closeProjectorWindow();
    });
  }

  // =======================================================================
  // 5. SUPORTE A SWIPE / TOUCH EM TELAS MÓVEIS E TABLETS
  // =======================================================================
  let touchStartX = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) nextSlide();
      else prevSlide();
    }
  }, { passive: true });

  // Suporte a parâmetro de URL ?slide=X (1-indexed)
  const urlParams = new URLSearchParams(window.location.search);
  const paramSlide = parseInt(urlParams.get('slide'), 10);
  if (!isNaN(paramSlide) && paramSlide >= 1 && paramSlide <= slides.length) {
    currentIndex = paramSlide - 1;
  }

  if (urlParams.get('mode') === 'export') {
    document.body.classList.add('export-mode');

    // Desativa fitStageToViewport em modo exportação para liberar o fluxo de impressão
    window.removeEventListener('resize', scheduleFitStage);

    if (topbar) topbar.style.display = 'none';

    // Cria banner de controle no topo (oculto na impressão @media print)
    let exportBanner = document.getElementById('export-banner-controls');
    if (!exportBanner) {
      exportBanner = document.createElement('header');
      exportBanner.id = 'export-banner-controls';
      exportBanner.className = 'export-banner no-print';
      exportBanner.innerHTML = `
        <div class="export-banner-info">
          <span class="badge-pill">PDF A4 • 16:9</span>
          <strong>Exportação de Slides – Módulo ${meetingId}</strong>
          <span style="opacity: 0.8; font-size: 0.84rem;">(${slides.length} slides prontos para impressão ou PDF)</span>
        </div>
        <div class="export-banner-actions">
          <button type="button" class="btn-slide-nav btn-print-trigger" id="btn-print-trigger-action" title="Abrir diálogo de impressão do navegador">
            <span>🖨️</span> <span>Salvar em PDF / Imprimir</span>
          </button>
          <a href="/slides/${meetingId}" class="btn-slide-nav" style="text-decoration: none;" title="Voltar para a tela cheia do projetor">
            <span>🖥️</span> <span>Modo Projetor</span>
          </a>
          <button type="button" class="btn-slide-nav btn-exit-nav" id="btn-close-export" title="Fechar esta janela">
            <span>✕</span> <span>Fechar</span>
          </button>
        </div>
      `;
      document.body.prepend(exportBanner);

      const btnPrint = document.getElementById('btn-print-trigger-action');
      if (btnPrint) {
        btnPrint.addEventListener('click', () => window.print());
      }

      const btnCloseExp = document.getElementById('btn-close-export');
      if (btnCloseExp) {
        btnCloseExp.addEventListener('click', () => closeProjectorWindow());
      }
    }

    if (container) {
      container.className = 'export-slides-container';
      const allSlidesHtml = slides.map((s, idx) => `
        <article class="slide-card export-slide-page" id="slide-page-${idx + 1}" data-slide-num="${idx + 1}">
          ${buildSlideHTML(s, idx, slides.length, meetingId)}
        </article>
      `).join('');
      container.innerHTML = allSlidesHtml;
    }

    // Dispara o diálogo de impressão após breve pausa para fontes e layouts renderizarem
    setTimeout(() => {
      window.print();
    }, 700);
  } else {
    renderSlide(currentIndex);
  }

  // =======================================================================
  // 6. SINCRONIZAÇÃO DE SESSÃO & AUTO-FECHAMENTO NO LOGOUT
  // =======================================================================
  const AUTH_CHANNEL_NAME = 'portal_ia_auth_channel';

  function handleRemoteLogout() {
    try {
      window.close();
    } catch (err) {
      console.warn('Não foi possível fechar a janela automaticamente:', err);
    }

    setTimeout(() => {
      if (!window.closed) {
        document.body.innerHTML = `
          <div style="min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #100d0a; color: #f7f3ea; font-family: sans-serif; text-align: center; padding: 2rem;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🔒</div>
            <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: #f7f3ea;">Sessão Encerrada</h2>
            <p style="color: #a69885; font-size: 1rem; max-width: 420px; line-height: 1.5;">Você encerrou a sessão no portal. Esta apresentação de slides foi finalizada.</p>
            <a href="/login" style="margin-top: 1.5rem; padding: 0.6rem 1.25rem; background: #806a4e; color: #fffdf8; text-decoration: none; border-radius: 8px; font-weight: 600;">Ir para o Login</a>
          </div>
        `;
        window.location.href = '/login';
      }
    }, 100);
  }

  if ('BroadcastChannel' in window) {
    try {
      const authChannel = new BroadcastChannel(AUTH_CHANNEL_NAME);
      authChannel.onmessage = (event) => {
        if (event.data && event.data.action === 'logout') {
          handleRemoteLogout();
        }
      };
    } catch (err) {
      console.warn('BroadcastChannel indisponível na janela do projetor:', err);
    }
  }

  window.addEventListener('storage', (event) => {
    if (event.key === 'portal_ia_logout_signal') {
      handleRemoteLogout();
    }
  });

  // Interface de Automação e Exportação E2E
  window.__projectorEngine = {
    renderSlide,
    nextSlide,
    prevSlide,
    getSlideCount: () => slides.length,
    getCurrentIndex: () => currentIndex,
    getMeetingId: () => meetingId
  };
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProjectorEngine);
} else {
  initProjectorEngine();
}

