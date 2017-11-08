module.exports = {
  'Send mail test': function (client) {
    client
      .url('https://yandex.by/')
      .pause(2000)
      .setValue('input[name="login"]', 'dzmitriy-melnikov@yandex.ru')
      .setValue('input[name="passwd"]', '110506Vlad')
      .click('button[type="submit"]')
      .pause(2000)
      .click('.mail-ComposeButton-Text')
      .pause(2000)
      .setValue('div[name="to"]', 'dzmitriy-melnikov@yandex.ru')
      .pause(2000)
      .click('button[type="submit"]')
      .pause(5000)
      .click('a[href="#inbox"]')
      .pause(5000)
      .assert.containsText('span.mail-MessageSnippet-FromText', 'Дмитрий Мельников')
      .end();
  }
};
