const products = [
    { id: 1, name: 'Phone', price: 30000, stock: 5 },
    { id: 2, name: 'Laptop', price: 80000, stock: 2 },
    { id: 3, name: 'Mouse', price: 1200, stock: 0 },
    { id: 4, name: 'Keyboard', price: 2500, stock: 10 },
];

// 1. Products that are in stock
const inStock = products.filter(product => product.stock > 0);
console.log(inStock);

// 2. Products that are out of stock
const outOfStock = products.filter(product => product.stock === 0);

console.log(outOfStock);

// 3. Total inventory value
const totalInventoryValue = products.reduce((total, product) => {
    return total + product.price * product.stock;
}, 0);
console.log(totalInventoryValue);
// 4. Product with highest stock
const highestStock = products.reduce((max, product) => {
    return product.stock > max.stock ? product : max;
});
console.log(highestStock);

// 5. Product with lowest stock
const lowestStock = products.reduce((min, product) => {
    return product.stock < min.stock ? product : min;
});
console.log(lowestStock);

// 6. Total number of items in stock
const totalItemsInStock = products.reduce((total, product) => {
    return total + product.stock;
}, 0);

console.log(totalItemsInStock);
