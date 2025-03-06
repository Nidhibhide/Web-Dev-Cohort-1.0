// Selecting elements from the DOM using querySelector
const date = document.querySelector(".date");
const digitalclock = document.querySelector(".digital-clock");
const clock = document.querySelector(".clock");

// Selecting clock hands using getElementsByClassName
const min1 = document.getElementsByClassName("minute")[0];
const hour1 = document.getElementsByClassName("hour")[0];
const sec1 = document.getElementsByClassName("second")[0];

// Getting the current date and formatting it
let CurrDate = new Date();
let NumDate = CurrDate.getDate();
let month = CurrDate.toLocaleString("en-US", { month: "long" });
let weekday = CurrDate.toLocaleString("en-US", { weekday: "long" });
let year = CurrDate.getFullYear();

// Display the formatted date in the "date" element
date.innerText = `${weekday} ${NumDate} ${month} ${year}`;

// Function to format time values (ensures two digits)
const formatTime = (val) => (val < 10 ? `0${val}` : val);

// Updating the clock every second
setInterval(() => {
  CurrDate = new Date();
  let hour = CurrDate.getHours();
  let min = CurrDate.getMinutes();
  let sec = CurrDate.getSeconds();

  // Rotating clock hands based on time values
  min1.style.rotate = `${6 * min}deg`;
  sec1.style.rotate = `${6 * sec}deg`;
  hour1.style.rotate = `${30 * hour}deg`;

  // Updating the digital clock display
  digitalclock.innerHTML = `${formatTime(hour)}:${formatTime(min)}:${formatTime(
    sec
  )}`;
}, 1000);

// Adding clock numbers (1-12) dynamically
for (let i = 1; i <= 12; i++) {
  let numDiv = document.createElement("div"); // Create a div for each number
  numDiv.style.transform = `rotate(${30 * i}deg)`; // Position the number

  let span = document.createElement("span"); // Create a span to hold the number
  span.innerText = `${i}`; // Set the number text

  // Counter-rotate the span to keep numbers upright
  span.style.transform = `rotate(-${30 * i}deg)`;

  numDiv.classList.add("number");
  numDiv.appendChild(span);
  clock.appendChild(numDiv);
}
