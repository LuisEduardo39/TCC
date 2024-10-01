/// <reference types="cypress" />

describe('003 - Logout', () => {
    it('C003.001 - Logout ', () => {
        //Chegar na tela https://www.saucedemo.com/inventory.html
        //metodo login criado no arquivo login.js
        cy.login('standard_user','secret_sauce')
        //Verificação
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

        //C003.001 - Logout 
        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test="logout-sidebar-link"]').click()
        //Verificação
        cy.url().should('eq', 'https://www.saucedemo.com/');
    });
});