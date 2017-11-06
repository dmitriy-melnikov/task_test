module.exports = {
  'Login test': function (client) {
    client
      .url('https://yandex.by/')
      .pause(3000)
      .setValue('input[name="login"]', 'dimaira2012@yandex.by')
      .setValue('input[name="passwd"]', '110506')
      .click('button[type="submit"]')
      .pause(5000)
      .assert.containsText('.b-mail-pager__label', 'Письма по месяцам')
      .end();
  }
};
