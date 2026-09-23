// Q30. Handle a Rejection
// Task: Write riskyFetch() that returns a Promise which rejects with an Error('Network failed'). Then write a safe() async function that awaits it inside try/catch and logs the error message instead of crashing.

function riskyFetch() {
  return new Promise((_, reject) => {
    reject(new Error('Network failed'));
  });
}

async function safe() {
  try {
    await riskyFetch();
  } catch (err) {
    console.log('Caught:', err.message);
  }
}

safe();

