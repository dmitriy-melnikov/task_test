const beforeTest = {
    beforeTest: function () {
        this
            .waitForElementVisible('@resultPage', 3000)
            .waitForElementVisible('@resultContainer', 3000)
            .waitForElementVisible('@resultCoast', 20000);
        return this;
    }
};

module.exports = {
    commands: [beforeTest],
    elements: {
        resultPage: {
            selector: '//body[@id="homePage"]',
            locateStrategy: 'xpath'
        },
        resultContainer: {
            selector: '//div[@id="flight-listing-container"]',
            locateStrategy: 'xpath'
        },
        resultCoast: {
            selector: '//ul[@id="flightModuleList"]/li//span[@class="dollars price-emphasis"]',
            locateStrategy: 'xpath'
        },
        airLinesIncluded: {
            selector: '//fieldset[@id="airlines"]',
            locateStrategy: 'xpath'
        }
    }
};