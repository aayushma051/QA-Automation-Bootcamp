// Q16. Sum All (rest parameters)
// Task: Write sumAll(...nums) that accepts any number of arguments and returns their sum.

function sumAll(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}

console.log(sumAll(1, 2, 3));      // 6
console.log(sumAll(5, 5, 5, 10));   // 25