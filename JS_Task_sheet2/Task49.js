
// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.map((number) => {
//     number * 2;
// });

// console.log(result);



// 1. Predict the output.
//[ undefined, undefined, undefined, undefined, undefined ]

// 2. Identify the problem.
//missing return 

// 3. Fix the code.
const numbers = [1, 2, 3, 4, 5];

const result = numbers.map((number) => {
    return number * 2;
});

console.log(result);

// 4. Explain why the original code behaves that way.

//(number) => {
//   number * 2;
// }

// 1 → undefined
// 2 → undefined
// 3 → undefined
// 4 → undefined
// 5 → undefined
//returns the expression automatically.