describe('Sorting Product Test', () => {
        
    it('Sort Product by popularity', () => {
        cy.sortByPopularity()
        
    })

    it('Sort Product by average rating', () => {
        cy.sortByAverageRating()
        
    })

    it('Sort Product by latest', () => {
        cy.sortByLatest()
        
    })

    it('Sort Product by latest', () => {
        cy.sortByPriceLowToHigh()
        
    })

    it('Sort Product by latest', () => {
        cy.sortByPriceHighToLow()
        
    })
    
});   