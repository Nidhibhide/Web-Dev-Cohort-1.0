// Array of images and captions to be displayed in the carousel
const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];

// Get the necessary DOM elements
const carouselTrack = document.getElementById("carouselTrack");
const caption = document.getElementById("caption");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const carouselNav = document.getElementById("carouselNav");
const autoPlayButton = document.getElementById("autoPlayButton");
const timerDisplay = document.getElementById("timerDisplay");

let count = 0;
let indicators = [];
let img = document.createElement("img");

// Function to update the displayed image and caption based on the index
const updateImage = (i) => {
  img.setAttribute("src", images[i].url);
  caption.innerText = images[i].caption;
  indicators[i].classList.add("active");
};

// Create carousel indicators (dots) dynamically and append them to the navigation
for (let i = 0; i < images.length; i++) {
  let span = document.createElement("span");
  span.classList.add("carousel-indicator");
  carouselNav.appendChild(span);
  indicators.push(span);
}

// Set up the first image in the carousel
img.classList.add("carousel-slide");
carouselTrack.appendChild(img);
updateImage(0);

// Event listener for the "Next" button to show the next image
nextButton.addEventListener("click", () => {
  indicators.forEach((dot) => dot.classList.remove("active"));
  updateImage(count);
  count = count == 3 ? 0 : count + 1;
});

// Event listener for the "Previous" button to show the previous image
prevButton.addEventListener("click", () => {
  indicators.forEach((dot) => dot.classList.remove("active"));
  count = count == 0 ? 2 : count - 1;
  updateImage(count);
});

// Event listener for the "AutoPlay" button to start the autoplay functionality
autoPlayButton.addEventListener("click", () => {
  // Loop through images for autoplay
  for (let i = 1; i < 4; i++) {
    let timeInterval = 10 * i;
    let j = 10;
    let intervalId = setInterval(() => {
      timerDisplay.innerText = ` Next Slide in ${j}`;
      timeInterval--;
      j--;

      if (j <= 0) {
        j = 10;
      }
      if (timeInterval < 0) {
        clearInterval(intervalId);
        timerDisplay.innerText = " ";
      }
    }, 1000); // Set interval of 1 second for countdown updates

    setTimeout(() => {
      indicators.forEach((dot) => dot.classList.remove("active"));
      updateImage(i);
    }, 10000 * i); // Wait before changing to the next image
  }
});
