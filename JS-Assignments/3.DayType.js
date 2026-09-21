function dayType(day) {
  switch (day) {
    case 'Saturday':
    case 'Sunday':
      return 'Weekend';
    default:
      return 'Weekday';
  }
}

console.log(dayType('Sunday'));   // 'Weekend'
console.log(dayType('Tuesday'));  // 'Weekday'