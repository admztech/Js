let myDate = new Date();  // new Data object use for data.In javascript datas respents in milseconds.
// console.log(myDate);
// console.log(myDate.toString ()); // to convert the dates into strin
// console.log(myDate.toJSON()); 
// console.log(myDate); 
/* ------------We can specify the date-------------- */
// let anotherDate = new Date(2024, 0 ,23);  // month start from 0 in javascript 
// let anotherDate = new Date(2024, 0 ,23 , 13,30);
let anotherDate = new Date(2024, 0 ,23 , 13,30);
// console.log(anotherDate.toLocaleString());  

let timeStamp = Date.now();   // retunr the date into millisecond 
// console.log(timeStamp);
// console.log(anotherDate.getTime()); /// that retunr the anotherdate that is we define into milliseocnd using getTime method 
// console.log(Math.floor(Date.now()/1000));  /*to covert the millisecond into the secnd by dividn to 1000 */

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})