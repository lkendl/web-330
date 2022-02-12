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
export class Validator {
    validators = [];
    messages = [];

// Class constructor with two parameters.
constructor(name, field) {
    this.name = name;
    this.field = field;
}
    
// This function pushes a new instance of the RequiredField class to the validators array using the name and field as parameters.
addRequiredField() {
    this.validators.push(new RequiredField(this.name, this.field));
}

// This function pushes a new instance of the FloatField class to the validators array using the name and field as parameters.
addRequiredFloatField() {
    this.validators.push(new FloatField(this.name, this.field));
}

// This function pushes a new instance of the FloatMinField class to the validators array using the name and field as parameters.
addFloatMinField(min) {
    this.validators.push(new FloatMinField(this.name, this.field, min));
}

// This function pushes a new instance of the FloatMaxField class to the validators array using the name and field as parameters.
addFloatMaxField(max) {
    this.validators.push(new FloatMaxField(this.name, this.field, max));
}

// This function iterates over the validators array with a for...of statement and calls the iterated objects validate function. 
validate() {
    for (let valid of this.validators) {
        if (!valid.validate()) {
            this.messages.push(valid.getMessage());
            return false;
        }
    } 
        return true
    }
}