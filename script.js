//o begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

let moves = ["rock", "paper", "scissor"]; 
//function computerPlay(){}


let cpuMove = moves[Math.floor(Math.random()*moves.length)];
console.log(cpuMove);


//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - 
//the playerSelection and computerSelection - and then return a string that declares the winner of
 //the round like so: "You Lose! Paper beats Rock"

//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
    let possibleOutcomes = ["Rock beats scissors!", "Paper beats rock!", "Scissor beats paper!"];
    = "You win! " + 0
    = "You win! " + 1
    = "You win! " + 2

    
    function singleRound (playerSelection, computerSelection){

}