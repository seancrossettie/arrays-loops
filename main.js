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

// console.log(valuePrinter(students, 2));


// Write a function using the .includes() method to test whether a specific element is present in an array
const isElementPresent = (array, element) => {
  return array.includes(element)
}

// console.log(isElementPresent(students, 'Greg'));
// console.log(isElementPresent(students, 'Sean'));
// console.log(isElementPresent(students, 'Matthew'));


// ****** FOR LOOPS
// for (setup; condition; increment) {
//   console.log('Do something...') 
// } 

// const functionForMe = () => {
//   for (let i = 0; i <= 15; i++) {
//     console.log(i);
//   }
// }

// functionForMe();

// ****** ARRAYS WITH LOOPS
// const ec14Instructors = ['Aja', 'Trinity', 'Dr. T', 'Discussion Tickets'];

// for (let i = 0; i < ec14Instructors.length; i++) {
//   console.log(ec14Instructors[i]);
// }

// ****** ARRAYS, LOOPS, FUNCTIONS

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

const colorLoop = () => {
  let domString = '';

  for (let i = 0; i < colors.length; i++) {
    domString += `<h1>${colors[i]}</h1>`
  }

  console.log(domString);
}

colorLoop();
