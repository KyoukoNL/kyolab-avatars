// 1. Lista de tus imágenes (solo agrega el nombre del archivo aquí)
const misDibujos = [
    { url: 'assets/dibujo1.jpg', titulo: 'Proyecto Alpha' },
    { url: 'assets/dibujo2.jpg', titulo: 'Diseño Personaje' },
    { url: 'assets/dibujo3.jpg', titulo: 'Ilustración 2024' },
    // Puedes seguir agregando más objetos aquí
];

// 2. Función para renderizar la galería
const cargarGaleria = () => {
    const contenedor = document.getElementById('galeria');
    
    misDibujos.forEach(dibujo => {
        const div = document.createElement('div');
        div.classList.add('art-item');
        
        div.innerHTML = `
            <img src="${dibujo.url}" alt="${dibujo.titulo}" loading="lazy">
        `;
        
        contenedor.appendChild(div);
    });
};

// 3. Ejecutar al cargar la página
window.addEventListener('DOMContentLoaded', cargarGaleria);
