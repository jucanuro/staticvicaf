  // JavaScript para manejar la apertura y cierre del modal
  document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('myModal').classList.remove('hidden');
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('myModal').classList.add('hidden');
});

// Cerrar el modal cuando se hace clic fuera del contenido del modal
window.addEventListener('click', function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
});
let elements = document.querySelectorAll("[data-menu]");
for (let i = 0; i < elements.length; i++) {
    let main = elements[i];

    main.addEventListener("click", function () {
    let element = main.parentElement.parentElement;
    let indicators = main.querySelectorAll("img");
    let child = element.querySelector("#menu");
    let h = element.querySelector("#mainHeading>div>p");

    h.classList.toggle("font-semibold");
    child.classList.toggle("hidden");
    // console.log(indicators[0]);
    indicators[0].classList.toggle("rotate-180");
    });
};
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', function () {
        menuItems.forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});

// Toggle mobile menu visibility
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});