document.querySelectorAll('[data-menu]').forEach(button => {
    button.addEventListener('click', () => {
        const menu = button.parentElement.nextElementSibling;
        menu.classList.toggle('hidden');
    });
});