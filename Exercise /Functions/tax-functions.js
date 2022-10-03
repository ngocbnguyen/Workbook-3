"use strict";

function getSocSecTax(grossPay) {
    const taxRate = 0.062;
    let taxReturn = grossPay * taxRate;
    console.log(`Social Security tax is $${taxReturn.toFixed(2)}`);
}
getSocSecTax(700);

function getMedicareTax(grossPay) {
    const taxRate = .0145
    let taxReturn = grossPay * taxRate;
    console.log(`Medicare tax is $${taxReturn}`);
}
getMedicareTax(700);

function getFedTax(grossPay, withholdingCode) {
    if (withholdingCode==0) {
        let taxReturn = grossPay * 0.23;
        console.log(`Your federal tax is ${taxReturn}.`);
    } else if (withholdingCode==1){
        let taxReturn = grossPay * 0.21;
        console.log(`Your federal tax is ${taxReturn}.`);
    } else if (withholdingCode == 2) {
        let taxReturn = grossPay * 0.195;
        console.log(`Your federal tax is ${taxReturn}.`);
    } else if (withholdingCode == 3) {
        let taxReturn = grossPay * 0.185;
        console.log(`Your federal tax is ${taxReturn}.`);
    } else if (withholdingCode>=4) {
        let taxReturn = 0.18-((withholdingCode-4)*0.005);
        console.log(`Your federal tax is ${grossPay * taxReturn}.`);
    }
}
getFedTax(80, 5);