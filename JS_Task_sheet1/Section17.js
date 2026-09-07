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

const originalSnapshot = JSON.stringify(products);

const task97 = products.map(p => ({
    id: p.id,
    title: p.name,
    category: p.category,
    price: p.price,
    rating: p.rating,
    availability: p.stock > 0 ? "In Stock" : "Out of Stock"
}));
console.log(task97);

const task98 = products.filter(p => p.rating >= 4.7 && p.stock > 0 && p.price <= 80000)
    .sort((a, b) => b.rating - a.rating);
console.log(task98);

const task99 = products.filter(p => p.price < 30000 && p.stock > 0)
    .sort((a, b) => a.price - b.price)
    .map(({ name, price, category }) => ({ name, price, category }));
console.log(task99);

const task100 = {
    totalProducts: products.length,
    categories: [...new Set(products.map(p => p.category))],
    brands: [...new Set(products.map(p => p.brand))],
    totalStock: products.reduce((sum, p) => sum + p.stock, 0),
    totalInventoryValue: products.reduce((sum, p) => sum + p.price * p.stock, 0),
    averageRating: +(products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(2),
    highestRatedProduct: products.reduce((max, p) => (p.rating > max.rating ? p : max), products[0]),
    lowestPricedProduct: products.reduce((min, p) => (p.price < min.price ? p : min), products[0]),
    outOfStockProducts: products.filter(p => p.stock === 0),
    topProducts: [...products].sort((a, b) => b.rating - a.rating).slice(0, 3)
};
console.log(task100);



const finalSnapshot = JSON.stringify(products);
const wasOriginalMutated = originalSnapshot !== finalSnapshot;

console.log(wasOriginalMutated ? "FAIL " : "SUCCESS (Completely Unchanged)");