/*
============================================
; Title: finance-calculator.js
; Author: Professor Krasso 
; Date: 7 February 2022
; Modified By: Laura Kendl
; Description: Contains JS functions for the Future Value app.
; Resources:
; [Ref A] Samanthaming: https://www.samanthaming.com/tidbits/30-how-to-format-currency-in-es6/ (How to Format Currency in ES6)
;===========================================
*/

// This FinanceCalculator class has a static variable called data. 
export class FinanceCalculator {
    // Define the data static variable.
    static MONTHS_IN_YEAR = 12;

    // A static function named calculateFutureValue with three parameters. 
    static calculateFutureValue(monthlyPayment, rate, years) { 
        let month = years * this.MONTHS_IN_YEAR;
        let interestRate = 1 + rate / 100;
        let presentValue = monthlyPayment * month;
        let futureValue = presentValue * Math.pow(interestRate, month);    
        return futureValue.toFixed(2);       
    }

    // A static function named convertToCurrency with one parameter. 
    static convertToCurrency(field) { 
        let currencyFormatter = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }); // [Ref A]
  
        return currencyFormatter.format(field);       
    }
}
    

