const cart = [
    { productId: 1, name: 'Phone', price: 30000, quantity: 1 },
    { productId: 2, name: 'Mouse', price: 1200, quantity: 2 },
    { productId: 3, name: 'Keyboard', price: 2500, quantity: 1 },
];

// 1. Calculate the subtotal of every cart item.
const totals = cart.map(i => ({ ...i, subtotal: i.price * i.quantity }));
console.log(totals);

// 2. Calculate the total cart amount.
const tc = totals.reduce((s, i) => s + i.subtotal, 0);
console.log(tc);

// 3. Calculate the total number of products in the cart.
const tpq = cart.reduce((s, i) => s + i.quantity, 0);
console.log(tpq);

// 4. Find the cart item with the highest subtotal.
const hs = totals.reduce((max, i) => i.subtotal > max.subtotal ? i : max);
console.log(hs);
// 5. Apply a 10% discount if the total is greater than 30000.
const discount = tc > 30000 ? tc * 0.10 : 0;
console.log(discount);

// 6. Calculate the final amount after discount.
const fa = tc - discount;
console.log(fa);