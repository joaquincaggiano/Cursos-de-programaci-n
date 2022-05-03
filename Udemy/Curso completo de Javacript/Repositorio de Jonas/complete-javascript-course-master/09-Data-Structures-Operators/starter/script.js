'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//SPREAD OPERATOR
// const arr = [4, 5, 6];
// const newArr = [1,2,3, ...arr]
// console.log(newArr);//1,2,3,4,5,6

// Spread operator en un string

// const str = "joaquin"
// const letters = [...str];
// console.log(letters); //"j","o","a","q","u","i","n"

// Spread operator en un objeto

// const newRestaurant = {...restaurant, founder: "Joaquín"};
// console.log(newRestaurant);//todo el objeto de restaurante, + founder: "Joaquín"

// REST PATTERN AND PARAMETERS
//  Rest because on LEFT of =
// const [a, b, ...others] = [1, 2, 3, 4, 5]
// console.log(a, b, others);//1, 2, [3, 4, 5]

// const [pizza, pasta, ...otherfood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, pasta, otherfood);//pizza, pasta, ['Risotto','Focaccia','Bruschetta','Garlic Bread','Caprese Salad']

// const { sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays); //muestra el objeto de los días thu y fri

// function add (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i] 
//   } 
//   console.log(sum);
// }

// add(5,4); //9
// add(4,6,3,4); //17
// add(2,6,7);//15

// const x = [1,2,3]
// // spread operator
// add(...x)//6

// NULLISH OPERATOR
// restaurant.numGuest = 0;
// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);// el valor da 0

// LOGICAL ASSIGMENTS OPERATORS
const rest1 = {
  name: "Capri",
  numGuests: 20
}

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi"
}

// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;

// // Operador de asignación de órdenes
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Operador de asignación nullish
// Si el rest1 tuviera de numGuests = 0, las líneas anteriores darían de resultado 10 porque 0 es un valor falso
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// Operador de asignación AND
// rest1.owner &&= "ANONYMOUS";
// rest2.owner &&= "ANONYMOUS";

// CODING CHALLENGE 1
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//   [
//   'Neuer',
//   'Pavard',
//   'Martinez',
//   'Alaba',
//   'Davies',
//   'Kimmich',
//   'Goretzka',
//   'Coman',
//   'Muller',
//   'Gnarby',
//   'Lewandowski',
//   ],
//   [
//   'Burki',
//   'Schulz',
//   'Hummels',
//   'Akanji',
//   'Hakimi',
//   'Weigl',
//   'Witsel',
//   'Hazard',
//   'Brandt',
//   'Sancho',
//   'Gotze',
//   ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//   'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//   team1: 1.33,
//   x: 3.25,
//   team2: 6.5,
//   },
//   };

//   // Task 1
//   const [players1, players2] = game.players;

//   // Task 2
//   const [gk, ...fieldPlayers] = players1;

//   // Task 3
//   const allPlayers = [...players1, ...players2];

//   // Task 4
//   const players1Final = [...players1, 'Thiago', 'Coutinho','Perisic'];

//   // Task 5
//   const {odds: {team1, x: draw, team2}} = game;

//   // Task 6
//   const printGoals = function (...playersNames) {
//     console.log(`${playersNames.length} goals were scored`);
//   }

//   printGoals(...game.scored);

//   // Task 7
//   team1 < team2 && console.log("Team 1 is more likely to win");
//   team1 > team2 && console.log("Team 2 is more likely to win");
  
// FOR OF LOOP
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// for (const item of menu) console.log(item);//Pizza Pasta Risotto Focaccia Bruschetta Garlic Bread Caprese Salad

// for (const item of menu.entries()) {
//   console.log(item); //[ 1, 'Pasta' ][ 2, 'Risotto' ][ 3, 'Focaccia' ][ 4, 'Bruschetta' ][ 5, 'Garlic Bread' ][ 6, 'Caprese Salad' ]
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);//1: Pizza 2: Pasta 3: Risotto 4: Focaccia 5: Bruschetta 6: Garlic Bread 7: Caprese Salad
// }


// OPTIONAL CHAINING
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }
// // with optional chaining
// console.log(restaurant.openingHours?.mon?.open);

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for(const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day}, we open at ${open}`);
// }

// console.log(restaurant.order?.(0,1) ?? "Method does not exit");

// const users = [{name:"joaquin"}];
// console.log(users[0]?.name ?? "User is empty");//joaquin

// LOOPING OBJECTS
// for (const day of Object.keys(restaurant.openingHours)){
//   console.log(day);//thu, fri, sat
// }

// const values =Object.values(restaurant.openingHours);
// console.log(values);//[{ open: 12, close: 22 },{ open: 11, close: 23 },{ open: 0, close: 24 }]

const entries = Object.entries(restaurant.openingHours);
// console.log(entries);
for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
  //On thu we open at 12 and close at 22. On fri we open at 11 and close at 23. On sat we open at 0 and close at 24
}