/*
============================================
; Title: Assignment 5.2
; File Name: cart-component.js
; Author: Professor Krasso 
; Date: 31 January 2022
; Modified By: Laura Kendl
; Description: Contains JS for Bob's Automotive Repair Shop.
;===========================================
*/

// This CartComponent class extends HTMLElement object.
class CartComponent extends HTMLElement {
    constructor() {
        super();
    }

// This function sets the string to a shopping cart icon.
connectedCallback() {
    this.innerHTML = `
        <i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)
    `;
    }
}

// This function passes in the string value cart-component and the CartComponent class.
customElements.define("cart-component", CartComponent);

