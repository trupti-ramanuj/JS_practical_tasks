const users = [
    { id: 1, name: 'John', city: 'Ahmedabad' },
    { id: 2, name: 'Alice', city: 'Surat' },
    { id: 3, name: 'Bob', city: 'Ahmedabad' },
    { id: 4, name: 'Neha', city: 'Mumbai' },
    { id: 5, name: 'Raj', city: 'Surat' },
];

// 1. Group users by city.
const grouped = users.reduce((acc, u) => {
    (acc[u.city] = acc[u.city] || []).push(u);
    return acc;
}, {});
console.log(grouped);

// 2. Count users in every city.
const counts = Object.fromEntries(Object.entries(grouped).map(([city, list]) => [city, list.length]));
console.log(counts);

// 3. Find all users from Ahmedabad.
const ahmedabad = users.filter(u => u.city === 'Ahmedabad');
console.log(ahmedabad);

// 4. Find the city having the highest number of users.
const highest = Object.entries(counts).reduce((max, [c, n]) => n > max.n ? { c, n } : max, { c: '', n: 0 }).c;
console.log(highest);

// 5. Create an array containing unique city names.
const cities = [...new Set(users.map(u => u.city))];
console.log(cities);