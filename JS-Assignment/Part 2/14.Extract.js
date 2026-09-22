// Q14. Extract from Object
// Task: Given a user object, write a function that uses object destructuring to pull out name and email and return a template-literal string.


function describe(user) {
  const { name, email } = user;
  return `${name} can be reached at ${email}`;
}

const u = { name: 'Sara', email: 's@x.com', age: 30 };
console.log(describe(u));