﻿(function (g, k, A) {
    function w(a, b, c) {
        return function () {
            try {
                return a.apply(this, arguments)
            } catch (d) {
                c || xa(d, b)
            }
        }
    }

    function xa(a, b) {
        var c;
        if (.01 > Math.random()) try {
            var d = a && a.message || "";
            (c = -1 < d.indexOf("network error occurred") || -1 < d.indexOf("send beacon") && -1 < d.indexOf("Content Security Policy")) || (new Pa).log("jserrs", ra, a.message, b, M.href, "", "string" === typeof a.stack && a.stack.replace(/\n/g, "\\n"))
        } catch (f) {
        }
    }

    function wb(a, b, c, d, f) {
        function q(a, b) {
            b = Math.max(0, Math.min(b, 65535));
            e.mergeArrays(a, [b >>
            8, b & 255])
        }

        function n(a, b) {
            e.mergeArrays(a, [b & 255])
        }

        function h(a, b) {
            for (b = Math.max(0, b | 0); 127 < b;) e.mergeArrays(a, [b & 127 | 128]), b >>= 7;
            e.mergeArrays(a, [b])
        }

        function x(a, b) {
            255 < b.length && (b = b.substr(0, 255));
            e.mergeArrays(a, [b.length]);
            for (var c = 0; c < b.length; c++) q(a, b.charCodeAt(c))
        }

        function t(a, b) {
            h(a, b.length);
            for (var c = 0; c < b.length; c++) h(a, b.charCodeAt(c))
        }

        function Q(a) {
            if (!a.nodeName) return a[F] = -1, null;
            var b = +a[F];
            if (!isFinite(b) || 0 >= b) return null;
            if (a.attributes) for (var c = a; c;) {
                if (c.attributes.__ym_wv_ign) return null;
                c = c.parentElement
            }
            c = 64;
            var d = 0, f = p.getElementParent(a), e = f && f[F] ? f[F] : 0;
            0 > e && (e = 0);
            var ya = a.nodeName.toUpperCase(), g = yb[ya];
            g || (c |= 2);
            var t = p.getElementNeighborPosition(a);
            t || (c |= 4);
            var Q = p.getElementRegion(a);
            (f = f ? p.getElementRegion(f) : null) && Q[0] == f[0] && Q[1] == f[1] && Q[2] == f[2] && Q[3] == f[3] && (c |= 8);
            W[b].pos = Q[0] + "x" + Q[1];
            W[b].size = Q[2] + "x" + Q[3];
            a.id && "string" == typeof a.id && (c |= 32);
            (f = p.calcTextChecksum(a)) && (c |= 16);
            var R = p.calcAttribChecksum(a);
            R && (d |= 2);
            a:{
                var v = p.getElementChildren(p.getElementParent(a),
                    a.tagName);
                for (var k = 0; k < v.length; k++) if ((!v[k].id || "string" != typeof v[k].id) && p.calcAttribChecksum(v[k]) == R && p.calcTextChecksum(v[k]) == f) {
                    v = !0;
                    break a
                }
                v = !1
            }
            if (v) {
                c |= 1;
                var l = p.calcChildrenChecksum(a)
            }
            v = [];
            n(v, 1);
            h(v, b);
            n(v, c);
            h(v, e);
            g ? n(v, g) : x(v, ya);
            t && h(v, t);
            c & 8 || (h(v, Q[0]), h(v, Q[1]), h(v, Q[2]), h(v, Q[3]));
            c & 32 && x(v, a.id);
            f && q(v, f);
            c & 1 && q(v, l);
            n(v, d);
            R && q(v, R);
            return v
        }

        function r(a, b, c, d, f, e) {
            for (var q; c && (q = p.getElementSize(c)) && (!q[0] || !q[1]);) c = p.getElementParent(c);
            if (!c) return null;
            q = c[F];
            if (!q ||
                0 > q) return null;
            var g = {mousemove: 2, click: 32, dblclick: 33, mousedown: 4, mouseup: 30, touch: 12}[b];
            if (!g) return null;
            var ya = p.getElementXY(c);
            c = [];
            n(c, g);
            h(c, a);
            h(c, q);
            h(c, Math.max(0, d[0] - ya[0]));
            h(c, Math.max(0, d[1] - ya[1]));
            /^mouse(up|down)|click$/.test(b) && (a = f || e, n(c, 2 > a ? 1 : a == (f ? 2 : 4) ? 4 : 2));
            return c
        }

        function Ab(a, b, c, d) {
            b = b[F];
            if (!b || 0 > b) return null;
            var f = [];
            n(f, 31);
            h(f, a);
            h(f, b);
            h(f, c[0]);
            h(f, c[1]);
            n(f, 0);
            n(f, 0);
            n(f, d);
            return f
        }

        function za(a, b) {
            var c = [];
            n(c, 3);
            h(c, a);
            h(c, b[0]);
            h(c, b[1]);
            return c
        }

        function $a(a,
                    b, c) {
            var d = [];
            c = c[F];
            if (!c || 0 > c) return null;
            n(d, 16);
            h(d, a);
            h(d, b[0]);
            h(d, b[1]);
            h(d, c);
            return d
        }

        function u(a, b, c) {
            var d = [];
            n(d, 28);
            h(d, a);
            h(d, b[0]);
            h(d, b[1]);
            h(d, c[0]);
            h(d, c[1]);
            return d
        }

        function A(a, b, c, d, f) {
            var e = [];
            n(e, 38);
            h(e, a);
            q(e, b);
            n(e, c);
            a = d[F];
            if (!a || 0 > a) a = 0;
            h(e, a);
            n(e, f ? 1 : 0);
            return e
        }

        function Bb(a, b) {
            var c;
            if (0 == b.length) var d = c = ""; else 100 >= b.length ? (c = b, d = "") : 200 >= b.length ? (c = b.substr(0, 100), d = b.substr(100)) : (c = b.substr(0, 97), d = b.substr(b.length - 97));
            var f = [];
            n(f, 29);
            h(f, a);
            t(f, c);
            t(f,
                d);
            return f
        }

        function Aa(a) {
            var b = [];
            n(b, 27);
            h(b, a);
            return b
        }

        function Qa(a) {
            var b = [];
            n(b, 14);
            h(b, a);
            return b
        }

        function sa(a) {
            var b = [];
            n(b, 15);
            h(b, a);
            return b
        }

        function Ba(a, b) {
            var c = [];
            n(c, 17);
            h(c, a);
            h(c, b[F]);
            return c
        }

        function z(a, b) {
            var c = [];
            n(c, 18);
            h(c, a);
            h(c, b[F]);
            return c
        }

        function I(a, b, c, d) {
            var f = [];
            n(f, 39);
            h(f, a);
            h(f, b[F]);
            x(f, String(c));
            n(f, d ? 1 : 0);
            return f
        }

        function E(a) {
            var b = a[F];
            if (!b || 0 > b || !/^INPUT|SELECT|TEXTAREA$/.test(a.nodeName) || !a.form || T(a.form)) return null;
            var c = p.getFormNumber(a.form);
            if (0 > c) return null;
            var d = "INPUT" == a.nodeName ? {
                text: 0,
                color: 0,
                date: 0,
                datetime: 0,
                "datetime-local": 0,
                email: 0,
                number: 0,
                range: 0,
                search: 0,
                tel: 0,
                time: 0,
                url: 0,
                month: 0,
                week: 0,
                password: 2,
                radio: 3,
                checkbox: 4,
                file: 6,
                image: 7
            }[a.type] : {SELECT: 1, TEXTAREA: 5}[a.nodeName];
            if ("number" != typeof d) return null;
            for (var f = -1, e = a.form.elements, q = e.length, g = 0, x = 0; g < q; g++) if (e[g].name == a.name) {
                if (e[g] == a) {
                    f = x;
                    break
                }
                x++
            }
            if (0 > f) return null;
            e = [];
            n(e, 7);
            h(e, b);
            h(e, c);
            h(e, d);
            t(e, a.name || "");
            h(e, f);
            return e
        }

        function L(a, b) {
            var c = p.getFormNumber(b);
            if (0 > c) return null;
            for (var d = b.elements, f = d.length, q = [], g = 0; g < f; g++) if (!p.isEmptyField(d[g])) {
                var x = d[g][F];
                x && 0 < x && e.mergeArrays(q, [x])
            }
            d = [];
            n(d, 11);
            h(d, a);
            h(d, c);
            h(d, q.length);
            for (c = 0; c < q.length; c++) h(d, q[c]);
            return d
        }

        function M() {
            var a = [];
            n(a, 13);
            return a
        }

        function G(a, b, c) {
            a = a.apply(g, b);
            ta.append(a, c)
        }

        function O(a) {
            if (a[F]) a:{
                var b = m.nowEventTime();
                var c = a[F];
                if (0 < c) {
                    var d = [];
                    a = p.getElementRegion(a);
                    var f = W[c], e = a[0] + "x" + a[1], q = a[2] + "x" + a[3];
                    e != f.pos && (f.pos = e, n(d, 9), h(d, b), h(d, c), h(d, a[0]), h(d,
                        a[1]));
                    q != f.size && (f.size = q, n(d, 10), h(d, b), h(d, c), h(d, a[2]), h(d, a[3]));
                    if (d.length) {
                        b = d;
                        break a
                    }
                }
                b = null
            } else (b = p.getElementParent(a)) && O(b), a[F] = ab, W[ab] = {}, ab++, b = Q(a), ta.append(b, void 0), b = E(a);
            ta.append(b, void 0)
        }

        function P(a, b) {
            var c = a && p.classNameExists(a, "(ym-disable-keys|-metrika-nokeys)");
            b && a && (c = c || !!p.getElementsByClassName("(ym-disable-keys|-metrika-nokeys)", a).length);
            return c
        }

        function T(a) {
            return a && p.classNameExists(a, "(ym-disable-submit|-metrika-noform)")
        }

        function N(a) {
            var b = B.getTarget(a);
            if (b && "SCROLLBAR" != b.nodeName) {
                if (/^INPUT|SELECT|TEXTAREA|BUTTON$/.test(b.tagName)) if (b[F]) O(b); else {
                    var c = b.form;
                    if (c) {
                        c = c.elements;
                        for (var d = c.length, f = 0; f < d; f++) /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(c[f].tagName) && !c[f][F] && O(c[f])
                    } else O(b)
                } else O(b);
                G(r, [m.nowEventTime(), a.type, b, B.getPos(a), a.which, a.button])
            }
        }

        function Z(a) {
            N(a);
            oa()
        }

        function D(a) {
            var b = m.nowTime(), c = b - kb;
            if (!(10 > c)) {
                var d = B.getPos(a), f = bb[0] - d[0], n = bb[1] - d[1];
                f = f * f + n * n;
                0 >= f || 16 > f && 100 > c || 20 > c && 256 > f || (kb = b, bb = d, N(a))
            }
        }

        function ea() {
            var a =
                p.getDocumentScroll(), b = m.nowTime();
            10 > b - lb || 10 > Math.abs(a[0] - cb[0]) && 10 > Math.abs(a[1] - cb[1]) || (lb = b, cb = a, G(za, [m.nowEventTime(), a]))
        }

        function da(a) {
            if (a = B.getTarget(a)) {
                var b = Math.random(), c = [a.scrollLeft, a.scrollTop];
                if (a.localId) {
                    if (b = db[a.localId], !b || 10 > Math.abs(c[0] - b[0]) && 10 > Math.abs(c[1] - b[1])) return
                } else {
                    for (; db[b];) b = Math.random();
                    a.localId = b
                }
                db[a.localId] = c;
                a !== k && (O(a), G($a, [m.nowEventTime(), c, a]))
            }
        }

        function V() {
            G(u, [m.nowEventTime(), p.getViewportSize(), p.getDocumentSize()])
        }

        function aa() {
            G(M,
                [], !0)
        }

        function la(a) {
            return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
        }

        function ka(a) {
            return "INPUT" == a.tagName ? "password" == a.type || a.name && Ra.test(a.name) || a.id && Ra.test(a.id) : !1
        }

        function J(a) {
            if (!a) return {ignore: !0, forceRecord: !1, isPrivate: !1, privateFlag: !1, recordData: !0};
            var b = "password" === a.type || Ra.test(a.name) || Ra.test(a.id), c = e.reduce(function (b, c) {
                    return b || Ea.generalRegex.test(a[c])
                }, !1, ["className", "id", "name"]) || Ea.placeholderRegex.test(a.placeholder),
                d = Ea.forceRecordRegex.test(a.className);
            return {
                forceRecord: d,
                ignore: b,
                isPrivate: c,
                privateFlag: !d && (c || b),
                recordData: d || !(c && f.get("isEU") || b)
            }
        }

        function ha(a, b, c) {
            a = B.getTarget(a);
            var d = J(a);
            d.ignore || !d.forceRecord && (d.isPrivate && f.get("isEU") || P(a)) || (O(a), G(A, [m.nowEventTime(), b, c, a, d.privateFlag]))
        }

        function Y(a) {
            var b = a.keyCode, c = la(a);
            if ({
                    3: 1,
                    8: 1,
                    9: 1,
                    13: 1,
                    16: 1,
                    17: 1,
                    18: 1,
                    19: 1,
                    20: 1,
                    27: 1,
                    33: 1,
                    34: 1,
                    35: 1,
                    36: 1,
                    37: 1,
                    38: 1,
                    39: 1,
                    40: 1,
                    45: 1,
                    46: 1,
                    91: 1,
                    92: 1,
                    93: 1,
                    106: 1,
                    110: 1,
                    111: 1,
                    144: 1,
                    145: 1
                }[b] || 112 <= b && 123 >=
                b || 96 <= b && 105 >= b || c & 16) 19 == b && 4 == (c & -17) && (b = 144), ha(a, b, c | 16), U = !1, e.setTimeout(function () {
                U = !0
            }, 1, "wvl.keyDown"), !(67 == b && c & 4) || c & 1 || c & 2 || ba()
        }

        function ma(a) {
            U && !eb && 0 !== a.which && (ha(a, a.charCode || a.keyCode, la(a)), eb = !0, e.setTimeout(function () {
                eb = !1
            }, 1, "vwl.keyPress"))
        }

        function oa() {
            if (g.getSelection) {
                try {
                    var a = g.getSelection()
                } catch (xb) {
                    return
                }
                var b = a.toString();
                var c = a.anchorNode
            } else k.selection && k.selection.createRange && (a = k.selection.createRange(), b = a.text, c = a.parentElement());
            if ("string" ==
                typeof b) {
                try {
                    for (; c && 1 != c.nodeType;) c = c.parentNode
                } catch (xb) {
                    return
                }
                if (c) {
                    a = J(c).privateFlag || P(c, !0);
                    c = c.getElementsByTagName("*");
                    for (var d = 0; d < c.length && !a;) a = J(c[d]).privateFlag || P(c[d], !0), d++;
                    b != fb && (fb = b, b = a ? e.map(function () {
                        return Ea.obfuscatedSymbol
                    }, b.split("")).join("") : b, G(Bb, [m.nowEventTime(), b]))
                }
            }
        }

        function ba() {
            gb || (gb = !0, fb && G(Aa, [m.nowEventTime()]), e.setTimeout(function () {
                gb = !1
            }, 1, "wvl.copy"))
        }

        function ja() {
            Fa || (Fa = !0, G(Qa, [m.nowEventTime()]))
        }

        function pa() {
            Fa && (Fa = !1, G(sa, [m.nowEventTime()]))
        }

        function na(a) {
            (!Fa || a && !a.fromElement) && ja()
        }

        function fa(a) {
            a && !a.toElement && pa()
        }

        function R(a) {
            if ((a = B.getTarget(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName)) {
                if (a[F]) O(a); else {
                    var b = a.form;
                    if (b) {
                        b = b.elements;
                        for (var c = b.length, d = 0; d < c; d++) /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(b[d].tagName) && !b[d][F] && O(b[d])
                    } else O(a)
                }
                G(Ba, [m.nowEventTime(), a])
            }
        }

        function v(a) {
            (a = B.getTarget(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName) && (O(a), G(z, [m.nowEventTime(), a]))
        }

        function K(a) {
            if ((a = B.getTarget(a)) &&
                !ka(a) && !P(a) && /^INPUT|SELECT|TEXTAREA$/.test(a.tagName)) {
                var b = J(a), c = /^(checkbox|radio)$/.test(a.type) ? a.checked : a.value;
                c = b.recordData ? c : e.map(function () {
                    return Ea.obfuscatedSymbol
                }, c.split("")).join("");
                O(a);
                G(I, [m.nowEventTime(), a, c, b.privateFlag])
            }
        }

        function X(a) {
            if ((a = B.getTarget(a)) && !T(a) && "FORM" == a.nodeName) {
                for (var b = a.elements, c = 0; c < b.length; c++) p.isEmptyField(b[c]) || O(b[c]);
                G(L, [m.nowEventTime(), a], !0)
            }
        }

        function ca(a) {
            ea();
            if (a.touches && a.touches.length) {
                var b = B.getTarget(a);
                if (b && b !=
                    k) {
                    O(b);
                    for (var c = 0; c < a.touches.length; c++) G(r, [m.nowEventTime(), "touch", b, [a.touches[c].pageX, a.touches[c].pageY], 0, 0])
                }
            }
        }

        function H(a) {
            var b = B.getTarget(a);
            if (b) {
                var c;
                "wheel" == a.type ? c = 0 < a.deltaY ? 1 : 0 > a.deltaY ? 2 : 0 : "mousewheel" == a.type && (c = 0 < a.wheelDelta ? 2 : 0 > a.wheelDelta ? 1 : 0);
                c && (O(b), G(Ab, [m.nowEventTime(), b, B.getPos(a), c]))
            }
        }

        function qa(a) {
            (a = B.getTarget(a)) && "BODY" == a.tagName && ta.append([], !0)
        }

        var ta = new Sa({
                protocol: a, globalConfig: f, counterId: b, counterType: c, meta: {
                    url: y().href, hitId: d, timezone: Ga,
                    timestamp: Ha
                }
            }), mb = p.getBody(), yb = {
                A: 1,
                ABBR: 2,
                ACRONYM: 3,
                ADDRESS: 4,
                APPLET: 5,
                AREA: 6,
                B: 7,
                BASE: 8,
                BASEFONT: 9,
                BDO: 10,
                BIG: 11,
                BLOCKQUOTE: 12,
                BODY: 13,
                BR: 14,
                BUTTON: 15,
                CAPTION: 16,
                CENTER: 17,
                CITE: 18,
                CODE: 19,
                COL: 20,
                COLGROUP: 21,
                DD: 22,
                DEL: 23,
                DFN: 24,
                DIR: 25,
                DIV: 26,
                DL: 27,
                DT: 28,
                EM: 29,
                FIELDSET: 30,
                FONT: 31,
                FORM: 32,
                FRAME: 33,
                FRAMESET: 34,
                H1: 35,
                H2: 36,
                H3: 37,
                H4: 38,
                H5: 39,
                H6: 40,
                HEAD: 41,
                HR: 42,
                HTML: 43,
                I: 44,
                IFRAME: 45,
                IMG: 46,
                INPUT: 47,
                INS: 48,
                ISINDEX: 49,
                KBD: 50,
                LABEL: 51,
                LEGEND: 52,
                LI: 53,
                LINK: 54,
                MAP: 55,
                MENU: 56,
                META: 57,
                NOFRAMES: 58,
                NOSCRIPT: 59,
                OBJECT: 60,
                OL: 61,
                OPTGROUP: 62,
                OPTION: 63,
                P: 64,
                PARAM: 65,
                PRE: 66,
                Q: 67,
                S: 68,
                SAMP: 69,
                SCRIPT: 70,
                SELECT: 71,
                SMALL: 72,
                SPAN: 73,
                STRIKE: 74,
                STRONG: 75,
                STYLE: 76,
                SUB: 77,
                SUP: 78,
                TABLE: 79,
                TBODY: 80,
                TD: 81,
                TEXTAREA: 82,
                TFOOT: 83,
                TH: 84,
                THEAD: 85,
                TITLE: 86,
                TR: 87,
                TT: 88,
                U: 89,
                UL: 90,
                VAR: 91,
                NOINDEX: 100
            }, Ea = function () {
                var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                return {
                    generalRegex: new RegExp("(" + a.join("|") + ")", "i"),
                    placeholderRegex: new RegExp("(" + a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";")).join("|") +
                        ")", "i"),
                    forceRecordRegex: /ym-record-keys/i,
                    obfuscatedSymbol: String.fromCharCode(8226),
                    obfuscatedKeyCode: 88
                }
            }(), ab = 1, kb = 0, bb = [0, 0], lb = 0, cb = [0, 0], db = {}, Ra = /^(password|passwd|pswd)$/, U = !0,
            eb = !1, fb = "", gb = !1, Fa = !0;
        m.initCorrector();
        m.nowTime();
        var F = "metrikaId_" + Math.random(), W = {}, S = ":submit" + Math.random();
        if (!e.isMetrikaPlayer()) {
            l.on(k, "mousemove", D);
            l.on(k, "click,dblclick,mousedown", N);
            l.on(k, "mouseup", Z);
            l.on(g, "scroll", ea);
            if ("onmousewheel" in k) l.on(k, "mousewheel", H); else l.on(k, "wheel", H);
            l.on(g,
                "beforeunload", aa);
            if (!Cb) l.on(g, "unload", aa);
            l.on(g, "resize", V);
            l.on(k, "keydown", Y);
            l.on(k, "keypress", ma);
            l.on(k, "copy", ba);
            l.on(k, "touchmove,touchstart", ca);
            if (mb) l.on(k, "mouseleave", qa);
            k.attachEvent && !g.opera ? (l.on(k, "focusin", na), l.on(k, "focusout", fa)) : (l.on(g, "focus", ja), l.on(g, "blur", pa), l.on(k, "blur", pa));
            k.addEventListener ? (l.on(k, "scroll", da), l.on(k, "focus", R), l.on(k, "blur", v), l.on(k, "change", K), l.on(k, "submit", X)) : k.attachEvent && (l.on(k, "focusin", R), l.on(k, "focusout", v), function () {
                for (var a =
                    k.getElementsByTagName("form"), b = 0; b < a.length; b++) {
                    for (var c = a[b].getElementsByTagName("*"), d = 0; d < c.length; d++) if (/^INPUT|SELECT|TEXTAREA$/.test(c[d].tagName)) l.on(c[d], "change", K);
                    l.on(a[b], "submit", X)
                }
            }());
            (function () {
                var a = k.getElementsByTagName("form");
                if (a.length) for (var b = 0; b < a.length; b++) {
                    var c = a[b].submit;
                    if ("function" === typeof c || "object" === typeof c && /^\s*function submit\(\)/.test(String(c))) a[b][S] = c, a[b].submit = function () {
                        X({target: this});
                        return this[S]()
                    }
                }
            })();
            "0:0" !== p.getDocumentScroll().join(":") &&
            ea();
            V()
        }
        return {
            start: function () {
                ta.activate()
            }, stop: function () {
                ta.clear();
                l.un(k, "mousemove", D);
                l.un(k, "click", N);
                l.un(k, "dblclick", N);
                l.un(k, "mousedown", N);
                l.un(k, "mouseup", Z);
                l.un(k, "mousewheel", H);
                l.un(k, "wheel", H);
                l.un(g, "scroll", ea);
                l.un(g, "beforeunload", aa);
                l.un(g, "unload", aa);
                l.un(g, "resize", V);
                l.un(k, "keydown", Y);
                l.un(k, "keypress", ma);
                l.un(k, "copy", ba);
                l.un(k, "touchmove", ca);
                l.un(k, "touchstart", ca);
                mb && l.un(k, "mouseleave", qa);
                l.un(k, "focusin", na);
                l.un(k, "focusout", fa);
                l.un(g, "focus", ja);
                l.un(g, "blur", pa);
                l.un(k, "blur", pa);
                k.removeEventListener ? (l.un(k, "scroll", da), l.un(k, "focus", R), l.un(k, "blur", v), l.un(k, "change", K), l.un(k, "submit", X)) : k.detachEvent && (l.un(k, "focusin", R), l.un(k, "focusout", v), function () {
                    for (var a = k.getElementsByTagName("form"), b = 0; b < a.length; b++) {
                        for (var c = a[b].getElementsByTagName("*"), d = 0; d < c.length; d++) /^INPUT|SELECT|TEXTAREA$/.test(c[d].tagName) && l.un(c[d], "change", K);
                        l.un(a[b], "submit", X)
                    }
                }());
                (function () {
                    for (var a = k.getElementsByTagName("form"), b = 0; b < a.length; b++) a[b][S] &&
                    (a[b].submit = a[b][S])
                })()
            }, uploadPages: function (a, b) {
                function c() {
                    l.un(k, "DOMContentLoaded", c);
                    l.un(g, "load", c);
                    for (var f = a.split(/\n/), n = y().href, e = /regexp:/, h = 0; h < f.length; h++) {
                        var q = f[h];
                        if (q) if (e.test(q)) {
                            q = Ta(q.replace(e, ""));
                            try {
                                var x = new RegExp(q)
                            } catch (Xb) {
                            }
                            if (x && x.test(n)) {
                                d.uploadPage(b);
                                break
                            }
                        } else if (-1 !== n.indexOf(q)) {
                            d.uploadPage(b);
                            break
                        }
                    }
                }

                var d = this;
                "complete" === k.readyState ? c() : (l.on(k, "DOMContentLoaded", c), l.on(g, "load", c))
            }, uploadPage: w(function (f) {
                if ("function" === typeof g.toStaticHTML &&
                    -1 < g.toStaticHTML.toString().indexOf("NoScript")) return !1;
                var n = k.documentElement;
                if (n && 19E4 < ("" + n.innerHTML).length) return !1;
                var e = g.XMLHttpRequest ? new g.XMLHttpRequest : new ActiveXObject("Msxml2.XMLHTTP"),
                    h = p.getDocumentCharset(), q = "text/html" + (h ? ";charset\x3d" + h : ""),
                    x = new Db({protocol: a, counterId: b, counterType: c});
                if ("html" === f) return f = new RegExp("\x3cscript [^\x3e]*?//" + C.host.replace(/\./g, "\\\\.") + "/watch/.*?\x3c/script\x3e", "gi"), x.sendContent(p.getDocumentHTML().replace(f, ""), q, d, Ga, Ha), !0;
                e && (e.open("get", y().href, !0), e.onreadystatechange = w(function () {
                    if (4 === e.readyState) {
                        var a = e.getResponseHeader("content-type") || "";
                        h && -1 === a.indexOf("charset\x3d") && (a = q);
                        x.sendContent(e.responseText, a, d, Ga, Ha)
                    }
                }, "updatePage.1"), e.overrideMimeType && h && e.overrideMimeType(q), e.send(null));
                return !0
            }, "uploadPage")
        }
    }

    function y() {
        for (var a = {}, b = "hash host hostname href pathname port protocol search".split(" "), c = b.length, d = c, f, e; d--;) a[b[d]] = "";
        try {
            for (f = g.location, d = c; d--;) e = b[d], a[e] = "" + f[e]
        } catch (n) {
            M &&
            (a = M)
        }
        return a
    }

    function Ta(a) {
        return a ? ("" + a).replace(/^\s+/, "").replace(/\s+$/, "") : ""
    }

    function fa() {
        return 0 == y().hostname.search(/^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|.*\.yandex)$/)
    }

    function ua(a) {
        return -1 !== ("" + g.navigator.userAgent).toLowerCase().search(a)
    }

    function nb(a) {
        return Ta(a && a.innerHTML && a.innerHTML.replace(/<\/?[^>]+>/gi, ""))
    }

    function ob(a, b) {
        var c;
        if (!a || !b) return !1;
        var d = [];
        for (c = 0; c < b.length; c++) d.push(b[c].replace(/\^/g,
            "\\^").replace(/\$/g, "\\$").replace(/\./g, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}"));
        return (new RegExp("\\.(" + d.join("|") + ")$", "i")).test(a)
    }

    function Eb(a, b) {
        function c(a) {
            a = a.split(":");
            a = a[1] || "";
            a = a.replace(/^\/*/, "").replace(/^www\./, "");
            return a.split("/")[0]
        }

        return a && b ? c(a) == c(b) : a || b ? !1 : !0
    }

    function pb() {
        var a = g.performance ||
            g.webkitPerformance, b = a && a.timing, c, d = [];
        if (b && (c = b.navigationStart)) for (d = [b.domainLookupEnd - b.domainLookupStart, b.connectEnd - b.connectStart, b.responseStart - b.requestStart, b.responseEnd - b.responseStart, b.fetchStart - c, b.redirectEnd - b.redirectStart, b.redirectCount || a.navigation && a.navigation.redirectCount], d.push(b.domInteractive && b.domLoading ? b.domInteractive - b.domLoading : null), d.push(b.domContentLoadedEventStart && b.domContentLoadedEventEnd ? b.domContentLoadedEventEnd - b.domContentLoadedEventStart :
            null), d.push(b.domComplete ? b.domComplete - c : null), d.push(b.loadEventStart ? b.loadEventStart - c : null), d.push(b.loadEventStart && b.loadEventEnd ? b.loadEventEnd - b.loadEventStart : null), d.push(b.domContentLoadedEventStart ? b.domContentLoadedEventStart - c : null), a = 0; a < d.length; a++) b = d[a], null !== b && (0 > b || 36E5 < b) && (d[a] = null);
        return d
    }

    function Fb(a) {
        var b = [], c = a._lastPerformanceTiming, d = pb(), f;
        if (c) {
            var e = 0;
            for (f = c.length; e < f; e++) null === d[e] ? b.push(d[e]) : b.push(c[e] === d[e] ? "" : d[e])
        } else b = d;
        a._lastPerformanceTiming =
            d;
        return b.join(",")
    }

    function Gb(a) {
        return "first-contentful-paint" === a.name
    }

    function Hb() {
        var a = g.performance && g.performance.getEntriesByType,
            b = a ? e.filter(Gb, g.performance.getEntriesByType("paint")) : [];
        if (b.length) return b = b[0], Math.round(b.startTime);
        if (a) return 0;
        if ("object" == typeof g.chrome && g.chrome.loadTimes) {
            if (b = g.chrome.loadTimes(), b.requestTime && b.firstPaintTime && g.performance && g.performance.timing) return Math.round(1E3 * b.firstPaintTime - g.performance.timing.navigationStart)
        } else if (g.performance &&
            g.performance.timing && (b = g.performance.timing, b.navigationStart && b.msFirstPaint)) return b.msFirstPaint - b.navigationStart;
        return null
    }

    var Ua = !1, Y = "undefined" !== typeof Object && "function" === typeof Object.defineProperty;
    try {
        if (Y) {
            var va = function (a) {
                function b(d) {
                    if (c[d]) return c[d].f;
                    var f = c[d] = {Z: d, L: !1, f: {}};
                    return a[d].call(f.f, f, f.f, b), f.L = !0, f.f
                }

                var c = {};
                return b.aa = a, b.W = c, b.o = function (a, c, e) {
                    b.D(a, c) || Object.defineProperty(a, c, {enumerable: !0, get: e})
                }, b.C = function (a) {
                    "undefined" != typeof Symbol &&
                    Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {value: "Module"});
                    Object.defineProperty(a, "__esModule", {value: !0})
                }, b.$ = function (a, c) {
                    if ((1 & c && (a = b(a)), 8 & c) || 4 & c && "object" == typeof a && a && a.a) return a;
                    var d = Object.create(null);
                    if (b.C(d), Object.defineProperty(d, "default", {
                        enumerable: !0,
                        value: a
                    }), 2 & c && "string" != typeof a) for (var f in a) b.o(d, f, function (b) {
                        return a[b]
                    }.bind(null, f));
                    return d
                }, b.X = function (a) {
                    var c = a && a.a ? function () {
                        return a["default"]
                    } : function () {
                        return a
                    };
                    return b.o(c, "a",
                        c), c
                }, b.D = function (a, b) {
                    return Object.prototype.hasOwnProperty.call(a, b)
                }, b.Y = "", b(b.ba = 0)
            }([function (a, b, c) {
                var d = this && this.U || function () {
                    return (d = Object.assign || function (a) {
                        for (var b, c = 1, d = arguments.length; c < d; c++) for (var f in b = arguments[c]) Object.prototype.hasOwnProperty.call(b, f) && (a[f] = b[f]);
                        return a
                    }).apply(this, arguments)
                };
                b.a = !0;
                var f = c(1), e = c(2), n = c(4), h = c(5), g = c(6);
                a = function () {
                    function a(a) {
                        var b = this;
                        this.l = a;
                        this.H = {webGL: f.B, dnt: h.w, plugins: e.A, applePay: n.v};
                        this.l = d({
                            webGL: !1, dnt: !1,
                            plugins: !1, applePay: !1
                        }, a);
                        this.G = Object.keys(this.l).filter(function (a) {
                            return b.l[a]
                        }).map(function (a) {
                            return new b.H[a]
                        })
                    }

                    return a.prototype.toString = function (a) {
                        void 0 === a && (a = !0);
                        var b = this.G.map(function (a) {
                            var b = "";
                            try {
                                b = a.g()
                            } catch ($a) {
                            }
                            return b
                        });
                        return a ? [g.hash(b.join(""), 210)] : b.map(function (a) {
                            return g.hash(a, 210)
                        })
                    }, a
                }();
                b.T = a;
                b["default"] = a
            }, function (a, b) {
                var c = this && this.V || function () {
                    function a(b, c) {
                        return (a = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (a, b) {
                            a.__proto__ =
                                b
                        } || function (a, b) {
                            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
                        })(b, c)
                    }

                    return function (b, c) {
                        function d() {
                            this.constructor = b
                        }

                        a(b, c);
                        b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
                    }
                }();
                b.a = !0;
                var d = function (a) {
                    function b() {
                        var b = a.call(this, "webgl") || this;
                        return b.h && !b.J() && (b.h = !1), b
                    }

                    return c(b, a), b.prototype.J = function () {
                        var a = this.canvas.getContext && (this.canvas.getContext("webgl") || this.canvas.getContext("experimental-webgl"));
                        return !!g.WebGLRenderingContext && !!a
                    }, b.prototype.j =
                        function (a) {
                            var b = this.c;
                            return b.clearColor(0, 0, 0, 1), b.enable(b.DEPTH_TEST), b.depthFunc(b.LEQUAL), b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT), "[" + a[0] + ", " + a[1] + "]"
                        }, b.prototype.M = function (a) {
                        var b,
                            c = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic");
                        return c ? (0 === (b = a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT)) && (b = 2), b) : null
                    }, b.prototype.s = function () {
                        var a = this.c, b = [], c = a.createBuffer();
                        a.bindBuffer(a.ARRAY_BUFFER, c);
                        a.bufferData(a.ARRAY_BUFFER, new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]), a.STATIC_DRAW);
                        c.K = 3;
                        c.O = 3;
                        var d = a.createProgram(), f = a.createShader(a.VERTEX_SHADER);
                        a.shaderSource(f, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate\x3dattrVertex+uniformOffset;gl_Position\x3dvec4(attrVertex,0,1);}");
                        a.compileShader(f);
                        var e = a.createShader(a.FRAGMENT_SHADER);
                        a.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor\x3dvec4(varyinTexCoordinate,0,1);}");
                        a.compileShader(e);
                        a.attachShader(d, f);
                        a.attachShader(d, e);
                        a.linkProgram(d);
                        a.useProgram(d);
                        d.R = a.getAttribLocation(d, "attrVertex");
                        d.P = a.getUniformLocation(d, "uniformOffset");
                        a.enableVertexAttribArray(d.ca);
                        a.vertexAttribPointer(d.R, c.K, a.FLOAT, !1, 0, 0);
                        a.uniform2f(d.P, 1, 1);
                        a.drawArrays(a.TRIANGLE_STRIP, 0, c.O);
                        null != a.canvas && b.push(a.canvas.toDataURL());
                        b.push("extensions:" + a.getSupportedExtensions().join(";"));
                        b.push("webgl aliased line width range:" + this.j(a.getParameter(a.ALIASED_LINE_WIDTH_RANGE)));
                        b.push("webgl aliased point size range:" + this.j(a.getParameter(a.ALIASED_POINT_SIZE_RANGE)));
                        b.push("webgl alpha bits:" + a.getParameter(a.ALPHA_BITS));
                        b.push("webgl antialiasing:" + (a.getContextAttributes().antialias ? "yes" : "no"));
                        b.push("webgl blue bits:" + a.getParameter(a.BLUE_BITS));
                        b.push("webgl depth bits:" + a.getParameter(a.DEPTH_BITS));
                        b.push("webgl green bits:" + a.getParameter(a.GREEN_BITS));
                        b.push("webgl max anisotropy:" + this.M(a));
                        b.push("webgl max combined texture image units:" + a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
                        b.push("webgl max cube map texture size:" + a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE));
                        b.push("webgl max fragment uniform vectors:" + a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS));
                        b.push("webgl max render buffer size:" + a.getParameter(a.MAX_RENDERBUFFER_SIZE));
                        b.push("webgl max texture image units:" + a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS));
                        b.push("webgl max texture size:" + a.getParameter(a.MAX_TEXTURE_SIZE));
                        b.push("webgl max varying vectors:" + a.getParameter(a.MAX_VARYING_VECTORS));
                        b.push("webgl max vertex attribs:" +
                            a.getParameter(a.MAX_VERTEX_ATTRIBS));
                        b.push("webgl max vertex texture image units:" + a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
                        b.push("webgl max vertex uniform vectors:" + a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS));
                        b.push("webgl max viewport dims:" + this.j(a.getParameter(a.MAX_VIEWPORT_DIMS)));
                        b.push("webgl red bits:" + a.getParameter(a.RED_BITS));
                        b.push("webgl renderer:" + a.getParameter(a.RENDERER));
                        b.push("webgl shading language version:" + a.getParameter(a.SHADING_LANGUAGE_VERSION));
                        b.push("webgl stencil bits:" +
                            a.getParameter(a.STENCIL_BITS));
                        b.push("webgl vendor:" + a.getParameter(a.VENDOR));
                        b.push("webgl version:" + a.getParameter(a.VERSION));
                        try {
                            var q = a.getExtension("WEBGL_debug_renderer_info");
                            q && (b.push("webgl unmasked vendor:" + a.getParameter(q.UNMASKED_VENDOR_WEBGL)), b.push("webgl unmasked renderer:" + a.getParameter(q.UNMASKED_RENDERER_WEBGL)))
                        } catch (za) {
                        }
                        return a.getShaderPrecisionFormat ? (b.push("webgl vertex shader high float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).precision),
                            b.push("webgl vertex shader high float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMin), b.push("webgl vertex shader high float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMax), b.push("webgl vertex shader medium float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).precision), b.push("webgl vertex shader medium float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMin),
                            b.push("webgl vertex shader medium float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMax), b.push("webgl vertex shader low float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).precision), b.push("webgl vertex shader low float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMin), b.push("webgl vertex shader low float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMax), b.push("webgl fragment shader high float precision:" +
                            a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).precision), b.push("webgl fragment shader high float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMin), b.push("webgl fragment shader high float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMax), b.push("webgl fragment shader medium float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).precision), b.push("webgl fragment shader medium float precision rangeMin:" +
                            a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMin), b.push("webgl fragment shader medium float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMax), b.push("webgl fragment shader low float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).precision), b.push("webgl fragment shader low float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMin), b.push("webgl fragment shader low float precision rangeMax:" +
                            a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMax), b.push("webgl vertex shader high int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).precision), b.push("webgl vertex shader high int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMin), b.push("webgl vertex shader high int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMax), b.push("webgl vertex shader medium int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER,
                            a.MEDIUM_INT).precision), b.push("webgl vertex shader medium int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMin), b.push("webgl vertex shader medium int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMax), b.push("webgl vertex shader low int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).precision), b.push("webgl vertex shader low int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMin),
                            b.push("webgl vertex shader low int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMax), b.push("webgl fragment shader high int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).precision), b.push("webgl fragment shader high int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMin), b.push("webgl fragment shader high int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMax), b.push("webgl fragment shader medium int precision:" +
                            a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).precision), b.push("webgl fragment shader medium int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMin), b.push("webgl fragment shader medium int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMax), b.push("webgl fragment shader low int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).precision), b.push("webgl fragment shader low int precision rangeMin:" +
                            a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMin), b.push("webgl fragment shader low int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMax), b.join("~")) : b.join("~")
                    }, b
                }(a = function () {
                    function a(a) {
                        this.F = a;
                        this.h = !0;
                        this.canvas = k.createElement("canvas");
                        this.I() || (this.h = !1)
                    }

                    return a.prototype.I = function () {
                        return this.c = this.canvas.getContext(this.F), !(!this.canvas.getContext || !this.c)
                    }, a.prototype.g = function () {
                        return this.h ? this.s() : this.id
                    }, a
                }());
                b.B = d;
                a = function (a) {
                    function b() {
                        return a.call(this, "2d") || this
                    }

                    return c(b, a), b.prototype.s = function () {
                        var a = this.canvas, b = this.c, c = [];
                        return a.width = 2E3, a.height = 200, a.style.display = "inline", b.rect(0, 0, 10, 10), b.rect(2, 2, 6, 6), c.push("canvas winding:" + (!1 === b.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), b.textBaseline = "alphabetic", b.fillStyle = "#f60", b.fillRect(125, 1, 62, 20), b.fillStyle = "#069", b.font = "11pt Arial", b.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15), b.fillStyle = "rgba(102, 204, 0, 0.2)",
                            b.font = "18pt Arial", b.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45), b.globalCompositeOperation = "multiply", b.fillStyle = "rgb(255,0,255)", b.beginPath(), b.arc(50, 50, 50, 0, 2 * Math.PI, !0), b.closePath(), b.fill(), b.fillStyle = "rgb(0,255,255)", b.beginPath(), b.arc(100, 50, 50, 0, 2 * Math.PI, !0), b.closePath(), b.fill(), b.fillStyle = "rgb(255,255,0)", b.beginPath(), b.arc(75, 100, 50, 0, 2 * Math.PI, !0), b.closePath(), b.fill(), b.fillStyle = "rgb(255,0,255)", b.arc(75, 75, 75, 0, 2 * Math.PI, !0), b.arc(75, 75, 25, 0, 2 * Math.PI,
                            !0), b.fill("evenodd"), c.push("canvas fp:" + a.toDataURL()), c.join("~")
                    }, b
                }(a);
                b.S = a
            }, function (a, b, c) {
                b.a = !0;
                var d = c(3);
                a = function () {
                    function a() {
                    }

                    return a.prototype.g = function () {
                        return d.u(navigator.plugins).sort(function (a, b) {
                            return a.name > b.name ? 1 : 2
                        }).map(function (a) {
                            return [a.name, a.description, d.u(a).map(function (a) {
                                return [a.description, a.suffixes, a.type].join()
                            }).join()].join()
                        }).join()
                    }, a
                }();
                b.A = a
            }, function (a, b) {
                b.a = !0;
                b.u = function (a) {
                    return Array.prototype.slice.call(a)
                }
            }, function (a, b) {
                b.a = !0;
                a = function () {
                    function a() {
                        this.m = g.ApplePaySession
                    }

                    return a.prototype.g = function () {
                        var a = !1;
                        try {
                            a = g.self !== g.top
                        } catch (q) {
                        }
                        if (!this.m || "https:" !== M.protocol || a) return "";
                        a = "";
                        for (var b = 1; 10 >= b; b++) a += this.m.supportsVersion(b) ? b : "0";
                        return a + this.m.canMakePayments()
                    }, a
                }();
                b.v = a
            }, function (a, b) {
                b.a = !0;
                a = function () {
                    function a() {
                        this.b = g.navigator
                    }

                    return a.prototype.g = function () {
                        return this.b.i ? this.b.i : this.b.N ? this.b.N : this.b.i ? this.b.i : "unknown"
                    }, a
                }();
                b.w = a
            }, function (a, b) {
                function c(a, b) {
                    a = [a[0] >>> 16,
                        65535 & a[0], a[1] >>> 16, 65535 & a[1]];
                    b = [b[0] >>> 16, 65535 & b[0], b[1] >>> 16, 65535 & b[1]];
                    var c = [0, 0, 0, 0];
                    return c[3] += a[3] * b[3], c[2] += c[3] >>> 16, c[3] &= 65535, c[2] += a[2] * b[3], c[1] += c[2] >>> 16, c[2] &= 65535, c[2] += a[3] * b[2], c[1] += c[2] >>> 16, c[2] &= 65535, c[1] += a[1] * b[3], c[0] += c[1] >>> 16, c[1] &= 65535, c[1] += a[2] * b[2], c[0] += c[1] >>> 16, c[1] &= 65535, c[1] += a[3] * b[1], c[0] += c[1] >>> 16, c[1] &= 65535, c[0] += a[0] * b[3] + a[1] * b[2] + a[2] * b[1] + a[3] * b[0], c[0] &= 65535, [c[0] << 16 | c[1], c[2] << 16 | c[3]]
                }

                function d(a, b) {
                    a = [a[0] >>> 16, 65535 & a[0], a[1] >>>
                    16, 65535 & a[1]];
                    b = [b[0] >>> 16, 65535 & b[0], b[1] >>> 16, 65535 & b[1]];
                    var c = [0, 0, 0, 0];
                    return c[3] += a[3] + b[3], c[2] += c[3] >>> 16, c[3] &= 65535, c[2] += a[2] + b[2], c[1] += c[2] >>> 16, c[2] &= 65535, c[1] += a[1] + b[1], c[0] += c[1] >>> 16, c[1] &= 65535, c[0] += a[0] + b[0], c[0] &= 65535, [c[0] << 16 | c[1], c[2] << 16 | c[3]]
                }

                function f(a, b) {
                    return 32 === (b %= 64) ? [a[1], a[0]] : 32 > b ? [a[0] << b | a[1] >>> 32 - b, a[1] << b | a[0] >>> 32 - b] : (b -= 32, [a[1] << b | a[0] >>> 32 - b, a[0] << b | a[1] >>> 32 - b])
                }

                function e(a, b) {
                    return 0 === (b %= 64) ? a : 32 > b ? [a[0] << b | a[1] >>> 32 - b, a[1] << b] : [a[1] << b - 32,
                        0]
                }

                function g(a, b) {
                    return [a[0] ^ b[0], a[1] ^ b[1]]
                }

                function h(a) {
                    return a = g(a, [0, a[0] >>> 1]), a = g(a = c(a, [4283543511, 3981806797]), [0, a[0] >>> 1]), g(a = c(a, [3301882366, 444984403]), [0, a[0] >>> 1])
                }

                b.a = !0;
                b.hash = function (a, b) {
                    b = b || 0;
                    var q = (a = a || "").length % 16, n = a.length - q, k = [0, b];
                    b = [0, b];
                    for (var l, x, t = [2277735313, 289559509], p = [1291169091, 658871167], m = 0; m < n; m += 16) l = [255 & a.charCodeAt(m + 4) | (255 & a.charCodeAt(m + 5)) << 8 | (255 & a.charCodeAt(m + 6)) << 16 | (255 & a.charCodeAt(m + 7)) << 24, 255 & a.charCodeAt(m) | (255 & a.charCodeAt(m + 1)) <<
                    8 | (255 & a.charCodeAt(m + 2)) << 16 | (255 & a.charCodeAt(m + 3)) << 24], x = [255 & a.charCodeAt(m + 12) | (255 & a.charCodeAt(m + 13)) << 8 | (255 & a.charCodeAt(m + 14)) << 16 | (255 & a.charCodeAt(m + 15)) << 24, 255 & a.charCodeAt(m + 8) | (255 & a.charCodeAt(m + 9)) << 8 | (255 & a.charCodeAt(m + 10)) << 16 | (255 & a.charCodeAt(m + 11)) << 24], l = f(l = c(l, t), 31), k = d(k = f(k = g(k, c(l, p)), 27), b), k = d(c(k, [0, 5]), [0, 1390208809]), x = f(x = c(x, p), 33), b = d(b = f(b = g(b, c(x, t)), 31), k), b = d(c(b, [0, 5]), [0, 944331445]);
                    switch (l = [0, 0], x = [0, 0], q) {
                        case 15:
                            x = g(x, e([0, a.charCodeAt(m + 14)], 48));
                        case 14:
                            x = g(x, e([0, a.charCodeAt(m + 13)], 40));
                        case 13:
                            x = g(x, e([0, a.charCodeAt(m + 12)], 32));
                        case 12:
                            x = g(x, e([0, a.charCodeAt(m + 11)], 24));
                        case 11:
                            x = g(x, e([0, a.charCodeAt(m + 10)], 16));
                        case 10:
                            x = g(x, e([0, a.charCodeAt(m + 9)], 8));
                        case 9:
                            x = c(x = g(x, [0, a.charCodeAt(m + 8)]), p), b = g(b, c(f(x, 33), t));
                        case 8:
                            l = g(l, e([0, a.charCodeAt(m + 7)], 56));
                        case 7:
                            l = g(l, e([0, a.charCodeAt(m + 6)], 48));
                        case 6:
                            l = g(l, e([0, a.charCodeAt(m + 5)], 40));
                        case 5:
                            l = g(l, e([0, a.charCodeAt(m + 4)], 32));
                        case 4:
                            l = g(l, e([0, a.charCodeAt(m + 3)], 24));
                        case 3:
                            l = g(l,
                                e([0, a.charCodeAt(m + 2)], 16));
                        case 2:
                            l = g(l, e([0, a.charCodeAt(m + 1)], 8));
                        case 1:
                            l = c(l = g(l, [0, a.charCodeAt(m)]), t), k = g(k, c(f(l, 31), p))
                    }
                    return k = d(k = g(k, [0, a.length]), b = g(b, [0, a.length])), b = d(b, k), k = d(k = h(k), b = h(b)), b = d(b, k), ("00000000" + (k[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (k[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (b[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (b[1] >>> 0).toString(16)).slice(-8)
                }
            }]);
            va = va["default"]
        }
    } catch (a) {
        Ua = {error: a, scope: "fip"}
    }
    var C = {
        protocol: "https:",
        baseUrl: "mc.yandex.",
        cookieName: "uid",
        admetrikaUrl: "mc.admetrica.ru",
        yandexWhiteListTld: "ru ua by kz az kg lv md tj tm uz ee fr co.il com.ge com.am com.tr".split(" ")
    };
    C.host = C.baseUrl + "ru";
    C.cross = "L21ldHJpa2EvenpsYy5odG1s";
    C.maxBodyLength = 7E5;
    var e = {
        mixin: function (a) {
            var b, c;
            for (b = 1; b < arguments.length; b++) if (arguments[b]) {
                for (c in arguments[b]) arguments[b].hasOwnProperty(c) && (a[c] = arguments[b][c]);
                arguments[b].hasOwnProperty("toString") && (a.toString = arguments[b].toString)
            }
            return a
        }
    }, E = function (a) {
        a = a || {};
        e.mixin(this,
            a);
        this._initComponent()
    };
    E.prototype._initComponent = function () {
    };
    E.inherit = function (a) {
        a = a || {};
        var b = "function" == typeof this ? this : Object;
        a.hasOwnProperty("constructor") || (a.constructor = function () {
            b.apply(this, arguments)
        });
        var c = function () {
        };
        c.prototype = b.prototype;
        a.constructor.prototype = new c;
        e.mixin(a.constructor.prototype, a);
        a.constructor.prototype.constructor = a.constructor;
        a.constructor.superclass = b.prototype;
        a.constructor.inherit = E.inherit;
        return a.constructor
    };
    e.forEachKey = function (a, b, c) {
        for (var d in a) a.hasOwnProperty(d) &&
        b.call(c, d, a[d], a)
    };
    e.isEqual = function (a, b) {
        var c = !0;
        e.forEachKey(a, function (a, f) {
            b.hasOwnProperty(a) && b[a] === f || (c = !1)
        });
        if (!c) return c;
        e.forEachKey(b, function (b, f) {
            a.hasOwnProperty(b) && a[b] === f || (c = !1)
        });
        return c
    };
    e.getNativeFunction = function (a, b) {
        b = b || g;
        var c = b.constructor && b.constructor.prototype && b.constructor.prototype[a] || b[a];
        try {
            if (c && c.apply) return function () {
                return c.apply(b, arguments)
            }
        } catch (d) {
            return b[a]
        }
        return c
    };
    e.setTimeout = function (a, b, c) {
        return e.getNativeFunction("setTimeout")(w(a,
            c || "setTimeout"), b)
    };
    var l = E.inherit({
        _initComponent: function () {
            l.superclass._initComponent.apply(this, arguments);
            this._listeners = []
        }, on: function (a, b, c, d, f) {
            f = l._getOpts(f);
            b = b.split(",");
            var e = b.length, n = this._listeners, h;
            for (h = 0; h < e; h++) {
                var k = b[h];
                var m = w(function (a) {
                    c.call(d || this, a || g.event)
                }, "on" + (k || "") + (f.name || ""));
                n[n.length] = [a, k, c, d, f, m];
                a.addEventListener ? a.addEventListener(k, m, l._prepOpts(f)) : a.attachEvent && a.attachEvent("on" + k, m)
            }
        }, un: function (a, b, c, d, f) {
            f = l._getOpts(f);
            var g = this._listeners,
                n = g.length, h;
            for (h = 0; h < n; h++) {
                var k = g[h];
                if (k[0] == a && k[1] == b && k[2] == c && k[3] == d && e.isEqual(k[4], f)) {
                    g.splice(h, 1);
                    this._removeListener(a, b, k[5], f);
                    break
                }
            }
        }, unAll: function () {
            var a = this._listeners, b = a.length, c;
            for (c = 0; c < b; c++) {
                var d = a[c];
                this._removeListener(d[0], d[1], d[5], d[4])
            }
            a.length = 0
        }, _removeListener: function (a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, l._prepOpts(d)) : a.detachEvent && a.detachEvent("on" + b, c)
        }
    });
    l.supportsPassive = function () {
        if (l._supportsPassive !== A) return l._supportsPassive;
        l._supportsPassive = !1;
        try {
            var a = Object.defineProperty({}, "passive", {
                get: function () {
                    return l._supportsPassive = !0
                }
            });
            g.addEventListener("test", null, a)
        } catch (b) {
        }
        return l._supportsPassive
    };
    l._getOpts = function (a) {
        return e.mixin({capture: !0, passive: !0}, a || {})
    };
    l._prepOpts = function (a) {
        return l.supportsPassive() ? a : !!a.capture
    };
    l.on = function () {
        l._instance || (l._instance = new l);
        l._instance.on.apply(l._instance, arguments)
    };
    l.un = function () {
        l._instance && l._instance.un.apply(l._instance, arguments)
    };
    var m = {
        UNLOAD_MS: 0,
        isPerfomance: g.performance && g.performance.timing && g.performance.timing.navigationStart && g.performance.now,
        getMs: function () {
            return 0 < this.UNLOAD_MS ? this.UNLOAD_MS : this.isPerfomance ? Math.round(g.performance.timing.navigationStart + g.performance.now()) : m.oldMs()
        },
        getFormStart: function () {
            return this.isPerfomance ? Math.round(g.performance.now()) : this.getMs() - this.initTime
        }
    };
    m.oldMs = Date.now ? Date.now : function () {
        return (new Date).getTime()
    };
    m.initTime = m.getMs();
    l.on(g, "beforeunload,unload", function () {
        0 === m.UNLOAD_MS &&
        (m.UNLOAD_MS = m.getMs())
    });
    e.pad = function (a) {
        return (10 > a ? "0" : "") + a
    };
    m.getTimestamp = function () {
        var a = new Date;
        a = [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()];
        var b = "", c;
        for (c = 0; c < a.length; c++) b += e.pad(a[c]);
        return b
    };
    m.getTimezone = function () {
        return -(new Date).getTimezoneOffset()
    };
    m.getMinutes = function () {
        return Math.floor(this.getMs() / 1E3 / 60)
    };
    m.getSeconds = function () {
        return Math.round(this.getMs() / 1E3)
    };
    m.isPerfomance || (m.deltaTime = 0, m.lastNowTime = 0, m.correctTime =
        0, m.timeCorrector = function (a) {
        m.correctTime = m.getMs();
        a && m.correctTime < m.lastTime && (m.deltaTime += a - m.correctTime + 20);
        e.setTimeout(function () {
            m.timeCorrector(m.correctTime)
        }, 20, "timeCorrector")
    });
    m.initCorrector = function () {
        m.isPerfomance || m.timeCorrector(0)
    };
    m.nowTime = function () {
        if (this.isPerfomance) return this.getMs();
        var a = this.getMs() + m.deltaTime;
        a < m.lastNowTime && (a += m.lastNowTime + 10);
        return m.lastNowTime = a
    };
    m.nowEventTime = function () {
        return Math.round((m.nowTime() - m.initTime) / 50)
    };
    e.toString = function (a) {
        return Object.prototype.toString.call(a)
    };
    e.isFunction = function (a) {
        return "function" === typeof a
    };
    e.isArray = function (a) {
        return "function" === e.isFunction(Array.isArray) ? Array.isArray(a) : "[object Array]" === e.toString(a)
    };
    e.mergeArrays = function (a) {
        var b, c, d = arguments.length;
        for (b = 1; b < d; b++) {
            var f = arguments[b];
            if (e.isArray(f) || f && "[object Arguments]" === f.toString()) for (c = 0; c < f.length; c++) a[a.length] = f[c]
        }
        return a
    };
    e.defer = function (a, b, c, d, f) {
        return e.setTimeout(function () {
            a.apply(c, d || [])
        }, b, f)
    };
    e.throttle = function (a, b, c, d) {
        var f, g, n;
        return function () {
            g =
                arguments;
            n = this;
            f || function () {
                f = null;
                g && (a.apply(c || n, g), g = null, f = e.setTimeout(arguments.callee, b, d))
            }()
        }
    };
    var Ia = E.inherit({
        storage: null, storageKey: "dataBuffer", store: {
            _keys: [], _values: [], get: function (a) {
                a = e.arrayIndexOf(this._keys, a);
                return -1 == a ? null : this._values[a]
            }, set: function (a, b) {
                this._keys.push(a);
                this._values.push(b)
            }, pop: function (a) {
                a = e.arrayIndexOf(this._keys, a);
                if (-1 == a) return null;
                var b = this._values[a];
                this._keys.splice(a, 1);
                this._values.splice(a, 1);
                return b
            }
        }, maxBufferSize: 255, flushTimeout: 1E4,
        startBufferTime: 0, active: !0, meta: null, onFlush: function () {
        }, onFlushCtx: null, bufferExpireTime: 864E5, _initComponent: function () {
            var a;
            Ia.superclass._initComponent.apply(this, arguments);
            this.wrappers = [];
            this._data = [];
            this._packetNumber = 0;
            this._flushTID = null;
            this._saveToStorageThrottled = e.throttle(this._saveToStorage, 300, this, "DataBuffer._saveToStorage");
            this.storage && (a = this.storage.get(this.storageKey)) && a.data && a.meta && a.time && a.time + this.bufferExpireTime > +m.getMs() && this.onFlush.call(this.onFlushCtx ||
                this, this.dataFromStorage(a.data), a.meta, a.pnum);
            this.clear()
        }, setWVType: function (a) {
            this.wvType = a;
            this._sender.version = a
        }, getFlushSize: function () {
            return this._data.length
        }, mergeData: function (a, b) {
            e.mergeArrays(a, b)
        }, updateStamp: function (a, b) {
            a.stamp !== A && (b.stamp = a.stamp, "eof" !== a.type && delete a.stamp)
        }, append: function (a, b) {
            this.mergeData(this._data, a);
            this._saveToStorageThrottled();
            this.active && ((b || this.getFlushSize() >= this.maxBufferSize || this.getFlushSize() === this.maxChunkSize) && this._flush(b),
            this._flushTID || (this._flushTID = e.defer(this._flush, this.flushTimeout, this, [b], "DataBuffer._flush")))
        }, activate: function () {
            this.active || (this.active = !0, this.append([]))
        }, clear: function () {
            this._data.length = 0;
            this._flushTID = null;
            this.storage && this.storage.remove(this.storageKey)
        }, _flush: function (a) {
            if (!this.getFlushSize()) return this.clear(), !1;
            this.onFlush.call(this.onFlushCtx || this, this._data, this.meta, this._packetNumber, a);
            this._packetNumber++;
            this.clear()
        }, dataFromStorage: function (a) {
            return a
        },
        dataToStorage: function (a) {
            return a
        }, _saveToStorage: function () {
            this.storage && this._data.length && this.storage.set(this.storageKey, {
                data: this.dataToStorage(this._data),
                meta: this.meta,
                pnum: this._packetNumber,
                time: m.getMs()
            })
        }
    }), u = {
        storage: {}, init: function () {
            var a = this;
            w(function () {
                g.Ya = g.Ya || {};
                g.Ya._metrika = g.Ya._metrika || {};
                a.storage = g.Ya._metrika
            }, "", !0)();
            return this
        }, setSafe: function (a, b) {
            var c = this;
            w(function () {
                c.storage[a] === A && (c.storage[a] = b)
            }, "", !0)();
            return this
        }, set: function (a, b) {
            w(function () {
                g.Ya._metrika[a] =
                    b
            }, "", !0)();
            return this
        }, get: function (a, b) {
            return w(function () {
                var c = g.Ya._metrika[a];
                return c === A ? b : c
            }, "", !0)()
        }
    };
    e.async = function (a, b, c) {
        if (g.postMessage) {
            var d = "__ym__promise" + Math.random() + "_" + m.getMs();
            var f = function (c) {
                try {
                    var e = c.data
                } catch (h) {
                    return
                }
                e === d && (c.stopPropagation && c.stopPropagation(), a.call(b), l.un(g, "message", f, null, {passive: !1}))
            };
            l.on(g, "message", f, null, {passive: !1, name: ".async." + (c || "")});
            g.postMessage(d, "*")
        } else e.setTimeout(function () {
            a.call(b)
        }, 0)
    };
    var wa = E.inherit({
        transports: [],
        globalConfig: u, postParams: [], isDisabled: function () {
            return this.globalConfig.get("oo")
        }, send: function (a, b, c, d) {
            var f = [a], g = this, n = c || function () {
            };
            g.isDisabled() ? n.call(d) : function t(a) {
                if (a < this.transports.length) try {
                    var c = new this.transports[a]({
                        postParams: this.postParams,
                        queryStringParams: this.queryStringParams
                    });
                    b["browser-info"] = c.logInfo(b["browser-info"]);
                    (function za(q) {
                        q >= f.length ? c.blockNext() || t.call(this, a + 1) : c.request(f[q], b, function (a, b, c) {
                            a ? n.call(d, b, c) : e.async(function () {
                                za.call(g,
                                    q + 1)
                            }, this, "senderCall")
                        }, this)
                    }).call(this, 0)
                } catch (zb) {
                    xa(zb, "send by " + (c && c.id)), t.call(this, a + 1)
                }
            }.call(this, 0)
        }
    }), ka = {};
    e.keys = function (a) {
        var b, c = [];
        for (b in a) a.hasOwnProperty(b) && c.push(b);
        return c
    };
    e.map = function (a, b) {
        var c, d = [];
        for (c = 0; c < b.length; c++) d.push(a(b[c], c));
        return d
    };
    ka.stringify = function (a, b) {
        var c = [], d = b || {}, f = {}, g = e.keys(a).length, n, h;
        if (d.lastOrdering !== A) for (h = 1; h <= b.lastOrdering.length; h++) f[b.lastOrdering[h - 1]] = g + h;
        if (d.firstOrdering !== A) for (h = 0; h < b.firstOrdering.length; h++) f[b.firstOrdering[h]] =
            h;
        for (n in a) if (a.hasOwnProperty(n)) if (d = a[n], e.isArray(d)) for (h = 0; h < d.length; h++) c.push({
            key: n,
            value: encodeURIComponent(n) + "\x3d" + encodeURIComponent(String(d[h]))
        }); else c.push({key: n, value: encodeURIComponent(n) + "\x3d" + encodeURIComponent(String(d))});
        c.sort(function (a, b) {
            var c = f[a.key], d = f[b.key];
            "undefined" === typeof c && (c = g);
            "undefined" === typeof d && (d = g);
            return c - d
        });
        return e.map(function (a) {
            return a.value
        }, c).join("\x26")
    };
    e.inArray = function (a, b) {
        var c;
        for (c = 0; c < a.length; c++) if (a[c] == b) return !0;
        return !1
    };
    var U = E.inherit({
        postParams: [], index: 0, blockNext: function () {
            return !1
        }, logInfo: function (a) {
            var b;
            if (a) return a = (b = a.match(/^ti:\d:/)) ? a.replace(b[0], "") : a, "ti:" + this.index + ":" + a
        }, _buildUrl: function (a, b) {
            var c = ka.stringify(b, this.queryStringParams);
            return a + (-1 < a.indexOf("?") ? "\x26" : c ? "?" : "") + c
        }, _splitParams: function (a) {
            var b = {}, c = {};
            e.forEachKey(a, function (a, f) {
                e.inArray(this.postParams, a) ? c[a] = f : b[a] = f
            }, this);
            return {get: b, post: c}
        }, _parseResp: function (a) {
            return a
        }
    });
    Y = U.inherit({
        id: "XHR",
        index: 7, method: "POST", withCredentials: !0, request: function (a, b, c, d) {
            var f = this, e;
            if (/[^a-z0-9.:-]/.test(M.host) && g.opera && "function" === typeof g.opera.version) {
                var n = g.opera.version();
                if ("string" === typeof n && "12" === n.split(".")[0]) return c.call(d, !1)
            }
            if (g.XMLHttpRequest) {
                var h = new XMLHttpRequest;
                if ("withCredentials" in h) {
                    b = this._splitParams(b);
                    a = this._buildUrl(a, b.get);
                    try {
                        h.open(this.method, a, !0)
                    } catch (x) {
                        return c.call(d, !1)
                    }
                    h.withCredentials = this.withCredentials;
                    this._setHeaders(h);
                    h.send(this._preparePostParams(b));
                    h.onreadystatechange = function () {
                        if (4 === h.readyState) {
                            try {
                                e = f._parseResp(h.responseText)
                            } catch (x) {
                                return c.call(d, !1)
                            }
                            c.apply(d, [200 === h.status].concat(e))
                        }
                    };
                    this._timeOutCheck(h, c, d);
                    return
                }
            }
            c.call(d, !1)
        }, _timeOutCheck: function (a, b, c) {
            this.timeout && (a.timeout = this.timeout, e.setTimeout(function () {
                a.abort ? a.abort() : b.call(c, !1)
            }, this.timeout + 100))
        }, setMethod: function (a) {
            this.method = a
        }, _preparePostParams: function (a) {
            return ka.stringify(a.post)
        }, _setHeaders: function (a) {
            a.setRequestHeader("Content-Type",
                "application/x-www-form-urlencoded")
        }
    });
    var r = {};
    e.memorize = function (a, b) {
        var c = "memorize";
        return function () {
            "memorize" === c && (c = a.apply(b || this, arguments));
            return c
        }
    };
    r.isAndroidWebView = w(function () {
        var a = navigator.userAgent || "";
        return a.match(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]/) || a.match(/Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*/) || a.match(/; wv\).*Chrome\/[0-9][0-9.]*\sMobile/)
    }, "isAndroidWebView");
    var Ib = U.inherit({
        id: "beacon", index: 1,
        request: function (a, b, c, d) {
            "function" === typeof navigator.sendBeacon && !r.isAndroidWebView() && navigator.onLine ? (b = this._splitParams(b), b.get["force-urlencoded"] = 1, c.call(d, navigator.sendBeacon(this._buildUrl(a, b.get), ka.stringify(b.post)))) : c.call(d, !1)
        }
    });
    e.random = function (a, b) {
        2 > arguments.length && (b = a, a = 0);
        1 > arguments.length && (b = 1073741824);
        return Math.floor(Math.random() * (b - a)) + a
    };
    var W = U.inherit({
        id: "form",
        index: 2,
        enctype: "application/x-www-form-urlencoded",
        htmlfileOnly: !1,
        _initComponent: function () {
            W.superclass._initComponent.apply(this,
                arguments);
            "_htmlfile" in W.prototype || (W.prototype._htmlfile = this._createHtmlfile());
            this._doc = this._htmlfile || (this.htmlfileOnly ? null : k)
        },
        request: function (a, b, c, d) {
            var f = this._doc;
            if (!f) return c.call(d, !1);
            b = this._splitParams(b);
            var g = "ifr" + e.random();
            var n = f.createElement("div");
            n.style.position = "absolute";
            n.style.left = "-99999px";
            n.style.top = "-99999px";
            var h = ['\x3ciframe name\x3d"', g, '"\x3e\x3c/iframe\x3e', '\x3cform action\x3d"', this._buildUrl(a, b.get), '" method\x3d"post" target\x3d"', g, '" enctype\x3d"',
                this.enctype, '"\x3e'];
            e.forEachKey(b.post, function (a) {
                e.mergeArrays(h, ['\x3cinput type\x3d"hidden" autocomplete\x3d"off" autocorrect\x3d"off"', ' autocapitalize\x3d"off" spellcheck\x3d"false" name\x3d"', a, '"/\x3e'])
            });
            e.mergeArrays(h, ["\x3c/form\x3e"]);
            n.innerHTML = h.join("");
            f.body.appendChild(n);
            var k = n.getElementsByTagName("form")[0];
            e.forEachKey(b.post, function (a, b) {
                k[a].value = b
            });
            k.submit();
            e.setTimeout(function () {
                f.body.removeChild(n)
            }, 1E4, "TransportForm.request.2");
            return c.call(d, !0, "tf.request")
        },
        _createHtmlfile: function () {
            try {
                if (g.ActiveXObject) {
                    var a = new ActiveXObject("htmlfile");
                    a.open();
                    a.write("\x3chtml\x3e\x3cbody\x3e\x3c/body\x3e\x3c/html\x3e");
                    a.close();
                    return a
                }
            } catch (b) {
            }
            return null
        }
    }), Jb = W.inherit({id: "htmlfile", index: 3, htmlfileOnly: !0}), S = U.inherit({
        id: "img", index: 4, request: function (a, b, c, d) {
            a = this._buildUrl(a, b);
            var f = !1;
            b = k.createElement("img");
            c = c || function () {
            };
            b.onload = w(function () {
                f || (c.call(d, !0), f = !0)
            }, "TransportImage.request");
            b.onerror = w(function () {
                f || (c.call(d, !1), f =
                    !0)
            }, "TransportImage.request");
            b.src = a;
            this.timeout && e.setTimeout(function () {
                f || (c.call(d, !1), f = !0)
            }, this.timeout, "ti.request")
        }
    }), Z = {
        stringify: function (a) {
            try {
                var b = JSON.stringify(a)
            } catch (c) {
            }
            return e.inArray(["{}", A], b) ? "null" : b
        }
    };
    e.toJSON = function (a) {
        var b;
        if (a === A) return "";
        if (null === a) return "null";
        switch (a.constructor) {
            case Boolean:
                return a.toString();
            case Number:
                return isFinite(a) ? a.toString() : "null";
            case String:
                return '"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g,
                    "\\r") + '"';
            case Array:
                var c = [];
                var d = 0;
                for (b = a.length; d < b; d++) c[c.length] = e.toJSON(a[d]);
                return "[" + c.join(",") + "]";
            case Object:
                c = [];
                for (d in a) a.hasOwnProperty(d) && a[d] !== A && (c[c.length] = e.toJSON(d) + ":" + e.toJSON(a[d]));
                return "{" + c.join(",") + "}";
            default:
                return Z.stringify(a)
        }
    };
    var N = E.inherit({
        counterId: "", _initComponent: function () {
            N.superclass._initComponent.apply(this, arguments);
            this._ls = null;
            try {
                this._ls = g.localStorage
            } catch (a) {
            }
        }, set: function (a, b) {
            if (this.isEnabled()) try {
                !b || b && e.isArray(b) && !b.length ?
                    this.remove(a) : this._ls.setItem(this._getLsKey(a), e.toJSON(b))
            } catch (c) {
            }
        }, get: function (a) {
            if (this.isEnabled()) try {
                return JSON.parse(this._ls.getItem(this._getLsKey(a)))
            } catch (b) {
            }
            return null
        }, remove: function (a) {
            if (this.isEnabled()) try {
                this._ls.removeItem(this._getLsKey(a))
            } catch (b) {
            }
        }, isEnabled: function () {
            return this._ls && g.JSON && "object" == typeof this._ls && "object" == typeof g.JSON
        }, getStorageId: function () {
            var a = this.get("lsid");
            a || (a = Math.round(Math.random() * m.getMs()), this.set("lsid", a));
            return a
        },
        clearStorageId: function () {
            this.remove("lsid")
        }, _getLsKey: function (a) {
            return "_ym" + this.counterId + "_" + a
        }
    });
    e.fnv32a = function (a) {
        var b = 2166136261, c;
        var d = 0;
        for (c = a.length; d < c; ++d) b ^= a.charCodeAt(d), b += (b << 1) + (b << 4) + (b << 7) + (b << 8) + (b << 24);
        return b >>> 0
    };
    e.getTld = function () {
        if (!this._tld) {
            var a = M.hostname.split(".");
            this._tld = a[a.length - 1]
        }
        return this._tld
    };
    var P = {
        abc: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        tail: "+/\x3d",
        tailSafe: "*-_",
        encode: function (a, b) {
            var c = (P.abc + (b ? P.tailSafe :
                P.tail)).split(""), d = a.length, f = [], g = d - d % 3, n;
            for (n = 0; n < g; n += 3) {
                var h = (a[n] << 16) + (a[n + 1] << 8) + a[n + 2];
                e.mergeArrays(f, [c[h >> 18 & 63], c[h >> 12 & 63], c[h >> 6 & 63], c[h & 63]])
            }
            switch (d - g) {
                case 1:
                    h = a[g] << 4;
                    e.mergeArrays(f, [c[h >> 6 & 63], c[h & 63], c[64], c[64]]);
                    break;
                case 2:
                    h = (a[g] << 10) + (a[g + 1] << 2), e.mergeArrays(f, [c[h >> 12 & 63], c[h >> 6 & 63], c[h & 63], c[64]])
            }
            return f.join("")
        },
        decode: function (a, b) {
            for (var c = P.abc + (b ? P.tailSafe : P.tail), d = 0, f = "", e, g, h, k, l; a.length % 4;) a += "\x3d";
            do {
                e = c.indexOf(a.charAt(d++));
                g = c.indexOf(a.charAt(d++));
                k = c.indexOf(a.charAt(d++));
                l = c.indexOf(a.charAt(d++));
                if (0 > e || 0 > g || 0 > k || 0 > l) return null;
                h = e << 18 | g << 12 | k << 6 | l;
                e = h >> 16 & 255;
                g = h >> 8 & 255;
                h &= 255;
                f = 64 == k ? f + String.fromCharCode(e) : 64 == l ? f + String.fromCharCode(e, g) : f + String.fromCharCode(e, g, h)
            } while (d < a.length);
            return f
        }
    }, oa = {
        encode: function (a) {
            var b = [], c;
            var d = 0;
            for (c = a.length; d < c; d++) {
                var f = a.charCodeAt(d);
                128 > f ? b.push(f) : (127 < f && 2048 > f ? b.push(f >> 6 | 192) : (b.push(f >> 12 | 224), b.push(f >> 6 & 63 | 128)), b.push(f & 63 | 128))
            }
            return b
        }
    }, I = E.inherit({
        counterId: "", onlyCurrentDomain: !1,
        skipPrefix: !1, _initComponent: function () {
            var a;
            I.superclass._initComponent.apply(this, arguments);
            this._domain = null;
            if (!this.onlyCurrentDomain) {
                var b = g.location.host.split(".");
                for (a = 2; ;) if (a <= b.length) {
                    if (this._domain = "." + b.slice(-a).join("."), a++, this.isEnabled()) break
                } else {
                    this._domain = null;
                    break
                }
            }
        }, create: function (a, b, c) {
            a = [this._prepareName(a) + "\x3d" + encodeURIComponent(b)];
            c && (b = new Date, b.setTime(b.getTime() + 6E4 * c), a.push("expires\x3d" + b.toGMTString()));
            this._domain && a.push("domain\x3d" + this._domain);
            a.push("path\x3d/");
            try {
                k.cookie = a.join(";")
            } catch (d) {
            }
        }, read: function (a) {
            try {
                var b = k.cookie
            } catch (c) {
            }
            return b && b.match(new RegExp("(?:^|;\\s*)" + this._prepareName(a) + "\x3d([^;]*)")) ? decodeURIComponent(RegExp.$1) : null
        }, erase: function (a) {
            this.create(a, "", -1)
        }, isEnabled: function () {
            this.create("metrika_enabled", "1", 60);
            var a = !!this.read("metrika_enabled");
            this.erase("metrika_enabled");
            return a
        }, _prepareName: function (a) {
            return (this.skipPrefix ? "" : "_ym_") + a + (this.counterId ? "_" + this.counterId : "")
        }
    });
    I.get =
        function (a) {
            return (new I({onlyCurrentDomain: !0})).read(a)
        };
    I.set = function (a, b, c) {
        return (new I({onlyCurrentDomain: !0})).create(a, b, c)
    };
    I.isEnabled = function () {
        return (new I({onlyCurrentDomain: !0})).isEnabled()
    };
    e.isNativeFunction = function (a, b) {
        return a && "function" === typeof a ? (new RegExp("function\\s*" + b + "\\s*\\(\\)\\s*\\{\\s*\\[native[\\s-]code\\]\\s*\\}", "i")).test(a.toString()) : !1
    };
    var p = {
        removeNode: function (a) {
            var b = a && a.parentNode;
            b && b.removeChild(a)
        }
    };
    r.isSafariWebView = w(function () {
        var a = navigator.userAgent ||
            "";
        return navigator.vendor && -1 < navigator.vendor.indexOf("Apple") && (!a.match(/Safari/) && a.match(/Mobile/) || a.match(/CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/) || -1 !== a.indexOf("FB_IAB") || -1 !== a.indexOf("FBAV") || -1 !== a.indexOf("OKApp") || -1 !== a.indexOf("GSA/"))
    }, "isSafariWebView");
    r.isSafari = function () {
        try {
            return navigator.vendor && -1 < navigator.vendor.indexOf("Apple") && navigator.userAgent && !navigator.userAgent.match("CriOS")
        } catch (a) {
        }
        return !1
    };
    r.getMacOSVersion = w(function () {
        var a = navigator.userAgent.match(/Mac OS X ([0-9]+)_([0-9]+)_([0-9]+)/);
        return a ? [+a[1], +a[2], +a[2]] : [0, 0, 0]
    }, "", !0);
    r.getPlatform = w(function () {
        return "" + navigator.platform
    }, "", !0);
    r.isIOS = w(function () {
        var a = r.getPlatform() || "";
        return "iPhone" === a || "iPad" === a
    }, "", !0);
    r.getITPYaBroVersion = function () {
        var a = /\sYptp\/\d\.(\d+)\s/, b = null;
        g.navigator && navigator.userAgent && (a = a.exec(navigator.userAgent)) && 1 < a.length && (b = parseInt(a[1], 10));
        return b
    };
    r.isFF = w(function (a) {
        var b = !1;
        g && g.document && g.document.documentElement && g.document.documentElement.style && (b = "MozAppearance" in g.document.documentElement.style &&
            "undefined" !== typeof g.InstallTrigger);
        if (b && a && g.navigator && g.navigator.userAgent && g.navigator.userAgent.match) {
            var c = g.navigator.userAgent.match(/Firefox\/([0-9]+)/);
            b = !1;
            c && c.length && (c = +c[1], b = c >= a)
        }
        return b
    }, "isFF");
    var ha = {
        _storage: new N, globalConfig: null, key: "zzlc", userInfo: "", updateInfo: function (a) {
            e.forEachKey(this.getInfoFlags(), function (b, c) {
                var d = c.call(this);
                d && (a[b] = d)
            }, this);
            return a
        }, getYm: function () {
            var a = this._storage.get(this.ymKey) || {};
            return a.resp ? a.resp : this.genYm.call(this,
                a)
        }, getYmD: function () {
            var a = this._storage.get(this.ymKey) || {};
            if (a.dmn) return a.dmn
        }, getZZ: function () {
            return this._storage.get(this.key) ? this._storage.get(this.key) : this.zz
        }, getPP: function () {
            return this.globalConfig && this.globalConfig.get("pp") ? this.globalConfig.get("pp") : this.pp
        }, getPU: function () {
            return this.globalConfig && this.globalConfig.get("pu") ? this.globalConfig.get("pu") : this.pu
        }, getFip: function () {
            if (this._storage.get(this.fipKey)) return this._storage.get(this.fipKey)
        }, getInfoFlags: function () {
            return {
                pi: this.getYm,
                pid: this.getYmD, zz: this.getZZ, pp: this.getPP, pu: this.getPU, fip: this.getFip
            }
        }, checkVersion: function () {
            var a = r.getITPYaBroVersion();
            if (this.globalConfig.get("isEU")) return 1;
            if (50 <= a && 99 >= a) return 0;
            a = r.getMacOSVersion();
            return !((r.isIOS() || 10 <= a[0] && 13 <= a[2]) && r.isSafari()) || r.isSafariWebView()
        }, noop: function () {
        }, genPu: function (a) {
            var b = e.fnv32a(g.location.host) + this.userInfo;
            this.pu = b;
            a.set("pu", b);
            return b
        }, ymKey: "pi", genYm: function (a) {
            var b = this, c = y(), d = m.getMinutes();
            if (!this.checkVersion() && g.fetch &&
                this._storage.get("retryReqs") && "yandex.ru" == c.hostname && "/" == c.pathname && !(a.lt && a.lt + 1440 > d)) {
                a.lt = d;
                c = ["auto.ru", "thequestion.ru", "www.kinopoisk.ru"];
                var f = c[e.random(0, c.length)];
                fetch("//" + f + "/daiku", {credentials: "include"}).then(function (a) {
                    return a.json()
                }).then(function (c) {
                    c && (a.resp = c._ym_uid, a.dmn = P.encode(oa.encode(f)), b._storage.set(b.ymKey, a))
                })["catch"](function () {
                    b._storage.set(b.ymKey, a)
                })
            }
        }, initPU: function (a, b) {
            var c = this, d = r.isFF(68);
            this.globalConfig = b;
            b.get("pu") !== A || this.checkVersion() &&
            !d || (b.setSafe("pu", null), a.addHandler("gpu-get", function () {
                return {type: "gpu-get", pu: b.get("pu")}
            }, this), g.opener ? (e.setTimeout(function () {
                c.genPu(b)
            }, 200, "pu"), a.sendToIframe(g.opener, {type: "gpu-get"}, this.handleGpu, this)) : this.genPu(b))
        }, handleGpu: function (a) {
            if (a = a.pu) this.pu = a, this.globalConfig.set("pu", a)
        }, onicecandidate: w(function (a) {
            var b;
            try {
                var c = (b = a.localDescription.sdp) && b.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
            } catch (d) {
                a.onicecandidate = this.noop;
                "closed" !== a.iceConnectionState && a.close();
                return
            }
            c && 0 < c.length && (this.pp = e.fnv32a(c[1]), this.globalConfig.set("pp", this.pp));
            a.onicecandidate = this.noop;
            a.close()
        }, "wrt"), onOffer: function (a, b) {
            e.isFunction(a.setLocalDescription) && a.setLocalDescription(b, this.noop, this.noop)
        }, initPP: w(function (a) {
            var b = g.RTCPeerConnection || g.mozRTCPeerConnection || g.webkitRTCPeerConnection;
            this.globalConfig = a;
            if (g.navigator.onLine && b && a.get("pp") == A && (this.globalConfig.setSafe("pp", null), b && b.prototype && b.prototype.constructor && b.prototype.constructor.name)) {
                try {
                    var c =
                        new b({iceServers: []});
                    c.createDataChannel("y.metrika")
                } catch (f) {
                    return
                }
                if (e.isFunction(c.createOffer) && !c.createOffer.length) {
                    try {
                        var d = c.createOffer()
                    } catch (f) {
                        return
                    }
                    e.isFunction(d.then) && d.then(e.bind(this.onOffer, this, c));
                    c.onicecandidate = e.bind(this.onicecandidate, this, c)
                }
            }
        }, "rcinit"), initZZ: function () {
            var a = "ru";
            var b = r.isFF(68);
            var c = this;
            this.getZZ() || this.checkVersion() && !b || (b && (a = "md"), b = e.getNativeFunction("createElement", k)("iframe"), b.style.display = "none", b.style.width = "1px", b.style.height =
                "1px", b.style.visibility = "hidden", b.src = C.protocol + "//" + C.baseUrl + a + P.decode(C.cross), g.document.documentElement.appendChild(b), l.on(g, "message", this.onMessage, this, {passive: !1}), this.frame = b, this.timeout = e.setTimeout(function () {
                l.un(g, "message", c.onMessage, c, {passive: !1});
                p.removeNode(c.frame);
                c.zz = "na"
            }, 3E3, "cd.initZZ"))
        }, onMessage: function (a) {
            a.data && a.data.substr && "__ym__zz" === a.data.substr(0, 8) && (this.zz = a.data.substr(8), p.removeNode(this.frame), this._storage.set(this.key, this.zz), l.un(g, "message",
                this.onMessage, this, {passive: !1}), clearTimeout(this.timeout))
        }, fipKey: "fip", fpFactors: ["webGL", "plugins", "applePay", "dnt"], initFip: function () {
            if (Object.keys && !this.checkVersion() && !this._storage.get(this.fipKey)) {
                var a = new va(e.reduce(function (a, c) {
                    a[c] = 1;
                    return a
                }, {}, this.fpFactors));
                a = a.toString(!1).join("-");
                this._storage.set(this.fipKey, a)
            }
        }
    }, L = wa.inherit({
        protocol: "",
        host: C.host,
        queryStringParams: {firstOrdering: ["wmode", "callback", "cnt-class"], lastOrdering: ["browser-info"]},
        resource: "",
        counterId: "",
        counterType: 0,
        retry: !1,
        transports: [Ib, Y, S, Jb],
        _initComponent: function () {
            L.superclass._initComponent.apply(this, arguments);
            this.retry && (this._storage = new N)
        },
        send: function (a, b, c, d) {
            var f = this.globalConfig.get(da.globalKey), e = this;
            f && 3 !== this.counterId ? f(function () {
                var f = e._registerRequest(a, b);
                e._sendSavedRequest(f, a, b, c, d)
            }, a) : (f = e._registerRequest(a, b), e._sendSavedRequest(f, a, b, c, d))
        },
        _sendSavedRequest: function (a, b, c, d, f) {
            var g = this.globalConfig.get("firstReqStatus"), n = b.forceNoRedirect;
            if ("process" ==
                g) this.globalConfig.set("firstReqCallbacks", e.mergeArrays(this.globalConfig.get("firstReqCallbacks") || [], [[this, arguments]])); else {
                g || this.globalConfig.set("firstReqStatus", "process");
                this.counterType && (b["cnt-class"] = this.counterType);
                this.globalConfig.get("pri") && (c.pri = this.globalConfig.get("pri"));
                c.st = m.getSeconds();
                c.u = L._userID;
                ha.userInfo = L._userID;
                this.globalConfig.get("isEU") || (c = ha.updateInfo(c));
                g = [this.protocol, "//", this.host, "/", this.resource, "/", this.counterId, n ? "/1" : ""].join("");
                delete b.forceNoRedirect;
                var h = [];
                c && (e.forEachKey(c, function (a, b) {
                    "t" != a && e.mergeArrays(h, [a, b])
                }), c.t && e.mergeArrays(h, ["t", c.t]));
                h.length && (b["browser-info"] = h.join(":"));
                return L.superclass.send.call(this, g, b, function () {
                    var b;
                    this.globalConfig.set("firstReqStatus", "complete");
                    this._unregisterRequest(a);
                    var c = this.globalConfig.get("firstReqCallbacks");
                    this.globalConfig.set("firstReqCallbacks", null);
                    if (c) for (b = 0; b < c.length; b++) c[b][0]._sendSavedRequest.apply(c[b][0], c[b][1]);
                    d && d.apply(f, arguments)
                }, this)
            }
        },
        _isRetryEnabled: function () {
            return this.retry &&
                this._storage && this._storage.isEnabled()
        },
        _registerRequest: function (a, b) {
            var c;
            if (this._isRetryEnabled()) {
                b.rqnl = b.rqnl || 0;
                b.rqnl++;
                var d = this._storage.get("retryReqs") || {};
                for (c = 1; d[c];) c++;
                d[c] = {
                    protocol: this.protocol,
                    host: this.host,
                    resource: this.resource,
                    counterId: this.counterId,
                    counterType: this.counterType,
                    postParams: this.postParams,
                    params: a,
                    browserInfo: b,
                    ghid: this.globalConfig.get("_globalMetrikaHitId"),
                    time: m.getMs()
                };
                this._storage.set("retryReqs", d);
                return c
            }
        },
        _unregisterRequest: function (a) {
            if (a &&
                this._isRetryEnabled()) {
                var b = this._storage.get("retryReqs") || {};
                b[a] && (delete b[a], this._storage.set("retryReqs", b))
            }
        },
        _getVersion: w(function () {
            return ra
        }, "", !0)
    });
    L._storage = new N;
    L.initCookie = function (a) {
        var b = new I({onlyCurrentDomain: a !== C.cookieName}), c = b.read(a), d = L._storage.get(a), f = !1,
            g = b.read("d"), n = m.getSeconds();
        d && !c && (c = d, f = !0, b.create(a, c, 525600), b.create("d", n, 525600));
        if (!c) c = n + "" + e.random(), b.create(a, c, 525600), b.create("d", n, 525600); else if (!g || 15768E3 < n - parseInt(g)) b.create(a, c,
            525600), b.create("d", n, 525600);
        L._storage.set(a, c);
        L._userID = c;
        return f
    };
    L.retransmit = function (a) {
        var b = L._storage, c = b.get("retryReqs") || {}, d;
        b.remove("retryReqs");
        e.forEachKey(c, function (b, c) {
            var f = m.getMs();
            a.get("firstReqStatus") || a.set("firstReqStatus", "complete");
            c.ghid && c.ghid != a.get("_globalMetrikaHitId") && c.time && c.time + 1728E5 > f && 500 < f - c.time && 2 >= c.browserInfo.rqnl && (d = new L({
                protocol: c.protocol,
                host: c.host,
                resource: c.resource,
                counterId: c.counterId,
                counterType: c.counterType,
                postParams: c.postParams ||
                    [],
                retry: !0
            }), d.send(c.params, c.browserInfo))
        })
    };
    e.fletcher = function (a) {
        for (var b = a.length, c = 0, d = 255, f = 255, e, g, h; b;) {
            e = 21 < b ? 21 : b;
            b -= e;
            do g = "string" == typeof a ? a.charCodeAt(c) : a[c], c++, 255 < g && (h = g >> 8, g &= 255, g ^= h), d += g, f += d; while (--e);
            d = (d & 255) + (d >> 8);
            f = (f & 255) + (f >> 8)
        }
        a = (d & 255) + (d >> 8) << 8 | (f & 255) + (f >> 8);
        return 65535 == a ? 0 : a
    };
    e.arrayEvery = function (a, b, c) {
        var d;
        for (d = 0; d < a.length; d++) if (!b.call(c, a[d], d, a)) return !1;
        return !0
    };
    e.is4Bytes = function (a) {
        return !e.arrayEvery((encodeURIComponent(a).match(/(%[A-F,\d]{2})+/g) ||
            []).join("").split("%"), function (a) {
            return 240 > parseInt(a, 16)
        })
    };
    e.trim = function (a, b) {
        a = String(a).replace(/^\s+|\s+$/g, "");
        b && a.length > b && (a = a.substr(0, b));
        return a
    };
    e.isNumber = function (a) {
        return isFinite(a) && !isNaN(a) && "[object Number]" === e.toString(a)
    };
    e.isString = function (a) {
        return "[object String]" === e.toString(a)
    };
    e._hasIndexOf = [].indexOf && 0 === [A].indexOf(A);
    e.arrayIndexOf = e._hasIndexOf ? function (a, b) {
        return a.indexOf(b)
    } : function (a, b) {
        var c;
        for (c = 0; c < a.length; c++) if (a[c] === b) return c;
        return -1
    };
    e.warning = function () {
        g.console && "function" === typeof g.console.warn && console.warn.apply(console, arguments)
    };
    e.isObject = function (a) {
        try {
            return a && null !== a && "[object Object]" === e.toString(a)
        } catch (b) {
            return !1
        }
    };
    e._urlParser = null;
    e.parseUrl = function (a) {
        if (!this._urlParser) try {
            this._urlParser = k.createElement("a")
        } catch (b) {
        }
        return this._urlParser ? (this._urlParser.href = a, {
            protocol: this._urlParser.protocol,
            host: this._urlParser.host,
            port: this._urlParser.port,
            hostname: this._urlParser.hostname,
            hash: this._urlParser.hash,
            search: this._urlParser.search,
            query: this._urlParser.search.replace(/^\?/, ""),
            pathname: this._urlParser.pathname || "/",
            path: (this._urlParser.pathname || "/") + this._urlParser.search,
            href: this._urlParser.href
        }) : {}
    };
    e._playerRegexp = /^.+\.mtproxy\.yandex\.net$/;
    e.isMetrikaPlayer = function () {
        return "MetrikaPlayer" == g.name || this._playerRegexp.test(g.location.hostname)
    };
    p.getDocumentCharset = function () {
        return ("" + (k.characterSet || k.charset || "")).toLowerCase()
    };
    p.getBody = function () {
        for (var a = k.getElementsByTagName("body"); 0 <
        a.length;) return a[0]
    };
    p.getRootElement = function () {
        var a = k.documentElement, b = p.getBody();
        return "CSS1Compat" == k.compatMode ? a : b || a
    };
    p.getViewportSize = function () {
        var a = p.getRootElement();
        return [a.clientWidth || g.innerWidth, a.clientHeight || g.innerHeight]
    };
    p.getDocumentTitle = function () {
        var a = k.title;
        "string" != typeof a && (a = (a = k.getElementsByTagName("title")) && a.length ? a[0].innerHTML : "");
        return a
    };
    r.getSilverlightVersion = e.memorize(function () {
        if (g.ActiveXObject) try {
            var a = new ActiveXObject("AgControl.AgControl");
            var b = function (a, b, d, f) {
                for (; c(a, b);) b[d] += f;
                b[d] -= f
            };
            var c = function (a, b) {
                return a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3])
            };
            var d = [1, 0, 0, 0];
            b(a, d, 0, 1);
            b(a, d, 1, 1);
            b(a, d, 2, 1E4);
            b(a, d, 2, 1E3);
            b(a, d, 2, 100);
            b(a, d, 2, 10);
            b(a, d, 2, 1);
            b(a, d, 3, 1);
            var f = d.join(".")
        } catch (q) {
        } else if (b = g.navigator, b = b.plugins && b.plugins["Silverlight Plug-In"]) f = b.description;
        return f || ""
    });
    r.getFlashVersion = e.memorize(function () {
        var a = g.navigator;
        if ("undefined" != typeof a.plugins && "object" == typeof a.plugins["Shockwave Flash"]) {
            var b =
                a.plugins["Shockwave Flash"];
            var c = b.version;
            if ((b = b.description) || c) if (a = a.mimeTypes, "undefined" == typeof a || !a["application/x-shockwave-flash"] || a["application/x-shockwave-flash"].enabledPlugin) c ? r._flashVersion = c : b && (r._flashVersion = b.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, "."))
        } else if ("undefined" != typeof g.ActiveXObject) try {
            if (c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = c.GetVariable("$version")) r._flashVersion = b.split(" ")[1].replace(/,/g, ".").replace(/[^.\d]/g, "")
        } catch (d) {
        }
        return r._flashVersion
    });
    r.getLanguage = e.memorize(function () {
        var a = (g.navigator ? navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage : "").toLowerCase();
        return e.isString(a) ? a : ""
    });
    r.getJavaEnabled = e.memorize(function () {
        try {
            return navigator.javaEnabled()
        } catch (a) {
            return !1
        }
    });
    r.getFingerPrint = e.memorize(function () {
        var a = [], b;
        if (navigator.plugins && navigator.plugins.length) for (b = 0; b < navigator.plugins.length; b++) {
            var c = navigator.plugins[b];
            e.mergeArrays(a, [c.name, c.version, c.description,
                c.filename])
        }
        if (navigator.mimeTypes && navigator.mimeTypes.length) for (b = 0; b < navigator.mimeTypes.length; b++) c = navigator.mimeTypes[b], e.mergeArrays(a, [c.type, c.description, c.suffixes]);
        return e.fnv32a(a.join(";")) + "01"
    });
    r.getNotificationPermission = function () {
        try {
            var a = Notification.permission
        } catch (b) {
        }
        switch (a) {
            case "denied":
                return 1;
            case "granted":
                return 2
        }
    };
    r.isIframe = e.memorize(function () {
        try {
            return g.top != g
        } catch (a) {
            return !1
        }
    });
    r._nMap = {
        other: "0", none: "1", unknown: "2", wifi: "3", ethernet: "4", bluetooth: "5",
        cellular: "6", wimax: "7", mixed: "8"
    };
    r.netType = function () {
        var a = (navigator.connection || {type: ""}).type;
        return r._nMap[a] || a
    };
    r.isHeadLess = e.memorize(function () {
        var a, b = ["_phantom", "__nightmare", "callPhantom"];
        for (a = 0; a < b.length; a++) if (g[b[a]]) return !0;
        return /PhantomJS/.test(g.navigator.userAgent) || g.navigator.webdriver || g.isChrome && !g.chrome ? !0 : /HeadlessChrome/.test(g.navigator.userAgent)
    });
    r.getNavigationStart = e.memorize(function () {
        var a = g.performance || g.webkitPerformance;
        return a && a.timing && a.timing.navigationStart
    });
    r.isSameOriginTopFrame = function () {
        try {
            return g.top.contentWindow || !0
        } catch (a) {
            return !1
        }
    };
    r.isDesktop = function (a) {
        var b = a.get("bt", {});
        a.get("bt") === A && (b.p = navigator.getBattery ? navigator.getBattery() : null, a.set("bt", b), b.p && b.p.then && b.p.then(function (a) {
            b.v = a.charging && 0 === a.chargingTime
        }));
        return b.v
    };
    r.isSelenium = e.memorize(function () {
        var a = ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"], b = ["selenium", "webdriver", "driver"], c,
            d = g.document,
            f = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" ");
        for (c = 0; c < a.length; c++) if (g[a[c]]) return !0;
        for (c = 0; c < f.length; c++) if (d && d[f[c]]) return !0;
        if (g.external && g.external.toString && 0 <= g.external.toString().indexOf("Sequentum")) return !0;
        if (d.documentElement && d.documentElement.getAttribute) for (c = 0; c < b.length; c++) if (d.documentElement.getAttribute(b[c])) return !0;
        return !1
    });
    l.ready = function (a) {
        var b = k.readyState;
        if ("interactive" === b || "complete" === b) e.setTimeout(a, 0, "evt::ready"); else {
            var c = function () {
                l.un(k, "DOMContentLoaded", c);
                l.un(g, "load", c);
                a()
            };
            l.on(k,
                "DOMContentLoaded", c);
            l.on(g, "load", c)
        }
    };
    var qb = {
        url: C.protocol + "//" + C.host + "/metrika/", _value: null, init: function (a) {
            var b = this._getLs().read("isad");
            this.globalConfig = a || u;
            b ? this._set(b) : this._getReqStatus() || this._send()
        }, getVal: function () {
            return this._value
        }, _set: function (a) {
            this._value = "1" == a || "2" == a ? a : null
        }, _send: function () {
            var a = this;
            this._setReqStatus("process");
            l.ready(function () {
                var b = k.createElement("img");
                b.onload = function () {
                    a._saveReq(!1);
                    p.removeNode(this)
                };
                b.onerror = function () {
                    a._saveReq(!0);
                    p.removeNode(this)
                };
                b.src = a.url + String.fromCharCode(97, 100, 118, 101, 114, 116, 46, 103, 105, 102);
                r.isSafari() && (b.style.position = "absolute", b.style.visibility = "hidden", b.style.width = "0px", b.style.height = "0px", p.getRootElement().appendChild(b))
            })
        }, _saveReq: function (a) {
            this._value = a = a ? "1" : "2";
            this._setReqStatus("complete");
            this._getLs().create("isad", a, 1200)
        }, _setReqStatus: function (a) {
            try {
                this.globalConfig.set("adStatus", a)
            } catch (b) {
            }
        }, _getReqStatus: function () {
            try {
                return this.globalConfig.get("adStatus")
            } catch (a) {
                return "complete"
            }
        },
        _getLs: function () {
            this._ls || (this._ls = new I);
            return this._ls
        }
    };
    oa.decode = function (a) {
        for (var b = "", c = 0, d, f, e; c < a.length;) d = a.charCodeAt(c), 128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (f = a.charCodeAt(c + 1), b += String.fromCharCode((d & 31) << 6 | f & 63), c += 2) : (f = a.charCodeAt(c + 1), e = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (f & 63) << 6 | e & 63), c += 3);
        return b
    };
    e.reduce = function (a, b, c) {
        var d = 0;
        b == A && (b = c[0], d++);
        for (; d < c.length;) b = a(b, c[d]), d++;
        return b
    };
    e.filter = function (a, b) {
        var c, d = [];
        for (c = 0; c <
        b.length; c++) a(b[c]) && d.push(b[c]);
        return d
    };
    Z.parse = function (a) {
        try {
            return JSON.parse(a)
        } catch (b) {
            return null
        }
    };
    var Ja = L.inherit({
        hitId: 0,
        trackHash: !1,
        trimParams: !1,
        webvisor: !1,
        counter: null,
        counterNum: 0,
        windowName: null,
        resource: "watch",
        retry: !0,
        paramsQueue: {
            paramsQueue: [], length: function () {
                return this.paramsQueue.length
            }, push: function (a) {
                this.paramsQueue.push(a)
            }, _reduce: function (a) {
                return function (b, c) {
                    e.arrayEvery(e.keys(c), function (d) {
                        if (b.hasOwnProperty(d)) return 1;
                        -1 == e.arrayIndexOf(a, d) && (b[d] =
                            c[d], delete c[d]);
                        return 1
                    });
                    return b
                }
            }, _filter: function (a) {
                return e.keys(a).length
            }, mixin: function (a) {
                var b = {};
                this.paramsQueue.length && (b = e.reduce(this._reduce(e.keys(a)), {}, this.paramsQueue), this.paramsQueue = e.filter(this._filter, this.paramsQueue));
                return e.mixin({}, a, b)
            }
        },
        postParams: ["site-info"],
        countersNoTitle: "22836271 9928105 26128362 29850769 22327510 40081755 16082914 279297 23323747 16082899".split(" "),
        fake: !1,
        sendTitle: !0,
        _initComponent: function () {
            Ja.superclass._initComponent.apply(this,
                arguments);
            this._trackHash = this.trackHash;
            "0" === "" + this.counterType && (this.sendTitle = -1 === e.arrayIndexOf(this.countersNoTitle, "" + this.counterId))
        },
        setTrackHash: function (a) {
            this._trackHash = a
        },
        sendHit: function (a) {
            this._hitExt({
                url: a.url,
                title: a.title,
                referrer: a.referrer,
                vParams: a.vParams,
                modes: e.mixin(a.modes || {}, {ar: !0, saveRef: !0, pv: !0}),
                callback: a.callback,
                hasPrerender: a.hasPrerender,
                ctx: a.ctx
            }, "hit")
        },
        sendExperiments: function (a) {
            this._hitExt({
                url: y().href, title: "", referrer: "", modes: {ex: !0, ar: !0},
                experiments: a.experiments, callback: a.callback, ctx: a.ctx
            }, "exp")
        },
        sendPrerenderHit: function (a) {
            this._hitExt({
                url: a.url,
                vParams: a.vParams,
                title: a.title,
                referrer: a.referrer,
                modes: {ar: !0, pq: !0}
            }, "hit")
        },
        sendAjaxHit: function (a) {
            this._hitExt({url: a.url, title: a.title, referrer: a.referrer, modes: a.modes}, "hit")
        },
        sendParams: function (a, b, c, d) {
            this._hitExt({
                url: d || y().href,
                title: "",
                referrer: "",
                forceNoRedirect: !0,
                vParams: a,
                modes: {ar: !0, pa: !0, onlyData: !0},
                callback: b,
                ctx: c
            }, "pa")
        },
        sendGoal: function (a, b) {
            if (/[/&=?#]/.test(a)) e.warning("Incorrect goal");
            else if (a) {
                var c = b.url ? e.parseUrl(b.url) : y();
                this._hitExt({
                    url: "goal://" + c.hostname + "/" + encodeURIComponent(a),
                    title: p.getDocumentTitle(),
                    referrer: c.href,
                    forceNoRedirect: !0,
                    vParams: b.vParams,
                    modes: {ar: !0},
                    callback: b.callback,
                    ctx: b.ctx
                }, "go")
            } else e.warning("Empty goal")
        },
        sendClickLink: function (a, b) {
            this._hitExt({url: a.url, title: a.title, referrer: b || y().href, modes: a.modes})
        },
        sendExtLink: function (a, b) {
            this._hitExt({
                url: a.url, title: a.title || "", referrer: b || y().href, vParams: a.vParams, modes: {
                    ar: !0, ln: !0,
                    ut: hb
                }, callback: a.callback, ctx: a.ctx
            }, "cl")
        },
        sendFileUpload: function (a) {
            this._hitExt({
                url: a.url,
                title: a.title || "",
                referrer: y().href,
                vParams: a.vParams,
                modes: {ar: !0, ln: !0, dl: !0},
                callback: a.callback,
                ctx: a.ctx
            }, "fu")
        },
        sendNotBounce: function (a, b) {
            this._hitExt({
                url: b.url || y().href,
                title: "",
                referrer: "",
                modes: {cl: a, ar: !0, nb: !0, onlyData: !0},
                callback: b.callback,
                ctx: b.ctx
            }, "nb")
        },
        sendDevice: function (a) {
            this._hitExt({browserInfo: {di: a.data, dip: a.port}, callback: a.callback, ctx: a.ctx}, "de")
        },
        _hitExt: function (a,
                           b) {
            function c(a, b) {
                b && (p[a] = b)
            }

            var d, f, g, n = {};
            if (!e.isMetrikaPlayer()) {
                var h = a.modes || {};
                var k = a.browserInfo || {};
                var l = "undefined" !== typeof a.referrer ? a.referrer : Va.lastReferrer;
                var m = a.url || "";
                var p = {};
                a.nohit && c("nohit", 1);
                h.ar && !h.onlyData && (l = null === l || "" === l ? "" : this._prepareHitUrl(l), m = this._prepareHitUrl(a.url));
                c("forceNoRedirect", a.forceNoRedirect);
                c("page-ref", e.trim(l, Ka));
                c("page-url", e.trim(m, Ka));
                e.is4Bytes(a.title) && c("charset", "utf-8");
                -1 != y().hostname.search(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/) ?
                    c("ut", hb) : "undefined" != typeof h.ut && c("ut", e.trim(h.ut, Kb));
                c("exp", a.experiments);
                (f = a.vParams) && this.counter && f.__ym && (e.isNumber(f.__ym.turbo_page) && (this.counter.tp = f.__ym.turbo_page), e.isNumber(f.__ym.turbo_page_id) && (this.counter.tpid = f.__ym.turbo_page_id));
                (!f || e.isObject(f) && !f.__ym && !f.__ymu) && this.paramsQueue.length() && e.inArray(["go", "hit", "pa"], b) && (f = this.paramsQueue.mixin(f));
                f && (m = e.toJSON(f), this.trimParams && m.length > Lb ? g = !0 : m > C.maxBodyLength ? e.warning("Too big params") : c("site-info",
                    m));
                h.saveRef && (Va.lastReferrer = l);
                n = function (a, b) {
                    var c = {};
                    e.forEachKey(b, function (a, b) {
                        -1 === e.arrayIndexOf(["", 0, A, null], b) && (c[a] = b)
                    });
                    return e.mixin({}, a, c)
                }(n, {
                    gdpr: da.getState(this.globalConfig),
                    tp: this.counter && this.counter.tp,
                    tpid: this.counter && this.counter.tpid,
                    fu: this.getFu(a.url, a.referrer),
                    eu: this.globalConfig.get("isEU"),
                    v: this._getVersion(),
                    pr: a.hasPrerender ? 1 : null
                });
                this.fake || (d = this._getTechInfo(a.title, h, this.counterId, a.ts, a.tz, this._trackHash, this.hitId, this.webvisor, this.counter,
                    a.nohit));
                e.mixin(k, d, n);
                this.send(p, k, function () {
                    g && this.counter.params(f);
                    a.userParams && this.counter.userParams(a.userParams);
                    e.isFunction(a.callback) && a.callback.apply(a.ctx, arguments)
                }, this)
            }
        },
        _prepareHitUrl: function (a) {
            var b = y(), c = b.host;
            b = b.href;
            if (!e.isString(a)) return b;
            if (-1 != a.search(/^[a-z][\w.+-]+:\/\//i)) return a;
            var d = a.charAt(0);
            if ("?" == d) return d = b.search(/\?/), -1 == d ? b + a : b.substr(0, d) + a;
            if ("#" == d) return d = b.search(/#/), -1 == d ? b + a : b.substr(0, d) + a;
            if ("/" == d) {
                if (d = b.search(c), -1 != d) return b.substr(0,
                    d + c.length) + a
            } else return c = b.split("/"), c[c.length - 1] = a, c.join("/");
            return a
        },
        getFu: function (a, b) {
            var c = a !== y().href, d = k.referrer.replace(/\/$/, ""), f = (b || "").replace(/\/$/, "");
            d = d !== f;
            f = 0;
            d && c ? f = 3 : d ? f = 1 : c && (f = 2);
            return f
        },
        _getTechInfo: function (a, b, c, d, f, k, n, h, l, t) {
            function q(a, b, c) {
                var d = "" + b;
                a && b && (c || -1 === d.indexOf(":")) && (w[a] = d)
            }

            function x(a) {
                b[a] && q(a, "1")
            }

            var w = {};
            b = b || {};
            d = d || m.getTimestamp();
            f = f || m.getTimezone();
            q("j", r.getJavaEnabled() ? "1" : "");
            var y = r.isDesktop(this.globalConfig);
            y !== A &&
            q("dp", y ? "1" : "0");
            q("nt", r.netType());
            q("ns", r.getNavigationStart());
            ia && q("s", ia.width + "x" + ia.height + "x" + (ia.colorDepth || ia.pixelDepth));
            g.devicePixelRatio && q("sk", g.devicePixelRatio);
            r.isSelenium() && q("iss", "1");
            r.isHeadLess() && q("hdl", "1");
            r.isIframe() && (q("ifr", "1"), q("sti", r.isSameOriginTopFrame() ? "1" : "0"));
            g.ia_document && g.ia_document.shareURL && g.ia_document.referrer && q("iia", "1");
            q("adb", qb.getVal());
            q("f", r.getFlashVersion());
            q("l", r.getSilverlightVersion());
            q("fpr", r.getFingerPrint());
            q("cn",
                this.counterNum);
            b.pa || (y = p.getViewportSize(), q("w", y[0] + "x" + y[1]));
            q("z", f);
            q("i", d);
            q("et", m.getSeconds());
            q("en", p.getDocumentCharset());
            q("c", navigator.cookieEnabled ? "1" : "");
            q("la", r.getLanguage());
            q("ntf", r.getNotificationPermission());
            e.random(100) || q("np", P.encode(oa.encode(e.trim(r.getPlatform(), 100))));
            k && q("wh", "1");
            f = "ar ln re dl cpf ad nb pa pq pv ex".split(" ");
            for (d = 0; d < f.length; d++) x(f[d]);
            f = "va vt sn sa he pai".split(" ");
            b.nb && f.push("cl");
            for (d = 0; d < f.length; d++) k = f[d], q(k, b[k]);
            f = new N({counterId: c});
            f.isEnabled() && (c = f.getStorageId(), d = f.get("reqNum"), t || (d ? d++ : d = 1), f.set("reqNum", d), f.get("reqNum") == d ? (q("ls", c), q("rqn", d)) : (f.remove("reqNum"), f.clearStorageId(), 1 < d && (q("ls", c), q("rqn", 0))));
            q("rn", e.random());
            q("hid", n);
            t || 3 == this.counterId || b.pq || q("ds", Fb(l));
            l._firstPaint || t || (l._firstPaint = Hb(), q("fp", l._firstPaint));
            if (h) {
                n = u.get("winNameNum");
                if (!n) {
                    if (n = +g.name || Math.round(65535 * Math.random())) 0 > n && (n *= -1), n %= 65535;
                    n = n || e.fletcher(g.name);
                    u.set("winNameNum", n)
                }
                q("wn",
                    n);
                try {
                    g.history && q("hl", String(g.history.length))
                } catch ($a) {
                }
            }
            n = "";
            this.sendTitle && (n = this._getTitle(a));
            q("t", n, !0);
            return w
        },
        _getTitle: function (a) {
            a = "undefined" == typeof a ? (a = p.getDocumentTitle()) ? e.trim(a, Wa) : "" : e.trim(a, Wa);
            return a
        }
    });
    e.array2Props = function (a) {
        var b = a.length, c = {}, d = c, f;
        for (f = 0; f < b - 1; f++) {
            var e = a[f];
            d[e] = {};
            f < b - 2 && (d = d[e])
        }
        d[e] = a[b - 1];
        return c
    };
    var Pa = E.inherit({
        sampling: 1, counterId: 26302566, _initComponent: function () {
            Pa.superclass._initComponent.apply(this, arguments);
            this._sender =
                new Ja({protocol: "https:", counterId: this.counterId, retry: !1, counter: {}})
        }, log: function () {
            this.logParams(e.array2Props(arguments))
        }, logParams: function (a) {
            Math.random() < this.sampling && this._sender.sendHit({url: M.href, title: "", referrer: "", vParams: a})
        }
    }), Mb = L.inherit({
        resource: "webvisor", retry: !0, postParams: ["wv-data"], sendPacket: function (a, b, c, d, f, q, n, h) {
            if (!a || !a.length) return !1;
            var k = P.encode(a, !0);
            if (0 == k.indexOf("AAAAAAAAADw") && g.Error) {
                var l = Error();
                "string" == typeof l.stack && (new Pa({sampling: .1})).log("bad visor packet 5",
                    1)
            }
            a = {
                rn: e.random(),
                "page-url": b,
                wmode: 0,
                "wv-type": 0,
                "wv-hit": c,
                "wv-part": d + 1,
                "wv-check": e.fletcher(a),
                "wv-data": k
            };
            f = {v: this._getVersion(), z: f, i: q};
            return this.send(a, f, n, h)
        }
    }), Sa = Ia.inherit({
        protocol: "",
        counterId: "",
        counterType: "",
        meta: null,
        maxBufferSize: 7500,
        flushTimeout: 3E4,
        storageKey: "visorbuff",
        active: !1,
        _initComponent: function () {
            this.storage = new N({counterId: this.counterId});
            this._sender = new Mb({
                globalConfig: this.globalConfig,
                protocol: this.protocol,
                counterId: this.counterId,
                counterType: this.counterType
            });
            Sa.superclass._initComponent.apply(this, arguments)
        },
        onFlush: function (a, b, c) {
            this._sender.sendPacket(a, b.url, b.hitId, c, b.timezone, b.timestamp)
        }
    }), Db = L.inherit({
        resource: "webvisor",
        transports: [Y, W],
        postParams: ["wv-data"],
        sendContent: function (a, b, c, d, f, e, g) {
            if (!a) return !1;
            -1 < a.indexOf("\r") && (a = a.replace(/\r\n/g, "\n"));
            a = {"wv-type": 1, "page-url": y().href, "wv-hit": c, "wv-data": P.encode(oa.encode(a))};
            return 245E3 < a["wv-data"].length ? !1 : this.send(a, {z: d, i: f, pct: b || ""}, e, g)
        }
    });
    p.getDocumentHTML = function () {
        var a =
            "";
        var b = k.documentElement;
        var c = b.outerHTML, d, f;
        if (c) b = c; else {
            c = b.attributes;
            var e = "";
            for (d = 0; d < c.length; d++) (f = c[d]) && (e += " " + f.name + '\x3d"' + (f.value || "") + '"');
            b = "\x3chtml" + e + "\x3e" + b.innerHTML + "\x3c/html\x3e"
        }
        if (c = k.doctype) a = c.publicId ? ' PUBLIC "' + c.publicId + '"' : "", e = c.systemId ? ' "' + c.systemId + '"' : "", a = "\x3c!DOCTYPE " + c.name + a + e + "\x3e\n";
        return a + b
    };
    p.getDocumentScroll = function () {
        var a = p.getBody();
        return [g.pageXOffset || k.documentElement && k.documentElement.scrollLeft || a && a.scrollLeft || 0, g.pageYOffset ||
        k.documentElement && k.documentElement.scrollTop || a && a.scrollTop || 0]
    };
    p.getElementParent = function (a) {
        if (!a || a == k.documentElement) return null;
        if (a == p.getBody()) return k.documentElement;
        var b = null;
        try {
            b = a.parentNode
        } catch (c) {
        }
        return b
    };
    p.getElementChildren = function (a, b) {
        var c = [], d, f, g;
        if (a && (d = a.childNodes)) {
            var n = 0;
            for (g = d.length; n < g; n++) {
                var h = d[n];
                (f = "INPUT" == h.nodeName && h.type && "hidden" == h.type.toLocaleLowerCase()) || b && h.nodeName != b || e.mergeArrays(c, [h])
            }
        }
        return c
    };
    p.getElementNeighborPosition = function (a) {
        var b =
            p.getElementParent(a), c;
        if (b) {
            var d = 0;
            b = b.childNodes;
            var f = a && a.nodeName;
            for (c = 0; c < b.length; c++) {
                var e = b[c] && b[c].nodeName;
                if (f == e) {
                    if (a == b[c]) return d;
                    d++
                }
            }
        }
        return 0
    };
    p.getElementXY = function (a) {
        var b;
        if (!a || !a.ownerDocument || "PARAM" == a.tagName || a == p.getBody() || a == k.documentElement) return [0, 0];
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect();
            var c = p.getDocumentScroll();
            return [Math.round(a.left + c[0]), Math.round(a.top + c[1])]
        }
        for (b = c = 0; a;) c += a.offsetLeft, b += a.offsetTop, a = a.offsetParent;
        return [c,
            b]
    };
    p.getDocumentSize = function () {
        var a = p.getRootElement(), b = p.getViewportSize();
        return [Math.max(a.scrollWidth, b[0]), Math.max(a.scrollHeight, b[1])]
    };
    p.getElementSize = function (a) {
        var b;
        return a == p.getBody() || a == k.documentElement ? p.getDocumentSize() : (b = a.getBoundingClientRect && a.getBoundingClientRect()) ? [b.width, b.height] : [a.offsetWidth, a.offsetHeight]
    };
    p.getElementRegion = function (a) {
        var b = p.getElementXY(a);
        a = p.getElementSize(a);
        return [b[0], b[1], a[0], a[1]]
    };
    p.calcChildrenChecksum = function (a) {
        var b = w(function () {
                return a.innerHTML
            },
            "", !0)() || "";
        return e.fletcher(b.replace(/(<[^>]*>|[\u0000-\u0020])/g, ""))
    };
    p.getFormNumber = function (a) {
        var b = k.getElementsByTagName("form"), c;
        var d = 0;
        for (c = b.length; d < c; d++) if (b[d] == a) return d;
        return -1
    };
    p.isEmptyField = function (a) {
        return "INPUT" == a.nodeName && "submit" != a.type && "image" != a.type && "hidden" != a.type ? "radio" == a.type || "checkbox" == a.type ? !a.checked : !a.value : "TEXTAREA" == a.nodeName ? !a.value : "SELECT" == a.nodeName ? 0 > a.selectedIndex : !0
    };
    p.calcTextChecksum = function (a) {
        var b = "";
        a = a.childNodes;
        var c;
        var d = 0;
        for (c = a.length; d < c; d++) a[d] && 3 == a[d].nodeType && (b += a[d].nodeValue);
        return e.fletcher(b.replace(/[\u0000-\u0020]+/g, ""))
    };
    p.calcAttribChecksum = function (a) {
        var b = "", c = "width height align title alt name".split(" "), d;
        "IMG" == a.tagName && (b += a.src.toLowerCase());
        "A" == a.tagName && (b += a.href.toLowerCase());
        b += String(a.className || "").toLowerCase();
        for (d = 0; d < c.length; d++) a.getAttribute && (b += String(a.getAttribute(c[d]) || "").toLowerCase());
        return e.fletcher(b.replace(/[\u0000-\u0020]+/g, ""))
    };
    p.classNameExists =
        function (a, b) {
            try {
                return (new RegExp("(?:^|\\s)" + b + "(?:\\s|$)")).test(a.className)
            } catch (c) {
                return !1
            }
        };
    p.getElementsByClassName = function (a, b) {
        var c;
        b = b || k;
        var d = b.getElementsByTagName("*");
        var f = [];
        for (c = 0; c < d.length; c++) p.classNameExists(d[c], a) && f.push(d[c]);
        return f
    };
    e.toArray = function (a) {
        var b, c = [];
        if (a && !isNaN(a.length) && 0 <= a.length) for (b = 0; b < a.length; b++) c.push(a[b]);
        return c
    };
    e.arrayFilter = function (a, b, c) {
        var d = [], f;
        for (f = 0; f < a.length; f++) b.call(c, a[f], f, a) && d.push(a[f]);
        return d
    };
    e.arrDiff =
        function (a, b) {
            return e.arrayFilter(a, function (a) {
                return -1 === e.arrayIndexOf(b, a)
            })
        };
    e.encodeURIComponent = function (a, b) {
        a = String(a);
        b && a.length > b && (a = a.substr(0, b));
        return (g.encodeURIComponent || g.escape)(a).replace(/\+/g, "%2B")
    };
    e.bind = function (a, b) {
        var c = [].slice.call(arguments, 2);
        return function () {
            return a.apply(b || this, c.concat([].slice.call(arguments, 0)))
        }
    };
    e.clearTimeout = function (a) {
        return e.getNativeFunction("clearTimeout")(a)
    };
    e.safeDecodeURIComponent = function (a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {
            return ""
        }
    };
    e.isDev = function () {
        return !1
    };
    e.noop = function () {
    };
    var Cb = !ua(/webkit/) && ua(/gecko/), rb = E.inherit({
        hid: 0,
        tz: 0,
        ts: 0,
        counterId: 0,
        counterType: 0,
        url: "",
        protocol: "",
        enabled: !1,
        _initComponent: function () {
            if (this.isEnabled()) {
                var a = this._getStorage();
                var b = a.read("visorc");
                "b" !== b && "w" !== b && (b = "");
                if (!a.isEnabled() || ua("opera mini")) b = "b";
                this._vc = b;
                "b" !== b && (this._recorder = new wb(this.protocol, this.counterId, this.counterType, this.hid, this.globalConfig));
                rb.superclass._initComponent.apply(this, arguments)
            }
        },
        start: function (a) {
            var b = this._vc;
            if (this.isEnabled() && this._recorder) {
                a = a || {};
                var c = +a.recp;
                if (!isFinite(c) || 0 > c || 1 < c) b = "w";
                b || (b = this.hid % 1E4 / 1E4 < c ? "w" : "b");
                this._getStorage().create("visorc", b, 30);
                "w" === b ? (this._recorder.start(), c = a.arch_type, (a = a.urls) && c && "none" !== c && this._recorder.uploadPages(a, c)) : this._recorder.stop()
            }
        },
        stop: function () {
            this._recorder && this._recorder.stop()
        },
        isEnabled: function () {
            var a = !this.globalConfig.get("oo");
            return this.enabled && a
        },
        getVc: function () {
            return this._vc
        },
        _getStorage: function () {
            this._storage ||
            (this._storage = new I({counterId: this.counterId}));
            return this._storage
        }
    });
    p.loadScript = function (a, b) {
        b = b || g;
        var c = e.mixin({type: "text/javascript", charset: "utf-8", async: !0}, a), d = b.document,
            f = e.getNativeFunction("createElement", d), q = f("script");
        if (q) {
            q.type = c.type;
            q.charset = c.charset;
            q.src = c.src;
            c.async && (q.async = !0);
            try {
                var n = d.getElementsByTagName("head")[0];
                if (!n) {
                    var h = d.getElementsByTagName("html")[0];
                    n = f("head");
                    h && h.appendChild(n)
                }
                n.insertBefore(q, n.firstChild);
                return q
            } catch (x) {
            }
        }
    };
    wa = U.inherit({
        id: "script",
        index: 6, request: function (a, b, c, d) {
            var f = !1, q = e.getNativeFunction("createElement", k)("script");
            this.timeout && e.setTimeout(function () {
                f || (f = !0, p.removeNode(q), c.call(d, !1))
            }, this.timeout, "ts.request");
            if (!q) return f = !0, c.call(d, !1), !1;
            var n = "_ymjsp" + e.random();
            g[n] = w(function () {
                if (!f) {
                    try {
                        delete g[n]
                    } catch (x) {
                        g[n] = A
                    }
                    c.apply(d, e.mergeArrays([!0], arguments));
                    f = !0;
                    p.removeNode(q)
                }
            }, "transport.script");
            q.type = "text/javascript";
            q.src = this._buildUrl(a, e.mixin({wmode: 5, callback: n}, b));
            q.async = "async";
            var h =
                k.getElementsByTagName("head")[0];
            h || (h = k.createElement("head"), k.documentElement.appendChild(h));
            e.async(function () {
                h.insertBefore(q, h.firstChild)
            });
            q.onerror = function () {
                f = !0;
                c.call(d, !1);
                g[n] = A
            };
            return !0
        }
    });
    var La = Y.inherit({
        id: "XHRhit", index: 10, _buildUrl: function (a, b) {
            b.wmode = 7;
            return La.superclass._buildUrl.apply(this, [a, b])
        }, _parseResp: function (a) {
            var b = Z.parse(a);
            if (!b) throw"";
            return e.map(function (a) {
                return b[a]
            }, e.keys(b))
        }
    }), ib = Ja.inherit({
        transports: [La, wa], trimParams: !0, _initComponent: function () {
            ib.superclass._initComponent.apply(this,
                arguments);
            this._ilStorage = new N({counterId: this.counterId})
        }, postParams: [], checkYandexHost: function (a) {
            if (a) {
                a:{
                    if (a = e.parseUrl(a).host.match(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/)) if (a = a[0].split("yandex").reverse()[0].substring(1), -1 != e.arrayIndexOf(C.yandexWhiteListTld, a)) break a;
                    a = !1
                }
                a && (this.host = C.baseUrl + a)
            }
        }, sendHit: function (a) {
            var b = {}, c = this._ilStorage.get("il");
            a.visitColor && (b.vc = a.visitColor);
            c && (this._ilStorage.remove("il"), b.ilt = P.encode(oa.encode(e.trim(c, sb))));
            this.checkYandexHost(a.referrer);
            this._hitExt({
                url: a.url,
                forceNoRedirect: a.forceNoRedirect,
                nohit: a.nohit,
                hasPrerender: a.hasPrerender,
                title: a.title,
                referrer: a.referrer,
                vParams: a.vParams,
                userParams: a.userParams,
                experiments: a.experiments,
                modes: a.modes,
                browserInfo: b,
                ts: a.ts,
                tz: a.tz,
                callback: a.callback,
                ctx: a.ctx
            }, "hit")
        }
    }), Ma = E.inherit({
        cid: 3, cnt: 0, KEY_NAME: "wasSynced", _initComponent: function () {
            this._storage = new N;
            this._cookie = new I
        }, hit: function (a, b) {
            var c = this, d = b === A ? !0 : !1, f = d ? this._storage.get(this.KEY_NAME) : !1, g = [],
                n = this.globalConfig.get("fakeHit");
            if (n) return n(function (b) {
                a(b)
            });
            !f && d && (f = this._cookie.read(this.KEY_NAME)) && (f = Z.parse(f));
            f && f.params && f.time + 864E5 > m.getMs() ? (c.globalConfig.set("isEU", f.params.eu), a(f)) : (this.globalConfig.set("fakeHit", function (a) {
                g.push(a)
            }), this._getSender().sendHit({
                forceNoRedirect: this.forceNoRedirect, callback: function (b, d) {
                    var h = b || {};
                    f = {time: m.getMs(), params: h, bkParams: d};
                    c.globalConfig.set("isEU", h.eu);
                    c._storage.set(c.KEY_NAME, f);
                    c._cookie.create(c.KEY_NAME, Z.stringify(f), 1728);
                    a(f);
                    c.globalConfig.set("fakeHit",
                        function (a) {
                            a(f)
                        });
                    e.arrayEvery(g, function (a) {
                        a(f);
                        return 1
                    })
                }
            }))
        }, _getSender: function () {
            this._sender || (this._sender = new ib({
                protocol: "https:",
                counterType: this.cnt,
                counterId: this.cid,
                sendTitle: !1,
                globalConfig: this.globalConfig,
                fake: !0
            }));
            return this._sender
        }
    }), tb = E.inherit({
        baseUrl: C.baseUrl, globalConfig: u, baseTld: "ru", partners: {
            "mc.yandexsport.ru": {regex: /^([^/]+\.)?yandexsport\.ru$/, tld: "ru"},
            "mc.beru.ru": {regex: /^([^/]+\.)?beru\.ru$/, tld: "ru"},
            "mc.kinopoisk.ru": {
                regex: /^([^/]+\.)?kinopoisk\.ru$/,
                tld: "ru"
            }
        }, _initComponent: function () {
            var a = this;
            tb.superclass._initComponent.apply(this, arguments);
            this.syncTlds = e.reduce(function (a, c) {
                return c(a)
            }, C.yandexWhiteListTld, [e.bind(e.filter, null, function (b) {
                return b !== a.baseTld
            }), e.bind(e.reduce, null, function (a, c) {
                a[c] = [c];
                return a
            }, {})]);
            e.forEachKey(this.partners, function (a, c) {
                c.regex.test(g.location.hostname) && (this.syncTlds[c.tld] || (this.syncTlds[c.tld] = []), this.syncTlds[c.tld].push(a), this._replaceBase[a] = !0)
            }, this)
        }, _replaceBase: {}, langToDomain: {
            ka: "ge",
            ro: "md",
            tg: "tj",
            tk: "tm",
            et: "ee",
            hy: "com.am",
            he: "co.li",
            ky: "kg",
            uk: "ua",
            be: "by",
            tr: "com.tr",
            kk: "kz"
        }, sync: function (a) {
            var b = this, c = this._need(),
                d = -1 != y().hostname.search(/(?:^|\.)(?:ya|yandex(sport)?|beru|kinopoisk)\.(?:\w+|com?\.\w+)$/);
            this._is() ? a() : (d && b._syncAdmetrica(), c ? (this._setStatus(!0), d ? this._getCn().hit(function () {
                b._sync(c, a)
            }) : a()) : a());
            d && this._addMda()
        }, _addMda: function () {
            var a = new I({skipPrefix: !0}), b = new I, c = a.read("mda");
            "0" !== c && "1" !== c && a.create("mda", "0", 1036800);
            b.read("mda") &&
            b.erase("mda")
        }, _is: function () {
            try {
                return !!this.globalConfig.get("startSync")
            } catch (a) {
                return !1
            }
        }, _setStatus: function (a) {
            try {
                this.globalConfig.set("startSync", a)
            } catch (b) {
            }
        }, _need: function () {
            var a = this._getDomainByLang(), b = this._getTld(), c = [], d;
            (d = this.syncTlds[b]) && c.push.apply(c, d);
            d = this.syncTlds[a];
            a !== b && d && c.push.apply(c, d);
            var f = this._getLs().get("synced") || {};
            c = e.arrayFilter(c, function (a) {
                return (f[a] || 1) + 1440 < m.getMinutes()
            });
            return c.length && c || !1
        }, _syncAdmetrica: function () {
            var a = C.protocol +
                "//" + C.admetrikaUrl, b = new S({}), c = this._getLs();
            ((c.get("synced") || {}).SYNCED_ADM || 1) + 1440 < m.getMinutes() && b.request(a + "/sync_cookie_image_check", {}, function (a) {
                c.get("synced");
                var b = m.getMinutes();
                a || (b -= 1435);
                a = c.get("synced") || {};
                a.SYNCED_ADM = b;
                c.set("synced", a)
            })
        }, _sync: function (a, b) {
            var c, d = 0, f = C.protocol + "//", e = a.length, g = this;
            if (0 < e) {
                b = b || function () {
                };
                var h = function () {
                    d++;
                    e === d && b()
                };
                var k = g._getLs();
                var l = new S({});
                for (c = 0; c < e; c++) (function (a) {
                    l.request(f + (g._replaceBase[a] ? a : g.baseUrl + a) +
                        "/sync_cookie_image_check", {}, function (b) {
                        h();
                        var c = m.getMinutes();
                        b || (c -= 1435);
                        b = k.get("synced") || {};
                        b[a] = c;
                        k.set("synced", b)
                    })
                })(a[c])
            } else b()
        }, _getCn: function () {
            this._cn || (this._cn = new Ma({fake: !0, globalConfig: this.globalConfig}));
            return this._cn
        }, _getLs: function () {
            this._ls || (this._ls = new N);
            return this._ls
        }, _getTld: function () {
            var a = e.getTld();
            return {
                am: "com.am",
                tr: "com.tr",
                ge: "com.ge",
                il: "co.il",
                "\u0440\u0444": "ru",
                "xn--p1ai": "ru",
                "\u0443\u043a\u0440": "ua",
                "xn--j1amh": "ua",
                "\u0431\u0435\u043b": "by",
                "xn--90ais": "by"
            }[a] || a
        }, _getDomainByLang: function () {
            if (!g.navigator) return "ru";
            try {
                var a = navigator.languages ? navigator.languages[0] : r.getLanguage()
            } catch (b) {
            }
            a && a.toLowerCase && (a = a.toLowerCase().split("-")[0]);
            return this.langToDomain[a] || "ru"
        }
    }), Nb = Y.inherit({
        id: "RawBodyXHR", index: 9, postParams: ["body"], _setHeaders: function () {
        }, _preparePostParams: function (a) {
            return a.post.body || ""
        }
    });
    r.isAndroid = w(function () {
        var a = navigator.userAgent.toLowerCase(), b = r.getPlatform() || "";
        return -1 < a.indexOf("android") &&
            -1 < a.indexOf("mobile") && b.match(/^android|linux armv/i)
    }, "", !0);
    var Na = {
        _url: C.protocol + "//" + C.host + "/user_storage_set?", _params: {}, init: function (a) {
            this._params = a || {}
        }, save: function (a, b) {
            this._getReq().request(this._url + ka.stringify({key: a, value: e.toJSON(b)}));
            this._getLs().set(a, b)
        }, get: function (a) {
            return {remote: this._params[a], local: this._getLs().get(a)}
        }, getNum: function (a) {
            a = this.get(a);
            return Math.max(+a.remote || 0, +a.local || 0)
        }, _getLs: function () {
            this._ls || (this._ls = new N);
            return this._ls
        }, _getReq: function () {
            this._req ||
            (this._req = new S);
            return this._req
        }
    }, Ob = {
        sync: w(function (a, b, c, d) {
            var f = {t: 'UV|L7,!"T[rwe\x26D_\x3eZIb\\aW#98Y.PC6k'};
            this.globalConfig = d || u;
            if (this._enabled(a, b, c)) {
                this._setStatus(!0);
                var e = new Nb({method: "GET", withCredentials: !1});
                var g = this._getHosts();
                var h = g.length;
                (function Q(a) {
                    var b = g[a];
                    a < h ? e.request(b[0] + ":" + b[1] + "/p", f, function (c, d) {
                        c ? this._save(c, d, b[1]) : Q.call(this, a + 1)
                    }, this) : this._save(!1)
                }).call(this, 0)
            }
        }, "ds"), _getHosts: function () {
            var a = [], b = M.protocol, c = r.isIOS();
            (r.isAndroid() ||
                c && "http:" === b) && a.push(["http://127.0.0.1", "30102"], ["http://127.0.0.1", "29009"]);
            c && "https:" === b && a.push(["https://yandexmetrica.com", "30103"], ["https://yandexmetrica.com", "29010"]);
            return a
        }, _save: function (a, b, c) {
            var d = m.getMinutes();
            a ? (new Ja({
                protocol: "https:",
                counterType: 0,
                counterId: 42822899,
                sendTitle: !1,
                fake: !0
            })).sendDevice({data: e.trim(b), port: c}) : d -= 45;
            Na.save("ds", d)
        }, _is: function () {
            try {
                return !!this.globalConfig.get("dSync")
            } catch (a) {
                return !1
            }
        }, _enabled: function (a, b, c) {
            if (!(60 < m.getMinutes() -
                Na.getNum("ds")) || this._is() || e.isDev(this.globalConfig)) return !1;
            a = 0 === b && 0 <= e.arrayIndexOf([39370095, 1282253, 29302335, 43653484, 41734944, 31048081, 16443139, 27737346, 41870499, 33911514, 30744873, 5564395, 2580487], a);
            a = fa() || !c && .1 >= Math.random() && a;
            c = r.isIOS() && a;
            return r.isAndroid() && a || c
        }, _setStatus: function (a) {
            try {
                this.globalConfig.set("dSync", a)
            } catch (b) {
            }
        }
    }, B = {
        getPos: function (a) {
            var b = p.getRootElement(), c = p.getDocumentScroll();
            return [a.pageX || a.clientX + c[0] - (b.clientLeft || 0) || 0, a.pageY || a.clientY +
            c[1] - (b.clientTop || 0) || 0]
        }, getTarget: function (a) {
            var b = null;
            try {
                if (b = a.target || a.srcElement) !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== k && (b = null)
            } catch (c) {
            }
            return b
        }, getMouseButton: function (a) {
            return a.which || a.button == A ? a.which : a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0
        }, prevent: function (a) {
            a = a || g.event;
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        }
    };
    B.dispatchCustomEvent = w(function (a, b) {
        var c;
        b = b || k;
        if (c = e.getNativeFunction("createEvent", k)("Event")) c.initEvent(a,
            !1, !1), e.getNativeFunction("dispatchEvent", b)(c)
    }, "evt.dispatch");
    var Va = {lastReferrer: null}, ja = E.inherit({
        counter: null,
        prefsEcommerce: null,
        status: {NEW: A, PENDING: 1, OK: 2, FAIL: 3},
        overrideTimeout: null,
        dataLayerName: "dataLayer",
        _initComponent: function () {
            ja.superclass._initComponent.apply(this, arguments);
            this.frameConnector && this.frameConnector.addHandler("params", function (a, b) {
                if (this.counter && this.counter.params) this.onCookies(function (a) {
                    this.counter.params(a.data)
                }, this, b)
            }, this);
            this._overridePush(this.globalConfig.get("dataLayer"))
        },
        waitPool: [],
        destruct: function () {
            this.frameConnector && this.frameConnector.destruct && (this.frameConnector.destruct(), this._send = function () {
            }, this.waitPool = [], this.onCookies = function () {
            });
            e.clearTimeout(this.overrideTimeout)
        },
        onCookies: function (a, b) {
            this.waitPool.push({fn: a, ctx: b, args: [].slice.call(arguments, 2)})
        },
        initUserLayer: function () {
            var a = "customArr";
            e.arrayEvery(this.waitPool, function (a) {
                a.fn.apply(a.ctx, a.args);
                return 1
            });
            this.onCookies = function (a, c) {
                a.apply(c, [].slice.call(arguments, 2))
            };
            if (this.prefsEcommerce ||
                this.prefsUseDataLayer) this._overridePush(this.prefsEcommerce) || (e.isString(this.prefsEcommerce) && (this.dataLayerName = this.prefsEcommerce), a = this.dataLayerName, this._tryTimeout = e.bind(this._tryTimeout, this), this._tryTimeout()), this.counter._ecommerce = a
        },
        _overridePush: function (a) {
            if (a && "function" == typeof a.push) {
                var b = this;
                b._send(a);
                var c = a.push;
                a.push = function () {
                    var a = c.apply(this, arguments);
                    b._send([].slice.call(arguments, 0));
                    return a
                };
                return !0
            }
            return !1
        },
        _tryTimeout: function () {
            this._overridePush(g[this.dataLayerName]) ||
            (this.overrideTimeout = e.setTimeout(this._tryTimeout, 1E3, "dlObserver"))
        },
        _callHandlers: function (a) {
            e.arrayEvery(ja.handlers, function (b) {
                b && b.type && e.arrayEvery(b.type.split(","), function (c) {
                    c.replace(" ", "") === a.type && b.callback && b.callback(a);
                    return 1
                });
                return 1
            })
        },
        allowedEvents: "currencyCode add delete remove purchase checkout detail".split(" "),
        _convert: function (a, b) {
            var c = e.keys(b), d = !1, f = {transaction_id: "id", value: "revenue"};
            if (b.items) {
                var g = {};
                g[a] = {products: b.items};
                1 < c.length && (g[a].actionField =
                    e.reduce(function (a, c) {
                        f[c] ? a[f[c]] = b[c] : "currency" === c ? d = b[c] : "items" !== c && b[c] && (a[c] = b[c]);
                        return a
                    }, {}, c));
                d && (g.currencyCode = d);
                return g
            }
        },
        _checkGtag: function (a) {
            var b = {
                view_item: "detail",
                add_to_cart: "add",
                remove_from_cart: "remove",
                begin_checkout: "checkout",
                purchase: "purchase"
            }, c = [];
            a && "event" === a[0] && b[a[1]] && (a = this._convert(b[a[1]], a[2])) && c.push(a);
            return c
        },
        _send: function (a) {
            var b = [], c = this.allowedEvents, d, f;
            var k = 0;
            for (f = a.length; k < f; k++) {
                if ((d = a[k]) && d.ymetrikaEvent) {
                    var n = d.ymetrikaEvent;
                    this._callHandlers(n);
                    if ("params" === n.type && n.data) {
                        n.sended || (n.sended = []);
                        if (n.counter) this.counter && this.counter.params && this.counterId == n.counter && (this.onCookies(function (a) {
                            this.counter.params(a.data)
                        }, this, e.mixin({}, n)), n.sended.push(this.counterId)); else this.onCookies(function (a) {
                            e.forEachKey(this.globalConfig.get("counters"), function (b, c) {
                                var d = b.split(":")[0];
                                !e.inArray(a.sended, d) && c && c.params && (c.params(a.data), a.sended.push(d))
                            }, this)
                        }, this, e.mixin({}, n));
                        n.status == this.status.NEW &&
                        n.parent && this.frameConnector && this.frameConnector.checkFrame(g.parent) && g.parent !== g && (this.frameConnector.sendToParents({
                            type: "params",
                            data: n.data
                        }, function () {
                            n.status = this.status.OK
                        }, this), n.status = this.status.PENDING)
                    }
                }
                if (d && d.ecommerce) {
                    var h = {};
                    var l = !1;
                    e.forEachKey(d.ecommerce, function (a, b) {
                        0 <= e.arrayIndexOf(c, a) && (l = !0, h[a] = b)
                    });
                    l && b.push(h)
                }
                b = b.concat(this._checkGtag(d))
            }
            if (b.length) this.onCookies(function (a) {
                this.counter.params({__ym: {ecommerce: a}})
            }, this, b)
        }
    });
    ja.handlers = [];
    var Pb = {
            asyncChunk: 400,
            maxDuration: 20,
            restTime: 100,
            asyncBuffer: [],
            timeout: null,
            rest: 0,
            addAsyncItem: function (a, b, c, d, f) {
                var g = this;
                this.asyncBuffer.push({fn: a, ctx: b, args: d || [], loggerName: f || ""});
                c ? (clearTimeout(this.timeout), g.flushAsync(!0)) : m.getMs() - this.rest >= this.restTime && !this.timeout ? (this.rest = m.getMs(), g.flushAsync()) : this.timeout || (this.timeout = e.setTimeout(function () {
                    g.rest = m.getMs();
                    g.flushAsync();
                    g.timeout = !1
                }, this.restTime))
            },
            chain: function (a, b, c, d) {
                var f = this;
                a.push = function (a) {
                    throw'Try to push in Executor when it started "' +
                    a + '"';
                };
                (function t(b, c, e) {
                    f.addAsyncItem(function (b, c, d) {
                        c = a[b++](c);
                        b <= a.length - 1 && t(b, c, d)
                    }, null, e, [b, c], d + "." + b)
                })(0, b, c)
            },
            callByTimeout: function (a, b) {
                for (var c = m.getMs(), d = 0, f, g = (b || 0) + 1, k = 0, h = this; this.asyncBuffer.length;) if (f = this.asyncBuffer.shift(), k += 1, !f.isExecuted && (w(function () {
                    f.fn.apply(f.ctx, f.args)
                }, "AsyncExecutor." + f.loggerName)(), d = m.getMs() - c, f.isExecuted = !0, !a && (k >= this.asyncChunk || d >= this.maxDuration))) {
                    e.setTimeout(function () {
                        h.callByTimeout(a, g)
                    }, this.restTime);
                    break
                }
            },
            flushAsync: function (a) {
                this.asyncBuffer.length &&
                this.callByTimeout(a)
            }
        },
        Xa = "GDPR-ok GDPR-cross GDPR-cancel GDPR-skip GDPR-frame-skip GDPR-frame-ya GDPR-frame-noya GDPR-open-start GDPR-eu-skip GDPR-open-fail GDPR-open-success GDPR-cookie-success GDPR-cookie-fail GDPR-skip-login GDPR-skip-domain GDPR-skip-na GDPR-skip-eu-na GDPR-skip-wv".split(" "),
        Qb = ["https://brozen.yandex.ru", "https://yabro1.zen-test.yandex.ru/yabro/index.html", "https://yabro2.zen-test.yandex.ru/yabro/index.html"],
        da = E.inherit({
            globalKey: "f1", MAX_SIZE: 1E6, isYAN: !1, trigger: function (a) {
                this.globalConfig.get("dataLayer").push({ymetrikaEvent: {type: a}})
            },
            initCounter: function () {
            }, enabled: fa() && -1 < g.location.href.indexOf("yagdprcheck\x3d1"), _initComponent: function () {
                this._cookie = da.cookie;
                this._sender = new Ma({fake: !0, globalConfig: this.globalConfig, forceNoRedirect: !0})
            }, realise: function (a, b) {
                this.initCounter.apply(g, a);
                this.globalConfig.set(this.globalKey, function (a) {
                    a()
                });
                b.length && Pb.chain(b.concat([function () {
                    b = []
                }]), null, !1, "GDPR")
            }, showPopup: function (a, b, c, d, f) {
                var e = this;
                a = p.loadScript({
                    src: "https://yastatic.net/q/global-notifications/cc/_lego-cc" +
                        a + "." + b + ".js"
                });
                e.trigger("GDPR-open-start");
                a.onerror = function (a) {
                    w(function () {
                        throw a;
                    }, "gdpr-popup")();
                    e.trigger("GDPR-open-fail");
                    e.realise(c, d);
                    e.frameConnector.sendToChildren({type: "GDPR-ok"})
                };
                a.onload = function () {
                    e.trigger("GDPR-open-success");
                    ja.handlers = ja.handlers.concat([{
                        type: "GDPR-ok, GDPR-cross", callback: function (a) {
                            a.once || (f.create("gdpr", "0", 525600), e.realise(c, d), e.frameConnector.sendToChildren({type: "GDPR-ok"}), a.once = !0)
                        }
                    }, {
                        type: "GDPR-cancel", callback: function () {
                            f.create("gdpr",
                                "1");
                            e.logCancel();
                            e.frameConnector.sendToChildren({type: "GDPR-cancel"})
                        }
                    }])
                }
            }, askGDPR: function (a, b, c, d, f, g) {
                if (e.inArray([null, ""], a)) this.showPopup(b, c, d, f, g); else if ("0" === a) this.trigger("GDPR-cookie-success"), this.realise(d, f); else if ("1" === a) return this.trigger("GDPR-cookie-fail"), this.logCancel(), !1
            }, logCancel: function () {
                this._sender.hit(function () {
                }, !1)
            }, handle: function () {
                var a = this._sender, b = [], c = (r.getLanguage() || "").toLowerCase().split("-")[0],
                    d = "ontouchstart" in g ? "-touch" : "", f = this._cookie,
                    k = f.read("gdpr"), l = f.read("yaGdprCheck"), h = this, m = this.globalConfig.get(this.globalKey),
                    p = arguments;
                b.size = 0;
                if (m) return m(function () {
                    h.realise(p, b)
                });
                e.inArray("ru en kk be ky tr tt uk".split(" "), c) || (c = "en");
                if (!this.enabled && ("0" === k || r.isSafariWebView() || r.isAndroidWebView() || e.inArray(Qb, g.location.href.split("?")[0]) || !fa() || f.read("yandex_login") || this.disable)) return f.read("yandex_login") ? this.trigger("GDPR-skip-login") : fa() ? "0" === k ? this.trigger("GDPR-skip") : r.isSafariWebView() || r.isAndroidWebView() ?
                    this.trigger("GDPR-skip-wv") : this.trigger("GDPR-skip-na") : this.trigger("GDPR-skip-domain"), this.realise(p, b);
                this.globalConfig.set(this.globalKey, function (a, c) {
                    var d = 0;
                    try {
                        d = JSON.stringify(c).length || 0
                    } catch (za) {
                    }
                    b.size + d < h.MAX_SIZE ? (b.push(a), b.size += d) : e.warning("GDPR buffer is exceeded")
                });
                a.hit(function (a) {
                    if (a.params.eu || l || h.enabled) if (h.frameConnector && h.frameConnector.addHandler("isYandex", function () {
                        return {type: "isYandex", isYandex: fa()}
                    }), h.frameConnector.isIframe) {
                        h.frameConnector.sendToParents({type: "isYandex"},
                            function (a, c) {
                                var d = !1;
                                clearTimeout(g);
                                c[0].isYandex ? (h.trigger("GDPR-frame-ya"), h.frameConnector.addHandler("GDPR-ok", function () {
                                    d || (f.create("gdpr", "0", 525600), h.realise(c, b), d = !0)
                                }), h.frameConnector.addHandler("GDPR-cancel", function () {
                                    f.create("gdpr", "1")
                                })) : (h.trigger("GDPR-frame-noya"), h.realise(c, b))
                            });
                        var g = e.setTimeout(function () {
                            h.trigger("GDPR-frame-skip");
                            h.realise(p, b)
                        }, 2E3)
                    } else h.askGDPR(k, d, c, p, b, f); else return a.params.eu ? h.trigger("GDPR-skip-eu-na") : (f.create("gdpr", "0"), h.trigger("GDPR-eu-skip")),
                        h.realise(p, b)
                })
            }
        });
    da.globalKey = "f1";
    da.cookie = new I({skipPrefix: !0});
    da.getState = function (a) {
        var b = da.cookie.read("gdpr");
        a = e.reduce(function (a, b) {
            b.ymetrikaEvent && e.inArray(Xa, b.ymetrikaEvent.type) && a.push(e.arrayIndexOf(Xa, b.ymetrikaEvent.type));
            return a
        }, [], a.get("dataLayer"));
        return a.length ? (a = a.join(","), b && (a += "-" + (e.inArray(["0", "1"], b) ? b : "2")), a) : ""
    };
    var Rb = {
        init: function (a, b, c) {
            "22663942" == c && (c = k.createElement("img"), a && a.account && a.tmsec && b && (c.src = "https://www.tns-counter.ru/V13a****" +
                a.account + "/ru/UTF-8/tmsec\x3d" + a.tmsec + "/" + b))
        }
    };
    r.isIE = e.memorize(function () {
        return k && !k.addEventListener || !1
    });
    r.isChromePdf = e.memorize(function () {
        var a, b = navigator.plugins;
        if (b && b.length) for (a = 0; a < b.length; a++) if (/Chrome PDF Viewer/.test(b[a].name)) return !0;
        return !1
    });
    r.isPrivate = w(function (a) {
        var b = e.bind(a, null, 0);
        a = e.bind(a, null, 1);
        if (e.isFunction(g.webkitRequestFileSystem) && !r.isAndroid()) return g.webkitRequestFileSystem(0, 0, b, a);
        if (r.isFF()) return "undefined" == typeof navigator.serviceWorker ?
            a() : b();
        if (r.isSafari() && e.isFunction(g.openDatabase)) try {
            g.openDatabase(null, null, null, null), b()
        } catch (c) {
            a()
        } else {
            if (g.indexedDB || !g.PointerEvent && !g.MSPointerEvent) return b();
            a()
        }
    }, "isPrivate");
    r.findTarget = function (a) {
        a = a.target || a.srcElement;
        var b;
        if (!a) return !1;
        3 == a.nodeType && (a = a.parentNode);
        for (b = a && a.nodeName && a.nodeName.toString().toLowerCase(); a && a.parentNode && a.parentNode.nodeName && ("a" !== b && "area" !== b || !a.href && !a["xlink:href"]);) b = (a = a.parentNode) && a.nodeName && a.nodeName.toString().toLowerCase();
        return a.href ? a : !1
    };
    r.getHref = function (a) {
        if (!a) return "";
        a = a.href;
        return e.isString(a) ? "" + a : "[object SVGAnimatedString]" === e.toString(a) ? "" + a.baseVal : ""
    };
    r.getLinkComponents = function (a) {
        return a && "A" === a.nodeName ? {
            href: a.href,
            hostname: a.hostname || e.parseUrl(a.href).hostname || "",
            host: a.host,
            protocol: a.protocol,
            pathname: a.pathname,
            hash: a.hash,
            port: a.port,
            search: a.search,
            query: a.search.slice(Math.min(1, a.search.length)),
            path: (a.pathname || "/") + a.search
        } : e.isString(a) ? e.parseUrl(a) : {
            href: "", hostname: "",
            host: "", protocol: "", pathname: "", hash: "", port: "", search: "", query: "", path: ""
        }
    };
    var T = {};
    T._cookie = new I({onlyCurrentDomain: !0});
    T._check = w(function () {
        return -1 < g.location.href.indexOf("_ym_debug\x3d1") || g._ym_debug || "1" === T._cookie.read("debug")
    });
    T.enabled = T._check();
    T.log = w(function () {
        (-1 < M.href.indexOf("_ym_debug\x3d1") || g._ym_debug) && this._cookie.create("debug", "1");
        g.console && console.log && this._check() && (T.enabled = !0, console.log.apply(console, arguments))
    }, "DebugConsole.log");
    var Sb = L.inherit({
        resource: "clmap",
        retry: !0, transports: [S], sendClick: function (a, b, c, d) {
            this.send({"page-url": a, "pointer-click": b}, {}, c, d)
        }
    }), Tb = E.inherit({
        filter: null,
        ignoreTags: [],
        quota: 0,
        isTrackHash: !1,
        protocol: "",
        counterId: 0,
        counterType: 0,
        startTime: 0,
        MAX_LEN_PATH: 128,
        TIMEOUT_CLICK: 50,
        TIMEOUT_SAME_CLICKS: 1E3,
        DELTA_SAME_CLICKS: 2,
        tags: "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
        _initComponent: function () {
            var a, b;
            this._lastClick = null;
            this.hasQuota = !!this.quota;
            this._quota = this.quota;
            this._ignoreTags = [];
            if (this.ignoreTags) for (a = 0; a < this.ignoreTags.length; a++) this.ignoreTags[a] && e.mergeArrays(this._ignoreTags, [String(this.ignoreTags[a]).toUpperCase()]);
            this._cacheTags = {};
            a = 59;
            var c = String.fromCharCode;
            for (b = 0; b < this.tags.length; b++) this._cacheTags[this.tags[b]] = c(a), c(a), a++;
            this._sender = new Sb({
                globalConfig: this.globalConfig, protocol: this.protocol, counterId: this.counterId,
                counterType: this.counterType
            });
            this._start = !1;
            this.start()
        },
        destroy: function () {
            this.stop()
        },
        start: function () {
            if (!this._start) l.on(k, "click", this._handler, this);
            this._start = !0
        },
        stop: function () {
            this._start && l.un(k, "click", this._handler, this);
            this._start = !1
        },
        setTrackHash: function (a) {
            this.isTrackHash = a
        },
        _isIgnore: function (a) {
            return p.classNameExists(a, "(ym-disable-clickmap|ym-clickmap-ignore)")
        },
        _handler: function (a) {
            a = {el: B.getTarget(a), pos: B.getPos(a), button: B.getMouseButton(a), time: +new Date};
            if (this._isTrackingClick(a)) {
                var b =
                    p.getElementSize(a.el);
                var c = p.getElementXY(a.el);
                b = ["rn", e.random(), "x", Math.floor(65535 * (a.pos[0] - c[0]) / (b[0] || 1)), "y", Math.floor(65535 * (a.pos[1] - c[1]) / (b[1] || 1)), "t", Math.floor((a.time - this.startTime) / 100), "p", this._getElPath(a.el), "X", a.pos[0], "Y", a.pos[1]];
                c = y().href;
                this.isTrackHash ? e.mergeArrays(b, ["wh", "1"]) : c = c.split("#")[0];
                this._sender.sendClick(e.trim(c, Ka), b.join(":"));
                this._lastClick = a
            }
        },
        _isTrackingClick: function (a) {
            var b;
            if (g.ymDisabledClickmap || e.isMetrikaPlayer() || !a.el) return !1;
            var c = a.el.tagName;
            if ((2 == a.button || 3 == a.button) && "A" != c || this.filter && !this.filter(a.el, c)) return !1;
            for (b = 0; b < this._ignoreTags.length; b++) if (this._ignoreTags[b] == c) return !1;
            for (c = a.el; c;) {
                if (this._isIgnore(c)) return !1;
                c = c.parentNode
            }
            if (this._lastClick) {
                if (a.time - this._lastClick.time < this.TIMEOUT_CLICK) return !1;
                c = Math.abs(this._lastClick.pos[0] - a.pos[0]);
                b = Math.abs(this._lastClick.pos[1] - a.pos[1]);
                var d = a.time - this._lastClick.time;
                if (this._lastClick.el == a.el && c < this.DELTA_SAME_CLICKS && b < this.DELTA_SAME_CLICKS &&
                    d < this.TIMEOUT_SAME_CLICKS) return !1
            }
            if (this.hasQuota) {
                if (!this._quota) return !1;
                this._quota--
            }
            return !0
        },
        _getElPath: function (a) {
            for (var b = ""; a && a.parentNode && "BODY" != a.tagName && "HTML" != a.tagName;) b += this._cacheTags[a.tagName] || "*", b += p.getElementNeighborPosition(a) || "", a = a.parentNode;
            return e.trim(b, this.MAX_LEN_PATH)
        }
    }), Oa = E.inherit({
        injectHash: {
            Wjw75ghm7fa7JW8p: "https://yastatic.net/metrika-static-watch/assessor-init.js",
            Z4RhWJNDJanzkGJa: "https://yastatic.net/metrika-static-watch/assessor-compare.js"
        },
        ASSESSOR_COOKIE: "assessor", REMOTE_CONTROL: "i", getInjectHash: function () {
            var a = {};
            e.forEachKey(this.injectHash, function (b) {
                a[ra + ("" + e.fnv32a(b))] = this.injectHash[b]
            }, this);
            return a
        }, checkAssessor: function () {
            var a = [], b = this.getInjectHash();
            e.forEachKey(b, function (c) {
                if ((new RegExp(c)).test(g.location.hash) || I.get(this.ASSESSOR_COOKIE + c)) I.set(this.ASSESSOR_COOKIE + c), a.push(b[c])
            }, this);
            return a
        }, _initComponent: function () {
            var a = this.checkAssessor();
            this.globalConfig.get(this.REMOTE_CONTROL) || (this.globalConfig.set(this.REMOTE_CONTROL,
                !0), Oa.superclass._initComponent.apply(this, arguments), this._executedMsgs = {}, l.on(g, "message", this._onMessage, this), a.length && (this.globalConfig.set("oo", !0), this.globalConfig.get("stopRecoder", function () {
            })(), e.arrayEvery(a, function (a) {
                p.loadScript({src: a}, g);
                return 1
            })))
        }, _buildRemoteIframe: function (a) {
            var b = e.getNativeFunction("createElement", k)("div"), c = p.getBody() || k.documentElement;
            if (c) {
                b.innerHTML = '\x3ciframe name\x3d"RemoteIframe" allowtransparency\x3d"true" style\x3d"position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"\x3e\x3c/iframe\x3e';
                var d = b.firstChild;
                d.onload = function () {
                    p.loadScript({src: a}, d.contentWindow)
                };
                g._ym__remoteIframeEl = d;
                b.createShadowRoot || b.webkitCreateShadowRoot ? (c.appendChild(b), b.removeChild(d), (c = b.createShadowRoot ? b.createShadowRoot() : b.webkitCreateShadowRoot()) && c.appendChild(d), g._ym__remoteIframeContainer = b) : (c.appendChild(d), g._ym__remoteIframeContainer = d)
            }
        }, _isAllowedLang: function (a) {
            return -1 !== e.arrayIndexOf("ru uk en tr es de".split(" "), a)
        }, _isAllowedOrigin: function (a) {
            return /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/.test(a)
        },
        _isAllowedStatic: function (a) {
            return /^(([\w\-.]+\.)?dev\.webvisor\.com|yastatic\.net|[\w\-.]+\.s3\.yandex\.net)$/.test(a)
        }, _onMessage: function (a) {
            try {
                var b = a.origin
            } catch (c) {
            }
            b && this._isAllowedOrigin(b) && (b = Z.parse(a.data)) && "appendremote" === b.action && this._isAllowedStatic(e.parseUrl(b.domain).host) && this._isAllowedLang(b.lang) && !this._executedMsgs[b.id] && (this._executedMsgs[b.id] = !0, g._ym__postMessageEvent = a, g._ym__inpageMode = b.inpageMode, g._ym__initMessage = b.initMessage, this._buildRemoteIframe(b.domain +
                "/cdn/inpage-remote/" + (b.newScriptAddr ? "_inpage-remote_" : "inpage-remote.") + b.lang + ".js"))
        }
    }), Ub = {
        match: function () {
            this.enabled() && l.ready(function () {
                var a = e.getNativeFunction("createElement", k)("iframe");
                a.onload = function () {
                    Na.save("cm", m.getMinutes());
                    p.removeNode(a)
                };
                a.style.display = "none";
                a.src = C.protocol + "//" + C.host + "/metrika/watch_match.html";
                k.documentElement.appendChild(a)
            })
        }, enabled: function () {
            return 1440 < m.getMinutes() - Na.getNum("cm") && "tr" === e.getTld()
        }
    };
    w(function () {
        (function (a) {
            function b(d) {
                if (c[d]) return c[d].exports;
                var f = c[d] = {i: d, l: !1, exports: {}};
                a[d].call(f.exports, f, f.exports, b);
                f.l = !0;
                return f.exports
            }

            var c = {};
            b.m = a;
            b.c = c;
            b.d = function (a, c, e) {
                b.o(a, c) || Object.defineProperty(a, c, {configurable: !1, enumerable: !0, get: e})
            };
            b.n = function (a) {
                var c = a && a.__esModule ? function () {
                    return a["default"]
                } : function () {
                    return a
                };
                b.d(c, "a", c);
                return c
            };
            b.o = function (a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            };
            b.p = "";
            return b(b.s = 3)
        })({
            0: function (a, b, c) {
                b.__esModule = !0;
                b.listToArray = function (a) {
                    return a ? [].slice.call(a) :
                        []
                }
            }, 1: function (a, b, c) {
                b.__esModule = !0;
                var d = [".googlesyndication.com/", "/googleads"];
                b.isGoogleSrc = function (a) {
                    return !(!a || !d.filter(function (b) {
                        return 0 < a.indexOf(b)
                    }).length)
                }
            }, 3: function (a, b, c) {
                b.__esModule = !0;
                a = {detectAd: c(4).detectAd};
                g.Ya ? g.Ya.AdDetector ? a = g.Ya.AdDetector : g.Ya.AdDetector = a : g.Ya = {AdDetector: a};
                b.AdDetector = a
            }, 34: function (a, b, c) {
                b.__esModule = !0;
                b.getParentElementsCount = function (a) {
                    for (var b = 0; ;) if (a = a.parentElement) b++; else return b
                }
            }, 4: function (a, b, c) {
                b.__esModule = !0;
                var d =
                    c(5), f = c(9), e = c(34), l = c(6), h = k.body, m = k.documentElement;
                b.detectAd = function () {
                    var a = g.pageYOffset || m.scrollTop || h.scrollTop,
                        b = g.pageXOffset || m.scrollLeft || h.scrollLeft, c = m.clientTop || h.clientTop || 0,
                        k = m.clientLeft || h.clientLeft || 0, n = m.scrollWidth || m.offsetWidth || g.innerWidth,
                        q = m.scrollHeight || m.offsetHeight || g.innerHeight, p = l.getFrienlyWindowsTree(g), r = [];
                    l.windowsTreeEach(p, function (a) {
                        var b = a.window, c = a.parent,
                            e = 0 < d.getParentFriendlyIFrames(b.document.documentElement).length,
                            g = f.getAdsInWindow(b,
                                {isInIFrame: e});
                        e = g.adElements;
                        g = g.iframeProviders;
                        if (c) {
                            var h = b.frameElement, k = r.filter(function (a) {
                                return a.windowsTree === c
                            })[0].adElements;
                            g.forEach(function (a) {
                                k.push({provider: a, element: h})
                            })
                        }
                        r.push({windowsTree: a, adElements: e})
                    });
                    r.forEach(function (a) {
                        a.adElements = a.adElements.sort(function (a, b) {
                            return e.getParentElementsCount(a.element) - e.getParentElementsCount(b.element)
                        })
                    });
                    var x = [], u = [];
                    r.forEach(function (a) {
                        var b = a.windowsTree, c = b.parent;
                        a = a.adElements;
                        b = d.getParentFriendlyIFrames(b.window.document.documentElement);
                        var f = b[b.length - 1];
                        a.forEach(function (a) {
                            var b = a.element;
                            u.push({provider: a.provider, element: c ? f : b})
                        })
                    });
                    u.forEach(function (d) {
                        var f = d.element;
                        var e = f.getBoundingClientRect();
                        var g = e.top + a - c;
                        e = e.left + b - k;
                        var h = f.clientWidth;
                        f = f.clientHeight;
                        var l = e + h, m = g + f, p = 0 > e ? 0 : e < n ? e : n, r = 0 > g ? 0 : g < q ? g : q;
                        100 <= ((l > n ? n : l > p ? l : p) - p) * ((m > q ? q : m > r ? m : r) - r) && x.push({
                            top: g,
                            left: e,
                            width: h,
                            height: f,
                            provider: d.provider
                        })
                    });
                    return {
                        page: {width: n, height: q},
                        window: {top: a, left: b, width: g.innerWidth, height: g.innerHeight},
                        ads: x
                    }
                }
            }, 5: function (a,
                            b, c) {
                b.__esModule = !0;
                b.getParentFriendlyIFrames = function (a) {
                    for (var b = []; ;) try {
                        if (a = a.ownerDocument.defaultView.frameElement) b.push(a); else return b
                    } catch (q) {
                        return b
                    }
                }
            }, 6: function (a, b, c) {
                function d(a) {
                    return h.listToArray(a.document.getElementsByTagName("iframe")).filter(function (a) {
                        if (k.isSafari) return !1;
                        try {
                            return a.contentWindow.document
                        } catch (Q) {
                            return !1
                        }
                    }).map(function (a) {
                        return a.contentWindow
                    })
                }

                function e(a, b) {
                    var c = {window: a, children: [], parent: b};
                    c.children = d(a).map(function (a) {
                        return e(a,
                            c)
                    });
                    return c
                }

                function g(a, b) {
                    b(a);
                    a.children.forEach(function (a) {
                        return g(a, b)
                    })
                }

                b.__esModule = !0;
                var k = c(7), h = c(0);
                b.getFrienlyWindowsTree = e;
                b.windowsTreeEach = g
            }, 7: function (a, b, c) {
                b.__esModule = !0;
                a = c(8);
                b.isSafari = a.isSafari()
            }, 8: function (a, b, c) {
                b.__esModule = !0;
                b.isSafari = function () {
                    var a = navigator.userAgent.toLowerCase();
                    return -1 !== a.indexOf("safari") && -1 === a.indexOf("chrome") && -1 === a.indexOf("android")
                }
            }, 9: function (a, b, c) {
                b.__esModule = !0;
                var d = c(0), e = c(1);
                b.getAdsInWindow = function (a, b) {
                    function c(a,
                               b) {
                        b.forEach(function (b) {
                            q.push({provider: a, element: b})
                        })
                    }

                    var f = b.isInIFrame, g = a.document.body, k = d.listToArray(g.querySelectorAll("img")),
                        l = d.listToArray(g.querySelectorAll("iframe")),
                        n = d.listToArray(g.querySelectorAll("script")), m = d.listToArray(g.querySelectorAll("div")),
                        q = [], p = [], r = d.listToArray(g.querySelectorAll("yatag")),
                        u = d.listToArray(g.querySelectorAll("yatag yatag"));
                    c("yandex", r.filter(function (a) {
                        return -1 === u.indexOf(a)
                    }));
                    c("adriver", l.filter(function (a) {
                        return (a = a.src) && -1 < a.indexOf(".adriver.ru/")
                    }));
                    c("adfox", l.filter(function (a) {
                        return (a = a.id) && -1 < a.toLowerCase().indexOf("adfox")
                    }));
                    c("adfox", k.filter(function (a) {
                        return (a = a.src) && -1 < a.indexOf("/banners.adfox.ru/")
                    }));
                    c("adfox", m.filter(function (a) {
                        return -1 < a.id.indexOf("AdFox_banner_")
                    }));
                    f && k.filter(function (a) {
                        return (a = a.src) && -1 < a.indexOf(".adfox.ru/")
                    }).length && p.push("adfox");
                    l.filter(function (a) {
                        return e.isGoogleSrc(a.src)
                    }).forEach(function (a) {
                        q.push({provider: "google", element: a})
                    });
                    f && n.filter(function (a) {
                        return e.isGoogleSrc(a.src)
                    }).length &&
                    p.push("google");
                    c("awaps", l.filter(function (a) {
                        return (a = a.src) && -1 < a.indexOf("awaps.yandex.net/")
                    }));
                    c("criteo", l.filter(function (a) {
                        var b = a.src;
                        a = a.id;
                        return b && (-1 < b.indexOf(".criteo.com/") || a && -1 < a.indexOf("cto_iframe_")) ? !0 : !1
                    }));
                    return {adElements: q, iframeProviders: p}
                }
            }
        })
    }, "", !0)();
    var Vb = {
            init: function (a, b) {
                if (Math.random() < (b || .005) && !u.get("adDetect")) {
                    u.set("adDetect", !0);
                    var c = function (b) {
                        var c = g.Ya.AdDetector.detectAd();
                        var d = c.window;
                        var f = c.page;
                        a.sendParams({
                            __ym: {
                                ads: {
                                    w: {
                                        t: d.top, l: d.left,
                                        w: d.width, h: d.height
                                    }, p: {w: f.width, h: f.height}, a: e.map(function (a) {
                                        return {t: a.top, l: a.left, w: a.width, h: a.height, p: a.provider}
                                    }, c.ads), full: b ? 1 : 0
                                }
                            }
                        })
                    };
                    var d = w(function () {
                        l.un(g, "load", d);
                        c(!0)
                    }, "", !0);
                    l.on(g, "load", d);
                    e.setTimeout(c, 1E4, "AdDetector", !0)
                }
            }
        }, ub = E.inherit({
            message: g.postMessage,
            spliter: ":",
            nameSpace: "__yminfo",
            pending: {},
            childs: {},
            isIframe: !1,
            parents: {},
            dataToSend: {parents: [], childs: []},
            checkFrame: function (a) {
                try {
                    var b = a && a.postMessage
                } catch (c) {
                    return !1
                }
                return b
            },
            checkChildrenData: function (a,
                                         b) {
                e.arrayEvery(this.dataToSend.childs, function (c) {
                    -1 == e.arrayIndexOf(c.tryTo, b.counterId) && (c.tryTo.push(b.counterId), e.mixin(c.data, {toCounter: b.counterId}), this.sendToIframe(a, c.data, function () {
                        c.sendedTo.push(b.counterId);
                        c.callback && c.callback(b, arguments)
                    }));
                    return !0
                }, this)
            },
            checkParentData: function (a, b) {
                e.arrayEvery(this.dataToSend.parents, function (c) {
                    -1 == e.arrayIndexOf(c.tryTo, b.counterId) && (c.tryTo.push(b.counterId), e.mixin(c.data, {toCounter: b.counterId}), this.sendToIframe(a, c.data, function () {
                        c.sendedTo.push(b.counterId);
                        c.callback && c.callback(b, arguments)
                    }));
                    return !0
                }, this)
            },
            getHandlers: function () {
                return {
                    initToChild: [{
                        fn: function (a, b) {
                            a.source === g.top && this.trigger("parentConnect", a, b)
                        }
                    }], initToParent: [{
                        fn: function (a, b) {
                            this.childs[b.counterId] = {info: b, window: a.source};
                            this.checkChildrenData(a.source, b)
                        }
                    }], parentConnect: [{
                        fn: function (a, b) {
                            this.parents[b.counterId] = {info: b, window: a.source};
                            this.checkParentData(a.source, b)
                        }
                    }]
                }
            },
            genMessage: function (a, b) {
                var c = {date: m.getMs(), key: Math.random(), dir: 0};
                b && (c = {
                    date: b[0],
                    key: b[1], dir: b[2]
                });
                e.mixin(a, {counterId: this.counterId, hid: this.hid});
                var d = {data: a};
                d[this.nameSpace] = [this.nameSpace, c.date, c.key, c.dir].join(this.spliter);
                return {meta: c, string: Z.stringify(d)}
            },
            sendToIframe: function (a, b, c, d) {
                b = this.genMessage(b);
                var f = this, g = [b.meta.date, b.meta.key].join(this.spliter);
                this.checkFrame(a) && (a.postMessage(b.string, "*"), this.pending[g] = e.bind(c, d || this), e.setTimeout(function () {
                    delete f.pending[g]
                }, 5E3, this, "fc.toSendToIframe"))
            },
            sendToChildren: function (a, b, c) {
                var d =
                    this, f = this.dataToSend.childs.push({
                    sendedTo: [],
                    tryTo: [],
                    callback: b ? e.bind(b, c || this) : !1,
                    data: a
                }) - 1;
                e.forEachKey(this.childs, function (a) {
                    this.dataToSend.childs[f].tryTo.push(a);
                    return 1
                }, this);
                e.keys(this.childs).length && e.forEachKey(this.childs, function (b) {
                    this.sendToIframe(d.childs[b].window, e.mixin(a, {toCounter: b}), function (a) {
                        this.dataToSend.childs[f].sendedTo.push(b);
                        this.dataToSend.childs[f].callback && this.dataToSend.childs[f].callback(a)
                    }, this)
                }, this)
            },
            sendToParents: function (a, b, c) {
                var d = this.dataToSend.parents.push({
                    sendedTo: [],
                    tryTo: [], callback: b ? e.bind(b, c || this) : !1, data: a
                }) - 1;
                e.forEachKey(this.parents, function (a) {
                    this.dataToSend.parents[d].tryTo.push(a);
                    return 1
                }, this);
                e.keys(this.parents).length && this.sendToIframe(g.parent, a, function (a) {
                    e.forEachKey(this.parents, function (b) {
                        this.dataToSend.parents[d].sendedTo.push(b);
                        this.dataToSend.parents[d].callback && this.dataToSend.parents[d].callback(a)
                    }, this)
                }, this)
            },
            addHandler: function (a, b, c) {
                this.handlers[a] || (this.handlers[a] = []);
                this.handlers[a].push({fn: b, ctx: c})
            },
            destruct: function () {
                l.un(g,
                    "message", this.onMessage, this, {passive: !1, name: "FrameConnector"});
                this.sendToIframe = function () {
                };
                this.parents = [];
                this.pending = {};
                this.childs = {};
                this.dataToSend = {parents: [], childs: []}
            },
            _initComponent: function () {
                var a = g.document.getElementsByTagName("iframe"), b = 0;
                ub.superclass._initComponent.apply(this, arguments);
                this.handlers = e.mixin({}, this.getHandlers());
                this.isIframe = r.isIframe();
                if (this.message) {
                    for (b = 0; b < a.length; b++) {
                        var c = a[b];
                        (function (a, b) {
                            a.sendToIframe(b.contentWindow, {type: "initToChild"},
                                function (c) {
                                    a.childs[c.counterId] = {info: c, window: b.contentWindow}
                                })
                        })(this, c)
                    }
                    this.isIframe && this.sendToIframe(g.parent, {type: "initToParent"}, function (a) {
                        this.trigger("parentConnect", {source: g.parent}, a)
                    });
                    l.on(g, "message", this.onMessage, this, {passive: !1, name: "FrameConnector"})
                }
            },
            trigger: function (a, b, c) {
                var d = this;
                return e.map(function (a) {
                    a = a.fn.call(a.ctx || d, b, c) || {};
                    return e.mixin(a, {counterId: d.counterId, hid: d.hid})
                }, this.handlers[a])
            },
            DIR_INDEX: 2,
            onMessage: function (a) {
                var b, c = [];
                try {
                    var d = a.data;
                    d = Z.parse(a.data);
                    var f = d[this.nameSpace]
                } catch (n) {
                    return
                }
                if (f && f.substring && f.substring(0, this.nameSpace.length) == this.nameSpace) {
                    for (b = 0; 3 >= b; b++) {
                        var g = e.arrayIndexOf(f, this.spliter);
                        -1 !== g ? c.push(f.substring(0, g)) : c.push(f);
                        f = f.substring(g + 1)
                    }
                    b = c.splice(1, 3);
                    if ((d = d.data) && d.type && this.handlers[d.type] && "0" === b[this.DIR_INDEX]) {
                        if (!d.toCounter || d.toCounter == this.counterId) {
                            try {
                                a.source
                            } catch (n) {
                                return
                            }
                            d.counterId && this.checkFrame(a.source) && (g = this.trigger(d.type, a, d), a.source.postMessage(this.genMessage(g,
                                [b[0], b[1], d.counterId]).string, "*"))
                        }
                    } else b[this.DIR_INDEX] == this.counterId && e.isArray(d) && e.arrayEvery(d, function (a) {
                        return a.counterId && a.hid
                    }) && (a = this.pending[[b[0], b[1]].join(this.spliter)]) && a.apply(this, d)
                }
            }
        }), M = y(), Ga = m.getTimezone(), Ha = m.getTimestamp(), ia = g.screen, Kb = 64, Ka = r.isIE() ? 512 : 2048,
        Lb = r.isIE() ? 512 : 2048, Wa = r.isIE() ? 100 : 400, sb = 100, hb = "noindex",
        vb = /\.(3gp|7z|aac|ac3|acs|ai|avi|ape|apk|asf|bmp|bz2|cab|cdr|crc32|css|csv|cue|divx|dmg|djvu?|doc(x|m|b)?|emf|eps|exe|flac?|flv|iso|swf|gif|t?gz|jpe?g?|js|m3u8?|m4a|mp(3|4|e?g?)|m4v|md5|mkv|mov|msi|ods|og(g|m|v)|psd|rar|rss|rtf|sea|sfv|sit|sha1|svg|tar|tif?f|torrent|ts|txt|vob|wave?|wma|wmv|wmf|webm|ppt(x|m|b)?|xls(x|m|b)?|pdf|phps|png|xpi|g?zip)$/i,
        Wb = +new Date, jb, Za, ra = function () {
            return "1808"
        }();
    u.init().setSafe("counters", {}).setSafe("hitParam", {}).setSafe("counterNum", 0).setSafe("dataLayer", []).setSafe("hitId", e.random(1, 1073741824)).setSafe("_globalMetrikaHitId", e.random()).setSafe("v", ra);
    ha.globalConfig = u;
    g.Ya.Metrika = function (a, b, c, d) {
        var f = this;
        return w(function () {
            function q(a) {
                var b = k.referrer || "", c, d;
                if ((new RegExp("^https?://" + M.host + "/")).test(b)) return !1;
                var f = a.patterns;
                for (c = 0; c < f.length; c++) {
                    var g = new RegExp(f[c], "i");
                    if (b.match(g)) if (g =
                        a.params || [], g.length) {
                        var h = e.safeDecodeURIComponent((RegExp.$1 || "").replace(/\+/g, "%20"));
                        for (d = 0; d < g.length; d++) if (h == e.safeDecodeURIComponent(g[d])) return !0
                    } else return !0
                }
                return !1
            }

            function n(a, b) {
                var c = !1, d;
                if (a && "string" != typeof a && a.length) for (d = 0; d < a.length; d++) {
                    var e = a[d].selector;
                    var f = a[d].text;
                    var g = e.charAt(0);
                    e = e.slice(1);
                    if ("#" == g) {
                        if (g = k.getElementById(e)) c = !0, b && Da.unshift([g, g.innerHTML]), g.innerHTML = f
                    } else if ("." == g) for (g = p.getElementsByClassName(e), e = 0; e < g.length; e++) {
                        c = !0;
                        var h =
                            g[e], l = f;
                        b && Da.unshift([h, h.innerHTML]);
                        h.innerHTML = l
                    }
                }
                return c
            }

            function h() {
                var a;
                for (a = 0; a < Da.length; a++) Da[a][0].innerHTML = Da[a][1]
            }

            function x(a, b) {
                var c, d = "";
                a = a && a.replace(/^\?/, "");
                b = b && b.replace(/^#/, "") || "";
                if (a) {
                    var f = a.split("\x26");
                    for (c = 0; c < f.length; c++) {
                        var g = f[c].split("\x3d");
                        "_openstat" === g[0] && (d = g[1])
                    }
                }
                var h = b.split("?");
                for (c = 0; c < h.length; c++) {
                    var k = h[c].split("\x26");
                    for (f = 0; f < k.length; f++) g = k[f].split("\x3d"), "_openstat" === g[0] && (d = g[1])
                }
                d && (d = -1 < d.indexOf(";") ? e.safeDecodeURIComponent(d) :
                    oa.decode(P.decode(d.replace(/[-*_]/g, function (a) {
                        return {"*": "+", "-": "/", _: "\x3d"}[a] || a
                    }))));
                return d && (c = d.split(";"), 4 == c.length) ? {
                    service: c[0],
                    campaign: c[1],
                    ad: c[2],
                    source: c[3]
                } : null
            }

            function t(a, b) {
                return w(function () {
                    if (!f.isDestructing()) return a.apply(this, arguments)
                }, b || "")
            }

            function E() {
                var m = !1, v = !1;
                Ta || (v = L.initCookie(O), qb.init(u));
                ha.initPU(la, u);
                r.isAndroidWebView() || ha.initPP(u);
                L.retransmit(u);
                xa && Rb.init(xa, aa, a);
                u.get("pri") != A || r.isAndroidWebView() || (u.setSafe("pri", null), r.isPrivate(w(function (a) {
                    u.set("pri",
                        a)
                }, "privCb")));
                Wa.init(wa);
                if (u.get("hitParam")[V]) {
                    if (1 != c || u.get("counters")[V]) return !1;
                    m = !0
                }
                u.get("counters")[V] = f;
                u.get("hitParam")[V] = 1;
                e.async(function () {
                    ha.initFip(u)
                }, this, "initFip");
                f._webvisor = z.webvisor || !1;
                f._directCampaign = z.directCampaign;
                z.trackHash && Aa(!0);
                if (!m) {
                    G = new rb({
                        protocol: "https:",
                        globalConfig: u,
                        counterId: a,
                        counterType: c,
                        hid: aa,
                        tz: Ga,
                        ts: Ha,
                        url: M.href,
                        enabled: f._webvisor,
                        trustedDomains: z.trustedDomains,
                        childIframe: z.childIframe
                    });
                    f.replacePhones();
                    m = new tb({globalConfig: u});
                    var K = function (m) {
                        var R = new ib({
                            protocol: "https:",
                            counterType: c,
                            counterId: a,
                            trackHash: ba,
                            hitId: aa,
                            webvisor: f._webvisor,
                            counter: f,
                            globalConfig: u,
                            counterNum: Ia
                        }), K = {
                            ut: Ba,
                            re: v,
                            he: ~~z.httpError,
                            ad: 1 == c && g.Ya && g.Ya.Direct,
                            pv: !0,
                            cpf: r.isChromePdf(),
                            saveRef: !0
                        };
                        jb = +new Date;
                        R.sendHit({
                            url: D,
                            referrer: ea,
                            title: p.getDocumentTitle(),
                            vParams: b,
                            userParams: Ka,
                            nohit: d,
                            experiments: Sa,
                            modes: K,
                            visitColor: G.getVc(),
                            hasPrerender: Ca,
                            ts: Ha,
                            tz: Ga,
                            callback: function (v, R) {
                                var p;
                                Za || (Za = +new Date);
                                d || (Ca = !1);
                                v = v || {};
                                (p = "0" !==
                                    v.pcs) || ha.initZZ();
                                v.eu !== A && u.set("isEU", v.eu);
                                Na.init(R);
                                Ub.match();
                                Ob.sync(a, c, p, u);
                                d || T.log("PageView. Counter ", a, ". URL: ", M.href, ". Referrer: " + k.referrer, ". Params: ", b);
                                v.webvisor && (v.webvisor.isEU = u.get("isEU"));
                                if (!f.isDestructing()) {
                                    G.start(v.webvisor, v.publisher);
                                    var r = v.mp2;
                                    p = new I({counterId: a});
                                    p.erase("mp2_substs");
                                    if (r) {
                                        b:{
                                            var K = r.conditions;
                                            var X;
                                            if (K && K.length) for (X = 0; X < K.length; X++) {
                                                var t = K[X];
                                                if ("ref" == t.type) t = q(t); else if ("adv" == t.type) {
                                                    var H;
                                                    var w = t;
                                                    var ca = g.Ya._metrika.counter._directCampaign;
                                                    var y = w.ServiceNamePattern;
                                                    var z = w.RefererPattern;
                                                    t = ca ? w.direct_orders : w.direct_camp;
                                                    var C = k.referrer, E = ka.parse(M.search), D = x(M.search, M.hash),
                                                        qa = {};
                                                    var B = ["source", "medium", "campaign", "term", "content"];
                                                    for (H = 0; H < B.length; H++) E["utm_" + B[H]] && (qa[B[H]] = E["utm_" + B[H]]);
                                                    var F = ca ? "direct.yandex.ru" : D && D.service || qa.source;
                                                    H = !1;
                                                    if (!H && y && y.length) for (B = 0; B < y.length; B++) if ((new RegExp(y[B], "i")).test(F)) {
                                                        H = !0;
                                                        break
                                                    }
                                                    if (!H && !w.yandex_direct && z && z.length) for (y = 0; y < z.length; y++) if ((new RegExp(z[y], "i")).test(C)) {
                                                        H =
                                                            !0;
                                                        break
                                                    }
                                                    !H && w.google_adwords && E.gclid && (H = !0);
                                                    if (H && t && t.length && (H = !1, ca = ca || D && D.campaign || qa && qa.campaign)) for (w = 0; w < t.length; w++) if (t[w] == ca) {
                                                        H = !0;
                                                        break
                                                    }
                                                    t = H
                                                } else t = !1;
                                                if (t) {
                                                    K[X].track_id && p.create("mp2_track", K[X].track_id, 43200);
                                                    break b
                                                }
                                            }
                                        }
                                        K = p.read("mp2_track");
                                        r = r.substs && r.substs[K];
                                        K && r ? (p.create("mp2_substs", e.toJSON(r)), p = n(r), f.params("__ym", p ? "mp_trackid" : "mp_trackid_bad", K)) : h()
                                    } else h();
                                    l.on(g, "load", f.replacePhones, f)
                                }
                                f._inited = !0;
                                m && m()
                            }
                        })
                    };
                    m.sync(K)
                }
                S(!1);
                l.on(k, "click", Y, null, {name: "extLinkClick"});
                0 != e.keys(z).length && (na && na.initUserLayer(), z.enableAll ? (S(!0), U(!0), ia()) : (z.clickmap && U(z.clickmap), z.trackLinks && S(z.trackLinks), z.accurateTrackBounce && ia(z.accurateTrackBounce)), z.triggerEvent && e.async(function () {
                    B.dispatchCustomEvent("yacounter" + a + "inited")
                }, this, "yacounterInit"))
            }

            function W(a) {
                var b = new da({frameConnector: la, globalConfig: u, initCounter: E, disable: z.yaDisableGDPR});
                Ca = a;
                b.handle.apply(b, arguments)
            }

            function S(a) {
                var b = {};
                switch (typeof a) {
                    case "string":
                        b.on = !0;
                        break;
                    case "object":
                        b.on =
                            !0;
                        break;
                    case "boolean":
                        b.on = a;
                        break;
                    default:
                        return
                }
                f._trackLinks = b
            }

            function Y(a) {
                if (f._trackLinks && f._trackLinks.on) {
                    a = r.findTarget(a);
                    var b = r.getLinkComponents(a), c = b.href, d = u.get("pai", e.noop)();
                    if (c && !p.classNameExists(a, "ym-disable-tracklink")) {
                        var g = b.protocol + "//" + b.hostname + b.pathname;
                        d = {pai: d && d + "-" + aa, ln: !0};
                        var h = nb(a);
                        h = c === h ? "" : h;
                        if (p.classNameExists(a, "ym-external-link")) J.sendClickLink({
                            url: c,
                            title: h,
                            modes: d
                        }, D); else {
                            var k = z.url ? e.parseUrl(D).hostname : y().hostname;
                            d.dl = vb.test(g) ||
                                vb.test(c) || ob(c, ma) || ob(g, ma);
                            b = b.hostname;
                            (k ? k.replace(/^www\./, "") : "").toLowerCase() == (b ? b.replace(/^www\./, "") : "").toLowerCase() ? d.dl ? (d.ln = !1, J.sendClickLink({
                                url: c,
                                title: h,
                                modes: d
                            }, D)) : (h = nb(a), La.set("pai", d.pai), h && h !== c && La.set("il", e.trim(h, sb))) : c && -1 !== c.search(/^ *(data|javascript):/i) || (d.ut = hb, J.sendClickLink({
                                url: c,
                                title: h,
                                modes: d
                            }, D))
                        }
                    }
                }
            }

            function U(b) {
                "undefined" === typeof b && (b = !0);
                !0 === b && (b = {});
                f._clickmap && f._clickmap.destroy();
                b && (f._clickmap = new Tb({
                    globalConfig: u,
                    filter: b.filter,
                    ignoreTags: b.ignoreTags,
                    quota: b.quota,
                    isTrackHash: b.isTrackHash,
                    protocol: "https:",
                    counterId: a,
                    counterType: c,
                    startTime: Wb
                }))
            }

            function fa(a, b) {
                function c() {
                    if (!R) {
                        q && e.clearTimeout(q);
                        var c = m ? v : v + +new Date - p;
                        c = b - c;
                        0 > c && (c = 0);
                        q = e.setTimeout(function () {
                            R = !0;
                            f(!1);
                            a()
                        }, c, "trackUserTime")
                    }
                }

                function d() {
                    n || (h = !0, m = !1, n = !0, c())
                }

                function f(a) {
                    var b;
                    for (b = 0; b < t.length; b += 3) if (a) l.on(t[b], t[b + 1], t[b + 2], {name: "tabTrack"}); else l.un(t[b], t[b + 1], t[b + 2])
                }

                var h = !1, n = !1, m = !0, v = 0, p = +new Date, q = null, R = !1;
                if (r.isIE()) e.setTimeout(a,
                    b, "trackUserTime"); else {
                    var t = [g, "blur", function () {
                        m = h = n = !0;
                        v += +new Date - p;
                        p = +new Date;
                        c()
                    }, g, "focus", function () {
                        h || n || (v = 0);
                        p = +new Date;
                        h = n = !0;
                        m = !1;
                        c()
                    }, k, "click", d, k, "mousemove", d, k, "keydown", d, k, "scroll", d];
                    f(!0);
                    c()
                }
            }

            function ia(b) {
                var c = z.referrer ? ea : k.referrer, d = z.url ? D : y().href;
                "number" !== typeof b && (b = 15E3);
                if (!f._isAccurateTrackBounce) {
                    f._isAccurateTrackBounce = !0;
                    var e = new N({counterId: a});
                    var g = e.get("lastHit");
                    e.set("lastHit", m.getMs());
                    ((e = e.get("lastHit")) && (!g || g < e - 18E5) || !Eb(c, d) || .1 >
                        Math.random()) && fa(function () {
                        f.notBounce()
                    }, b)
                }
            }

            function ra(a) {
                var b = function () {
                    var a = y().hash.split("#")[1];
                    if ("undefined" == typeof a) return !1;
                    var b = a.indexOf("?");
                    0 < b && (a = a.substring(0, b));
                    return a
                };
                var c = b();
                (function ca() {
                    var d = b();
                    d !== c && (a(), c = d);
                    Ma = e.setTimeout(ca, 200, "trackHash")
                })()
            }

            function Aa(a) {
                if (!1 === a) ba && ("onhashchange" in g ? l.un(g, "hashchange", Qa) : e.clearTimeout(Ma), ba = !1); else if (a = Qa, !ba) {
                    if ("onhashchange" in g) l.on(g, "hashchange", a); else ra(a);
                    ba = !0
                }
                J.setTrackHash(ba);
                f._trackHash =
                    ba
            }

            function Qa() {
                var a = {ut: Ba, ad: 1 == c && g.Ya && g.Ya.Direct, wh: !0, saveRef: !0, pv: !0};
                ua = Va.lastReferrer = va;
                J.sendAjaxHit({url: z.url ? D : y().href, title: p.getDocumentTitle(), referrer: ua, modes: a});
                va = y().href
            }

            function sa(a, b, c) {
                a = Xa.parseValidate(a, b);
                b = [];
                a && (b.push(a), c = c || {}, e.isFunction(c.callback) && (b.push(c.callback), c.ctx && b.push(c.ctx)));
                b.length && f.params.apply(f, b)
            }

            var Ba = "", z = {}, ua = "", va = Va.lastReferrer = M.href, wa = 0, Ca = !1, G;
            u.setSafe("counter", f);
            Ua && w(function () {
                throw Ua.error;
            }, "include." + Ua.scope)();
            if ("object" === typeof a) {
                z = a;
                d = a.defer;
                Ba = a.ut;
                var O = a.ldc || C.cookieName;
                c = a.type;
                b = a.params;
                var Ka = a.userParams;
                var xa = a.tns;
                var Sa = z.experiments;
                var Ta = z.nck;
                var D = a.url;
                var ea = a.referrer;
                a = a.id
            }
            if (!g["disableYaCounter" + a]) {
                ka.parse = function (a, b) {
                    var c = {}, d;
                    a = a && a.replace(/^\?/, "") || "";
                    if (a.length) {
                        var f = a.split("\x26");
                        for (d = 0; d < f.length; d++) if (f[d]) {
                            var g = f[d].split("\x3d");
                            if (g[0]) {
                                var h = e.safeDecodeURIComponent(g[0]);
                                g = e.safeDecodeURIComponent((g[1] || "").replace(/\+/g, "%20"));
                                b && h in c ? e.isArray(c[h]) ?
                                    c[h].push(g) : c[h] = [c[h], g] : c[h] = g
                            }
                        }
                    }
                    return c
                };
                var Da = [];
                D = D ? D : y().href;
                ea = ea ? ea : k.referrer;
                a = a || 0;
                /^\d+$/.test(a) || (a = 0);
                c = c || 0;
                var V = a + ":" + c;
                if (u.get("counters")[V]) return T.log("Duplicate counter " + V + " initialization"), u.get("counters")[V];
                var aa = u.get("hitId");
                var la = new ub({counterId: a, hid: aa});
                u.set("counterNum", u.get("counterNum") + 1);
                var Ia = u.get("counterNum");
                var J = new Ja({
                    protocol: "https:",
                    counterType: c,
                    counterId: a,
                    hitId: aa,
                    counter: f,
                    globalConfig: u,
                    counterNum: Ia
                });
                var Wa = {
                    init: function (a,
                                    b) {
                        if (g.performance && "function" === typeof performance.getEntries && (a === A && (a = 1), !(Math.random() >= a))) {
                            var c = {
                                1882689622: 1,
                                2318205080: 1,
                                3115871109: 1,
                                3604875100: 1,
                                339366994: 1,
                                2890452365: 1,
                                849340123: 1,
                                173872646: 1,
                                2343947156: 1,
                                655012937: 1,
                                1996539654: 1,
                                2065498185: 1,
                                823651274: 1,
                                12282461: 1,
                                1555719328: 1,
                                1417229093: 1,
                                138396985: 1
                            }, d = performance.getEntries(), f = {}, h = {}, k = {}, l = {}, n;
                            b && (k.counterId = 51533966);
                            for (n = 0; n < d.length; n++) {
                                var m = d[n];
                                var p = m.name.replace(/^https?:\/\//, "").split("?")[0];
                                var v = e.fnv32a(p);
                                "script" == m.initiatorType && b && (h[p] = {
                                    dns: Math.round(m.domainLookupEnd - m.domainLookupStart),
                                    tcp: Math.round(m.connectEnd - m.connectStart),
                                    duration: Math.round(m.duration),
                                    response: Math.round(m.responseEnd - m.requestStart),
                                    name: m.name,
                                    decodedBodySize: m.decodedBodySize
                                });
                                !c[v] || f[p] || b || (f[p] = {
                                    dns: Math.round(m.domainLookupEnd - m.domainLookupStart),
                                    tcp: Math.round(m.connectEnd - m.connectStart),
                                    duration: Math.round(m.duration),
                                    response: Math.round(m.responseEnd - m.requestStart),
                                    pages: M.href
                                })
                            }
                            e.keys(f).length &&
                            (l.timings8 = f);
                            e.keys(h).length && (l.scripts = h);
                            e.keys(l).length && (new Pa(k)).logParams(l)
                        }
                    }
                };
                wa = 24226447 == a ? 1 : .002;
                f.replacePhones = t(function () {
                    var b, c;
                    try {
                        (b = (new I({counterId: a})).read("mp2_substs")) && (c = Z.parse(b)) && n(c, !0)
                    } catch (K) {
                    }
                    return f
                }, "counter.replacePhones");
                f.reachGoal = t(function (b, c, d, e) {
                    2 <= arguments.length && "function" === typeof c && (e = d, d = c, c = A);
                    T.log("Reach goal. Counter: " + a + ". Goal id: " + b + ". Params: ", c);
                    J.sendGoal(b, {url: z.url ? D : y().href, vParams: c, callback: d, ctx: e});
                    return f
                }, "counter.reachGoal");
                f.trackLinks = t(function (a) {
                    S(a);
                    return f
                }, "counter.trackLinks");
                var La = new N({counterId: a});
                f.hit = t(function (b, c, d, g, h, k) {
                    (b = b && e.isFunction(b.toString) ? b.toString() : !1) ? (e.isObject(c) && (d = c.referer, g = c.params, h = c.callback, k = c.ctx, c = c.title), D = b, T.log("PageView. Counter " + a, ". URL: " + b, ". Referrer: " + d, ". Params: ", g), J.sendHit({
                        url: b,
                        title: c,
                        hasPrerender: Ca,
                        referrer: d,
                        vParams: g,
                        callback: h,
                        ctx: k
                    }), Ca = !1) : e.warning("Empty hit url");
                    return f
                }, "counter.hit");
                f.params = t(function (b) {
                    var c = arguments.length,
                        d = c, g = [].slice.call(arguments, 0);
                    if (b) {
                        if (1 < arguments.length) {
                            if (e.isFunction(arguments[c - 1])) {
                                var h = arguments[c - 1];
                                d = c - 1
                            } else if (e.isFunction(arguments[c - 2])) {
                                h = arguments[c - 2];
                                var k = arguments[c - 1];
                                d = c - 2
                            }
                            g = [].slice.call(g, 0, d);
                            1 < g.length && (g = [e.array2Props(g)])
                        }
                        c = -1 !== e.arrayIndexOf(e.keys(g[0]), "__ymu");
                        (d = -1 !== e.arrayIndexOf(e.keys(g[0]), "__ym") && g[0].__ym.user_id) ? T.log('Set user id "' + g[0].__ym.user_id + '"') : T.log((c ? "User p" : "P") + "arams. Counter " + a + ". Params: ", g[0]);
                        J.sendParams(g[0], h, k, z.url ?
                            D : y().href)
                    } else e.warning("Wrong params");
                    return f
                }, "counter.params");
                la.addHandler("pluginInfo", function () {
                    return z
                }, this);
                la.addHandler("parentConnect", function (a, b) {
                    J.paramsQueue.push({__ym: {parentIframe: {counterId: b.counterId, hid: b.hid}}})
                }, this);
                f.file = t(function (a, b) {
                    a ? (b = b || {}, J.sendFileUpload({
                        url: a,
                        title: b.title,
                        vParams: b.params,
                        callback: b.callback,
                        ctx: b.ctx,
                        referrer: z.url ? D : y().href
                    })) : e.warning("Empty file url");
                    return f
                }, "counter.file");
                f.extLink = t(function (a, b) {
                    a ? (b = b || {}, J.sendExtLink({
                        url: a,
                        title: b.title,
                        vParams: b.params,
                        callback: b.callback,
                        ctx: b.ctx,
                        referrer: z.url ? D : y().href
                    }, D)) : e.warning("Empty link");
                    return f
                }, "counter.extLink");
                f.notBounce = t(function (a) {
                    var b = 0;
                    a = a || {};
                    jb && Za && (b = Za - jb);
                    J.sendNotBounce(b, {url: z.url ? D : y().href, callback: a.callback, ctx: a.ctx});
                    return f
                }, "counter.notBounce");
                var ma = [];
                f.addFileExtension = t(function (a) {
                    if (!a) return e.warning("Empty extension"), f;
                    "string" === typeof a ? ma.push(a) : ma = ma.concat(a);
                    return f
                });
                f.clickmap = function (a) {
                    U(a);
                    return f
                };
                f.accurateTrackBounce =
                    t(function (a) {
                        ia(a);
                        return f
                    });
                var Ma = null;
                var ba = !1;
                f.trackHash = t(function (a) {
                    Aa(a);
                    return f
                });
                var Xa = {
                    requiredEcommerceFields: ["currency", "goods"], parseValidate: function (a, b) {
                        var c = this.validate(a, b), d;
                        if (!c.isValid) return console && console.log(c.message), !1;
                        c = {};
                        c[a] = {};
                        b.currency && (c.currencyCode = b.currency);
                        b.goods && (c[a].products = b.goods);
                        for (d in b) b.hasOwnProperty(d) && -1 === e.arrayIndexOf(this.requiredEcommerceFields, d) && (c[a].actionField || (c[a].actionField = {}), c[a].actionField[d] = b[d]);
                        return {__ym: {ecommerce: [c]}}
                    },
                    validate: function (a, b) {
                        var c = !1, d = "";
                        if (e.isObject(b)) switch (a) {
                            case "detail":
                            case "add":
                            case "remove":
                                e.isArray(b.goods) && b.goods.length ? (c = e.arrayEvery(b.goods, function (a) {
                                    return e.isObject(a) && (e.isString(a.id) || e.isNumber(a.id) || e.isString(a.name) || e.isString(a.name))
                                })) || (d = "All items in 'goods' should be objects and contain 'id' or 'name' field") : d = "Ecommerce data should contain 'goods' non-empty array";
                                break;
                            case "purchase":
                                e.isNumber(b.id) || e.isString(b.id) ? c = !0 : d = "Purchase object should contain string or number 'id' field"
                        } else d =
                            "Ecommerce data should be an object";
                        return {isValid: c, message: d}
                    }
                };
                f.ecommerceDetail = t(function (a, b) {
                    sa("detail", a, b);
                    return f
                }, "ecommerce.detail");
                f.ecommerceAdd = t(function (a, b) {
                    sa("add", a, b);
                    return f
                }, "ecommerce.add");
                f.ecommerceRemove = t(function (a, b) {
                    sa("remove", a, b);
                    return f
                }, "ecommerce.remove");
                f.ecommercePurchase = t(function (a, b) {
                    sa("purchase", a, b);
                    return f
                }, "ecommerce.purchase");
                f.userParams = t(function (a, b, c) {
                    e.isObject(a) ? f.params({__ymu: a}, b || function () {
                    }, c) : e.warning("Wrong user params");
                    return f
                }, "uparams");
                f.experiments = t(function (a, b, c) {
                    J.sendExperiments({callback: b, ctx: c, experiments: a});
                    return f
                }, "exps");
                f.id = f.setUserID = t(function (a, b, c) {
                    e.isString(a) || e.isNumber(a) ? f.params({__ym: {user_id: a}}, b || function () {
                    }, c) : e.warning("Incorrect user ID");
                    return f
                }, "id");
                var pa = new I;
                f.getClientID = t(function (a) {
                    var b = pa.read(O);
                    a && e.isFunction(a) && a(b);
                    return b
                }, "guid");
                f.enableAll = function () {
                    S(!0);
                    U(!0);
                    ia();
                    return f
                };
                f.uploadPage = function () {
                };
                f.destruct = t(function () {
                    f._isDestructing = !0;
                    l.un(k, "click", Y, null, {name: "extLinkClick"});
                    l.un(g, "load", f.replacePhones, f);
                    Aa(!1);
                    G && G.stop();
                    u.set("stopRecoder", A);
                    u.set("counter", A);
                    na && na.destruct && na.destruct();
                    U(!1);
                    try {
                        delete g["yaCounter" + a], delete u.get("counters")[V], delete u.get("hitParam")[V]
                    } catch (R) {
                    }
                });
                f.isDestructing = function () {
                    return !!f._isDestructing
                };
                Vb.init(J);
                f._performanceTiming = pb;
                if (a) {
                    var na = new ja({
                        counter: f,
                        counterId: a,
                        globalConfig: u,
                        frameConnector: la,
                        prefsEcommerce: z.ecommerce,
                        prefsUseDataLayer: z.useDataLayer
                    });
                    if ("prerender" ===
                        k.webkitVisibilityState || "prerender" === k.visibilityState) {
                        J.sendPrerenderHit({url: D, vParams: b, title: p.getDocumentTitle(), referrer: k.referrer});
                        var Oa = function () {
                            "prerender" !== k.webkitVisibilityState && "prerender" !== k.visibilityState && (l.un(k, "webkitvisibilitychange,visibilitychange", Oa), W(!0))
                        };
                        l.on(k, "webkitvisibilitychange,visibilitychange", Oa)
                    } else W(!1)
                }
            }
        }, "init")()
    };
    new Oa({globalConfig: u});
    g.Ya.Metrika.counters = function () {
        var a = [];
        e.forEachKey(u.get("counters"), function (b, c) {
            var d = b.split(":");
            a.push({
                id: +d[0],
                type: +d[1],
                accurateTrackBounce: c._isAccurateTrackBounce,
                clickmap: c._clickmap && c._clickmap._start,
                oldCode: !!g.ya_cid,
                trackHash: !!c._trackHash,
                trackLinks: c._trackLinks && c._trackLinks.on,
                webvisor: !!c._webvisor
            })
        });
        return a
    };
    u.setSafe("getCounters", function () {
        var a = [];
        e.forEachKey(u.get("counters"), function (b, c) {
            var d = b.split(":");
            a.push({
                id: +d[0],
                type: +d[1],
                accurateTrackBounce: c._isAccurateTrackBounce,
                clickmap: c._clickmap && c._clickmap._start,
                oldCode: !!g.ya_cid,
                trackHash: !!c._trackHash,
                trackLinks: c._trackLinks && c._trackLinks.on,
                webvisor: !!c._webvisor
            })
        });
        return a
    });
    g.ya_cid && g.Ya.Metrika && new g.Ya.Metrika(g.ya_cid, g.ya_params, g.ya_class);
    g.ya_cid && !g.ya_hit && (g.ya_hit = function (a, b) {
        g.Ya._metrika.counter && g.Ya._metrika.counter.reachGoal(a, b)
    });
    (function () {
        function a(a) {
            try {
                delete g[a]
            } catch (n) {
                g[a] = A
            }
        }

        var b = g.yandex_metrika_callback, c = g.yandex_metrika_callbacks, d;
        "function" == typeof b && b();
        if ("object" == typeof c) {
            var e = c.length;
            for (b = 0; b < e; b++) if (d = c[b]) c[b] = null, d()
        }
        a("yandex_metrika_callback");
        a("yandex_metrika_callbacks")
    })();
    g.Ya.Metrika.informer = function (a) {
        var b = !!g.Ya.Metrika._informer;
        Ya.Metrika._informer = a;
        Ya.Metrika._informer.domain = "informer.yandex.ru";
        b || p.loadScript({src: "https://informer.yandex.ru/metrika/informer.js"})
    };
    l.on(k, "click", w(function (a) {
        var b = B.getTarget(a);
        if (b && ("ym-advanced-informer" === b.className || b.classList && b.classList.contains("ym-advanced-informer"))) {
            var c = b.getAttribute("data-lang");
            var d = b.getAttribute("data-cid");
            g.Ya.Metrika.informer({i: b, id: +d, lang: c});
            B.prevent(a)
        }
    }, "adv-inf"), null, {passive: !1})
})(this, this.document);