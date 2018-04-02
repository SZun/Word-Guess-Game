var hangman = {
   
    newName: {
        randomName: randomName[Math.floor(Math.random() * `${variableThatIsArrayOfGameNames}`.length)], //Is this correct?
        },
   
    //html
    // var html = wins + losses + score + guessesLeft + lettersGuessed ;

    // document.querySelector(/* html id ?? <div class="wrapper"></div> ?? */).innerHTML = html;
    // };

    //console.log()'s to check if things are working right
    
    //Updatables Variables
    updates: {
        wins: 0,
        losses: 0,
        score: [0,"/",0],
        guessesLeft: 8,
      },

    //i varibale
    iplaceholder: {
      i: 0,
    
    },

    //Donkey Kong Variabes 
    donkeyKong: {
      name: "DONKEY KONG",
      letters: ["D","O","N","K","E","Y","K","O","N","G"], 
      //Donkey Kong Win  
      winner: function() {
      for (hangman.iplaceholder.i = 0; hangman.iplaceholder.i < hangman.donkeyKong.letters.length; hangman.iplaceholder.i++) {
        //if user guesses correct
        if (userGuess === hangman.donkeyKong.letters[hangman.iplaceholder.i]) {
            //wins goes up
            hangman.updates.wins++;
            //score goes up //is this correct?
            hangman.updates.score[0]++;
            hangman.updates.score[2]++;
          }
          //if user runs out of guesses
        else if (hangman.updates.guessesLeft === 0) {
            hangman.updates.losses++;
            hangman.updates.score[2]++;

        }

        }
    },
    //Mario Variables
    mario: {
      name: "MARIO",
      letters: ["M","A","R","I","O"],
    },
    //Space Invader Variabels
    spaceInvaders: {
      name: "SPACE INVADERS",
      letters: ["S","P","A","C","E","I","N","V","A","D","E","R","S"],
    },
    //Duck Hunt Variabels
    duckHunt: {
      name: "DUCK HUNT",
      letters: ["D","U","C","K","H","U","N","T"] 
    },
    //Pacman Variables
    pacman: {
      name: "PAC-MAN",
      letters: ["P","A","C","M","A","N"] 
    },



},

  };
  





