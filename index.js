var drumLength = document.querySelectorAll(".drum").length; // no ofdrums
for (var i = 0; i < drumLength; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonPressed = this.innerHTML; //capturesthe button'sinnerhtml

    makeSound(buttonPressed);
    buttonAnimation(buttonPressed);

  }) //passing event listener tofunction foreveryclickon drum
}

//

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio1 = new Audio('sounds/tom-2.mp3');
      audio1.play();
      break;
    case "s":
      var audio2 = new Audio('sounds/tom-3.mp3');
      audio2.play();
    case "d":
      var audio3 = new Audio('sounds/tom-4.mp3');
      audio3.play();
      break;
    case "j":
      var audio4 = new Audio('sounds/crash.mp3');
      audio4.play();
      break;
    case "k":
      var audio5 = new Audio('sounds/kick-bass.mp3');
      audio5.play();
      break;
    case "l":
      var audio6 = new Audio('sounds/snare.mp3');
      audio6.play();
      break;
    default:
      console.log(this.innerHTML);
  }
}

function buttonAnimation(activekey) {
  var currentkey = document.querySelector("." + activekey);
  currentkey.classList.add("pressed");

  setTimeout(function() {
    currentkey.classList.remove("pressed");
  }, 100);
}
