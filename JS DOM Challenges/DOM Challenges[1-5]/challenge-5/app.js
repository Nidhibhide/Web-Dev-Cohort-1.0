/**
 * Write your challenge solution here
 */
// Image data
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
















const carouselTrack = document.getElementById("carouselTrack");
const caption = document.getElementById("caption");
const nextButton = document.getElementById("nextButton");
let count=0;

if(count==0)
{
let img = document.createElement("img");
img.setAttribute("src", images[0].url);
img.classList.add("carousel-slide");
carouselTrack.appendChild(img);
caption.innerText = images[0].caption;
count
}

nextButton.addEventListener("click", () => {
  img.setAttribute("src", images[1].url);
  caption.innerText = images[1].caption;
  console.log(1);
});

nextButton.addEventListener("click", () => {
  img.setAttribute("src", images[2].url);
  caption.innerText = images[2].caption;
  console.log(2);
});

nextButton.addEventListener("click", () => {
  img.setAttribute("src", images[3].url);
  caption.innerText = images[3].caption;
  console.log(3);
});
