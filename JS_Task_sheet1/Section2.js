
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

//Task9

const newProducts = products.map(p =>
    p.id === 3 ? { ...p, price: 69999 } : p
);

console.log(newProducts);


//Task10

const task10 = products.map(p => (p.id === 5 ? { ...p, stock: 15 } : p));
console.log(task10);

//Task11
const task11 = products.map(p => ({ ...p, discount: 10 }));
console.log(task11);

//task12
const task12 = products.map(p => ({ ...p, isApple: p.brand === "Apple" }));
console.log(task12);

//task13
const task13 = products.filter(p => p.id !== 4);
console.log(task13);

//task14
const newproduct = {
    id: 11,
    name: "iPhone 16 Pro",
    price: 109999,
    category: "Electronics",
    brand: "Apple",
    stock: 7,
    rating: 4.9,
    tags: ["mobile", "apple", "pro"]
};
const task14 = [newproduct, ...products];
console.log(task14);

//Task15
const task15 = [...products, newproduct];
console.log(task15);