// Psychic game js

var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = [];

    // Check initial values
    console.log(wins);
    console.log(losses);
    console.log(guessesLeft);

    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    // randommly chooses a choice from the options array. This is the Computer's guess.
    var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var myChoice = event.key;
      var myChoiceLower = myChoice.toLowerCase();
      console.log("The Die is Cast...")
      console.log("Random Letter: " + randomLetter);
      console.log("My Choice:     " + myChoiceLower);
      // Alerts the key the user pressed (userGuess).
      // alert("User guess: " + userGuess);

      // Alerts the Computer's guess.
      // alert("Computer guess: " + computerGuess);
      if ((alphabet.indexOf(myChoiceLower)) >= 0) {  
        if (myChoiceLower === randomLetter) {
            wins ++;
            guessesLeft = 9;
            guessesSoFar = [];
            randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
            // alert("Winner. The Force is strong with this one...")
            document.getElementById("message").innerHTML = "Winner. You think you're awfully clever, don't you...";

        } else if (guessesLeft === 1) {
            console.log(guessesLeft);
            losses ++;
            guessesLeft = 9;
            guessesSoFar = [];
            // alert("Game Over, try again if you dare.");
            document.getElementById("message").innerHTML = "Game Over, try again if you dare.";

        } else {
            console.log(guessesLeft);
            guessesLeft --;
            guessesSoFar.push(myChoice);
            // alert("Concentrate and try again.");
            document.getElementById("message").innerHTML = "Concentrate and try again.";

        }

            document.getElementById("winsCounter").innerHTML = wins;
            document.getElementById("lossesCounter").innerHTML = losses;
            document.getElementById("guessesLeft").innerHTML = guessesLeft;
            document.getElementById("choicesSoFar").innerHTML = guessesSoFar.toString();
      } else {
    }

    };
