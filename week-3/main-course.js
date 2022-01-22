/*
============================================
; Title: main-course.js
; Author: Professor Krasso 
; Date: 17 January 2022
; Modified By: Laura Kendl
; Description: Contains JS functions for restaurant main-courses.
;===========================================
*/
// Import Product file and inherit the base classes properties with extends keyword.
import { Product } from "./product.js";

// MainCourse class with name and price parameters passed to the parent through super() function.
export class MainCourse extends Product {
    constructor(name, price) {
        super(name, price);
    }
}

