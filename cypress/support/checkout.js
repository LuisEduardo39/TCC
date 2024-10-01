/// <reference types="cypress" />

Cypress.Commands.add('checkout', () => {

     //metodo adicionarCarrinho criado no arquivo adicionarCarrinho.js
     cy.adicionarCarrinho()

     //C007.001 - Checkout
     cy.get('[data-test="checkout"]').click()
     //Verificação
     cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html');
    
});