console.log("welcome to hangman");

secretWord = [];

function getSecretWord() {
  var promptForWord = prompt("Please enter your secret word.");
  secretWord.push(promptForWord.split(""));
}

function playGame() {
  getSecretWord();
}
playGame();
