const student = {
  id: 1,
  name: 'Van A',
  name: 'Van B', // same key come later will take precedence
  isHero: true,
  'avg mark': 9,
}
console.log(student.name); // Output: Van B
console.log(student.avg mark); // SyntaxError
console.log(student["avg mark"]); // Output: 9

const key = 'avg mark';
console.log(student.key); // Output: undefined
console.log(student[key]); // Output: 9

// set new key to object
student.age = 18;
student['mark'] = 10;
console.log(student.age); // Output: 18
console.log(student.mark); // Output: 10

// delete key
delete student.name;
console.log(student.name); // Output: undefined