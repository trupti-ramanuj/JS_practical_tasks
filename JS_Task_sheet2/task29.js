const products = [
    { id: 1, name: 'Phone', price: 30000, rating: 4.5 },
    { id: 2, name: 'Laptop', price: 80000, rating: 4.8 },
    { id: 3, name: 'Mouse', price: 1200, rating: 3.9 },
    { id: 4, name: 'Keyboard', price: 2500, rating: 4.2 },
    { id: 5, name: 'Monitor', price: 18000, rating: 4.6 },
];

// 1. Rating 4 or above
const highRated = products.filter(product =>
    product.rating >= 4
);

console.log(highRated);

// 2. Price below 20000
const below20000 = products.filter(product =>
    product.price < 20000
);

console.log(below20000);

// 3. Rating above 4 AND price below 50000
const filteredProducts = products.filter(product =>
    product.rating > 4 &&
    product.price < 50000
);

console.log(filteredProducts);

// 4. Highest-rated product
const highestRated = products.reduce((highest, product) =>
    product.rating > highest.rating ? product : highest
);

console.log(highestRated);

// 5. Cheapest product with rating above 4
const cheapestHighRated = products
    .filter(product => product.rating > 4)
    .reduce((cheapest, product) =>
        product.price < cheapest.price ? product : cheapest
    );

console.log(cheapestHighRated);

// 6. Sort by rating descending
const sortedByRating = [...products].sort(
    (a, b) => b.rating - a.rating
);

console.log(sortedByRating);
