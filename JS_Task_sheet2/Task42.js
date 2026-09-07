const menu = [
    {
        id: 1,
        title: 'Dashboard',
        children: []
    },
    {
        id: 2,
        title: 'Settings',
        children: [
            {
                id: 3,
                title: 'Profile',
                children: []
            },
            {
                id: 4,
                title: 'Security',
                children: [
                    {
                        id: 5,
                        title: 'Password',
                        children: []
                    }
                ]
            }
        ]
    }
];


// 1. Find menu item by ID
function findMenuItem(items, id) {
    for (const item of items) {

        if (item.id === id) {
            return item;
        }

        const found = findMenuItem(item.children, id);

        if (found) {
            return found;
        }
    }

    return null;
}


// 2. Find item ID 5
const item5 = findMenuItem(menu, 5);


console.log(item5);


// 3. Find complete path
function findPath(items, id, path = []) {
    for (const item of items) {

        const currentPath = [
            ...path,
            item.title
        ];

        if (item.id === id) {
            return currentPath;
        }

        const result = findPath(
            item.children,
            id,
            currentPath
        );

        if (result) {
            return result;
        }
    }

    return null;
}

const path = findPath(menu, 5);


console.log(path.join(" → "));


// 4. Count total menu items
function countItems(items) {
    let count = 0;

    for (const item of items) {
        count++;

        count += countItems(item.children);
    }

    return count;
}


console.log(countItems(menu));


// 5. Find maximum nesting level
function getMaxDepth(items, level = 1) {
    let maxDepth = level;

    for (const item of items) {

        if (item.children.length > 0) {
            const depth = getMaxDepth(
                item.children,
                level + 1
            );

            maxDepth = Math.max(
                maxDepth,
                depth
            );
        }
    }

    return maxDepth;
}


console.log(getMaxDepth(menu));
