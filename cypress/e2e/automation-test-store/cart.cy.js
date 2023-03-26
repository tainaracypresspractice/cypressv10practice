/// <reference types="cypress" />
///<reference types="@cypress/xpath"/>



describe('Cart', () => {

  var cartTotal = 0

  function sumToCartTotal($productTitle) {
    cy.then(() => {
      cy.get($productTitle).parentsUntil('.thumbnails')
        .find('.price').children('.oneprice').invoke('text')
        .then(($productPrice) => {
          $productPrice = $productPrice.replace('$', '')
          cartTotal = cartTotal + parseFloat($productPrice)
        }).then(() => {
          cy.log(cartTotal)
        })
    })
  }

  it('Cart total is correct', () => {
    cy.fixture('products.json').then(products => {
      const product1 = products.cart.product_1.title

      cy.get('.fixed .prdocutname').contains(product1)
        .then(($productTitle) => {
          //Add product_1 to the cart
          cy.get($productTitle).parentsUntil('.thumbnails').find('.productcart').click()

          //Sums product_1 to the total
          sumToCartTotal($productTitle)
        })

      const product2 = products.cart.product_2.title
      cy.get('.fixed .prdocutname').contains(product2)
        .then(($productTitle) => {
          //Add product_2 to the cart
          cy.get($productTitle).parentsUntil('.thumbnails').find('.productcart').click()

          //Sums product_2 to the total
          sumToCartTotal($productTitle)
          
        }).then(() => {
          cy.log(cartTotal)
          cy.get('.cart_total').then(($pageCartTotal) => {
            $pageCartTotal = $pageCartTotal.replace('$', '')

            //Assert cart total
            expect(cartTotal).to.equal($pageCartTotal)
          })
        })
      
      
    })

  });
});

