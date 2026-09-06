async function task45() {
    async function fetchWithRetry(url, retries = 3) {
        for (let i = 1; i <= retries; i++) {
            try {
                const res = await fetch(url);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return await res.json();
            } catch (err) {
                if (i === retries) throw err;
                await delay(500);
            }
        }
    }
    try {
        const data = await fetchWithRetry('https://jsonplaceholder.typicode.com/users/1', 2);
        console.log('Retry fetch success:', data.name);
    } catch (err) {
        console.error('Exhausted retries:', err.message);
    }
}
task45();

async function task46() {
    async function reusableFetch(url, { retries = 2, timeout = 3000 } = {}) {
        let lastError;
        for (let i = 0; i <= retries; i++) {
            const controller = new AbortController();
            const timer = setTimeout(() => controller.abort(), timeout);
            try {
                const res = await fetch(url, { signal: controller.signal });
                clearTimeout(timer);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return await res.json();
            } catch (err) {
                clearTimeout(timer);
                lastError = err;
                if (i < retries) await delay(300);
            }
        }
        throw lastError;
    }
    const user = await reusableFetch('https://jsonplaceholder.typicode.com/users/1');
    console.log('Reusable fetch success:', user.name);
}
task46();