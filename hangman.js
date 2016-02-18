console.log("welcome to hangman");

var game = {
  word: "",
  letters: [],
  playerScore: 0,
  executionerScore: 0,


  getWord: function() {
    this.word = prompt("Please enter the word that the player will guess.");
    this.letters = this.word.split("");
    this.guessLetter();
  },

  guessLetter: function() {
    var guess = prompt("Please guess a letter");
    if (this.letters.includes(guess)) {
      for (i = 0; i < this.letters.length; i++) {
        if (guess === this.letters[i]) {
          this.playerScore++;
          }
        }
      }
    else {
      this.executionerScore++;
    }
    this.checkScore();
  },

  checkScore: function() {
    alert("Your score is " + this.playerScore + ", and the executioner's score is " + this.executionerScore +".");
    if (this.playerScore === this.letters.length) {
      return alert("Game over. You win!");
    } else if (this.executionerScore === 6) {
      return alert("Game over, maaaan! You shall hang by the neck until you are dead, dead, dead.");
    } else this.guessLetter();
  }
}
game.getWord();
