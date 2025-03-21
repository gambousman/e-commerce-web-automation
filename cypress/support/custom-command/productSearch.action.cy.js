let data

before(() => {
    cy.fixture('elements').then((sel)=> {
        data = sel
    })
})


Cypress.Commands.add('searchAnchorBracelet', () => {
    cy.get(data.search.storeLink).should('exist').and('be.visible').click()
    cy.get(data.search.searchField).should('exist').and('be.visible').type('Anchor Bracelet')
    cy.get(data.search.searchBtn).should('exist').and('be.visible').click()
    cy.get(data.search.confirmSearchedItem).contains('Anchor Bracelet')
    
})


Cypress.Commands.add('searchGreenTshirt', () => {
    cy.get(data.search.storeLink).should('exist').and('be.visible').click()
    cy.get(data.search.searchField).should('exist').and('be.visible').type('Green Tshirt')
    cy.get(data.search.searchBtn).should('exist').and('be.visible').click()
    cy.get(data.search.confirmSearchedItem).contains('Green Tshirt')
    
})

Cypress.Commands.add('searchRedShoes', () => {
    cy.get(data.search.storeLink).should('exist').and('be.visible').click()
    cy.get(data.search.searchField).should('exist').and('be.visible').type('Red Shoes')
    cy.get(data.search.searchBtn).should('exist').and('be.visible').click()
    cy.get(data.search.confirmSearchedItem).contains('Red Shoes')
    
})

Cypress.Commands.add('searchBlueShoes', () => {
    cy.get(data.search.storeLink).should('exist').and('be.visible').click()
    cy.get(data.search.searchField).should('exist').and('be.visible').type('Blue Shoes')
    cy.get(data.search.searchBtn).should('exist').and('be.visible').click()
    cy.get(data.search.confirmSearchedItem).contains('Blue Shoes')
    
})