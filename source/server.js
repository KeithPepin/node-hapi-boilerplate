'use strict';

var assert = require('assert'),
    Hapi = require('hapi'),
    Inert = require('inert'),
    connectionConfig = {
        port: 3000
    },
    pack = require('../package'),
    q = require('q'),
    server,
    swagger = require('hapi-swagger'),
    Vision = require('vision');

function HttpApi() {
    // Do nothing
}

HttpApi.prototype.start = function start() {
    var swaggerOptions = {
            apiVersion: pack.version,
            info: {
                contact: pack.author,
                description: pack.description,
                title: pack.name
            }
        };

    server = new Hapi.Server();

    server.connection(connectionConfig);

    server.register([
        Inert,
        Vision,
        {
            register: swagger,
            options: swaggerOptions
        }
    ], function swaggerRegisterErrorHandler(error) {
        if (error) {
            console.log('A swagger error occurred ::', error);
        }
    });

    return q.promise(function resolveHapiServerStartPromises(resolve) {
        server.start(function startServerCallback(error) {
            assert.ifError(error);
            console.log('Server running at:', server.info.uri);
            return resolve();
        });
    });
};

HttpApi.prototype.stop = function stop() {
    return q.promise(function resolveStopHapiServerPromises(resolve) {
        server.stop(function stopServerCallback(error) {
            assert.ifError(error);
            console.log('Server at ' + server.info.uri + ' stopped.');
            return resolve();
        });
    });
};

module.exports = new HttpApi();
