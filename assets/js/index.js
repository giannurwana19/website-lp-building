const navbar = document.querySelector('.navbar');

AOS.init({ once: true });

document.addEventListener('DOMContentLoaded', function () {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolling-active');
  }
});

window.addEventListener('scroll', () => {
  const windowPosition = window.scrollY > 0;

  navbar.classList.toggle('scrolling-active', windowPosition);
});
