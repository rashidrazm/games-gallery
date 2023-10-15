function initializeSlider(sliderClassName) {
    let currentSlide = 0;
    const slides = document.getElementsByClassName(sliderClassName);
    slides[1].style.display = "none";
    slides[2].style.display = "none";

    function changeSlide(direction) {
        console.log("clicked");
        slides[currentSlide].style.display = "none";
        currentSlide += direction;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        } else if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        slides[currentSlide].style.display = "block";
    }

    function nextSlide() {
        changeSlide(1);
    }

    function autoSlide() {
        nextSlide();
    }

    slides[currentSlide].style.display = "block";

    setInterval(autoSlide, 4000);
}

initializeSlider("slider");
initializeSlider("slider2");