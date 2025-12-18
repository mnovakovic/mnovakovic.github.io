const img = document.getElementById("randomImage");
const hintLabel = document.getElementById("hintLabel");

// ---------------------------
// Shuffle images array (Fisher-Yates algorithm)
// ---------------------------
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

shuffleArray(images);

let currentIndex = 0;
let preloadedImage = new Image();
let hintLevel = 0; // 0 = no hint, 1 = firstLetter, 2 = firstTwoLetters

// ---------------------------
// Image Preloading
// ---------------------------
function preloadNext(index) {
  const nextIndex = (index + 1) % images.length;
  preloadedImage.src = images[nextIndex].path;
}

// ---------------------------
// Image Change Logic
// ---------------------------
function showImage(index) {
  img.classList.add("fade-out");
  hintLabel.classList.remove("visible");
  hintLevel = 0;

  setTimeout(() => {
    currentIndex = index;
    img.src = images[currentIndex].path;
    hintLabel.textContent = "";

    img.onload = () => {
      img.classList.remove("fade-out");
      preloadNext(currentIndex);
    };
  }, 400);
}

function nextImage() {
  if (hintLevel === 0) {
    // First press: show firstLetter
    hintLabel.textContent = images[currentIndex].firstLetter;
    hintLabel.classList.add("visible");
    hintLevel = 1;
  } else if (hintLevel === 1) {
    // Second press: show firstTwoLetters
    hintLabel.textContent = images[currentIndex].firstTwoLetters;
    hintLevel = 2;
  } else {
    // Third press: navigate to next image
    showImage((currentIndex + 1) % images.length);
  }
}

function previousImage() {
  showImage((currentIndex - 1 + images.length) % images.length);
}

// Initial load
img.src = images[currentIndex].path;
preloadNext(currentIndex);

// ---------------------------
// Keyboard Navigation
// ---------------------------
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") previousImage();
});

// ---------------------------
// Mobile Swipe Gestures
// ---------------------------
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const threshold = 50;
  const diff = touchEndX - touchStartX;

  if (Math.abs(diff) > threshold) {
    if (diff < 0) nextImage();   // swipe left
    else previousImage();        // swipe right
  }
}
