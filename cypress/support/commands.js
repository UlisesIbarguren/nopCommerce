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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="Cypress" />
import LoginPage from '../integration/PageObjects/LoginPage';
import RegisterPage from '../integration/PageObjects/RegisterPage'

Cypress.Commands.add('login', (email, password) =>{
    const loginPage =new LoginPage()
    loginPage.getLoginLink().click();
    loginPage.getEmail().type(email);
    loginPage.getPassword().type(password);
    loginPage.getLoginButton().click();


})

Cypress.Commands.add('register', (email, password) =>{
    const registerPage =new RegisterPage()
    registerPage.getRegisterLink().click();
    registerPage.selectMaleGender().click();
    registerPage.getFirstName().type('Ulises');
    registerPage.getLastName().type('Ibarguren');
    registerPage.selectDayOfBirth().select('10');
    registerPage.selectMonthOfBirth().select('July');
    registerPage.selectYearofBirth().type('1980');
    registerPage.getemail().type(email)
    registerPage.getPassword().type(password);
    registerPage.getConfirmPassword().type(password);
    registerPage.getRegisterButton().click();

})