// Q29. Run in Parallel (Promise.all)
// Task: You have three fetchUser calls. Write loadAll() that runs them at the same time and returns an array of all three results. Measure that it takes ~500ms total, not 1500ms.

function fetchUser(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, name: 'User' + id });
    }, 500);
  });
}

async function loadAll() {
  const results = await Promise.all([
    fetchUser(1),
    fetchUser(2),
    fetchUser(3)
  ]);
  return results;
}

loadAll().then(console.log);
