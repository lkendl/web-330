/*
============================================
; Title: float-min-field.js
; Author: Professor Krasso 
; Date: 7 February 2022
; Modified By: Laura Kendl
; Description: Contains JS functions for the Future Value app.
;===========================================
*/

// This class contains three parameters set to three class properties.
export class FloatMinField {
    constructor(name, field, min) {
        this.name = name;
        this.field = field;
        this.min = min;
    }

// This function will return true if it can ParseFloat this.field.
validate() {
    if (parseFloat(this.field) > this.min) {
        return true;
    } 
        return false;
    }
// This function will return a string message..
    getMessage() {
        return `${this.name} must be more than ${this.min}. You entered ${this.field}`;
    }
}
