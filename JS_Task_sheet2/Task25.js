const products = [
    { id: 1, name: 'Phone', category: 'Electronics', price: 30000 },
    { id: 2, name: 'Laptop', category: 'Electronics', price: 80000 },
    { id: 3, name: 'Shirt', category: 'Clothing', price: 1500 },
];

const cart = [
    { productId: 1, quantity: 2 },
    { productId: 3, quantity: 3 },
];

// 1, 2 & 5. Match products and calculate subtotal
const cartDetails = cart.map(cartItem => {
    const product = products.find(
        product => product.id === cartItem.productId
    );

    const subtotal = product.price * cartItem.quantity;

    return {
        productId: cartItem.productId,
        name: product.name,
        quantity: cartItem.quantity,
        price: product.price,
        subtotal
    };
});

console.log(cartDetails);

// 3. Total cart value
const totalCartValue = cartDetails.reduce(
    (total, item) => total + item.subtotal,
    0
);

console.log(totalCartValue);

// 4. Most expensive cart item
const mostExpensive = cartDetails.reduce(
    (max, item) =>
        item.subtotal > max.subtotal ? item : max
);

console.log(mostExpensive);
