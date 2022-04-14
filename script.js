//o begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

let moves = ["Rock", "Paper", "Scissor"]; 
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
    if (cpuMove == "Rock"){
        document.getElementById("cpu-selection").innerHTML = "Rock"
    }
    else if (cpuMove == "Paper"){
        document.getElementById("cpu-selection").innerHTML = "Paper"
    }
    else if (cpuMove == "Scissor"){
        document.getElementById("cpu-selection").innerHTML = "Scissor"
    }
};
document.getElementById("input").addEventListener("click", popCpuText);



function storePopCpuTextResults(){
    let computerSelection;
    if (cpuMove == "Rock"){
        computerSelection = "Rock"
    }
    else if (cpuMove == "Paper"){
        computerSelection = "Paper"
    }
    else if (cpuMove == "Scissor"){
        computerSelection = "Scissor"
    }
    return computerSelection;
}


function storePopHumanText (){
    let playerSelection; 
    if (document.getElementById("human-selection").addEventListener("click", popRock)){
        playerSelection = "Rock"
    }
    else if (document.getElementById("human-selection").addEventListener("click", popPaper)){
        playerSelection = "Paper"
    }
    else if (document.getElementById("human-selection").addEventListener("click", popScissor)){
        playerSelection = "Scissor"
    }
    return playerSelection
}
//POTENTIAL PROBLEM IN THIS PREVIOUYS FUNCTION

let possibleOutcomes = ["Rock beats scissors!", "Paper beats rock!", "Scissor beats paper!", "Stalemate!"];

  //  let playerSelection = storePopHumanText();
  //  let computerSelection = storePopCpuTextResults();

    function firstRound (x){
        let result;
        if (storePopHumanText == "Rock" && storePopCpuTextResults == "Paper") {
           result = "You lose! " + possibleOutcomes[1];
        }
        else if (storePopHumanText == "Paper" && storePopCpuTextResults == "Paper"){
            result =  possibleOutcomes[3];
        }
        else if (storePopHumanText == "Scissor" && storePopCpuTextResults == "Paper" ){
            result =  ("You win! " + possibleOutcomes[2]);
        }
        else if (storePopHumanText == "Rock" && storePopCpuTextResults == "Scissor") {
            result =  ("You win! " + possibleOutcomes[0]);
        }
        else if (storePopHumanText == "Paper" && storePopCpuTextResults == "Scissor"){
            result =  ("You lose! " + possibleOutcomes[2]);
        }
        else if (storePopHumanText == "Scissor" && storePopCpuTextResults == "Scissor" ){
            result =  possibleOutcomes[3];
            return result
        }
        else if (storePopHumanText == "Rock" && storePopCpuTextResults == "Rock") {
            result =  possibleOutcomes[3];
        }
        else if (storePopHumanText == "Paper" && storePopCpuTextResults == "Rock"){
            result =  ("You win! " + possibleOutcomes[1]);
        }
        else if (storePopHumanText == "Scissor" && storePopCpuTextResults == "Rock" ){
            result =  ("You lose! " + possibleOutcomes[0]);
        }   
        return displayResultsAfterInputs(result);
         
    }
  

   // document.addEventListener("input", displayResultsAfterInputs);


  /**   function round1Result () {
        document.getElementById("rock", "paper", "scissor").addEventListener("click", trigger);
    } */

    /**function trigger (){
        document.getElementById("input").addEventListener("click", popCpuText);
    } */

//round1Result();    
       // document.getElementById("round-result").innerHTML = firstRound(playerSelection, computerSelection)


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
