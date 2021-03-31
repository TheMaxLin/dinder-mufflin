//
// Carousel
//
document.addEventListener('DOMContentLoaded', () => {
  var slides = document.getElementById('carousel').getElementsByTagName('figure');
  var currentSlide = 0;
  var slideDelay = setInterval(slideForward, 4000);

  function slideForward() {
    slideTo(currentSlide + 1);
  }

  function slideBackward() {
    slideTo(currentSlide - 1);
  }

  function slideTo(n) {
    slides[currentSlide].className = 'hidden';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'visible';
  }

  function stopCarousel() {
    clearInterval(slideDelay);
  }

  // Controls
  var next = document.getElementById('nextSlide');
  var previous = document.getElementById('previousSlide');

  next.onclick = function () {
    slideForward();
  };

  previous.onclick = function () {
    slideBackward();
  };
});
