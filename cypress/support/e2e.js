
          // Import commands.js using ES2015 syntax:
          import './commands';
          import 'allure-cypress/commands';
          import './custom-command/authentication.action.cy'
          import './custom-command/filterProductByCategory.actions.cy'
          import './custom-command/productSearch.action.cy'
          import './custom-command/sortingProduct.action.cy'
          before(() => {
            Cypress.on('uncaught:exception', () => {
                    return false
            })
     })  

         beforeEach(() => {
                cy.visit('/')
        })
          
        