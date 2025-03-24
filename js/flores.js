const volverArriba = document.getElementById('volverArriba');
window.addEventListener('scroll', () => {
  volverArriba.style.display = window.scrollY > 300 ? 'block' : 'none';
});
volverArriba.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
