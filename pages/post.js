const enterMail = {
    submit: function () {
        this.waitForElementVisible('@login', 2000);
        this
            .setValue('@login', 'dzmitriy-melnikov@yandex.ru')
            .setValue('@pass', '110506Vlad')
            .click('@postBtn')
            .waitForElementVisible('@postMenu', 3000)
            .assert.containsText('@postMenu', 'Письма по месяцам');
        return this;
    }
};
module.exports = {
  url: 'https://yandex.by/',
  commands: [enterMail],
  elements: {
      login: 'input[name="login"]',
      pass: 'input[name="passwd"]',
      postBtn: 'button[type="submit"]',
      postMenu: '.b-mail-pager__label'
  }
};