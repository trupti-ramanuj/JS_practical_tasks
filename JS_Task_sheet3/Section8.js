async function task24() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Only Title Updated' })
    });
    if (res.ok) {
        const data = await res.json();
        console.log(data);
    }
}
task24();

async function task25() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/3', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'newemail@example.com' })
    });
    const data = await res.json();
    const result = { id: data.id, name: data.name, email: data.email };
    console.log(result);
}
task25();