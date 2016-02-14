## Arrow async functions with default arguments

```
const fun1 = async (a,b='',c) => {
  console.log("Called with",a,b,c);
  return null;
}
```

is compiled to
```
var fun1 = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(a) {
    var b = _arguments.length <= 1 || _arguments[1] === undefined ? '' : _arguments[1];
    var c = _arguments[2];
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("Called with", a, b, c);
            return _context.abrupt('return', null);

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })),
      _this = undefined;

  return function fun1(_x2, _x3, _x4) {
    return ref.apply(_this, arguments);
  };
}();
```

when:
```
const fun2 = async function(a,b='',c) {
  console.log("Called with",a,b,c);
  return null;
}
```

compiles to:
```
var fun2 = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(a) {
    var b = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
    var c = arguments[2];
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log("Called with", a, b, c);
            return _context2.abrupt('return', null);

          case 2:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function fun2(_x6, _x7, _x8) {
    return ref.apply(this, arguments);
  };
}();
```

The arrow function `fun1` destructures its arguments from the `_arguments` variable
instead of `arguments` that `fun2` uses. The `_arguments` variable is not overwritten
anywhere within the scope of `fun1` so it is takes from the surrounding closure
which results in wrong arguments being extracted.
