function toggleGallery(id) {
  const gallery = document.getElementById(id);
  if (!gallery) return;

  const isVisible = gallery.classList.contains('visible');

  if (isVisible) {
    // Esconde com animação
    gallery.style.maxHeight = gallery.scrollHeight + 'px'; // garante transição suave ao esconder
    requestAnimationFrame(() => {
      gallery.style.transition = 'max-height 0.6s ease, opacity 0.6s ease';
      gallery.style.maxHeight = '0';
      gallery.style.opacity = '0';
      gallery.classList.remove('visible');
    });
  } else {
    // Mostra com animação
    gallery.classList.add('visible');
    gallery.style.transition = 'none'; // remove temporariamente para evitar conflito
    gallery.style.maxHeight = '0';
    gallery.style.opacity = '0';

    requestAnimationFrame(() => {
      gallery.style.transition = 'max-height 0.6s ease, opacity 0.6s ease';
      gallery.style.maxHeight = gallery.scrollHeight + 'px';
      gallery.style.opacity = '1';
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.gallery').forEach(gallery => {
    gallery.classList.remove('visible');
    gallery.style.maxHeight = '0';
    gallery.style.opacity = '0';
    gallery.style.overflow = 'hidden';
  });
});
