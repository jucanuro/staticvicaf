const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        const track = document.querySelector('.carousel-track');
        const images = document.querySelectorAll('.carousel-image');
        let currentIndex = 0;

        function nextSlide() {
            currentIndex = (currentIndex + 1) % images.length;
            const offset = -currentIndex * 100;
            track.style.transform = `translateX(${offset}%)`;
        }

        setInterval(nextSlide, 5000);