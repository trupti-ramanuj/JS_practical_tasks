const products = [
    { id: 1, name: 'Laptop', price: 75000, category: 'Electronics' },
    { id: 2, name: 'Mouse', price: 1200, category: 'Electronics' },
    { id: 3, name: 'Chair', price: 8500, category: 'Furniture' },
    { id: 4, name: 'Desk', price: 12000, category: 'Furniture' },
    { id: 5, name: 'Lamp', price: 1800, category: 'Home' },
];

//1. Create an array containing only the product names.
const names = products.map(p => p.name);
console.log(names);

//2. Create an array containing only the product prices.

const prices = products.map(p => p.price);
console.log(prices);

//3. Find the product with id 3.

const product = products.find(p => p.id === 3);
console.log(product);

//4. Find the index of the product with id 4.

const index = products.findIndex(p => p.id === 4);
console.log(index);

//5. Find all products with a price greater than 5000.

const pa = products.filter(p => p.price > 5000);
console.log(pa);

//6. Calculate the total price of all products.

const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
console.log(totalPrice);

