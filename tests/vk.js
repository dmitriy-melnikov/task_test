describe('enter in vk', () => {
    before((client, done) => {
      done();
    });
    beforeEach((client, done) => {
        const vk = client.page.vk();
        vk
          .navigate()
          .waitForElementVisible('body', 3000);
        done();
    });
    it('run the vk credentials test', (vk) => {
        let vkcredentials = require('../credentials/vkcredentials.json');
        vk
            .useXpath()
            .setValue("//form/input[@id='index_email']", vkcredentials.email)
            .setValue("//form/input[@id='index_pass']", vkcredentials.password)
            .click("//form/button[@id='index_login_button']")
            .waitForElementVisible("//div[@id='post_field']", 3000)
            .assert.containsText("//div[@class='ph_content']", 'Что у Вас нового?');
    });
    afterEach((vk, done) => {
        if (vk.sessionId) {
            vk.end(function () {
                done();
            });
        } else {
            done();
        }

    })
});


