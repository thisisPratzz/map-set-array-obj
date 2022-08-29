
console.time('whole file set');
const len =5_00_00_00;

console.time('set create');
const set = new Set([...Array(len).keys()]);
console.timeEnd('set create');

console.time('set search');
console.log('set ',set.has(len-1))
console.timeEnd('set search');
console.timeEnd('whole file set');







