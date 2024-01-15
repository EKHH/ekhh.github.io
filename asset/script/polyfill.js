if (typeof Object.assign !== 'function') {
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) {
      'use strict';
      if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource !== null && nextSource !== undefined) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}

if (!Array.prototype.includes) {
  Array.prototype.includes = function (search) {
    return !!~this.indexOf(search);
  }
}
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = (function (Object, max, min) {
    "use strict";
    return function indexOf(member, fromIndex) {
      if (this === null || this === undefined) throw TypeError("Array.prototype.indexOf called on null or undefined");

      var that = Object(this),
        Len = that.length >>> 0,
        i = min(fromIndex | 0, Len);
      if (i < 0) i = max(0, Len + i);
      else if (i >= Len) return -1;

      if (member === void 0) {
        for (; i !== Len; ++i)
          if (that[i] === void 0 && i in that) return i;
      } else if (member !== member) {
        for (; i !== Len; ++i)
          if (that[i] !== that[i]) return i;
      } else
        for (; i !== Len; ++i)
          if (that[i] === member) return i;

      return -1;
    };
  })(Object, Math.max, Math.min);
}

Object.values = function (obj) {
  return Object.keys(obj).map(function (e) {
    return obj[e];
  });
};

if (!Object.entries)
  Object.entries = function (obj) {
    var ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i);
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };

(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('remove')) {
      return;
    }
    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

(function (e) {
  "use strict";
  if (e.WeakMap) {
    return
  }
  var r = Object.prototype.hasOwnProperty;
  var n = Object.defineProperty && function () {
    try {
      return Object.defineProperty({}, "x", {
        value: 1
      }).x === 1
    } catch (e) {}
  }();
  var i = function (e, t, r) {
    if (n) {
      Object.defineProperty(e, t, {
        configurable: true,
        writable: true,
        value: r
      })
    } else {
      e[t] = r
    }
  };
  e.WeakMap = function () {
    function WeakMap() {
      if (this === void 0) {
        throw new TypeError("Constructor WeakMap requires 'new'")
      }
      i(this, "_id", genId("_WeakMap"));
      if (arguments.length > 0) {
        throw new TypeError("WeakMap iterable is not supported")
      }
    }
    i(WeakMap.prototype, "delete", function (e) {
      checkInstance(this, "delete");
      if (!isObject(e)) {
        return false
      }
      var t = e[this._id];
      if (t && t[0] === e) {
        delete e[this._id];
        return true
      }
      return false
    });
    i(WeakMap.prototype, "get", function (e) {
      checkInstance(this, "get");
      if (!isObject(e)) {
        return void 0
      }
      var t = e[this._id];
      if (t && t[0] === e) {
        return t[1]
      }
      return void 0
    });
    i(WeakMap.prototype, "has", function (e) {
      checkInstance(this, "has");
      if (!isObject(e)) {
        return false
      }
      var t = e[this._id];
      if (t && t[0] === e) {
        return true
      }
      return false
    });
    i(WeakMap.prototype, "set", function (e, t) {
      checkInstance(this, "set");
      if (!isObject(e)) {
        throw new TypeError("Invalid value used as weak map key")
      }
      var r = e[this._id];
      if (r && r[0] === e) {
        r[1] = t;
        return this
      }
      i(e, this._id, [e, t]);
      return this
    });

    function checkInstance(e, t) {
      if (!isObject(e) || !r.call(e, "_id")) {
        throw new TypeError(t + " method called on incompatible receiver " + typeof e)
      }
    }

    function genId(e) {
      return e + "_" + rand() + "." + rand()
    }

    function rand() {
      return Math.random().toString().substring(2)
    }
    i(WeakMap, "_polyfill", true);
    return WeakMap
  }();

  function isObject(e) {
    return Object(e) === e
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this);