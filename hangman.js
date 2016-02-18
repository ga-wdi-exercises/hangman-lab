console.log("welcome to hangman");
var word = prompt("Enter a word.");
console.log("word:" + word);
var dashWord;
for (i = 0; i <word.length; i ++) {
  dashWord += "-";
  console.log(dashWord);
}
// var dashWord = "----";

prompt ("Word: " + dashWord + " Guess a letter");

// {
//   var str = ("word:");
//   var newstr = str.replace ("----");
//   function replacer (match, "word:", offset,string){
//     return ["word:"]
//   };
//
// console.log ("word:" + newstr);
//}
