class CustomerPage {
      existUserSelectMenu() {
        const selector = cy.get('[id="userSelect"]');
        cy.checkExist(selector);
        return this;
      }
      userSelectMenu(value) {
        const selector = cy.get('[id="userSelect"]');
        cy.checkSelect(selector,value);
        return this;
      }
      getExpectedUser() {
        const selector = cy.get('option[value="2"].ng-binding.ng-scope:contains("Harry Potter")');
        
      }
      submitButton() {
        const selector = cy.get('button[type="submit"]');
        cy.checkButton(selector);
        return this;
      }
      getPageText()
      {
        const selector = cy.get('strong span.fontBig.ng-binding').contains('Harry Potter');
        cy.checkExist(selector);
        return this;
      }
      getDepositPlaceholder(value)
      {
        const selector = 'div.form-group:contains("Amount to be Deposited") input[placeholder="amount"]';
        cy.get(selector).then((selector) => {
            cy.checkPlaceholder(selector,value);
        });
        return this;
      }
      getButton(buttonName) 
      {
        const selector = cy.get('button.btn.btn-lg.tab').contains(buttonName);
        cy.checkButton(selector);
        return this;
      }
      getDepositSpanSucces() 
      {
        const selector = cy.get('span.error.ng-binding').contains('Deposit Successful');
        cy.checkExist(selector);
        return this;
      }
      getWithdrawPlaceholder(value) {
        const selector = 'div.form-group:contains("Amount to be Withdrawn") input[placeholder="amount"]';
        cy.get(selector).then((input) => {
            cy.checkPlaceholder(input, value);
        });
        return this;
    }
      getWithdrawSpanSucces() 
      {
        const selector = cy.get('span.error.ng-binding').contains('Transaction successful');
        cy.checkExist(selector);
        return this;
      }
      getBalance(count)
      {
        const selector = cy.get('.center').contains('Balance :').invoke('text').then(balanceText => {
          const numbers = balanceText.match(/\d+/g); 
          const secondNumber = parseInt(numbers[1]); 
          expect(secondNumber).to.equal(count);
      });
      cy.checkExistOnly(selector);
      return this;
    }
}
export default CustomerPage;
