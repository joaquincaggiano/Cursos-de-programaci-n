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





