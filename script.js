var word;
var splitword = [];
var guess;
var wguess = 0;
var playername;

function info(){

  playername = prompt("What is your name?");
  word = prompt("okay" + " " + playername + " " + "What is your word");
  console.log(word);
  splitword = word.split("");
  console.log(splitword);

  startgame();
  win();
}

function startgame(){

guess = prompt("okay, guess a letter");
var index = splitword.indexOf(guess);
console.log(index);
if(index != -1) {
  alert("Correct Letter");
  splitword.splice(index , 1);
  console.log(splitword);
}

else{
  alert("Wrong guess again");
  wguess++;
}

}

function win(){
while(wguess < 3){
  startgame();
  if(wguess === 3){
    alert("You Lose! Game Over");
  }
  if(splitword.length == 0){
    alert("You Win");
    wguess = 4;
  }
}

}




info();
