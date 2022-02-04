/*
============================================
; Title: shopping-cart.js
; Author: Professor Krasso 
; Date: 31 January 2022
; Modified By: Laura Kendl
; Description: Contains JS for Bob's Automotive Repair Shop.
; Resources:
; [Ref A] MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length (Array.prototype.length)
; [Ref B] W3schools: https://www.w3schools.com/jsref/jsref_push.asp (JavaScript Array Push())
; [Ref C] MDN Web Docs:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators (Iterators and generators)
; [Ref D] MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield (yield)
; [Ref E] dcode: https://www.youtube.com/watch?v=2oU-DfdWM0c (How To Use Iterators in JavaScript - Iterate Over Arrays and Collections)
;===========================================
*/

// This shopping cart class has a products property with an empty array.
export class ShoppingCart {
    constructor() {
        this.products = [];
    }
    // This function returns the length of the products array [Ref A].
    count() {
        return this.products.length;
    }
    // This function adds the product object to the products array [Ref B].
    add(product) {
        this.products.push(product);
    }

    // This iterator has a for...of statement that loops over the products array. Each iterated object will be returned with yield [Ref C, D].
    *[Symbol.iterator]() {
        for (let product of this.products) {
            yield product;
        }   
    }
}

