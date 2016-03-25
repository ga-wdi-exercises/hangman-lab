console.log("welcome to hangman");

document.getElementById("start").addEventListener('click', hangman);

function hangman() {
  console.log(this);

  console.log("welcome to hangman");

  var dictionary = [
            'sausage',
            'blubber',
            'pencil',
            'cloud',
            'moon',
            'water',
            'computer',
            'school',
            'network',
            'hammer',
            'walking',
            'violently',
            'mediocre',
            'literature',
            'chair',
            'two',
            'window',
            'cords',
            'musical',
            'zebra'
        ];

      var random = Math.floor(Math.random()*20);

      var s = String(dictionary[random]);
      var theWord = [];
      theWord = s.split('');

      var finalScore = parseInt(theWord.length)+10;
      var score = parseInt(0);
      var guesses=[];

      var completeTheWord = [];
        for (var i=0; i < parseInt(theWord.length); i++) {
             completeTheWord.push("_ ");
        }



              while (score !== finalScore){
              var guess = prompt("This word has " + parseInt(theWord.length) + " letters\nYou have " + (finalScore - score) + " guesses left\nPick a letter!\n" + completeTheWord + "\nYou already guessed :" + guesses);

              console.log(guess);
              console.log(guesses);
              console.log(guesses.indexOf(guess));

              if (guesses.indexOf(guess)== -1) {

                      if (theWord.indexOf(guess) > -1) {

                            var letterPositions = [];
                            for (i = 0; i<theWord.length; i++) {
                              if (theWord[i] === guess) {
                                completeTheWord.splice(i,1,guess);
                              }
                            }

                      } else {
                          score += 1;
                          guesses.push(guess);
                      }

                } else {
                  alert("you already guessed this letter, pick another");
                }

                console.log(theWord);
                console.log(completeTheWord);

                if (theWord.toString()==completeTheWord.toString()){
                  alert("you won!");
                  break;
                }


            }


              alert("you lost :(");



}
