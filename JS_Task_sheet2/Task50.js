// const products = [
//     { id: 1, price: 100 },
//     { id: 2, price: 50 },
//     { id: 3, price: 200 }
// ];

// const sortedProducts = products.sort((a, b) => a.price - b.price);

// console.log(products);
// console.log(sortedProducts);



// 1. Predict the output.
//Both console.log() statements show the same sorted array.

// 2. Explain what happened to the original array.
//Array.prototype.sort() mutates the original array


//3. Fix the code so the original array remains unchanged.
const products = [
    { id: 1, price: 100 },
    { id: 2, price: 50 },
    { id: 3, price: 200 }
];

const sortedProducts = [...products].sort((a, b) => a.price - b.price);

console.log(products);
console.log(sortedProducts);
