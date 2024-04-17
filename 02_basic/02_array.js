const marvel_heros=["Thor","Ironman","spiderman"];
const dc_heros=["TSpiderMan","Flash","Batman"];
// marvel_heros.push(dc_heros); //push method push the array inside the array not merage them
// console.log(marvel_heros.length);
//  const allHeros = marvel_heros.concat(dc_heros);  // contact retunr the combination of array 

// console.log(allHeros);
const allnewHeors = [...marvel_heros, ...dc_heros]  // that is spread operator:that also use to combine the array elelement
// sconsole.log(allnewHeors);
const anotherArray = [1,2,3,[6,5],[7,8,[4,5]]];
// const realAnotherArray=anotherArray.flat(Infinity) // flat method return the flat simple array if there is mutilevel of array.


/*when we sccraping data from web. we chan check the data is in array format or not becasue data is in different format  */
console.log(Array.isArray("Adnan") ); //that return false becase that is not a stirng that is array

//to cover into array we use the from methid
console.log(Array.from("Adnan") ); //taht convert into the array

 /* when we converting a object into array that will return  empty array we need to deing we 
 want key as the array or value properites as the array */
 console.log(Array.from({name:"Adnan"}) ); 

 /* how can convert the mutiple variable into array.  */

 let score1 = 100;
 let score2 = 200;
 let score3 = 300;
  //return new array from a set of elements.
 console.log(Array.of(score1,score2,score3));