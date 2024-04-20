var b =100

if(true){
    let a = 10
    var b = 20 //var keyword variable has the issues to blcok level scope. if you define it inside the block that variable still access out of the scope 
    const c = 30
}

// console.log(b);

/*nested scope *In the nesting a child block scope can access the parent  bloack sope element but a parent block 
scope can not access the child block scope element */

function one (){
    const username ="Adnan";

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two();
}
one()