async function task59() {
    const product = { title: 'New Laptop', price: 89999, description: 'Developer laptop', category: 'electronics' };
    const res = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    });
    const data = await res.json();
    const result = { id: data.id, title: data.title, price: data.price, category: data.category };
    console.log('Created Product:', result);
}
task59();

async function task60() {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    const products = data.products;
    const simplified = products.map(({ id, title, price }) => ({ id, title, price }));
    const mostExpensive = products.reduce((max, p) => (p.price > max.price ? p : max), products[0]);
    const cheapest = products.reduce((min, p) => (p.price < min.price ? p : min), products[0]);
    console.log('Most Expensive:', mostExpensive.title, `$${mostExpensive.price}`);
    console.log('Cheapest:', cheapest.title, `$${cheapest.price}`);
}
task60();

async function task61() {
    const res = await fetch('https://dummyjson.com/products/1', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Updated Laptop', price: 99999 })
    });
    const data = await res.json();
    console.log('Updated Product:', { id: data.id, title: data.title, price: data.price });
}
task61();


async function task62() {
    const res = await fetch('https://dummyjson.com/products/1', { method: 'DELETE' });
    if (res.ok) {
        const data = await res.json();
        console.log('Deleted Product:', data.title, '| Status: Successfully removed.');
    }
}
task62();