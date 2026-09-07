// Create a function:

//     fetchUser(id)



// 1. Fetch a user from:
//    https://jsonplaceholder.typicode.com/users/{id}
// 2. Use async/await.
// 3. Handle HTTP errors.
// 4. Handle network errors.
// 5. Return the user data on success.
// 6. Return a meaningful error on failure.



async function fetchUser(id) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );


        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const user = await response.json();

        return user;
    } catch (error) {

        if (error instanceof TypeError) {
            throw new Error("Network error: unable to fetch user.");
        }
        throw new Error(`Failed to fetch user: ${error.message}`);
    }
}

// 7. Test with an existing user id.
async function test() {
    try {
        const user = await fetchUser(1);
        console.log("User:", user);
    } catch (error) {
        console.error(error.message);
    }
}

test();

// 8. Test with an invalid user id.
async function testInvalidUser() {
    try {
        const user = await fetchUser(999);
        console.log("User:", user);
    } catch (error) {
        console.error(error.message);
    }
}

testInvalidUser();
