class LoginPageLocatore{

    getPhoneNumberField(){
        return cy.get('[placeholder="Enter 10-digit mobile number"]');
    }
    getOTPField(){
        return cy.get('[placeholder="Enter your 6-digit OTP here"]');
    }
    getOwnerNameField(){
        return cy.get('[placeholder="Enter Owner’s Name"]');
    }
    getEmailField(){
        return cy.get('[placeholder="Enter Email Address here"]');
    }
    getBusinessNameField(){
        return cy.get('[placeholder="Name of your business"]');
    }
    getPinCodeField(){
        return cy.get('[placeholder="6 digit pincode"]');
    }


}

export default LoginPageLocatore;