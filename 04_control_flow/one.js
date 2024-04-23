// code can run on conditional base that is called control follow and logic follow 
// <,>,<=,>=,==,===,!=,!==
// const teamprature =41;
// if (teamprature===41){
//     console.log("teamprature is less than 50");
// }else
// {console.log("teamprature is greater than 51"); }     

/* short-hand notation */
// const balance=1000;
// if(balance > 500) console.log("test");  // if you single line then use the single line short hand notation.
const userLogin = true;
const debitCard = true;
const logdedInFromGoogle = false;
const logdedInFromEmai = true;

if(userLogin && debitCard){
    console.log("Allow user to shoping");
}

if(logdedInFromEmai || logdedInFromGoogle){
    console.log("User logged in");
}
