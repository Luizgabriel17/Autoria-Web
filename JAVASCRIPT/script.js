document.addEventListener("DOMContentLoaded", () => {
  const imagens = document.querySelectorAll(".gallery-img");
  const zoomedImage = document.getElementById("zoomedImage");
  const zoomModalElement = document.getElementById("zoomModal");

  if (!zoomedImage || !zoomModalElement) return;

  const zoomModal = new bootstrap.Modal(zoomModalElement);

  imagens.forEach(img => {
    img.addEventListener("click", () => {
      zoomedImage.src = img.src;
      zoomModal.show();
    });
  });

  zoomModalElement.addEventListener("hidden.bs.modal", () => {
    zoomedImage.src = "";
  });
});
