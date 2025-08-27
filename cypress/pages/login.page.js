/// <reference types="cypress" />

class LoginPage {
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-button"]'),
    errorMessage: () => cy.get('[data-test="error"]'),
  };

  setUsername(username) {
    this.elements.usernameInput().clear().type(username);
  }

  setPassword(password) {
    this.elements.passwordInput().clear().type(password);
  }

  clickLogin() {
    this.elements.loginButton().click();
  }

  verifyErrorMessage() {
    this.elements.errorMessage()
      .should('be.visible')
      .and('contain', 'Epic sadface');
  }
}

export default new LoginPage();
