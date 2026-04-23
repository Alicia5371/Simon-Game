//!Click function that plays the sound
$(".red").click(function (e) {
  e.preventDefault();
  let audio = new Audio("sounds/red.mp3");
  audio.play();
});

$(".green").click(function (e) {
  e.preventDefault();
  let audio = new Audio("sounds/green.mp3");
  audio.play();
});

$(".yellow").click(function (e) {
  e.preventDefault();
  let audio = new Audio("sounds/yellow.mp3");
  audio.play();
});

$(".blue").click(function (e) {
  e.preventDefault();
  let audio = new Audio("sounds/blue.mp3");
  audio.play();
});

function nextSequence() {}
