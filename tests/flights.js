describe('tests for flights', () => {
    /* before((client, done) => {
       done();
     });*/

    it('should be select ticket', (client) => {
        const expedia = client.page.expedia();
        expedia
            .enterSite()
            .searchFlightsFrom('London')
            .flyFromAirport('Heathrow')
            .searchFlightsTo('Dublin')
            .flyToAirport('Dublin, Ireland(DUB)')
            .searchDate(17, 24)
            .setAdult(2)
            .searchResult();
        const booking = client.page.booking();
        booking
            .beforeTest()
            .assert.containsText('@resultCoast', '$242')
            .assert.visible('@airLinesIncluded')
            .expect.element('@resultCoast').text.to.not.equal('$1');
    });

    after((fly, done) => {
        if (fly.sessionId) {
            fly.end(() => {
                done();
            });
        } else {
            done();
        }
    })
});