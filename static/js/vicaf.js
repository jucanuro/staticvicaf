const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
}

setInterval(nextSlide, 5000);

function selectTab(tabId) {
    // Quitar la clase 'selected' de todas las pestañas
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('bg-blue-500', 'text-white');
        tab.classList.add('bg-gray-200', 'text-gray-700');
    });

    // Añadir la clase 'selected' a la pestaña seleccionada
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.remove('bg-gray-200', 'text-gray-700');
    selectedTab.classList.add('bg-blue-500', 'text-white');
}

document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextItem() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }

    setInterval(showNextItem, 3000);
});

document.addEventListener('DOMContentLoaded', function () {
    const modalButtons = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');
    const modalCloseButtons = document.querySelectorAll('.modal-close');

    modalButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modalId = this.getAttribute('data-modal');
            document.getElementById(modalId).classList.add('active');
        });
    });

    modalCloseButtons.forEach(button => {
        button.addEventListener('click', function () {
            this.closest('.modal').classList.remove('active');
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
});

function redirectToServicePage(url) {
    window.location.href = url;
}