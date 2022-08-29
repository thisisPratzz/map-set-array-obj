

console.time('whole file Object')
const len =5_00_00_00;


console.time('Object create');

const myobj={};
for (let i = 1; i <= len; i++) {
    myobj[i]=i;
}


console.timeEnd('Object create');

console.time('Object search')
console.log('Obje',5_00_00_00 in myobj);
console.timeEnd('Object search')
console.timeEnd('whole file Object')





