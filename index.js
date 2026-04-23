// $(".red").click(function (e) {
//   e.preventDefault();
//   let audio = new Audio("sounds/red.mp3");
//   audio.play();
// });

// $(".green").click(function (e) {
//   e.preventDefault();
//   let audio = new Audio("sounds/green.mp3");
//   audio.play();
// });

// $(".yellow").click(function (e) {
//   e.preventDefault();
//   let audio = new Audio("sounds/yellow.mp3");
//   audio.play();
// });

// $(".blue").click(function (e) {
//   e.preventDefault();
//   let audio = new Audio("sounds/blue.mp3");
//   audio.play();
// });

//let buttonColors = ["red", "blue", "green", "yellow"];

// let randomChosenColor = buttonColors[randomNumber];

let gamePattern = [];

function nextSequence() {
  let buttonColors = ["red", "blue", "green", "yellow"];
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  return randomChosenColor;
}
console.log(nextSequence());
