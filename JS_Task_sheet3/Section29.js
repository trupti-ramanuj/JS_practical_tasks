async function request(url, options = {}) {
    const response = await fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        },
        body: options.body ? JSON.stringify(options.body) : undefined
    });

    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }

    return response.json();
}

async function task79() {
    try {
        const login = await request('https://dummyjson.com/auth/login', {
            method: 'POST',
            body: { username: 'emilys', password: 'emilyspass' }
        });
        const token = login.accessToken || login.token;
        const authHeaders = { Authorization: `Bearer ${token}` };

        const user = await request('https://dummyjson.com/auth/me', { headers: authHeaders });
        const products = await request('https://dummyjson.com/products', { headers: authHeaders });
        const firstProduct = products.products[0];

        const created = await request('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: authHeaders,
            body: { title: 'Auth Unit', price: 99 }
        });
        const updated = await request(`https://dummyjson.com/products/${firstProduct.id}`, {
            method: 'PATCH',
            headers: authHeaders,
            body: { price: 120 }
        });
        const deleted = await request(`https://dummyjson.com/products/${firstProduct.id}`, {
            method: 'DELETE',
            headers: authHeaders
        });

        console.log(`User: ${user.username}`);

        console.log(`Products found: ${products.products.length}`);

        console.log(`Created: ${created.title}`);

        console.log(`Updated price: ${updated.price}`);

        console.log(`Deleted: ${Boolean(deleted)}`);
    } catch (error) {
        console.error('error:', error.message);
        process.exitCode = 1;
    }
}

task79();