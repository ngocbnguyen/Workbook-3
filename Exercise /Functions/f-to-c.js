"use strict";

function convertFtoC(temperature) {
    let celsius = (temperature - 32) * 5 / 9;
    console.log(`${temperature} degree Fahrenheit is ${celsius} degree Celsius.`);
}
convertFtoC(76);

