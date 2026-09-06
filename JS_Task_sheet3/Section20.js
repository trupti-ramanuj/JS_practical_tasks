const storageData = new Map();
const storage = {
    setItem(key, value) {
        storageData.set(key, String(value));
    },
    getItem(key) {
        return storageData.get(key) ?? null;
    },
    removeItem(key) {
        storageData.delete(key);
    }
};

async function task57() {
    const loginData = { username: 'wrong-user', password: 'wrong-password' };
    try {
        const res = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)
        });
        if (!res.ok) throw new Error('Invalid credentials provided. Please try again.');
        await res.json();
    } catch (err) {
        console.log(' Error:', err.message);
    }
}
task57();


function task58() {
    const handleAuthState = (token, apiStatusCode) => {
        if (!token) return 'Redirect to Login / Block Action';
        if (apiStatusCode === 401 || apiStatusCode === 403) {
            storage.removeItem('token');
            return 'Session expired. Clear credentials and trigger re-auth.';
        }
        return 'Authorized. Proceed.';
    };
    console.log('Simulation States:', [
        handleAuthState(null, null),
        handleAuthState('valid.jwt.token', 200),
        handleAuthState('invalid.jwt.token', 401)
    ]);
}

task58();
