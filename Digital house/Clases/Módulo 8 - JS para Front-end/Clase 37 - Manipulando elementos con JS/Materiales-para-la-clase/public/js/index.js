let mainIndex = document.querySelector("main");
let h2Index = document.querySelector("h2");
let aIndex = document.querySelector("a");
let parrafosIndex = document.querySelectorAll("p");
let divIndex = document.querySelector(".container");
divIndex.style.display = "block";

let elPrompt = prompt("Ingrese su nombre");
if (elPrompt === null) {
    h2Index.innerHTML += "Invitado"
} else {
    h2Index.innerHTML += elPrompt
}

h2Index.style.textTransform = "uppercase";

aIndex.style.color = "#E51B3E";

let bodyIndex = document.querySelector("body");
let confirmText = confirm("¿Desea colocar un fondo de pantalla?");
if (confirmText === true) {
    bodyIndex.classList.add("fondo")
};

for (let i = 0; i < parrafosIndex.length; i++) {
    if(i % 0 === 0){
        parrafosIndex[i].classList.add("destacadoPar") 
    } else {
        parrafosIndex[i].classList.add("destacadoImpar")
    }
}


