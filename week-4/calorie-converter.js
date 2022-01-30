/*
============================================
; Title: calorie-converter.js
; Author: Professor Krasso 
; Date: 27 January 2022
; Modified By: Laura Kendl
; Description: Contains JS functions for calorie app.
; Resources: 
; W3schools: https://www.w3schools.com/js/js_class_static.asp (JavaScript Static Methods)
; W3schools: https://www.w3schools.com/js/js_classes.asp (JavaScript Classes)
; Daily Tuition: https://www.youtube.com/watch?v=j9TcU14yfpQ (Understand Class Static Method - Advance JavaScript Tutorial Part - 48)
; JavaScript Book: Section 9.3.1
; MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static (static)
; MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_static_initialization_blocks (Class static initialization blocks)
; Geeksforgeeks: https://www.geeksforgeeks.org/how-to-implement-a-filter-for-objects-in-javascript/ (How to implement a filter() for Objects in JavaScript?)
;===========================================
*/
// Import food-model file and inherit the base classes properties with extends keyword.
import { FoodModel } from "./food-model.js";

// Create a class named CalorieConverter with a static variable called data. 
export class CalorieConverter {
// Define the data static variable.
    static data = [
// Populate the variable with FoodModel objects with an array.    
        new FoodModel("1007", "Egg", "78"),
        new FoodModel("1008", "Apple", "95"),
        new FoodModel("1009", "Hamburger", "354"),
        new FoodModel("1010", "Fries", "400"),
        new FoodModel("1011", "Banana", "105"),
        new FoodModel("1012", "Soda", "150"),
    ]

// A static function named find with a single string parameter. 
    static find(str) {
// Using JavaScript’s built-in filter function, return a new array of data with the objects matching the parameter string. Use the FoodModel name field to compare the parameter string value against. Export the class. 
        return this.data.filter(foodModel => foodModel.name.toLowerCase() === str);

    }
}
