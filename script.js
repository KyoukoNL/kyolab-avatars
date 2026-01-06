const productos = [
  {
    nombre: "Avatar Base",
    precio: "$40 USD",
    imagenes: [
      "images/avatar1.png",
      "images/avatar2.png",
      "images/avatar3.png"
    ],
    link: "https://www.paypal.com/paypalme/kyouko9831/40"
  }
];

const catalogo = document.getElementById("catalogo");

/* MODAL */
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.querySelector(".modal-close");
const prevBtn = document.querySelector(".modal-prev");
const nextBtn = document.querySelector(".modal-next");

let modalImages = [];
let modalIndex = 0;

const openModal = (images, index) => {
  modalImages = images;
  modalIndex = index;
  modalImg.src = modalImages[modalIndex];
  modal.classList.remove("hidden");
};

const updateModal = () => {
  modalImg.src = modalImages[modalIndex];
};

closeBtn.onclick = () => modal.classList.add("hidden");
modal.onclick = e => e.target === modal && modal.classList.add("hidden");

prevBtn.onclick = () => {
  modalIndex = (modalIndex - 1 + modalImages.length) % modalImages.length;
  updateModal();
};

nextBtn.onclick = () => {
  modalIndex = (modalIndex + 1) % modalImages.length;
  updateModal();
};

document.addEventListener("keydown", e => {
  if (e.key === "Escape") modal.classList.add("hidden");
});

/* CATÁLOGO */
productos.forEach((producto, i) => {
  const div = document.createElement("div");
  div.className = "producto";

  div.innerHTML = `
    <div class="carousel">
      <div class="carousel-track">
        ${producto.imagenes.map(img => `<img src="${img}">`).join("")}
      </div>
      ${producto.imagenes.length > 1 ? `
        <button class="prev">‹</button>
        <button class="next">›</button>
      ` : ""}
    </div>

    <h3>${producto.nombre}</h3>
    <p>${producto.precio}</p>
    <a href="${producto.link}" target="_blank">
      <button>Comprar</button>
    </a>
  `;

  catalogo.appendChild(div);

  const track = div.querySelector(".carousel-track");
  const imgs = div.querySelectorAll("img");
  let index = 0;

  const update = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
  };

  div.querySelector(".prev")?.addEventListener("click", e => {
    e.stopPropagation();
    index = (index - 1 + imgs.length) % imgs.length;
    update();
  });

  div.querySelector(".next")?.addEventListener("click", e => {
    e.stopPropagation();
    index = (index + 1) % imgs.length;
    update();
  });

  imgs.forEach((img, imgIndex) => {
    img.addEventListener("click", () => openModal(producto.imagenes, imgIndex));
  });
});
