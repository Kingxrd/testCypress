// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPage from '../PageObject/LoginPage.js';

const login = new LoginPage();
Cypress.Commands.add("checkExist", (selector) => {
    selector.should('exist').then((element) => {
        cy.wrap(element).should('be.visible');
      });
  });
  Cypress.Commands.add("checkExistOnly", (selector) => {
    selector.should('exist');
  });
  Cypress.Commands.add("checkTextField", (selector) => {
    selector.should('exist').then((element) => {
        cy.wrap(element);
      });
  });
  Cypress.Commands.add("checkButton", (selector) => {
    selector.should('exist').then((element) => {
        cy.wrap(element).should('be.visible').click();
      });
  });
  Cypress.Commands.add("checkPlaceholder", (selector,value) => {
    selector.should('exist').then((element) => {
        cy.wrap(element).should('be.visible').type(value);
      });
  });
  Cypress.Commands.add("checkSelect", (selector,valueToSelect) => {
    selector.should('exist').then((element) => {
        cy.wrap(element).should('be.visible').select(valueToSelect);
      });
  });
  Cypress.Commands.add("checkCheckBox", (selector) => {
    selector.should('exist').then((element) => {
        cy.wrap(element).check();
      });
  });
  Cypress.Commands.add("login", () => {
        login.visit()
        cy.checkButton(login.customerLoginButton());
  });
  Cypress.Commands.add("accountButtons", function getButtonLocator(buttonText) {
    return `${buttonClass}:contains("${buttonText}")`;
  });
 
  Cypress.Commands.add('getFibonacciNumber', () => {
    let n = new Date().getDate() + 1;  

    function fib(n) {
      let a = 1, b = 1;
      for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
      }
      return b;  
    }

    console.log(fib(n));  
    return fib(n);        
});


