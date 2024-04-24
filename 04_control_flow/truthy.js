/*there is truthy and Falsy values where the values consider to a true or false */

// Falsy Vales : 0, -0 ,  Bigint 0n, null , ""(emprtystring),undefned, NaN (not a number)

/*truth values: "0" (zero inside the string that is not a empty string), "false" (that is a string not a false),
" "(space inside the string), [] empty array, {} empty object, function(){} empty function*/

/*how can check the array is empty or not */
 const myArry= [];
 if(myArry.length===0){
    console.log("Array is the empty");
 }
  
//  how can check the object is empty 

const myObject= {};
// use the object.key method whic retunr the key of object in array formate
if(Object.keys(myObject).length===0){
    console.log("object is Empty");
}

/*Nullish CoalescingOperator (??) : null undefined(When we call data from databse or expecially from firebase etc)
we can't get directly responsed. we get two value null response or not get a respone means undefined. for this
special case to make the code secure we use the nullish coalesing operater*/

let val1 ;
// val1 = null??10;
// console.log(val1);
val1 = undefined??15;
// console.log(val1);

//Terniary Operator;  that is short form of writng the if else form 
// constion? true: false;
const iceTeamPrice=100;
iceTeamPrice>=80 ?console.log("greater then 80"):console.log("Less then 80");
