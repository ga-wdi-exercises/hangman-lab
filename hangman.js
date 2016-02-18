///console.log("welcome to hangman");
alert("Welcome to hangman! It's a morbid game wherein you guess what word I'm thinking and every time you guess wrong, I add a disembodied appendage to a doomed man hanging on a gallows. If you guess the secret word before I collect ALL of his random body parts, you win!")

var secretWord = prompt("Player 1, Please enter your secret word then scram.");

//in final example I would like to use Random.math to generate words from a (small) selection of words so there is not a "Player 1"

// the secretWord will be split using:
//str.split()




/*I need EITHER a player who enters a "secret" word for player two to guess OR a "bank" of possible secret words to call on.

1: FIRST make a prompt asking for a secret word.
        That word will be the "key Value" for some function A
        Later, I would like to use Random.math to generate from a list of words.


2. Store that word in pieces that can be guessed.

3. Allow for user input to guess a letter.
4. Take that letter and check it against the "secret word."

5. if correct, console log it like this: "_ _ G _ "   (if word in this case is "bugs")*
    Probably something to do with breaking an array into string pieces.

6. When word is guessed end the game.

7. When player guesses wrong X many times - end the game.

8. Ask to play again.
/*
