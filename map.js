
console.time('whole file map');
const len =5_00_00_00;

const arr = [...Array(len).keys()];
console.time('map create');

const map = new Map(
    arr.map(object => {
        return [object, object];
      })
);

console.timeEnd('map create');
console.time('map search');
console.log('map ',map.get(len-1))
console.timeEnd('map search');
console.timeEnd('whole file map');







