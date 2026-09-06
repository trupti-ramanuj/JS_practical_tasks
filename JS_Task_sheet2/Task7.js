const expenses = [
    { category: 'Food', amount: 300 },
    { category: 'Travel', amount: 500 },
    { category: 'Food', amount: 250 },
    { category: 'Shopping', amount: 700 },
    { category: 'Travel', amount: 300 },
    { category: 'Food', amount: 150 },
];

// 1. Filter all Food expenses.
const food = expenses.filter(e => e.category === 'Food');
console.log(food);

// 2. Calculate total Food expense.
const totalFood = food.reduce((s, e) => s + e.amount, 0);
console.log(totalFood);

// 3. Calculate total Travel expense.
const travel = expenses.filter(e => e.category === 'Travel').reduce((s, e) => s + e.amount, 0);
console.log(travel);

// 4. Calculate total Shopping expense.
const shopping = expenses.filter(e => e.category === 'Shopping').reduce((s, e) => s + e.amount, 0);
console.log(shopping);

// 5. Calculate total expense for every category.

const category = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + e.amount;
    return acc;
}, {});
console.log(category);


// 6. Find the category with the highest total expense.
const hc = Object.entries(category).reduce((max, [cat, amt]) => amt > max.amt ? { cat, amt } : max, { cat: '', amt: 0 }).cat;
console.log(hc);


