describe('Login test', function () {

    xit('run login test', function (client) {
        const post = client.page.post();
        post.navigate()
            .submit();
    });

    after(function (client, done) {
        if (client.sessionId) {
            client.end(function () {
                done();
            });
        } else {
            done();
        }
    });
});

