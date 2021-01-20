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


const isGregHere = (array, element) => {
  return array.includes(element)
}

console.log(isGregHere(students, 'Greg'));
