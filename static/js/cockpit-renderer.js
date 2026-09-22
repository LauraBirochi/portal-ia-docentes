/**
 * Cockpit Renderer – Motor Dinâmico de Renderização Pedagógica (5 Abas)
 * Renderiza dinamicamente as 5 abas do Cockpit a partir do Schema de Encontro (encontroX-data.js).
 */

const CockpitRenderer = {
  /**
   * Renderiza todas as 5 abas do Cockpit para o encontro fornecido
   * @param {Object} data - Objeto de dados do encontro (ex: ENCONTRO_1_DATA)
   */
  renderAll(data) {
    if (!data) return;
    this.renderHeaderInfo(data);
    this.renderFioDaMeada(data);
    this.renderSlidesList(data);
    this.renderAtividadesGabarito(data);
    this.renderPerguntas(data);
    this.renderAnotacoesPapeis(data);
  },

  /**
   * Atualiza cabeçalho do módulo
   */
  renderHeaderInfo(data) {
    const info = data.moduloInfo || {};
    const titleEl = document.getElementById('cockpit-module-title');
    const chipEl = document.getElementById('cockpit-module-chip');
    if (titleEl && info.titulo) {
      titleEl.textContent = `Módulo ${info.numero}: ${info.titulo}`;
    }
    if (chipEl && info.numero) {
      chipEl.textContent = `Encontro ${info.numero} • ${info.cargaHoraria || '3 Horas'}`;
    }
  },

  /**
   * ABA 1: O Fio da Meada (Narrativa & Conceitos)
   */
  renderFioDaMeada(data) {
    const container = document.getElementById('cockpit-fio-meada-container');
    if (!container) return;

    const fio = data.fioDaMeada || {};
    const info = data.moduloInfo || {};
    const atos = fio.atos || [];
    const glossario = fio.glossario || [];

    container.innerHTML = `
      <div class="pedagogical-highlight-card">
        <div class="module-meta-tags">
          <span class="chip chip-warm">Objetivo Central do Encontro ${info.numero || 1}</span>
          <span class="chip">Domínio Mútuo Laura & Maria</span>
        </div>
        <h2 style="font-size: 1.35rem; color: var(--text-main); margin-bottom: 0.75rem;">
          ${fio.objetivoCentral || 'Qual é a grande mensagem deste encontro?'}
        </h2>
        <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.6;">
          <strong>"${fio.mensagemChave || ''}"</strong><br>
          ${fio.explicacaoObjetivo || ''}
        </p>
      </div>

      <!-- A Narrativa em 3 Atos -->
      <div class="section-title-wrap" style="margin-top: 2rem;">
        <span style="font-size: 1.3rem;">🎭</span>
        <h3>A Linha Narrativa da Aula (Os 3 Atos do Encontro)</h3>
      </div>

      <div class="three-acts-grid">
        ${atos.map(a => `
          <div class="act-card" ${a.ato === 2 ? 'style="border-top: 3px solid var(--accent);"' : ''}>
            <span class="act-badge" ${a.ato === 2 ? 'style="background: var(--accent); color: var(--accent-text);"' : ''}>
              Ato ${a.ato} • ${a.tempo}
            </span>
            <h4 style="color: var(--text-main); margin-bottom: 0.5rem;">${a.titulo}</h4>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 0.75rem;">
              ${a.desc}
            </p>
            ${a.gatilho ? `
              <div style="font-size: 0.8rem; color: var(--accent); background: var(--bg-surface); padding: 0.5rem; border-radius: var(--radius-sm); border: 1px solid var(--border);">
                💡 <strong>Gatilho de fala:</strong> "${a.gatilho}"
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>

      <!-- Glossário Rápido Alinhado -->
      ${glossario.length ? `
        <div class="pedagogical-highlight-card" style="margin-top: 2rem;">
          <h3 style="font-size: 1.15rem; color: var(--text-main); margin-bottom: 1rem;">
            📖 Glossário Rápido Alinhado (Para Laura & Maria usarem o mesmo vocabulário)
          </h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem;">
            ${glossario.map(g => `
              <div style="background: var(--bg-subtle-warm); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border);">
                <strong style="color: var(--text-main);">${g.termo}:</strong>
                <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.25rem;">
                  ${g.def}
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    `;
  },

  /**
   * ABA 2: Slides & Roteiro Visual (Agrupados por Blocos Temáticos Recolhíveis)
   */
  renderSlidesList(data) {
    const container = document.getElementById('cockpit-slides-list');
    if (!container) return;

    const slides = data.slidesComNotas || [];
    const info = data.moduloInfo || {};
    const blocos = data.blocosTematicos || [
      {
        id: 1,
        icone: "📚",
        titulo: "Todos os Slides do Encontro",
        subtitulo: "Sequência completa de projeção e notas pedagógicas",
        slidesRange: [1, slides.length || 1],
        tempoEstimado: info.cargaHoraria || "180 min"
      }
    ];

    const toolbarHTML = `
      <div class="topic-groups-toolbar">
        <div class="topic-groups-toolbar-info">
          <span class="topic-groups-count">📚 <strong>${blocos.length} Blocos Temáticos</strong> (${slides.length} Slides no Encontro)</span>
          <span class="topic-groups-tip">• Clique em qualquer bloco para recolher ou expandir</span>
        </div>
        <div class="topic-groups-toolbar-actions">
          <button type="button" class="btn-group-action" onclick="window.CockpitRenderer.expandAllTopicGroups()" title="Expandir todos os blocos temáticos">
            <span>📂</span> Expandir Todos
          </button>
          <button type="button" class="btn-group-action" onclick="window.CockpitRenderer.collapseAllTopicGroups()" title="Recolher todos os blocos temáticos">
            <span>📁</span> Recolher Todos
          </button>
        </div>
      </div>
    `;

    const groupsHTML = blocos.map(bloco => {
      const slidesDoBloco = slides.filter(slide => {
        const num = slide.numero || slide.id || 1;
        return num >= bloco.slidesRange[0] && num <= bloco.slidesRange[1];
      });

      if (!slidesDoBloco.length) return '';

      const slidesCardsHTML = slidesDoBloco.map(slide => {
        const notas = slide.notasProfessora || {};
        const slideNum = slide.numero || slide.id || 1;

        let techHTML = '';
        if (slide.embasamentoCientifico) {
          const emb = slide.embasamentoCientifico;
          const isLegal = (emb.titulo || '').toLowerCase().includes('jurídico') || 
                          (emb.titulo || '').toLowerCase().includes('legal') || 
                          (emb.titulo || '').toLowerCase().includes('governo') || 
                          (emb.titulo || '').toLowerCase().includes('pbia') ||
                          (emb.titulo || '').toLowerCase().includes('regulamentação');

          techHTML = `
            <div class="tech-deepdive-wrapper">
              <button type="button" class="btn-tech-deepdive" id="btn-deepdive-${slideNum}" onclick="window.CockpitRenderer.toggleDeepdive('${slideNum}')" aria-expanded="false" aria-controls="deepdive-${slideNum}">
                <span class="tech-btn-icon-wrapper">
                  <span class="tech-btn-icon">${isLegal ? '🏛️' : '🔬'}</span>
                </span>
                <span class="tech-btn-text">
                  <span class="tech-btn-title">${isLegal ? 'Dossiê Jurídico & Legislação Brasileira' : 'Embasamento Científico & Fórmulas'}</span>
                  <span class="tech-btn-sub">${isLegal ? 'Marco Legal (PL 2338/23), PBIA e LGPD' : 'Fundamentação Acadêmica e Artigos Primários'}</span>
                </span>
                <span class="badge-tech">
                  <span class="badge-dot"></span>
                  <span>${isLegal ? 'Fontes Oficiais' : 'Fontes Acadêmicas'}</span>
                </span>
                <span class="chevron" id="chevron-${slideNum}">▾</span>
              </button>

              <div id="deepdive-${slideNum}" class="tech-deepdive-panel" role="region" aria-labelledby="btn-deepdive-${slideNum}">
                <div class="tech-deepdive-header">
                  <div class="tech-header-lead">
                    <span class="tech-header-icon">${isLegal ? '⚖️' : '🏛️'}</span>
                    <div>
                      <h4 class="tech-deepdive-title">${emb.titulo}</h4>
                      <p class="tech-deepdive-subtitle">${isLegal ? 'Dossiê Governamental e Regulatório de IA' : 'Dossiê Técnico & Fundamentação Matemática de NLP / Deep Learning'}</p>
                    </div>
                  </div>
                  <div class="tech-header-tags">
                    <span class="chip chip-warm">
                      <span class="chip-dot"></span>
                      ${isLegal ? 'Marco Normativo Oficial' : 'Referencial Teórico Primário'}
                    </span>
                  </div>
                </div>

                <div class="tech-summary-banner">
                  <div class="tech-summary-badge">Visão Geral</div>
                  <p class="tech-summary-text">${emb.resumo}</p>
                </div>

                <div class="tech-topics-list">
                  ${(emb.topicos || []).map((t, idx) => {
                    const cleanTitle = t.titulo.replace(/^\d+\.\s*/, '');
                    return `
                      <div class="tech-topic-item">
                        <div class="tech-topic-header">
                          <span class="tech-topic-index">${idx + 1}</span>
                          <h5 class="tech-topic-heading">${cleanTitle}</h5>
                        </div>
                        <div class="tech-topic-content">${t.conteudo}</div>
                      </div>
                    `;
                  }).join('')}
                </div>

                ${(emb.fontesCientificas && emb.fontesCientificas.length) ? `
                  <div class="citations-section">
                    <div class="citations-header">
                      <span class="citations-icon">${isLegal ? '📜' : '📚'}</span>
                      <div>
                        <h5 class="citations-title">${isLegal ? 'Documentos Oficiais & Textos de Lei' : 'Artigos Científicos Primários (Peer-Reviewed & Preprints)'}</h5>
                        <span class="citations-subtitle">Referências fundamentais que sustentam este conteúdo em sala</span>
                      </div>
                    </div>
                    <div class="citations-grid">
                      ${emb.fontesCientificas.map(f => `
                        <div class="citation-card">
                          <div class="citation-top">
                            <span class="citation-author-tag">${f.autor}</span>
                            <span class="citation-pub-tag">${f.publicacao}</span>
                          </div>
                          <h6 class="citation-title">"${f.titulo}"</h6>
                          <div class="citation-relevance">
                            <span class="relevance-label">💡 Relevância:</span>
                            <span class="relevance-text">${f.relevancia}</span>
                          </div>
                          <a href="${f.link}" target="_blank" rel="noopener noreferrer" class="citation-link-btn" title="Acessar publicação em nova aba">
                            <span>Acessar Documento Original</span>
                            <span class="link-arrow">↗</span>
                          </a>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}
              </div>
            </div>
          `;
        }

        return `
          <article class="pedagogical-highlight-card" style="border-left: 4px solid var(--accent); transition: transform 0.2s ease;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; margin-bottom: 0.75rem; flex-wrap: wrap;">
              <div>
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem; flex-wrap: wrap;">
                  <span class="chip chip-warm" style="font-weight: 700;">Slide ${slideNum} de ${slides.length}</span>
                  <span class="chip" style="font-size: 0.75rem;">${slide.categoria || 'Pedagógico'}</span>
                  <span style="font-size: 0.8rem; color: var(--text-muted); display: inline-flex; align-items: center; gap: 0.25rem;">
                    ⏱️ ${notas.tempoSugerido || '5 min'}
                  </span>
                </div>
                <h4 style="font-size: 1.15rem; color: var(--text-main); margin: 0;">${slide.titulo}</h4>
              </div>
              <a href="/slides/${info.numero || 1}?slide=${slideNum}" target="_blank" class="btn btn-sm" style="font-size: 0.82rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.35rem;" title="Abrir este slide exato no projetor">
                <span>🖥️</span> Ver no Projetor
              </a>
            </div>

            <div style="background: var(--bg-subtle-warm); padding: 0.85rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border); margin-bottom: 0.75rem;">
              <strong style="color: var(--accent); font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.5px;">🎯 Objetivo Pedagógico deste Momento:</strong>
              <p style="font-size: 0.88rem; color: var(--text-main); margin: 0.35rem 0 0 0; line-height: 1.5;">${notas.objetivoSlide || 'Contextualização pedagógica para a turma.'}</p>
            </div>

            <div style="background: var(--bg-surface); padding: 1rem; border-radius: var(--radius-sm); border: 1px dashed var(--border);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem;">
                <strong style="color: var(--text-main); font-size: 0.85rem; display: flex; align-items: center; gap: 0.4rem;">
                  <span>🎙️</span> Roteiro Sugerido de Fala para a Dupla (Laura & Maria):
                </strong>
                <button type="button" class="btn btn-sm" onclick="window.CockpitRenderer.copySpeech('${slideNum}')" id="copy-btn-${slideNum}" style="padding: 0.2rem 0.6rem; font-size: 0.75rem; border-radius: var(--radius-pill);" title="Copiar roteiro de fala">
                  📋 Copiar Fala
                </button>
              </div>
              <p id="speech-text-${slideNum}" style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin: 0; font-style: italic;">
                "${notas.oQueFalar || 'Conduzir debate aberto e acolhedor.'}"
              </p>
            </div>

            ${(slide.tipo === 'secao' || slide.tipo === 'titulo-secao') ? `
              <div style="background: var(--bg-surface); border: 1px solid var(--border-amber); border-radius: var(--radius-sm); padding: 0.85rem; margin-top: 0.75rem; text-align: center;">
                <span style="font-size: 0.72rem; font-weight: 700; color: var(--text-amber); text-transform: uppercase; letter-spacing: 0.5px;">📌 ${slide.badge || 'Abertura de Bloco • Título de Impacto'}</span>
                ${slide.citacao ? `
                  <div style="margin-top: 0.6rem; font-style: italic; font-size: 0.88rem; color: var(--text-main); line-height: 1.5; background: rgba(217, 119, 6, 0.08); padding: 0.75rem 1rem; border-radius: 6px; border-left: 3px solid #d97706;">
                    "${slide.citacao}"
                    ${slide.autor ? `<div style="font-style: normal; font-weight: 700; font-size: 0.78rem; color: #d97706; margin-top: 0.35rem; text-align: right;">— ${slide.autor}</div>` : ''}
                  </div>
                ` : `
                  <div style="display: flex; gap: 0.6rem; justify-content: center; margin-top: 0.5rem; flex-wrap: wrap;">
                    <span style="font-size: 0.78rem; background: rgba(220,53,69,0.15); color: #e03131; padding: 0.25rem 0.65rem; border-radius: 4px; font-weight: 600;">🎬 1. IA da Ficção (AGI)</span>
                    <span style="font-size: 0.78rem; color: var(--text-muted); font-weight: bold;">➔</span>
                    <span style="font-size: 0.78rem; background: rgba(40,167,69,0.15); color: #2f9e44; padding: 0.25rem 0.65rem; border-radius: 4px; font-weight: 600;">⚙️ 2. IA Estreita Real (ANI)</span>
                  </div>
                `}
              </div>
            ` : (slide.tipo === 'ia-ficcao') ? `
              <div style="background: var(--bg-surface); border: 1px solid rgba(220,53,69,0.35); border-radius: var(--radius-sm); padding: 0.85rem; margin-top: 0.75rem; display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
                <div style="width: 140px; height: 95px; border-radius: var(--radius-sm); overflow: hidden; background: #000; flex-shrink: 0;">
                  <img src="${slide.imagem || '/static/img/ia_ficcao_rosie.jpg'}" alt="Ficção Rosie" style="width: 100%; height: 100%; object-fit: cover;" />
                </div>
                <div style="flex: 1; min-width: 200px;">
                  <span style="font-size: 0.75rem; font-weight: 700; color: #e03131; text-transform: uppercase;">${slide.badge || 'Ficção Científica'}</span>
                  <p style="font-size: 0.85rem; color: var(--text-main); margin: 0.25rem 0 0 0; font-weight: 600;">${slide.conclusaoFiccao || 'Robôs conscientes com sentimentos (0% real hoje).'}</p>
                </div>
              </div>
            ` : (slide.tipo === 'ia-estreita') ? `
              <div style="background: var(--bg-surface); border: 1px solid rgba(40,167,69,0.35); border-radius: var(--radius-sm); padding: 0.85rem; margin-top: 0.75rem;">
                <div style="font-size: 0.75rem; font-weight: 700; color: #2f9e44; text-transform: uppercase; margin-bottom: 0.5rem;">${slide.badge || 'IA Estreita Real (100% da IA de hoje)'}</div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.5rem;">
                  ${(slide.recursos || []).slice(0, 6).map(r => `
                    <div style="font-size: 0.8rem; color: var(--text-secondary); display: flex; align-items: center; gap: 0.35rem;">
                      <span>${r.icone || '⚙️'}</span>
                      <strong style="color: var(--text-main);">${r.titulo}</strong>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : (slide.colunaReal && slide.colunaFiccao) ? `
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 0.75rem;">
                <div style="background: var(--bg-surface); border: 1px solid rgba(40,167,69,0.35); border-radius: var(--radius-sm); padding: 0.75rem; display: flex; flex-direction: column; gap: 0.4rem;">
                  <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem; font-weight: 700; color: #2f9e44;">
                    <span>${slide.colunaReal.tag}</span>
                    <span>${slide.colunaReal.icone || '⚙️'}</span>
                  </div>
                  <ul style="list-style: none; padding: 0; margin: 0.25rem 0; font-size: 0.8rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.25rem;">
                    ${(slide.colunaReal.itens || []).slice(0, 4).map(it => `
                      <li style="display: flex; align-items: center; gap: 0.35rem;">
                        <span style="color: #2f9e44; font-weight: bold;">✓</span>
                        <span>${it}</span>
                      </li>
                    `).join('')}
                    ${(slide.colunaReal.itens || []).length > 4 ? `
                      <li style="color: var(--text-muted); font-size: 0.75rem; font-style: italic;">+ mais ${(slide.colunaReal.itens || []).length - 4} exemplos no slide</li>
                    ` : ''}
                  </ul>
                </div>

                <div style="background: var(--bg-surface); border: 1px solid rgba(220,53,69,0.35); border-radius: var(--radius-sm); padding: 0.75rem; display: flex; flex-direction: column; gap: 0.4rem;">
                  <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem; font-weight: 700; color: #e03131;">
                    <span>${slide.colunaFiccao.tag}</span>
                    <span>${slide.colunaFiccao.icone || '🎬'}</span>
                  </div>
                  <div style="width: 100%; height: 105px; border-radius: var(--radius-sm); overflow: hidden; background: #000; display: flex; align-items: center; justify-content: center;">
                    <img src="${slide.colunaFiccao.imagem}" alt="${slide.colunaFiccao.tag}" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;" />
                  </div>
                  <span style="font-size: 0.82rem; font-weight: 600; color: var(--text-main); line-height: 1.2;">${slide.colunaFiccao.titulo || ''}</span>
                </div>
              </div>
            ` : (slide.tipo === 'comparativo-imagens' && slide.colunasImagens) ? `
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 0.75rem;">
                ${slide.colunasImagens.map((col, idx) => {
                  const isFiccao = idx === 0 || (col.tag && col.tag.toLowerCase().includes('ficção'));
                  return `
                    <div style="background: var(--bg-surface); border: 1px solid ${isFiccao ? 'rgba(220,53,69,0.3)' : 'rgba(40,167,69,0.3)'}; border-radius: var(--radius-sm); padding: 0.6rem; display: flex; flex-direction: column; gap: 0.4rem;">
                      <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; font-weight: 700; color: ${isFiccao ? '#e03131' : '#2f9e44'};">
                        <span>${col.tag}</span>
                        <span>${col.icone || (isFiccao ? '🎬' : '⚙️')}</span>
                      </div>
                      <div style="width: 100%; height: 110px; border-radius: var(--radius-sm); overflow: hidden; background: #000; display: flex; align-items: center; justify-content: center;">
                        <img src="${col.imagem}" alt="${col.tag}" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;" />
                      </div>
                      <span style="font-size: 0.82rem; font-weight: 600; color: var(--text-main); line-height: 1.2;">${col.titulo || ''}</span>
                    </div>
                  `;
                }).join('')}
              </div>
            ` : ''}

            ${techHTML}
          </article>
        `;
      }).join('');

      return `
        <section class="topic-group-card" id="topic-group-${bloco.id}">
          <button type="button" class="topic-group-header-btn" id="topic-group-btn-${bloco.id}" onclick="window.CockpitRenderer.toggleTopicGroup(${bloco.id})" aria-expanded="true" aria-controls="topic-group-body-${bloco.id}">
            <div class="topic-group-header-main">
              <span class="topic-group-icon">${bloco.icone || '📌'}</span>
              <div class="topic-group-header-text">
                <div class="topic-group-header-title-row">
                  <h3 class="topic-group-title">${bloco.titulo}</h3>
                  <span class="chip chip-warm topic-group-range-badge">Slides ${bloco.slidesRange[0]} a ${bloco.slidesRange[1]}</span>
                </div>
                <p class="topic-group-sub">${bloco.subtitulo || ''}</p>
              </div>
            </div>
            <div class="topic-group-header-meta">
              <span class="topic-group-meta-pill">⏱️ ${bloco.tempoEstimado || ''}</span>
              <span class="topic-group-meta-pill topic-group-count-pill">${slidesDoBloco.length} ${slidesDoBloco.length === 1 ? 'slide' : 'slides'}</span>
              <span class="topic-group-chevron" id="topic-group-chevron-${bloco.id}">▾</span>
            </div>
          </button>

          <div class="topic-group-body open" id="topic-group-body-${bloco.id}" role="region" aria-labelledby="topic-group-btn-${bloco.id}">
            <div class="topic-group-slides-grid">
              ${slidesCardsHTML}
            </div>
          </div>
        </section>
      `;
    }).join('');

    container.innerHTML = toolbarHTML + groupsHTML;
  },

  /**
   * Alterna recolhimento/expansão de um bloco temático
   */
  toggleTopicGroup(blocoId) {
    const body = document.getElementById(`topic-group-body-${blocoId}`);
    const btn = document.getElementById(`topic-group-btn-${blocoId}`);
    const chevron = document.getElementById(`topic-group-chevron-${blocoId}`);
    const card = document.getElementById(`topic-group-${blocoId}`);
    if (!body) return;

    const isCollapsed = body.classList.contains('collapsed');
    if (isCollapsed) {
      body.classList.remove('collapsed');
      body.classList.add('open');
      if (btn) btn.setAttribute('aria-expanded', 'true');
      if (chevron) chevron.classList.remove('rotated');
      if (card) card.classList.remove('is-collapsed');
    } else {
      body.classList.remove('open');
      body.classList.add('collapsed');
      if (btn) btn.setAttribute('aria-expanded', 'false');
      if (chevron) chevron.classList.add('rotated');
      if (card) card.classList.add('is-collapsed');
    }
  },

  /**
   * Expande todos os blocos temáticos
   */
  expandAllTopicGroups() {
    document.querySelectorAll('.topic-group-body').forEach(el => {
      el.classList.remove('collapsed');
      el.classList.add('open');
    });
    document.querySelectorAll('.topic-group-header-btn').forEach(btn => {
      btn.setAttribute('aria-expanded', 'true');
    });
    document.querySelectorAll('.topic-group-chevron').forEach(ch => {
      ch.classList.remove('rotated');
    });
    document.querySelectorAll('.topic-group-card').forEach(card => {
      card.classList.remove('is-collapsed');
    });
  },

  /**
   * Recolhe todos os blocos temáticos
   */
  collapseAllTopicGroups() {
    document.querySelectorAll('.topic-group-body').forEach(el => {
      el.classList.remove('open');
      el.classList.add('collapsed');
    });
    document.querySelectorAll('.topic-group-header-btn').forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
    });
    document.querySelectorAll('.topic-group-chevron').forEach(ch => {
      ch.classList.add('rotated');
    });
    document.querySelectorAll('.topic-group-card').forEach(card => {
      card.classList.add('is-collapsed');
    });
  },

  /**
   * Copia o roteiro de fala para a área de transferência
   */
  copySpeech(slideNum) {
    const speechEl = document.getElementById(`speech-text-${slideNum}`);
    const btn = document.getElementById(`copy-btn-${slideNum}`);
    if (!speechEl) return;
    const text = speechEl.textContent.trim().replace(/^"|"$/g, '');
    navigator.clipboard.writeText(text).then(() => {
      if (btn) {
        const original = btn.innerHTML;
        btn.innerHTML = '✓ Copiado!';
        btn.style.color = 'var(--accent, #d4a373)';
        setTimeout(() => {
          btn.innerHTML = original;
          btn.style.color = '';
        }, 2000);
      }
    });
  },

  /**
   * Alterna a visualização do painel de aprofundamento técnico
   */
  toggleDeepdive(slideId) {
    const panel = document.getElementById(`deepdive-${slideId}`);
    const chevron = document.getElementById(`chevron-${slideId}`);
    const btn = document.getElementById(`btn-deepdive-${slideId}`) || (chevron ? chevron.closest('.btn-tech-deepdive') : null);
    if (!panel) return;

    const isOpen = panel.classList.contains('open');
    if (isOpen) {
      panel.classList.remove('open');
      if (btn) {
        btn.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      }
    } else {
      panel.classList.add('open');
      if (btn) {
        btn.classList.add('active');

        btn.setAttribute('aria-expanded', 'true');
      }
    }
  },

  /**
   * ABA 3: Atividades & Gabarito Comentado
   */
  renderAtividadesGabarito(data) {
    const container = document.getElementById('cockpit-gabarito-container');
    if (!container) return;

    const oficina = data.oficinaPratica || {};
    const casos = oficina.casosGabarito || [];
    const hasContent = Boolean(oficina.titulo || casos.length > 0);

    if (!hasContent) {
      container.innerHTML = `
        <div class="pedagogical-highlight-card" style="text-align: center; padding: 3rem 2rem;">
          <div style="font-size: 2.8rem; margin-bottom: 0.75rem;">🧪</div>
          <h3 style="font-size: 1.25rem; color: var(--text-main); margin-bottom: 0.5rem;">
            Aba de Atividades & Gabaritos
          </h3>
          <p style="font-size: 0.95rem; color: var(--text-secondary); max-width: 55ch; margin: 0 auto 1.5rem auto; line-height: 1.6;">
            Nenhuma atividade ou gabarito cadastrado no momento para este encontro. O espaço está preservado e pronto para novas diretrizes pedagógicas.
          </p>
          <span class="chip chip-warm">Módulo Preservado • Pronto para Uso</span>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="pedagogical-highlight-card">
        <div class="module-meta-tags">
          <span class="chip chip-warm">${oficina.duracao || 'Oficina de Laboratório'}</span>
          <span class="chip">Avaliação: ${oficina.peso || '0,5 ponto no Portfólio Digital'}</span>
        </div>
        <h3 style="font-size: 1.3rem; color: var(--text-main); margin-bottom: 0.5rem;">
          ${oficina.titulo || 'Atividade Prática'}
        </h3>
        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">
          ${oficina.descricao || ''}
        </p>
      </div>

      <!-- GABARITO DOS PROFESSORES (OCULTO NO MODO ALUNO) -->
      <div class="docente-only" style="margin-top: 2rem;">
        <div class="section-title-wrap" style="border-color: var(--accent);">
          <span style="font-size: 1.3rem;">🔑</span>
          <h3 style="color: var(--accent);">Gabarito Completo & Guia de Correção da Dupla</h3>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
          ${casos.map(c => `
            <div class="pedagogical-highlight-card" style="border-left: 4px solid var(--accent);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
                <strong style="color: var(--text-main); font-size: 1.05rem;">${c.caso}</strong>
                <span class="chip">${c.categoria}</span>
              </div>
              <div style="font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary);">
                <p><strong>1. Dados de Entrada:</strong> ${c.entradas}</p>
                <p><strong>2. O que a IA faz:</strong> ${c.oQueIaFaz}</p>
                <p><strong>3. Saída gerada:</strong> ${c.saida}</p>
                <p><strong>4. Por que programação com regras fixas falharia:</strong> ${c.contraprova}</p>
              </div>
            </div>
          `).join('')}
        </div>

        ${oficina.planoB ? `
          <div class="pedagogical-highlight-card" style="background: var(--bg-subtle-warm); margin-top: 2rem;">
            <h4 style="color: var(--accent); margin-bottom: 0.5rem;">🚨 Plano B de Contingência Técnica (Se o laboratório oscilar)</h4>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5;">
              ${oficina.planoB}
            </p>
          </div>
        ` : ''}
      </div>

      <!-- Mensagem para o Modo Aluno -->
      <div class="aluno-only" style="display: none; padding: 2rem; text-align: center; background: var(--bg-surface); border: 1px dashed var(--border); border-radius: var(--radius-md); margin-top: 1.5rem;">
        <span style="font-size: 2rem;">📝</span>
        <h4 style="margin: 0.5rem 0; color: var(--text-main);">Instruções para Realização em Laboratório</h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary); max-width: 60ch; margin: 0 auto;">
          Abra o seu <strong>Portfólio Digital</strong> no computador e preencha a atividade com atenção. Tire suas dúvidas diretamente com as professoras na sala!
        </p>
      </div>
    `;
  },

  /**
   * ABA 4: Perguntas dos Alunos & Armadilhas
   */
  renderPerguntas(data) {
    const container = document.getElementById('cockpit-perguntas-container');
    if (!container) return;

    const perguntas = data.perguntasAlunos || [];

    container.innerHTML = `
      <div class="pedagogical-highlight-card">
        <h3 style="font-size: 1.2rem; color: var(--text-main); margin-bottom: 0.5rem;">
          Perguntas Capciosas & Dúvidas Clássicas dos Alunos (Encontro ${data.moduloInfo?.numero || 1})
        </h3>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">
          Fichas com respostas orientadas para que Laura e Maria respondam com segurança, precisão e firmeza pedagógica.
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.25rem; margin-top: 1.5rem;">
        ${perguntas.map(p => `
          <div class="pedagogical-highlight-card">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="chip chip-warm">Dúvida ${p.numero}</span>
              <strong style="color: var(--text-main); font-size: 1.05rem;">"${p.duvida}"</strong>
            </div>
            <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 0.75rem;">
              <strong>Como responder:</strong> "${p.resposta}"
            </p>
            ${p.pontoDidatico ? `
              <div style="font-size: 0.8rem; color: var(--accent); background: var(--bg-subtle-warm); padding: 0.5rem; border-radius: var(--radius-sm);">
                🎯 <strong>Ponto Didático:</strong> ${p.pontoDidatico}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    `;
  },

  /**
   * ABA 5: Anotações & Combinados da Dupla
   */
  renderAnotacoesPapeis(data) {
    const container = document.getElementById('cockpit-papeis-container');
    if (!container) return;

    const papeis = data.divisaoPapeis || [];
    const meetingNum = data.moduloInfo?.numero || 1;

    container.innerHTML = `
      <div style="background: var(--bg-subtle-warm); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem;">
        <h4 style="font-size: 1rem; color: var(--text-main); margin-bottom: 0.75rem;">
          📋 Divisão dos Momentos da Aula (Combinados Rápidos da Dupla)
        </h4>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; font-size: 0.88rem;">
          ${papeis.map((p, idx) => `
            <div style="background: var(--bg-surface); padding: 0.75rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border);">
              <strong>${p.bloco}:</strong> ${p.tema}<br>
              ${p.papel === 'radio' ? `
                <label style="margin-top: 0.35rem; display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.8rem; color: var(--text-secondary);">
                  <input type="radio" name="role_m${meetingNum}_b${idx+1}" value="laura" class="role-check"> Laura conduz
                </label>
                <label style="margin-left: 0.75rem; display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.8rem; color: var(--text-secondary);">
                  <input type="radio" name="role_m${meetingNum}_b${idx+1}" value="maria" class="role-check"> Maria conduz
                </label>
              ` : `
                <span style="color: var(--accent); font-weight: 600; font-size: 0.8rem;">🤝 Ambas circulam tirando dúvidas</span>
              `}
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Re-vincular eventos de LocalStorage para papéis
    const roleCheckboxes = container.querySelectorAll('.role-check');
    roleCheckboxes.forEach(cb => {
      const savedRole = localStorage.getItem(`role_${cb.name}`);
      if (savedRole && cb.value === savedRole) {
        cb.checked = true;
      }
      cb.addEventListener('change', () => {
        if (cb.checked) {
          localStorage.setItem(`role_${cb.name}`, cb.value);
        }
      });
    });
  }
};

window.CockpitRenderer = CockpitRenderer;
