const myNumers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumers.map( (num) => num + 10);
/* Chaning we can use the 2 or more mathod same time that is called the chaning */

const newNums = myNumers.map( (num) => num * 10).map( (num) => num + 1).filter( (num) => num >= 40 );
console.log(newNums);