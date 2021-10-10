/// <reference types="Cypress" />
import RegisterPage from '../PageObjects/RegisterPage'
import LoginPage from '../PageObjects/LoginPage'
import HomePage from '../PageObjects/HomePage'

describe('Register Test Suite', function()
{
const registerPage =new RegisterPage()
  before(()=>{
    cy.visit(Cypress.env('url'));
  })

  it('User Registration', () => {
    cy.register('ulises.ibarguren+18@gmail.com', 'Password')
    registerPage.getResult().should('have.text',"Your registration completed");

  })
})
