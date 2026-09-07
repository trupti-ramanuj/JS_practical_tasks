function createCounter() {

    // Private variable
    let count = 0;

    return {
        // 2. Increment
        increment() {
            count++;
        },

        // 3. Decrement
        decrement() {
            count--;
        },

        // 4. Get value
        getValue() {
            return count;
        },

        // 5. Reset
        reset() {
            count = 0;
        }
    };
}
