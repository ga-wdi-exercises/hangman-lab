console.log("welcome to hangman");

var wordEntered = "cat";
var splitWord = wordEntered.split("");
var wrongGuesses = [];

var concealWord = function (x) {
    var wordWithHints = [];
    for (i = 0; i < x.length; i++) {
        wordWithHints[i] = "-";
    };
    return wordWithHints;
};
var blankWord = concealWord(splitWord);


var askForGuess = function() {
  userGuess = prompt("Guess a letter.");
  checkGuess();
}

var checkGuess = function() {

  if (blankWord === splitWord) {
    alert("You win!")
  }
  else {


    if (splitWord.includes(userGuess)) {
        for (var i = 0; i < blankWord.length; i++) {
          if (splitWord[i] === userGuess){
            blankWord[i] = userGuess
          }
        }
      alert("Correct! Your current progress is " + blankWord);
          askForGuess();
    }
    else {
        wrongGuesses.push(userGuess)
          if (wrongGuesses.length < 3) {
            alert("Wrong! Your wrong guesses are " + wrongGuesses)
            askForGuess()
          }
          else {
            alert("You're all out of guesses!  You lose!");
          }
    }
  }
}
askForGuess();
