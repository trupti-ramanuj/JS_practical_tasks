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
const task86 = [...products].sort((a, b) => b.rating - a.rating).slice(0, 3);
console.log(task86);

const task87 = products
    .filter(p => p.stock > 0)
    .sort((a, b) => b.price - a.price)
    .slice(0, 3)
    .map(({ name, price, stock }) => ({ name, price, stock }));
console.log(task87);

const task88 = products
    .filter(p => p.brand === "Apple" && p.price > 5000)
    .map(({ name, price, rating }) => ({ name, price, rating }));
console.log(task88);

const task89 = products.reduce((val, p) => {
    val[p.category] = (val[p.category] || 0) + p.price * p.stock;
    return val;
}, { Electronics: 0, Accessories: 0, Audio: 0 });
console.log(task89);

const task90 = {

    totalProducts: products.length,
    totalStock: products.reduce((sum, p) => sum + p.stock, 0),
    totalInventoryValueproducts: products.reduce((sum, p) => sum + p.price * p.stock, 0),
    averageRating: +(products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(2),
    mostExpensiveProduct: products.reduce((max, p) => (p.price > max.price ? p : max), products[0]),
    cheapestProduct: products.reduce((min, p) => (p.price < min.price ? p : min), products[0])
};
console.log(task90);

const task91 = products
    .filter(p => p.stock > 0 && p.rating >= 4.5 && p.price < 50000)
    .map(({ name, price, rating }) => ({ name, price, rating }));
console.log(task91);

const task92 = products.map(p => ({
    id: p.id,
    name: p.name,
    category: p.category,
    price: p.price,
    isAvailable: p.stock > 0,
    PriceLevel: p.price < 10000 ? "LOW" : p.price < 50000 ? "MEDIUM" : "HIGH"
}));
console.log(task92);







