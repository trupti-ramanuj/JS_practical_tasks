const users = [
    { id: 1, name: 'Amit', age: 8 },
    { id: 2, name: 'Rahul', age: 15 },
    { id: 3, name: 'Priya', age: 24 },
    { id: 4, name: 'Neha', age: 37 },
    { id: 5, name: 'Raj', age: 43 },
    { id: 6, name: 'Kiran', age: 19 },
    { id: 7, name: 'Jay', age: 31 },
];

// Group users
const groupedUsers = users.reduce((groups, user) => {
    const start = Math.floor(user.age / 10) * 10;
    const end = start + 9;
    const group = `${start}-${end}`;

    if (!groups[group]) {
        groups[group] = [];
    }

    groups[group].push(user);

    return groups;
}, {});

// Count users
const groupCounts = Object.entries(groupedUsers).reduce(
    (result, [group, users]) => {
        result[group] = users.length;
        return result;
    },
    {}
);
console.log(groupedUsers);

// Highest count
const maxCount = Math.max(...Object.values(groupCounts));
console.log(groupCounts);

const largestGroups = Object.entries(groupCounts)
    .filter(([group, count]) => count === maxCount)
    .map(([group]) => group);
console.log(largestGroups);


