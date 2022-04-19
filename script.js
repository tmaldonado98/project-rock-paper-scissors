document.getElementById("cpuButtonDiv").setAttribute("style","visibility:hidden");
document.getElementById("button").setAttribute("style","visibility:hidden");
document.getElementById("playAgain").setAttribute("style", "visibility:hidden");

function showCpuButtonDiv(){
    document.getElementById("cpuButtonDiv").setAttribute("style","visibility:visible");
}

function showButton(){
    document.getElementById("button").setAttribute("style","visibility:visible");
}

function showPlayAgain(){
    document.getElementById("playAgain").setAttribute("style", "visibility:visible");
}

let moves = ["Rock", "Paper", "Scissor"]; 

let cpuMove = moves[Math.floor(Math.random()*moves.length)];

function showCpuMove(){
document.getElementById("cpu-selection").innerHTML = cpuMove;
}

function computerMove(){
    return moves[Math.floor(Math.random()*moves.length)]
}

//console.log(cpuMove);
//alert(computerMove());

let cpuMoveRock = "Rock"


let options = ["Rock", "Paper", "Scissor"];

function popNoSelection(){
    document.getElementById("humanSelection").innerHTML = "No option selected."
};
//document.getElementById("none").addEventListener("click", popNoSelection);


function popRock(){
    document.getElementById("humanSelection").innerHTML = "Rock"
};
//document.getElementById("rock").addEventListener("click", popRock);


function popPaper(){
    document.getElementById("humanSelection").innerHTML = "Paper"
};
//document.getElementById("paper").addEventListener("click", popPaper);


function popScissor(){
    document.getElementById("humanSelection").innerHTML = "Scissor"
};
//document.getElementById("scissor").addEventListener("click", popScissor);

//function cpuButtonAppear(){
  //  return document.getElementById("cpuButtonDiv").innerHTML = 


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



/*function storePopHumanText (){
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
let pSS = document.getElementById("human-selection").innerHTML = "Scissor";*/

//storePopHumanText()
//POTENTIAL PROBLEM IN THIS PREVIOUYS FUNCTION



let possibleOutcomes = ["Rock beats scissors!", "Paper beats rock!", "Scissor beats paper!", "Stalemate!"];

  //  let playerSelection = storePopHumanText();
  //  let computerSelection = storePopCpuTextResults();
  //document.getElementById("button").addEventListener("click", firstRound());
       

    //let combinationOfPossibleOutcomes = [(),(),(),(),(),(),(),(),()]
        
    let p1 =   "You lose! " + possibleOutcomes[1];
    let p2 =  possibleOutcomes[3];
    let p3 = "You win! " + possibleOutcomes[2];
    let p4 = "You win! " + possibleOutcomes[0];
    let p5 = "You lose! " + possibleOutcomes[2];
    let p6 = possibleOutcomes[3];
    let p7 = possibleOutcomes[3];
    let p8 = "You win! " + possibleOutcomes[1];
    let p9 = "You lose! " + possibleOutcomes[0]; 

/*document.getElementById("rock").click(popRock());
document.getElementById("paper").click(popPaper());
document.getElementById("scissor").click(popScissor());
document.getElementById("none").click(popNoSelection());*/

        
function one(){
   return document.getElementById("round-result").innerHTML = "You lose! " + possibleOutcomes[1];
}     

function two(){
    return   document.getElementById("round-result").innerHTML = possibleOutcomes[3];
} 

function three(){
    return   document.getElementById("round-result").innerHTML = "You win! " + possibleOutcomes[2];
} 

function four(){
    return  document.getElementById("round-result").innerHTML = "You win! " + possibleOutcomes[0];
} 

function five(){
    return   document.getElementById("round-result").innerHTML = "You lose! " + possibleOutcomes[2];
} 

function six(){
    return  document.getElementById("round-result").innerHTML = possibleOutcomes[3];
} 

function seven(){
    return  document.getElementById("round-result").innerHTML = possibleOutcomes[3];
} 

function eight(){
    return   document.getElementById("round-result").innerHTML = "You win! " + possibleOutcomes[1];
} 

function nine(){
    return   document.getElementById("round-result").innerHTML = "You lose! " + possibleOutcomes[0];
} 

let rockClicked = document.getElementById("humanSelection");
let paperClicked = document.getElementById("humanSelection");
let scissorClicked = document.getElementById("humanSelection");


function conditional(){
    /*let p1 = pSR == "Rock" && cpuMove == "Paper";
    let p2 = pSP  == "Paper" && cpuMove == "Paper";
    let p3 = pSS  == "Scissor" && cpuMove == "Paper";
    let p4 = pSR  == "Rock" && cpuMove == "Scissor";
    let p5 = pSP  == "Paper" && cpuMove == "Scissor";
    let p6 = pSS  == "Scissor" && cpuMove == "Scissor"
    let p7 = pSR  == "Rock" && cpuMove == "Rock";
    let p8 = pSP  == "Paper" && cpuMove == "Rock";
    let p9 = pSS  == "Scissor" && cpuMove == "Rock";*/
    //document.getElementById("cpu-selection").innerHTML
        if (document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove == "Paper"){
            return one();
        }
        else if (document.getElementById("humanSelection").innerHTML== "Paper" && cpuMove  == "Paper"){
            return two();
        }
        else if (document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper"){
            return three();
        }
        else if (document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor") {
            return   four();
        }
        else if (document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Scissor"){
            return    five();
        }
        else if (document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Scissor"){
            return    six();
        }
        else if (document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Rock") {
            return  seven();
        }
        else if (document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock"){
            return   eight();
        }
        else if (document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Rock"){
            return   nine();
        }
        else {
            return "persist, don't give up."
        }
    }



    /* backup
            if (document.getElementById("rock").clicked == true && cpuMove == "Paper"){
            return one()
        }
        else if (document.getElementById("paper").clicked == true && cpuMove == "Paper"){
            return two()
        }
        else if (document.getElementById("scissor").clicked == true && cpuMove == "Paper"){
            return three()
        }
        else if (document.getElementById("rock").clicked == true && cpuMove == "Scissor") {
            return   four()
        }
        else if (document.getElementById("paper").clicked == true && cpuMove == "Scissor"){
            return    five()
        }
        else if (document.getElementById("scissor").clicked == true && cpuMove == "Scissor"){
            return    six()
        }
        else if (document.getElementById("rock").clicked == true && cpuMove == "Rock") {
            return  seven()
        }
        else if (document.getElementById("paper").clicked == true && cpuMove == "Rock"){
            return   eight()
        }
        else if (document.getElementById("scissor").clicked == true && cpuMove == "Rock"){
            return   nine()
        }
    } */

       /* else{
            result = "persist, don't give up."
        }*/
        //alert(result); 

    
   // conditional();

   // document.getElementById("form").addEventListener("click", computerMove);

    //document.getElementById("button").addEventListener("click", conditional);
        
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

/*function loopRound(){
    for (let i = 0; i < 5; i++) {  */
  //  console.log(firstRound(playerSelection, computerSelection));
  
//loopRound();
