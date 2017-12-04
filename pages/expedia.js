module.exports = {
  url: 'http://www.expedia.com',
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
    clickAirport: {
      selector: '//div[@class="autocomplete-dropdown"]//li[2]//a[1]//div',
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
    clickCity: {
      selector: '//div[@class="cols-nested"]/div[2]//div[@class="autocomplete-dropdown"]//li[1]',
      locateStrategy: 'xpath'
    },
    flyDeparting: {
      selector: '//div[@id="flight-departing-wrapper-hp-flight"]//input[@id="flight-departing-hp-flight"]',
      locateStrategy: 'xpath'
    },
    dateDeparting: {
      selector: '//div[@id="flight-departing-wrapper-hp-flight"]//div[@class="datepicker-dropdown"]//tbody[@class="datepicker-cal-dates"]//tr[3]//td[1]',
      locateStrategy: 'xpath'
    },
    flyReturning: {
      selector: '//div[@id="flight-returning-wrapper-hp-flight"]//input[@id="flight-returning-hp-flight"]',
      locateStrategy: 'xpath'
    },
    dateReturning: {
      selector: '//div[@id="flight-returning-wrapper-hp-flight"]//div[@class="datepicker-dropdown"]//tbody[@class="datepicker-cal-dates"]//tr[4]//td[1]',
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
    }




  }

};