const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
    { name: 'David', age: 28 },
    { name: 'Emily', age: 35 },
    { name: 'Frank', age: 40 },
    { name: 'Grace', age: 27 },
];

// 1. Calculate the average age.
const avgAge = people.reduce((s, p) => s + p.age, 0) / people.length;
console.log(avgAge);

// 2. Find the oldest person.
const oldest = people.reduce((max, p) => p.age > max.age ? p : max);
console.log(oldest);

// 3. Find the youngest person.
const youngest = people.reduce((min, p) => p.age < min.age ? p : min);
console.log(youngest);

// 4. Find all people between age 25 and 35.
const be = people.filter(p => p.age >= 25 && p.age <= 35);
console.log(be);

// 5. Group people into:
//    20-29
//    30-39
//    40-49

const groups = people.reduce((acc, p) => {

    if (p.age >= 20 && p.age <= 29) acc['20-29'].push(p);

    else if (p.age >= 30 && p.age <= 39) acc['30-39'].push(p);

    else if (p.age >= 40 && p.age <= 49) acc['40-49'].push(p);

    return acc;

}, {
    '20-29': [],
    '30-39': [],
    '40-49': []
});
console.log(groups);

// 6. Find which age group has the most people.
const lgroup = Object.entries(groups).reduce((max, [grp, list]) => list.length > max.len ? { grp, len: list.length } : max, { grp: '', len: 0 }).grp;
console.log(lgroup);