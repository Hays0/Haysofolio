document.addEventListener('DOMContentLoaded', () => {
  const burgerButtons = document.querySelectorAll('.burger');

  function toggleMenu(burger) {
    const nav = burger.parentElement.querySelector('.nav-links');
    const expanded = burger.classList.toggle('active');
    if (!nav) return;
    if (expanded) {
      nav.classList.add('open');
      burger.setAttribute('aria-expanded', 'true');
    } else {
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  }

  burgerButtons.forEach(burger => {
    burger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu(burger);
    });

    burger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu(burger);
      }
    });

    // hover subtle animation: add class while hovered to allow CSS transitions
    burger.addEventListener('mouseenter', () => burger.classList.add('hover'));
    burger.addEventListener('mouseleave', () => burger.classList.remove('hover'));
  });

  // Close menus when clicking outside
  document.addEventListener('click', (e) => {
    burgerButtons.forEach(burger => {
      const nav = burger.parentElement.querySelector('.nav-links');
      if (!nav) return;
      if (!nav.classList.contains('open')) return;
      const withinNav = nav.contains(e.target) || burger.contains(e.target);
      if (!withinNav) {
        nav.classList.remove('open');
        burger.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      burgerButtons.forEach(burger => {
        const nav = burger.parentElement.querySelector('.nav-links');
        if (!nav) return;
        nav.classList.remove('open');
        burger.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
      });
    }
  });
});
