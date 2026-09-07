const students = [
    { name: 'Amit', marks: [80, 75, 90] },
    { name: 'Rahul', marks: [65, 70, 60] },
    { name: 'Priya', marks: [95, 90, 92] },
];

const results = students.map(student => {
    const total = student.marks.reduce((sum, mark) => sum + mark, 0);
    console.log(total);
    const average = total / student.marks.length;

    return {
        name: student.name,
        total,
        average
    };

});

console.log(results);

const topper = results.reduce((top, student) => {
    return student.total > top.total ? student : top;
});

console.log(topper);

const above = results.filter(student => student.average > 75);

console.log(above);

const highestMark = students
    .flatMap(student => student.marks)
    .reduce((max, mark) => Math.max(max, mark));

console.log(highestMark);

const lowestMark = students
    .flatMap(student => student.marks)
    .reduce((min, mark) => Math.min(min, mark));

console.log(lowestMark);
