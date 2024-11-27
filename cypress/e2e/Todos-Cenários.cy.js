/// <reference types="cypress" />

describe('Todos-Cenários', () => {

    //001-Acessar
    it('C001.001 - Acessar URL Swag labs', () => {
        cy.visit("https://www.saucedemo.com/")
        //Verificação
        cy.get('.login_logo').should('contain','Swag Labs')
    });

    //002-Login
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

    //003-Logout
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

    //004-Filtro
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

    //005-Visualização
    it('C005.001 - Visualizar pagina do produto', () => {
        //chegar na tela https://www.saucedemo.com/inventory-item.html?id=4
        //metodo visualizacao criado no arquivo visualizacao.js
        cy.visualizacao()
    });

    //006-Carrinho
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

    //007-Comprar
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