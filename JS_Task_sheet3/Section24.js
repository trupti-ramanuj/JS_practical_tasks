async function task70() {
    const limit = 10;
    const skip = 0;
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    const data = await res.json();
    console.log('Metadata:', { total: data.total, skip: data.skip, limit: data.limit });
    const titles = data.products.map(p => p.title);
    console.log('Titles:', titles.slice(0, 3));
}
task70();

async function task71() {
    async function getProductsPage(page, limit) {
        const skip = (page - 1) * limit;
        const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
        const data = await res.json();
        return { products: data.products, total: data.total, page, limit };
    }
    const page1 = await getProductsPage(1, 5);
    const page2 = await getProductsPage(2, 5);
    console.log(` ${page1.products[0].title} | Page 2 First: ${page2.products[0].title}`);
}
task71();

async function task72() {
    async function fetchAllProducts() {
        let allProducts = [];
        const limit = 50;
        let skip = 0;
        let total = Infinity;

        while (skip < total) {

            const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
            const data = await res.json();
            total = data.total;
            allProducts = [...allProducts, ...data.products];
            skip += limit;
        }
        return allProducts;
    }
    const all = await fetchAllProducts();
    console.log(all.length);
}
task72();