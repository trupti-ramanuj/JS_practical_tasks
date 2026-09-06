
const temperatures = [0, 15, 30, 5, -10, 25];

// 1. Create a new array containing Fahrenheit temperatures.


// 2. Use the formula:

// F = (C × 9/5) + 32
const fahrenheit = temperatures.map(c => (c * 9 / 5) + 32);
console.log(fahrenheit);

// 3. Create another array containing only temperatures above 20°C.

const above = temperatures.filter(c => c > 20);
console.log(above);

// 4. Find the highest Celsius temperature.
const highestC = Math.max(...temperatures);
console.log(highestC);

// 5. Find the average Celsius temperature.
const avgC = temperatures.reduce((s, c) => s + c, 0) / temperatures.length;
console.log(avgC);