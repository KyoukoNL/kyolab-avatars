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

if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
}

window.addEventListener('click', (e) => { 
    if (e.target === modal) modal.style.display = 'none'; 
});

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
  item
