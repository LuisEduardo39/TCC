/// <reference types="cypress" />

describe('007 - Comprar', () => {
    it('C007.001 - Checkout', () => {
        //metodo checkout criado no arquivo checkout.js
        cy.checkout()
    });

    it('C007.002 - Informações completas', () => {
        //Chegar na tela https://www.saucedemo.com/checkout-step-one.html
        //metodo checkout criado no arquivo checkout.js
        cy.checkout()

        //C007.002 - Informações completas
        cy.get('[data-test="firstName"]').type("Fist Name")
        cy.get('[data-test="lastName"]').type("Last Name")
        cy.get('[data-test="postalCode"]').type("Zip/Postal Code")
        cy.get('[data-test="continue"]').click()
        //Verificação
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html')
    });

    it('C007.003 - Finalizar compra', () => {
        //Chegar na tela https://www.saucedemo.com/checkout-step-one.html
        //metodo checkout criado no arquivo checkout.js
        cy.checkout()

        //Chegar na tela https://www.saucedemo.com/checkout-step-two.html
        cy.get('[data-test="firstName"]').type("Fist Name")
        cy.get('[data-test="lastName"]').type("Last Name")
        cy.get('[data-test="postalCode"]').type("Zip/Postal Code")
        cy.get('[data-test="continue"]').click()
        //Verificação
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html')

        //C007.006 - Finalizar compra
        cy.get('[data-test="finish"]').click()
        //Verificação
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')
    });
});