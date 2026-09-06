console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

Promise.resolve().then(() => {
    console.log('C');
});

console.log('D');



// 1. Predict the exact output order.
// A
// D
// C
// B

// 2. Explain why the output occurs in that order.
// Reason:
// Synchronous stack (A, D) runs first.
// 3. Identify which callback runs first and why.
//  Microtasks Promise.then  run immediately after synchronous execution.
// Macrotasks setTimeout  run on the subsequent event loop cycle.