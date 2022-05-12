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
// console.log(lufthansa);

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