// const user = null;

// console.log(user.profile.name);



// 1. Predict what happens.
// 2. Fix the code using optional chaining.
// const user = null;

// console.log(user?.profile?.name);

//If the value before ?. is null or undefined, stop and return undefined

// 3. Return "Guest" if the name does not exist.
const user = null;

const name = user?.profile?.name ?? "Guest";

console.log(name);
