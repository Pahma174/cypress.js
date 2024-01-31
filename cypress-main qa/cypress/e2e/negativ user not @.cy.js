describe('Негативный сценарий валидации логина', () => {
  const invalidUsername = 'invalidUsername';
  const validPassword = 'iLoveqastudio1';

  it('Проверка негативного сценария валидации логина', () => {
    cy.visit('https://login.qa.studio');

    // Вводим логин без @ и правильный пароль
    cy.get('#mail').type(invalidUsername);
    cy.get('#pass').type(validPassword);

    // Нажимаем кнопку войти
    cy.get('#loginButton').click();

    // Проверяем, что появилось сообщение об ошибке валидации
    cy.get('#messageHeader').should('contain', 'Нужно исправить проблему валидации');

    // Проверяем, что кнопка крестик отображается
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  });
});
