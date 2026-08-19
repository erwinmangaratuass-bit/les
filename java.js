var slides = document.getElementById('slide-wrapper');
var dots   = document.querySelectorAll('.dot');
var totalSlides = document.querySelectorAll('.slide').length;
var index = 0;
var slideInterval;

function showSlide(n) {
  index = n;

  if (index >= totalSlides) index = 0;
  if (index < 0) index = totalSlides - 1;

  slides.style.transform = 'translateX(' + (-index * 100) + '%)';

  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  dots[index].classList.add('active');
}

function changeSlide(step) {
  resetTimer();
  showSlide(index + step);
}

function currentSlide(n) {
  resetTimer();
  showSlide(n);
}
   
function startAutoSlide() {
  slideInterval = setInterval(function() {
    showSlide(index + 1);
  }, 4000); // setiap 4000ms = 4 detik
}

function resetTimer() {
  clearInterval(slideInterval);
  startAutoSlide();
}

startAutoSlide();
