const menuItems = document.querySelectorAll('.menu-item');
const imagesContainer = document.getElementById('images');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeModalButton = document.getElementById('closeModal');

const images = [
    [
        '/staticvicaf/static/img/CC-1.jpeg',
        '/staticvicaf/static/img/CC-2.jpeg',
        '/staticvicaf/static/img/CC-3.jpeg',
        '/staticvicaf/static/img/CC-4.jpeg',
    ],
    [
        '/staticvicaf/static/img/EMS-1.jpg',
        '/staticvicaf/static/img/EMS-2.jpg',
        '/staticvicaf/static/img/EMS-3.jpg',
        '/staticvicaf/static/img/e_mecanica_suelos1.jpg',
    ],
    [
      '/staticvicaf/static/img/CC-1.jpeg',
      '/staticvicaf/static/img/CC-2.jpeg',
      '/staticvicaf/static/img/CC-3.jpeg',
      '/staticvicaf/static/img/CC-4.jpeg',
  ],
    // Añadir imágenes para otros elementos del menú aquí
];

let currentIndex = 0;
let currentImages = images[0];

// Función para actualizar el carrusel
function updateCarousel(index) {
    currentImages = images[index];
    imagesContainer.innerHTML = currentImages.map((src, i) => {
        return `<img src="${src}" alt="Imagen ${i + 1}" class="carousel-image w-full h-full object-cover ${i === 0 ? '' : 'hidden'}">`;
    }).join('');
    currentIndex = 0;
}

// Cambiar imagen en el carrusel
function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = currentImages.length - 1;
    } else if (currentIndex >= currentImages.length) {
        currentIndex = 0;
    }
    const images = document.querySelectorAll('.carousel-image');
    images.forEach((img, i) => {
        img.classList.toggle('hidden', i !== currentIndex);
    });
}

function highlightMenuItem(index) {
  menuItems.forEach((item, i) => {
      item.classList.toggle('bg-blue-300', i === index); // Cambia el color de fondo
      item.classList.toggle('text-white', i === index); // Cambia el color del texto
  });
}

function openModal() {
  modal.classList.remove('hidden');
}

// Cerrar el modal
function closeModal() {
  modal.classList.add('hidden');
}

menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
      updateCarousel(index);
      openModal();  // Abrir el modal al seleccionar un elemento del menú
  });
})

// Event listeners
menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        updateCarousel(index);
    });
});

document.getElementById('prev').addEventListener('click', () => {
    changeImage(-1);
});

document.getElementById('next').addEventListener('click', () => {
    changeImage(1);
});

// Inicializar con el primer elemento del menú
updateCarousel(0);
