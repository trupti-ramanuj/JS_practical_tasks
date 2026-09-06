async function task13() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await res.json();
    const { name, username, email, address: { city } = {}, company: { name: companyName } = {} } = user;
    console.log('Task 13 Destructured:', { name, username, email, city, companyName });
}
task13()

async function task14() {
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    const [firstResult] = data.results;
    const {
        name: { first: firstName, last: lastName },
        email,
        phone,
        location: { country, city }
    } = firstResult;
    const simplified = { firstName, lastName, email, phone, country, city };
    console.log(simplified);
}
task14()

async function task15() {
    const res = await fetch('https://fakestoreapi.com/products/1');
    const product = await res.json();
    const { id, title: name, price, category, rating, rating: { rate, count } } = product;
    const simplified = { id, name, price, category, rating };
    console.log(simplified, 'Rate:', rate, 'Count:', count);
}
task15()
