// Q28. Simulated Fetch
// Task: Write fetchUser(id) that returns a Promise resolving to { id, name: 'User' + id } after a 500ms delay. Consume it with async/await inside a getUser() function that logs the result.


function fetchUser(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, name: 'User' + id });
    }, 500);
  });
}

async function getUser() {
  const user = await fetchUser(1);
  console.log(user);
}

getUser();

