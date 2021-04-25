/// <reference types="cypress" />

describe("Login", () => {
  it("sucessfully", () => {
    cy.login();
    cy.get(".page-heading").should("exist");
    cy.url().should("eq", Cypress.config().baseUrl + "?controller=my-account");
  });
});
