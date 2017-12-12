describe('tests for flights', () => {
 /* before((client, done) => {
    done();
  });*/

  it('should be select ticket', (client) => {
    client.useXpath();
    const fly = client.page.expedia();
    fly
      .enterSite()
      .searchFlightsFrom('London')
      .flyFromAirport('Heathrow')
      .searchFlightsTo('Dublin')
      .flyToAirport('Dublin, Ireland(DUB)')
      .searchDate(17, 24)
      .setAdult()
      .searchResult();
    fly
      .assert.containsText('@resultCoast', '$242')
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