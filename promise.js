const someArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];



const someArray2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];





let total2 =0;
let value='undefined';
console.log(value===undefined);

console.time("Resolve");
Promise.all(someArray2.map((item) => {
    // total+=item;
    // resolve();
    return new Promise((resolve,reject)=>{
        total2+=item;
        resolve();
    })
})) 
console.timeEnd("Resolve");

console.log("🚀 ~ file: promise.js ~ line 12 ~ total2", total2)





let total =0;

console.time("withoutResolve");
Promise.all(someArray.map((item) => {
    total+=item;
})) 
console.timeEnd("withoutResolve");

console.log("🚀 ~ file: promise.js ~ line 33 ~ total", total)

console.time("Resolve");
Promise.all(someArray2.map((item) => {
    // total+=item;
    // resolve();
    return new Promise((resolve,reject)=>{
        total2+=item;
        resolve();
    })
})) 
console.timeEnd("Resolve");





console.time("change");
Promise.all(someArray.map((item) => {
    total+=item;
})) 
console.timeEnd("chnage ");