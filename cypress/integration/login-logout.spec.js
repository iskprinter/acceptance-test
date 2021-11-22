// untitled.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Login, Logout', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://iskprinter.com')
  })

  afterEach(() => {
    Cypress.config('chromeWebSecurity', true);
  })

  it('redirects from www. to .', () => {
    cy.visit('https://www.iskprinter.com')
    cy.location('host').should('eq', 'iskprinter.com')
  })

  it('redirects from login if no token', () => {
    cy.location('pathname').should('eq', '/login')
  })

  // it('redirects to Eve SSO after clicking login button', () => {
  //   Cypress.config('chromeWebSecurity', false);
  //   cy.contains('Log In With Eve')
  //     .should('have.attr', 'href')
  //     .click()
  //   cy.location('host').should('eq', 'login.eveonline.com')
  // })
})
