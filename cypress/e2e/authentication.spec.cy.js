
describe('SignUp Test', () => {
        
    it('SignUp with existing credentials', () => {
        cy.signupwithexistingcredentials()
        
    });

    it('SignUp with valid credentials', () => {
        cy.signupwithvalidcredentials()
        
    });
});   

describe('Login Test Test', () => {

    it('login with invalid credentials', () => {
        cy.loginwithinvalidcredentials()
        
    });
        
    it('login with valid credentials', () => {
        cy.loginwithvalidcredentials()
        
    });

    
});   