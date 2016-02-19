console.log("welcome to hangman");

var game = {
  word: "",
  //guesses: [],
  wordLetters: [],
  maskedLetters: [],
  getWord: function() {
    this.word = prompt("Enter your secret word.");
  },
  splitWord: function() {
    this.wordLetters = this.word.split("");
    for (i = 0; i < this.word.length; i++) {
      this.maskedLetters[i] = "_"
    }
    //is there a way to do this using .forEach()?
    //this.wordLetters.forEach(function(letters) {
    //  self.maskedLetters.push...?
    //});
  },
  guessLetter: function () {
    var guess = prompt (this.maskedLetters + "\n\nThe word has " + this.wordLetters.length + " letters.\n\n Guess a letter.");
    for (i = 0; i < this.wordLetters; i++) {
      if (this.wordLetters[i] === guess) {
        this.maskedLetters[i] = guess;
      }
    }
  }

}
