const { faker } = require("@faker-js/faker");

describe('Sauce Demo Purchase Flow', () => {
    it('should add products to the cart and complete checkout', () => {
        
        cy.addItemToCart()
        cy.checkout()

        // // Select products
        // const product = 'Anchor Bracelet';
        // const product2 = 'Blue Denim Shorts';
        // cy.get('.ast-col-sm-12').each(($el) => {
        //     cy.wrap($el).find('.woocommerce-loop-product__title').invoke('text').then((text) => {
        //         if (text.trim() === product || text.trim() === product2) {
        //             cy.wrap($el).find('[data-quantity="1"]').click();
        //         }
        //     });
        // });
        
        // // Navigate to cart
        // cy.get('').eq(1).click({ force: true });
        // cy.get('')
        // .should('contain.text', product);
        // cy.get('')
        // .should('contain.text', product2);

        
        // // Checkout process
        // cy.get('').click();
        // cy.get('').type('John');
        // cy.get('').type('James')
        // cy.get('').type('Ameesh Limited');
        // cy.get('').click()
        // cy.get('').type('Nigeria{enter}');
        // cy.get('').type('123 Main St');
        // cy.get('').type('Osogbo');
        // cy.get('').click();
        // cy.get('').type('Osun{enter}');
        // cy.get('').type('09078906709');
        // cy.get('').type(faker.internet.email());
        // cy.get('').click();
        // cy.get('').should('contain.text', 'Thank you. Your order has been received.');


        

        
        // // Verify summary page
        // cy.get('.summary_info_label').contains('Payment Information').should('exist');
        // cy.get('.summary_info_label').contains('Shipping Information').should('exist');
        
        // // Complete purchase
        // cy.get('#finish').click();
        // cy.get('.complete-header').should('contain.text', 'Thank you for your order!');
    });
});