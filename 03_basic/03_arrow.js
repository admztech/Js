const user = {
    username:"hitesh",
    price:999,
    welcocmeMessage:function(){
   /*this keywor is refer to the current contacts as we know current contacts right now is inside object.current contacts means variable or proertiess*/
        console.log(`${this.username}, Welcome to Website`);
        console.log(this)
    }
}
// user.welcocmeMessage();
// user.username="Sam";
// user.welcocmeMessage()

// console.log(this);

/*
function chai(){
    let userName="Hitesh";
    console.log(this.userName); // this can't work inside the funct that will show the undefine ouput if we use
}
chai();*/
/*That is other way to write the function */
// const chai = function(){
//     let userName ="Adnan";
//     console.log(this.userName)
// }
// chai();


/* Arrow Function */
const chai =()=>{
    let uername ="Adnan";
    console.log(this.username)
}

// chai();
// ()=>{} // basic arrow function ssyntax
/* if that expliity retunr  */
// const addTwo = (num1,num2)=>{
//   return num1 + num2;
// }

/*implicit Return arraow function */
// const addTwo = (num1,num2)=> num1 + num2; // implicate retunr we did not use curly bracket we use the paranthesis not need to meniton the return keywor

/* if we need to retunr the object how can we  */
const addTwo = (num1,num2)=> ({username:"Adnan"});  // to retunr the object need to enlose into parathesis.
console.log(addTwo(5,6));