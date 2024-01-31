describe('Автотест восстановления пароля', () => {
    const recoveryEmail = 'example'; // Введите email без символа '@'
  
    it('Восстановление пароля с некорректным email', () => {
      cy.visit('https://login.qa.studio');
  
      // Нажимаем "Забыли пароль"
      cy.get('#forgotEmailButton').click(); // Замените на ваш селектор кнопки "Забыли пароль?"
  
      // Вводим некорректный email для восстановления пароля (без символа '@')
      cy.get('#mailForgot').type(recoveryEmail); // Замените на ваш селектор поля ввода имейла
  
      // Нажимаем кнопку восстановления пароля
      cy.get('#restoreEmailButton').click(); // Замените на ваш селектор кнопки восстановления пароля
  
      // Проверяем, что получили нужное сообщение о валидации в #messageHeader
      cy.get('#messageHeader').invoke('text').should('include', 'Нужно исправить проблему валидации');
  
      // Проверяем, что кнопка крестика отображается
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });
  
    it('Восстановление пароля', () => {
      cy.visit('https://login.qa.studio');
  
      // Нажимаем "Забыли пароль"
      cy.get('#forgotEmailButton').click(); // Замените на ваш селектор кнопки "Забыли пароль?"
  
      // Вводим корректный email для восстановления пароля
      cy.get('#mailForgot').type('example@example.com'); // Замените на ваш селектор поля ввода имейла
  
      // Нажимаем кнопку восстановления пароля
      cy.get('#restoreEmailButton').click(); // Замените на ваш селектор кнопки восстановления пароля
  
      // Проверяем, что получили нужный текст после восстановления пароля
      cy.get('#messageHeader').invoke('text').should('include', 'Успешно отправили пароль на e-mail');
  
      // Проверяем, что кнопка крестика отображается
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });
  });
  