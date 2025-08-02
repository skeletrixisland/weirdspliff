const track = document.getElementById('carouselTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    const slideCount = slides.length;
    let currentIndex = 0;
    let autoScrollInterval;

    function updateCarousel() {
        // Show 3 slides at once, center the current
        track.style.transform = `translateX(-${currentIndex * 500}px)`;
    }

    function moveSlide(n) {
        currentIndex = (currentIndex + n + slideCount) % slideCount;
        updateCarousel();
        resetAutoScroll();
    }

    function autoScroll() {
        moveSlide(1);
    }

    function resetAutoScroll() {
        clearInterval(autoScrollInterval);
        autoScrollInterval = setInterval(autoScroll, 3000);
    }

    // Clone first and last slides for infinite effect (optional, for smoother looping)
    document.addEventListener("DOMContentLoaded", function() {
        updateCarousel();
        autoScrollInterval = setInterval(autoScroll, 3000);
    });