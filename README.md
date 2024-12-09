# Projeto de Testes E2E com Cypress

## Descrição
Este projeto contém testes end-to-end (E2E) automatizados utilizando o framework [Cypress](https://www.cypress.io/). Os testes cobrem diversos cenários de uso do site [Swag Labs](https://www.saucedemo.com/).

## Estrutura dos Testes
Os testes estão organizados em diferentes cenários, conforme descrito abaixo:

### Cenários de Acesso
- **C001.001 - Acessar URL Swag Labs**: Verifica se a página inicial do Swag Labs é carregada corretamente.

### Cenários de Login
- **C002.001 - Login com sucesso**: Verifica se o login com credenciais válidas é bem-sucedido.
- **C002.002 - Login sem sucesso, username incorreto**: Verifica a mensagem de erro ao tentar logar com um nome de usuário incorreto.
- **C002.003 - Login sem sucesso, senha incorreta**: Verifica a mensagem de erro ao tentar logar com uma senha incorreta.

### Cenários de Logout
- **C003.001 - Logout**: Verifica se o logout é realizado corretamente.

### Cenários de Filtro
- **C004.001 - Filtro de Name (Z to A)**: Verifica se o filtro de nome (Z to A) funciona corretamente.
- **C004.002 - Filtro de Price (low to high)**: Verifica se o filtro de preço (baixo para alto) funciona corretamente.
- **C004.003 - Filtro de Price (high to low)**: Verifica se o filtro de preço (alto para baixo) funciona corretamente.

### Cenários de Visualização
- **C005.001 - Visualizar página do produto**: Verifica se a página de detalhes do produto é carregada corretamente.

### Cenários de Carrinho
- **C006.001 - Visualizar carrinho**: Verifica se a página do carrinho é carregada corretamente.
- **C006.002 - Adicionar produto ao carrinho**: Verifica se um produto pode ser adicionado ao carrinho.
- **C006.003 - Remover produto do carrinho**: Verifica se um produto pode ser removido do carrinho.

### Cenários de Compra
- **C007.001 - Checkout**: Verifica se a página de checkout é carregada corretamente.
- **C007.002 - Informações completas**: Verifica se o preenchimento completo das informações de checkout funciona corretamente.
- **C007.003 - Finalizar compra**: Verifica se a compra pode ser finalizada corretamente.

## Instalação
Para instalar e configurar o projeto, siga os passos abaixo:

1. Clone o repositório:
    ```sh
    git clone https://github.com/LuisEduardo39/TCC.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd TCC
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```

## Uso
Para rodar os testes, utilize o comando:
```sh
    npx cypress open
```
1. Clicar em E2E Testing
2. Clicar na opção Electron como browser
3. Selecionar qual teste deseja iniciar

Para rodar os testes em modo headless (sem interface gráfica):
```sh
    npx cypress run
```
