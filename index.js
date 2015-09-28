'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = dir;

function dir(toInspect) {
    if (Object.getOwnPropertyNames == null) {
        throw new Error('Since Object.getOwnPropertyNames does not exist, it is not possible to retrieve non-enumerable properties.');
    }
    if (toInspect == null) {
        return [];
    }

    // Extensible objects: (function | objects) needs different approach.
    var extensible = typeof toInspect === 'function' || typeof toInspect === 'object';

    var isTheConstructorSelf = toInspect.prototype != null;
    var thePrototype = isTheConstructorSelf ? toInspect.prototype : toInspect.constructor.prototype;
    // Extensible type objects are inspected for itself and its prototype
    if (extensible) {
        return extendMutable(Object.getOwnPropertyNames(toInspect), Object.getOwnPropertyNames(thePrototype));
    } else {
        return Object.getOwnPropertyNames(thePrototype);
    }
}

function extendMutable(array, nextArray) {
    nextArray.unshift(array.length, 0);
    array.splice.apply(array, nextArray);
    return array;
}
module.exports = exports['default'];

