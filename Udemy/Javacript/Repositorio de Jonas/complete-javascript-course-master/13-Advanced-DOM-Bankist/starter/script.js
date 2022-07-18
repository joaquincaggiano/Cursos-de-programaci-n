'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  return btn.addEventListener('click', openModal);
});

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////

// // SELECTING ELEMENTS
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
// console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName("btn"));

// CREATING and INSERTING ELEMENTS
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  "We use cookied for improved funcionality and analytics. <button class='btn btn--close-cookie'>Got it!</button>";

// header.append(message);
// header.prepend(message);
// header.append(message.cloneNode(true));
header.before(message);
// header.after(message);

// DELETING ELEMENTS
document.querySelector(".btn--close-cookie").addEventListener("click", () => {
  message.remove();
  // Antes se hacía así para remover un elemento:
  // message.parentElement.removeChild(message);
})

// STYLES
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

// console.log(getComputedStyle(message));//todos los estilos que tiene
// console.log(getComputedStyle(message).color);//rgb(187, 187, 187)
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// setProperty
// document.documentElement.style.setProperty("--color-primary", "orangered");

// // ATTRIBUTES
const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);//Bankist logo
// console.log(logo.src);//ubicación de la imagen
// console.log(logo.className);//nav__logo
// logo.alt = "Beautiful minimalist logo"
// console.log(logo.alt);//Beautiful minimalist logo

// // Non-standard
// console.log(logo.getAttribute("designer"));//Joaquin
// console.log(logo.getAttribute("src"));//img/logo.png
// logo.setAttribute("company", "Bankist")

// // Data attributes
// console.log(logo.dataset.versionNumber);//3.0

// // CLASSES
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();


