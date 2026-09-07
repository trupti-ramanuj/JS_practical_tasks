const countries = [
    { name: 'USA', population: 331000000, area: 9833517 },
    { name: 'China', population: 1444216107, area: 9596961 },
    { name: 'India', population: 1393409038, area: 3287263 },
];

// 1 & 2. Create name  density array
const result = countries.map(country => ({
    name: country.name,
    density: Number(
        (country.population / country.area).toFixed(2)
    )
}));

console.log(result);

// 3. Highest density
const highestDensity = result.reduce((highest, country) =>
    country.density > highest.density ? country : highest
);
console.log(highestDensity);

// 4. Lowest density
const lowestDensity = result.reduce((lowest, country) =>
    country.density < lowest.density ? country : lowest
);

console.log(lowestDensity);

// 5. Sum of densities
const totalDensity = result.reduce(
    (sum, country) => sum + country.density,
    0
);


console.log(totalDensity);
