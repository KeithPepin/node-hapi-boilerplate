'use strict';
var Jasmine = require('jasmine'),
    jasmine = new Jasmine(),
    reporters = require('jasmine-reporters'),
    junitReporter = new reporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: './coverage/'
    });

jasmine.loadConfigFile('./spec/support/jasmine.json');
jasmine.addReporter(junitReporter);
jasmine.configureDefaultReporter({colors: true});
jasmine.execute();

