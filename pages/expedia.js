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
      selector: '//div[@class="autocomplete pin-left theme-standard"]/div',
      locateStrategy: 'xpath'
    },
    clickCity: {
      selector: '//div[@class="autocomplete pin-left theme-standard"]/div//li[1]//a[1]//div',
      locateStrategy: 'xpath'
    },
    dateDeparting: {
      selector: '//table/tbody[@class="datepicker-cal-dates"]/td[@data-day="3"]',
      locateStrategy: 'xpath'
    },
    dateReturning: {
      selector: '//table/tbody[@class="datepicker-cal-dates"]/td[@data-day="7"]',
      locateStrategy: 'xpath'
    },
    adult: {
      selector: '//div/select[@id="flight-adults-hp-flight"]',
      locateStrategy: 'xpath'
    },
    adultNumber: {
      selector: '//div/select[@id="flight-adults-hp-flight"]/option[@value="2"]',
      locateStrategy: 'xpath'
    },
    searchBtn: {
      selector: '//div[@class="cols-nested"]/label/button[@type="submit"]',
      locateStrategy: 'xpath'
    }




  }

};