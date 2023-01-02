let date1 = new Date("04/20/2022").getTime();
let date2 = new Date("12/05/2022").getTime();

let differenceInTime = date2 - date1;
let differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);

console.log(date1, date2, differenceInTime, Math.floor(differenceInDays));