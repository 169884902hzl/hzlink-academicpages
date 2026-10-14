(() => {
  // 1. Dark / Light Theme Toggle
  const root = document.documentElement;
  const themeBtn = document.querySelector('#theme-toggle');
  const savedTheme = localStorage.getItem('hzlink-theme');
  if (savedTheme === 'dark' || savedTheme === 'light') {
    root.setAttribute('data-theme', savedTheme);
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('hzlink-theme', next);
    });
  }

  // 2. Project Filtering & Keyword Search
  const filters = document.querySelector('.filters');
  const searchInput = document.querySelector('#project-search');
  const projects = [...document.querySelectorAll('.project-entry')];
  const counter = document.querySelector('#project-count');
  const projectList = document.querySelector('#project-list');
  let activeArea = 'all';

  function updateProjects() {
    const query = (searchInput ? searchInput.value : '').trim().toLowerCase();
    let count = 0;
    projects.forEach(project => {
      const matchArea = activeArea === 'all' || project.dataset.area === activeArea;
      const text = (project.dataset.search || project.textContent || '').toLowerCase();
      const matchQuery = !query || text.includes(query);
      project.hidden = !(matchArea && matchQuery);
      if (!project.hidden) count += 1;
    });
    if (counter) {
      counter.textContent = count + (count === 1 ? ' project' : ' projects');
    }
  }

  function setAreaFilter(areaValue) {
    activeArea = areaValue;
    if (filters) {
      filters.querySelectorAll('button[data-filter]').forEach(item => {
        item.setAttribute('aria-pressed', String(item.dataset.filter === areaValue));
      });
    }
    updateProjects();
  }

  if (filters) {
    filters.hidden = false;
    filters.addEventListener('click', event => {
      const button = event.target.closest('button[data-filter]');
      if (!button) return;
      setAreaFilter(button.dataset.filter);
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', updateProjects);
  }

  // Pillar items jump to projects & filter
  document.querySelectorAll('.pillar-item[data-target-area]').forEach(btn => {
    btn.addEventListener('click', () => {
      setAreaFilter(btn.getAttribute('data-target-area'));
      const target = document.querySelector('#projects');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // 3. View Switcher (Gallery Cards vs Compact Table)
  document.querySelectorAll('.view-btn[data-view]').forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-view');
      document.querySelectorAll('.view-btn[data-view]').forEach(b => {
        b.setAttribute('aria-pressed', String(b === btn));
      });
      if (projectList) {
        projectList.className = mode === 'compact' ? 'projects-compact' : 'projects-grid';
      }
    });
  });

  // 4. 3D Studio Render vs Method Diagram inline switcher on Selected Publications
  document.querySelectorAll('.media-switcher').forEach(group => {
    const col = group.closest('.pub-media-col');
    const img = col ? col.querySelector('.pub-preview-img') : null;
    if (!img) return;
    group.querySelectorAll('.ms-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.ms-btn').forEach(b => b.classList.toggle('active', b === btn));
        const mode = btn.getAttribute('data-mode');
        if (mode === 'diagram' && img.dataset.diagramSrc) {
          img.src = img.dataset.diagramSrc;
        } else if (img.dataset.renderSrc) {
          img.src = img.dataset.renderSrc;
        }
      });
    });
  });

  // 5. BibTeX Drawers & Clipboard Copy
  document.querySelectorAll('.bibtex-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const col = btn.closest('.pub-info-col');
      const drawer = col ? col.querySelector('.bibtex-drawer') : null;
      if (!drawer) return;
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      drawer.hidden = expanded;
    });
  });

  document.querySelectorAll('.bibtex-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const drawer = btn.closest('.bibtex-drawer');
      const code = drawer ? drawer.querySelector('code') : null;
      if (!code || !navigator.clipboard) return;
      navigator.clipboard.writeText(code.textContent.trim()).then(() => {
        const orig = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = orig; }, 1500);
      });
    });
  });

  // 6. Fullscreen Lightbox for 3D Renders & Architecture Diagrams
  const lightbox = document.querySelector('#lightbox');
  const lightboxImg = document.querySelector('#lightbox-img');
  const lightboxCap = document.querySelector('#lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');

  function openLightbox(src, caption) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = caption || '';
    if (lightboxCap) lightboxCap.textContent = caption || '';
    lightbox.hidden = false;
  }

  document.querySelectorAll('.zoomable-media').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
  });

  document.querySelectorAll('.diagram-lightbox-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      openLightbox(btn.getAttribute('data-diagram'), btn.getAttribute('data-caption'));
    });
  });

  if (lightbox) {
    const closeBox = () => { lightbox.hidden = true; };
    if (lightboxClose) lightboxClose.addEventListener('click', closeBox);
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeBox();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !lightbox.hidden) closeBox();
    });
  }
})();
