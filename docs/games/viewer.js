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
// Helper function to update hint display
// ---------------------------
function updateHintDisplay(hintText) {
  const showWholeWord = document.getElementById("showWholeWord").checked;
  const wholeWord = images[currentIndex].wholeWord;
  
  if (showWholeWord && wholeWord) {
    // Show hint in normal color and the rest in light gray
    const remaining = wholeWord.substring(hintText.length);
    hintLabel.innerHTML = `${hintText}<span style="color: #d0d0d0;">${remaining}</span>`;
  } else {
    hintLabel.textContent = hintText;
  }
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
  const useSecondLetter = document.getElementById("useSecondLetter").checked;
  
  if (hintLevel === 0) {
    // First press: show firstLetter
    updateHintDisplay(images[currentIndex].firstLetter);
    hintLabel.classList.add("visible");
    hintLevel = 1;
  } else if (hintLevel === 1) {
    if (useSecondLetter) {
      // Second press with checkbox enabled: show firstTwoLetters
      updateHintDisplay(images[currentIndex].firstTwoLetters);
      hintLevel = 2;
    } else {
      // Second press without checkbox: navigate to next image
      showImage((currentIndex + 1) % images.length);
    }
  } else {
    // Third press (only reachable if useSecondLetter was enabled): navigate to next image
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
// Show whole word checkbox listener
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {
  const showWholeWordCheckbox = document.getElementById("showWholeWord");
  if (showWholeWordCheckbox) {
    showWholeWordCheckbox.addEventListener("change", () => {
      // Update the current hint display when checkbox changes
      if (hintLevel === 1) {
        updateHintDisplay(images[currentIndex].firstLetter);
      } else if (hintLevel === 2) {
        updateHintDisplay(images[currentIndex].firstTwoLetters);
      }
    });
  }
});

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
