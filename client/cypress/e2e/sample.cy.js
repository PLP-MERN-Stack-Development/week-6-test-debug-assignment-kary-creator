// sample.cy.js - Sample Cypress E2E test

describe('Homepage', () => {
  it('should display the post list or loading indicator', () => {
    cy.visit('/');
    cy.contains('Loading').should('exist');
    // If posts load, check for a list item (optional, depends on mock/server)
    // cy.get('ul').find('li').should('have.length.greaterThan', 0);
  });
}); 