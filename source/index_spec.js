'use strict';

describe('index_spec.js', function indexDescribe() {
    beforeEach(function mainBeforeEach() {
        spyOn(console, 'log').and.callThrough();
    });

    it('should call console.log() appropriately', function shouldCallConsoleLog() {
        var testJS = require('./index.js');

        expect(console.log.calls.count()).toBe(1);
        expect(console.log).toHaveBeenCalledWith('testing 1-2-3');
    });
});
