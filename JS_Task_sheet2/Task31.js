const orders = [
    { id: 1, amount: 1000, date: '2025-01-10' },
    { id: 2, amount: 1500, date: '2025-01-25' },
    { id: 3, amount: 900, date: '2025-02-11' },
    { id: 4, amount: 2000, date: '2025-02-20' },
    { id: 5, amount: 500, date: '2025-03-01' },
];

//1 January
const january = orders.filter(order =>
    order.date.startsWith('2025-01')
);
console.log(january);

//2 February
const february = orders.filter(order =>
    order.date.startsWith('2025-02')
);
console.log(february);

//3 Group by month

const groupedByMonth = orders.reduce((acc, order) => {
    const month = order.date.slice(0, 7);

    if (!acc[month]) {
        acc[month] = [];
    }

    acc[month].push(order);

    return acc;
}, {});
console.log(groupedByMonth);

//4 Calculate total revenue for every month.

const monthlyStats = Object.entries(groupedByMonth).map(
    ([month, monthOrders]) => {

        const totalRevenue = monthOrders.reduce(
            (sum, order) => sum + order.amount,
            0
        );

        return {
            month,
            totalRevenue,
            averageOrder: totalRevenue / monthOrders.length
        };
    }
);
console.log(monthlyStats);

// Highest revenue month
const highestRevenueMonth = monthlyStats.reduce(
    (highest, current) =>
        current.totalRevenue > highest.totalRevenue
            ? current
            : highest
);


console.log(highestRevenueMonth);
