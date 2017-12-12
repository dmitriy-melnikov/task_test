const enterSite = {
    enterSite: function() {
        this
            .navigate()
            .waitForElementVisible('@btnFlights', 7000);
        return this;
    }
};

const searchFlights = {
    searchFlights: function (flyFrom) {
        this
            .click('@btnFlights')
            .waitForElementVisible('@flyFrom', 3000)
            .click('@flyFrom')
            .setValue('@flyFrom', flyFrom);
        return this;
    }
};

const flyFromAirport = {
    flyFromAirport: function (flyTo) {
      this
          .waitForElementVisible('@popupFrom', 3000)
          .waitForElementVisible('@airportSelect', 3000)
          .click('@airportSelect')
          .waitForElementVisible('@flyFrom', 2000)
          .click('@flyTo')
          .setValue('@flyTo', flyTo)
          .waitForElementVisible('@citySelect', 3000)
          .click('@citySelect');
        return this;
  }
};

const searchDate = {
  searchDate: function () {
    this
        .click('@flyDeparting')
        .waitForElementVisible('@dateDeparting', 3000)
        .click('@dateDeparting')
        .click('@flyReturning');
    return this;
  }
};

const setAdult = {
  setAdult: function () {
    this
        .click('@adult')
        .waitForElementVisible('@adultNumber', 3000)
        .click('@adultNumber');
    return this;
  }
};

const searchResult = {
  searchResult: function () {
      this
        .click('@searchBtn')
        .waitForElementVisible('@resultPage', 3000)
        .waitForElementVisible('@resultContainer', 3000)
        .waitForElementVisible('@resultCoast', 11000);
      return this;
  }
};

module.exports = {
  url: 'http://www.expedia.com',
  commands: [enterSite, searchFlights, searchDate, setAdult, searchResult, flyFromAirport],
  elements: {
    btnFlights: {
      selector: '//button[@id="tab-flight-tab-hp"]'
    },
    flyFrom: {
      selector: '//input[@id="flight-origin-hp-flight"]',
      locateStrategy: 'xpath'
    },
    popupFrom: {
      selector: '//div[@class="autocomplete-dropdown"]',
      locateStrategy: 'xpath'
    },
    airportSelect: {
      selector: `//div[@class="display-group-results"]//div[contains(., "Heathrow")]`,
      locateStrategy: 'xpath'
    },
    flyTo: {
      selector: '//input[@id="flight-destination-hp-flight"]',
      locateStrategy: 'xpath'
    },
    popupTo: {
      selector: '//div[@class="cols-nested"]/div[2]//div[@class="autocomplete-dropdown"]',
      locateStrategy: 'xpath'
    },
    citySelect: {
      selector: '//div[@class="cols-nested"]/div[2]//div[@class="autocomplete-dropdown"]//li[1]',
      locateStrategy: 'xpath'
    },
    flyDeparting: {
      selector: '//input[@id="flight-departing-hp-flight"]',
      locateStrategy: 'xpath'
    },
    dateDeparting: {
      selector: '//div[@id="flight-departing-wrapper-hp-flight"]//div[@class="datepicker-dropdown"]//tbody[@class="datepicker-cal-dates"]//tr[4]//td[1]',
      locateStrategy: 'xpath'
    },
    flyReturning: {
      selector: '//input[@id="flight-returning-hp-flight"]',
      locateStrategy: 'xpath'
    },
    dateReturning: {
      selector: '//div[@id="flight-returning-wrapper-hp-flight"]//div[@class="datepicker-dropdown"]//tbody[@class="datepicker-cal-dates"]//tr[5]//td[1]',
      locateStrategy: 'xpath'
    },
    adult: {
      selector: '//select[@id="flight-adults-hp-flight"]',
      locateStrategy: 'xpath'
    },
    adultNumber: {
      selector: '//select[@id="flight-adults-hp-flight"]/option[@value="2"]',
      locateStrategy: 'xpath'
    },
    searchBtn: {
      selector: '//div[@class="cols-nested"]/label/button[@type="submit"]',
      locateStrategy: 'xpath'
    },
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
        selector: '//div[@id="filter-container"]//fieldset[@id="airlines"]',
        locateStrategy: 'xpath'
    }




  }

};