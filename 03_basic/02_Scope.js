var b =100

if(true){
    let a = 10
    var b = 20 //var keyword variable has the issues to blcok level scope. if you define it inside the block that variable still access out of the scope 
    const c = 30
}

console.log(b);