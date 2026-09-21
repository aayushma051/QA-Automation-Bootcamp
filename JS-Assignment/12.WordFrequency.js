// Q12. Word Frequency Object
// Task: Write wordCount(sentence) that returns an object mapping each word to how many times it appears.

function wordCount(sentence) {
  const words = sentence.split(' ');
  const counts = {};
  for (const word of words) {
    counts[word] = (counts[word] || 0) + 1;
  }
  return counts;
}

console.log(wordCount('a b a c b a'));
// { a: 3, b: 2, c: 1 }