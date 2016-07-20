var stopButton = document.querySelector(".stop-button");
var slowButton = document.querySelector(".slow-button");
var goButton = document.querySelector(".go-button");
var cautionButton = document.querySelector(".caution-button");

stopButton.addEventListener("click", lightUpRed);
slowButton.addEventListener("click", lightUpYellow);
goButton.addEventListener("click", lightUpGreen);
cautionButton.addEventListener("click", flashYellow);

var red = document.querySelector(".stop");
var yellow = document.querySelector(".slow");
var green = document.querySelector(".go");
var flashing;

function lightUpRed() {
  red.classList.toggle("stop-light");
  yellow.classList.remove("slow-light");
  green.classList.remove("go-light");
  clearInterval(flashing);
}

function lightUpYellow() {
  yellow.classList.toggle("slow-light");
  red.classList.remove("stop-light");
  green.classList.remove("go-light");
  clearInterval(flashing);
}

function lightUpGreen() {
  green.classList.toggle("go-light");
  red.classList.remove("stop-light");
  yellow.classList.remove("slow-light");
  clearInterval(flashing);
}

function flash() {
  red.classList.remove("stop-light");
  green.classList.remove("go-light");
  yellow.classList.toggle("slow-light");
}

function flashYellow() {
  flashing = setInterval(flash, 1000);
}
