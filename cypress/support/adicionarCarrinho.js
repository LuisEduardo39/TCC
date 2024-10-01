/// <reference types="cypress" />

Cypress.Commands.add('adicionarCarrinho', () => {

    //chegar na tela https://www.saucedemo.com/inventory-item.html?id=4
    //metodo visualizacao criado no arquivo visualizacao.js
    cy.visualizacao()

    //C006.002 - Adicionar produto ao carrinho
    cy.get('[data-test="add-to-cart"]').click()
    //Verificação
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Backpack')  
    
});