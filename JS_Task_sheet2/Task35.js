const products = [
    { id: 1, name: 'Phone', category: 'mobile', price: 70000 },
    { id: 2, name: 'Laptop', category: 'laptop', price: 100000 },
    { id: 3, name: 'Tablet', category: 'tablet', price: 40000 },
    { id: 4, name: 'Monitor', category: 'electronics', price: 25000 },
];

function searchProducts(products, {
    search = '',
    category,
    minPrice,
    maxPrice
} = {}) {

    return products.filter(product => {

        // 1. Search by name
        const matchesName =
            !search ||
            product.name.toLowerCase().includes(search.toLowerCase());


        // 2. Filter by category
        const matchesCategory =
            !category ||
            product.category.toLowerCase() === category.toLowerCase();

        // 3. Minimum price
        const matchesMinPrice =
            minPrice === undefined ||
            product.price >= minPrice;

        // 4. Maximum price
        const matchesMaxPrice =
            maxPrice === undefined ||
            product.price <= maxPrice;

        return (
            matchesName &&
            matchesCategory &&
            matchesMinPrice &&
            matchesMaxPrice
        );
    });
}

console.log(
    searchProducts(products, { category: 'laptop' })
);

console.log(
    searchProducts(products, { category: 'laptop' })
);

console.log(
    searchProducts(products, { minPrice: 50000 })
);

console.log(
    searchProducts(products, { maxPrice: 50000 })
);

console.log(
    searchProducts(products, {
        search: 't',
        category: 'tablet',
        minPrice: 30000,
        maxPrice: 50000
    })
);
console.log(
    searchProducts(products, {
        category: 'mobile',
        minPrice: 100000
    })
);
