/// <reference types="cypress" />
describe('mainpage test allgemein', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/');

    // Felder ausfuellen
    cy.get('#username').type('admin');
    cy.get('#password').type('1234');

    // Formular absenden
    cy.get('button[type="submit"]').click();
     // Erwartung, navigation zur Startseite
    cy.url().should('eq', 'http://localhost:5173/');
    //prüfe 
    cy.get('h1').should('contain', 'Booklist');
    cy.get('a[href="/"]').should('contain','Book list');
    
    cy.get('a[href="/aboutus"]').should('contain','About US');

    cy.get('a[href="/readlist"]').should('contain', 'Next to read (0)');

    cy.get('a[href="/buylist"]').should('contain', 'Next to buy (0)');

    cy.get('a[href="/aboutus"]').should('contain', 'About US');

    cy.get('button[type="button"]').click();

    cy.get('#book-list img').should('have.length.greaterThan', 1);

    cy.get('h3').should('have.length.greaterThan', 1);

    cy.contains('button', 'Logout').click();

    cy.url().should('eq', 'http://localhost:5173/login');
  });
});
