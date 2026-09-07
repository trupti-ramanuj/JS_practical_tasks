

let cart = [];

// 1. Add product
function addProduct(product) {
    // 8. Prevent duplicate product entries
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        console.log("Product already exists in cart.");
        return;
    }

    cart.push({
        ...product,
        quantity: 1
    });

    console.log(`${product.name} added to cart.`);
}


// 2. Remove product
function removeProduct(productId) {
    cart = cart.filter(product => product.id !== productId);

    console.log("Product removed.");
}


// 3. Increase quantity
function increaseQuantity(productId) {
    const product = cart.find(item => item.id === productId);

    if (product) {
        product.quantity++;
    }
}


// 4. Decrease quantity
function decreaseQuantity(productId) {
    const product = cart.find(item => item.id === productId);

    if (product) {
        // 5. Prevent quantity from going below 1

        if (product.quantity > 1) {
            product.quantity--;
        }
    }
}


// 6. Calculate total quantity
function getTotalQuantity() {
    return cart.reduce(
        (total, product) => total + product.quantity,
        0
    );
}


// 7. Calculate total price
function getTotalPrice() {
    return cart.reduce(
        (total, product) =>
            total + product.price * product.quantity,
        0
    );
}


// 9. Clear the cart
function clearCart() {
    cart = [];

    console.log("Cart cleared.");
}


function showCart() {

    console.log("Cart:", cart);
    console.log("Total Quantity:", getTotalQuantity());
    console.log("Total Price:", getTotalPrice().toFixed(2));
}
