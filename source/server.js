'use strict';

var hapi = require('hapi'),
    config = {
        port: 3000
    },
    server = new hapi.Server();

server.connection(config);

server.start(function startHapiServer() {
    console.log('Server running at:', server.info.uri);
});

