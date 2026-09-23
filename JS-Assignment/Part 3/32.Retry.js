// Q32. Retry with Recovery
// Task: Write retry(fn, times) that calls the async function fn. If it rejects, try again — up to 'times' total attempts. If all attempts fail, re-throw the last error.


async function retry(fn, times) {
  let lastError;

  for (let i = 0; i < times; i++) {
    try {
      const result = await fn();
      return result;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError;
}

// Test it with a flaky function
let attempt = 0;

function flakyFetch() {
  attempt++;
  return new Promise((resolve, reject) => {
    if (attempt < 3) {
      reject(new Error(`Attempt ${attempt} failed`));
    } else {
      resolve('Success!');
    }
  });
}

retry(flakyFetch, 3)
  .then(result => console.log('Resolved:', result))
  .catch(err => console.log('All attempts failed:', err.message));