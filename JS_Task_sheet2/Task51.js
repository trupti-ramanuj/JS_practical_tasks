// const numbers = [10, 20, 30];

// const total = numbers.reduce((sum, number) => {
//      sum + number;
// }, 0);

// console.log(total);



// 1. Predict the output.
// Output was NaN
//without an explicit return

// 2. Identify the issue.
// (sum, number) => {
//     sum + number;
// }
// does not return sum + number.

// With curly braces

// 3. Correct the reduce logic.
const numbers = [10, 20, 30];

const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(total);

// 4. Explain the role of the return value inside reduce.

//The return value from the callback becomes the accumulator  for the next iteration.