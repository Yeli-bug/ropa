const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slides = document.getElementById("slides");

let slideIndex = 0;
let intervalId;

prevBtn.addEventListener("click", showPrevSlide);
nextBtn.addEventListener("click", showNextSlide);

startSlideShow();

function startSlideShow() {
  intervalId = setInterval(showNextSlide, 3000); // Cambia de diapositiva cada 3 segundos (3000 ms)
}

function stopSlideShow() {
  clearInterval(intervalId);
}

function showPrevSlide() {
  stopSlideShow();
  slideIndex = (slideIndex - 1 + slides.children.length) % slides.children.length;
  updateSlide();
  startSlideShow();
}

function showNextSlide() {
  stopSlideShow();
  slideIndex = (slideIndex + 1) % slides.children.length;
  updateSlide();
  startSlideShow();
}

function updateSlide() {
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

updateSlide();





