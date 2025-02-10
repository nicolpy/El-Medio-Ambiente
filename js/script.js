function toggleMenu() {
    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-toggle');
    const xButton = document.querySelector('.x-button');
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
        menuToggle.style.display = 'none';
        xButton.style.display = 'block';
    } else {
        menuToggle.style.display = 'flex';
        xButton.style.display = 'none';
    }
}

// Carrusel

document.addEventListener("DOMContentLoaded", function () {
    new Glide(".glide", {
        type: "carousel",
        perView: 1,
        autoplay: 3000, // Cambia cada 3 segundos
        hoverpause: true
    }).mount();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        // Evita ejecutar para href="#" que no apunta a nada
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
