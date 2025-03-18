
describe('SignUp Test', () => {
        
    it('SignUp with valid credentials', () => {
        cy.visit('/')
        cy.signupwithexistingcredentials()
        
    });

    it('SignUp with valid credentials', () => {
        cy.visit('/')
        cy.signupwithvalidcredentials()
        
    });
});   

describe('Login Test Test', () => {

    it('login with invalid credentials', () => {
        cy.visit('/')
        cy.loginwithinvalidcredentials()
        
    });
        
    it('login with valid credentials', () => {
        cy.visit('/')
        cy.loginwithvalidcredentials()
        
    });

    
});   