/// <reference types="cypress" />

Cypress.Commands.add('visualizacao', () => {

    //Chegar na tela https://www.saucedemo.com/inventory.html
    //metodo login criado no arquivo login.js
    cy.login('standard_user','secret_sauce')
    //Verificação
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

    //C005.001 - Visualizar pagina do produto  
    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click()
    //Verificação
    cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=4');    
});