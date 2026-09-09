const products = [
    { id: 1, name: 'Phone', category: 'Electronics', price: 30000, rating: 4.5, stock: 5 },
    { id: 2, name: 'Laptop', category: 'Electronics', price: 80000, rating: 4.8, stock: 2 },
    { id: 3, name: 'Shirt', category: 'Clothing', price: 1500, rating: 4.1, stock: 10 },
    { id: 4, name: 'Shoes', category: 'Clothing', price: 3000, rating: 4.3, stock: 0 },
    { id: 5, name: 'Chair', category: 'Furniture', price: 8000, rating: 4.6, stock: 4 },
];

//1. Display all products.

console.log(products);

//2. Search products by name.
let search = "Laptop";
let result = products.filter(val =>
    val.name.toLowerCase().includes(search.toLowerCase())
);
console.log(result);

//3. Filter products by category.
let cat = products.filter(val =>
    val.category.toLowerCase() === "clothing"
);
console.log(cat);

//4. Filter products by minimum price.
const minp = products.reduce((min, p) => (p.price < min.price ? p : min), products[0]);
console.log(minp);

//5. Filter products by maximum price.

const maxp = products.reduce((max, p) => (p.price > max.price ? p : max), products[0]);
console.log(maxp);

//6. Sort products by price ascending.
const pa = products.sort((a, b) => a.price - b.price);
console.log(pa);

//7. Sort products by price descending.
const pd = products.sort((a, b) => b.price - a.price);
console.log(pd);

//8. Sort products by rating.
const rating = products.sort((a, b) => a.rating - b.rating);
console.log(rating);

//9. Show only products that are in stock.
const sp = products.filter(val => val.stock > 0);
console.log(sp);


//10. Find the most expensive product.
const mostE = products.reduce((max, p) => (p.price > max.price ? p : max), products[0]);
console.log(mostE);

//11. Find the highest-rated product.
const hrp = products.reduce((max, p) => (p.rating > max.rating ? p : max), products[0]);
console.log(hrp);

//12. Calculate the total inventory value.