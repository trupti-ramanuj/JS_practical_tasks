
async function task37() {
    const userId = 1;
    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await userRes.json();
    const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    const posts = await postsRes.json();
    const firstPost = posts[0];
    const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${firstPost.id}`);
    const comments = await commentsRes.json();
    console.log({ userName: user.name, postTitle: firstPost.title, commentCount: comments.length });
}
task37();

async function task38() {
    const userId = 2;
    try {
        const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        let user = await userRes.json();
        const todosRes = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        const todos = await todosRes.json();
        const hasCompleted = todos.some(t => t.completed);
        if (hasCompleted) {
            const refetch = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            user = await refetch.json();
        }
        console.log({ userId: user.id, name: user.name, totalTodos: todos.length });
    } catch (err) {
        console.error('Task 38 Error:', err.message);
    }
}
task38();