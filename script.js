// Modo claro / oscuro
const botonTema = document.querySelector('#boton-tema');

function aplicarTema(oscuro) {
  document.documentElement.classList.toggle('dark', oscuro);
  botonTema.setAttribute('aria-pressed', oscuro);
  document.querySelector('#texto-tema').textContent = oscuro ? 'Modo claro' : 'Modo oscuro';
}

aplicarTema(localStorage.getItem('tema') === 'oscuro');

botonTema.addEventListener('click', function () {
  const oscuro = !document.documentElement.classList.contains('dark');
  aplicarTema(oscuro);
  localStorage.setItem('tema', oscuro ? 'oscuro' : 'claro');
});

// Menú del móvil
const botonMenu = document.querySelector('#boton-menu');
const menu = document.querySelector('#menu');

botonMenu.addEventListener('click', function () {
  const abierto = menu.classList.toggle('hidden') === false;
  botonMenu.setAttribute('aria-expanded', abierto);
});

// Al elegir una sección en el móvil, se cierra el menú
for (const enlace of menu.querySelectorAll('a')) {
  enlace.addEventListener('click', function () {
    menu.classList.add('hidden');
    botonMenu.setAttribute('aria-expanded', 'false');
  });
}

// Librería externa: AOS (animación al hacer scroll)
AOS.init({ once: true });
