/*
============================================
; Title: Assignment 5.3
; File Name: stylesheets.js
; Author: Laura Kendl
; Date: 3 February 2022
; Description: Holds all portfolio stylesheets.
===========================================
*/

class Stylesheets extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <!-- External Stylesheets -->
            <link rel="stylesheet" href="./css/full-width.css">
            <link rel="stylesheet" href="./css/theme.css">
            <link rel="stylesheet" href="./css/theme-library.css">

            <script src="./header.js"></script>
            <script src="./footer.js"></script>
            <script src="./nav.js"></script>
            <script src="./stylesheets.js"></script>
        
            <!-- Google Font Kits -->
            <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link href="https://fonts.googleapis.com/css2?family=Handlee&family=Raleway&display=swap" rel="stylesheet">
        `;
    }
}

customElements.define("stylesheets", Stylesheets);