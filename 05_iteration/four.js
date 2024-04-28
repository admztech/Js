const myObject = {
    js: "javascript",
    Cpp: "c++",
    Rb: "Ruby",
    swift: "Swift  by apple"
}

for (const key in myObject) {
    // console.log(myObject[key]);
}
//if we apply the for in loop on array that will print the key or index value of array elements
const programing = ["js","c++","Java"]
for (const key in programing)
{
    // console.log(key);
}

/* for in loop con not iterate the map  */
const map = new Map ();
map.set('IN',"india");
map.set('USA','United States of America');
map.set('Fr',"France");
for (const key in map){
    console.log(key);
}