console.log("welcome to hangman");

var wordEntered = "elephant";
var splitWord = wordEntered.split("");
var userGuess = "e";
var wrongGuesses = [];


var concealWord = function (x) {
    var wordWithHints = [];
    for (i = 0; i < x.length; i++) {
        wordWithHints[i] = "-";
    };
    return wordWithHints;
};



var blankWord = concealWord(splitWord);

alert(blankWord)

var checkGuess = function() {
  if (splitWord.includes(userGuess)) {
    console.log("Correct!")
    blankWord.push(userGuess)
  }
  else {
    console.log("Wrong!")
    wrongGuesses.push(userGuess)
  }
}

checkGuess();
