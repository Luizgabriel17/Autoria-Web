document.addEventListener("DOMContentLoaded", () => {
    const imagens = document.querySelectorAll(".gallery-img");
    const zoomedImage = document.getElementById("zoomedImage");
    const zoomModalElement = document.getElementById("zoomModal");
  
    if (!zoomedImage || !zoomModalElement) return; // Evita erro em páginas sem modal
  
    const zoomModal = new bootstrap.Modal(zoomModalElement);
  
    imagens.forEach(img => {
      img.addEventListener("click", () => {
        zoomedImage.src = img.src; // Mostra a imagem clicada
        zoomModal.show(); // Abre o modal
      });
    });
  
    // Remove a imagem quando o modal for fechado
    zoomModalElement.addEventListener("hidden.bs.modal", () => {
      zoomedImage.src = "";
    });
  });
  