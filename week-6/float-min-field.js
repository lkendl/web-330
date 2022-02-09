/**
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
        this.max = min;
    }

// This function will return true if it can ParseFloat this.field.
    validate() {
        let trueValue = isNaN(parseFloat(this.field > this.max));
    }

// This function will return a string message..
    getMessage() {
        return "${name} must be more than ${min}. You entered ${field}"; // <name> ?
    }
}
