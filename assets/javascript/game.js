var words = ["table", "door", "chair", "couch", "lamp", "carpet", "floor"]
var randoWord = words[Math.floor(Math.random() * words.length)];
var wordArray = randoWord.split("");
var answerArray = [];
    for (var i = 0; i < randoWord.length; i++) {
        answerArray[i] = "__";
    }
var remainingLetters = randoWord.length;
var guessesLeft = 9;
var wins = [];

    document.onkeyup = function(event) { // press a button and it tells you if the letter is correct
        var playerGuess = event.key;
        
        for (var i=0; i< wordArray.length; i++) {
            if (event.key === wordArray[i]) {
                var pressedKeyMatch = ("it matched! " + wordArray[i]);
            } else {
                var pressedKeyMaatch = ("wrong! "+ wordArray[i]);
            }
        

        var html =
            "<p>Randomly Generated Word: " + randoWord + "</p>" +
            "<p>Chosen letter: " + pressedKeyMatch + "</p>" +
            "<p>Here's 'dem blanks: " + answerArray + "</p>";
        
        document.querySelector("#hangman").innerHTML = html;
    }
}