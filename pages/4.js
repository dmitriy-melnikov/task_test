module.exports = {
  elements: {
    firstInp: {
      selector: '//div/p[text()="Password"]/input',
      locateStrategy: 'xpath'
    },
    secondInp: {
      selector: '//div/p[text()="Username"]/input',
      locateStrategy: 'xpath'
    },
    thirdInp: {
      selector: '//div/p[text()="Phone number"]/input',
      locateStrategy: 'xpath'
    }
  }
};