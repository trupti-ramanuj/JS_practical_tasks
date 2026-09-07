const currentPermissions = ['read', 'write', 'delete'];
const newPermissions = ['read', 'update', 'delete'];

function comparePermissions(current, newPerms) {
    return {
        added: newPerms.filter(permission => !current.includes(permission)),

        removed: current.filter(permission => !newPerms.includes(permission)),

        unchanged: current.filter(permission => newPerms.includes(permission))
    };
}

const result = comparePermissions(currentPermissions, newPermissions);

console.log(result);
