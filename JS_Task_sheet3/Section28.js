async function request(url, options = {}, retries = 3) {
    const { timeout = 8000, headers = {}, token, body, ...customOptions } = options;

    for (let attempt = 0; attempt <= retries; attempt++) {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);

        const mergedHeaders = { ...headers };
        if (token) mergedHeaders['Authorization'] = `Bearer ${token}`;

        let formattedBody = body;
        if (body && !(body instanceof FormData) && typeof body === 'object') {
            mergedHeaders['Content-Type'] = 'application/json';
            formattedBody = JSON.stringify(body);
        }

        try {
            const res = await fetch(url, {
                ...customOptions,
                headers: mergedHeaders,
                body: formattedBody,
                signal: controller.signal
            });

            if (!res.ok) {
                if (res.status === 429 && attempt < retries) {
                    const retryAfter = Number(res.headers.get('Retry-After')) || (attempt + 1) * 1000;
                    await new Promise(resolve => setTimeout(resolve, retryAfter));
                    continue;
                }
                throw new Error(`HTTP Error ${res.status}: ${res.statusText}`);
            }

            return await res.json();
        } catch (err) {
            if (err.name === 'AbortError') throw new Error(`Request timed out after ${timeout}ms`);
            if (attempt < retries && err.message.includes('429')) {
                await new Promise(resolve => setTimeout(resolve, (attempt + 1) * 1000));
                continue;
            }
            throw err;
        } finally {
            clearTimeout(id);
        }
    }
}

const apiClient = {
    get: (url, opts) => request(url, { ...opts, method: 'GET' }),
    post: (url, data, opts) => request(url, { ...opts, method: 'POST', body: data }),
    put: (url, data, opts) => request(url, { ...opts, method: 'PUT', body: data }),
    patch: (url, data, opts) => request(url, { ...opts, method: 'PATCH', body: data }),
    delete: (url, opts) => request(url, { ...opts, method: 'DELETE' })
};

async function task78() {
    const { products } = await apiClient.get('https://dummyjson.com/products');
    const simplified = products.map(({ id, title, price, category }) => ({ id, title, price, category }));
    const filtered = simplified.filter(p => p.price > 50);
    const sorted = [...filtered].sort((a, b) => b.price - a.price);
    const item = simplified.find(p => p.id === 1);

    const created = await apiClient.post('https://dummyjson.com/products/add', { title: 'Flow Product', price: 40 });
    const updated = await apiClient.patch('https://dummyjson.com/products/1', { title: 'Flow Updated' });
    const deleted = await apiClient.delete('https://dummyjson.com/products/1');

    console.log('Complete CRUD Lifecycle Verified:', {
        found: item?.id,
        created: created.id,
        updated: updated.title,
        deleted: Boolean(deleted)
    });

    console.log('Sorted products (price > 50):', sorted.slice(0, 5));
}

task78();
