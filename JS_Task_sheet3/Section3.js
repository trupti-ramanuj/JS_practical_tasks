async function task9() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    const first3 = users.slice(0, 3);
    const last3 = users.slice(-3);
    const skipFirst2 = users.slice(2);
    const skipLast2 = users.slice(0, -2);
    const idx2To6 = users.slice(2, 7);
    const [firstUser, ...remainingUsers] = users;
    console.log({
        first3Count: first3.length,
        last3Count: last3.length,
        skipFirst2Count: skipFirst2.length,
        skipLast2Count: skipLast2.length,
        idx2To6Count: idx2To6.length,
        firstUserName: firstUser?.name,
        remainingCount: remainingUsers.length
    });
}
task9()

async function task10() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    const first10 = posts.slice(0, 10).map(({ id, title }) => ({ id, title }));
    const user3Posts = posts.filter(p => p.userId === 3);
    const user3TitlesSorted = [...user3Posts.map(p => p.title)].sort((a, b) => a.localeCompare(b));
    console.log(user3TitlesSorted.slice(0, 2));
}
task10()

async function task11() {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();

    const first5 = products.slice(0, 5);
    console.log(first5);

    const last5 = products.slice(-5);
    console.log(last5);

    const filteredSorted = products
        .filter(p => p.price > 50)
        .map(({ id, title, price }) => ({ id, title, price }))
        .sort((a, b) => b.price - a.price);
    console.log(filteredSorted.length, filteredSorted[0]);
}
task11()

async function task12() {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
    const transformed = products.map(p => ({
        productName: p.title,
        productPrice: p.price,
        productCategory: p.category,
        productRating: p.rating
    }));
    console.log(transformed[0]);
}
task12()