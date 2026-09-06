
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

//task21

const task21 = { ...products.find(p => p.id === 1), price: 89999 };
console.log(task21);

//task22

const task22 = { ...products.find(p => p.id === 2), stock: 50, rating: 4.9 };
console.log(task22);

//task23

const task23 = products.map(p => ({ ...p, available: p.stock > 0 }));
console.log(task23);


//task24

const task24 = products.map(p => ({
    ...p,
    pricing: {
        originalPrice: p.price,
        finalPrice: p.price
    }
}));
console.log(task24);

//task25
const { tags: _tags, ...task25 } = products.find(p => p.id === 6);
console.log(task25);