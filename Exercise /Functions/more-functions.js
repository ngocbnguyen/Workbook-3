"use strict";

function displayMailingLabel(name, address, city, state, zip) {
  console.log(name);
  console.log(address);
  console.log(city);
  console.log(state);
  console.log(zip);
}
displayMailingLabel("Ngoc", "addy", "Atlanta", "Georgia", "30035");

function addNumbers(num1, num2) {
  console.log(`${num1} + ${num2} = ${parseFloat(num1) + parseFloat(num2)} `);
}
addNumbers("2", "2");

function displayReceipt(totalDue, amountPaid) {
    console.log(`Total Due = ${totalDue}`);
    console.log(`Amount Paid = ${amountPaid}`);
    console.log(`Change Due = ${(amountPaid) - (totalDue)}`);
}
	displayReceipt("30", "25");
	


