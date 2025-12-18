const img = document.getElementById("randomImage");
const button = document.getElementById("nextButton");

let currentIndex = Math.floor(Math.random() * images.length);
let preloadedImage = new Image();

// ---------------------------
// Image Preloading
// ---------------------------
function preloadNext(index) {
  const nextIndex = (index + 1) % images.length;
  preloadedImage.src = images[nextIndex];
}

// ---------------------------
// Image Change Logic
// ---------------------------
function showImage(index) {
  img.classList.add("fade-out");

  setTimeout(() => {
    currentIndex = index;
    img.src = images[currentIndex];

    img.onload = () => {
      img.classList.remove("fade-out");
      preloadNext(currentIndex);
    };
  }, 400);
}

function nextImage() {
  showImage((currentIndex + 1) % images.length);
}

function previousImage() {
  showImage((currentIndex - 1 + images.length) % images.length);
}

// Initial load
img.src = images[currentIndex];
preloadNext(currentIndex);

button.addEventListener("click", nextImage);

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
