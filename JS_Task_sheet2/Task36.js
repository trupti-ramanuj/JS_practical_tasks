const products = [
    { id: 1, name: 'Phone', category: 'mobile', price: 70000 },
    { id: 2, name: 'Laptop', category: 'laptop', price: 100000 },
    { id: 3, name: 'Tablet', category: 'tablet', price: 40000 },
    { id: 4, name: 'Monitor', category: 'electronics', price: 25000 },
];

function searchProducts(products, {
    search = '',
    category,
    min,
    max
} = {}) {
    const searchText = search.trim().toLowerCase();

    return products.filter(product => {
        const matchesName =
            !searchText ||
            product.name.toLowerCase().includes(searchText);

        const matchesCategory =
            !category ||
            product.category.toLowerCase() === category.toLowerCase();

        const matchesMin =
            min === undefined ||
            product.price >= min;

        const matchesMax =
            max === undefined ||
            product.price <= max;

        return matchesName && matchesCategory && matchesMin && matchesMax;
    });
}

console.log(searchProducts(products, { max: 50000 }));
console.log(searchProducts(products, {
    search: 't',
    category: 'tablet',
    min: 30000,
    max: 50000
}));
console.log(searchProducts(products, {
    category: 'mobile',
    min: 100000
}));
