module.exports = {
  'Send mail test': function (client) {
    client
      .url('https://yandex.by/')
      .pause(2000)
      .setValue('input[name="login"]', 'dimaira2012@yandex.by')
      .setValue('input[name="passwd"]', '110506')
      .click('button[type="submit"]')
      .pause(2000)
      .click('.mail-ComposeButton-Text')
      .pause(2000)
      .setValue('div[name="to"]', 'dimaira2012@yandex.by')
      .pause(2000)
      //.click('textarea')
      //.setValue('textarea', 'Hello my send email myself')
      //.pause(4000)
      //.assert.containsText('.b-mail-pager__label', 'Письма по месяцам')
      .click('button[type="submit"]')
      .pause(4000)
      .end();
  }
};
