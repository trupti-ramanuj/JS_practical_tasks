const names = [
    '  john doe ',
    'JANE SMITH',
    'alice   johnson',
    '',
    '   bob brown'
];

const result = names
    .map(val => val.trim())
    .filter(val => val !== '')
    .map(val => val.replace(/\s+/g, ' '))
    .map(val =>
        val
            .toLowerCase()
            .split(' ')
            .map(word => word[0].toUpperCase() + word.slice(1))
            .join(' ')
    )
    .sort();

console.log(result);

console.log(names);


