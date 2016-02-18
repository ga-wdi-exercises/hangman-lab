var guest= prompt('Please enter your Nickname', '');
if ( (guest=='') || (guest==null) )
{
 guest="";
}

document.write ("Hello" + " " + guest + ", Welcome to Hangman!" );

var words = ['love', 'peace', 'hope','happy','life', 'family', 'children', 'unite'];

var guestattempt="";

function chooseWord (words) {
  var hiddenWord = words[Math.floor(Math.random() * words.length)];
  prompt (guest + " " + ",Guess My Hangman\n " + hiddenWord )
If (this.words==guestattempt {
  alert ("Congratulations, your smart after all!"))
}}


chooseWord (words);

 // function blanksFromAnswer(guesses) {
 //     var result = "";
 //     for (var i in answerWord)
 //     result += " _ ";
 //     return result;
 //   };
