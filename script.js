/* ============================================================
   Rahul Singh Tarkar — Resume Portfolio Scripts
   Author : Rahul Singh Tarkar
   Version: 1.0.0
   ============================================================ */

/* ── Scroll-triggered section reveal ── */
const sections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      /* Stagger child cards on reveal */
      const cards = entry.target.querySelectorAll(
        '.skill-group, .tl-item, .cert-item, .edu-card'
      );
      cards.forEach((card, index) => {
        card.style.transitionDelay = (index * 0.08) + 's';
      });
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => sectionObserver.observe(section));

/* ── Subtle cursor-glow (desktop only) ── */
if (window.innerWidth > 768) {
  document.addEventListener('mousemove', (e) => {
    document.body.style.setProperty('--mx', e.clientX + 'px');
    document.body.style.setProperty('--my', e.clientY + 'px');
  });
}

/* ── Active nav highlight on scroll (optional future nav) ── */
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  sections.forEach(section => {
    const top    = section.offsetTop - 120;
    const bottom = top + section.offsetHeight;
    if (scrollY >= top && scrollY < bottom) {
      document.querySelectorAll('[data-nav]').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.nav === section.id) link.classList.add('active');
      });
    }
  });
});
