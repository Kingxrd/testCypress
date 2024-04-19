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

  Cypress.Commands.add("checkPlaceholder", (input, value) => {
    if (typeof value !== 'undefined') {
        const numericValue = value.valueOf(); 
        cy.wrap(input).clear().type(numericValue.toString()); 
        console.log("Input value:", numericValue); 
    } else {
        console.error("Value is undefined!");
    }
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

    return fib(n);        
});


