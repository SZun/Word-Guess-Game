document.onkeyup = function(userInput) {
    // Determines which key was pressed.
     var userGuessClick = userInput.key; 
    //  console.log(userGuess)
     userGuessClick = hangman.user.userGuess;
     hangman.user.userGuess = userInput.key
    hangman.user.userGuess = hangman.user.userGuess.toUpperCase();
    // console.log(userGuess)
    hangman.donkeyKong.guess()
    // console.log(hangman.user.lettersGuessed.indexOf(hangman.user.userGuess))
    
    // console.log(userGuessClick);
} 
    
var hangman = {
    //html
    // var html = wins + losses + score + guessesLeft + lettersGuessed ;
    // document.querySelector(/* html id ?? <div class="wrapper"></div> ?? */).innerHTML = html;
    // };
    // Add this in!!!! 
    // newName: {
        // randomName: randomName[Math.floor(Math.random() * `${variableThatIsArrayOfGameNames}`.length)], 
        // },   //Is this correct?

    gameNames: {
        name: ["Donkey Kong", ]
    },
   
    //Updatables Variables
    updates: {
        wins: 0,
        losses: 0,
        score: [0,"/",0],
        guessesLeft: 8,
      },
    //User Varibales
    user: {
        userGuess: '',
        userGuessCorrect: [],
        lettersGuessed: [],
    },
    //placeholder variables
    placeholders: {
      i: 0,
      lettersplaceholder: [''],        
    },
    //Donkey Kong Variabes 
    donkeyKong: {
      name: "DONKEYKONG",
      letters: ["D","O","N","K","E","Y","G"], 
      //Donkey Kong Logic  
      guess: function () {
        //User Guessing Letters Correct
        //User Guesses Letter of Donkey Kong Correct
        if (hangman.donkeyKong.name.indexOf(hangman.user.userGuess >= 0 )) {
            console.log("here")
            var b = hangman.donkeyKong.name.indexOf(hangman.user.userGuess)
            hangman.donkeyKong.name.split("").splice(b,1,hangman.user.userGuess).push(hangman.placeholders.lettersplaceholder) //<-- *NEW*,check if correct
            console.log(hangman.donkeyKong.name)
            console.log(hangman.placeholders.lettersplaceholder)
            hangman.user.userGuessCorrect.push(hangman.user.userGuess)
            hangman.user.lettersGuessed.push(hangman.user.userGuess)
            console.log(hangman.user.userGuessCorrect)
            console.log(hangman.user.lettersGuessed)
        }
        // If user guesses Donkey Kong 
        else if (hangman.user.userGuessCorrect === hangman.donkeyKong.letters) {
            //wins goes up
            hangman.updates.wins++;
            //score goes up //is this correct?
            hangman.updates.score[0]++;
            hangman.updates.score[2]++;
            //letters placeholder replaced with correct game name
            hangman.placeholders.lettersplaceholder = "DONKEY KONG";
            //picture displayed (give picture id and change display)
            
            //music plays
          }
          //if user runs out of guesses (loses)
        else if (hangman.updates.guessesLeft === 0) {
            //losses goes up
            hangman.updates.losses++;
            //score total goes up
            hangman.updates.score[2]++;
            //letters placeholder replaced with correct game name
            hangman.placeholders.lettersplaceholder = "DONKEY KONG";
            //picture displayed (give picture id and change display)

            //music plays
        }
        //if user guesses same letter again
        else if (hangman.user.userGuess === hangman.user.lettersGuessed.indexOf(hangman.user.userGuess)) {
            alert("You've already used that leter! Please try another letter.")
            console.log(hangman.user.lettersGuessed.indexOf(hangman.user.userGuess))
        } 
        //User Guesses Wrong Letter
        else {
            hangman.updates.guessesLeft--;
            hangman.placeholders.lettersGuessed.push(hangman.userGuess); //<-- *NEW*,check if correct
        }
    },
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
};  





