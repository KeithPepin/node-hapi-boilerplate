var hapi = require('hapi'),
    config = {
        port: 3000
    },
    server = new hapi.Server();

server.connection(config);

server.start(function () {
    console.log('Server running at:', server.info.uri);
});

