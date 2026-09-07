const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' },
    { id: 7, name: 'Item 7' },
    { id: 8, name: 'Item 8' },
    { id: 9, name: 'Item 9' },
    { id: 10, name: 'Item 10' },
];

function paginate(items, page, limit) {

    if (limit <= 0) {
        return {
            data: [],
            currentPage: 1,
            totalItems: items.length,
            totalPages: 0,
            hasNextPage: false,
            hasPreviousPage: false
        };
    }

    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / limit);


    if (page < 1 || page > totalPages) {
        return {
            data: [],
            currentPage: page,
            totalItems,
            totalPages,
            hasNextPage: false,
            hasPreviousPage: false
        };
    }

    const startIndex = (page - 1) * limit;
    const data = items.slice(startIndex, startIndex + limit);

    return {
        data,
        currentPage: page,
        totalItems,
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1
    };
}
console.log(paginate(items, 2, 3));
