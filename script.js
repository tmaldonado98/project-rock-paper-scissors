//o begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

let moves = ["rock", "paper", "scissor"]; 
//function computerPlay(){}


let cpuMove = moves[Math.floor(Math.random()*moves.length)];
//console.log(cpuMove);


//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - 
//the playerSelection and computerSelection - and then return a string that declares the winner of
 //the round like so: "You Lose! Paper beats Rock"

let options = ["Rock", "Paper", "Scissor"];

/**function popNoSelection(){
    document.getElementById("human-selection").innerHTML = "No option selected."
};
document.getElementById("none").addEventListener("click", popNoSelection);**/


function popRock(){
    document.getElementById("human-selection").innerHTML = "Rock"
};
document.getElementById("rock").addEventListener("click", popRock);


function popPaper(){
    document.getElementById("human-selection").innerHTML = "Paper"
};
document.getElementById("paper").addEventListener("click", popPaper);


function popScissor(){
    document.getElementById("human-selection").innerHTML = "Scissor"
};
document.getElementById("scissor").addEventListener("click", popScissor);



function popCpuText(){
    if (cpuMove == "rock"){
        document.getElementById("cpu-selection").innerHTML = "Rock"
    }
    else if (cpuMove == "paper"){
        document.getElementById("cpu-selection").innerHTML = "Paper"
    }
    else if (cpuMove == "scissor"){
        document.getElementById("cpu-selection").innerHTML = "Scissor"
    }
};
document.getElementById("input").addEventListener("click", popCpuText);





let possibleOutcomes = ["Rock beats scissors!", "Paper beats rock!", "Scissor beats paper!", "Stalemate!"];


    function firstRound (playerSelection, computerSelection){
        let result;
        if (playerSelection == document.getElementById(rock) && computerSelection == "paper") {
           result = "You lose! " + possibleOutcomes[1];
        }
        else if (playerSelection == document.getElementById(paper) && computerSelection == "paper"){
            result =  possibleOutcomes[3];
        }
        else if (playerSelection == document.getElementById(scissor) && computerSelection == "paper" ){
            result =  ("You win! " + possibleOutcomes[2]);
        }
        else if (playerSelection == document.getElementById(rock) && computerSelection == "scissor") {
            result =  ("You win! " + possibleOutcomes[0]);
        }
        else if (playerSelection == document.getElementById(paper) && computerSelection == "scissor"){
            result =  ("You lose! " + possibleOutcomes[2]);
        }
        else if (playerSelection == document.getElementById(scissor) && computerSelection == "scissor" ){
            result =  possibleOutcomes[3];
            return result
        }
        else if (playerSelection == document.getElementById(rock) && computerSelection == "rock") {
            result =  possibleOutcomes[3];
        }
        else if (playerSelection == document.getElementById(paper) && computerSelection == "rock"){
            result =  ("You win! " + possibleOutcomes[1]);
        }
        else if (playerSelection == document.getElementById(scissor) && computerSelection == "rock" ){
            result =  ("You lose! " + possibleOutcomes[0]);
        }   
        return result
    }


    let playerSelection = document.getElementById(form);

    let computerSelection = cpuMove;
console.log(firstRound(playerSelection, computerSelection));


    function round1Result () {
        document.getElementById("input").addEventListener("click", writeResult);
    }

    function writeResult (){
        document.getElementById("round-result").innerHTML = firstRound();
    }

//function roundResult (){
  //  round1.innerHTML


// console.log(firstRound(playerSelection, computerSelection));
   /**console.log(firstBranch(playerSelection2, computerSelection));
   console.log(firstBranch(playerSelection3, computerSelection));**/

function loopRound(){
    for (let i = 0; i < 5; i++) {
  //  console.log(firstRound(playerSelection, computerSelection));
    }
}
loopRound();
