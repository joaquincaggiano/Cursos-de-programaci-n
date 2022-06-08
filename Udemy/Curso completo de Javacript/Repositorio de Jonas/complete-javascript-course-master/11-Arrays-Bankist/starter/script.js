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
  containerMovements.innerHTML = ''; //para vaciar todo lo que había antes y empezar de 0.

  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
        `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);

// CALCULANDO EL BALANCE
const calcBalance = function (acc) {
  const balance = acc.movements.reduce((acum, mov) => {
    return acum + mov;
  }, 0);
  acc.balance = balance;
  labelBalance.textContent = `${balance}€`;
};
// calcBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acum, mov) => acum + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acum, mov) => acum + mov, 0);

  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acum, int) => acum + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements);

// COMPUTING USERNAMES
const createUserNames = function (accs) {
  accs.forEach(acc => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);
// console.log(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display a message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100; //Esto es para que se muestre toda la info de su cuenta

    // Clear inputfields
    inputLoginUsername.value = '';
    inputLoginPin.value = '';

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  // console.log(amount, receiverAcc);
  //clear the fields
  inputTransferAmount.value = inputTransferTo.value = "";
  
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount)
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

// //FOREACH for MAPS and SETS
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

// //CODING CHALLENGE 1
// const dogsJulia =[3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
// // const dogsJuliaCopy = [...dogsJulia.slice(1, 3)];
// // console.log(dogsJuliaCopy);
// // const dataCorrect = [...dogsJuliaCopy, ...dogsKate];
// // console.log(dataCorrect);

// const checkDogs = function (arrDog1, arrDog2) {
//   // Puedo modificar el array borrando el primero y dos ultimos elementos así
//   const dogsJuliaCopy = [...arrDog1.slice(1, 3)];
//   // console.log(dogsJuliaCopy);
//   // O así...
//   // const dogsJuliaCopy = arrDog1.slice();
//   // dogsJuliaCopy.splice(0, 1);
//   // dogsJuliaCopy.splice(-2);
//   // console.log(dogsJuliaCopy);

//   // Puedo unir los dos array así
//   // const dataCorrect = [...dogsJuliaCopy, ...arrDog2];
//   // console.log(dataCorrect);
//   // O así...
//   const dataCorrect = dogsJuliaCopy.concat(arrDog2)
//   console.log(dataCorrect);

//   dataCorrect.forEach(function(dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy`);
//     }
//   })
// }

// checkDogs(dogsJulia, dogsKate);

// // THE MAP METHOD
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// const movementsUSD = movements.map((mov) => {
//   return mov * eurToUsd
// });
// console.log(movements);
// console.log(movementsUSD);

// //FILTER METHOD
// const deposits = movements.filter(function (mov) {
//     return mov > 0
// })
// console.log(deposits);//[200, 450, 3000, 70, 1300]
// // con un for of
// const depositsFor = []
// for (const mov of movements) {
//     if (mov > 0) {
//         depositsFor.push(mov)
//     }
// }
// console.log(depositsFor);//[200, 450, 3000, 70, 1300]

// // THE REDUCE METHOD
// const balance = movements.reduce((acum, elemCurrent, i) => {
//     // console.log(`Iteration ${i}: ${acum}`);
//     return acum + elemCurrent
// }, 0);
// console.log(balance);//3840
// //Maximum value
// const max = movements.reduce((acc, mov) => {
//     if (acc > mov){
//         return acc
//     } else {
//         return mov
//     }
// }, movements[0]);
// console.log(max);//3000

// CODING CHALLENGE 2
// const data1 =  [5, 2, 4, 1, 15, 8, 3];
// const data2 =  [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (arrDogs) {
//     const humanAge = arrDogs.map((dog) => {
//         if (dog <= 2) {
//             return 2 * dog
//         } else {
//             return 16 + dog * 4
//         }
//     })
//     // console.log(humanAge);
//     const adults = humanAge.filter((dog)=> {
//         return dog >= 18
//     })
//     // console.log(adults);
//     const averageAge = adults.reduce((acum, dog) => acum + dog, 0) / adults.length
//     return averageAge
// };

// const avg1 = calcAverageHumanAge(data1);
// const avg2 = calcAverageHumanAge(data2);
// // console.log(avg1, avg2);

// // CHAINING METHODS
// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acum, mov) => acum + mov, 0);

// console.log(totalDepositsUSD);//5522.000000000001

// CODING CHALLENGE 3
// const data1 = [5, 2, 4, 1, 15, 8, 3];

// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acum, age, i, arr) => acum + age / arr.length, 0);

// const calcAverageHumanAge = function(ages){
//   ages.map(age => {
//     if(age <= 2) {
//       return age * 2
//     } else {
//       return 16 + age * 4
//     }
//   }).filter(age => age >= 18)
// } NO ANDA Y NO ENTIENDO PORQUE NO

// const avg1 = calcAverageHumanAge(data1);

// console.log(avg1);

// THE FIND METHOD
// const account = accounts.find(acc => acc.owner === "Jessica Davis");
// console.log(account);//me devuelve el objeto que tiene ese nombre en la propiedad owner

// IMPLEMENTING LOGIN
