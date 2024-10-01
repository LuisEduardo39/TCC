/// <reference types="cypress" />

describe('001 - Acessar', () => {
    it('C001.001 - Acessar URL Swag labs', () => {
        cy.visit("https://www.saucedemo.com/")
        //Verificação
        cy.get('.login_logo').should('contain','Swag Labs')
    });
});