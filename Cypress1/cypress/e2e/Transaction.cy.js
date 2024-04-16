import CustomerPage from '../PageObject/CustomerPage.js';
import LoginPage from '../PageObject/LoginPage.js';
import TransactionsPage from '../PageObject/TransactionsPage.js';

describe('Transaction Tests',() => {
    
    it('should login customers',()=>{
        const loginPage = new LoginPage();
        const customerPage = new CustomerPage();
        cy.visit(Cypress.env('Url'));
        cy.checkButton(loginPage.customerLoginButton());
        cy.checkExist(customerPage.userSelectMenu());
    });
    it ('should to go a account customers',()=>{
        const loginPage = new LoginPage();
        const customerPage = new CustomerPage();
        cy.visit(Cypress.env('Url'));
        cy.checkButton(loginPage.customerLoginButton());
        console.log(customerPage.userSelectMenu());
        cy.checkSelect(customerPage.userSelectMenu(), 'Harry Potter');
        cy.checkButton(customerPage.submitButton());
        cy.checkExist(customerPage.getPageText());
    });

    it ('should a deposit 100$',()=>{
        const loginPage = new LoginPage();
        const customerPage = new CustomerPage();
        cy.visit(Cypress.env('Url'));
        cy.checkButton(loginPage.customerLoginButton());
        console.log(customerPage.userSelectMenu());
        cy.checkSelect(customerPage.userSelectMenu(), 'Harry Potter');
        cy.checkButton(customerPage.submitButton());
        cy.checkExist(customerPage.getPageText());
        cy.checkButton(customerPage.getButton('Deposit'));
        cy.getFibonacciNumber().then((fibonacciNumber) => {
            cy.wrap(fibonacciNumber).then((wrappedNumber) => {
              cy.get('input');
              cy.checkPlaceholder(customerPage.getDepositPlaceholder(), wrappedNumber);
            });
          });
        cy.checkButton(customerPage.submitButton());
        cy.checkExist(customerPage.getDepositSpanSucces());
    });

    it ('should a withdraw 100$',()=>{
        const loginPage = new LoginPage();
        const customerPage = new CustomerPage();
        cy.visit(Cypress.env('Url'));
        cy.checkButton(loginPage.customerLoginButton());
        console.log(customerPage.userSelectMenu());
        cy.checkSelect(customerPage.userSelectMenu(), 'Harry Potter');
        cy.checkButton(customerPage.submitButton());
        cy.checkExist(customerPage.getPageText());
        cy.checkButton(customerPage.getButton('Deposit'));
        cy.getFibonacciNumber().then((fibonacciNumber) => {
            cy.wrap(fibonacciNumber).then((wrappedNumber) => {
                cy.get('input');
              cy.checkPlaceholder(customerPage.getDepositPlaceholder(), wrappedNumber);
            });
          });
        cy.checkButton(customerPage.submitButton());
        cy.checkExist(customerPage.getDepositSpanSucces());
        cy.checkButton(customerPage.getButton('Withdrawl'));
        cy.getFibonacciNumber().then((fibonacciNumber) => {
            cy.wrap(fibonacciNumber).then((wrappedNumber) => {
                cy.get('input');
              cy.checkPlaceholder(customerPage.getWithdrawPlaceholder(), wrappedNumber);
            });
          });
        cy.checkButton(customerPage.submitButton());
        cy.checkExist(customerPage.getWithdrawSpanSucces());
    });


    it ('should a check balance',()=>{
        const loginPage = new LoginPage();
        const customerPage = new CustomerPage();
        cy.visit(Cypress.env('Url'));
        cy.checkButton(loginPage.customerLoginButton());
        console.log(customerPage.userSelectMenu());
        cy.checkSelect(customerPage.userSelectMenu(), 'Harry Potter');
        cy.checkButton(customerPage.submitButton());
        cy.checkExist(customerPage.getPageText());
        cy.checkButton(customerPage.getButton('Deposit'));
        cy.getFibonacciNumber().then((fibonacciNumber) => {
            cy.wrap(fibonacciNumber).then((wrappedNumber) => {
                cy.get('input');
              cy.checkPlaceholder(customerPage.getDepositPlaceholder(), wrappedNumber);
            });
          });
        cy.checkButton(customerPage.submitButton());
        cy.checkExist(customerPage.getDepositSpanSucces());
        cy.checkButton(customerPage.getButton('Withdrawl'));
        cy.getFibonacciNumber().then((fibonacciNumber) => {
            cy.wrap(fibonacciNumber).then((wrappedNumber) => {
                cy.get('input');
              cy.checkPlaceholder(customerPage.getWithdrawPlaceholder(), wrappedNumber);
            });
          });
        cy.checkButton(customerPage.submitButton());
        cy.checkExist(customerPage.getWithdrawSpanSucces());
        cy.checkExistOnly(customerPage.getBalance(0));
    });

    it ('should a check transactions',()=>{
        const loginPage = new LoginPage();
        const customerPage = new CustomerPage();
        const transactionPage = new TransactionsPage();
        cy.visit(Cypress.env('Url'));
        cy.checkButton(loginPage.customerLoginButton());
        console.log(customerPage.userSelectMenu());
        cy.checkSelect(customerPage.userSelectMenu(), 'Harry Potter');
        cy.checkButton(customerPage.submitButton());
        cy.checkExist(customerPage.getPageText());
        cy.checkButton(customerPage.getButton('Deposit'));
        cy.getFibonacciNumber().then((fibonacciNumber) => {
            cy.wrap(fibonacciNumber).then((wrappedNumber) => {
                cy.get('input');
              cy.checkPlaceholder(customerPage.getDepositPlaceholder(), wrappedNumber);
            });
          });
        cy.checkButton(customerPage.submitButton());
        cy.checkExist(customerPage.getDepositSpanSucces());
        cy.checkButton(customerPage.getButton('Withdrawl'));
        cy.getFibonacciNumber().then((fibonacciNumber) => {
            cy.wrap(fibonacciNumber).then((wrappedNumber) => {
                cy.get('input');
              cy.checkPlaceholder(customerPage.getWithdrawPlaceholder(), wrappedNumber);
            });
          });
        cy.checkButton(customerPage.submitButton());
        cy.checkExist(customerPage.getWithdrawSpanSucces());
        cy.checkButton(customerPage.getButton('Transactions'));
        cy.checkExist(transactionPage.getTransactionsTable());
    });
});