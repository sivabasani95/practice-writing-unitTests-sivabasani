// add item to cart
function addItem(cart, item, quantity) {
    if (quantity > 0) {
        if (cart[item]) {
            cart[item] += quantity;
        } else {
            cart[item] = quantity;
        }
    }
}
function removeItem(cart, item) {
    if (cart[item]) {
        delete cart[item];
    }
}
function getTotalItems(cart) {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}
// module exports
module.exports = { addItem, removeItem, getTotalItems };