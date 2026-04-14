class LoginPageLocatore{

    getPhoneNumberField(){
        return cy.get('[placeholder="Enter 10-digit mobile number"]');
    }
    getOTPField(){
        return cy.get('[placeholder="Enter your 6-digit OTP here"]');
    }


}

export default LoginPageLocatore;