// Q5. Factorial
// Task: Write factorial(n) that returns n! (n × (n-1) × … × 1). factorial(0) should return 1.


function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));  // 120
console.log(factorial(0));  // 1