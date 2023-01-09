!(function () {
  'use strict';
  var e,
    r,
    t,
    n = {
      978: function (e, r, t) {
        var n = t(246),
          o = t(634),
          u = t(783),
          i = t(935),
          f = document.querySelector('#app');
        f &&
          (0, o.s)(f).render(
            (0, n.jsx)(function () {
              return (0,
              n.jsx)(u.VK, { children: (0, n.jsxs)(i.Z5, { children: [(0, n.jsx)(i.AW, { path: '/', element: (0, n.jsx)('h1', { children: 'home' }) }), (0, n.jsx)(i.AW, { path: '/cart', element: (0, n.jsx)('h1', { children: 'cart' }) }), (0, n.jsx)(i.AW, { path: '/order-history', element: (0, n.jsx)('h1', { children: 'order history' }) })] }) });
            }, {})
          );
      },
    },
    o = {};
  function u(e) {
    var r = o[e];
    if (void 0 !== r) return r.exports;
    var t = (o[e] = { exports: {} });
    return n[e](t, t.exports, u), t.exports;
  }
  (u.m = n),
    (e = []),
    (u.O = function (r, t, n, o) {
      if (!t) {
        var i = 1 / 0;
        for (l = 0; l < e.length; l++) {
          (t = e[l][0]), (n = e[l][1]), (o = e[l][2]);
          for (var f = !0, c = 0; c < t.length; c++)
            (!1 & o || i >= o) &&
            Object.keys(u.O).every(function (e) {
              return u.O[e](t[c]);
            })
              ? t.splice(c--, 1)
              : ((f = !1), o < i && (i = o));
          if (f) {
            e.splice(l--, 1);
            var a = n();
            void 0 !== a && (r = a);
          }
        }
        return r;
      }
      o = o || 0;
      for (var l = e.length; l > 0 && e[l - 1][2] > o; l--) e[l] = e[l - 1];
      e[l] = [t, n, o];
    }),
    (t = Object.getPrototypeOf
      ? function (e) {
          return Object.getPrototypeOf(e);
        }
      : function (e) {
          return e.__proto__;
        }),
    (u.t = function (e, n) {
      if ((1 & n && (e = this(e)), 8 & n)) return e;
      if ('object' == typeof e && e) {
        if (4 & n && e.__esModule) return e;
        if (16 & n && 'function' == typeof e.then) return e;
      }
      var o = Object.create(null);
      u.r(o);
      var i = {};
      r = r || [null, t({}), t([]), t(t)];
      for (var f = 2 & n && e; 'object' == typeof f && !~r.indexOf(f); f = t(f))
        Object.getOwnPropertyNames(f).forEach(function (r) {
          i[r] = function () {
            return e[r];
          };
        });
      return (
        (i.default = function () {
          return e;
        }),
        u.d(o, i),
        o
      );
    }),
    (u.d = function (e, r) {
      for (var t in r)
        u.o(r, t) &&
          !u.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (u.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (u.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (function () {
      var e = { 143: 0 };
      u.O.j = function (r) {
        return 0 === e[r];
      };
      var r = function (r, t) {
          var n,
            o,
            i = t[0],
            f = t[1],
            c = t[2],
            a = 0;
          if (
            i.some(function (r) {
              return 0 !== e[r];
            })
          ) {
            for (n in f) u.o(f, n) && (u.m[n] = f[n]);
            if (c) var l = c(u);
          }
          for (r && r(t); a < i.length; a++)
            (o = i[a]), u.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return u.O(l);
        },
        t = (self.webpackChunk = self.webpackChunk || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })();
  var i = u.O(void 0, [333], function () {
    return u(978);
  });
  i = u.O(i);
})();
