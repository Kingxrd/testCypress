class LoginPage{
  customerLoginButton() {
        const selector = cy.get('button.btn.btn-primary.btn-lg:contains("Customer Login")');
        cy.checkButton(selector);
        return this;
      }
}
export default LoginPage;