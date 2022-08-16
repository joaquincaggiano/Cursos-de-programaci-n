'use strict';

///////////////////////////////////////
// Modal window
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

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

// Tabbed component
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Remove classes
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(tabC =>
    tabC.classList.remove('operations__content--active')
  );

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// MENU FADE ANIMATION
const handlerHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handlerHover.bind(0.5));

nav.addEventListener('mouseout', handlerHover.bind(1));

// // Sticky navigation
// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// STICKY NAVIGATION: intersection observer API
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// REVEAL SECTIONS
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null, //null = viewport
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// LAZY LOADING IMAGES
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// BUILDING A SLIDER COMPONENT
const slider = function () {

  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');
  
  let curSlide = 0;
  const maxSlide = slides.length;
  
  // Functions
  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  
  const activateDot = function (slide) {
    document.querySelectorAll(".dots__dot").forEach(dot => {
      dot.classList.remove("dots__dot--active")
    })
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active");
  }
  
  const goToSlide = function (slideNumber) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - slideNumber)}%)`;
    });
  };
  
  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
  
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  // Prev slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  
  const init = function(){
    goToSlide(0);
    createDots();
    activateDot(0);
  }
  init()
  
  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });
  
  dotContainer.addEventListener("click", function (e) {
    if(e.target.classList.contains("dots__dot")) {
      const {slide} = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  })
}
slider();


///////////////////////////////
///////////////////////////////
///////////////////////////////
///////////////////////////////

// // SELECTING ELEMENTS
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// // console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// // console.log(allButtons);

// // console.log(document.getElementsByClassName("btn"));

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

// // LIFECYCLE DOM EVENTS
// document.addEventListener('DOMContentLoaded', function(e){
//   console.log('HTML parsed and DOM tree built!', e);
// });

// window.addEventListener('load', function(e){
//   console.log('Page fully loaded', e);
// });

// window.addEventListener('beforeunload', function(e){
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });



