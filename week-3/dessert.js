/*
============================================
; Title: dessert.js
; Author: Professor Krasso 
; Date: 17 January 2022
; Modified By: Laura Kendl
; Description: Contains JS functions for restaurant desserts.
;===========================================
*/
// Import Product file and inherit the base classes properties with extends keyword.
import { Product } from "./product.js";

// Dessert class with name and price parameters passed to the parent through super() function.
export class Dessert extends Product {
    constructor(name, price) {
        super(name, price);
    }
}

