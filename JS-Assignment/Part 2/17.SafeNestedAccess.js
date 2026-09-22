// Q17. Safe Nested Access (optional chaining)
// Task: Write getCity(user) that returns the user's city from user.address.city, or 'Unknown' if any part is missing.


function getCity(user) {
  return user?.address?.city ?? 'Unknown';
}

console.log(getCity({ address: { city: 'Dharan' } }));  
console.log(getCity({}));                               