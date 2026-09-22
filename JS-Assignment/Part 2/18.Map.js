// Q18. Double the Array (map)
// Task: Write doubleAll(arr) that returns a NEW array with every number doubled. Use .map().


function doubleAll(arr) {
  return arr.map(n => n * 2);
}

console.log(doubleAll([1, 2, 3]));  // [2, 4, 6]
console.log(doubleAll([9, 10, 11]));  // [18, 20, 22]