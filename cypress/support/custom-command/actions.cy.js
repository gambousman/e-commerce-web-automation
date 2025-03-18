import {faker, Faker} from '@faker-js/faker'

let data

before(() => {
    cy.fixture('selectors').then((sel)=> {
        data = sel
    })
})

Cypress.Commands.add('signupwithvalidcredentials', () => {
    cy.get(data.signUp.accountBtn).should('exist').and('be.visible').click()
    cy.get(data.signUp.usernameField).should('exist').and('be.visible').type(faker.person.firstName())
    cy.get(data.signUp.emailField).should('exist').and('be.visible').type('neemtester2@gmail.com')
    cy.get(data.signUp.passwordField).should('exist').and('be.visible').type('Neem1234')
    cy.get(data.signUp.registerBtn).should('exist').and('be.visible').click()
    cy.get(data.logout.logoutBtn).should('exist').and('be.visible').click()
    
})

Cypress.Commands.add('signupwithexistingcredentials', () => {
    cy.get(data.signUp.accountBtn).click()
    cy.get(data.signUp.usernameField).type('Tester2')
    cy.get(data.signUp.emailField).type('neemtester2@gmail.com')
    cy.get(data.signUp.passwordField).type('Neem1234')
    cy.get(data.signUp.registerBtn).click()
    cy.get(data.signUp.errorMessage).contains('An account is already registered with your email address')
    
})

Cypress.Commands.add('loginwithvalidcredentials', () => {
    cy.get(data.login.accountBtn).should('exist').and('be.visible').click()
    cy.get(data.login.userName).should('exist').and('be.visible').type('Tester2')
    cy.get(data.login.userPassword).should('exist').and('be.visible').type('Neem1234')
    cy.get(data.login.loginBtn).should('exist').and('be.visible').click()
    cy.get(data.login.confirmDashboard).contains('Dashboard')
    
})

Cypress.Commands.add('loginwithinvalidcredentials', () => {
    cy.get(data.login.accountBtn).should('exist').and('be.visible').click()
    cy.get(data.login.userName).should('exist').and('be.visible').type('Tester2')
    cy.get(data.login.userPassword).should('exist').and('be.visible').type('Neem12345')
    cy.get(data.login.loginBtn).should('exist').and('be.visible').click()
    cy.get(data.login.invalidCredError).contains('The password you entered for the username Tester2 is incorrect.')
    
})