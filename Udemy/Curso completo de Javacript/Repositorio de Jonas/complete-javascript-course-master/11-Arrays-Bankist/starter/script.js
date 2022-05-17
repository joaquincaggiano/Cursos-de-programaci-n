'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
    containerMovements.innerHTML = "";//para vaciar todo lo que había antes y empezar de 0.

    movements.forEach((mov, i) => {
        const type = mov > 0 ? "deposit" : "withdrawal"
        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
        `
        containerMovements.insertAdjacentHTML("afterbegin", html)
    })
}
displayMovements(account1.movements)

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// SIMPLE ARRAYS METHODS
// const arr = ["a", "b", "c", "d", "e"];
// Slice
// console.log(arr.slice(2));// [ 'c', 'd', 'e' ]
// console.log(arr.slice(2,4));// [ 'c', 'd' ]
// console.log(arr.slice(-2));// [ 'd', 'e' ]
// console.log(arr.slice(1, -2));// [ 'b', 'c' ]
// console.log(arr.slice());// estamos copiando el array original

// Splice
// console.log(arr.splice(2));// [ 'c', 'd', 'e' ]
// console.log(arr);// [ 'a', 'b' ]

// Reverse
// console.log(arr.reverse());// [ 'e', 'd', 'c', 'b', 'a' ]
// console.log(arr); // [ 'e', 'd', 'c', 'b', 'a' ]

// Concat
// const arr2 = ["f", "j", "h", "i", "j"];
// const letters = arr.concat(arr2);
// console.log(letters); // ['a', 'b', 'c', 'd','e', 'f', 'j', 'h','i', 'j']
// console.log([...arr, ...arr2]);// ['a', 'b', 'c', 'd','e', 'f', 'j', 'h','i', 'j'] En este caso no mutamos ningun array

// Join
// console.log(arr.join(" - ")); // a - b - c - d - e

// THE NEW AT METHOD - AVERIGUAR PORQUE VSC NO ME LO LEE
// const arr = [23, 13, 45];
// console.log(arr[0]);// 23 - Como se hacía antes
// console.log(arr.at(0)); // 23 -Como se hace ahora
// // Conseguir el último elemento
// console.log(arr[arr.length -1]); //45
// console.log(arr.slice(-1)[0]);// 45
// console.log(arr.at(-1)); //45

// LOOPING ARRAYS:FOREACH
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // Con for of
// for(const [i, movement] of movements.entries()){
//     if (movement > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${movement}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);// Math.abs devuelve el valor absoluto de un número
//     }
// }
// // con forEach
// movements.forEach((movement, i, arr) => {
//     if (movement > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${movement}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);// Math.abs devuelve el valor absoluto de un número
//     }
// })

// FOREACH for MAPS and SETS
// // Map
// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map){
//     console.log(`${key}: ${value}`);
// })
// // Set
// const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//     console.log(`${value}: ${value}`);
// })
