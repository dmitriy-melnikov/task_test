describe('Google demo test for Mocha', function() {
    it('run the Google simple test', function(client) {
        client
            .url('http://www.google.com')
            .waitForElementVisible('body', 3000);
        client
            .setValue('input[type=text]', 'nightwatch')
            .click('input[type="submit"]')
            .waitForElementVisible('#main', 3000)
            .assert.containsText('#main', 'nightwatch')
            .end();
    });
});