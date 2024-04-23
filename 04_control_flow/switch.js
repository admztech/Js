/* switch case statment use to check a value from multiples condition. */

// switch (key) {  key is the value for which we check the condition for each time
//     case value:
//         break;  (if you don't use the break statment after it then after match case all code is excute without check the case except the default)
//         default:
//             break
// }
const month=3;
switch(month){
    case 1:
    console.log("January"); 
    break;s
    case 2:
    console.log("Feb"); 
    break
    case 3:
    console.log("Mar"); 
    break;
    case 4:
    console.log("Apr"); 
    break;
    default:
        console.log("default is match");
        break;
}