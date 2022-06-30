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
const msgLoan = document.querySelector('#msg-loan');

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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; //para vaciar todo lo que había antes y empezar de 0.

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
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

// Events handler
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
  inputTransferAmount.value = inputTransferTo.value = '';

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
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add movement
    currentAccount.movements.push(amount);

    //Mensaje
    msgLoan.textContent = 'Préstamo realizado';
    msgLoan.style.color = 'black';
    msgLoan.style.fontSize = '14px';

    //Update UI
    updateUI(currentAccount);
  } else {
    msgLoan.textContent = 'No se pudo realizar el préstamo';
    msgLoan.style.color = 'red';
    msgLoan.style.fontSize = '14px';
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', e => {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(acc => {
      return acc.userName === currentAccount.userName;
    });

    //Delete account
    // console.log(index);
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }
  //Ponemos en blanco los campos otra vez
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
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

// THE SOME AND EVERY METHOD
// const someMethod = movements.some((mov) => mov > 0);
// console.log(someMethod);//true
// const everyMethod = movements.every((mov) => mov > 0);
// console.log(everyMethod);//false

// THE FLAT AND FLATMAP METHOD
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat()); //[1, 2, 3, 4, 5, 6, 7, 8]

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// //Le pasamos como argumento 2 para decir que vamos 2 niveles más profundo en el array
// console.log(arrDeep.flat(2)); //[1, 2, 3, 4, 5, 6, 7, 8]

// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flatMap()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// // SORTING ARRAYS
// // Strings
// const owners = ["Jonas", "Zach", "Adam", "Martha"];
// console.log(owners.sort());//["Adam", "Jonas", "Martha", "Zach"]
// console.log(owners);//["Adam", "Jonas", "Martha", "Zach"]

// //Numbers
// console.log(movements);//[200, 450, -400, 3000, -650, -130, 70, 1300]
// //return < 0: a, b (keep order)
// // return > 0: b, a (switch order)
// // movements.sort((a, b) => {
// //   if(a > b){
// //     return 1;
// //   }
// //   if (b > a) {
// //     return -1;
// //   }
// // });
// movements.sort((a, b) => a - b)//es la mismo que hacer todo lo de arriba
// console.log(movements);//[-650, -400, -130, 70, 200, 450, 1300, 3000]

// // THE FILL METHOD
// const x = new Array(7);
// // console.log(x);//[empty × 7]
// x.fill(1);
// // console.log(x);//[1, 1, 1, 1, 1, 1, 1]

// const arr = [1,2,3,4,5,6,7];
// arr.fill(23, 2, 6);
// // console.log(arr);//[1, 2, 23, 23, 23, 23, 7]

// // ARRAY.FROM
// const y = Array.from({length: 7}, () => 1);
// console.log(y);//[1, 1, 1, 1, 1, 1, 1]

// const z = Array.from({length: 7}, (_, i) => i + 1);
// console.log(z);//[1, 2, 3, 4, 5, 6, 7]

// const random = Array.from({length: 100}, (_, i) => Math.trunc(Math.random() * 100) + i);
// console.log(random);

// //ARRAY METHODS PRACTICE
// // 1.
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);
// // console.log(bankDepositSum);//25180

// // 2.
// const depositsOver1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// // console.log(depositsOver1000);//6
// // Lo mismo usando reduce:
// const depositsOver1000reduce = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => {
//     return cur >= 1000 ? count + 1 : count
//   }, 0);
// // console.log(depositsOver1000reduce);//6

// // 3.
// const sums = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((sum, cur) => {
//     // cur > 0 ? sum.deposits += cur : sum.withdrawals += cur;
//     sum[cur > 0 ? "deposits" : "withdrawals"] += cur;//es igual que la línea de arriba
//     return sum; //en el reduce necesitamos retornar el acumulador
//   }, {deposits: 0, withdrawals: 0});
// // console.log(sums);//{deposits: 25180, withdrawals: -7340}

// // 4.
// const converTitleCase = function (title) {
// const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];

//   const titleCase = title
//     .toLowerCase()
//     .split(" ")
//     .map((word) => {
//       return exceptions.includes(word) ? word : capitalize(word);
//     })
//     .join(" ");
//   return capitalize(titleCase);
// }
// // console.log(converTitleCase("This is a nice TITLE"));
// // console.log(converTitleCase("and this IS ANOTHER TITLE"));

// CODING CHALLENGE 4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// const recommendedFood = weight ** 0.75 * 28;

// 1.
dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
// console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => {
  return dog.owners.includes('Sarah');
});
// console.log(`Sarah's dog is eating ${dogSarah.curFood > dogSarah.recommendedFood ? "to much" : "to little"}`);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => {
    return dog.curFood > dog.recommendedFood;
  })
  .flatMap(owner => {
    return owner.owners;
  });
const ownersEatTooLittle = dogs
  .filter(dog => {
    return dog.curFood < dog.recommendedFood;
  })
  .flatMap(owner => {
    return owner.owners;
  });
// console.log('Eat to much:', ownersEatTooMuch);
// console.log('Eat to little:', ownersEatTooLittle);

// 4.
// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
// console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// // 5.
// // current > (recommended * 0.90) && current < (recommended * 1.10)
// console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));//false

// // 6.
// console.log(
//   dogs.some(dog => {
//     return (
//       dog.curFood > dog.recommendedFood * 0.9 &&
//       dog.curFood < dog.recommendedFood * 1.1
//     );
//   })
// );//true

// // 7.
// const dogsEatingOk = dogs.filter(dog => {
//   return (
//     dog.curFood > dog.recommendedFood * 0.9 &&
//     dog.curFood < dog.recommendedFood * 1.1
//   );
// });
// console.log(dogsEatingOk);

// // 8
// const copyDogs = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
// console.log(copyDogs);
