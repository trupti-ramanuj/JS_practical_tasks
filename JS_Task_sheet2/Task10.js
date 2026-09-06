const products = [
    { id: 1, title: 'Women Shirt', category: 'clothing', price: 30.50 },
    { id: 2, title: 'Men Trousers', category: 'clothing', price: 45.75 },
    { id: 3, title: 'Women Dress', category: 'clothing', price: 60.20 },
    { id: 4, title: 'Laptop', category: 'electronics', price: 75.99 },
    { id: 5, title: 'Headphones', category: 'electronics', price: 55.00 },
];

const disc = products
    .filter(p => p.price > 40)
    .map(p => ({
        title: p.title,
        dicountedPrice: (p.price * 0.9).toFixed(2)
    }));
console.log(disc);