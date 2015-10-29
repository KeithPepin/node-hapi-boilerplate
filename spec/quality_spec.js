'use strict';

var codeCopter = require('code-copter');

codeCopter.configure({
    exclude: ['coverage', 'node_modules'],
    jscs: true,
    jshint: true
});

describe('Code quality', codeCopter);
