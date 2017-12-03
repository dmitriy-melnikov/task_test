describe('enter in vk', () => {
  /*before((client, done) => {
    done();
  });*/
 /* beforeEach((client, done) => {
    /done();
  });*/
  xit('run the vk credentials test', (client) => {
    let vkcredentials = require('../credentials/vkcredentials.json');
    const vk = client.page.vk();
    vk
      .navigate()
      .waitForElementVisible('body', 3000)
      .setValue('@emailField', vkcredentials.email)
      .setValue('@passField', vkcredentials.password)
      .click('@btnLogin')
      .waitForElementVisible('@postBox', 3000)
      .assert.containsText('@searchField', 'Что у Вас нового?');
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


