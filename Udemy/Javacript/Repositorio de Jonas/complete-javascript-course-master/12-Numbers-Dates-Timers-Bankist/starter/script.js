'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2022-06-30T16:33:06.386Z',
    '2022-07-01T14:43:26.374Z',
    '2022-07-02T18:49:59.371Z',
    '2022-07-03T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = date => {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const dayPassed = calcDaysPassed(new Date(), date);
  console.log(dayPassed);

  if (dayPassed === 0) {
    return 'Today';
  } else if (dayPassed === 1) {
    return 'Yesterday';
  } else if (dayPassed <= 7) {
    return `${dayPassed} days ago`;
  } else {
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// // FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current Date and Time
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hours = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hours}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// // CONVERTING NUMBERS
// // Converting
// console.log(Number("23"));
// console.log(+"23");
// // Parsing
// console.log(Number.parseInt("30px", 10));//30
// console.log(Number.parseInt("30px", 2));//NaN
// console.log(Number.parseInt("e23", 10));//NaN - debe empezar con un numero

// console.log(Number.parseFloat("2.5rem"));//2.5

// console.log(Number.isNaN(20)); //false
// console.log(Number.isNaN("20")); //false
// console.log(Number.isNaN(+"20X")); //true
// console.log(Number.isNaN(23/0)); //false

// console.log(Number.isFinite(20));//true
// console.log(Number.isFinite("20"));//false

// // MATH and ROUNDING
// // Square root
// console.log(Math.sqrt(25)); //5
// console.log(25 ** (1 / 2)); //5
// // Max and Min value
// console.log(Math.max(5, 23, 5, 8, 14));//23
// console.log(Math.min(5, 23, 5, 8, 14));//5
// // PI
// console.log(Math.PI * Number.parseFloat("10px") ** 2);//314.1592653589793
// // Random y Trunc
// console.log(Math.trunc(Math.random() * 6) + 1);//nos da un numero entre 1 y 6
// const randomInt = (min, max) => {
//   return Math.trunc(Math.random() * (max - min) + 1) + min;
// }

// // Rounding Integers
// console.log(Math.trunc(23.3));//23 - quita decimales

// console.log(Math.round(23.3));//23 - redondea entero más cercano
// console.log(Math.round(23.9));//24

// console.log(Math.ceil(23.3));//24 - redondea para arriba
// console.log(Math.ceil(23.9));//24

// console.log(Math.floor(23.3));//23 - redondea para abajo
// console.log(Math.floor(23.9));//23

// // Rounding decimals
// console.log((2.7).toFixed(0)); //3
// console.log((2.7).toFixed(3)); //2.700
// console.log((2.345).toFixed(2)); //2.35

// // THE REMAINDER OPERATOR
// console.log(5 % 2);// 1
// console.log(5 / 2);// % = 2 * 2 + 1

// console.log(8 % 3);// 2
// console.log(8 / 3);// 8 = 3 * 2 + 2

// console.log(6 % 2);// 0
// console.log(6 / 2);// 3

// console.log(7 % 2);// 1
// console.log(7 / 2);//3.5

// const isEven = (n) => n % 2 === 0;

// // NUMERIC SEPARATORS
// const diameterSolar = 287_460_000_000;
// console.log(Number("230_000"));//NaN

// // WORKING with BIGINT
// console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
// console.log(92373278567832563465843675346n);
// console.log(BigInt(92373278567832563465843675346));
// const huge = 785236577892345897n;
// const num = 14;
// console.log(huge * BigInt(num));
// console.log(10n / 3n);// 3n

// // CREATING DATES
// // Create a date
// // 1.
// const now = new Date();
// console.log(now);//Mon Jul 04 2022 11:11:01
// // 2.
// console.log(new Date("december 24, 2015"));//Thu Dec 24 2015 00:00:00
// // 3
// console.log(new Date(2037, 10, 19, 15, 23, 5));//Thu Nov 19 2037 15:23:05
// // 4
// console.log(new Date(0));//Wed Dec 31 1969 21:00:00
// console.log(new Date(3 * 24 * 60 * 60 * 1000));//Sat Jan 03 1970 21:00:00

// // Working with Dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future); //Thu Nov 19 2037 15:23:00
// // getFullYear
// console.log(future.getFullYear()); //2037
// // getMonth
// console.log(future.getMonth()); //10
// // getDate
// console.log(future.getDate()); //19
// // getDay
// console.log(future.getDay()); //4-Jueves
// // getHours getMinutes getSeconds
// console.log(future.getHours()); //15
// console.log(future.getMinutes()); //23
// console.log(future.getSeconds()); //0
// // toISOString
// console.log(future.toISOString()); // 2037-11-19T18:23:00.000Z
// // getTime
// console.log(future.getTime()); // 2142267780000
// console.log(new Date(2142267780000)); // Thu Nov 19 2037 15:23:00
// // Date.now()
// console.log(Date.now()); // 1656945869947
// console.log(new Date(1656945869947)); // Mon Jul 04 2022 11:44:29
// // setFullYear
// future.setFullYear(2040);
// console.log(future); // Mon Nov 19 2040 15:23:00

// // OPERATIONS WITH DATES
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);//2142267780000

// const calcDaysPassed = (date1, date2) => {
//   return Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
// };

// const day1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
// console.log(day1);//10
