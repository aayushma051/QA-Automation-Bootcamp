// Q22. Chained Pipeline (map + filter + reduce)
// Task: Given an array of numbers, return the sum of the squares of only the even numbers.

function sumEvenSquares(arr) {
  return arr
    .filter(n => n % 2 === 0)
    .map(n => n * n)
    .reduce((sum, n) => sum + n, 0);
}

console.log(sumEvenSquares([1, 2, 3, 4]));  // 20  (2² + 4²)