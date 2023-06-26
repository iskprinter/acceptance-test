describe('Login, Logout', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('redirects from login if no token', () => {
    cy.window((window) => window.localStorage.clear());
    cy.visit('/');
    cy.location('pathname').should('eq', '/login');
  });

  // it('has a login button with the correct URL', () => {
  //   cy.contains('Log In With Eve')
  //     .should((loginButton) => {
  //       loginButton.should('have.attr', 'href');
  //   cy.location('host').should('eq', 'login.eveonline.com');
  // });

});
