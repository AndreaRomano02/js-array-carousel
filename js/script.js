console.log("JS OK");

//# PRELIMNARI

const galleryElement = document.getElementById("gallery");
const thumbnailGallery = document.getElementById("thumbnails");
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

  const thumbnails = imgElement.cloneNode();
  thumbnailGallery.appendChild(thumbnails);
}

//# LOGICA
const mainImages = document.querySelectorAll("#carousel img");
const imagesAside = document.querySelectorAll("#thumbnails img");
let currentIndex = 0;

//* Inserisco nella prima immagina la classe active e layer
mainImages[currentIndex].classList.add("active");
imagesAside[currentIndex].classList.add("layer");

//# Tenere in ascolto i bottoni
//! PREV
btnPrev.addEventListener("click", function () {
  mainImages[currentIndex].classList.remove("active");
  imagesAside[currentIndex].classList.remove("layer");
  if (currentIndex === 0) {
    currentIndex = mainImages.length - 1;
  } else {
    currentIndex--;
  }
  mainImages[currentIndex].classList.add("active");
  imagesAside[currentIndex].classList.add("layer");
  console.log(currentIndex);
});

//! NEXT
btnNext.addEventListener("click", function () {
  mainImages[currentIndex].classList.remove("active");
  imagesAside[currentIndex].classList.remove("layer");
  if (currentIndex === mainImages.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  mainImages[currentIndex].classList.add("active");
  imagesAside[currentIndex].classList.add("layer");

  console.log(currentIndex);
});
