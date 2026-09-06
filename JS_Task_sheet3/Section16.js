async function task47() {
    const formData = new FormData();
    formData.append('name', 'John');
    formData.append('email', 'john@example.com');
    formData.append('age', '25');
    for (const [key, value] of formData.entries()) {
        console.log(` ${key} = ${value}`);
    }
    const res = await fetch('https://httpbin.org/post', { method: 'POST', body: formData });
    const json = await res.json();
    console.log(Object.keys(json.form));
}
task47();

async function task48() {
    const formData = new FormData();
    formData.append('username', 'janedoe');
    formData.append('email', 'jane@example.com');
    formData.append('phone', '1234567890');
    formData.append('country', 'Canada');

    const res = await fetch('https://httpbin.org/post', { method: 'POST', body: formData });
    const result = await res.json();
    console.log(result.headers['Content-Type']?.slice(0, 30));
}
task48();

function task49() {
    const formData = new FormData();
    formData.append('name', 'Alice');
    formData.append('email', 'alice@test.com');
    formData.append('password', 'SecretPassword123');
    formData.append('age', '30');
    formData.append('country', 'Germany');

    const required = ['name', 'email', 'password', 'age', 'country'];
    const isValid = required.every(field => formData.has(field) && formData.get(field) !== '');
    if (!isValid) throw new Error('Missing required form fields.');

    const formObj = Object.fromEntries(formData.entries());
    const { password, ...safeUser } = formObj;
    console.log(safeUser);
}
task49();