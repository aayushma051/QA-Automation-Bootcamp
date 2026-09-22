// Q24. Custom Error Class
// Task: Create a class ValidationError that extends Error. Write validateAge(age) that throws a ValidationError with message 'Age must be positive' when age < 0, otherwise returns age.


class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function validateAge(age) {
  if (age < 0) {
    throw new ValidationError('Age must be positive');
  }
  return age;
}

console.log(validateAge(25));  // 25

try {
  validateAge(-3);
} catch (err) {
  console.log(err.name);     // 'ValidationError'
  console.log(err.message);  // 'Age must be positive'
}