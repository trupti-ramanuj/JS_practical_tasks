





// 5. Find the user with the most posts.
// 6. Find users who have no posts.
// 7. Add the user's name to every post.

const USERS = "https://jsonplaceholder.typicode.com/users";
const POSTS = "https://jsonplaceholder.typicode.com/posts";

async function main() {
    // 1. Fetch users.
    const usersResponse = await fetch(USERS);
    const users = await usersResponse.json();

    console.log("Users:", users);

    // 2. Fetch posts.
    const postsResponse = await fetch(POSTS);
    const posts = await postsResponse.json();

    console.log(posts);


    // 3. Fetch both APIs using Promise.all.
    const [usersData, postsData] = await Promise.all([
        fetch(USERS).then(res => res.json()),
        fetch(POSTS).then(res => res.json())
    ]);

    console.log(usersData);
    console.log(postsData);


    // 4. Find how many posts each user has

    const postCount = {};

    postsData.forEach(post => {
        postCount[post.userId] = (postCount[post.userId] || 0) + 1;
    });

    const usersWithPostCount = usersData.map(user => ({
        ...user,
        postCount: postCount[user.id] || 0
    }));

    console.log(usersWithPostCount);


    // 5. Find the user with the most posts

    const userWithMostPosts = usersWithPostCount.reduce(
        (max, c) =>
            c.postCount > max.postCount
                ? c
                : max
    );

    console.log(userWithMostPosts);


    // 6. Find users who have no posts

    const usersWithNoPosts = usersWithPostCount.filter(
        user => user.postCount === 0
    );

    console.log(usersWithNoPosts);


    // 7. Add the user's name to every post

    const puserName = postsData.map(post => {
        const user = usersData.find(user => user.id === post.userId);

        return {
            ...post,
            userName: user ? user.name : "Unknown"
        };
    });

    console.log(puserName);
}

main();
