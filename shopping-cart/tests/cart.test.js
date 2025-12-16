// tests/cart.test.js
const { addItem, removeItem, getTotalItems } = require('../cart');

describe('Shopping Cart Module', () => {
    let cart;

    beforeEach(() => {
        cart = {}; // reset cart before each test
    });

    // --- addItem tests ---
    test('addItem: adds a new item', () => {
        addItem(cart, 'apple', 2);
        expect(cart['apple']).toBe(2);
    });

    test('addItem: handles negative quantity gracefully', () => {
        addItem(cart, 'apple', -3);
        expect(cart['apple']).toBeUndefined();
    });

    test('addItem: handles quantity of 0', () => {
        addItem(cart, 'apple', 0);
        expect(cart['apple']).toBeUndefined();
    });

    // --- removeItem tests ---
    test('removeItem: removes existing item', () => {
        cart['apple'] = 2;
        removeItem(cart, 'apple');
        expect(cart['apple']).toBeUndefined();
    });

    test('removeItem: handles removing non-existent item', () => {
        removeItem(cart, 'banana');
        expect(cart['banana']).toBeUndefined();
    });

    test('removeItem: removes last item from cart', () => {
        cart['apple'] = 1;
        removeItem(cart, 'apple');
        expect(Object.keys(cart).length).toBe(0);
    });

    //  getTotalItems tests 
    test('getTotalItems: calculates total correctly', () => {
        cart['apple'] = 2;
        cart['banana'] = 3;
        expect(getTotalItems(cart)).toBe(5);
    });

    test('getTotalItems: handles empty cart', () => {
        expect(getTotalItems(cart)).toBe(0);
    });

    test('getTotalItems: handles large quantities', () => {
        cart['apple'] = 1000;
        cart['banana'] = 2000;
        expect(getTotalItems(cart)).toBe(3000);
    });
});
