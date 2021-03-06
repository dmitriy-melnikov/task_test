const enterSite = {
    enterSite: function () {
        this
            .navigate()
            .waitForElementVisible('@btnFlights', 7000)
            .click('@btnFlights');
        return this;
    }
};

const searchFlightsFrom = {
    searchFlightsFrom: function (flyFrom) {
        this
            .waitForElementVisible('@flyFrom', 3000)
            .click('@flyFrom')
            .setValue('@flyFrom', flyFrom);
        return this;
    }
};

const flyFromAirport = {
    flyFromAirport: function (airport) {
        this
            .waitForElementVisible('@popupFrom', 3000)
            .waitForElementVisible('//div[@class="display-group-results"]//div[contains(., ' + '"' + airport + '"' + ')]', 3000)
            .click('//div[@class="display-group-results"]//div[contains(., ' + '"' + airport + '"' + ')]');
        return this;
    }
};
const searchFlightsTo = {
    searchFlightsTo: function (flyTo) {
        this
            .click('@flyTo')
            .setValue('@flyTo', flyTo);
        return this;
    }
};
const flyToAirport = {
    flyToAirport: function (airport) {
        this
            .waitForElementVisible('//div[@class="display-group-results"]//div[contains(., ' + '"' + airport + '"' + ')]', 3000)
            .click('//div[@class="display-group-results"]//div[contains(., ' + '"' + airport + '"' + ')]');
        return this;
    }
};
const searchDate = {
    searchDate: function (dayDepart, dayReturn) {
        this
            .click('@flyDeparting')
            .waitForElementVisible('//div[@class="datepicker-cal-month"][1]', 3000)
            .click('//div[@class="datepicker-cal-month"][1]//button[contains(., ' + '"' + dayDepart + '"' + ')]')
            .click('@flyReturning')
            .waitForElementVisible('//div[@class="datepicker-cal-month"][1]', 3000)
            .click('//div[@class="datepicker-cal-month"][1]//button[contains(., ' + '"' + dayReturn + '"' + ')]');
        return this;
    }
};

const setAdult = {
    setAdult: function (adult) {
        this
            .click('@adult')
            .waitForElementVisible('//select[@id="flight-adults-hp-flight"]/option[@value="' + adult + '"]', 3000)
            .click('//select[@id="flight-adults-hp-flight"]/option[@value="' + adult + '"]');
        return this;
    }
};
const searchResult = {
    searchResult: function () {
        this
            .click('@searchBtn');
        return this;
    }
};
module.exports = {
    url: 'http://www.expedia.com',
    commands: [enterSite, searchFlightsFrom, flyFromAirport, searchFlightsTo, flyToAirport, searchDate, setAdult, searchResult],
    elements: {
        btnFlights: {
            selector: '//button[@id="tab-flight-tab-hp"]',
            locateStrategy: 'xpath'
        },
        flyFrom: {
            selector: '//input[@id="flight-origin-hp-flight"]',
            locateStrategy: 'xpath'
        },
        popupFrom: {
            selector: '//div[@class="autocomplete-dropdown"]',
            locateStrategy: 'xpath'
        },
        flyTo: {
            selector: '//input[@id="flight-destination-hp-flight"]',
            locateStrategy: 'xpath'
        },
        flyDeparting: {
            selector: '//input[@id="flight-departing-hp-flight"]',
            locateStrategy: 'xpath'
        },
        flyReturning: {
            selector: '//input[@id="flight-returning-hp-flight"]',
            locateStrategy: 'xpath'
        },
        adult: {
            selector: '//select[@id="flight-adults-hp-flight"]',
            locateStrategy: 'xpath'
        },
        searchBtn: {
            selector: '//div[@class="cols-nested"]/label/button[@type="submit"]',
            locateStrategy: 'xpath'
        }
    }
};