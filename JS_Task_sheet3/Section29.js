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
    get: (url, opts = {}) => request(url, { ...opts, method: 'GET' }),
    post: (url, data, opts = {}) => request(url, { ...opts, method: 'POST', body: data }),
    put: (url, data, opts = {}) => request(url, { ...opts, method: 'PUT', body: data }),
    patch: (url, data, opts = {}) => request(url, { ...opts, method: 'PATCH', body: data }),
    delete: (url, opts = {}) => request(url, { ...opts, method: 'DELETE' })
};

const storage = {
    data: {},
    setItem(key, value) { this.data[key] = String(value); },
    getItem(key) { return Object.prototype.hasOwnProperty.call(this.data, key) ? this.data[key] : null; },
    removeItem(key) { delete this.data[key]; }
};

async function task79() {
    try {
        const loginData = { username: 'emilys', password: 'emilyspass' };
        const auth = await apiClient.post('https://dummyjson.com/auth/login', loginData);
        const token = auth.accessToken || auth.token;
        storage.setItem('authToken', token);

        const profile = await apiClient.get('https://dummyjson.com/auth/me', { token });
        const { products } = await apiClient.get('https://dummyjson.com/products');
        const transformed = (products || []).slice(0, 3).map(({ id, title, price }) => ({ id, title, price }));

        const newProd = await apiClient.post('https://dummyjson.com/products/add', { title: 'Auth Unit', price: 99 }, { token });
        const targetId = products?.[0]?.id ?? newProd.id ?? 1;
        const updateProd = await apiClient.patch(`https://dummyjson.com/products/${targetId}`, { price: 120 }, { token });
        const delProd = await apiClient.delete(`https://dummyjson.com/products/${targetId}`, { token });

        storage.removeItem('authToken');
        console.log('Flow Finished for:', profile.username, '| Products Processed:', transformed.length, '| Updated:', updateProd.price, '| Deleted:', Boolean(delProd));
    } catch (err) {
        console.error('Task failed:', err.message);
        process.exitCode = 1;
    }
}

task79();