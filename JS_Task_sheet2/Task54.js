async function getData() {
    const response = fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = response.json();

    console.log(data);
}

getData();



// 1. Identify the problems.

//problem 1: Missing await on fetch()

//problem 2: Missing await on .json()

// 2. Correct the code using async/await.
async function getData() {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1'
    );

    const data = await response.json();

    console.log(data);
}

getData();

// 3. Add error handling.
async function getData() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users/1'
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
}

getData();
