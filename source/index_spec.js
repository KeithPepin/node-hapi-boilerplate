'use strict';

describe('test_coverage.js', function () {
    beforeEach(function () {
        spyOn(console, 'log').and.callThrough();
    });

    it('should call console.log() appropriately', function () {
        var testJS = require('./index.js');

        expect(console.log.calls.count()).toBe(1);
        expect(console.log).toHaveBeenCalledWith('testing 1-2-3');
    });
});
