const array1 = ['cow', 'dog', 'cat'];
const string1 = array1.join(', ');
const stringToArray1 = string1.split(', ');

// console.log(stringToArray1);

// .push() & .pop()
// array1.pop();
// console.log(array1);
// array1.push('cat');
// console.log(array1);

// .unshift() & .shift()
array1.unshift('worm');
console.log(array1);
array1.shift();
console.log(array1);
