/**
 * Aplicação Principal – Portal & Cockpit de Co-Docência (Minicurso de IA)
 * Arquitetura SPA em 2 Níveis:
 * - Nível 1: Dashboard Geral do Minicurso
 * - Nível 2: Cockpit da Aula (Módulo Âncora com 4 Abas Pedagógicas)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. FONTE ÚNICA DE DADOS DOS ENCONTROS (INJETADA PELO BACKEND)
  // =========================================================================
  const MEETINGS_DATA = window.MEETINGS_DATA || {};

  // =========================================================================
  // 2. GERENCIADOR DE VISUALIZAÇÕES (SPA: DASHBOARD vs COCKPIT)
  // =========================================================================
  const viewDashboard = document.getElementById('view-dashboard');
  const viewCockpit = document.getElementById('view-cockpit');
  const btnBackDashboard = document.getElementById('btn-back-dashboard');
  const breadcrumbModule = document.getElementById('breadcrumb-current-view');
  let renderedCockpitModuleId = null;

  function getMeetingRecord(moduleId) {
    return MEETINGS_DATA[moduleId] || MEETINGS_DATA[String(moduleId)] || MEETINGS_DATA[1] || null;
  }

  function initCockpitData(moduleId = 1) {
    if (renderedCockpitModuleId === moduleId) return;
    const currentData = window[`ENCONTRO_${moduleId}_DATA`] || window.CURSO_IA_CURRENT_DATA || window.ENCONTRO_1_DATA;
    if (window.CockpitRenderer && currentData) {
      window.CockpitRenderer.renderAll(currentData);
      renderedCockpitModuleId = moduleId;
    }
  }

  function showDashboard() {
    if (viewCockpit) viewCockpit.classList.add('view-hidden');
    if (viewDashboard) {
      viewDashboard.classList.remove('view-hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (breadcrumbModule) {
      breadcrumbModule.textContent = 'Painel Geral';
    }
    if (window.history && window.history.pushState && window.location.pathname !== '/') {
      window.history.pushState({ view: 'dashboard' }, '', '/');
    }
  }

  function showCockpit(moduleId = 1) {
    const meeting = getMeetingRecord(moduleId);
    const targetId = (meeting && meeting.isReady) ? Number(meeting.num) : 1;
    const shortTitle = (meeting && meeting.shortTitle) ? meeting.shortTitle : 'Desmistificando a IA';

    if (viewDashboard) viewDashboard.classList.add('view-hidden');
    if (viewCockpit) {
      viewCockpit.classList.remove('view-hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (breadcrumbModule) {
      breadcrumbModule.textContent = `Módulo ${targetId}: ${shortTitle}`;
    }
    initCockpitData(targetId);
    if (window.history && window.history.pushState && window.location.pathname !== `/encontro/${targetId}`) {
      window.history.pushState({ view: 'cockpit', moduleId: targetId }, '', `/encontro/${targetId}`);
    }
  }

  if (btnBackDashboard) {
    btnBackDashboard.addEventListener('click', showDashboard);
  }

  // Suporte a voltar/avançar no navegador
  window.addEventListener('popstate', () => {
    const match = window.location.pathname.match(/^\/encontro\/(\d+)/);
    if (match) {
      showCockpit(Number(match[1]));
    } else {
      showDashboard();
    }
  });

  // Se a página já abriu diretamente na visão do Cockpit (ex: /encontro/1), inicializa os dados imediatamente
  if (viewCockpit && !viewCockpit.classList.contains('view-hidden')) {
    const match = window.location.pathname.match(/^\/encontro\/(\d+)/);
    initCockpitData(match ? Number(match[1]) : 1);
  }

  // =========================================================================
  // 3. INSPETOR DINÂMICO DOS 7 ENCONTROS
  // =========================================================================
  const timelineSteps = document.querySelectorAll('.timeline-step[data-meeting]');
  const inspectorBadgeStatus = document.getElementById('inspector-badge-status');
  const inspectorDate = document.getElementById('inspector-date');
  const inspectorDuration = document.getElementById('inspector-duration');
  const inspectorLocation = document.getElementById('inspector-location');
  const inspectorTitle = document.getElementById('inspector-title');
  const inspectorDesc = document.getElementById('inspector-desc');
  const inspectorActions = document.getElementById('inspector-actions');

  function renderMeetingInspector(meetingNum) {
    const data = getMeetingRecord(meetingNum);
    if (!data) return;

    if (inspectorBadgeStatus) inspectorBadgeStatus.textContent = data.statusBadge;
    if (inspectorDate) inspectorDate.textContent = `📅 ${data.date}`;
    if (inspectorDuration) inspectorDuration.textContent = `⏱️ ${data.duration}`;
    if (inspectorLocation) inspectorLocation.textContent = `📍 ${data.location}`;
    if (inspectorTitle) inspectorTitle.textContent = data.title;
    if (inspectorDesc) inspectorDesc.textContent = data.desc;

    if (inspectorActions) {
      if (data.isReady) {
        inspectorActions.innerHTML = `
          <span id="inspector-action-tip" style="font-size: 0.88rem; color: var(--text-muted);">${data.actionTip}</span>
          <button class="btn btn-primary" style="font-size: 0.95rem; padding: 0.65rem 1.35rem;" id="btn-enter-cockpit">
            Entrar no Cockpit da Aula ➔
          </button>
        `;
        const btnEnter = document.getElementById('btn-enter-cockpit');
        if (btnEnter) {
          btnEnter.addEventListener('click', () => showCockpit(Number(data.num)));
        }
      } else {
        inspectorActions.innerHTML = `
          <span id="inspector-action-tip" style="font-size: 0.88rem; color: var(--text-muted);">${data.actionTip}</span>
          <button class="btn" style="font-size: 0.9rem; padding: 0.65rem 1.2rem;" id="btn-planned-meeting">
            📋 Ementa Prevista (${data.date})
          </button>
        `;
        const btnPlanned = document.getElementById('btn-planned-meeting');
        if (btnPlanned) {
          btnPlanned.addEventListener('click', () => {
            showToast(`📚 Módulo ${data.num} programado para ${data.date}. Planejamento em andamento!`);
          });
        }
      }
    }
  }

  timelineSteps.forEach(step => {
    step.addEventListener('click', () => {
      const meetingNum = Number(step.getAttribute('data-meeting'));
      timelineSteps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');
      renderMeetingInspector(meetingNum);

      const inspector = document.getElementById('meeting-inspector-container');
      if (inspector) {
        inspector.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });

  // Vincula o botão inicial do Inspetor renderizado via SSR
  const initialBtnEnter = document.getElementById('btn-enter-cockpit');
  if (initialBtnEnter) {
    initialBtnEnter.addEventListener('click', () => showCockpit(1));
  }

  // =========================================================================
  // 4. COCKPIT: NAVEGADOR DAS 4 ABAS DE FOCO
  // =========================================================================
  const cockpitTabBtns = document.querySelectorAll('.cockpit-tab-btn');
  const tabPanels = document.querySelectorAll('.tab-content-panel');

  function switchTab(tabId) {
    cockpitTabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
    });

    tabPanels.forEach(panel => {
      panel.classList.toggle('active', panel.id === `tab-${tabId}`);
    });
  }

  cockpitTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      switchTab(tabId);
    });
  });

  // =========================================================================
  // 5. CONTROLES GERAIS: TEMA ESCURO & TOASTS
  // =========================================================================
  const THEME_KEY = 'curso_ia_theme';
  const btnThemeToggle = document.getElementById('btn-theme-toggle');
  const currentTheme = localStorage.getItem(THEME_KEY) || localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (btnThemeToggle) {
    btnThemeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    btnThemeToggle.addEventListener('click', () => {
      const active = document.documentElement.getAttribute('data-theme');
      const next = active === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem(THEME_KEY, next);
      btnThemeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
    });
  }

  let toastTimer = null;
  function showToast(msg) {
    let toast = document.getElementById('app-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'app-toast';
      toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background-color: var(--text-main);
        color: var(--bg-surface);
        padding: 0.85rem 1.35rem;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        font-size: 0.9rem;
        font-weight: 500;
        z-index: 9999;
        opacity: 0;
        transform: translateY(10px);
        transition: all 0.25s ease;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';

    if (toastTimer) {
      clearTimeout(toastTimer);
    }
    toastTimer = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
    }, 3200);
  }

  window.showToast = showToast;

  // =========================================================================
  // 6. GERENCIADOR DA JANELA DE SLIDES & SINCRONIZAÇÃO DE LOGOUT (AUTO-CLOSE)
  // =========================================================================
  let slidesWindowRef = null;
  const AUTH_CHANNEL_NAME = 'portal_ia_auth_channel';
  let authChannel = null;

  try {
    if ('BroadcastChannel' in window) {
      authChannel = new BroadcastChannel(AUTH_CHANNEL_NAME);
    }
  } catch (e) {
    console.warn('BroadcastChannel não disponível:', e);
  }

  function openSlidesWindow(url) {
    if (slidesWindowRef && !slidesWindowRef.closed) {
      slidesWindowRef.location.href = url;
      slidesWindowRef.focus();
    } else {
      slidesWindowRef = window.open(url, 'portal_ia_slides_window');
    }
    localStorage.setItem('portal_ia_slides_active', 'true');
  }

  window.openSlidesWindow = openSlidesWindow;

  document.addEventListener('click', (e) => {
    const exportBtn = e.target.closest('#btn-export-slides, .btn-export-slides');
    if (exportBtn) {
      e.preventDefault();
      const match = window.location.pathname.match(/^\/encontro\/(\d+)/);
      const meetingId = match ? match[1] : 1;
      showToast('Iniciando download do PDF oficial 16:9 widescreen...');
      window.location.href = `/download/slides/${meetingId}.pdf`;
      return;
    }

    const slidesLink = e.target.closest('a[href*="/slides"], .btn-open-slides');
    if (slidesLink) {
      e.preventDefault();
      const url = slidesLink.getAttribute('href');
      if (url) {
        openSlidesWindow(url);
      }
      return;
    }

    const logoutLink = e.target.closest('a[href*="/logout"], .btn-logout');
    if (logoutLink) {
      e.preventDefault();
      const logoutUrl = logoutLink.getAttribute('href') || '/logout';

      if (slidesWindowRef && !slidesWindowRef.closed) {
        try {
          slidesWindowRef.close();
        } catch (err) {
          console.warn('Erro ao fechar slides diretamente:', err);
        }
      }

      if (authChannel) {
        try {
          authChannel.postMessage({ action: 'logout', timestamp: Date.now() });
        } catch (err) {
          console.warn('Falha ao enviar sinal de logout via BroadcastChannel:', err);
        }
      }

      localStorage.setItem('portal_ia_logout_signal', Date.now().toString());
      localStorage.removeItem('portal_ia_slides_active');

      setTimeout(() => {
        window.location.href = logoutUrl;
      }, 50);
    }
  });
});
