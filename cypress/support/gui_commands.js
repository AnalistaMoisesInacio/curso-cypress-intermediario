// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/// <reference types="cypress" />

const url = "cy.visit('?controller=authentication&back=my-account')";
Cypress.Commands.add("login", () => {
  cy.visit(url);
  cy.get('[id="email"]').type(Cypress.env("user_name"));
  cy.get('[data-validate="isPasswd"]').type(Cypress.env("user_password"));
  cy.get('[id="SubmitLogin"]').click();
});

Cypress.Commands.add("logout", () => {
  cy.get('[class="logout"]').click();
});

Cypress.Commands.add("gui_createAccount", (account) => {

  cy.visit(url);
  cy.get("#email_create").type(account.email);
  cy.get("#SubmitCreate").click();
  cy.get("#id_gender1").check();
  cy.get("#customer_firstname").type(account.firstName);
  cy.get("#customer_lastname").type(account.lastName);
  cy.get("#passwd").type(account.password);
  //Date of Birth
  cy.get("#days").select(account.dayBirth);
  cy.get("#months").select(account.monthsBirth);
  cy.get("#years").select(account.yearBirth);

  cy.get("#newsletter").check();
  cy.get("#company").type(account.company);
  cy.get("#address1").type(account.address);
  cy.get("#city").type(account.city);
  cy.get("#id_state").select("Texas");
  cy.get("#postcode").type(account.postalCode);
  cy.get("#other").type(account.additionalInfo);
  cy.get("#phone").type(account.homePhone);
  cy.get("#phone_mobile").type(account.mobilePhone);
  cy.get("#alias").clear();
  cy.get("#alias").type(account.assignReference);
  cy.get("#submitAccount").click();
});
