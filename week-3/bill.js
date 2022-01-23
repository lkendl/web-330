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
    _beverages = [];
    _appetizers = [];
    _mainCourses = [];
    _desserts = [];

// This function pushes the beverage to the _beverages array.
addBeverage(beverage) {
    this._beverages.push(beverage);
}

// This function pushes the appetizer to the _appetizers array.
addAppetizer(appetizer) {
    this._appetizers.push(appetizer);
}

// This function pushes the mainCourse to the _mainCourses array.
addMainCourse(mainCourse) {
    this._mainCourses.push(mainCourse);
}

// This function pushes the dessert to the _desserts array.
addDessert(dessert) {
    this._desserts.push(dessert);
}

// This function...
getTotal() {

    let total = 0;

    this._beverages.forEach(function(beverage) {
        total += parseFloat(beverage.price);
    });

    this._appetizers.forEach(function(appetizer) {
        total += parseFloat(appetizer.price);
    });

    this._mainCourses.forEach(function(mainCourse) {
        total += parseFloat(mainCourse.price);
    });

    this._desserts.forEach(function(dessert) {
        total += parseFloat(dessert.price);
    });

    // Return the total variable and set to two decimal places.
    return total.toFixed(2);
    }
}
