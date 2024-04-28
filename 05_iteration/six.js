// const coding = ["js","cpp","ruby","java","python"];

/*
// forEach does not retunr the values 
const values = coding.forEach( (item)=>{ return (item);})
console.log(values);*/

const myNums = [1,2,3,4,5,6,7,8,9,10] 

// filter properies use to return the values.

const newNums = myNums.filter( (num) =>  { return num > 4});

console.log(newNums);