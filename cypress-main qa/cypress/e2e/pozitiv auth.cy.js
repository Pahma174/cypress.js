describe('Позитивный сценарий авторизации', () => {
    const validUsername = 'german@dolnikov.ru';
    const validPassword = 'iLoveqastudio1';
  
    it('Проверка позитивного сценария авторизации', () => {
      cy.visit('https://login.qa.studio');
  
      // Вводим правильный логин и пароль
      cy.get('#mail').type(validUsername);
      cy.get('#pass').type(validPassword);
  
      // Нажимаем кнопку войти
      cy.get('#loginButton').click();
  
      // Проверяем, что появилось сообщение об успешной авторизации
      cy.get('#messageHeader').should('contain', 'Авторизация прошла успешно');
  
      // Проверяем, что кнопка крестик отображается
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });
  });
  