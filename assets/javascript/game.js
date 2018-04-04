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
      lettersplaceholder: ["_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ "," "],        
    },
    //Donkey Kong Variabes 
    donkeyKong: {
      name: "DONKEYKONG",
      letters: ["D","O","N","K","E","Y","G"], 
      //Donkey Kong Logic  
      guess: function () {
        //User Guessing Letters Correct
        //User Guesses "D" Correct
        if (hangman.donkeyKong.letters.indexOf(hangman.user.userGuess >= 0)) {
            console.log("here")
            var b = hangman.donkeyKong.letters.indexOf(hangman.user.userGuess)
            hangman.donkeyKong.name.split("").splice(b,1,hangman.user.userGuess) // hangman.placeholders.lettersplaceholder[0] = "D";
            console.log(hangman.donkeyKong.name)
            hangman.user.userGuessCorrect.push(hangman.user.userGuess)
            hangman.user.lettersGuessed.push(hangman.user.userGuess)
            console.log(hangman.user.userGuessCorrect)
            console.log(hangman.user.lettersGuessed)
        }
        //User Guesses "O" Correct
        else if (hangman.user.userGuess === hangman.donkeyKong.letters[1]) {
            hangman.placeholders.lettersplaceholder[1] = "O";
            hangman.placeholders.lettersplaceholder[7] = "O";
            hangman.user.userGuessCorrect = + "O";
            hangman.user.lettersGuessed = + "O";
        }
        //User Guesses "N" Correct
        else if (hangman.user.userGuess === hangman.donkeyKong.letters[2]) {
            hangman.placeholders.lettersplaceholder[2] = "N";
            hangman.placeholders.lettersplaceholder[8] = "N";
            hangman.user.userGuessCorrect = + "N";
            hangman.user.lettersGuessed = + "N";
        }
        //User Guesses "K" Correct
        else if (hangman.user.userGuess === hangman.donkeyKong.letters[3]) {
            hangman.placeholders.lettersplaceholder[3] = "K";
            hangman.placeholders.lettersplaceholder[6] = "K";
            hangman.user.userGuessCorrect = + "K";
            hangman.user.lettersGuessed = + "K";
        }
        //User Guesses "E" Correct
        else if (hangman.user.userGuess === hangman.donkeyKong.letters[4]) {
            hangman.placeholders.lettersplaceholder[4] = "E";   
            hangman.user.userGuessCorrect = + "E";
            hangman.user.lettersGuessed = + "E";
        }
        //User Guesses "Y" Correct
        else if (hangman.user.userGuess === hangman.donkeyKong.letters[5]) {
            hangman.placeholders.lettersplaceholder[5] = "Y";
            hangman.user.userGuessCorrect = + "Y";
            hangman.user.lettersGuessed = + "Y";
        }
        //User Guesses "G" Correct
        else if (hangman.user.userGuess === hangman.donkeyKong.letters[6]) {
            hangman.placeholders.lettersplaceholder[9] = "G";
            hangman.user.userGuessCorrect = + "G";
            hangman.user.lettersGuessed = + "G";
        }
        // If user guesses Donkey Kong 
        else if (hangman.user.userGuessCorrect === hangman.donkeyKong.letters) {
            //wins goes up
            hangman.updates.wins++;
            //score goes up //is this correct?
            hangman.updates.score[0]++;
            hangman.updates.score[2]++;
            //letters placeholder replaced with correct game name
            hangman.placeholders.lettersplaceholder = hangman.donkeyKong.name;
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
            hangman.placeholders.lettersplaceholder = hangman.donkeyKong.name;
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
            hangman.placeholders.lettersGuessed = + '';
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
//console.log()'s to check if things are working right
// console.log(hangman.donkeyKong.guess())




