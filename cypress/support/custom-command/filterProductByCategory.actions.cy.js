let data

before(() => {
    cy.fixture('elements').then((sel)=> {
        data = sel
    })
})

Cypress.Commands.add('filterByAccessoriescategory', () => {
    cy.get(data.filterbycategory.storeLink).should('exist').and('be.visible').click()
    cy.get(data.filterbycategory.filterField).select('accessories')
    cy.get(data.filterbycategory.categoryTitle).invoke('text').then((message) => {
        expect(message).to.contain('Accessories')
        cy.log(message)
    })
    
})

Cypress.Commands.add('filterByMencategory', () => {
    cy.get(data.filterbycategory.storeLink).should('exist').and('be.visible').click()
    cy.get(data.filterbycategory.filterField).select('men')
    cy.get(data.filterbycategory.categoryTitle).invoke('text').then((message) => {
        expect(message).to.contain('Men')
        cy.log(message)
    })
    
})

Cypress.Commands.add('filterByMensJeanscategory', () => {
    cy.get(data.filterbycategory.storeLink).should('exist').and('be.visible').click()
    cy.get(data.filterbycategory.filterField).select('mens-jeans')
    cy.get(data.filterbycategory.categoryTitle).invoke('text').then((message) => {
        expect(message).to.contain("Men's Jeans")
        cy.log(message)
    })
    
})

Cypress.Commands.add('filterByMensShirtscategory', () => {
    cy.get(data.filterbycategory.storeLink).should('exist').and('be.visible').click()
    cy.get(data.filterbycategory.filterField).select('mens-shirts')
    cy.get(data.filterbycategory.categoryTitle).invoke('text').then((message) => {
        expect(message).to.contain("Men's Shirts")
        cy.log(message)
    })
    
})

Cypress.Commands.add('filterByMensShoescategory', () => {
    cy.get(data.filterbycategory.storeLink).should('exist').and('be.visible').click()
    cy.get(data.filterbycategory.filterField).select('mens-shoes')
    cy.get(data.filterbycategory.categoryTitle).invoke('text').then((message) => {
        expect(message).to.contain("Men's Shoes")
        cy.log(message)
    })
    
})

Cypress.Commands.add('filterByPursesAndHandbagscategory', () => {
    cy.get(data.filterbycategory.storeLink).should('exist').and('be.visible').click()
    cy.get(data.filterbycategory.filterField).select('purses-and-handbags')
    cy.get(data.filterbycategory.categoryTitle).invoke('text').then((message) => {
        expect(message).to.contain('Purses And Handbags')
        cy.log(message)
    })
    
})

Cypress.Commands.add('filterByWomencategory', () => {
    cy.get(data.filterbycategory.storeLink).should('exist').and('be.visible').click()
    cy.get(data.filterbycategory.filterField).select('women')
    cy.get(data.filterbycategory.categoryTitle).invoke('text').then((message) => {
        expect(message).to.contain('Women')
        cy.log(message)
    })
    
})

Cypress.Commands.add('filterByWomenJeanscategory', () => {
    cy.get(data.filterbycategory.storeLink).should('exist').and('be.visible').click()
    cy.get(data.filterbycategory.filterField).select('womens-jeans')
    cy.get(data.filterbycategory.categoryTitle).invoke('text').then((message) => {
        expect(message).to.contain("Women's Jeans")
        cy.log(message)
    })
    
})

Cypress.Commands.add('filterByWomenShirtscategory', () => {
    cy.get(data.filterbycategory.storeLink).should('exist').and('be.visible').click()
    cy.get(data.filterbycategory.filterField).select('womens-shirts')
    cy.get(data.filterbycategory.categoryTitle).invoke('text').then((message) => {
        expect(message).to.contain("Women's Shirts")
        cy.log(message)
    })
    
})

Cypress.Commands.add('filterByWomenShoescategory', () => {
    cy.get(data.filterbycategory.storeLink).should('exist').and('be.visible').click()
    cy.get(data.filterbycategory.filterField).select('womens-shoes')
    cy.get(data.filterbycategory.categoryTitle).invoke('text').then((message) => {
        expect(message).to.contain("Women's Shoes")
        cy.log(message)
    })
    
})
