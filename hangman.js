

var hangman = {
  player =[],
  word =[],
  guesses =[],
  incorrectGuesses=[]
  var playNumber = word.length + 6;
  var counter = playNumber - guesses.length;

   function getPlayer() {
     var playerName = prompt("Enter your name");
       if (playerName !== null){
         player.push(playerName);
       }
       console.log(playerName +" "+ "Welcome to hangman");

   };
   function getWord() {
     if (secretWord == null){ prompt(playerName + "Welcome to hangman, Enter a secret word to play ").toUpperCase().toString();
     hangman.word.push(secretWord.split(""));
     };
   };
   function PlayGame() {
    if (counter > 0) {Alert("You have " + counter + " lives");
    }
    elseif (counter == 0){
       alert("Game Over" + player + getWinner())
     }
     else {
       var play = prompt("Please enter a letter to play").toUpperCase().toString();
       if(play !== null) {
       hangman.guesses.push(play);
       }
     }
   }

   function getMatch(guesses, word) {
    var matches = [];

    for ( var i = 0; i < guesses.length; i++ ) {
        for ( var e = 0; e < word.length; e++ ) {
            if ( guesses[i] === word[e] ) matches.push( guesses[i] );
        }
    }
      //  for (i=0, i<word.length, i++){
      //    hangman.guesses.forEach(.match())
      //  }
    return matches;
}
   function getWinner() {
     if
      }

     }
   }
   


  //   var arrays = word.concat(guesses) //fancy but complicated
  //   var result = arrays.shift().filter(function(v) {
  //   return arrays.every(function(a) {
  //       return a.indexOf(v) !== -1;
  //   });
  //  });

}

// create an empty array
// loop through array1, element by element. {
//   loop through array2, element by element {
//     if array1.element == array2.element {
//       add to your new array
//     }
//   }
// }
