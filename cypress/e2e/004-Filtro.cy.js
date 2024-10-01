/// <reference types="cypress" />

describe('004 - Filtro', () => {
    it('C004.001 - Filtro de Name (Z to A)  ', () => {
        //Chegar na tela https://www.saucedemo.com/inventory.html
        //metodo login criado no arquivo login.js
        cy.login('standard_user','secret_sauce')
        //Verificação
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

        //C004.001 - Filtro de Name (Z to A) 
        cy.get('[data-test="product-sort-container"]').select('Name (Z to A)')
        //Verificação
        cy.get('[data-test="item-3-title-link"] > [data-test="inventory-item-name"]').should('contain','Test.allTheThings() T-Shirt (Red)')      
    });

    it('C004.002 - Filtro de Price (low to high)', () => {
        //Chegar na tela https://www.saucedemo.com/inventory.html
        //metodo login criado no arquivo login.js
        cy.login('standard_user','secret_sauce')
        //Verificação
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

        //C004.002 - Filtro de Price (low to high) 
        cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
        //Verificação
        cy.get('[data-test="item-2-title-link"] > [data-test="inventory-item-name"]').should('contain','Sauce Labs Onesie')      
    });

    it('C004.003 - Filtro de Price (high to low)', () => {
        //Chegar na tela https://www.saucedemo.com/inventory.html
        //metodo login criado no arquivo login.js
        cy.login('standard_user','secret_sauce')
        //Verificação
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

        //C004.003 - Filtro de Price (high to low) 
        cy.get('[data-test="product-sort-container"]').select('Price (high to low)')
        //Verificação
        cy.get('[data-test="item-5-title-link"] > [data-test="inventory-item-name"]').should('contain','Sauce Labs Fleece Jacket')      
    });
});