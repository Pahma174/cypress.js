describe('Негативный сценарий авторизации (неправильный логин)', () => {
    const validUsername = 'german@dolnikov.ru';
    const invalidUsername = 'wrongu@sername.ru';
    const validPassword = 'iLoveqastudio1';
  
    it('Проверка негативного сценария авторизации', () => {
      cy.visit('https://login.qa.studio');
  
      // Вводим неправильный логин и правильный пароль
      cy.get('#mail').type(invalidUsername);
      cy.get('#pass').type(validPassword);
  
      // Нажимаем кнопку войти
      cy.get('#loginButton').click();
  
      // Проверяем, что появилось сообщение об ошибке
      cy.get('#messageHeader').should('contain', 'Такого логина или пароля нет');
  
      // Проверяем, что кнопка крестик отображается
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });
  });