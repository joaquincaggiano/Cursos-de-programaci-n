'use strict';

//Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice")

//starting conditions
score0El.innerText = 0;
score1El.innerText = 0;
diceEl.classList.add("hidden")