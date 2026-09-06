const products = [
    { id: 1, name: 'Phone', price: 30000 },
    { id: 2, name: 'Laptop', price: 80000 },
    { id: 3, name: 'Mouse', price: 1200 },
    { id: 4, name: 'Keyboard', price: 2500 },
];

// 1. Sort products by price ascending.
const ascending = [...products].sort((a, b) => a.price - b.price);
console.log(ascending);

// 2. Sort products by price descending.
const descending = [...products].sort((a, b) => b.price - a.price);
console.log(descending);

// 3. Sort products alphabetically by name.
const nameAsc = [...products].sort((a, b) => a.name.localeCompare(b.name));
console.log(nameAsc);

// 4. Find the two most expensive products.
const Expensive = descending.slice(0, 2);
console.log(Expensive);

// 5. Create a new sorted array without changing the original products array.
const newArray = [...products].sort((a, b) => a.price - b.price);
console.log(newArray);