'use strict';

// DEFAULTS VALUES
// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
//     // Como se hacia antes de la nueva versión de JS
// //     numPassengers = numPassengers || 1;
// //     price = price || 199;
//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking)
// };
// createBooking("LH123");//{ flightNum: 'LH123', numPassengers: 1, price: 199 }
// createBooking("LH145", 3, 1000);//{ flightNum: 'LH145', numPassengers: 3, price: 1000 }
// createBooking("HR356", 4)//{ flightNum: 'HR356', numPassengers: 4, price: 796 }

// FUNCTIONS ACCEPTING CALLBACKS FUNCTIONS
// const oneWord = function (str) {
//     return str.replace(/ /g, "").toLowerCase();
// }

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(" ");
//     return [first.toUpperCase(), ...others].join(" ");
// }

// // Higher-order functions
// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);//Original string: JavaScript is the best!
//     console.log(`Transformed string: ${fn(str)}`);//Transformed string: javascriptisthebest!
//     console.log(`Transformed by: ${fn.name}`);//Transformed by: oneWord
// }
// transformer("JavaScript is the best!", oneWord);
// transformer("JavaScript is the best!", upperFirstWord);

// FUNCTIONS RETURNING FUNCTIONS
// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`); //Hey Joaquín
//     }
// }
// const greeterHey = greet("Hey");
// greeterHey("Joaquín")
// greet("Hello")("Joaquín")//Hello Joaquín

// // Arrow function
// // como lo resolvi yo
// const greet = (greeting) => {
//     const arrowGreet = (name) => {
//         console.log(`${greeting} ${name}`);
//     }
//     return arrowGreet
// }

// greet("Hola")("Mauro")
// // Como lo resolvió Jonas
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr("Hi")("Jonas")

// THE CALL AND APPLY METHODS
// const lufthansa = {
//     airline: "Lufthansa",
//     iataCode: "LH",
//     bookings: [],
//     book(flightNum, name){
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
//     }
// }

// lufthansa.book(239, "Joaquín Caggiano");//Joaquín Caggiano booked a seat on Lufthansa flight LH239
// lufthansa.book(639, "Alumine Llado");//Alumine Llado booked a seat on Lufthansa flight LH639
// // console.log(lufthansa);

// const eurowings = {
//     airline: "Eurowings",
//     iataCode: "EW",
//     bookings: []
// }

// const book = lufthansa.book;

// // Does not work
// // book(23, "Sarah Williams") no funciona porque no encuentra la palabra clave this

// // CALL method
// book.call(eurowings, 23, "Sarah Williams");
// book.call(lufthansa, 543, "Mauro Mazzieri");

// // APPLY method
// // Esto no se usa más...
// const flightData = [485, "Indiana Jones"];
// book.apply(eurowings, flightData);
// console.log(eurowings);
// // Porque se puede hacer esto:
// book.call(eurowings, ...flightData);

// THE BIND METHOD
// const bookEW = book.bind(eurowings);
// bookEW(666, "Dario Barassi");
// // console.log(eurowings);//{ flight: 'EW666', name: 'Dario Barassi' }
// // Podemos establecer parámetros antes
// const bookEW666 = book.bind(eurowings, 666);
// bookEW666("Goku");
// // console.log(eurowings);//{ flight: 'EW666', name: 'Goku' }
// const bookEWBatman = book.bind(eurowings, null, "Batman");
// bookEWBatman(134);
// console.log(eurowings);//{ flight: 'EWnull', name: 'Batman' }

// with Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//     console.log(this);
//     this.planes++
//     console.log(this.planes);
// }
// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// partial application
// const addTax = (rate, value) => value + value * rate;
// const addVAT = addTax.bind(null, 0.23);
// // addVat = value => value + value * 0.23

// hacerlo retornando una function
// const addTaxRate = function(rate){
//     return function (value) {
//         return value + value * rate
//     }
// };
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));//123
// console.log(addVAT2(23));//28.29

// CODING CHALLENGE 1
// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
//     // This generates [0, 0, 0, 0]. More in the next section!
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         const answer = Number(prompt(`${this.question} \n ${this.options.join("\n")} \n (Write option number)`));
//         // console.log(answer);
//         typeof answer === "number" && answer < this.answers.length && this.answers[answer]++;
//         // console.log(this.answers);
//         this.displayResults();
//         this.displayResults("string")
//     },
//     displayResults(type = "array"){
//         if(type === "array"){
//             console.log(this.answers);
//         } else if (type === "string") {
//             console.log(`Poll results are ${this.answers.join(", ")}`);
//         }
//     }
// };

// document.querySelector(".poll").addEventListener("click", poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({answers: [5, 2, 3]}, "string");
// poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, "string");

// INMEDIATLY INVOKED FUNCTIONS EXPRESSIONS
// (function(){
//     console.log("This function will never run again");
// })();
// // con arrow function también funciona
// (() => console.log("This function will ALSO never run again"))()
// // private data
// {
//     const privateData = "Joaquín"
// }
// console.log(privateData);//ReferenceError: privateData is not defined

// CLOSURES
// const secureBooking = function () {
//     let passengerCount = 0;

//     return function () {
//         passengerCount++;
//         console.log(passengerCount);
//     }
// };

// const booker = secureBooking();

// booker();
// booker();
// console.dir(booker);

// example 1
// let f;

// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a * 2);
//     } 
// }

// const h = function () {
//     const b = 4;
//     f = function () {
//         console.log(b * 3);
//     }
// }

// g();
// f();
// console.dir(f);//46 y en el scope, el closure es "a: 23"

// h();
// f();
// console.dir(f);//12 y en el scope, el closure es "b: 4"

// Example 2
// const boardPassengers = function (n, wait) {
//     const perGroup = n / 3;

//     setTimeout(function () {
//         console.log(`We are now boarding all ${n} passengers`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`);
//     }, wait * 1000);

//     console.log(`Will start boarding in ${wait} seconds`);
// }

// boardPassengers(180, 3);

// CODING CHALLENGE 2
// (function () {
//     const header = document.querySelector('h1');
//     header.style.color = 'red';

//     document.querySelector("body").addEventListener("click", () => {
//         header.style.color = "blue"
//     })
// })();