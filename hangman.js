

var welcome = alert("Welcome to Hang My Best Friend! This is your host, Master Bipin and you get to hang your best friend in this show. Let's Begin!!");

var name = prompt ("What is your name?");



var word = prompt("Hi, " + name + "! You're a shitty friend for wanting to hang your best friend but that's NOM Biz. What's your word?");

var hiddenword = word.split("");

var mask  = word.replace(/./g, " _ ");


var best = prompt(name +", which friend do you want to hang today?");




var goodguess = []
var badguess = []

while (goodguess.length < word.length) {

  var guessedLetter = prompt(mask + " We have a word! " + best + " Start guessing the word " + name + " chose for your death!")

  var place = word.indexOf(guessedLetter);
  if (place === -1 ) {
    // console.log("Wrong guess!");
    alert("Wrong guess! Guess again");
    badguess.push(guessedLetter);

    while (badguess.length > word.length) {
      alert(name + ", you're terrible friend and you just hung your best friend " + best + " !");
    break;
  }

}

   else {
    // console.log("good guess");
    alert("Good guess! keep going!");
    goodguess.push(guessedLetter);
  }
}











//var guessedLetter = prompt( mask + " Guess a letter!")


//if .guessedLetter in .hiddenword

//if letter is guessed correctly display on the dialog box

// var guesses = guess.includes(hiddenword)
//   if (guesses = "true"){
//
//     prompt a window box with correct letter
//
//   }
//
//   else {
//     you guessed it wrong try again.
//
//   }
//var loop = ( for (hiddenword[i]);
