const score = 100; // that javascript automaticall detect datatype is number 

/* we can exclusive define the datatype will be number using the new Number object  */

const balance = new Number(100);

// console.log(score);
// console.log(balance);
// console.log(balance.toString());  // that methog convert the number into the string 
// console.log(balance.toFixed(2));  // mostl use taht property in ecommerece 100.00

const otherNumber = 123.589;
// console.log(otherNumber.toPrecision(3));  /// precision value tell thet the rang of number in out after roundoff the values

const hundreds = 1000000;
// console.log(hundreds.toLocaleString())  //the provide the commans accordin to us stander to account the hundreds values

// ++++++++++ maths +++++++ ///
// console.log(Math);
// console.log(Math.abs(-4)); //absult values that change the negative to postive values.
// console.log(Math.round(4.555)); //round of the value
// console.log(Math.ceil(4.1)); //if the value is more than point then that value round off like 4.1 is round of 5
// console.log(Math.floor(4.5)); //it take the floor value if the point valueis equal ot more thans 0.5 that did not do round off.

console.log(Math.random()); // math.random bedfault value always between 0 and 1, but we can define the rang specification. like creat dia game 1 to 6
console.log((Math.random()*10)+1); 
const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);  /* max-min give the range of number and +1 add to avoid the zero( max-min + 1) give
                                                            minmum value is 1 but we need to minimum value to min= 10 that is why we add min variable */
