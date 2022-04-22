document.getElementById("cpuButtonDiv").setAttribute("style","visibility:hidden");
document.getElementById("button").setAttribute("style","visibility:hidden");
document.getElementById("pDiv").setAttribute("style","visibility:hidden");
document.getElementById("playAgain").setAttribute("style", "visibility:hidden");
document.getElementById("nextRound").setAttribute("style", "visibility:hidden");

let round1ScoreHum = "Player: " + sessionStorage.getItem('scoreAHum');
let round1ScoreCPU = "CPU: " + sessionStorage.getItem('scoreACpu');

document.getElementById("cumulScoreHum").innerHTML = round1ScoreHum;
document.getElementById("cumulScoreCPU").innerHTML = round1ScoreCPU;

/*document.getElementById("scoreA").setAttribute("style", "visibility:hidden");
document.getElementById("scoreB").setAttribute("style", "visibility:hidden");
document.getElementById("scoreC").setAttribute("style", "visibility:hidden");

document.getElementById("scoreD").setAttribute("style", "visibility:hidden");
document.getElementById("scoreE").setAttribute("style", "visibility:hidden");
document.getElementById("scoreF").setAttribute("style", "visibility:hidden");
document.getElementById("scoreG").setAttribute("style", "visibility:hidden");
document.getElementById("scoreH").setAttribute("style", "visibility:hidden");
document.getElementById("scoreI").setAttribute("style", "visibility:hidden");*/
document.getElementById("endSeriesPl").setAttribute("style", "visibility:hidden");
document.getElementById("endSeriesCpu").setAttribute("style", "visibility:hidden");


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
    /*function showScore1(){
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
}*/

let number = 0;

function sesh(){
    return 1
}

function getPrevScore(){
    return sessionStorage.getItem('scoreAHum'),
    sessionStorage.getItem('scoreACpu')
}

console.log(getPrevScore());

//let r1r2ScoreA = 

    function showScore2(){
        //if player scored 1 in first round and scores 1 again in round two
        if(sessionStorage.getItem('scoreAHum') == 1 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper" || sessionStorage.getItem('scoreAHum') == 1 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 1 && document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock"){
        sessionStorage.setItem('scoreBHum', 2),
        sessionStorage.setItem('scoreBCpu', 0)
        }
        // if player scored 1 in first round and stalemate in round two
        else if (sessionStorage.getItem('scoreAHum') == 1 && document.getElementById("humanSelection").innerHTML== "Paper" && cpuMove  == "Paper" || sessionStorage.getItem('scoreAHum') == 1 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 1 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Rock"){
        sessionStorage.setItem('scoreBHum', 1),
        sessionStorage.setItem('scoreBCpu', 0)
        }
        // if player scored 0 in first round (and cpu scores 1) and stalemate in round two
        else if (sessionStorage.getItem('scoreAHum') == 0 && document.getElementById("humanSelection").innerHTML== "Paper" && cpuMove  == "Paper" || sessionStorage.getItem('scoreAHum') == 0 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 0 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Rock"){
        sessionStorage.setItem('scoreBHum', 0),
        sessionStorage.setItem('scoreBCpu', 1)
        }
        //if player scored 0 in first round and scores 1 in round two.
        else if(sessionStorage.getItem('scoreAHum') == 0 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper" || sessionStorage.getItem('scoreAHum') == 0 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 0 && document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock"){
        sessionStorage.setItem('scoreBHum', 1),
        sessionStorage.setItem('scoreBCpu', 1)
        }
        // if player scored 1 in first round and scores 0 in round two
        else if (sessionStorage.getItem('scoreAHum') == 1 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove == "Paper" || sessionStorage.getItem('scoreAHum') == 1 && document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 1 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Rock"){
        sessionStorage.setItem('scoreBHum', 1),
        sessionStorage.setItem('scoreBCpu', 1)
        } 
        // if player scored 0 in first round and scores 0 in round two
        else if (sessionStorage.getItem('scoreAHum') == 0 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove == "Paper" || sessionStorage.getItem('scoreAHum') == 0 && document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 0 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Rock"){
        sessionStorage.setItem('scoreBHum', 0),
        sessionStorage.setItem('scoreBCpu', 2)
        } 
        // if player stalemate in first round and scores 1 in round two
        else if (sessionStorage.getItem('scoreAHum') == 0 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper" || sessionStorage.getItem('scoreAHum') == 0 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 0 && document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock"){
        sessionStorage.setItem('scoreBHum', 1),
        sessionStorage.setItem('scoreBCpu', 0)
        }  
        // if player stalemate in first round and scores 0 in round two
        else if (sessionStorage.getItem('scoreAHum') == 0 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove == "Paper" || sessionStorage.getItem('scoreAHum') == 0 && document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 0 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Rock"){
        sessionStorage.setItem('scoreBHum', 0),
        sessionStorage.setItem('scoreBCpu', 1)
        } 
        //if stalemate in first round and stalemate in second round
        else if(sessionStorage.getItem('scoreAHum') == 0 && document.getElementById("humanSelection").innerHTML== "Paper" && cpuMove  == "Paper" || sessionStorage.getItem('scoreAHum') == 0 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 0 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Rock"){
            sessionStorage.setItem('scoreBHum', 0),
            sessionStorage.setItem('scoreBCpu', 0)
    }
    let scoreTextHum = ("Player: ") + sessionStorage.getItem('scoreBHum'); 
    let scoreTextCpu = ("CPU: ") + sessionStorage.getItem('scoreBCpu');

    document.getElementById("cumulScoreHum").innerHTML = scoreTextHum;
    document.getElementById("cumulScoreCPU").innerHTML = scoreTextCpu;
}



/*let seshD = ("Player: ") + (getPrevScore()++) + (" CPU: ") + (number);

let seshE = ("Player: ") + (number) + (" CPU: ") + (sesh()++);

let seshF = ("Player: ") + (number) + (" CPU: ") + (number);

function showScore2(){
        //document.getElementById("scoreA", "scoreB", "scoreC").setAttribute("style", "visibility: hidden")

        if (document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper" || document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor" ||
        document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock"){
            return sessionStorage.setItem('score', JSON.stringify(seshD),
            document.getElementById("endSeriesPl").setAttribute("style", "visibility:visible")        
        }
        else if (document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove == "Paper" || (showScore1() == document.getElementById("scoreB") && (document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Scissor") ||
        (document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Rock"){
            return document.getElementById("scoreE").setAttribute("style", "visibility:visible"),
            document.getElementById("endSeriesCpu").setAttribute("style", "visibility:visible");    
        } 
        else if (showScore1() == document.getElementById("scoreC") && (document.getElementById("humanSelection").innerHTML== "Paper" && cpuMove  == "Paper") || (document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Scissor") ||
        (document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Rock")){
            return document.getElementById("scoreF").setAttribute("style", "visibility:visible");
        }
        else if (showScore1() == document.getElementById("scoreA") && (document.getElementById("humanSelection").innerHTML== "Paper" && cpuMove  == "Paper") || (document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Scissor") ||
        (document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Rock")){
            return document.getElementById("scoreH").setAttribute("style", "visibility:visible");
        }
        else if (showScore1() == document.getElementById("scoreB") && (document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper") || (showScore1() == document.getElementById("scoreA") && (document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor") ||
        (showScore1() == document.getElementById("scoreA") && (document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock")))){
            return document.getElementById("scoreG").setAttribute("style", "visibility:visible");
        }
        else if (showScore1() == document.getElementById("scoreA") && (document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper") || (document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor") ||
        (document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock")){
            return document.getElementById("scoreH").setAttribute("style", "visibility:visible");
        }
        else if (showScore1() == document.getElementById("scoreB") && (document.getElementById("humanSelection").innerHTML== "Paper" && cpuMove  == "Paper") || (document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Scissor") ||
        (document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Rock")){
            return document.getElementById("scoreI").setAttribute("style", "visibility:visible");
    }
    
        sessionStorage.getItem('score')
}*/

//sessionStorage.getItem('score')
 
/*if((showScore1() == document.getElementById("scoreA").setAttribute("style", "visibility:visible"))){
    document.getElementById("scoreB", "scoreC").setAttribute("style", "visibility: hidden")
}
else if((showScore1() == document.getElementById("scoreB").setAttribute("style", "visibility:visible"))){
    document.getElementById("scoreA", "scoreC").setAttribute("style", "visibility: hidden")
}
else if((showScore1() == document.getElementById("scoreC").setAttribute("style", "visibility:visible"))){
    document.getElementById("scoreA", "scoreB").setAttribute("style", "visibility: hidden")
}*/
//end round