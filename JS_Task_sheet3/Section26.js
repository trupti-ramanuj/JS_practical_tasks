async function task76() {
    try {
        const loginData = { username: 'emilys', password: 'emilyspass' };
        const authData = await apiClient.post('https://dummyjson.com/auth/login', loginData);
        const token = authData.accessToken || authData.token;

        const userProfile = await apiClient.get('https://dummyjson.com/auth/me', { token });
        const transformed = {
            id: userProfile.id,
            username: userProfile.username,
            fullName: `${userProfile.firstName} ${userProfile.lastName}`,
            email: userProfile.email,
            image: userProfile.image
        };
        console.log('Auth Flow User Result:', transformed);
    } catch (err) {
        console.error('Failure:', err.message);
    }
}
task76();