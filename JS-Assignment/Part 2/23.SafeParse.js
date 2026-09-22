// Q23. Safe JSON Parse (try/catch/finally)
// Task: Write safeParse(str) that returns the parsed object, or null if the string is invalid JSON. Log 'done' in a finally block either way.

function safeParse(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    return null;
  } finally {
    console.log('done');
  }
}

console.log(safeParse('{"a":1}'));   // { a: 1 }
console.log(safeParse('not json'));  // null
