import CustomerPage from '../PageObject/CustomerPage.js';
import LoginPage from '../PageObject/LoginPage.js';
import TransactionsPage from '../PageObject/TransactionsPage.js';

describe('Transaction Tests',() => {
    
    it('should login customers',()=>{
        const loginPage = new LoginPage();
        const customerPage = new CustomerPage();
        cy.visit(Cypress.env('Url'));
        loginPage.customerLoginButton();
        customerPage.existUserSelectMenu();
    });
    it ('should to go a account customers',()=>{
        const loginPage = new LoginPage();
        const customerPage = new CustomerPage();
        cy.visit(Cypress.env('Url'));
        loginPage.customerLoginButton();
        customerPage.userSelectMenu('Harry Potter');
        customerPage.submitButton();
        customerPage.getPageText();
    });

    it ('should a deposit 100$',()=>{
        const loginPage = new LoginPage();
        const customerPage = new CustomerPage();
        cy.visit(Cypress.env('Url'));
        loginPage.customerLoginButton();
        customerPage.userSelectMenu('Harry Potter');
        customerPage.submitButton();
        customerPage.getPageText();
        customerPage.getButton('Deposit');
        cy.getFibonacciNumber().then((fibonacciNumber) => {
          customerPage.getDepositPlaceholder(fibonacciNumber); 
        });
        customerPage.submitButton();
        customerPage.getDepositSpanSucces();
    });

    it ('should a withdraw 100$',()=>{
        const loginPage = new LoginPage();
        const customerPage = new CustomerPage();
        cy.visit(Cypress.env('Url'));
        loginPage.customerLoginButton();
        customerPage.userSelectMenu('Harry Potter');
        customerPage.submitButton();
        customerPage.getPageText();
        customerPage.getButton('Deposit');
        cy.getFibonacciNumber().then((fibonacciNumber) => {
          customerPage.getDepositPlaceholder(fibonacciNumber); 
        });
        customerPage.submitButton();
        customerPage.getDepositSpanSucces();
        customerPage.getButton('Withdrawl');
        cy.getFibonacciNumber().then((fibonacciNumber) => {
          customerPage.getWithdrawPlaceholder(fibonacciNumber); 
        });
        customerPage.submitButton();
        customerPage.getWithdrawSpanSucces();
    });


    it ('should a check balance',()=>{
        const loginPage = new LoginPage();
        const customerPage = new CustomerPage();
        cy.visit(Cypress.env('Url'));
        loginPage.customerLoginButton();
        customerPage.userSelectMenu('Harry Potter');
        customerPage.submitButton();
        customerPage.getPageText();
        customerPage.getButton('Deposit');
        cy.getFibonacciNumber().then((fibonacciNumber) => {
          customerPage.getDepositPlaceholder(fibonacciNumber); 
        });
        customerPage.submitButton();
        customerPage.getDepositSpanSucces();
        customerPage.getButton('Withdrawl');
        cy.getFibonacciNumber().then((fibonacciNumber) => {
          customerPage.getWithdrawPlaceholder(fibonacciNumber); 
        });
        customerPage.submitButton();
        customerPage.getWithdrawSpanSucces();
        customerPage.getBalance(0);
    });

    it ('should a check transactions',()=>{
        const loginPage = new LoginPage();
        const customerPage = new CustomerPage();
        const transactionPage = new TransactionsPage();
        cy.visit(Cypress.env('Url'));
        loginPage.customerLoginButton();
        customerPage.userSelectMenu('Harry Potter');
        customerPage.submitButton();
        customerPage.getPageText();
        customerPage.getButton('Deposit');
        cy.getFibonacciNumber().then((fibonacciNumber) => {
          customerPage.getDepositPlaceholder(fibonacciNumber); 
        });
        customerPage.submitButton();
        customerPage.getDepositSpanSucces();
        customerPage.getButton('Withdrawl');
        cy.getFibonacciNumber().then((fibonacciNumber) => {
          customerPage.getWithdrawPlaceholder(fibonacciNumber); 
        });
        customerPage.submitButton();
        customerPage.getWithdrawSpanSucces();
        customerPage.getButton('Transactions');
        transactionPage.getTransactionsTable();
    });
});