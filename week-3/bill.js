/*
============================================
; Title: bill.js
; Author: Professor Krasso 
; Date: 17 January 2022
; Modified By: Laura Kendl
; Description: Contains JS functions for customer bill.
; W3schools: https://www.w3schools.com/jsref/jsref_tofixed.asp (JavaScript Number toFixed())
;===========================================
*/
// Bill class with properties: _beverages, _appetizers, _mainCourses, and _desserts.
export class Bill {
    constructor() {
        this._beverages = [];
        this._appetizers = [];
        this._mainCourses = [];
        this._desserts = [];
    }
}

// This function pushes the beverage to the _beverages array.
function addBeverage(beverage) {
    this._beverages.push(beverage);
}

// This function pushes the appetizer to the _appetizers array.
function addAppetizer(appetizer) {
    this._appetizers.push(appetizer);
}

// This function pushes the mainCourse to the _mainCourses array.
function addMainCourse(mainCourse) {
    this._mainCourses.push(mainCourse);
}

// This function pushes the dessert to the _desserts array.
function addDessert(dessert) {
    this._desserts.push(dessert);
}

// This function...
function getTotal() {
    let total = 0;

    let beverageTotal = this._beverages.forEach(function(beverage) {
        total += parseFloat(beverage.price);
    });

    let appetizerTotal = this._appetizers.forEach(function(appetizer) {
        total += parseFloat(appetizer.price);
    });

    let mainCourseTotal = this._mainCourses.forEach(function(mainCourse) {
        total += parseFloat(mainCourse.price);
    });

    let dessertTotal = this._desserts.forEach(function(mainCourse) {
        total += parseFloat(dessert.price);
    });

    // Return the total variable and set to two decimal places.
    return total.toFixed(2);
}
