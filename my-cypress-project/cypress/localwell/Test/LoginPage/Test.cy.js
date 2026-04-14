/// <reference types="cypress" />
import LoginPageLocatore from "../../Locator/LoginPage.cy";


describe('login page Test', () => {

const loginPageLocatore = new LoginPageLocatore();

before(() => {
    cy.visit('https://staging-partners.localwell.in/login');
});

    // Test Case:Verify user can register a new business with valid details.
    // Expected Result: User should be able to register a new business successfully and receive a confirmation message.
    // Test Case Id: TC_LP_001
    it('Verify user can register a new business with valid details.', () => {
       const phone = '10' + Date.now().toString().slice(-9);
        loginPageLocatore.getPhoneNumberField().type(phone);
        cy.wait(3000);
        cy.contains('Submit to Login').click();
        loginPageLocatore.getOTPField().type('0000000');
        


    });
});



