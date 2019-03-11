// var $foodBtn = document.getElementById("foodBtn");
// var wordArray = document.getElementById("wordInput"); 
// var $lettersGuessed = document.getElementById("lettersGuessed");
// var $chancesLeft = document.getElementById("chancesLeft");
// var $wins = document.getElementById("wins");
// var $losses = document.getElementById("losses");



      var foodWords = ["sushi", "ramen", "soba", "udon"];
      const maxGuesses = 7;

      var wins = 0;
      var guesses = 0;
      var gameStarted = false;
      var gameEnd = false;
      var getWord;
      var wordInput = [];
      var guessedLetter = [];
    //   var wrongLetter = [];

      function resetGame() {
        guesses = maxGuesses;  
        gameStarted = false;

    
          getWord = Math.floor(Math.random() * (foodWords.length));

          guessedLetter = [];
          wordInput = [];

          for (var i = 0; i < foodWords[getWord].length; i++) {
              wordInput.push("_");
              }
            
            //   document.getElementById("pressKeyTryAgain").style.cssText= "display: none";
            //   document.getElementById("gameover-image").style.cssText = "display: none";
            //   document.getElementById("youwin-image").style.cssText = "display: none";
            
              updateDisplay();
            };

        //   $chancesLeft.textContent = chancesLeft;
        //   $wordInput.textContent = wordArray.join("");
        //   $lettersGuessed.textContent = wrongLetter;

      

      function updateDisplay() {
          document.getElementById("wins").innerText = wins;
          document.getElementById("wordInput").innerText = "";
          for (var i = 0; i < wordInput.length; i++) {
              document.getElementById("wordInput").innerText += wordInput[i];
          }
          document.getElementById("chancesLeft").innerText = guesses;
          document.getElementById("lettersGuessed").innerText = guessedLetter;
          if(guesses <= 0) {
         document.getElementById("losses").innerText = "you lost!";
         document.getElementById("directions-text").innerText= "Try Again!";
         gameEnd = true;  
          }
      };

      document.onkeyup = function(event) {
          if(gameEnd) {
              resetGame();
              gameEnd = false;
          } else {
              if(event.keyCode >= 65 && event.keyCode <= 90) {
                 userGuess(event.key.toLowerCase());
              }
          }
      };

      function userGuess(letter) {
          if (guesses > 0) {
              if (!gameStarted) {
                  gameStarted = true;
              }

              if (guessedLetter.indexOf(letter)=== -1) {
                  guessedLetter.push(letter);
                  examGuess(letter);
                }
            }

            updateDisplay();
            checkWin();
      
        };

        function examGuess(letter) {
            var positions = [];
            
            for (var i = 0; i < foodWords[getWord].length; i++) {
                if (foodWords[getWord][i] === letter) {
                    positions.push[i];
                }
            }

            if (positions.length <= 0) {
                guesses--;
                

            } else {

                for(var i = 0; i < positions.length; i++) {
                    wordInput[positions[i]] = letter;
                }
            }
        };

        function checkWin() {
            if(wordInput.indexOf("_") === -1) {
                wins++;
                gameEnd = true;
            }
        };


    //       if(gameStared === true && guessedLetter.indexOf(letter) === -1);

    //       guessedLetter.push(letter);

    //       for (var i = 0; i < getWord.length; i++)

    //       if (getWord[i].toLowerCase() === letter.toLowerCase()){

    //         wordArray[i] = getWord[i];
    //       }
    //   }

    //     //   $wordInput.textContent = wordArray.join("");
    //     //   {
    //           if (gameStarted) {
    //               alert
    //           }
        //   }

        //   function checkLetter(letter){
        //       if (
        //           wordArray.indexOf(letter.toLowerCase()) === -1
        //         //   &&
        //         //   wordArray.indexOf(letter.toUppercase()) === -1
        //       ) {
        //           chancesLeft --;
        //           wrongLetter.push(letter);
        //           $lettersGuessed.textContent = wrongLetter.join(" ");
        //           $chancesLeft.textContent = chancesLeft;
        //       }
        //       checkLoss();
        //   }

        //   function checkLoss() {
        //       if (chancesLeft === 0) {
        //           losses++;
        //           gameStarted = false;
        //           $losses.textContent = losses;
        //           $wordInput.textContent = getWord;
        //       }
        //       checkWin();
        //   }

        //   function checkWin() {
        //       if(getWord.toLowerCase() === wordArray.join("").toLowerCase());
        //       {
        //           wins++;
        //           gameStarted = false;
        //           $wins.textContent = wins;
        //       }
        //   }

        //   $foodBtn.addEventListener("click", gameLoop);

        //   document.onkeyup = function(event) {
        //       if (event.keyCode >= 65 && event.keyCode <= 90) {
        //           checkLetter(event.key);
        //       }
        //   };
