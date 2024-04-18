/* there is two way to decleare the object in js
1 . littery and constructor*/
const mySym = Symbol("key1")   // declare the symbole;
// object consit the key and values. we define the key and value. The key name is strack as the string behind the scence.
const jsUSEr = {
    name:"Adnan",
    'full name':"Adnan sandhu",      //when you have the space between the key name so  write it as the string. that value access only by sequare notion. 
    age :24,
    [mySym]:"mykey1",   // that is syntace of  use  the symbole data types as the key in object. to writne in sequare braket.
    location:"Lahore",
    email: "Adnan@google.com",
    isLogedIn:false,
    lastLogin: ["Monday", "Saturday"]
}
/* 
console.log(jsUSEr.email);   // Dot(.) to access the values.
console.log(jsUSEr["email"]);  // sequare notation access the values.
console.log(jsUSEr["full name"]);  // sequare notion to access the if key name is contain the sapce. that value is not access by the Dot notation.
console.log((jsUSEr[mySym]));  // to acces the symbold type key to write wtih simple object name and mention symbole key into brakets.*/

/*
jsUSEr.email= "Adnan@openai.com";  //we can change the valuse simple by reassign the values
console.log(jsUSEr.email);
Object.freeze(jsUSEr);  // now the change is not propogate.
console.log(jsUSEr);
*/

// function
jsUSEr.greeting = function(){
    console.log("hellow js user");
}
jsUSEr.greetingTwo = function(){
    console.log(`hellow js user ,($this.name)`);
}
console.log(jsUSEr.greeting);
