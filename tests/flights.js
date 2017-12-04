describe('tests for flights', () => {
 /* before((client, done) => {
    done();
  });*/

  it('should be select ticket', (client) => {
    const fly = client.page.expedia();
    fly
      .navigate()
      .waitForElementVisible('@btnFlights', 3000)
      .click('@btnFlights')
      .waitForElementVisible('@flyFrom', 3000)
      .click('@flyFrom')
      .setValue('@flyFrom', 'London')
      .waitForElementVisible('@popupFrom', 3000)
      .waitForElementVisible('@clickAirport', 3000)
      .click('@clickAirport')
      .waitForElementVisible('@flyFrom', 2000)
      //expect.element('@flyTo').to.have.value.which.contains('Heathrow')
      .click('@flyTo')
      .setValue('@flyTo', 'Dublin')
      //.waitForElementVisible('@popupTo', 3000)
      //.expect.element('@clickCity').text.to.contain('Dublin, Ireland (DUB)')
      .waitForElementVisible('@clickCity', 3000)
      .click('@clickCity')
      //.expect.element('@flyTo').to.have.value.which.contains
      .click('@flyDeparting')
      .waitForElementVisible('@dateDeparting', 3000)
      .click('@dateDeparting')
      .click('@flyReturning')
      //.waitForElementVisible('@dateReturning', 3000)
      .click('@adult')
      .waitForElementVisible('@adultNumber', 3000)
      .click('@adultNumber')
      .click('@searchBtn')
      .waitForElementVisible('@resultPage', 10000)
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