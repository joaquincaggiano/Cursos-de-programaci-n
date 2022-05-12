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
// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

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

// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);
// for (const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
//   //On thu we open at 12 and close at 22. On fri we open at 11 and close at 23. On sat we open at 0 and close at 24
// }

// CODING CHALLENGE 2
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// Task 1
// for (const [i, el] of game.scored.entries()){
//   console.log(`Goal ${i + 1}: ${el}`);
// }

// Task 2
// let average = 0;
// const odds = Object.values(game.odds);
// for (const odd of odds) {
//   average += odd;
//   average /= odds.length;
//   console.log(average);
// }

// Task 3
// for (const [team, odd] of Object.entries(game.odds) ) {
//   const teamStr = team === "x" ? "draw" : `${game[team]}`
//   console.log(`Odd of victory ${teamStr}: ${odd}.`);
// }

// Bonus
//  const scorers = {}
//  for(const player of game.scored){
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
//  }
//  console.log(scorers);

// SETS
// const orderSet = new Set(["pizza", "pasta", "pasta", "pizza", "risotto"])
// console.log(orderSet);//pizza, pasta, risotto
// console.log(orderSet.size); // 3
// console.log(orderSet.has("pizza")); //true
// orderSet.add("Garlic Bread");
// orderSet.delete("risotto")
// console.log(orderSet);//'pizza', 'pasta', 'Garlic Bread'
// for (const order of orderSet) console.log(order); //pizza, pasta, Garlic Bread

// Example to transform a set into a array
// const staff = ["Waiter", "Chef", "Manager", "Waiter", "Chef", "Waiter"];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique); //[ 'Waiter', 'Chef', 'Manager' ]

// MAPS
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// // console.log(rest);//{ 'name' => 'Classico Italiano', 1 => 'Firenze, Italy' }
// rest
//   .set(2, 'Lisbon', 'Portugal')
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// get: para leer datos del map
// console.log(rest.get("name"));//Classico Italiano
// console.log(rest.get(true));//We are open

// has: para ver si esta la key en el Map
// console.log(rest.has("categories"));//true

// delete: borra una key
// rest.delete(2);//borro la segunda ubicación del restaurante

// size: cuantos elementos hay
// console.log(rest.size);//8

// clear: elimina todo del Map
// rest.clear();
// console.log(rest);//Map(0) {}

// INICIALIZAR MAP CON UN ARRAY
// const question = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "Javascript"],
//   ["correct", 3],
//   [true, "Correct"],
//   [false, "Try again!"]
// ]);
// console.log(question);

// CONVERTIR UN OBJETO EN UN MAP
// const hoursMap = new Map(Object.entries(restaurant.openingHours))
// console.log(hoursMap); //Map(3) {'thu' => { open: 12, close: 22 },'fri' => { open: 11, close: 23 },'sat' => { open: 0, close: 24 }}

// ITERAR UN MAP
// for (const [key, value] of question) {
//   if (typeof key === "number") {
//     console.log(`Answer ${key}: ${value}`);
//     //Answer 1: C, Answer 2: Java, Answer 3: Javascript
//   }
// }

// CONVERTIR UN MAP EN UN ARRAY
// console.log([...question]); //[[ 'question', 'What is the best programming language in the world?' ],[ 1, 'C' ],[ 2, 'Java' ],[ 3, 'Javascript' ],[ 'correct', 3 ],[ true, 'Correct' ],[ false, 'Try again!' ]]

// CODING CHALLENGE 3
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
//   ]);

// Task 1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// Task 2
// gameEvents.delete(64);
// console.log(gameEvents);

// Task 3
// const eventSize = 90 / gameEvents.size
// console.log(`An event happened, on average, every ${eventSize} minutes`);

// Task 4 
// for (const [keys, values] of gameEvents.entries()) {
//   if (keys <= 45) {
//     console.log(`[FIRST HALF] ${keys} : ${values}`);
//   } else {
//     console.log(`[SECOND HALF] ${keys} : ${values}`);
//   }
// }

// MÉTODOS DE LOS STRINGS
const airlane = "TAP Air Portugal";
// console.log(airlane.slice(4));//Air Portugal
// console.log(airlane.toLowerCase());//tap air portugal
// console.log(airlane.toUpperCase());//TAP AIR PORTUGAL

// Ejemplo para corregir el nombre mal escrito
// const passenger = "jOnAS";
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect); //Jonas

// Ejemplo con trim()
// const email = "hello@jonas.io";
// const loginEmail = "   Hello@jonas.io   ";
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);//hello@jonas.io
// // Podemos hacerlo en una sola línea
// const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
// console.log(normalizedEmail);//hello@jonas.io

// Ejemplo con replace()
// const priceGb = "288,97£";
// const priceUS = priceGb.replace("£", "$").replace(",", ".");
// console.log(priceUS);//288.97$

// Ejemplo con replaceAll() ESTO TODAVÍA NO FUNCIONA
// const announcement = "All passengers come to boarding door 23. Boarding door 23!";
// console.log(announcement.replaceAll("door", "gate"));

// MÉTODOS QUE DEVUELVEN BOOLEANS
// const plane = "A320neo"
// includes()
// console.log(plane.includes("A320"));//true
// startsWith()
// console.log(plane.startsWith("Air"));//false
// endsWith()
// console.log(plane.endsWith("neo"));//true

// split()
// console.log("a+very+nice+string".split("+"));//[ 'a', 'very', 'nice', 'string' ]
// console.log("Joaquin Caggiano".split(" "));//[ 'Joaquin', 'Caggiano' ]
// const [firstName, lastName] = "Joaquin Caggiano".split(" ");
// console.log(firstName, lastName);//joaquin caggiano

// join()
// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);//Mr. Joaquin CAGGIANO
// const capitalizeName = function(name){
//   const names = name.split(" ");
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1))
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
//   }
//   console.log(namesUpper.join(" ")); //Joaquin Caggiano
// }
// capitalizeName("joaquin caggiano")

// padStart() y padEnd()
// const message = "Joaquin";
// console.log(message.padStart(20, "-").padEnd(30, "+"));//-------------Joaquin+++++
// const maskCreditCard = function (number) {
//   const str = number + "";//esto transforma el numero en un string;
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// }
// console.log(maskCreditCard(134256457658));//********7658

// repeat()
// const messageAirPlane = "Todos los vuelos estan demorados.... ";
// console.log(messageAirPlane.repeat(3)); //se repite el mensaje 3 veces

// CODING CHALLENGE 4
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener("click", () => {
//   const text = document.querySelector("textarea").value;
//   const rows = text.split("\n")
  
//   for (const row of rows) {
//    const [first, second] = row.toLowerCase().trim().split("_");
//    const upperCaseName = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
//   }
// })


