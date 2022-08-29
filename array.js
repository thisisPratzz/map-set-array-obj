

console.time('whole file Array')

const len =5_00_00_00;

console.time('Array create');
const arr = [...Array(len).keys()];
console.timeEnd('Array create');    

console.time('Array search')
console.log('arr',arr.includes(arr[len -1]));

console.timeEnd('Array search')
console.timeEnd('whole file Array')





