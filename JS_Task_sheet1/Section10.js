const products = [
    {
        id: 1,
        name: "MacBook Air M4",
        price: 99999,
        category: "Electronics",
        brand: "Apple",
        stock: 12,
        rating: 4.8,
        tags: ["laptop", "apple", "premium"]
    },
    {
        id: 2,
        name: "iPhone 16",
        price: 79999,
        category: "Electronics",
        brand: "Apple",
        stock: 25,
        rating: 4.7,
        tags: ["mobile", "apple", "5g"]
    },
    {
        id: 3,
        name: "Galaxy S25",
        price: 74999,
        category: "Electronics",
        brand: "Samsung",
        stock: 18,
        rating: 4.6,
        tags: ["mobile", "samsung", "5g"]
    },
    {
        id: 4,
        name: "Mechanical Keyboard",
        price: 5499,
        category: "Accessories",
        brand: "Keychron",
        stock: 8,
        rating: 4.5,
        tags: ["keyboard", "mechanical", "wireless"]
    },
    {
        id: 5,
        name: "Magic Mouse",
        price: 6999,
        category: "Accessories",
        brand: "Apple",
        stock: 0,
        rating: 4.2,
        tags: ["mouse", "apple", "wireless"]
    },
    {
        id: 6,
        name: "Sony WH-1000XM6",
        price: 34999,
        category: "Audio",
        brand: "Sony",
        stock: 14,
        rating: 4.8,
        tags: ["headphone", "wireless", "noise-canceling"]
    },
    {
        id: 7,
        name: "AirPods Pro 3",
        price: 24999,
        category: "Audio",
        brand: "Apple",
        stock: 30,
        rating: 4.7,
        tags: ["earbuds", "apple", "wireless"]
    },
    {
        id: 8,
        name: "Dell 27 Monitor",
        price: 28999,
        category: "Electronics",
        brand: "Dell",
        stock: 6,
        rating: 4.3,
        tags: ["monitor", "4k", "display"]
    },
    {
        id: 9,
        name: "Logitech MX Master 3S",
        price: 8999,
        category: "Accessories",
        brand: "Logitech",
        stock: 21,
        rating: 4.6,
        tags: ["mouse", "wireless", "productivity"]
    },
    {
        id: 10,
        name: "iPad Air",
        price: 59999,
        category: "Electronics",
        brand: "Apple",
        stock: 10,
        rating: 4.5,
        tags: ["tablet", "apple", "portable"]
    }
];

const task59 = products.reduce((acc, p) => acc + p.price, 0);
console.log(task59);

const task60 = products.reduce((sum, p) => sum + p.stock, 0)
console.log(task60);

const task61 = products.reduce((max, p) => (p.price > max.price ? p : max), products[0]);
console.log(task61);

const task62 = products.reduce((min, p) => (p.price < min.price ? p : min), products[0]);
console.log(task62);


const task63 = (products.reduce((acc, p) => acc + p.rating, 0) / products.length);
console.log(task63);

const task64 = products.reduce((acc, p) => acc + p.price * p.stock, 0);
console.log(task64);

const task65 = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;

},
    { Electronics: 0, Accessories: 0, Audio: 0 });
console.log(task65);

const task66 = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + p.stock;
    return acc;
},
    { Electronics: 0, Accessories: 0, Audio: 0 });
console.log(task66);