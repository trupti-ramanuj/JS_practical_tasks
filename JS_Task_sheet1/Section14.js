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

const task81 = [...new Set(products.flatMap(p => p.tags))];
console.log(task81);

const task82 = products.flatMap(p => p.tags).reduce((a, t) => {
    a[t] = (a[t] || 0) + 1;
    return a;
}, {});
console.log(task82);

const task83 = products.filter(p => p.tags.includes("apple") && p.tags.includes("wireless"));
console.log(task83);

const task84 = products.filter(p => p.tags.includes("mobile") || p.tags.includes("tablet"));
console.log(task84);

const task85 = products.reduce((a, p) => {
    p.tags.forEach(tag => {
        if (!a[tag]) a[tag] = [];
        a[tag].push(p.name);
    });
    return a;
}, {});
console.log(task85);

