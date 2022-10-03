"use strict";

function convertCtoF(temperature) {
    let fahrenheit = temperature * (9 / 5) + 32;
    console.log(`${temperature} degree Celsius is ${fahrenheit} degree Fahrenheit.`);
}
convertCtoF(100);
