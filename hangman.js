console.log("welcome to hangman");

function getSecretWord() {
  //prompt user for secret word
  var promptForWord = prompt("Please enter your secret word.");
  //split secret word into array of letters
  var secretWord = promptForWord.split("");
  console.log(secretWord);
  //create array of _ that matches length of secretWord
  
}

function playGame() {
  getSecretWord();
}
playGame();
