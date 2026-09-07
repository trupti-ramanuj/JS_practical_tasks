const employees = [
    { name: 'John', department: 'IT', salary: 70000 },
    { name: 'Jane', department: 'HR', salary: 55000 },
    { name: 'Bob', department: 'IT', salary: 85000 },
    { name: 'Alice', department: 'Sales', salary: 60000 },
    { name: 'Mark', department: 'IT', salary: 75000 },
    { name: 'Sara', department: 'HR', salary: 65000 },
];

const departmentStats = employees.reduce((acc, employee) => {
    const { department, salary } = employee;

    if (!acc[department]) {
        acc[department] = {
            employees: [],
            count: 0,
            totalSalary: 0,
            highestPaid: null,
        };
    }

    acc[department].employees.push(employee);
    acc[department].count++;
    acc[department].totalSalary += salary;

    if (
        !acc[department].highestPaid ||
        salary > acc[department].highestPaid.salary
    ) {
        acc[department].highestPaid = employee;
    }

    return acc;
}, {});

// Add average salary
Object.values(departmentStats).forEach(dept => {
    dept.averageSalary = dept.totalSalary / dept.count;
});

console.log(departmentStats);
