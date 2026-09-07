const users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Alice', email: 'alice@example.com' },
    { id: 3, name: 'Bob', email: 'bob@example.com' },
];

const orders = [
    { id: 101, userId: 1, amount: 1200 },
    { id: 102, userId: 2, amount: 2000 },
    { id: 103, userId: 1, amount: 1500 },
];

// 1. Users who have placed orders
const usersO = users.filter(user =>
    orders.some(order => order.userId === user.id)
);

console.log(usersO);

// 2. Their email addresses
const emails = usersO.map(user => user.email);

console.log(emails);

// 3. Users who have NOT placed orders
const unotO = users.filter(user =>
    !orders.some(order => order.userId === user.id)
);

console.log(unotO);

// 4. Total amount spent by each user
const userSpending = users.map(user => {
    const total = orders
        .filter(order => order.userId === user.id)
        .reduce((sum, order) => sum + order.amount, 0);

    return {
        id: user.id,
        name: user.name,
        email: user.email,
        totalSpent: total
    };
});

console.log(userSpending);

// 5. User who spent the most
const topSpender = userSpending.reduce((max, user) =>
    user.totalSpent > max.totalSpent ? user : max
);

console.log(topSpender);
