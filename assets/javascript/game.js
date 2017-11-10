var words = ["thomas", "percy", "james", "marion", "stephen", "rosie", "gordon"]
var randoWord = words[Math.floor(Math.random() * words.length)];
var wordArray = randoWord.split("");
var answerArray = [];
    for (var i = 0; i < randoWord.length; i++) {
        answerArray[i] = "__";
    }
    
var remainingLetters = randoWord.length;
var guessesLeft = 3;
var wins = [];
var gameStarted = false;
var guessedLetters = [];
var score = 0;


    document.onkeyup = function(event) { // press a button and it tells you if the letter is correct
        if (gameStarted === false) {
            gameStarted = true;
            displayResults(randoWord, "No key pressed yet!", guessedLetters, guessesLeft, answerArray);
            return
        }

        var playerGuess = event.key;
        var pressedKeyMatch = "";
        
        
        if (guessesLeft > 0) {
            guessedLetters.push(event.key);
            for (var i=0; i< wordArray.length; i++) {
                if (event.key === wordArray[i]) {
                    pressedKeyMatch = ("it matched! " + wordArray[i]);
                    answerArray[i] = event.key;
                }
            }
            if (pressedKeyMatch === "") {
                pressedKeyMatch = ("wrong! " + guessedLetters[guessedLetters.length-1]);
                guessesLeft = (guessesLeft-1);
             
            }
            if (answerArray.indexOf("__") === -1) {
                score++
                randoWord = words[Math.floor(Math.random() * words.length)];
                wordArray = randoWord.split("");
                answerArray = [];
                    for (var i = 0; i < randoWord.length; i++) {
                        answerArray[i] = "__";
                    }
                guessedLetters = [];
                var winDiv=$("<div>");

            }
            
        } else {
            score--
            randoWord = words[Math.floor(Math.random() * words.length)];
            wordArray = randoWord.split("");
            answerArray = [];
                for (var i = 0; i < randoWord.length; i++) {
                    answerArray[i] = "__";
                }
            guessedLetters = [];
            guessesLeft = 3;
        }
        displayResults(randoWord, pressedKeyMatch, guessedLetters, guessesLeft, answerArray);
    }

function displayResults(randoWord, pressedKeyMatch, guessedLetters, guessesLeft, answerArray) {
    answerArray.toString();
    guessedLetters.toString();
    var html =
        "<p>Randomly Generated Word: " + randoWord + "</p>" +
        "<p>Chosen letter: " + pressedKeyMatch + "</p>" +
        "<p>Here's all the letter's you've guessed: " + guessedLetters.join(" ") + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>" +
        "<p>Here's 'dem blanks: " + answerArray.join(" ") + "</p>" +
        "<p>Score: " + score + "</p>";
    
    document.querySelector("#hangman").innerHTML = html
}