describe('Негативный сценарий авторизации', () => {
    const validUsername = 'german@dolnikov.ru';
    const validPassword = 'iLoveqastudio1';
    const invalidPassword = 'wrongPassword123';
  
    it('Проверка негативного сценария авторизации', () => {
      cy.visit('https://login.qa.studio');
  
      // Вводим правильный логин и неверный пароль
      cy.get('#mail').type(validUsername);
      cy.get('#pass').type(invalidPassword);
  
      // Нажимаем кнопку войти
      cy.get('#loginButton').click();
  
      // Проверяем, что появилось сообщение об ошибке
      cy.get('#messageHeader').should('contain', 'Такого логина или пароля нет');
  
      // Проверяем, что кнопка крестик отображается
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });
  });
  