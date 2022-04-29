// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//coding challenge 1

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++){
        const days = i + 1;
        str += `${arr[i]}ºC in ${days} days ... `
    }
    return str
}

console.log(printForecast(data2));
