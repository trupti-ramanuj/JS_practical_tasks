const users = [
    { id: 1, name: 'John', role: 'admin' },
    { id: 2, name: 'Alice', role: 'editor' },
    { id: 3, name: 'Bob', role: 'viewer' },
];

const permissions = {
    admin: ['create', 'read', 'update', 'delete'],
    editor: ['read', 'update'],
    viewer: ['read'],
};

function canAccess(userId, permission) {
    const user = users.find(user => user.id === userId);

    if (!user) {
        return false;
    }

    const userPermissions = permissions[user.role] || [];

    return userPermissions.includes(permission);
}

console.log(canAccess(1, 'delete')); // true
console.log(canAccess(2, 'delete')); // false
console.log(canAccess(2, 'update')); // true
console.log(canAccess(3, 'read'));   // true
console.log(canAccess(3, 'update')); // false

const canUpdate = users.filter(user =>
    canAccess(user.id, 'update')
);

console.log(canUpdate);


const canDelete = users.filter(user =>
    canAccess(user.id, 'delete')
);

console.log(canDelete);


const onlyRead = users.filter(user => {
    const userPermissions = permissions[user.role] || [];

    return (
        userPermissions.length === 1 &&
        userPermissions.includes('read')
    );
});

console.log(onlyRead);
