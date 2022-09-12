const NumOfBtn = document.querySelectorAll(".drum").length;

// DETECT MOUSE CLICKS
for (let i = 0; i < NumOfBtn; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    const btnInnerHTML = this.innerHTML;

    makeSound(btnInnerHTML);
    buttonAnimation(btnInnerHTML);
  });
}

// DETECT KEYBOARD KEY PRESS

document.addEventListener("keypress", function (e) {
  makeSound(e.key);
  buttonAnimation(e.key);
});

// DETECTING KEYS AND CLICKS AND MAKE SOUND
function makeSound(key) {
  switch (key) {
    case "w":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      const kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(btnInnerHTML);
      break;
  }
}

// BUTTON ANIMATION WHEN PRESSED OR CLICKED

function buttonAnimation(currentKey) {
  var keyClass = document.querySelector("." + currentKey);
  keyClass.classList.add("btnClickStyle");

  setTimeout(function () {
    keyClass.classList.remove("btnClickStyle");
  }, 1.5);
}
