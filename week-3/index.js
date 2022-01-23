/*
============================================
; Title: index.js
; Author: Professor Krasso 
; Date: 17 January 2022
; Modified By: Laura Kendl
; Description: Contains JS functions for restaurant index.
;===========================================
*/
//Export JavaScript classes for easier imports to restaurant.html file.
export * from "./appetizer.js";
export * from "./beverage.js";
export * from "./dessert.js";
export * from "./main-course.js";
export * from "./bill.js";

/**
 * NOTE: "If we try to import MainCourse directly from the restaurant.html file, 
; we will likely run into an error, because JavaScript doesn't like importing
; files that have nested imports. This is where the index.js comes into play.
; If export all of the files from one single file, JavaScript thinks all 
; imports are only one layer deep" (Krasso, n.d.).
*/