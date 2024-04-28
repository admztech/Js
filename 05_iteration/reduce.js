const Nums = [1,2,3]; 

// const myTotal = Nums.reduce( function (acc, curval){ 
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc+curval;
// },0)

const myTotal = Nums.reduce( (acc, curval) => ( acc + curval),0)

// console.log(myTotal);

const shopCard = [

        {
            item: "js",
            price:"2999"
         },

        {
            item: "py",
            price:"2999"
        },

        {
            item: "mobDev",
            price:"5999"
        }

]

