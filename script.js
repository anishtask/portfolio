// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Testimonial dots (simple cosmetic cycler)
const dots = document.querySelectorAll('.testimonial-dots span');
const cards = document.querySelectorAll('.testimonial-card');

if (dots.length && cards.length) {
  let active = 0;
  setInterval(() => {
    dots[active].classList.remove('active');
    active = (active + 1) % dots.length;
    dots[active].classList.add('active');
    cards.forEach((c, i) => {
      c.style.outline = i === active ? '2px solid #2563eb' : 'none';
      c.style.outlineOffset = '2px';
    });
  }, 3500);
}

// Sticky header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 8) {
    header.style.boxShadow = '0 8px 24px -12px rgba(0,0,0,.4)';
  } else {
    header.style.boxShadow = 'none';
  }
});
