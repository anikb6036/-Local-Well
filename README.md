# LocalWell SDET Assignment

## 📌 Project Overview
This repository contains the QA deliverables for the LocalWell staging partner portal:

🔗 https://staging-partners.localwell.in/

The assignment focuses on:
- Manual Testing (Test Cases)
- Bug Identification
- Automation Strategy using Cypress

---

## ✅ Test Cases
Test cases are documented in an Excel file:

📄 `LocalWell_SDET_Assignment.xlsx`

It includes:
- Test Case ID
- Title
- Steps
- Expected Result
- Priority

Covers:
- Registration flow
- OTP verification
- Form validations
- Negative & edge cases

---

## 🐞 Bugs Identified
Key issues found in the system:

1. Hardcoded OTP (`000000`) works for all users (Security issue)
2. No rate limiting on OTP attempts
3. Weak validation for email/phone inputs
4. Duplicate registrations not properly handled
5. Poor or missing error messages

---

## ⚙️ Automation Testing Approach (Cypress)

### 🔹 Tech Stack
- Cypress (End-to-End Testing)
- JavaScript

---

### 🔹 Test Coverage
- User registration flow
- OTP verification
- Form validation (positive & negative cases)
- Navigation & session handling

---

### 🔹 Sample Test (Cypress)

```javascript
describe('Business Registration Flow', () => {

  it('should register new business successfully', () => {
    cy.visit('https://staging-partners.localwell.in/');

    cy.get('input[name="businessName"]').type('Test Business');
    cy.get('input[name="email"]').type('test123@mail.com');
    cy.get('input[name="phone"]').type('9999999999');

    cy.contains('Register').click();

    cy.get('input[name="otp"]').type('000000');
    cy.contains('Verify').click();

    cy.url().should('include', 'dashboard');
  });

});
