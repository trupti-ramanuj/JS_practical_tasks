// const ids = [1, 2, 3];

// ids.forEach(async (id) => {
//     const response = await fetch(
//         `https://jsonplaceholder.typicode.com/users/${id}`
//     );

//     const user = await response.json();

//     console.log(user.name);
// });

// console.log('Finished');



// 1. Explain why "Finished" can appear before the user names.
//forEach() calls the async function for each ID, but
//  it doesn't wait for the returned Promises.

// Finished
// Ervin Howell
// Leanne Graham
// Clementine Bauch
// The exact order of the names can vary because network requests are asynchronous.

// 2. Rewrite the code so all requests finish before "Finished".
// const ids = [1, 2, 3];

// async function getUsers() {
//     for (const id of ids) {
//         const response = await fetch(
//             `https://jsonplaceholder.typicode.com/users/${id}`
//         );

//         const user = await response.json();

//         console.log(user.name);
//     }

//     console.log('Finished');
// }

// getUsers();

// 3. Create a version where requests run in parallel.
const ids = [1, 2, 3];

async function getUsers() {
    const promises = ids.map(async (id) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const user = await response.json();

        return user;
    });

    const users = await Promise.all(promises);

    users.forEach(user => {
        console.log(user.name);
    });

    console.log('Finished');
}

getUsers();
