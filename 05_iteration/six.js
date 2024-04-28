// const coding = ["js","cpp","ruby","java","python"];

/*
// forEach does not retunr the values 
const values = coding.forEach( (item)=>{ return (item);})
console.log(values);*/


// filter properies use to return the values.

// const newNums = myNums.filter( (num) =>  { return num > 4});

/* we can also use the foreach to retunr the values but we need to logic */
const myNums = [1,2,3,4,5,6,7,8,9,10] 

const newNums = [];

myNums.forEach( (num) => {
    if(num > 5 ){
        newNums.push(num);
    }
})
console.log(newNums);