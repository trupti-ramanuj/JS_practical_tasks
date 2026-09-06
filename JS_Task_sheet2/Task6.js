const transactions = [
    { id: 1, amount: 1200, type: 'debit' },
    { id: 2, amount: 5000, type: 'credit' },
    { id: 3, amount: 800, type: 'debit' },
    { id: 4, amount: 2500, type: 'credit' },
    { id: 5, amount: 600, type: 'debit' },
];

// 1. Calculate total credit amount.
const cAmount = transactions.filter(t => t.type === 'credit').reduce((s, t) => s + t.amount, 0);
console.log(cAmount);

// 2. Calculate total debit amount.
const dAmount = transactions.filter(t => t.type === 'debit').reduce((s, t) => s + t.amount, 0);
console.log(dAmount);

// 3. Calculate the final balance.
const balance = cAmount - dAmount;
console.log(balance);

// 4. Find the largest transaction.
const largest = transactions.reduce((max, t) => t.amount > max.amount ? t : max);
console.log(largest);

// 5. Find all debit transactions above 700.
const dt = transactions.filter(t => t.type === 'debit' && t.amount > 700);
console.log(dt);

// 6. Find the average transaction amount.
const average = transactions.reduce((s, t) => s + t.amount, 0) / transactions.length;
console.log(average);