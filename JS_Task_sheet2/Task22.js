const transactions = [
    { id: 1, amount: 120.50, type: 'debit', category: 'Shopping', date: '2024-01-15' },
    { id: 2, amount: 80.20, type: 'credit', category: 'Salary', date: '2024-01-10' },
    { id: 3, amount: 25.00, type: 'debit', category: 'Food', date: '2024-01-08' },
    { id: 4, amount: 150.75, type: 'debit', category: 'Entertainment', date: '2024-01-20' },
    { id: 5, amount: 200.00, type: 'credit', category: 'Bonus', date: '2024-01-05' },
    { id: 6, amount: 45.50, type: 'debit', category: 'Utilities', date: '2024-01-18' },
    { id: 7, amount: 90.00, type: 'credit', category: 'Refund', date: '2024-01-12' },
    { id: 8, amount: 35.25, type: 'debit', category: 'Groceries', date: '2024-01-22' },
    { id: 9, amount: 60.80, type: 'credit', category: 'Gift', date: '2024-01-03' },
    { id: 10, amount: 70.10, type: 'debit', category: 'Health', date: '2024-01-14' }
];

// 1. Total balance
const totalBalance = transactions.reduce((balance, transaction) => {
    return transaction.type === 'credit'
        ? balance + transaction.amount
        : balance - transaction.amount;
}, 0);
console.log(totalBalance);

// 2. Transactions after 2024-01-10
const afterDate = transactions.filter(
    transaction => transaction.date > '2024-01-10'
);
console.log(afterDate);

// 3. Average credit amount
const credits = transactions.filter(
    transaction => transaction.type === 'credit'
);


const averageCredit =
    credits.reduce((sum, transaction) => sum + transaction.amount, 0)
    / credits.length;
console.log(averageCredit);


// 4. Sort by amount ascending
const sortedTransactions = [...transactions].sort(
    (a, b) => a.amount - b.amount
);
console.log(sortedTransactions);

// 5. Debit spending by category
const spendingByCategory = transactions
    .filter(transaction => transaction.type === 'debit')
    .reduce((acc, transaction) => {
        acc[transaction.category] =
            (acc[transaction.category] || 0) + transaction.amount;

        return acc;
    }, {});

console.log(spendingByCategory);

// 6. Highest spending category
const highestSpendingCategory = Object.entries(
    spendingByCategory
).reduce((highest, current) => {
    return current[1] > highest[1] ? current : highest;
});

console.log(highestSpendingCategory);
