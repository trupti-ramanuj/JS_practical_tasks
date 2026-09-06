const users = [
    { id: 1, name: 'Amit', age: 18 },
    { id: 2, name: 'Rahul', age: 25 },
    { id: 3, name: 'Priya', age: 31 },
    { id: 4, name: 'Neha', age: 22 },
    { id: 5, name: 'Raj', age: 16 },
];



// 1. Find all users who are 18 or older.
const adults = users.filter(u => u.age >= 18);
console.log(adults);

// 2. Find the first user whose age is greater than 25.
const user = users.find(u => u.age > 25);
console.log(user);

// 3. Find the index of the user named 'Neha'.
const neha = users.findIndex(u => u.name === 'Neha');
console.log(neha);

// 4. Check whether any user is below 18.
const ba = users.some(u => u.age < 18);
console.log(ba);

// 5. Check whether every user is above 10.
const all = users.every(u => u.age > 10);
console.log(all);

// 6. Create a new array containing name and age only.
const nameAge = users.map(({ name, age }) => ({ name, age }));
console.log(nameAge);