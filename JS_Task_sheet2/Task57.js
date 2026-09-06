// const originalUser = {
//     name: 'John',
//     address: {
//         city: 'Ahmedabad'
//     }
// };

// const copiedUser = { ...originalUser };

// copiedUser.address.city = 'Surat';

// console.log(originalUser.address.city);


// 1. Predict the output.

//surat 

// 2. Explain why the original object changes.

//copiedUser.address.city = 'Surat';

// 3. Create a proper deep copy.
const originalUser = {
    name: 'John',
    address: {
        city: 'Ahmedabad'
    }
};

const copiedUser = structuredClone(originalUser);

copiedUser.address.city = 'Surat';

console.log(originalUser.address.city);

console.log(copiedUser.address === originalUser.address);

// 4. Test the copied object again.
console.log(copiedUser);

console.log(originalUser);

