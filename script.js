document.getElementById("cpuButtonDiv").setAttribute("style","visibility:hidden");
document.getElementById("button").setAttribute("style","visibility:hidden");
document.getElementById("pDiv").setAttribute("style","visibility:hidden");
document.getElementById("playAgain").setAttribute("style", "visibility:hidden");
document.getElementById("nextRound").setAttribute("style", "visibility:hidden");
document.getElementById("scoreA").setAttribute("style", "visibility:hidden");
document.getElementById("scoreB").setAttribute("style", "visibility:hidden");
document.getElementById("scoreC").setAttribute("style", "visibility:hidden");

function showCpuButtonDiv(){
    document.getElementById("cpuButtonDiv").setAttribute("style","visibility:visible");
}

function showButton(){
    document.getElementById("button").setAttribute("style","visibility:visible");
}

function showPDiv(){
    document.getElementById("pDiv").setAttribute("style", "visibility:visible");
}

function showPlayAgain(){
    document.getElementById("playAgain").setAttribute("style", "visibility:visible");
}

function showNextRound (){
    document.getElementById("nextRound").setAttribute("style", "visibility:visible");
}

//
let moves = ["Rock", "Paper", "Scissor"]; 

let cpuMove = moves[Math.floor(Math.random()*moves.length)];

function showCpuMove(){
document.getElementById("cpu-selection").innerHTML = cpuMove;
}

function computerMove(){
    return moves[Math.floor(Math.random()*moves.length)]
}

//console.log(cpuMove);
//


//
function popNoSelection(){
    document.getElementById("humanSelection").innerHTML = "No option selected."
};


function popRock(){
    document.getElementById("humanSelection").innerHTML = "Rock"
};


function popPaper(){
    document.getElementById("humanSelection").innerHTML = "Paper"
};


function popScissor(){
    document.getElementById("humanSelection").innerHTML = "Scissor"
};
//


//
let possibleOutcomes = ["Rock beats scissors!", "Paper beats rock!", "Scissor beats paper!", "Stalemate!"];

        
function one(){
   return document.getElementById("round-result").innerHTML = "CPU wins! " + possibleOutcomes[1];
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
    return   document.getElementById("round-result").innerHTML = "CPU wins! " + possibleOutcomes[2];
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
    return   document.getElementById("round-result").innerHTML = "CPU wins! " + possibleOutcomes[0];
} 
//


//
function conditional(){
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
    }
//

//
    function showScore1(){
        if(document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper" || document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor" ||
        document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock"){
        return document.getElementById("scoreA").setAttribute("style", "visibility:visible"); 
        }
        else if (document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove == "Paper" || document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Scissor" ||
        document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Rock"){
            return document.getElementById("scoreB").setAttribute("style", "visibility:visible");    
        } 
        else if(document.getElementById("humanSelection").innerHTML== "Paper" && cpuMove  == "Paper" || document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Scissor" ||
        document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Rock"){
        return document.getElementById("scoreC").setAttribute("style", "visibility:visible");
    }
}

//end round


//
function nextRound(){
    
}