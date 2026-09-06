// const user = {
//     name: 'John',
//     age: 0
// };

// const age = user.age || 18;

// console.log(age);



// 1. Predict the output.
//18
// 2. Explain why the result may not be what the developer expects.

// problem is the ||

// JavaScript treats 0 as a falsy value.
//user.age || 18

//If user.age is truthy, use it; otherwise use 18
//user.age === 0
//The developer may expect 0

// 3. Correct the code so that age 0 remains valid.
const user = {
    name: 'John',
    age: 0
};

const age = user.age ?? 18;

console.log(age);
