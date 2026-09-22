// Q15. Merge with Spread
// Task: Write merge(obj1, obj2) that returns a new object combining both, where obj2's values win on conflicts. Do not mutate the inputs.


function merge(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

console.log(merge({a: 1, b: 2}, {b: 9, c: 3}));
// { a: 1, b: 9, c: 3 }