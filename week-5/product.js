/*
============================================
; Title: Assignment 5.2
; File Name: product.js
; Author: Professor Krasso 
; Date: 31 January 2022
; Modified By: Laura Kendl
; Description: Contains JS classes for Bob's Automotive Repair Shop.
;===========================================
*/

// Product class with name and price parameters.
export class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2); // Generates a random value and assigns to id.
    }
}

