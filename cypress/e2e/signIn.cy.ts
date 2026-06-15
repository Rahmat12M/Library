/// <reference types="cypress" />
describe('Login Page', () => {
  it('Load the page', () => {
    cy.visit('http://localhost:5173/');
    cy.url().should('eq', 'http://localhost:5173/login');
    cy.get('h2').should("contain", 'Login');
    cy.contains('Sign in to access your reading lists.').should('be.visible');
  });

  it('Login testen mit korrekten Eingaben', () => {
    cy.visit('http://localhost:5173/');

    // Felder ausfuellen
    cy.get('#username').type('admin');
    cy.get('#password').type('1234');

    // Formular absenden
    cy.get('button[type="submit"]').click();

    // Erwartung, navigation zur Startseite
    cy.url().should('eq', 'http://localhost:5173/');
  });

  it('Login testen mit inkorrekten Eingaben', () => {
    cy.visit('http://localhost:5173/');

    // Felder ausfuellen
    cy.get('#username').type('adm');
    cy.get('#password').type('1234');

    // Formular absenden
    cy.get('button[type="submit"]').click();

    // Erwartung: Fehlertext sichtbar
    cy.contains('Incorrect username or password')
      .should('be.visible');
  });
});