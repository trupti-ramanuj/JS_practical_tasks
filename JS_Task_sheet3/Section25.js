async function request(url, options = {}) {
    const { timeout = 8000, headers = {}, token, body, ...customOptions } = options;
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
        if (!res.ok) throw new Error(`HTTP Error ${res.status}: ${res.statusText}`);
        return await res.json();
    } catch (err) {
        if (err.name === 'AbortError') throw new Error(`Request timed out after ${timeout}ms`);
        throw err;
    } finally {
        clearTimeout(id);
    }
}

const apiClient = {
    get: (url, opts) => request(url, { ...opts, method: 'GET' }),
    post: (url, data, opts) => request(url, { ...opts, method: 'POST', body: data }),
    put: (url, data, opts) => request(url, { ...opts, method: 'PUT', body: data }),
    patch: (url, data, opts) => request(url, { ...opts, method: 'PATCH', body: data }),
    delete: (url, opts) => request(url, { ...opts, method: 'DELETE' })
};

async function task73to75() {
    const getTest = await apiClient.get('https://jsonplaceholder.typicode.com/posts/1');
    const postTest = await apiClient.post('https://jsonplaceholder.typicode.com/posts', { title: 'New' });
    console.log('Reusable Client OK:', { get: getTest.id, post: postTest.id });
}
task73to75()