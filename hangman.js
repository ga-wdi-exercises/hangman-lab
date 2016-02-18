//game variables
var game = {
  lettersInArray: [],
  incorrectGuesses: [],
  correctGuesses: [],
  words: []
}

//Prompt Player One to Enter Secret Word
function newWord() {
  var new_word = prompt("Player 1: What is your secret word?");
  game.lettersInArray = new_word.split("");
  console.log(game.lettersInArray);
};

//Replace secret word letters with dashes
function letterDashes () {
  game.lettersInArray.forEach(function(letter) {
    game.words.push("_")
  };
},



//Prompt player 2 to enter a letter
//If guess is incorrect, show player 2 how many guesses are remaining
