class CustomerPage {
      userSelectMenu() {
        return cy.get('[id="userSelect"]');
      }
      getExpectedUser() {
        return cy.get('option[value="2"].ng-binding.ng-scope:contains("Harry Potter")');
      }
      submitButton() {
        return cy.get('button[type="submit"]');
      }
      getPageText()
      {
        return cy.get('strong span.fontBig.ng-binding').contains('Harry Potter');
      }
      getDepositPlaceholder()
      {
        return cy.get('div.form-group:contains("Amount to be Deposited") input[placeholder="amount"]')
      }
      getButton(buttonName) 
      {
        return cy.get('button.btn.btn-lg.tab').contains(buttonName);
      }
      getDepositSpanSucces() 
      {
        return cy.get('span.error.ng-binding').contains('Deposit Successful');
      }
      getWithdrawPlaceholder()
      {
        return cy.get('div.form-group:contains("Amount to be Withdrawn") input[placeholder="amount"]')
      }
      getWithdrawSpanSucces() 
      {
        return cy.get('span.error.ng-binding').contains('Transaction successful');
      }
      getBalance(count)
      {
        return cy.get('.center').contains('Balance :').invoke('text').then(balanceText => {
          const numbers = balanceText.match(/\d+/g); 
          const secondNumber = parseInt(numbers[1]); 
          expect(secondNumber).to.equal(count);
      });
    }
}
export default CustomerPage;
