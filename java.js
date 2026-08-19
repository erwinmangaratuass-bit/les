var slides = document.getElementById('slide-wrapper');
var dots   = document.querySelectorAll('.dot');
var totalSlides = document.querySelectorAll('.slide').length;
var index = 0;
var slideInterval;

function showSlide(n) {
  index = n;

  // Loop balik jika index melewati batas
  if (index >= totalSlides) index = 0;
  if (index < 0) index = totalSlides - 1;

  // Geser wrapper: -index * 100% = geser ke slide ke-N
  slides.style.transform = 'translateX(' + (-index * 100) + '%)';

  // Update dots: hapus semua .active, beri ke dot saat ini
  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  dots[index].classList.add('active');
}

// Tombol panah: maju/mundur 1 step
function changeSlide(step) {
  resetTimer();
  showSlide(index + step);
}

// Klik dot: langsung ke slide tertentu
function currentSlide(n) {
  resetTimer();
  showSlide(n);
}

// Mulai timer otomatis dengan setInterval
function startAutoSlide() {
  slideInterval = setInterval(function() {
    showSlide(index + 1);
  }, 4000); // setiap 4000ms = 4 detik
}

// Reset timer saat user klik manual
function resetTimer() {
  clearInterval(slideInterval);
  startAutoSlide();
}

// Jalankan pertama kali saat halaman dimuat
startAutoSlide();
