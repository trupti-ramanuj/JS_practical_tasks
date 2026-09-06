const students = [
    {
        name: 'Amit',
        marks: {
            maths: 80,
            science: 75,
            english: 90
        }
    },
    {
        name: 'Rahul',
        marks: {
            maths: 65,
            science: 70,
            english: 60
        }
    },
    {
        name: 'Priya',
        marks: {
            maths: 95,
            science: 90,
            english: 92
        }
    }
];


// 1. Calculate total marks for every student.
//2. Calculate average marks for every student.
students.forEach(student => {
    const marks = Object.values(student.marks);

    student.total = marks.reduce((sum, mark) => sum + mark, 0);
    student.average = student.total / marks.length;
});
console.log(students);

// 3. Find the student with the highest total.
const ht = students.reduce((max, s) => s.total > max.total ? s : max).name;
console.log(ht);

// 4. Calculate the average marks for Maths.
const avgMaths = students.reduce((s, st) => s + st.marks.maths, 0) / students.length;
console.log(avgMaths);

// 5. Calculate the average marks for Science.
const avgScience = students.reduce((s, st) => s + st.marks.science, 0) / students.length;
console.log(avgScience);

// 6. Average English marks
const avgEnglish =
    students.reduce((sum, s) => sum + s.marks.english, 0) /
    students.length;

console.log(avgEnglish);


// 7. Find which subject has the highest average.

const subAverages = {
    maths: avgMaths,
    science: avgScience,
    english: avgEnglish
};
const bestSubject = Object.entries(subAverages).reduce((val, s) => s[1] > val[1] ? s : val);

console.log(bestSubject[0],
    bestSubject[1]
);