module.exports = {
    before : function() {
        console.log('Setting up...');
    },
    'Demo test Google' : function (client) {

        client
            .url('http://www.google.com')
            .pause(1000);

            /*.setValue('input #lst-ib', 'nightwatch')
            .waitForElementVisible('button[name=btnG]', 1000)
            .click('button[name=btnG]')
            .assert.containsText('input #lst-ib', 'nightwatch')*/

        // expect element  to be present in 1000ms
        client.expect.element('body').to.be.present.before(1000);

        // expect element <#lst-ib> to have css property 'display'
        client.expect.element('#viewport').to.have.css('display');

        // expect element  to have attribute 'class' which contains text 'vasq'
        //client.expect.element('body').to.have.attribute('class').which.contains('vasq');

        // expect element <#lst-ib> to be an input tag
        //client.expect.element('#lst-ib').to.be.an('input');

        // expect element <#lst-ib> to be visible
        client.expect.element('#lst-ib').to.be.visible;

        /*beforeEach : function(browser) {
        }
        afterEach : function() {
        }*/

        client.end();
    },
    after : function() {
        console.log('Closing down...');
    }
};