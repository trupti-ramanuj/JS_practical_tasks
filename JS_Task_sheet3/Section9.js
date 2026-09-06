async function task26() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'DELETE' });
    if (res.ok) {
        console.log(` ${res.status}. Post successfully deleted.`);
    }
}
task26()

async function task27() {
    const productIds = [1, 2, 3];
    try {
        const results = await Promise.all(
            productIds.map(id => fetch(`https://fakestoreapi.com/products/${id}`, { method: 'DELETE' }))
        );
        results.forEach((res, i) => console.log(` ${productIds[i]} Delete Status:`, res.status));
    } catch (err) {
        console.error(err.message);
    }
}
task27()