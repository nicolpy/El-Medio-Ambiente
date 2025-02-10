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