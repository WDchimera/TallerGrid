// Obtener el botón hamburguesa y el menú de filtros
const menuToggle = document.querySelector('.menu-toggle');
const filtros = document.querySelector('.filtros');

// Cambiar la clase "show" para mostrar u ocultar el menú
menuToggle.addEventListener('click', () => {
  filtros.classList.toggle('show'); // Mostrar/ocultar el menú
  menuToggle.classList.toggle('open'); // Animación del ícono hamburguesa
});