'use strict';

/* ── Cached DOM references ── */
const header      = document.getElementById('header');
const hamburger   = document.getElementById('hamburger');
const nav         = document.getElementById('nav');
const navLinks    = document.querySelectorAll('.nav__link');
const sections    = document.querySelectorAll('section[id]');
const animTargets = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
const statNums    = document.querySelectorAll('.stat__number');

/* ════════════════════════════════════════
   1. HEADER — scroll state
════════════════════════════════════════ */
function onHeaderScroll() {
  header.classList.toggle('scrolled', window.scrollY > 30);
}
window.addEventListener('scroll', onHeaderScroll, { passive: true });
onHeaderScroll();

/* ════════════════════════════════════════
   2. MOBILE MENU — hamburger toggle
════════════════════════════════════════ */
hamburger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

document.addEventListener('click', (e) => {
  if (nav.classList.contains('open') &&
      !nav.contains(e.target) &&
      !hamburger.contains(e.target)) {
    nav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('open')) {
    nav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    hamburger.focus();
  }
});

/* ════════════════════════════════════════
   3. SMOOTH SCROLL for nav links
════════════════════════════════════════ */
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const offsetTop = target.getBoundingClientRect().top + window.scrollY
                    - parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10)
                    - 8;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  });
});

/* ════════════════════════════════════════
   4. ACTIVE NAV LINK on scroll
════════════════════════════════════════ */
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('data-section') === id);
        });
      }
    });
  },
  {
    rootMargin: '-40% 0px -50% 0px',
    threshold: 0,
  }
);

sections.forEach(section => sectionObserver.observe(section));

/* ════════════════════════════════════════
   5. SCROLL ANIMATIONS (fade-up / left / right)
════════════════════════════════════════ */
const animObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        animObserver.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1,
  }
);

animTargets.forEach(el => animObserver.observe(el));

/* ════════════════════════════════════════
   6. ANIMATED COUNTERS
════════════════════════════════════════ */
function animateCounter(el) {
  const target   = parseInt(el.getAttribute('data-target'), 10);
  const duration = 1800;
  const fps      = 60;
  const steps    = Math.round(duration / (1000 / fps));
  const stepVal  = target / steps;
  let current    = 0;
  let frame      = 0;

  const tick = () => {
    frame++;
    current = Math.min(Math.round(stepVal * frame), target);
    el.textContent = current.toLocaleString('pt-BR');
    if (current < target) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

statNums.forEach(num => counterObserver.observe(num));

/* ════════════════════════════════════════
   7. HERO — elements animate on load
════════════════════════════════════════ */
window.addEventListener('DOMContentLoaded', () => {
  const heroAnimEls = document.querySelectorAll('.hero .fade-up');
  heroAnimEls.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 100 + i * 140);
  });
});
