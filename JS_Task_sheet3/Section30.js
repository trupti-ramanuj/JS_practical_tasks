async function request(url, options = {}, retries = 3) {
    const timeout = options.timeout || 8000;
    const headers = { ...(options.headers || {}) };
    const token = options.token;
    const body = options.body;

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    let requestBody = body;
    if (body && typeof body === 'object' && !(body instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
        requestBody = JSON.stringify(body);
    }

    for (let attempt = 0; attempt <= retries; attempt++) {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeout);

        try {
            const response = await fetch(url, {
                ...options,
                headers,
                body: requestBody,
                signal: controller.signal
            });

            if (response.ok) {
                return await response.json();
            }

            if (response.status === 429 && attempt < retries) {
                const waitTime = Number(response.headers.get('Retry-After')) || (attempt + 1) * 1000;
                await new Promise(resolve => setTimeout(resolve, waitTime));
                continue;
            }

            throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
        } catch (error) {
            if (error.name === 'AbortError') {
                throw new Error(`Request timed out after ${timeout}ms`);
            }

            if (attempt < retries && error.message.includes('429')) {
                await new Promise(resolve => setTimeout(resolve, (attempt + 1) * 1000));
                continue;
            }

            throw error;
        } finally {
            clearTimeout(timer);
        }
    }
}

async function task80() {
    const stats = { successfulRequests: 0, failedRequests: 0 };

    const trackedClient = async (url, options) => {
        try {
            const res = await request(url, options);
            stats.successfulRequests++;
            return res;
        } catch (err) {
            stats.failedRequests++;
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

    const productResponse = await trackedClient('https://dummyjson.com/products', { method: 'GET', token });
    const rawProducts = productResponse.products;

    const total = rawProducts.length;
    let available = 0;
    let unavailable = 0;
    let totalPrice = 0;

    for (const product of rawProducts) {
        if ((product.stock || 0) > 0) {
            available++;
        } else {
            unavailable++;
        }
        totalPrice += product.price;
    }

    const averagePrice = total ? Number((totalPrice / total).toFixed(2)) : 0;

    let hp = rawProducts[0];
    let lp = rawProducts[0];

    for (const product of rawProducts) {
        if (product.price > hp.price) hp = product;
        if (product.price < lp.price) lp = product;
    }

    const final = {
        authenticatedUser,
        products: {
            total,
            available,
            unavailable,
            averagePrice,
            highestPriced: { id: hp?.id, title: hp?.title, price: hp?.price },
            lowestPriced: { id: lp?.id, title: lp?.title, price: lp?.price }
        },
        apiStatistics: stats
    };

    console.log(JSON.stringify(final, null, 2));
}

task80();