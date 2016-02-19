console.log("welcome to hangman");
var word;
var guesses = [];
var guessLimit = 7;//counts the guesses//

//split the word into an array of letters, that are shown as dashes until guessed correctly//
var separateWord = function() {
  word= prompt("Enter a word for your player to guess!"),toLowerCase(); //ask for word//
  word = word.split("");
  var placeholders = "" ;
    for(var i = 0; i < word.length; i+=1) {
      letters[i]= "_"
    }
  }
  return letters.join("") //convert the dashes back into an array(the word) keeping the dashes instead of the letters//
}
//function will continue to ask for more guesses until guess limit is reached. shows the word (split up into an array of dashes, and how many guesses are left)//
var getGuess= function () {
  while(numberWrongGuesses < guessLimit) {
  prompt("Guess a letter.");
  guesses.filter(word);
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
  //>>psuedocode>>
  //-Prompt word
  //-count the guesses
  //-count the incorrect guesses to a max value
  //-split the word (string) into individual letters(an array of letters)
  //-Each letter of the secret word is represented by a dash (-)
  //-.includes or .filter to see if the guesses match a letter in the secretWord
  //-dashes turn to letters when guessed correctly.. Still in an array of letters (.replace)
  //-# of guesses goes up with each guess
  //-game ends when guess limit maxes or when the player guesses the correct word (.join) to get the word together or .match to see if the word matched the string of letters// 
