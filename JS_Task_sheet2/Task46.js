const API_URL = "https://fakestoreapi.com/products";

async function main() {
    try {
        // 1. Fetch all products
        const res = await fetch(API_URL);


        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status}`);
        }

        const products = await res.json();


        // 2. Print the products

        console.log(products);


        // 3. Create an array containing product titles

        const pT = products.map(product => product.title);


        console.log(pT);


        // 4. Find a product by id
        const id = 5;

        const product = products.find(product => product.id === id);


        console.log(product);


        // 5. Find the index of a product by id
        const pI = products.findIndex(
            product => product.id === id
        );


        console.log(pI);


        // 6. Filter products with price greater than 50
        const expensive = products.filter(
            product => product.price > 50
        );


        console.log(expensive);


        // 7. Find the most expensive product
        const mostExpensive = products.reduce(
            (e, p) =>
                p.price > e.price
                    ? p
                    : e
        );


        console.log(mostExpensive);


        // 8. Calculate the total price
        const totalPrice = products.reduce(
            (sum, total) => sum + total.price,
            0
        );


        console.log(totalPrice.toFixed(2));


        // 9. Group products by category
        const category = products.reduce(
            (groups, product) => {
                if (!groups[product.category]) {
                    groups[product.category] = [];
                }

                groups[product.category].push(product);

                return groups;
            },
            {}
        );

        console.log(category);


    } catch (error) {

        // 10. Handle API errors
        console.error("Failed to fetch products:", error.message);

    }
}

main();
