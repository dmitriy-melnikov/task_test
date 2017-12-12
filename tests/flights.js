describe('tests for flights', () => {
 /* before((client, done) => {
    done();
  });*/

  it('should be select ticket', (client) => {
    client.useXpath();
    const fly = client.page.expedia();
    fly
      .enterSite()
      .searchFlights('London')
      .flyFromAirport('Dublin')
      .searchDate()
      .setAdult()
      .searchResult();
    fly
      .assert.containsText('@resultCoast', '$131')
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