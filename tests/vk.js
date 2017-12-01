const url = require('../variables/url');
describe('enter in vk', () => {
    before(function (client, done) {
        let vkcredentials = require('./vkcredentials.json');
        /*try {
            vkcredentials = require('./vkcredentials.json');
        } catch (err) {
            console.error('Couldn\'t load the facebook credentials file. Please ensure that ' +
                'you have the vkcredentials.json in the same folder as the test.');
            process.exit();
        }*/
        done();
    });
    it('run the Google simple test', function (client) {
        let vkcredentials = require('./vkcredentials.json');
        let firstVariable = require('../variables/xpathSelectors');
        client
            .url(url.urlVk)
            .waitForElementVisible('body', 3000)
            /*.click('#nav-signin')
            .click('#btn-facebook-auth-topnav')*/
            /*.windowHandles(function(result) {
                client.assert.equal(result.value.length, 2, 'There should be two windows open.');
                var fbWindowHandle = result.value[1];
                client.switchWindow(fbWindowHandle);
            })*/
            //.waitForElementVisible('#facebook body', 1000)
            .setValue(firstVariable.vkEmail, vkcredentials.email)
            .setValue('#index_pass', vkcredentials.password)
            .click('#index_login_button')
            /*.windowHandles(function(result) {
                client.assert.equal(result.value.length, 1, 'There should be only one window open.');
                client.switchWindow(result.value[0]);
            })*/
            .waitForElementVisible('#submit_post_box', 3000);
    });
    after((client, done) => {
        if (client.sessionId) {
            client.end(function () {
                done();
            });
        } else {
            done();
        }

    })
});


