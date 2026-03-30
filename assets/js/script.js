// Portfolio de Naelle Mezghenna
// JS principal : menu burger, scroll doux, animation fade-in

// Menu burger mobile
const burger = document.getElementById('burger');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
});

// Fermer le menu au clic sur un lien (mobile)
document.querySelectorAll('.header__menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    burger.classList.remove('active');
  });
});

// Scroll doux pour les ancres
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 65,
        behavior: 'smooth'
      });
    }
  });
}

// Animation fade-in au scroll
function animateOnScroll() {
  const animated = document.querySelectorAll('[data-animate]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  animated.forEach(el => {
    observer.observe(el);
    // Si déjà visible au chargement, rendre visible immédiatement
    const rect = el.getBoundingClientRect();
    if (
      rect.top < window.innerHeight &&
      rect.bottom > 0
    ) {
      el.classList.add('visible');
    }
  });
}

// Ajouter l'attribut data-animate sur les sections à animer puis lancer l'animation
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.section, .hero, .e6__card').forEach(el => {
    el.setAttribute('data-animate', '');
  });
  animateOnScroll();
});
