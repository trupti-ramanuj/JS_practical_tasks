for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100);
}



// 1. Predict the output.
//3
// 3
// 3

// 2. Explain why it happens.
//The important point is that var is function-scoped, not block-scoped

// 3. Fix the code using let.
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100);
}

// 4. Fix it without changing var.
for (var i = 0; i < 3; i++) {
    (function (currentI) {
        setTimeout(() => {
            console.log(currentI);
        }, 100);
    })(i);
}
