describe('tests for flights', () => {
 /* before((client, done) => {
    done();
  });*/

  it('should be select ticket', (client) => {
    const fly = client.page.expedia();
    fly
      .navigate()
      .waitForElementVisible('@btnFlights', 7000)
      .click('@btnFlights')
      .waitForElementVisible('@flyFrom', 3000)
      .click('@flyFrom')
      .setValue('@flyFrom', 'London')
      .waitForElementVisible('@popupFrom', 3000)
      .waitForElementVisible('@clickAirport', 3000)
      .click('@clickAirport')
      .waitForElementVisible('@flyFrom', 2000)
      .click('@flyTo')
      .setValue('@flyTo', 'Dublin')
      .waitForElementVisible('@clickCity', 3000)
      .click('@clickCity')
      .click('@flyDeparting')
      .waitForElementVisible('@dateDeparting', 3000)
      .click('@dateDeparting')
      .click('@flyReturning')
      .click('@adult')
      .waitForElementVisible('@adultNumber', 3000)
      .click('@adultNumber')
      .click('@searchBtn')
      .waitForElementVisible('@resultPage', 5000)
      .waitForElementVisible('@resultContainer', 3000)
      .waitForElementVisible('@resultCoast', 3000)
      .assert.containsText('@resultCoast', '$132')
      .assert.visible('@airLinesIncluded')
      .expect.element('@resultCoast').text.to.not.equal('$1')
  });

  after((fly, done) => {
    if(fly.sessionId){
      fly.end(() => {
        done();
      });
    }else {
      done();
    }
  })
});