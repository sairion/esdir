export default function dir(toInspect, pprint=true) {
    'use strict';
    if (toInspect == null) {
        return [];
    }

    let props;

    let isConstructorSelf = toInspect.prototype != null;
    let constructor = isConstructorSelf ? toInspect : toInspect.constructor;

    if (Object.getOwnPropertyNames == null) {
        throw new Error('Since Object.getOwnPropertyNames does not exist, it is not possible to retrieve non-enumerable properties.');
    }

    if (constructor) {
        let descriptor = constructor.__dir__;

        if (typeof descriptor === 'function') {
            let d = descriptor();
            if (d instanceof Array) {
                return d;
            }
        } else if (descriptor != null) {
            return descriptor;
        }
        props = Object.getOwnPropertyNames(constructor.prototype);
    }

    return props;
}
