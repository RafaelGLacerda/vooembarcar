// Script para futuros carrosséis, animações JS puras ou interações

document.addEventListener("DOMContentLoaded", () => {
  console.log("Site Voo Embarcar pronto para decolar! ✈️");
});
let currentIndex = 0;
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

setInterval(nextSlide, 3000); // Troca a cada 4 segundos

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
function handleScrollAnimation() {
  const elements = document.querySelectorAll('.scroll-animate');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < windowHeight - 300) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const heroSection = document.querySelector('.hero');

  const observer = new IntersectionObserver(
    (entries) => {
      const isVisible = entries[0].isIntersecting;
      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        if (isVisible) {
          navbar.classList.remove('fade-out');
          navbar.classList.add('fade-in');
        } else {
          navbar.classList.remove('fade-in');
          navbar.classList.add('fade-out');
        }
      } else {
        // Sempre visível no desktop
        navbar.classList.remove('fade-out');
        navbar.classList.add('fade-in');
      }
    },
    {
      root: null,
      threshold: 0.2
    }
  );

  observer.observe(heroSection);

  // Em caso de redimensionamento
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navbar.classList.remove('fade-out');
      navbar.classList.add('fade-in');
    }
  });
});
