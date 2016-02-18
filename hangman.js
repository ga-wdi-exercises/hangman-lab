console.log("welcome to hangman");

var wordEntered = "elephant";
var splitWord = wordEntered.split("");
var userGuess = "e";
var wrongGuesses = [];


var concealWord = function (x) {
    var wordWithHints = [];
    for (i = 0; i < x.length; i++) {
        wordWithHints[i] = "q";
    };
    return wordWithHints;
};

var blankWord = concealWord(splitWord);

var checkGuess = function() {
  if (splitWord.includes(userGuess)) {
    console.log("Correct!")


    function ostrich() {


      var str = blankWord.join();
      str.replace("q" , "e")
    }
  ostrich()

  }
  else {
    console.log("Wrong!")
    wrongGuesses.push(userGuess)
  }
}


checkGuess();


alert(blankWord)
