/* for-of loop: that loops use for array, string , map or javascript object*/ 
const myArray =[1,2,3,4,5];
for (const elements of myArray) {
    // console.log(elements);
}

const greeting = "Hello World";
for (const greet of greeting){
    if(greet==" ")
    {
        continue;
    }
    // console.log(`Each char is ${greet}`);
}

/* Map : they like the array but that is have the unique value that means no repatation of values in map.
its a object that hold key value pair. the order of instertion is maintain */
const map = new Map ();
map.set('IN',"india");
map.set('USA','United States of America');
map.set('Fr',"France");

// console.log(map);
for (const [key,value] of map) {
    /* */
    // console.log(key, ':-', value);
}

const myObject = {
    game1: "NFS",
    game2:"SpiderMan"
}
/*javascript objects is not iteratable with for of loop */
// for (const [key, value] of myObject){
//         console.log(key,':-',value)
// }