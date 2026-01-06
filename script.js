productos.forEach((producto, index) => {
  const item = document.createElement("div");
  item.className = "producto";

  const id = `carousel-${index}`;
  const imagenesHTML = producto.imagenes.map((img, i) => `
    <img src="${img}" class="${i === 0 ? 'active' : ''}" data-index="${i}">
  `).join("");

  item.innerHTML = `
    <div class="carousel" id="${id}">
      ${imagenesHTML}
      <button class="prev">‹</button>
      <button class="next">›</button>
    </div>
    <h3>${producto.nombre}</h3>
    <p>${producto.precio}</p>
    <a href="${producto.linkCompra}" target="_blank">
      <button>Comprar por ${producto.precio}</button>
    </a>
  `;

  catalogo.appendChild(item);

  // Control del carrusel
  const carousel = item.querySelector(".carousel");
  const images = carousel.querySelectorAll("img");
  let current = 0;

  const showImage = (index) => {
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");
  };

  carousel.querySelector(".prev").addEventListener("click", () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  });

  carousel.querySelector(".next").addEventListener("click", () => {
    current = (current + 1) % images.length;
    showImage(current);
  });
});
