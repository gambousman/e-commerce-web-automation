describe('Filtering Product by Category Test', () => {
        
    it('Filter by accessories category', () => {
        cy.filterByAccessoriescategory()
        
    })

    it('Filter by men category', () => {
        cy.filterByMencategory()
    })

    it('Filter By Mens Jeans category', () => {
        cy.filterByMensJeanscategory()
    })

    it('Filter By Mens Shirts category', () => {
        cy.filterByMensShirtscategory()
    })

    it('Filter By Mens Shoes category', () => {
        cy.filterByMensShoescategory()
    })

    it('Filter By Purses And Handbags category', () => {
        cy.filterByPursesAndHandbagscategory()
    })

    it('Filter By Women category', () => {
        cy.filterByWomencategory()
    })

    it('Filter By Women Jeans category', () => {
        cy.filterByWomenJeanscategory()
    })

    it('Filter By Women Shirts category', () => {
        cy.filterByWomenShirtscategory()
    })

    it('Filter By Women Shoes category', () => {
        cy.filterByWomenShoescategory()
    })
    
});   