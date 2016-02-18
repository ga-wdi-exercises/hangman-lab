

var hangman = {
  player =[],
  word =[],
  guesses =[],
  incorrectGuesses=[]
   getPlayer: function() {
     var playerName = prompt("Enter your name");
       if (playerName){
         player.push(playerName);
       }
       console.log(playerName + "Welcome to hangman");

   }
   getWord: function() {
     secretWord = prompt(playerName + "Welcome to hangman, Enter a secret word to play ").toUpperCase().toString();
     hangman.word.push(secretWord);

   }
   PlayGame: function() {
     var play = prompt("Please enter a letter to play").toUpperCase().toString();
     if(play) {
       hangman.word.push(play);
       alert(guesed)
     }
   }

}
