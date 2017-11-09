describe('Send mail test', function() {
  it('run test for send mail', function(client) {
      client
          .url('https://yandex.by/')
          .waitForElementVisible('body', 2000);
      client
          .setValue('input[name="login"]', 'dzmitriy-melnikov@yandex.ru')
          .setValue('input[name="passwd"]', '110506Vlad')
          .click('button[type="submit"]')
          .waitForElementVisible('.mail-ComposeButton-Text', 2000)
          .click('.mail-ComposeButton-Text')
          .waitForElementVisible('div[name="to"]', 2000)
          .setValue('div[name="to"]', 'dzmitriy-melnikov@yandex.ru')
          .click('button[type="submit"]')
          //.waitForElementVisible('a[href="#inbox"]', 5000)
          //.click('a[href="#inbox"]')
          .waitForElementVisible('span.mail-MessageSnippet-FromText', 16000)
          .assert.containsText('span.mail-MessageSnippet-FromText', 'Дмитрий Мельников')
          .end();
  })
});

