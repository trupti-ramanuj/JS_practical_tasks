const employees = [
    { id: 1, name: 'John', department: 'IT', salary: 60000 },
    { id: 2, name: 'Jane', department: 'HR', salary: 50000 },
    { id: 3, name: 'Bob', department: 'IT', salary: 75000 },
    { id: 4, name: 'Alice', department: 'Sales', salary: 55000 },
    { id: 5, name: 'Mark', department: 'IT', salary: 68000 },
];

// 1. Find all employees from the IT department.
const ie = employees.filter(e => e.department === 'IT');
console.log(ie);

// 2. Find employees earning more than 60000.
const he = employees.filter(e => e.salary > 60000);
console.log(he);

// 3. Find the highest-paid employee.
const hpe = employees.reduce((max, e) => e.salary > max.salary ? e : max);
console.log(hpe);

// 4. Find the lowest-paid employee.
const lpe = employees.reduce((min, e) => e.salary < min.salary ? e : min);
console.log(lpe);

// 5. Calculate the average salary.
const average = employees.reduce((sum, e) => sum + e.salary, 0) / employees.length;
console.log(average);

// 6. Create an array containing only employee names.
const names = employees.map(e => e.name);
console.log(names);