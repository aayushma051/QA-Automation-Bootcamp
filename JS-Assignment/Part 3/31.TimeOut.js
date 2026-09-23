// Q31. Timeout Wrapper
// Task: Write withTimeout(promise, ms) that returns whichever settles first: the given promise, or a rejection with 'Timed out' after ms.

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function withTimeout(promise, ms) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Timed out')), ms);
  });

  return Promise.race([promise, timeoutPromise]);
}

withTimeout(delay(3000), 1000)
  .then(() => console.log('Succeeded'))
  .catch(err => console.log(err.message));