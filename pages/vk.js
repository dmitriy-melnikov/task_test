module.exports = {
    url: 'https://vk.com/',
    elements: {
       emailField: {
         selector: '//form/input[@id="index_email"]',
         locateStrategy: 'xpath'
       },
       passField: {
         selector: '//form/input[@id="index_pass"]',
         locateStrategy: 'xpath'
       },
       btnLogin: {
         selector: '//form/button[@id="index_login_button"]',
         locateStrategy: 'xpath'
       },
       postBox: {
         selector: "//div[@id='post_field']",
         locateStrategy: 'xpath'
       },
       searchField: {
         selector: "//div[@class='ph_content']",
         locateStrategy: 'xpath'
       },
    }
};