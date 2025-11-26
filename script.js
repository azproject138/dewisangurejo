// -------------------------------------------------------------------
// 1. ANIME ON SCROLL (AOS) Initialization
// -------------------------------------------------------------------
AOS.init({
    once: true, // Animation only happens once when the element is scrolled into view
    duration: 800, // Animation duration in ms
    easing: 'ease-out-quad', // Smooth easing effect
});

// -------------------------------------------------------------------
// 2. CAROUSEL (Smooth Slider) Logic
// -------------------------------------------------------------------
const carousel = document.getElementById('galleryCarousel');
const inner = document.getElementById('carouselInner');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
// items is used to determine total slides and current slide width
const items = inner.querySelectorAll('.carousel-item'); 
let currentIndex = 0;
const totalSlides = items.length;

/**
 * Updates the carousel position using CSS transform for smooth sliding.
 */
function updateCarousel() {
    // Shifts the inner container smoothly by a percentage of its width
    inner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event Listeners for manual control
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    // Logic to handle wrapping back to the last slide smoothly
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

// Autoplay (Slides automatically every 5 seconds)
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}, 5000); // 5000ms = 5 seconds

// -------------------------------------------------------------------
// 3. MOBILE NAVIGATION TOGGLE
// -------------------------------------------------------------------
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

// Toggles visibility of the mobile menu
navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Closes the mobile menu when any link is clicked (UX improvement)
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});