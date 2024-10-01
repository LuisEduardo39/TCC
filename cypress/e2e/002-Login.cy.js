/// <reference types="cypress" />

describe('002 - Login', () => {
    it('C002.001 - Login com sucesso', () => {
        //metodo login criado no arquivo login.js
        cy.login('standard_user','secret_sauce')
        //Verificação
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    });

    it('C002.002 - Login sem sucesso, username incorreto', () => {
        //metodo login criado no arquivo login.js
        cy.login('Incorreto','secret_sauce')
        //Verificação
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
    });

    it('C002.003 - Login sem sucesso, passoword incorreto incorreto', () => {
        //metodo login criado no arquivo login.js
        cy.login('standard_user','Incorreto')
        //Verificação
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
    });

});