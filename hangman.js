var maxMisses = 6;
var hangman = {
    word: [],
    matched: [],
    misses: [],
    numGuesses: 0,
    numMatched: 0,
    getWord: function() {
        var msg = "Welcome to Hangman!\n\n" + "Enter a super secret word";
        choice = prompt(msg);
        while (choice !== null) {
            if (choice != "") {
                this.word = choice.toLowerCase().split("");
                break;
            }
            choice = prompt(msg);
        }
        if (choice === null) {
            return false;
        }
        this.word.forEach(function() {
            this.matched.push("_");
        }.bind(this));
        return true;
    },
    getUserGuess: function() {
        var msg = "Guess a letter\n\n" + this.matched.join(" ") + "\n\n";
        if (this.misses.length > 0) {
            msg += this.misses.join("").toUpperCase() + "\n\n";
        }
        msg += this.numGuesses + ". Guesses made\n\n" +
               (maxMisses - this.misses.length) +
               " misses before you get hanged.\n";
        return prompt(msg);
    },
    getAllIndices: function(array, element) {
        var indices = [];
        array.forEach(function(value, index) {
            if (value === element) indices.push(index);
        });
        if (indices.length === 0) return [-1];
        return indices;
    },
    collectGuesses: function() {
        var choice = this.getUserGuess();
        while(choice !== null) {
            var c = choice.charCodeAt(0);
            if (choice != "" && (((c >= 65) && (c <= 90)) ||
                                 ((c >= 97) && (c <= 122)))) {
                // Only use the first letter if word entered
                choice = choice.split("")[0].toLowerCase();
                this.numGuesses++;
                var matchIndices = this.getAllIndices(this.word, choice);
                if (matchIndices[0] !== -1) {
                    matchIndices.forEach(function(value) {
                        this.matched[value] = choice;
                        this.numMatched++;
                    }.bind(this));
                } else {
                    this.misses.push(choice);
                }
            } else {
                alert("Please enter a letter.");
            }
            if ((this.misses.length === maxMisses) ||
                    (this.numMatched === this.word.length)) {
                break;
            }
            choice = this.getUserGuess();
        }
        if (choice === null) {
            return false;
        }
        return true;
    },
    getWinner: function() {
        if(this.numMatched === this.word.length) {
            alert("Congratulations! You successfully guessed " +
                  this.word.join(""));
        } else {
            alert("You just got put to death, executioner style.\n\n" +
                  "A better guess strategy might have saved you " +
                  "from the noose.\n");
        }
    },
    resetGame: function() {
        this.word = [];
        this.matched = [];
        this.misses = [];
        this.numGuesses = 0;
        this.numMatched = 0;
    },
    tryAgain: function() {
        choice = prompt("Would you like to try again?\n" +
                        "Type 'yes' to continue\n");
        if(choice === 'yes') {
            this.resetGame();
            this.playGame();
        }
    },
    playGame: function() {
        // Quietly handle user cancels
        var exitedClean = this.getWord();
        if(!exitedClean) {
            return;
        }
        exitedClean = this.collectGuesses();
        if(!exitedClean) {
            return;
        }
        this.getWinner();
        this.tryAgain();
    }
}

hangman.playGame();
