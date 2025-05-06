const productos = [
    {
      nombre: "Cyber Neko",
      precio: "60 USD",
      imagenes: [
        "images/KYO.png",
        "images/KYO2.png",
        "images/KYO.png"
      ],
      linkCompra: "https://www.paypal.com/ncp/payment/A2QFXUXM7S822"
    },
    {
      nombre: "Cyber Kitsune",
      precio: "75 USD",
      imagenes: [
        "images/KYO.png",
        "images/KYO.png",
        "images/KYO.png"
      ],
      linkCompra: "https://www.paypal.com/paypalme/kyouko98/75"
    },
    {
      nombre: "Glitch Oni",
      precio: "80 USD",
      imagenes: [
        "images/KYO.png",
        "images/KYO.png",
        "images/KYO.png"
      ],
      linkCompra: "https://www.paypal.com/paypalme/kyouko98/60"
    },
    {
      nombre: "Shadow Oni",
      precio: "85 USD",
      imagenes: [
        "images/KYO.png",
        "images/KYO.png",
        "images/KYO.png"
      ],
      linkCompra: "https://www.paypal.com/paypalme/kyouko98/85"
    },
    {
      nombre: "Cyber Neko V2",
      precio: "90 USD",
      imagenes: [
        "images/KYO.png",
        "images/KYO.png",
        "images/KYO.png"
      ],
      linkCompra: "https://www.paypal.com/paypalme/kyouko98/90"
    },
    {
      nombre: "Glitch Oni X",
      precio: "100 USD",
      imagenes: [
        "images/KYO.png",
        "images/KYO.png",
        "images/KYO.png"
      ],
      linkCompra: "https://www.paypal.com/paypalme/kyouko98/100"
    }
  ];
  
  const catalogo = document.getElementById("catalogo");
  
  // Referencias al modal
  const modal = document.getElementById('product-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const closeBtn = document.querySelector('.modal .close');
  const modalBuyButton = document.getElementById("modal-buy-button");
  const modalCarousel = document.getElementById("modal-carousel");
  let currentModalImageIndex = 0;
  let modalImages = [];

  // Cerrar modal
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });
  
  document.querySelector('.modal-prev').addEventListener('click', () => {
    if (currentModalImageIndex > 0) {
      currentModalImageIndex--;
      updateModalCarousel();
    }
  });
  
  document.querySelector('.modal-next').addEventListener('click', () => {
    if (currentModalImageIndex < modalImages.length - 1) {
      currentModalImageIndex++;
      updateModalCarousel();
    }
  });
  
  function updateModalCarousel() {
    const carousel = document.getElementById('modal-carousel');
    carousel.innerHTML = '';
  
    modalImages.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      carousel.appendChild(img);
    });
  
    carousel.style.transform = `translateX(-${currentModalImageIndex * 100}%)`;
  }

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
    
    item.addEventListener("click", () => {
      modalImages.src = producto.imagenes[0];
      modalTitle.textContent = producto.nombre;
      modalPrice.textContent = producto.precio;
      modal.style.display = 'flex';
      modalImages = producto.imagenes;
      currentModalImageIndex = 0;
      updateModalCarousel();
      // Asignar el enlace de compra
      modalBuyButton.onclick = () => {
        window.open(producto.linkCompra, "_blank");
      };
    });
  });
  
  particlesJS("particles-js", {
    particles: {
      number: { value: 60 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.3 },
      size: { value: 3 },
      line_linked: {
        enable: true,
        distance: 100,
        color: "#ffffff",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: false,
        straight: false,
        bounce: true
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 150, duration: 0.4 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });