
// (Dry Up!!)Variables:
// - Game Names
var gameNames = ["donkey kong","mario","duck hunt","space invaders","pac-man"];
// - Pictures
var gamePictures = [];
// Wins #, Losses #, Score # # of guesses left, Letters Guessed, 
var wins = 0;
var losses = 0;
var score = [0,"/",0]; 
var guessesLeft = 8;
// 2 variable that stores letters guessed  wrong & right ??function??
// function lettersGuessed = ("","","","","","","") 
// if (userGuess === /* wrong letter */) {
    // display letter ;
//    guessesLeft--;
// };

var lettersGuessed = ["","","","","","","","",];
// Randomize word ??function??
var randomGameName = randomGameName[Math.floor(Math.random() * gameNames.length)]; //Is this correct?
// "_ _ _ _ _ _ _ _" (letter spaces)
var letterSpaces = ["_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ",];


//keylogger
document.onkeyup = function(userInput) {
    var userGuess = userInput.key;
    var userGuess = userGuess.toLowerCase();
    {


// (Dry Up!!)Functions:
//Randomize gameName & assign it // use var randomGameName

//If user guesses correct letter, display letter in correct spot
if (userGuess === /* correct letter of gameNames[0] */) {
    //add to var lettersGuessed

}
//DonkeyKong: 
//If userGuess != assigned letters (make variable for letters)gameName, guessesLeft-- 
else if (userGuess !=  /* unguessed letter of gameNames[0] */) /*use different type of function that allows me to record letter guessed and add it to var lettersGuessed */ {
    //bring guessesLeft value down by one
    guessesLeft--;
    //add to var lettersGuessed
}
//If user wins increase wins++, display picture, (and play/switch music), reset "_ _ _ _ _", update score // Is this correct?  
//Nest inside another function?
//If user looses increase losses++, reset "_ _ _ _ _", update score
else if (userGuess === gameNames[0]) {
    //If user wins increase wins++
    wins++;
    //update score
    score[0,2]++; //is this correct?
    //display picture

    //play/switch music

    // var letterSpaces rest
}
else if (userGuess != gameNames[0]) { 
    //If user looses increase losses++
    losses++;
    //reset var letterSpaces to randomGameName.length

    //update score
    score[0]--; //is this correct?
    score[2]++ //is this correct?

}
//If  userGuess same letter again display "You've already guessed "letter", please press another letter"
else (userGuess === lettersGuessed[0] || userGuess === lettersGuessed[1] || userGuess === lettersGuessed[2] ||  userGuess === lettersGuessed[3] || userGuess === lettersGuessed[4] || userGuess === lettersGuessed[5] || userGuess === lettersGuessed[6]) {
    //record and replace letter guessed into alert
    alert("You've already guessed " + /*letterGuessed[n]*/ "!")
}




//html
    var html = wins + losses + score + guessesLeft + lettersGuessed ;

    document.querySelector(/* html id ?? <div class="wrapper"></div> ?? */).innerHTML = html;
    };

  //console.log()'s to check if things are working right
  console.log(gameNames[0]);
