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
      .waitForElementVisible('@flyFrom', 3000)
      //.expect.element('@flyFrom').text.to.contain('Heathrow')
      .click('@flyTo')
      .setValue('@flyTo', 'Dublin')
      .waitForElementVisible('@popupTo', 3000)
    .expect.element('@flyFrom').text.to.contain('Dublin Airport (DUB), Ireland')

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