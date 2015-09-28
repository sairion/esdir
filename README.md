# esdir: object inspection tool for ES

**esdir** is a very small object inspection tool like `dir()` in Python. It is wrapper over `Object.getOwnPropertyNames()` ES5 API, and shows what properties are available for the object you passed.

```javascript
var dir = require('esdir');

dir(''); // => [ 'length', 'constructor', 'valueOf', 'toString', 'charAt', ...]
dir(function(){}); // => [ 'length', 'name', 'arguments', ... ]
dir(10); // => [ 'toFixed', 'toExponential', 'toPrecision', ... ]
```

## Notes

This project is built with [Babel](http://babeljs.io/). If you want to use ES2015 source, require/import like `require('esdir/src')`.
