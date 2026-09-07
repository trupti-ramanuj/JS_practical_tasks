const cartItems = [
    { productId: 1, name: 'Phone', quantity: 1 },
    { productId: 2, name: 'Mouse', quantity: 2 },
    { productId: 1, name: 'Phone', quantity: 3 },
    { productId: 3, name: 'Keyboard', quantity: 1 },
    { productId: 2, name: 'Mouse', quantity: 1 },
];

const mergedCart = Object.values(
    cartItems.reduce((acc, item) => {

        if (acc[item.productId]) {
            acc[item.productId].quantity += item.quantity;
        } else {
            acc[item.productId] = { ...item };
        }

        return acc;
    }, {})
);

console.log(mergedCart);


const highestQty = mergedCart.reduce((max, i) => i.quantity > max.quantity ? i : max);

console.log(highestQty);
