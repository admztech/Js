/* unction is the package or block of code in which that cantain the number of lines code.
we can use that block or package of code where to by calling the function*/

function sayMyName(){
    console.log("A");
    console.log("d");
    console.log("n");
    console.log("a");
    console.log("n");
}
sayMyName  // that is called the function reference when we write function name without parentheses.
// sayMyName() //that function is execute now .becacse we we write the function with it parentheses.

// function addTwoNumber (number1,number2){
// console.log(number1+number2);
// }
// const result = addTwoNumbers(3,5);
// /* the inside the result is undefined becasue the that function resturn nothing console
// .log use for print the out put.we need to return .used retunr keu*/
// console.log("Result :",result);  

function addTwoNumbers(number1,number2){
    let result = number1 + number2;
    return result;
}
// console.log(addTwoNumbers(4,8));
function calculateCardPrice(...num1){   // (...)restoperator in javascript in fuction use to manage the
    return num1;
}
// console.log(calculateCardPrice(200,300,400))
const user ={
    username:"hitesh",
    price:199
}
function userData(anyobject){
console.log(`This is the user name ${anyobject.username} and the price is ${anyobject.price}`);
}
// userData(user);

const myNewArray = [200,100,400];
function returnSecondValue(getArray){
   console.log( getArray[1]);
   }
returnSecondValue(myNewArray);