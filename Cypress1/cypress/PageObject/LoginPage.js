class LoginPage{
  customerLoginButton() {
        return cy.get('button.btn.btn-primary.btn-lg:contains("Customer Login")');
      }
}
export default LoginPage;