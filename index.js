let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
}

$(".red").click(function (e) {
  e.preventDefault();
  $(".red").fadeOut(100).fadeIn(100);
  let audio = new Audio("sounds/red.mp3");
  audio.play();
});

$(".green").click(function (e) {
  e.preventDefault();
  $(".green").fadeOut(100).fadeIn(100);
  let audio = new Audio("sounds/green.mp3");
  audio.play();
});

$(".yellow").click(function (e) {
  e.preventDefault();
  $(".yellow").fadeOut(100).fadeIn(100);
  let audio = new Audio("sounds/yellow.mp3");
  audio.play();
});

$(".blue").click(function (e) {
  e.preventDefault();
  $(".blue").fadeOut(100).fadeIn(100);
  let audio = new Audio("sounds/blue.mp3");
  audio.play();
});
