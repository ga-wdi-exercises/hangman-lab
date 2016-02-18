//Welcome Message
console.log("welcome to hangman");
// Prompts user to get secret word --> UNCOMMENT WHEN DONE <-- secretWord = prompt("Please select a secret word!")

  //Hardcoded secretWord, delete when done.
  var secretWord = 'toast'
  console.log('secretWord = ' + secretWord)

secretWordHidden = []
letterGuesses = []

secretWordArray = secretWord.split('');
console.log(secretWordArray);

// Function to show user the amount of letters in the secret word
function spaces(){
  for (i = 0; i < secretWord.length; i++) {
    secretWordHidden.push('_');
  }
} spaces()

//Loop to start the letter guessing protocol

letterGuesses.push(prompt('Word:  ' + secretWordHidden.join(' ')+ '\n' + 'Please guess a letter'))



for (i = 0; (i < (secretWord.length)); i++) {
  //1st Prompt asking user2 to guess a letter
  if (secretWord.includes(letterGuesses[i]) === true) {
      for (i = 0; secretWord.length; i++)
      if (letterGuesses[i] === secretWord[i]) {
        letterGuesses[i] = secretWordHidden[i]
      }

    console.log(letterGuesses)
      letterGuesses[i].replace(secretWordHidden[i])
      console.log('good job!')
      console.log('secretWord is ' + secretWord + ' and these letters have been guessed: ' + letterGuesses);
    } else console.log('loser')
}


correctGuess = letterGuesses.push(prompt('Word: ' + secretWordHidden.join(' ')))


//prompt('Word: ' + secretWordHidden.join(' ')+ '\n' + 'You have ' + 'guesses');
