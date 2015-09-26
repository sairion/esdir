'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var _temporalUndefined = {};
exports['default'] = dir;

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + ' is not defined - temporal dead zone'); } return true; }

function _instanceof(left, right) { if (right != null && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function dir(toInspect) {
    'use strict';
    var toInspect = _temporalUndefined;
    var pprint = _temporalUndefined;

    var props = _temporalUndefined;

    var isConstructorSelf = _temporalUndefined;
    var constructor = _temporalUndefined;

    toInspect = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
    pprint = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
    if ((_temporalAssertDefined(toInspect, 'toInspect', _temporalUndefined) && toInspect) == null) {
        return [];
    }props = undefined;
    isConstructorSelf = (_temporalAssertDefined(toInspect, 'toInspect', _temporalUndefined) && toInspect).prototype != null;
    constructor = _temporalAssertDefined(isConstructorSelf, 'isConstructorSelf', _temporalUndefined) && isConstructorSelf ? _temporalAssertDefined(toInspect, 'toInspect', _temporalUndefined) && toInspect : (_temporalAssertDefined(toInspect, 'toInspect', _temporalUndefined) && toInspect).constructor;
    if (Object.getOwnPropertyNames == null) {
        throw new Error('Since Object.getOwnPropertyNames does not exist, it is not possible to retrieve non-enumerable properties.');
    }

    if (_temporalAssertDefined(constructor, 'constructor', _temporalUndefined) && constructor) {
        var descriptor = _temporalUndefined;

        descriptor = (_temporalAssertDefined(constructor, 'constructor', _temporalUndefined) && constructor).__dir__;
        if (typeof (_temporalAssertDefined(descriptor, 'descriptor', _temporalUndefined) && descriptor) === 'function') {
            var d = _temporalUndefined;
            d = (_temporalAssertDefined(descriptor, 'descriptor', _temporalUndefined) && descriptor)();
            if (_instanceof(_temporalAssertDefined(d, 'd', _temporalUndefined) && d, Array)) {
                return _temporalAssertDefined(d, 'd', _temporalUndefined) && d;
            }
        } else if ((_temporalAssertDefined(descriptor, 'descriptor', _temporalUndefined) && descriptor) != null) {
            return _temporalAssertDefined(descriptor, 'descriptor', _temporalUndefined) && descriptor;
        }

        _temporalAssertDefined(_temporalAssertDefined(props, 'props', _temporalUndefined) && props, 'props', _temporalUndefined);

        props = Object.getOwnPropertyNames((_temporalAssertDefined(_temporalAssertDefined(constructor, 'constructor', _temporalUndefined) && constructor, 'constructor', _temporalUndefined) && (_temporalAssertDefined(constructor, 'constructor', _temporalUndefined) && constructor)).prototype);
    }

    return _temporalAssertDefined(props, 'props', _temporalUndefined) && props;
}

module.exports = exports['default'];
