console.log("welcome to hangman");
var word = prompt("Enter a word for your player to guess!"),toLowerCase(); //ask for word//
var guesses = [];
var guessLimit = 7;//counts the guesses//

//split the word into an array of letters, that are shown as dashes until guessed correctly//
function separateWord(word) {
  var letters = word.split("");
  var placeholders = "" ;
    for(var i = 0; i < word.length; i+=1) {
      letters[i]= "_"
    }
  }
  return letters.join("") //convert the dashes back into an array(the word) keeping the dashes instead of the letters//
}
//function will continue to ask for more guesses until guess limit is reached. shows the word (split up into an array of dashes, and how many guesses are left)//
function numberWrongGuesses(word, guesses) {
  return guesses.filter(word);
while(numberWrongGuesses < guessLimit) {
  prompt("Guess a letter.")
}
}
function checkLetter(letter) {
  guesses.push(letter);
  var wrongGuess = wrongChoice(letter);
  alert("The letter you selected, " + letter + "is incorrect. You have " + (guessLimit - wrongGuess) + " guesses left. Try again!")
    if (wrongGuess === guessLimit) {
      alert("GAME OVER! You lost. Nice Try!")
    }
    else if (separateWord === secretWord) {
      alert("You guessed the word. Great job!");
    }
  }
