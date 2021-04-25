/// <reference types="cypress" />

const faker = require("faker");

describe("Create an Account", () => {
 // Cypress._.times(4, () => {
    it("sucessfully", () => {
      const day = faker.random.number({ min: 1, max: 30 });
      const year = faker.random.number({ min: 1900, max: 2020 });
      const account = {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        password: faker.internet.password(),
        company: faker.company.companyName(),
        address: faker.address.cityName(),
        city: faker.address.city(),
        postalCode: faker.address.zipCode("#####"),
        additionalInfo: faker.lorem.word(),
        homePhone: faker.phone.phoneNumberFormat(),
        mobilePhone: faker.phone.phoneNumberFormat(),
        assignReference: faker.address.cityName(),
        monthsBirth: faker.date.month(),
        dayBirth: day.toString(),
        yearBirth: year.toString(),
      };
 
      cy.gui_createAccount(account);
      cy.url().should(
        "eq",
        `${Cypress.config("baseUrl")}?controller=my-account`
      );
      cy.get(".page-heading").should("contain", "My account");
    });
 // });
});
