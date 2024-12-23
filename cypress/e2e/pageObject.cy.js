/// <reference types="cypress" />

describe('Realizar Login do usuário registrado', () => {

    it('Deve fazer o login', () => {
      // Acessa a página de login
      cy.visit('http://lojaebac.ebaconline.art.br'); 

      cy.get('.header-main')
      cy.get('.icon-user-unfollow').click();
  
      // Aguarda até que o campo de username esteja visível
      cy.get('body').should('be.visible'); // Verifica se a página carregou
  
      // Verifica se o campo de login realmente existe
      cy.get('#username', { timeout: 10000 }).should('exist');  // Confirma que o campo de username existe
  
      // Preenche o campo de nome de usuário (email)
      cy.get('#username').type('gestruldes@gmail.com.br');
  
      // Preenche o campo de senha
      cy.get('#password').type('GD*peToHNJ1#c$sgk08EaYJQ');
  
      // Clica no botão de login
      cy.get('.woocommerce-form > .button').click();
  
      // Verifica se o login foi bem-sucedido (exemplo: página "Minha Conta")
      cy.url().should('include', '/minha-conta');  // Verifica se foi redirecionado para a página 'Minha Conta'
    });
  
  });
  