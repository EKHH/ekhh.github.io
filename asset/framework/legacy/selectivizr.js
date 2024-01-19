! function (e) {
	var t, r = navigator.userAgent.match(/MSIE (\d+)/);
	if (!r) return !1;
	var n = document,
		a = n.documentElement,
		s = function t() {
			if (e.XMLHttpRequest) return new XMLHttpRequest;
			try {
				return new ActiveXObject("Microsoft.XMLHTTP")
			} catch (r) {
				return null
			}
		}(),
		c = r[1];
	if ("CSS1Compat" == n.compatMode && !(c < 6) && !(c > 8) && s) {
		var l = {
				NW: "*.Dom.select",
				MooTools: "$$",
				DOMAssistant: "*.$",
				Prototype: "$$",
				YAHOO: "*.util.Selector.query",
				Sizzle: "*",
				jQuery: "*",
				dojo: "*.query"
			},
			i = [],
			o = [],
			u = 0,
			f = /(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*?/g,
			d = /@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))\s*([^;]*);/g,
			p = /(behavior\s*?:\s*)?\burl\(\s*(["']?)(?!data:)([^"')]+)\2\s*\)/g,
			h = /^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/,
			g = /:(:first-(?:line|letter))/g,
			$ = /((?:^|(?:\s*})+)(?:\s*@media[^{]+{)?)\s*([^\{]*?[\[:][^{]+)/g,
			v = /([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g,
			b = /(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g,
			y = /[^\w-]/g,
			m = /^(INPUT|SELECT|TEXTAREA|BUTTON)$/,
			_ = /^(checkbox|radio)$/,
			N = c > 6 ? /[\$\^*]=(['"])\1/ : null,
			S = /([(\[+~])\s+/g,
			T = /\s+([)\]+~])/g,
			E = /\s+/g,
			A = /^\s*((?:[\S\s]*\S)?)\s*$/,
			k = n.getElementsByTagName("BASE"),
			C = k.length > 0 ? k[0].href : n.location.href;
		! function e() {
			for (var t, r, a = 0; a < n.styleSheets.length; a++) "" != (r = n.styleSheets[a]).href && (t = P(r.href)) && (r.cssText = r.rawCssText = x(X(t)))
		}(),
		function e(t, r) {
			var s = !1,
				c = !0,
				l = function (e) {
					("readystatechange" != e.type || "complete" == n.readyState) && (("load" == e.type ? t : n).detachEvent("on" + e.type, l, !1), !s && (s = !0) && r.call(t, e.type || e))
				},
				i = function () {
					try {
						a.doScroll("left")
					} catch (e) {
						setTimeout(i, 50);
						return
					}
					l("poll")
				};
			if ("complete" == n.readyState) r.call(t, "");
			else {
				if (n.createEventObject && a.doScroll) {
					try {
						c = !t.frameElement
					} catch (o) {}
					c && i()
				}
				L(n, "readystatechange", l), L(t, "load", l)
			}
		}(e, function () {
			for (var r in l) {
				var n, a, s = e;
				if (e[r]) {
					for (n = l[r].replace("*", r).split(".");
						(a = n.shift()) && (s = s[a]););
					if ("function" == typeof s) {
						t = s, D();
						return
					}
				}
			}
		})
	}

	function x(e) {
		return e.replace(g, "$1").replace($, function (e, t, r) {
			for (var n = r.split(","), a = 0, s = n.length; a < s; a++) {
				var c = B(n[a]) + " ",
					l = [];
				n[a] = c.replace(v, function (e, t, r, n, a) {
					if (t) return l.length > 0 && (o.push({
						selector: c.substring(0, a),
						patches: l
					}), l = []), t;
					var s = r ? M(r) : O(n);
					return s ? (l.push(s), "." + s.className) : e
				})
			}
			return t + n.join(",")
		})
	}

	function O(e) {
		return !N || N.test(e) ? {
			className: j(e),
			applyClass: !0
		} : null
	}

	function M(t) {
		var r, n, s = !0,
			l = j(t.slice(1)),
			o = ":not(" == t.substring(0, 5);
		o && (t = t.slice(5, -1));
		var u = t.indexOf("(");
		if (u > -1 && (t = t.substring(0, u)), ":" == t.charAt(0)) switch (t.slice(1)) {
			case "root":
				s = function (e) {
					return o ? e != a : e == a
				};
				break;
			case "target":
				if (8 == c) {
					s = function (t) {
						var r = function () {
							var e = location.hash,
								r = e.slice(1);
							return o ? "" == e || t.id != r : "" != e && t.id == r
						};
						return L(e, "hashchange", function () {
							H(t, l, r())
						}), r()
					};
					break
				}
				return !1;
			case "checked":
				s = function (e) {
					return _.test(e.type) && L(e, "propertychange", function () {
						"checked" == event.propertyName && H(e, l, e.checked !== o)
					}), e.checked !== o
				};
				break;
			case "disabled":
				o = !o;
			case "enabled":
				s = function (e) {
					return m.test(e.tagName) ? (L(e, "propertychange", function () {
						"$disabled" == event.propertyName && H(e, l, e.$disabled === o)
					}), i.push(e), e.$disabled = e.disabled, e.disabled === o) : ":enabled" == t ? o : !o
				};
				break;
			case "focus":
				r = "focus", n = "blur";
			case "hover":
				r || (r = "mouseenter", n = "mouseleave"), s = function (e) {
					return L(e, o ? n : r, function () {
						H(e, l, !0)
					}), L(e, o ? r : n, function () {
						H(e, l, !1)
					}), o
				};
				break;
			default:
				if (!h.test(t)) return !1
		}
		return {
			className: l,
			applyClass: s
		}
	}

	function w(e, t) {
		return RegExp("(^|\\s)" + t.className + "(\\s|$)").test(e.className)
	}

	function j(e) {
		return "slvzr-" + (6 == c ? u++ : e.replace(y, function (e) {
			return e.charCodeAt(0)
		}))
	}

	function z(t) {
		e.console && e.console.log(t)
	}

	function q(e) {
		return e.replace(A, "$1")
	}

	function B(e) {
		var t;
		return q(t = e.replace(S, "$1").replace(T, "$1")).replace(E, " ")
	}

	function H(e, t, r) {
		var n = e.className,
			a = I(n, t, r);
		a != n && (e.className = a, e.parentNode.className += "")
	}

	function I(e, t, r) {
		var n = RegExp("(^|\\s)" + t + "(\\s|$)"),
			a = n.test(e);
		return r ? a ? e : e + " " + t : a ? q(e.replace(n, "$1")) : e
	}

	function L(e, t, r) {
		e.attachEvent("on" + t, r)
	}

	function P(e, t, r) {
		function n(e) {
			return e.substring(0, e.indexOf("/", 8))
		}
		if (t || (t = C), "//" == e.substring(0, 2)) {
			var a;
			e = (a = t).substring(0, a.indexOf("//")) + e
		}
		if (/^https?:\/\//i.test(e)) return r || n(t) == n(e) ? e : null;
		if ("/" == e.charAt(0)) return n(t) + e;
		var s = t.split(/[?#]/)[0];
		return "?" != e.charAt(0) && "/" != s.charAt(s.length - 1) && (s = s.substring(0, s.lastIndexOf("/") + 1)), s + e
	}

	function X(e) {
		if (e) {
			var t;
			return (t = e, s.open("GET", t, !1), s.send(), 200 == s.status ? s.responseText : "").replace(f, "").replace(d, function (t, r, n, a, s, c) {
				var l = X(P(n || s, e));
				return c ? "@media " + c + " {" + l + "}" : l
			}).replace(p, function (t, r, n, a) {
				return n = n || "", r ? t : " url(" + n + P(a, e, !0) + n + ") "
			})
		}
		return ""
	}

	function D() {
		! function e() {
			for (var r, n, a, s, c = 0; c < o.length; c++) {
				n = o[c].selector, a = o[c].patches, ("" == (s = n.replace(b, "")) || " " == s.charAt(s.length - 1)) && (s += "*");
				try {
					r = t(s)
				} catch (l) {
					z("Selector '" + n + "' threw exception '" + l + "'")
				}
				if (r)
					for (var i = 0, u = r.length; i < u; i++) {
						for (var f = r[i], d = f.className, p = 0, h = a.length; p < h; p++) {
							var g = a[p];
							!w(f, g) && g.applyClass && (!0 === g.applyClass || !0 === g.applyClass(f)) && (d = I(d, g.className, !0))
						}
						f.className = d
					}
			}
		}(), i.length > 0 && setInterval(function () {
			for (var e = 0, t = i.length; e < t; e++) {
				var r = i[e];
				r.disabled !== r.$disabled && (r.disabled ? (r.disabled = !1, r.$disabled = !0, r.disabled = !0) : r.$disabled = r.disabled)
			}
		}, 250)
	}
}(this);