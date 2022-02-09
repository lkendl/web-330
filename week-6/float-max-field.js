/**
============================================
; Title: float-max-field.js
; Author: Professor Krasso 
; Date: 7 February 2022
; Modified By: Laura Kendl
; Description: Contains JS functions for the Future Value app.
;===========================================
*/

// This class contains three parameters set to three class properties.
export class FloatMaxField {
    constructor(name, field, max) {
        this.name = name;
        this.field = field;
        this.max = max;
    }

// This function will return true if it can ParseFloat this.field.
    validate() {
        let trueValue = isNaN(parseFloat(this.field < this.max));
    }

// This function will return a string message..
    getMessage() {
        return "${name} must be less than ${max}. You entered ${field}"; // <name> ?
    }
}
