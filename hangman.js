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


//1st Prompt asking user2 for  a letter
letterGuesses.push(prompt('Word:  ' + secretWordHidden.join(' ')+ '\n' + 'Please guess a letter'))
  console.log(letterGuesses)
  console.log(secretWordArray.includes(letterGuesses[0]))


//prompt('Word: ' + secretWordHidden.join(' ')+ '\n' + 'You have ' + 'guesses');
