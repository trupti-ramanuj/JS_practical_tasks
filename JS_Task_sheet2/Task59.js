const values = [
    0,
    1,
    '',
    'hello',
    null,
    undefined,
    false,
    true,
    [],
    {},
    NaN
];



// 1. Separate the values into truthy and falsy values.

// Falsy values
// 0
// ''
// null
// undefined
// false
// NaN

//Truthy values
// 1
// 'hello'
// true
// []
// {}

// 2. Explain why an empty array is truthy.

console.log(Boolean([]));

//Even though the array contains no elements:

// []

// it is still an object.

// Objects are truthy in JavaScript, regardless of whether they contain any properties/elements.

// 3. Explain why an empty object is truthy.
//The same principle applies.

// {}

// is an object, and objects are truthy:
console.log(Boolean({}));

// 4. Explain why NaN is falsy.
//NaN means Not-a-Number.
console.log(typeof NaN);

// It is one of JavaScript's falsy values:

console.log(Boolean(NaN));

Number.isNaN(NaN); // true

// 5. Write a function that checks whether a value is actually empty without treating 0 as empty.
function isEmpty(value) {
    if (value === null || value === undefined) {
        return true;
    }

    if (typeof value === 'string') {
        return value.trim().length === 0;
    }

    if (Array.isArray(value)) {
        return value.length === 0;
    }

    if (typeof value === 'object') {
        return Object.keys(value).length === 0;
    }

    return false;
}
console.log(isEmpty(null));        // true
console.log(isEmpty(undefined));   // true
console.log(isEmpty(''));          // true
console.log(isEmpty('   '));       // true
console.log(isEmpty([]));          // true
console.log(isEmpty({}));          // true

console.log(isEmpty(0));           // false
console.log(isEmpty(false));       // false
console.log(isEmpty('hello'));     // false
console.log(isEmpty([1, 2]));      // false
console.log(isEmpty({ name: 'John' })); // false

// Falsy is a JavaScript language concept.
// Empty is something your application has to define.