// Q19. Filter Adults (filter)
// Task: Given an array of people objects, write getAdults(people) returning only those with age >= 18. Use .filter().

function getAdults(people) {
  return people.filter(p => p.age >= 18);
}

console.log(getAdults([{name:'A', age:25}, {name:'B', age:30}]));
