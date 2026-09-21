// Q8. Find the Maximum
// Task: Write findMax(arr) that returns the largest number in the array. Do not use Math.max.

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([3, 9, 1, 7]));  
console.log(findMax([4,1,8,10]));     