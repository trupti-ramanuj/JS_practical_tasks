const orders = [
    {
        id: 1,
        items: [
            { name: 'Phone', price: 30000, quantity: 1 },
            { name: 'Cover', price: 500, quantity: 2 }
        ]
    },
    {
        id: 2,
        items: [
            { name: 'Laptop', price: 80000, quantity: 1 },
            { name: 'Mouse', price: 1200, quantity: 2 }
        ]
    }
];

// 1. Total of each order
const orderTotals = orders.map(order => {
    const total = order.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return {
        orderId: order.id,
        total
    };
});
console.log(orderTotals);
// 5. Flat array
const allItems = orders.flatMap(order => order.items);

// 2. Total revenue
const totalRevenue = allItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
);

console.log(totalRevenue);

// 3. Most expensive item
const mostExpensiveItem = allItems.reduce(
    (max, item) => item.price > max.price ? item : max
);
console.log(mostExpensiveItem);

// 4. Total quantity
const totalQuantity = allItems.reduce(
    (total, item) => total + item.quantity,
    0
);
console.log(totalQuantity);




console.log(allItems);
