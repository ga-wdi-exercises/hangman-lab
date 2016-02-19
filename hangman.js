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
  //Executes prompt
  letterGuesses.push(prompt('Word:  ' + secretWordHidden.join(' ')+ '\n' + 'Please guess a letter.  Guesses left: ' + ((secretWord.length + 1)- i)))
  console.log(i + ' time running ; letterGuessed = ' + letterGuesses[i] + 'letterGuesses = ' + letterGuesses)
  //2nd loop to evaluate if the guess was correct
  if (secretWord.includes(letterGuesses[i]) === true) {
      //If the letter guessed is in the secretWord, the 1st IF statement evulates here to the 2nd loop
      for (j = 0; j < secretWord.length; j++) {
      // 2nd loop is needed to check the guess against ALL letters of the secretWord
      if (letterGuesses[i] === secretWord[j]) {
        //IF the guess is the same as ANY letter in the secretWord, we then overwrite the secretWordHidden array which is all underscores ("_")
        secretWordHidden[j] = letterGuesses[i]
        detailedCorrectConsoleMessage()
        console.log('detailedCorrectConsoleMessage')
        //end of nested IF statement
      } else detailedWrongConsoleMessage()
        console.log('detailedWrongConsoleMessage');
  //1st loop evulates here once if runs though the nested if and 2nd for loop
  }  correctMessage()
    console.log(i + 'correctMessage()');
  } else if (secretWord.includes(letterGuesses[i]) !== true) {
    incorrectMessage()
    console.log(i + ' secretWord.includes(letterGuesses[i]) !== true');
  } else if (secretWordHidden === secretWord) {
    alert('You Win!' + '\n' + 'Word:  ' + secretWordHidden.join(' '))
  }
}

//End of IF statement.  Beginning of Message functions:
function firstGuessPrompt() {
  letterGuesses.push(prompt('Word:  ' + secretWordHidden.join(' ')+ '\n' + 'Please guess a letter.  Guesses left: ' + ((secretWord.length + 1)- i)))
}

function incorrectMessage() {
  letterGuesses.push(prompt('INCORRECT!!!' + '\n' + 'Word:  ' + secretWordHidden.join(' ')+ '\n' + 'Please guess a letter.  Guesses left: ' + ((secretWord.length + 3)- i)))
}

function detailedCorrectConsoleMessage() {
  console.log('Correct.  i = ' + i + ', j = ' + j + ', letterGuesses[i] = ' + letterGuesses[i] + ', secretWord[j] = ' + secretWord[j] + ', and secretWordHidden = ' + secretWordHidden)
}

function detailedWrongConsoleMessage() {
  console.log('Wrong.  i = ' + i + ', j = ' + j + ', letterGuesses[i] = ' + letterGuesses[i] + ', secretWord[j] = ' + secretWord[j] + ', and secretWordHidden = ' + secretWordHidden)
}

function correctMessage() {
  letterGuesses.push(prompt('CORRECT!!!' + '\n' + 'Word:  ' + secretWordHidden.join(' ')+ '\n' + 'Please guess a letter.  Guesses left: ' + ((secretWord.length + 1)- i)));
}


//correctGuess = letterGuesses.push(prompt('Word: ' + secretWordHidden.join(' ')))


//prompt('Word: ' + secretWordHidden.join(' ')+ '\n' + 'You have ' + 'guesses');
