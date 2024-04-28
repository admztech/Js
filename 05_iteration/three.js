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
    console.log(`Each char is ${greet}`);
}