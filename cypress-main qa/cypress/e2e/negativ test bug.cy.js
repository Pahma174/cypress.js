describe('Проверка бага с приведением к строчным буквам в логине', () => {
  const mixedCaseUsername = 'GerMan@Dolnikov.ru';
  const validPassword = 'iLoveqastudio1';

  it('Проверка бага с приведением к строчным буквам в логине', () => {
    cy.visit('https://login.qa.studio');

    // Вводим логин с разным регистром и правильный пароль
    cy.get('#mail').type(mixedCaseUsername);
    cy.get('#pass').type(validPassword);

    // Нажимаем кнопку войти
    cy.get('#loginButton').click();

    // Проверяем, что появилось сообщение об успешной авторизации
    cy.get('#messageHeader').should('contain', 'Такого логина или пароля нет');

    // Проверяем, что кнопка крестик отображается
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  });
});
