// main.js – Lightbox para la galería de plantas
document.addEventListener("DOMContentLoaded", () => {
  const lightbox     = document.getElementById("lightbox");
  const lightboxImg  = document.getElementById("lightbox-img");
  const closeBtn     = document.getElementById("lightbox-close");
  const galleryImgs  = document.querySelectorAll(".galeria img");

  galleryImgs.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.classList.add("hidden");
  });

  // Cerrar lightbox al hacer clic fuera de la imagen
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      lightbox.classList.add("hidden");
    }
  });
});

