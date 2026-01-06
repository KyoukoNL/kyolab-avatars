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

// FORMA CORRECTA
item.addEventListener("click", () => {
    modalTitle.textContent = producto.nombre;
    modalPrice.textContent = producto.precio;
    modalImages = producto.imagenes; // Guardamos la lista de fotos
    currentModalImageIndex = 0;
    updateModalCarousel(); // Esta función se encarga de mostrar las fotos
    modal.style.display = 'flex';
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
  // Añadimos una animación de entrada (opcional con CSS)
  item.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
  item.style.opacity = "0";

  const imagenesHTML = producto.imagenes.map((img, i) => `
    <img src="${img}" class="${i === 0 ? 'active' : ''}" data-index="${i}">
  `).join("");

  item.innerHTML = `
    <div class="carousel">
      ${imagenesHTML}
      <button class="prev">‹</button>
      <button class="next">›</button>
    </div>
    <h3>${producto.nombre}</h3>
    <p class="precio-texto">${producto.precio}</p>
    <button class="btn-info">Ver detalles</button>
  `;

  catalogo.appendChild(item);

  // Lógica de Carrusel de la Card
  const carousel = item.querySelector(".carousel");
  const images = carousel.querySelectorAll("img");
  let current = 0;

  const showImage = (idx) => {
    images.forEach(img => img.classList.remove("active"));
    images[idx].classList.add("active");
  };

  item.querySelector(".prev").addEventListener("click", (e) => {
    e.stopPropagation(); // Evita abrir el modal al cambiar foto
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  });

  item.querySelector(".next").addEventListener("click", (e) => {
    e.stopPropagation(); // Evita abrir el modal al cambiar foto
    current = (current + 1) % images.length;
    showImage(current);
  });

  // Abrir Modal
  item.addEventListener("click", () => {
    modalTitle.textContent = producto.nombre;
    modalPrice.textContent = producto.precio;
    modalImages = producto.imagenes;
    currentModalImageIndex = 0;
    updateModalCarousel();
    modal.style.display = 'flex';
    
    modalBuyButton.onclick = () => window.open(producto.linkCompra, "_blank");
  });
});

// --- CONFIGURACIÓN DE PARTÍCULAS (Ajustada para mejor rendimiento) ---
particlesJS("particles-js", {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 800 } },
    color: { value: "#ff3e3e" }, // Color rojo para combinar con tu tema
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 2, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ff3e3e",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 200, line_linked: { opacity: 0.5 } },
      push: { particles_nb: 3 }
    }
  },
  retina_detect: true
});

