// for
for(let index=1;index<10;index++){
    const element = index;
    // console.log(element);
}
for(let i=0;i<=10;i++){
// console.log(`outerloop : ${i}`)
for(let j=0; j<=10; j++){
    // console.log(`Inner loop value: ${j} and Outer loop ${i}`)
}
}
const myArray=["flash", "badman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    // const element = myArray[index];
    
}
//break and continue  // Break is stop the execution code after it and go out from that scope
for (let index = 1; index < 20; index++) {
    if(index===5){
        console.log(`Decteced 5`);
        break;
    }
    console.log( `Value of Index: ${index}`);
    
}
/*
continue: skip the at oncetime code to print or execute */

for (let index = 1; index < 20; index++) {
    if(index===5){
        console.log(`Decteced 5`);
        continue; // just like once aforgive that is ignore
    }
    console.log( `Value of Index: ${index}`);
    
}