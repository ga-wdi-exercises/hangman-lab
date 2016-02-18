console.log("welcome to hangman");
var word = prompt("Enter a word for your player to guess!"); //ask for word//
var guesses = []; //counts the guesses//
var guessLimit = 7; //sets a limit of guesses//

//split the word into an array of letters, that are shown as dashes until guessed correctly//
function separateWord(word) {
  var letters = word.split("");
  var dashes = "" ;
    for(var i = 0; i < letters.length; i+=1) {
      if (guesses.includes(letters[i])) {
        letters[i] = letters[i];
      }
      else {
        letters[i] = "-"
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
function guess(letter) {
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
