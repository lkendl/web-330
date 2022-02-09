/*
============================================
; Title: validator.js
; Author: Professor Krasso 
; Date: 7 February 2022
; Modified By: Laura Kendl
; Description: Contains JS functions for the Future Value app.
; [Ref A] MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes (Classes)
;===========================================
*/

// Import statements.
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

// Two class properties with empty arrays [Ref A].
class Validators {
    validators = [];
}

class Messages {
    messages = [];
}

// Class constructor with two parameters.
class {
    constructor(name, field) {

    }
}

// This function pushes a new instance of the RequiredField class to the validators array using the name and field as parameters.
addRequiredField(RequiredField) {
        this.Validators.push(this.name, this.field);
}

// This function pushes a new instance of the FloatField class to the validators array using the name and field as parameters.
addRequiredFloatField(FloatField) {
    this.Validators.push(this.name, this.field);
}

// This function pushes a new instance of the FloatMinField class to the validators array using the name and field as parameters.
addFloatMinField(FloatMinField) {
    this.Validators.push(this.name, this.field, this.min);
}

// This function pushes a new instance of the FloatMaxField class to the validators array using the name and field as parameters.
addFloatMaxField(FloatMaxField) {
    this.Validators.push(this.name, this.field, this.max);
}

// This function...
validate() {
    // For/Of statement
}



  