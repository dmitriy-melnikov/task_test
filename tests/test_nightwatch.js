module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .pause(2000)
      .waitForElementVisible('body', 3000)
      .setValue('input[type="text"]', 'nightwatch')
      .click('input[type="submit"]')
      .pause(6000)
      .assert.containsText('#main', 'nightwatch')
      .end();
  }
};