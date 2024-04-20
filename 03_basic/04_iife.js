
/* Iife immediately  invoked function expression that is use two paranthesis first one used to define the function 2nd use to expecut the fnction */
(function chai(){   // that is name iife function
    console.log(`DB Connection`);
})// that is syntax of writing the iife contection
() ; // to end the invoked the iife function you use the terminat semicolon


// use the arrow function init.
(()=>{  // that is not named iife
    console.log("DB Connection in arrow function");
})();

/// we can use the argument in that funtion also 

((name)=>{
    console.log(`DB Connection in arow function ${name}`);
})("adnan");