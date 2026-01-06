const productos = [
  {
    nombre: "Airi + Shinano",
    precio: "60 USD",
    imagenes: ["images/KYO.png", "images/KYO2.png", "images/KYO.png"],
    linkCompra: "https://www.paypal.com/ncp/payment/A2QFXUXM7S822"
  },
  {
    nombre: "Airi + Karin",
    precio: "75 USD",
    imagenes: ["images/KYO.png", "images/KYO.png", "images/KYO.png"],
    linkCompra: "https://www.paypal.com/ncp/payment/TZQ7MMM7G3YMY"
  },
  {
    nombre: "Kimera Custom",
    precio: "80 USD",
    imagenes: ["images/KYO.png", "images/KYO.png", "images/KYO.png"],
    linkCompra: "https://www.paypal.com/ncp/payment/VCZE7EX5FWV38"
  },
  {
    nombre: "Cualquier Avatar",
    precio: "85 USD",
    imagenes: ["images/KYO.png", "images/KYO.png", "images/KYO.png"],
    linkCompra: "https://www.paypal.com/ncp/payment/E6UCTE6SLHQQN"
  },
  {
    nombre: "Cyber Neko V2",
    precio: "90 USD",
    imagenes: ["images/KYO.png", "images/KYO.png", "images/KYO.png"],
    linkCompra: "https://www.paypal.com/ncp/payment/8UEPUE49GVCDU"
  },
  {
    nombre: "Glitch Oni X",
    precio: "100 USD",
    imagenes: ["images/KYO.png", "images/KYO.png", "images/KYO.png"],
    linkCompra: "https://www.paypal.com/ncp/payment/V4MBWF74FBJ3U"
  }
];

const catalogo = document.getElementById("catalogo");
const modal = document.getElementById('product-modal');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const closeBtn = document.querySelector('.modal .close');
const modalBuyButton = document.getElementById("modal-buy-button");
const modalCarouselContainer = document.getElementById("modal-carousel");

let currentModalImageIndex = 0;
let modalImages = [];

// --- FUNCIONES DEL MODAL ---
function updateModalCarousel() {
  modalCarouselContainer.innerHTML = '';
  modalImages.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    modalCarouselContainer.appendChild(img);
  });
  modalCarouselContainer.style.transform = `translateX(-${currentModalImageIndex * 100}%)`;
}

closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

document.querySelector('.modal-prev').addEventListener('click', (e) => {
  e.stopPropagation();
  if (currentModalImageIndex > 0) {
    currentModalImageIndex--;
    updateModalCarousel();
  }
});

document.querySelector('.modal-next').addEventListener('click', (e) => {
  e.stopPropagation();
  if (currentModalImageIndex < modalImages.length - 1) {
    currentModalImageIndex++;
    updateModalCarousel();
  }
});

// --- RENDERIZADO DE PRODUCTOS ---
productos.forEach((producto, index) => {
  const item = document.createElement("div");
  item.className = "producto";
  item.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
  item.style.opacity = "0";

  // Estructura de carrusel deslizable
  const imagenesHTML = producto.imagenes.map(img => `<img src="${img}">`).join("");

  item.innerHTML = `
    <div class="carousel">
      <div class="carousel-track">
        ${imagenesHTML}
      </div>
      <button class="prev">‹</button>
      <button class="next">›</button>
    </div>
    <h3>${producto.nombre}</h3>
    <p class="precio-texto">${producto.precio}</p>
    <button class="btn-info">Ver detalles</button>
  `;

  catalogo.appendChild(item);

  // Lógica de Carrusel de la Card (Deslizamiento)
  const track = item.querySelector(".carousel-track");
  const numImages = producto.imagenes.length;
  let currentSlide = 0;

  const updateSlide = () => {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  };

  item.querySelector(".prev").addEventListener("click", (e) => {
    e.stopPropagation();
    currentSlide = (currentSlide - 1 + numImages) % numImages;
    updateSlide
