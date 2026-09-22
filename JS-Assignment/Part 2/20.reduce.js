// Q20. Total Price (reduce)
// Task: Given an array of items each with a price, write totalPrice(items) returning the sum of all prices. Use .reduce().

function totalPrice(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

console.log(totalPrice([{price:20}, {price:50}, {price:22}]));  
