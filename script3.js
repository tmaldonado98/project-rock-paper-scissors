document.getElementById("button").setAttribute("style","visibility:hidden");
document.getElementById("pDiv").setAttribute("style","visibility:hidden");
document.getElementById("playAgain").setAttribute("style", "visibility:hidden");

let round2ScoreHum = "Player: " + sessionStorage.getItem('scoreBHum');
let round2ScoreCPU = "CPU: " + sessionStorage.getItem('scoreBCpu');

document.getElementById("cumulScoreHum").innerHTML = round2ScoreHum;
document.getElementById("cumulScoreCPU").innerHTML = round2ScoreCPU;

document.getElementById("endSeriesPl").setAttribute("style", "visibility:hidden");
document.getElementById("endSeriesCpu").setAttribute("style", "visibility:hidden");



function showButton(){
    document.getElementById("button").setAttribute("style","visibility:visible");
}

function showPDiv(){
    document.getElementById("pDiv").setAttribute("style", "visibility:visible");
}

function showPlayAgain(){
    document.getElementById("playAgain").setAttribute("style", "visibility:visible");
}

//
let moves = ["Rock", "Paper", "Scissor"]; 

let cpuMove = moves[Math.floor(Math.random()*moves.length)];

function showCpuMove(){
document.getElementById("cpu-selection").innerHTML = cpuMove;
conditional()
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
   return document.getElementById("round-result").innerHTML = "CPU wins the round! " + possibleOutcomes[1];
}     

function two(){
    return   document.getElementById("round-result").innerHTML = possibleOutcomes[3];
} 

function three(){
    return   document.getElementById("round-result").innerHTML = "You win the round! " + possibleOutcomes[2];
} 

function four(){
    return  document.getElementById("round-result").innerHTML = "You win the round! " + possibleOutcomes[0];
} 

function five(){
    return   document.getElementById("round-result").innerHTML = "CPU wins the round! " + possibleOutcomes[2];
} 

function six(){
    return  document.getElementById("round-result").innerHTML = possibleOutcomes[3];
} 

function seven(){
    return  document.getElementById("round-result").innerHTML = possibleOutcomes[3];
} 

function eight(){
    return   document.getElementById("round-result").innerHTML = "You win the round! " + possibleOutcomes[1];
} 

function nine(){
    return   document.getElementById("round-result").innerHTML = "CPU wins the round! " + possibleOutcomes[0];
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

    function showScore3(){
        //if player scored 1, cpu 0 in first round, and scores 1 again and cpu 0 in round two, scores again in r3
        if(sessionStorage.getItem('scoreAHum') == 1 && sessionStorage.getItem('scoreACpu') == 0 && 
        sessionStorage.getItem('scoreBHum') == 1 && sessionStorage.getItem('scoreBCpu') == 0 &&  
        document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper" || 
        sessionStorage.getItem('scoreAHum') == 1 && sessionStorage.getItem('scoreACpu') == 0 && 
        sessionStorage.getItem('scoreBHum') == 1 && sessionStorage.getItem('scoreBCpu') == 0 && 
        document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 1 && sessionStorage.getItem('scoreACpu') == 0 && 
        sessionStorage.getItem('scoreBHum') == 1 && sessionStorage.getItem('scoreBCpu') == 0 &&  
        document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock"){
            sessionStorage.setItem('scoreCHum', 3),
            sessionStorage.setItem('scoreCCpu', 0),
            document.getElementById("endSeriesPl").setAttribute("style", "visibility:visible");
        }
        // 2
        else if(sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 0 && 
        sessionStorage.getItem('scoreBHum') == 0 && sessionStorage.getItem('scoreBCpu') == 0 &&  
        document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper" || 
        sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 0 && 
        sessionStorage.getItem('scoreBHum') == 0 && sessionStorage.getItem('scoreBCpu') == 0 && 
        document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 0 && 
        sessionStorage.getItem('scoreBHum') == 0 && sessionStorage.getItem('scoreBCpu') == 0 &&  
        document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock"){
            sessionStorage.setItem('scoreCHum', 1),
            sessionStorage.setItem('scoreCCpu', 0),
            document.getElementById("endSeriesPl").setAttribute("style", "visibility:visible");
        }
            
        // 3
        else if(sessionStorage.getItem('scoreAHum') == 1 && sessionStorage.getItem('scoreACpu') == 0 && 
        sessionStorage.getItem('scoreBHum') == 1 && sessionStorage.getItem('scoreBCpu') == 1 &&  
        document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper" || 
        sessionStorage.getItem('scoreAHum') == 1 && sessionStorage.getItem('scoreACpu') == 0 && 
        sessionStorage.getItem('scoreBHum') == 1 && sessionStorage.getItem('scoreBCpu') == 1 && 
        document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 1 && sessionStorage.getItem('scoreACpu') == 0 && 
        sessionStorage.getItem('scoreBHum') == 1 && sessionStorage.getItem('scoreBCpu') == 1 &&  
        document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock"){
            sessionStorage.setItem('scoreCHum', 2),
            sessionStorage.setItem('scoreCCpu', 1),
            document.getElementById("endSeriesPl").setAttribute("style", "visibility:visible");
        }

        //4 R3 player vic   r1 h1 c0, r2 h1 c1,      r3 h2 c1
        else if(sessionStorage.getItem('scoreAHum') ==  && sessionStorage.getItem('scoreACpu') ==  && 
        sessionStorage.getItem('scoreBHum') ==  && sessionStorage.getItem('scoreBCpu') ==  &&  
        document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper" || 
        sessionStorage.getItem('scoreAHum') ==  && sessionStorage.getItem('scoreACpu') ==  && 
        sessionStorage.getItem('scoreBHum') ==  && sessionStorage.getItem('scoreBCpu') ==  && 
        document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') ==  && sessionStorage.getItem('scoreACpu') ==  && 
        sessionStorage.getItem('scoreBHum') ==  && sessionStorage.getItem('scoreBCpu') ==  &&  
        document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock"){
            sessionStorage.setItem('scoreCHum', ),
            sessionStorage.setItem('scoreCCpu', ),
            document.getElementById("endSeriesPl").setAttribute("style", "visibility:visible");
        }
        //5
        else if(sessionStorage.getItem('scoreAHum') ==  && sessionStorage.getItem('scoreACpu') ==  && 
        sessionStorage.getItem('scoreBHum') ==  && sessionStorage.getItem('scoreBCpu') ==  &&  
        document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper" || 
        sessionStorage.getItem('scoreAHum') ==  && sessionStorage.getItem('scoreACpu') ==  && 
        sessionStorage.getItem('scoreBHum') ==  && sessionStorage.getItem('scoreBCpu') ==  && 
        document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') ==  && sessionStorage.getItem('scoreACpu') ==  && 
        sessionStorage.getItem('scoreBHum') ==  && sessionStorage.getItem('scoreBCpu') ==  &&  
        document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock"){
            sessionStorage.setItem('scoreCHum', ),
            sessionStorage.setItem('scoreCCpu', ),
            document.getElementById("endSeriesPl").setAttribute("style", "visibility:visible");
        }
        //6
        else if(sessionStorage.getItem('scoreAHum') ==  && sessionStorage.getItem('scoreACpu') ==  && 
        sessionStorage.getItem('scoreBHum') ==  && sessionStorage.getItem('scoreBCpu') ==  &&  
        document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper" || 
        sessionStorage.getItem('scoreAHum') ==  && sessionStorage.getItem('scoreACpu') ==  && 
        sessionStorage.getItem('scoreBHum') ==  && sessionStorage.getItem('scoreBCpu') ==  && 
        document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') ==  && sessionStorage.getItem('scoreACpu') ==  && 
        sessionStorage.getItem('scoreBHum') ==  && sessionStorage.getItem('scoreBCpu') ==  &&  
        document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock"){
            sessionStorage.setItem('scoreCHum', ),
            sessionStorage.setItem('scoreCCpu', ),
            document.getElementById("endSeriesPl").setAttribute("style", "visibility:visible");
        }
        //7
        else if(sessionStorage.getItem('scoreAHum') ==  && sessionStorage.getItem('scoreACpu') ==  && 
        sessionStorage.getItem('scoreBHum') ==  && sessionStorage.getItem('scoreBCpu') ==  &&  
        document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper" || 
        sessionStorage.getItem('scoreAHum') ==  && sessionStorage.getItem('scoreACpu') ==  && 
        sessionStorage.getItem('scoreBHum') ==  && sessionStorage.getItem('scoreBCpu') ==  && 
        document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') ==  && sessionStorage.getItem('scoreACpu') ==  && 
        sessionStorage.getItem('scoreBHum') ==  && sessionStorage.getItem('scoreBCpu') ==  &&  
        document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock"){
            sessionStorage.setItem('scoreCHum', ),
            sessionStorage.setItem('scoreCCpu', ),
            document.getElementById("endSeriesPl").setAttribute("style", "visibility:visible");
        }
        //8
        else if(sessionStorage.getItem('scoreAHum') ==  && sessionStorage.getItem('scoreACpu') ==  && 
        sessionStorage.getItem('scoreBHum') ==  && sessionStorage.getItem('scoreBCpu') ==  &&  
        document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper" || 
        sessionStorage.getItem('scoreAHum') ==  && sessionStorage.getItem('scoreACpu') ==  && 
        sessionStorage.getItem('scoreBHum') ==  && sessionStorage.getItem('scoreBCpu') ==  && 
        document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') ==  && sessionStorage.getItem('scoreACpu') ==  && 
        sessionStorage.getItem('scoreBHum') ==  && sessionStorage.getItem('scoreBCpu') ==  &&  
        document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock"){
            sessionStorage.setItem('scoreCHum', ),
            sessionStorage.setItem('scoreCCpu', ),
            document.getElementById("endSeriesPl").setAttribute("style", "visibility:visible");
        }
        //9
        else if(sessionStorage.getItem('scoreAHum') ==  && sessionStorage.getItem('scoreACpu') ==  && 
        sessionStorage.getItem('scoreBHum') ==  && sessionStorage.getItem('scoreBCpu') ==  &&  
        document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper" || 
        sessionStorage.getItem('scoreAHum') ==  && sessionStorage.getItem('scoreACpu') ==  && 
        sessionStorage.getItem('scoreBHum') ==  && sessionStorage.getItem('scoreBCpu') ==  && 
        document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') ==  && sessionStorage.getItem('scoreACpu') ==  && 
        sessionStorage.getItem('scoreBHum') ==  && sessionStorage.getItem('scoreBCpu') ==  &&  
        document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock"){
            sessionStorage.setItem('scoreCHum', ),
            sessionStorage.setItem('scoreCCpu', ),
            document.getElementById("endSeriesPl").setAttribute("style", "visibility:visible");
        }
        //10
        else if(sessionStorage.getItem('scoreAHum') ==  && sessionStorage.getItem('scoreACpu') ==  && 
        sessionStorage.getItem('scoreBHum') ==  && sessionStorage.getItem('scoreBCpu') ==  &&  
        document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper" || 
        sessionStorage.getItem('scoreAHum') ==  && sessionStorage.getItem('scoreACpu') ==  && 
        sessionStorage.getItem('scoreBHum') ==  && sessionStorage.getItem('scoreBCpu') ==  && 
        document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') ==  && sessionStorage.getItem('scoreACpu') ==  && 
        sessionStorage.getItem('scoreBHum') ==  && sessionStorage.getItem('scoreBCpu') ==  &&  
        document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock"){
            sessionStorage.setItem('scoreCHum', ),
            sessionStorage.setItem('scoreCCpu', ),
            document.getElementById("endSeriesPl").setAttribute("style", "visibility:visible");
        }




        ////// END victory 

        // if player scored 1 in first round and stalemate in round two
        else if (sessionStorage.getItem('scoreAHum') == 1 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML== "Paper" && cpuMove  == "Paper" || sessionStorage.getItem('scoreAHum') == 1 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 1 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Rock"){
        sessionStorage.setItem('scoreBHum', 1),
        sessionStorage.setItem('scoreBCpu', 0)
        }
        // if player scored 0 in first round (and cpu scores 1) and stalemate in round two
        else if (sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 1 && document.getElementById("humanSelection").innerHTML== "Paper" && cpuMove  == "Paper" || sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 1 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 1 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Rock"){
        sessionStorage.setItem('scoreBHum', 0),
        sessionStorage.setItem('scoreBCpu', 1)
        }
        //if player scored 0 (and cpu scored 1) in first round and scores 1 in round two.
        else if(sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 1 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper" || sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 1 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 1 && document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock"){
        sessionStorage.setItem('scoreBHum', 1),
        sessionStorage.setItem('scoreBCpu', 1)
        }
        // if player scored 1 in first round and scores 0 in round two
        else if (sessionStorage.getItem('scoreAHum') == 1 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove == "Paper" || sessionStorage.getItem('scoreAHum') == 1 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Scissor" ||
        sessionStorage.getItem('scoreAHum') == 1 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Rock"){
        sessionStorage.setItem('scoreBHum', 1),
        sessionStorage.setItem('scoreBCpu', 1)
        } 
        // if player scored 0 in first round and scores 0 in round two
        else if (sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 1 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove == "Paper" || sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 1 && document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Scissor" ||
        sessionStorage.getItem('scoreBHum') == 0 && sessionStorage.getItem('scoreACpu') == 1 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Rock"){
        sessionStorage.setItem('scoreCHum', 0),
        sessionStorage.setItem('scoreCCpu', 2),
        document.getElementById("endSeriesCpu").setAttribute("style", "visibility:visible");
        } 
        // if player stalemate in first round and scores 1 in round two
        else if (sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Paper" || sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreBHum') == 0 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Rock"){
        sessionStorage.setItem('scoreCHum', 1),
        sessionStorage.setItem('scoreCCpu', 0)
        }  
        // if player stalemate in first round and scores 0 in round two
        else if (sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove == "Paper" || sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Paper" && cpuMove == "Scissor" ||
        sessionStorage.getItem('scoreBHum') == 0 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Rock"){
        sessionStorage.setItem('scoreCHum', 0),
        sessionStorage.setItem('scoreCCpu', 1)
        } 
        //if stalemate in first round and stalemate in second round
        else if(sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML== "Paper" && cpuMove  == "Paper" || sessionStorage.getItem('scoreAHum') == 0 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Scissor" && cpuMove  == "Scissor" ||
        sessionStorage.getItem('scoreBHum') == 0 && sessionStorage.getItem('scoreACpu') == 0 && document.getElementById("humanSelection").innerHTML == "Rock" && cpuMove  == "Rock"){
        sessionStorage.setItem('scoreCHum', 0),
        sessionStorage.setItem('scoreCCpu', 0)
        }
    let scoreTextHum = ("Player: ") + sessionStorage.getItem('scoreCHum'); 
    let scoreTextCpu = ("CPU: ") + sessionStorage.getItem('scoreCCpu');

    document.getElementById("cumulScoreHum").innerHTML = scoreTextHum;
    document.getElementById("cumulScoreCPU").innerHTML = scoreTextCpu;
}



//end round