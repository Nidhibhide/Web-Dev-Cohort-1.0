const statusText = document.getElementById("status");
const btn = document.getElementById("toggleButton");
const bulb = document.getElementById("bulb");
const body = document.getElementById("body").classList;

btn.addEventListener("click", () => {
  if (statusText.innerText === "Status: Off") {
    body.remove("light-mode");
    body.add("dark-mode");

    statusText.innerText = "Status: On";
    btn.innerText = "Turn Off";

    bulb.classList.remove("off");
  } else {
    body.remove("dark-mode");
    body.add("light-mode");

    statusText.innerText = "Status: Off";
    btn.innerText = "Turn On";

    bulb.classList.add("off");
  }
});
