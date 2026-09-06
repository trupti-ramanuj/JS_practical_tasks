async function task34() {
    const urls = [
        'https://jsonplaceholder.typicode.com/users',
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/todos'
    ];
    const responses = await Promise.all(urls.map(url => fetch(url)));
    const [users, posts, todos] = await Promise.all(responses.map(res => res.json()));
    console.log('Totals - Users:', users.length, 'Posts:', posts.length, 'Todos:', todos.length);
}
task34();

async function task35() {
    const userId = 3;
    const [userRes, postsRes, todosRes] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    ]);
    const [user, posts, todos] = await Promise.all([userRes.json(), postsRes.json(), todosRes.json()]);
    const dashboard = {
        user: { id: user.id, name: user.name, email: user.email, city: user.address?.city },
        statistics: {
            totalPosts: posts.length,
            totalTodos: todos.length,
            completedTodos: todos.filter(t => t.completed).length,
            pendingTodos: todos.filter(t => !t.completed).length
        }
    };
    console.log(dashboard);
}
task35();

async function task36() {
    const userIds = [1, 2, 3, 4, 5];
    const responses = await Promise.all(userIds.map(id => fetch(`https://jsonplaceholder.typicode.com/users/${id}`)));
    const users = await Promise.all(responses.map(res => res.json()));
    const formattedSorted = users
        .map(({ id, name, email }) => ({ id, name, email }))
        .sort((a, b) => a.name.localeCompare(b.name));
    console.log(formattedSorted.length, 'First:', formattedSorted[0].name);
}
