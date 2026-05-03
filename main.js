// ============================================
// JAHECHA — main.js
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar scroll effect ──────────────────
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });


  // ── Mobile menu ───────────────────────────
  const toggle   = document.querySelector('.mobile-toggle');
  const closeBtn = document.querySelector('.close-menu');
  const navLinks = document.querySelector('.nav-links');

  const openMenu  = () => { navLinks.classList.add('open');    document.body.style.overflow = 'hidden'; };
  const closeMenu = () => { navLinks.classList.remove('open'); document.body.style.overflow = '';       };

  toggle?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });


  // ── Intersection Observer reveal ──────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

});
