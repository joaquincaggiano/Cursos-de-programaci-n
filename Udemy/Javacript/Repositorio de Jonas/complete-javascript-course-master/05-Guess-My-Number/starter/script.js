'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20
let highScore = 0;

const check = document.querySelector(".check");

const displayMessage = function (message) {
    document.querySelector(".message").innerText = message
}

check.addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value);

    if(!guess){
        displayMessage("No Number");
    } else if (guess === secretNumber) {
        displayMessage("Correct Number!");
        document.querySelector(".number").textContent = secretNumber
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem"
        
        if(score > highScore) {
            highScore = score;
            document.querySelector(".highscore").innerText = highScore;
        }
    } else if (guess !== secretNumber) {
        if(score > 1) {
            displayMessage(guess > secretNumber ?  "Too High!" : "Too Low!");
            score--;
            document.querySelector(".score").innerText = score;
        } else {
            displayMessage("You lost the game!");
            document.querySelector(".score").innerText = 0;
        }
    }
    // } else if (guess > number) {
    //     if(score > 1) {
    //         document.querySelector(".message").innerText = "Too High!";
    //         score--;
    //         document.querySelector(".score").innerText = score;
    //     } else {
    //         document.querySelector(".message").innerText = "You lost the game!";
    //         document.querySelector(".score").innerText = 0;
    //     }
    // } else if (guess < number) {
    //     if(score > 1) {
    //         document.querySelector(".message").innerText = "Too Low!";
    //         score--;
    //         document.querySelector(".score").innerText = score;
    //     } else {
    //         document.querySelector(".message").innerText = "You lost the game!";
    //         document.querySelector(".score").innerText = 0;
    //     }
    // }
})

const again = document.querySelector(".again");
console.log(again);

again.addEventListener("click", () => {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    displayMessage("Start guessing...");
    document.querySelector(".score").innerText = score;
    document.querySelector(".number").textContent = "?"
    document.querySelector(".guess").value = ""
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem"
})
