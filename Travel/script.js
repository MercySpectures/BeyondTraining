let currentSlide = 0;

function moveCarousel(direction) {
    const carouselImages = document.querySelector('.carousel-card');
    const totalSlides = carouselImages.children.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const offset = -currentSlide * 100; // each image takes 100% width
    carouselImages.style.transform = `translateX(${offset}%)`;
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the carousel with the first image

    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

// Toggle menu on click
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });


    moveCarousel(0);
});
