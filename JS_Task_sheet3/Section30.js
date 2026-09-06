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

async function task80() {
    let stats = { successfulRequests: 0, failedRequests: 0 };

    const trackedClient = async (url, options) => {
        try {
            const res = await request(url, options);
            stats = { ...stats, successfulRequests: stats.successfulRequests + 1 };
            return res;
        } catch (err) {
            stats = { ...stats, failedRequests: stats.failedRequests + 1 };
            throw err;
        }
    };

    const authPayload = { username: 'emilys', password: 'emilyspass' };
    const loginRes = await trackedClient('https://dummyjson.com/auth/login', { method: 'POST', body: authPayload });
    const token = loginRes.accessToken || loginRes.token;

    const rawUser = await trackedClient('https://dummyjson.com/auth/me', { method: 'GET', token });
    const authenticatedUser = {
        id: rawUser.id,
        username: rawUser.username,
        name: `${rawUser.firstName} ${rawUser.lastName}`,
        email: rawUser.email
    };

    const { products: rawProducts } = await trackedClient('https://dummyjson.com/products', { method: 'GET', token });

    const total = rawProducts.length;
    const available = rawProducts.filter(p => (p.stock || 0) > 0).length;
    const unavailable = rawProducts.filter(p => (p.stock || 0) <= 0).length;

    const totalPrice = rawProducts.reduce((sum, p) => sum + p.price, 0);
    const averagePrice = total ? Number((totalPrice / total).toFixed(2)) : 0;

    const sortedProducts = [...rawProducts].sort((a, b) => b.price - a.price);
    const [highestPriced] = sortedProducts;
    const lowestPriced = sortedProducts[sortedProducts.length - 1];

    const finalDashboard = {
        authenticatedUser,
        products: {
            total,
            available,
            unavailable,
            averagePrice,
            highestPriced: { id: highestPriced?.id, title: highestPriced?.title, price: highestPriced?.price },
            lowestPriced: { id: lowestPriced?.id, title: lowestPriced?.title, price: lowestPriced?.price }
        },
        apiStatistics: stats
    };

    console.log(JSON.stringify(finalDashboard, null, 2));
}

task80();