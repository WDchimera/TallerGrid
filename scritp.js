const menuToggle = document.querySelector('.menu-toggle');
const filtros = document.querySelector('.filtros');

menuToggle.addEventListener('click', () => {
  filtros.classList.toggle('show');
  menuToggle.classList.toggle('open');
});