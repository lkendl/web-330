/*
============================================
; Title: Assignment 5.3
; File Name: nav.js
; Author: Professor Krasso 
; Date: 3 February 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build and end-to-end functional
; prototype of my personal portfolio project.
; Resources:
; Blackboard: Code provided by Professor Krasso in WEB330 Assignment 5.3 Outline
===========================================
*/

class navBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/about">About Laura</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/resume">Resume</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/projects">Projects</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/diagrams">Database Diagrams</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/api-unit-tests">API Unit Tests</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/bucket-list">Bucket List</a>
            </li>
        </ul>
    </nav>
        `;
    }
}

customElements.define("nav-bar-component", NavBar);