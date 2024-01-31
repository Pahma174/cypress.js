describe('Автотесты формы логина и пароля на [login.qa.studio]', () => {
    const validUsername = 'german@dolnikov.ru';
    const validPassword = 'iLoveqastudio1';
  
    it('Проверка валидации при некорректном логине', () => {
      cy.visit('https://login.qa.studio');
  
      // Вводим некорректный логин без @
      cy.get('#mail').type('invalidUsername');
      cy.get('#pass').type(validPassword);
  
      // Проверяем, что появилось сообщение об ошибке
      cy.get('#messageHeader').should('be.hidden', { timeout: 10000, force: true });
    });
  
    it('Проверка валидации при пустом логине', () => {
      cy.visit('https://login.qa.studio');
  
      // Оставляем поле логина пустым
      cy.get('#mail').clear();
      cy.get('#pass').type(validPassword);
  
      // Проверяем, что кнопка входа неактивна
      cy.get('#loginButton').should('be.disabled');
    });
  
    it('Проверка позитивного сценария авторизации', () => {
      cy.visit('https://login.qa.studio');
  
      // Вводим правильный логин и пароль
      cy.get('#mail').type(validUsername);
      cy.get('#pass').type(validPassword);
  
      // Нажимаем кнопку войти
      cy.get('#loginButton').click();
  
      // Проверяем, что отображается нужный текст после успешной авторизации
      cy.get('#messageHeader').should('contain', 'Авторизация прошла успешно');
  
      // Проверяем, что кнопка крестик отображается
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });
  });
  