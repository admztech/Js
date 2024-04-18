// object singleton or object create with constructor.
/*const tinder =  new Object()  // that is singleton object
console.log(tinder);   */

const tinderUser = {} // that is non singleton object

tinderUser.id="12abc";
tinderUser.name="Sammy";
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUSer = {
    email:"someone@gamil.com",
    fullname:{
        userFullName:{
            firstname:"Adnan",
            lastName:"Sandhu"
        }
    }
}
// console.log(regularUSer.fullname.userFullName.firstname); 

const obj1 = {1:"a",2:"b"}
const obj2 = {1:"a",2:"b"}
// const obj3 = Object.assign({},obj1,obj2);

const obj3 = {...obj1,...obj1}  // combinethe two objects value and retunr to as new object;
// console.log(obj3)

/*when ever the data is coming from the database that is formate of Array of objects*/
const user = [
    {
        id:1,
        email:"Some@gmail.com"
    }
]
user[0].email;// access the first element of array that is object we us Dot notation to access the email

console.log(tinderUser);
console.log(Object.keys(tinderUser)) // that return the object key in teh array data type;
console.log(Object.keys(tinderUser)) // that return the object value in teh array data type;
console.log(Object.entries(tinderUser)) // that retunr the key value in the array that also inside the array;
