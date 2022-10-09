const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let date = new Date();
let monthName = month[date.getMonth()]
console.log(`${date.getDate()}-${monthName}-${date.getFullYear()}`);