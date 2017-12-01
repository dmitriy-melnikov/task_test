describe('enter in vk', () => {
    before((client, done) => {
        done();
    });
    beforeEach((client, done) => {
        const vk = client.page.vk();
        vk.navigate()
            .waitForElementVisible('body', 3000);
        done();
    });
    it('run the vk credentials test', (vk) => {
        let vkcredentials = require('../credentials/vkcredentials.json');
        vk
            .setValue('#index_email', vkcredentials.email)
            .setValue('#index_pass', vkcredentials.password)
            .click('#index_login_button')
            .waitForElementVisible('#submit_post_box', 3000)
            .assert.containsText('.left_label.inl_bl', 'Моя Страница');
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


