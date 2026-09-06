const users = [
    { id: 1, name: 'Amit', age: 18, active: true },
    { id: 2, name: 'Rahul', age: 25, active: false },
    { id: 3, name: 'Priya', age: 31, active: true },
    { id: 4, name: 'Neha', age: 22, active: true },
];



// 1. Find all active users.
const active = users.filter(u => u.active);
console.log(active);

// 2. Find all inactive users.
const inactive = users.filter(u => !u.active);
console.log(inactive);

// 3. Find active users above age 20.
const user = users.filter(u => u.active && u.age > 20);
console.log(user);

// 4. Check whether any inactive user exists.
const iu = users.some(u => !u.active);
console.log(iu);

// 5. Check whether all active users are above age 18.
const ae = active.every(u => u.age > 18);
console.log(ae);

// 6. Create a new array with:
const newArr = users.map(u => ({
    name: u.name,
    status: u.active ? 'Active' : 'Inactive'
}));
console.log(newArr);