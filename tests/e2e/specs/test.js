// https://docs.cypress.io/api/introduction/api.html

describe('Jiu Jitsu App Test', () => {
    it('Visits the app root url', () => {
        cy.visit('/');
        cy.contains('h1', 'Welcome to Your Vue.js + TypeScript App');
    });
});