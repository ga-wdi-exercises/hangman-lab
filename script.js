var hangmanGame = {
  player: {
    name: "",
    incorrectGuesses: 0,
    correctGuesses: 0,
    wins: 0,
    loses: 0
  },

  possibleWords: ["hello" , "bacon" , "taco" , "hungry"],
  gameWord: "",
  guessedChars: [],
  correctChars:[],

  newGameWord: function(){
    this.gameWord = this.possibleWords[Math.round(Math.random() * (this.possibleWords.length-1))];
    var j = 0;
    for (i=0;i < this.gameWord.length; i++){
      this.correctChars[i]=0;
    }
  },

  guess: function(char){
    if (this.guessedChars.includes(char)){return -1;}
    else {
      this.guessedChars.push(char);
      if (this.gameWord.includes(char)) {
        this.updateCorrectChars(char);
        this.player.correctGuesses++;
        return 0;
      }
      else {
        this.player.incorrectGuesses++;
        return 1;
      }
    }
  },

  updateCorrectChars: function(char){
    for (i=0;i < this.gameWord.length; i++){
      if (this.gameWord[i] == char){this.correctChars[i]=1;}
    }
  },

  checkEnd: function(){
    if (this.player.incorrectGuesses > 4){return 0;}
    else if (!this.correctChars.includes(0)){return 1;}
    else {return -1;}
  },

  restart: function(){
    this.player.incorrectGuesses = 0;
    this.player.correctGuesses = 0;
    this.player.wins = 0;
    this.player.loses = 0;
    guessedChars=[];
    correctChars=[];
    this.newGameWord();
  }
}

var waitingFor = "nothing";

//  Reads the input line, uses writeOut to display it, sends it to be parsed for
// for game actions, then sets the input line to blank.
function ProcIn(){
  var inputLine = document.getElementById("in");
  WriteOut(document.createTextNode("< " + inputLine.value));
  ParseIn(inputLine.value);
  inputLine.value = "";
}

// Displays text defined by outTxt.
// Text needs to be an object, so if this function recieves a string it will
// use the StrToObj function to convert it.
function WriteOut(outTxt){
  var out = document.getElementById("out");
  var line = document.createElement("p");
  if (typeof outTxt == "string"){ outTxt = StrToObj(outTxt);}
  line.appendChild(outTxt);
  out.appendChild(line);
}

// Initialize game variables, displays how to access help, then asks for a player
// name.
function StartUp(){
  dispHelp();
  hangmanGame.newGameWord();
  askForPlayer();
}

// Reads the input text, removes any return character, converts it to lower case
// then calls the proper function based on current state of the game.
function ParseIn(txt){
  txt = txt.replace(/\r?\n|\r/g,"")
  txt = txt.toLowerCase();
  switch(waitingFor) {
    case "name": setPlayer(txt); break;
    case "guess": procGuess(txt); break;
    case "break": waitingFor = "nothing"; break;
    default:
      switch(txt) {
        case "help": dispHelp(); break;
        case "ws": ws(); break;
        case "sure":
        case "k":
        case "yes":
        case "y": if(waitingFor=="end"){hangmanGame.restart(); requestGuess("Alright " + hangmanGame.player.name + ", guess a letter.");} break;
        case "naw":
        case "no":
        case "n": if(waitingFor=="end"){window.location.assign("https://www.youtube.com/watch?v=iJ4T9CQA0UM");} break;
        default: WriteOut("Command not recognized.");
      }
  }
}

// Converts strings to a textNode that will allow it to be added to an element
// on the HTML doc.
function StrToObj(txt){
  return(document.createTextNode(txt));
}

// Displays commands recognized by the parseIn function
function dispHelp(){
  WriteOut("---user commands----");
  WriteOut("< help - displays this help message.");
  WriteOut("----dev commands----")
  WriteOut("< break - cancels all wait flags.")
  WriteOut("< ws - display whitespace test")
  WriteOut("--------------------");

}

function askForPlayer(){
  WriteOut("What's your name son?");
  waitingFor = "name";
}

function setPlayer(name){
  hangmanGame.player.name = name;
  WriteOut("Get ready to play some hangman " + hangmanGame.player.name +".");
  waitingFor = "nothing"
  requestGuess("Alright " + hangmanGame.player.name + ", guess a letter.");
}

function requestGuess(txt){
  WriteOut(txt)
  waitingFor = "guess";
}

function procGuess(txt){
  waitingFor = "nothing";
  if (txt.length > 1){ requestGuess("Do you even know how to play hangman? Enter 1 letter, nothing more fool!");}
  else {
    var guessStatus = hangmanGame.guess(txt);
    WriteOut("You guessed " + txt + ".");
    if ( guessStatus == -1) {requestGuess("Your reading comprehension sucks, you've already guessed that.  Guess again.");}
    else if (guessStatus == 0) {WriteOut("You guessed correctly.");}
    else {WriteOut("You guessed wrong.");}
    displayGame();
    if (hangmanGame.checkEnd()<0){requestGuess("What's your next guess?");}
    else {endGame(hangmanGame.checkEnd());}
  }
}

function displayGame() {
  var progress = "";
  var guessed = "";
  for (i = 0; i < hangmanGame.gameWord.length; i++){
    if(hangmanGame.correctChars[i]==1){progress+= (hangmanGame.gameWord[i]+" ");}
    else {progress+="_";}
  }
  for(i = 0; i < hangmanGame.guessedChars.length; i++){
     guessed+= (hangmanGame.guessedChars[i] + " ")
  }
  WriteOut("-----");
  WriteOut("The board: " + progress);
  WriteOut(hangmanGame.player.name + "'s guesses: " + guessed);
  WriteOut("-----");
}

function endGame(state){
  if(state=1){WriteOut("You Won loser!");}
  else{WriteOut("You Lost Loser!");}
  waitingFor="end";
  WriteOut("Would you like to play again?")
}

//  I'd like the displayGame function to also show an ascii hangman, but until
// I can figure out how to force whitespace in my faux-terminal, it's not gunna
// happen.  The below code is my playarea for figuring that out.
function ws(){
    var out = document.getElementById("out");
    var line = document.createElement("span");
    outTxt = document.createTextNode("\xC2\xA0"+"Hi");
    line.appendChild(outTxt);
    out.appendChild(line);
}
