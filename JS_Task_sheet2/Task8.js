const products = [
    { id: 1, name: 'Phone', category: 'Electronics', price: 30000 },
    { id: 2, name: 'Shirt', category: 'Clothing', price: 1500 },
    { id: 3, name: 'Laptop', category: 'Electronics', price: 70000 },
    { id: 4, name: 'Shoes', category: 'Clothing', price: 3000 },
    { id: 5, name: 'Table', category: 'Furniture', price: 8000 },
];

// 1. Group products by category.
const grouped = products.reduce((acc, p) => {
    (acc[p.category] = acc[p.category] || []).push(p);
    return acc;
}, {});
console.log(grouped);

// 2. Count how many products exist in each category.
const counts = Object.fromEntries(Object.entries(grouped).map(([c, list]) => [c, list.length]));
console.log(counts);

// 3. Calculate the total price of products in each category.
const prices = Object.fromEntries(Object.entries(grouped).map(([c, list]) => [c, list.reduce((s, p) => s + p.price, 0)]));
console.log(prices);

// 4. Find the most expensive product in each category.
const mostExpensive = Object.fromEntries(Object.entries(grouped).map(([c, list]) => [c, list.reduce((m, p) => p.price > m.price ? p : m)]));
console.log(mostExpensive);
// 5. Find the category containing the most products.
const mostProducts = Object.entries(counts).reduce((max, [c, count]) => count > max.count ? { c, count } : max, { c: '', count: 0 }).c;
console.log(mostProducts);