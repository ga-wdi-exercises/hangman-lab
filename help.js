console.log("Welcome to Hangman! Good luck.")
function getGuess(){
  return prompt("Guess a letter.").toLowerCase();
}
function playGame() {
  var gameOver = false;
  do {
    var word = prompt("Pick a word for your player to guess!");
    word = word.toLowerCase();
    var letters = word.split(" ");
    var dashes = [];
    for(var i = 0; i< word.length; i +=1) {
      dashes[i] = "_";
  }
  do {
    checkLetter(dashes, getGuess(), letters);
  } while(isGameOver(dashes,word) == false);
  } if(isGameOver(dashes, word) == true) {
    isGameOver(dashes, word);
    return dashes;
  }
function
