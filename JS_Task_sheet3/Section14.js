async function task43() {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10); // artificially low to trigger
    try {
        await fetch('https://jsonplaceholder.typicode.com/users', { signal: controller.signal });
    } catch (err) {
        if (err.name === 'AbortError') console.log(' Request aborted due to timeout.');
        else console.error('Error:', err.message);
    } finally {
        clearTimeout(timer);
    }
}
task43()

async function task44() {
    async function fetchWithTimeout(url, timeoutMs) {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeoutMs);
        try {
            const res = await fetch(url, { signal: controller.signal });
            if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
            return await res.json();
        } catch (err) {
            if (err.name === 'AbortError') throw new Error(`Request timed out after ${timeoutMs}ms`);
            throw err;
        } finally {
            clearTimeout(timer);
        }
    }
    try {
        const res = await fetchWithTimeout('https://jsonplaceholder.typicode.com/users/1', 5000);
        console.log('User fetched successfully:', res.name);
    } catch (err) {
        console.error(' Error:', err.message);
    }
}
task44();