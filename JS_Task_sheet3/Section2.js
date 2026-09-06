async function task6() {
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    try {
        const res = await fetch(url);

        console.log(res.status);

        console.log(res.ok);

        console.log(res.statusText);

        console.log(res.headers.get('content-type'));

        const user = await res.json();
        console.log(user.name);
    } catch (err) {
        console.error('Error:', err.message);
    }
}

task6();

async function task7() {
    const url = 'https://jsonplaceholder.typicode.com/users/9999';
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Custom Error: Resource not found (Status ${res.status})`);
        const data = await res.json();

        console.log("task7");
        console.log(data);

    } catch (err) {
        console.log(' Handled Gracefully:', err.message);
    }
}
task7();

async function task8() {
    const url = 'https://invalid-api-example.test/users';

    // HTTP Error: Server reachable, returns 4xx/5xx status (res.ok is false).
    // Network Error: Fetch promise rejects completely (DNS failure, offline, CORS blocked).

    try {
        await fetch(url);
    } catch (err) {
        console.log('Caught Network Error:', err.message);

    }
}
