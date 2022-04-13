//o begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

let moves = ["rock", "paper", "scissor"]; 
//function computerPlay(){}


let cpuMove = moves[Math.floor(Math.random()*moves.length)];
//console.log(cpuMove);


//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - 
//the playerSelection and computerSelection - and then return a string that declares the winner of
 //the round like so: "You Lose! Paper beats Rock"

//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
let options = ["Rock", "Paper", "Scissor"];

function popRock(){
    document.getElementById("human-selection").innerHTML = "Rock"
};
/** document.getElementById("rock").addEventListener  **/

let selection1 = document.getElementById(rock);
document.getElementById("rock").addEventListener("click", popRock);

//humanSelection.onclick(popRock);




let possibleOutcomes = ["Rock beats scissors!", "Paper beats rock!", "Scissor beats paper!", "Stalemate!"];



    function firstRound (playerSelection, computerSelection){
        if (playerSelection == document.getElementById(rock) && computerSelection == "paper") {
            return ("You lose! " + possibleOutcomes[1]);
        }
        else if (playerSelection == document.getElementById(paper) && computerSelection == "paper"){
            return possibleOutcomes[3];
        }
        else if (playerSelection == document.getElementById(scissor) && computerSelection == "paper" ){
            return ("You win! " + possibleOutcomes[2]);
        }
        else if (playerSelection == document.getElementById(rock) && computerSelection == "scissor") {
            return ("You win! " + possibleOutcomes[0]);
        }
        else if (playerSelection == document.getElementById(paper) && computerSelection == "scissor"){
            return ("You lose! " + possibleOutcomes[2]);
        }
        else if (playerSelection == document.getElementById(scissor) && computerSelection == "scissor" ){
            return possibleOutcomes[3];
        }
        else if (playerSelection == document.getElementById(rock) && computerSelection == "rock") {
            return possibleOutcomes[3];
        }
        else if (playerSelection == document.getElementById(paper) && computerSelection == "rock"){
            return "You win! " + possibleOutcomes[1];
        }
        else if (playerSelection == document.getElementById(scissor) && computerSelection == "rock" ){
            return ("You lose! " + possibleOutcomes[0]);
        }   
    }
    let playerSelection = document.getElementById(form);
   /**  let playerSelection2 = document.getElementById(paper);
    let playerSelection3 = document.getElementById(scissor); **/
    let computerSelection = cpuMove;

   console.log(firstRound(playerSelection, computerSelection));
   /**console.log(firstBranch(playerSelection2, computerSelection));
   console.log(firstBranch(playerSelection3, computerSelection));**/

function loopRound(){
    for (let i = 0; i < 5; i++) {
    console.log(firstRound(playerSelection, computerSelection));
    }
}
loopRound();
