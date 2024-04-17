// Array is object type
/* array in javascript are resiable that meand we can add, remove or edit the array element
define the array */

const myArray = [0,1,2,3];
const newArray = myArray.join () //  convert the array into strning.

/* Slice and 
spalice */
console.log("A :",myArray);
const myn1= myArray.slice(1,3) // that return the selection of array from the include 1 to exclude 3. meand last range is not inculde
console.log("B : ",myn1); 
console.log("A :",myArray);
const myn2 = myArray.splice(1,3) 
/*that is rethe the selectio of array from the define range also include the start and last range inlcude but that manipulate the orignal array by
remove teh splice selection from it .*/
console.log("sp : ", myn2);
console.log("A: " ,myArray);
