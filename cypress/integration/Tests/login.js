/// <reference types="Cypress" />
import LoginPage from '../PageObjects/LoginPage'
import HomePage from '../PageObjects/HomePage'

describe('Login Suite', ()=>{


  before(()=>{
    const loginPage=new LoginPage()
    const homePage=new HomePage()
    cy.visit(Cypress.env('url'));
    cy.login('ulises.ibarguren+18@gmail.com', 'Password')
      
  })
    
    

  it('User Login', () => {
    cy.title().should('eq', 'nopCommerce demo store')
  })
})