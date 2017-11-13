describe('Send mail test', function () {

    it('run test for send mail', function (client) {
        const mail = client.page.sendMail();
        mail.navigate()
            .waitForElementVisible('@body', 2000);
        mail
            .setValue('@login', 'dzmitriy-melnikov@yandex.ru')
            .setValue('@pass', '110506Vlad')
            .click('@sendMailBtn')
            .waitForElementVisible('@showIncomingMail', 2000)
            .click('@showIncomingMail')
            .waitForElementVisible('@addressField', 2000)
            .setValue('@addressField', 'dzmitriy-melnikov@yandex.ru')
            .click('@sendMailBtn')
            .waitForElementVisible('@incomingMailList', 16000)
            .assert.containsText('@incomingMailList', 'Дмитрий Мельников')
    });

    after(function (client, done) {
        if (client.sessionId) {
            client.end(function () {
                done();
            });
        } else {
            done();
        }
    });

});

