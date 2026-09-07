const expenses = [
    { category: 'Food', amount: 300 },
    { category: 'Food', amount: 500 },
    { category: 'Travel', amount: 700 },
    { category: 'Travel', amount: 300 },
    { category: 'Shopping', amount: 900 },
];


function getCategoryTotal(expenses, category) {
    return expenses
        .filter(expense => expense.category === category)
        .reduce((total, expense) => total + expense.amount, 0);
}

console.log(getCategoryTotal(expenses, 'Food'));

console.log(getCategoryTotal(expenses, 'Travel'));

console.log(getCategoryTotal(expenses, 'Shopping'));

console.log(
    getCategoryTotal(expenses, 'Entertainment')
);
