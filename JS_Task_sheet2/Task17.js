const numbers = [10, 20, 10, 30, 20, 40, 50, 30, 10];

// 1. Remove duplicate numbers.
const unique = [...new Set(numbers)];
console.log(unique);

// 2. Count how many times each number appears.
const counts = numbers.reduce((acc, n) => {
    acc[n] = (acc[n] || 0) + 1;
    return acc;
}, {});
console.log(counts);

// 3. Find the number that appears most frequently.
const mostFrequent = Number(Object.entries(counts).reduce((max, [n, c]) => c > max.c ? { n, c } : max, { n: 0, c: 0 }).n);
console.log(mostFrequent);

// 4. Find numbers that appear more than once.
const repeated = Object.keys(counts).filter(k => counts[k] > 1).map(Number);
console.log(repeated);

// 5. Sort the unique numbers in ascending order.
const sortedUnique = [...unique].sort((a, b) => a - b);
console.log(sortedUnique);