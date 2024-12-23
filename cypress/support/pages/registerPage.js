class RegisterPage {

    // Seletor  campo de email
    get emailField() {
      return cy.get('#reg_email');
    }
  
    // Seletor  campo de senha
    get passwordField() {
      return cy.get('#reg_password');
    }
  
    // Seletor para o botão de registro
    get registerButton() {
      return cy.get(':nth-child(4) > .button');
    }
  
    // Preenchendo o formulário de registro de usuário
    register(email, password) {
      this.emailField.type(email);
      this.passwordField.type(password);
      this.registerButton.click();
    }
  }
  
  export default new RegisterPage();
  