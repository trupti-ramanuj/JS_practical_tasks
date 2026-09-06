async function task16() {

    const userId = 3;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    const posts = await res.json();
    console.log(posts.length);

    const titles = posts.map(p => p.title);
    console.log(titles);

    const ids = posts.map(p => p.id);
    console.log(ids);

    const simplified = posts.map(({ id, title }) => ({ id, title })).sort((a, b) => a.id - b.id);
    console.log(simplified[0]);
}
task16();

async function task17() {

    const userId = 2;

    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);

    const todos = await res.json();

    const completedTodos = todos.filter(t => t.completed).length;

    const pendingTodos = todos.filter(t => !t.completed).length;

    const totalTodos = todos.length;

    const completionPercentage = totalTodos ? (completedTodos / totalTodos) * 100 : 0;

    const summary = { userId, totalTodos, completedTodos, pendingTodos, completionPercentage: `${completionPercentage.toFixed(2)}%` };
    console.log(summary);
}
task17()

async function task18() {

    const postId = 15;

    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);

    const comments = await res.json();

    console.log(comments.length);

    const simplified = comments.map(({ name, email }) => ({ name, email }));

    const matched = comments.find(c => c.body.includes('dolor') || c.body.includes('non'));
    console.log(matched?.id);
}
task18();