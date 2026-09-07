const apiData = [
    { user_id: 1, first_name: 'John', last_name: 'Doe', status: 'active' },
    { user_id: 2, first_name: 'Jane', last_name: 'Smith', status: 'inactive' },
    { user_id: 3, first_name: 'Bob', last_name: 'Brown', status: 'active' },
];

// 1. Transform the data
const users = apiData.map(user => ({
    id: user.user_id,
    fullName: `${user.first_name} ${user.last_name}`,
    isActive: user.status === 'active'
}));

// 2. Get only active users
const activeUsers = users.filter(user => user.isActive);

console.log(users);
console.log(activeUsers);
