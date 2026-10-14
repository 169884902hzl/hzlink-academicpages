(() => {
  const filters = document.querySelector('.filters');
  const projects = [...document.querySelectorAll('.project-entry')];
  const counter = document.querySelector('#project-count');
  const projectList = document.querySelector('#project-list');

  function applyFilter(areaValue) {
    if (!filters) return;
    filters.querySelectorAll('button[data-filter]').forEach(item => {
      item.setAttribute('aria-pressed', String(item.dataset.filter === areaValue));
    });
    let count = 0;
    projects.forEach(project => {
      project.hidden = areaValue !== 'all' && project.dataset.area !== areaValue;
      if (!project.hidden) count += 1;
    });
    if (counter) {
      counter.textContent = count + (count === 1 ? ' project' : ' projects');
    }
  }

  if (filters) {
    filters.hidden = false;
    filters.addEventListener('click', event => {
      const button = event.target.closest('button[data-filter]');
      if (!button) return;
      applyFilter(button.dataset.filter);
    });
  }

  // Paradigm cards jump to and filter projects
  document.querySelectorAll('.paradigm-card[data-target-area]').forEach(card => {
    card.addEventListener('click', () => {
      const area = card.getAttribute('data-target-area');
      applyFilter(area);
      const target = document.querySelector('#projects');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // View switcher (Detailed Media Grid vs Compact List)
  document.querySelectorAll('.view-btn[data-view]').forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-view');
      document.querySelectorAll('.view-btn[data-view]').forEach(b => {
        b.setAttribute('aria-pressed', String(b === btn));
      });
      if (projectList) {
        projectList.className = mode === 'compact' ? 'project-list-compact' : 'project-list-detailed';
      }
    });
  });

  // BibTeX drawers & Copy
  document.querySelectorAll('.bibtex-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const textCol = btn.closest('.publication-text');
      const drawer = textCol ? textCol.querySelector('.bibtex-drawer') : null;
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

  // Lightbox for publication-grade SVG diagrams
  const lightbox = document.querySelector('#lightbox');
  const lightboxImg = document.querySelector('#lightbox-img');
  const lightboxCap = document.querySelector('#lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');

  if (lightbox && lightboxImg) {
    document.querySelectorAll('.zoomable-media').forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || '';
        if (lightboxCap) lightboxCap.textContent = img.alt || '';
        lightbox.hidden = false;
      });
    });
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
