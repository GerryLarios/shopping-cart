describe('Add products to the cart', () => {
  it('Adds first product to the cart', () => {

    cy.visit('http://localhost:3000')

    const addToCartButton = cy.get('.shop-items:first-child :button').contains('Add to Cart')
    addToCartButton.should('be.enabled')
    addToCartButton.click()
    addToCartButton.should('be.disabled')

    const cartItemsTitle = cy.get('h2').contains('Cart Items')
    cartItemsTitle.should('be.visible')
  })
})
