// Q21. Find a User (find)
// Task: Write findById(users, id) that returns the first user object whose id matches, or undefined. Use .find().


function findById(users, id) {
  return users.find(u => u.id === id);
}

console.log(findById([{id:1}, {id:2}], 2));  // {id:2}
