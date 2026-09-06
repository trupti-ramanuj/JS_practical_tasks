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

async function task77() {
    const userId = 3;
    const [user, posts, todos] = await Promise.all([
        apiClient.get(`https://jsonplaceholder.typicode.com/users/${userId}`),
        apiClient.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
        apiClient.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    ]);

    const completed = todos.filter(t => t.completed).length;
    const dashboard = {
        user: {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            city: user.address?.city
        },
        posts: {
            total: posts.length,
            firstPost: posts[0],
            latestPost: posts[posts.length - 1]
        },
        todos: {
            total: todos.length,
            completed,
            pending: todos.length - completed,
            completionPercentage: `${((completed / todos.length) * 100).toFixed(2)}%`
        }
    };
    console.log(dashboard.user.name, dashboard.todos);
}

task77();