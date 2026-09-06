const students = [
    { name: 'Amit', marks: 78 },
    { name: 'Rahul', marks: 45 },
    { name: 'Priya', marks: 92 },
    { name: 'Neha', marks: 65 },
    { name: 'Raj', marks: 32 },
];

// 1. Find students who scored 50 or more.
const passed = students.filter(s => s.marks >= 50);
console.log(passed);

// 2. Find students who failed.
const failed = students.filter(s => s.marks < 50);
console.log(failed);

// 3. Find the student with the highest marks.
const highest = students.reduce((max, s) => s.marks > max.marks ? s : max);
console.log(highest);

// 4. Find the student with the lowest marks.
const lowest = students.reduce((min, s) => s.marks < min.marks ? s : min);
console.log(lowest);

// 5. Calculate the average marks.
const average = students.reduce((sum, s) => sum + s.marks, 0) / students.length;
console.log(average);

//create new array
const newArr = students.map(s => ({
    name: s.name,
    marks: s.marks,
    result: s.marks >= 50 ? 'Pass' : 'Fail'
}));
console.log(newArr);

