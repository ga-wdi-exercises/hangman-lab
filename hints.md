# Hints

You might find it helpful to instantiate the following values in your game. Keep in mind, however, this is not the only way to build it out.
* `word`: a string that stores the word to be guessed, inputted by user.
* `guesses`: an array that contains the letters guessed by the user.
* `incorrectGuesses`: a number that represents the number of incorrect guesses made.

Your game should exhibit the following functionality...
* When the game starts, your are prompted to enter a word.
* After every turn, the word should be displayed to the user. Unguessed letters should be represented by a `-`, while correctly guessed characters should be represented by the actual character.
* When the player correctly guesses a letter, the corresponding `-`'s should be replaced with the actual letter.
* When the player incorrectly guesses a letter, `incorrectGuesses` should be incremented by 1.
* When the player guesses the entire word, the game ends.
* When `incorrectGuesses` reaches a max value (to be determined by you), the game ends.

You can play our version [here](http://ga-wdi-exercises.github.io/hangman-lab/). The Javascript has been "uglified" so it's unreadable. Your version may look completely different!
