const text = document.getElementById("mainHeading");
const redButton = document.getElementById("redButton");
const greenButton = document.getElementById("greenButton");
const blueButton = document.getElementById("blueButton");
const purpleButton = document.getElementById("purpleButton");
const resetButton = document.getElementById("resetButton");

redButton.addEventListener("click", () => {
  text.style.color = "red";
});

greenButton.addEventListener("click", () => {
  text.style.color = "green";
});

blueButton.addEventListener("click", () => {
  text.style.color = "blue";
});
purpleButton.addEventListener("click", () => {
  text.style.color = "purple";
});
resetButton.addEventListener("click", () => {
  text.style.color = "black";
});
