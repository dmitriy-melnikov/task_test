module.exports = {
  'Login test': function (client) {
    client
      .url('https://yandex.by/')
      .pause(3000)
      .setValue('input[name="login"]', 'dzmitriy-melnikov@yandex.ru')
      .setValue('input[name="passwd"]', '110506Vlad')
      .click('button[type="submit"]')
      .pause(5000)
      .assert.containsText('.b-mail-pager__label', 'Письма по месяцам')
      .end();
  }
};
