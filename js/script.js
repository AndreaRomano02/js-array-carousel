console.log("JS OK");

//# PRELIMNARI

const galleryElement = document.getElementById("gallery");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

//* Creo l'array con il percorso delle immagini
const immages = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp",
];

//# Variabili
let imgElement;

// //# Creo il ciclo per inserire le immagini
for (let i = 0; i < immages.length; i++) {
  imgElement = document.createElement("img");
  imgElement.src = immages[i];
  imgElement.alt = "Landscape " + (i + 1);
  galleryElement.appendChild(imgElement);
}

//# LOGICA
const images = document.querySelectorAll("#carousel img");
let currentIndex = 0;

//* Inserisco nella prima immagina la classe active
images[currentIndex].classList.add("active");

//# Tenere in ascolto i bottoni
//! PREV
btnPrev.addEventListener("click", function () {
  images[currentIndex].classList.remove("active");
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex--;
  }
  images[currentIndex].classList.add("active");
  console.log(currentIndex);
});

//! NEXT
btnNext.addEventListener("click", function () {
  images[currentIndex].classList.remove("active");
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  images[currentIndex].classList.add("active");

  console.log(currentIndex);
});
