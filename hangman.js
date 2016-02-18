console.log("welcome to hangman");

var wordEntered = "elephant";
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
  userGuess = prompt("Guess a letter.")
  checkGuess()
}


var checkGuess = function() {
  if (splitWord.includes(userGuess)) {

      var str = blankWord.join();
      blankWord = str.replace("-" , userGuess)
      blankWord = blankWord.split();

    alert("Correct! Your current progress is " + blankWord)
  }
  else {
    wrongGuesses.push(userGuess)
    alert("Wrong! Your wrong guesses are " + wrongGuesses)
  }
  
  askForGuess();
}

function checkNumberOfGuesses() {

  if (wrongGuesses.length > 3) {
    alert("you lost!")
  }
  else {
      askForGuess();
  }

}

askForGuess();
