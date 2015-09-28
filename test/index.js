var assert = require("chai").assert;
var dir = require('../index');

describe('dir()', function() {
    it('should throw when `Object.getOwnPropertyNames()` is not defined', function () {
        var gOPN = Object.getOwnPropertyNames;
        Object.getOwnPropertyNames = null;

        if (Object.getOwnPropertyNames == null) {
            assert.throws(function () {
                dir();
            });
        }

        Object.getOwnPropertyNames = gOPN;
    });

    it('should return empty array when null or undefined is passed', function () {
        [
            undefined,
            null
        ].forEach(function (val) {
            var ret = dir(val);
            assert.equal(ret instanceof Array, true);
            assert.equal(ret.length, 0);
        });
    });

    it("should return same result as Object.getOwnPropertyNames() returns for " +
       "non-extensible objects' prototype", function () {
        [
            false,
            true,
            'foo',
            String('foo'),
            51,
            Number(51)
        ].forEach(function (val) {
            var ret = dir(val);
            assert.deepEqual(Object.getOwnPropertyNames(val.constructor.prototype), ret);
        });
    });

    it("should return same result as Object.getOwnPropertyNames() returns for " +
       "extensible objects' properties and prototype", function () {
        [
            {'a' : 1},
            {},
            new (function hello() {}),
            new (function () {})
        ].forEach(function (val) {
            var ret = dir(val);
            var expected = Object.getOwnPropertyNames(val).concat(
                Object.getOwnPropertyNames(val.constructor.prototype)
            );
            assert.deepEqual(ret, expected);
        });
    });

    it("should return same result as Object.getOwnPropertyNames() returns for " +
       "function properties and prototype", function () {
        [
            function () {},
            function named() {}
        ].forEach(function (val) {
            var ret = dir(val);
            var expected = Object.getOwnPropertyNames(val).concat(
                Object.getOwnPropertyNames(val.prototype)
            );
            assert.deepEqual(ret, expected);
        });
    });
});
