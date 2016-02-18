console.log("welcome to hangman");

var wordEntered = "elephant";
var splitWord = wordEntered.split("");
var userGuess = "e";
var wrongGuesses = [];



var blankOutWord = function (splitWord) {

      for (i = 0; i < splitWord.length; i++) {
          splitWord[i] = "-";
        }
    }


blankOutWord(splitWord)

alert(splitWord);



var checkGuess = function() {
  if (splitWord.includes(userGuess)) {
    console.log("Correct!")
  }
  else {
    console.log("Wrong!")
    wrongGuesses.push(userGuess)
  }
}

checkGuess();
