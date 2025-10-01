'use strict';

function filterArray(numbers, value) {
  // return numbers.filter(num => num > value); // this also works but didn't learn filter() yet :)
  const filteredNumbers = [];

  for (const num of numbers) {
    if (num > value) {
      filteredNumbers.push(num);
    }
  }

  return filteredNumbers;
}

console.log('\nTask 3');
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
