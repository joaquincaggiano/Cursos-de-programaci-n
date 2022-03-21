'use strict';

//Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//starting conditions
score0El.innerText = 0;
score1El.innerText = 0;
diceEl.classList.add("hidden")

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//rolling dice funcionality
btnRoll.addEventListener("click", function(){
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
        currentScore += dice;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else {
        activePlayer = activePlayer === 0 ? 1 : 0;
    }
    
})