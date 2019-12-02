// variables i need globally 
// ---------------------------------------------
// data for words
var wordOptions = ["bananas", "apples", "starfruit", "grapes"];
var selectedWord ="";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];


//counters 
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// functions of reusables
// -------------------------------------------------
function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    //reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses =[];

    //populating blanks and successes
    for (var i=0; i<numBlanks; i++){
        blanksAndSuccesses.push("_");
    }
    // adding changes to html
    document.getElementById("wordstoGuess").innerHTML=blanksAndSuccesses.join(" ");
    document.getElementById("guessesLeft").innerHTML=guessesLeft.join;
    document.getElementById("winCounter").innerHTML=winCount.join;
    document.getElementById("lossCounter").innerHTML=lossCount.join;
    
    console.log(selectedWord)
    console.log(lettersinWord)
    console.log(numBlanks)
    console.log(blanksAndSuccesses)
}
function checkletters(letter){
    var isLetterInWord = false
    for(var i=0; i<numBlanks; i++){
        if(selectedWord[i] = letter) {
            isLetterInWord = true;
        }
    }
    //check where the word letter exsts in the blankandsuccesses array'
    if (isLetterInWord){

        for(var i=0; i<numBlanks; i++){
            if(selectedWord[i] = letter) {
                blanksAndSuccesses[i] == letter;
            }
        }
    }
    //letter not found
    else{
        wrongLetters.push(letter);
        guessesLeft--
    }
    console.log(blanksAndSuccesses)
    
}
// start processs
startGame();

// registering keyclicks

document.onkeyup = function (event){
    var letterGuessed= String.fromCharCode(event.keyCode).toLowerCase();

}

