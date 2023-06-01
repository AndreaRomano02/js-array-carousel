console.log("JS OK");

//# PRELIMNARI

const galleryElement = document.getElementById("gallery");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

//# LOGICA
const images = document.querySelectorAll("#carousel img");
let currentIndex = 0;

//* Inserisco nella prima immagina la classe active
images[currentIndex].classList.add("active");

//# Tenere in ascolto i bottoni
//! PREV
btnPrev.addEventListener("click", function () {
  if (currentIndex < 1) return;
  images[currentIndex].classList.remove("active");
  currentIndex--;
  images[currentIndex].classList.add("active");
});

//! NEXT
btnNext.addEventListener("click", function () {
  if (currentIndex === images.length - 1) return;

  images[currentIndex].classList.remove("active");
  currentIndex++;
  images[currentIndex].classList.add("active");
});
