// Q2. Grade Classifier
// Task: Write getGrade(score) that returns a letter grade: 90+ = 'A', 80-89 = 'B', 70-79 = 'C', 60-69 = 'D', below 60 = 'F'.


function getGrade(score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95));  // 'A'
console.log(getGrade(72));  // 'C'
console.log(getGrade(40));  // 'F'