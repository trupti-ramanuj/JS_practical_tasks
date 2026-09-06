
const employees = [
    { id: 1, name: 'John', department: 'IT', salary: 65000 },
    { id: 2, name: 'Jane', department: 'IT', salary: 75000 },
    { id: 3, name: 'Bob', department: 'HR', salary: 50000 },
    { id: 4, name: 'Alice', department: 'IT', salary: 80000 },
    { id: 5, name: 'Mark', department: 'HR', salary: 55000 },
];



// 1. Find all IT employees.
const employeesIt = employees.filter(e => e.department === 'IT');
console.log(employeesIt);

// 2. Sort IT employees by salary from highest to lowest.
const sortedIT = [...employeesIt].sort((a, b) => b.salary - a.salary);
console.log(sortedIT);

// 3. Display the top 2 highest - paid IT employees.
const topIT = sortedIT.slice(0, 2);
console.log(topIT);

// 4. Calculate the average IT salary.
const avgIT = employeesIt.reduce((s, e) => s + e.salary, 0) / employeesIt.length;
console.log(avgIT);

// 5. Calculate the total salary expense for IT.
const totalIT = employeesIt.reduce((s, e) => s + e.salary, 0);
console.log(topIT);

// 6. Find the highest - paid employee in each department.
const hpe = employees.reduce((acc, e) => {
    if (!acc[e.department] || e.salary > acc[e.department].salary) {
        acc[e.department] = e;
    }
    return acc;
}, {});
console.log(hpe);