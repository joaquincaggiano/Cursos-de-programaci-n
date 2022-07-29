'use strict';

///////////////////////////////////////
// Modal window
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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

// IMPLEMENTING SMOOTH SCROLLING
btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling - OLD WAY
  // window.scrollTo({
  //   lefth: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // Scrolling - NEW WAY
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page navigation

// No es una buena práctica hacerlo asi, porque si tenemos 100 elementos dentro del foreach relenteceria la app
// document.querySelectorAll(".nav__link").forEach((el) => {
//   return el.addEventListener("click", (e) => {
//     e.preventDefault()
// const id = e.target.getAttribute("href")
// // console.log(id);
// document.querySelector(id).scrollIntoView({behavior: "smooth"})
//   })
// })

// Event delegation - buena manera de hacerlo
document.querySelector('.nav__links').addEventListener('click', e => {
  e.preventDefault();
  // Matching stategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
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
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
  // Antes se hacía así para remover un elemento:
  // message.parentElement.removeChild(message);
});

// STYLES
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// console.log(getComputedStyle(message));//todos los estilos que tiene
// console.log(getComputedStyle(message).color);//rgb(187, 187, 187)
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// setProperty
// document.documentElement.style.setProperty("--color-primary", "orangered");

// // ATTRIBUTES
const logo = document.querySelector('.nav__logo');
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

// // TYPES OF EVENTS AND EVENT HANDLERS
// const h1 = document.querySelector("h1");

// const alertH1 = (e) => {
//   alert("Pasaste por el título");

//   h1.removeEventListener("mouseenter", alertH1);
// }

// h1.addEventListener("mouseenter", alertH1);

// // EVENT PROPAGATION IN PRACTICE
// const randomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// const randomColor = () => {
//   return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`
// };

// const nav__link = document.querySelector(".nav__link");
// nav__link.addEventListener("click", (e) => {
//   e.target.style.backgroundColor = randomColor()
// });

// const nav__links = document.querySelector(".nav__links");
// nav__links.addEventListener("click", (e) => {
//   e.target.style.backgroundColor = randomColor()
// });

// const nav = document.querySelector(".nav");
// nav.addEventListener("click", (e) => {
//   e.target.style.backgroundColor = randomColor()
// });

// // DOM TRAVERSING
// const h1 = document.querySelector('h1');

// // Going downwards: child
// console.log(h1.querySelectorAll('.highlight')); //NodeList(2) [span.highlight, span.highlight]
// console.log(h1.childNodes); //NodeList(9) [text, comment, text, span.highlight, text, br, text, span.highlight, text]
// console.log(h1.children); //HTMLCollection(3) [span.highlight, br, span.highlight]
// h1.firstElementChild.style.color = "white";// le aplica ele stilo al primer child del h1
// h1.lastElementChild.style.color = "white";

// // Going upwards: parents
// console.log(h1.parentNode);//el elemento padre
// console.log(h1.parentElement);
// // Para elegir un elemento padre más allá del primero que tenga utilizamos closest()
// h1.closest(".header").style.background = "orange"

// // Going sideways: siblings
// console.log(h1.previousElementSibling); //en este caso fue null
// console.log(h1.nextElementSibling); // un h4
// // Para leer todos los siblings hacemnos este truco:
// console.log(h1.parentElement.children); // HTMLCollection(4) [h1, h4, button.btn--text.btn--scroll-to, img.header__img]

