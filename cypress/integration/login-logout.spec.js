describe('Login, Logout', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('redirects from login if no token', () => {
    cy.visit('/');
    cy.window((window) => window.localStorage.clear());
    cy.visit('/');
    cy.location('pathname').should('eq', '/login');
  });

  // it('has a login button with the correct URL', () => {
    // cy.visit(`https://${Cypress.env('FRONTEND_HOSTNAME')}`);
  //   Cypress.config('chromeWebSecurity', false);
  //   cy.contains('Log In With Eve')
  //     .should('have.attr', 'href')
  //     .click();
  //   cy.location('host').should('eq', 'login.eveonline.com');
  // });

});
