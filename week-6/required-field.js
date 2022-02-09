/*
============================================
; Title: required-field.js
; Author: Professor Krasso 
; Date: 7 February 2022
; Modified By: Laura Kendl
; Description: Contains JS functions for the Future Value app.
;===========================================
*/

// This class contains two parameters set to two class properties.
export class RequiredField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

// This function will return true if this.field is a string value and false if it is not.
    validate() {
        return Boolean(this.field);
    }

// This function will return a string message.
    getMessage() {
        return "${name} is a required field."; // <name> ?
    }
}
