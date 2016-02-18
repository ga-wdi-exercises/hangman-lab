console.log("welcome to hangman");
guessNumber = 0;
totalGuesses = 6
correctGuesses = 0;
remainingGuesses = totalGuesses;
guess = "";
word = "";

var game = {
  letterArray: [],
  guesses: [],
  tiles:[],
  // word: "",
  pickWord: function(){
    //prompt for player 1 to choose word
    // returns word in the form of an array into the word key
    //has words like "make sure player 2 can't see, he's a real asshole"
    word = prompt("Let's play hangman! Please enter the word for player 2 to guess. Make sure he's not looking, player 2 is a real asshole!")
    game.letterArray = word.split("")
    // console.log(game.letterArray);
  },
  tileGenerator: function(){
    //function to generate the number of spaces remaining on the word
    game.letterArray.forEach(function(letter){
      game.tiles.push(" ____ ");
    })
    // console.log(game.tiles);
  },
  player2Prompt: function(){
    //prompt for player 2 to guess
    //prompt will say something like 'number of letters' and a bunch on blank spaces to represent word length
    //prompt will also have to list wrong guesses, number of guesses made, number remaining
    //function will have to call upon another function to replace the black spaces with letters after guesses are made
    //responds with either correct or not
    guess = prompt(game.tiles + "Choose a letter! You have made " + remainingGuesses + " of " + totalGuesses + " guesses remaining.");
    game.guesses.push(guess);
    // console.log(game.guesses);
  },
  guessChecker: function(){
    //letter checker function
    //scans thru list of letters and sees if letter exists
    //will need .includes function
    //if letter is in function will return True
    //can also be used to increment counter for correct/wrong guesses
    //will display an alert saying either correct or nope! and "onto next guess"
    // var guess = game.guesses[guessNumber];
    if(game.letterArray.includes(guess)){
      alert("Correct! Please guess again.");
      game.tileUpdater();
    } else {
      alert("Wrong! Guess again loser.");
      remainingGuesses--;
    }
    // console.log(game.guesses);
    // console.log(guess)
  },
  tileUpdater: function(){
    //if function 3 returns true, will access this function to check where letter is and update the black tiles in the prompt
    var correctIndices = [];
    // var guess = game.guesses[guessNumber];
    var idx = game.letterArray.indexOf(guess);
    while (idx != -1) {
      correctIndices.push(idx);
      idx = game.letterArray.indexOf(guess, idx + 1);
    }
    // console.log(correctIndices);
    correctIndices.forEach(function(index){
      game.tiles[index] = "__" + guess + "__"
    })
    var correctLetterQty = correctIndices.length;
    correctGuesses += correctLetterQty;
    // console.log(game.tiles);
  },
  gameTracker: function(){
    //game tracker
    //checks and sees if victory is achieved. prompts user if they want to start a new game
    while(correctGuesses < game.letterArray.length && remainingGuesses > 0) {
        game.player2Prompt();
        game.guessChecker();
        guessNumber++;
        // console.log(guessNumber);
        // console.log(correctGuesses);
      }
      if (correctGuesses == game.letterArray.length) {
        alert("Congratulations, you win!")
      } else {
        alert("The word was " + this.word + ". Better luck next time!")
      }
  },
  playAgain: function() {
    var playAgain = prompt("Do you want to play again? (Y or N)");
    if (playAgain == "y" || playAgain == "Y"){
      guessNumber = 0;
      totalGuesses = 6;
      correctGuesses = 0;
      remainingGuesses = totalGuesses;
      this.letterArray = [];
      this.guesses = [];
      this.tiles = [];
      guess = "";
      word= "";
      game.playANewGame();
    } else {
      alert("See you next time!");
    }
  },
  playANewGame: function() {
    game.pickWord();
    game.tileGenerator();
    game.gameTracker();
    game.playAgain();
  },
  startMenu: function () {
    var startOptions = prompt("Welcome to Hangman! 1. Play Game 2. Help / How To Play 3. Quit");
    if (startOptions == "1") {
      this.playANewGame();
    } else if(startOptions == "2") {
      var helpOption = prompt("This is supposed to be helpful, but I am too lazy to type directions to hangman! Enter Y if you would like to start playing.")
      if(helpOption == "Y" || helpOption == "y") {
        this.playANewGame();
      } else {alert("Ok, nevermind then...")}
    } else {
      alert("See ya!")
    }
  }
}

game.startMenu();
