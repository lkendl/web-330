/*
============================================
; Title: food-model.js
; Author: Professor Krasso 
; Date: 27 January 2022
; Modified By: Laura Kendl
; Description: Contains JS classes for calorie app.
;===========================================
*/

// FoodModel class with name and price parameters passed to the parent through super() function.
export class FoodModel {
    constructor(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
}

