/// <reference types="cypress" />

describe('006 - Carrinho', () => {
    it('C006.001 - Visualizar carrinho', () => {
        //Chegar na tela https://www.saucedemo.com/inventory.html
        //metodo login criado no arquivo login.js
        cy.login('standard_user','secret_sauce')
        //Verificação
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

        //C006.001 - Visualizar carrinho  
        cy.get('[data-test="shopping-cart-link"]').click()
        //Verificação
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
    });

    it('C006.002 - Adicionar produto ao carrinho', () => {
        //metodo adicionarCarrinho criado no arquivo adicionarCarrinho.js
        cy.adicionarCarrinho()
    });

    it('C006.003 - Remover produto do carrinho', () => {
        //metodo adicionarCarrinho criado no arquivo adicionarCarrinho.js
        cy.adicionarCarrinho()

        //C006.003 - Remover produto do carrinho
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        //Verificação
        cy.get('[data-test="inventory-item-name"]').should('not.exist');
    });
});