'use strict';
var Jasmine = require('jasmine'),
    jasmine = new Jasmine(),
    reporters = require('jasmine-reporters'),
    junitReporter = new reporters.JUnitXmlReporter({
        savePath: './coverage/',
        consolidateAll: true
    });

jasmine.loadConfigFile('./spec/support/jasmine.json');
jasmine.addReporter(junitReporter);
jasmine.configureDefaultReporter({colors: true});
jasmine.execute();

