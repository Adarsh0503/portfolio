var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });


}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


      case "1":
        var tom1 = new Audio("sounds/one.mp3");
        tom1.play();
        break;

      case "2":
        var tom2 = new Audio("sounds/two.mp3");
        tom2.play();
        break;

      case "3":
        var tom3 = new Audio('sounds/three.mp3');
        tom3.play();
        break;

      case "4":
        var tom4 = new Audio('sounds/four.mp3');
        tom4.play();
        break;

      case "5":
        var snare = new Audio('sounds/fife.mp3');
        snare.play();
        break;

      case "6":
        var crash = new Audio('sounds/seven.mp3');
        crash.play();
        break;

      case "7":
        var kick = new Audio('sounds/six.mp3');
        kick.play();
        break;




    default: console.log(key);

  }
}



var numberOfPianoButtons = document.querySelectorAll(".piano").length;

 for (var i = 0; i < numberOfPianoButtons; i++) {
  document.querySelectorAll(".piano")[i].addEventListener("click", function() {
//
  var buttonInnerHTML1 = this.innerHTML;
//
     makeSound(buttonInnerHTML1);
//
   buttonAnimation(buttonInnerHTML1);
   });


//
 document.addEventListener("keypress", function(event) {
//
   makeSound(event.key);
//
  buttonAnimation(event.key);
//
 });
}
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
