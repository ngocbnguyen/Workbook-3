let startDate = new Date("July 11, 2022"); //new Date makes it a Date object
let endDate = new Date("November 11, 2022");

let msec_per_day = 1000 * 60 * 60 * 24;
let elapsedMilliseconds = startDate.getTime() - endDate.getTime();
let dayDiff = elapsedMilliseconds / msec_per_day;
let numDays = Math.abs(Math.round(dayDiff));

console.log("The number of days between dates is " + numDays);