let moves = ["Rock", "Paper", "Scissor"]; 

let cpuMove = moves[Math.floor(Math.random()*moves.length)];

function computerMove(){
    return moves[Math.floor(Math.random()*moves.length)]
}

console.log(cpuMove);
//alert(computerMove());




let options = ["Rock", "Paper", "Scissor"];

function popNoSelection(){
    document.getElementById("human-selection").innerHTML = "No option selected."
};
document.getElementById("none").addEventListener("click", popNoSelection);


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



/*function popCpuText(){
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
document.getElementById("input").addEventListener("click", popCpuText);*/



/*function storePopCpuTextResults(){
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
console.log(storePopCpuTextResults());*/
// maybe the problem is that I store the result data in a local variable that other functions cannot access.

/*function buttonClick(){
    document.getElementById("result").addEventListener("click", showResult)
}

function showResult(){
    document.getElementById("resultText").innerHTML = result
}*/



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
}
let pSR = document.getElementById("human-selection").innerHTML = "Rock";
let pSP = document.getElementById("human-selection").innerHTML = "Paper";
let pSS = document.getElementById("human-selection").innerHTML = "Scissor";

storePopHumanText()
//POTENTIAL PROBLEM IN THIS PREVIOUYS FUNCTION



let possibleOutcomes = ["Rock beats scissors!", "Paper beats rock!", "Scissor beats paper!", "Stalemate!"];

  //  let playerSelection = storePopHumanText();
  //  let computerSelection = storePopCpuTextResults();
  //document.getElementById("button").addEventListener("click", firstRound());
       

    //let combinationOfPossibleOutcomes = [(),(),(),(),(),(),(),(),()]
        
   /* let p1 =   "You lose! " + possibleOutcomes[1];
    let p2 =  possibleOutcomes[3];
    let p3 = "You win! " + possibleOutcomes[2];
    let p4 = "You win! " + possibleOutcomes[0];
    let p5 = "You lose! " + possibleOutcomes[2];
    let p6 = possibleOutcomes[3];
    let p7 = possibleOutcomes[3];
    let p8 = "You win! " + possibleOutcomes[1];
    let p9 = "You lose! " + possibleOutcomes[0]; */


      
        
function one(){
    document.getElementById("round-result").innerHTML = "You lose! " + possibleOutcomes[1];
}     

function two(){
    document.getElementById("round-result").innerHTML = possibleOutcomes[3];
} 

function three(){
    document.getElementById("round-result").innerHTML = "You win! " + possibleOutcomes[2];
} 

function four(){
    document.getElementById("round-result").innerHTML = "You win! " + possibleOutcomes[0];
} 

function five(){
    document.getElementById("round-result").innerHTML = "You lose! " + possibleOutcomes[2];
} 

function six(){
    document.getElementById("round-result").innerHTML = possibleOutcomes[3];
} 

function seven(){
    document.getElementById("round-result").innerHTML = possibleOutcomes[3];
} 

function eight(){
    document.getElementById("round-result").innerHTML = "You win! " + possibleOutcomes[1];
} 

function nine(){
    document.getElementById("round-result").innerHTML = "You lose! " + possibleOutcomes[0];
} 

function conditional(pSR, pSP, pSR, cpuMove){
    let p1 = pSR == "Rock" && cpuMove == "Paper";
    let p2 = pSP  == "Paper" && cpuMove == "Paper";
    let p3 = pSS  == "Scissor" && cpuMove == "Paper";
    let p4 = pSR  == "Rock" && cpuMove == "Scissor";
    let p5 = pSP  == "Paper" && cpuMove == "Scissor";
    let p6 = pSS  == "Scissor" && cpuMove == "Scissor"
    let p7 = pSR  == "Rock" && cpuMove == "Rock";
    let p8 = pSP  == "Paper" && cpuMove == "Rock";
    let p9 = pSS  == "Scissor" && cpuMove == "Rock";

        if (p1 == true){
             one()
        }
        else if (p2 == true){
            two()
        }
        else if (p3 == true ){
            three()
        }
        else if (p4 == true) {
            four()
        }
        else if (p5 == true){
            five()
        }
        else if (p6 == true){
            six()
        }
        else if (p7 == true) {
            seven()
        }
        else if (p8 == true){
            eight()
        }
        else if (p9 == true){
            nine()
        }
       /* else{
            result = "persist, don't give up."
        }*/
        //alert(result); 
}
    
   // conditional();

    document.getElementById("form").addEventListener("click", computerMove);

    document.getElementById("button").addEventListener("click", conditional);
        
    /*function initRound(){
    document.getElementById("round-result").innerHTML = conditional();
    }*/

        //document.getElementById("result").addEventListener("click", cpuMove);
      
//            document.getElementById("result")
        
       /* function showResult(){
            firstRound()
        }*/




    /*function firstRoundConditional(){
    if (document.getElementById("rock").addEventListener("click", popRock) == true){
        firstRound();
        }
    else if(document.getElementById("paper").addEventListener("click", popPaper) == true){
        firstRound();
        }
    else if(document.getElementById("scissor").addEventListener("click", popScissor) == true){
        firstRound();
        }        
    }*/

    //firstRoundConditional();

  //      document.getElementById("input").addEventListener("click", popCpuText) == true){


 //       storePopCpuTextResults == "Rock" || storePopCpuTextResults == "Paper" || storePopCpuTextResults == "Scissor" && storePopHumanText == "Rock" || storePopHumanText == "Paper" || storePopHumanText == "Scissor"){

   // document.addEventListener("input", displayResultsAfterInputs);


  /**   function round1Result () {
        document.getElementById("rock", "paper", "scissor").addEventListener("click", trigger);
    } */


   

   // trigger();
//    showResult();


    //trigger();


/**const objRoundResult = {
    triggerFunction: trigger(),
    showResult: showResult()
}*/

//document.get
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
//loopRound();
