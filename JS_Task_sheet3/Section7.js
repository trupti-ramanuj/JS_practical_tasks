async function task22() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: 1, title: 'Updated Post Title', body: 'Updated post body', userId: 1 })
        });
        if (!res.ok) throw new Error(`PUT Error: ${res.status}`);
        const updated = await res.json();
        console.log(updated);
    } catch (err) {
        console.error(err.message);
    }
}
task22();

async function task23() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/5', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: 5, name: 'Updated User', username: 'updateduser', email: 'updated@example.com' })
    });
    const data = await res.json();
    const simplified = { id: data.id, name: data.name, username: data.username, email: data.email };
    console.log(simplified);
}
task23();