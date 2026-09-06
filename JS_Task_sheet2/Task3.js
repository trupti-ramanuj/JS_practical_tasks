const numbers = [12, 5, 8, 21, 16, 3, 10, 7];

// 1. Find all even numbers.
const eno = numbers.filter(n => n % 2 === 0);
console.log(eno);

// 2. Find all odd numbers.
const ono = numbers.filter(n => n % 2 !== 0);
console.log(ono);

// 3. Find numbers greater than 10.
const greter = numbers.filter(n => n > 10);
console.log(greter);

// 4. Find the first number greater than 15.
const first = numbers.find(n => n > 15);
console.log(first);

// 5. Calculate the total of all numbers.
const total = numbers.reduce((sum, n) => sum + n, 0);
console.log(total);

// 6. Calculate the average number.
const average = total / numbers.length;
console.log(average);

// 7. Find the highest number.
const hno = Math.max(...numbers);
console.log(hno);

// 8. Find the lowest number.
const lno = Math.min(...numbers);
console.log(lno);