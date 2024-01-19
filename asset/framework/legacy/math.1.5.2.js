! function (e, r) {
    "object" == typeof exports && "object" == typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define(r) : "object" == typeof exports ? exports.math = r() : e.math = r()
}(this, function () {
    return function (e) {
        function r(n) {
            if (t[n]) return t[n].exports;
            var i = t[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return e[n].call(i.exports, i, i.exports, r), i.loaded = !0, i.exports
        }
        var t = {};
        return r.m = e, r.c = t, r.p = "", r(0)
    }([function (e, r, t) {
        e.exports = t(1)
    }, function (e, r, t) {
        "use strict";

        function n(e) {
            if ("function" != typeof Object.create) throw new Error("ES5 not supported by this JavaScript engine. Please load the es5-shim and es5-sham library for compatibility.");
            var r = {},
                a = {
                    matrix: "matrix",
                    number: "number",
                    precision: 64,
                    epsilon: 1e-14
                };
            r.config = function (e) {
                if (e) {
                    if (i.deepExtend(a, e), e.precision && r.type.BigNumber.config({
                            precision: e.precision
                        }), t(4)(r, a), e.number && e.number.defaultType) throw new Error("setting `number.defaultType` is deprecated. Use `number` instead.");
                    if (e.number && e.number.precision) throw new Error("setting `number.precision` is deprecated. Use `precision` instead.");
                    if (e.matrix && e.matrix.defaultType) throw new Error("setting `matrix.defaultType` is deprecated. Use `matrix` instead.");
                    if (e.matrix && e.matrix["default"]) throw new Error("setting `matrix.default` is deprecated. Use `matrix` instead.");
                    if (e.decimals) throw new Error("setting `decimals` is deprecated. Use `precision` instead.")
                }
                return i.clone(a)
            }, r.create = n;
            var s = t(5).constructor();
            if (s.prototype.toJSON = function () {
                    return {
                        mathjs: "BigNumber",
                        value: this.toString()
                    }
                }, s.fromJSON = function (e) {
                    return new s(e.value)
                }, "function" != typeof s.prototype.clone && (s.prototype.clone = function () {
                    return this
                }), "function" == typeof s.convert) throw new Error("Cannot add function convert to BigNumber: function already exists");
            return s.convert = function (e) {
                return o(e) > 15 ? e : new s(e)
            }, r.error = t(6), r.type = {}, r.type.Complex = t(7), r.type.Range = t(8), r.type.Index = t(9), r.type.Matrix = t(10)(a), r.type.Unit = t(11), r.type.Help = t(12), r.type.ResultSet = t(13), r.type.BigNumber = s, r.collection = t(14)(r, a), r.type.CcsMatrix = t(15)(r, a), r.type.CrsMatrix = t(16)(r, a), r.type.DenseMatrix = t(17)(r, a), r.type.Matrix._storage.ccs = r.type.CcsMatrix, r.type.Matrix._storage.crs = r.type.CrsMatrix, r.type.Matrix._storage.dense = r.type.DenseMatrix, r.type.Matrix._storage["default"] = r.type.DenseMatrix, r.expression = {}, r.expression.node = t(18), r.expression.parse = t(19)(r, a), r.expression.Parser = t(20)(r, a), r.expression.docs = t(21), r.json = {
                reviver: t(22)(r, a)
            }, t(34)(r, a), t(35)(r, a), t(36)(r, a), t(37)(r, a), t(38)(r, a), t(39)(r, a), t(40)(r, a), t(41)(r, a), t(42)(r, a), t(43)(r, a), t(44)(r, a), t(45)(r, a), t(46)(r, a), t(47)(r, a), t(48)(r, a), t(49)(r, a), t(50)(r, a), t(51)(r, a), t(52)(r, a), t(53)(r, a), t(54)(r, a), t(55)(r, a), t(56)(r, a), t(57)(r, a), t(58)(r, a), t(59)(r, a), t(60)(r, a), t(61)(r, a), t(62)(r, a), t(63)(r, a), t(64)(r, a), t(65)(r, a), t(66)(r, a), t(67)(r, a), t(68)(r, a), t(69)(r, a), t(70)(r, a), t(71)(r, a), t(72)(r, a), t(73)(r, a), t(74)(r, a), t(75)(r, a), t(76)(r, a), t(77)(r, a), t(78)(r, a), t(79)(r, a), t(80)(r, a), t(81)(r, a), t(82)(r, a), t(83)(r, a), t(84)(r, a), t(85)(r, a), t(86)(r, a), t(87)(r, a), t(88)(r, a), t(89)(r, a), t(90)(r, a), t(91)(r, a), t(92)(r, a), t(93)(r, a), t(94)(r, a), t(95)(r, a), t(96)(r, a), t(97)(r, a), t(98)(r, a), t(99)(r, a), t(100)(r, a), t(101)(r, a), t(102)(r, a), t(103)(r, a), t(104)(r, a), t(105)(r, a), t(106)(r, a), t(107)(r, a), t(108)(r, a), t(109)(r, a), t(110)(r, a), t(111)(r, a), t(112)(r, a), t(113)(r, a), t(114)(r, a), t(115)(r, a), t(116)(r, a), t(117)(r, a), t(118)(r, a), t(119)(r, a), t(120)(r, a), t(121)(r, a), t(122)(r, a), t(123)(r, a), t(124)(r, a), t(125)(r, a), t(126)(r, a), t(127)(r, a), t(128)(r, a), t(129)(r, a), t(130)(r, a), t(131)(r, a), t(132)(r, a), t(133)(r, a), t(134)(r, a), t(135)(r, a), t(136)(r, a), t(137)(r, a), t(138)(r, a), t(139)(r, a), t(140)(r, a), t(141)(r, a), t(142)(r, a), t(143)(r, a), t(144)(r, a), t(145)(r, a), t(146)(r, a), t(147)(r, a), t(148)(r, a), t(149)(r, a), t(150)(r, a), t(151)(r, a), t(152)(r, a), t(153)(r, a), t(154)(r, a), t(155)(r, a), t(156)(r, a), t(157)(r, a), t(158)(r, a), t(159)(r, a), t(160)(r, a), t(161)(r, a), t(162)(r, a), t(163)(r, a), t(164)(r, a), t(165)(r, a), t(166)(r, a), r.ifElse = function () {
                throw new Error("Function ifElse is deprecated. Use the conditional operator instead.")
            }, t(4)(r, a), r.expression.transform = {
                concat: t(23)(r, a),
                filter: t(24)(r, a),
                forEach: t(25)(r, a),
                index: t(26)(r, a),
                map: t(27)(r, a),
                max: t(28)(r, a),
                mean: t(29)(r, a),
                min: t(30)(r, a),
                range: t(31)(r, a),
                subset: t(32)(r, a)
            }, r.chaining = {}, r.chaining.Chain = t(33)(r, a), r.chaining.Selector = r.chaining.Chain, r.config(a), r.config(e), r
        }
        var i = t(2),
            o = t(3).digits,
            a = n();
        "undefined" != typeof window && (window.mathjs = a), e.exports = a
    }, function (e, r, t) {
        "use strict";
        r.clone = function n(e) {
            var r = typeof e;
            if ("number" === r || "string" === r || "boolean" === r || null === e || void 0 === e) return e;
            if ("function" == typeof e.clone) return e.clone();
            if (Array.isArray(e)) return e.map(function (e) {
                return n(e)
            });
            if (e instanceof Number) return new Number(e.valueOf());
            if (e instanceof String) return new String(e.valueOf());
            if (e instanceof Boolean) return new Boolean(e.valueOf());
            if (e instanceof Date) return new Date(e.valueOf());
            if (e instanceof RegExp) throw new TypeError("Cannot clone " + e);
            var t = {};
            for (var i in e) e.hasOwnProperty(i) && (t[i] = n(e[i]));
            return t
        }, r.extend = function (e, r) {
            for (var t in r) r.hasOwnProperty(t) && (e[t] = r[t]);
            return e
        }, r.deepExtend = function i(e, r) {
            if (Array.isArray(r)) throw new TypeError("Arrays are not supported by deepExtend");
            for (var t in r)
                if (r.hasOwnProperty(t))
                    if (r[t] && r[t].constructor === Object) void 0 === e[t] && (e[t] = {}), e[t].constructor === Object ? i(e[t], r[t]) : e[t] = r[t];
                    else {
                        if (Array.isArray(r[t])) throw new TypeError("Arrays are not supported by deepExtend");
                        e[t] = r[t]
                    } return e
        }, r.deepEqual = function (e, t) {
            var n, i, o;
            if (Array.isArray(e)) {
                if (!Array.isArray(t)) return !1;
                if (e.length != t.length) return !1;
                for (i = 0, o = e.length; o > i; i++)
                    if (!r.deepEqual(e[i], t[i])) return !1;
                return !0
            }
            if (e instanceof Object) {
                if (Array.isArray(t) || !(t instanceof Object)) return !1;
                for (n in e)
                    if (!r.deepEqual(e[n], t[n])) return !1;
                for (n in t)
                    if (!r.deepEqual(e[n], t[n])) return !1;
                return !0
            }
            return typeof e == typeof t && e == t
        }, r.canDefineProperty = function () {
            try {
                if (Object.defineProperty) return Object.defineProperty({}, "x", {}), !0
            } catch (e) {}
            return !1
        }, r.lazy = function (e, t, n) {
            if (r.canDefineProperty()) {
                var i, o = !0;
                Object.defineProperty(e, t, {
                    get: function () {
                        return o && (i = n(), o = !1), i
                    },
                    set: function (e) {
                        i = e, o = !1
                    }
                })
            } else e[t] = n()
        }
    }, function (e, r, t) {
        "use strict";
        var n = t(167);
        r.isNumber = function (e) {
            return e instanceof Number || "number" == typeof e
        }, r.isInteger = function (e) {
            return e == Math.round(e)
        }, r.sign = function (e) {
            return e > 0 ? 1 : 0 > e ? -1 : 0
        }, r.format = function (e, t) {
            if ("function" == typeof t) return t(e);
            if (e === 1 / 0) return "Infinity";
            if (e === -(1 / 0)) return "-Infinity";
            if (isNaN(e)) return "NaN";
            var n = "auto",
                i = void 0;
            switch (t && (t.notation && (n = t.notation), r.isNumber(t) ? i = t : t.precision && (i = t.precision)), n) {
                case "fixed":
                    return r.toFixed(e, i);
                case "exponential":
                    return r.toExponential(e, i);
                case "auto":
                    return r.toPrecision(e, i, t && t.exponential).replace(/((\.\d*?)(0+))($|e)/, function () {
                        var e = arguments[2],
                            r = arguments[4];
                        return "." !== e ? e + r : r
                    });
                default:
                    throw new Error('Unknown notation "' + n + '". Choose "auto", "exponential", or "fixed".')
            }
        }, r.toExponential = function (e, r) {
            return new n(e).toExponential(r)
        }, r.toFixed = function (e, r) {
            return new n(e).toFixed(r)
        }, r.toPrecision = function (e, r, t) {
            return new n(e).toPrecision(r, t)
        }, r.digits = function (e) {
            return e.toExponential().replace(/e.*$/, "").replace(/^0\.?0*|\./, "").length
        }, r.DBL_EPSILON = Number.EPSILON || 2.220446049250313e-16, r.nearlyEqual = function (e, t, n) {
            if (null == n) return e == t;
            if (e == t) return !0;
            if (isNaN(e) || isNaN(t)) return !1;
            if (isFinite(e) && isFinite(t)) {
                var i = Math.abs(e - t);
                return i < r.DBL_EPSILON ? !0 : i <= Math.max(Math.abs(e), Math.abs(t)) * n
            }
            return !1
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(2),
                i = t(168),
                o = t(7),
                a = e.type.BigNumber;
            e["true"] = !0, e["false"] = !1, e["null"] = null, e.uninitialized = t(169).UNINITIALIZED, "bignumber" === r.number ? (e.Infinity = new a(1 / 0), e.NaN = new a(0 / 0), n.lazy(e, "pi", function () {
                return i.pi(r.precision)
            }), n.lazy(e, "tau", function () {
                return i.tau(r.precision)
            }), n.lazy(e, "e", function () {
                return i.e(r.precision)
            }), n.lazy(e, "phi", function () {
                return i.phi(r.precision)
            }), n.lazy(e, "E", function () {
                return e.e
            }), n.lazy(e, "LN2", function () {
                return new a(2).ln()
            }), n.lazy(e, "LN10", function () {
                return new a(10).ln()
            }), n.lazy(e, "LOG2E", function () {
                return new a(1).div(new a(2).ln())
            }), n.lazy(e, "LOG10E", function () {
                return new a(1).div(new a(10).ln())
            }), n.lazy(e, "PI", function () {
                return e.pi
            }), n.lazy(e, "SQRT1_2", function () {
                return new a("0.5").sqrt()
            }), n.lazy(e, "SQRT2", function () {
                return new a(2).sqrt()
            })) : (e.Infinity = 1 / 0, e.NaN = 0 / 0, e.pi = Math.PI, e.tau = 2 * Math.PI, e.e = Math.E, e.phi = 1.618033988749895, e.E = e.e, e.LN2 = Math.LN2, e.LN10 = Math.LN10, e.LOG2E = Math.LOG2E, e.LOG10E = Math.LOG10E, e.PI = e.pi, e.SQRT1_2 = Math.SQRT1_2, e.SQRT2 = Math.SQRT2), e.i = new o(0, 1), e.version = t(170)
        }
    }, function (e, r, t) {
        var n = t(340);
        e.exports = n
    }, function (e, r, t) {
        "use strict";
        r.ArgumentsError = t(171), r.DimensionError = t(172), r.IndexError = t(173), r.UnsupportedTypeError = t(174)
    }, function (e, r, t) {
        "use strict";

        function n(e, r) {
            if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            switch (arguments.length) {
                case 0:
                    this.re = 0, this.im = 0;
                    break;
                case 1:
                    var t = arguments[0];
                    if ("object" == typeof t) {
                        if ("re" in t && "im" in t) {
                            var i = new n(t.re, t.im);
                            this.re = i.re, this.im = i.im;
                            break
                        }
                        if ("r" in t && "phi" in t) {
                            var i = n.fromPolar(t.r, t.phi);
                            this.re = i.re, this.im = i.im;
                            break
                        }
                    }
                    throw new SyntaxError("Object with the re and im or r and phi properties expected.");
                case 2:
                    if (!h(e) || !h(r)) throw new TypeError("Two numbers expected in Complex constructor");
                    this.re = e, this.im = r;
                    break;
                default:
                    throw new SyntaxError("One, two or three arguments expected in Complex constructor")
            }
        }

        function i() {
            for (;
                " " == x || "	" == x;) s()
        }

        function o(e) {
            return e >= "0" && "9" >= e || "." == e
        }

        function a(e) {
            return e >= "0" && "9" >= e
        }

        function s() {
            y++, x = v.charAt(y)
        }

        function u(e) {
            y = e, x = v.charAt(y)
        }

        function c() {
            var e, r = "";
            if (e = y, "+" == x ? s() : "-" == x && (r += x, s()), !o(x)) return u(e), null;
            if ("." == x) {
                if (r += x, s(), !a(x)) return u(e), null
            } else {
                for (; a(x);) r += x, s();
                "." == x && (r += x, s())
            }
            for (; a(x);) r += x, s();
            if ("E" == x || "e" == x) {
                if (r += x, s(), ("+" == x || "-" == x) && (r += x, s()), !a(x)) return u(e), null;
                for (; a(x);) r += x, s()
            }
            return r
        }

        function f() {
            var e = v.charAt(y + 1);
            if ("I" == x || "i" == x) return s(), "1";
            if (!("+" != x && "-" != x || "I" != e && "i" != e)) {
                var r = "+" == x ? "1" : "-1";
                return s(), s(), r
            }
            return null
        }
        var l = t(175),
            p = t(11),
            m = l.number,
            h = l.number.isNumber,
            g = p.isUnit,
            d = l.string.isString;
        n.isComplex = function (e) {
            return e instanceof n
        };
        var v, y, x;
        n.parse = function (e) {
            if (v = e, y = -1, x = "", !d(v)) return null;
            s(), i();
            var r = c();
            if (r) {
                if ("I" == x || "i" == x) return s(), i(), x ? null : new n(0, Number(r));
                i();
                var t = x;
                if ("+" != t && "-" != t) return i(), x ? null : new n(Number(r), 0);
                s(), i();
                var o = c();
                if (o) {
                    if ("I" != x && "i" != x) return null;
                    s()
                } else if (o = f(), !o) return null;
                return "-" == t && (o = "-" == o[0] ? "+" + o.substring(1) : "-" + o), s(), i(), x ? null : new n(Number(r), Number(o))
            }
            return (r = f()) ? (i(), x ? null : new n(0, Number(r))) : null
        }, n.fromPolar = function (e) {
            switch (arguments.length) {
                case 1:
                    var r = arguments[0];
                    if ("object" == typeof r) return n.fromPolar(r.r, r.phi);
                    throw new TypeError("Input has to be an object with r and phi keys.");
                case 2:
                    var t = arguments[0],
                        i = arguments[1];
                    if (h(t)) {
                        if (g(i) && i.hasBase(p.BASE_UNITS.ANGLE) && (i = i.toNumber("rad")), h(i)) return new n(t * Math.cos(i), t * Math.sin(i));
                        throw new TypeError("Phi is not a number nor an angle unit.")
                    }
                    throw new TypeError("Radius r is not a number.");
                default:
                    throw new SyntaxError("Wrong number of arguments in function fromPolar")
            }
        }, n.prototype.toPolar = function () {
            return {
                r: Math.sqrt(this.re * this.re + this.im * this.im),
                phi: Math.atan2(this.im, this.re)
            }
        }, n.prototype.clone = function () {
            return new n(this.re, this.im)
        }, n.prototype.equals = function (e) {
            return this.re === e.re && this.im === e.im
        }, n.prototype.format = function (e) {
            var r = "",
                t = this.im,
                n = this.re,
                i = m.format(this.re, e),
                o = m.format(this.im, e),
                a = h(e) ? e : e ? e.precision : null;
            if (null !== a) {
                var s = Math.pow(10, -a);
                Math.abs(n / t) < s && (n = 0), Math.abs(t / n) < s && (t = 0)
            }
            return r = 0 == t ? i : 0 == n ? 1 == t ? "i" : -1 == t ? "-i" : o + "i" : t > 0 ? 1 == t ? i + " + i" : i + " + " + o + "i" : -1 == t ? i + " - i" : i + " - " + o.substring(1) + "i"
        }, n.prototype.toString = function () {
            return this.format()
        }, n.prototype.toJSON = function () {
            return {
                mathjs: "Complex",
                re: this.re,
                im: this.im
            }
        }, n.fromJSON = function (e) {
            return new n(e)
        }, n.prototype.valueOf = n.prototype.toString, e.exports = n
    }, function (e, r, t) {
        "use strict";

        function n(e, r, t) {
            if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            if (null != e && !o.isNumber(e)) throw new TypeError("Parameter start must be a number");
            if (null != r && !o.isNumber(r)) throw new TypeError("Parameter end must be a number");
            if (null != t && !o.isNumber(t)) throw new TypeError("Parameter step must be a number");
            this.start = null != e ? parseFloat(e) : 0, this.end = null != r ? parseFloat(r) : 0, this.step = null != t ? parseFloat(t) : 1
        } {
            var i = t(175),
                o = i.number,
                a = i.string;
            i.array
        }
        n.parse = function (e) {
            if (!a.isString(e)) return null;
            var r = e.split(":"),
                t = r.map(function (e) {
                    return parseFloat(e)
                }),
                i = t.some(function (e) {
                    return isNaN(e)
                });
            if (i) return null;
            switch (t.length) {
                case 2:
                    return new n(t[0], t[1]);
                case 3:
                    return new n(t[0], t[2], t[1]);
                default:
                    return null
            }
        }, n.prototype.clone = function () {
            return new n(this.start, this.end, this.step)
        }, n.isRange = function (e) {
            return e instanceof n
        }, n.prototype.size = function () {
            var e = 0,
                r = this.start,
                t = this.step,
                n = this.end,
                i = n - r;
            return o.sign(t) == o.sign(i) ? e = Math.ceil(i / t) : 0 == i && (e = 0), isNaN(e) && (e = 0), [e]
        }, n.prototype.min = function () {
            var e = this.size()[0];
            return e > 0 ? this.step > 0 ? this.start : this.start + (e - 1) * this.step : void 0
        }, n.prototype.max = function () {
            var e = this.size()[0];
            return e > 0 ? this.step > 0 ? this.start + (e - 1) * this.step : this.start : void 0
        }, n.prototype.forEach = function (e) {
            var r = this.start,
                t = this.step,
                n = this.end,
                i = 0;
            if (t > 0)
                for (; n > r;) e(r, i, this), r += t, i++;
            else if (0 > t)
                for (; r > n;) e(r, i, this), r += t, i++
        }, n.prototype.map = function (e) {
            var r = [];
            return this.forEach(function (t, n, i) {
                r[n] = e(t, n, i)
            }), r
        }, n.prototype.toArray = function () {
            var e = [];
            return this.forEach(function (r, t) {
                e[t] = r
            }), e
        }, n.prototype.valueOf = function () {
            return this.toArray()
        }, n.prototype.format = function (e) {
            var r = o.format(this.start, e);
            return 1 != this.step && (r += ":" + o.format(this.step, e)), r += ":" + o.format(this.end, e)
        }, n.prototype.toString = function () {
            return this.format()
        }, n.prototype.toJSON = function () {
            return {
                mathjs: "Range",
                start: this.start,
                end: this.end,
                step: this.step
            }
        }, n.fromJSON = function (e) {
            return new n(e.start, e.end, e.step)
        }, e.exports = n
    }, function (e, r, t) {
        "use strict";

        function n(e) {
            if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            this._ranges = [], this._isScalar = !0;
            for (var r = 0, t = arguments.length; t > r; r++) {
                var o = arguments[r];
                if (o instanceof a) this._ranges.push(o), this._isScalar = !1;
                else if (f(o)) this._ranges.push(i(o)), this._isScalar = !1;
                else if (u(o)) this._ranges.push(i([o, o + 1]));
                else {
                    var s = o.valueOf();
                    if (!f(s)) throw new TypeError("Ranges must be an Array, Number, or Range");
                    this._ranges.push(i(s)), this._isScalar = !1
                }
            }
        }

        function i(e) {
            for (var r = e.length, t = 0; r > t; t++)
                if (!u(e[t]) || !c(e[t])) throw new TypeError("Index parameters must be integer numbers");
            switch (e.length) {
                case 2:
                    return new a(e[0], e[1]);
                case 3:
                    return new a(e[0], e[1], e[2]);
                default:
                    throw new SyntaxError("Wrong number of arguments in Index (2 or 3 expected)")
            }
        }
        var o = t(175),
            a = t(8),
            s = o.number,
            u = s.isNumber,
            c = s.isInteger,
            f = Array.isArray;
        n.prototype.clone = function () {
            var e = new n;
            return e._ranges = o.object.clone(this._ranges), e._isScalar = this._isScalar, e
        }, n.isIndex = function (e) {
            return e instanceof n
        }, n.create = function (e) {
            var r = new n;
            return n.apply(r, e), r
        }, n.prototype.size = function () {
            for (var e = [], r = 0, t = this._ranges.length; t > r; r++) {
                var n = this._ranges[r];
                e[r] = n.size()[0]
            }
            return e
        }, n.prototype.max = function () {
            for (var e = [], r = 0, t = this._ranges.length; t > r; r++) {
                var n = this._ranges[r];
                e[r] = n.max()
            }
            return e
        }, n.prototype.min = function () {
            for (var e = [], r = 0, t = this._ranges.length; t > r; r++) {
                var n = this._ranges[r];
                e[r] = n.min()
            }
            return e
        }, n.prototype.forEach = function (e) {
            for (var r = 0, t = this._ranges.length; t > r; r++) e(this._ranges[r], r, this)
        }, n.prototype.range = function (e) {
            return this._ranges[e] || null
        }, n.prototype.isScalar = function () {
            return this._isScalar
        }, n.prototype.toArray = function () {
            for (var e = [], r = 0, t = this._ranges.length; t > r; r++) {
                var n = this._ranges[r],
                    i = [],
                    o = n.start,
                    a = n.end,
                    s = n.step;
                if (s > 0)
                    for (; a > o;) i.push(o), o += s;
                else if (0 > s)
                    for (; o > a;) i.push(o), o += s;
                e.push(i)
            }
            return e
        }, n.prototype.valueOf = n.prototype.toArray, n.prototype.toString = function () {
            for (var e = [], r = 0, t = this._ranges.length; t > r; r++) {
                var n = this._ranges[r],
                    i = s.format(n.start);
                1 != n.step && (i += ":" + s.format(n.step)), i += ":" + s.format(n.end), e.push(i)
            }
            return "[" + e.join(", ") + "]"
        }, n.prototype.toJSON = function () {
            return {
                mathjs: "Index",
                ranges: this._ranges
            }
        }, n.fromJSON = function (e) {
            return n.create(e.ranges)
        }, e.exports = n
    }, function (e, r, t) {
        "use strict";
        var n = t(176),
            i = n.isString;
        e.exports = function (e) {
            function r() {
                if (!(this instanceof r)) throw new SyntaxError("Constructor must be called with the new operator")
            }
            return r.isMatrix = function (e) {
                return e instanceof r
            }, r.storage = function (e) {
                if (!i(e)) throw new TypeError("format must be a string value");
                var t = r._storage[e];
                if (!t) throw new SyntaxError("Unsupported matrix storage format: " + e);
                return t
            }, r._storage = {}, r.prototype.storage = function () {
                throw new Error("Cannot invoke storage on a Matrix interface")
            }, r.prototype.subset = function (e, r, t) {
                throw new Error("Cannot invoke subset on a Matrix interface")
            }, r.prototype.get = function (e) {
                throw new Error("Cannot invoke get on a Matrix interface")
            }, r.prototype.set = function (e, r, t) {
                throw new Error("Cannot invoke set on a Matrix interface")
            }, r.prototype.resize = function (e, r) {
                throw new Error("Cannot invoke resize on a Matrix interface")
            }, r.prototype.clone = function () {
                throw new Error("Cannot invoke clone on a Matrix interface")
            }, r.prototype.size = function () {
                throw new Error("Cannot invoke size on a Matrix interface")
            }, r.prototype.map = function (e, r) {
                throw new Error("Cannot invoke map on a Matrix interface")
            }, r.prototype.forEach = function (e) {
                throw new Error("Cannot invoke forEach on a Matrix interface")
            }, r.prototype.toArray = function () {
                throw new Error("Cannot invoke toArray on a Matrix interface")
            }, r.prototype.valueOf = function () {
                throw new Error("Cannot invoke valueOf on a Matrix interface")
            }, r.prototype.format = function (e) {
                throw new Error("Cannot invoke format on a Matrix interface")
            }, r.prototype.toString = function () {
                throw new Error("Cannot invoke toString on a Matrix interface")
            }, r.prototype.transpose = function () {
                throw new Error("Cannot invoke transpose on a Matrix interface")
            }, r.prototype.trace = function () {
                throw new Error("Cannot invoke transpose on a Matrix interface")
            }, r.prototype.multiply = function (e) {
                throw new Error("Cannot invoke multiply on a Matrix interface")
            }, r
        }
    }, function (e, r, t) {
        "use strict";

        function n(e, r) {
            if (!(this instanceof n)) throw new Error("Constructor must be called with the new operator");
            if (void 0 != e && !y(e)) throw new TypeError("First parameter in Unit constructor must be a number");
            if (void 0 != r && (!x(r) || "" == r)) throw new TypeError("Second parameter in Unit constructor must be a string");
            if (void 0 != r) {
                var t = l(r);
                if (!t) throw new SyntaxError('Unknown unit "' + r + '"');
                this.unit = t.unit, this.prefix = t.prefix
            } else this.unit = M, this.prefix = b;
            this.value = void 0 != e ? this._normalize(e) : null, this.fixPrefix = !1
        }

        function i() {
            for (;
                " " == h || "	" == h;) s()
        }

        function o(e) {
            return e >= "0" && "9" >= e || "." == e
        }

        function a(e) {
            return e >= "0" && "9" >= e
        }

        function s() {
            m++, h = p.charAt(m)
        }

        function u(e) {
            m = e, h = p.charAt(m)
        }

        function c() {
            var e, r = "";
            if (e = m, "+" == h ? s() : "-" == h && (r += h, s()), !o(h)) return u(e), null;
            if ("." == h) {
                if (r += h, s(), !a(h)) return u(e), null
            } else {
                for (; a(h);) r += h, s();
                "." == h && (r += h, s())
            }
            for (; a(h);) r += h, s();
            if ("E" == h || "e" == h) {
                if (r += h, s(), ("+" == h || "-" == h) && (r += h, s()), !a(h)) return u(e), null;
                for (; a(h);) r += h, s()
            }
            return r
        }

        function f() {
            var e = "";
            for (i(); h && " " != h && "	" != h;) e += h, s();
            return e || null
        }

        function l(e) {
            for (var r in _)
                if (_.hasOwnProperty(r) && v.endsWith(e, r)) {
                    var t = _[r],
                        n = e.length - r.length,
                        i = e.substring(0, n),
                        o = t.prefixes[i];
                    if (void 0 !== o) return {
                        unit: t,
                        prefix: o
                    }
                } return null
        }
        var p, m, h, g = t(175),
            d = g.number,
            v = g.string,
            y = g.number.isNumber,
            x = g.string.isString;
        n.parse = function (e) {
            if (p = e, m = -1, h = "", !x(p)) return null;
            s(), i();
            var r, t = c();
            if (t) {
                if (r = f(), s(), i(), h) return null;
                if (t && r) try {
                    return new n(Number(t), r)
                } catch (o) {}
            } else {
                if (r = f(), s(), i(), h) return null;
                if (r) try {
                    return new n(null, r)
                } catch (o) {}
            }
            return null
        }, n.isUnit = function (e) {
            return e instanceof n
        }, n.prototype.clone = function () {
            var e = new n;
            for (var r in this) this.hasOwnProperty(r) && (e[r] = this[r]);
            return e
        }, n.prototype._normalize = function (e) {
            return (e + this.unit.offset) * this.unit.value * this.prefix.value
        }, n.prototype._denormalize = function (e, r) {
            return void 0 == r ? e / this.unit.value / this.prefix.value - this.unit.offset : e / this.unit.value / r - this.unit.offset
        }, n.isValuelessUnit = function (e) {
            return null != l(e)
        }, n.prototype.hasBase = function (e) {
            return this.unit.base === e
        }, n.prototype.equalBase = function (e) {
            return this.unit.base === e.unit.base
        }, n.prototype.equals = function (e) {
            return this.equalBase(e) && this.value == e.value
        }, n.prototype.to = function (e) {
            var r, t = null == this.value ? this._normalize(1) : this.value;
            if (x(e)) {
                if (r = new n(null, e), !this.equalBase(r)) throw new Error("Units do not match");
                return r.value = t, r.fixPrefix = !0, r
            }
            if (e instanceof n) {
                if (!this.equalBase(e)) throw new Error("Units do not match");
                if (null !== e.value) throw new Error("Cannot convert to a unit with a value");
                return r = e.clone(), r.value = t, r.fixPrefix = !0, r
            }
            throw new Error("String or Unit expected as parameter")
        }, n.prototype.toNumber = function (e) {
            var r = this.to(e);
            return r._denormalize(r.value, r.prefix.value)
        }, n.prototype.toString = function () {
            return this.format()
        }, n.prototype.toJSON = function () {
            return {
                mathjs: "Unit",
                value: this._denormalize(this.value),
                unit: this.prefix.name + this.unit.name,
                fixPrefix: this.fixPrefix
            }
        }, n.fromJSON = function (e) {
            var r = new n(e.value, e.unit);
            return r.fixPrefix = e.fixPrefix || !1, r
        }, n.prototype.valueOf = n.prototype.toString, n.prototype.format = function (e) {
            var r, t;
            if (null === this.value || this.fixPrefix) r = this._denormalize(this.value), t = null !== this.value ? d.format(r, e) + " " : "", t += this.prefix.name + this.unit.name;
            else {
                var n = this._bestPrefix();
                r = this._denormalize(this.value, n.value), t = d.format(r, e) + " ", t += n.name + this.unit.name
            }
            return t
        }, n.prototype._bestPrefix = function () {
            var e = Math.abs(this.value / this.unit.value),
                r = b,
                t = Math.abs(Math.log(e / r.value) / Math.LN10 - 1.2),
                n = this.unit.prefixes;
            for (var i in n)
                if (n.hasOwnProperty(i)) {
                    var o = n[i];
                    if (o.scientific) {
                        var a = Math.abs(Math.log(e / o.value) / Math.LN10 - 1.2);
                        t > a && (r = o, t = a)
                    }
                } return r
        };
        var w = {
                NONE: {
                    "": {
                        name: "",
                        value: 1,
                        scientific: !0
                    }
                },
                SHORT: {
                    "": {
                        name: "",
                        value: 1,
                        scientific: !0
                    },
                    da: {
                        name: "da",
                        value: 10,
                        scientific: !1
                    },
                    h: {
                        name: "h",
                        value: 100,
                        scientific: !1
                    },
                    k: {
                        name: "k",
                        value: 1e3,
                        scientific: !0
                    },
                    M: {
                        name: "M",
                        value: 1e6,
                        scientific: !0
                    },
                    G: {
                        name: "G",
                        value: 1e9,
                        scientific: !0
                    },
                    T: {
                        name: "T",
                        value: 1e12,
                        scientific: !0
                    },
                    P: {
                        name: "P",
                        value: 1e15,
                        scientific: !0
                    },
                    E: {
                        name: "E",
                        value: 1e18,
                        scientific: !0
                    },
                    Z: {
                        name: "Z",
                        value: 1e21,
                        scientific: !0
                    },
                    Y: {
                        name: "Y",
                        value: 1e24,
                        scientific: !0
                    },
                    d: {
                        name: "d",
                        value: .1,
                        scientific: !1
                    },
                    c: {
                        name: "c",
                        value: .01,
                        scientific: !1
                    },
                    m: {
                        name: "m",
                        value: .001,
                        scientific: !0
                    },
                    u: {
                        name: "u",
                        value: 1e-6,
                        scientific: !0
                    },
                    n: {
                        name: "n",
                        value: 1e-9,
                        scientific: !0
                    },
                    p: {
                        name: "p",
                        value: 1e-12,
                        scientific: !0
                    },
                    f: {
                        name: "f",
                        value: 1e-15,
                        scientific: !0
                    },
                    a: {
                        name: "a",
                        value: 1e-18,
                        scientific: !0
                    },
                    z: {
                        name: "z",
                        value: 1e-21,
                        scientific: !0
                    },
                    y: {
                        name: "y",
                        value: 1e-24,
                        scientific: !0
                    }
                },
                LONG: {
                    "": {
                        name: "",
                        value: 1,
                        scientific: !0
                    },
                    deca: {
                        name: "deca",
                        value: 10,
                        scientific: !1
                    },
                    hecto: {
                        name: "hecto",
                        value: 100,
                        scientific: !1
                    },
                    kilo: {
                        name: "kilo",
                        value: 1e3,
                        scientific: !0
                    },
                    mega: {
                        name: "mega",
                        value: 1e6,
                        scientific: !0
                    },
                    giga: {
                        name: "giga",
                        value: 1e9,
                        scientific: !0
                    },
                    tera: {
                        name: "tera",
                        value: 1e12,
                        scientific: !0
                    },
                    peta: {
                        name: "peta",
                        value: 1e15,
                        scientific: !0
                    },
                    exa: {
                        name: "exa",
                        value: 1e18,
                        scientific: !0
                    },
                    zetta: {
                        name: "zetta",
                        value: 1e21,
                        scientific: !0
                    },
                    yotta: {
                        name: "yotta",
                        value: 1e24,
                        scientific: !0
                    },
                    deci: {
                        name: "deci",
                        value: .1,
                        scientific: !1
                    },
                    centi: {
                        name: "centi",
                        value: .01,
                        scientific: !1
                    },
                    milli: {
                        name: "milli",
                        value: .001,
                        scientific: !0
                    },
                    micro: {
                        name: "micro",
                        value: 1e-6,
                        scientific: !0
                    },
                    nano: {
                        name: "nano",
                        value: 1e-9,
                        scientific: !0
                    },
                    pico: {
                        name: "pico",
                        value: 1e-12,
                        scientific: !0
                    },
                    femto: {
                        name: "femto",
                        value: 1e-15,
                        scientific: !0
                    },
                    atto: {
                        name: "atto",
                        value: 1e-18,
                        scientific: !0
                    },
                    zepto: {
                        name: "zepto",
                        value: 1e-21,
                        scientific: !0
                    },
                    yocto: {
                        name: "yocto",
                        value: 1e-24,
                        scientific: !0
                    }
                },
                SQUARED: {
                    "": {
                        name: "",
                        value: 1,
                        scientific: !0
                    },
                    da: {
                        name: "da",
                        value: 100,
                        scientific: !1
                    },
                    h: {
                        name: "h",
                        value: 1e4,
                        scientific: !1
                    },
                    k: {
                        name: "k",
                        value: 1e6,
                        scientific: !0
                    },
                    M: {
                        name: "M",
                        value: 1e12,
                        scientific: !0
                    },
                    G: {
                        name: "G",
                        value: 1e18,
                        scientific: !0
                    },
                    T: {
                        name: "T",
                        value: 1e24,
                        scientific: !0
                    },
                    P: {
                        name: "P",
                        value: 1e30,
                        scientific: !0
                    },
                    E: {
                        name: "E",
                        value: 1e36,
                        scientific: !0
                    },
                    Z: {
                        name: "Z",
                        value: 1e42,
                        scientific: !0
                    },
                    Y: {
                        name: "Y",
                        value: 1e48,
                        scientific: !0
                    },
                    d: {
                        name: "d",
                        value: .01,
                        scientific: !1
                    },
                    c: {
                        name: "c",
                        value: 1e-4,
                        scientific: !1
                    },
                    m: {
                        name: "m",
                        value: 1e-6,
                        scientific: !0
                    },
                    u: {
                        name: "u",
                        value: 1e-12,
                        scientific: !0
                    },
                    n: {
                        name: "n",
                        value: 1e-18,
                        scientific: !0
                    },
                    p: {
                        name: "p",
                        value: 1e-24,
                        scientific: !0
                    },
                    f: {
                        name: "f",
                        value: 1e-30,
                        scientific: !0
                    },
                    a: {
                        name: "a",
                        value: 1e-36,
                        scientific: !0
                    },
                    z: {
                        name: "z",
                        value: 1e-42,
                        scientific: !0
                    },
                    y: {
                        name: "y",
                        value: 1e-42,
                        scientific: !0
                    }
                },
                CUBIC: {
                    "": {
                        name: "",
                        value: 1,
                        scientific: !0
                    },
                    da: {
                        name: "da",
                        value: 1e3,
                        scientific: !1
                    },
                    h: {
                        name: "h",
                        value: 1e6,
                        scientific: !1
                    },
                    k: {
                        name: "k",
                        value: 1e9,
                        scientific: !0
                    },
                    M: {
                        name: "M",
                        value: 1e18,
                        scientific: !0
                    },
                    G: {
                        name: "G",
                        value: 1e27,
                        scientific: !0
                    },
                    T: {
                        name: "T",
                        value: 1e36,
                        scientific: !0
                    },
                    P: {
                        name: "P",
                        value: 1e45,
                        scientific: !0
                    },
                    E: {
                        name: "E",
                        value: 1e54,
                        scientific: !0
                    },
                    Z: {
                        name: "Z",
                        value: 1e63,
                        scientific: !0
                    },
                    Y: {
                        name: "Y",
                        value: 1e72,
                        scientific: !0
                    },
                    d: {
                        name: "d",
                        value: .001,
                        scientific: !1
                    },
                    c: {
                        name: "c",
                        value: 1e-6,
                        scientific: !1
                    },
                    m: {
                        name: "m",
                        value: 1e-9,
                        scientific: !0
                    },
                    u: {
                        name: "u",
                        value: 1e-18,
                        scientific: !0
                    },
                    n: {
                        name: "n",
                        value: 1e-27,
                        scientific: !0
                    },
                    p: {
                        name: "p",
                        value: 1e-36,
                        scientific: !0
                    },
                    f: {
                        name: "f",
                        value: 1e-45,
                        scientific: !0
                    },
                    a: {
                        name: "a",
                        value: 1e-54,
                        scientific: !0
                    },
                    z: {
                        name: "z",
                        value: 1e-63,
                        scientific: !0
                    },
                    y: {
                        name: "y",
                        value: 1e-72,
                        scientific: !0
                    }
                },
                BINARY_SHORT: {
                    "": {
                        name: "",
                        value: 1,
                        scientific: !0
                    },
                    k: {
                        name: "k",
                        value: 1e3,
                        scientific: !0
                    },
                    M: {
                        name: "M",
                        value: 1e6,
                        scientific: !0
                    },
                    G: {
                        name: "G",
                        value: 1e9,
                        scientific: !0
                    },
                    T: {
                        name: "T",
                        value: 1e12,
                        scientific: !0
                    },
                    P: {
                        name: "P",
                        value: 1e15,
                        scientific: !0
                    },
                    E: {
                        name: "E",
                        value: 1e18,
                        scientific: !0
                    },
                    Z: {
                        name: "Z",
                        value: 1e21,
                        scientific: !0
                    },
                    Y: {
                        name: "Y",
                        value: 1e24,
                        scientific: !0
                    },
                    Ki: {
                        name: "Ki",
                        value: 1024,
                        scientific: !0
                    },
                    Mi: {
                        name: "Mi",
                        value: Math.pow(1024, 2),
                        scientific: !0
                    },
                    Gi: {
                        name: "Gi",
                        value: Math.pow(1024, 3),
                        scientific: !0
                    },
                    Ti: {
                        name: "Ti",
                        value: Math.pow(1024, 4),
                        scientific: !0
                    },
                    Pi: {
                        name: "Pi",
                        value: Math.pow(1024, 5),
                        scientific: !0
                    },
                    Ei: {
                        name: "Ei",
                        value: Math.pow(1024, 6),
                        scientific: !0
                    },
                    Zi: {
                        name: "Zi",
                        value: Math.pow(1024, 7),
                        scientific: !0
                    },
                    Yi: {
                        name: "Yi",
                        value: Math.pow(1024, 8),
                        scientific: !0
                    }
                },
                BINARY_LONG: {
                    "": {
                        name: "",
                        value: 1,
                        scientific: !0
                    },
                    kilo: {
                        name: "kilo",
                        value: 1e3,
                        scientific: !0
                    },
                    mega: {
                        name: "mega",
                        value: 1e6,
                        scientific: !0
                    },
                    giga: {
                        name: "giga",
                        value: 1e9,
                        scientific: !0
                    },
                    tera: {
                        name: "tera",
                        value: 1e12,
                        scientific: !0
                    },
                    peta: {
                        name: "peta",
                        value: 1e15,
                        scientific: !0
                    },
                    exa: {
                        name: "exa",
                        value: 1e18,
                        scientific: !0
                    },
                    zetta: {
                        name: "zetta",
                        value: 1e21,
                        scientific: !0
                    },
                    yotta: {
                        name: "yotta",
                        value: 1e24,
                        scientific: !0
                    },
                    kibi: {
                        name: "kibi",
                        value: 1024,
                        scientific: !0
                    },
                    mebi: {
                        name: "mebi",
                        value: Math.pow(1024, 2),
                        scientific: !0
                    },
                    gibi: {
                        name: "gibi",
                        value: Math.pow(1024, 3),
                        scientific: !0
                    },
                    tebi: {
                        name: "tebi",
                        value: Math.pow(1024, 4),
                        scientific: !0
                    },
                    pebi: {
                        name: "pebi",
                        value: Math.pow(1024, 5),
                        scientific: !0
                    },
                    exi: {
                        name: "exi",
                        value: Math.pow(1024, 6),
                        scientific: !0
                    },
                    zebi: {
                        name: "zebi",
                        value: Math.pow(1024, 7),
                        scientific: !0
                    },
                    yobi: {
                        name: "yobi",
                        value: Math.pow(1024, 8),
                        scientific: !0
                    }
                }
            },
            b = {
                name: "",
                value: 1,
                scientific: !0
            },
            E = {
                NONE: {},
                LENGTH: {},
                MASS: {},
                TIME: {},
                CURRENT: {},
                TEMPERATURE: {},
                LUMINOUS_INTENSITY: {},
                AMOUNT_OF_SUBSTANCE: {},
                FORCE: {},
                SURFACE: {},
                VOLUME: {},
                ANGLE: {},
                BIT: {}
            },
            N = {},
            M = {
                name: "",
                base: N,
                value: 1,
                offset: 0
            },
            _ = {
                meter: {
                    name: "meter",
                    base: E.LENGTH,
                    prefixes: w.LONG,
                    value: 1,
                    offset: 0
                },
                inch: {
                    name: "inch",
                    base: E.LENGTH,
                    prefixes: w.NONE,
                    value: .0254,
                    offset: 0
                },
                foot: {
                    name: "foot",
                    base: E.LENGTH,
                    prefixes: w.NONE,
                    value: .3048,
                    offset: 0
                },
                yard: {
                    name: "yard",
                    base: E.LENGTH,
                    prefixes: w.NONE,
                    value: .9144,
                    offset: 0
                },
                mile: {
                    name: "mile",
                    base: E.LENGTH,
                    prefixes: w.NONE,
                    value: 1609.344,
                    offset: 0
                },
                link: {
                    name: "link",
                    base: E.LENGTH,
                    prefixes: w.NONE,
                    value: .201168,
                    offset: 0
                },
                rod: {
                    name: "rod",
                    base: E.LENGTH,
                    prefixes: w.NONE,
                    value: 5.02921,
                    offset: 0
                },
                chain: {
                    name: "chain",
                    base: E.LENGTH,
                    prefixes: w.NONE,
                    value: 20.1168,
                    offset: 0
                },
                angstrom: {
                    name: "angstrom",
                    base: E.LENGTH,
                    prefixes: w.NONE,
                    value: 1e-10,
                    offset: 0
                },
                m: {
                    name: "m",
                    base: E.LENGTH,
                    prefixes: w.SHORT,
                    value: 1,
                    offset: 0
                },
                "in": {
                    name: "in",
                    base: E.LENGTH,
                    prefixes: w.NONE,
                    value: .0254,
                    offset: 0
                },
                ft: {
                    name: "ft",
                    base: E.LENGTH,
                    prefixes: w.NONE,
                    value: .3048,
                    offset: 0
                },
                yd: {
                    name: "yd",
                    base: E.LENGTH,
                    prefixes: w.NONE,
                    value: .9144,
                    offset: 0
                },
                mi: {
                    name: "mi",
                    base: E.LENGTH,
                    prefixes: w.NONE,
                    value: 1609.344,
                    offset: 0
                },
                li: {
                    name: "li",
                    base: E.LENGTH,
                    prefixes: w.NONE,
                    value: .201168,
                    offset: 0
                },
                rd: {
                    name: "rd",
                    base: E.LENGTH,
                    prefixes: w.NONE,
                    value: 5.02921,
                    offset: 0
                },
                ch: {
                    name: "ch",
                    base: E.LENGTH,
                    prefixes: w.NONE,
                    value: 20.1168,
                    offset: 0
                },
                mil: {
                    name: "mil",
                    base: E.LENGTH,
                    prefixes: w.NONE,
                    value: 254e-7,
                    offset: 0
                },
                m2: {
                    name: "m2",
                    base: E.SURFACE,
                    prefixes: w.SQUARED,
                    value: 1,
                    offset: 0
                },
                sqin: {
                    name: "sqin",
                    base: E.SURFACE,
                    prefixes: w.NONE,
                    value: 64516e-8,
                    offset: 0
                },
                sqft: {
                    name: "sqft",
                    base: E.SURFACE,
                    prefixes: w.NONE,
                    value: .09290304,
                    offset: 0
                },
                sqyd: {
                    name: "sqyd",
                    base: E.SURFACE,
                    prefixes: w.NONE,
                    value: .83612736,
                    offset: 0
                },
                sqmi: {
                    name: "sqmi",
                    base: E.SURFACE,
                    prefixes: w.NONE,
                    value: 2589988.110336,
                    offset: 0
                },
                sqrd: {
                    name: "sqrd",
                    base: E.SURFACE,
                    prefixes: w.NONE,
                    value: 25.29295,
                    offset: 0
                },
                sqch: {
                    name: "sqch",
                    base: E.SURFACE,
                    prefixes: w.NONE,
                    value: 404.6873,
                    offset: 0
                },
                sqmil: {
                    name: "sqmil",
                    base: E.SURFACE,
                    prefixes: w.NONE,
                    value: 6.4516e-10,
                    offset: 0
                },
                m3: {
                    name: "m3",
                    base: E.VOLUME,
                    prefixes: w.CUBIC,
                    value: 1,
                    offset: 0
                },
                L: {
                    name: "L",
                    base: E.VOLUME,
                    prefixes: w.SHORT,
                    value: .001,
                    offset: 0
                },
                l: {
                    name: "l",
                    base: E.VOLUME,
                    prefixes: w.SHORT,
                    value: .001,
                    offset: 0
                },
                litre: {
                    name: "litre",
                    base: E.VOLUME,
                    prefixes: w.LONG,
                    value: .001,
                    offset: 0
                },
                cuin: {
                    name: "cuin",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: 16387064e-12,
                    offset: 0
                },
                cuft: {
                    name: "cuft",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: .028316846592,
                    offset: 0
                },
                cuyd: {
                    name: "cuyd",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: .764554857984,
                    offset: 0
                },
                teaspoon: {
                    name: "teaspoon",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: 5e-6,
                    offset: 0
                },
                tablespoon: {
                    name: "tablespoon",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: 15e-6,
                    offset: 0
                },
                drop: {
                    name: "drop",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: 5e-8,
                    offset: 0
                },
                gtt: {
                    name: "gtt",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: 5e-8,
                    offset: 0
                },
                minim: {
                    name: "minim",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: 6.161152e-8,
                    offset: 0
                },
                fluiddram: {
                    name: "fluiddram",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: 36966911e-13,
                    offset: 0
                },
                fluidounce: {
                    name: "fluidounce",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: 2957353e-11,
                    offset: 0
                },
                gill: {
                    name: "gill",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: .0001182941,
                    offset: 0
                },
                cc: {
                    name: "cc",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: 1e-6,
                    offset: 0
                },
                cup: {
                    name: "cup",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: .0002365882,
                    offset: 0
                },
                pint: {
                    name: "pint",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: .0004731765,
                    offset: 0
                },
                quart: {
                    name: "quart",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: .0009463529,
                    offset: 0
                },
                gallon: {
                    name: "gallon",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: .003785412,
                    offset: 0
                },
                beerbarrel: {
                    name: "beerbarrel",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: .1173478,
                    offset: 0
                },
                oilbarrel: {
                    name: "oilbarrel",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: .1589873,
                    offset: 0
                },
                hogshead: {
                    name: "hogshead",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: .238481,
                    offset: 0
                },
                fldr: {
                    name: "fldr",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: 36966911e-13,
                    offset: 0
                },
                floz: {
                    name: "floz",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: 2957353e-11,
                    offset: 0
                },
                gi: {
                    name: "gi",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: .0001182941,
                    offset: 0
                },
                cp: {
                    name: "cp",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: .0002365882,
                    offset: 0
                },
                pt: {
                    name: "pt",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: .0004731765,
                    offset: 0
                },
                qt: {
                    name: "qt",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: .0009463529,
                    offset: 0
                },
                gal: {
                    name: "gal",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: .003785412,
                    offset: 0
                },
                bbl: {
                    name: "bbl",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: .1173478,
                    offset: 0
                },
                obl: {
                    name: "obl",
                    base: E.VOLUME,
                    prefixes: w.NONE,
                    value: .1589873,
                    offset: 0
                },
                g: {
                    name: "g",
                    base: E.MASS,
                    prefixes: w.SHORT,
                    value: .001,
                    offset: 0
                },
                gram: {
                    name: "gram",
                    base: E.MASS,
                    prefixes: w.LONG,
                    value: .001,
                    offset: 0
                },
                ton: {
                    name: "ton",
                    base: E.MASS,
                    prefixes: w.SHORT,
                    value: 907.18474,
                    offset: 0
                },
                tonne: {
                    name: "tonne",
                    base: E.MASS,
                    prefixes: w.SHORT,
                    value: 1e3,
                    offset: 0
                },
                grain: {
                    name: "grain",
                    base: E.MASS,
                    prefixes: w.NONE,
                    value: 6479891e-11,
                    offset: 0
                },
                dram: {
                    name: "dram",
                    base: E.MASS,
                    prefixes: w.NONE,
                    value: .0017718451953125,
                    offset: 0
                },
                ounce: {
                    name: "ounce",
                    base: E.MASS,
                    prefixes: w.NONE,
                    value: .028349523125,
                    offset: 0
                },
                poundmass: {
                    name: "poundmass",
                    base: E.MASS,
                    prefixes: w.NONE,
                    value: .45359237,
                    offset: 0
                },
                hundredweight: {
                    name: "hundredweight",
                    base: E.MASS,
                    prefixes: w.NONE,
                    value: 45.359237,
                    offset: 0
                },
                stick: {
                    name: "stick",
                    base: E.MASS,
                    prefixes: w.NONE,
                    value: .115,
                    offset: 0
                },
                stone: {
                    name: "stone",
                    base: E.MASS,
                    prefixes: w.NONE,
                    value: 6350,
                    offset: 0
                },
                gr: {
                    name: "gr",
                    base: E.MASS,
                    prefixes: w.NONE,
                    value: 6479891e-11,
                    offset: 0
                },
                dr: {
                    name: "dr",
                    base: E.MASS,
                    prefixes: w.NONE,
                    value: .0017718451953125,
                    offset: 0
                },
                oz: {
                    name: "oz",
                    base: E.MASS,
                    prefixes: w.NONE,
                    value: .028349523125,
                    offset: 0
                },
                lbm: {
                    name: "lbm",
                    base: E.MASS,
                    prefixes: w.NONE,
                    value: .45359237,
                    offset: 0
                },
                cwt: {
                    name: "cwt",
                    base: E.MASS,
                    prefixes: w.NONE,
                    value: 45.359237,
                    offset: 0
                },
                s: {
                    name: "s",
                    base: E.TIME,
                    prefixes: w.SHORT,
                    value: 1,
                    offset: 0
                },
                min: {
                    name: "min",
                    base: E.TIME,
                    prefixes: w.NONE,
                    value: 60,
                    offset: 0
                },
                h: {
                    name: "h",
                    base: E.TIME,
                    prefixes: w.NONE,
                    value: 3600,
                    offset: 0
                },
                second: {
                    name: "second",
                    base: E.TIME,
                    prefixes: w.LONG,
                    value: 1,
                    offset: 0
                },
                sec: {
                    name: "sec",
                    base: E.TIME,
                    prefixes: w.LONG,
                    value: 1,
                    offset: 0
                },
                minute: {
                    name: "minute",
                    base: E.TIME,
                    prefixes: w.NONE,
                    value: 60,
                    offset: 0
                },
                hour: {
                    name: "hour",
                    base: E.TIME,
                    prefixes: w.NONE,
                    value: 3600,
                    offset: 0
                },
                day: {
                    name: "day",
                    base: E.TIME,
                    prefixes: w.NONE,
                    value: 86400,
                    offset: 0
                },
                rad: {
                    name: "rad",
                    base: E.ANGLE,
                    prefixes: w.NONE,
                    value: 1,
                    offset: 0
                },
                deg: {
                    name: "deg",
                    base: E.ANGLE,
                    prefixes: w.NONE,
                    value: .017453292519943295,
                    offset: 0
                },
                grad: {
                    name: "grad",
                    base: E.ANGLE,
                    prefixes: w.NONE,
                    value: .015707963267948967,
                    offset: 0
                },
                cycle: {
                    name: "cycle",
                    base: E.ANGLE,
                    prefixes: w.NONE,
                    value: 6.283185307179586,
                    offset: 0
                },
                A: {
                    name: "A",
                    base: E.CURRENT,
                    prefixes: w.SHORT,
                    value: 1,
                    offset: 0
                },
                ampere: {
                    name: "ampere",
                    base: E.CURRENT,
                    prefixes: w.LONG,
                    value: 1,
                    offset: 0
                },
                K: {
                    name: "K",
                    base: E.TEMPERATURE,
                    prefixes: w.NONE,
                    value: 1,
                    offset: 0
                },
                degC: {
                    name: "degC",
                    base: E.TEMPERATURE,
                    prefixes: w.NONE,
                    value: 1,
                    offset: 273.15
                },
                degF: {
                    name: "degF",
                    base: E.TEMPERATURE,
                    prefixes: w.NONE,
                    value: 1 / 1.8,
                    offset: 459.67
                },
                degR: {
                    name: "degR",
                    base: E.TEMPERATURE,
                    prefixes: w.NONE,
                    value: 1 / 1.8,
                    offset: 0
                },
                kelvin: {
                    name: "kelvin",
                    base: E.TEMPERATURE,
                    prefixes: w.NONE,
                    value: 1,
                    offset: 0
                },
                celsius: {
                    name: "celsius",
                    base: E.TEMPERATURE,
                    prefixes: w.NONE,
                    value: 1,
                    offset: 273.15
                },
                fahrenheit: {
                    name: "fahrenheit",
                    base: E.TEMPERATURE,
                    prefixes: w.NONE,
                    value: 1 / 1.8,
                    offset: 459.67
                },
                rankine: {
                    name: "rankine",
                    base: E.TEMPERATURE,
                    prefixes: w.NONE,
                    value: 1 / 1.8,
                    offset: 0
                },
                mol: {
                    name: "mol",
                    base: E.AMOUNT_OF_SUBSTANCE,
                    prefixes: w.NONE,
                    value: 1,
                    offset: 0
                },
                mole: {
                    name: "mole",
                    base: E.AMOUNT_OF_SUBSTANCE,
                    prefixes: w.NONE,
                    value: 1,
                    offset: 0
                },
                cd: {
                    name: "cd",
                    base: E.LUMINOUS_INTENSITY,
                    prefixes: w.NONE,
                    value: 1,
                    offset: 0
                },
                candela: {
                    name: "candela",
                    base: E.LUMINOUS_INTENSITY,
                    prefixes: w.NONE,
                    value: 1,
                    offset: 0
                },
                N: {
                    name: "N",
                    base: E.FORCE,
                    prefixes: w.SHORT,
                    value: 1,
                    offset: 0
                },
                newton: {
                    name: "newton",
                    base: E.FORCE,
                    prefixes: w.LONG,
                    value: 1,
                    offset: 0
                },
                lbf: {
                    name: "lbf",
                    base: E.FORCE,
                    prefixes: w.NONE,
                    value: 4.4482216152605,
                    offset: 0
                },
                poundforce: {
                    name: "poundforce",
                    base: E.FORCE,
                    prefixes: w.NONE,
                    value: 4.4482216152605,
                    offset: 0
                },
                b: {
                    name: "b",
                    base: E.BIT,
                    prefixes: w.BINARY_SHORT,
                    value: 1,
                    offset: 0
                },
                bits: {
                    name: "bits",
                    base: E.BIT,
                    prefixes: w.BINARY_LONG,
                    value: 1,
                    offset: 0
                },
                B: {
                    name: "B",
                    base: E.BIT,
                    prefixes: w.BINARY_SHORT,
                    value: 8,
                    offset: 0
                },
                bytes: {
                    name: "bytes",
                    base: E.BIT,
                    prefixes: w.BINARY_LONG,
                    value: 8,
                    offset: 0
                }
            },
            A = {
                meters: "meter",
                inches: "inch",
                feet: "foot",
                yards: "yard",
                miles: "mile",
                links: "link",
                rods: "rod",
                chains: "chain",
                angstroms: "angstrom",
                litres: "litre",
                teaspoons: "teaspoon",
                tablespoons: "tablespoon",
                minims: "minim",
                fluiddrams: "fluiddram",
                fluidounces: "fluidounce",
                gills: "gill",
                cups: "cup",
                pints: "pint",
                quarts: "quart",
                gallons: "gallon",
                beerbarrels: "beerbarrel",
                oilbarrels: "oilbarrel",
                hogsheads: "hogshead",
                gtts: "gtt",
                grams: "gram",
                tons: "ton",
                tonnes: "tonne",
                grains: "grain",
                drams: "dram",
                ounces: "ounce",
                poundmasses: "poundmass",
                hundredweights: "hundredweight",
                sticks: "stick",
                seconds: "second",
                minutes: "minute",
                hours: "hour",
                days: "day",
                radians: "rad",
                degrees: "deg",
                gradients: "grad",
                cycles: "cycle",
                amperes: "ampere",
                moles: "mole"
            };
        for (var T in A)
            if (A.hasOwnProperty(T)) {
                var O = _[A[T]],
                    S = Object.create(O);
                S.name = T, _[T] = S
            } _.lt = _.l, _.liter = _.litre, _.liters = _.litres, _.lb = _.lbm, _.lbs = _.lbm, n.PREFIXES = w, n.BASE_UNITS = E, n.UNITS = _, e.exports = n
    }, function (e, r, t) {
        "use strict";

        function n(e) {
            if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            if (!e) throw new Error('Argument "doc" missing');
            this.doc = e
        }
        var i = t(175),
            o = i.object,
            a = i.string;
        n.isHelp = function (e) {
            return e instanceof n
        }, n.prototype.toText = function (e) {
            var r = this.doc || {},
                t = "\n";
            if (r.name && (t += "Name: " + r.name + "\n\n"), r.category && (t += "Category: " + r.category + "\n\n"), r.description && (t += "Description:\n    " + r.description + "\n\n"), r.syntax && (t += "Syntax:\n    " + r.syntax.join("\n    ") + "\n\n"), r.examples) {
                var i = e && e.parser();
                t += "Examples:\n";
                for (var o = 0; o < r.examples.length; o++) {
                    var s = r.examples[o];
                    if (t += "    " + s + "\n", i) {
                        var u;
                        try {
                            u = i.eval(s)
                        } catch (c) {
                            u = c
                        }
                        void 0 === u || u instanceof n || (t += "        " + a.format(u, {
                            precision: 14
                        }) + "\n")
                    }
                }
                t += "\n"
            }
            return r.seealso && (t += "See also: " + r.seealso.join(", ") + "\n"), t
        }, n.prototype.toString = function () {
            return this.toText()
        }, n.prototype.toJSON = function () {
            var e = o.clone(this.doc);
            return e.mathjs = "Help", e
        }, n.fromJSON = function (e) {
            var r = {};
            for (var t in e) "mathjs" !== t && (r[t] = e[t]);
            return new n(r)
        }, n.prototype.valueOf = n.prototype.toString, e.exports = n
    }, function (e, r, t) {
        "use strict";

        function n(e) {
            if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            this.entries = e || []
        }
        n.prototype.valueOf = function () {
            return this.entries
        }, n.prototype.toString = function () {
            return "[" + this.entries.join(", ") + "]"
        }, n.prototype.toJSON = function () {
            return {
                mathjs: "ResultSet",
                entries: this.entries
            }
        }, n.fromJSON = function (e) {
            return new n(e.entries)
        }, e.exports = n
    }, function (e, r, t) {
        "use strict";
        var n = t(175),
            i = t(173),
            o = t(172),
            a = n.array,
            s = n.array.isArray;
        e.exports = function (e) {
            function r(e, n, i) {
                var o, a, u, c;
                if (0 >= n) {
                    if (s(e[0])) {
                        for (c = t(e), a = [], o = 0; o < c.length; o++) a[o] = r(c[o], n - 1, i);
                        return a
                    }
                    for (u = e[0], o = 1; o < e.length; o++) u = i(u, e[o]);
                    return u
                }
                for (a = [], o = 0; o < e.length; o++) a[o] = r(e[o], n - 1, i);
                return a
            }

            function t(e) {
                var r, t, n = e.length,
                    i = e[0].length,
                    o = [];
                for (t = 0; i > t; t++) {
                    var a = [];
                    for (r = 0; n > r; r++) a.push(e[r][t]);
                    o.push(a)
                }
                return o
            }
            var u = e.type.Matrix,
                c = {};
            return c.argsToArray = function (e) {
                if (0 === e.length) return [];
                if (1 == e.length) {
                    var r = e[0];
                    return r instanceof u && (r = r.valueOf()), s(r) || (r = [r]), r
                }
                return n.array.argsToArray(e)
            }, c.isCollection = function (e) {
                return s(e) || e instanceof u
            }, c.deepMap = function f(e, r, t) {
                return e && "function" == typeof e.map ? e.map(function (e) {
                    return f(e, r, t)
                }) : r(e)
            }, c.deepMap2 = function l(r, t, n) {
                var i, a, c;
                if (s(r))
                    if (s(t)) {
                        if (r.length != t.length) throw new o(r.length, t.length);
                        for (i = [], a = r.length, c = 0; a > c; c++) i[c] = l(r[c], t[c], n)
                    } else {
                        if (t instanceof u) return i = l(r, t.valueOf(), n), e.matrix(i);
                        for (i = [], a = r.length, c = 0; a > c; c++) i[c] = l(r[c], t, n)
                    }
                else {
                    if (r instanceof u) return t instanceof u ? (i = l(r.valueOf(), t.valueOf(), n), e.matrix(i)) : (i = l(r.valueOf(), t, n), e.matrix(i));
                    if (s(t))
                        for (i = [], a = t.length, c = 0; a > c; c++) i[c] = l(r, t[c], n);
                    else {
                        if (t instanceof u) return i = l(r, t.valueOf(), n), e.matrix(i);
                        i = n(r, t)
                    }
                }
                return i
            }, c.reduce = function (t, n, o) {
                var c = s(t) ? a.size(t) : t.size();
                if (0 > n) throw new i(n);
                if (n >= c.length) throw new i(n, c.length);
                return t instanceof u ? e.matrix(r(t.valueOf(), n, o)) : r(t, n, o)
            }, c.deepForEach = function p(e, r) {
                e instanceof u && (e = e.valueOf());
                for (var t = 0, n = e.length; n > t; t++) {
                    var i = e[t];
                    s(i) ? p(i, r) : r(i)
                }
            }, c
        }
    }, function (e, r, t) {
        "use strict";
        var n = t(175),
            i = t(172),
            o = n.array,
            a = n.object,
            s = n.string,
            u = n.number,
            c = Array.isArray,
            f = n.number.isNumber,
            l = n.number.isInteger,
            p = o.validateIndex;
        e.exports = function (e) {
            function r(e) {
                if (!(this instanceof r)) throw new SyntaxError("Constructor must be called with the new operator");
                if (e instanceof h) "CcsMatrix" === e.type ? (this._values = a.clone(e._values), this._index = a.clone(e._index), this._ptr = a.clone(e._ptr), this._size = a.clone(e._size)) : g(this, e.valueOf());
                else if (e && c(e.values) && c(e.index) && c(e.ptr) && c(e.size)) this._values = e.values, this._index = e.index, this._ptr = e.ptr, this._size = e.size;
                else if (c(e)) g(this, e);
                else {
                    if (e) throw new TypeError("Unsupported type of data (" + n.types.type(e) + ")");
                    this._values = [], this._index = [], this._ptr = [0], this._size = [0]
                }
            }
            var t = e.type.Index,
                m = e.type.BigNumber,
                h = e.type.Matrix,
                g = function (r, t) {
                    r._values = [], r._index = [], r._ptr = [];
                    var n = t.length,
                        i = 0;
                    if (n > 0) {
                        var o = 0;
                        do {
                            r._ptr.push(r._values.length);
                            for (var a = 0; n > a; a++) {
                                var s = t[a];
                                if (c(s)) {
                                    if (0 === o && i < s.length && (i = s.length), o < s.length) {
                                        var u = s[o];
                                        e.equal(u, 0) || (r._values.push(u), r._index.push(a))
                                    }
                                } else 0 === o && 1 > i && (i = 1), e.equal(s, 0) || (r._values.push(s), r._index.push(a))
                            }
                            o++
                        } while (i > o)
                    }
                    r._ptr.push(r._values.length), r._size = [n, i]
                };
            r.prototype = new e.type.Matrix, r.prototype.type = "CcsMatrix", r.prototype.storage = function () {
                return "ccs"
            }, r.prototype.subset = function (e, r, t) {
                switch (arguments.length) {
                    case 1:
                        return d(this, e);
                    case 2:
                    case 3:
                        return v(this, e, r, t);
                    default:
                        throw new SyntaxError("Wrong number of arguments")
                }
            };
            var d = function (e, r) {
                    if (!(r instanceof t)) throw new TypeError("Invalid index");
                    var n = r.isScalar();
                    if (n) return e.get(r.min());
                    var o = r.size();
                    if (o.length != e._size.length) throw new i(o.length, e._size.length);
                    for (var a = r.min(), s = r.max(), u = 0, c = e._size.length; c > u; u++) p(a[u], e._size[u]), p(s[u], e._size[u]);
                    var f = function (e) {
                        return e
                    };
                    return E(e, a[0], s[0], a[1], s[1], f, !1)
                },
                v = function (e, r, n, s) {
                    if (!(r instanceof t)) throw new TypeError("Invalid index");
                    var u, c = r.size(),
                        f = r.isScalar();
                    if (n instanceof h ? (u = n.size(), n = n.toArray()) : u = o.size(n), f) {
                        if (0 !== u.length) throw new TypeError("Scalar expected");
                        e.set(r.min(), n, s)
                    } else {
                        if (1 !== c.length && 2 !== c.length) throw new i(c.length, e._size.length, "<");
                        if (u.length < c.length) {
                            for (var l = 0, p = 0; 1 === c[l] && 1 === u[l];) l++;
                            for (; 1 === c[l];) p++, l++;
                            n = o.unsqueeze(n, c.length, p, u)
                        }
                        if (!a.deepEqual(c, u)) throw new i(c, u, ">");
                        for (var m = r.min()[0], g = r.min()[1], d = u[0], v = u[1], y = 0; d > y; y++)
                            for (var x = 0; v > x; x++) {
                                var w = n[y][x];
                                e.set([y + m, x + g], w, s)
                            }
                    }
                    return e
                };
            r.prototype.get = function (e) {
                if (!c(e)) throw new TypeError("Array expected");
                if (e.length != this._size.length) throw new i(e.length, this._size.length);
                var r = e[0],
                    t = e[1];
                p(r, this._size[0]), p(t, this._size[1]);
                var n = y(r, this._ptr[t], this._ptr[t + 1], this._index);
                return n < this._ptr[t + 1] && this._index[n] === r ? a.clone(this._values[n]) : 0
            }, r.prototype.set = function (r, t, n) {
                if (!c(r)) throw new TypeError("Array expected");
                if (r.length != this._size.length) throw new i(r.length, this._size.length);
                var o = r[0],
                    a = r[1],
                    s = this._size[0],
                    u = this._size[1];
                (o > s - 1 || a > u - 1) && (b(this, Math.max(o + 1, s), Math.max(a + 1, u), n), s = this._size[0], u = this._size[1]), p(o, s), p(a, u);
                var f = y(o, this._ptr[a], this._ptr[a + 1], this._index);
                return f < this._ptr[a + 1] && this._index[f] === o ? e.equal(t, 0) ? x(f, a, this._values, this._index, this._ptr) : this._values[f] = t : w(f, o, a, t, this._values, this._index, this._ptr), this
            };
            var y = function (e, r, t, n) {
                    if (t - r === 0 || e > n[t - 1]) return t;
                    for (; t > r;) {
                        var i = ~~((r + t) / 2),
                            o = n[i];
                        if (o > e) t = i;
                        else {
                            if (!(e > o)) return i;
                            r = i + 1
                        }
                    }
                    return r
                },
                x = function (e, r, t, n, i) {
                    t.splice(e, 1), n.splice(e, 1);
                    for (var o = r + 1; o < i.length; o++) i[o]--
                },
                w = function (e, r, t, n, i, o, a) {
                    i.splice(e, 0, n), o.splice(e, 0, r);
                    for (var s = t + 1; s < a.length; s++) a[s]++
                };
            r.prototype.resize = function (e, r, t) {
                if (!c(e)) throw new TypeError("Array expected");
                if (2 !== e.length) throw new Error("Only two dimensions matrix are supported");
                e.forEach(function (r) {
                    if (!u.isNumber(r) || !u.isInteger(r) || 0 > r) throw new TypeError("Invalid size, must contain positive integers (size: " + s.format(e) + ")")
                });
                var n = t ? this.clone() : this;
                return b(n, e[0], e[1], r)
            };
            var b = function (r, t, n, i) {
                var o, a, s, u = i || 0,
                    c = !e.equal(u, 0),
                    f = r._size[0],
                    l = r._size[1];
                if (n > l) {
                    for (a = l; n > a; a++)
                        if (r._ptr[a] = r._values.length, c)
                            for (o = 0; f > o; o++) r._values.push(u), r._index.push(o);
                    r._ptr[n] = r._values.length
                } else l > n && (r._ptr.splice(n + 1, l - n), r._values.splice(r._ptr[n], r._values.length), r._index.splice(r._ptr[n], r._index.length));
                if (l = n, t > f) {
                    if (c) {
                        var p = 0;
                        for (a = 0; l > a; a++) {
                            r._ptr[a] = r._ptr[a] + p, s = r._ptr[a + 1] + p;
                            var m = 0;
                            for (o = f; t > o; o++, m++) r._values.splice(s + m, 0, u), r._index.splice(s + m, 0, o), p++
                        }
                        r._ptr[l] = r._values.length
                    }
                } else if (f > t) {
                    var h = 0;
                    for (a = 0; l > a; a++) {
                        r._ptr[a] = r._ptr[a] - h;
                        var g = r._ptr[a],
                            d = r._ptr[a + 1] - h;
                        for (s = g; d > s; s++) o = r._index[s], o > t - 1 && (r._values.splice(s, 1), r._index.splice(s, 1), h++)
                    }
                    r._ptr[a] = r._values.length
                }
                return r._size[0] = t, r._size[1] = n, r
            };
            r.prototype.clone = function () {
                var e = new r({
                    values: a.clone(this._values),
                    index: a.clone(this._index),
                    ptr: a.clone(this._ptr),
                    size: a.clone(this._size)
                });
                return e
            }, r.prototype.size = function () {
                return a.clone(this._size)
            }, r.prototype.map = function (e, r) {
                var t = this,
                    n = this._size[0],
                    i = this._size[1],
                    o = function (r, n, i) {
                        return e(r, [n, i], t)
                    };
                return E(this, 0, n - 1, 0, i - 1, o, r)
            };
            var E = function (t, n, i, o, a, s, u) {
                for (var c = [], f = [], l = [], p = function (r, t, n) {
                        r = s(r, t, n), e.equal(r, 0) || (c.push(r), f.push(t))
                    }, m = o; a >= m; m++) {
                    l.push(c.length);
                    for (var h = t._ptr[m], g = t._ptr[m + 1], d = n, v = h; g > v; v++) {
                        var y = t._index[v];
                        if (y >= n && i >= y) {
                            if (!u)
                                for (var x = d; y > x; x++) p(0, x - n, m - o);
                            p(t._values[v], y - n, m - o)
                        }
                        d = y + 1
                    }
                    if (!u)
                        for (var w = d; i >= w; w++) p(0, w - n, m - o)
                }
                return l.push(c.length), new r({
                    values: c,
                    index: f,
                    ptr: l,
                    size: [i - n + 1, a - o + 1]
                })
            };
            r.prototype.forEach = function (e, r) {
                for (var t = this, n = this._size[0], i = this._size[1], o = 0; i > o; o++) {
                    for (var a = this._ptr[o], s = this._ptr[o + 1], u = 0, c = a; s > c; c++) {
                        var f = this._index[c];
                        if (!r)
                            for (var l = u; f > l; l++) e(0, [l, o], t);
                        e(this._values[c], [f, o], t), u = f + 1
                    }
                    if (!r)
                        for (var p = u; n > p; p++) e(0, [p, o], t)
                }
            }, r.prototype.toArray = function () {
                return N(this, !0)
            }, r.prototype.valueOf = function () {
                return N(this, !1)
            };
            var N = function (e, r) {
                for (var t = [], n = e._size[0], i = e._size[1], o = 0; i > o; o++) {
                    for (var s = e._ptr[o], u = e._ptr[o + 1], c = 0, f = s; u > f; f++) {
                        for (var l = e._index[f], p = c; l > p; p++)(t[p] = t[p] || [])[o] = 0;
                        (t[l] = t[l] || [])[o] = r ? a.clone(e._values[f]) : e._values[f], c = l + 1
                    }
                    for (var m = c; n > m; m++)(t[m] = t[m] || [])[o] = 0
                }
                return t
            };
            r.prototype.format = function (e) {
                for (var r = this._size[0], t = this._size[1], n = "CCS [" + s.format(r, e) + " x " + s.format(t, e) + "] density: " + s.format(this._values.length / (r * t), e) + "\n", i = 0; t > i; i++)
                    for (var o = this._ptr[i], a = this._ptr[i + 1], u = o; a > u; u++) {
                        var c = this._index[u];
                        n += "\n    (" + s.format(c, e) + ", " + s.format(i, e) + ") ==> " + s.format(this._values[u], e)
                    }
                return n
            }, r.prototype.toString = function () {
                return s.format(this.toArray())
            }, r.prototype.toJSON = function () {
                return {
                    mathjs: "CcsMatrix",
                    values: this._values,
                    index: this._index,
                    ptr: this._ptr,
                    size: this._size
                }
            }, r.prototype.transpose = function () {
                var r = this._size[0],
                    t = this._size[1];
                if (0 === t) throw new RangeError("Cannot transpose a 2D matrix with no columns (size: " + s.format(this._size) + ")");
                return new e.type.CrsMatrix({
                    values: a.clone(this._values),
                    index: a.clone(this._index),
                    ptr: a.clone(this._ptr),
                    size: [t, r]
                })
            }, r.prototype.diagonal = function (e) {
                if (e) {
                    if (e instanceof m && (e = e.toNumber()), !f(e) || !l(e)) throw new TypeError("The parameter k must be an integer number")
                } else e = 0;
                for (var r = e > 0 ? e : 0, t = 0 > e ? -e : 0, n = this._size[0], i = this._size[1], o = Math.min(n - t, i - r), s = [], u = r; i > u && s.length < o; u++) {
                    for (var c = this._ptr[u], p = this._ptr[u + 1], h = !1, g = c; p > g; g++) {
                        var d = this._index[g];
                        if (d === u - r + t) {
                            h = !0, s.push(a.clone(this._values[g]));
                            break
                        }
                        if (d > u - r + t) break
                    }!h && s.length < o && s.push(0)
                }
                return s
            }, r.fromJSON = function (e) {
                return new r(e)
            }, r.diagonal = function (t, n, i) {
                if (!c(t)) throw new TypeError("Array expected, size parameter");
                if (2 !== t.length) throw new Error("Only two dimensions matrix are supported");
                if (t = t.map(function (e) {
                        if (e instanceof m && (e = e.toNumber()), !f(e) || !l(e) || 1 > e) throw new Error("Size values must be positive integers");
                        return e
                    }), i) {
                    if (i instanceof m && (i = i.toNumber()), !f(i) || !l(i)) throw new TypeError("The parameter k must be an integer number")
                } else i = 0;
                var o, a = i > 0 ? i : 0,
                    s = 0 > i ? -i : 0,
                    u = t[0],
                    p = t[1],
                    h = Math.min(u - s, p - a);
                if (c(n)) {
                    if (n.length !== h) throw new Error("Invalid value array length");
                    o = function (e) {
                        return n[e]
                    }
                } else o = function () {
                    return n
                };
                for (var g = [], d = [], v = [], y = 0; p > y; y++) {
                    v.push(g.length);
                    var x = y - a;
                    if (x >= 0 && h > x) {
                        var w = o(x);
                        e.equal(w, 0) || (d.push(x + s), g.push(w))
                    }
                }
                return v.push(g.length), new r({
                    values: g,
                    index: d,
                    ptr: v,
                    size: [u, p]
                })
            }, r.prototype.trace = function () {
                var r = this._size,
                    t = r[0],
                    n = r[1];
                if (t === n) {
                    var i = 0;
                    if (this._values.length > 0)
                        for (var o = 0; n > o; o++)
                            for (var a = this._ptr[o], u = this._ptr[o + 1], c = a; u > c; c++) {
                                var f = this._index[c];
                                if (f === o) {
                                    i = e.add(i, this._values[c]);
                                    break
                                }
                                if (f > o) break
                            }
                    return i
                }
                throw new RangeError("Matrix must be square (size: " + s.format(r) + ")")
            }, r.prototype.multiply = function (r) {
                var t = this._size[0],
                    n = this._size[1];
                if (r instanceof h) {
                    var i = r.size();
                    if (1 === i.length) return M(this, i[0], 1, function (e) {
                        return r.get([e])
                    });
                    if (2 === i.length) return M(this, i[0], i[1], function (e, t) {
                        return r.get([e, t])
                    });
                    throw new Error("Can only multiply a 1 or 2 dimensional matrix (value has " + i.length + " dimensions)")
                }
                if (c(r)) {
                    var a = o.size(r);
                    if (1 === a.length) return M(this, a[0], 1, function (e) {
                        return r[e]
                    });
                    if (2 === a.length) return M(this, a[0], a[1], function (e, t) {
                        return r[e][t]
                    });
                    throw new Error("Can only multiply a 1 or 2 dimensional matrix (value has " + a.length + " dimensions)")
                }
                var s = function (t) {
                    return e.multiply(t, r)
                };
                return E(this, 0, t - 1, 0, n - 1, s, !1)
            };
            var M = function (t, n, i, o) {
                var a = t._size[0],
                    s = t._size[1];
                if (s !== n) throw new RangeError("Dimension mismatch in multiplication. Columns of A must match length of B (A is " + a + "x" + s + ", B is " + n + ", " + s + " != " + n + ")");
                for (var u = [], c = [], f = [], l = [], p = 0; a > p; p++) l[p] = 0;
                for (var m = 0; i > m; m++) {
                    f.push(u.length);
                    for (var h = 0; s > h; h++)
                        for (var g = t._ptr[h], d = t._ptr[h + 1], v = g; d > v; v++) {
                            var y = t._index[v];
                            l[y] = e.add(l[y], e.multiply(t._values[v], o(h, m)))
                        }
                    for (var x = 0; a > x; x++) e.equal(l[x], 0) || (u.push(l[x]), c.push(x)), l[x] = 0
                }
                return f.push(u.length), 1 === a && 1 === i ? 1 === u.length ? u[0] : 0 : new r({
                    values: u,
                    index: c,
                    ptr: f,
                    size: [a, i]
                })
            };
            return r
        }
    }, function (e, r, t) {
        "use strict";
        var n = t(175),
            i = t(172),
            o = n.array,
            a = n.object,
            s = n.string,
            u = n.number,
            c = Array.isArray,
            f = n.number.isNumber,
            l = n.number.isInteger,
            p = o.validateIndex;
        e.exports = function (e) {
            function r(e) {
                if (!(this instanceof r)) throw new SyntaxError("Constructor must be called with the new operator");
                if (e instanceof h) "CrsMatrix" === e.type ? (this._values = a.clone(e._values), this._index = a.clone(e._index), this._ptr = a.clone(e._ptr), this._size = a.clone(e._size)) : g(this, e.valueOf());
                else if (e && c(e.values) && c(e.index) && c(e.ptr) && c(e.size)) this._values = e.values, this._index = e.index, this._ptr = e.ptr, this._size = e.size;
                else if (c(e)) g(this, e);
                else {
                    if (e) throw new TypeError("Unsupported type of data (" + n.types.type(e) + ")");
                    this._values = [], this._index = [], this._ptr = [0], this._size = [0]
                }
            }
            var t = e.type.Index,
                m = e.type.BigNumber,
                h = e.type.Matrix,
                g = function (r, t) {
                    r._values = [], r._index = [], r._ptr = [];
                    for (var n = t.length, i = 0, o = 0; n > o; o++) {
                        r._ptr.push(r._values.length);
                        var a = t[o];
                        if (c(a)) {
                            a.length > i && (i = a.length);
                            for (var s = 0; s < a.length; s++) {
                                var u = a[s];
                                e.equal(u, 0) || (r._values.push(u), r._index.push(s))
                            }
                        } else 0 === o && 1 > i && (i = 1), e.equal(a, 0) || (r._values.push(a), r._index.push(0))
                    }
                    r._ptr.push(r._values.length), r._size = [n, i]
                };
            r.prototype = new e.type.Matrix, r.prototype.type = "CrsMatrix", r.prototype.storage = function () {
                return "crs"
            }, r.prototype.subset = function (e, r, t) {
                switch (arguments.length) {
                    case 1:
                        return d(this, e);
                    case 2:
                    case 3:
                        return v(this, e, r, t);
                    default:
                        throw new SyntaxError("Wrong number of arguments")
                }
            };
            var d = function (e, r) {
                    if (!(r instanceof t)) throw new TypeError("Invalid index");
                    var n = r.isScalar();
                    if (n) return e.get(r.min());
                    var o = r.size();
                    if (o.length != e._size.length) throw new i(o.length, e._size.length);
                    for (var a = r.min(), s = r.max(), u = 0, c = e._size.length; c > u; u++) p(a[u], e._size[u]), p(s[u], e._size[u]);
                    var f = function (e) {
                        return e
                    };
                    return E(e, a[0], s[0], a[1], s[1], f, !1)
                },
                v = function (e, r, n, s) {
                    if (!(r instanceof t)) throw new TypeError("Invalid index");
                    var u, c = r.size(),
                        f = r.isScalar();
                    if (n instanceof h ? (u = n.size(), n = n.toArray()) : u = o.size(n), f) {
                        if (0 !== u.length) throw new TypeError("Scalar expected");
                        e.set(r.min(), n, s)
                    } else {
                        if (1 !== c.length && 2 !== c.length) throw new i(c.length, e._size.length, "<");
                        if (u.length < c.length) {
                            for (var l = 0, p = 0; 1 === c[l] && 1 === u[l];) l++;
                            for (; 1 === c[l];) p++, l++;
                            n = o.unsqueeze(n, c.length, p, u)
                        }
                        if (!a.deepEqual(c, u)) throw new i(c, u, ">");
                        for (var m = r.min()[0], g = r.min()[1], d = u[0], v = u[1], y = 0; d > y; y++)
                            for (var x = 0; v > x; x++) {
                                var w = n[y][x];
                                e.set([y + m, x + g], w, s)
                            }
                    }
                    return e
                };
            r.prototype.get = function (e) {
                if (!c(e)) throw new TypeError("Array expected");
                if (e.length != this._size.length) throw new i(e.length, this._size.length);
                var r = e[0],
                    t = e[1];
                p(r, this._size[0]), p(t, this._size[1]);
                var n = y(t, this._ptr[r], this._ptr[r + 1], this._index);
                return n < this._ptr[r + 1] && this._index[n] === t ? a.clone(this._values[n]) : 0
            }, r.prototype.set = function (r, t, n) {
                if (!c(r)) throw new TypeError("Array expected");
                if (r.length != this._size.length) throw new i(r.length, this._size.length);
                var o = r[0],
                    a = r[1],
                    s = this._size[0],
                    u = this._size[1];
                (o > s - 1 || a > u - 1) && (b(this, Math.max(o + 1, s), Math.max(a + 1, u), n), s = this._size[0], u = this._size[1]), p(o, s), p(a, u);
                var f = y(a, this._ptr[o], this._ptr[o + 1], this._index);
                return f < this._ptr[o + 1] && this._index[f] === a ? e.equal(t, 0) ? x(f, o, this._values, this._index, this._ptr) : this._values[f] = t : w(f, o, a, t, this._values, this._index, this._ptr), this
            };
            var y = function (e, r, t, n) {
                    if (t - r === 0 || e > n[t - 1]) return t;
                    for (; t > r;) {
                        var i = ~~((r + t) / 2),
                            o = n[i];
                        if (o > e) t = i;
                        else {
                            if (!(e > o)) return i;
                            r = i + 1
                        }
                    }
                    return r
                },
                x = function (e, r, t, n, i) {
                    t.splice(e, 1), n.splice(e, 1);
                    for (var o = r + 1; o < i.length; o++) i[o]--
                },
                w = function (e, r, t, n, i, o, a) {
                    i.splice(e, 0, n), o.splice(e, 0, t);
                    for (var s = r + 1; s < a.length; s++) a[s]++
                };
            r.prototype.resize = function (e, r, t) {
                if (!c(e)) throw new TypeError("Array expected");
                if (2 !== e.length) throw new Error("Only two dimensions matrix are supported");
                e.forEach(function (r) {
                    if (!u.isNumber(r) || !u.isInteger(r) || 0 > r) throw new TypeError("Invalid size, must contain positive integers (size: " + s.format(e) + ")")
                });
                var n = t ? this.clone() : this;
                return b(n, e[0], e[1], r)
            };
            var b = function (r, t, n, i) {
                var o, a, s, u = i || 0,
                    c = !e.equal(u, 0),
                    f = r._size[0],
                    l = r._size[1];
                if (t > f) {
                    for (o = f; t > o; o++)
                        if (r._ptr[o] = r._values.length, c)
                            for (a = 0; l > a; a++) r._values.push(u), r._index.push(a);
                    r._ptr[t] = r._values.length
                } else f > t && (r._ptr.splice(t + 1, f - t), r._values.splice(r._ptr[t], r._values.length), r._index.splice(r._ptr[t], r._index.length));
                if (f = t, n > l) {
                    if (c) {
                        var p = 0;
                        for (o = 0; f > o; o++) {
                            r._ptr[o] = r._ptr[o] + p, s = r._ptr[o + 1] + p;
                            var m = 0;
                            for (a = l; n > a; a++, m++) r._values.splice(s + m, 0, u), r._index.splice(s + m, 0, a), p++
                        }
                        r._ptr[f] = r._values.length
                    }
                } else if (l > n) {
                    var h = 0;
                    for (o = 0; f > o; o++) {
                        r._ptr[o] = r._ptr[o] - h;
                        var g = r._ptr[o],
                            d = r._ptr[o + 1] - h;
                        for (s = g; d > s; s++) a = r._index[s], a > n - 1 && (r._values.splice(s, 1), r._index.splice(s, 1), h++)
                    }
                    r._ptr[o] = r._values.length
                }
                return r._size[0] = t, r._size[1] = n, r
            };
            r.prototype.clone = function () {
                var e = new r({
                    values: a.clone(this._values),
                    index: a.clone(this._index),
                    ptr: a.clone(this._ptr),
                    size: a.clone(this._size)
                });
                return e
            }, r.prototype.size = function () {
                return a.clone(this._size)
            }, r.prototype.map = function (e, r) {
                var t = this,
                    n = this._size[0],
                    i = this._size[1],
                    o = function (r, n, i) {
                        return e(r, [n, i], t)
                    };
                return E(this, 0, n - 1, 0, i - 1, o, r)
            };
            var E = function (t, n, i, o, a, s, u) {
                for (var c = [], f = [], l = [], p = function (r, t, n) {
                        r = s(r, t, n), e.equal(r, 0) || (c.push(r), f.push(n))
                    }, m = n; i >= m; m++) {
                    l.push(c.length);
                    for (var h = t._ptr[m], g = t._ptr[m + 1], d = o, v = h; g > v; v++) {
                        var y = t._index[v];
                        if (y >= o && a >= y) {
                            if (!u)
                                for (var x = d; y > x; x++) p(0, m - n, x - o);
                            p(t._values[v], m - n, y - o)
                        }
                        d = y + 1
                    }
                    if (!u)
                        for (var w = d; a >= w; w++) p(0, m - n, w - o)
                }
                return l.push(c.length), new r({
                    values: c,
                    index: f,
                    ptr: l,
                    size: [i - n + 1, a - o + 1]
                })
            };
            r.prototype.forEach = function (e, r) {
                for (var t = this, n = this._size[0], i = this._size[1], o = 0; n > o; o++) {
                    for (var a = this._ptr[o], s = this._ptr[o + 1], u = 0, c = a; s > c; c++) {
                        var f = this._index[c];
                        if (!r)
                            for (var l = u; f > l; l++) e(0, [o, l], t);
                        e(this._values[c], [o, f], t), u = f + 1
                    }
                    if (!r)
                        for (var p = u; i > p; p++) e(0, [o, p], t)
                }
            }, r.prototype.toArray = function () {
                return N(this, !0)
            }, r.prototype.valueOf = function () {
                return N(this, !1)
            };
            var N = function (e, r) {
                for (var t = [], n = e._size[0], i = e._size[1], o = 0; n > o; o++) {
                    for (var s = t[o] = [], u = e._ptr[o], c = e._ptr[o + 1], f = 0, l = u; c > l; l++) {
                        for (var p = e._index[l], m = f; p > m; m++) s[m] = 0;
                        s[p] = r ? a.clone(e._values[l]) : e._values[l], f = p + 1
                    }
                    for (var h = f; i > h; h++) s[h] = 0
                }
                return t
            };
            r.prototype.format = function (e) {
                for (var r = this._size[0], t = this._size[1], n = "CRS [" + s.format(r, e) + " x " + s.format(t, e) + "] density: " + s.format(this._values.length / (r * t), e) + "\n", i = 0; r > i; i++)
                    for (var o = this._ptr[i], a = this._ptr[i + 1], u = o; a > u; u++) {
                        var c = this._index[u];
                        n += "\n    (" + s.format(i, e) + ", " + s.format(c, e) + ") ==> " + s.format(this._values[u], e)
                    }
                return n
            }, r.prototype.toString = function () {
                return s.format(this.toArray())
            }, r.prototype.toJSON = function () {
                return {
                    mathjs: "CrsMatrix",
                    values: this._values,
                    index: this._index,
                    ptr: this._ptr,
                    size: this._size
                }
            }, r.prototype.transpose = function () {
                var r = this._size[0],
                    t = this._size[1];
                if (0 === t) throw new RangeError("Cannot transpose a 2D matrix with no columns (size: " + s.format(this._size) + ")");
                return new e.type.CcsMatrix({
                    values: a.clone(this._values),
                    index: a.clone(this._index),
                    ptr: a.clone(this._ptr),
                    size: [t, r]
                })
            }, r.prototype.diagonal = function (e) {
                if (e) {
                    if (e instanceof m && (e = e.toNumber()), !f(e) || !l(e)) throw new TypeError("The parameter k must be an integer number")
                } else e = 0;
                for (var r = e > 0 ? e : 0, t = 0 > e ? -e : 0, n = this._size[0], i = this._size[1], o = Math.min(n - t, i - r), s = [], u = t; n > u && s.length < o; u++) {
                    for (var c = this._ptr[u], p = this._ptr[u + 1], h = !1, g = c; p > g; g++) {
                        var d = this._index[g];
                        if (d === u + r - t) {
                            h = !0, s.push(a.clone(this._values[g]));
                            break
                        }
                        if (d > u + r - t) break
                    }!h && s.length < o && s.push(0)
                }
                return s
            }, r.fromJSON = function (e) {
                return new r(e)
            }, r.diagonal = function (t, n, i) {
                if (!c(t)) throw new TypeError("Array expected, size parameter");
                if (2 !== t.length) throw new Error("Only two dimensions matrix are supported");
                if (t = t.map(function (e) {
                        if (e instanceof m && (e = e.toNumber()), !f(e) || !l(e) || 1 > e) throw new Error("Size values must be positive integers");
                        return e
                    }), i) {
                    if (i instanceof m && (i = i.toNumber()), !f(i) || !l(i)) throw new TypeError("The parameter k must be an integer number")
                } else i = 0;
                var o, a = i > 0 ? i : 0,
                    s = 0 > i ? -i : 0,
                    u = t[0],
                    p = t[1],
                    h = Math.min(u - s, p - a);
                if (c(n)) {
                    if (n.length !== h) throw new Error("Invalid value array length");
                    o = function (e) {
                        return n[e]
                    }
                } else o = function () {
                    return n
                };
                for (var g = [], d = [], v = [], y = 0; u > y; y++) {
                    v.push(g.length);
                    var x = y - s;
                    if (x >= 0 && h > x) {
                        var w = o(x);
                        e.equal(w, 0) || (d.push(x + a), g.push(w))
                    }
                }
                return v.push(g.length), new r({
                    values: g,
                    index: d,
                    ptr: v,
                    size: [u, p]
                })
            }, r.prototype.trace = function () {
                var r = this._size,
                    t = r[0],
                    n = r[1];
                if (t === n) {
                    var i = 0;
                    if (this._values.length > 0)
                        for (var o = 0; t > o; o++)
                            for (var a = this._ptr[o], u = this._ptr[o + 1], c = a; u > c; c++) {
                                var f = this._index[c];
                                if (o === f) {
                                    i = e.add(i, this._values[c]);
                                    break
                                }
                                if (f > o) break
                            }
                    return i
                }
                throw new RangeError("Matrix must be square (size: " + s.format(r) + ")")
            }, r.prototype.multiply = function (r) {
                var t = this._size[0],
                    n = this._size[1];
                if (r instanceof h) {
                    var i = r.size();
                    if (1 === i.length) return M(this, i[0], 1, function (e) {
                        return r.get([e])
                    });
                    if (2 === i.length) return M(this, i[0], i[1], function (e, t) {
                        return r.get([e, t])
                    });
                    throw new Error("Can only multiply a 1 or 2 dimensional matrix (value has " + i.length + " dimensions)")
                }
                if (c(r)) {
                    var a = o.size(r);
                    if (1 === a.length) return M(this, a[0], 1, function (e) {
                        return r[e]
                    });
                    if (2 === a.length) return M(this, a[0], a[1], function (e, t) {
                        return r[e][t]
                    });
                    throw new Error("Can only multiply a 1 or 2 dimensional matrix (value has " + a.length + " dimensions)")
                }
                var s = function (t) {
                    return e.multiply(t, r)
                };
                return E(this, 0, t - 1, 0, n - 1, s, !1)
            };
            var M = function (t, n, i, o) {
                var a = t._size[0],
                    s = t._size[1];
                if (s !== n) throw new RangeError("Dimension mismatch in multiplication. Columns of A must match length of B (A is " + a + "x" + s + ", B is " + n + ", " + s + " != " + n + ")");
                for (var u = [], c = [], f = [], l = 0; a > l; l++) {
                    f.push(u.length);
                    for (var p = t._ptr[l], m = t._ptr[l + 1], h = 0; i > h; h++) {
                        for (var g = 0, d = p; m > d; d++) {
                            var v = t._index[d];
                            g = e.add(g, e.multiply(t._values[d], o(v, h)))
                        }
                        e.equal(g, 0) || (u.push(g), c.push(h))
                    }
                }
                return f.push(u.length), 1 === a && 1 === i ? 1 === u.length ? u[0] : 0 : new r({
                    values: u,
                    index: c,
                    ptr: f,
                    size: [a, i]
                })
            };
            return r
        }
    }, function (e, r, t) {
        "use strict";
        var n = t(175),
            i = t(172),
            o = n.string,
            a = n.array,
            s = n.object,
            u = Array.isArray,
            c = n.number.isNumber,
            f = n.number.isInteger,
            l = a.validateIndex;
        e.exports = function (e) {
            function r(e) {
                if (!(this instanceof r)) throw new SyntaxError("Constructor must be called with the new operator");
                if (e instanceof x) "DenseMatrix" === e.type ? (this._data = s.clone(e._data), this._size = s.clone(e._size)) : (this._data = e.toArray(), this._size = e.size());
                else if (e && u(e.data) && u(e.size)) this._data = e.data, this._size = e.size;
                else if (u(e)) this._data = d(e), this._size = a.size(this._data);
                else {
                    if (e) throw new TypeError("Unsupported type of data (" + n.types.type(e) + ")");
                    this._data = [], this._size = [0]
                }
            }

            function t(e, t) {
                if (!(t instanceof v)) throw new TypeError("Invalid index");
                var n = t.isScalar();
                if (n) return e.get(t.min());
                var o = t.size();
                if (o.length != e._size.length) throw new i(o.length, e._size.length);
                for (var a = t.min(), s = t.max(), u = 0, c = e._size.length; c > u; u++) l(a[u], e._size[u]), l(s[u], e._size[u]);
                return new r(p(e._data, t, o.length, 0))
            }

            function p(e, r, t, n) {
                var i = n == t - 1,
                    o = r.range(n);
                return o.map(i ? function (r) {
                    return e[r]
                } : function (i) {
                    var o = e[i];
                    return p(o, r, t, n + 1)
                })
            }

            function m(r, t, n, o) {
                if (!(t instanceof v)) throw new TypeError("Invalid index");
                var u, c = t.size(),
                    f = t.isScalar();
                if (n instanceof e.type.Matrix ? (u = n.size(), n = n.valueOf()) : u = a.size(n), f) {
                    if (0 !== u.length) throw new TypeError("Scalar expected");
                    r.set(t.min(), n, o)
                } else {
                    if (c.length < r._size.length) throw new i(c.length, r._size.length, "<");
                    if (u.length < c.length) {
                        for (var l = 0, p = 0; 1 === c[l] && 1 === u[l];) l++;
                        for (; 1 === c[l];) p++, l++;
                        n = a.unsqueeze(n, c.length, p, u)
                    }
                    if (!s.deepEqual(c, u)) throw new i(c, u, ">");
                    var m = t.max().map(function (e) {
                        return e + 1
                    });
                    g(r, m, o);
                    var d = c.length,
                        y = 0;
                    h(r._data, t, n, d, y)
                }
                return r
            }

            function h(e, r, t, n, i) {
                var o = i == n - 1,
                    a = r.range(i);
                a.forEach(o ? function (r, n) {
                    l(r), e[r] = t[n]
                } : function (o, a) {
                    l(o), h(e[o], r, t[a], n, i + 1)
                })
            }

            function g(e, r, t) {
                for (var n = s.clone(e._size), i = !1; n.length < r.length;) n.push(0), i = !0;
                for (var o = 0, a = r.length; a > o; o++) r[o] > n[o] && (n[o] = r[o], i = !0);
                i && w(e, n, t)
            }

            function d(r) {
                for (var t = 0, n = r.length; n > t; t++) {
                    var i = r[t];
                    u(i) ? r[t] = d(i) : i instanceof e.type.Matrix && (r[t] = d(i.valueOf()))
                }
                return r
            }
            var v = e.type.Index,
                y = e.type.BigNumber,
                x = e.type.Matrix;
            r.prototype = new e.type.Matrix, r.prototype.type = "DenseMatrix", r.prototype.storage = function () {
                return "dense"
            }, r.prototype.subset = function (e, r, n) {
                switch (arguments.length) {
                    case 1:
                        return t(this, e);
                    case 2:
                    case 3:
                        return m(this, e, r, n);
                    default:
                        throw new SyntaxError("Wrong number of arguments")
                }
            }, r.prototype.get = function (e) {
                if (!u(e)) throw new TypeError("Array expected");
                if (e.length != this._size.length) throw new i(e.length, this._size.length);
                for (var r = 0; r < e.length; r++) l(e[r], this._size[r]);
                for (var t = this._data, n = 0, o = e.length; o > n; n++) {
                    var a = e[n];
                    l(a, t.length), t = t[a]
                }
                return s.clone(t)
            }, r.prototype.set = function (e, r, t) {
                if (!u(e)) throw new TypeError("Array expected");
                if (e.length < this._size.length) throw new i(e.length, this._size.length, "<");
                var n, o, a, s = e.map(function (e) {
                    return e + 1
                });
                g(this, s, t);
                var c = this._data;
                for (n = 0, o = e.length - 1; o > n; n++) a = e[n], l(a, c.length), c = c[a];
                return a = e[e.length - 1], l(a, c.length), c[a] = r, this
            }, r.prototype.resize = function (e, r, t) {
                if (!u(e)) throw new TypeError("Array expected");
                var n = t ? this.clone() : this;
                return w(n, e, r)
            };
            var w = function (e, r, t) {
                if (0 === r.length) {
                    for (var n = e._data; u(n);) n = n[0];
                    return s.clone(n)
                }
                return e._size = s.clone(r), e._data = a.resize(e._data, e._size, t), e
            };
            r.prototype.clone = function () {
                var e = new r({
                    data: s.clone(this._data),
                    size: s.clone(this._size)
                });
                return e
            }, r.prototype.size = function () {
                return this._size
            }, r.prototype.map = function (e) {
                var t = this,
                    n = function (r, i) {
                        return u(r) ? r.map(function (e, r) {
                            return n(e, i.concat(r))
                        }) : e(r, i, t)
                    };
                return new r({
                    data: n(this._data, []),
                    size: s.clone(this._size)
                })
            }, r.prototype.forEach = function (e) {
                var r = this,
                    t = function (n, i) {
                        u(n) ? n.forEach(function (e, r) {
                            t(e, i.concat(r))
                        }) : e(n, i, r)
                    };
                t(this._data, [])
            }, r.prototype.toArray = function () {
                return s.clone(this._data)
            }, r.prototype.valueOf = function () {
                return this._data
            }, r.prototype.format = function (e) {
                return o.format(this._data, e)
            }, r.prototype.toString = function () {
                return o.format(this._data)
            }, r.prototype.toJSON = function () {
                return {
                    mathjs: "DenseMatrix",
                    data: this._data,
                    size: this._size
                }
            }, r.prototype.transpose = function () {
                switch (this._size.length) {
                    case 1:
                        return this.clone();
                    case 2:
                        var e = this._size[0],
                            t = this._size[1];
                        if (0 === t) throw new RangeError("Cannot transpose a 2D matrix with no columns (size: " + o.format(this._size) + ")");
                        for (var n, i = [], a = 0; t > a; a++) {
                            n = i[a] = [];
                            for (var u = 0; e > u; u++) n[u] = s.clone(this._data[u][a])
                        }
                        return new r({
                            data: i,
                            size: [t, e]
                        });
                    default:
                        throw new RangeError("Matrix must be two dimensional (size: " + o.format(this._size) + ")")
                }
            }, r.prototype.diagonal = function (e) {
                if (e) {
                    if (e instanceof y && (e = e.toNumber()), !c(e) || !f(e)) throw new TypeError("The parameter k must be an integer number")
                } else e = 0;
                for (var r = e > 0 ? e : 0, t = 0 > e ? -e : 0, n = this._size[0], i = this._size[1], o = Math.min(n - t, i - r), a = [], u = 0; o > u; u++) a[u] = s.clone(this._data[u + t][u + r]);
                return a
            }, r.diagonal = function (e, t, n, i) {
                if (!u(e)) throw new TypeError("Array expected, size parameter");
                if (2 !== e.length) throw new Error("Only two dimensions matrix are supported");
                if (e = e.map(function (e) {
                        if (e instanceof y && (e = e.toNumber()), !c(e) || !f(e) || 1 > e) throw new Error("Size values must be positive integers");
                        return e
                    }), n) {
                    if (n instanceof y && (n = n.toNumber()), !c(n) || !f(n)) throw new TypeError("The parameter k must be an integer number")
                } else n = 0;
                var o, s = n > 0 ? n : 0,
                    l = 0 > n ? -n : 0,
                    p = e[0],
                    m = e[1],
                    h = Math.min(p - l, m - s);
                if (u(t)) {
                    if (t.length !== h) throw new Error("Invalid value array length");
                    o = function (e) {
                        return t[e]
                    }
                } else o = function () {
                    return t
                };
                var g = [];
                if (e.length > 0) {
                    g = a.resize(g, e, i);
                    for (var d = 0; h > d; d++) g[d + l][d + s] = o(d)
                }
                return new r({
                    data: g,
                    size: [p, m]
                })
            }, r.prototype.trace = function () {
                var r = this._size,
                    t = this._data;
                switch (r.length) {
                    case 1:
                        if (1 == r[0]) return s.clone(t[0]);
                        throw new RangeError("Matrix must be square (size: " + o.format(r) + ")");
                    case 2:
                        var n = r[0],
                            i = r[1];
                        if (n === i) {
                            for (var a = 0, u = 0; n > u; u++) a = e.add(a, t[u][u]);
                            return a
                        }
                        throw new RangeError("Matrix must be square (size: " + o.format(r) + ")");
                    default:
                        throw new RangeError("Matrix must be two dimensional (size: " + o.format(r) + ")")
                }
            }, r.fromJSON = function (e) {
                return new r(e)
            }, r.prototype.multiply = function (e) {
                switch (this._size.length) {
                    case 1:
                        return b(this, this._size[0], e);
                    case 2:
                        return M(this, this._size[0], this._size[1], e);
                    default:
                        throw new Error("Can only multiply a 1 or 2 dimensional matrix (matrix has " + this._size.length + " dimensions)")
                }
            };
            var b = function (r, t, n) {
                    if (n instanceof x) {
                        var i = n.size();
                        if (1 === i.length) {
                            if (i[0] !== t) throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length.");
                            return E(r, t, function (e) {
                                return n.get([e])
                            })
                        }
                        if (2 === i.length) {
                            if (i[0] !== t) throw new RangeError("Dimension mismatch in multiplication. Matrix rows and Vector length must be equal.");
                            return N(r, t, i[1], function (e, r) {
                                return n.get([e, r])
                            })
                        }
                        throw new Error("Can only multiply a 1 or 2 dimensional matrix (value has " + i.length + " dimensions)")
                    }
                    if (u(n)) {
                        var o = a.size(n);
                        if (1 === o.length) {
                            if (o[0] !== t) throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length.");
                            return E(r, t, function (e) {
                                return n[e]
                            })
                        }
                        if (2 === o.length) {
                            if (o[0] !== t) throw new RangeError("Dimension mismatch in multiplication. Matrix rows and Vector length must be equal.");
                            return N(r, t, o[1], function (e, r) {
                                return n[e][r]
                            })
                        }
                        throw new Error("Can only multiply a 1 or 2 dimensional matrix (value has " + o.length + " dimensions)")
                    }
                    return r.map(function (r) {
                        return e.multiply(n, r)
                    })
                },
                E = function (r, t, n) {
                    if (0 === t) throw new Error("Cannot multiply two empty vectors");
                    for (var i = 0, o = 0; t > o; o++) i = e.add(i, e.multiply(r._data[o], n(o)));
                    return i
                },
                N = function (t, n, i, o) {
                    for (var a = [], s = 0; i > s; s++) {
                        for (var u = 0, c = 0; n > c; c++) u = e.add(u, e.multiply(t._data[c], o(c, s)));
                        a[s] = u
                    }
                    return 1 === i ? a[0] : new r({
                        data: a,
                        size: [i]
                    })
                },
                M = function (r, t, n, i) {
                    if (i instanceof x) {
                        var o = i.size();
                        if (1 === o.length) {
                            if (o[0] !== n) throw new RangeError("Dimension mismatch in multiplication. Matrix columns must match vector length.");
                            return _(r, t, n, function (e) {
                                return i.get([e])
                            })
                        }
                        if (2 === o.length) {
                            if (o[0] !== n) throw new RangeError("Dimension mismatch in multiplication. Columns of A must match length of B (A is " + t + "x" + n + ", B is " + o[0] + ", " + n + " != " + o[0] + ")");
                            return A(r, t, n, o[1], function (e, r) {
                                return i.get([e, r])
                            })
                        }
                        throw new Error("Can only multiply a 1 or 2 dimensional matrix (value has " + o.length + " dimensions)")
                    }
                    if (u(i)) {
                        var s = a.size(i);
                        if (1 === s.length) {
                            if (s[0] !== n) throw new RangeError("Dimension mismatch in multiplication. Matrix columns must match vector length.");
                            return _(r, t, n, function (e) {
                                return i[e]
                            })
                        }
                        if (2 === s.length) {
                            if (s[0] !== n) throw new RangeError("Dimension mismatch in multiplication. Columns of A must match length of B (A is " + t + "x" + n + ", B is " + s[0] + ", " + n + " != " + s[0] + ")");
                            return A(r, t, n, s[1], function (e, r) {
                                return i[e][r]
                            })
                        }
                        throw new Error("Can only multiply a 1 or 2 dimensional matrix (value has " + s.length + " dimensions)")
                    }
                    return r.map(function (r) {
                        return e.multiply(i, r)
                    })
                },
                _ = function (t, n, i, o) {
                    for (var a = [], s = 0; n > s; s++) {
                        for (var u = t._data[s], c = 0, f = 0; i > f; f++) c = e.add(c, e.multiply(u[f], o(f)));
                        a[s] = c
                    }
                    return 1 === n ? a[0] : new r({
                        data: a,
                        size: [n]
                    })
                },
                A = function (t, n, i, o, a) {
                    for (var s = [], u = 0; n > u; u++) {
                        var c = t._data[u];
                        s[u] = [];
                        for (var f = 0; o > f; f++) {
                            for (var l = 0, p = 0; i > p; p++) l = e.add(l, e.multiply(c[p], a(p, f)));
                            s[u][f] = l
                        }
                    }
                    return 1 === n && 1 === o ? s[0][0] : new r({
                        data: s,
                        size: [n, o]
                    })
                };
            return r
        }
    }, function (e, r, t) {
        "use strict";
        r.ArrayNode = t(177), r.AssignmentNode = t(178), r.BlockNode = t(179), r.ConditionalNode = t(180), r.ConstantNode = t(181), r.IndexNode = t(182), r.FunctionAssignmentNode = t(183), r.FunctionNode = t(184), r.Node = t(185), r.OperatorNode = t(186), r.RangeNode = t(187), r.SymbolNode = t(188), r.UpdateNode = t(189)
    }, function (e, r, t) {
        "use strict";
        var n = t(175),
            i = t(171),
            o = n.string.isString,
            a = Array.isArray,
            s = t(177),
            u = t(178),
            c = t(179),
            f = t(180),
            l = t(181),
            p = t(183),
            m = t(182),
            h = t(186),
            g = t(184),
            d = t(187),
            v = t(188),
            y = t(189);
        e.exports = function (e) {
            function r(e, r) {
                if (1 != arguments.length && 2 != arguments.length) throw new i("parse", arguments.length, 1, 2);
                if (pe = r && r.nodes ? r.nodes : {}, o(e)) return me = e, O();
                if (a(e) || e instanceof se) return ue.deepMap(e, function (e) {
                    if (!o(e)) throw new TypeError("String expected");
                    return me = e, O()
                });
                throw new TypeError("String or matrix expected")
            }

            function t() {
                he = 0, ge = me.charAt(0), ye = 0, xe = null
            }

            function n() {
                he++, ge = me.charAt(he)
            }

            function x() {
                return me.charAt(he + 1)
            }

            function w() {
                return me.charAt(he + 2)
            }

            function b() {
                for (ve = ce.NULL, de = "";
                    " " == ge || "	" == ge || "\n" == ge && ye;) n();
                if ("#" == ge)
                    for (;
                        "\n" != ge && "" != ge;) n();
                if ("" == ge) return void(ve = ce.DELIMITER);
                if ("\n" == ge && !ye) return ve = ce.DELIMITER, de = ge, void n();
                var e = ge + x(),
                    r = e + w();
                if (3 == r.length && fe[r]) return ve = ce.DELIMITER, de = r, n(), n(), void n();
                if (2 == e.length && fe[e]) return ve = ce.DELIMITER, de = e, n(), void n();
                if (fe[ge]) return ve = ce.DELIMITER, de = ge, void n();
                if (!A(ge)) {
                    if (_(ge)) {
                        for (; _(ge) || T(ge);) de += ge, n();
                        return void(ve = le[de] ? ce.DELIMITER : ce.SYMBOL)
                    }
                    for (ve = ce.UNKNOWN;
                        "" != ge;) de += ge, n();
                    throw oe('Syntax error in part "' + de + '"')
                }
                if (ve = ce.NUMBER, "." == ge) de += ge, n(), T(ge) || (ve = ce.UNKNOWN);
                else {
                    for (; T(ge);) de += ge, n();
                    "." == ge && (de += ge, n())
                }
                for (; T(ge);) de += ge, n();
                if (e = x(), ("E" == ge || "e" == ge) && (T(e) || "-" == e || "+" == e))
                    for (de += ge, n(), ("+" == ge || "-" == ge) && (de += ge, n()), T(ge) || (ve = ce.UNKNOWN); T(ge);) de += ge, n()
            }

            function E() {
                do b(); while ("\n" == de)
            }

            function N() {
                ye++
            }

            function M() {
                ye--
            }

            function _(e) {
                return e >= "a" && "z" >= e || e >= "A" && "Z" >= e || "_" == e
            }

            function A(e) {
                return e >= "0" && "9" >= e || "." == e
            }

            function T(e) {
                return e >= "0" && "9" >= e
            }

            function O() {
                t(), b();
                var e = S();
                if ("" != de) throw ve == ce.DELIMITER ? ae("Unexpected operator " + de) : oe('Unexpected part "' + de + '"');
                return e
            }

            function S() {
                var e, r, t = [];
                if ("" == de) return new l("undefined", "undefined");
                for ("\n" != de && ";" != de && (e = z());
                    "\n" == de || ";" == de;) 0 == t.length && e && (r = ";" != de, t.push({
                    node: e,
                    visible: r
                })), b(), "\n" != de && ";" != de && "" != de && (e = z(), r = ";" != de, t.push({
                    node: e,
                    visible: r
                }));
                return t.length > 0 ? new c(t) : e
            }

            function z() {
                if (ve == ce.SYMBOL && "function" == de) throw oe('Deprecated keyword "function". Functions can now be assigned without it, like "f(x) = x^2".');
                return C()
            }

            function C() {
                var e, r, t, n, i = q();
                if ("=" == de) {
                    if (i instanceof v) return e = i.name, E(), t = C(), new u(e, t);
                    if (i instanceof m) return E(), t = C(), new y(i, t);
                    if (i instanceof g && (n = !0, r = [], e = i.name, i.args.forEach(function (e, t) {
                            e instanceof v ? r[t] = e.name : n = !1
                        }), n)) return E(), t = C(), new p(e, r, t);
                    throw oe("Invalid left hand side of assignment operator =")
                }
                return i
            }

            function q() {
                for (var e = B();
                    "?" == de;) {
                    var r = xe;
                    xe = ye, E();
                    var t = e,
                        n = B();
                    if (":" != de) throw oe("False part of conditional expression expected");
                    xe = null, E();
                    var i = q();
                    e = new f(t, n, i), xe = r
                }
                return e
            }

            function B() {
                for (var e = U();
                    "or" == de;) E(), e = new h("or", "or", [e, U()]);
                return e
            }

            function U() {
                for (var e = I();
                    "xor" == de;) E(), e = new h("xor", "xor", [e, I()]);
                return e
            }

            function I() {
                for (var e = P();
                    "and" == de;) E(), e = new h("and", "and", [e, P()]);
                return e
            }

            function P() {
                for (var e = R();
                    "|" == de;) E(), e = new h("|", "bitOr", [e, R()]);
                return e
            }

            function R() {
                for (var e = L();
                    "^|" == de;) E(), e = new h("^|", "bitXor", [e, L()]);
                return e
            }

            function L() {
                for (var e = k();
                    "&" == de;) E(), e = new h("&", "bitAnd", [e, k()]);
                return e
            }

            function k() {
                var e, r, t, n, i;
                for (e = F(), r = {
                        "==": "equal",
                        "!=": "unequal",
                        "<": "smaller",
                        ">": "larger",
                        "<=": "smallerEq",
                        ">=": "largerEq"
                    }; de in r;) t = de, n = r[t], E(), i = [e, F()], e = new h(t, n, i);
                return e
            }

            function F() {
                var e, r, t, n, i;
                for (e = j(), r = {
                        "<<": "leftShift",
                        ">>": "rightArithShift",
                        ">>>": "rightLogShift"
                    }; de in r;) t = de, n = r[t], E(), i = [e, j()], e = new h(t, n, i);
                return e
            }

            function j() {
                var e, r, t, n, i;
                for (e = D(), r = {
                        to: "to",
                        "in": "to"
                    }; de in r;) t = de, n = r[t], E(), i = [e, D()], e = new h(t, n, i);
                return e
            }

            function D() {
                var e, r = [];
                if (e = ":" == de ? new l("1", "number") : G(), ":" == de && xe !== ye) {
                    for (r.push(e);
                        ":" == de && r.length < 3;) E(), r.push(")" == de || "]" == de || "," == de || "" == de ? new v("end") : G());
                    e = 3 == r.length ? new d(r[0], r[2], r[1]) : new d(r[0], r[1])
                }
                return e
            }

            function G() {
                var e, r, t, n, i;
                for (e = W(), r = {
                        "+": "add",
                        "-": "subtract"
                    }; de in r;) t = de, n = r[t], E(), i = [e, W()], e = new h(t, n, i);
                return e
            }

            function W() {
                var e, r, t, n, i;
                if (e = Z(), r = {
                        "*": "multiply",
                        ".*": "dotMultiply",
                        "/": "divide",
                        "./": "dotDivide",
                        "%": "mod",
                        mod: "mod"
                    }, de in r)
                    for (; de in r;) t = de, n = r[t], E(), i = [e, Z()], e = new h(t, n, i);
                return (ve == ce.SYMBOL || "in" == de && e instanceof l || ve == ce.NUMBER && !(e instanceof l) || "(" == de || "[" == de) && (e = new h("*", "multiply", [e, W()])), e
            }

            function Z() {
                var e, r, t = {
                    "-": "unaryMinus",
                    "+": "unaryPlus",
                    "~": "bitNot",
                    not: "not"
                } [de];
                return t ? (e = de, E(), r = [Z()], new h(e, t, r)) : V()
            }

            function V() {
                var e, r, t, n;
                return e = H(), ("^" == de || ".^" == de) && (r = de, t = "^" == r ? "pow" : "dotPow", E(), n = [e, Z()], e = new h(r, t, n)), e
            }

            function H() {
                var e, r, t, n, i;
                for (e = Y(), r = {
                        "!": "factorial",
                        "'": "transpose"
                    }; de in r;) t = de, n = r[t], b(), i = [e], e = new h(t, n, i);
                return e
            }

            function Y() {
                var e, r = [];
                if (ve == ce.SYMBOL && pe[de]) {
                    if (e = pe[de], b(), "(" == de) {
                        if (r = [], N(), b(), ")" != de)
                            for (r.push(q());
                                "," == de;) b(), r.push(q());
                        if (")" != de) throw oe("Parenthesis ) expected");
                        M(), b()
                    }
                    return new e(r)
                }
                return J()
            }

            function J() {
                var e, r;
                return ve == ce.SYMBOL || ve == ce.DELIMITER && de in le ? (r = de, b(), e = X(r), e = Q(e)) : $()
            }

            function X(e) {
                var r;
                if ("(" == de) {
                    if (r = [], N(), b(), ")" != de)
                        for (r.push(q());
                            "," == de;) b(), r.push(q());
                    if (")" != de) throw oe("Parenthesis ) expected");
                    return M(), b(), new g(e, r)
                }
                return new v(e)
            }

            function Q(e) {
                for (var r;
                    "[" == de;) {
                    if (r = [], N(), b(), "]" != de)
                        for (r.push(q());
                            "," == de;) b(), r.push(q());
                    if ("]" != de) throw oe("Parenthesis ] expected");
                    M(), b(), e = new m(e, r)
                }
                return e
            }

            function $() {
                var e, r, t;
                if ('"' == de) {
                    for (r = "", t = "";
                        "" != ge && ('"' != ge || "\\" == t);) r += ge, t = ge, n();
                    if (b(), '"' != de) throw oe('End of string " expected');
                    return b(), e = new l(r, "string"), e = Q(e)
                }
                return K()
            }

            function K() {
                var e, r, t, n;
                if ("[" == de) {
                    if (N(), b(), "]" != de) {
                        var i = ee();
                        if (";" == de) {
                            for (t = 1, r = [i];
                                ";" == de;) b(), r[t] = ee(), t++;
                            if ("]" != de) throw oe("End of matrix ] expected");
                            M(), b(), n = r[0].nodes.length;
                            for (var o = 1; t > o; o++)
                                if (r[o].nodes.length != n) throw ae("Column dimensions mismatch (" + r[o].nodes.length + " != " + n + ")");
                            e = new s(r)
                        } else {
                            if ("]" != de) throw oe("End of matrix ] expected");
                            M(), b(), e = i
                        }
                    } else M(), b(), e = new s([]);
                    return e
                }
                return re()
            }

            function ee() {
                for (var e = [C()], r = 1;
                    "," == de;) b(), e[r] = C(), r++;
                return new s(e)
            }

            function re() {
                var e;
                return ve == ce.NUMBER ? (e = de, b(), new l(e, "number")) : te()
            }

            function te() {
                var e;
                if ("(" == de) {
                    if (N(), b(), e = C(), ")" != de) throw oe("Parenthesis ) expected");
                    return M(), b(), e
                }
                return ne()
            }

            function ne() {
                throw oe("" == de ? "Unexpected end of expression" : "Value expected")
            }

            function ie() {
                return he - de.length + 1
            }

            function oe(e) {
                var r = ie(),
                    t = new SyntaxError(e + " (char " + r + ")");
                return t["char"] = r, t
            }

            function ae(e) {
                var r = ie(),
                    t = new Error(e + " (char " + r + ")");
                return t["char"] = r, t
            }
            var se = e.type.Matrix,
                ue = e.collection,
                ce = {
                    NULL: 0,
                    DELIMITER: 1,
                    NUMBER: 2,
                    SYMBOL: 3,
                    UNKNOWN: 4
                },
                fe = {
                    ",": !0,
                    "(": !0,
                    ")": !0,
                    "[": !0,
                    "]": !0,
                    '"': !0,
                    ";": !0,
                    "+": !0,
                    "-": !0,
                    "*": !0,
                    ".*": !0,
                    "/": !0,
                    "./": !0,
                    "%": !0,
                    "^": !0,
                    ".^": !0,
                    "~": !0,
                    "!": !0,
                    "&": !0,
                    "|": !0,
                    "^|": !0,
                    "'": !0,
                    "=": !0,
                    ":": !0,
                    "?": !0,
                    "==": !0,
                    "!=": !0,
                    "<": !0,
                    ">": !0,
                    "<=": !0,
                    ">=": !0,
                    "<<": !0,
                    ">>": !0,
                    ">>>": !0
                },
                le = {
                    mod: !0,
                    to: !0,
                    "in": !0,
                    and: !0,
                    xor: !0,
                    or: !0,
                    not: !0
                },
                pe = {},
                me = "",
                he = 0,
                ge = "",
                de = "",
                ve = ce.NULL,
                ye = 0,
                xe = null;
            return r
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r() {
                if (!(this instanceof r)) throw new SyntaxError("Constructor must be called with the new operator");
                this.scope = {}
            }
            var t = e.expression.parse;
            return r.prototype.parse = function (e) {
                throw new Error("Parser.parse is deprecated. Use math.parse instead.")
            }, r.prototype.compile = function (e) {
                throw new Error("Parser.compile is deprecated. Use math.compile instead.")
            }, r.prototype.eval = function (r) {
                return t(r).compile(e).eval(this.scope)
            }, r.prototype.get = function (e) {
                return this.scope[e]
            }, r.prototype.set = function (e, r) {
                return this.scope[e] = r
            }, r.prototype.remove = function (e) {
                delete this.scope[e]
            }, r.prototype.clear = function () {
                for (var e in this.scope) this.scope.hasOwnProperty(e) && delete this.scope[e]
            }, r
        }
    }, function (e, r, t) {
        r.e = t(190), r.E = t(190), r["false"] = t(191), r.i = t(192), r.Infinity = t(193), r.LN2 = t(194), r.LN10 = t(195), r.LOG2E = t(196), r.LOG10E = t(197), r.NaN = t(198), r["null"] = t(199), r.pi = t(200), r.PI = t(200), r.phi = t(201), r.SQRT1_2 = t(202), r.SQRT2 = t(203), r.tau = t(204), r["true"] = t(205), r.version = t(206), r.abs = t(210), r.add = t(211), r.ceil = t(212), r.cube = t(213), r.divide = t(214), r.dotDivide = t(215), r.dotMultiply = t(216), r.dotPow = t(217), r.exp = t(218), r.fix = t(219), r.floor = t(220), r.gcd = t(221), r.lcm = t(222), r.log = t(223), r.log10 = t(224), r.mod = t(225), r.multiply = t(226), r.norm = t(227), r.nthRoot = t(228), r.pow = t(229), r.round = t(230), r.sign = t(231), r.sqrt = t(232), r.square = t(233), r.subtract = t(234), r.unaryMinus = t(235), r.unaryPlus = t(236), r.xgcd = t(237), r.bitAnd = t(238), r.bitNot = t(239), r.bitOr = t(240), r.bitXor = t(241), r.leftShift = t(242), r.rightArithShift = t(243), r.rightLogShift = t(244), r.arg = t(245), r.conj = t(246), r.re = t(247), r.im = t(248), r.bignumber = t(249), r["boolean"] = t(250), r.complex = t(251), r.index = t(252), r.matrix = t(253), r.number = t(254), r.string = t(255), r.unit = t(256), r.eval = t(257), r.help = t(258), r.and = t(259), r.not = t(260), r.or = t(261), r.xor = t(262), r.concat = t(263), r.cross = t(264), r.det = t(265), r.diag = t(266), r.dot = t(267), r.eye = t(268), r.flatten = t(269), r.inv = t(270), r.ones = t(271), r.range = t(272), r.resize = t(273), r.size = t(274), r.squeeze = t(275), r.subset = t(276), r.trace = t(277), r.transpose = t(278), r.zeros = t(279), r.combinations = t(280), r.factorial = t(281), r.gamma = t(282), r.permutations = t(283), r.pickRandom = t(284), r.random = t(285), r.randomInt = t(286), r.compare = t(287), r.deepEqual = t(288), r.equal = t(289), r.larger = t(290), r.largerEq = t(291), r.smaller = t(292), r.smallerEq = t(293), r.unequal = t(294), r.max = t(295), r.mean = t(296), r.median = t(297), r.min = t(298), r.prod = t(299), r.std = t(300), r.sum = t(301), r["var"] = t(302), r.acos = t(303), r.acosh = t(304), r.acot = t(305), r.acoth = t(306), r.acsc = t(307), r.acsch = t(308), r.asec = t(309), r.asech = t(310), r.asin = t(311), r.asinh = t(312), r.atan = t(313), r.atanh = t(314), r.atan2 = t(315), r.cos = t(316), r.cosh = t(317), r.cot = t(318), r.coth = t(319), r.csc = t(320), r.csch = t(321), r.sec = t(322), r.sech = t(323), r.sin = t(324), r.sinh = t(325), r.tan = t(326), r.tanh = t(327), r.to = t(328), r.clone = t(329), r.map = t(330), r.filter = t(331), r.forEach = t(332), r.format = t(333), r["import"] = t(334), r.sort = t(335), r["typeof"] = t(336)
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(r, t) {
                var n = t && t.mathjs,
                    i = e.type[n];
                return i && i.fromJSON ? i.fromJSON(t) : t
            }
            return r
        }
    }, function (e, r, t) {
        "use strict";
        var n = t(5),
            i = t(208).transform,
            o = t(3).isNumber,
            a = t(169).argsToArray;
        e.exports = function (e) {
            var r = function () {
                var r = a(arguments),
                    t = r.length - 1,
                    s = r[t];
                o(s) ? r[t] = s - 1 : s instanceof n && (r[t] = s.minus(1));
                try {
                    return e.concat.apply(e, r)
                } catch (u) {
                    throw i(u)
                }
            };
            return e.concat.transform = r, r
        }
    }, function (e, r, t) {
        "use strict";
        var n = t(188),
            i = (t(209).isBoolean, t(169).argsToArray, t(171));
        e.exports = function (e) {
            var r = e.filter,
                t = function (e, t, o) {
                    if (2 !== e.length) throw new i("filter", arguments.length, 2);
                    var a, s = e[0].compile(t).eval(o);
                    if (e[1] instanceof n) a = e[1].compile(t).eval(o);
                    else {
                        var u = o || {},
                            c = e[1].filter(function (e) {
                                return e instanceof n && !(e.name in t) && !(e.name in u)
                            })[0],
                            f = Object.create(u),
                            l = e[1].compile(t);
                        if (!c) throw new Error("No undefined variable found in filter equation");
                        var p = c.name;
                        a = function (e) {
                            return f[p] = e, l.eval(f)
                        }
                    }
                    return r(s, a)
                };
            return t.rawArgs = !0, e.filter.transform = t, t
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(e, r, t) {
                var n = function (e, i) {
                    Array.isArray(e) ? e.forEach(function (e, r) {
                        n(e, i.concat(r + 1))
                    }) : r(e, i, t)
                };
                n(e, [])
            }
            var t = e.type.Matrix,
                n = function (n, i) {
                    if (2 != arguments.length) throw new e.error.ArgumentsError("forEach", arguments.length, 2);
                    if (Array.isArray(n)) r(n, i, n);
                    else {
                        if (!(n instanceof t)) throw new e.error.UnsupportedTypeError("forEach", e["typeof"](n));
                        r(n.valueOf(), i, n)
                    }
                };
            return e.forEach.transform = n, n
        }
    }, function (e, r, t) {
        "use strict";
        var n = t(5),
            i = t(8),
            o = t(9),
            a = t(3).isNumber;
        e.exports = function (e) {
            var r = function () {
                for (var e = [], r = 0, t = arguments.length; t > r; r++) {
                    var s = arguments[r];
                    if (s instanceof i) s.start--, s.end -= s.step > 0 ? 0 : 2;
                    else if (a(s)) s--;
                    else {
                        if (!(s instanceof n)) throw new TypeError("Ranges must be a Number or Range");
                        s = s.toNumber() - 1
                    }
                    e[r] = s
                }
                var u = new o;
                return o.apply(u, e), u
            };
            return e.index.transform = r, r
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(e, r, t) {
                var n = function (e, i) {
                    return Array.isArray(e) ? e.map(function (e, r) {
                        return n(e, i.concat(r + 1))
                    }) : r(e, i, t)
                };
                return n(e, [])
            }
            var t = e.type.Matrix,
                n = function (n, i) {
                    if (2 != arguments.length) throw new e.error.ArgumentsError("map", arguments.length, 2);
                    if (Array.isArray(n)) return r(n, i, n);
                    if (n instanceof t) return e.matrix(r(n.valueOf(), i, n));
                    throw new e.error.UnsupportedTypeError("map", e["typeof"](n))
                };
            return e.map.transform = n, n
        }
    }, function (e, r, t) {
        "use strict";
        var n = t(5),
            i = t(208).transform,
            o = t(3).isNumber,
            a = t(169).argsToArray;
        e.exports = function (e) {
            var r = e.collection.isCollection,
                t = function () {
                    var t = a(arguments);
                    if (2 == t.length && r(t[0])) {
                        var s = t[1];
                        o(s) ? t[1] = s - 1 : s instanceof n && (t[1] = s.minus(1))
                    }
                    try {
                        return e.max.apply(e, t)
                    } catch (u) {
                        throw i(u)
                    }
                };
            return e.max.transform = t, t
        }
    }, function (e, r, t) {
        "use strict";
        var n = t(5),
            i = t(208).transform,
            o = t(3).isNumber,
            a = t(169).argsToArray;
        e.exports = function (e) {
            var r = e.collection.isCollection,
                t = function () {
                    var t = a(arguments);
                    if (2 == t.length && r(t[0])) {
                        var s = t[1];
                        o(s) ? t[1] = s - 1 : s instanceof n && (t[1] = s.minus(1))
                    }
                    try {
                        return e.mean.apply(e, t)
                    } catch (u) {
                        throw i(u)
                    }
                };
            return e.mean.transform = t, t
        }
    }, function (e, r, t) {
        "use strict";
        var n = t(5),
            i = t(208).transform,
            o = t(3).isNumber,
            a = t(169).argsToArray;
        e.exports = function (e) {
            var r = e.collection.isCollection,
                t = function () {
                    var t = a(arguments);
                    if (2 == t.length && r(t[0])) {
                        var s = t[1];
                        o(s) ? t[1] = s - 1 : s instanceof n && (t[1] = s.minus(1))
                    }
                    try {
                        return e.min.apply(e, t)
                    } catch (u) {
                        throw i(u)
                    }
                };
            return e.min.transform = t, t
        }
    }, function (e, r, t) {
        "use strict";
        var n = t(209).isBoolean,
            i = t(169).argsToArray;
        e.exports = function (e) {
            var r = function () {
                var r = i(arguments),
                    t = r.length - 1,
                    o = r[t];
                return n(o) || r.push(!0), e.range.apply(e, r)
            };
            return e.range.transform = r, r
        }
    }, function (e, r, t) {
        "use strict";
        var n = t(208).transform,
            i = (t(209).isBoolean, t(169).argsToArray);
        e.exports = function (e) {
            var r = function () {
                try {
                    return e.subset.apply(e, i(arguments))
                } catch (r) {
                    throw n(r)
                }
            };
            return e.subset.transform = r, r
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(e) {
                if (!(this instanceof r)) throw new SyntaxError("Constructor must be called with the new operator");
                this.value = e instanceof r ? e.value : e
            }

            function n(e, t) {
                var n = Array.prototype.slice;
                r.prototype[e] = "function" == typeof t ? function () {
                    var e = [this.value].concat(n.call(arguments, 0));
                    return new r(t.apply(this, e))
                } : new r(t)
            }
            var i = t(176);
            r.prototype.done = function () {
                return this.value
            }, r.prototype.valueOf = function () {
                return this.value
            }, r.prototype.toString = function () {
                return i.format(this.value)
            }, r.createProxy = n;
            for (var o in e) e.hasOwnProperty(o) && n(o, e[o]);
            return r
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = e.collection,
                o = i.isCollection,
                a = r.number.isNumber,
                s = r.string.isString,
                u = r["boolean"].isBoolean;
            e.bignumber = function c(r) {
                if (arguments.length > 1) throw new e.error.ArgumentsError("bignumber", arguments.length, 0, 1);
                if (r instanceof n || a(r) || s(r)) return new n(r);
                if (u(r) || null === r) return new n(+r);
                if (o(r)) return i.deepMap(r, c);
                if (0 == arguments.length) return new n(0);
                throw new e.error.UnsupportedTypeError("bignumber", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = e.collection,
                o = i.isCollection,
                a = r.number.isNumber,
                s = r.string.isString;
            e["boolean"] = function u(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("boolean", arguments.length, 0, 1);
                if ("true" === r || r === !0) return !0;
                if ("false" === r || r === !1 || null === r) return !1;
                if (r instanceof Boolean) return 1 == r;
                if (a(r)) return 0 !== r;
                if (r instanceof n) return !r.isZero();
                if (s(r)) {
                    var t = r.toLowerCase();
                    if ("true" === t) return !0;
                    if ("false" === t) return !1;
                    var c = Number(r);
                    if ("" != r && !isNaN(c)) return 0 !== c
                }
                if (o(r)) return i.deepMap(r, u);
                throw new SyntaxError(r.toString() + " is no valid boolean")
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = e.collection,
                a = o.isCollection,
                s = r.number.isNumber,
                u = r.string.isString,
                c = i.isComplex;
            e.complex = function f(r) {
                switch (arguments.length) {
                    case 0:
                        return new i(0, 0);
                    case 1:
                        var t = arguments[0];
                        if (s(t)) return new i(t, 0);
                        if (t instanceof n) return new i(t.toNumber(), 0);
                        if (c(t)) return t.clone();
                        if (u(t)) {
                            var l = i.parse(t);
                            if (l) return l;
                            throw new SyntaxError('String "' + t + '" is no valid complex number')
                        }
                        if (a(t)) return o.deepMap(t, f);
                        if ("object" == typeof t) {
                            if ("re" in t && "im" in t) return new i(t.re, t.im);
                            if ("r" in t && "phi" in t) return i.fromPolar(t.r, t.phi)
                        }
                        throw new TypeError("Two numbers, single string or an fitting object expected in function complex");
                    case 2:
                        var p = arguments[0],
                            m = arguments[1];
                        if (p instanceof n && (p = p.toNumber()), m instanceof n && (m = m.toNumber()), s(p) && s(m)) return new i(p, m);
                        throw new TypeError("Two numbers or a single string expected in function complex");
                    default:
                        throw new e.error.ArgumentsError("complex", arguments.length, 0, 2)
                }
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = (t(175), e.type.BigNumber),
                n = t(9);
            e.index = function (e) {
                var t = Array.prototype.slice.apply(arguments).map(function (e) {
                        return e instanceof r ? e.toNumber() : Array.isArray(e) ? e.map(function (e) {
                            return e instanceof r ? e.toNumber() : e
                        }) : e
                    }),
                    i = new n;
                return n.apply(i, t), i
            }
        }
    }, function (e, r, t) {
        "use strict";
        var n = t(176),
            i = Array.isArray,
            o = n.isString;
        e.exports = function (e) {
            var r = e.type.Matrix;
            e.matrix = function (t, n) {
                switch (arguments.length) {
                    case 0:
                        t = [], n = "default";
                        break;
                    case 1:
                        i(t) ? n = "default" : t instanceof r ? n = t.storage() : o(t) && (n = t, t = []);
                        break;
                    case 2:
                        if (!(i(t) || t instanceof r)) throw new TypeError("data must be an array value or Matrix instance");
                        break;
                    default:
                        throw new e.error.ArgumentsError("matrix", arguments.length, 0, 2)
                }
                var a = r.storage(n);
                return new a(t)
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = e.type.Unit,
                o = e.collection,
                a = o.isCollection,
                s = r.number.isNumber,
                u = r["boolean"].isBoolean,
                c = r.string.isString;
            e.number = function f(r, t) {
                switch (arguments.length) {
                    case 0:
                        return 0;
                    case 1:
                        if (a(r)) return o.deepMap(r, f);
                        if (r instanceof n) return r.toNumber();
                        if (c(r)) {
                            var l = Number(r);
                            if (isNaN(l) && (l = Number(r.valueOf())), isNaN(l)) throw new SyntaxError(r.toString() + " is no valid number");
                            return l
                        }
                        if (u(r) || null === r) return +r;
                        if (s(r)) return r;
                        if (r instanceof i) throw new Error("Second argument with valueless unit expected");
                        throw new e.error.UnsupportedTypeError("number", e["typeof"](r));
                    case 2:
                        if (r instanceof i && c(t) || t instanceof i) return r.toNumber(t);
                        throw new e.error.UnsupportedTypeError("number", e["typeof"](r), e["typeof"](t));
                    default:
                        throw new e.error.ArgumentsError("number", arguments.length, 0, 1)
                }
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = e.expression.Parser;
            e.parser = function () {
                return new r
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            e.chain = function (r) {
                return new e.chaining.Chain(r)
            }, e.select = function (r) {
                return console && "function" == typeof console.log && console.log('WARNING: Function "select" is renamed to "chain". It will be deprecated in v2.0.'), e.select = e.chain, e.chaining.Chain.prototype.select = e.select, e.chain(r)
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.collection,
                i = r.number,
                o = r.number.isNumber,
                a = n.isCollection;
            e.string = function s(r) {
                switch (arguments.length) {
                    case 0:
                        return "";
                    case 1:
                        return o(r) ? i.format(r) : a(r) ? n.deepMap(r, s) : null === r ? "null" : r.toString();
                    default:
                        throw new e.error.ArgumentsError("string", arguments.length, 0, 1)
                }
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(11),
                o = e.collection,
                a = o.isCollection,
                s = r.string.isString;
            e.unit = function u(r) {
                switch (arguments.length) {
                    case 1:
                        var t = arguments[0];
                        if (t instanceof i) return t.clone();
                        if (s(t)) {
                            if (i.isValuelessUnit(t)) return new i(null, t);
                            var c = i.parse(t);
                            if (c) return c;
                            throw new SyntaxError('String "' + t + '" is no valid unit')
                        }
                        if (a(r)) return o.deepMap(r, u);
                        throw new TypeError("A string or a number and string expected in function unit");
                    case 2:
                        return arguments[0] instanceof n ? new i(arguments[0].toNumber(), arguments[1]) : new i(arguments[0], arguments[1]);
                    default:
                        throw new e.error.ArgumentsError("unit", arguments.length, 1, 2)
                }
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.expression.parse,
                o = e.collection,
                a = n.string.isString,
                s = o.isCollection;
            e.compile = function (r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("compile", arguments.length, 1);
                if (a(r)) return i(r).compile(e);
                if (s(r)) return o.deepMap(r, function (r) {
                    return i(r).compile(e)
                });
                throw new TypeError("String, array, or matrix expected")
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.expression.parse,
                i = e.collection,
                o = r.string.isString,
                a = i.isCollection;
            e.eval = function (r, t) {
                if (1 != arguments.length && 2 != arguments.length) throw new e.error.ArgumentsError("eval", arguments.length, 1, 2);
                if (t = t || {}, o(r)) return n(r).compile(e).eval(t);
                if (a(r)) return i.deepMap(r, function (r) {
                    return n(r).compile(e).eval(t)
                });
                throw new TypeError("String, array, or matrix expected")
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(12);
            e.help = function (t) {
                if (1 != arguments.length) throw new SyntaxError("Wrong number of arguments in function help (" + arguments.length + " provided, 1 expected)");
                var n = null;
                if (t instanceof String || "string" == typeof t) n = t;
                else {
                    var i;
                    for (i in e)
                        if (e.hasOwnProperty(i) && t === e[i]) {
                            n = i;
                            break
                        }
                }
                var o = e.expression.docs[n];
                if (!n) throw new Error('Cannot find "' + t + '" in math.js');
                if (!o) throw new Error('No documentation found on "' + n + '"');
                return new r(o)
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var t = e.expression.parse;
            e.parse = function (e, r) {
                return t.apply(t, arguments)
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = e.collection,
                a = r.number.isNumber,
                s = r["boolean"].isBoolean,
                u = i.isComplex,
                c = o.isCollection;
            e.abs = function f(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("abs", arguments.length, 1);
                if (a(r)) return Math.abs(r);
                if (u(r)) {
                    var t = Math.abs(r.re),
                        i = Math.abs(r.im);
                    if (t >= i) {
                        var l = i / t;
                        return t * Math.sqrt(1 + l * l)
                    }
                    var p = t / i;
                    return i * Math.sqrt(1 + p * p)
                }
                if (r instanceof n) return r.abs();
                if (c(r)) return o.deepMap(r, f, !0);
                if (s(r) || null === r) return Math.abs(r);
                throw new e.error.UnsupportedTypeError("abs", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = t(11),
                a = e.collection,
                s = r["boolean"].isBoolean,
                u = r.number.isNumber,
                c = r.string.isString,
                f = i.isComplex,
                l = o.isUnit,
                p = a.isCollection;
            e.add = function m(r, t) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("add", arguments.length, 2);
                if (u(r)) {
                    if (u(t)) return r + t;
                    if (f(t)) return new i(r + t.re, t.im)
                }
                if (f(r)) {
                    if (f(t)) return new i(r.re + t.re, r.im + t.im);
                    if (u(t)) return new i(r.re + t, r.im)
                }
                if (l(r) && l(t)) {
                    if (null == r.value) throw new Error("Parameter x contains a unit with undefined value");
                    if (null == t.value) throw new Error("Parameter y contains a unit with undefined value");
                    if (!r.equalBase(t)) throw new Error("Units do not match");
                    var o = r.clone();
                    return o.value += t.value, o.fixPrefix = !1, o
                }
                if (r instanceof n) return u(t) ? t = n.convert(t) : (s(t) || null === t) && (t = new n(t ? 1 : 0)), t instanceof n ? r.plus(t) : m(r.toNumber(), t);
                if (t instanceof n) return u(r) ? r = n.convert(r) : (s(r) || null === r) && (r = new n(r ? 1 : 0)), r instanceof n ? r.plus(t) : m(r, t.toNumber());
                if (p(r) || p(t)) return a.deepMap2(r, t, m);
                if (c(r) || c(t)) return r + t;
                if (s(r) || null === r) return m(+r, t);
                if (s(t) || null === t) return m(r, +t);
                throw new e.error.UnsupportedTypeError("add", e["typeof"](r), e["typeof"](t))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = e.collection,
                a = r.number.isNumber,
                s = r["boolean"].isBoolean,
                u = o.isCollection,
                c = i.isComplex;
            e.ceil = function f(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("ceil", arguments.length, 1);
                if (a(r)) return Math.ceil(r);
                if (c(r)) return new i(Math.ceil(r.re), Math.ceil(r.im));
                if (r instanceof n) return r.ceil();
                if (u(r)) return o.deepMap(r, f, !0);
                if (s(r) || null === r) return Math.ceil(r);
                throw new e.error.UnsupportedTypeError("ceil", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = e.collection,
                a = r.number.isNumber,
                s = r["boolean"].isBoolean,
                u = i.isComplex,
                c = o.isCollection;
            e.cube = function f(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("cube", arguments.length, 1);
                if (a(r)) return r * r * r;
                if (u(r)) return e.multiply(e.multiply(r, r), r);
                if (r instanceof n) return r.times(r).times(r);
                if (c(r)) return o.deepMap(r, f);
                if (s(r) || null === r) return f(+r);
                throw new e.error.UnsupportedTypeError("cube", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(e, r) {
                var t = r.re * r.re + r.im * r.im;
                return 0 != t ? new o((e.re * r.re + e.im * r.im) / t, (e.im * r.re - e.re * r.im) / t) : new o(0 != e.re ? e.re / 0 : 0, 0 != e.im ? e.im / 0 : 0)
            }
            var n = t(175),
                i = e.type.BigNumber,
                o = t(7),
                a = (e.type.Matrix, t(11)),
                s = n.number.isNumber,
                u = n["boolean"].isBoolean,
                c = o.isComplex,
                f = a.isUnit;
            e._divide = function l(t, n) {
                if (s(t)) {
                    if (s(n)) return t / n;
                    if (c(n)) return r(new o(t, 0), n)
                }
                if (c(t)) {
                    if (c(n)) return r(t, n);
                    if (s(n)) return r(t, new o(n, 0))
                }
                if (t instanceof i) return s(n) ? n = i.convert(n) : (u(n) || null === n) && (n = new i(n ? 1 : 0)), n instanceof i ? t.div(n) : l(t.toNumber(), n);
                if (n instanceof i) return s(t) ? t = i.convert(t) : (u(t) || null === t) && (t = new i(t ? 1 : 0)), t instanceof i ? t.div(n) : l(t, n.toNumber());
                if (f(t) && s(n)) {
                    var a = t.clone();
                    return a.value = (null === a.value ? a._normalize(1) : a.value) / n, a
                }
                if (u(t) || null === t) return l(+t, n);
                if (u(n) || null === n) return l(t, +n);
                throw new e.error.UnsupportedTypeError("divide", e["typeof"](t), e["typeof"](n))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = e.collection,
                t = r.isCollection;
            e.divide = function (n, i) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("divide", arguments.length, 2);
                return t(n) ? t(i) ? e.multiply(n, e.inv(i)) : r.deepMap2(n, i, e._divide) : t(i) ? e.multiply(n, e.inv(i)) : e._divide(n, i)
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = e.collection;
            e.dotDivide = function (t, n) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("dotDivide", arguments.length, 2);
                return r.deepMap2(t, n, e.divide)
            }, e.edivide = function () {
                throw new Error("Function edivide is renamed to dotDivide")
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = (t(175), e.collection);
            e.dotMultiply = function (t, n) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("dotMultiply", arguments.length, 2);
                return r.deepMap2(t, n, e.multiply)
            }, e.emultiply = function () {
                throw new Error("Function emultiply is renamed to dotMultiply")
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = (t(175), e.collection);
            e.dotPow = function (t, n) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("dotPow", arguments.length, 2);
                return r.deepMap2(t, n, e.pow)
            }, e.epow = function () {
                throw new Error("Function epow is renamed to dotPow")
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = (e.type.Matrix, e.collection),
                a = r.number.isNumber,
                s = r["boolean"].isBoolean,
                u = i.isComplex,
                c = o.isCollection;
            e.exp = function f(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("exp", arguments.length, 1);

                if (a(r)) return Math.exp(r);
                if (u(r)) {
                    var t = Math.exp(r.re);
                    return new i(t * Math.cos(r.im), t * Math.sin(r.im))
                }
                if (r instanceof n) return r.exp();
                if (c(r)) return o.deepMap(r, f);
                if (s(r) || null === r) return Math.exp(r);
                throw new e.error.UnsupportedTypeError("exp", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = e.collection,
                a = r.number.isNumber,
                s = r["boolean"].isBoolean,
                u = i.isComplex,
                c = o.isCollection;
            e.fix = function f(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("fix", arguments.length, 1);
                if (a(r)) return r > 0 ? Math.floor(r) : Math.ceil(r);
                if (u(r)) return new i(r.re > 0 ? Math.floor(r.re) : Math.ceil(r.re), r.im > 0 ? Math.floor(r.im) : Math.ceil(r.im));
                if (r instanceof n) return r.isNegative() ? r.ceil() : r.floor();
                if (c(r)) return o.deepMap(r, f, !0);
                if (s(r) || null === r) return f(+r);
                throw new e.error.UnsupportedTypeError("fix", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = e.collection,
                a = r.number.isNumber,
                s = r["boolean"].isBoolean,
                u = i.isComplex,
                c = o.isCollection;
            e.floor = function f(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("floor", arguments.length, 1);
                if (a(r)) return Math.floor(r);
                if (u(r)) return new i(Math.floor(r.re), Math.floor(r.im));
                if (r instanceof n) return r.floor();
                if (c(r)) return o.deepMap(r, f, !0);
                if (s(r) || null === r) return f(+r);
                throw new e.error.UnsupportedTypeError("floor", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(e, r) {
                if (!e.isInt() || !r.isInt()) throw new Error("Parameters in function gcd must be integer numbers");
                for (var t = new i(0); !r.isZero();) {
                    var n = e.mod(r);
                    e = r, r = n
                }
                return e.lt(t) ? e.neg() : e
            }
            var n = t(175),
                i = e.type.BigNumber,
                o = e.collection,
                a = n.number.isNumber,
                s = n["boolean"].isBoolean,
                u = n.number.isInteger,
                c = o.isCollection;
            e.gcd = function f(t) {
                var n, l = arguments[0],
                    p = arguments[1];
                if (2 == arguments.length) {
                    if (a(l) && a(p)) {
                        if (!u(l) || !u(p)) throw new Error("Parameters in function gcd must be integer numbers");
                        for (; 0 != p;) n = l % p, l = p, p = n;
                        return 0 > l ? -l : l
                    }
                    if (c(l) || c(p)) return o.deepMap2(l, p, f);
                    if (l instanceof i) return a(p) ? p = i.convert(p) : (s(p) || null === p) && (p = new i(p ? 1 : 0)), p instanceof i ? r(l, p) : f(l.toNumber(), p);
                    if (p instanceof i) return a(l) ? l = i.convert(l) : (s(l) || null === l) && (l = new i(l ? 1 : 0)), l instanceof i ? r(l, p) : f(l.toNumber(), p);
                    if (s(l) || null === l) return f(+l, p);
                    if (s(p) || null === p) return f(l, +p);
                    throw new e.error.UnsupportedTypeError("gcd", e["typeof"](l), e["typeof"](p))
                }
                if (arguments.length > 2) {
                    for (var m = 1; m < arguments.length; m++) l = f(l, arguments[m]);
                    return l
                }
                throw new SyntaxError("Function gcd expects two or more arguments")
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(e, r) {
                if (!e.isInt() || !r.isInt()) throw new Error("Parameters in function lcm must be integer numbers");
                if (e.isZero() || r.isZero()) return new i(0);
                for (var t = e.times(r); !r.isZero();) {
                    var n = r;
                    r = e.mod(n), e = n
                }
                return t.div(e).abs()
            }
            var n = t(175),
                i = e.type.BigNumber,
                o = e.collection,
                a = n.number.isNumber,
                s = n["boolean"].isBoolean,
                u = n.number.isInteger,
                c = o.isCollection;
            e.lcm = function f(t) {
                var n, l = arguments[0],
                    p = arguments[1];
                if (2 == arguments.length) {
                    if (a(l) && a(p)) {
                        if (!u(l) || !u(p)) throw new Error("Parameters in function lcm must be integer numbers");
                        if (0 == l || 0 == p) return 0;
                        for (var m = l * p; 0 != p;) n = p, p = l % n, l = n;
                        return Math.abs(m / l)
                    }
                    if (c(l) || c(p)) return o.deepMap2(l, p, f);
                    if (l instanceof i) return a(p) ? p = i.convert(p) : (s(p) || null === p) && (p = new i(p ? 1 : 0)), p instanceof i ? r(l, p) : f(l.toNumber(), p);
                    if (p instanceof i) return a(l) ? l = i.convert(l) : (s(l) || null === l) && (l = new i(l ? 1 : 0)), l instanceof i ? r(l, p) : f(l.toNumber(), p);
                    if (s(l) || null === l) return f(+l, p);
                    if (s(p) || null === p) return f(l, +p);
                    throw new e.error.UnsupportedTypeError("lcm", e["typeof"](l), e["typeof"](p))
                }
                if (arguments.length > 2) {
                    for (var h = 1; h < arguments.length; h++) l = f(l, arguments[h]);
                    return l
                }
                throw new SyntaxError("Function lcm expects two or more arguments")
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = e.collection,
                a = r.number.isNumber,
                s = r["boolean"].isBoolean,
                u = i.isComplex,
                c = o.isCollection;
            e.log = function f(r, t) {
                if (1 == arguments.length) {
                    if (a(r)) return r >= 0 ? Math.log(r) : f(new i(r, 0));
                    if (u(r)) return new i(Math.log(Math.sqrt(r.re * r.re + r.im * r.im)), Math.atan2(r.im, r.re));
                    if (r instanceof n) return r.isNegative() ? f(r.toNumber()) : r.ln();
                    if (c(r)) return o.deepMap(r, f);
                    if (s(r) || null === r) return f(+r);
                    throw new e.error.UnsupportedTypeError("log", e["typeof"](r))
                }
                if (2 == arguments.length) return e.divide(f(r), f(t));
                throw new e.error.ArgumentsError("log", arguments.length, 1, 2)
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = e.collection,
                a = r.number.isNumber,
                s = r["boolean"].isBoolean,
                u = i.isComplex,
                c = o.isCollection;
            e.log10 = function f(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("log10", arguments.length, 1);
                if (a(r)) return r >= 0 ? Math.log(r) / Math.LN10 : f(new i(r, 0));
                if (r instanceof n) return r.isNegative() ? f(r.toNumber()) : r.log();
                if (u(r)) return new i(Math.log(Math.sqrt(r.re * r.re + r.im * r.im)) / Math.LN10, Math.atan2(r.im, r.re) / Math.LN10);
                if (c(r)) return o.deepMap(r, f);
                if (s(r) || null === r) return f(+r);
                throw new e.error.UnsupportedTypeError("log10", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(e, r) {
                if (r > 0) return e - r * Math.floor(e / r);
                if (0 == r) return e;
                throw new Error("Cannot calculate mod for a negative divisor")
            }
            var n = t(175),
                i = e.type.BigNumber,
                o = e.collection,
                a = n.number.isNumber,
                s = n["boolean"].isBoolean,
                u = o.isCollection;
            e.mod = function c(t, n) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("mod", arguments.length, 2);
                if (a(t) && a(n)) return r(t, n);
                if (t instanceof i) return a(n) ? n = i.convert(n) : (s(n) || null === n) && (n = new i(n ? 1 : 0)), n instanceof i ? n.isZero() ? t : t.mod(n) : c(t.toNumber(), n);
                if (n instanceof i) return a(t) ? t = i.convert(t) : (s(t) || null === t) && (t = new i(t ? 1 : 0)), t instanceof i ? n.isZero() ? t : t.mod(n) : c(t, n.toNumber());
                if (u(t) || u(n)) return o.deepMap2(t, n, c);
                if (s(t) || null === t) return c(+t, n);
                if (s(n) || null === n) return c(t, +n);
                throw new e.error.UnsupportedTypeError("mod", e["typeof"](t), e["typeof"](n))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(e, r) {
                return 0 == e.im ? 0 == r.im ? new o(e.re * r.re, 0) : 0 == r.re ? new o(0, e.re * r.im) : new o(e.re * r.re, e.re * r.im) : 0 == e.re ? 0 == r.im ? new o(0, e.im * r.re) : 0 == r.re ? new o(-e.im * r.im, 0) : new o(-e.im * r.im, e.im * r.re) : 0 == r.im ? new o(e.re * r.re, e.im * r.re) : 0 == r.re ? new o(-e.im * r.im, e.re * r.im) : new o(e.re * r.re - e.im * r.im, e.re * r.im + e.im * r.re)
            }
            var n = t(175),
                i = e.type.BigNumber,
                o = t(7),
                a = e.type.Matrix,
                s = t(11),
                u = e.collection,
                c = n.number.isNumber,
                f = n["boolean"].isBoolean,
                l = o.isComplex,
                p = Array.isArray,
                m = s.isUnit;
            e.multiply = function h(t, n) {
                var s;
                if (2 != arguments.length) throw new e.error.ArgumentsError("multiply", arguments.length, 2);
                if (c(t)) {
                    if (c(n)) return t * n;
                    if (l(n)) return r(new o(t, 0), n);
                    if (m(n)) return s = n.clone(), s.value = null === s.value ? s._normalize(t) : s.value * t, s
                }
                if (l(t)) {
                    if (c(n)) return r(t, new o(n, 0));
                    if (l(n)) return r(t, n)
                }
                if (t instanceof i) return c(n) ? n = i.convert(n) : (f(n) || null === n) && (n = new i(n ? 1 : 0)), n instanceof i ? t.times(n) : h(t.toNumber(), n);
                if (n instanceof i) return c(t) ? t = i.convert(t) : (f(t) || null === t) && (t = new i(t ? 1 : 0)), t instanceof i ? t.times(n) : h(t, n.toNumber());
                if (m(t) && c(n)) return s = t.clone(), s.value = null === s.value ? s._normalize(n) : s.value * n, s;
                if (p(t)) {
                    var g = e.matrix(t),
                        d = g.multiply(n);
                    return d instanceof a ? n instanceof a ? d : d.valueOf() : d
                }
                if (t instanceof a) return t.multiply(n);
                if (p(n)) return u.deepMap2(t, n, h);
                if (n instanceof a) {
                    var v = function (e) {
                        return h(t, e)
                    };
                    return u.deepMap(n, v, !0)
                }
                if (f(t) || null === t) return h(+t, n);
                if (f(n) || null === n) return h(t, +n);
                throw new e.error.UnsupportedTypeError("multiply", e["typeof"](t), e["typeof"](n))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = e.type.Matrix,
                a = r.number.isNumber,
                s = r["boolean"].isBoolean,
                u = i.isComplex,
                c = Array.isArray;
            e.norm = function f(r, t) {
                if (arguments.length < 1 || arguments.length > 2) throw new e.error.ArgumentsError("abs", arguments.length, 1, 2);
                if (a(r)) return Math.abs(r);
                if (u(r)) {
                    var i = Math.abs(r.re),
                        l = Math.abs(r.im);
                    if (i >= l) {
                        var p = l / i;
                        return i * Math.sqrt(1 + p * p)
                    }
                    var m = i / l;
                    return l * Math.sqrt(1 + m * m)
                }
                if (r instanceof n) return r.abs();
                if (s(r) || null === r) return Math.abs(r);
                if (c(r)) return f(e.matrix(r), t);
                if (r instanceof o) {
                    var h = r.size();
                    if (null == t && (t = 2), 1 == h.length) {
                        if (t === Number.POSITIVE_INFINITY || "inf" === t) {
                            var g;
                            return r.forEach(function (r) {
                                var t = e.abs(r);
                                (!g || e.larger(t, g)) && (g = t)
                            }, !0), g
                        }
                        if (t === Number.NEGATIVE_INFINITY || "-inf" === t) {
                            var g;
                            return r.forEach(function (r) {
                                var t = e.abs(r);
                                (!g || e.smaller(t, g)) && (g = t)
                            }, !0), g
                        }
                        if ("fro" === t) return f(r);
                        if (a(t) && !isNaN(t)) {
                            if (!e.equal(t, 0)) {
                                var g = 0;
                                return r.forEach(function (r) {
                                    g = e.add(e.pow(e.abs(r), t), g)
                                }, !0), e.pow(g, 1 / t)
                            }
                            return Number.POSITIVE_INFINITY
                        }
                        throw new Error("Unsupported parameter value")
                    }
                    if (2 == h.length) {
                        if (1 == t) {
                            var d = [];
                            return r.forEach(function (r, t) {
                                var n = t[1];
                                d[n] = e.add(d[n] || 0, e.abs(r))
                            }, !0), e.max(d)
                        }
                        if (t == Number.POSITIVE_INFINITY || "inf" === t) {
                            var v = [];
                            return r.forEach(function (r, t) {
                                var n = t[0];
                                v[n] = e.add(v[n] || 0, e.abs(r))
                            }, !0), e.max(v)
                        }
                        if ("fro" === t) return e.sqrt(r.transpose().multiply(r).trace());
                        if (2 == t) throw new Error("Unsupported parameter value, missing implementation of matrix singular value decomposition");
                        throw new Error("Unsupported parameter value")
                    }
                }
                throw new e.error.UnsupportedTypeError("norm", r)
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(e, r) {
                var t = void 0 != r ? r : 2,
                    n = 0 > t;
                if (n && (t = -t), 0 == t) throw new Error("Root must be non-zero");
                if (0 > e && Math.abs(t) % 2 != 1) throw new Error("Root must be odd when a is negative.");
                if (0 == e) return 0;
                if (!Number.isFinite(e)) return n ? 0 : e;
                var i = 1e-16,
                    o = 1,
                    a = 0,
                    s = 100;
                do {
                    var u = (e / Math.pow(o, t - 1) - o) / t;
                    o += u, a++
                } while (Math.abs(u) > i && s > a);
                return n ? 1 / o : o
            }

            function i(e, r) {
                var t = void 0 != r ? r : new a(2),
                    n = new a(0),
                    i = new a(1),
                    o = t.isNegative();
                if (o && (t = t.negated()), t.isZero()) throw new Error("Root must be non-zero");
                if (e.isNegative() && !t.abs().mod(2).equals(1)) throw new Error("Root must be odd when a is negative.");
                if (e.isZero()) return n;
                if (!e.isFinite()) return o ? n : e;
                var s = i,
                    u = 0,
                    c = 100;
                do {
                    var f = s,
                        l = e.div(s.pow(t.minus(1))).minus(s).div(t);
                    s = s.plus(l), u++
                } while (!s.equals(f) && c > u);
                return o ? i.div(s) : s
            }
            var o = t(175),
                a = e.type.BigNumber,
                s = e.collection,
                u = o.number.isNumber,
                c = o["boolean"].isBoolean,
                f = s.isCollection;
            e.nthRoot = function l(t, o) {
                if (1 != arguments.length && 2 != arguments.length) throw new e.error.ArgumentsError("nthRoot", arguments.length, 1, 2);
                switch (arguments.length) {
                    case 1:
                        if (u(t)) return r(t);
                        if (t instanceof a) return i(t);
                        if (f(t)) return s.deepMap(x, l);
                        if (c(t) || null === t) return l(+t);
                        break;
                    case 2:
                        if (u(t)) {
                            if (u(o)) return r(t, o);
                            if (o instanceof a) return t = a.convert(t), t instanceof a ? i(t, o) : r(t, o.toNumber())
                        } else {
                            if (t instanceof a) return u(o) && (o = a.convert(o)), o instanceof a ? i(t, o) : r(t.toNumber(), o);
                            if (f(t) && !f(o)) return s.deepMap2(t, o, l)
                        }
                        if (c(t) || null === t) return l(+t, o);
                        if (c(o) || null === o) return l(t, +o);
                        break;
                    default:
                        throw new e.error.ArgumentsError("nthRoot", arguments.length, 1, 2)
                }
                if (c(x) || null === x) return 2 == arguments.length ? l(+x, n) : l(+x);
                throw new e.error.UnsupportedTypeError("nthRoot", e["typeof"](t), e["typeof"](o))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(r, t) {
                var n = e.log(r),
                    i = e.multiply(n, t);
                return e.exp(i)
            }
            var n = t(175),
                i = e.type.BigNumber,
                o = t(7),
                a = e.type.Matrix,
                s = n.array,
                u = n.number.isNumber,
                c = n["boolean"].isBoolean,
                f = Array.isArray,
                l = n.number.isInteger,
                p = o.isComplex;
            e.pow = function m(t, n) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("pow", arguments.length, 2);
                if (u(t)) {
                    if (u(n)) return l(n) || t >= 0 ? Math.pow(t, n) : r(new o(t, 0), new o(n, 0));
                    if (p(n)) return r(new o(t, 0), n)
                }
                if (p(t)) {
                    if (u(n)) return r(t, new o(n, 0));
                    if (p(n)) return r(t, n)
                }
                if (t instanceof i) return u(n) ? n = i.convert(n) : (c(n) || null === n) && (n = new i(n ? 1 : 0)), n instanceof i ? n.isInteger() || !t.isNegative() ? t.pow(n) : m(t.toNumber(), n.toNumber()) : m(t.toNumber(), n);
                if (n instanceof i) return u(t) ? t = i.convert(t) : (c(t) || null === t) && (t = new i(t ? 1 : 0)), t instanceof i ? n.isInteger() && !t.isNegative() ? t.pow(n) : m(t.toNumber(), n.toNumber()) : m(t, n.toNumber());
                if (f(t)) {
                    if (!u(n) || !l(n) || 0 > n) throw new TypeError("For A^b, b must be a positive integer (value is " + n + ")");
                    var h = s.size(t);
                    if (2 != h.length) throw new Error("For A^b, A must be 2 dimensional (A has " + h.length + " dimensions)");
                    if (h[0] != h[1]) throw new Error("For A^b, A must be square (size is " + h[0] + "x" + h[1] + ")");
                    for (var g = e.eye(h[0]).valueOf(), d = t; n >= 1;) 1 == (1 & n) && (g = e.multiply(d, g)), n >>= 1, d = e.multiply(d, d);
                    return g
                }
                if (t instanceof a) return e.matrix(m(t.valueOf(), n));
                if (c(t) || null === t) return m(+t, n);
                if (c(n) || null === n) return m(t, +n);
                throw new e.error.UnsupportedTypeError("pow", e["typeof"](t), e["typeof"](n))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(e, r) {
                return parseFloat(p(e, r))
            }
            var n = t(175),
                i = e.type.BigNumber,
                o = t(7),
                a = e.collection,
                s = n.number.isNumber,
                u = n.number.isInteger,
                c = n["boolean"].isBoolean,
                f = o.isComplex,
                l = a.isCollection,
                p = n.number.toFixed;
            e.round = function m(t, n) {
                if (1 != arguments.length && 2 != arguments.length) throw new e.error.ArgumentsError("round", arguments.length, 1, 2);
                if (void 0 == n) {
                    if (s(t)) return Math.round(t);
                    if (f(t)) return new o(Math.round(t.re), Math.round(t.im));
                    if (t instanceof i) return t.toDecimalPlaces(0);
                    if (l(t)) return a.deepMap(t, m);
                    if (c(t) || null === t) return Math.round(t);
                    throw new e.error.UnsupportedTypeError("round", e["typeof"](t))
                }
                if (!s(n) || !u(n)) {
                    if (!(n instanceof i)) {
                        if (c(n) || null === t) return m(t, +n);
                        throw new TypeError("Number of decimals in function round must be an integer")
                    }
                    n = parseFloat(n.valueOf())
                }
                if (0 > n || n > 15) throw new Error("Number of decimals in function round must be in te range of 0-15");
                if (s(t)) return r(t, n);
                if (f(t)) return new o(r(t.re, n), r(t.im, n));
                if (t instanceof i) return t.toDecimalPlaces(n);
                if (l(t) || l(n)) return a.deepMap2(t, n, m);
                if (c(t) || null === t) return m(+t, n);
                throw new e.error.UnsupportedTypeError("round", e["typeof"](t), e["typeof"](n))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = e.collection,
                a = r.number,
                s = r.number.isNumber,
                u = r["boolean"].isBoolean,
                c = i.isComplex,
                f = o.isCollection;
            e.sign = function l(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("sign", arguments.length, 1);
                if (s(r)) return a.sign(r);
                if (c(r)) {
                    var t = Math.sqrt(r.re * r.re + r.im * r.im);
                    return new i(r.re / t, r.im / t)
                }
                if (r instanceof n) return new n(r.cmp(0));
                if (f(r)) return o.deepMap(r, l, !0);
                if (u(r) || null === r) return a.sign(r);
                throw new e.error.UnsupportedTypeError("sign", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = e.collection,
                a = r.number.isNumber,
                s = r["boolean"].isBoolean,
                u = i.isComplex,
                c = o.isCollection;
            e.sqrt = function f(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("sqrt", arguments.length, 1);
                if (a(r)) return r >= 0 ? Math.sqrt(r) : f(new i(r, 0));
                if (u(r)) {
                    var t, l, p = Math.sqrt(r.re * r.re + r.im * r.im);
                    return t = r.re >= 0 ? .5 * Math.sqrt(2 * (p + r.re)) : Math.abs(r.im) / Math.sqrt(2 * (p - r.re)), l = r.re <= 0 ? .5 * Math.sqrt(2 * (p - r.re)) : Math.abs(r.im) / Math.sqrt(2 * (p + r.re)), r.im >= 0 ? new i(t, l) : new i(t, -l)
                }
                if (r instanceof n) return r.isNegative() ? f(r.toNumber()) : r.sqrt();
                if (c(r)) return o.deepMap(r, f, !0);
                if (s(r) || null === r) return f(+r);
                throw new e.error.UnsupportedTypeError("sqrt", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = e.collection,
                a = r.number.isNumber,
                s = r["boolean"].isBoolean,
                u = i.isComplex,
                c = o.isCollection;
            e.square = function f(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("square", arguments.length, 1);
                if (a(r)) return r * r;
                if (u(r)) return e.multiply(r, r);
                if (r instanceof n) return r.times(r);
                if (c(r)) return o.deepMap(r, f, !0);
                if (s(r) || null === r) return r * r;
                throw new e.error.UnsupportedTypeError("square", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = (e.type.Matrix, t(11)),
                a = e.collection,
                s = r["boolean"].isBoolean,
                u = r.number.isNumber,
                c = i.isComplex,
                f = o.isUnit,
                l = a.isCollection;
            e.subtract = function p(r, t) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("subtract", arguments.length, 2);
                if (u(r)) {
                    if (u(t)) return r - t;
                    if (c(t)) return new i(r - t.re, -t.im)
                } else if (c(r)) {
                    if (u(t)) return new i(r.re - t, r.im);
                    if (c(t)) return new i(r.re - t.re, r.im - t.im)
                }
                if (r instanceof n) return u(t) ? t = n.convert(t) : (s(t) || null === t) && (t = new n(t ? 1 : 0)), t instanceof n ? r.minus(t) : p(r.toNumber(), t);
                if (t instanceof n) return u(r) ? r = n.convert(r) : (s(r) || null === r) && (r = new n(r ? 1 : 0)), r instanceof n ? r.minus(t) : p(r, t.toNumber());
                if (f(r) && f(t)) {
                    if (null == r.value) throw new Error("Parameter x contains a unit with undefined value");
                    if (null == t.value) throw new Error("Parameter y contains a unit with undefined value");
                    if (!r.equalBase(t)) throw new Error("Units do not match");
                    var o = r.clone();
                    return o.value -= t.value, o.fixPrefix = !1, o
                }
                if (l(r) || l(t)) return a.deepMap2(r, t, p);
                if (s(r) || null === r) return p(+r, t);
                if (s(t) || null === t) return p(r, +t);
                throw new e.error.UnsupportedTypeError("subtract", e["typeof"](r), e["typeof"](t))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = t(7),
                a = t(11),
                s = e.collection,
                u = n.number.isNumber,
                c = n["boolean"].isBoolean,
                f = n.string.isString,
                l = o.isComplex,
                p = a.isUnit,
                m = s.isCollection;
            e.unaryMinus = function h(t) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("unaryMinus", arguments.length, 1);
                if (u(t)) return -t;
                if (l(t)) return new o(-t.re, -t.im);
                if (t instanceof i) return t.neg();
                if (p(t)) {
                    var n = t.clone();
                    return n.value = -t.value, n
                }
                if (m(t)) return s.deepMap(t, h, !0);
                if (c(t) || f(t) || null === t) return "bignumber" == r.number ? new i(-t) : -t;
                throw new e.error.UnsupportedTypeError("unaryMinus", e["typeof"](t))
            }, e.unary = function () {
                throw new Error("Function unary is deprecated. Use unaryMinus instead.")
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = t(7),
                a = t(11),
                s = e.collection,
                u = n.number.isNumber,
                c = n["boolean"].isBoolean,
                f = n.string.isString,
                l = o.isComplex,
                p = a.isUnit,
                m = s.isCollection;
            e.unaryPlus = function h(t) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("unaryPlus", arguments.length, 1);
                if (u(t)) return t;
                if (l(t)) return t.clone();
                if (t instanceof i) return t;
                if (p(t)) return t.clone();
                if (m(t)) return s.deepMap(t, h, !0);
                if (c(t) || f(t) || null === t) return "bignumber" == r.number ? new i(+t) : +t;
                throw new e.error.UnsupportedTypeError("unaryPlus", e["typeof"](t))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            function n(t, n) {
                for (var i, o, a, s = 0, u = 1, c = 1, f = 0; n;) o = Math.floor(t / n), a = t % n, i = s, s = u - o * s, u = i, i = c, c = f - o * c, f = i, t = n, n = a;
                var l;
                return l = 0 > t ? [-t, -u, -f] : [t, t ? u : 0, f], "array" === r.matrix ? l : e.matrix(l)
            }

            function i(t, n) {
                for (var i, o, s, u = new a(0), c = new a(0), f = new a(1), l = new a(1), p = new a(0); !n.isZero();) o = t.div(n).floor(), s = t.mod(n), i = c, c = f.minus(o.times(c)), f = i, i = l, l = p.minus(o.times(l)), p = i, t = n, n = s;
                var m;
                return m = t.lt(u) ? [t.neg(), f.neg(), p.neg()] : [t, t.isZero() ? 0 : f, p], "array" === r.matrix ? m : e.matrix(m)
            }
            var o = t(175),
                a = (e.type.Matrix, e.type.BigNumber),
                s = o.number.isNumber,
                u = o["boolean"].isBoolean,
                c = o.number.isInteger;
            e.xgcd = function f(r, t) {
                if (2 == arguments.length) {
                    if (s(r) && s(t)) {
                        if (!c(r) || !c(t)) throw new Error("Parameters in function xgcd must be integer numbers");
                        return n(r, t)
                    }
                    if (r instanceof a) return s(t) ? t = a.convert(t) : (u(t) || null === t) && (t = new a(t ? 1 : 0)), t instanceof a ? i(r, t) : f(r.toNumber(), t);
                    if (t instanceof a) return s(r) ? r = a.convert(r) : (u(r) || null === r) && (r = new a(r ? 1 : 0)), r instanceof a ? i(r, t) : f(r.toNumber(), t);
                    if (u(r) || null === r) return f(+r, t);
                    if (u(t) || null === t) return f(r, +t);
                    throw new e.error.UnsupportedTypeError("xgcd", e["typeof"](r), e["typeof"](t))
                }
                throw new SyntaxError("Function xgcd expects two arguments")
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = (e.type.Matrix, t(11), e.collection),
                a = n["boolean"].isBoolean,
                s = n.number.isInteger,
                u = n.number.isNumber,
                c = o.isCollection,
                f = n.bignumber.and;
            e.bitAnd = function l(r, t) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("bitAnd", arguments.length, 2);
                if (u(r) && u(t)) {
                    if (!s(r) || !s(t)) throw new Error("Parameters in function bitAnd must be integer numbers");
                    return r & t
                }
                if (c(r) || c(t)) return o.deepMap2(r, t, l);
                if (a(r) || null === r) return l(+r, t);
                if (a(t) || null === t) return l(r, +t);
                if (r instanceof i) return u(t) && (t = i.convert(t)), t instanceof i ? f(r, t) : l(r.toNumber(), t);
                if (t instanceof i) return u(r) && (r = i.convert(r)), r instanceof i ? f(r, t) : l(r, t.toNumber());
                throw new e.error.UnsupportedTypeError("bitAnd", e["typeof"](r), e["typeof"](t))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = (e.type.Matrix, t(11), e.collection),
                a = n["boolean"].isBoolean,
                s = n.number.isInteger,
                u = n.number.isNumber,
                c = o.isCollection,
                f = n.bignumber.not;
            e.bitNot = function l(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("bitNot", arguments.length, 1);
                if (u(r)) {
                    if (!s(r)) throw new Error("Parameter in function bitNot must be integer numbers");
                    return ~r
                }
                if (r instanceof i) return f(r);
                if (c(r)) return o.deepMap(r, l);
                if (a(r) || null === r) return l(+r);
                throw new e.error.UnsupportedTypeError("bitNot", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = (e.type.Matrix, t(11), e.collection),
                a = n["boolean"].isBoolean,
                s = n.number.isInteger,
                u = n.number.isNumber,
                c = o.isCollection,
                f = n.bignumber.or;
            e.bitOr = function l(r, t) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("bitOr", arguments.length, 2);
                if (u(r) && u(t)) {
                    if (!s(r) || !s(t)) throw new Error("Parameters in function bitOr must be integer numbers");
                    return r | t
                }
                if (c(r) || c(t)) return o.deepMap2(r, t, l);
                if (a(r) || null === r) return l(+r, t);
                if (a(t) || null === t) return l(r, +t);
                if (r instanceof i) return u(t) && (t = i.convert(t)), t instanceof i ? f(r, t) : l(r.toNumber(), t);
                if (t instanceof i) return u(r) && (r = i.convert(r)), r instanceof i ? f(r, t) : l(r, t.toNumber());
                throw new e.error.UnsupportedTypeError("bitOr", e["typeof"](r), e["typeof"](t))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = (e.type.Matrix, t(11), e.collection),
                a = n["boolean"].isBoolean,
                s = n.number.isInteger,
                u = n.number.isNumber,
                c = o.isCollection,
                f = n.bignumber.xor;
            e.bitXor = function l(r, t) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("bitXor", arguments.length, 2);
                if (u(r) && u(t)) {
                    if (!s(r) || !s(t)) throw new Error("Parameters in function bitXor must be integer numbers");
                    return r ^ t
                }
                if (c(r) || c(t)) return o.deepMap2(r, t, l);
                if (a(r) || null === r) return l(+r, t);
                if (a(t) || null === t) return l(r, +t);
                if (r instanceof i) return u(t) && (t = i.convert(t)), t instanceof i ? f(r, t) : l(r.toNumber(), t);
                if (t instanceof i) return u(r) && (r = i.convert(r)), r instanceof i ? f(r, t) : l(r, t.toNumber());
                throw new e.error.UnsupportedTypeError("bitXor", e["typeof"](r), e["typeof"](t))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = (e.type.Matrix, t(11), e.collection),
                a = n["boolean"].isBoolean,
                s = n.number.isInteger,
                u = n.number.isNumber,
                c = o.isCollection,
                f = n.bignumber.leftShift;
            e.leftShift = function l(r, t) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("leftShift", arguments.length, 2);
                if (u(r)) {
                    if (u(t)) {
                        if (!s(r) || !s(t)) throw new Error("Parameters in function leftShift must be integer numbers");
                        return r << t
                    }
                    if (t instanceof i) return f(i.convert(r), t)
                }
                if (u(t)) {
                    if (isFinite(t) && !s(t)) throw new Error("Parameters in function leftShift must be integer numbers");
                    if (r instanceof i) {
                        if (r.isFinite() && !r.isInteger()) throw new Error("Parameters in function leftShift must be integer numbers");
                        return r.isNaN() || isNaN(t) || 0 > t ? new i(0 / 0) : 0 == t || r.isZero() ? r : t != 1 / 0 || r.isFinite() ? 55 > t ? r.times(Math.pow(2, t) + "") : (t = i.convert(t), f(r, t)) : new i(0 / 0)
                    }
                }
                if (c(r) && u(t)) return o.deepMap2(r, t, l);
                if (a(r) || null === r) return l(+r, t);
                if (a(t) || null === t) return l(r, +t);
                if (r instanceof i) return t instanceof i ? f(r, t) : l(r.toNumber(), t);
                if (t instanceof i) return l(r, t.toNumber());
                throw new e.error.UnsupportedTypeError("leftShift", e["typeof"](r), e["typeof"](t))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = (e.type.Matrix, t(11), e.collection),
                a = n["boolean"].isBoolean,
                s = n.number.isInteger,
                u = n.number.isNumber,
                c = o.isCollection,
                f = n.bignumber.rightShift;
            e.rightArithShift = function l(r, t) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("rightArithShift", arguments.length, 2);
                if (u(r)) {
                    if (u(t)) {
                        if (!s(r) || !s(t)) throw new Error("Parameters in function rightArithShift must be integer numbers");
                        return r >> t
                    }
                    if (t instanceof i) return f(i.convert(r), t)
                }
                if (u(t)) {
                    if (isFinite(t) && !s(t)) throw new Error("Parameters in function rightArithShift must be integer numbers");
                    if (r instanceof i) {
                        if (r.isFinite() && !r.isInteger()) throw new Error("Parameters in function rightArithShift must be integer numbers");
                        return r.isNaN() || isNaN(t) || 0 > t ? new i(0 / 0) : t == 1 / 0 ? new i(r.isNegative() ? -1 : r.isFinite() ? 0 : 0 / 0) : 55 > t ? r.div(Math.pow(2, t) + "").floor() : (t = i.convert(t), f(r, t))
                    }
                }
                if (c(r) && u(t)) return o.deepMap2(r, t, l);
                if (a(r) || null === r) return l(+r, t);
                if (a(t) || null === t) return l(r, +t);
                if (r instanceof i) return t instanceof i ? f(r, t) : l(r.toNumber(), t);
                if (t instanceof i) return l(r, t.toNumber());
                throw new e.error.UnsupportedTypeError("rightArithShift", e["typeof"](r), e["typeof"](t))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = (e.type.Matrix, t(11), e.collection),
                o = n["boolean"].isBoolean,
                a = n.number.isInteger,
                s = n.number.isNumber,
                u = i.isCollection;
            e.rightLogShift = function c(r, t) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("rightLogShift", arguments.length, 2);
                if (s(r) && s(t)) {
                    if (!a(r) || !a(t)) throw new Error("Parameters in function rightLogShift must be integer numbers");
                    return r >>> t
                }
                if (u(r) && s(t)) return i.deepMap2(r, t, c);
                if (o(r) || null === r) return c(+r, t);
                if (o(t) || null === t) return c(r, +t);
                throw new e.error.UnsupportedTypeError("rightLogShift", e["typeof"](r), e["typeof"](t))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = e.collection,
                a = r.number.isNumber,
                s = r["boolean"].isBoolean,
                u = o.isCollection,
                c = i.isComplex;
            e.arg = function f(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("arg", arguments.length, 1);
                if (a(r)) return Math.atan2(0, r);
                if (c(r)) return Math.atan2(r.im, r.re);
                if (u(r)) return o.deepMap(r, f);
                if (s(r) || null === r) return f(+r);
                if (r instanceof n) return f(r.toNumber());
                throw new e.error.UnsupportedTypeError("arg", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = e.collection,
                a = r.object,
                s = r.number.isNumber,
                u = r["boolean"].isBoolean,
                c = o.isCollection,
                f = i.isComplex;
            e.conj = function l(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("conj", arguments.length, 1);
                return s(r) ? r : r instanceof n ? new n(r) : f(r) ? new i(r.re, -r.im) : c(r) ? o.deepMap(r, l) : u(r) || null === r ? +r : a.clone(r)
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = e.collection,
                a = r.object,
                s = r.number.isNumber,
                u = r["boolean"].isBoolean,
                c = o.isCollection,
                f = i.isComplex;
            e.re = function l(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("re", arguments.length, 1);
                return s(r) ? r : r instanceof n ? new n(r) : f(r) ? r.re : c(r) ? o.deepMap(r, l) : u(r) || null === r ? +r : a.clone(r)
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = e.collection,
                a = r.number.isNumber,
                s = r["boolean"].isBoolean,
                u = o.isCollection,
                c = i.isComplex;
            e.im = function f(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("im", arguments.length, 1);
                return a(r) ? 0 : r instanceof n ? new n(0) : c(r) ? r.im : u(r) ? o.deepMap(r, f) : (s(r) || null === r, 0)
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = t(11),
                a = e.collection,
                s = r.number.isNumber,
                u = r["boolean"].isBoolean,
                c = i.isComplex,
                f = o.isUnit,
                l = a.isCollection;
            e.and = function p(r, t) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("and", arguments.length, 2);
                if ((s(r) || u(r) || null === r) && (s(t) || u(t) || null === t)) return !(!r || !t);
                if (c(r)) return 0 == r.re && 0 == r.im ? !1 : p(!0, t);
                if (c(t)) return 0 == t.re && 0 == t.im ? !1 : p(r, !0);
                if (r instanceof n) return r.isZero() || r.isNaN() ? !1 : p(!0, t);
                if (t instanceof n) return t.isZero() || t.isNaN() ? !1 : p(r, !0);
                if (f(r)) return null === r.value || 0 == r.value ? !1 : p(!0, t);
                if (f(t)) return null === t.value || 0 == t.value ? !1 : p(r, !0);
                if (l(r) || l(t)) return a.deepMap2(r, t, p);
                throw new e.error.UnsupportedTypeError("and", e["typeof"](r), e["typeof"](t))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = t(11),
                a = e.collection,
                s = r.number.isNumber,
                u = r["boolean"].isBoolean,
                c = i.isComplex,
                f = o.isUnit,
                l = a.isCollection;
            e.not = function p(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("not", arguments.length, 1);
                if (s(r) || u(r) || null === r) return !r;
                if (c(r)) return 0 == r.re && 0 == r.im;
                if (r instanceof n) return r.isZero() || r.isNaN();
                if (f(r)) return null === r.value || 0 == r.value;
                if (l(r)) return a.deepMap(r, p);
                throw new e.error.UnsupportedTypeError("not", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = t(11),
                a = e.collection,
                s = r.number.isNumber,
                u = r["boolean"].isBoolean,
                c = i.isComplex,
                f = o.isUnit,
                l = a.isCollection;
            e.or = function p(r, t) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("or", arguments.length, 2);
                if ((s(r) || u(r) || null === r) && (s(t) || u(t) || null === t)) return !(!r && !t);
                if (c(r)) return 0 == r.re && 0 == r.im ? p(!1, t) : !0;
                if (c(t)) return 0 == t.re && 0 == t.im ? p(r, !1) : !0;
                if (r instanceof n) return r.isZero() || r.isNaN() ? p(!1, t) : !0;
                if (t instanceof n) return t.isZero() || t.isNaN() ? p(r, !1) : !0;
                if (f(r)) return null === r.value || 0 == r.value ? p(!1, t) : !0;
                if (f(t)) return null === t.value || 0 == t.value ? p(r, !1) : !0;
                if (l(r) || l(t)) return a.deepMap2(r, t, p);
                throw new e.error.UnsupportedTypeError("or", e["typeof"](r), e["typeof"](t))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = t(11),
                a = e.collection,
                s = r.number.isNumber,
                u = r["boolean"].isBoolean,
                c = i.isComplex,
                f = o.isUnit,
                l = a.isCollection;
            e.xor = function p(r, t) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("xor", arguments.length, 2);
                if ((s(r) || u(r) || null === r) && (s(t) || u(t) || null === t)) return !!(!!r ^ !!t);
                if (c(r)) return p(!(0 == r.re && 0 == r.im), t);
                if (c(t)) return p(r, !(0 == t.re && 0 == t.im));
                if (r instanceof n) return p(!(r.isZero() || r.isNaN()), t);
                if (t instanceof n) return p(r, !(t.isZero() || t.isNaN()));
                if (f(r)) return p(!(null === r.value || 0 == r.value), t);
                if (f(t)) return p(r, !(null === t.value || 0 == t.value));
                if (l(r) || l(t)) return a.deepMap2(r, t, p);
                throw new e.error.UnsupportedTypeError("xor", e["typeof"](r), e["typeof"](t))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(t, n, i, o) {
                if (i > o) {
                    if (t.length != n.length) throw new e.error.DimensionError(t.length, n.length);
                    for (var a = [], s = 0; s < t.length; s++) a[s] = r(t[s], n[s], i, o + 1);
                    return a
                }
                return t.concat(n)
            }
            var n = t(175),
                i = t(5),
                o = e.type.Matrix,
                a = e.collection,
                s = n.object,
                u = n.array,
                c = n.number.isNumber,
                f = n.number.isInteger,
                l = a.isCollection;
            e.concat = function (t) {
                var n, a, p = arguments.length,
                    m = -1,
                    h = !1,
                    g = [];
                for (n = 0; p > n; n++) {
                    var d = arguments[n];
                    if (d instanceof o && (h = !0), n == p - 1 && (c(d) || d instanceof i)) {
                        if (a = m, m = d.valueOf(), !f(m)) throw new TypeError("Integer number expected for dimension");
                        if (0 > m) throw new e.error.IndexError(m);
                        if (n > 0 && m > a) throw new e.error.IndexError(m, a + 1)
                    } else {
                        if (!l(d)) throw new e.error.UnsupportedTypeError("concat", e["typeof"](d));
                        var v = s.clone(d).valueOf(),
                            y = u.size(d.valueOf());
                        if (g[n] = v, a = m, m = y.length - 1, n > 0 && m != a) throw new e.error.DimensionError(a + 1, m + 1)
                    }
                }
                if (0 == g.length) throw new SyntaxError("At least one matrix expected");
                for (var x = g.shift(); g.length;) x = r(x, g.shift(), m, 0);
                return h ? e.matrix(x) : x
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(r, t) {
                var i = n.size(r),
                    o = n.size(t);
                if (1 != i.length || 1 != o.length || 3 != i[0] || 3 != o[0]) throw new RangeError("Vectors with length 3 expected (Size A = [" + i.join(", ") + "], B = [" + o.join(", ") + "])");
                return [e.subtract(e.multiply(r[1], t[2]), e.multiply(r[2], t[1])), e.subtract(e.multiply(r[2], t[0]), e.multiply(r[0], t[2])), e.subtract(e.multiply(r[0], t[1]), e.multiply(r[1], t[0]))]
            }
            var n = t(169),
                i = e.type.Matrix;
            e.cross = function (t, n) {
                if (t instanceof i) {
                    if (n instanceof i) return e.matrix(r(t.toArray(), n.toArray()));
                    if (Array.isArray(n)) return e.matrix(r(t.toArray(), n))
                } else if (Array.isArray(t)) {
                    if (n instanceof i) return e.matrix(r(t, n.toArray()));
                    if (Array.isArray(n)) return r(t, n)
                }
                throw new e.error.UnsupportedTypeError("cross", e["typeof"](t), e["typeof"](n))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(r, t, n) {
                if (1 == t) return o.clone(r[0][0]);
                if (2 == t) return e.subtract(e.multiply(r[0][0], r[1][1]), e.multiply(r[1][0], r[0][1]));
                for (var i = function (r) {
                        var t, n, i = new Array(r.length),
                            o = 0;
                        for (t = 1; t < r.length; t++) o = e.add(o, r[t][t]);
                        for (t = 0; t < r.length; t++) {
                            for (i[t] = new Array(r.length), i[t][t] = e.unaryMinus(o), n = 0; t > n; n++) i[t][n] = 0;
                            for (n = t + 1; n < r.length; n++) i[t][n] = r[t][n];
                            t + 1 < r.length && (o = e.subtract(o, r[t + 1][t + 1]))
                        }
                        return i
                    }, a = r, s = 0; t - 1 > s; s++) a = e.multiply(i(a), r);
                return t % 2 == 0 ? e.unaryMinus(a[0][0]) : a[0][0]
            }
            var n = t(175),
                i = e.type.Matrix,
                o = n.object,
                a = n.string;
            e.det = function (t) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("det", arguments.length, 1);
                var n;
                switch (t instanceof i ? n = t.size() : t instanceof Array ? (t = e.matrix(t), n = t.size()) : n = [], n.length) {
                    case 0:
                        return o.clone(t);
                    case 1:
                        if (1 == n[0]) return o.clone(t.valueOf()[0]);
                        throw new RangeError("Matrix must be square (size: " + a.format(n) + ")");
                    case 2:
                        var s = n[0],
                            u = n[1];
                        if (s == u) return r(t.clone().valueOf(), s, u);
                        throw new RangeError("Matrix must be square (size: " + a.format(n) + ")");
                    default:
                        throw new RangeError("Matrix must be two dimensional (size: " + a.format(n) + ")")
                }
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = e.type.Matrix,
                o = r.object,
                a = r.array,
                s = a.isArray,
                u = r.number.isNumber,
                c = r.string.isString,
                f = r.number.isInteger;
            e.diag = function (r, t, l) {
                if (0 === arguments.length || arguments.length > 3) throw new e.error.ArgumentsError("diag", arguments.length, 1, 3);
                switch (arguments.length) {
                    case 1:
                        t = 0, l = void 0;
                        break;
                    case 2:
                        c(arguments[1]) && (l = arguments[1], t = 0)
                }
                if (!(r instanceof i || s(r))) throw new TypeError("First parameter in function diag must be a Matrix or Array");
                if (t instanceof n && (t = t.toNumber()), !u(t) || !f(t)) throw new TypeError("Second parameter in function diag must be an integer");
                if (l && !c(l)) throw new TypeError("Third parameter in function diag must be a String");
                var p, m, h, g, d, v, y = t > 0 ? t : 0,
                    x = 0 > t ? -t : 0;
                if (r instanceof i ? (g = r.valueOf(), l = l || r.storage(), p = r.size()) : (g = r, p = a.size(r)), l) {
                    if (1 === p.length) {
                        m = g[0] instanceof n ? new n(0) : 0;
                        var w = [g.length + x, g.length + y],
                            b = i.storage(l);
                        return b.diagonal(w, g, t, m)
                    }
                    if (2 === p.length) return h = r.diagonal(t), e.matrix(h, l);
                    throw new RangeError("Matrix for function diag must be 2 dimensional")
                }
                switch (p.length) {
                    case 1:
                        m = g[0] instanceof n ? new n(0) : 0;
                        var E = [];
                        for (a.resize(E, [g.length + x, g.length + y], m), v = g.length, d = 0; v > d; d++) E[d + x][d + y] = o.clone(g[d]);
                        return E;
                    case 2:
                        for (h = [], v = Math.min(p[0] - x, p[1] - y), d = 0; v > d; d++) h[d] = o.clone(g[d + x][d + y]);
                        return h;
                    default:
                        throw new RangeError("Matrix for function diag must be 2 dimensional")
                }
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(r, t) {
                var i = n.size(r),
                    o = n.size(t),
                    a = i[0];
                if (1 !== i.length || 1 !== o.length) throw new RangeError("Vector expected");
                if (i[0] != o[0]) throw new RangeError("Vectors must have equal length (" + i[0] + " != " + o[0] + ")");
                if (0 == a) throw new RangeError("Cannot calculate the dot product of empty vectors");
                for (var s = 0, u = 0; a > u; u++) s = e.add(s, e.multiply(r[u], t[u]));
                return s
            }
            var n = t(169),
                i = e.type.Matrix;
            e.dot = function (t, n) {
                if (t instanceof i) {
                    if (n instanceof i) return r(t.toArray(), n.toArray());
                    if (Array.isArray(n)) return r(t.toArray(), n)
                } else if (Array.isArray(t)) {
                    if (n instanceof i) return r(t, n.toArray());
                    if (Array.isArray(n)) return r(t, n)
                }
                throw new e.error.UnsupportedTypeError("dot", e["typeof"](t), e["typeof"](n))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = e.type.Matrix,
                a = e.collection,
                s = n.array,
                u = n.number.isNumber,
                c = n.number.isInteger,
                f = n.string.isString,
                l = Array.isArray;
            e.eye = function (t, n) {
                var p, m = a.argsToArray(arguments);
                if (m.length > 0 && f(m[m.length - 1]) ? (p = m[m.length - 1], m = a.argsToArray(m.slice(0, m.length - 1))) : t instanceof o ? p = t.storage() : l(t) || "matrix" !== r.matrix || (p = "default"), 1 == m.length) m[1] = m[0];
                else if (m.length > 2) throw new e.error.ArgumentsError("eye", m.length, 0, 2);
                var h = !1;
                m = m.map(function (e) {
                    if (e instanceof i && (h = !0, e = e.toNumber()), !u(e) || !c(e) || 0 > e) throw new Error("Parameters in function eye must be positive integers");
                    return e
                });
                var g = h ? new i(1) : 1,
                    d = h ? new i(0) : 0;
                if (p) {
                    if (0 === m.length) return e.matrix(p);
                    var v = o.storage(p);
                    return v.diagonal(m, g, 0, d)
                }
                var y = [];
                if (m.length > 0) {
                    y = s.resize(y, m, d);
                    for (var x = e.min(m), w = 0; x > w; w++) y[w][w] = g
                }
                return y
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.Matrix,
                o = n.object,
                a = n.array,
                s = Array.isArray;
            e.flatten = function (r) {
                if (1 !== arguments.length) throw new e.error.ArgumentsError("flatten", arguments.length, 1);
                if (r instanceof i) {
                    var t = o.clone(r.toArray()),
                        n = a.flatten(t);
                    return e.matrix(n)
                }
                if (s(r)) return a.flatten(o.clone(r));
                throw new e.error.UnsupportedTypeError("flatten", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(r, t, n) {
                var i, o, a, s, u;
                if (1 == t) {
                    if (s = r[0][0], 0 == s) throw Error("Cannot calculate inverse, determinant is zero");
                    return [
                        [e._divide(1, s)]
                    ]
                }
                if (2 == t) {
                    var c = e.det(r);
                    if (0 == c) throw Error("Cannot calculate inverse, determinant is zero");
                    return [
                        [e._divide(r[1][1], c), e._divide(e.unaryMinus(r[0][1]), c)],
                        [e._divide(e.unaryMinus(r[1][0]), c), e._divide(r[0][0], c)]
                    ]
                }
                var f = r.concat();
                for (i = 0; t > i; i++) f[i] = f[i].concat();
                for (var l = e.eye(t).valueOf(), p = 0; n > p; p++) {
                    for (i = p; t > i && 0 == f[i][p];) i++;
                    if (i == t || 0 == f[i][p]) throw Error("Cannot calculate inverse, determinant is zero");
                    i != p && (u = f[p], f[p] = f[i], f[i] = u, u = l[p], l[p] = l[i], l[i] = u);
                    var m = f[p],
                        h = l[p];
                    for (i = 0; t > i; i++) {
                        var g = f[i],
                            d = l[i];
                        if (i != p) {
                            if (0 != g[p]) {
                                for (a = e._divide(e.unaryMinus(g[p]), m[p]), o = p; n > o; o++) g[o] = e.add(g[o], e.multiply(a, m[o]));
                                for (o = 0; n > o; o++) d[o] = e.add(d[o], e.multiply(a, h[o]))
                            }
                        } else {
                            for (a = m[p], o = p; n > o; o++) g[o] = e._divide(g[o], a);
                            for (o = 0; n > o; o++) d[o] = e._divide(d[o], a)
                        }
                    }
                }
                return l
            }
            var n = t(175),
                i = e.type.Matrix;
            e.inv = function (t) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("inv", arguments.length, 1);
                var o = e.size(t).valueOf();
                switch (o.length) {
                    case 0:
                        return e._divide(1, t);
                    case 1:
                        if (1 == o[0]) return t instanceof i ? e.matrix([e._divide(1, t.valueOf()[0])]) : [e._divide(1, t[0])];
                        throw new RangeError("Matrix must be square (size: " + n.string.format(o) + ")");
                    case 2:
                        var a = o[0],
                            s = o[1];
                        if (a == s) return t instanceof i ? e.matrix(r(t.valueOf(), a, s), t.storage()) : r(t, a, s);
                        throw new RangeError("Matrix must be square (size: " + n.string.format(o) + ")");
                    default:
                        throw new RangeError("Matrix must be two dimensional (size: " + n.string.format(o) + ")")
                }
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = e.type.Matrix,
                a = e.collection,
                s = n.array,
                u = n.number.isNumber,
                c = n.number.isInteger,
                f = n.string.isString,
                l = Array.isArray;
            e.ones = function (t, n) {
                var p, m = a.argsToArray(arguments);
                m.length > 0 && f(m[m.length - 1]) ? (p = m[m.length - 1], m = a.argsToArray(m.slice(0, m.length - 1))) : t instanceof o ? p = t.storage() : l(t) || "matrix" !== r.matrix || (p = "default");
                var h = !1;
                m = m.map(function (e) {
                    if (e instanceof i && (h = !0, e = e.toNumber()), !u(e) || !c(e) || 0 > e) throw new Error("Parameters in function eye must be positive integers");
                    return e
                });
                var g = h ? new i(1) : 1;
                if (p) {
                    var d = e.matrix(p);
                    return m.length > 0 ? d.resize(m, g) : d
                }
                var v = [];
                return m.length > 0 ? s.resize(v, m, g) : v
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            function n(e, r, t) {
                var n = [],
                    i = e;
                if (t > 0)
                    for (; r > i;) n.push(i), i += t;
                else if (0 > t)
                    for (; i > r;) n.push(i), i += t;
                return n
            }

            function i(e, r, t) {
                var n = [],
                    i = e;
                if (t > 0)
                    for (; r >= i;) n.push(i), i += t;
                else if (0 > t)
                    for (; i >= r;) n.push(i), i += t;
                return n
            }

            function o(e, r, t) {
                var n = [],
                    i = e.clone(),
                    o = new c(0);
                if (t.gt(o))
                    for (; i.lt(r);) n.push(i), i = i.plus(t);
                else if (t.lt(o))
                    for (; i.gt(r);) n.push(i), i = i.plus(t);
                return n
            }

            function a(e, r, t) {
                var n = [],
                    i = e.clone(),
                    o = new c(0);
                if (t.gt(o))
                    for (; i.lte(r);) n.push(i), i = i.plus(t);
                else if (t.lt(o))
                    for (; i.gte(r);) n.push(i), i = i.plus(t);
                return n
            }

            function s(e) {
                var t = e.split(":"),
                    n = null;
                if ("bignumber" === r.number) try {
                    n = t.map(function (e) {
                        return new c(e)
                    })
                } catch (i) {
                    return null
                } else {
                    n = t.map(function (e) {
                        return Number(e)
                    });
                    var o = n.some(function (e) {
                        return isNaN(e)
                    });
                    if (o) return null
                }
                switch (n.length) {
                    case 2:
                        return {
                            start: n[0], end: n[1], step: 1
                        };
                    case 3:
                        return {
                            start: n[0], end: n[2], step: n[1]
                        };
                    default:
                        return null
                }
            }
            var u = t(175),
                c = e.type.BigNumber,
                f = (e.type.Matrix, e.collection, u["boolean"].isBoolean),
                l = u.string.isString,
                p = u.number.isNumber;
            e.range = function (t) {
                var u, m, h, g = Array.prototype.slice.call(arguments),
                    d = !1;
                switch (f(g[g.length - 1]) && (d = g.pop() ? !0 : !1), g.length) {
                    case 1:
                        if (!l(g[0])) throw new TypeError("Two or three numbers or a single string expected in function range");
                        var v = s(g[0]);
                        if (!v) throw new SyntaxError('String "' + g[0] + '" is no valid range');
                        u = v.start, m = v.end, h = v.step;
                        break;
                    case 2:
                        u = g[0], m = g[1], h = 1;
                        break;
                    case 3:
                        u = g[0], m = g[1], h = g[2];
                        break;
                    case 4:
                        throw new TypeError("Parameter includeEnd must be a boolean");
                    default:
                        throw new e.error.ArgumentsError("range", arguments.length, 2, 4)
                }
                if (!(p(u) || u instanceof c)) throw new TypeError("Parameter start must be a number");
                if (!(p(m) || m instanceof c)) throw new TypeError("Parameter end must be a number");
                if (!(p(h) || h instanceof c)) throw new TypeError("Parameter step must be a number");
                if (u instanceof c || m instanceof c || h instanceof c) {
                    var y = !0;
                    u instanceof c || (u = c.convert(u)), m instanceof c || (m = c.convert(m)), h instanceof c || (h = c.convert(h)), u instanceof c && m instanceof c && h instanceof c || (y = !1, u instanceof c && (u = u.toNumber()), m instanceof c && (m = m.toNumber()), h instanceof c && (h = h.toNumber()))
                }
                var x = y ? d ? a : o : d ? i : n,
                    w = x(u, m, h);
                return "array" === r.matrix ? w : e.matrix(w)
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            function n(r, t, n) {
                if (void 0 !== n) {
                    if (!f(n) || 1 !== n.length) throw new TypeError("Single character expected as defaultValue")
                } else n = " ";
                if (1 !== t.length) throw new e.error.DimensionError(t.length, 1);
                var i = t[0];
                if (!l(i) || !p(i)) throw new TypeError("Invalid size, must contain positive integers (size: " + c.format(t) + ")");
                if (r.length > i) return r.substring(0, i);
                if (r.length < i) {
                    for (var o = r, a = 0, s = i - r.length; s > a; a++) o += n;
                    return o
                }
                return r
            }
            var i = t(175),
                o = e.type.BigNumber,
                a = e.type.Matrix,
                s = i.array,
                u = i.object.clone,
                c = i.string,
                f = i.string.isString,
                l = i.number.isNumber,
                p = i.number.isInteger,
                m = s.isArray;
            e.resize = function (t, i, c) {
                if (2 != arguments.length && 3 != arguments.length) throw new e.error.ArgumentsError("resize", arguments.length, 2, 3);
                if (i instanceof a && (i = i.valueOf()), i.length && i[0] instanceof o && (i = i.map(function (e) {
                        return e instanceof o ? e.toNumber() : e
                    })), t instanceof a) return t.resize(i, c, !0);
                if (f(t)) return n(t, i, c);
                var l = m(t) ? !1 : "array" !== r.matrix;
                if (0 == i.length) {
                    for (; m(t);) t = t[0];
                    return u(t)
                }
                m(t) || (t = [t]), t = u(t);
                var p = s.resize(t, i, c);
                return l ? e.matrix(p) : p
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = t(7),
                a = t(11),
                s = e.type.Matrix,
                u = n.array,
                c = n.number.isNumber,
                f = n["boolean"].isBoolean,
                l = n.string.isString,
                p = o.isComplex,
                m = a.isUnit;
            e.size = function (t) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("size", arguments.length, 1);
                var n = "array" === r.matrix;
                if (c(t) || p(t) || m(t) || f(t) || null == t || t instanceof i) return n ? [] : e.matrix([]);
                if (l(t)) return n ? [t.length] : e.matrix([t.length]);
                if (Array.isArray(t)) return u.size(t);
                if (t instanceof s) return e.matrix(t.size());
                throw new e.error.UnsupportedTypeError("size", e["typeof"](t))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.Matrix,
                i = r.object,
                o = r.array,
                a = Array.isArray;
            e.squeeze = function (r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("squeeze", arguments.length, 1);
                if (a(r)) return o.squeeze(i.clone(r));
                if (r instanceof n) {
                    var t = o.squeeze(r.toArray());
                    return a(t) ? e.matrix(t) : t
                }
                return i.clone(r)
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            function n(r, t) {
                var n, o;
                if (p(r)) return n = e.matrix(r), o = n.subset(t), o && o.valueOf();
                if (r instanceof u) return r.subset(t);
                if (l(r)) return i(r, t);
                throw new e.error.UnsupportedTypeError("subset", e["typeof"](r))
            }

            function i(r, t) {
                if (!(t instanceof c)) throw new TypeError("Index expected");
                if (1 != t.size().length) throw new e.error.DimensionError(t.size().length, 1);
                var n = r.length;
                f.validateIndex(t.min()[0], n), f.validateIndex(t.max()[0], n);
                var i = t.range(0),
                    o = "";
                return i.forEach(function (e) {
                    o += r.charAt(e)
                }), o
            }

            function o(r, t, n, i) {
                var o;
                if (p(r)) return o = e.matrix(e.clone(r)), o.subset(t, n, i), o.valueOf();
                if (r instanceof u) return r.clone().subset(t, n, i);
                if (l(r)) return a(r, t, n, i);
                throw new e.error.UnsupportedTypeError("subset", e["typeof"](r))
            }

            function a(r, t, n, i) {
                if (!(t instanceof c)) throw new TypeError("Index expected");
                if (1 != t.size().length) throw new e.error.DimensionError(t.size().length, 1);
                if (void 0 !== i) {
                    if (!l(i) || 1 !== i.length) throw new TypeError("Single character expected as defaultValue")
                } else i = " ";
                var o = t.range(0),
                    a = o.size()[0];
                if (a != n.length) throw new e.error.DimensionError(o.size()[0], n.length);
                var s = r.length;
                f.validateIndex(t.min()[0]), f.validateIndex(t.max()[0]);
                for (var u = [], p = 0; s > p; p++) u[p] = r.charAt(p);
                if (o.forEach(function (e, r) {
                        u[e] = n.charAt(r)
                    }), u.length > s)
                    for (p = s - 1, a = u.length; a > p; p++) u[p] || (u[p] = i);
                return u.join("")
            }
            var s = t(175),
                u = e.type.Matrix,
                c = t(9),
                f = s.array,
                l = s.string.isString,
                p = Array.isArray;
            e.subset = function (r, t, i, a) {
                switch (arguments.length) {
                    case 2:
                        return n(arguments[0], arguments[1]);
                    case 3:
                    case 4:
                        return o(arguments[0], arguments[1], arguments[2], arguments[3]);
                    default:
                        throw new e.error.ArgumentsError("subset", arguments.length, 2, 4)
                }
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.Matrix,
                i = r.object,
                o = r.array,
                a = r.string;
            e.trace = function (r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("trace", arguments.length, 1);
                if (r instanceof n) return r.trace();
                var t;
                switch (t = r instanceof Array ? o.size(r) : [], t.length) {
                    case 0:
                        return i.clone(r);
                    case 1:
                        if (1 == t[0]) return i.clone(r[0]);
                        throw new RangeError("Array must be square (size: " + a.format(t) + ")");
                    case 2:
                        var s = t[0],
                            u = t[1];
                        if (s == u) {
                            for (var c = 0, f = 0; f < r.length; f++) c = e.add(c, r[f][f]);
                            return c
                        }
                        throw new RangeError("Array must be square (size: " + a.format(t) + ")");
                    default:
                        throw new RangeError("Matrix must be two dimensional (size: " + a.format(t) + ")")
                }
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.Matrix,
                i = r.object,
                o = r.string;
            e.transpose = function (r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("transpose", arguments.length, 1);
                var t = e.size(r).valueOf();
                switch (t.length) {
                    case 0:
                        return i.clone(r);
                    case 1:
                        return i.clone(r);
                    case 2:
                        if (r instanceof n) return r.transpose();
                        var a, s = t[1],
                            u = t[0],
                            c = r.valueOf(),
                            f = [],
                            l = i.clone;
                        if (0 === s) throw new RangeError("Cannot transpose a 2D matrix with no rows(size: " + o.format(t) + ")");
                        for (var p = 0; s > p; p++) {
                            a = f[p] = [];
                            for (var m = 0; u > m; m++) a[m] = l(c[m][p])
                        }
                        return f;
                    default:
                        throw new RangeError("Matrix must be two dimensional (size: " + o.format(t) + ")")
                }
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = e.type.Matrix,
                a = e.collection,
                s = n.array,
                u = n.number.isNumber,
                c = n.number.isInteger,
                f = n.string.isString,
                l = Array.isArray;
            e.zeros = function (t) {
                var n, p = a.argsToArray(arguments);
                p.length > 0 && f(p[p.length - 1]) ? (n = p[p.length - 1], p = a.argsToArray(p.slice(0, p.length - 1))) : t instanceof o ? n = t.storage() : l(t) || "matrix" !== r.matrix || (n = "default");
                var m = !1;
                p = p.map(function (e) {
                    if (e instanceof i && (m = !0, e = e.toNumber()), !u(e) || !c(e) || 0 > e) throw new Error("Parameters in function eye must be positive integers");
                    return e
                });
                var h = m ? new i(0) : 0;
                if (n) {
                    var g = e.matrix(n);
                    return p.length > 0 ? g.resize(p, h) : g
                }
                var d = [];
                return p.length > 0 ? s.resize(d, p, h) : d
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = e.collection,
                a = n.number.isNumber,
                s = n["boolean"].isBoolean,
                u = (n.number.isInteger, o.isCollection);
            e.factorial = function p(t) {
                var m, h, g;
                if (1 != arguments.length) throw new e.error.ArgumentsError("factorial", arguments.length, 1);
                if (a(t)) return t !== Number.POSITIVE_INFINITY ? e.gamma(t + 1) : Math.sqrt(2 * Math.PI);
                if (t instanceof i) {
                    if (!c(t)) return t.isNegative() || t.isFinite() ? e.gamma(t.plus(1)) : n.bignumber.tau(r.precision).sqrt();
                    if (t = t.toNumber(), t < l.length) return i.convert(l[t]).toSD(r.precision);
                    var d = r.precision + (0 | Math.log(t)),
                        v = i.constructor({
                            precision: d
                        });
                    if (t -= l.length, g = f[d]) {
                        if (g[t]) return new i(g[t].toPrecision(r.precision));
                        h = g[g.length - 1]
                    } else g = f[d] = [], h = new v(l[l.length - 1]).toSD(d);
                    var y = new v(1);
                    m = new v(g.length + l.length);
                    for (var x = g.length; t > x; ++x) g[x] = h = h.times(m), m = m.plus(y);
                    return g[t] = h.times(m), new i(g[t].toPrecision(r.precision))
                }
                if (s(t) || null === t) return 1;
                if (u(t)) return o.deepMap(t, p);
                throw new e.error.UnsupportedTypeError("factorial", e["typeof"](t))
            };
            var c = function (e) {
                    return e.isInteger() && (!e.isNegative() || e.isZero())
                },
                f = [],
                l = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800, 87178291200, 1307674368e3, 20922789888e3, 355687428096e3, 6402373705728e3, 0x1b02b9306890000, 243290200817664e4]
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = t(7),
                a = e.collection,
                s = n["boolean"].isBoolean,
                u = o.isComplex,
                c = n.number.isNumber,
                f = n.number.isInteger,
                l = a.isCollection;
            e.gamma = function m(r) {
                var t, n, h = 4.7421875;
                if (1 != arguments.length) throw new e.error.ArgumentsError("gamma", arguments.length, 1);
                if (c(r)) {
                    if (f(r)) {
                        if (0 >= r) return isFinite(r) ? 1 / 0 : 0 / 0;
                        if (r > 171) return 1 / 0;
                        for (var g = r - 2, d = r - 1; g > 1;) d *= g, g--;
                        return 0 == d && (d = 1), d
                    }
                    if (.5 > r) return Math.PI / (Math.sin(Math.PI * r) * m(1 - r));
                    if (r >= 171.35) return 1 / 0;
                    if (r > 85) {
                        var v = r * r,
                            y = v * r,
                            x = y * r,
                            w = x * r;
                        return Math.sqrt(2 * Math.PI / r) * Math.pow(r / Math.E, r) * (1 + 1 / (12 * r) + 1 / (288 * v) - 139 / (51840 * y) - 571 / (2488320 * x) + 163879 / (209018880 * w) + 5246819 / (75246796800 * w * r))
                    }--r, n = p[0];
                    for (var b = 1; b < p.length; ++b) n += p[b] / (r + b);
                    return t = r + h + .5, Math.sqrt(2 * Math.PI) * Math.pow(t, r + .5) * Math.exp(-t) * n
                }
                if (u(r)) {
                    if (0 == r.im) return m(r.re);
                    r = new o(r.re - 1, r.im), n = new o(p[0], 0);
                    for (var b = 1; b < p.length; ++b) {
                        var E = r.re + b,
                            N = E * E + r.im * r.im;
                        0 != N ? (n.re += p[b] * E / N, n.im += -(p[b] * r.im) / N) : n.re = p[b] < 0 ? -(1 / 0) : 1 / 0
                    }
                    t = new o(r.re + h + .5, r.im);
                    var M = Math.sqrt(2 * Math.PI);
                    r.re += .5;
                    var _ = e.pow(t, r);
                    0 == _.im ? _.re *= M : 0 == _.re ? _.im *= M : (_.re *= M, _.im *= M);
                    var A = Math.exp(-t.re);
                    return t.re = A * Math.cos(-t.im), t.im = A * Math.sin(-t.im), e.multiply(e.multiply(_, t), n)
                }
                if (r instanceof i) {
                    if (r.isInteger()) return r.isNegative() || r.isZero() ? new i(1 / 0) : e.factorial(r.minus(1));
                    if (!r.isFinite()) return new i(r.isNegative() ? 0 / 0 : 1 / 0)
                }
                if (s(r) || null === r) return r ? 1 : 1 / 0;
                if (l(r)) return a.deepMap(r, m);
                throw new e.error.UnsupportedTypeError("gamma", e["typeof"](r))
            };
            var p = [.9999999999999971, 57.15623566586292, -59.59796035547549, 14.136097974741746, -.4919138160976202, 3399464998481189e-20, 4652362892704858e-20, -9837447530487956e-20, .0001580887032249125, -.00021026444172410488, .00021743961811521265, -.0001643181065367639, 8441822398385275e-20, -26190838401581408e-21, 36899182659531625e-22]
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(337)(e);
            e.random = r("uniform").random
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(337)(e);
            e.randomInt = r("uniform").randomInt
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(337)(e);
            e.pickRandom = r("uniform").pickRandom
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = r.number.isNumber,
                o = r.number.isInteger;
            e.permutations = function (r, t) {
                var s, u, c = arguments.length;
                if (c > 2) throw new e.error.ArgumentsError("permutations", arguments.length, 2);
                if (i(r)) {
                    if (!o(r) || 0 > r) throw new TypeError("Positive integer value expected in function permutations");
                    if (1 == c) return e.factorial(r);
                    if (2 == c && i(t)) {
                        if (!o(t) || 0 > t) throw new TypeError("Positive integer value expected in function permutations");
                        if (t > r) throw new TypeError("second argument k must be less than or equal to first argument n");
                        for (s = 1, u = r - t + 1; r >= u; u++) s *= u;
                        return s
                    }
                }
                if (r instanceof n) {
                    if (void 0 === t && a(r)) return e.factorial(r);
                    if (t = n.convert(t), !(t instanceof n && a(r) && a(t))) throw new TypeError("Positive integer value expected in function permutations");
                    if (t.gt(r)) throw new TypeError("second argument k must be less than or equal to first argument n");
                    for (s = new n(1), u = r.minus(t).plus(1); u.lte(r); u = u.plus(1)) s = s.times(u);
                    return s
                }
                throw new e.error.UnsupportedTypeError("permutations", e["typeof"](r))
            };
            var a = function (e) {
                return e.isInteger() && e.gte(0)
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = (e.collection, r.number.isNumber),
                o = r.number.isInteger;
            e.combinations = function (r, t) {
                var s, u, c, f, l = arguments.length;
                if (2 != l) throw new e.error.ArgumentsError("combinations", arguments.length, 2);
                if (i(r)) {
                    if (!o(r) || 0 > r) throw new TypeError("Positive integer value enpected in function combinations");
                    if (t > r) throw new TypeError("k must be less than or equal to n");
                    for (s = Math.max(t, r - t), u = 1, c = 1; r - s >= c; c++) u = u * (s + c) / c;
                    return u
                }
                if (r instanceof n) {
                    if (t = n.convert(t), !(t instanceof n && a(r) && a(t))) throw new TypeError("Positive integer value expected in function combinations");
                    if (t.gt(r)) throw new TypeError("k must be less than n in function combinations");
                    for (s = r.minus(t), t.lt(s) && (s = t), u = new n(1), c = new n(1), f = r.minus(s); c.lte(f); c = c.plus(1)) u = u.times(s.plus(c)).dividedBy(c);
                    return u
                }
                throw new e.error.UnsupportedTypeError("combinations", e["typeof"](r))
            };
            var a = function (e) {
                return e.isInteger() && e.gte(0)
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = t(7),
                a = t(11),
                s = e.collection,
                u = n.number.isNumber,
                c = n.number.nearlyEqual,
                f = n["boolean"].isBoolean,
                l = n.string.isString,
                p = o.isComplex,
                m = a.isUnit,
                h = s.isCollection;
            e.compare = function g(t, n) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("compare", arguments.length, 2);
                if (u(t) && u(n)) return c(t, n, r.epsilon) ? 0 : t > n ? 1 : -1;
                if (t instanceof i) return u(n) ? n = i.convert(n) : (f(n) || null === n) && (n = new i(n ? 1 : 0)), n instanceof i ? new i(t.cmp(n)) : g(t.toNumber(), n);
                if (n instanceof i) return u(t) ? t = i.convert(t) : (f(t) || null === t) && (t = new i(t ? 1 : 0)), t instanceof i ? new i(t.cmp(n)) : g(t, n.toNumber());
                if (m(t) && m(n)) {
                    if (!t.equalBase(n)) throw new Error("Cannot compare units with different base");
                    return t.value > n.value ? 1 : t.value < n.value ? -1 : 0
                }
                if (h(t) || h(n)) return s.deepMap2(t, n, g);
                if (l(t) || l(n)) return t > n ? 1 : n > t ? -1 : 0;
                if (f(t) || null === t) return g(+t, n);
                if (f(n) || null === n) return g(t, +n);
                if (p(t) || p(n)) throw new TypeError("No ordering relation is defined for complex numbers");
                throw new e.error.UnsupportedTypeError("compare", e["typeof"](t), e["typeof"](n))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(t, n) {
                if (i(t)) {
                    if (i(n)) {
                        var o = t.length;
                        if (o !== n.length) return !1;
                        for (var a = 0; o > a; a++)
                            if (!r(t[a], n[a])) return !1;
                        return !0
                    }
                    return !1
                }
                return i(n) ? !1 : e.equal(t, n)
            }
            var t = e.collection,
                n = t.isCollection,
                i = Array.isArray;
            e.deepEqual = function (t, i) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("deepEqual", arguments.length, 2);
                return n(t) || n(i) ? r(t.valueOf(), i.valueOf()) : e.equal(t, i)
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = t(7),
                a = t(11),
                s = e.collection,
                u = n.number.isNumber,
                c = n.number.nearlyEqual,
                f = n["boolean"].isBoolean,
                l = n.string.isString,
                p = o.isComplex,
                m = a.isUnit,
                h = s.isCollection;
            e.equal = function g(t, n) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("equal", arguments.length, 2);
                if (u(t)) {
                    if (u(n)) return c(t, n, r.epsilon);
                    if (p(n)) return c(t, n.re, r.epsilon) && c(n.im, 0, r.epsilon)
                }
                if (p(t)) {
                    if (u(n)) return c(t.re, n, r.epsilon) && c(t.im, 0, r.epsilon);
                    if (p(n)) return c(t.re, n.re, r.epsilon) && c(t.im, n.im, r.epsilon)
                }
                if (t instanceof i) return u(n) ? n = i.convert(n) : f(n) && (n = new i(n ? 1 : 0)), n instanceof i ? t.eq(n) : g(t.toNumber(), n);
                if (n instanceof i) return u(t) ? t = i.convert(t) : f(t) && (t = new i(t ? 1 : 0)), t instanceof i ? t.eq(n) : g(t, n.toNumber());
                if (m(t) && m(n)) {
                    if (!t.equalBase(n)) throw new Error("Cannot compare units with different base");
                    return t.value == n.value
                }
                if (h(t) || h(n)) return s.deepMap2(t, n, g);
                if (l(t) || l(n)) return t == n;
                if (f(t)) return g(+t, n);
                if (f(n)) return g(t, +n);
                if (null === t) return null === n;
                if (null === n) return null === t;
                if (void 0 === t) return void 0 === n;
                if (void 0 === n) return void 0 === t;
                throw new e.error.UnsupportedTypeError("equal", e["typeof"](t), e["typeof"](n))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = t(7),
                a = t(11),
                s = e.collection,
                u = n.number.isNumber,
                c = n.number.nearlyEqual,
                f = n["boolean"].isBoolean,
                l = n.string.isString,
                p = o.isComplex,
                m = a.isUnit,
                h = s.isCollection;
            e.larger = function g(t, n) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("larger", arguments.length, 2);
                if (u(t) && u(n)) return !c(t, n, r.epsilon) && t > n;
                if (t instanceof i) return u(n) ? n = i.convert(n) : (f(n) || null === n) && (n = new i(n ? 1 : 0)), n instanceof i ? t.gt(n) : g(t.toNumber(), n);
                if (n instanceof i) return u(t) ? t = i.convert(t) : (f(t) || null === t) && (t = new i(t ? 1 : 0)), t instanceof i ? t.gt(n) : g(t, n.toNumber());
                if (m(t) && m(n)) {
                    if (!t.equalBase(n)) throw new Error("Cannot compare units with different base");
                    return t.value > n.value
                }
                if (h(t) || h(n)) return s.deepMap2(t, n, g);
                if (l(t) || l(n)) return t > n;
                if (f(t) || null === t) return g(+t, n);
                if (f(n) || null === n) return g(t, +n);
                if (p(t) || p(n)) throw new TypeError("No ordering relation is defined for complex numbers");
                throw new e.error.UnsupportedTypeError("larger", e["typeof"](t), e["typeof"](n))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = t(7),
                a = t(11),
                s = e.collection,
                u = n.number.isNumber,
                c = n.number.nearlyEqual,
                f = n["boolean"].isBoolean,
                l = n.string.isString,
                p = o.isComplex,
                m = a.isUnit,
                h = s.isCollection;
            e.largerEq = function g(t, n) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("largerEq", arguments.length, 2);
                if (u(t) && u(n)) return c(t, n, r.epsilon) || t > n;
                if (t instanceof i) return u(n) ? n = i.convert(n) : (f(n) || null === n) && (n = new i(n ? 1 : 0)), n instanceof i ? t.gte(n) : g(t.toNumber(), n);
                if (n instanceof i) return u(t) ? t = i.convert(t) : (f(t) || null === t) && (t = new i(t ? 1 : 0)), t instanceof i ? t.gte(n) : g(t, n.toNumber());
                if (m(t) && m(n)) {
                    if (!t.equalBase(n)) throw new Error("Cannot compare units with different base");
                    return t.value >= n.value
                }
                if (h(t) || h(n)) return s.deepMap2(t, n, g);
                if (l(t) || l(n)) return t >= n;
                if (f(t) || null === t) return g(+t, n);
                if (f(n) || null === n) return g(t, +n);
                if (p(t) || p(n)) throw new TypeError("No ordering relation is defined for complex numbers");
                throw new e.error.UnsupportedTypeError("largerEq", e["typeof"](t), e["typeof"](n))
            }, e.largereq = function () {
                throw new Error("Function largereq is renamed to largerEq")
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = t(7),
                a = t(11),
                s = e.collection,
                u = n.number.isNumber,
                c = n.number.nearlyEqual,
                f = n["boolean"].isBoolean,
                l = n.string.isString,
                p = o.isComplex,
                m = a.isUnit,
                h = s.isCollection;
            e.smaller = function g(t, n) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("smaller", arguments.length, 2);
                if (u(t) && u(n)) return !c(t, n, r.epsilon) && n > t;
                if (t instanceof i) return u(n) ? n = i.convert(n) : (f(n) || null === n) && (n = new i(n ? 1 : 0)), n instanceof i ? t.lt(n) : g(t.toNumber(), n);
                if (n instanceof i) return u(t) ? t = i.convert(t) : (f(t) || null === t) && (t = new i(t ? 1 : 0)), t instanceof i ? t.lt(n) : g(t, n.toNumber());
                if (m(t) && m(n)) {
                    if (!t.equalBase(n)) throw new Error("Cannot compare units with different base");
                    return t.value < n.value
                }
                if (h(t) || h(n)) return s.deepMap2(t, n, g);
                if (l(t) || l(n)) return n > t;
                if (f(t) || null === t) return g(+t, n);
                if (f(n) || null === n) return g(t, +n);
                if (p(t) || p(n)) throw new TypeError("No ordering relation is defined for complex numbers");
                throw new e.error.UnsupportedTypeError("smaller", e["typeof"](t), e["typeof"](n))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = t(7),
                a = t(11),
                s = e.collection,
                u = n.number.isNumber,
                c = n.number.nearlyEqual,
                f = n["boolean"].isBoolean,
                l = n.string.isString,
                p = o.isComplex,
                m = a.isUnit,
                h = s.isCollection;
            e.smallerEq = function g(t, n) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("smallerEq", arguments.length, 2);
                if (u(t) && u(n)) return c(t, n, r.epsilon) || n > t;
                if (t instanceof i) return u(n) ? n = i.convert(n) : (f(n) || null === n) && (n = new i(n ? 1 : 0)), n instanceof i ? t.lte(n) : g(t.toNumber(), n);
                if (n instanceof i) return u(t) ? t = i.convert(t) : (f(t) || null === t) && (t = new i(t ? 1 : 0)), t instanceof i ? t.lte(n) : g(t, n.toNumber());
                if (m(t) && m(n)) {
                    if (!t.equalBase(n)) throw new Error("Cannot compare units with different base");
                    return t.value <= n.value
                }
                if (h(t) || h(n)) return s.deepMap2(t, n, g);
                if (l(t) || l(n)) return n >= t;
                if (f(t) || null === t) return g(+t, n);
                if (f(n) || null === n) return g(t, +n);
                if (p(t) || p(n)) throw new TypeError("No ordering relation is defined for complex numbers");
                throw new e.error.UnsupportedTypeError("smallerEq", e["typeof"](t), e["typeof"](n))
            }, e.smallereq = function () {
                throw new Error("Function smallereq is renamed to smallerEq")
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = t(7),
                a = t(11),
                s = e.collection,
                u = n.number.isNumber,
                c = n.number.nearlyEqual,
                f = n["boolean"].isBoolean,
                l = n.string.isString,
                p = o.isComplex,
                m = a.isUnit,
                h = s.isCollection;
            e.unequal = function g(t, n) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("unequal", arguments.length, 2);
                if (u(t)) {
                    if (u(n)) return !c(t, n, r.epsilon);
                    if (p(n)) return !c(t, n.re, r.epsilon) || !c(n.im, 0, r.epsilon)
                }
                if (p(t)) {
                    if (u(n)) return !c(t.re, n, r.epsilon) || !c(t.im, 0, r.epsilon);
                    if (p(n)) return !c(t.re, n.re, r.epsilon) || !c(t.im, n.im, r.epsilon)
                }
                if (t instanceof i) return u(n) ? n = i.convert(n) : f(n) && (n = new i(n ? 1 : 0)), n instanceof i ? !t.eq(n) : g(t.toNumber(), n);
                if (n instanceof i) return u(t) ? t = i.convert(t) : f(t) && (t = new i(t ? 1 : 0)), t instanceof i ? !t.eq(n) : g(t, n.toNumber());
                if (m(t) && m(n)) {
                    if (!t.equalBase(n)) throw new Error("Cannot compare units with different base");
                    return t.value != n.value
                }
                if (h(t) || h(n)) return s.deepMap2(t, n, g);
                if (l(t) || l(n)) return t != n;
                if (f(t)) return g(+t, n);
                if (f(n)) return g(t, +n);
                if (null === t) return null !== n;
                if (null === n) return null !== t;
                if (void 0 === t) return void 0 !== n;
                if (void 0 === n) return void 0 !== t;
                throw new e.error.UnsupportedTypeError("unequal", e["typeof"](t), e["typeof"](n))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(r, t) {
                return e.smaller(r, t) ? r : t
            }

            function t(r) {
                var t = void 0;
                if (n.deepForEach(r, function (r) {
                        (void 0 === t || e.smaller(r, t)) && (t = r)
                    }), void 0 === t) throw new Error("Cannot calculate min of an empty array");
                return t
            }
            var n = (e.type.Matrix, e.collection),
                i = n.isCollection;
            e.min = function (e) {
                if (0 == arguments.length) throw new SyntaxError("Function min requires one or more parameters (0 provided)");
                if (i(e)) {
                    if (1 == arguments.length) return t(e);
                    if (2 == arguments.length) return n.reduce(arguments[0], arguments[1], r);
                    throw new SyntaxError("Wrong number of parameters")
                }
                return t(arguments)
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(r, t) {
                return e.larger(r, t) ? r : t
            }

            function t(r) {
                var t = void 0;
                if (n.deepForEach(r, function (r) {
                        (void 0 === t || e.larger(r, t)) && (t = r)
                    }), void 0 === t) throw new Error("Cannot calculate max of an empty array");
                return t
            }
            var n = (e.type.Matrix, e.collection),
                i = n.isCollection;
            e.max = function (e) {
                if (0 == arguments.length) throw new SyntaxError("Function max requires one or more parameters (0 provided)");
                if (i(e)) {
                    if (1 == arguments.length) return t(e);
                    if (2 == arguments.length) return n.reduce(arguments[0], arguments[1], r);
                    throw new SyntaxError("Wrong number of parameters")
                }
                return t(arguments)
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(r, t) {
                var n = i.reduce(r, t, e.add),
                    o = s(r) ? a(r) : r.size();
                return e.divide(n, o[t])
            }

            function n(r) {
                var t = 0,
                    n = 0;
                if (i.deepForEach(r, function (r) {
                        t = e.add(t, r), n++
                    }), 0 === n) throw new Error("Cannot calculate mean of an empty array");
                return e.divide(t, n)
            }
            var i = (e.type.Matrix, e.collection),
                o = i.isCollection,
                a = t(169).size,
                s = Array.isArray;
            e.mean = function (e) {
                if (0 == arguments.length) throw new SyntaxError("Function mean requires one or more parameters (0 provided)");
                if (o(e)) {
                    if (1 == arguments.length) return n(e);
                    if (2 == arguments.length) return r(arguments[0], arguments[1]);
                    throw new SyntaxError("Wrong number of parameters")
                }
                return n(arguments)
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(r) {
                var t = u(r);
                t.sort(e.compare);
                var o = t.length;
                if (0 == o) throw new Error("Cannot calculate median of an empty array");
                if (o % 2 == 0) {
                    var s = t[o / 2 - 1],
                        c = t[o / 2];
                    if (!(a(s) || s instanceof i || s instanceof n)) throw new e.error.UnsupportedTypeError("median", e["typeof"](s));
                    if (!(a(c) || c instanceof i || c instanceof n)) throw new e.error.UnsupportedTypeError("median", e["typeof"](c));
                    return e.divide(e.add(s, c), 2)
                }
                var f = t[(o - 1) / 2];
                if (!(a(f) || f instanceof i || f instanceof n)) throw new e.error.UnsupportedTypeError("median", e["typeof"](f));
                return f
            }
            var n = (e.type.Matrix, t(11)),
                i = e.type.BigNumber,
                o = e.collection,
                a = t(3).isNumber,
                s = o.isCollection,
                u = t(169).flatten;
            e.median = function (e) {
                if (0 == arguments.length) throw new SyntaxError("Function median requires one or more parameters (0 provided)");
                if (s(e)) {
                    if (1 == arguments.length) return r(e.valueOf());
                    throw 2 == arguments.length ? new Error("median(A, dim) is not yet supported") : new SyntaxError("Wrong number of parameters");

                }
                return r(Array.prototype.slice.call(arguments))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(r) {
                var n = void 0;
                if (t.deepForEach(r, function (r) {
                        n = void 0 === n ? r : e.multiply(n, r)
                    }), void 0 === n) throw new Error("Cannot calculate prod of an empty array");
                return n
            }
            var t = (e.type.Matrix, e.collection),
                n = t.isCollection;
            e.prod = function (e) {
                if (0 == arguments.length) throw new SyntaxError("Function prod requires one or more parameters (0 provided)");
                if (n(e)) {
                    if (1 == arguments.length) return r(e);
                    throw 2 == arguments.length ? new Error("prod(A, dim) is not yet supported") : new SyntaxError("Wrong number of parameters")
                }
                return r(arguments)
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            e.std = function (r, t) {
                if (0 == arguments.length) throw new SyntaxError("Function std requires one or more parameters (0 provided)");
                var n = e["var"].apply(null, arguments);
                return e.sqrt(n)
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(r) {
                var n = void 0;
                if (t.deepForEach(r, function (r) {
                        n = void 0 === n ? r : e.add(n, r)
                    }), void 0 === n) throw new Error("Cannot calculate sum of an empty array");
                return n
            }
            var t = (e.type.Matrix, e.collection),
                n = t.isCollection;
            e.sum = function (e) {
                if (0 == arguments.length) throw new SyntaxError("Function sum requires one or more parameters (0 provided)");
                if (n(e)) {
                    if (1 == arguments.length) return r(e);
                    throw 2 == arguments.length ? new Error("sum(A, dim) is not yet supported") : new SyntaxError("Wrong number of parameters")
                }
                return r(arguments)
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(r, t) {
                var o = 0,
                    a = 0;
                if (i.deepForEach(r, function (r) {
                        o = e.add(o, r), a++
                    }), 0 === a) throw new Error("Cannot calculate var of an empty array");
                var s = e.divide(o, a);
                switch (o = 0, i.deepForEach(r, function (r) {
                    var t = e.subtract(r, s);
                    o = e.add(o, e.multiply(t, t))
                }), t) {
                    case "uncorrected":
                        return e.divide(o, a);
                    case "biased":
                        return e.divide(o, a + 1);
                    case "unbiased":
                        var u = o instanceof n ? new n(0) : 0;
                        return 1 == a ? u : e.divide(o, a - 1);
                    default:
                        throw new Error('Unknown normalization "' + t + '". Choose "unbiased" (default), "uncorrected", or "biased".')
                }
            }
            var n = (e.type.Matrix, e.type.BigNumber),
                i = e.collection,
                o = i.isCollection,
                a = t(176).isString,
                s = "unbiased";
            e["var"] = function (e, t) {
                if (0 == arguments.length) throw new SyntaxError("Function var requires one or more parameters (0 provided)");
                if (o(e)) {
                    if (1 == arguments.length) return r(e, s);
                    if (2 == arguments.length) {
                        if (!a(t)) throw new Error("String expected for parameter normalization");
                        return r(e, t)
                    }
                    throw new SyntaxError("Wrong number of parameters")
                }
                return r(arguments, s)
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = e.collection,
                a = r.number.isNumber,
                s = r["boolean"].isBoolean,
                u = i.isComplex,
                c = o.isCollection,
                f = r.bignumber.arccos_arcsec;
            e.acos = function l(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("acos", arguments.length, 1);
                if (a(r)) return r >= -1 && 1 >= r ? Math.acos(r) : l(new i(r, 0));
                if (u(r)) {
                    var t = new i(r.im * r.im - r.re * r.re + 1, -2 * r.re * r.im),
                        p = e.sqrt(t),
                        m = new i(p.re - r.im, p.im + r.re),
                        h = e.log(m);
                    return new i(1.5707963267948966 - h.im, h.re)
                }
                if (c(r)) return o.deepMap(r, l);
                if (s(r) || null === r) return Math.acos(r);
                if (r instanceof n) return f(r, n, !1);
                throw new e.error.UnsupportedTypeError("acos", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = t(11),
                a = e.collection,
                s = r.number.isNumber,
                u = r["boolean"].isBoolean,
                c = i.isComplex,
                f = (o.isUnit, a.isCollection),
                l = r.bignumber.acosh_asinh_asech_acsch;
            e.acosh = function p(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("acosh", arguments.length, 1);
                if (s(r)) return r >= 1 ? Math.log(Math.sqrt(r * r - 1) + r) : -1 >= r ? new i(Math.log(Math.sqrt(r * r - 1) - r), Math.PI) : p(new i(r, 0));
                if (c(r)) {
                    var t, o = e.acos(r);
                    return o.im <= 0 ? (t = o.re, o.re = -o.im, o.im = t) : (t = o.im, o.im = -o.re, o.re = t), o
                }
                if (f(r)) return a.deepMap(r, p);
                if (u(r) || null === r) return r ? 0 : new i(0, 1.5707963267948966);
                if (r instanceof n) return l(r, n, !1, !1);
                throw new e.error.UnsupportedTypeError("acosh", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = e.collection,
                a = r.number.isNumber,
                s = r["boolean"].isBoolean,
                u = i.isComplex,
                c = o.isCollection,
                f = r.bignumber.arctan_arccot;
            e.acot = function p(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("acot", arguments.length, 1);
                if (a(r)) return r ? Math.atan(1 / r) : l;
                if (u(r)) {
                    if (0 == r.im) return new i(r.re ? Math.atan(1 / r.re) : l, 0);
                    var t = r.re * r.re + r.im * r.im;
                    return r = 0 != t ? new i(r.re = r.re / t, r.im = -r.im / t) : new i(0 != r.re ? r.re / 0 : 0, 0 != r.im ? -(r.im / 0) : 0), e.atan(r)
                }
                if (c(r)) return o.deepMap(r, p);
                if (s(r) || null === r) return r ? .7853981633974483 : l;
                if (r instanceof n) return f(r, n, !0);
                throw new e.error.UnsupportedTypeError("acot", e["typeof"](r))
            };
            var l = 1.5707963267948966
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = t(11),
                a = e.collection,
                s = r.number.isNumber,
                u = r["boolean"].isBoolean,
                c = i.isComplex,
                f = (o.isUnit, a.isCollection),
                l = r.bignumber.atanh_acoth;
            e.acoth = function m(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("acoth", arguments.length, 1);
                if (s(r)) return r >= 1 || -1 >= r ? isFinite(r) ? (Math.log((r + 1) / r) + Math.log(r / (r - 1))) / 2 : 0 : r ? m(new i(r, 0)) : new i(0, p);
                if (c(r)) {
                    if (0 == r.re && 0 == r.im) return new i(0, p);
                    var t = r.re * r.re + r.im * r.im;
                    return r = 0 != t ? new i(r.re / t, -r.im / t) : new i(0 != r.re ? r.re / 0 : 0, 0 != r.im ? -(r.im / 0) : 0), e.atanh(r)
                }
                if (f(r)) return a.deepMap(r, m);
                if (u(r) || null === r) return r ? 1 / 0 : new i(0, p);
                if (r instanceof n) return l(r, n, !0);
                throw new e.error.UnsupportedTypeError("acoth", e["typeof"](r))
            };
            var p = 1.5707963267948966
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = e.collection,
                a = r.number.isNumber,
                s = r["boolean"].isBoolean,
                u = i.isComplex,
                c = o.isCollection,
                f = r.bignumber.arcsin_arccsc;
            e.acsc = function p(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("acsc", arguments.length, 1);
                if (a(r)) return -1 >= r || r >= 1 ? Math.asin(1 / r) : p(new i(r, 0));
                if (u(r)) {
                    if (0 == r.re && 0 == r.im) return new i(l, 1 / 0);
                    var t = r.re * r.re + r.im * r.im;
                    return r = 0 != t ? new i(r.re = r.re / t, r.im = -r.im / t) : new i(0 != r.re ? r.re / 0 : 0, 0 != r.im ? -(r.im / 0) : 0), e.asin(r)
                }
                if (c(r)) return o.deepMap(r, p);
                if (s(r) || null === r) return r ? l : new i(l, 1 / 0);
                if (r instanceof n) return f(r, n, !0);
                throw new e.error.UnsupportedTypeError("acsc", e["typeof"](r))
            };
            var l = 1.5707963267948966
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = t(11),
                a = e.collection,
                s = r.number.isNumber,
                u = r["boolean"].isBoolean,
                c = i.isComplex,
                f = (o.isUnit, a.isCollection),
                l = r.bignumber.acosh_asinh_asech_acsch;
            e.acsch = function p(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("acsch", arguments.length, 1);
                if (s(r)) return r = 1 / r, Math.log(r + Math.sqrt(r * r + 1));
                if (c(r)) {
                    if (0 == r.im) return r = 0 != r.re ? Math.log(r.re + Math.sqrt(r.re * r.re + 1)) : 1 / 0, new i(r, 0);
                    var t = r.re * r.re + r.im * r.im;
                    return r = 0 != t ? new i(r.re / t, -r.im / t) : new i(0 != r.re ? r.re / 0 : 0, 0 != r.im ? -(r.im / 0) : 0), e.asinh(r)
                }
                if (f(r)) return a.deepMap(r, p);
                if (u(r) || null === r) return r ? .881373587019543 : 1 / 0;
                if (r instanceof n) return l(r, n, !0, !0);
                throw new e.error.UnsupportedTypeError("acsch", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = e.collection,
                a = r.number.isNumber,
                s = r["boolean"].isBoolean,
                u = i.isComplex,
                c = o.isCollection,
                f = r.bignumber.arccos_arcsec;
            e.asec = function l(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("asec", arguments.length, 1);
                if (a(r)) return -1 >= r || r >= 1 ? Math.acos(1 / r) : l(new i(r, 0));
                if (u(r)) {
                    if (0 == r.re && 0 == r.im) return new i(0, 1 / 0);
                    var t = r.re * r.re + r.im * r.im;
                    return r = 0 != t ? new i(r.re = r.re / t, r.im = -r.im / t) : new i(0 != r.re ? r.re / 0 : 0, 0 != r.im ? -(r.im / 0) : 0), e.acos(r)
                }
                if (c(r)) return o.deepMap(r, l);
                if (s(r) || null === r) return r ? 0 : new i(0, 1 / 0);
                if (r instanceof n) return f(r, n, !0);
                throw new e.error.UnsupportedTypeError("asec", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = t(11),
                a = e.collection,
                s = r.number.isNumber,
                u = r["boolean"].isBoolean,
                c = i.isComplex,
                f = (o.isUnit, a.isCollection),
                l = r.bignumber.acosh_asinh_asech_acsch;
            e.asech = function p(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("asech", arguments.length, 1);
                if (s(r)) {
                    if (1 >= r && r >= -1) {
                        r = 1 / r;
                        var t = Math.sqrt(r * r - 1);
                        return r > 0 ? Math.log(t + r) : new i(Math.log(t - r), Math.PI)
                    }
                    return p(new i(r, 0))
                }
                if (c(r)) {
                    if (0 == r.re && 0 == r.im) return new i(1 / 0, 0);
                    var o = r.re * r.re + r.im * r.im;
                    return r = 0 != o ? new i(r.re / o, -r.im / o) : new i(0 != r.re ? r.re / 0 : 0, 0 != r.im ? -(r.im / 0) : 0), e.acosh(r)
                }
                if (f(r)) return a.deepMap(r, p);
                if (u(r) || null === r) return r ? 0 : 1 / 0;
                if (r instanceof n) return l(r, n, !1, !0);
                throw new e.error.UnsupportedTypeError("asech", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = e.collection,
                a = r.number.isNumber,
                s = r["boolean"].isBoolean,
                u = i.isComplex,
                c = o.isCollection,
                f = r.bignumber.arcsin_arccsc;
            e.asin = function l(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("asin", arguments.length, 1);
                if (a(r)) return r >= -1 && 1 >= r ? Math.asin(r) : l(new i(r, 0));
                if (u(r)) {
                    var t = r.re,
                        p = r.im,
                        m = new i(p * p - t * t + 1, -2 * t * p),
                        h = e.sqrt(m),
                        g = new i(h.re - p, h.im + t),
                        d = e.log(g);
                    return new i(d.im, -d.re)
                }
                if (c(r)) return o.deepMap(r, l, !0);
                if (s(r) || null === r) return Math.asin(r);
                if (r instanceof n) return f(r, n, !1);
                throw new e.error.UnsupportedTypeError("asin", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = t(11),
                a = e.collection,
                s = r.number.isNumber,
                u = r["boolean"].isBoolean,
                c = i.isComplex,
                f = (o.isUnit, a.isCollection),
                l = r.bignumber.acosh_asinh_asech_acsch;
            e.asinh = function p(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("asinh", arguments.length, 1);
                if (s(r)) return Math.log(Math.sqrt(r * r + 1) + r);
                if (c(r)) {
                    var t = r.im;
                    r.im = -r.re, r.re = t;
                    var i = e.asin(r);
                    return r.re = -r.im, r.im = t, t = i.re, i.re = -i.im, i.im = t, i
                }
                if (f(r)) return a.deepMap(r, p, !0);
                if (u(r) || null === r) return r ? .881373587019543 : 0;
                if (r instanceof n) return l(r, n, !0, !1);
                throw new e.error.UnsupportedTypeError("asinh", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = e.collection,
                a = r.number.isNumber,
                s = r["boolean"].isBoolean,
                u = i.isComplex,
                c = o.isCollection,
                f = r.bignumber.arctan_arccot;
            e.atan = function l(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("atan", arguments.length, 1);
                if (a(r)) return Math.atan(r);
                if (u(r)) {
                    if (0 == r.re) {
                        if (1 == r.im) return new i(0, 1 / 0);
                        if (-1 == r.im) return new i(0, -(1 / 0))
                    }
                    var t = r.re,
                        p = r.im,
                        m = t * t + (1 - p) * (1 - p),
                        h = new i((1 - p * p - t * t) / m, -2 * t / m),
                        g = e.log(h);
                    return new i(-.5 * g.im, .5 * g.re)
                }
                if (c(r)) return o.deepMap(r, l, !0);
                if (s(r) || null === r) return Math.atan(r);
                if (r instanceof n) return f(r, n, !1);
                throw new e.error.UnsupportedTypeError("atan", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = e.collection,
                a = r.number.isNumber,
                s = r["boolean"].isBoolean,
                u = (i.isComplex, o.isCollection),
                c = r.bignumber.arctan2;
            e.atan2 = function f(r, t) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("atan2", arguments.length, 2);
                if (a(r)) {
                    if (a(t)) return Math.atan2(r, t);
                    if (t instanceof n) return c(new n(r), t, n)
                }
                if (u(r) || u(t)) return o.deepMap2(r, t, f);
                if (s(r) || null === r) return f(r ? 1 : 0, t);
                if (s(t) || null === t) return f(r, t ? 1 : 0);
                if (r instanceof n) return a(t) ? c(r, new n(t), n) : t instanceof n ? c(r, t, n) : f(r.toNumber(), t);
                if (t instanceof n) return r instanceof n ? c(r, t, n) : f(r, t.toNumber());
                throw new e.error.UnsupportedTypeError("atan2", e["typeof"](r), e["typeof"](t))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = t(11),
                a = e.collection,
                s = r.number.isNumber,
                u = r["boolean"].isBoolean,
                c = i.isComplex,
                f = (o.isUnit, a.isCollection),
                l = r.bignumber.atanh_acoth;
            e.atanh = function p(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("atanh", arguments.length, 1);
                if (s(r)) return 1 >= r && r >= -1 ? Math.log((1 + r) / (1 - r)) / 2 : p(new i(r, 0));
                if (c(r)) {
                    var t = r.re > 1 && 0 == r.im,
                        o = 1 - r.re,
                        m = 1 + r.re,
                        h = o * o + r.im * r.im;
                    r = 0 != h ? new i((m * o - r.im * r.im) / h, (r.im * o + m * r.im) / h) : new i(-1 != r.re ? r.re / 0 : 0, 0 != r.im ? r.im / 0 : 0);
                    var g = r.re;
                    return r.re = Math.log(Math.sqrt(r.re * r.re + r.im * r.im)) / 2, r.im = Math.atan2(r.im, g) / 2, t && (r.im = -r.im), r
                }
                if (f(r)) return a.deepMap(r, p, !0);
                if (u(r) || null === r) return r ? 1 / 0 : 0;
                if (r instanceof n) return l(r, n, !1);
                throw new e.error.UnsupportedTypeError("atanh", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = t(7),
                a = t(11),
                s = e.collection,
                u = n.number.isNumber,
                c = n["boolean"].isBoolean,
                f = o.isComplex,
                l = a.isUnit,
                p = s.isCollection,
                m = n.bignumber.cos_sin_sec_csc;
            e.cos = function h(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("cos", arguments.length, 1);
                if (u(r)) return Math.cos(r);
                if (f(r)) return new o(Math.cos(r.re) * e.cosh(-r.im), Math.sin(r.re) * e.sinh(-r.im));
                if (l(r)) {
                    if (!r.hasBase(a.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function cos is no angle");
                    return Math.cos(r.value)
                }
                if (p(r)) return s.deepMap(r, h);
                if (c(r) || null === r) return Math.cos(r);
                if (r instanceof i) return m(r, i, 0, !1);
                throw new e.error.UnsupportedTypeError("cos", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = t(11),
                a = e.collection,
                s = r.number.isNumber,
                u = r["boolean"].isBoolean,
                c = i.isComplex,
                f = o.isUnit,
                l = a.isCollection,
                p = r.bignumber.cosh_sinh_csch_sech;
            e.cosh = function m(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("cosh", arguments.length, 1);
                if (s(r)) return (Math.exp(r) + Math.exp(-r)) / 2;
                if (c(r)) {
                    var t = Math.exp(r.re),
                        h = Math.exp(-r.re);
                    return new i(Math.cos(r.im) * (t + h) / 2, Math.sin(r.im) * (t - h) / 2)
                }
                if (f(r)) {
                    if (!r.hasBase(o.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function cosh is no angle");
                    return m(r.value)
                }
                if (l(r)) return a.deepMap(r, m);
                if (u(r) || null === r) return m(r ? 1 : 0);
                if (r instanceof n) return p(r, n, !1, !1);
                throw new e.error.UnsupportedTypeError("cosh", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = t(7),
                a = t(11),
                s = e.collection,
                u = n.number.isNumber,
                c = n["boolean"].isBoolean,
                f = o.isComplex,
                l = a.isUnit,
                p = s.isCollection,
                m = n.bignumber.tan_cot;
            e.cot = function h(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("cot", arguments.length, 1);
                if (u(r)) return 1 / Math.tan(r);
                if (f(r)) {
                    var t = Math.exp(-4 * r.im) - 2 * Math.exp(-2 * r.im) * Math.cos(2 * r.re) + 1;
                    return new o(2 * Math.exp(-2 * r.im) * Math.sin(2 * r.re) / t, (Math.exp(-4 * r.im) - 1) / t)
                }
                if (l(r)) {
                    if (!r.hasBase(a.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function cot is no angle");
                    return 1 / Math.tan(r.value)
                }
                if (p(r)) return s.deepMap(r, h);
                if (c(r) || null === r) return h(+r);
                if (r instanceof i) return m(r, i, !0);
                throw new e.error.UnsupportedTypeError("cot", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = t(11),
                a = e.collection,
                s = r.number.isNumber,
                u = r["boolean"].isBoolean,
                c = i.isComplex,
                f = o.isUnit,
                l = a.isCollection,
                p = r.bignumber.tanh_coth;
            e.coth = function m(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("coth", arguments.length, 1);
                if (s(r)) {
                    var t = Math.exp(2 * r);
                    return (t + 1) / (t - 1)
                }
                if (c(r)) {
                    var h = Math.exp(2 * r.re),
                        g = h * Math.cos(2 * r.im),
                        d = h * Math.sin(2 * r.im),
                        v = (g - 1) * (g - 1) + d * d;
                    return new i(((g + 1) * (g - 1) + d * d) / v, -2 * d / v)
                }
                if (f(r)) {
                    if (!r.hasBase(o.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function coth is no angle");
                    return m(r.value)
                }
                if (l(r)) return a.deepMap(r, m);
                if (u(r) || null === r) return m(r ? 1 : 0);
                if (r instanceof n) return p(r, n, !0);
                throw new e.error.UnsupportedTypeError("coth", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = t(7),
                a = t(11),
                s = e.collection,
                u = n.number.isNumber,
                c = n["boolean"].isBoolean,
                f = o.isComplex,
                l = a.isUnit,
                p = s.isCollection,
                m = n.bignumber.cos_sin_sec_csc;
            e.csc = function h(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("csc", arguments.length, 1);
                if (u(r)) return 1 / Math.sin(r);
                if (f(r)) {
                    var t = .25 * (Math.exp(-2 * r.im) + Math.exp(2 * r.im)) - .5 * Math.cos(2 * r.re);
                    return new o(.5 * Math.sin(r.re) * (Math.exp(-r.im) + Math.exp(r.im)) / t, .5 * Math.cos(r.re) * (Math.exp(-r.im) - Math.exp(r.im)) / t)
                }
                if (l(r)) {
                    if (!r.hasBase(a.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function csc is no angle");
                    return 1 / Math.sin(r.value)
                }
                if (p(r)) return s.deepMap(r, h);
                if (c(r) || null === r) return h(+r);
                if (r instanceof i) return m(r, i, 1, !0);
                throw new e.error.UnsupportedTypeError("csc", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = t(11),
                a = e.collection,
                s = r.number,
                u = r.number.isNumber,
                c = r["boolean"].isBoolean,
                f = i.isComplex,
                l = o.isUnit,
                p = a.isCollection,
                m = r.bignumber.cosh_sinh_csch_sech;
            e.csch = function h(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("csch", arguments.length, 1);
                if (u(r)) return 0 == r ? Number.POSITIVE_INFINITY : Math.abs(2 / (Math.exp(r) - Math.exp(-r))) * s.sign(r);
                if (f(r)) {
                    var t = Math.exp(r.re),
                        g = Math.exp(-r.re),
                        d = Math.cos(r.im) * (t - g),
                        v = Math.sin(r.im) * (t + g),
                        y = d * d + v * v;
                    return new i(2 * d / y, -2 * v / y)
                }
                if (l(r)) {
                    if (!r.hasBase(o.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function csch is no angle");
                    return h(r.value)
                }
                if (p(r)) return a.deepMap(r, h);
                if (c(r) || null === r) return h(r ? 1 : 0);
                if (r instanceof n) return m(r, n, !0, !0);
                throw new e.error.UnsupportedTypeError("csch", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = t(7),
                a = t(11),
                s = e.collection,
                u = n.number.isNumber,
                c = n["boolean"].isBoolean,
                f = o.isComplex,
                l = a.isUnit,
                p = s.isCollection,
                m = n.bignumber.cos_sin_sec_csc;
            e.sec = function h(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("sec", arguments.length, 1);
                if (u(r)) return 1 / Math.cos(r);
                if (f(r)) {
                    var t = .25 * (Math.exp(-2 * r.im) + Math.exp(2 * r.im)) + .5 * Math.cos(2 * r.re);
                    return new o(.5 * Math.cos(r.re) * (Math.exp(-r.im) + Math.exp(r.im)) / t, .5 * Math.sin(r.re) * (Math.exp(r.im) - Math.exp(-r.im)) / t)
                }
                if (l(r)) {
                    if (!r.hasBase(a.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sec is no angle");
                    return 1 / Math.cos(r.value)
                }
                if (p(r)) return s.deepMap(r, h);
                if (c(r) || null === r) return h(+r);
                if (r instanceof i) return m(r, i, 0, !0);
                throw new e.error.UnsupportedTypeError("sec", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = t(11),
                a = e.collection,
                s = r.number.isNumber,
                u = r["boolean"].isBoolean,
                c = i.isComplex,
                f = o.isUnit,
                l = a.isCollection,
                p = r.bignumber.cosh_sinh_csch_sech;
            e.sech = function m(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("sech", arguments.length, 1);
                if (s(r)) return 2 / (Math.exp(r) + Math.exp(-r));
                if (c(r)) {
                    var t = Math.exp(r.re),
                        h = Math.exp(-r.re),
                        g = Math.cos(r.im) * (t + h),
                        d = Math.sin(r.im) * (t - h),
                        v = g * g + d * d;
                    return new i(2 * g / v, -2 * d / v)
                }
                if (f(r)) {
                    if (!r.hasBase(o.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sech is no angle");
                    return m(r.value)
                }
                if (l(r)) return a.deepMap(r, m);
                if (u(r) || null === r) return m(r ? 1 : 0);
                if (r instanceof n) return p(r, n, !1, !0);
                throw new e.error.UnsupportedTypeError("sech", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = t(7),
                a = t(11),
                s = e.collection,
                u = n.number.isNumber,
                c = n["boolean"].isBoolean,
                f = o.isComplex,
                l = a.isUnit,
                p = s.isCollection,
                m = n.bignumber.cos_sin_sec_csc;
            e.sin = function h(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("sin", arguments.length, 1);
                if (u(r)) return Math.sin(r);
                if (f(r)) return new o(Math.sin(r.re) * e.cosh(-r.im), Math.cos(r.re) * e.sinh(r.im));
                if (l(r)) {
                    if (!r.hasBase(a.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sin is no angle");
                    return Math.sin(r.value)
                }
                if (p(r)) return s.deepMap(r, h, !0);
                if (c(r) || null === r) return Math.sin(r);
                if (r instanceof i) return m(r, i, 1, !1);
                throw new e.error.UnsupportedTypeError("sin", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = t(11),
                a = e.collection,
                s = r.number.isNumber,
                u = r["boolean"].isBoolean,
                c = i.isComplex,
                f = o.isUnit,
                l = a.isCollection,
                p = r.bignumber.cosh_sinh_csch_sech;
            e.sinh = function m(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("sinh", arguments.length, 1);
                if (s(r)) return Math.abs(r) < 1 ? r + r * r * r / 6 + r * r * r * r * r / 120 : (Math.exp(r) - Math.exp(-r)) / 2;
                if (c(r)) {
                    var t = Math.cos(r.im),
                        h = Math.sin(r.im),
                        g = Math.exp(r.re),
                        d = Math.exp(-r.re);
                    return new i(t * (g - d) / 2, h * (g + d) / 2)
                }
                if (f(r)) {
                    if (!r.hasBase(o.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sinh is no angle");
                    return m(r.value)
                }
                if (l(r)) return a.deepMap(r, m, !0);
                if (u(r) || null === r) return m(r ? 1 : 0);
                if (r instanceof n) return p(r, n, !0, !1);
                throw new e.error.UnsupportedTypeError("sinh", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e, r) {
            var n = t(175),
                i = e.type.BigNumber,
                o = t(7),
                a = t(11),
                s = e.collection,
                u = n.number.isNumber,
                c = n["boolean"].isBoolean,
                f = o.isComplex,
                l = a.isUnit,
                p = s.isCollection,
                m = n.bignumber.tan_cot;
            e.tan = function h(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("tan", arguments.length, 1);
                if (u(r)) return Math.tan(r);
                if (f(r)) {
                    var t = Math.exp(-4 * r.im) + 2 * Math.exp(-2 * r.im) * Math.cos(2 * r.re) + 1;
                    return new o(2 * Math.exp(-2 * r.im) * Math.sin(2 * r.re) / t, (1 - Math.exp(-4 * r.im)) / t)
                }
                if (l(r)) {
                    if (!r.hasBase(a.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function tan is no angle");
                    return Math.tan(r.value)
                }
                if (p(r)) return s.deepMap(r, h, !0);
                if (c(r) || null === r) return Math.tan(r);
                if (r instanceof i) return m(r, i, !1);
                throw new e.error.UnsupportedTypeError("tan", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = e.type.BigNumber,
                i = t(7),
                o = t(11),
                a = e.collection,
                s = r.number.isNumber,
                u = r["boolean"].isBoolean,
                c = i.isComplex,
                f = o.isUnit,
                l = a.isCollection,
                p = r.bignumber.tanh_coth;
            e.tanh = function m(r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("tanh", arguments.length, 1);
                if (s(r)) {
                    var t = Math.exp(2 * r);
                    return (t - 1) / (t + 1)
                }
                if (c(r)) {
                    var h = Math.exp(2 * r.re),
                        g = h * Math.cos(2 * r.im),
                        d = h * Math.sin(2 * r.im),
                        v = (g + 1) * (g + 1) + d * d;
                    return new i(((g - 1) * (g + 1) + d * d) / v, 2 * d / v)
                }
                if (f(r)) {
                    if (!r.hasBase(o.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function tanh is no angle");
                    return m(r.value)
                }
                if (l(r)) return a.deepMap(r, m, !0);
                if (u(r) || null === r) return m(r ? 1 : 0);
                if (r instanceof n) return p(r, n, !1);
                throw new e.error.UnsupportedTypeError("tanh", e["typeof"](r))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = t(11),
                i = e.collection,
                o = r.string.isString,
                a = n.isUnit,
                s = i.isCollection;
            e.to = function u(r, t) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("to", arguments.length, 2);
                if (a(r) && (a(t) || o(t))) return r.to(t);
                if (s(r) || s(t)) return i.deepMap2(r, t, u);
                throw new e.error.UnsupportedTypeError("to", e["typeof"](r), e["typeof"](t))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = r.object;
            e.clone = function (r) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("clone", arguments.length, 1);
                return n.clone(r)
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(e, r) {
                if ("function" == typeof r) return e.filter(function (e) {
                    return r(e)
                });
                if (r instanceof RegExp) return e.filter(function (e) {
                    return r.test(e)
                });
                throw new TypeError("Function or RegExp expected")
            }
            var t = e.type.Matrix;
            e.filter = function (n, i) {
                if (2 !== arguments.length) throw new e.error.ArgumentsError("filter", arguments.length, 2);
                if (n instanceof t) {
                    var o = n.size();
                    if (o.length > 1) throw new Error("Only one dimensional matrices supported");
                    return e.matrix(r(n.toArray(), i))
                }
                if (Array.isArray(n)) return r(n, i);
                throw new e.error.UnsupportedTypeError("filter", e["typeof"](n), e["typeof"](compare))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = r.string;
            e.format = function (r, t) {
                var i = arguments.length;
                if (1 !== i && 2 !== i) throw new e.error.ArgumentsError("format", i, 1, 2);
                return n.format(r, t)
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(r, t, n) {
                (n.override || void 0 === e[r]) && (n.wrap && "function" == typeof t ? (e[r] = function () {
                    for (var r = [], n = 0, i = arguments.length; i > n; n++) {
                        var o = arguments[n];
                        r[n] = o && o.valueOf()
                    }
                    return t.apply(e, r)
                }, t && t.transform && (e[r].transform = t.transform)) : e[r] = t, t && t.transform && (e.expression.transform[r] = t.transform), e.chaining.Chain.createProxy(r, t))
            }

            function n(e) {
                return "function" == typeof e || s(e) || u(e) || c(e) || f(e)
            }
            var i = t(175),
                o = t(7),
                a = t(11),
                s = i.number.isNumber,
                u = i.string.isString,
                c = o.isComplex,
                f = a.isUnit;
            e["import"] = function l(i, o) {
                var a = arguments.length;
                if (1 != a && 2 != a) throw new e.error.ArgumentsError("import", a, 1, 2);
                var s, c = {
                    override: o && o.override || !1,
                    wrap: o && o.wrap || !1
                };
                if (u(i)) {
                    var f = t(207)(i);
                    l(f, o)
                } else {
                    if ("object" != typeof i) throw new TypeError("Object or module name expected");
                    for (s in i)
                        if (i.hasOwnProperty(s)) {
                            var p = i[s];
                            n(p) ? r(s, p, c) : l(p, o)
                        }
                }
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(e, r) {
                var t = function (n, i) {
                    return Array.isArray(n) ? n.map(function (e, r) {
                        return t(e, i.concat(r))
                    }) : r(n, i, e)
                };
                return t(e, [])
            }
            var t = e.type.Matrix;
            e.map = function (n, i) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("map", arguments.length, 2);
                if (Array.isArray(n)) return r(n, i);
                if (n instanceof t) return n.map(i);
                throw new e.error.UnsupportedTypeError("map", e["typeof"](n))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(175),
                n = r.string.isString;
            e.print = function (r, t, i) {
                var o = arguments.length;
                if (2 != o && 3 != o) throw new e.error.ArgumentsError("print", o, 2, 3);
                if (!n(r)) throw new TypeError("String expected as first parameter in function format");
                if (!(t instanceof Object)) throw new TypeError("Object expected as second parameter in function format");
                return r.replace(/\$([\w\.]+)/g, function (r, o) {
                    for (var a = o.split("."), s = t[a.shift()]; a.length && void 0 !== s;) {
                        var u = a.shift();
                        s = u ? s[u] : s + "."
                    }
                    return void 0 !== s ? n(s) ? s : e.format(s, i) : r
                })
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = e.type.Matrix;
            e.sort = function (t, n) {
                var i = null;
                if (1 === arguments.length) i = e.compare;
                else {
                    if (2 !== arguments.length) throw new e.error.ArgumentsError("sort", arguments.length, 1, 2);
                    if ("function" == typeof n) i = n;
                    else if ("asc" === n) i = e.compare;
                    else {
                        if ("desc" !== n) throw new e.error.UnsupportedTypeError("sort", e["typeof"](t), e["typeof"](n));
                        i = function (r, t) {
                            return -e.compare(r, t)
                        }
                    }
                }
                if (t instanceof r) {
                    var o = t.size();
                    if (o.length > 1) throw new Error("Only one dimensional matrices supported");
                    return e.matrix(t.toArray().sort(i))
                }
                if (Array.isArray(t)) return t.sort(i);
                throw new e.error.UnsupportedTypeError("sort", e["typeof"](t), e["typeof"](n))
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            var r = t(338),
                n = t(7),
                i = e.type.Matrix,
                o = t(11),
                a = t(9),
                s = t(8),
                u = t(12);
            e["typeof"] = function (t) {
                if (1 != arguments.length) throw new e.error.ArgumentsError("typeof", arguments.length, 1);
                var c = r.type(t);
                if ("object" === c) {
                    if (t instanceof n) return "complex";
                    if (t instanceof i) return "matrix";
                    if (t instanceof o) return "unit";
                    if (t instanceof a) return "index";
                    if (t instanceof s) return "range";
                    if (t instanceof u) return "help";
                    if (t instanceof e.type.BigNumber) return "bignumber";
                    if (t instanceof e.chaining.Chain) return "chain"
                }
                return c
            }
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(e, r) {
                var t = function (n, i) {
                    Array.isArray(n) ? n.forEach(function (e, r) {
                        t(e, i.concat(r))
                    }) : r(n, i, e)
                };
                t(e, [])
            }
            var t = e.type.Matrix;
            e.forEach = function (n, i) {
                if (2 != arguments.length) throw new e.error.ArgumentsError("forEach", arguments.length, 2);
                if (Array.isArray(n)) return r(n, i);
                if (n instanceof t) return n.forEach(i);
                throw new e.error.UnsupportedTypeError("forEach", e["typeof"](n))
            }
        }
    }, function (e, r, t) {
        "use strict";

        function n(e) {
            var r = String(e).toLowerCase().match(/^0*?(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
            if (!r) throw new SyntaxError("Invalid number");
            var t = r[1],
                n = r[2],
                i = parseFloat(r[4] || "0"),
                o = n.indexOf(".");
            i += -1 !== o ? o - 1 : n.length - 1, this.sign = t, this.coefficients = n.replace(".", "").replace(/^0*/, function (e) {
                return i -= e.length, ""
            }).replace(/0*$/, "").split("").map(function (e) {
                return parseInt(e)
            }), 0 === this.coefficients.length && (this.coefficients.push(0), i++), this.exponent = i
        }

        function i(e) {
            for (var r = [], t = 0; e > t; t++) r.push(0);
            return r
        }
        n.prototype.toFixed = function (e) {
            var r = this.roundDigits(this.exponent + 1 + (e || 0)),
                t = r.coefficients,
                n = r.exponent + 1,
                o = n + (e || 0);
            return t.length < o && (t = t.concat(i(o - t.length))), 0 > n && (t = i(-n + 1).concat(t), n = 1), e && t.splice(n, 0, 0 === n ? "0." : "."), this.sign + t.join("")
        }, n.prototype.toExponential = function (e) {
            var r = e ? this.roundDigits(e) : this.clone(),
                t = r.coefficients,
                n = r.exponent;
            t.length < e && (t = t.concat(i(e - t.length)));
            var o = t.shift();
            return this.sign + o + (t.length > 0 ? "." + t.join("") : "") + "e" + (n >= 0 ? "+" : "") + n
        }, n.prototype.toPrecision = function (e, r) {
            var t = r && void 0 !== r.lower ? r.lower : .001,
                n = r && void 0 !== r.upper ? r.upper : 1e5,
                o = Math.abs(Math.pow(10, this.exponent));
            if (t > o || o >= n) return this.toExponential(e);
            var a = e ? this.roundDigits(e) : this.clone(),
                s = a.coefficients,
                u = a.exponent;
            s.length < e && (s = s.concat(i(e - s.length))), s = s.concat(i(u - s.length + 1 + (s.length < e ? e - s.length : 0))), s = i(-u).concat(s);
            var c = u > 0 ? u : 0;
            return c < s.length - 1 && s.splice(c + 1, 0, "."), this.sign + s.join("")
        }, n.prototype.clone = function () {
            var e = new n("0");
            return e.sign = this.sign, e.coefficients = this.coefficients.slice(0), e.exponent = this.exponent, e
        }, n.prototype.roundDigits = function (e) {
            for (var r = this.clone(), t = r.coefficients; 0 >= e;) t.unshift(0), r.exponent++, e++;
            if (t.length > e) {
                var n = t.splice(e);
                if (n[0] >= 5) {
                    var i = e - 1;
                    for (t[i]++; 10 === t[i];) t.pop(), 0 === i && (t.unshift(0), r.exponent++, i++), i--, t[i]++
                }
            }
            return r
        }, e.exports = n
    }, function (e, r, t) {
        "use strict";

        function n(e, t, n) {
            var o, a, s = e.constructor,
                u = +(e.s < 0),
                c = +(t.s < 0);
            if (u) {
                o = i(r.not(e));
                for (var f = 0; f < o.length; ++f) o[f] ^= 1
            } else o = i(e);
            if (c) {
                a = i(r.not(t));
                for (var f = 0; f < a.length; ++f) a[f] ^= 1
            } else a = i(t);
            var l, p, m;
            o.length <= a.length ? (l = o, p = a, m = u) : (l = a, p = o, m = c);
            var h = l.length,
                g = p.length,
                d = 1 ^ n(u, c),
                v = new s(1 ^ d),
                y = s.ONE,
                x = new s(2),
                w = s.precision;
            for (s.config({
                    precision: 1e9
                }); h > 0;) n(l[--h], p[--g]) == d && (v = v.plus(y)), y = y.times(x);
            for (; g > 0;) n(m, p[--g]) == d && (v = v.plus(y)), y = y.times(x);
            return s.config({
                precision: w
            }), 0 == d && (v.s = -v.s), v
        }

        function i(e) {
            for (var r = e.c, t = r[0] + "", n = 1; n < r.length; ++n) {
                for (var i = r[n] + "", o = 7 - i.length; o--;) i = "0" + i;
                t += i
            }
            var a;
            for (a = t.length - 1;
                "0" == t.charAt(a); --a);
            var s = e.e,
                u = t.slice(0, a + 1 || 1),
                c = u.length;
            if (s > 0)
                if (++s > c)
                    for (s -= c; s--; u += "0");
                else c > s && (u = u.slice(0, s) + "." + u.slice(s));
            for (var f = [0], n = 0; n < u.length;) {
                for (var l = f.length; l--; f[l] *= 10);
                f[0] += u.charAt(n++) << 0;
                for (var a = 0; a < f.length; ++a) f[a] > 1 && (null == f[a + 1] && (f[a + 1] = 0), f[a + 1] += f[a] >> 1, f[a] &= 1)
            }
            return f.reverse()
        }

        function o(e, t) {
            var n = t.precision,
                i = -(n + 4),
                o = n + 8 - e.e,
                a = 25 - e.e,
                s = Math.max(1.442695 * Math.log(n + 2) | 5, 5);
            t.config({
                precision: a
            });
            var u = 0,
                c = new t(Math.asin(e.toNumber()) + "");
            do {
                var l = r.cos_sin_sec_csc(c, t, 1, !1),
                    p = f(l);
                l.isZero() || (l.s = c.s);
                var m = l.minus(e).div(p);
                c = c.minus(m), a = Math.min(2 * a, o), t.config({
                    precision: a
                })
            } while (2 * m.e >= i && !m.isZero() && ++u <= s);
            if (u == s) throw new Error("asin() failed to converge to the requested accuracy.Try with a higher precision.");
            return t.config({
                precision: n
            }), c.toDP(n - 1)
        }

        function a(e, r) {
            var t = e.constructor;
            t.config({
                precision: r + Math.log(r) | 4
            });
            for (var n = new t(1), i = e, o = 0 / 0, a = e.times(e), s = e, u = new t(n), c = new t(n), f = new t(n), l = 3; !i.equals(o); l += 2) s = s.times(a), u = u.times(f), c = c.times(f.plus(n)), o = i, f = new t(l), i = i.plus(s.times(u).div(f.times(c)));
            return t.config({
                precision: r
            }), i.toDP(r - 1)
        }

        function s(e) {
            for (var r = e, t = 0 / 0, n = e.times(e), i = e, o = !0, a = 3; !r.equals(t); a += 2) i = i.times(n), t = r, o = !o, r = o ? r.plus(i.div(a)) : r.minus(i.div(a));
            return r
        }

        function u(e, r) {
            for (var t = e.constructor.ONE, n = e, i = 0 / 0, o = e.times(e), a = r ? n : n = t, s = t, u = !0, c = r; !n.equals(i); c += 2) a = a.times(o), s = s.times(c + 1).times(c + 2), i = n, u = !u, n = u ? n.plus(a.div(s)) : n.minus(a.div(s));
            return n
        }

        function c(e, t, n) {
            var i = r.pi(t + 2),
                o = r.tau(t);
            if (e.abs().lte(i.toDP(e.dp()))) return [e, !1];
            var a = e.constructor;
            if (e.div(i.toDP(e.dp())).toNumber() % 2 == 0) return [new a(1 ^ n), !0];
            var s = e.mod(o);
            return s.toDP(e.dp(), 1).isZero() ? [new a(1 ^ n), !0] : (s.gt(i) && (n ? (s = s.minus(i), s.s = -s.s) : s = o.minus(s)), s.constructor = a, [s, !1])
        }

        function f(e) {
            var r = e.constructor,
                t = r.precision;
            r.config({
                precision: t + 2
            });
            var n = r.ONE.minus(e.times(e)).sqrt();
            return r.config({
                precision: t
            }), n.toDP(t - 1)
        }
        var l = t(5),
            p = t(3).isNumber,
            m = (t(3).digits, t(339).memoize);
        r.isBigNumber = function (e) {
            return e instanceof l
        }, r.e = m(function (e) {
            var r = l.constructor({
                precision: e
            });
            return new r(1).exp()
        }), r.phi = m(function (e) {
            var r = l.constructor({
                precision: e
            });
            return new r(1).plus(new r(5).sqrt()).div(2)
        }), r.pi = m(function (e) {
            var r = l.constructor({
                    precision: e + 4
                }),
                t = new r(4).times(s(new r(1).div(5))).minus(s(new r(1).div(239)));
            return r.config({
                precision: e
            }), new r(4).times(t)
        }), r.tau = m(function (e) {
            var t = r.pi(e + 2),
                n = l.constructor({
                    precision: e
                });
            return new n(2).times(t)
        }), r.and = function (e, r) {
            if (e.isFinite() && !e.isInteger() || r.isFinite() && !r.isInteger()) throw new Error("Parameters in function bitAnd must be integer numbers");
            var t = e.constructor;

            if (e.isNaN() || r.isNaN()) return new t(0 / 0);
            if (e.isZero() || r.eq(-1) || e.eq(r)) return e;
            if (r.isZero() || e.eq(-1)) return r;
            if (!e.isFinite() || !r.isFinite()) {
                if (!e.isFinite() && !r.isFinite()) return e.isNegative() == r.isNegtive() ? e : new t(0);
                if (!e.isFinite()) return r.isNegative() ? e : e.isNegative() ? new t(0) : r;
                if (!r.isFinite()) return e.isNegative() ? r : r.isNegative() ? new t(0) : e
            }
            return n(e, r, function (e, r) {
                return e & r
            })
        }, r.leftShift = function (e, r) {
            if (e.isFinite() && !e.isInteger() || r.isFinite() && !r.isInteger()) throw new Error("Parameters in function leftShift must be integer numbers");
            var t = e.constructor;
            return e.isNaN() || r.isNaN() || r.isNegative() && !r.isZero() ? new t(0 / 0) : e.isZero() || r.isZero() ? e : e.isFinite() || r.isFinite() ? e.times(r.lt(55) ? Math.pow(2, r.toNumber()) + "" : new t(2).pow(r)) : new t(0 / 0)
        }, r.not = function (e) {
            if (e.isFinite() && !e.isInteger()) throw new Error("Parameter in function bitNot must be integer numbers");
            var r = e.constructor,
                t = r.precision;
            r.config({
                precision: 1e9
            });
            var e = e.plus(r.ONE);
            return e.s = -e.s || null, r.config({
                precision: t
            }), e
        }, r.or = function (e, r) {
            if (e.isFinite() && !e.isInteger() || r.isFinite() && !r.isInteger()) throw new Error("Parameters in function bitOr must be integer numbers");
            var t = e.constructor;
            if (e.isNaN() || r.isNaN()) return new t(0 / 0);
            var i = new t(-1);
            return e.isZero() || r.eq(i) || e.eq(r) ? r : r.isZero() || e.eq(i) ? e : e.isFinite() && r.isFinite() ? n(e, r, function (e, r) {
                return e | r
            }) : !e.isFinite() && !e.isNegative() && r.isNegative() || e.isNegative() && !r.isNegative() && !r.isFinite() ? i : e.isNegative() && r.isNegative() ? e.isFinite() ? e : r : e.isFinite() ? r : e
        }, r.rightShift = function (e, r) {
            if (e.isFinite() && !e.isInteger() || r.isFinite() && !r.isInteger()) throw new Error("Parameters in function rightArithShift must be integer numbers");
            var t = e.constructor;
            return e.isNaN() || r.isNaN() || r.isNegative() && !r.isZero() ? new t(0 / 0) : e.isZero() || r.isZero() ? e : r.isFinite() ? r.lt(55) ? e.div(Math.pow(2, r.toNumber()) + "").floor() : e.div(new t(2).pow(r)).floor() : new t(e.isNegative() ? -1 : e.isFinite() ? 0 : 0 / 0)
        }, r.xor = function (e, t) {
            if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Parameters in function bitXor must be integer numbers");
            var i = e.constructor;
            if (e.isNaN() || t.isNaN()) return new i(0 / 0);
            if (e.isZero()) return t;
            if (t.isZero()) return e;
            if (e.eq(t)) return new i(0);
            var o = new i(-1);
            return e.eq(o) ? r.not(t) : t.eq(o) ? r.not(e) : e.isFinite() && t.isFinite() ? n(e, t, function (e, r) {
                return e ^ r
            }) : e.isFinite() || t.isFinite() ? new i(e.isNegative() == t.isNegative() ? 1 / 0 : -(1 / 0)) : o
        }, r.arccos_arcsec = function (e, t, n) {
            var i = t.precision;
            if (n) {
                if (e.abs().lt(t.ONE)) throw new Error("asec() only has non-complex values for |x| >= 1.")
            } else if (e.abs().gt(t.ONE)) throw new Error("acos() only has non-complex values for |x| <= 1.");
            if (e.eq(-1)) return r.pi(i);
            t.config({
                precision: i + 4
            }), n && (e = t.ONE.div(e));
            var o = r.arctan_arccot(t.ONE.minus(e.times(e)).sqrt().div(e.plus(t.ONE)), t).times(2);
            return t.config({
                precision: i
            }), o.toDP(i - 1)
        }, r.arcsin_arccsc = function (e, t, n) {
            if (e.isNaN()) return new t(0 / 0);
            var i = t.precision,
                s = e.abs();
            if (n) {
                if (s.lt(t.ONE)) throw new Error("acsc() only has non-complex values for |x| >= 1.");
                t.config({
                    precision: i + 2
                }), e = t.ONE.div(e), t.config({
                    precision: i
                }), s = e.abs()
            } else if (s.gt(t.ONE)) throw new Error("asin() only has non-complex values for |x| <= 1.");
            if (s.gt(.8)) {
                t.config({
                    precision: i + 4
                });
                var u = e.s,
                    c = r.pi(i + 4).div(2);
                return e = c.minus(r.arcsin_arccsc(t.ONE.minus(e.times(e)).sqrt(), t)), e.s = u, e.constructor = t, t.config({
                    precision: i
                }), e.toDP(i - 1)
            }
            var f = s.gt(.58);
            f && (t.config({
                precision: i + 8
            }), e = e.div(new t(2).sqrt().times(t.ONE.minus(e.times(e)).sqrt().plus(t.ONE).sqrt())), t.config({
                precision: i
            }));
            var l = 60 >= i || e.dp() <= Math.log(i) && e.lt(.05) ? a(e, i) : o(e, t);
            return f ? l.times(2) : l
        }, r.arctan_arccot = function (e, t, n) {
            if (e.isNaN()) return new t(0 / 0);
            if (!n && e.isZero() || n && !e.isFinite()) return new t(0);
            var i = t.precision;
            if (!n && !e.isFinite() || n && e.isZero()) {
                var o = r.pi(i + 2).div(2).toDP(i - 1);
                return o.constructor = t, o.s = e.s, o
            }
            t.config({
                precision: i + 4
            }), n && (e = t.ONE.div(e));
            var a = e.abs();
            if (a.lte(.875)) {
                var u = s(e);
                return u.constructor = t, t.config({
                    precision: i
                }), u.toDP(t.precision - 1)
            }
            if (a.gte(1.143)) {
                var o = r.pi(i + 4).div(2),
                    u = o.minus(s(t.ONE.div(a)));
                return u.s = e.s, u.constructor = t, t.config({
                    precision: i
                }), u.toDP(t.precision - 1)
            }
            return e = e.div(e.times(e).plus(1).sqrt()), t.config({
                precision: i
            }), r.arcsin_arccsc(e, t)
        }, r.arctan2 = function (e, t, n) {
            var i = n.precision;
            if (t.isZero()) {
                if (e.isZero()) return new n(0 / 0);
                var o = r.pi(i + 2).div(2).toDP(i - 1);
                return o.constructor = n, o.s = e.s, o
            }
            n.config({
                precision: i + 2
            });
            var a = r.arctan_arccot(e.div(t), n, !1);
            if (t.isNegative()) {
                var s = r.pi(i + 2);
                a = e.isNegative() ? a.minus(s) : a.plus(s)
            }
            return a.constructor = n, n.config({
                precision: i
            }), a.toDP(i - 1)
        }, r.acosh_asinh_asech_acsch = function (e, r, t, n) {
            if (e.isNaN()) return new r(0 / 0);
            if (n && e.isZero()) return new r(1 / 0);
            if (!t)
                if (n) {
                    if (e.isNegative() || e.gt(r.ONE)) throw new Error("asech() only has non-complex values for 0 <= x <= 1.")
                } else if (e.lt(r.ONE)) throw new Error("acosh() only has non-complex values for x >= 1.");
            var i = r.precision;
            r.config({
                precision: i + 4
            });
            var o = new r(e);
            o.constructor = r, n && (o = r.ONE.div(o));
            var a = t ? o.times(o).plus(r.ONE) : o.times(o).minus(r.ONE),
                s = o.plus(a.sqrt()).ln();
            return r.config({
                precision: i
            }), new r(s.toPrecision(i))
        }, r.atanh_acoth = function (e, r, t) {
            if (e.isNaN()) return new r(0 / 0);
            var n = e.abs();
            if (n.eq(r.ONE)) return new r(e.isNegative() ? -(1 / 0) : 1 / 0);
            if (n.gt(r.ONE)) {
                if (!t) throw new Error("atanh() only has non-complex values for |x| <= 1.")
            } else if (t) throw new Error("acoth() has complex values for |x| < 1.");
            if (e.isZero()) return new r(0);
            var i = r.precision;
            r.config({
                precision: i + 4
            });
            var o = new r(e);
            o.constructor = r, t && (o = r.ONE.div(o));
            var a = r.ONE.plus(o).div(r.ONE.minus(o)).ln().div(2);
            return r.config({
                precision: i
            }), new r(a.toPrecision(i))
        }, r.cos_sin_sec_csc = function (e, r, t, n) {
            if (e.isNaN() || !e.isFinite()) return new r(0 / 0);
            var i = r.precision,
                o = new r(e),
                a = o.isNegative();
            a && (o.s = -o.s);
            var s = i + (0 | Math.log(i)) + 3;
            if (r.config({
                    precision: s
                }), o = c(o, s, t), o[0].constructor = r, o[1]) return o = o[0], n && o.isZero() && (o = new r(1 / 0)), r.config({
                precision: i
            }), o;
            var f;
            if (o = o[0], t) {
                f = u(o.div(3125), t), r.config({
                    precision: Math.min(s, i + 15)
                });
                for (var l = new r(5), p = new r(16), m = new r(20), h = 0; 5 > h; ++h) {
                    var g = f.times(f),
                        d = g.times(f),
                        v = d.times(g);
                    f = p.times(v).minus(m.times(d)).plus(l.times(f))
                }
                a && (f.s = -f.s)
            } else {
                var y, x;
                o.abs().lt(r.ONE) ? (y = 64, x = 3) : (y = 256, x = 4), f = u(o.div(y), t), r.config({
                    precision: Math.min(s, i + 8)
                });
                for (var w = new r(8); x > 0; --x) {
                    var g = f.times(f),
                        b = g.times(g);
                    f = w.times(b.minus(g)).plus(r.ONE)
                }
            }
            return n && (f = f.e <= -i ? new r(1 / 0) : r.ONE.div(f)), r.config({
                precision: i
            }), f.toDP(i - 1)
        }, r.tan_cot = function (e, t, n) {
            if (e.isNaN()) return new t(0 / 0);
            var i = t.precision,
                o = r.pi(i + 2),
                a = o.div(2).toDP(i - 1);
            o = o.toDP(i - 1);
            var s = c(e, i, 1)[0];
            if (s.abs().eq(o)) return new t(1 / 0);
            t.config({
                precision: i + 4
            });
            var u = r.cos_sin_sec_csc(s, t, 1, !1),
                l = f(u);
            u = u.toDP(i), l = l.toDP(i), s.eq(e) ? s.gt(a) && (l.s = -l.s) : o.minus(s.abs()).gt(a) && (l.s = -l.s);
            var p = n ? l.div(u) : u.div(l);
            return t.config({
                precision: i
            }), new t(p.toPrecision(i))
        }, r.cosh_sinh_csch_sech = function (e, r, t, n) {
            if (e.isNaN()) return new r(0 / 0);
            if (!e.isFinite()) return new r(n ? 0 : t ? e : 1 / 0);
            var i = r.precision;
            r.config({
                precision: i + 4
            });
            var o = new r(e);
            return o.constructor = r, o = o.exp(), o = t ? o.minus(r.ONE.div(o)) : o.plus(r.ONE.div(o)), o = n ? new r(2).div(o) : o.div(2), r.config({
                precision: i
            }), new r(o.toPrecision(i))
        }, r.tanh_coth = function (e, r, t) {
            if (e.isNaN()) return new r(0 / 0);
            if (!e.isFinite()) return new r(e.s);
            var n = r.precision;
            r.config({
                precision: n + 4
            });
            var i = new r(e);
            i.constructor = r;
            var o = i.exp(),
                a = r.ONE.div(o),
                s = o.minus(a);
            return s = t ? o.plus(a).div(s) : s.div(o.plus(a)), r.config({
                precision: n
            }), s.toDP(n - 1)
        }, r.format = function (e, t) {
            if ("function" == typeof t) return t(e);
            if (!e.isFinite()) return e.isNaN() ? "NaN" : e.gt(0) ? "Infinity" : "-Infinity";
            var n = "auto",
                i = void 0;
            switch (void 0 !== t && (t.notation && (n = t.notation), p(t) ? i = t : t.precision && (i = t.precision)), n) {
                case "fixed":
                    return r.toFixed(e, i);
                case "exponential":
                    return r.toExponential(e, i);
                case "auto":
                    var o = .001,
                        a = 1e5;
                    t && t.exponential && (void 0 !== t.exponential.lower && (o = t.exponential.lower), void 0 !== t.exponential.upper && (a = t.exponential.upper)); {
                        ({
                            toExpNeg: e.constructor.toExpNeg,
                            toExpPos: e.constructor.toExpPos
                        })
                    }
                    if (e.constructor.config({
                            toExpNeg: Math.round(Math.log(o) / Math.LN10),
                            toExpPos: Math.round(Math.log(a) / Math.LN10)
                        }), e.isZero()) return "0";
                    var s, u = e.abs();
                    return s = u.gte(o) && u.lt(a) ? e.toSignificantDigits(i).toFixed() : r.toExponential(e, i), s.replace(/((\.\d*?)(0+))($|e)/, function () {
                        var e = arguments[2],
                            r = arguments[4];
                        return "." !== e ? e + r : r
                    });
                default:
                    throw new Error('Unknown notation "' + n + '". Choose "auto", "exponential", or "fixed".')
            }
        }, r.toExponential = function (e, r) {
            return void 0 !== r ? e.toExponential(r - 1) : e.toExponential()
        }, r.toFixed = function (e, r) {
            return e.toFixed(r || 0)
        }
    }, function (e, r, t) {
        "use strict";

        function n(e) {
            for (var r = []; m(e);) r.push(e.length), e = e[0];
            return r
        }

        function i(e, r, t) {
            var n, o = e.length;
            if (o != r[t]) throw new l(o, r[t]);
            if (t < r.length - 1) {
                var a = t + 1;
                for (n = 0; o > n; n++) {
                    var s = e[n];
                    if (!m(s)) throw new l(r.length - 1, r.length, "<");
                    i(e[n], r, a)
                }
            } else
                for (n = 0; o > n; n++)
                    if (m(e[n])) throw new l(r.length + 1, r.length, ">")
        }

        function o(e, t, n, i) {
            var a, s, u = e.length,
                c = t[n],
                l = Math.min(u, c);
            if (e.length = c, n < t.length - 1) {
                var p = n + 1;
                for (a = 0; l > a; a++) s = e[a], m(s) || (s = [s], e[a] = s), o(s, t, p, i);
                for (a = l; c > a; a++) s = [], e[a] = s, o(s, t, p, i)
            } else {
                for (a = 0; l > a; a++)
                    for (; m(e[a]);) e[a] = e[a][0];
                if (i !== r.UNINITIALIZED)
                    for (a = l; c > a; a++) e[a] = f.clone(i)
            }
        }

        function a(e, r, t) {
            var n, i;
            if (r > t) {
                var o = t + 1;
                for (n = 0, i = e.length; i > n; n++) e[n] = a(e[n], r, o)
            } else
                for (; m(e);) e = e[0];
            return e
        }

        function s(e, r, t) {
            var n, i;
            if (m(e)) {
                var o = t + 1;
                for (n = 0, i = e.length; i > n; n++) e[n] = s(e[n], r, o)
            } else
                for (var a = t; r > a; a++) e = [e];
            return e
        }
        var u = t(3),
            c = t(176),
            f = t(2),
            l = (t(338), t(172)),
            p = t(173),
            m = Array.isArray;
        r.size = function (e) {
            var t = n(e);
            return r.validate(e, t), t
        }, r.validate = function (e, r) {
            var t = 0 == r.length;
            if (t) {
                if (m(e)) throw new l(e.length, 0)
            } else i(e, r, 0)
        }, r.validateIndex = function (e, r) {
            if (!u.isNumber(e) || !u.isInteger(e)) throw new TypeError("Index must be an integer (value: " + e + ")");
            if (0 > e) throw new p(e);
            if (void 0 !== r && e >= r) throw new p(e, r)
        }, r.UNINITIALIZED = {}, r.resize = function (e, r, t) {
            if (!m(e) || !m(r)) throw new TypeError("Array expected");
            if (0 === r.length) throw new Error("Resizing to scalar is not supported");
            r.forEach(function (e) {
                if (!u.isNumber(e) || !u.isInteger(e) || 0 > e) throw new TypeError("Invalid size, must contain positive integers (size: " + c.format(r) + ")")
            });
            var n = void 0 !== t ? t : 0;
            return o(e, r, 0, n), e
        }, r.squeeze = function (e, t) {
            for (var n = t || r.size(e); m(e) && 1 === e.length;) e = e[0], n.shift();
            for (var i = n.length; 1 === n[i - 1];) i--;
            return i < n.length && (e = a(e, i, 0), n.length = i), e
        }, r.unsqueeze = function (e, t, n, i) {
            var o = i || r.size(e);
            if (n)
                for (var a = 0; n > a; a++) e = [e], o.unshift(1);
            for (e = s(e, t, 0); o.length < t;) o.push(1);
            return e
        }, r.flatten = function (e) {
            for (var r = e, t = Array.isArray; t(r[0]);) {
                for (var n = [], i = 0, o = r.length; o > i; i++) n = n.concat.apply(n, r[i]);
                r = n
            }
            return r
        }, r.argsToArray = function (e) {
            for (var r = [], t = 0, n = e.length; n > t; t++) r[t] = e[t];
            return r
        }, r.isArray = m
    }, function (e, r, t) {
        e.exports = "1.5.2"
    }, function (e, r, t) {
        "use strict";

        function n(e, r, t, i) {
            if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            this.fn = e, this.count = r, this.min = t, this.max = i, this.message = "Wrong number of arguments in function " + e + " (" + r + " provided, " + t + (void 0 != i ? "-" + i : "") + " expected)", this.stack = (new Error).stack
        }
        n.prototype = new Error, n.prototype.constructor = Error, n.prototype.name = "ArgumentsError", e.exports = n
    }, function (e, r, t) {
        "use strict";

        function n(e, r, t) {
            if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            this.actual = e, this.expected = r, this.relation = t, this.message = "Dimension mismatch (" + (Array.isArray(e) ? "[" + e.join(", ") + "]" : e) + " " + (this.relation || "!=") + " " + (Array.isArray(r) ? "[" + r.join(", ") + "]" : r) + ")", this.stack = (new Error).stack
        }
        n.prototype = new RangeError, n.prototype.constructor = RangeError, n.prototype.name = "DimensionError", e.exports = n
    }, function (e, r, t) {
        "use strict";

        function n(e, r, t) {
            if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            this.index = e, arguments.length < 3 ? (this.min = 0, this.max = r) : (this.min = r, this.max = t), this.message = void 0 !== this.min && this.index < this.min ? "Index out of range (" + this.index + " < " + this.min + ")" : void 0 !== this.max && this.index >= this.max ? "Index out of range (" + this.index + " > " + (this.max - 1) + ")" : "Index out of range (" + this.index + ")", this.stack = (new Error).stack
        }
        n.prototype = new RangeError, n.prototype.constructor = RangeError, n.prototype.name = "IndexError", e.exports = n
    }, function (e, r, t) {
        "use strict";

        function n(e, r) {
            if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            this.fn = e, this.types = Array.prototype.splice.call(arguments, 1), this.message = e ? 0 == this.types.length ? "Unsupported type of argument in function " + e : "Function " + e + "(" + this.types.join(", ") + ") not supported" : "Unsupported type of argument", this.stack = (new Error).stack
        }
        n.prototype = new TypeError, n.prototype.constructor = TypeError, n.prototype.name = "UnsupportedTypeError", e.exports = n
    }, function (e, r, t) {
        "use strict";
        r.array = t(169), r["boolean"] = t(209), r.number = t(3), r.bignumber = t(168), r.object = t(2), r.string = t(176), r.types = t(338)
    }, function (e, r, t) {
        "use strict";

        function n(e, t) {
            if (Array.isArray(e)) {
                for (var i = "[", o = e.length, a = 0; o > a; a++) 0 != a && (i += ", "), i += n(e[a], t);
                return i += "]"
            }
            return r.format(e, t)
        }
        var i = t(3),
            o = t(168),
            a = t(5);
        r.isString = function (e) {
            return e instanceof String || "string" == typeof e
        }, r.endsWith = function (e, r) {
            var t = e.length - r.length,
                n = e.length;
            return e.substring(t, n) === r
        }, r.format = function (e, t) {
            return i.isNumber(e) ? i.format(e, t) : e instanceof a ? o.format(e, t) : Array.isArray(e) ? n(e, t) : r.isString(e) ? '"' + e + '"' : "function" == typeof e ? e.syntax ? e.syntax + "" : "function" : e instanceof Object ? "function" == typeof e.format ? e.format(t) : e.toString() : String(e)
        }
    }, function (e, r, t) {
        "use strict";

        function n(e) {
            if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            if (this.nodes = e || [], !a(this.nodes) || !this.nodes.every(s)) throw new TypeError("Array containing Nodes expected")
        }
        var i = t(185),
            o = t(176),
            a = Array.isArray,
            s = i.isNode;
        n.prototype = new i, n.prototype.type = "ArrayNode", n.prototype._compile = function (e) {
            var r = "array" !== e.math.config().matrix,
                t = this.nodes.map(function (r) {
                    return r._compile(e)
                });
            return (r ? "math.matrix([" : "[") + t.join(",") + (r ? "])" : "]")
        }, n.prototype.forEach = function (e) {
            for (var r = 0; r < this.nodes.length; r++) {
                var t = this.nodes[r];
                e(t, "nodes[" + r + "]", this)
            }
        }, n.prototype.map = function (e) {
            for (var r = [], t = 0; t < this.nodes.length; t++) r[t] = this._ifNode(e(this.nodes[t], "nodes[" + t + "]", this));
            return new n(r)
        }, n.prototype.clone = function () {
            return new n(this.nodes.slice(0))
        }, n.prototype.toString = function () {
            return o.format(this.nodes)
        }, n.prototype._toTex = function (e) {
            this.latexType = this.latexType || "bmatrix";
            var r = "\\begin{" + this.latexType + "}";
            return this.nodes.forEach(function (t) {
                r += t.nodes ? t.nodes.map(function (r) {
                    return r.toTex(e)
                }).join("&") : t.toTex(e), r += "\\\\"
            }), r += "\\end{" + this.latexType + "}"
        }, e.exports = n
    }, function (e, r, t) {
        "use strict";

        function n(e, r) {
            if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            if (!c(e)) throw new TypeError('String expected for parameter "name"');
            if (!(r instanceof i)) throw new TypeError('Node expected for parameter "expr"');
            if (e in a) throw new Error('Illegal symbol name, "' + e + '" is a reserved keyword');
            this.name = e, this.expr = r
        }
        var i = t(185),
            o = t(177),
            a = t(341),
            s = t(342),
            u = t(343),
            c = t(176).isString;
        n.prototype = new i, n.prototype.type = "AssignmentNode", n.prototype._compile = function (e) {
            return 'scope["' + this.name + '"] = ' + this.expr._compile(e)
        }, n.prototype.forEach = function (e) {
            e(this.expr, "expr", this)
        }, n.prototype.map = function (e) {
            return new n(this.name, this._ifNode(e(this.expr, "expr", this)))
        }, n.prototype.clone = function () {
            return new n(this.name, this.expr)
        }, n.prototype.toString = function () {
            var e = s.getPrecedence(this),
                r = s.getPrecedence(this.expr),
                t = this.expr.toString();
            return null !== r && e >= r && (t = "(" + t + ")"), this.name + " = " + t
        }, n.prototype._toTex = function (e) {
            var r = s.getPrecedence(this),
                t = s.getPrecedence(this.expr),
                n = this.expr.toTex(e);
            n = null !== t && r >= t ? u.addBraces(n, !0) : u.addBraces(n, !1);
            var i;
            return this.expr instanceof o && (i = ["\\mathbf{", "}"]), u.addBraces(u.toSymbol(this.name), i) + "=" + n
        }, e.exports = n
    }, function (e, r, t) {
        "use strict";

        function n(e) {
            if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            if (!Array.isArray(e)) throw new Error("Array expected");
            this.blocks = e.map(function (e) {
                var r = e && e.node,
                    t = e && void 0 !== e.visible ? e.visible : !0;
                if (!(r instanceof i)) throw new TypeError('Property "node" must be a Node');
                if (!a(t)) throw new TypeError('Property "visible" must be a boolean');
                return {
                    node: r,
                    visible: t
                }
            })
        }
        var i = t(185),
            o = t(13),
            a = t(209).isBoolean;
        n.prototype = new i, n.prototype.type = "BlockNode", n.prototype._compile = function (e) {
            e.ResultSet = o;
            var r = this.blocks.map(function (r) {
                var t = r.node._compile(e);
                return r.visible ? "results.push(" + t + ");" : t + ";"
            });
            return "(function () {var results = [];" + r.join("") + "return new ResultSet(results);})()"
        }, n.prototype.forEach = function (e) {
            for (var r = 0; r < this.blocks.length; r++) e(this.blocks[r].node, "blocks[" + r + "].node", this)
        }, n.prototype.map = function (e) {
            for (var r = [], t = 0; t < this.blocks.length; t++) {
                var i = this.blocks[t],
                    o = this._ifNode(e(i.node, "blocks[" + t + "].node", this));
                r[t] = {
                    node: o,
                    visible: i.visible
                }
            }
            return new n(r)
        }, n.prototype.clone = function () {
            var e = this.blocks.map(function (e) {
                return {
                    node: e.node,
                    visible: e.visible
                }
            });
            return new n(e)
        }, n.prototype.toString = function () {
            return this.blocks.map(function (e) {
                return e.node.toString() + (e.visible ? "" : ";")
            }).join("\n")
        }, n.prototype._toTex = function (e) {
            return this.blocks.map(function (r) {
                return r.node.toTex(e) + (r.visible ? "" : ";")
            }).join("\n")
        }, e.exports = n
    }, function (e, r, t) {
        "use strict";

        function n(e, r, t) {
            if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            if (!(e instanceof i)) throw new TypeError("Parameter condition must be a Node");
            if (!(r instanceof i)) throw new TypeError("Parameter trueExpr must be a Node");
            if (!(t instanceof i)) throw new TypeError("Parameter falseExpr must be a Node");
            this.condition = e, this.trueExpr = r, this.falseExpr = t
        }
        var i = t(185),
            o = t(343),
            a = t(5),
            s = t(7),
            u = t(11),
            c = t(175),
            f = t(342),
            l = c.string.isString,
            p = c.number.isNumber,
            m = c["boolean"].isBoolean;
        n.prototype = new i, n.prototype.type = "ConditionalNode", n.prototype._compile = function (e) {
            return e.testCondition = function (r) {
                if (p(r) || m(r) || l(r)) return r ? !0 : !1;
                if (r instanceof a) return r.isZero() ? !1 : !0;
                if (r instanceof s) return r.re || r.im ? !0 : !1;
                if (r instanceof u) return r.value ? !0 : !1;
                if (null === r || void 0 === r) return !1;
                throw new TypeError('Unsupported type of condition "' + e.math["typeof"](r) + '"')
            }, "testCondition(" + this.condition._compile(e) + ") ? ( " + this.trueExpr._compile(e) + ") : ( " + this.falseExpr._compile(e) + ")"
        }, n.prototype.forEach = function (e) {
            e(this.condition, "condition", this), e(this.trueExpr, "trueExpr", this), e(this.falseExpr, "falseExpr", this)
        }, n.prototype.map = function (e) {
            return new n(this._ifNode(e(this.condition, "condition", this)), this._ifNode(e(this.trueExpr, "trueExpr", this)), this._ifNode(e(this.falseExpr, "falseExpr", this)))
        }, n.prototype.clone = function () {
            return new n(this.condition, this.trueExpr, this.falseExpr)
        }, n.prototype.toString = function () {
            var e = f.getPrecedence(this),
                r = this.condition.toString(),
                t = f.getPrecedence(this.condition);
            ("OperatorNode" === this.condition.type || null !== t && e >= t) && (r = "(" + r + ")");
            var n = this.trueExpr.toString(),
                i = f.getPrecedence(this.trueExpr);
            ("OperatorNode" === this.trueExpr.type || null !== i && e >= i) && (n = "(" + n + ")");
            var o = this.falseExpr.toString(),
                a = f.getPrecedence(this.falseExpr);
            return ("OperatorNode" === this.falseExpr.type || null !== a && e >= a) && (o = "(" + o + ")"), r + " ? " + n + " : " + o
        }, n.prototype._toTex = function (e) {
            var r = o.addBraces(this.trueExpr.toTex(e)) + ", &\\quad" + o.addBraces("\\text{if}\\;" + this.condition.toTex(e)) + "\\\\" + (o.addBraces(this.falseExpr.toTex(e)) + ", &\\quad" + o.addBraces("\\text{otherwise}"));
            return o.addBraces(r, ["\\left\\{\\begin{array}{l l}", "\\end{array}\\right."])
        }, e.exports = n
    }, function (e, r, t) {
        "use strict";

        function n(e, r) {
            if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            if (r) {
                if (!a(r)) throw new TypeError('String expected for parameter "valueType"');
                if (!a(e)) throw new TypeError('String expected for parameter "value"');
                this.value = e, this.valueType = r
            } else this.value = e + "", this.valueType = o(e);
            if (!s[this.valueType]) throw new TypeError('Unsupported type of value "' + this.valueType + '"')
        }
        var i = t(185),
            o = (t(5), t(338).type),
            a = t(176).isString,
            s = {
                number: !0,
                string: !0,
                "boolean": !0,
                undefined: !0,
                "null": !0
            };
        n.prototype = new i, n.prototype.type = "ConstantNode", n.prototype._compile = function (e) {
            switch (this.valueType) {
                case "number":
                    return "bignumber" === e.math.config().number ? 'math.bignumber("' + this.value + '")' : this.value.replace(/^(0*)[0-9]/, function (e, r) {
                        return e.substring(r.length)
                    });
                case "string":
                    return '"' + this.value + '"';
                case "boolean":
                    return this.value;
                case "undefined":
                    return this.value;
                case "null":
                    return this.value;
                default:
                    throw new TypeError('Unsupported type of constant "' + this.valueType + '"')
            }
        }, n.prototype.forEach = function (e) {}, n.prototype.map = function (e) {
            return this.clone()
        }, n.prototype.clone = function () {
            return new n(this.value, this.valueType)
        }, n.prototype.toString = function () {
            switch (this.valueType) {
                case "string":
                    return '"' + this.value + '"';
                default:
                    return this.value
            }
        }, n.prototype._toTex = function (e) {
            var r, t = this.value;
            switch (this.valueType) {
                case "string":
                    return "\\text{" + t + "}";
                case "number":
                    return r = t.toLowerCase().indexOf("e"), -1 !== r ? t.substring(0, r) + " \\cdot 10^{" + t.substring(r + 1) + "}" : t;
                default:
                    return t
            }
        }, e.exports = n
    }, function (e, r, t) {
        "use strict";

        function n(e, r) {
            if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            if (!(e instanceof i)) throw new TypeError('Node expected for parameter "object"');
            if (!f(r) || !r.every(c)) throw new TypeError('Array containing Nodes expected for parameter "ranges"');
            this.object = e, this.ranges = r
        }
        var i = t(185),
            o = t(187),
            a = t(188),
            s = t(5),
            u = t(8),
            c = i.isNode,
            f = Array.isArray;
        n.prototype = new i, n.prototype.type = "IndexNode", n.prototype._compile = function (e) {
            return this.compileSubset(e)
        }, n.prototype.compileSubset = function (e, r) {
            function t(e) {
                return e instanceof a && "end" == e.name
            }
            var n = !1,
                i = this.ranges.map(function (e) {
                    var r = e.filter(t).length > 0;
                    return n = r ? r : n, r
                });
            e.range = function (e, r, t) {
                return new u(e instanceof s ? e.toNumber() : e, r instanceof s ? r.toNumber() : r, t instanceof s ? t.toNumber() : t)
            };
            var c = this.ranges.map(function (r, t) {
                var n = i[t];
                return r instanceof o ? n ? (e.args.end = !0, "(function () {  var end = size[" + t + "];  return range(    " + r.start._compile(e) + ",     " + r.end._compile(e) + ",     " + (r.step ? r.step._compile(e) : "1") + "  );})()") : "range(" + r.start._compile(e) + ", " + r.end._compile(e) + ", " + (r.step ? r.step._compile(e) : "1") + ")" : n ? (e.args.end = !0, "(function () {  var end = size[" + t + "];  return " + r._compile(e) + ";})()") : r._compile(e)
            });
            return n ? "(function () {  var obj = " + this.object._compile(e) + ";  var size = math.size(obj).valueOf();  return math.subset(    obj,     math.index(" + c.join(", ") + ")    " + (r ? ", " + r : "") + "  );})()" : "math.subset(" + this.object._compile(e) + ",math.index(" + c.join(", ") + ")" + (r ? ", " + r : "") + ")"
        }, n.prototype.forEach = function (e) {
            e(this.object, "object", this);
            for (var r = 0; r < this.ranges.length; r++) e(this.ranges[r], "ranges[" + r + "]", this)
        }, n.prototype.map = function (e) {
            for (var r = this._ifNode(e(this.object, "object", this)), t = [], i = 0; i < this.ranges.length; i++) t[i] = this._ifNode(e(this.ranges[i], "ranges[" + i + "]", this));
            return new n(r, t)
        }, n.prototype.objectName = function () {
            return this.object.name
        }, n.prototype.clone = function () {
            return new n(this.object, this.ranges.slice(0))
        }, n.prototype.toString = function () {
            return this.object.toString() + "[" + this.ranges.join(", ") + "]"
        }, n.prototype._toTex = function (e) {
            return this.object.toTex(e) + "[" + this.ranges.join(", ") + "]"
        }, e.exports = n
    }, function (e, r, t) {
        "use strict";

        function n(e, r, t) {
            if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            if (!u(e)) throw new TypeError('String expected for parameter "name"');
            if (!c(r) || !r.every(u)) throw new TypeError('Array containing strings expected for parameter "params"');
            if (!(t instanceof i)) throw new TypeError('Node expected for parameter "expr"');
            if (e in o) throw new Error('Illegal function name, "' + e + '" is a reserved keyword');
            this.name = e, this.params = r, this.expr = t
        }
        var i = t(185),
            o = t(341),
            a = t(343),
            s = t(342),
            u = t(176).isString,
            c = Array.isArray;
        n.prototype = new i, n.prototype.type = "FunctionAssignmentNode", n.prototype._compile = function (e) {
            return this.params.forEach(function (r) {
                e.args[r] = !0
            }), 'scope["' + this.name + '"] =   (function () {    var fn = function ' + this.name + "(" + this.params.join(",") + ") {      if (arguments.length != " + this.params.length + ') {        throw new SyntaxError("Wrong number of arguments in function ' + this.name + ' (" + arguments.length + " provided, ' + this.params.length + ' expected)");      }      return ' + this.expr._compile(e) + '    };    fn.syntax = "' + this.name + "(" + this.params.join(", ") + ')";    return fn;  })();'
        }, n.prototype.forEach = function (e) {
            e(this.expr, "expr", this)
        }, n.prototype.map = function (e) {
            var r = this._ifNode(e(this.expr, "expr", this));
            return new n(this.name, this.params.slice(0), r)
        }, n.prototype.clone = function () {
            return new n(this.name, this.params.slice(0), this.expr)
        }, n.prototype.toString = function () {
            var e = s.getPrecedence(this),
                r = s.getPrecedence(this.expr),
                t = this.expr.toString();
            return null !== r && e >= r && (t = "(" + t + ")"), "function " + this.name + "(" + this.params.join(", ") + ") = " + t
        }, n.prototype._toTex = function (e) {
            var r = s.getPrecedence(this),
                t = s.getPrecedence(this.expr),
                n = this.expr.toTex(e);
            return n = null !== t && r >= t ? a.addBraces(n, !0) : a.addBraces(n, !1), a.toFunction(this.name) + a.addBraces(this.params.map(a.toSymbol).join(", "), !0) + "=" + n
        }, e.exports = n
    }, function (e, r, t) {
        "use strict";

        function n(e, r) {
            if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            if ("string" != typeof e) throw new TypeError('string expected for parameter "name"');
            if (!u(r) || !r.every(s)) throw new TypeError('Array containing Nodes expected for parameter "args"');
            this.name = e, this.args = r || []
        }
        var i = t(185),
            o = t(188),
            a = t(343),
            s = i.isNode,
            u = Array.isArray;
        n.prototype = new i, n.prototype.type = "FunctionNode", n.prototype._compile = function (e) {
            var r = e.math[this.name],
                t = "function" == typeof r && 1 == r.rawArgs,
                n = this.args.map(function (r) {
                    return r._compile(e)
                });
            if (t) {
                var i;
                do i = "p" + Math.round(1e4 * Math.random()); while (i in e);
                return e[i] = this.args, '("' + this.name + '" in scope ? scope["' + this.name + '"](' + n.join(", ") + ') : math["' + this.name + '"](' + i + ", math, scope))"
            }
            var a = new o(this.name);
            return a._compile(e) + "(" + n.join(", ") + ")"
        }, n.prototype.forEach = function (e) {
            for (var r = 0; r < this.args.length; r++) e(this.args[r], "args[" + r + "]", this)
        }, n.prototype.map = function (e) {
            for (var r = [], t = 0; t < this.args.length; t++) r[t] = this._ifNode(e(this.args[t], "args[" + t + "]", this));
            return new n(this.name, r)
        }, n.prototype.clone = function () {
            return new n(this.name, this.args.slice(0))
        }, n.prototype.toString = function () {
            return this.name + "(" + this.args.join(", ") + ")"
        }, n.prototype._toTex = function (e) {
            return a.toArgs(this, e)
        }, n.prototype.getIdentifier = function () {
            return this.type + ":" + this.name
        }, e.exports = n
    }, function (e, r, t) {
        "use strict";

        function n() {
            if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator")
        }

        function i(e) {
            for (var r in e)
                if (e.hasOwnProperty(r) && r in a) throw new Error('Scope contains an illegal symbol, "' + r + '" is a reserved keyword')
        }

        function o(e) {
            var r = Object.create(e);
            if (e.expression && e.expression.transform)
                for (var t in e.expression.transform) e.expression.transform.hasOwnProperty(t) && (r[t] = e.expression.transform[t]);
            return r
        }
        var a = t(341);
        n.prototype.eval = function () {
            throw new Error("Node.eval is deprecated. Use Node.compile(math).eval([scope]) instead.")
        }, n.prototype.type = "Node", n.prototype.compile = function (e) {
            if (!(e instanceof Object)) throw new TypeError("Object expected for parameter math");
            var r = {
                    math: o(e),
                    args: {},
                    _validateScope: i
                },
                t = this._compile(r),
                n = Object.keys(r).map(function (e) {
                    return "    var " + e + ' = defs["' + e + '"];'
                }),
                a = n.join(" ") + 'return {  "eval": function (scope) {    if (scope) _validateScope(scope);    scope = scope || {};    return ' + t + ";  }};",
                s = new Function("defs", a);
            return s(r)
        }, n.prototype._compile = function (e) {
            throw new Error("Cannot compile a Node interface")
        }, n.prototype.forEach = function (e) {
            throw new Error("Cannot run forEach on a Node interface")
        }, n.prototype.map = function (e) {
            throw new Error("Cannot run map on a Node interface")
        }, n.prototype._ifNode = function (e) {
            if (!(e instanceof n)) throw new TypeError("Callback function must return a Node");
            return e
        }, n.prototype.traverse = function (e) {
            function r(e, t) {
                e.forEach(function (e, n, i) {
                    t(e, n, i), r(e, t)
                })
            }
            e(this, null, null), r(this, e)
        }, n.prototype.transform = function (e) {
            function r(e, t) {
                return e.map(function (e, n, i) {
                    var o = t(e, n, i);
                    return o !== e ? o : r(e, t)
                })
            }
            var t = e(this, null, null);
            return t !== this ? t : r(this, e)
        }, n.prototype.filter = function (e) {
            var r = [];
            return this.traverse(function (t, n, i) {
                e(t, n, i) && r.push(t)
            }), r
        }, n.prototype.find = function () {
            throw new Error("Function Node.find is deprecated. Use Node.filter instead.")
        }, n.prototype.match = function () {
            throw new Error("Function Node.match is deprecated. See functions Node.filter, Node.transform, Node.traverse.")
        }, n.prototype.clone = function () {
            throw new Error("Cannot clone a Node interface")
        }, n.prototype.toString = function () {
            return ""
        }, n.prototype.toTex = function (e) {
            var r;
            if ("ArrayNode" === this.type && delete this.latexType, "object" == typeof e) "FunctionNode" === this.type && e.hasOwnProperty(this.name) && (r = e[this.name](this, e));
            else if ("function" == typeof e) r = e(this, e);
            else if ("string" == typeof e && "ArrayNode" === this.type) this.latexType = e;
            else if ("undefined" != typeof e) throw new TypeError("Object or function expected as callback");
            return "undefined" != typeof r ? r : this._toTex(e)
        }, n.prototype._toTex = function () {
            if ("Node" === this.type) return "";
            throw new Error("_toTex not implemented for this Node")
        }, n.prototype.getIdentifier = function () {
            return this.type
        }, n.isNode = function (e) {
            return e instanceof n
        }, e.exports = n
    }, function (e, r, t) {
        "use strict";

        function n(e, r, t) {
            if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            if ("string" != typeof e) throw new TypeError('string expected for parameter "op"');
            if ("string" != typeof r) throw new TypeError('string expected for parameter "fn"');
            if (!u(t) || !t.every(c)) throw new TypeError('Array containing Nodes expected for parameter "args"');
            this.op = e, this.fn = r, this.args = t || []
        }

        function i(e, r) {
            var t = s.getPrecedence(e),
                n = s.getAssociativity(e);
            switch (r.length) {
                case 1:
                    var i = s.getPrecedence(r[0]);
                    return null === i ? [!1] : t >= i ? [!0] : [!1];
                case 2:
                    var o, a = s.getPrecedence(r[0]),
                        u = s.isAssociativeWith(e, r[0]);
                    o = null === a ? !1 : a !== t || "right" !== n || u ? t > a ? !0 : !1 : !0;
                    var c, f = s.getPrecedence(r[1]),
                        l = s.isAssociativeWith(e, r[1]);
                    return c = null === f ? !1 : f !== t || "left" !== n || l ? t > f ? !0 : !1 : !0, [o, c];
                default:
                    var p = [];
                    return r.forEach(function () {
                        p.push(!0)
                    }), p
            }
        }
        var o = t(185),
            a = (t(181), t(188), t(184), t(343)),
            s = t(342),
            u = Array.isArray,
            c = o.isNode;
        n.prototype = new o, n.prototype.type = "OperatorNode", n.prototype._compile = function (e) {
            if (!(this.fn in e.math)) throw new Error("Function " + this.fn + ' missing in provided namespace "math"');
            var r = this.args.map(function (r) {
                return r._compile(e)
            });
            return "math." + this.fn + "(" + r.join(", ") + ")"
        }, n.prototype.forEach = function (e) {
            for (var r = 0; r < this.args.length; r++) e(this.args[r], "args[" + r + "]", this)
        }, n.prototype.map = function (e) {
            for (var r = [], t = 0; t < this.args.length; t++) r[t] = this._ifNode(e(this.args[t], "args[" + t + "]", this));
            return new n(this.op, this.fn, r)
        }, n.prototype.clone = function () {
            return new n(this.op, this.fn, this.args.slice(0))
        }, n.prototype.toString = function () {
            var e = this.args,
                r = i(this, e);
            switch (e.length) {
                case 1:
                    var t = s.getAssociativity(this),
                        n = e[0].toString();
                    return r[0] && (n = "(" + n + ")"), "right" === t ? this.op + n : "left" === t ? n + this.op : n + this.op;
                case 2:
                    var o = e[0].toString(),
                        a = e[1].toString();
                    return r[0] && (o = "(" + o + ")"), r[1] && (a = "(" + a + ")"), o + " " + this.op + " " + a;
                default:
                    return this.fn + "(" + this.args.join(", ") + ")"
            }
        }, n.prototype._toTex = function (e) {
            var r = this.args,
                t = i(this, r),
                n = a.toOperator(this.op);

            switch (r.length) {
                case 1:
                    var o = s.getAssociativity(this),
                        u = r[0].toTex(e);
                    return t[0] && (u = a.addBraces(u, !0)), "right" === o ? n + u : "left" === o ? u + n : u + n;
                case 2:
                    var c = r[0],
                        f = a.addBraces(c.toTex(e), t[0]),
                        l = r[1],
                        p = a.addBraces(l.toTex(e), t[1]);
                    switch (this.getIdentifier()) {
                        case "OperatorNode:divide":
                            return n + f + p;
                        case "OperatorNode:to":
                            p = a.toUnit(l.toTex(e)), p = a.addBraces(p, t[1])
                    }
                    return f + " " + n + " " + p;
                default:
                    var m = this.args.map(a.toSymbol).join(", ");
                    return a.toFunction(this.fn) + a.addBraces(m, !0)
            }
        }, n.prototype.getIdentifier = function () {
            return this.type + ":" + this.fn
        }, e.exports = n
    }, function (e, r, t) {
        "use strict";

        function n(e, r, t) {
            if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            if (!a(e)) throw new TypeError("Node expected");
            if (!a(r)) throw new TypeError("Node expected");
            if (t && !a(t)) throw new TypeError("Node expected");
            if (arguments.length > 3) throw new Error("Too many arguments");
            this.start = e, this.end = r, this.step = t || null
        }
        var i = t(185),
            o = t(342),
            a = i.isNode;
        n.prototype = new i, n.prototype.type = "RangeNode", n.prototype._compile = function (e) {
            return "math.range(" + this.start._compile(e) + ", " + this.end._compile(e) + (this.step ? ", " + this.step._compile(e) : "") + ")"
        }, n.prototype.forEach = function (e) {
            e(this.start, "start", this), e(this.end, "end", this), this.step && e(this.step, "step", this)
        }, n.prototype.map = function (e) {
            return new n(this._ifNode(e(this.start, "start", this)), this._ifNode(e(this.end, "end", this)), this.step && this._ifNode(e(this.step, "step", this)))
        }, n.prototype.clone = function () {
            return new n(this.start, this.end, this.step && this.step)
        }, n.prototype.toString = function () {
            var e, r = o.getPrecedence(this),
                t = this.start.toString(),
                n = o.getPrecedence(this.start);
            if (null !== n && r >= n && (t = "(" + t + ")"), e = t, this.step) {
                var i = this.step.toString(),
                    a = o.getPrecedence(this.step);
                null !== a && r >= a && (i = "(" + i + ")"), e += ":" + i
            }
            var s = this.end.toString(),
                u = o.getPrecedence(this.end);
            return null !== u && r >= u && (s = "(" + s + ")"), e += ":" + s
        }, n.prototype._toTex = function (e) {
            var r = this.start.toTex(e);
            return this.step && (r += ":" + this.step.toTex(e)), r += ":" + this.end.toTex(e)
        }, e.exports = n
    }, function (e, r, t) {
        "use strict";

        function n(e) {
            if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            if (!u(e)) throw new TypeError('String expected for parameter "name"');
            this.name = e
        }

        function i(e) {
            throw new Error("Undefined symbol " + e)
        }
        var o = t(185),
            a = t(11),
            s = t(343),
            u = t(176).isString;
        n.prototype = new o, n.prototype.type = "SymbolNode", n.prototype._compile = function (e) {
            return e.undef = i, e.Unit = a, this.name in e.args ? this.name : this.name in e.math ? '("' + this.name + '" in scope ? scope["' + this.name + '"] : math["' + this.name + '"])' : '("' + this.name + '" in scope ? scope["' + this.name + '"] : ' + (a.isValuelessUnit(this.name) ? 'new Unit(null, "' + this.name + '")' : 'undef("' + this.name + '")') + ")"
        }, n.prototype.forEach = function (e) {}, n.prototype.map = function (e) {
            return this.clone()
        }, n.prototype.clone = function () {
            return new n(this.name)
        }, n.prototype.toString = function () {
            return this.name
        }, n.prototype._toTex = function (e) {
            return s.toSymbol(this.name, e)
        }, e.exports = n
    }, function (e, r, t) {
        "use strict";

        function n(e, r) {
            if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            if (!(e instanceof o)) throw new TypeError('Expected IndexNode for parameter "index"');
            if (!(r instanceof i)) throw new TypeError('Expected Node for parameter "expr"');
            this.index = e, this.expr = r
        }
        var i = t(185),
            o = t(182);
        n.prototype = new i, n.prototype.type = "UpdateNode", n.prototype._compile = function (e) {
            var r = this.index.objectName() in e.args ? this.name + " = " : 'scope["' + this.index.objectName() + '"]',
                t = this.index.compileSubset(e, this.expr._compile(e));
            return r + " = " + t
        }, n.prototype.forEach = function (e) {
            e(this.index, "index", this), e(this.expr, "expr", this)
        }, n.prototype.map = function (e) {
            return new n(this._ifNode(e(this.index, "index", this)), this._ifNode(e(this.expr, "expr", this)))
        }, n.prototype.clone = function () {
            return new n(this.index, this.expr)
        }, n.prototype.toString = function () {
            return this.index.toString() + " = " + this.expr.toString()
        }, n.prototype._toTex = function (e) {
            return this.index.toTex(e) + " = " + this.expr.toTex(e)
        }, e.exports = n
    }, function (e, r, t) {
        e.exports = {
            name: "e",
            category: "Constants",
            syntax: ["e"],
            description: "Euler's number, the base of the natural logarithm. Approximately equal to 2.71828",
            examples: ["e", "e ^ 2", "exp(2)", "log(e)"],
            seealso: ["exp"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "false",
            category: "Constants",
            syntax: ["false"],
            description: "Boolean value false",
            examples: ["false"],
            seealso: ["true"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "i",
            category: "Constants",
            syntax: ["i"],
            description: "Imaginary unit, defined as i*i=-1. A complex number is described as a + b*i, where a is the real part, and b is the imaginary part.",
            examples: ["i", "i * i", "sqrt(-1)"],
            seealso: []
        }
    }, function (e, r, t) {
        e.exports = {
            name: "Infinity",
            category: "Constants",
            syntax: ["Infinity"],
            description: "Infinity, a number which is larger than the maximum number that can be handled by a floating point number.",
            examples: ["Infinity", "1 / 0"],
            seealso: []
        }
    }, function (e, r, t) {
        e.exports = {
            name: "LN2",
            category: "Constants",
            syntax: ["LN2"],
            description: "Returns the natural logarithm of 2, approximately equal to 0.693",
            examples: ["LN2", "log(2)"],
            seealso: []
        }
    }, function (e, r, t) {
        e.exports = {
            name: "LN10",
            category: "Constants",
            syntax: ["LN10"],
            description: "Returns the natural logarithm of 10, approximately equal to 2.302",
            examples: ["LN10", "log(10)"],
            seealso: []
        }
    }, function (e, r, t) {
        e.exports = {
            name: "LOG2E",
            category: "Constants",
            syntax: ["LOG2E"],
            description: "Returns the base-2 logarithm of E, approximately equal to 1.442",
            examples: ["LOG2E", "log(e, 2)"],
            seealso: []
        }
    }, function (e, r, t) {
        e.exports = {
            name: "LOG10E",
            category: "Constants",
            syntax: ["LOG10E"],
            description: "Returns the base-10 logarithm of E, approximately equal to 0.434",
            examples: ["LOG10E", "log(e, 10)"],
            seealso: []
        }
    }, function (e, r, t) {
        e.exports = {
            name: "NaN",
            category: "Constants",
            syntax: ["NaN"],
            description: "Not a number",
            examples: ["NaN", "0 / 0"],
            seealso: []
        }
    }, function (e, r, t) {
        e.exports = {
            name: "null",
            category: "Constants",
            syntax: ["null"],
            description: "Value null",
            examples: ["null"],
            seealso: ["true", "false"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "pi",
            category: "Constants",
            syntax: ["pi"],
            description: "The number pi is a mathematical constant that is the ratio of a circle's circumference to its diameter, and is approximately equal to 3.14159",
            examples: ["pi", "sin(pi/2)"],
            seealso: ["tau"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "phi",
            category: "Constants",
            syntax: ["phi"],
            description: "Phi is the golden ratio. Two quantities are in the golden ratio if their ratio is the same as the ratio of their sum to the larger of the two quantities. Phi is defined as `(1 + sqrt(5)) / 2` and is approximately 1.618034...",
            examples: ["tau"],
            seealso: []
        }
    }, function (e, r, t) {
        e.exports = {
            name: "SQRT1_2",
            category: "Constants",
            syntax: ["SQRT1_2"],
            description: "Returns the square root of 1/2, approximately equal to 0.707",
            examples: ["SQRT1_2", "sqrt(1/2)"],
            seealso: []
        }
    }, function (e, r, t) {
        e.exports = {
            name: "SQRT2",
            category: "Constants",
            syntax: ["SQRT2"],
            description: "Returns the square root of 2, approximately equal to 1.414",
            examples: ["SQRT2", "sqrt(2)"],
            seealso: []
        }
    }, function (e, r, t) {
        e.exports = {
            name: "tau",
            category: "Constants",
            syntax: ["tau"],
            description: "Tau is the ratio constant of a circle's circumference to radius, equal to 2 * pi, approximately 6.2832.",
            examples: ["tau", "2 * pi"],
            seealso: ["pi"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "true",
            category: "Constants",
            syntax: ["true"],
            description: "Boolean value true",
            examples: ["true"],
            seealso: ["false"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "version",
            category: "Constants",
            syntax: ["version"],
            description: "A string with the version number of math.js",
            examples: ["version"],
            seealso: []
        }
    }, function (e, r, t) {
        function n(e) {
            return t(i(e))
        }

        function i(e) {
            return o[e] || function () {
                throw new Error("Cannot find module '" + e + "'.")
            }()
        }
        var o = {
            "./clone": 158,
            "./clone.js": 158,
            "./filter": 159,
            "./filter.js": 159,
            "./forEach": 166,
            "./forEach.js": 166,
            "./format": 160,
            "./format.js": 160,
            "./import": 161,
            "./import.js": 161,
            "./map": 162,
            "./map.js": 162,
            "./print": 163,
            "./print.js": 163,
            "./sort": 164,
            "./sort.js": 164,
            "./typeof": 165,
            "./typeof.js": 165
        };
        n.keys = function () {
            return Object.keys(o)
        }, n.resolve = i, e.exports = n, n.id = 207
    }, function (e, r, t) {
        var n = (t(172), t(173));
        r.transform = function (e) {
            return e instanceof n ? new n(e.index + 1, e.min + 1, e.max + 1) : e
        }
    }, function (e, r, t) {
        "use strict";
        r.isBoolean = function (e) {
            return e instanceof Boolean || "boolean" == typeof e
        }
    }, function (e, r, t) {
        e.exports = {
            name: "abs",
            category: "Arithmetic",
            syntax: ["abs(x)"],
            description: "Compute the absolute value.",
            examples: ["abs(3.5)", "abs(-4.2)"],
            seealso: ["sign"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "add",
            category: "Operators",
            syntax: ["x + y", "add(x, y)"],
            description: "Add two values.",
            examples: ["a = 2.1 + 3.6", "a - 3.6", "3 + 2i", '"hello" + " world"', "3 cm + 2 inch"],
            seealso: ["subtract"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "ceil",
            category: "Arithmetic",
            syntax: ["ceil(x)"],
            description: "Round a value towards plus infinity. If x is complex, both real and imaginary part are rounded towards plus infinity.",
            examples: ["ceil(3.2)", "ceil(3.8)", "ceil(-4.2)"],
            seealso: ["floor", "fix", "round"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "cube",
            category: "Arithmetic",
            syntax: ["cube(x)"],
            description: "Compute the cube of a value. The cube of x is x * x * x.",
            examples: ["cube(2)", "2^3", "2 * 2 * 2"],
            seealso: ["multiply", "square", "pow"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "divide",
            category: "Operators",
            syntax: ["x / y", "divide(x, y)"],
            description: "Divide two values.",
            examples: ["a = 2 / 3", "a * 3", "4.5 / 2", "3 + 4 / 2", "(3 + 4) / 2", "18 km / 4.5"],
            seealso: ["multiply"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "dotDivide",
            category: "Operators",
            syntax: ["x ./ y", "dotDivide(x, y)"],
            description: "Divide two values element wise.",
            examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a ./ b"],
            seealso: ["multiply", "dotMultiply", "divide"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "dotMultiply",
            category: "Operators",
            syntax: ["x .* y", "dotMultiply(x, y)"],
            description: "Multiply two values element wise.",
            examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a .* b"],
            seealso: ["multiply", "divide", "dotDivide"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "dotpow",
            category: "Operators",
            syntax: ["x .^ y", "dotpow(x, y)"],
            description: "Calculates the power of x to y element wise.",
            examples: ["a = [1, 2, 3; 4, 5, 6]", "a .^ 2"],
            seealso: ["pow"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "exp",
            category: "Arithmetic",
            syntax: ["exp(x)"],
            description: "Calculate the exponent of a value.",
            examples: ["exp(1.3)", "e ^ 1.3", "log(exp(1.3))", "x = 2.4", "(exp(i*x) == cos(x) + i*sin(x))   # Euler's formula"],
            seealso: ["pow", "log"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "fix",
            category: "Arithmetic",
            syntax: ["fix(x)"],
            description: "Round a value towards zero. If x is complex, both real and imaginary part are rounded towards zero.",
            examples: ["fix(3.2)", "fix(3.8)", "fix(-4.2)", "fix(-4.8)"],
            seealso: ["ceil", "floor", "round"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "floor",
            category: "Arithmetic",
            syntax: ["floor(x)"],
            description: "Round a value towards minus infinity.If x is complex, both real and imaginary part are rounded towards minus infinity.",
            examples: ["floor(3.2)", "floor(3.8)", "floor(-4.2)"],
            seealso: ["ceil", "fix", "round"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "gcd",
            category: "Arithmetic",
            syntax: ["gcd(a, b)", "gcd(a, b, c, ...)"],
            description: "Compute the greatest common divisor.",
            examples: ["gcd(8, 12)", "gcd(-4, 6)", "gcd(25, 15, -10)"],
            seealso: ["lcm", "xgcd"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "lcm",
            category: "Arithmetic",
            syntax: ["lcm(x, y)"],
            description: "Compute the least common multiple.",
            examples: ["lcm(4, 6)", "lcm(6, 21)", "lcm(6, 21, 5)"],
            seealso: ["gcd"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "log",
            category: "Arithmetic",
            syntax: ["log(x)", "log(x, base)"],
            description: "Compute the logarithm of a value. If no base is provided, the natural logarithm of x is calculated. If base if provided, the logarithm is calculated for the specified base. log(x, base) is defined as log(x) / log(base).",
            examples: ["log(3.5)", "a = log(2.4)", "exp(a)", "10 ^ 4", "log(10000, 10)", "log(10000) / log(10)", "b = log(1024, 2)", "2 ^ b"],
            seealso: ["exp", "log10"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "log10",
            category: "Arithmetic",
            syntax: ["log10(x)"],
            description: "Compute the 10-base logarithm of a value.",
            examples: ["log10(0.00001)", "log10(10000)", "10 ^ 4", "log(10000) / log(10)", "log(10000, 10)"],
            seealso: ["exp", "log"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "mod",
            category: "Operators",
            syntax: ["x % y", "x mod y", "mod(x, y)"],
            description: "Calculates the modulus, the remainder of an integer division.",
            examples: ["7 % 3", "11 % 2", "10 mod 4", "function isOdd(x) = x % 2", "isOdd(2)", "isOdd(3)"],
            seealso: ["divide"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "multiply",
            category: "Operators",
            syntax: ["x * y", "multiply(x, y)"],
            description: "multiply two values.",
            examples: ["a = 2.1 * 3.4", "a / 3.4", "2 * 3 + 4", "2 * (3 + 4)", "3 * 2.1 km"],
            seealso: ["divide"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "norm",
            category: "Arithmetic",
            syntax: ["norm(x)", "norm(x, p)"],
            description: "Calculate the norm of a number, vector or matrix.",
            examples: ["abs(-3.5)", "norm(-3.5)", "norm(3 - 4i))", "norm([1, 2, -3], Infinity)", "norm([1, 2, -3], -Infinity)", "norm([3, 4], 2)", "norm([[1, 2], [3, 4]], 1)", "norm([[1, 2], [3, 4]], 'inf')", "norm([[1, 2], [3, 4]], 'fro')"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "nthRoot",
            category: "Arithmetic",
            syntax: ["nthRoot(a)", "nthRoot(a, root)"],
            description: 'Calculate the nth root of a value. The principal nth root of a positive real number A, is the positive real solution of the equation "x^root = A".',
            examples: ["4 ^ 3", "nthRoot(64, 3)", "nthRoot(9, 2)", "sqrt(9)"],
            seealso: ["sqrt", "pow"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "pow",
            category: "Operators",
            syntax: ["x ^ y", "pow(x, y)"],
            description: "Calculates the power of x to y, x^y.",
            examples: ["2^3 = 8", "2*2*2", "1 + e ^ (pi * i)"],
            seealso: ["multiply"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "round",
            category: "Arithmetic",
            syntax: ["round(x)", "round(x, n)"],
            description: "round a value towards the nearest integer.If x is complex, both real and imaginary part are rounded towards the nearest integer. When n is specified, the value is rounded to n decimals.",
            examples: ["round(3.2)", "round(3.8)", "round(-4.2)", "round(-4.8)", "round(pi, 3)", "round(123.45678, 2)"],
            seealso: ["ceil", "floor", "fix"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "sign",
            category: "Arithmetic",
            syntax: ["sign(x)"],
            description: "Compute the sign of a value. The sign of a value x is 1 when x>1, -1 when x<0, and 0 when x=0.",
            examples: ["sign(3.5)", "sign(-4.2)", "sign(0)"],
            seealso: ["abs"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "sqrt",
            category: "Arithmetic",
            syntax: ["sqrt(x)"],
            description: "Compute the square root value. If x = y * y, then y is the square root of x.",
            examples: ["sqrt(25)", "5 * 5", "sqrt(-1)"],
            seealso: ["square", "multiply"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "square",
            category: "Arithmetic",
            syntax: ["square(x)"],
            description: "Compute the square of a value. The square of x is x * x.",
            examples: ["square(3)", "sqrt(9)", "3^2", "3 * 3"],
            seealso: ["multiply", "pow", "sqrt", "cube"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "subtract",
            category: "Operators",
            syntax: ["x - y", "subtract(x, y)"],
            description: "subtract two values.",
            examples: ["a = 5.3 - 2", "a + 2", "2/3 - 1/6", "2 * 3 - 3", "2.1 km - 500m"],
            seealso: ["add"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "unaryMinus",
            category: "Operators",
            syntax: ["-x", "unaryMinus(x)"],
            description: "Inverse the sign of a value. Converts booleans and strings to numbers.",
            examples: ["-4.5", "-(-5.6)", '-"22"'],
            seealso: ["add", "subtract", "unaryPlus"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "unaryPlus",
            category: "Operators",
            syntax: ["+x", "unaryPlus(x)"],
            description: "Converts booleans and strings to numbers.",
            examples: ["+true", '+"2"'],
            seealso: ["add", "subtract", "unaryMinus"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "xgcd",
            category: "Arithmetic",
            syntax: ["xgcd(a, b)"],
            description: "Calculate the extended greatest common divisor for two values",
            examples: ["xgcd(8, 12)", "gcd(8, 12)", "xgcd(36163, 21199)"],
            seealso: ["gcd", "lcm"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "bitAnd",
            category: "Bitwise",
            syntax: ["x & y", "bitAnd(x, y)"],
            description: "Bitwise AND operation. Performs the logical AND operation on each pair of the corresponding bits of the two given values by multiplying them. If both bits in the compared position are 1, the bit in the resulting binary representation is 1, otherwise, the result is 0",
            examples: ["5 & 3", "bitAnd(53, 131)", "[1, 12, 31] & 42"],
            seealso: ["bitNot", "bitOr", "bitXor", "leftShift", "rightArithShift", "rightLogShift"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "bitNot",
            category: "Bitwise",
            syntax: ["~x", "bitNot(x)"],
            description: "Bitwise NOT operation. Performs a logical negation on each bit of the given value. Bits that are 0 become 1, and those that are 1 become 0.",
            examples: ["~1", "~2", "bitNot([2, -3, 4])"],
            seealso: ["bitAnd", "bitOr", "bitXor", "leftShift", "rightArithShift", "rightLogShift"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "bitOr",
            category: "Bitwise",
            syntax: ["x | y", "bitOr(x, y)"],
            description: "Bitwise OR operation. Performs the logical inclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if the first bit is 1 or the second bit is 1 or both bits are 1, otherwise, the result is 0.",
            examples: ["5 | 3", "bitOr([1, 2, 3], 4)"],
            seealso: ["bitAnd", "bitNot", "bitXor", "leftShift", "rightArithShift", "rightLogShift"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "bitXor",
            category: "Bitwise",
            syntax: ["bitXor(x, y)"],
            description: "Bitwise XOR operation, exclusive OR. Performs the logical exclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if only the first bit is 1 or only the second bit is 1, but will be 0 if both are 0 or both are 1.",
            examples: ["bitOr(1, 2)", "bitXor([2, 3, 4], 4)"],
            seealso: ["bitAnd", "bitNot", "bitOr", "leftShift", "rightArithShift", "rightLogShift"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "leftShift",
            category: "Bitwise",
            syntax: ["x << y", "leftShift(x, y)"],
            description: "Bitwise left logical shift of a value x by y number of bits.",
            examples: ["4 << 1", "8 >> 1"],
            seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "rightArithShift", "rightLogShift"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "rightArithShift",
            category: "Bitwise",
            syntax: ["x >> y", "leftShift(x, y)"],
            description: "Bitwise right arithmetic shift of a value x by y number of bits.",
            examples: ["8 >> 1", "4 << 1", "-12 >> 2"],
            seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "leftShift", "rightLogShift"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "rightLogShift",
            category: "Bitwise",
            syntax: ["x >> y", "leftShift(x, y)"],
            description: "Bitwise right logical shift of a value x by y number of bits.",
            examples: ["8 >>> 1", "4 << 1", "-12 >>> 2"],
            seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "leftShift", "rightArithShift"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "arg",
            category: "Complex",
            syntax: ["arg(x)"],
            description: "Compute the argument of a complex value. If x = a+bi, the argument is computed as atan2(b, a).",
            examples: ["arg(2 + 2i)", "atan2(3, 2)", "arg(2 + 3i)"],
            seealso: ["re", "im", "conj", "abs"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "conj",
            category: "Complex",
            syntax: ["conj(x)"],
            description: "Compute the complex conjugate of a complex value. If x = a+bi, the complex conjugate is a-bi.",
            examples: ["conj(2 + 3i)", "conj(2 - 3i)", "conj(-5.2i)"],
            seealso: ["re", "im", "abs", "arg"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "re",
            category: "Complex",
            syntax: ["re(x)"],
            description: "Get the real part of a complex number.",
            examples: ["re(2 + 3i)", "im(2 + 3i)", "re(-5.2i)", "re(2.4)"],
            seealso: ["im", "conj", "abs", "arg"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "im",
            category: "Complex",
            syntax: ["im(x)"],
            description: "Get the imaginary part of a complex number.",
            examples: ["im(2 + 3i)", "re(2 + 3i)", "im(-5.2i)", "im(2.4)"],
            seealso: ["re", "conj", "abs", "arg"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "bignumber",
            category: "Type",
            syntax: ["bignumber(x)"],
            description: "Create a big number from a number or string.",
            examples: ["0.1 + 0.2", "bignumber(0.1) + bignumber(0.2)", 'bignumber("7.2")', 'bignumber("7.2e500")', "bignumber([0.1, 0.2, 0.3])"],
            seealso: ["boolean", "complex", "index", "matrix", "string", "unit"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "boolean",
            category: "Type",
            syntax: ["x", "boolean(x)"],
            description: "Convert a string or number into a boolean.",
            examples: ["boolean(0)", "boolean(1)", "boolean(3)", 'boolean("true")', 'boolean("false")', "boolean([1, 0, 1, 1])"],
            seealso: ["bignumber", "complex", "index", "matrix", "number", "string", "unit"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "complex",
            category: "Type",
            syntax: ["complex()", "complex(re, im)", "complex(string)"],
            description: "Create a complex number.",
            examples: ["complex()", "complex(2, 3)", 'complex("7 - 2i")'],
            seealso: ["bignumber", "boolean", "index", "matrix", "number", "string", "unit"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "index",
            category: "Type",
            syntax: ["[start]", "[start:end]", "[start:step:end]", "[start1, start 2, ...]", "[start1:end1, start2:end2, ...]", "[start1:step1:end1, start2:step2:end2, ...]"],
            description: "Create an index to get or replace a subset of a matrix",
            examples: ["[]", "[1, 2, 3]", "A = [1, 2, 3; 4, 5, 6]", "A[1, :]", "A[1, 2] = 50", "A[0:2, 0:2] = ones(2, 2)"],
            seealso: ["bignumber", "boolean", "complex", "matrix,", "number", "range", "string", "unit"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "matrix",
            category: "Type",
            syntax: ["[]", "[a1, b1, ...; a2, b2, ...]", "matrix()", "matrix([...])"],
            description: "Create a matrix.",
            examples: ["[]", "[1, 2, 3]", "[1, 2, 3; 4, 5, 6]", "matrix()", "matrix([3, 4])"],
            seealso: ["bignumber", "boolean", "complex", "index", "number", "string", "unit"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "number",
            category: "Type",
            syntax: ["x", "number(x)"],
            description: "Create a number or convert a string or boolean into a number.",
            examples: ["2", "2e3", "4.05", "number(2)", 'number("7.2")', "number(true)", "number([true, false, true, true])", 'number("52cm", "m")'],
            seealso: ["bignumber", "boolean", "complex", "index", "matrix", "string", "unit"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "string",
            category: "Type",
            syntax: ['"text"', "string(x)"],
            description: "Create a string or convert a value to a string",
            examples: ['"Hello World!"', "string(4.2)", "string(3 + 2i)"],
            seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number", "unit"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "unit",
            category: "Type",
            syntax: ["value unit", "unit(value, unit)", "unit(string)"],
            description: "Create a unit.",
            examples: ["5.5 mm", "3 inch", 'unit(7.1, "kilogram")', 'unit("23 deg")'],
            seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number", "string"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "eval",
            category: "Expression",
            syntax: ["eval(expression)", "eval([expr1, expr2, expr3, ...])"],
            description: "Evaluate an expression or an array with expressions.",
            examples: ['eval("2 + 3")', 'eval("sqrt(" + 4 + ")")'],
            seealso: []
        }
    }, function (e, r, t) {
        e.exports = {
            name: "help",
            category: "Expression",
            syntax: ["help(object)", "help(string)"],
            description: "Display documentation on a function or data type.",
            examples: ["help(sqrt)", 'help("complex")'],
            seealso: []
        }
    }, function (e, r, t) {
        e.exports = {
            name: "and",
            category: "Logical",
            syntax: ["x and y", "and(x, y)"],
            description: "Logical and. Test whether two values are both defined with a nonzero/nonempty value.",
            examples: ["true and false", "true and true", "2 and 4"],
            seealso: ["not", "or", "xor"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "not",
            category: "Logical",
            syntax: ["!x", "not x", "not(x)"],
            description: "Logical not. Flips the boolean value of given argument.",
            examples: ["!true", "not false", "!2", "!0"],
            seealso: ["and", "or", "xor"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "or",
            category: "Logical",
            syntax: ["x or y", "or(x, y)"],
            description: "Logical or. Test if at least one value is defined with a nonzero/nonempty value.",
            examples: ["true or false", "false or false", "0 or 4"],
            seealso: ["not", "and", "xor"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "xor",
            category: "Logical",
            syntax: ["x or y", "or(x, y)"],
            description: "Logical exclusive or, xor. Test whether one and only one value is defined with a nonzero/nonempty value.",
            examples: ["true xor false", "false xor false", "true xor true", "0 or 4"],
            seealso: ["not", "and", "or"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "concat",
            category: "Matrix",
            syntax: ["concat(A, B, C, ...)", "concat(A, B, C, ..., dim)"],
            description: "Concatenate matrices. By default, the matrices are concatenated by the last dimension. The dimension on which to concatenate can be provided as last argument.",
            examples: ["A = [1, 2; 5, 6]", "B = [3, 4; 7, 8]", "concat(A, B)", "concat(A, B, 1)", "concat(A, B, 2)"],
            seealso: ["det", "diag", "eye", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "cross",
            category: "Matrix",
            syntax: ["cross(A, B)"],
            description: "Calculate the cross product for two vectors in three dimensional space.",
            examples: ["cross([1, 1, 0],  [0, 1, 1])", "cross([3, -3, 1], [4, 9, 2])", "cross([2, 3, 4],  [5, 6, 7])"],
            seealso: ["multiply", "dot"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "det",
            category: "Matrix",
            syntax: ["det(x)"],
            description: "Calculate the determinant of a matrix",
            examples: ["det([1, 2; 3, 4])", "det([-2, 2, 3; -1, 1, 3; 2, 0, -1])"],
            seealso: ["concat", "diag", "eye", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "diag",
            category: "Matrix",
            syntax: ["diag(x)", "diag(x, k)"],
            description: "Create a diagonal matrix or retrieve the diagonal of a matrix. When x is a vector, a matrix with the vector values on the diagonal will be returned. When x is a matrix, a vector with the diagonal values of the matrix is returned. When k is provided, the k-th diagonal will be filled in or retrieved, if k is positive, the values are placed on the super diagonal. When k is negative, the values are placed on the sub diagonal.",
            examples: ["diag(1:3)", "diag(1:3, 1)", "a = [1, 2, 3; 4, 5, 6; 7, 8, 9]", "diag(a)"],
            seealso: ["concat", "det", "eye", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "dot",
            category: "Matrix",
            syntax: ["dot(A, B)"],
            description: "Calculate the dot product of two vectors. The dot product of A = [a1, a2, a3, ..., an] and B = [b1, b2, b3, ..., bn] is defined as dot(A, B) = a1 * b1 + a2 * b2 + a3 * b3 + ... + an * bn",
            examples: ["dot([2, 4, 1], [2, 2, 3])", "[2, 4, 1] * [2, 2, 3]"],
            seealso: ["multiply", "cross"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "eye",
            category: "Matrix",
            syntax: ["eye(n)", "eye(m, n)", "eye([m, n])", "eye"],
            description: "Returns the identity matrix with size m-by-n. The matrix has ones on the diagonal and zeros elsewhere.",
            examples: ["eye(3)", "eye(3, 5)", "a = [1, 2, 3; 4, 5, 6]", "eye(size(a))"],
            seealso: ["concat", "det", "diag", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "flatten",
            category: "Matrix",
            syntax: ["flatten(x)"],
            description: "Flatten a multi dimensional matrix into a single dimensional matrix.",
            examples: ["a = [1, 2, 3; 4, 5, 6]", "size(a)", "b = flatten(a)", "size(b)"],
            seealso: ["concat", "resize", "size", "squeeze"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "inv",
            category: "Matrix",
            syntax: ["inv(x)"],
            description: "Calculate the inverse of a matrix",
            examples: ["inv([1, 2; 3, 4])", "inv(4)", "1 / 4"],
            seealso: ["concat", "det", "diag", "eye", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "ones",
            category: "Matrix",
            syntax: ["ones(m)", "ones(m, n)", "ones(m, n, p, ...)", "ones([m])", "ones([m, n])", "ones([m, n, p, ...])", "ones"],
            description: "Create a matrix containing ones.",
            examples: ["ones(3)", "ones(3, 5)", "ones([2,3]) * 4.5", "a = [1, 2, 3; 4, 5, 6]", "ones(size(a))"],
            seealso: ["concat", "det", "diag", "eye", "inv", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "range",
            category: "Type",
            syntax: ["start:end", "start:step:end", "range(start, end)", "range(start, end, step)", "range(string)"],
            description: "Create a range. Lower bound of the range is included, upper bound is excluded.",
            examples: ["1:5", "3:-1:-3", "range(3, 7)", "range(0, 12, 2)", 'range("4:10")', "a = [1, 2, 3, 4; 5, 6, 7, 8]", "a[1:2, 1:2]"],
            seealso: ["concat", "det", "diag", "eye", "inv", "ones", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "resize",
            category: "Matrix",
            syntax: ["resize(x, size)", "resize(x, size, defaultValue)"],
            description: "Resize a matrix.",
            examples: ["resize([1,2,3,4,5], [3])", "resize([1,2,3], [5])", "resize([1,2,3], [5], -1)", "resize(2, [2, 3])", 'resize("hello", [8], "!")'],
            seealso: ["size", "subset", "squeeze"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "size",
            category: "Matrix",
            syntax: ["size(x)"],
            description: "Calculate the size of a matrix.",
            examples: ["size(2.3)", 'size("hello world")', "a = [1, 2; 3, 4; 5, 6]", "size(a)", "size(1:6)"],
            seealso: ["concat", "det", "diag", "eye", "inv", "ones", "range", "squeeze", "subset", "trace", "transpose", "zeros"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "squeeze",
            category: "Matrix",
            syntax: ["squeeze(x)"],
            description: "Remove inner and outer singleton dimensions from a matrix.",
            examples: ["a = zeros(3,2,1)", "size(squeeze(a))", "b = zeros(1,1,3)", "size(squeeze(b))"],
            seealso: ["concat", "det", "diag", "eye", "inv", "ones", "range", "size", "subset", "trace", "transpose", "zeros"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "subset",
            category: "Matrix",
            syntax: ["value(index)", "value(index) = replacement", "subset(value, [index])", "subset(value, [index], replacement)"],
            description: "Get or set a subset of a matrix or string. Indexes are one-based. Both the ranges lower-bound and upper-bound are included.",
            examples: ["d = [1, 2; 3, 4]", "e = []", "e[1, 1:2] = [5, 6]", "e[2, :] = [7, 8]", "f = d * e", "f[2, 1]", "f[:, 1]"],
            seealso: ["concat", "det", "diag", "eye", "inv", "ones", "range", "size", "squeeze", "trace", "transpose", "zeros"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "trace",
            category: "Matrix",
            syntax: ["trace(A)"],
            description: "Calculate the trace of a matrix: the sum of the elements on the main diagonal of a square matrix.",
            examples: ["A = [1, 2, 3; -1, 2, 3; 2, 0, 3]", "trace(A)"],
            seealso: ["concat", "det", "diag", "eye", "inv", "ones", "range", "size", "squeeze", "subset", "transpose", "zeros"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "transpose",
            category: "Matrix",
            syntax: ["x'", "transpose(x)"],
            description: "Transpose a matrix",
            examples: ["a = [1, 2, 3; 4, 5, 6]", "a'", "transpose(a)"],
            seealso: ["concat", "det", "diag", "eye", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "zeros"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "zeros",
            category: "Matrix",
            syntax: ["zeros(m)", "zeros(m, n)", "zeros(m, n, p, ...)", "zeros([m])", "zeros([m, n])", "zeros([m, n, p, ...])", "zeros"],
            description: "Create a matrix containing zeros.",
            examples: ["zeros(3)", "zeros(3, 5)", "a = [1, 2, 3; 4, 5, 6]", "zeros(size(a))"],
            seealso: ["concat", "det", "diag", "eye", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "combinations",
            category: "Probability",
            syntax: ["combinations(n, k)"],
            description: "Compute the number of combinations of n items taken k at a time",
            examples: ["combinations(7, 5)"],
            seealso: ["permutations", "factorial"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "factorial",
            category: "Probability",
            syntax: ["n!", "factorial(n)"],
            description: "Compute the factorial of a value",
            examples: ["5!", "5 * 4 * 3 * 2 * 1", "3!"],
            seealso: ["combinations", "permutations", "gamma"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "gamma",
            category: "Probability",
            syntax: ["gamma(n)"],
            description: "Compute the gamma function. For small values, the Lanczos approximation is used, and for large values the extended Stirling approximation.",
            examples: ["gamma(4)", "3!", "gamma(1/2)", "sqrt(pi)"],
            seealso: ["factorial"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "permutations",
            category: "Probability",
            syntax: ["permutations(n)", "permutations(n, k)"],
            description: "Compute the number of permutations of n items taken k at a time",
            examples: ["permutations(5)", "permutations(5, 3)"],
            seealso: ["combinations", "factorial"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "pickRandom",
            category: "Probability",
            syntax: ["pickRandom(array)"],
            description: "Pick a random entry from a given array.",
            examples: ["pickRandom(0:10)", "pickRandom([1, 3, 1, 6])"],
            seealso: ["random", "randomInt"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "random",
            category: "Probability",
            syntax: ["random()", "random(max)", "random(min, max)", "random(size)", "random(size, max)", "random(size, min, max)"],
            description: "Return a random number.",
            examples: ["random()", "random(10, 20)", "random([2, 3])"],
            seealso: ["pickRandom", "randomInt"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "randInt",
            category: "Probability",
            syntax: ["randInt()", "randInt(max)", "randInt(min, max)", "randInt(size)", "randInt(size, max)", "randInt(size, min, max)"],
            description: "Return a random integer number",
            examples: ["randInt()", "randInt(10, 20)", "randInt([2, 3], 10)"],
            seealso: ["pickRandom", "random"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "compare",
            category: "Relational",
            syntax: ["compare(x, y)"],
            description: "Compare two values. Returns 1 if x is larger than y, -1 if x is smaller than y, and 0 if x and y are equal.",
            examples: ["compare(2, 3)", "compare(3, 2)", "compare(2, 2)", "compare(5cm, 40mm)", "compare(2, [1, 2, 3])"],
            seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "deepEqual",
            category: "Relational",
            syntax: ["deepEqual(x, y)"],
            description: "Check equality of two matrices element wise. Returns true if the size of both matrices is equal and when and each of the elements are equal.",
            examples: ["[1,3,4] == [1,3,4]", "[1,3,4] == [1,3]"],
            seealso: ["equal", "unequal", "smaller", "larger", "smallerEq", "largerEq", "compare"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "equal",
            category: "Relational",
            syntax: ["x == y", "equal(x, y)"],
            description: "Check equality of two values. Returns true if the values are equal, and false if not.",
            examples: ["2+2 == 3", "2+2 == 4", "a = 3.2", "b = 6-2.8", "a == b", "50cm == 0.5m"],
            seealso: ["unequal", "smaller", "larger", "smallerEq", "largerEq", "compare", "deepEqual"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "larger",
            category: "Relational",
            syntax: ["x > y", "larger(x, y)"],
            description: "Check if value x is larger than y. Returns true if x is larger than y, and false if not.",
            examples: ["2 > 3", "5 > 2*2", "a = 3.3", "b = 6-2.8", "(a > b)", "(b < a)", "5 cm > 2 inch"],
            seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compare"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "largerEq",
            category: "Relational",
            syntax: ["x >= y", "largerEq(x, y)"],
            description: "Check if value x is larger or equal to y. Returns true if x is larger or equal to y, and false if not.",
            examples: ["2 > 1+1", "2 >= 1+1", "a = 3.2", "b = 6-2.8", "(a > b)"],
            seealso: ["equal", "unequal", "smallerEq", "smaller", "largerEq", "compare"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "smaller",
            category: "Relational",
            syntax: ["x < y", "smaller(x, y)"],
            description: "Check if value x is smaller than value y. Returns true if x is smaller than y, and false if not.",
            examples: ["2 < 3", "5 < 2*2", "a = 3.3", "b = 6-2.8", "(a < b)", "5 cm < 2 inch"],
            seealso: ["equal", "unequal", "larger", "smallerEq", "largerEq", "compare"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "smallerEq",
            category: "Relational",
            syntax: ["x <= y", "smallerEq(x, y)"],
            description: "Check if value x is smaller or equal to value y. Returns true if x is smaller than y, and false if not.",
            examples: ["2 < 1+1", "2 <= 1+1", "a = 3.2", "b = 6-2.8", "(a < b)"],
            seealso: ["equal", "unequal", "larger", "smaller", "largerEq", "compare"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "unequal",
            category: "Relational",
            syntax: ["x != y", "unequal(x, y)"],
            description: "Check unequality of two values. Returns true if the values are unequal, and false if they are equal.",
            examples: ["2+2 != 3", "2+2 != 4", "a = 3.2", "b = 6-2.8", "a != b", "50cm != 0.5m", "5 cm != 2 inch"],
            seealso: ["equal", "smaller", "larger", "smallerEq", "largerEq", "compare", "deepEqual"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "max",
            category: "Statistics",
            syntax: ["max(a, b, c, ...)", "max(A)", "max(A, dim)"],
            description: "Compute the maximum value of a list of values.",
            examples: ["max(2, 3, 4, 1)", "max([2, 3, 4, 1])", "max([2, 5; 4, 3])", "max([2, 5; 4, 3], 1)", "max([2, 5; 4, 3], 2)", "max(2.7, 7.1, -4.5, 2.0, 4.1)", "min(2.7, 7.1, -4.5, 2.0, 4.1)"],
            seealso: ["mean", "median", "min", "prod", "std", "sum", "var"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "mean",
            category: "Statistics",
            syntax: ["mean(a, b, c, ...)", "mean(A)", "mean(A, dim)"],
            description: "Compute the arithmetic mean of a list of values.",
            examples: ["mean(2, 3, 4, 1)", "mean([2, 3, 4, 1])", "mean([2, 5; 4, 3])", "mean([2, 5; 4, 3], 1)", "mean([2, 5; 4, 3], 2)", "mean([1.0, 2.7, 3.2, 4.0])"],
            seealso: ["max", "median", "min", "prod", "std", "sum", "var"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "median",
            category: "Statistics",
            syntax: ["median(a, b, c, ...)", "median(A)"],
            description: "Compute the median of all values. The values are sorted and the middle value is returned. In case of an even number of values, the average of the two middle values is returned.",
            examples: ["median(5, 2, 7)", "median([3, -1, 5, 7])"],
            seealso: ["max", "mean", "min", "prod", "std", "sum", "var"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "min",
            category: "Statistics",
            syntax: ["min(a, b, c, ...)", "min(A)", "min(A, dim)"],
            description: "Compute the minimum value of a list of values.",
            examples: ["min(2, 3, 4, 1)", "min([2, 3, 4, 1])", "min([2, 5; 4, 3])", "min([2, 5; 4, 3], 1)", "min([2, 5; 4, 3], 2)", "min(2.7, 7.1, -4.5, 2.0, 4.1)", "max(2.7, 7.1, -4.5, 2.0, 4.1)"],
            seealso: ["max", "mean", "median", "prod", "std", "sum", "var"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "prod",
            category: "Statistics",
            syntax: ["prod(a, b, c, ...)", "prod(A)"],
            description: "Compute the product of all values.",
            examples: ["prod(2, 3, 4)", "prod([2, 3, 4])", "prod([2, 5; 4, 3])"],
            seealso: ["max", "mean", "min", "median", "min", "std", "sum", "var"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "std",
            category: "Statistics",
            syntax: ["std(a, b, c, ...)", "std(A)", "std(A, normalization)"],
            description: 'Compute the standard deviation of all values, defined as std(A) = sqrt(var(A)). Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".',
            examples: ["std(2, 4, 6)", "std([2, 4, 6, 8])", 'std([2, 4, 6, 8], "uncorrected")', 'std([2, 4, 6, 8], "biased")', "std([1, 2, 3; 4, 5, 6])"],
            seealso: ["max", "mean", "min", "median", "min", "prod", "sum", "var"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "sum",
            category: "Statistics",
            syntax: ["sum(a, b, c, ...)", "sum(A)"],
            description: "Compute the sum of all values.",
            examples: ["sum(2, 3, 4, 1)", "sum([2, 3, 4, 1])", "sum([2, 5; 4, 3])"],
            seealso: ["max", "mean", "median", "min", "prod", "std", "sum", "var"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "var",
            category: "Statistics",
            syntax: ["var(a, b, c, ...)", "var(A)", "var(A, normalization)"],
            description: 'Compute the variance of all values. Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".',
            examples: ["var(2, 4, 6)", "var([2, 4, 6, 8])", 'var([2, 4, 6, 8], "uncorrected")', 'var([2, 4, 6, 8], "biased")', "var([1, 2, 3; 4, 5, 6])"],
            seealso: ["max", "mean", "min", "median", "min", "prod", "std", "sum"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "acos",
            category: "Trigonometry",
            syntax: ["acos(x)"],
            description: "Compute the inverse cosine of a value in radians.",
            examples: ["acos(0.5)", "acos(cos(2.3))"],
            seealso: ["cos", "atan", "asin"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "acosh",
            category: "Trigonometry",
            syntax: ["acosh(x)"],
            description: "Calculate the hyperbolic arccos of a value, defined as `acosh(x) = ln(sqrt(x^2 - 1) + x)`.",
            examples: ["acosh(1.5)"],
            seealso: ["cosh", "asinh", "atanh"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "acot",
            category: "Trigonometry",
            syntax: ["acot(x)"],
            description: "Calculate the inverse cotangent of a value.",
            examples: ["acot(0.5)", "acot(cot(0.5))", "acot(2)"],
            seealso: ["cot", "atan"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "acoth",
            category: "Trigonometry",
            syntax: ["acoth(x)"],
            description: "Calculate the hyperbolic arccotangent of a value, defined as `acoth(x) = (ln((x+1)/x) + ln(x/(x-1))) / 2`.",
            examples: ["acoth(0.5)"],
            seealso: ["acsch", "asech"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "acsc",
            category: "Trigonometry",
            syntax: ["acsc(x)"],
            description: "Calculate the inverse cotangent of a value.",
            examples: ["acsc(0.5)", "acsc(csc(0.5))", "acsc(2)"],
            seealso: ["csc", "asin", "asec"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "acsch",
            category: "Trigonometry",
            syntax: ["acsch(x)"],
            description: "Calculate the hyperbolic arccosecant of a value, defined as `acsch(x) = ln(1/x + sqrt(1/x^2 + 1))`.",
            examples: ["acsch(0.5)"],
            seealso: ["asech", "acoth"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "asec",
            category: "Trigonometry",
            syntax: ["asec(x)"],
            description: "Calculate the inverse secant of a value.",
            examples: ["asec(0.5)", "asec(sec(0.5))", "asec(2)"],
            seealso: ["acos", "acot", "acsc"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "asech",
            category: "Trigonometry",
            syntax: ["asech(x)"],
            description: "Calculate the inverse secant of a value.",
            examples: ["asech(0.5)"],
            seealso: ["acsch", "acoth"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "asin",
            category: "Trigonometry",
            syntax: ["asin(x)"],
            description: "Compute the inverse sine of a value in radians.",
            examples: ["asin(0.5)", "asin(sin(2.3))"],
            seealso: ["sin", "acos", "atan"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "asinh",
            category: "Trigonometry",
            syntax: ["asinh(x)"],
            description: "Calculate the hyperbolic arcsine of a value, defined as `asinh(x) = ln(x + sqrt(x^2 + 1))`.",
            examples: ["asinh(0.5)"],
            seealso: ["acosh", "atanh"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "atan",
            category: "Trigonometry",
            syntax: ["atan(x)"],
            description: "Compute the inverse tangent of a value in radians.",
            examples: ["atan(0.5)", "atan(tan(2.3))"],
            seealso: ["tan", "acos", "asin"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "atanh",
            category: "Trigonometry",
            syntax: ["atanh(x)"],
            description: "Calculate the hyperbolic arctangent of a value, defined as `atanh(x) = ln((1 + x)/(1 - x)) / 2`.",
            examples: ["atanh(0.5)"],
            seealso: ["acosh", "asinh"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "atan2",
            category: "Trigonometry",
            syntax: ["atan2(y, x)"],
            description: "Computes the principal value of the arc tangent of y/x in radians.",
            examples: ["atan2(2, 2) / pi", "angle = 60 deg in rad", "x = cos(angle)", "y = sin(angle)", "atan2(y, x)"],
            seealso: ["sin", "cos", "tan"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "cos",
            category: "Trigonometry",
            syntax: ["cos(x)"],
            description: "Compute the cosine of x in radians.",
            examples: ["cos(2)", "cos(pi / 4) ^ 2", "cos(180 deg)", "cos(60 deg)", "sin(0.2)^2 + cos(0.2)^2"],
            seealso: ["acos", "sin", "tan"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "cosh",
            category: "Trigonometry",
            syntax: ["cosh(x)"],
            description: "Compute the hyperbolic cosine of x in radians.",
            examples: ["cosh(0.5)"],
            seealso: ["sinh", "tanh", "coth"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "cot",
            category: "Trigonometry",
            syntax: ["cot(x)"],
            description: "Compute the cotangent of x in radians. Defined as 1/tan(x)",
            examples: ["cot(2)", "1 / tan(2)"],
            seealso: ["sec", "csc", "tan"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "coth",
            category: "Trigonometry",
            syntax: ["coth(x)"],
            description: "Compute the hyperbolic cotangent of x in radians.",
            examples: ["coth(2)", "1 / tanh(2)"],
            seealso: ["sech", "csch", "tanh"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "csc",
            category: "Trigonometry",
            syntax: ["csc(x)"],
            description: "Compute the cosecant of x in radians. Defined as 1/sin(x)",
            examples: ["csc(2)", "1 / sin(2)"],
            seealso: ["sec", "cot", "sin"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "csch",
            category: "Trigonometry",
            syntax: ["csch(x)"],
            description: "Compute the hyperbolic cosecant of x in radians. Defined as 1/sinh(x)",
            examples: ["csch(2)", "1 / sinh(2)"],
            seealso: ["sech", "coth", "sinh"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "sec",
            category: "Trigonometry",
            syntax: ["sec(x)"],
            description: "Compute the secant of x in radians. Defined as 1/cos(x)",
            examples: ["sec(2)", "1 / cos(2)"],
            seealso: ["cot", "csc", "cos"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "sech",
            category: "Trigonometry",
            syntax: ["sech(x)"],
            description: "Compute the hyperbolic secant of x in radians. Defined as 1/cosh(x)",
            examples: ["sech(2)", "1 / cosh(2)"],
            seealso: ["coth", "csch", "cosh"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "sin",
            category: "Trigonometry",
            syntax: ["sin(x)"],
            description: "Compute the sine of x in radians.",
            examples: ["sin(2)", "sin(pi / 4) ^ 2", "sin(90 deg)", "sin(30 deg)", "sin(0.2)^2 + cos(0.2)^2"],
            seealso: ["asin", "cos", "tan"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "sinh",
            category: "Trigonometry",
            syntax: ["sinh(x)"],
            description: "Compute the hyperbolic sine of x in radians.",
            examples: ["sinh(0.5)"],
            seealso: ["cosh", "tanh"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "tan",
            category: "Trigonometry",
            syntax: ["tan(x)"],
            description: "Compute the tangent of x in radians.",
            examples: ["tan(0.5)", "sin(0.5) / cos(0.5)", "tan(pi / 4)", "tan(45 deg)"],
            seealso: ["atan", "sin", "cos"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "tanh",
            category: "Trigonometry",
            syntax: ["tanh(x)"],
            description: "Compute the hyperbolic tangent of x in radians.",
            examples: ["tanh(0.5)", "sinh(0.5) / cosh(0.5)"],
            seealso: ["sinh", "cosh"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "to",
            category: "Units",
            syntax: ["x to unit", "to(x, unit)"],
            description: "Change the unit of a value.",
            examples: ["5 inch to cm", "3.2kg to g", "16 bytes in bits"],
            seealso: []
        }
    }, function (e, r, t) {
        e.exports = {
            name: "clone",
            category: "Utils",
            syntax: ["clone(x)"],
            description: "Clone a variable. Creates a copy of primitive variables,and a deep copy of matrices",
            examples: ["clone(3.5)", "clone(2 - 4i)", "clone(45 deg)", "clone([1, 2; 3, 4])", 'clone("hello world")'],
            seealso: []
        }
    }, function (e, r, t) {
        e.exports = {
            name: "map",
            category: "Utils",
            syntax: ["map(x, callback)"],
            description: "Create a new matrix or array with the results of the callback function executed on each entry of the matrix/array.",
            examples: ["map([1, 2, 3], function(val) { return value * value })"],
            seealso: ["filter", "forEach"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "filter",
            category: "Utils",
            syntax: ["filter(x, test)"],
            description: "Filter items in a matrix.",
            examples: ["isPositive(x) = x > 0", "filter([6, -2, -1, 4, 3], isPositive)", "filter([6, -2, 0, 1, 0], x != 0)"],
            seealso: ["sort", "map", "forEach"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "forEach",
            category: "Utils",
            syntax: ["forEach(x, callback)"],
            description: "Iterates over all elements of a matrix/array, and executes the given callback function.",
            examples: ["forEach([1, 2, 3], function(val) { console.log(val) })"],
            seealso: ["map", "sort", "filter"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "format",
            category: "Utils",
            syntax: ["format(value)", "format(value, precision)"],
            description: "Format a value of any type as string.",
            examples: ["format(2.3)", "format(3 - 4i)", "format([])", "format(pi, 3)"],
            seealso: ["print"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "import",
            category: "Utils",
            syntax: ["import(string)"],
            description: "Import functions from a file.",
            examples: ['import("numbers")', 'import("./mylib.js")'],
            seealso: []
        }
    }, function (e, r, t) {
        e.exports = {
            name: "sort",
            category: "Utils",
            syntax: ["sort(x)", "sort(x, compare)"],
            description: 'Sort the items in a matrix. Compare can be a string "asc" or "desc", or a custom sort function.',
            examples: ["sort([5, 10, 1])", 'sort(["C", "B", "A", "D"])', "sortByLength(a, b) = size(a)[1] - size(b)[1]", 'sort(["Langdon", "Tom", "Sara"], sortByLength)'],
            seealso: ["map", "filter", "forEach"]
        }
    }, function (e, r, t) {
        e.exports = {
            name: "typeof",
            category: "Utils",
            syntax: ["typeof(x)"],
            description: "Get the type of a variable.",
            examples: ["typeof(3.5)", "typeof(2 - 4i)", "typeof(45 deg)", 'typeof("hello world")'],
            seealso: []
        }
    }, function (e, r, t) {
        "use strict";
        e.exports = function (e) {
            function r(r) {
                if (!s.hasOwnProperty(r)) throw new Error("Unknown distribution " + r);
                var t = Array.prototype.slice.call(arguments, 1),
                    o = s[r].apply(this, t);
                return function (r) {
                    var t = {
                            random: function (r, t, i) {
                                var s, c, f;
                                if (arguments.length > 3) throw new e.error.ArgumentsError("random", arguments.length, 0, 3);
                                if (1 === arguments.length ? a(r) ? s = r : f = r : 2 === arguments.length ? a(r) ? (s = r, f = t) : (c = r, f = t) : (s = r, c = t, f = i), void 0 === f && (f = 1), void 0 === c && (c = 0), void 0 !== s) {
                                    var l = u(s.valueOf(), c, f, o);
                                    return s instanceof n ? e.matrix(l) : l
                                }
                                return o(c, f)
                            },
                            randomInt: function (r, t, i) {
                                var o, c, f;
                                if (arguments.length > 3 || arguments.length < 1) throw new e.error.ArgumentsError("randomInt", arguments.length, 1, 3);
                                if (1 === arguments.length ? a(r) ? o = r : f = r : 2 === arguments.length ? a(r) ? (o = r, f = t) : (c = r, f = t) : (o = r, c = t, f = i), void 0 === c && (c = 0), void 0 !== o) {
                                    var l = u(o.valueOf(), c, f, s);
                                    return o instanceof n ? e.matrix(l) : l
                                }
                                return s(c, f)
                            },
                            pickRandom: function (r) {
                                if (1 !== arguments.length) throw new e.error.ArgumentsError("pickRandom", arguments.length, 1);
                                if (r instanceof n) r = r.valueOf();
                                else if (!Array.isArray(r)) throw new e.error.UnsupportedTypeError("pickRandom", e["typeof"](r));
                                if (i.size(r).length > 1) throw new Error("Only one dimensional vectors supported");
                                return r[Math.floor(Math.random() * r.length)]
                            }
                        },
                        o = function (e, t) {
                            return e + r() * (t - e)
                        },
                        s = function (e, t) {
                            return Math.floor(e + r() * (t - e))
                        },
                        u = function (e, r, t, n) {
                            var i, o, a = [];
                            if (e = e.slice(0), e.length > 1)
                                for (o = 0, i = e.shift(); i > o; o++) a.push(u(e, r, t, n));
                            else
                                for (o = 0, i = e.shift(); i > o; o++) a.push(n(r, t));
                            return a
                        };
                    return t
                }(o)
            }
            var n = e.type.Matrix,
                i = t(169),
                o = e.collection,
                a = o.isCollection,
                s = {
                    uniform: function () {
                        return Math.random
                    },
                    normal: function () {
                        return function () {
                            for (var e, r, t = -1; 0 > t || t > 1;) e = Math.random(), r = Math.random(), t = 1 / 6 * Math.pow(-2 * Math.log(e), .5) * Math.cos(2 * Math.PI * r) + .5;
                            return t
                        }
                    }
                };
            return r
        }
    }, function (e, r, t) {
        "use strict";
        r.type = function (e) {
            var r = typeof e;
            if ("object" === r) {
                if (null === e) return "null";
                if (e instanceof Boolean) return "boolean";
                if (e instanceof Number) return "number";
                if (e instanceof String) return "string";
                if (Array.isArray(e)) return "array";
                if (e instanceof Date) return "date";
                if (e instanceof Function) return "function";
                if (e instanceof RegExp) return "regexp"
            }
            return r
        }
    }, function (e, r, t) {
        r.memoize = function (e) {
            return function r() {
                "object" != typeof r.cache && (r.cache = {});
                var t = JSON.stringify(arguments);
                return t in r.cache ? r.cache[t] : r.cache[t] = e.apply(e, arguments)
            }
        }
    }, function (e, r, t) {
        var n;
        ! function (i) {
            "use strict";

            function o(e) {
                for (var r, t, n = 1, i = e.length, o = e[0] + ""; i > n; n++) {
                    for (r = e[n] + "", t = A - r.length; t--;) r = "0" + r;
                    o += r
                }
                for (i = o.length; 48 === o.charCodeAt(--i););
                return o.slice(0, i + 1 || 1)
            }

            function a(e, r, t, n) {
                var i, o, a, s, u;
                for (o = 1, a = e[0]; a >= 10; a /= 10, o++);
                return a = r - o, 0 > a ? (a += A, i = 0) : (i = Math.ceil((a + 1) / A), a %= A), o = N(10, A - a), u = e[i] % o | 0, null == n ? 3 > a ? (0 == a ? u = u / 100 | 0 : 1 == a && (u = u / 10 | 0), s = 4 > t && 99999 == u || t > 3 && 49999 == u || 5e4 == u || 0 == u) : s = (4 > t && u + 1 == o || t > 3 && u + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == N(10, a - 2) - 1 || (u == o / 2 || 0 == u) && 0 == (e[i + 1] / o / 100 | 0) : 4 > a ? (0 == a ? u = u / 1e3 | 0 : 1 == a ? u = u / 100 | 0 : 2 == a && (u = u / 10 | 0), s = (n || 4 > t) && 9999 == u || !n && t > 3 && 4999 == u) : s = ((n || 4 > t) && u + 1 == o || !n && t > 3 && u + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == N(10, a - 3) - 1, s
            }

            function s(e, r, t) {
                var n = e.constructor;
                return null == r || ((y = 0 > r || r > 8) || 0 !== r && (n.errors ? parseInt : parseFloat)(r) != r) && !p(n, "rounding mode", r, t, 0) ? n.rounding : 0 | r
            }

            function u(e, r, t, n) {
                var i = e.constructor;
                return !(y = (n || 0) > r || r >= z + 1) && (0 === r || (i.errors ? parseInt : parseFloat)(r) == r) || p(i, "argument", r, t, 0)
            }

            function c(e, r) {
                var t, n, i, s, u, c, f, l = 0,
                    p = 0,
                    m = 0,
                    h = e.constructor,
                    d = h.ONE,
                    v = h.rounding,
                    y = h.precision;
                if (!e.c || !e.c[0] || e.e > 17) return new h(e.c ? e.c[0] ? e.s < 0 ? 0 : 1 / 0 : d : e.s ? e.s < 0 ? 0 : e : 0 / 0);
                for (null == r ? (w = !1, u = y) : u = r, f = new h(.03125); e.e > -2;) e = e.times(f), m += 5;
                for (n = Math.log(N(2, m)) / Math.LN10 * 2 + 5 | 0, u += n, t = s = c = new h(d), h.precision = u;;) {
                    if (s = g(s.times(e), u, 1), t = t.times(++p), f = c.plus(B(s, t, u, 1)), o(f.c).slice(0, u) === o(c.c).slice(0, u)) {
                        for (i = m; i--;) c = g(c.times(c), u, 1);
                        if (null != r) return h.precision = y, c;
                        if (!(3 > l && a(c.c, u - n, v, l))) return g(c, h.precision = y, v, w = !0);
                        h.precision = u += 10, t = s = f = new h(d), p = 0, l++
                    }
                    c = f
                }
            }

            function f(e, r, t, n) {
                var i, a, s = e.constructor,
                    u = (e = new s(e)).e;
                if (null == r ? t = 0 : (g(e, ++r, t), t = n ? r : r + e.e - u), u = e.e, i = o(e.c), 1 == n || 2 == n && (u >= r || u <= s.toExpNeg)) {
                    for (; i.length < t; i += "0");
                    i.length > 1 && (i = i.charAt(0) + "." + i.slice(1)), i += (0 > u ? "e" : "e+") + u
                } else {
                    if (n = i.length, 0 > u) {
                        for (a = t - n; ++u; i = "0" + i);
                        i = "0." + i
                    } else if (++u > n) {
                        for (a = t - u, u -= n; u--; i += "0");
                        a > 0 && (i += ".")
                    } else a = t - n, n > u ? i = i.slice(0, u) + "." + i.slice(u) : a > 0 && (i += ".");
                    if (a > 0)
                        for (; a--; i += "0");
                }
                return e.s < 0 && e.c[0] ? "-" + i : i
            }

            function l(e) {
                var r = e.length - 1,
                    t = r * A + 1;
                if (r = e[r]) {
                    for (; r % 10 == 0; r /= 10, t--);
                    for (r = e[0]; r >= 10; r /= 10, t++);
                }
                return t
            }

            function p(e, r, t, n, i) {
                if (e.errors) {
                    var o = new Error((n || ["new Decimal", "cmp", "div", "eq", "gt", "gte", "lt", "lte", "minus", "mod", "plus", "times", "toFraction", "pow", "random", "log", "sqrt", "toNearest", "divToInt"][b ? 0 > b ? -b : b : 0 > 1 / b ? 1 : 0]) + "() " + (["number type has more than 15 significant digits", "LN10 out of digits"][r] || r + ([y ? " out of range" : " not an integer", " not a boolean or binary digit"][i] || "")) + ": " + t);
                    throw o.name = "Decimal Error", y = b = 0, o
                }
            }

            function m(e, r, t) {
                var n = new e(e.ONE);
                for (w = !1; 1 & t && (n = n.times(r)), t >>= 1, t;) r = r.times(r);
                return w = !0, n
            }

            function h(e, r) {
                var t, n, i, s, u, c, f, l, m, d, v, y = 1,
                    x = 10,
                    b = e,
                    E = b.c,
                    N = b.constructor,
                    M = N.ONE,
                    _ = N.rounding,
                    A = N.precision;
                if (b.s < 0 || !E || !E[0] || !b.e && 1 == E[0] && 1 == E.length) return new N(E && !E[0] ? -1 / 0 : 1 != b.s ? 0 / 0 : E ? 0 : b);
                if (null == r ? (w = !1, f = A) : f = r, N.precision = f += x, t = o(E), n = t.charAt(0), !(Math.abs(s = b.e) < 15e14)) return b = new N(n + "." + t.slice(1)), f + 2 > q.length && p(N, 1, f + 2, "ln"), b = h(b, f - x).plus(new N(q.slice(0, f + 2)).times(s + "")), N.precision = A, null == r ? g(b, A, _, w = !0) : b;
                for (; 7 > n && 1 != n || 1 == n && t.charAt(1) > 3;) b = b.times(e), t = o(b.c), n = t.charAt(0), y++;
                for (s = b.e, n > 1 ? (b = new N("0." + t), s++) : b = new N(n + "." + t.slice(1)), d = b, l = u = b = B(b.minus(M), b.plus(M), f, 1), v = g(b.times(b), f, 1), i = 3;;) {
                    if (u = g(u.times(v), f, 1), m = l.plus(B(u, new N(i), f, 1)), o(m.c).slice(0, f) === o(l.c).slice(0, f)) {
                        if (l = l.times(2), 0 !== s && (f + 2 > q.length && p(N, 1, f + 2, "ln"), l = l.plus(new N(q.slice(0, f + 2)).times(s + ""))), l = B(l, new N(y), f, 1), null != r) return N.precision = A, l;
                        if (!a(l.c, f - x, _, c)) return g(l, N.precision = A, _, w = !0);
                        N.precision = f += x, m = u = b = B(d.minus(M), d.plus(M), f, 1), v = g(b.times(b), f, 1), i = c = 1
                    }
                    l = m, i += 2
                }
            }

            function g(e, r, t, n) {
                var i, o, a, s, u, c, f, l, p = e.constructor;
                e: if (null != r) {
                    if (!(f = e.c)) return e;
                    for (i = 1, s = f[0]; s >= 10; s /= 10, i++);
                    if (o = r - i, 0 > o) o += A, a = r, u = f[l = 0], c = u / N(10, i - a - 1) % 10 | 0;
                    else if (l = Math.ceil((o + 1) / A), l >= f.length) {
                        if (!n) break e;
                        for (; f.length <= l; f.push(0));
                        u = c = 0, i = 1, o %= A, a = o - A + 1
                    } else {
                        for (u = s = f[l], i = 1; s >= 10; s /= 10, i++);
                        o %= A, a = o - A + i, c = 0 > a ? 0 : E(u / N(10, i - a - 1) % 10)
                    }
                    if (n = n || 0 > r || null != f[l + 1] || (0 > a ? u : u % N(10, i - a - 1)), n = 4 > t ? (c || n) && (0 == t || t == (e.s < 0 ? 3 : 2)) : c > 5 || 5 == c && (4 == t || n || 6 == t && (o > 0 ? a > 0 ? u / N(10, i - a) : 0 : f[l - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), 1 > r || !f[0]) return f.length = 0, n ? (r -= e.e + 1, f[0] = N(10, r % A), e.e = -r || 0) : f[0] = e.e = 0, e;
                    if (0 == o ? (f.length = l, s = 1, l--) : (f.length = l + 1, s = N(10, A - o), f[l] = a > 0 ? (u / N(10, i - a) % N(10, a) | 0) * s : 0), n)
                        for (;;) {
                            if (0 == l) {
                                for (o = 1, a = f[0]; a >= 10; a /= 10, o++);
                                for (a = f[0] += s, s = 1; a >= 10; a /= 10, s++);
                                o != s && (e.e++, f[0] == _ && (f[0] = 1));
                                break
                            }
                            if (f[l] += s, f[l] != _) break;
                            f[l--] = 0, s = 1
                        }
                    for (o = f.length; 0 === f[--o]; f.pop());
                }
                return w && (e.e > p.maxE ? e.c = e.e = null : e.e < p.minE && (e.c = [e.e = 0])), e
            }
            var d, v, y, x = i.crypto,
                w = !0,
                b = 0,
                E = Math.floor,
                N = Math.pow,
                M = Object.prototype.toString,
                _ = 1e7,
                A = 7,
                T = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_",
                O = {},
                S = 9e15,
                z = 1e9,
                C = 3e3,
                q = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
            O.absoluteValue = O.abs = function () {
                var e = new this.constructor(this);
                return e.s < 0 && (e.s = 1), g(e)
            }, O.ceil = function () {
                return g(new this.constructor(this), this.e + 1, 2)
            }, O.comparedTo = O.cmp = function (e, r) {
                var t, n = this,
                    i = n.c,
                    o = (b = -b, e = new n.constructor(e, r), e.c),
                    a = n.s,
                    s = e.s,
                    u = n.e,
                    c = e.e;
                if (!a || !s) return null;
                if (t = i && !i[0], r = o && !o[0], t || r) return t ? r ? 0 : -s : a;
                if (a != s) return a;
                if (t = 0 > a, !i || !o) return u == c ? 0 : !i ^ t ? 1 : -1;
                if (u != c) return u > c ^ t ? 1 : -1;
                for (a = -1, s = (u = i.length) < (c = o.length) ? u : c; ++a < s;)
                    if (i[a] != o[a]) return i[a] > o[a] ^ t ? 1 : -1;
                return u == c ? 0 : u > c ^ t ? 1 : -1
            }, O.decimalPlaces = O.dp = function () {
                var e, r, t = null;
                if (e = this.c) {
                    if (t = ((r = e.length - 1) - E(this.e / A)) * A, r = e[r])
                        for (; r % 10 == 0; r /= 10, t--);
                    0 > t && (t = 0)
                }
                return t
            }, O.dividedBy = O.div = function (e, r) {
                return b = 2, B(this, new this.constructor(e, r))
            }, O.dividedToIntegerBy = O.divToInt = function (e, r) {
                var t = this,
                    n = t.constructor;
                return b = 18, g(B(t, new n(e, r), 0, 1, 1), n.precision, n.rounding)
            }, O.equals = O.eq = function (e, r) {
                return b = 3, 0 === this.cmp(e, r)
            }, O.exponential = O.exp = function () {
                return c(this)
            }, O.floor = function () {
                return g(new this.constructor(this), this.e + 1, 3)
            }, O.greaterThan = O.gt = function (e, r) {
                return b = 4, this.cmp(e, r) > 0
            }, O.greaterThanOrEqualTo = O.gte = function (e, r) {
                return b = 5, r = this.cmp(e, r), 1 == r || 0 === r
            }, O.isFinite = function () {
                return !!this.c
            }, O.isInteger = O.isInt = function () {
                return !!this.c && E(this.e / A) > this.c.length - 2
            }, O.isNaN = function () {
                return !this.s
            }, O.isNegative = O.isNeg = function () {
                return this.s < 0
            }, O.isZero = function () {
                return !!this.c && 0 == this.c[0]
            }, O.lessThan = O.lt = function (e, r) {
                return b = 6, this.cmp(e, r) < 0
            }, O.lessThanOrEqualTo = O.lte = function (e, r) {
                return b = 7, r = this.cmp(e, r), -1 == r || 0 === r
            }, O.logarithm = O.log = function (e, r) {
                var t, n, i, s, u, c, f, l, m, d = this,
                    v = d.constructor,
                    y = v.precision,
                    x = v.rounding,
                    E = 5;
                if (null == e) e = new v(10), t = !0;
                else {
                    if (b = 15, e = new v(e, r), n = e.c, e.s < 0 || !n || !n[0] || !e.e && 1 == n[0] && 1 == n.length) return new v(0 / 0);
                    t = e.eq(10)
                }
                if (n = d.c, d.s < 0 || !n || !n[0] || !d.e && 1 == n[0] && 1 == n.length) return new v(n && !n[0] ? -1 / 0 : 1 != d.s ? 0 / 0 : n ? 0 : 1 / 0);
                if (u = t && (s = n[0], n.length > 1 || 1 != s && 10 != s && 100 != s && 1e3 != s && 1e4 != s && 1e5 != s && 1e6 != s), w = !1, f = y + E, l = f + 10, c = h(d, f), t ? (l > q.length && p(v, 1, l, "log"), i = new v(q.slice(0, l))) : i = h(e, f), m = B(c, i, f, 1), a(m.c, s = y, x))
                    do
                        if (f += 10, c = h(d, f), t ? (l = f + 10, l > q.length && p(v, 1, l, "log"), i = new v(q.slice(0, l))) : i = h(e, f), m = B(c, i, f, 1), !u) {
                            +o(m.c).slice(s + 1, s + 15) + 1 == 1e14 && (m = g(m, y + 1, 0));
                            break
                        } while (a(m.c, s += 10, x));
                return w = !0, g(m, y, x)
            }, O.minus = function (e, r) {
                var t, n, i, o, a = this,
                    s = a.constructor,
                    u = a.s;
                if (b = 8, e = new s(e, r), r = e.s, !u || !r) return new s(0 / 0);
                if (u != r) return e.s = -r, a.plus(e);
                var c = a.c,
                    f = e.c,
                    l = E(e.e / A),
                    p = E(a.e / A),
                    m = s.precision,
                    h = s.rounding;
                if (!p || !l) {
                    if (!c || !f) return c ? (e.s = -r, e) : new s(f ? a : 0 / 0);
                    if (!c[0] || !f[0]) return a = f[0] ? (e.s = -r, e) : new s(c[0] ? a : 3 == h ? -0 : 0), w ? g(a, m, h) : a
                }
                if (c = c.slice(), n = c.length, u = p - l) {
                    for ((o = 0 > u) ? (u = -u, t = c, n = f.length) : (l = p, t = f), (p = Math.ceil(m / A)) > n && (n = p), u > (n += 2) && (u = n, t.length = 1), t.reverse(), r = u; r--; t.push(0));
                    t.reverse()
                } else
                    for ((o = n < (i = f.length)) && (i = n), u = r = 0; i > r; r++)
                        if (c[r] != f[r]) {
                            o = c[r] < f[r];
                            break
                        } if (o && (t = c, c = f, f = t, e.s = -e.s), (r = -((i = c.length) - f.length)) > 0)
                    for (; r--; c[i++] = 0);
                for (p = _ - 1, r = f.length; r > u;) {
                    if (c[--r] < f[r]) {
                        for (n = r; n && !c[--n]; c[n] = p);
                        --c[n], c[r] += _
                    }
                    c[r] -= f[r]
                }
                for (; 0 == c[--i]; c.pop());
                for (; 0 == c[0]; c.shift(), --l);
                for (c[0] || (c = [l = 0], e.s = 3 == h ? -1 : 1), e.c = c, u = 1, r = c[0]; r >= 10; r /= 10, u++);
                return e.e = u + l * A - 1, w ? g(e, m, h) : e
            }, O.modulo = O.mod = function (e, r) {
                var t, n, i = this,
                    o = i.constructor,
                    a = o.modulo;
                return b = 9, e = new o(e, r), r = e.s, t = !i.c || !r || e.c && !e.c[0], t || !e.c || i.c && !i.c[0] ? t ? new o(0 / 0) : g(new o(i), o.precision, o.rounding) : (w = !1, 9 == a ? (e.s = 1, n = B(i, e, 0, 3, 1), e.s = r, n.s *= r) : n = B(i, e, 0, a, 1), n = n.times(e), w = !0, i.minus(n))
            }, O.naturalLogarithm = O.ln = function () {
                return h(this)
            }, O.negated = O.neg = function () {
                var e = new this.constructor(this);
                return e.s = -e.s || null, g(e)
            }, O.plus = function (e, r) {
                var t, n = this,
                    i = n.constructor,
                    o = n.s;
                if (b = 10, e = new i(e, r), r = e.s, !o || !r) return new i(0 / 0);
                if (o != r) return e.s = -r, n.minus(e);
                var a = n.c,
                    s = e.c,
                    u = E(e.e / A),
                    c = E(n.e / A),
                    f = i.precision,
                    l = i.rounding;
                if (!c || !u) {
                    if (!a || !s) return new i(o / 0);
                    if (!a[0] || !s[0]) return n = s[0] ? e : new i(a[0] ? n : 0 * o), w ? g(n, f, l) : n
                }
                if (a = a.slice(), o = c - u) {
                    for (0 > o ? (o = -o, t = a, r = s.length) : (u = c, t = s, r = a.length), (c = Math.ceil(f / A)) > r && (r = c), o > ++r && (o = r, t.length = 1), t.reverse(); o--; t.push(0));
                    t.reverse()
                }
                for (a.length - s.length < 0 && (t = s, s = a, a = t), o = s.length, r = 0, c = _; o; a[o] %= c) r = (a[--o] = a[o] + s[o] + r) / c | 0;
                for (r && (a.unshift(r), ++u), o = a.length; 0 == a[--o]; a.pop());
                for (e.c = a, o = 1, r = a[0]; r >= 10; r /= 10, o++);
                return e.e = o + u * A - 1, w ? g(e, f, l) : e
            }, O.precision = O.sd = function (e) {
                var r = null,
                    t = this;
                return e != r && e !== !!e && 1 !== e && 0 !== e && p(t.constructor, "argument", e, "precision", 1), t.c && (r = l(t.c), e && t.e + 1 > r && (r = t.e + 1)), r
            }, O.round = function () {
                var e = this,
                    r = e.constructor;
                return g(new r(e), e.e + 1, r.rounding)
            }, O.squareRoot = O.sqrt = function () {
                var e, r, t, n, i, a, s = this,
                    u = s.c,
                    c = s.s,
                    f = s.e,
                    l = s.constructor,
                    p = new l(.5);
                if (1 !== c || !u || !u[0]) return new l(!c || 0 > c && (!u || u[0]) ? 0 / 0 : u ? s : 1 / 0);
                for (w = !1, c = Math.sqrt(+s), 0 == c || c == 1 / 0 ? (r = o(u), (r.length + f) % 2 == 0 && (r += "0"), c = Math.sqrt(r), f = E((f + 1) / 2) - (0 > f || f % 2), c == 1 / 0 ? r = "1e" + f : (r = c.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + f), n = new l(r)) : n = new l(c.toString()), t = (f = l.precision) + 3;;)
                    if (a = n, n = p.times(a.plus(B(s, a, t + 2, 1))), o(a.c).slice(0, t) === (r = o(n.c)).slice(0, t)) {
                        if (r = r.slice(t - 3, t + 1), "9999" != r && (i || "4999" != r)) {
                            (!+r || !+r.slice(1) && "5" == r.charAt(0)) && (g(n, f + 1, 1), e = !n.times(n).eq(s));
                            break
                        }
                        if (!i && (g(a, f + 1, 0), a.times(a).eq(s))) {
                            n = a;
                            break
                        }
                        t += 4, i = 1
                    } return w = !0, g(n, f, l.rounding, e)
            }, O.times = function (e, r) {
                var t, n, i = this,
                    o = i.constructor,
                    a = i.c,
                    s = (b = 11, e = new o(e, r), e.c),
                    u = E(i.e / A),
                    c = E(e.e / A),
                    f = i.s;
                if (r = e.s, e.s = f == r ? 1 : -1, !((u || a && a[0]) && (c || s && s[0]))) return new o(!f || !r || a && !a[0] && !s || s && !s[0] && !a ? 0 / 0 : a && s ? 0 * e.s : e.s / 0);
                for (n = u + c, f = a.length, r = s.length, r > f && (t = a, a = s, s = t, c = f, f = r, r = c), c = f + r, t = []; c--; t.push(0));
                for (u = r - 1; u > -1; u--) {
                    for (r = 0, c = f + u; c > u;) r = t[c] + s[u] * a[c - u - 1] + r, t[c--] = r % _ | 0, r = r / _ | 0;
                    t[c] = (t[c] + r) % _ | 0
                }
                for (r ? ++n : t[0] || t.shift(), c = t.length; !t[--c]; t.pop());
                for (e.c = t, f = 1, r = t[0]; r >= 10; r /= 10, f++);
                return e.e = f + n * A - 1, w ? g(e, o.precision, o.rounding) : e
            }, O.toDecimalPlaces = O.toDP = function (e, r) {
                var t = this;
                return t = new t.constructor(t), null != e && u(t, e, "toDP") ? g(t, (0 | e) + t.e + 1, s(t, r, "toDP")) : t
            }, O.toExponential = function (e, r) {
                var t = this;
                return t.c ? f(t, null != e && u(t, e, "toExponential") ? 0 | e : null, null != e && s(t, r, "toExponential"), 1) : t.toString()
            }, O.toFixed = function (e, r) {
                var t, n = this,
                    i = n.constructor,
                    o = i.toExpNeg,
                    a = i.toExpPos;
                return null != e && (e = u(n, e, t = "toFixed") ? n.e + (0 | e) : null, r = s(n, r, t)), i.toExpNeg = -(i.toExpPos = 1 / 0), null != e && n.c ? (t = f(n, e, r), n.s < 0 && n.c && (n.c[0] ? t.indexOf("-") < 0 && (t = "-" + t) : t = t.replace("-", ""))) : t = n.toString(), i.toExpNeg = o, i.toExpPos = a, t
            }, O.toFormat = function (e, r) {
                var t = this;
                if (!t.c) return t.toString();
                var n, i = t.s < 0,
                    o = t.constructor.format,
                    a = o.groupSeparator,
                    s = +o.groupSize,
                    u = +o.secondaryGroupSize,
                    c = t.toFixed(e, r).split("."),
                    f = c[0],
                    l = c[1],
                    p = i ? f.slice(1) : f,
                    m = p.length;
                if (u && (n = s, s = u, m -= u = n), s > 0 && m > 0) {
                    for (n = m % s || s, f = p.substr(0, n); m > n; n += s) f += a + p.substr(n, s);
                    u > 0 && (f += a + p.slice(n)), i && (f = "-" + f)
                }
                return l ? f + o.decimalSeparator + ((u = +o.fractionGroupSize) ? l.replace(new RegExp("\\d{" + u + "}\\B", "g"), "$&" + o.fractionGroupSeparator) : l) : f
            }, O.toFraction = function (e) {
                var r, t, n, i, a, s, u, c, f = this,
                    m = f.constructor,
                    h = r = new m(m.ONE),
                    g = s = new m(0),
                    d = f.c,
                    v = new m(g);
                if (!d) return f.toString();
                for (n = v.e = l(d) - f.e - 1, v.c[0] = N(10, (u = n % A) < 0 ? A + u : u), (null == e || (!(b = 12, a = new m(e)).s || (y = a.cmp(h) < 0 || !a.c) || m.errors && E(a.e / A) < a.c.length - 1) && !p(m, "max denominator", e, "toFraction", 0) || (e = a).cmp(v) > 0) && (e = n > 0 ? v : h), w = !1, a = new m(o(d)), u = m.precision, m.precision = n = d.length * A * 2; c = B(a, v, 0, 1, 1), t = r.plus(c.times(g)), 1 != t.cmp(e);) r = g, g = t, h = s.plus(c.times(t = h)), s = t, v = a.minus(c.times(t = v)), a = t;
                return t = B(e.minus(r), g, 0, 1, 1), s = s.plus(t.times(h)), r = r.plus(t.times(g)), s.s = h.s = f.s, i = B(h, g, n, 1).minus(f).abs().cmp(B(s, r, n, 1).minus(f).abs()) < 1 ? [h + "", g + ""] : [s + "", r + ""], w = !0, m.precision = u, i
            }, O.toNearest = function (e, r) {
                var t = this,
                    n = t.constructor;
                return t = new n(t), null == e ? (e = new n(n.ONE), r = n.rounding) : (b = 17, e = new n(e), r = s(t, r, "toNearest")), e.c ? t.c && (e.c[0] ? (w = !1, t = B(t, e, 0, 4 > r ? [4, 5, 7, 8][r] : r, 1).times(e), w = !0, g(t)) : t.c = [t.e = 0]) : t.s && (e.s && (e.s = t.s), t = e), t
            }, O.toNumber = function () {
                var e = this;
                return +e || (e.s ? 0 * e.s : 0 / 0)
            }, O.toPower = O.pow = function (e, r) {
                var t, n, i, s, u = this,
                    f = u.constructor,
                    l = u.s,
                    p = (b = 13, +(e = new f(e, r))),
                    d = 0 > p ? -p : p,
                    v = f.precision,
                    y = f.rounding;
                if (!u.c || !e.c || (i = !u.c[0]) || !e.c[0]) return new f(N(i ? 0 * l : +u, p));
                if (u = new f(u), t = u.c.length, !u.e && u.c[0] == u.s && 1 == t) return u;
                if (r = e.c.length - 1, e.e || e.c[0] != e.s || r)
                    if (n = E(e.e / A), i = n >= r, !i && 0 > l) s = new f(0 / 0);
                    else {
                        if (i && C > t * A * d) {
                            if (s = m(f, u, d), e.s < 0) return f.ONE.div(s)
                        } else {
                            if (l = 0 > l && 1 & e.c[Math.max(n, r)] ? -1 : 1, r = N(+u, p), n = 0 != r && isFinite(r) ? new f(r + "").e : E(p * (Math.log("0." + o(u.c)) / Math.LN10 + u.e + 1)), n > f.maxE + 1 || n < f.minE - 1) return new f(n > 0 ? l / 0 : 0);
                            w = !1, f.rounding = u.s = 1, d = Math.min(12, (n + "").length), s = c(e.times(h(u, v + d)), v), s = g(s, v + 5, 1), a(s.c, v, y) && (n = v + 10, s = g(c(e.times(h(u, n + d)), n), n + 5, 1), +o(s.c).slice(v + 1, v + 15) + 1 == 1e14 && (s = g(s, v + 1, 0))), s.s = l, w = !0, f.rounding = y
                        }
                        s = g(s, v, y)
                    }
                else s = g(u, v, y);
                return s
            }, O.toPrecision = function (e, r) {
                var t = this;
                return null != e && u(t, e, "toPrecision", 1) && t.c ? f(t, 0 | --e, s(t, r, "toPrecision"), 2) : t.toString()
            }, O.toSignificantDigits = O.toSD = function (e, r) {
                var t = this,
                    n = t.constructor;
                return t = new n(t), null != e && u(t, e, "toSD", 1) ? g(t, 0 | e, s(t, r, "toSD")) : g(t, n.precision, n.rounding);

            }, O.toString = function (e) {
                var r, t, n, i = this,
                    a = i.constructor,
                    s = i.e;
                if (null === s) t = i.s ? "Infinity" : "NaN";
                else {
                    if (e === r && (s <= a.toExpNeg || s >= a.toExpPos)) return f(i, null, a.rounding, 1);
                    if (t = o(i.c), 0 > s) {
                        for (; ++s; t = "0" + t);
                        t = "0." + t
                    } else if (n = t.length, s > 0)
                        if (++s > n)
                            for (s -= n; s--; t += "0");
                        else n > s && (t = t.slice(0, s) + "." + t.slice(s));
                    else if (r = t.charAt(0), n > 1) t = r + "." + t.slice(1);
                    else if ("0" == r) return r;
                    if (null != e)
                        if ((y = !(e >= 2 && 65 > e)) || e != (0 | e) && a.errors) p(a, "base", e, "toString", 0);
                        else if (t = d(a, t, 0 | e, 10, i.s), "0" == t) return t
                }
                return i.s < 0 ? "-" + t : t
            }, O.truncated = O.trunc = function () {
                return g(new this.constructor(this), this.e + 1, 1)
            }, O.valueOf = O.toJSON = function () {
                return this.toString()
            }, d = function () {
                function e(e, r, t) {
                    for (var n, i, o = [0], a = 0, s = e.length; s > a;) {
                        for (i = o.length; i--; o[i] *= r);
                        for (o[n = 0] += T.indexOf(e.charAt(a++)); n < o.length; n++) o[n] > t - 1 && (null == o[n + 1] && (o[n + 1] = 0), o[n + 1] += o[n] / t | 0, o[n] %= t)
                    }
                    return o.reverse()
                }
                return function (r, t, n, i, o) {
                    var a, s, u, c, f, l, p = t.indexOf("."),
                        h = r.precision,
                        g = r.rounding;
                    for (37 > i && (t = t.toLowerCase()), p >= 0 && (t = t.replace(".", ""), l = new r(i), c = m(r, l, t.length - p), l.c = e(c.toFixed(), 10, n), l.e = l.c.length), f = e(t, i, n), a = s = f.length; 0 == f[--s]; f.pop());
                    if (!f[0]) return "0";
                    if (0 > p ? a-- : (c.c = f, c.e = a, c.s = o, c = B(c, l, h, g, 0, n), f = c.c, u = c.r, a = c.e), p = f[h], s = n / 2, u = u || null != f[h + 1], 4 > g ? (null != p || u) && (0 == g || g == (c.s < 0 ? 3 : 2)) : p > s || p == s && (4 == g || u || 6 == g && 1 & f[h - 1] || g == (c.s < 0 ? 8 : 7)))
                        for (f.length = h, --n; ++f[--h] > n;) f[h] = 0, h || (++a, f.unshift(1));
                    else f.length = h;
                    for (s = f.length; !f[--s];);
                    for (p = 0, t = ""; s >= p; t += T.charAt(f[p++]));
                    if (0 > a) {
                        for (; ++a; t = "0" + t);
                        t = "0." + t
                    } else if (p = t.length, ++a > p)
                        for (a -= p; a--; t += "0");
                    else p > a && (t = t.slice(0, a) + "." + t.slice(a));
                    return t
                }
            }();
            var B = function () {
                function e(e, r, t) {
                    var n, i = 0,
                        o = e.length;
                    for (e = e.slice(); o--;) n = e[o] * r + i, e[o] = n % t | 0, i = n / t | 0;
                    return i && e.unshift(i), e
                }

                function r(e, r, t, n) {
                    var i, o;
                    if (t != n) o = t > n ? 1 : -1;
                    else
                        for (i = o = 0; t > i; i++)
                            if (e[i] != r[i]) {
                                o = e[i] > r[i] ? 1 : -1;
                                break
                            } return o
                }

                function t(e, r, t, n) {
                    for (var i = 0; t--;) e[t] -= i, i = e[t] < r[t] ? 1 : 0, e[t] = i * n + e[t] - r[t];
                    for (; !e[0] && e.length > 1; e.shift());
                }
                return function (n, i, o, a, s, u) {
                    var c, f, l, p, m, h, d, v, y, x, w, b, N, M, T, O, S, z, C, q = n.constructor,
                        B = n.s == i.s ? 1 : -1,
                        U = n.c,
                        I = i.c;
                    if (!(U && U[0] && I && I[0])) return new q(n.s && i.s && (U ? !I || U[0] != I[0] : I) ? U && 0 == U[0] || !I ? 0 * B : B / 0 : 0 / 0);
                    for (u ? (p = 1, f = n.e - i.e) : (u = _, p = A, f = E(n.e / p) - E(i.e / p)), z = I.length, O = U.length, y = new q(B), x = y.c = [], l = 0; I[l] == (U[l] || 0); l++);
                    if (I[l] > (U[l] || 0) && f--, null == o ? (B = o = q.precision, a = q.rounding) : B = s ? o + (n.e - i.e) + 1 : o, 0 > B) x.push(1), m = !0;
                    else {
                        if (B = B / p + 2 | 0, l = 0, 1 == z) {
                            for (h = 0, I = I[0], B++;
                                (O > l || h) && B--; l++) M = h * u + (U[l] || 0), x[l] = M / I | 0, h = M % I | 0;
                            m = h || O > l
                        } else {
                            for (h = u / (I[0] + 1) | 0, h > 1 && (I = e(I, h, u), U = e(U, h, u), z = I.length, O = U.length), T = z, w = U.slice(0, z), b = w.length; z > b; w[b++] = 0);
                            C = I.slice(), C.unshift(0), S = I[0], I[1] >= u / 2 && S++;
                            do h = 0, c = r(I, w, z, b), 0 > c ? (N = w[0], z != b && (N = N * u + (w[1] || 0)), h = N / S | 0, h > 1 ? (h >= u && (h = u - 1), d = e(I, h, u), v = d.length, b = w.length, c = r(d, w, v, b), 1 == c && (h--, t(d, v > z ? C : I, v, u))) : (0 == h && (c = h = 1), d = I.slice()), v = d.length, b > v && d.unshift(0), t(w, d, b, u), -1 == c && (b = w.length, c = r(I, w, z, b), 1 > c && (h++, t(w, b > z ? C : I, b, u))), b = w.length) : 0 === c && (h++, w = [0]), x[l++] = h, c && w[0] ? w[b++] = U[T] || 0 : (w = [U[T]], b = 1); while ((T++ < O || null != w[0]) && B--);
                            m = null != w[0]
                        }
                        x[0] || x.shift()
                    }
                    if (1 == p) y.e = f, y.r = +m;
                    else {
                        for (l = 1, B = x[0]; B >= 10; B /= 10, l++);
                        y.e = l + f * p - 1, g(y, s ? o + y.e + 1 : o, a, m)
                    }
                    return y
                }
            }();
            v = function () {
                function e(e) {
                    var r, t, n, i = this,
                        o = "config",
                        a = i.errors ? parseInt : parseFloat;
                    return e == t || "object" != typeof e && !p(i, "object expected", e, o) ? i : ((n = e[r = "precision"]) != t && ((y = 1 > n || n > z) || a(n) != n ? p(i, r, n, o, 0) : i[r] = 0 | n), (n = e[r = "rounding"]) != t && ((y = 0 > n || n > 8) || a(n) != n ? p(i, r, n, o, 0) : i[r] = 0 | n), (n = e[r = "toExpNeg"]) != t && ((y = -S > n || n > 0) || a(n) != n ? p(i, r, n, o, 0) : i[r] = E(n)), (n = e[r = "toExpPos"]) != t && ((y = 0 > n || n > S) || a(n) != n ? p(i, r, n, o, 0) : i[r] = E(n)), (n = e[r = "minE"]) != t && ((y = -S > n || n > 0) || a(n) != n ? p(i, r, n, o, 0) : i[r] = E(n)), (n = e[r = "maxE"]) != t && ((y = 0 > n || n > S) || a(n) != n ? p(i, r, n, o, 0) : i[r] = E(n)), (n = e[r = "errors"]) != t && (n === !!n || 1 === n || 0 === n ? (y = b = 0, i[r] = !!n) : p(i, r, n, o, 1)), (n = e[r = "crypto"]) != t && (n === !!n || 1 === n || 0 === n ? i[r] = !(!n || !x || "object" != typeof x) : p(i, r, n, o, 1)), (n = e[r = "modulo"]) != t && ((y = 0 > n || n > 9) || a(n) != n ? p(i, r, n, o, 0) : i[r] = 0 | n), (e = e[r = "format"]) != t && ("object" == typeof e ? i[r] = e : p(i, "format object expected", e, o)), i)
                }

                function r(e) {
                    return new this(e).exp()
                }

                function t(e) {
                    return new this(e).ln()
                }

                function n(e, r) {
                    return new this(e).log(r)
                }

                function i(e, r, t) {
                    var n, i, o = 0;
                    for ("[object Array]" == M.call(r[0]) && (r = r[0]), n = new e(r[0]); ++o < r.length;) {
                        if (i = new e(r[o]), !i.s) {
                            n = i;
                            break
                        }
                        n[t](i) && (n = i)
                    }
                    return n
                }

                function o() {
                    return i(this, arguments, "lt")
                }

                function a() {
                    return i(this, arguments, "gt")
                }

                function s(e, r) {
                    return new this(e).pow(r)
                }

                function c(e) {
                    var r, t, n, i = 0,
                        o = [],
                        a = this,
                        s = new a(a.ONE);
                    if (null != e && u(s, e, "random") ? e |= 0 : e = a.precision, t = Math.ceil(e / A), a.crypto)
                        if (x && x.getRandomValues)
                            for (r = x.getRandomValues(new Uint32Array(t)); t > i;) n = r[i], n >= 429e7 ? r[i] = x.getRandomValues(new Uint32Array(1))[0] : o[i++] = n % 1e7;
                        else if (x && x.randomBytes) {
                        for (r = x.randomBytes(t *= 4); t > i;) n = r[i] + (r[i + 1] << 8) + (r[i + 2] << 16) + ((127 & r[i + 3]) << 24), n >= 214e7 ? x.randomBytes(4).copy(r, i) : (o.push(n % 1e7), i += 4);
                        i = t / 4
                    } else p(a, "crypto unavailable", x, "random");
                    if (!i)
                        for (; t > i;) o[i++] = 1e7 * Math.random() | 0;
                    for (t = o[--i], e %= A, t && e && (n = N(10, A - e), o[i] = (t / n | 0) * n); 0 === o[i]; i--) o.pop();
                    if (0 > i) o = [t = 0];
                    else {
                        for (t = -1; 0 === o[0];) o.shift(), t -= A;
                        for (i = 1, n = o[0]; n >= 10;) n /= 10, i++;
                        A > i && (t -= A - i)
                    }
                    return s.e = t, s.c = o, s
                }

                function f(e) {
                    return new this(e).sqrt()
                }

                function l(i) {
                    function u(e, r) {
                        var t = this;
                        if (!(t instanceof u)) return p(u, "Decimal called without new", e), new u(e, r);
                        if (t.constructor = u, e instanceof u) {
                            if (null == r) return b = 0, t.s = e.s, t.e = e.e, t.c = (e = e.c) ? e.slice() : e, t;
                            if (10 == r) return g(new u(e), u.precision, u.rounding);
                            e += ""
                        }
                        return m(u, t, e, r)
                    }
                    return u.precision = 20, u.rounding = 4, u.modulo = 1, u.toExpNeg = -7, u.toExpPos = 21, u.minE = -S, u.maxE = S, u.errors = !0, u.crypto = !1, u.format = {
                        decimalSeparator: ".",
                        groupSeparator: ",",
                        groupSize: 3,
                        secondaryGroupSize: 0,
                        fractionGroupSeparator: " ",
                        fractionGroupSize: 0
                    }, u.prototype = O, u.ONE = new u(1), u.ROUND_UP = 0, u.ROUND_DOWN = 1, u.ROUND_CEIL = 2, u.ROUND_FLOOR = 3, u.ROUND_HALF_UP = 4, u.ROUND_HALF_DOWN = 5, u.ROUND_HALF_EVEN = 6, u.ROUND_HALF_CEIL = 7, u.ROUND_HALF_FLOOR = 8, u.EUCLID = 9, u.config = e, u.constructor = l, u.exp = r, u.ln = t, u.log = n, u.max = o, u.min = a, u.pow = s, u.sqrt = f, u.random = c, null != i && u.config(i), u
                }
                var m = function () {
                    var e = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                        r = String.prototype.trim || function () {
                            return this.replace(/^\s+|\s+$/g, "")
                        };
                    return function (t, n, i, o) {
                        var a, s, u, c, f, l;
                        if ("string" != typeof i && (i = (c = "number" == typeof i || "[object Number]" == M.call(i)) && 0 === i && 0 > 1 / i ? "-0" : i + ""), f = i, null == o && e.test(i)) n.s = 45 === i.charCodeAt(0) ? (i = i.slice(1), -1) : 1;
                        else {
                            if (10 == o) return g(new t(i), t.precision, t.rounding);
                            if (i = r.call(i).replace(/^\+(?!-)/, ""), n.s = 45 === i.charCodeAt(0) ? (i = i.replace(/^-(?!-)/, ""), -1) : 1, null != o ? o != (0 | o) && t.errors || (y = !(o >= 2 && 65 > o)) ? (p(t, "base", o, 0, 0), l = e.test(i)) : (a = "[" + T.slice(0, o = 0 | o) + "]+", i = i.replace(/\.$/, "").replace(/^\./, "0."), (l = new RegExp("^" + a + "(?:\\." + a + ")?$", 37 > o ? "i" : "").test(i)) ? (c && (i.replace(/^0\.0*|\./, "").length > 15 && p(t, 0, f), c = !c), i = d(t, i, 10, o, n.s)) : "Infinity" != i && "NaN" != i && (p(t, "not a base " + o + " number", f), i = "NaN")) : l = e.test(i), !l) return n.c = n.e = null, "Infinity" != i && ("NaN" != i && p(t, "not a number", f), n.s = null), b = 0, n
                        }
                        for ((s = i.indexOf(".")) > -1 && (i = i.replace(".", "")), (u = i.search(/e/i)) > 0 ? (0 > s && (s = u), s += +i.slice(u + 1), i = i.substring(0, u)) : 0 > s && (s = i.length), u = 0; 48 === i.charCodeAt(u); u++);
                        for (o = i.length; 48 === i.charCodeAt(--o););
                        if (i = i.slice(u, o + 1)) {
                            if (o = i.length, c && o > 15 && p(t, 0, f), n.e = s = s - u - 1, n.c = [], u = (s + 1) % A, 0 > s && (u += A), o > u) {
                                for (u && n.c.push(+i.slice(0, u)), o -= A; o > u;) n.c.push(+i.slice(u, u += A));
                                i = i.slice(u), u = A - i.length
                            } else u -= o;
                            for (; u--; i += "0");
                            n.c.push(+i), w && (n.e > t.maxE ? n.c = n.e = null : n.e < t.minE && (n.c = [n.e = 0]))
                        } else n.c = [n.e = 0];
                        return b = 0, n
                    }
                }();
                return l()
            }(), n = function () {
                return v
            }.call(r, t, r, e), !(void 0 !== n && (e.exports = n))
        }(this)
    }, function (e, r, t) {
        "use strict";
        e.exports = {
            end: !0
        }
    }, function (e, r, t) {
        "use strict";

        function n(e) {
            for (var r = e.getIdentifier(), t = 0; t < a.length; t++)
                if (r in a[t]) return t;
            return null
        }

        function i(e) {
            var r = e.getIdentifier(),
                t = n(e);
            if (null === t) return null;
            var i = a[t][r];
            if (i.hasOwnProperty("associativity")) {
                if ("left" === i.associativity) return "left";
                if ("right" === i.associativity) return "right";
                throw Error("'" + r + "' has the invalid associativity '" + i.associativity + "'.")
            }
            return null
        }

        function o(e, r) {
            var t = e.getIdentifier(),
                i = r.getIdentifier(),
                o = n(e);
            if (null === o) return null;
            var s = a[o][t];
            if (s.hasOwnProperty("associativeWith") && s.associativeWith instanceof Array) {
                for (var u = 0; u < s.associativeWith.length; u++)
                    if (s.associativeWith[u] === i) return !0;
                return !1
            }
            return null
        }
        var a = [{
            AssignmentNode: {},
            FunctionAssignmentNode: {}
        }, {
            ConditionalNode: {}
        }, {
            "OperatorNode:or": {
                associativity: "left",
                associativeWith: []
            }
        }, {
            "OperatorNode:xor": {
                associativity: "left",
                associativeWith: []
            }
        }, {
            "OperatorNode:and": {
                associativity: "left",
                associativeWith: []
            }
        }, {
            "OperatorNode:bitOr": {
                associativity: "left",
                associativeWith: []
            }
        }, {
            "OperatorNode:bitXor": {
                associativity: "left",
                associativeWith: []
            }
        }, {
            "OperatorNode:bitAnd": {
                associativity: "left",
                associativeWith: []
            }
        }, {
            "OperatorNode:equal": {
                associativity: "left",
                associativeWith: []
            },
            "OperatorNode:unequal": {
                associativity: "left",
                associativeWith: []
            },
            "OperatorNode:smaller": {
                associativity: "left",
                associativeWith: []
            },
            "OperatorNode:larger": {
                associativity: "left",
                associativeWith: []
            },
            "OperatorNode:smallerEq": {
                associativity: "left",
                associativeWith: []
            },
            "OperatorNode:largerEq": {
                associativity: "left",
                associativeWith: []
            }
        }, {
            "OperatorNode:leftShift": {
                associativity: "left",
                associativeWith: []
            },
            "OperatorNode:rightArithShift": {
                associativity: "left",
                associativeWith: []
            },
            "OperatorNode:rightLogShift": {
                associativity: "left",
                associativeWith: []
            }
        }, {
            "OperatorNode:to": {
                associativity: "left",
                associativeWith: []
            }
        }, {
            RangeNode: {}
        }, {
            "OperatorNode:add": {
                associativity: "left",
                associativeWith: ["OperatorNode:add", "OperatorNode:subtract"]
            },
            "OperatorNode:subtract": {
                associativity: "left",
                associativeWith: []
            }
        }, {
            "OperatorNode:multiply": {
                associativity: "left",
                associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "Operator:dotMultiply", "Operator:dotDivide"]
            },
            "OperatorNode:divide": {
                associativity: "left",
                associativeWith: []
            },
            "OperatorNode:dotMultiply": {
                associativity: "left",
                associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "OperatorNode:dotMultiply", "OperatorNode:doDivide"]
            },
            "OperatorNode:dotDivide": {
                associativity: "left",
                associativeWith: []
            },
            "OperatorNode:mod": {
                associativity: "left",
                associativeWith: []
            }
        }, {
            "OperatorNode:unaryPlus": {
                associativity: "right"
            },
            "OperatorNode:unaryMinus": {
                associativity: "right"
            },
            "OperatorNode:bitNot": {
                associativity: "right"
            },
            "OperatorNode:not": {
                associativity: "right"
            }
        }, {
            "OperatorNode:pow": {
                associativity: "right",
                associativeWith: []
            },
            "OperatorNode:dotPow": {
                associativity: "right",
                associativeWith: []
            }
        }, {
            "OperatorNode:factorial": {
                associativity: "left"
            }
        }, {
            "OperatorNode:transpose": {
                associativity: "left"
            }
        }];
        e.exports.properties = a, e.exports.getPrecedence = n, e.exports.getAssociativity = i, e.exports.isAssociativeWith = o
    }, function (e, r, t) {
        "use strict";

        function n() {
            for (var e, r = Array.prototype.slice.call(arguments), t = 0, n = r.length; n > t; t++) {
                e = r[t];
                for (var i in e) e.hasOwnProperty(i) && (x[i] = e[i])
            }
        }

        function i(e, r) {
            return "undefined" != typeof e[r]
        }

        function o(e) {
            return function (r) {
                return i(e, r)
            }
        }

        function a(e) {
            return function (t) {
                if ("boolean" == typeof e[t]) t = e[t] === !0 ? "\\" + t : "\\mathrm{" + t + "}";
                else if ("string" == typeof e[t]) t = e[t];
                else if ("string" == typeof t) {
                    var n = t.indexOf("_"); - 1 !== n && (t = r.toSymbol(t.substring(0, n)) + "_{" + r.toSymbol(t.substring(n + 1)) + "}")
                }
                return t
            }
        }
        var s = t(177),
            u = t(186),
            c = t(188),
            f = t(181),
            l = {
                Alpha: "A",
                alpha: !0,
                Beta: "B",
                beta: !0,
                Gamma: !0,
                gamma: !0,
                Delta: !0,
                delta: !0,
                Epsilon: "E",
                epsilon: !0,
                varepsilon: !0,
                Zeta: "Z",
                zeta: !0,
                Eta: "H",
                eta: !0,
                Theta: !0,
                theta: !0,
                vartheta: !0,
                Iota: "I",
                iota: !0,
                Kappa: "K",
                kappa: !0,
                varkappa: !0,
                Lambda: !0,
                lambda: !0,
                Mu: "M",
                mu: !0,
                Nu: "N",
                nu: !0,
                Xi: !0,
                xi: !0,
                Omicron: "O",
                omicron: !0,
                Pi: !0,
                pi: !0,
                varpi: !0,
                Rho: "P",
                rho: !0,
                varrho: !0,
                Sigma: !0,
                sigma: !0,
                varsigma: !0,
                Tau: "T",
                tau: !0,
                Upsilon: !0,
                upsilon: !0,
                Phi: !0,
                phi: !0,
                varphi: !0,
                Chi: "X",
                chi: !0,
                Psi: !0,
                psi: !0,
                Omega: !0,
                omega: !0
            },
            p = {
                dots: !0,
                ldots: !0,
                cdots: !0,
                vdots: !0,
                ddots: !0,
                idots: !0
            },
            m = {
                "true": "\\mathrm{True}",
                "false": "\\mathrm{False}"
            },
            h = {
                inf: "\\infty",
                Inf: "\\infty",
                infinity: "\\infty",
                Infinity: "\\infty",
                oo: "\\infty",
                lim: !0,
                undefined: "\\mathbf{?}"
            },
            g = {
                acos: "\\cos^{-1}",
                arccos: "\\cos^{-1}",
                cos: !0,
                csc: !0,
                csch: !1,
                exp: !0,
                ker: !0,
                limsup: !0,
                min: !0,
                sinh: !0,
                asin: "\\sin^{-1}",
                arcsin: "\\sin^{-1}",
                cosh: !0,
                deg: !0,
                gcd: !0,
                lg: !0,
                ln: !0,
                Pr: !0,
                sup: !0,
                atan: "\\tan^{-1}",
                atan2: "\\tan2^{-1}",
                arctan: "\\tan^{-1}",
                cot: !0,
                det: !0,
                hom: !0,
                log: !0,
                log10: "\\log_{10}",
                sec: !0,
                sech: !1,
                tan: !0,
                arg: !0,
                coth: !0,
                dim: !0,
                inf: !0,
                max: !0,
                sin: !0,
                tanh: !0,
                fix: !1,
                lcm: !1,
                sign: !1,
                xgcd: !1,
                unaryMinus: !1,
                unaryPlus: !1,
                complex: !1,
                conj: !1,
                im: !1,
                re: !1,
                diag: !1,
                resize: !1,
                size: !1,
                squeeze: !1,
                subset: !1,
                index: !1,
                ones: !1,
                zeros: !1,
                range: !1,
                random: !1,
                mean: "\\mu",
                median: !1,
                prod: !1,
                std: "\\sigma",
                "var": "\\sigma^2"
            },
            d = {
                sqrt: !0,
                inv: !0,
                "int": "\\int",
                Int: "\\int",
                integrate: "\\int",
                eigenvalues: "\\lambda",
                liminf: !0,
                lim: !0,
                exp: "e^",
                sum: !0,
                eye: "\\mathbf{I}"
            },
            v = {
                "<=": "\\leq",
                ">=": "\\geq",
                "!=": "\\neq",
                "in": !0,
                "*": "\\cdot",
                "/": "\\frac",
                mod: "\\bmod",
                to: "\\rightarrow"
            },
            y = {
                deg: "^{\\circ}"
            },
            x = {};
        n(g, d, l, p, m, h), r.isSymbol = o(x), r.toSymbol = a(x), r.isFunction = o(g), r.toFunction = a(g), r.isCurlyFunction = o(d), r.toCurlyFunction = a(d), r.isOperator = o(v), r.toOperator = a(v), r.isUnit = o(y), r.toUnit = function () {
            var e = a(y);
            return function (t, n) {
                return r.isUnit(t) ? e(t) : (n ? "" : "\\,") + "\\mathrm{" + t + "}"
            }
        }(), r.addBraces = function (e, r, t) {
            if (null === r) return e;
            var n = ["", ""];
            switch (t = t || "normal", "undefined" == typeof r || r === !1 ? n = ["{", "}"] : r === !0 ? (n = ["(", ")"], t = "lr") : n = Array.isArray(r) && 2 === r.length ? r : [r, r], t) {
                case "normal":
                case !1:
                    return n[0] + e + n[1];
                case "lr":
                    return "\\left" + n[0] + "{" + e + "}\\right" + n[1];
                case "be":
                    return "\\begin{" + n[0] + "}" + e + "\\end{" + n[1] + "}"
            }
            return n[0] + e + n[1]
        }, r.toArgs = function (e, t) {
            var n = e.name,
                i = e.args,
                o = r.toSymbol(e.name),
                a = null,
                l = null,
                p = !1,
                m = !1,
                h = "",
                g = "",
                d = null;
            switch (n) {
                case "add":
                    d = "+";
                    break;
                case "subtract":
                    d = "-";
                    break;
                case "larger":
                    d = ">";
                    break;
                case "largerEq":
                    d = ">=";
                    break;
                case "smaller":
                    d = "<";
                    break;
                case "smallerEq":
                    d = "<=";
                    break;
                case "unequal":
                    d = "!=";
                    break;
                case "equal":
                    d = "=";
                    break;
                case "mod":
                    d = "mod";
                    break;
                case "multiply":
                    d = "*";
                    break;
                case "pow":
                    d = "^";
                    break;
                case "concat":
                    d = "||";
                    break;
                case "factorial":
                    d = "!";
                    break;
                case "permutations":
                    if (1 !== i.length) {
                        var v = i[0].toTex(t),
                            y = i[1].toTex(t);
                        return "\\frac{" + v + "!}{\\left(" + v + " - " + y + "\\right)!}"
                    }
                    if (!(i[0] instanceof c || i[0] instanceof f)) return "{\\left(" + i[0].toTex(t) + "\\right)!}";
                    d = "!";
                    break;
                case "combinations":
                    d = "\\choose";
                    break;
                case "abs":
                    l = "|", p = "lr";
                    break;
                case "norm":
                    if (l = "\\|", p = "lr", 2 === i.length) {
                        var x = i[1].toTex(t);
                        "\\text{inf}" === x ? x = "\\infty" : "\\text{-inf}" === x ? x = "{- \\infty}" : "\\text{fro}" === x && (x = "F"), g = "_{" + x + "}", i = [i[0]]
                    }
                    break;
                case "ceil":
                    l = ["\\lceil", "\\rceil"], p = "lr";
                    break;
                case "floor":
                    l = ["\\lfloor", "\\rfloor"], p = "lr";
                    break;
                case "round":
                    l = ["\\lfloor", "\\rceil"], p = "lr", 2 === i.length && (g = "_" + r.addBraces(i[1].toTex(t)), i = [i[0]]);
                    break;
                case "inv":
                    g = "^{-1}";
                    break;
                case "transpose":
                    g = "^{T}", l = !1;
                    break;
                case "log":
                    var w = "e";
                    2 === i.length && (w = i[1].toTex(t), o = "\\log_{" + w + "}", i = [i[0]]), "e" === w && (o = "\\ln"), m = !0;
                    break;
                case "square":
                    g = "^{2}";
                    break;
                case "cube":
                    g = "^{3}";
                    break;
                case "eye":
                    m = !0, l = !1, o += "_";
                    break;
                case "det":
                    if (e.args[0] instanceof s) {
                        e.args[0].latexType = "vmatrix";
                        var b = e.args[0].toTex(t);
                        return delete e.args[0].latexType, b
                    }
                    l = "vmatrix", p = "be";
                    break;
                default:
                    m = !0
            }
            return null !== d ? (l = "+" === d || "-" === d, a = new u(d, n, i).toTex(t)) : d = ", ", null !== l || r.isCurlyFunction(n) || (l = !0), a = a || i.map(function (e) {
                return "{" + e.toTex(t) + "}"
            }).join(d), h + (m ? o : "") + r.addBraces(a, l, p) + g
        }
    }])
});