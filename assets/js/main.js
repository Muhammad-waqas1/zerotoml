/**
 * ZeroToML — main.js
 * Mobile nav · Sidebar accordion · ToC tracker ·
 * Reading progress · Code copy · Smooth scroll · Auto-ToC
 */
(function () {
  'use strict';

  /* ══ 1. MOBILE NAV ══ */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');
  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
    mobileMenu?.classList.toggle('hidden', !menuOpen);
    hamIcon?.classList.toggle('hidden', menuOpen);
    closeIcon?.classList.toggle('hidden', !menuOpen);
  }
  mobileMenuBtn?.addEventListener('click', toggleMenu);
  mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { if (menuOpen) toggleMenu(); }));


  /* ══ 2. CURRICULUM SIDEBAR (lesson pages) ══ */
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const currSidebar = document.getElementById('curriculum-sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');

  sidebarToggle?.addEventListener('click', () => {
    const open = currSidebar.classList.toggle('sidebar-open');
    sidebarOverlay?.classList.toggle('hidden', !open);
  });
  sidebarOverlay?.addEventListener('click', () => {
    currSidebar.classList.remove('sidebar-open');
    sidebarOverlay.classList.add('hidden');
  });


  /* ══ 3. SIDEBAR MODULE ACCORDION ══ */
  document.querySelectorAll('.sidebar-module-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const list = document.getElementById(btn.dataset.module);
      const chevron = btn.querySelector('.chevron');
      if (!list) return;
      const closed = list.classList.toggle('hidden');
      if (chevron) chevron.style.transform = closed ? 'rotate(0deg)' : 'rotate(180deg)';
    });
  });

  // Auto-expand active module
  const activeLesson = document.querySelector('.sidebar-lesson.active');
  if (activeLesson) {
    const parentUl = activeLesson.closest('ul');
    const moduleBtn = parentUl?.previousElementSibling;
    parentUl?.classList.remove('hidden');
    const chev = moduleBtn?.querySelector('.chevron');
    if (chev) chev.style.transform = 'rotate(180deg)';
  }


  /* ══ 4. ToC ACTIVE LINK (IntersectionObserver) ══ */
  const tocLinks = document.querySelectorAll('.toc-link');
  const headings = document.querySelectorAll('#lesson-content h2, #lesson-content h3');

  if (tocLinks.length && headings.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          tocLinks.forEach(l => l.classList.remove('active'));
          document.querySelector(`.toc-link[href="#${e.target.id}"]`)?.classList.add('active');
        }
      });
    }, { rootMargin: '-80px 0px -70% 0px', threshold: 0 });
    headings.forEach(h => h.id && obs.observe(h));
  }


  /* ══ 5. READING PROGRESS ══ */
  const bar = document.getElementById('reading-progress-bar');
  const pctEl = document.getElementById('progress-percent');
  const content = document.getElementById('lesson-content');

  if (bar && content) {
    const update = () => {
      const rect = content.getBoundingClientRect();
      const scrolled = -rect.top;
      const total = content.offsetHeight - window.innerHeight;
      const pct = Math.max(0, Math.min(100, Math.round((scrolled / total) * 100)));
      bar.style.width = pct + '%';
      if (pctEl) pctEl.textContent = pct;
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  }


  /* ══ 6. CODE COPY ══ */
  window.copyCode = function (btn) {
    const code = btn.closest('.code-block')?.querySelector('pre')?.innerText;
    if (!code) return;
    navigator.clipboard?.writeText(code).then(() => flash(btn)).catch(() => fallback(code, btn));
  };

  function flash(btn) {
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
  }
  function fallback(text, btn) {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta); ta.select(); document.execCommand('copy');
    document.body.removeChild(ta); flash(btn);
  }


  /* ══ 7. SMOOTH SCROLL (ToC links) ══ */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + scrollY - 80, behavior: 'smooth' });
    });
  });


  /* ══ 8. NAVBAR SHADOW ON SCROLL ══ */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.boxShadow = scrollY > 8
        ? '0 1px 12px rgba(30,24,16,0.10)'
        : 'none';
    }, { passive: true });
  }


  /* ══ 9. AUTO-GENERATE ToC (if #toc-nav is empty) ══ */
  const tocNav = document.getElementById('toc-nav');
  const lc = document.getElementById('lesson-content');
  if (tocNav && lc && !tocNav.querySelector('a')) {
    const hs = lc.querySelectorAll('h2, h3');
    if (hs.length) {
      const ul = document.createElement('ul'); ul.className = 'toc-list';
      let curLi = null;
      hs.forEach(h => {
        if (!h.id) h.id = h.textContent.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#' + h.id; a.textContent = h.textContent;
        if (h.tagName === 'H2') {
          a.className = 'toc-link'; li.appendChild(a); ul.appendChild(li); curLi = li;
        } else {
          a.className = 'toc-link toc-link--sub'; li.appendChild(a);
          let sub = curLi?.querySelector('ul');
          if (!sub) { sub = document.createElement('ul'); sub.className = 'toc-sublist'; curLi?.appendChild(sub); }
          sub.appendChild(li);
        }
      });
      tocNav.appendChild(ul);
    }
  }

})();