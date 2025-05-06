const productos = [
    {
      nombre: "Cyber Neko",
      precio: "60 USD",
      imagenes: [
        "images/KYO.png",
        "images/KYO2.png",
        "images/KYO.png"
      ],
      linkCompra: "https://www.paypal.com/paypalme/kyouko98/60"
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
  
  