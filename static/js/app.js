/**
 * Aplicação Principal – Portal & Cockpit de Co-Docência (Minicurso de IA)
 * Arquitetura SPA em 2 Níveis:
 * - Nível 1: Dashboard Geral do Minicurso
 * - Nível 2: Cockpit da Aula (Módulo 1 Âncora com 5 Abas de Foco)
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. GERENCIADOR DE VISUALIZAÇÕES (SPA: DASHBOARD vs COCKPIT)
  // =========================================================================
  const viewDashboard = document.getElementById('view-dashboard');
  const viewCockpit = document.getElementById('view-cockpit');
  const btnBackDashboard = document.getElementById('btn-back-dashboard');
  const breadcrumbModule = document.getElementById('breadcrumb-current-view');

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
    if (viewDashboard) viewDashboard.classList.add('view-hidden');
    if (viewCockpit) {
      viewCockpit.classList.remove('view-hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (breadcrumbModule) {
      breadcrumbModule.textContent = `Módulo ${moduleId}: Desmistificando a IA`;
    }
    initCockpitData();
    if (window.history && window.history.pushState && window.location.pathname !== `/encontro/${moduleId}`) {
      window.history.pushState({ view: 'cockpit', moduleId }, '', `/encontro/${moduleId}`);
    }
  }

  if (btnBackDashboard) {
    btnBackDashboard.addEventListener('click', showDashboard);
  }

  // Suporte a voltar/avançar no navegador
  window.addEventListener('popstate', (e) => {
    if (window.location.pathname.startsWith('/encontro/')) {
      showCockpit(1);
    } else {
      showDashboard();
    }
  });

  // =========================================================================
  // 2. DADOS E INSPETOR DINÂMICO DOS 7 ENCONTROS
  // =========================================================================
  const MEETINGS_DATA = {
    1: {
      num: 1,
      date: '09 de Outubro',
      duration: '3 Horas Presenciais',
      location: 'Laboratório X',
      title: 'Encontro 1: A gênese da Inteligência Artificial, tipos, modelos e exemplos de uso. Ética na utilização da IAGen. Oportunidades e desafios.',
      desc: 'Desmistificação dos mitos do cinema vs. IA real, introdução à história e evolução dos modelos, aplicações cotidianas invisíveis e debate crítico sobre ética, oportunidades e desafios no uso de IA Generativa.',
      statusBadge: '🟢 Cockpit Liberado',
      isReady: true,
      actionTip: 'Módulo 1 totalmente formatado com Fio da Meada, Slides, Gabarito e Caderno da Dupla.'
    },
    2: {
      num: 2,
      date: '23 de Outubro',
      duration: '3 Horas Presenciais',
      location: 'Laboratório X',
      title: 'Encontro 2: Como acessar os modelos de IAGen. Criação de prompts básicos.',
      desc: 'Visão prática das principais plataformas e modelos de IA Generativa. Primeiros passos na formulação de instruções claras, contextualização e construção de prompts iniciais.',
      statusBadge: '🟡 Em Planejamento',
      isReady: false,
      actionTip: 'Roteiro e dinâmicas de laboratório em fase de alinhamento com a Coordenação.'
    },
    3: {
      num: 3,
      date: '30 de Outubro',
      duration: '3 Horas Presenciais',
      location: 'Laboratório X',
      title: 'Encontro 3: Criação de prompts.',
      desc: 'Aprofundamento na engenharia de instrução: papéis, contexto, restrições, personas docentes e técnicas de refinamento iterativo para respostas de alta qualidade.',
      statusBadge: '🟡 Em Planejamento',
      isReady: false,
      actionTip: 'Material pedagógico e exercícios em elaboração pela dupla docente.'
    },
    4: {
      num: 4,
      date: '06 de Novembro',
      duration: '3 Horas Presenciais',
      location: 'Laboratório X',
      title: 'Encontro 4: Criação de prompts.',
      desc: 'Técnicas intermediárias e avançadas de prompt: estruturação de saídas em tabelas e markdown, raciocínio passo a passo e resolução orientada de problemas.',
      statusBadge: '⚪ Sequência',
      isReady: false,
      actionTip: 'Encontro programado na sequência da grade curricular (32h).'
    },
    5: {
      num: 5,
      date: '13 de Novembro',
      duration: '3 Horas Presenciais',
      location: 'Laboratório X',
      title: 'Encontro 5: Criação de prompts.',
      desc: 'Oficina prática de prompts para apoio a estudos, redação, sínteses e rotinas de produtividade com foco no olhar crítico e prevenção de alucinações.',
      statusBadge: '⚪ Sequência',
      isReady: false,
      actionTip: 'Encontro programado na sequência da grade curricular (32h).'
    },
    6: {
      num: 6,
      date: '27 de Novembro',
      duration: '3 Horas Presenciais',
      location: 'Laboratório X',
      title: 'Encontro 6: Criação de prompts.',
      desc: 'Refinamento prático, comparação de comportamento entre diferentes modelos e estratégias para criar fluxos contínuos e consistentes com IAGen.',
      statusBadge: '⚪ Sequência',
      isReady: false,
      actionTip: 'Encontro programado na sequência da grade curricular (32h).'
    },
    7: {
      num: 7,
      date: '04 de Dezembro',
      duration: '3 Horas Presenciais',
      location: 'Laboratório X',
      title: 'Encontro 7: Fechamento do curso e avaliação.',
      desc: 'Consolidação das aprendizagens, apresentação das produções dos estudantes, avaliação reflexiva e encerramento oficial com certificação de 32 horas.',
      statusBadge: '⚪ Encerramento',
      isReady: false,
      actionTip: 'Encontro final de fechamento, síntese e avaliação formativa.'
    }
  };

  const timelineSteps = document.querySelectorAll('.timeline-step[data-meeting]');
  const inspectorBadgeStatus = document.getElementById('inspector-badge-status');
  const inspectorDate = document.getElementById('inspector-date');
  const inspectorDuration = document.getElementById('inspector-duration');
  const inspectorLocation = document.getElementById('inspector-location');
  const inspectorTitle = document.getElementById('inspector-title');
  const inspectorDesc = document.getElementById('inspector-desc');
  const inspectorActionTip = document.getElementById('inspector-action-tip');
  const inspectorActions = document.getElementById('inspector-actions');

  function renderMeetingInspector(meetingNum) {
    const data = MEETINGS_DATA[meetingNum];
    if (!data) return;

    if (inspectorBadgeStatus) inspectorBadgeStatus.textContent = data.statusBadge;
    if (inspectorDate) inspectorDate.textContent = `📅 ${data.date}`;
    if (inspectorDuration) inspectorDuration.textContent = `⏱️ ${data.duration}`;
    if (inspectorLocation) inspectorLocation.textContent = `📍 ${data.location}`;
    if (inspectorTitle) inspectorTitle.textContent = data.title;
    if (inspectorDesc) inspectorDesc.textContent = data.desc;
    if (inspectorActionTip) inspectorActionTip.textContent = data.actionTip;

    if (inspectorActions) {
      if (data.isReady) {
        inspectorActions.innerHTML = `
          <span style="font-size: 0.88rem; color: var(--text-muted);">${data.actionTip}</span>
          <button class="btn btn-primary" style="font-size: 0.95rem; padding: 0.65rem 1.35rem;" id="btn-enter-cockpit">
            Entrar no Cockpit da Aula ➔
          </button>
        `;
        const btnEnter = document.getElementById('btn-enter-cockpit');
        if (btnEnter) {
          btnEnter.addEventListener('click', () => showCockpit(1));
        }
      } else {
        inspectorActions.innerHTML = `
          <span style="font-size: 0.88rem; color: var(--text-muted);">${data.actionTip}</span>
          <button class="btn" style="font-size: 0.9rem; padding: 0.65rem 1.2rem;"
            onclick="window.showToast('📚 Encontro ${data.num} programado para ${data.date}. Planejamento em andamento!')"
          >
            📋 Ementa Prevista (${data.date})
          </button>
        `;
      }
    }
  }

  timelineSteps.forEach(step => {
    step.addEventListener('click', () => {
      const meetingNum = Number(step.getAttribute('data-meeting'));
      timelineSteps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');
      renderMeetingInspector(meetingNum);

      // Scroll suave até o inspetor
      const inspector = document.getElementById('meeting-inspector-container');
      if (inspector) {
        inspector.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });

  // Inicializar inspetor com o Encontro 1
  renderMeetingInspector(1);

  // =========================================================================
  // 4. COCKPIT: NAVEGADOR DAS 5 ABAS DE FOCO & RENDERIZAÇÃO MODULAR
  // =========================================================================
  const cockpitTabBtns = document.querySelectorAll('.cockpit-tab-btn');
  const tabPanels = document.querySelectorAll('.tab-content-panel');

  // Inicializa o motor de renderização pedagógica das 5 abas
  function initCockpitData() {
    const currentData = window.CURSO_IA_CURRENT_DATA || window.ENCONTRO_1_DATA;
    if (window.CockpitRenderer && currentData) {
      window.CockpitRenderer.renderAll(currentData);
    }
  }

  initCockpitData();

  function switchTab(tabId) {
    cockpitTabBtns.forEach(btn => {
      if (btn.getAttribute('data-tab') === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    tabPanels.forEach(panel => {
      if (panel.id === `tab-${tabId}`) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }

  cockpitTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      switchTab(tabId);
    });
  });

  // =========================================================================
  // 5. PARECER DO PROFESSOR & ANOTAÇÕES (EXPORTAÇÃO DIRETA EM TXT - STATELESS)
  // =========================================================================
  const notesTextarea = document.getElementById('shared-notes-textarea');
  const btnExportNotes = document.getElementById('btn-export-notes');
  const notesCharCount = document.getElementById('notes-char-count');

  const currentMeetingId = 1; // Padrão Encontro 1

  // Restaura rascunho da sessão local (se houver)
  if (notesTextarea) {
    const savedDraft = localStorage.getItem(`draft_parecer_meeting_${currentMeetingId}`);
    if (savedDraft) {
      notesTextarea.value = savedDraft;
    }

    function updateCharCount() {
      const len = notesTextarea.value.length;
      if (notesCharCount) {
        notesCharCount.textContent = `${len} caracter${len === 1 ? '' : 'es'} digitado${len === 1 ? '' : 's'}`;
      }
    }

    updateCharCount();

    // Salva rascunho no localStorage do navegador para segurança do usuário
    notesTextarea.addEventListener('input', () => {
      localStorage.setItem(`draft_parecer_meeting_${currentMeetingId}`, notesTextarea.value);
      updateCharCount();
    });
  }

  // Exportação direta e instantânea em arquivo .txt (Blob UTF-8)
  if (btnExportNotes) {
    btnExportNotes.addEventListener('click', () => {
      const textoConteudo = notesTextarea ? notesTextarea.value.trim() : '';
      
      if (!textoConteudo) {
        if (window.showToast) {
          window.showToast('⚠️ Digite seu parecer ou anotações antes de exportar.');
        }
        if (notesTextarea) notesTextarea.focus();
        return;
      }

      const agora = new Date();
      const dataFormatada = agora.toLocaleDateString('pt-BR');
      const horaFormatada = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
      
      const usuarioAtual = (window.CURRENT_USER && window.CURRENT_USER.name) || 'Docente / Coordenação';
      const papelAtual = (window.CURRENT_USER && window.CURRENT_USER.role) || 'Equipe Pedagógica';

      const cabecalho = 
`================================================================================
PORTAL DE APOIO DOCENTE & CO-DOCÊNCIA – MINICURSO DE IA (32H)
DOCUMENTO DE PARECER PEDAGÓGICO / ANOTAÇÕES DO ENCONTRO
================================================================================
Encontro: Encontro 1 – Desmistificando a IA (3 Horas)
Emissor: ${usuarioAtual} (${papelAtual})
Data de Exportação: ${dataFormatada} às ${horaFormatada}
================================================================================

CONTEÚDO DO PARECER / ANOTAÇÕES PEDAGÓGICAS:
--------------------------------------------------------------------------------
${textoConteudo}
--------------------------------------------------------------------------------
Fim do documento exportado.
`;

      const blob = new Blob([cabecalho], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Parecer_Pedagogico_Encontro_${currentMeetingId}_Minicurso_IA.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      if (window.showToast) {
        window.showToast('📄 Parecer exportado com sucesso em .txt!');
      }
    });
  }

  // Checkboxes de atribuição de fala (Você / Maria)
  const roleCheckboxes = document.querySelectorAll('.role-check');
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

  // =========================================================================
  // 6. CONTROLES GERAIS: TEMA ESCURO & TOASTS
  // =========================================================================
  const btnThemeToggle = document.getElementById('btn-theme-toggle');
  const currentTheme = localStorage.getItem('curso_ia_theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (btnThemeToggle) {
    btnThemeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    btnThemeToggle.addEventListener('click', () => {
      const active = document.documentElement.getAttribute('data-theme');
      const next = active === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('curso_ia_theme', next);
      btnThemeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
    });
  }

  // Toast Notifier
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

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
    }, 3200);
  }

  window.showToast = showToast;
});

