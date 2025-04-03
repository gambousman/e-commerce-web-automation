let data

before(() => {
    cy.fixture('elements').then((sel)=> {
        data = sel
    })
})

Cypress.Commands.add('addItemToCart', () => {
    cy.get(data.addToCart.storeLink).should('exist').and('be.visible').click()
    const product = 'Anchor Bracelet';
        const product2 = 'Blue Denim Shorts';
        cy.get('.ast-col-sm-12').each(($el) => {
            cy.wrap($el).find('.woocommerce-loop-product__title').invoke('text').then((text) => {
                if (text.trim() === product || text.trim() === product2) {
                    cy.wrap($el).find(data.addToCart.addToCartBtn).click();
                }
            });
        });
    cy.get(data.addToCart.cartIcon).eq(1).click({ force: true });
    cy.get(data.addToCart.cartItem1).should('contain.text', product)
    cy.get(data.addToCart.cartItem2).should('contain.text', product2)
    
})

Cypress.Commands.add('checkout', () => { 
    cy.get(data.checkout.checkoutBtn).should('be.visible').click();
    cy.get(data.checkout.firstNameField).should('be.visible').type("RashTester");
    cy.get(data.checkout.lastNameField).should('be.visible').type("Tester");
    cy.get(data.checkout.billingCompanyField).should('be.visible').type("Ameesh Limited");
    cy.get(data.checkout.selectCountryDropdown).should('be.visible').click();
    cy.get(data.checkout.searchCountryField)
    .should('be.visible')
    .type("Nigeria{enter}"); 
    cy.get(data.checkout.addressField).should('be.visible').type("No 1, Test Street");
    cy.get(data.checkout.cityField).should('be.visible').type("Ilorin");
    cy.get(data.checkout.selectStateDropdown).should('be.visible').click();
    cy.get(data.checkout.searchStateField)
    .should('be.visible')
    .type("Kwara{enter}");
    cy.get(data.checkout.emailField).should('be.visible').type("rashTester@yopmail.com");
    cy.get(data.checkout.placeOrderButton).should('be.visible').click();
    cy.get(data.checkout.orderDetailsTitle).invoke('text').then((message)=> {
    expect(message).to.contain('Thank you. Your order has been received.')  
      cy.log(message)
  
    })
})