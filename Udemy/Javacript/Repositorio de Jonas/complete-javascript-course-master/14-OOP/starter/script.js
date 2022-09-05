'use strict';

// // CONSTRUCTOR FUNCTION
// const Person = function (firstName, birthYear) {
//   // console.log(this);//Person {} devuelve siempre el objeto
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //Nunca crear métodos dentro un constructor, porque realizaría miles de copias de la misma función
//   // this.calcAge =  function () {
//   //   console.log(2022 - this.birthYear);
//   // }
// };

// const joaquin = new Person('Joaquín', 1997);
// // console.log(joaquin); // Person { firstName: 'Joaquín', birthYear: 1997 }
// // 1. New {} is created.
// // 2. function is called, this = {}.
// // 3. linked to prototype.
// // 4. function automatically return {}
// // console.log(joaquin instanceof Person);//true

// // PROTOTYPES
// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };
// joaquin.calcAge(); //25
// // console.log(joaquin.__proto__ === Person.prototype); // true
// // console.log(Person.prototype.isPrototypeOf(joaquin)); //true

// // Estas no son propiedades directas de constructor
// Person.prototype.species = 'Homo Sapiens';
// // console.log(joaquin.species); //Homo Sapiens
// // console.log(joaquin.hasOwnProperty('firstName')); //true
// // console.log(joaquin.hasOwnProperty('species')); //false

// // PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS
// console.log(joaquin.__proto__.__proto__); //Este es Object.prototype

// const arr = [3, 6, 6, 5, 6, 9, 3]; // new Array === []
// console.log(arr.__proto__); //todos los métodos de los array
// console.log(arr.__proto__ === Array.prototype); // true

// // Podemos agregar un nuevo método con Array.prototype
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique()); // [3, 6, 5, 9]

// // CODING CHALLENGE 1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed
// }

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.speed}km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.speed}km/h`);
// };

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);
// console.log(bmw);
// console.log(mercedes);
// console.log(bmw.accelerate());
// console.log(bmw.accelerate());
// console.log(bmw.accelerate());
// console.log(bmw.brake());

