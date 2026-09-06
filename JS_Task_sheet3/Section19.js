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

async function task55() {
    const loginRes = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'emilys', password: 'emilyspass' })
    });
    const data = await loginRes.json();
    storage.setItem('authToken', data.accessToken || data.token);
    const token = storage.getItem('authToken');
    const meRes = await fetch('https://dummyjson.com/auth/me', {
        headers: { Authorization: `Bearer ${token}` }
    });
    console.log(' Fetch with stored token status:', meRes.status);
    storage.removeItem('authToken');
    console.log('Token exists after remove:', Boolean(storage.getItem('authToken')));
}
task55();

async function task56() {
    const login = async () => {
        const res = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: 'emilys', password: 'emilyspass' })
        });
        const d = await res.json();
        storage.setItem('user_token', d.accessToken || d.token);
    };
    const getToken = () => storage.getItem('user_token');
    const logout = () => storage.removeItem('user_token');
    const getCurrentUser = async () => {
        const token = getToken();
        if (!token) throw new Error('Missing token. User is unauthenticated.');
        const res = await fetch('https://dummyjson.com/auth/me', {
            headers: { Authorization: `Bearer ${token}` }
        });
        return res.json();
    };

    await login();
    const user = await getCurrentUser();
    console.log(' Retreived authenticated user:', user.username);
    logout();
}
task56();
