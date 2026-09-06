async function task63() {
    const res = await fetch('https://dummyjson.com/products');
    const { products } = await res.json();
    const result = products
        .filter(p => p.price > 100)
        .map(({ id, title, price }) => ({ id, title, price }))
        .sort((a, b) => b.price - a.price)
        .slice(0, 5);
    console.log('Top 5 > $100:', result);
}
task63();

async function task64() {
    const res = await fetch('https://dummyjson.com/products');
    const { products } = await res.json();
    const grouped = products.reduce((acc, product) => {
        const cat = product.category;
        return { ...acc, [cat]: [...(acc[cat] || []), product] };
    }, {});
    console.log('Grouped Categories:', Object.keys(grouped));
}
task64();

async function task65() {
    const res = await fetch('https://dummyjson.com/products');
    const { products } = await res.json();
    const totalProducts = products.length;
    const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
    const averagePrice = Number((totalPrice / totalProducts).toFixed(2));
    const highestPrice = Math.max(...products.map(p => p.price));
    const lowestPrice = Math.min(...products.map(p => p.price));
    console.log('Stats:', { totalProducts, totalPrice, averagePrice, highestPrice, lowestPrice });
}
task65();

async function task66() {
    const res = await fetch('https://dummyjson.com/products');
    const { products } = await res.json();
    const uniqueCategories = [...new Set(products.map(p => p.category))];
    const categoryCounts = products.reduce((acc, p) => ({ ...acc, [p.category]: (acc[p.category] || 0) + 1 }), {});
    console.log('Category Counts:', categoryCounts);
}

task66();