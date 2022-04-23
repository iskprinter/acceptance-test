describe('Ingress', () => {

  it('accepts traffic', () => {
    cy.visit('/');
  });

  it('redirects from http:// to https://', () => {
    const baseUrl = new URL(Cypress.config().baseUrl);
    baseUrl.protocol = 'http';
    cy.visit(baseUrl.toString());
    cy.location('protocol').should('eq', 'https:');
  });

  it('redirects from https://www. to https://', () => {
    const baseUrl = new URL(Cypress.config().baseUrl);
    baseUrl.host = `www.${baseUrl.host}`;
    cy.visit(baseUrl.toString());
    cy.location().should((loc) => {
      expect(loc.host).to.eq((new URL(Cypress.config().baseUrl)).host);
    });
  });

  it('redirects from http://www to https://', () => {
    const baseUrl = new URL(Cypress.config().baseUrl);
    baseUrl.protocol = 'http';
    baseUrl.host = `www.${baseUrl.host}`;
    cy.visit(baseUrl.toString());
    cy.location().should((loc) => {
      expect(loc.protocol).to.eq('https:');
      expect(loc.host).to.eq((new URL(Cypress.config().baseUrl)).host);
    });
  });

});
