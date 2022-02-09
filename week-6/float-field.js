/**
============================================
; Title: float-field.js
; Author: Professor Krasso 
; Date: 7 February 2022
; Modified By: Laura Kendl
; Description: Contains JS functions for the Future Value app.
; Resources:
; [Ref A] Stackoverflow: https://stackoverflow.com/questions/2652319/how-do-you-check-that-a-number-is-nan-in-javascript (How do you check that a number is NaN in JavaScript?)
;===========================================
*/

// This class contains two parameters set to two class properties.
export class FloatField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

// This function will return true if it can ParseFloat this.field.
    validate() {
        return isNaN(parseFloat(this.field));
    }

// This function will return a string message..
    getMessage() {
        return "${name} must be a float value. You entered ${field}"; // <name> ?
    }
}
