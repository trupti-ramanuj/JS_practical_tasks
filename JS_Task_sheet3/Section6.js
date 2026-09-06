async function task19() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const postData = { title: 'Learning JS APIs', body: 'Practicing POST requests', userId: 1 };

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        });
        const created = await res.json();
        console.log(created, created.id);
    } catch (err) {
        console.error('Error:', err.message);
    }
}
task19();

async function task20() {
    async function createPost(postData) {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        });
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        return res.json();
    }
    const result = await createPost({ title: 'My New Post', body: 'This is a test post.', userId: 5 });
    console.log(result);
}
task20();

async function task21() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Original Title', body: 'Original body', userId: 2 })
    });
    const data = await res.json();
    const transformed = { id: data.id, title: data.title, userId: data.userId, createdBy: 'intern' };
    console.log(transformed);
}
task21()