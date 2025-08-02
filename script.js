const track = document.getElementById('carouselTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    const slideCount = slides.length;
    let currentIndex = 0;
    let autoScrollInterval;

    function updateCarousel() {
        // Get the current slide width (responsive)
        const slideWidth = slides[0].clientWidth;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
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