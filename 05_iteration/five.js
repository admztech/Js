/* foreach loop it is the property of array in javascript */

const coding = ["js","ruby","java","python","cpp"];
/* we writhe the call backgfunction iside the foreach method. Call backfunction has not the name. the value as the paramenter */
coding.forEach( function (val){
// console.log(val)
})

// we can write the callback founction as the arrow formate
coding.forEach((item)=>{
    // console.log(item);
})

/*
// we can use the function  reference in the parameter of forEach;
function printMe(item){
    console.log(item)
}
// we only use the printMe function referece not exexute the function in parameter
coding.forEach(printMe)
*/

// forEacj can take more parameter like item,index and array-list  also init

// coding.forEach((item, index, arr)=>{
//     console.log(item,index, arr);
// })

/* objects inside the array */

const myCoding = [
    {
        languageName: "Javascript",
        fileName: "js",
        
    },
    {
        languageName: "Java",
        fileName: "java",

    },
    {
        languageName: "python",
        fileName: "py",

    }
]
myCoding.forEach((item)=>{
console.log(item.languageName);
})