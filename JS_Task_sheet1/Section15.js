const products = [
    {
        id: 1,
        name: "MacBook Air M4",
        price: 99999,
        category: "Electronics",
        brand: "Apple",
        stock: 12,
        rating: 4.8,
        tags: ["laptop", "apple", "premium"]
    },
    {
        id: 2,
        name: "iPhone 16",
        price: 79999,
        category: "Electronics",
        brand: "Apple",
        stock: 25,
        rating: 4.7,
        tags: ["mobile", "apple", "5g"]
    },
    {
        id: 3,
        name: "Galaxy S25",
        price: 74999,
        category: "Electronics",
        brand: "Samsung",
        stock: 18,
        rating: 4.6,
        tags: ["mobile", "samsung", "5g"]
    },
    {
        id: 4,
        name: "Mechanical Keyboard",
        price: 5499,
        category: "Accessories",
        brand: "Keychron",
        stock: 8,
        rating: 4.5,
        tags: ["keyboard", "mechanical", "wireless"]
    },
    {
        id: 5,
        name: "Magic Mouse",
        price: 6999,
        category: "Accessories",
        brand: "Apple",
        stock: 0,
        rating: 4.2,
        tags: ["mouse", "apple", "wireless"]
    },
    {
        id: 6,
        name: "Sony WH-1000XM6",
        price: 34999,
        category: "Audio",
        brand: "Sony",
        stock: 14,
        rating: 4.8,
        tags: ["headphone", "wireless", "noise-canceling"]
    },
    {
        id: 7,
        name: "AirPods Pro 3",
        price: 24999,
        category: "Audio",
        brand: "Apple",
        stock: 30,
        rating: 4.7,
        tags: ["earbuds", "apple", "wireless"]
    },
    {
        id: 8,
        name: "Dell 27 Monitor",
        price: 28999,
        category: "Electronics",
        brand: "Dell",
        stock: 6,
        rating: 4.3,
        tags: ["monitor", "4k", "display"]
    },
    {
        id: 9,
        name: "Logitech MX Master 3S",
        price: 8999,
        category: "Accessories",
        brand: "Logitech",
        stock: 21,
        rating: 4.6,
        tags: ["mouse", "wireless", "productivity"]
    },
    {
        id: 10,
        name: "iPad Air",
        price: 59999,
        category: "Electronics",
        brand: "Apple",
        stock: 10,
        rating: 4.5,
        tags: ["tablet", "apple", "portable"]
    }
];
function displayProducts(productList) {
    return [...productList];
}

function searchProducts(productList, searchTerm) {
    const term = searchTerm.trim().toLowerCase();
    return term
        ? productList.filter(product => product.name.toLowerCase().includes(term))
        : [];
}

function filterByCategory(productList, category) {
    return productList.filter(product => product.category === category);
}

function filterByMinimumPrice(productList, minimumPrice) {
    return productList.filter(product => product.price >= minimumPrice);
}

function filterByMaximumPrice(productList, maximumPrice) {
    return productList.filter(product => product.price <= maximumPrice);
}

function sortByPriceAscending(productList) {
    return [...productList].sort((a, b) => a.price - b.price);
}

function sortByPriceDescending(productList) {
    return [...productList].sort((a, b) => b.price - a.price);
}

function sortByRating(productList) {
    return [...productList].sort((a, b) => b.rating - a.rating);
}

function getInStockProducts(productList) {
    return productList.filter(product => product.stock > 0);
}

function getMostExpensiveProduct(productList) {
    return productList.reduce((mostExpensive, product) =>
        !mostExpensive || product.price > mostExpensive.price ? product : mostExpensive, null);
}

function getHighestRatedProduct(productList) {
    return productList.reduce((highestRated, product) =>
        !highestRated || product.rating > highestRated.rating ? product : highestRated, null);
}

function getTotalInventoryValue(productList) {
    return productList.reduce((total, product) => total + product.price * product.stock, 0);
}

function countProductsByCategory(productList) {
    return productList.reduce((counts, product) => {
        counts[product.category] = (counts[product.category] || 0) + 1;
        return counts;
    }, {});
}

function addProductToCart(cart, product, quantity = 1) {
    if (quantity < 1) return cart;

    const existingItem = cart.find(item => item.product.id === product.id);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ product, quantity });
    }
    return cart;
}

function increaseProductQuantity(cart, productId, quantity = 1) {
    const item = cart.find(cartItem => cartItem.product.id === productId);
    if (item && quantity > 0) item.quantity += quantity;
    return cart;
}

function decreaseProductQuantity(cart, productId, quantity = 1) {
    const item = cart.find(cartItem => cartItem.product.id === productId);
    if (item && quantity > 0) item.quantity = Math.max(0, item.quantity - quantity);
    return cart.filter(cartItem => cartItem.quantity > 0);
}

function removeProductFromCart(cart, productId) {
    return cart.filter(item => item.product.id !== productId);
}

function getCartTotal(cart) {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
}

function getCartItemCount(cart) {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

function getDiscountedCartTotal(cart) {
    const total = getCartTotal(cart);
    return total > 50000 ? total * 0.9 : total;
}

const cart = [];
addProductToCart(cart, products[0]);
addProductToCart(cart, products[0]);
increaseProductQuantity(cart, products[0].id);
decreaseProductQuantity(cart, products[0].id);

console.log(displayProducts(products));
console.log(searchProducts(products, "phone"));
console.log(filterByCategory(products, "Audio"));
console.log(filterByMinimumPrice(products, 50000));
console.log(filterByMaximumPrice(products, 10000));
console.log(sortByPriceAscending(products));
console.log(sortByPriceDescending(products));
console.log(sortByRating(products));
console.log(getInStockProducts(products));
console.log(getMostExpensiveProduct(products));
console.log(getHighestRatedProduct(products));
console.log(getTotalInventoryValue(products));
console.log(countProductsByCategory(products));
console.log(getCartTotal(cart));
console.log(getCartItemCount(cart));
console.log(getDiscountedCartTotal(cart));
console.log(searchProducts(products, "does-not-exist"));
console.log(getCartTotal([]));

module.exports = {
    products,
    displayProducts,
    searchProducts,
    filterByCategory,
    filterByMinimumPrice,
    filterByMaximumPrice,
    sortByPriceAscending,
    sortByPriceDescending,
    sortByRating,
    getInStockProducts,
    getMostExpensiveProduct,
    getHighestRatedProduct,
    getTotalInventoryValue,
    countProductsByCategory,
    addProductToCart,
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProductFromCart,
    getCartTotal,
    getCartItemCount,
    getDiscountedCartTotal
};







