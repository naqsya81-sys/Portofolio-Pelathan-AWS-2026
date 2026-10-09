/* ============================================================
   main.js — Interactivity: nav, reveal, typing, counters,
   tilt, scroll progress, contact form (client-side only)
   ============================================================ */

(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* -------------------------------------------------------
     1. Current year in footer
  ------------------------------------------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* -------------------------------------------------------
     2. Navbar scroll state + scroll progress bar
  ------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  const scrollBar = document.getElementById('scrollBar');
  const toTop = document.getElementById('toTop');

  function onScroll() {
    const y = window.scrollY;
    if (navbar) navbar.classList.toggle('scrolled', y > 20);
    if (toTop) toTop.classList.toggle('show', y > 500);

    if (scrollBar) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = h > 0 ? (y / h) * 100 : 0;
      scrollBar.style.width = pct + '%';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener('click', () =>
      window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' })
    );
  }

  /* -------------------------------------------------------
     3. Mobile menu toggle
  ------------------------------------------------------- */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  function closeMenu() {
    if (!navMenu || !navToggle) return;
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Buka menu');
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
    });
    navMenu.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', closeMenu)
    );
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* -------------------------------------------------------
     4. Active nav link on scroll (scroll spy)
  ------------------------------------------------------- */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) =>
            link.classList.toggle('active', link.getAttribute('href') === '#' + id)
          );
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  sections.forEach((s) => spy.observe(s));

  /* -------------------------------------------------------
     5. Reveal on scroll
  ------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');
  if (prefersReduced) {
    revealEls.forEach((el) => el.classList.add('in'));
  } else {
    const revealObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.delay || '0', 10);
            setTimeout(() => entry.target.classList.add('in'), delay);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    revealEls.forEach((el) => revealObs.observe(el));
  }

  /* -------------------------------------------------------
     6. Typing effect in hero
  ------------------------------------------------------- */
  const typedEl = document.getElementById('typed');
  if (typedEl) {
    const words = [
      'Full Stack AI Engineer',
      'Pembangun Produk Cerdas',
      'Pecinta Antarmuka Elegan',
      'Problem Solver',
    ];
    if (prefersReduced) {
      typedEl.textContent = words[0];
    } else {
      let wi = 0, ci = 0, deleting = false;
      (function type() {
        const word = words[wi];
        typedEl.textContent = deleting
          ? word.substring(0, ci--)
          : word.substring(0, ci++);

        let delay = deleting ? 45 : 90;
        if (!deleting && ci === word.length + 1) {
          deleting = true;
          delay = 1600;
        } else if (deleting && ci < 0) {
          deleting = false;
          ci = 0;
          wi = (wi + 1) % words.length;
          delay = 350;
        }
        setTimeout(type, delay);
      })();
    }
  }

  /* -------------------------------------------------------
     7. Animated stat counters
  ------------------------------------------------------- */
  const counters = document.querySelectorAll('.stat-num[data-count]');
  const counterObs = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        if (prefersReduced) { el.textContent = target; obs.unobserve(el); return; }
        const dur = 1500;
        const start = performance.now();
        (function tick(now) {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(eased * target);
          if (p < 1) requestAnimationFrame(tick);
        })(start);
        obs.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((c) => counterObs.observe(c));

  /* -------------------------------------------------------
     8. Skill proficiency bars
  ------------------------------------------------------- */
  const bars = document.querySelectorAll('.bar__fill[data-level]');
  const barObs = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.level + '%';
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  bars.forEach((b) => barObs.observe(b));

  /* -------------------------------------------------------
     9. 3D tilt on cards (pointer, non-touch)
  ------------------------------------------------------- */
  if (!prefersReduced && window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.tilt').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform =
          `perspective(800px) rotateX(${(-py * 7).toFixed(2)}deg) rotateY(${(px * 7).toFixed(2)}deg) translateY(-6px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  /* -------------------------------------------------------
     10. Contact form (client-side validation only, no API)
  ------------------------------------------------------- */
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.elements['name'].value.trim();
      const email = form.elements['email'].value.trim();
      const message = form.elements['message'].value.trim();
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !email || !message) {
        setNote('Mohon lengkapi semua kolom.', 'err');
        return;
      }
      if (!emailOk) {
        setNote('Format email tidak valid.', 'err');
        return;
      }

      // No backend: open the user's mail client with a prefilled draft.
      const subject = encodeURIComponent('Kontak dari ' + name + ' via portofolio');
      const body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');
      window.location.href =
        'mailto:naqsya81@gmail.com?subject=' + subject + '&body=' + body;

      setNote('Terima kasih, ' + name + '! Membuka aplikasi email Anda...', 'ok');
      form.reset();
    });
  }

  function setNote(msg, type) {
    if (!note) return;
    note.textContent = msg;
    note.className = 'form-note ' + type;
  }
})();
