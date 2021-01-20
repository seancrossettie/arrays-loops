const students = ['Katy', 'Jackie', 'Sean', 'Nathan'];
// console.log(students.length);

// ******* ACCESSING ITEMS IN ARRAY
// console.log(students[1]); // Jackie
// console.log(students[students.length-1]); // Nathan

students[0] = 'Matthew';
// console.log(students);

const valuePrinter = (array, index) => {
  return (array[index]);
}

console.log(valuePrinter(students, 2));


// Write a function using the .includes() method to test whether a specific element is present in an array
const isElementPresent = (array, element) => {
  return array.includes(element)
}

console.log(isElementPresent(students, 'Greg'));
