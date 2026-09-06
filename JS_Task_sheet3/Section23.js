async function task67() {
    const [usersRes, postsRes] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users'),
        fetch('https://jsonplaceholder.typicode.com/posts')
    ]);

    const [users, posts] = await Promise.all([usersRes.json(), postsRes.json()]);

    const summary = users.map(user => ({
        userId: user.id,
        userName: user.name,
        totalPosts: posts.filter(post => post.userId === user.id).length
    }));
    console.log('User Posts Mapped Sample:', summary[0]);
}
task67();

async function task68() {

    const [usersRes, todosRes] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users'),
        fetch('https://jsonplaceholder.typicode.com/todos')
    ]);

    const [users, todos] = await Promise.all([usersRes.json(), todosRes.json()]);

    const result = users.map(user => {
        const userTodos = todos.filter(t => t.userId === user.id);
        return {
            id: user.id,
            name: user.name,
            totalTodos: userTodos.length,
            completedTodos: userTodos.filter(t => t.completed).length,
            pendingTodos: userTodos.filter(t => !t.completed).length
        };
    });
    console.log('User Todos Mapped Sample:', result[0]);
}
task68();

async function task69() {
    const [uRes, pRes, cRes] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users'),
        fetch('https://jsonplaceholder.typicode.com/posts'),
        fetch('https://jsonplaceholder.typicode.com/comments')
    ]);

    const [users, posts, comments] = await Promise.all([uRes.json(), pRes.json(), cRes.json()]);

    const summary = users.slice(0, 2).map(user => ({
        userId: user.id,
        userName: user.name,
        posts: posts
            .filter(p => p.userId === user.id)
            .slice(0, 2)
            .map(post => ({
                postId: post.id,
                title: post.title,
                commentCount: comments.filter(c => c.postId === post.id).length
            }))
    }));
    console.log('Complex Aggregated User Sample:', JSON.stringify(summary[0], null, 2));
}
task69();