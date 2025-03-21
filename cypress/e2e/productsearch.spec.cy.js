describe('Product Search Test', () => {
        
    it('Search Anchor Bracelet', () => {
        cy.searchAnchorBracelet()
    })
    
    it('Search Green Tshirt', () => {
        cy.searchGreenTshirt()
    })

    it('Search Red Shoes', () => {
        cy.searchRedShoes()
    })

    it('Search Blue Shoes', () => {
        cy.searchBlueShoes()
    })
    
});   

