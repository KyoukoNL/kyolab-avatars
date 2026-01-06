const productos = [
  {
    nombre: "Shinari",
    precio: "$60 USD",
    imagenes: [
      KYO.png,
      KYO2.png,
      KYO.png
    ],
    linkCompra: "https://www.paypal.com/ncp/payment/2LHY5CUSG467A"
  },
  {
    nombre: "Airi Gotica",
    precio: "$60 USD",
    imagenes: [
      KYO2.png,
      KYO.png
    ],
    linkCompra: "https://www.paypal.com/ncp/payment/2LHY5CUSG467A"
  },
  {
    nombre: "Manuka 2",
    precio: "$60 USD",
    imagenes: [
      KYO2.png,
    ],
    linkCompra: "https://www.paypal.com/ncp/payment/2LHY5CUSG467A"
  }
];

const catalogo = document.getElementById("catalogo");

productos.forEach((producto, index) => {
  const item = document.createElement("div");
  item.className = "producto";

  const imagenes = Array.isArray(producto.imagenes) ? producto.imagenes : [];
  const carouselId = `carousel-${index}`;

  const imagenesHTML = imagenes
    .map(
      (img, i) =>
        `<img src="${img}" class="${i === 0 ? "active" : ""}">`
    )
    .join("");

  item.innerHTML = `
    <div class="carousel" id="${carouselId}">
      ${imagenesHTML}
      ${imagenes.length > 1 ? `<button class="prev">‹</button><button class="next">›</button>` : ""}
    </div>

    <h3>${producto.nombre}</h3>
    <p>${producto.precio}</p>

    <a href="${producto.linkCompra}" target="_blank">
      <button>Comprar</button>
    </a>
  `;

  catalogo.appendChild(item);

  // --- Lógica del carrusel ---
  if (imagenes.length > 1) {
    const carousel = document.getElementById(carouselId);
    const imgs = carousel.querySelectorAll("img");
    let current = 0;

    const showImage = (i) => {
      imgs.forEach(img => img.classList.remove("active"));
      imgs[i].classList.add("active");
    };

    carousel.querySelector(".prev").addEventListener("click", () => {
      current = (current - 1 + imgs.length) % imgs.length;
      showImage(current);
    });

    carousel.querySelector(".next").addEventListener("click", () => {
      current = (current + 1) % imgs.length;
      showImage(current);
    });
  }
});

