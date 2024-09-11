 document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.card');
            const cardInfo = document.querySelectorAll('.card-info');

            cards.forEach(card => {
                card.addEventListener('click', function() {
                    cards.forEach(c => c.classList.remove('selected-card'));
                    cardInfo.forEach(info => info.classList.add('hidden'));

                    card.classList.add('selected-card');
                    document.getElementById(card.dataset.info).classList.remove('hidden');
                });
            });
        });

        
    // Function to initialize carousels
    document.querySelectorAll('.carousel').forEach(carousel => {
      let currentIndex = 0;
      const images = carousel.querySelectorAll('img');

      // Rotate images every 3 seconds
      setInterval(() => {
        images[currentIndex].classList.add('hidden');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.remove('hidden');
      }, 3000);
    });
