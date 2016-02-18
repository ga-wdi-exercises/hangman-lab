console.log("Welcome to Hilary's Hangman");

word()
function word() {
  var word = prompt("What is your secret word?");
    if (word < 1){
      return console.log("Thanks")
    } if (word > 0) {
      return console.log("Wrong")
    }
    };
