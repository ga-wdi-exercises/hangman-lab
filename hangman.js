//Welcome Message
console.log("welcome to hangman");
// Prompts user to get secret word --> UNCOMMENT WHEN DONE <-- secretWord = prompt("Please select a secret word!")

  //Hardcoded secretWord, delete when done.
  var secretWord = 'toast'
  console.log('secretWord = ' + secretWord)

secretWordHidden = []
letterGuesses = []

secretWordArray = secretWord.split('');


// Function to show user the amount of letters in the secret word
function spaces(){
  for (i = 0; i < secretWord.length; i++) {
    secretWordHidden.push('_');
  }
} spaces()

//Loop to start the letter guessing protocol


for (i = 0; (i < (secretWord.length)); i++) {
  console.log(i + 'loop')

  firstGuessPrompt()


  if (secretWord.includes(letterGuesses[i]) === true) {

      for (j = 0; j < secretWord.length; j++) {

      if (letterGuesses[i] === secretWord[j]) {
        secretWordHidden[j] = letterGuesses[i]
      } else console.log('i = ' + i + ', j = ' + j + ', letterGuesses[i] = ' + letterGuesses[i] + ', secretWord[j] = ' + secretWord[j] + ', and secretWordHidden = ' + secretWordHidden);

    }  letterGuesses.push(prompt('CORRECT!!!' + '\n' + 'Word:  ' + secretWordHidden.join(' ')+ '\n' + 'Please guess a letter.  Guesses left: ' + ((secretWord.length + 1)- i)));

  } else if (secretWord.includes(letterGuesses[i]) !== true) {
    incorrectMessage();
  } else if (secretWordHidden === secretWord) {

    alert('You Win!' + '\n' + 'Word:  ' + secretWordHidden.join(' '))
  }
}

function firstGuessPrompt() {
  letterGuesses.push(prompt('Word:  ' + secretWordHidden.join(' ')+ '\n' + 'Please guess a letter.  Guesses left: ' + ((secretWord.length + 1)- i)))
}

function incorrectMessage() {
  letterGuesses.push(prompt('INCORRECT!!!' + '\n' + 'Word:  ' + secretWordHidden.join(' ')+ '\n' + 'Please guess a letter.  Guesses left: ' + ((secretWord.length + 3)- i)))
}
//correctGuess = letterGuesses.push(prompt('Word: ' + secretWordHidden.join(' ')))


//prompt('Word: ' + secretWordHidden.join(' ')+ '\n' + 'You have ' + 'guesses');
