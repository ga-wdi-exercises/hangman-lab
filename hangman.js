console.log("welcome to hangman");
var word = prompt('gimme a word:');
var guesses = [];
var attempts = word.length + 4;
var attemptsLeft = attempts;
var display = '';

myl = 'a';
place = word.indexOf(myl);

function showDisplay() {
  for(i = 0; i < word.length; i++) {
    display += '-';
  }
  display;
}
function getGuess() {
  if(display === word) {
    attemptsLeft = 0;
    win();
  } else {
    while (attemptsLeft > 0) {
      var guess = prompt('You have ' + attemptsLeft + ' attempts. ' + 'guess a letter:\n' + display);
      var place = word.indexOf(guess);
      if (place > -1) {
          attemptsLeft--;
          display = display.replace(display[place], guess);
          getGuess();

      } else if (place < 0) {
        attemptsLeft--;
        if(attemtps == 0) {
          lose();
        }
        }
        getGuess();
      }
    }
}

function win() {
    var playAgain = prompt('you win! play again? (y/n)');
    if (playAgain == 'y') {
    gameOn();
    } else if (playAgain == 'n') {
      alert('thanks for playing!');
      return;
    }
}
  function lose() {
    var playAgain = prompt('you have no guesses left. play again? (y/n)');
    if (playAgain == 'y') {
      attemptsLeft = attempts;
      gameOn();
    } else if (playAgain == 'n') {
      alert('thanks for playing!');
      return;
    }
  }


function gameOn() {
  showDisplay();
  getGuess();
}

/*
gameOn() {
  build display with missing letters as -'s
  function display() {
    var display = '';
    forEach(function (a) {
      display += '-';
    }
    return display;
  }
    while (incorrectGuesses > 0)
      function getGuess () {
        guess = prompt('You have ' attemptsLeft. ' + 'guess a letter:\n' +
                      display);
        place = word.indexOf(guess);
        if guess is inside word
          if (place > -1)
            display.replace(display[place], guess)
            getGuess();
        else if guess not inside word
          incorrectGuesses--
          getGuess();
      }
      if (display === word) {
        var playAgain = prompt('you win! play again? (y/n)');
        if (playAgain == 'y') {
        gameOn();
        } else if (playAgain == 'n') {
          alert('thanks for playing!');
        }
      } else {
        prompt('you have no guesses left' play again? (y/n)');
        if (playAgain == 'y') {
        playGame();
        } else if (playAgain == 'n') {
          alert('thanks for playing!');
        }
    }


*/
