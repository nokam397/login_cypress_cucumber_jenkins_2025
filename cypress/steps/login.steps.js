/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"


import LoginPage from '../pages/login.page';

Given('je visite le lien {string}', (url) => {
  cy.visit(url);
});

When('je saisis le username {string}', (username) => {
  LoginPage.setUsername(username);
});

When('je saisis le mot de passe {string}', (password) => {
  LoginPage.setPassword(password);
});

When('je clique sur le bouton login', () => {
  LoginPage.clickLogin();
});

Then('je suis connecté et redirigé vers le dashboard', () => {
  cy.url().should('include', '/inventory.html');
});

Then('un message d\'erreur de connexion s\'affiche', () => {
  LoginPage.verifyErrorMessage();
});
