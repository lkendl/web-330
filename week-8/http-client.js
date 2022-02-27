/*
============================================
; Title: Assignment 8.2
; File Name: http-client.js
; Author: Professor Krasso 
; Date: 25 February 2022
; Modified By: Laura Kendl
; Description: Contains JS functions for the 
; WhatABook, Part 2 app.
; Resources:
; [Ref A] MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function (async function)
; [Ref B] Cukmekerb's Coding Class: https://www.youtube.com/watch?v=LNKuZBYpl4o (Use the Open Library API to Search Books)
;===========================================
*/

// Create and export a class named HttpClient with an async function with two parameters.
export class HttpClient {
    // Define the async get function [Ref A].
    async get(url, params="") {
        
        // Instantiate a new URL object with the url parameter and assign results to the url parameter: url = new URL(url).
        url = new URL(url);

        // Instantiate a new URLSearchParams object with a params parameter and assign to the url.search property.
        url.search = new URLSearchParams(params);
         
        // Create an object literal and use fetch() API to pass in the url.toString() variable.
        const res = await fetch(url.toString(), {
            method: "GET", // Specifies the request as a GET request.
        });

        // Return the res object literal as JSON [Ref B, 5:50].
        return res.json();
    }
}





