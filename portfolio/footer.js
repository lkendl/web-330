/*
============================================
; Title: Assignment 5.3
; File Name: footer.js
; Author: Professor Krasso 
; Date: 3 February 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build and end-to-end functional
; prototype of my personal portfolio project.
; Resources:
; Blackboard: Code provided by Professor Krasso in WEB330 Assignment 5.3 Outline
===========================================
*/

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="footer">
        <footer>

            <div class="footer-link-wrapper">
    
                <a href="https://github.com/lkendl?tab=repositories" target="_blank" class="footer-link">Laura's GitHub</a> 
                |
                <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/" target="_blank"  class="footer-link">BU Web Development Degree</a>  
                |
                <a href="https://www.youtube.com/c/bellevueuniversity" target="_blank"  class="footer-link">BU on YouTube</a>  
                |
                <a href="https://github.com/buwebdev" target="_blank" class="footer-link">BU Web Dev on GitHub</a>  
    
            </div>
    
            <div id="copyright"><br />&copy; 2022 Kendl </div>
    
        </div>
        </footer>
    </body>
</html>
        `;
    }
}

customElements.define("footer-component", Footer);