describe('Login test', function() {
  it('run login test', function(client) {
      client
          .url('https://yandex.by/')
          .waitForElementVisible('input[name="login"]', 2000)
          .setValue('input[name="login"]', 'dzmitriy-melnikov@yandex.ru')
          .setValue('input[name="passwd"]', '110506Vlad')
          .click('button[type="submit"]')
          .waitForElementVisible('.b-mail-pager__label', 3000)
          .assert.containsText('.b-mail-pager__label', 'Письма по месяцам')
          .end();
  })
});

