async function task51() {
    const loginUrl = 'https://dummyjson.com/auth/login';

    const loginData = { username: 'emilys', password: 'emilyspass' };
    const res = await fetch(loginUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
    });
    if (!res.ok) throw new Error(`Login failed: ${res.status}`);


    const data = await res.json();
    const token = data.accessToken || data.token;
    console.log(' Logged in user:', data.username, '| Token extracted (masked):', Boolean(token));
}
task51();

async function task52() {
    const loginRes = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'emilys', password: 'emilyspass' })
    });
    if (!loginRes.ok) throw new Error('Login failed');

    const { accessToken, token } = await loginRes.json();

    const authToken = accessToken || token;

    const profileRes = await fetch('https://dummyjson.com/auth/me', {
        headers: { Authorization: `Bearer ${authToken}` }
    });

    if (!profileRes.ok) throw new Error('Auth fetch failed');

    const user = await profileRes.json();

    const { id, username, email, firstName, lastName, gender } = user;

    console.log('User profile:', { id, username, email, firstName, lastName, gender });
}
task52()

async function task53() {
    async function login() {
        const res = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: 'emilys', password: 'emilyspass' })
        });

        const data = await res.json();

        return data.accessToken || data.token;
    }

    async function getCurrentUser(token) {
        const res = await fetch('https://dummyjson.com/auth/me', {
            headers: { Authorization: `Bearer ${token}` }
        });
        return res.json();
    }

    async function getUserDashboard() {
        const token = await login();
        const user = await getCurrentUser(token);
        return {
            id: user.id,
            username: user.username,
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            image: user.image
        };
    }

    const dashboard = await getUserDashboard();
    console.log('Dashboard summary:', dashboard);
}
task53();

async function task54() {
    const loginRes = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'emilys', password: 'emilyspass' })
    });
    const { accessToken, token } = await loginRes.json();
    const productsRes = await fetch('https://dummyjson.com/auth/products', {
        headers: { Authorization: `Bearer ${accessToken || token}` }
    });
    if (!productsRes.ok) throw new Error('Unauthorized');
    const data = await productsRes.json();
    const simplified = data.products.map(({ id, title, price }) => ({ id, title, price }));
    console.log('Authenticated products count:', simplified.length);

}
task54();
