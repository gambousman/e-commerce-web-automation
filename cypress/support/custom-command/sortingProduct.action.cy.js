let data

before(() => {
    cy.fixture('elements').then((sel)=> {
        data = sel
    })
})

Cypress.Commands.add('sortByPopularity', () => {
    cy.get(data.sorting.storeLink).should('exist').and('be.visible').click()
    cy.get(data.sorting.sortingField).select('popularity')
    cy.get(data.sorting.sortingField).invoke('text').then((message) => {
        expect(message).to.contain('Sort by popularity')
        cy.log(message)
    
})
})

Cypress.Commands.add('sortByAverageRating', () => {
    cy.get(data.sorting.storeLink).should('exist').and('be.visible').click()
    cy.get(data.sorting.sortingField).select('rating')
    cy.get(data.sorting.sortingField).invoke('text').then((message) => {
        expect(message).to.contain('Sort by average rating')
        cy.log(message)
    
})
})

Cypress.Commands.add('sortByLatest', () => {
    cy.get(data.sorting.storeLink).should('exist').and('be.visible').click()
    cy.get(data.sorting.sortingField).select('date')
    cy.get(data.sorting.sortingField).invoke('text').then((message) => {
        expect(message).to.contain('Sort by latest')
        cy.log(message)
    
})
})

Cypress.Commands.add('sortByPriceLowToHigh', () => {
    cy.get(data.sorting.storeLink).should('exist').and('be.visible').click()
    cy.get(data.sorting.sortingField).select('price')
    cy.get(data.sorting.sortingField).invoke('text').then((message) => {
        expect(message).to.contain('Sort by price: low to high')
        cy.log(message)
    
})
})

Cypress.Commands.add('sortByPriceHighToLow', () => {
    cy.get(data.sorting.storeLink).should('exist').and('be.visible').click()
    cy.get(data.sorting.sortingField).select('price-desc')
    cy.get(data.sorting.sortingField).invoke('text').then((message) => {
        expect(message).to.contain('Sort by price: high to low')
        cy.log(message)
    
})
})