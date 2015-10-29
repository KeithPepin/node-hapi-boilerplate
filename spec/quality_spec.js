'use strict';
var codeCopter = require('code-copter');

codeCopter.configure({
    jscs: true,
    jshint: true,
    exclude: ['coverage', 'node_modules', 'spec']
});

describe('Code quality', codeCopter);
