import LoginPageLocatore from "../../Locator/LoginPage.cy";


describe('login page Test', () => {

const loginPageLocatore = new LoginPageLocatore();

before(() => {
    cy.visit('https://staging-partners.localwell.in/login');
});


    // Test Case:Verify user can register a new business with valid details.
    // Expected Result: User should be able to register a new business successfully and receive a confirmation message.
    // Test Case Id: TC_LP_001
    it('', () => {
        
    });
});



