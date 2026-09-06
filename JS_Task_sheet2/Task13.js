const orders = [
    { id: 1, customer: 'Amit', amount: 1200, status: 'delivered' },
    { id: 2, customer: 'Rahul', amount: 2500, status: 'pending' },
    { id: 3, customer: 'Amit', amount: 1800, status: 'delivered' },
    { id: 4, customer: 'Priya', amount: 900, status: 'cancelled' },
    { id: 5, customer: 'Rahul', amount: 3200, status: 'delivered' },
];

// 1. Find all delivered orders.
const delivered = orders.filter(o => o.status === 'delivered');
console.log(delivered);

// 2. Calculate total delivered order amount.
const total = delivered.reduce((s, o) => s + o.amount, 0);
console.log(total);

// 3. Count orders by status.
const statusC = orders.reduce((acc, o) => {
    acc[o.status] = (acc[o.status] || 0) + 1;
    return acc;
}, {});
console.log(statusC);

// 4. Calculate total order amount for each customer.
const customerT = orders.reduce((acc, o) => {
    acc[o.customer] = (acc[o.customer] || 0) + o.amount;
    return acc;
}, {});
console.log(customerT);

// 5. Find the customer with the highest total order amount.
const hc = Object.entries(customerT).reduce((h, c) => {
    return c[1] > h[1] ? c : h;
});
console.log(hc);

// 6. Find customers who have more than one order.
const customerO = orders.reduce((acc, o) => {
    acc[o.customer] = (acc[o.customer] || 0) + 1;
    return acc;
}, {});
const rc = Object.keys(customerO).filter(c => customerO[c] > 1);
console.log(rc);
