function task1() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    return fetch(url)
        .then(res => {
            if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
            return res.json();
        })
        .then(post => {
            console.log(post);

            console.log(post.title);

            console.log(post.body);

            console.log(post.userId);
        })
        .catch(err => console.error('Error:', err.message));
}
task1();


async function task2() {
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        const user = await res.json();

        console.log("Task2");

        console.log(user.name);

        console.log(user.username);

        console.log(user.email);

        console.log(user.address?.city);

        console.log(user.company?.name);
    } catch (err) {
        console.error('Error:', err.message);
    }
}
task2();
async function task3() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        const posts = await res.json();

        console.log("Task3");

        console.log(posts.length);

        console.log(posts[0]);

        console.log(posts[posts.length - 1]);

        console.log(posts.slice(0, 5).map(p => p.title));

        console.log(posts.slice(-5).map(p => p.title));
    } catch (err) {
        console.error('Error:', err.message);
    }
}
task3();

async function task4() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    try {
        const res = await fetch(url);
        const users = await res.json();
        const ui = users.find(u => u.id === 5);
        const us = users.find(u => u.username.startsWith('S'));
        const newArr = users.map(({ id, name, email }) => ({ id, name, email }));

        console.log("Task4");

        console.log(ui?.name, us?.username);

        console.log(newArr.length);
    } catch (err) {
        console.error('Error:', err.message);
    }
}
task4();

async function task5() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    try {
        const res = await fetch(url);
        const todos = await res.json();
        const completed = todos.filter(t => t.completed);
        const pending = todos.filter(t => !t.completed);

        console.log("task5");

        console.log(completed.length);

        console.log(pending.length);

        console.log(completed[0]);

        console.log(pending.slice(0, 3).map(t => t.title));

        const newArr = todos.map(({ id, title, completed }) => ({ id, title, completed }));
        console.log(newArr.length);
    } catch (err) {
        console.error('Error:', err.message);
    }
}

task5();