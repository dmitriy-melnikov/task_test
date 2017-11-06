module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .pause(3000)
      .waitForElementVisible('body', 5000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('input.lsb', 1000)
      .click('input.lsb')
      .pause(5000)
      .assert.containsText('#main', 'nightwatch')
      .end();
  }
};