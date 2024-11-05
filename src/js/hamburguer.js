const HAMBURGUER = document.querySelector('.hamburguer');
const MENU = document.querySelector('.menu');

HAMBURGUER.addEventListener('click', () => {
  let isOpen = HAMBURGUER.classList.toggle('open');

  HAMBURGUER.ariaLabel = isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación';
  HAMBURGUER.setAttribute('aria-expanded', isOpen);
});

// Escuchamos el click en toda la pagina, para cerrar el menú si se hace clic fuera de este
document.addEventListener('click', (event) => {
  let isClickInside = HAMBURGUER.contains(event.target) || MENU.contains(event.target); // Es falso si el click no fue en ninguno de los dos elementos

  if (!isClickInside && HAMBURGUER.classList.contains('open')) {
    initialData();
  }
});

// Cerramos el menu si la url cambia escuchando el evento hashchange
window.addEventListener('hashchange', () => {
  initialData();
});

function initialData() {
  HAMBURGUER.classList.remove('open');
  HAMBURGUER.setAttribute('aria-expanded', 'false');
  HAMBURGUER.ariaLabel = 'Abrir menú de navegación';
}