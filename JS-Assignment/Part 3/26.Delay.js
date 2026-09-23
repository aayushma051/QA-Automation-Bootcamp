// Q26. Delay Function (Promise)
// Task: Write delay(ms) that returns a Promise which resolves after ms milliseconds. Then use it to log 'Hi' after 1 second.



function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(1000).then(() => console.log('Hey'));  // logs 'Hey' after 1 second