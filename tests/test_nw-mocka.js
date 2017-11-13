describe('Google demo test for Mocha', function() {

    it('run the Google simple test', function(client) {
        const google = client.page.google();
        google.navigate()
            .waitForElementVisible('body', 3000);
        google
            .setValue('@searchField', 'nightwatch')
            .click('@searchBtn')
            .waitForElementVisible('@result', 3000)
            .assert.containsText('@result', 'nightwatch');
    });

    after(function(client, done) {
        if (client.sessionId) {
            client.end(function() {
                done();
            });
        } else {
            done();
        }
    });
});