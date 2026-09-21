// Q6. Count Vowels
// Task: Write countVowels(str) that returns how many vowels (a, e, i, o, u) are in the string. Case-insensitive.


function countVowels(str) {
  const lower = str.toLowerCase();
  let count = 0;

  for (const char of lower) {
    if ('aeiou'.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels('Assignment'));  // 3