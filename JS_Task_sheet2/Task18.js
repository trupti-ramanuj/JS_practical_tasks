const words = [
    'javascript',
    'react',
    'javascript',
    'html',
    'css',
    'react',
    'javascript',
    'html'
];

// 1. Count the frequency of every word.
const frequency = words.reduce((acc, w) => {
    acc[w] = (acc[w] || 0) + 1;
    return acc;
}, {});
console.log(frequency);

// 2. Find the most frequently used word.
const mostFrequent = Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])[0];

console.log(mostFrequent);

// 3. Find all words that appear more than once.
const repeated = Object.keys(frequency).filter(w => frequency[w] > 1);
console.log(repeated);

// 4. Sort words by frequency from highest to lowest.
const sortedf = Object.entries(frequency)
    .sort((a, b) => b[1] - a[1]);

console.log(sortedf);

// 5. Solve the frequency calculation using reduce.
const total = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});
console.log(total);