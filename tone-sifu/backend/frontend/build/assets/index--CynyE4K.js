var Wv = Object.defineProperty;
var Hv = (n, e, t) =>
  e in n
    ? Wv(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (n[e] = t);
var V = (n, e, t) => Hv(n, typeof e != "symbol" ? e + "" : e, t);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const a of s)
      if (a.type === "childList")
        for (const u of a.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && r(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(s) {
    const a = {};
    return (
      s.integrity && (a.integrity = s.integrity),
      s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const a = t(s);
    fetch(s.href, a);
  }
})();
function Bv(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var ac = { exports: {} },
  ds = {},
  lc = { exports: {} },
  ge = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wp;
function Uv() {
  if (Wp) return ge;
  Wp = 1;
  var n = Symbol.for("react.element"),
    e = Symbol.for("react.portal"),
    t = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    a = Symbol.for("react.provider"),
    u = Symbol.for("react.context"),
    c = Symbol.for("react.forward_ref"),
    f = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    m = Symbol.for("react.lazy"),
    y = Symbol.iterator;
  function w(M) {
    return M === null || typeof M != "object"
      ? null
      : ((M = (y && M[y]) || M["@@iterator"]),
        typeof M == "function" ? M : null);
  }
  var v = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    x = Object.assign,
    b = {};
  function k(M, U, le) {
    (this.props = M),
      (this.context = U),
      (this.refs = b),
      (this.updater = le || v);
  }
  (k.prototype.isReactComponent = {}),
    (k.prototype.setState = function (M, U) {
      if (typeof M != "object" && typeof M != "function" && M != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, M, U, "setState");
    }),
    (k.prototype.forceUpdate = function (M) {
      this.updater.enqueueForceUpdate(this, M, "forceUpdate");
    });
  function S() {}
  S.prototype = k.prototype;
  function C(M, U, le) {
    (this.props = M),
      (this.context = U),
      (this.refs = b),
      (this.updater = le || v);
  }
  var O = (C.prototype = new S());
  (O.constructor = C), x(O, k.prototype), (O.isPureReactComponent = !0);
  var R = Array.isArray,
    A = Object.prototype.hasOwnProperty,
    W = { current: null },
    H = { key: !0, ref: !0, __self: !0, __source: !0 };
  function N(M, U, le) {
    var ce,
      me = {},
      pe = null,
      Me = null;
    if (U != null)
      for (ce in (U.ref !== void 0 && (Me = U.ref),
      U.key !== void 0 && (pe = "" + U.key),
      U))
        A.call(U, ce) && !H.hasOwnProperty(ce) && (me[ce] = U[ce]);
    var Ce = arguments.length - 2;
    if (Ce === 1) me.children = le;
    else if (1 < Ce) {
      for (var ze = Array(Ce), Pt = 0; Pt < Ce; Pt++)
        ze[Pt] = arguments[Pt + 2];
      me.children = ze;
    }
    if (M && M.defaultProps)
      for (ce in ((Ce = M.defaultProps), Ce))
        me[ce] === void 0 && (me[ce] = Ce[ce]);
    return {
      $$typeof: n,
      type: M,
      key: pe,
      ref: Me,
      props: me,
      _owner: W.current,
    };
  }
  function B(M, U) {
    return {
      $$typeof: n,
      type: M.type,
      key: U,
      ref: M.ref,
      props: M.props,
      _owner: M._owner,
    };
  }
  function G(M) {
    return typeof M == "object" && M !== null && M.$$typeof === n;
  }
  function ne(M) {
    var U = { "=": "=0", ":": "=2" };
    return (
      "$" +
      M.replace(/[=:]/g, function (le) {
        return U[le];
      })
    );
  }
  var re = /\/+/g;
  function he(M, U) {
    return typeof M == "object" && M !== null && M.key != null
      ? ne("" + M.key)
      : U.toString(36);
  }
  function Ee(M, U, le, ce, me) {
    var pe = typeof M;
    (pe === "undefined" || pe === "boolean") && (M = null);
    var Me = !1;
    if (M === null) Me = !0;
    else
      switch (pe) {
        case "string":
        case "number":
          Me = !0;
          break;
        case "object":
          switch (M.$$typeof) {
            case n:
            case e:
              Me = !0;
          }
      }
    if (Me)
      return (
        (Me = M),
        (me = me(Me)),
        (M = ce === "" ? "." + he(Me, 0) : ce),
        R(me)
          ? ((le = ""),
            M != null && (le = M.replace(re, "$&/") + "/"),
            Ee(me, U, le, "", function (Pt) {
              return Pt;
            }))
          : me != null &&
            (G(me) &&
              (me = B(
                me,
                le +
                  (!me.key || (Me && Me.key === me.key)
                    ? ""
                    : ("" + me.key).replace(re, "$&/") + "/") +
                  M
              )),
            U.push(me)),
        1
      );
    if (((Me = 0), (ce = ce === "" ? "." : ce + ":"), R(M)))
      for (var Ce = 0; Ce < M.length; Ce++) {
        pe = M[Ce];
        var ze = ce + he(pe, Ce);
        Me += Ee(pe, U, le, ze, me);
      }
    else if (((ze = w(M)), typeof ze == "function"))
      for (M = ze.call(M), Ce = 0; !(pe = M.next()).done; )
        (pe = pe.value),
          (ze = ce + he(pe, Ce++)),
          (Me += Ee(pe, U, le, ze, me));
    else if (pe === "object")
      throw (
        ((U = String(M)),
        Error(
          "Objects are not valid as a React child (found: " +
            (U === "[object Object]"
              ? "object with keys {" + Object.keys(M).join(", ") + "}"
              : U) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return Me;
  }
  function we(M, U, le) {
    if (M == null) return M;
    var ce = [],
      me = 0;
    return (
      Ee(M, ce, "", "", function (pe) {
        return U.call(le, pe, me++);
      }),
      ce
    );
  }
  function ve(M) {
    if (M._status === -1) {
      var U = M._result;
      (U = U()),
        U.then(
          function (le) {
            (M._status === 0 || M._status === -1) &&
              ((M._status = 1), (M._result = le));
          },
          function (le) {
            (M._status === 0 || M._status === -1) &&
              ((M._status = 2), (M._result = le));
          }
        ),
        M._status === -1 && ((M._status = 0), (M._result = U));
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var ye = { current: null },
    $ = { transition: null },
    Q = {
      ReactCurrentDispatcher: ye,
      ReactCurrentBatchConfig: $,
      ReactCurrentOwner: W,
    };
  function Z() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ge.Children = {
      map: we,
      forEach: function (M, U, le) {
        we(
          M,
          function () {
            U.apply(this, arguments);
          },
          le
        );
      },
      count: function (M) {
        var U = 0;
        return (
          we(M, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (M) {
        return (
          we(M, function (U) {
            return U;
          }) || []
        );
      },
      only: function (M) {
        if (!G(M))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return M;
      },
    }),
    (ge.Component = k),
    (ge.Fragment = t),
    (ge.Profiler = s),
    (ge.PureComponent = C),
    (ge.StrictMode = r),
    (ge.Suspense = f),
    (ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q),
    (ge.act = Z),
    (ge.cloneElement = function (M, U, le) {
      if (M == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            M +
            "."
        );
      var ce = x({}, M.props),
        me = M.key,
        pe = M.ref,
        Me = M._owner;
      if (U != null) {
        if (
          (U.ref !== void 0 && ((pe = U.ref), (Me = W.current)),
          U.key !== void 0 && (me = "" + U.key),
          M.type && M.type.defaultProps)
        )
          var Ce = M.type.defaultProps;
        for (ze in U)
          A.call(U, ze) &&
            !H.hasOwnProperty(ze) &&
            (ce[ze] = U[ze] === void 0 && Ce !== void 0 ? Ce[ze] : U[ze]);
      }
      var ze = arguments.length - 2;
      if (ze === 1) ce.children = le;
      else if (1 < ze) {
        Ce = Array(ze);
        for (var Pt = 0; Pt < ze; Pt++) Ce[Pt] = arguments[Pt + 2];
        ce.children = Ce;
      }
      return {
        $$typeof: n,
        type: M.type,
        key: me,
        ref: pe,
        props: ce,
        _owner: Me,
      };
    }),
    (ge.createContext = function (M) {
      return (
        (M = {
          $$typeof: u,
          _currentValue: M,
          _currentValue2: M,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (M.Provider = { $$typeof: a, _context: M }),
        (M.Consumer = M)
      );
    }),
    (ge.createElement = N),
    (ge.createFactory = function (M) {
      var U = N.bind(null, M);
      return (U.type = M), U;
    }),
    (ge.createRef = function () {
      return { current: null };
    }),
    (ge.forwardRef = function (M) {
      return { $$typeof: c, render: M };
    }),
    (ge.isValidElement = G),
    (ge.lazy = function (M) {
      return { $$typeof: m, _payload: { _status: -1, _result: M }, _init: ve };
    }),
    (ge.memo = function (M, U) {
      return { $$typeof: h, type: M, compare: U === void 0 ? null : U };
    }),
    (ge.startTransition = function (M) {
      var U = $.transition;
      $.transition = {};
      try {
        M();
      } finally {
        $.transition = U;
      }
    }),
    (ge.unstable_act = Z),
    (ge.useCallback = function (M, U) {
      return ye.current.useCallback(M, U);
    }),
    (ge.useContext = function (M) {
      return ye.current.useContext(M);
    }),
    (ge.useDebugValue = function () {}),
    (ge.useDeferredValue = function (M) {
      return ye.current.useDeferredValue(M);
    }),
    (ge.useEffect = function (M, U) {
      return ye.current.useEffect(M, U);
    }),
    (ge.useId = function () {
      return ye.current.useId();
    }),
    (ge.useImperativeHandle = function (M, U, le) {
      return ye.current.useImperativeHandle(M, U, le);
    }),
    (ge.useInsertionEffect = function (M, U) {
      return ye.current.useInsertionEffect(M, U);
    }),
    (ge.useLayoutEffect = function (M, U) {
      return ye.current.useLayoutEffect(M, U);
    }),
    (ge.useMemo = function (M, U) {
      return ye.current.useMemo(M, U);
    }),
    (ge.useReducer = function (M, U, le) {
      return ye.current.useReducer(M, U, le);
    }),
    (ge.useRef = function (M) {
      return ye.current.useRef(M);
    }),
    (ge.useState = function (M) {
      return ye.current.useState(M);
    }),
    (ge.useSyncExternalStore = function (M, U, le) {
      return ye.current.useSyncExternalStore(M, U, le);
    }),
    (ge.useTransition = function () {
      return ye.current.useTransition();
    }),
    (ge.version = "18.3.1"),
    ge
  );
}
var Hp;
function od() {
  return Hp || ((Hp = 1), (lc.exports = Uv())), lc.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bp;
function $v() {
  if (Bp) return ds;
  Bp = 1;
  var n = od(),
    e = Symbol.for("react.element"),
    t = Symbol.for("react.fragment"),
    r = Object.prototype.hasOwnProperty,
    s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(c, f, h) {
    var m,
      y = {},
      w = null,
      v = null;
    h !== void 0 && (w = "" + h),
      f.key !== void 0 && (w = "" + f.key),
      f.ref !== void 0 && (v = f.ref);
    for (m in f) r.call(f, m) && !a.hasOwnProperty(m) && (y[m] = f[m]);
    if (c && c.defaultProps)
      for (m in ((f = c.defaultProps), f)) y[m] === void 0 && (y[m] = f[m]);
    return {
      $$typeof: e,
      type: c,
      key: w,
      ref: v,
      props: y,
      _owner: s.current,
    };
  }
  return (ds.Fragment = t), (ds.jsx = u), (ds.jsxs = u), ds;
}
var Up;
function Vv() {
  return Up || ((Up = 1), (ac.exports = $v())), ac.exports;
}
var z = Vv(),
  D = od();
const ad = Bv(D);
var ha = {},
  uc = { exports: {} },
  bt = {},
  cc = { exports: {} },
  dc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $p;
function Yv() {
  return (
    $p ||
      (($p = 1),
      (function (n) {
        function e($, Q) {
          var Z = $.length;
          $.push(Q);
          e: for (; 0 < Z; ) {
            var M = (Z - 1) >>> 1,
              U = $[M];
            if (0 < s(U, Q)) ($[M] = Q), ($[Z] = U), (Z = M);
            else break e;
          }
        }
        function t($) {
          return $.length === 0 ? null : $[0];
        }
        function r($) {
          if ($.length === 0) return null;
          var Q = $[0],
            Z = $.pop();
          if (Z !== Q) {
            $[0] = Z;
            e: for (var M = 0, U = $.length, le = U >>> 1; M < le; ) {
              var ce = 2 * (M + 1) - 1,
                me = $[ce],
                pe = ce + 1,
                Me = $[pe];
              if (0 > s(me, Z))
                pe < U && 0 > s(Me, me)
                  ? (($[M] = Me), ($[pe] = Z), (M = pe))
                  : (($[M] = me), ($[ce] = Z), (M = ce));
              else if (pe < U && 0 > s(Me, Z))
                ($[M] = Me), ($[pe] = Z), (M = pe);
              else break e;
            }
          }
          return Q;
        }
        function s($, Q) {
          var Z = $.sortIndex - Q.sortIndex;
          return Z !== 0 ? Z : $.id - Q.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var a = performance;
          n.unstable_now = function () {
            return a.now();
          };
        } else {
          var u = Date,
            c = u.now();
          n.unstable_now = function () {
            return u.now() - c;
          };
        }
        var f = [],
          h = [],
          m = 1,
          y = null,
          w = 3,
          v = !1,
          x = !1,
          b = !1,
          k = typeof setTimeout == "function" ? setTimeout : null,
          S = typeof clearTimeout == "function" ? clearTimeout : null,
          C = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function O($) {
          for (var Q = t(h); Q !== null; ) {
            if (Q.callback === null) r(h);
            else if (Q.startTime <= $)
              r(h), (Q.sortIndex = Q.expirationTime), e(f, Q);
            else break;
            Q = t(h);
          }
        }
        function R($) {
          if (((b = !1), O($), !x))
            if (t(f) !== null) (x = !0), ve(A);
            else {
              var Q = t(h);
              Q !== null && ye(R, Q.startTime - $);
            }
        }
        function A($, Q) {
          (x = !1), b && ((b = !1), S(N), (N = -1)), (v = !0);
          var Z = w;
          try {
            for (
              O(Q), y = t(f);
              y !== null && (!(y.expirationTime > Q) || ($ && !ne()));

            ) {
              var M = y.callback;
              if (typeof M == "function") {
                (y.callback = null), (w = y.priorityLevel);
                var U = M(y.expirationTime <= Q);
                (Q = n.unstable_now()),
                  typeof U == "function"
                    ? (y.callback = U)
                    : y === t(f) && r(f),
                  O(Q);
              } else r(f);
              y = t(f);
            }
            if (y !== null) var le = !0;
            else {
              var ce = t(h);
              ce !== null && ye(R, ce.startTime - Q), (le = !1);
            }
            return le;
          } finally {
            (y = null), (w = Z), (v = !1);
          }
        }
        var W = !1,
          H = null,
          N = -1,
          B = 5,
          G = -1;
        function ne() {
          return !(n.unstable_now() - G < B);
        }
        function re() {
          if (H !== null) {
            var $ = n.unstable_now();
            G = $;
            var Q = !0;
            try {
              Q = H(!0, $);
            } finally {
              Q ? he() : ((W = !1), (H = null));
            }
          } else W = !1;
        }
        var he;
        if (typeof C == "function")
          he = function () {
            C(re);
          };
        else if (typeof MessageChannel < "u") {
          var Ee = new MessageChannel(),
            we = Ee.port2;
          (Ee.port1.onmessage = re),
            (he = function () {
              we.postMessage(null);
            });
        } else
          he = function () {
            k(re, 0);
          };
        function ve($) {
          (H = $), W || ((W = !0), he());
        }
        function ye($, Q) {
          N = k(function () {
            $(n.unstable_now());
          }, Q);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function ($) {
            $.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            x || v || ((x = !0), ve(A));
          }),
          (n.unstable_forceFrameRate = function ($) {
            0 > $ || 125 < $
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (B = 0 < $ ? Math.floor(1e3 / $) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return t(f);
          }),
          (n.unstable_next = function ($) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var Q = 3;
                break;
              default:
                Q = w;
            }
            var Z = w;
            w = Q;
            try {
              return $();
            } finally {
              w = Z;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function ($, Q) {
            switch ($) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                $ = 3;
            }
            var Z = w;
            w = $;
            try {
              return Q();
            } finally {
              w = Z;
            }
          }),
          (n.unstable_scheduleCallback = function ($, Q, Z) {
            var M = n.unstable_now();
            switch (
              (typeof Z == "object" && Z !== null
                ? ((Z = Z.delay),
                  (Z = typeof Z == "number" && 0 < Z ? M + Z : M))
                : (Z = M),
              $)
            ) {
              case 1:
                var U = -1;
                break;
              case 2:
                U = 250;
                break;
              case 5:
                U = 1073741823;
                break;
              case 4:
                U = 1e4;
                break;
              default:
                U = 5e3;
            }
            return (
              (U = Z + U),
              ($ = {
                id: m++,
                callback: Q,
                priorityLevel: $,
                startTime: Z,
                expirationTime: U,
                sortIndex: -1,
              }),
              Z > M
                ? (($.sortIndex = Z),
                  e(h, $),
                  t(f) === null &&
                    $ === t(h) &&
                    (b ? (S(N), (N = -1)) : (b = !0), ye(R, Z - M)))
                : (($.sortIndex = U), e(f, $), x || v || ((x = !0), ve(A))),
              $
            );
          }),
          (n.unstable_shouldYield = ne),
          (n.unstable_wrapCallback = function ($) {
            var Q = w;
            return function () {
              var Z = w;
              w = Q;
              try {
                return $.apply(this, arguments);
              } finally {
                w = Z;
              }
            };
          });
      })(dc)),
    dc
  );
}
var Vp;
function Kv() {
  return Vp || ((Vp = 1), (cc.exports = Yv())), cc.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yp;
function Xv() {
  if (Yp) return bt;
  Yp = 1;
  var n = od(),
    e = Kv();
  function t(i) {
    for (
      var o = "https://reactjs.org/docs/error-decoder.html?invariant=" + i,
        l = 1;
      l < arguments.length;
      l++
    )
      o += "&args[]=" + encodeURIComponent(arguments[l]);
    return (
      "Minified React error #" +
      i +
      "; visit " +
      o +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var r = new Set(),
    s = {};
  function a(i, o) {
    u(i, o), u(i + "Capture", o);
  }
  function u(i, o) {
    for (s[i] = o, i = 0; i < o.length; i++) r.add(o[i]);
  }
  var c = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    f = Object.prototype.hasOwnProperty,
    h =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    m = {},
    y = {};
  function w(i) {
    return f.call(y, i)
      ? !0
      : f.call(m, i)
      ? !1
      : h.test(i)
      ? (y[i] = !0)
      : ((m[i] = !0), !1);
  }
  function v(i, o, l, d) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof o) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return d
          ? !1
          : l !== null
          ? !l.acceptsBooleans
          : ((i = i.toLowerCase().slice(0, 5)), i !== "data-" && i !== "aria-");
      default:
        return !1;
    }
  }
  function x(i, o, l, d) {
    if (o === null || typeof o > "u" || v(i, o, l, d)) return !0;
    if (d) return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !o;
        case 4:
          return o === !1;
        case 5:
          return isNaN(o);
        case 6:
          return isNaN(o) || 1 > o;
      }
    return !1;
  }
  function b(i, o, l, d, p, g, _) {
    (this.acceptsBooleans = o === 2 || o === 3 || o === 4),
      (this.attributeName = d),
      (this.attributeNamespace = p),
      (this.mustUseProperty = l),
      (this.propertyName = i),
      (this.type = o),
      (this.sanitizeURL = g),
      (this.removeEmptyString = _);
  }
  var k = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (i) {
      k[i] = new b(i, 0, !1, i, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (i) {
      var o = i[0];
      k[o] = new b(o, 1, !1, i[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      i
    ) {
      k[i] = new b(i, 2, !1, i.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (i) {
      k[i] = new b(i, 2, !1, i, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (i) {
        k[i] = new b(i, 3, !1, i.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (i) {
      k[i] = new b(i, 3, !0, i, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (i) {
      k[i] = new b(i, 4, !1, i, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (i) {
      k[i] = new b(i, 6, !1, i, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (i) {
      k[i] = new b(i, 5, !1, i.toLowerCase(), null, !1, !1);
    });
  var S = /[\-:]([a-z])/g;
  function C(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (i) {
      var o = i.replace(S, C);
      k[o] = new b(o, 1, !1, i, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (i) {
        var o = i.replace(S, C);
        k[o] = new b(o, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (i) {
      var o = i.replace(S, C);
      k[o] = new b(o, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (i) {
      k[i] = new b(i, 1, !1, i.toLowerCase(), null, !1, !1);
    }),
    (k.xlinkHref = new b(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (i) {
      k[i] = new b(i, 1, !1, i.toLowerCase(), null, !0, !0);
    });
  function O(i, o, l, d) {
    var p = k.hasOwnProperty(o) ? k[o] : null;
    (p !== null
      ? p.type !== 0
      : d ||
        !(2 < o.length) ||
        (o[0] !== "o" && o[0] !== "O") ||
        (o[1] !== "n" && o[1] !== "N")) &&
      (x(o, l, p, d) && (l = null),
      d || p === null
        ? w(o) &&
          (l === null ? i.removeAttribute(o) : i.setAttribute(o, "" + l))
        : p.mustUseProperty
        ? (i[p.propertyName] = l === null ? (p.type === 3 ? !1 : "") : l)
        : ((o = p.attributeName),
          (d = p.attributeNamespace),
          l === null
            ? i.removeAttribute(o)
            : ((p = p.type),
              (l = p === 3 || (p === 4 && l === !0) ? "" : "" + l),
              d ? i.setAttributeNS(d, o, l) : i.setAttribute(o, l))));
  }
  var R = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    A = Symbol.for("react.element"),
    W = Symbol.for("react.portal"),
    H = Symbol.for("react.fragment"),
    N = Symbol.for("react.strict_mode"),
    B = Symbol.for("react.profiler"),
    G = Symbol.for("react.provider"),
    ne = Symbol.for("react.context"),
    re = Symbol.for("react.forward_ref"),
    he = Symbol.for("react.suspense"),
    Ee = Symbol.for("react.suspense_list"),
    we = Symbol.for("react.memo"),
    ve = Symbol.for("react.lazy"),
    ye = Symbol.for("react.offscreen"),
    $ = Symbol.iterator;
  function Q(i) {
    return i === null || typeof i != "object"
      ? null
      : ((i = ($ && i[$]) || i["@@iterator"]),
        typeof i == "function" ? i : null);
  }
  var Z = Object.assign,
    M;
  function U(i) {
    if (M === void 0)
      try {
        throw Error();
      } catch (l) {
        var o = l.stack.trim().match(/\n( *(at )?)/);
        M = (o && o[1]) || "";
      }
    return (
      `
` +
      M +
      i
    );
  }
  var le = !1;
  function ce(i, o) {
    if (!i || le) return "";
    le = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (o)
        if (
          ((o = function () {
            throw Error();
          }),
          Object.defineProperty(o.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(o, []);
          } catch (F) {
            var d = F;
          }
          Reflect.construct(i, [], o);
        } else {
          try {
            o.call();
          } catch (F) {
            d = F;
          }
          i.call(o.prototype);
        }
      else {
        try {
          throw Error();
        } catch (F) {
          d = F;
        }
        i();
      }
    } catch (F) {
      if (F && d && typeof F.stack == "string") {
        for (
          var p = F.stack.split(`
`),
            g = d.stack.split(`
`),
            _ = p.length - 1,
            E = g.length - 1;
          1 <= _ && 0 <= E && p[_] !== g[E];

        )
          E--;
        for (; 1 <= _ && 0 <= E; _--, E--)
          if (p[_] !== g[E]) {
            if (_ !== 1 || E !== 1)
              do
                if ((_--, E--, 0 > E || p[_] !== g[E])) {
                  var P =
                    `
` + p[_].replace(" at new ", " at ");
                  return (
                    i.displayName &&
                      P.includes("<anonymous>") &&
                      (P = P.replace("<anonymous>", i.displayName)),
                    P
                  );
                }
              while (1 <= _ && 0 <= E);
            break;
          }
      }
    } finally {
      (le = !1), (Error.prepareStackTrace = l);
    }
    return (i = i ? i.displayName || i.name : "") ? U(i) : "";
  }
  function me(i) {
    switch (i.tag) {
      case 5:
        return U(i.type);
      case 16:
        return U("Lazy");
      case 13:
        return U("Suspense");
      case 19:
        return U("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (i = ce(i.type, !1)), i;
      case 11:
        return (i = ce(i.type.render, !1)), i;
      case 1:
        return (i = ce(i.type, !0)), i;
      default:
        return "";
    }
  }
  function pe(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case H:
        return "Fragment";
      case W:
        return "Portal";
      case B:
        return "Profiler";
      case N:
        return "StrictMode";
      case he:
        return "Suspense";
      case Ee:
        return "SuspenseList";
    }
    if (typeof i == "object")
      switch (i.$$typeof) {
        case ne:
          return (i.displayName || "Context") + ".Consumer";
        case G:
          return (i._context.displayName || "Context") + ".Provider";
        case re:
          var o = i.render;
          return (
            (i = i.displayName),
            i ||
              ((i = o.displayName || o.name || ""),
              (i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef")),
            i
          );
        case we:
          return (
            (o = i.displayName || null), o !== null ? o : pe(i.type) || "Memo"
          );
        case ve:
          (o = i._payload), (i = i._init);
          try {
            return pe(i(o));
          } catch {}
      }
    return null;
  }
  function Me(i) {
    var o = i.type;
    switch (i.tag) {
      case 24:
        return "Cache";
      case 9:
        return (o.displayName || "Context") + ".Consumer";
      case 10:
        return (o._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (i = o.render),
          (i = i.displayName || i.name || ""),
          o.displayName || (i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return o;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return pe(o);
      case 8:
        return o === N ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof o == "function") return o.displayName || o.name || null;
        if (typeof o == "string") return o;
    }
    return null;
  }
  function Ce(i) {
    switch (typeof i) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return i;
      case "object":
        return i;
      default:
        return "";
    }
  }
  function ze(i) {
    var o = i.type;
    return (
      (i = i.nodeName) &&
      i.toLowerCase() === "input" &&
      (o === "checkbox" || o === "radio")
    );
  }
  function Pt(i) {
    var o = ze(i) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(i.constructor.prototype, o),
      d = "" + i[o];
    if (
      !i.hasOwnProperty(o) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var p = l.get,
        g = l.set;
      return (
        Object.defineProperty(i, o, {
          configurable: !0,
          get: function () {
            return p.call(this);
          },
          set: function (_) {
            (d = "" + _), g.call(this, _);
          },
        }),
        Object.defineProperty(i, o, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return d;
          },
          setValue: function (_) {
            d = "" + _;
          },
          stopTracking: function () {
            (i._valueTracker = null), delete i[o];
          },
        }
      );
    }
  }
  function no(i) {
    i._valueTracker || (i._valueTracker = Pt(i));
  }
  function Vd(i) {
    if (!i) return !1;
    var o = i._valueTracker;
    if (!o) return !0;
    var l = o.getValue(),
      d = "";
    return (
      i && (d = ze(i) ? (i.checked ? "true" : "false") : i.value),
      (i = d),
      i !== l ? (o.setValue(i), !0) : !1
    );
  }
  function ro(i) {
    if (
      ((i = i || (typeof document < "u" ? document : void 0)), typeof i > "u")
    )
      return null;
    try {
      return i.activeElement || i.body;
    } catch {
      return i.body;
    }
  }
  function pl(i, o) {
    var l = o.checked;
    return Z({}, o, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: l ?? i._wrapperState.initialChecked,
    });
  }
  function Yd(i, o) {
    var l = o.defaultValue == null ? "" : o.defaultValue,
      d = o.checked != null ? o.checked : o.defaultChecked;
    (l = Ce(o.value != null ? o.value : l)),
      (i._wrapperState = {
        initialChecked: d,
        initialValue: l,
        controlled:
          o.type === "checkbox" || o.type === "radio"
            ? o.checked != null
            : o.value != null,
      });
  }
  function Kd(i, o) {
    (o = o.checked), o != null && O(i, "checked", o, !1);
  }
  function ml(i, o) {
    Kd(i, o);
    var l = Ce(o.value),
      d = o.type;
    if (l != null)
      d === "number"
        ? ((l === 0 && i.value === "") || i.value != l) && (i.value = "" + l)
        : i.value !== "" + l && (i.value = "" + l);
    else if (d === "submit" || d === "reset") {
      i.removeAttribute("value");
      return;
    }
    o.hasOwnProperty("value")
      ? gl(i, o.type, l)
      : o.hasOwnProperty("defaultValue") && gl(i, o.type, Ce(o.defaultValue)),
      o.checked == null &&
        o.defaultChecked != null &&
        (i.defaultChecked = !!o.defaultChecked);
  }
  function Xd(i, o, l) {
    if (o.hasOwnProperty("value") || o.hasOwnProperty("defaultValue")) {
      var d = o.type;
      if (
        !(
          (d !== "submit" && d !== "reset") ||
          (o.value !== void 0 && o.value !== null)
        )
      )
        return;
      (o = "" + i._wrapperState.initialValue),
        l || o === i.value || (i.value = o),
        (i.defaultValue = o);
    }
    (l = i.name),
      l !== "" && (i.name = ""),
      (i.defaultChecked = !!i._wrapperState.initialChecked),
      l !== "" && (i.name = l);
  }
  function gl(i, o, l) {
    (o !== "number" || ro(i.ownerDocument) !== i) &&
      (l == null
        ? (i.defaultValue = "" + i._wrapperState.initialValue)
        : i.defaultValue !== "" + l && (i.defaultValue = "" + l));
  }
  var Ci = Array.isArray;
  function jr(i, o, l, d) {
    if (((i = i.options), o)) {
      o = {};
      for (var p = 0; p < l.length; p++) o["$" + l[p]] = !0;
      for (l = 0; l < i.length; l++)
        (p = o.hasOwnProperty("$" + i[l].value)),
          i[l].selected !== p && (i[l].selected = p),
          p && d && (i[l].defaultSelected = !0);
    } else {
      for (l = "" + Ce(l), o = null, p = 0; p < i.length; p++) {
        if (i[p].value === l) {
          (i[p].selected = !0), d && (i[p].defaultSelected = !0);
          return;
        }
        o !== null || i[p].disabled || (o = i[p]);
      }
      o !== null && (o.selected = !0);
    }
  }
  function yl(i, o) {
    if (o.dangerouslySetInnerHTML != null) throw Error(t(91));
    return Z({}, o, {
      value: void 0,
      defaultValue: void 0,
      children: "" + i._wrapperState.initialValue,
    });
  }
  function qd(i, o) {
    var l = o.value;
    if (l == null) {
      if (((l = o.children), (o = o.defaultValue), l != null)) {
        if (o != null) throw Error(t(92));
        if (Ci(l)) {
          if (1 < l.length) throw Error(t(93));
          l = l[0];
        }
        o = l;
      }
      o == null && (o = ""), (l = o);
    }
    i._wrapperState = { initialValue: Ce(l) };
  }
  function Gd(i, o) {
    var l = Ce(o.value),
      d = Ce(o.defaultValue);
    l != null &&
      ((l = "" + l),
      l !== i.value && (i.value = l),
      o.defaultValue == null && i.defaultValue !== l && (i.defaultValue = l)),
      d != null && (i.defaultValue = "" + d);
  }
  function Qd(i) {
    var o = i.textContent;
    o === i._wrapperState.initialValue &&
      o !== "" &&
      o !== null &&
      (i.value = o);
  }
  function Zd(i) {
    switch (i) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function wl(i, o) {
    return i == null || i === "http://www.w3.org/1999/xhtml"
      ? Zd(o)
      : i === "http://www.w3.org/2000/svg" && o === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : i;
  }
  var io,
    Jd = (function (i) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (o, l, d, p) {
            MSApp.execUnsafeLocalFunction(function () {
              return i(o, l, d, p);
            });
          }
        : i;
    })(function (i, o) {
      if (i.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in i)
        i.innerHTML = o;
      else {
        for (
          io = io || document.createElement("div"),
            io.innerHTML = "<svg>" + o.valueOf().toString() + "</svg>",
            o = io.firstChild;
          i.firstChild;

        )
          i.removeChild(i.firstChild);
        for (; o.firstChild; ) i.appendChild(o.firstChild);
      }
    });
  function Pi(i, o) {
    if (o) {
      var l = i.firstChild;
      if (l && l === i.lastChild && l.nodeType === 3) {
        l.nodeValue = o;
        return;
      }
    }
    i.textContent = o;
  }
  var Ti = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    V0 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ti).forEach(function (i) {
    V0.forEach(function (o) {
      (o = o + i.charAt(0).toUpperCase() + i.substring(1)), (Ti[o] = Ti[i]);
    });
  });
  function ef(i, o, l) {
    return o == null || typeof o == "boolean" || o === ""
      ? ""
      : l || typeof o != "number" || o === 0 || (Ti.hasOwnProperty(i) && Ti[i])
      ? ("" + o).trim()
      : o + "px";
  }
  function tf(i, o) {
    i = i.style;
    for (var l in o)
      if (o.hasOwnProperty(l)) {
        var d = l.indexOf("--") === 0,
          p = ef(l, o[l], d);
        l === "float" && (l = "cssFloat"), d ? i.setProperty(l, p) : (i[l] = p);
      }
  }
  var Y0 = Z(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function vl(i, o) {
    if (o) {
      if (Y0[i] && (o.children != null || o.dangerouslySetInnerHTML != null))
        throw Error(t(137, i));
      if (o.dangerouslySetInnerHTML != null) {
        if (o.children != null) throw Error(t(60));
        if (
          typeof o.dangerouslySetInnerHTML != "object" ||
          !("__html" in o.dangerouslySetInnerHTML)
        )
          throw Error(t(61));
      }
      if (o.style != null && typeof o.style != "object") throw Error(t(62));
    }
  }
  function xl(i, o) {
    if (i.indexOf("-") === -1) return typeof o.is == "string";
    switch (i) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var _l = null;
  function kl(i) {
    return (
      (i = i.target || i.srcElement || window),
      i.correspondingUseElement && (i = i.correspondingUseElement),
      i.nodeType === 3 ? i.parentNode : i
    );
  }
  var bl = null,
    Wr = null,
    Hr = null;
  function nf(i) {
    if ((i = Gi(i))) {
      if (typeof bl != "function") throw Error(t(280));
      var o = i.stateNode;
      o && ((o = To(o)), bl(i.stateNode, i.type, o));
    }
  }
  function rf(i) {
    Wr ? (Hr ? Hr.push(i) : (Hr = [i])) : (Wr = i);
  }
  function sf() {
    if (Wr) {
      var i = Wr,
        o = Hr;
      if (((Hr = Wr = null), nf(i), o)) for (i = 0; i < o.length; i++) nf(o[i]);
    }
  }
  function of(i, o) {
    return i(o);
  }
  function af() {}
  var Sl = !1;
  function lf(i, o, l) {
    if (Sl) return i(o, l);
    Sl = !0;
    try {
      return of(i, o, l);
    } finally {
      (Sl = !1), (Wr !== null || Hr !== null) && (af(), sf());
    }
  }
  function Oi(i, o) {
    var l = i.stateNode;
    if (l === null) return null;
    var d = To(l);
    if (d === null) return null;
    l = d[o];
    e: switch (o) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) ||
          ((i = i.type),
          (d = !(
            i === "button" ||
            i === "input" ||
            i === "select" ||
            i === "textarea"
          ))),
          (i = !d);
        break e;
      default:
        i = !1;
    }
    if (i) return null;
    if (l && typeof l != "function") throw Error(t(231, o, typeof l));
    return l;
  }
  var El = !1;
  if (c)
    try {
      var Mi = {};
      Object.defineProperty(Mi, "passive", {
        get: function () {
          El = !0;
        },
      }),
        window.addEventListener("test", Mi, Mi),
        window.removeEventListener("test", Mi, Mi);
    } catch {
      El = !1;
    }
  function K0(i, o, l, d, p, g, _, E, P) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      o.apply(l, F);
    } catch (K) {
      this.onError(K);
    }
  }
  var Ri = !1,
    so = null,
    oo = !1,
    Cl = null,
    X0 = {
      onError: function (i) {
        (Ri = !0), (so = i);
      },
    };
  function q0(i, o, l, d, p, g, _, E, P) {
    (Ri = !1), (so = null), K0.apply(X0, arguments);
  }
  function G0(i, o, l, d, p, g, _, E, P) {
    if ((q0.apply(this, arguments), Ri)) {
      if (Ri) {
        var F = so;
        (Ri = !1), (so = null);
      } else throw Error(t(198));
      oo || ((oo = !0), (Cl = F));
    }
  }
  function or(i) {
    var o = i,
      l = i;
    if (i.alternate) for (; o.return; ) o = o.return;
    else {
      i = o;
      do (o = i), o.flags & 4098 && (l = o.return), (i = o.return);
      while (i);
    }
    return o.tag === 3 ? l : null;
  }
  function uf(i) {
    if (i.tag === 13) {
      var o = i.memoizedState;
      if (
        (o === null && ((i = i.alternate), i !== null && (o = i.memoizedState)),
        o !== null)
      )
        return o.dehydrated;
    }
    return null;
  }
  function cf(i) {
    if (or(i) !== i) throw Error(t(188));
  }
  function Q0(i) {
    var o = i.alternate;
    if (!o) {
      if (((o = or(i)), o === null)) throw Error(t(188));
      return o !== i ? null : i;
    }
    for (var l = i, d = o; ; ) {
      var p = l.return;
      if (p === null) break;
      var g = p.alternate;
      if (g === null) {
        if (((d = p.return), d !== null)) {
          l = d;
          continue;
        }
        break;
      }
      if (p.child === g.child) {
        for (g = p.child; g; ) {
          if (g === l) return cf(p), i;
          if (g === d) return cf(p), o;
          g = g.sibling;
        }
        throw Error(t(188));
      }
      if (l.return !== d.return) (l = p), (d = g);
      else {
        for (var _ = !1, E = p.child; E; ) {
          if (E === l) {
            (_ = !0), (l = p), (d = g);
            break;
          }
          if (E === d) {
            (_ = !0), (d = p), (l = g);
            break;
          }
          E = E.sibling;
        }
        if (!_) {
          for (E = g.child; E; ) {
            if (E === l) {
              (_ = !0), (l = g), (d = p);
              break;
            }
            if (E === d) {
              (_ = !0), (d = g), (l = p);
              break;
            }
            E = E.sibling;
          }
          if (!_) throw Error(t(189));
        }
      }
      if (l.alternate !== d) throw Error(t(190));
    }
    if (l.tag !== 3) throw Error(t(188));
    return l.stateNode.current === l ? i : o;
  }
  function df(i) {
    return (i = Q0(i)), i !== null ? ff(i) : null;
  }
  function ff(i) {
    if (i.tag === 5 || i.tag === 6) return i;
    for (i = i.child; i !== null; ) {
      var o = ff(i);
      if (o !== null) return o;
      i = i.sibling;
    }
    return null;
  }
  var hf = e.unstable_scheduleCallback,
    pf = e.unstable_cancelCallback,
    Z0 = e.unstable_shouldYield,
    J0 = e.unstable_requestPaint,
    Ye = e.unstable_now,
    ew = e.unstable_getCurrentPriorityLevel,
    Pl = e.unstable_ImmediatePriority,
    mf = e.unstable_UserBlockingPriority,
    ao = e.unstable_NormalPriority,
    tw = e.unstable_LowPriority,
    gf = e.unstable_IdlePriority,
    lo = null,
    Jt = null;
  function nw(i) {
    if (Jt && typeof Jt.onCommitFiberRoot == "function")
      try {
        Jt.onCommitFiberRoot(lo, i, void 0, (i.current.flags & 128) === 128);
      } catch {}
  }
  var $t = Math.clz32 ? Math.clz32 : sw,
    rw = Math.log,
    iw = Math.LN2;
  function sw(i) {
    return (i >>>= 0), i === 0 ? 32 : (31 - ((rw(i) / iw) | 0)) | 0;
  }
  var uo = 64,
    co = 4194304;
  function Di(i) {
    switch (i & -i) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return i & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return i & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return i;
    }
  }
  function fo(i, o) {
    var l = i.pendingLanes;
    if (l === 0) return 0;
    var d = 0,
      p = i.suspendedLanes,
      g = i.pingedLanes,
      _ = l & 268435455;
    if (_ !== 0) {
      var E = _ & ~p;
      E !== 0 ? (d = Di(E)) : ((g &= _), g !== 0 && (d = Di(g)));
    } else (_ = l & ~p), _ !== 0 ? (d = Di(_)) : g !== 0 && (d = Di(g));
    if (d === 0) return 0;
    if (
      o !== 0 &&
      o !== d &&
      !(o & p) &&
      ((p = d & -d), (g = o & -o), p >= g || (p === 16 && (g & 4194240) !== 0))
    )
      return o;
    if ((d & 4 && (d |= l & 16), (o = i.entangledLanes), o !== 0))
      for (i = i.entanglements, o &= d; 0 < o; )
        (l = 31 - $t(o)), (p = 1 << l), (d |= i[l]), (o &= ~p);
    return d;
  }
  function ow(i, o) {
    switch (i) {
      case 1:
      case 2:
      case 4:
        return o + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return o + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function aw(i, o) {
    for (
      var l = i.suspendedLanes,
        d = i.pingedLanes,
        p = i.expirationTimes,
        g = i.pendingLanes;
      0 < g;

    ) {
      var _ = 31 - $t(g),
        E = 1 << _,
        P = p[_];
      P === -1
        ? (!(E & l) || E & d) && (p[_] = ow(E, o))
        : P <= o && (i.expiredLanes |= E),
        (g &= ~E);
    }
  }
  function Tl(i) {
    return (
      (i = i.pendingLanes & -1073741825),
      i !== 0 ? i : i & 1073741824 ? 1073741824 : 0
    );
  }
  function yf() {
    var i = uo;
    return (uo <<= 1), !(uo & 4194240) && (uo = 64), i;
  }
  function Ol(i) {
    for (var o = [], l = 0; 31 > l; l++) o.push(i);
    return o;
  }
  function Li(i, o, l) {
    (i.pendingLanes |= o),
      o !== 536870912 && ((i.suspendedLanes = 0), (i.pingedLanes = 0)),
      (i = i.eventTimes),
      (o = 31 - $t(o)),
      (i[o] = l);
  }
  function lw(i, o) {
    var l = i.pendingLanes & ~o;
    (i.pendingLanes = o),
      (i.suspendedLanes = 0),
      (i.pingedLanes = 0),
      (i.expiredLanes &= o),
      (i.mutableReadLanes &= o),
      (i.entangledLanes &= o),
      (o = i.entanglements);
    var d = i.eventTimes;
    for (i = i.expirationTimes; 0 < l; ) {
      var p = 31 - $t(l),
        g = 1 << p;
      (o[p] = 0), (d[p] = -1), (i[p] = -1), (l &= ~g);
    }
  }
  function Ml(i, o) {
    var l = (i.entangledLanes |= o);
    for (i = i.entanglements; l; ) {
      var d = 31 - $t(l),
        p = 1 << d;
      (p & o) | (i[d] & o) && (i[d] |= o), (l &= ~p);
    }
  }
  var Pe = 0;
  function wf(i) {
    return (
      (i &= -i), 1 < i ? (4 < i ? (i & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var vf,
    Rl,
    xf,
    _f,
    kf,
    Dl = !1,
    ho = [],
    In = null,
    Nn = null,
    zn = null,
    Ii = new Map(),
    Ni = new Map(),
    Fn = [],
    uw =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function bf(i, o) {
    switch (i) {
      case "focusin":
      case "focusout":
        In = null;
        break;
      case "dragenter":
      case "dragleave":
        Nn = null;
        break;
      case "mouseover":
      case "mouseout":
        zn = null;
        break;
      case "pointerover":
      case "pointerout":
        Ii.delete(o.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ni.delete(o.pointerId);
    }
  }
  function zi(i, o, l, d, p, g) {
    return i === null || i.nativeEvent !== g
      ? ((i = {
          blockedOn: o,
          domEventName: l,
          eventSystemFlags: d,
          nativeEvent: g,
          targetContainers: [p],
        }),
        o !== null && ((o = Gi(o)), o !== null && Rl(o)),
        i)
      : ((i.eventSystemFlags |= d),
        (o = i.targetContainers),
        p !== null && o.indexOf(p) === -1 && o.push(p),
        i);
  }
  function cw(i, o, l, d, p) {
    switch (o) {
      case "focusin":
        return (In = zi(In, i, o, l, d, p)), !0;
      case "dragenter":
        return (Nn = zi(Nn, i, o, l, d, p)), !0;
      case "mouseover":
        return (zn = zi(zn, i, o, l, d, p)), !0;
      case "pointerover":
        var g = p.pointerId;
        return Ii.set(g, zi(Ii.get(g) || null, i, o, l, d, p)), !0;
      case "gotpointercapture":
        return (
          (g = p.pointerId), Ni.set(g, zi(Ni.get(g) || null, i, o, l, d, p)), !0
        );
    }
    return !1;
  }
  function Sf(i) {
    var o = ar(i.target);
    if (o !== null) {
      var l = or(o);
      if (l !== null) {
        if (((o = l.tag), o === 13)) {
          if (((o = uf(l)), o !== null)) {
            (i.blockedOn = o),
              kf(i.priority, function () {
                xf(l);
              });
            return;
          }
        } else if (o === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          i.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    i.blockedOn = null;
  }
  function po(i) {
    if (i.blockedOn !== null) return !1;
    for (var o = i.targetContainers; 0 < o.length; ) {
      var l = Il(i.domEventName, i.eventSystemFlags, o[0], i.nativeEvent);
      if (l === null) {
        l = i.nativeEvent;
        var d = new l.constructor(l.type, l);
        (_l = d), l.target.dispatchEvent(d), (_l = null);
      } else return (o = Gi(l)), o !== null && Rl(o), (i.blockedOn = l), !1;
      o.shift();
    }
    return !0;
  }
  function Ef(i, o, l) {
    po(i) && l.delete(o);
  }
  function dw() {
    (Dl = !1),
      In !== null && po(In) && (In = null),
      Nn !== null && po(Nn) && (Nn = null),
      zn !== null && po(zn) && (zn = null),
      Ii.forEach(Ef),
      Ni.forEach(Ef);
  }
  function Fi(i, o) {
    i.blockedOn === o &&
      ((i.blockedOn = null),
      Dl ||
        ((Dl = !0),
        e.unstable_scheduleCallback(e.unstable_NormalPriority, dw)));
  }
  function Ai(i) {
    function o(p) {
      return Fi(p, i);
    }
    if (0 < ho.length) {
      Fi(ho[0], i);
      for (var l = 1; l < ho.length; l++) {
        var d = ho[l];
        d.blockedOn === i && (d.blockedOn = null);
      }
    }
    for (
      In !== null && Fi(In, i),
        Nn !== null && Fi(Nn, i),
        zn !== null && Fi(zn, i),
        Ii.forEach(o),
        Ni.forEach(o),
        l = 0;
      l < Fn.length;
      l++
    )
      (d = Fn[l]), d.blockedOn === i && (d.blockedOn = null);
    for (; 0 < Fn.length && ((l = Fn[0]), l.blockedOn === null); )
      Sf(l), l.blockedOn === null && Fn.shift();
  }
  var Br = R.ReactCurrentBatchConfig,
    mo = !0;
  function fw(i, o, l, d) {
    var p = Pe,
      g = Br.transition;
    Br.transition = null;
    try {
      (Pe = 1), Ll(i, o, l, d);
    } finally {
      (Pe = p), (Br.transition = g);
    }
  }
  function hw(i, o, l, d) {
    var p = Pe,
      g = Br.transition;
    Br.transition = null;
    try {
      (Pe = 4), Ll(i, o, l, d);
    } finally {
      (Pe = p), (Br.transition = g);
    }
  }
  function Ll(i, o, l, d) {
    if (mo) {
      var p = Il(i, o, l, d);
      if (p === null) Ql(i, o, d, go, l), bf(i, d);
      else if (cw(p, i, o, l, d)) d.stopPropagation();
      else if ((bf(i, d), o & 4 && -1 < uw.indexOf(i))) {
        for (; p !== null; ) {
          var g = Gi(p);
          if (
            (g !== null && vf(g),
            (g = Il(i, o, l, d)),
            g === null && Ql(i, o, d, go, l),
            g === p)
          )
            break;
          p = g;
        }
        p !== null && d.stopPropagation();
      } else Ql(i, o, d, null, l);
    }
  }
  var go = null;
  function Il(i, o, l, d) {
    if (((go = null), (i = kl(d)), (i = ar(i)), i !== null))
      if (((o = or(i)), o === null)) i = null;
      else if (((l = o.tag), l === 13)) {
        if (((i = uf(o)), i !== null)) return i;
        i = null;
      } else if (l === 3) {
        if (o.stateNode.current.memoizedState.isDehydrated)
          return o.tag === 3 ? o.stateNode.containerInfo : null;
        i = null;
      } else o !== i && (i = null);
    return (go = i), null;
  }
  function Cf(i) {
    switch (i) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ew()) {
          case Pl:
            return 1;
          case mf:
            return 4;
          case ao:
          case tw:
            return 16;
          case gf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var An = null,
    Nl = null,
    yo = null;
  function Pf() {
    if (yo) return yo;
    var i,
      o = Nl,
      l = o.length,
      d,
      p = "value" in An ? An.value : An.textContent,
      g = p.length;
    for (i = 0; i < l && o[i] === p[i]; i++);
    var _ = l - i;
    for (d = 1; d <= _ && o[l - d] === p[g - d]; d++);
    return (yo = p.slice(i, 1 < d ? 1 - d : void 0));
  }
  function wo(i) {
    var o = i.keyCode;
    return (
      "charCode" in i
        ? ((i = i.charCode), i === 0 && o === 13 && (i = 13))
        : (i = o),
      i === 10 && (i = 13),
      32 <= i || i === 13 ? i : 0
    );
  }
  function vo() {
    return !0;
  }
  function Tf() {
    return !1;
  }
  function Tt(i) {
    function o(l, d, p, g, _) {
      (this._reactName = l),
        (this._targetInst = p),
        (this.type = d),
        (this.nativeEvent = g),
        (this.target = _),
        (this.currentTarget = null);
      for (var E in i)
        i.hasOwnProperty(E) && ((l = i[E]), (this[E] = l ? l(g) : g[E]));
      return (
        (this.isDefaultPrevented = (
          g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1
        )
          ? vo
          : Tf),
        (this.isPropagationStopped = Tf),
        this
      );
    }
    return (
      Z(o.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = vo));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = vo));
        },
        persist: function () {},
        isPersistent: vo,
      }),
      o
    );
  }
  var Ur = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (i) {
        return i.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    zl = Tt(Ur),
    ji = Z({}, Ur, { view: 0, detail: 0 }),
    pw = Tt(ji),
    Fl,
    Al,
    Wi,
    xo = Z({}, ji, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Wl,
      button: 0,
      buttons: 0,
      relatedTarget: function (i) {
        return i.relatedTarget === void 0
          ? i.fromElement === i.srcElement
            ? i.toElement
            : i.fromElement
          : i.relatedTarget;
      },
      movementX: function (i) {
        return "movementX" in i
          ? i.movementX
          : (i !== Wi &&
              (Wi && i.type === "mousemove"
                ? ((Fl = i.screenX - Wi.screenX), (Al = i.screenY - Wi.screenY))
                : (Al = Fl = 0),
              (Wi = i)),
            Fl);
      },
      movementY: function (i) {
        return "movementY" in i ? i.movementY : Al;
      },
    }),
    Of = Tt(xo),
    mw = Z({}, xo, { dataTransfer: 0 }),
    gw = Tt(mw),
    yw = Z({}, ji, { relatedTarget: 0 }),
    jl = Tt(yw),
    ww = Z({}, Ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    vw = Tt(ww),
    xw = Z({}, Ur, {
      clipboardData: function (i) {
        return "clipboardData" in i ? i.clipboardData : window.clipboardData;
      },
    }),
    _w = Tt(xw),
    kw = Z({}, Ur, { data: 0 }),
    Mf = Tt(kw),
    bw = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Sw = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Ew = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Cw(i) {
    var o = this.nativeEvent;
    return o.getModifierState
      ? o.getModifierState(i)
      : (i = Ew[i])
      ? !!o[i]
      : !1;
  }
  function Wl() {
    return Cw;
  }
  var Pw = Z({}, ji, {
      key: function (i) {
        if (i.key) {
          var o = bw[i.key] || i.key;
          if (o !== "Unidentified") return o;
        }
        return i.type === "keypress"
          ? ((i = wo(i)), i === 13 ? "Enter" : String.fromCharCode(i))
          : i.type === "keydown" || i.type === "keyup"
          ? Sw[i.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Wl,
      charCode: function (i) {
        return i.type === "keypress" ? wo(i) : 0;
      },
      keyCode: function (i) {
        return i.type === "keydown" || i.type === "keyup" ? i.keyCode : 0;
      },
      which: function (i) {
        return i.type === "keypress"
          ? wo(i)
          : i.type === "keydown" || i.type === "keyup"
          ? i.keyCode
          : 0;
      },
    }),
    Tw = Tt(Pw),
    Ow = Z({}, xo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Rf = Tt(Ow),
    Mw = Z({}, ji, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Wl,
    }),
    Rw = Tt(Mw),
    Dw = Z({}, Ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Lw = Tt(Dw),
    Iw = Z({}, xo, {
      deltaX: function (i) {
        return "deltaX" in i
          ? i.deltaX
          : "wheelDeltaX" in i
          ? -i.wheelDeltaX
          : 0;
      },
      deltaY: function (i) {
        return "deltaY" in i
          ? i.deltaY
          : "wheelDeltaY" in i
          ? -i.wheelDeltaY
          : "wheelDelta" in i
          ? -i.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Nw = Tt(Iw),
    zw = [9, 13, 27, 32],
    Hl = c && "CompositionEvent" in window,
    Hi = null;
  c && "documentMode" in document && (Hi = document.documentMode);
  var Fw = c && "TextEvent" in window && !Hi,
    Df = c && (!Hl || (Hi && 8 < Hi && 11 >= Hi)),
    Lf = " ",
    If = !1;
  function Nf(i, o) {
    switch (i) {
      case "keyup":
        return zw.indexOf(o.keyCode) !== -1;
      case "keydown":
        return o.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function zf(i) {
    return (i = i.detail), typeof i == "object" && "data" in i ? i.data : null;
  }
  var $r = !1;
  function Aw(i, o) {
    switch (i) {
      case "compositionend":
        return zf(o);
      case "keypress":
        return o.which !== 32 ? null : ((If = !0), Lf);
      case "textInput":
        return (i = o.data), i === Lf && If ? null : i;
      default:
        return null;
    }
  }
  function jw(i, o) {
    if ($r)
      return i === "compositionend" || (!Hl && Nf(i, o))
        ? ((i = Pf()), (yo = Nl = An = null), ($r = !1), i)
        : null;
    switch (i) {
      case "paste":
        return null;
      case "keypress":
        if (!(o.ctrlKey || o.altKey || o.metaKey) || (o.ctrlKey && o.altKey)) {
          if (o.char && 1 < o.char.length) return o.char;
          if (o.which) return String.fromCharCode(o.which);
        }
        return null;
      case "compositionend":
        return Df && o.locale !== "ko" ? null : o.data;
      default:
        return null;
    }
  }
  var Ww = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ff(i) {
    var o = i && i.nodeName && i.nodeName.toLowerCase();
    return o === "input" ? !!Ww[i.type] : o === "textarea";
  }
  function Af(i, o, l, d) {
    rf(d),
      (o = Eo(o, "onChange")),
      0 < o.length &&
        ((l = new zl("onChange", "change", null, l, d)),
        i.push({ event: l, listeners: o }));
  }
  var Bi = null,
    Ui = null;
  function Hw(i) {
    nh(i, 0);
  }
  function _o(i) {
    var o = qr(i);
    if (Vd(o)) return i;
  }
  function Bw(i, o) {
    if (i === "change") return o;
  }
  var jf = !1;
  if (c) {
    var Bl;
    if (c) {
      var Ul = "oninput" in document;
      if (!Ul) {
        var Wf = document.createElement("div");
        Wf.setAttribute("oninput", "return;"),
          (Ul = typeof Wf.oninput == "function");
      }
      Bl = Ul;
    } else Bl = !1;
    jf = Bl && (!document.documentMode || 9 < document.documentMode);
  }
  function Hf() {
    Bi && (Bi.detachEvent("onpropertychange", Bf), (Ui = Bi = null));
  }
  function Bf(i) {
    if (i.propertyName === "value" && _o(Ui)) {
      var o = [];
      Af(o, Ui, i, kl(i)), lf(Hw, o);
    }
  }
  function Uw(i, o, l) {
    i === "focusin"
      ? (Hf(), (Bi = o), (Ui = l), Bi.attachEvent("onpropertychange", Bf))
      : i === "focusout" && Hf();
  }
  function $w(i) {
    if (i === "selectionchange" || i === "keyup" || i === "keydown")
      return _o(Ui);
  }
  function Vw(i, o) {
    if (i === "click") return _o(o);
  }
  function Yw(i, o) {
    if (i === "input" || i === "change") return _o(o);
  }
  function Kw(i, o) {
    return (i === o && (i !== 0 || 1 / i === 1 / o)) || (i !== i && o !== o);
  }
  var Vt = typeof Object.is == "function" ? Object.is : Kw;
  function $i(i, o) {
    if (Vt(i, o)) return !0;
    if (
      typeof i != "object" ||
      i === null ||
      typeof o != "object" ||
      o === null
    )
      return !1;
    var l = Object.keys(i),
      d = Object.keys(o);
    if (l.length !== d.length) return !1;
    for (d = 0; d < l.length; d++) {
      var p = l[d];
      if (!f.call(o, p) || !Vt(i[p], o[p])) return !1;
    }
    return !0;
  }
  function Uf(i) {
    for (; i && i.firstChild; ) i = i.firstChild;
    return i;
  }
  function $f(i, o) {
    var l = Uf(i);
    i = 0;
    for (var d; l; ) {
      if (l.nodeType === 3) {
        if (((d = i + l.textContent.length), i <= o && d >= o))
          return { node: l, offset: o - i };
        i = d;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Uf(l);
    }
  }
  function Vf(i, o) {
    return i && o
      ? i === o
        ? !0
        : i && i.nodeType === 3
        ? !1
        : o && o.nodeType === 3
        ? Vf(i, o.parentNode)
        : "contains" in i
        ? i.contains(o)
        : i.compareDocumentPosition
        ? !!(i.compareDocumentPosition(o) & 16)
        : !1
      : !1;
  }
  function Yf() {
    for (var i = window, o = ro(); o instanceof i.HTMLIFrameElement; ) {
      try {
        var l = typeof o.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) i = o.contentWindow;
      else break;
      o = ro(i.document);
    }
    return o;
  }
  function $l(i) {
    var o = i && i.nodeName && i.nodeName.toLowerCase();
    return (
      o &&
      ((o === "input" &&
        (i.type === "text" ||
          i.type === "search" ||
          i.type === "tel" ||
          i.type === "url" ||
          i.type === "password")) ||
        o === "textarea" ||
        i.contentEditable === "true")
    );
  }
  function Xw(i) {
    var o = Yf(),
      l = i.focusedElem,
      d = i.selectionRange;
    if (
      o !== l &&
      l &&
      l.ownerDocument &&
      Vf(l.ownerDocument.documentElement, l)
    ) {
      if (d !== null && $l(l)) {
        if (
          ((o = d.start),
          (i = d.end),
          i === void 0 && (i = o),
          "selectionStart" in l)
        )
          (l.selectionStart = o),
            (l.selectionEnd = Math.min(i, l.value.length));
        else if (
          ((i = ((o = l.ownerDocument || document) && o.defaultView) || window),
          i.getSelection)
        ) {
          i = i.getSelection();
          var p = l.textContent.length,
            g = Math.min(d.start, p);
          (d = d.end === void 0 ? g : Math.min(d.end, p)),
            !i.extend && g > d && ((p = d), (d = g), (g = p)),
            (p = $f(l, g));
          var _ = $f(l, d);
          p &&
            _ &&
            (i.rangeCount !== 1 ||
              i.anchorNode !== p.node ||
              i.anchorOffset !== p.offset ||
              i.focusNode !== _.node ||
              i.focusOffset !== _.offset) &&
            ((o = o.createRange()),
            o.setStart(p.node, p.offset),
            i.removeAllRanges(),
            g > d
              ? (i.addRange(o), i.extend(_.node, _.offset))
              : (o.setEnd(_.node, _.offset), i.addRange(o)));
        }
      }
      for (o = [], i = l; (i = i.parentNode); )
        i.nodeType === 1 &&
          o.push({ element: i, left: i.scrollLeft, top: i.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < o.length; l++)
        (i = o[l]),
          (i.element.scrollLeft = i.left),
          (i.element.scrollTop = i.top);
    }
  }
  var qw = c && "documentMode" in document && 11 >= document.documentMode,
    Vr = null,
    Vl = null,
    Vi = null,
    Yl = !1;
  function Kf(i, o, l) {
    var d =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Yl ||
      Vr == null ||
      Vr !== ro(d) ||
      ((d = Vr),
      "selectionStart" in d && $l(d)
        ? (d = { start: d.selectionStart, end: d.selectionEnd })
        : ((d = (
            (d.ownerDocument && d.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (d = {
            anchorNode: d.anchorNode,
            anchorOffset: d.anchorOffset,
            focusNode: d.focusNode,
            focusOffset: d.focusOffset,
          })),
      (Vi && $i(Vi, d)) ||
        ((Vi = d),
        (d = Eo(Vl, "onSelect")),
        0 < d.length &&
          ((o = new zl("onSelect", "select", null, o, l)),
          i.push({ event: o, listeners: d }),
          (o.target = Vr))));
  }
  function ko(i, o) {
    var l = {};
    return (
      (l[i.toLowerCase()] = o.toLowerCase()),
      (l["Webkit" + i] = "webkit" + o),
      (l["Moz" + i] = "moz" + o),
      l
    );
  }
  var Yr = {
      animationend: ko("Animation", "AnimationEnd"),
      animationiteration: ko("Animation", "AnimationIteration"),
      animationstart: ko("Animation", "AnimationStart"),
      transitionend: ko("Transition", "TransitionEnd"),
    },
    Kl = {},
    Xf = {};
  c &&
    ((Xf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Yr.animationend.animation,
      delete Yr.animationiteration.animation,
      delete Yr.animationstart.animation),
    "TransitionEvent" in window || delete Yr.transitionend.transition);
  function bo(i) {
    if (Kl[i]) return Kl[i];
    if (!Yr[i]) return i;
    var o = Yr[i],
      l;
    for (l in o) if (o.hasOwnProperty(l) && l in Xf) return (Kl[i] = o[l]);
    return i;
  }
  var qf = bo("animationend"),
    Gf = bo("animationiteration"),
    Qf = bo("animationstart"),
    Zf = bo("transitionend"),
    Jf = new Map(),
    eh =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function jn(i, o) {
    Jf.set(i, o), a(o, [i]);
  }
  for (var Xl = 0; Xl < eh.length; Xl++) {
    var ql = eh[Xl],
      Gw = ql.toLowerCase(),
      Qw = ql[0].toUpperCase() + ql.slice(1);
    jn(Gw, "on" + Qw);
  }
  jn(qf, "onAnimationEnd"),
    jn(Gf, "onAnimationIteration"),
    jn(Qf, "onAnimationStart"),
    jn("dblclick", "onDoubleClick"),
    jn("focusin", "onFocus"),
    jn("focusout", "onBlur"),
    jn(Zf, "onTransitionEnd"),
    u("onMouseEnter", ["mouseout", "mouseover"]),
    u("onMouseLeave", ["mouseout", "mouseover"]),
    u("onPointerEnter", ["pointerout", "pointerover"]),
    u("onPointerLeave", ["pointerout", "pointerover"]),
    a(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    a(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    a("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    a(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    a(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    a(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Yi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Zw = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Yi)
    );
  function th(i, o, l) {
    var d = i.type || "unknown-event";
    (i.currentTarget = l), G0(d, o, void 0, i), (i.currentTarget = null);
  }
  function nh(i, o) {
    o = (o & 4) !== 0;
    for (var l = 0; l < i.length; l++) {
      var d = i[l],
        p = d.event;
      d = d.listeners;
      e: {
        var g = void 0;
        if (o)
          for (var _ = d.length - 1; 0 <= _; _--) {
            var E = d[_],
              P = E.instance,
              F = E.currentTarget;
            if (((E = E.listener), P !== g && p.isPropagationStopped()))
              break e;
            th(p, E, F), (g = P);
          }
        else
          for (_ = 0; _ < d.length; _++) {
            if (
              ((E = d[_]),
              (P = E.instance),
              (F = E.currentTarget),
              (E = E.listener),
              P !== g && p.isPropagationStopped())
            )
              break e;
            th(p, E, F), (g = P);
          }
      }
    }
    if (oo) throw ((i = Cl), (oo = !1), (Cl = null), i);
  }
  function De(i, o) {
    var l = o[ru];
    l === void 0 && (l = o[ru] = new Set());
    var d = i + "__bubble";
    l.has(d) || (rh(o, i, 2, !1), l.add(d));
  }
  function Gl(i, o, l) {
    var d = 0;
    o && (d |= 4), rh(l, i, d, o);
  }
  var So = "_reactListening" + Math.random().toString(36).slice(2);
  function Ki(i) {
    if (!i[So]) {
      (i[So] = !0),
        r.forEach(function (l) {
          l !== "selectionchange" && (Zw.has(l) || Gl(l, !1, i), Gl(l, !0, i));
        });
      var o = i.nodeType === 9 ? i : i.ownerDocument;
      o === null || o[So] || ((o[So] = !0), Gl("selectionchange", !1, o));
    }
  }
  function rh(i, o, l, d) {
    switch (Cf(o)) {
      case 1:
        var p = fw;
        break;
      case 4:
        p = hw;
        break;
      default:
        p = Ll;
    }
    (l = p.bind(null, o, l, i)),
      (p = void 0),
      !El ||
        (o !== "touchstart" && o !== "touchmove" && o !== "wheel") ||
        (p = !0),
      d
        ? p !== void 0
          ? i.addEventListener(o, l, { capture: !0, passive: p })
          : i.addEventListener(o, l, !0)
        : p !== void 0
        ? i.addEventListener(o, l, { passive: p })
        : i.addEventListener(o, l, !1);
  }
  function Ql(i, o, l, d, p) {
    var g = d;
    if (!(o & 1) && !(o & 2) && d !== null)
      e: for (;;) {
        if (d === null) return;
        var _ = d.tag;
        if (_ === 3 || _ === 4) {
          var E = d.stateNode.containerInfo;
          if (E === p || (E.nodeType === 8 && E.parentNode === p)) break;
          if (_ === 4)
            for (_ = d.return; _ !== null; ) {
              var P = _.tag;
              if (
                (P === 3 || P === 4) &&
                ((P = _.stateNode.containerInfo),
                P === p || (P.nodeType === 8 && P.parentNode === p))
              )
                return;
              _ = _.return;
            }
          for (; E !== null; ) {
            if (((_ = ar(E)), _ === null)) return;
            if (((P = _.tag), P === 5 || P === 6)) {
              d = g = _;
              continue e;
            }
            E = E.parentNode;
          }
        }
        d = d.return;
      }
    lf(function () {
      var F = g,
        K = kl(l),
        X = [];
      e: {
        var Y = Jf.get(i);
        if (Y !== void 0) {
          var J = zl,
            te = i;
          switch (i) {
            case "keypress":
              if (wo(l) === 0) break e;
            case "keydown":
            case "keyup":
              J = Tw;
              break;
            case "focusin":
              (te = "focus"), (J = jl);
              break;
            case "focusout":
              (te = "blur"), (J = jl);
              break;
            case "beforeblur":
            case "afterblur":
              J = jl;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              J = Of;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              J = gw;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              J = Rw;
              break;
            case qf:
            case Gf:
            case Qf:
              J = vw;
              break;
            case Zf:
              J = Lw;
              break;
            case "scroll":
              J = pw;
              break;
            case "wheel":
              J = Nw;
              break;
            case "copy":
            case "cut":
            case "paste":
              J = _w;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              J = Rf;
          }
          var ie = (o & 4) !== 0,
            Ke = !ie && i === "scroll",
            L = ie ? (Y !== null ? Y + "Capture" : null) : Y;
          ie = [];
          for (var T = F, I; T !== null; ) {
            I = T;
            var q = I.stateNode;
            if (
              (I.tag === 5 &&
                q !== null &&
                ((I = q),
                L !== null &&
                  ((q = Oi(T, L)), q != null && ie.push(Xi(T, q, I)))),
              Ke)
            )
              break;
            T = T.return;
          }
          0 < ie.length &&
            ((Y = new J(Y, te, null, l, K)),
            X.push({ event: Y, listeners: ie }));
        }
      }
      if (!(o & 7)) {
        e: {
          if (
            ((Y = i === "mouseover" || i === "pointerover"),
            (J = i === "mouseout" || i === "pointerout"),
            Y &&
              l !== _l &&
              (te = l.relatedTarget || l.fromElement) &&
              (ar(te) || te[wn]))
          )
            break e;
          if (
            (J || Y) &&
            ((Y =
              K.window === K
                ? K
                : (Y = K.ownerDocument)
                ? Y.defaultView || Y.parentWindow
                : window),
            J
              ? ((te = l.relatedTarget || l.toElement),
                (J = F),
                (te = te ? ar(te) : null),
                te !== null &&
                  ((Ke = or(te)),
                  te !== Ke || (te.tag !== 5 && te.tag !== 6)) &&
                  (te = null))
              : ((J = null), (te = F)),
            J !== te)
          ) {
            if (
              ((ie = Of),
              (q = "onMouseLeave"),
              (L = "onMouseEnter"),
              (T = "mouse"),
              (i === "pointerout" || i === "pointerover") &&
                ((ie = Rf),
                (q = "onPointerLeave"),
                (L = "onPointerEnter"),
                (T = "pointer")),
              (Ke = J == null ? Y : qr(J)),
              (I = te == null ? Y : qr(te)),
              (Y = new ie(q, T + "leave", J, l, K)),
              (Y.target = Ke),
              (Y.relatedTarget = I),
              (q = null),
              ar(K) === F &&
                ((ie = new ie(L, T + "enter", te, l, K)),
                (ie.target = I),
                (ie.relatedTarget = Ke),
                (q = ie)),
              (Ke = q),
              J && te)
            )
              t: {
                for (ie = J, L = te, T = 0, I = ie; I; I = Kr(I)) T++;
                for (I = 0, q = L; q; q = Kr(q)) I++;
                for (; 0 < T - I; ) (ie = Kr(ie)), T--;
                for (; 0 < I - T; ) (L = Kr(L)), I--;
                for (; T--; ) {
                  if (ie === L || (L !== null && ie === L.alternate)) break t;
                  (ie = Kr(ie)), (L = Kr(L));
                }
                ie = null;
              }
            else ie = null;
            J !== null && ih(X, Y, J, ie, !1),
              te !== null && Ke !== null && ih(X, Ke, te, ie, !0);
          }
        }
        e: {
          if (
            ((Y = F ? qr(F) : window),
            (J = Y.nodeName && Y.nodeName.toLowerCase()),
            J === "select" || (J === "input" && Y.type === "file"))
          )
            var se = Bw;
          else if (Ff(Y))
            if (jf) se = Yw;
            else {
              se = $w;
              var oe = Uw;
            }
          else
            (J = Y.nodeName) &&
              J.toLowerCase() === "input" &&
              (Y.type === "checkbox" || Y.type === "radio") &&
              (se = Vw);
          if (se && (se = se(i, F))) {
            Af(X, se, l, K);
            break e;
          }
          oe && oe(i, Y, F),
            i === "focusout" &&
              (oe = Y._wrapperState) &&
              oe.controlled &&
              Y.type === "number" &&
              gl(Y, "number", Y.value);
        }
        switch (((oe = F ? qr(F) : window), i)) {
          case "focusin":
            (Ff(oe) || oe.contentEditable === "true") &&
              ((Vr = oe), (Vl = F), (Vi = null));
            break;
          case "focusout":
            Vi = Vl = Vr = null;
            break;
          case "mousedown":
            Yl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Yl = !1), Kf(X, l, K);
            break;
          case "selectionchange":
            if (qw) break;
          case "keydown":
          case "keyup":
            Kf(X, l, K);
        }
        var ae;
        if (Hl)
          e: {
            switch (i) {
              case "compositionstart":
                var ue = "onCompositionStart";
                break e;
              case "compositionend":
                ue = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ue = "onCompositionUpdate";
                break e;
            }
            ue = void 0;
          }
        else
          $r
            ? Nf(i, l) && (ue = "onCompositionEnd")
            : i === "keydown" &&
              l.keyCode === 229 &&
              (ue = "onCompositionStart");
        ue &&
          (Df &&
            l.locale !== "ko" &&
            ($r || ue !== "onCompositionStart"
              ? ue === "onCompositionEnd" && $r && (ae = Pf())
              : ((An = K),
                (Nl = "value" in An ? An.value : An.textContent),
                ($r = !0))),
          (oe = Eo(F, ue)),
          0 < oe.length &&
            ((ue = new Mf(ue, i, null, l, K)),
            X.push({ event: ue, listeners: oe }),
            ae
              ? (ue.data = ae)
              : ((ae = zf(l)), ae !== null && (ue.data = ae)))),
          (ae = Fw ? Aw(i, l) : jw(i, l)) &&
            ((F = Eo(F, "onBeforeInput")),
            0 < F.length &&
              ((K = new Mf("onBeforeInput", "beforeinput", null, l, K)),
              X.push({ event: K, listeners: F }),
              (K.data = ae)));
      }
      nh(X, o);
    });
  }
  function Xi(i, o, l) {
    return { instance: i, listener: o, currentTarget: l };
  }
  function Eo(i, o) {
    for (var l = o + "Capture", d = []; i !== null; ) {
      var p = i,
        g = p.stateNode;
      p.tag === 5 &&
        g !== null &&
        ((p = g),
        (g = Oi(i, l)),
        g != null && d.unshift(Xi(i, g, p)),
        (g = Oi(i, o)),
        g != null && d.push(Xi(i, g, p))),
        (i = i.return);
    }
    return d;
  }
  function Kr(i) {
    if (i === null) return null;
    do i = i.return;
    while (i && i.tag !== 5);
    return i || null;
  }
  function ih(i, o, l, d, p) {
    for (var g = o._reactName, _ = []; l !== null && l !== d; ) {
      var E = l,
        P = E.alternate,
        F = E.stateNode;
      if (P !== null && P === d) break;
      E.tag === 5 &&
        F !== null &&
        ((E = F),
        p
          ? ((P = Oi(l, g)), P != null && _.unshift(Xi(l, P, E)))
          : p || ((P = Oi(l, g)), P != null && _.push(Xi(l, P, E)))),
        (l = l.return);
    }
    _.length !== 0 && i.push({ event: o, listeners: _ });
  }
  var Jw = /\r\n?/g,
    ev = /\u0000|\uFFFD/g;
  function sh(i) {
    return (typeof i == "string" ? i : "" + i)
      .replace(
        Jw,
        `
`
      )
      .replace(ev, "");
  }
  function Co(i, o, l) {
    if (((o = sh(o)), sh(i) !== o && l)) throw Error(t(425));
  }
  function Po() {}
  var Zl = null,
    Jl = null;
  function eu(i, o) {
    return (
      i === "textarea" ||
      i === "noscript" ||
      typeof o.children == "string" ||
      typeof o.children == "number" ||
      (typeof o.dangerouslySetInnerHTML == "object" &&
        o.dangerouslySetInnerHTML !== null &&
        o.dangerouslySetInnerHTML.__html != null)
    );
  }
  var tu = typeof setTimeout == "function" ? setTimeout : void 0,
    tv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    oh = typeof Promise == "function" ? Promise : void 0,
    nv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof oh < "u"
        ? function (i) {
            return oh.resolve(null).then(i).catch(rv);
          }
        : tu;
  function rv(i) {
    setTimeout(function () {
      throw i;
    });
  }
  function nu(i, o) {
    var l = o,
      d = 0;
    do {
      var p = l.nextSibling;
      if ((i.removeChild(l), p && p.nodeType === 8))
        if (((l = p.data), l === "/$")) {
          if (d === 0) {
            i.removeChild(p), Ai(o);
            return;
          }
          d--;
        } else (l !== "$" && l !== "$?" && l !== "$!") || d++;
      l = p;
    } while (l);
    Ai(o);
  }
  function Wn(i) {
    for (; i != null; i = i.nextSibling) {
      var o = i.nodeType;
      if (o === 1 || o === 3) break;
      if (o === 8) {
        if (((o = i.data), o === "$" || o === "$!" || o === "$?")) break;
        if (o === "/$") return null;
      }
    }
    return i;
  }
  function ah(i) {
    i = i.previousSibling;
    for (var o = 0; i; ) {
      if (i.nodeType === 8) {
        var l = i.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (o === 0) return i;
          o--;
        } else l === "/$" && o++;
      }
      i = i.previousSibling;
    }
    return null;
  }
  var Xr = Math.random().toString(36).slice(2),
    en = "__reactFiber$" + Xr,
    qi = "__reactProps$" + Xr,
    wn = "__reactContainer$" + Xr,
    ru = "__reactEvents$" + Xr,
    iv = "__reactListeners$" + Xr,
    sv = "__reactHandles$" + Xr;
  function ar(i) {
    var o = i[en];
    if (o) return o;
    for (var l = i.parentNode; l; ) {
      if ((o = l[wn] || l[en])) {
        if (
          ((l = o.alternate),
          o.child !== null || (l !== null && l.child !== null))
        )
          for (i = ah(i); i !== null; ) {
            if ((l = i[en])) return l;
            i = ah(i);
          }
        return o;
      }
      (i = l), (l = i.parentNode);
    }
    return null;
  }
  function Gi(i) {
    return (
      (i = i[en] || i[wn]),
      !i || (i.tag !== 5 && i.tag !== 6 && i.tag !== 13 && i.tag !== 3)
        ? null
        : i
    );
  }
  function qr(i) {
    if (i.tag === 5 || i.tag === 6) return i.stateNode;
    throw Error(t(33));
  }
  function To(i) {
    return i[qi] || null;
  }
  var iu = [],
    Gr = -1;
  function Hn(i) {
    return { current: i };
  }
  function Le(i) {
    0 > Gr || ((i.current = iu[Gr]), (iu[Gr] = null), Gr--);
  }
  function Re(i, o) {
    Gr++, (iu[Gr] = i.current), (i.current = o);
  }
  var Bn = {},
    lt = Hn(Bn),
    wt = Hn(!1),
    lr = Bn;
  function Qr(i, o) {
    var l = i.type.contextTypes;
    if (!l) return Bn;
    var d = i.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === o)
      return d.__reactInternalMemoizedMaskedChildContext;
    var p = {},
      g;
    for (g in l) p[g] = o[g];
    return (
      d &&
        ((i = i.stateNode),
        (i.__reactInternalMemoizedUnmaskedChildContext = o),
        (i.__reactInternalMemoizedMaskedChildContext = p)),
      p
    );
  }
  function vt(i) {
    return (i = i.childContextTypes), i != null;
  }
  function Oo() {
    Le(wt), Le(lt);
  }
  function lh(i, o, l) {
    if (lt.current !== Bn) throw Error(t(168));
    Re(lt, o), Re(wt, l);
  }
  function uh(i, o, l) {
    var d = i.stateNode;
    if (((o = o.childContextTypes), typeof d.getChildContext != "function"))
      return l;
    d = d.getChildContext();
    for (var p in d) if (!(p in o)) throw Error(t(108, Me(i) || "Unknown", p));
    return Z({}, l, d);
  }
  function Mo(i) {
    return (
      (i =
        ((i = i.stateNode) && i.__reactInternalMemoizedMergedChildContext) ||
        Bn),
      (lr = lt.current),
      Re(lt, i),
      Re(wt, wt.current),
      !0
    );
  }
  function ch(i, o, l) {
    var d = i.stateNode;
    if (!d) throw Error(t(169));
    l
      ? ((i = uh(i, o, lr)),
        (d.__reactInternalMemoizedMergedChildContext = i),
        Le(wt),
        Le(lt),
        Re(lt, i))
      : Le(wt),
      Re(wt, l);
  }
  var vn = null,
    Ro = !1,
    su = !1;
  function dh(i) {
    vn === null ? (vn = [i]) : vn.push(i);
  }
  function ov(i) {
    (Ro = !0), dh(i);
  }
  function Un() {
    if (!su && vn !== null) {
      su = !0;
      var i = 0,
        o = Pe;
      try {
        var l = vn;
        for (Pe = 1; i < l.length; i++) {
          var d = l[i];
          do d = d(!0);
          while (d !== null);
        }
        (vn = null), (Ro = !1);
      } catch (p) {
        throw (vn !== null && (vn = vn.slice(i + 1)), hf(Pl, Un), p);
      } finally {
        (Pe = o), (su = !1);
      }
    }
    return null;
  }
  var Zr = [],
    Jr = 0,
    Do = null,
    Lo = 0,
    Lt = [],
    It = 0,
    ur = null,
    xn = 1,
    _n = "";
  function cr(i, o) {
    (Zr[Jr++] = Lo), (Zr[Jr++] = Do), (Do = i), (Lo = o);
  }
  function fh(i, o, l) {
    (Lt[It++] = xn), (Lt[It++] = _n), (Lt[It++] = ur), (ur = i);
    var d = xn;
    i = _n;
    var p = 32 - $t(d) - 1;
    (d &= ~(1 << p)), (l += 1);
    var g = 32 - $t(o) + p;
    if (30 < g) {
      var _ = p - (p % 5);
      (g = (d & ((1 << _) - 1)).toString(32)),
        (d >>= _),
        (p -= _),
        (xn = (1 << (32 - $t(o) + p)) | (l << p) | d),
        (_n = g + i);
    } else (xn = (1 << g) | (l << p) | d), (_n = i);
  }
  function ou(i) {
    i.return !== null && (cr(i, 1), fh(i, 1, 0));
  }
  function au(i) {
    for (; i === Do; )
      (Do = Zr[--Jr]), (Zr[Jr] = null), (Lo = Zr[--Jr]), (Zr[Jr] = null);
    for (; i === ur; )
      (ur = Lt[--It]),
        (Lt[It] = null),
        (_n = Lt[--It]),
        (Lt[It] = null),
        (xn = Lt[--It]),
        (Lt[It] = null);
  }
  var Ot = null,
    Mt = null,
    Fe = !1,
    Yt = null;
  function hh(i, o) {
    var l = At(5, null, null, 0);
    (l.elementType = "DELETED"),
      (l.stateNode = o),
      (l.return = i),
      (o = i.deletions),
      o === null ? ((i.deletions = [l]), (i.flags |= 16)) : o.push(l);
  }
  function ph(i, o) {
    switch (i.tag) {
      case 5:
        var l = i.type;
        return (
          (o =
            o.nodeType !== 1 || l.toLowerCase() !== o.nodeName.toLowerCase()
              ? null
              : o),
          o !== null
            ? ((i.stateNode = o), (Ot = i), (Mt = Wn(o.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (o = i.pendingProps === "" || o.nodeType !== 3 ? null : o),
          o !== null ? ((i.stateNode = o), (Ot = i), (Mt = null), !0) : !1
        );
      case 13:
        return (
          (o = o.nodeType !== 8 ? null : o),
          o !== null
            ? ((l = ur !== null ? { id: xn, overflow: _n } : null),
              (i.memoizedState = {
                dehydrated: o,
                treeContext: l,
                retryLane: 1073741824,
              }),
              (l = At(18, null, null, 0)),
              (l.stateNode = o),
              (l.return = i),
              (i.child = l),
              (Ot = i),
              (Mt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function lu(i) {
    return (i.mode & 1) !== 0 && (i.flags & 128) === 0;
  }
  function uu(i) {
    if (Fe) {
      var o = Mt;
      if (o) {
        var l = o;
        if (!ph(i, o)) {
          if (lu(i)) throw Error(t(418));
          o = Wn(l.nextSibling);
          var d = Ot;
          o && ph(i, o)
            ? hh(d, l)
            : ((i.flags = (i.flags & -4097) | 2), (Fe = !1), (Ot = i));
        }
      } else {
        if (lu(i)) throw Error(t(418));
        (i.flags = (i.flags & -4097) | 2), (Fe = !1), (Ot = i);
      }
    }
  }
  function mh(i) {
    for (
      i = i.return;
      i !== null && i.tag !== 5 && i.tag !== 3 && i.tag !== 13;

    )
      i = i.return;
    Ot = i;
  }
  function Io(i) {
    if (i !== Ot) return !1;
    if (!Fe) return mh(i), (Fe = !0), !1;
    var o;
    if (
      ((o = i.tag !== 3) &&
        !(o = i.tag !== 5) &&
        ((o = i.type),
        (o = o !== "head" && o !== "body" && !eu(i.type, i.memoizedProps))),
      o && (o = Mt))
    ) {
      if (lu(i)) throw (gh(), Error(t(418)));
      for (; o; ) hh(i, o), (o = Wn(o.nextSibling));
    }
    if ((mh(i), i.tag === 13)) {
      if (((i = i.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
        throw Error(t(317));
      e: {
        for (i = i.nextSibling, o = 0; i; ) {
          if (i.nodeType === 8) {
            var l = i.data;
            if (l === "/$") {
              if (o === 0) {
                Mt = Wn(i.nextSibling);
                break e;
              }
              o--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || o++;
          }
          i = i.nextSibling;
        }
        Mt = null;
      }
    } else Mt = Ot ? Wn(i.stateNode.nextSibling) : null;
    return !0;
  }
  function gh() {
    for (var i = Mt; i; ) i = Wn(i.nextSibling);
  }
  function ei() {
    (Mt = Ot = null), (Fe = !1);
  }
  function cu(i) {
    Yt === null ? (Yt = [i]) : Yt.push(i);
  }
  var av = R.ReactCurrentBatchConfig;
  function Qi(i, o, l) {
    if (
      ((i = l.ref),
      i !== null && typeof i != "function" && typeof i != "object")
    ) {
      if (l._owner) {
        if (((l = l._owner), l)) {
          if (l.tag !== 1) throw Error(t(309));
          var d = l.stateNode;
        }
        if (!d) throw Error(t(147, i));
        var p = d,
          g = "" + i;
        return o !== null &&
          o.ref !== null &&
          typeof o.ref == "function" &&
          o.ref._stringRef === g
          ? o.ref
          : ((o = function (_) {
              var E = p.refs;
              _ === null ? delete E[g] : (E[g] = _);
            }),
            (o._stringRef = g),
            o);
      }
      if (typeof i != "string") throw Error(t(284));
      if (!l._owner) throw Error(t(290, i));
    }
    return i;
  }
  function No(i, o) {
    throw (
      ((i = Object.prototype.toString.call(o)),
      Error(
        t(
          31,
          i === "[object Object]"
            ? "object with keys {" + Object.keys(o).join(", ") + "}"
            : i
        )
      ))
    );
  }
  function yh(i) {
    var o = i._init;
    return o(i._payload);
  }
  function wh(i) {
    function o(L, T) {
      if (i) {
        var I = L.deletions;
        I === null ? ((L.deletions = [T]), (L.flags |= 16)) : I.push(T);
      }
    }
    function l(L, T) {
      if (!i) return null;
      for (; T !== null; ) o(L, T), (T = T.sibling);
      return null;
    }
    function d(L, T) {
      for (L = new Map(); T !== null; )
        T.key !== null ? L.set(T.key, T) : L.set(T.index, T), (T = T.sibling);
      return L;
    }
    function p(L, T) {
      return (L = Qn(L, T)), (L.index = 0), (L.sibling = null), L;
    }
    function g(L, T, I) {
      return (
        (L.index = I),
        i
          ? ((I = L.alternate),
            I !== null
              ? ((I = I.index), I < T ? ((L.flags |= 2), T) : I)
              : ((L.flags |= 2), T))
          : ((L.flags |= 1048576), T)
      );
    }
    function _(L) {
      return i && L.alternate === null && (L.flags |= 2), L;
    }
    function E(L, T, I, q) {
      return T === null || T.tag !== 6
        ? ((T = tc(I, L.mode, q)), (T.return = L), T)
        : ((T = p(T, I)), (T.return = L), T);
    }
    function P(L, T, I, q) {
      var se = I.type;
      return se === H
        ? K(L, T, I.props.children, q, I.key)
        : T !== null &&
          (T.elementType === se ||
            (typeof se == "object" &&
              se !== null &&
              se.$$typeof === ve &&
              yh(se) === T.type))
        ? ((q = p(T, I.props)), (q.ref = Qi(L, T, I)), (q.return = L), q)
        : ((q = sa(I.type, I.key, I.props, null, L.mode, q)),
          (q.ref = Qi(L, T, I)),
          (q.return = L),
          q);
    }
    function F(L, T, I, q) {
      return T === null ||
        T.tag !== 4 ||
        T.stateNode.containerInfo !== I.containerInfo ||
        T.stateNode.implementation !== I.implementation
        ? ((T = nc(I, L.mode, q)), (T.return = L), T)
        : ((T = p(T, I.children || [])), (T.return = L), T);
    }
    function K(L, T, I, q, se) {
      return T === null || T.tag !== 7
        ? ((T = wr(I, L.mode, q, se)), (T.return = L), T)
        : ((T = p(T, I)), (T.return = L), T);
    }
    function X(L, T, I) {
      if ((typeof T == "string" && T !== "") || typeof T == "number")
        return (T = tc("" + T, L.mode, I)), (T.return = L), T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case A:
            return (
              (I = sa(T.type, T.key, T.props, null, L.mode, I)),
              (I.ref = Qi(L, null, T)),
              (I.return = L),
              I
            );
          case W:
            return (T = nc(T, L.mode, I)), (T.return = L), T;
          case ve:
            var q = T._init;
            return X(L, q(T._payload), I);
        }
        if (Ci(T) || Q(T))
          return (T = wr(T, L.mode, I, null)), (T.return = L), T;
        No(L, T);
      }
      return null;
    }
    function Y(L, T, I, q) {
      var se = T !== null ? T.key : null;
      if ((typeof I == "string" && I !== "") || typeof I == "number")
        return se !== null ? null : E(L, T, "" + I, q);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case A:
            return I.key === se ? P(L, T, I, q) : null;
          case W:
            return I.key === se ? F(L, T, I, q) : null;
          case ve:
            return (se = I._init), Y(L, T, se(I._payload), q);
        }
        if (Ci(I) || Q(I)) return se !== null ? null : K(L, T, I, q, null);
        No(L, I);
      }
      return null;
    }
    function J(L, T, I, q, se) {
      if ((typeof q == "string" && q !== "") || typeof q == "number")
        return (L = L.get(I) || null), E(T, L, "" + q, se);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case A:
            return (
              (L = L.get(q.key === null ? I : q.key) || null), P(T, L, q, se)
            );
          case W:
            return (
              (L = L.get(q.key === null ? I : q.key) || null), F(T, L, q, se)
            );
          case ve:
            var oe = q._init;
            return J(L, T, I, oe(q._payload), se);
        }
        if (Ci(q) || Q(q)) return (L = L.get(I) || null), K(T, L, q, se, null);
        No(T, q);
      }
      return null;
    }
    function te(L, T, I, q) {
      for (
        var se = null, oe = null, ae = T, ue = (T = 0), nt = null;
        ae !== null && ue < I.length;
        ue++
      ) {
        ae.index > ue ? ((nt = ae), (ae = null)) : (nt = ae.sibling);
        var ke = Y(L, ae, I[ue], q);
        if (ke === null) {
          ae === null && (ae = nt);
          break;
        }
        i && ae && ke.alternate === null && o(L, ae),
          (T = g(ke, T, ue)),
          oe === null ? (se = ke) : (oe.sibling = ke),
          (oe = ke),
          (ae = nt);
      }
      if (ue === I.length) return l(L, ae), Fe && cr(L, ue), se;
      if (ae === null) {
        for (; ue < I.length; ue++)
          (ae = X(L, I[ue], q)),
            ae !== null &&
              ((T = g(ae, T, ue)),
              oe === null ? (se = ae) : (oe.sibling = ae),
              (oe = ae));
        return Fe && cr(L, ue), se;
      }
      for (ae = d(L, ae); ue < I.length; ue++)
        (nt = J(ae, L, ue, I[ue], q)),
          nt !== null &&
            (i &&
              nt.alternate !== null &&
              ae.delete(nt.key === null ? ue : nt.key),
            (T = g(nt, T, ue)),
            oe === null ? (se = nt) : (oe.sibling = nt),
            (oe = nt));
      return (
        i &&
          ae.forEach(function (Zn) {
            return o(L, Zn);
          }),
        Fe && cr(L, ue),
        se
      );
    }
    function ie(L, T, I, q) {
      var se = Q(I);
      if (typeof se != "function") throw Error(t(150));
      if (((I = se.call(I)), I == null)) throw Error(t(151));
      for (
        var oe = (se = null), ae = T, ue = (T = 0), nt = null, ke = I.next();
        ae !== null && !ke.done;
        ue++, ke = I.next()
      ) {
        ae.index > ue ? ((nt = ae), (ae = null)) : (nt = ae.sibling);
        var Zn = Y(L, ae, ke.value, q);
        if (Zn === null) {
          ae === null && (ae = nt);
          break;
        }
        i && ae && Zn.alternate === null && o(L, ae),
          (T = g(Zn, T, ue)),
          oe === null ? (se = Zn) : (oe.sibling = Zn),
          (oe = Zn),
          (ae = nt);
      }
      if (ke.done) return l(L, ae), Fe && cr(L, ue), se;
      if (ae === null) {
        for (; !ke.done; ue++, ke = I.next())
          (ke = X(L, ke.value, q)),
            ke !== null &&
              ((T = g(ke, T, ue)),
              oe === null ? (se = ke) : (oe.sibling = ke),
              (oe = ke));
        return Fe && cr(L, ue), se;
      }
      for (ae = d(L, ae); !ke.done; ue++, ke = I.next())
        (ke = J(ae, L, ue, ke.value, q)),
          ke !== null &&
            (i &&
              ke.alternate !== null &&
              ae.delete(ke.key === null ? ue : ke.key),
            (T = g(ke, T, ue)),
            oe === null ? (se = ke) : (oe.sibling = ke),
            (oe = ke));
      return (
        i &&
          ae.forEach(function (jv) {
            return o(L, jv);
          }),
        Fe && cr(L, ue),
        se
      );
    }
    function Ke(L, T, I, q) {
      if (
        (typeof I == "object" &&
          I !== null &&
          I.type === H &&
          I.key === null &&
          (I = I.props.children),
        typeof I == "object" && I !== null)
      ) {
        switch (I.$$typeof) {
          case A:
            e: {
              for (var se = I.key, oe = T; oe !== null; ) {
                if (oe.key === se) {
                  if (((se = I.type), se === H)) {
                    if (oe.tag === 7) {
                      l(L, oe.sibling),
                        (T = p(oe, I.props.children)),
                        (T.return = L),
                        (L = T);
                      break e;
                    }
                  } else if (
                    oe.elementType === se ||
                    (typeof se == "object" &&
                      se !== null &&
                      se.$$typeof === ve &&
                      yh(se) === oe.type)
                  ) {
                    l(L, oe.sibling),
                      (T = p(oe, I.props)),
                      (T.ref = Qi(L, oe, I)),
                      (T.return = L),
                      (L = T);
                    break e;
                  }
                  l(L, oe);
                  break;
                } else o(L, oe);
                oe = oe.sibling;
              }
              I.type === H
                ? ((T = wr(I.props.children, L.mode, q, I.key)),
                  (T.return = L),
                  (L = T))
                : ((q = sa(I.type, I.key, I.props, null, L.mode, q)),
                  (q.ref = Qi(L, T, I)),
                  (q.return = L),
                  (L = q));
            }
            return _(L);
          case W:
            e: {
              for (oe = I.key; T !== null; ) {
                if (T.key === oe)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === I.containerInfo &&
                    T.stateNode.implementation === I.implementation
                  ) {
                    l(L, T.sibling),
                      (T = p(T, I.children || [])),
                      (T.return = L),
                      (L = T);
                    break e;
                  } else {
                    l(L, T);
                    break;
                  }
                else o(L, T);
                T = T.sibling;
              }
              (T = nc(I, L.mode, q)), (T.return = L), (L = T);
            }
            return _(L);
          case ve:
            return (oe = I._init), Ke(L, T, oe(I._payload), q);
        }
        if (Ci(I)) return te(L, T, I, q);
        if (Q(I)) return ie(L, T, I, q);
        No(L, I);
      }
      return (typeof I == "string" && I !== "") || typeof I == "number"
        ? ((I = "" + I),
          T !== null && T.tag === 6
            ? (l(L, T.sibling), (T = p(T, I)), (T.return = L), (L = T))
            : (l(L, T), (T = tc(I, L.mode, q)), (T.return = L), (L = T)),
          _(L))
        : l(L, T);
    }
    return Ke;
  }
  var ti = wh(!0),
    vh = wh(!1),
    zo = Hn(null),
    Fo = null,
    ni = null,
    du = null;
  function fu() {
    du = ni = Fo = null;
  }
  function hu(i) {
    var o = zo.current;
    Le(zo), (i._currentValue = o);
  }
  function pu(i, o, l) {
    for (; i !== null; ) {
      var d = i.alternate;
      if (
        ((i.childLanes & o) !== o
          ? ((i.childLanes |= o), d !== null && (d.childLanes |= o))
          : d !== null && (d.childLanes & o) !== o && (d.childLanes |= o),
        i === l)
      )
        break;
      i = i.return;
    }
  }
  function ri(i, o) {
    (Fo = i),
      (du = ni = null),
      (i = i.dependencies),
      i !== null &&
        i.firstContext !== null &&
        (i.lanes & o && (xt = !0), (i.firstContext = null));
  }
  function Nt(i) {
    var o = i._currentValue;
    if (du !== i)
      if (((i = { context: i, memoizedValue: o, next: null }), ni === null)) {
        if (Fo === null) throw Error(t(308));
        (ni = i), (Fo.dependencies = { lanes: 0, firstContext: i });
      } else ni = ni.next = i;
    return o;
  }
  var dr = null;
  function mu(i) {
    dr === null ? (dr = [i]) : dr.push(i);
  }
  function xh(i, o, l, d) {
    var p = o.interleaved;
    return (
      p === null ? ((l.next = l), mu(o)) : ((l.next = p.next), (p.next = l)),
      (o.interleaved = l),
      kn(i, d)
    );
  }
  function kn(i, o) {
    i.lanes |= o;
    var l = i.alternate;
    for (l !== null && (l.lanes |= o), l = i, i = i.return; i !== null; )
      (i.childLanes |= o),
        (l = i.alternate),
        l !== null && (l.childLanes |= o),
        (l = i),
        (i = i.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var $n = !1;
  function gu(i) {
    i.updateQueue = {
      baseState: i.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function _h(i, o) {
    (i = i.updateQueue),
      o.updateQueue === i &&
        (o.updateQueue = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects,
        });
  }
  function bn(i, o) {
    return {
      eventTime: i,
      lane: o,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Vn(i, o, l) {
    var d = i.updateQueue;
    if (d === null) return null;
    if (((d = d.shared), _e & 2)) {
      var p = d.pending;
      return (
        p === null ? (o.next = o) : ((o.next = p.next), (p.next = o)),
        (d.pending = o),
        kn(i, l)
      );
    }
    return (
      (p = d.interleaved),
      p === null ? ((o.next = o), mu(d)) : ((o.next = p.next), (p.next = o)),
      (d.interleaved = o),
      kn(i, l)
    );
  }
  function Ao(i, o, l) {
    if (
      ((o = o.updateQueue), o !== null && ((o = o.shared), (l & 4194240) !== 0))
    ) {
      var d = o.lanes;
      (d &= i.pendingLanes), (l |= d), (o.lanes = l), Ml(i, l);
    }
  }
  function kh(i, o) {
    var l = i.updateQueue,
      d = i.alternate;
    if (d !== null && ((d = d.updateQueue), l === d)) {
      var p = null,
        g = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var _ = {
            eventTime: l.eventTime,
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: l.callback,
            next: null,
          };
          g === null ? (p = g = _) : (g = g.next = _), (l = l.next);
        } while (l !== null);
        g === null ? (p = g = o) : (g = g.next = o);
      } else p = g = o;
      (l = {
        baseState: d.baseState,
        firstBaseUpdate: p,
        lastBaseUpdate: g,
        shared: d.shared,
        effects: d.effects,
      }),
        (i.updateQueue = l);
      return;
    }
    (i = l.lastBaseUpdate),
      i === null ? (l.firstBaseUpdate = o) : (i.next = o),
      (l.lastBaseUpdate = o);
  }
  function jo(i, o, l, d) {
    var p = i.updateQueue;
    $n = !1;
    var g = p.firstBaseUpdate,
      _ = p.lastBaseUpdate,
      E = p.shared.pending;
    if (E !== null) {
      p.shared.pending = null;
      var P = E,
        F = P.next;
      (P.next = null), _ === null ? (g = F) : (_.next = F), (_ = P);
      var K = i.alternate;
      K !== null &&
        ((K = K.updateQueue),
        (E = K.lastBaseUpdate),
        E !== _ &&
          (E === null ? (K.firstBaseUpdate = F) : (E.next = F),
          (K.lastBaseUpdate = P)));
    }
    if (g !== null) {
      var X = p.baseState;
      (_ = 0), (K = F = P = null), (E = g);
      do {
        var Y = E.lane,
          J = E.eventTime;
        if ((d & Y) === Y) {
          K !== null &&
            (K = K.next =
              {
                eventTime: J,
                lane: 0,
                tag: E.tag,
                payload: E.payload,
                callback: E.callback,
                next: null,
              });
          e: {
            var te = i,
              ie = E;
            switch (((Y = o), (J = l), ie.tag)) {
              case 1:
                if (((te = ie.payload), typeof te == "function")) {
                  X = te.call(J, X, Y);
                  break e;
                }
                X = te;
                break e;
              case 3:
                te.flags = (te.flags & -65537) | 128;
              case 0:
                if (
                  ((te = ie.payload),
                  (Y = typeof te == "function" ? te.call(J, X, Y) : te),
                  Y == null)
                )
                  break e;
                X = Z({}, X, Y);
                break e;
              case 2:
                $n = !0;
            }
          }
          E.callback !== null &&
            E.lane !== 0 &&
            ((i.flags |= 64),
            (Y = p.effects),
            Y === null ? (p.effects = [E]) : Y.push(E));
        } else
          (J = {
            eventTime: J,
            lane: Y,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null,
          }),
            K === null ? ((F = K = J), (P = X)) : (K = K.next = J),
            (_ |= Y);
        if (((E = E.next), E === null)) {
          if (((E = p.shared.pending), E === null)) break;
          (Y = E),
            (E = Y.next),
            (Y.next = null),
            (p.lastBaseUpdate = Y),
            (p.shared.pending = null);
        }
      } while (!0);
      if (
        (K === null && (P = X),
        (p.baseState = P),
        (p.firstBaseUpdate = F),
        (p.lastBaseUpdate = K),
        (o = p.shared.interleaved),
        o !== null)
      ) {
        p = o;
        do (_ |= p.lane), (p = p.next);
        while (p !== o);
      } else g === null && (p.shared.lanes = 0);
      (pr |= _), (i.lanes = _), (i.memoizedState = X);
    }
  }
  function bh(i, o, l) {
    if (((i = o.effects), (o.effects = null), i !== null))
      for (o = 0; o < i.length; o++) {
        var d = i[o],
          p = d.callback;
        if (p !== null) {
          if (((d.callback = null), (d = l), typeof p != "function"))
            throw Error(t(191, p));
          p.call(d);
        }
      }
  }
  var Zi = {},
    tn = Hn(Zi),
    Ji = Hn(Zi),
    es = Hn(Zi);
  function fr(i) {
    if (i === Zi) throw Error(t(174));
    return i;
  }
  function yu(i, o) {
    switch ((Re(es, o), Re(Ji, i), Re(tn, Zi), (i = o.nodeType), i)) {
      case 9:
      case 11:
        o = (o = o.documentElement) ? o.namespaceURI : wl(null, "");
        break;
      default:
        (i = i === 8 ? o.parentNode : o),
          (o = i.namespaceURI || null),
          (i = i.tagName),
          (o = wl(o, i));
    }
    Le(tn), Re(tn, o);
  }
  function ii() {
    Le(tn), Le(Ji), Le(es);
  }
  function Sh(i) {
    fr(es.current);
    var o = fr(tn.current),
      l = wl(o, i.type);
    o !== l && (Re(Ji, i), Re(tn, l));
  }
  function wu(i) {
    Ji.current === i && (Le(tn), Le(Ji));
  }
  var Ae = Hn(0);
  function Wo(i) {
    for (var o = i; o !== null; ) {
      if (o.tag === 13) {
        var l = o.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || l.data === "$!")
        )
          return o;
      } else if (o.tag === 19 && o.memoizedProps.revealOrder !== void 0) {
        if (o.flags & 128) return o;
      } else if (o.child !== null) {
        (o.child.return = o), (o = o.child);
        continue;
      }
      if (o === i) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === i) return null;
        o = o.return;
      }
      (o.sibling.return = o.return), (o = o.sibling);
    }
    return null;
  }
  var vu = [];
  function xu() {
    for (var i = 0; i < vu.length; i++)
      vu[i]._workInProgressVersionPrimary = null;
    vu.length = 0;
  }
  var Ho = R.ReactCurrentDispatcher,
    _u = R.ReactCurrentBatchConfig,
    hr = 0,
    je = null,
    Ze = null,
    et = null,
    Bo = !1,
    ts = !1,
    ns = 0,
    lv = 0;
  function ut() {
    throw Error(t(321));
  }
  function ku(i, o) {
    if (o === null) return !1;
    for (var l = 0; l < o.length && l < i.length; l++)
      if (!Vt(i[l], o[l])) return !1;
    return !0;
  }
  function bu(i, o, l, d, p, g) {
    if (
      ((hr = g),
      (je = o),
      (o.memoizedState = null),
      (o.updateQueue = null),
      (o.lanes = 0),
      (Ho.current = i === null || i.memoizedState === null ? fv : hv),
      (i = l(d, p)),
      ts)
    ) {
      g = 0;
      do {
        if (((ts = !1), (ns = 0), 25 <= g)) throw Error(t(301));
        (g += 1),
          (et = Ze = null),
          (o.updateQueue = null),
          (Ho.current = pv),
          (i = l(d, p));
      } while (ts);
    }
    if (
      ((Ho.current = Vo),
      (o = Ze !== null && Ze.next !== null),
      (hr = 0),
      (et = Ze = je = null),
      (Bo = !1),
      o)
    )
      throw Error(t(300));
    return i;
  }
  function Su() {
    var i = ns !== 0;
    return (ns = 0), i;
  }
  function nn() {
    var i = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return et === null ? (je.memoizedState = et = i) : (et = et.next = i), et;
  }
  function zt() {
    if (Ze === null) {
      var i = je.alternate;
      i = i !== null ? i.memoizedState : null;
    } else i = Ze.next;
    var o = et === null ? je.memoizedState : et.next;
    if (o !== null) (et = o), (Ze = i);
    else {
      if (i === null) throw Error(t(310));
      (Ze = i),
        (i = {
          memoizedState: Ze.memoizedState,
          baseState: Ze.baseState,
          baseQueue: Ze.baseQueue,
          queue: Ze.queue,
          next: null,
        }),
        et === null ? (je.memoizedState = et = i) : (et = et.next = i);
    }
    return et;
  }
  function rs(i, o) {
    return typeof o == "function" ? o(i) : o;
  }
  function Eu(i) {
    var o = zt(),
      l = o.queue;
    if (l === null) throw Error(t(311));
    l.lastRenderedReducer = i;
    var d = Ze,
      p = d.baseQueue,
      g = l.pending;
    if (g !== null) {
      if (p !== null) {
        var _ = p.next;
        (p.next = g.next), (g.next = _);
      }
      (d.baseQueue = p = g), (l.pending = null);
    }
    if (p !== null) {
      (g = p.next), (d = d.baseState);
      var E = (_ = null),
        P = null,
        F = g;
      do {
        var K = F.lane;
        if ((hr & K) === K)
          P !== null &&
            (P = P.next =
              {
                lane: 0,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null,
              }),
            (d = F.hasEagerState ? F.eagerState : i(d, F.action));
        else {
          var X = {
            lane: K,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null,
          };
          P === null ? ((E = P = X), (_ = d)) : (P = P.next = X),
            (je.lanes |= K),
            (pr |= K);
        }
        F = F.next;
      } while (F !== null && F !== g);
      P === null ? (_ = d) : (P.next = E),
        Vt(d, o.memoizedState) || (xt = !0),
        (o.memoizedState = d),
        (o.baseState = _),
        (o.baseQueue = P),
        (l.lastRenderedState = d);
    }
    if (((i = l.interleaved), i !== null)) {
      p = i;
      do (g = p.lane), (je.lanes |= g), (pr |= g), (p = p.next);
      while (p !== i);
    } else p === null && (l.lanes = 0);
    return [o.memoizedState, l.dispatch];
  }
  function Cu(i) {
    var o = zt(),
      l = o.queue;
    if (l === null) throw Error(t(311));
    l.lastRenderedReducer = i;
    var d = l.dispatch,
      p = l.pending,
      g = o.memoizedState;
    if (p !== null) {
      l.pending = null;
      var _ = (p = p.next);
      do (g = i(g, _.action)), (_ = _.next);
      while (_ !== p);
      Vt(g, o.memoizedState) || (xt = !0),
        (o.memoizedState = g),
        o.baseQueue === null && (o.baseState = g),
        (l.lastRenderedState = g);
    }
    return [g, d];
  }
  function Eh() {}
  function Ch(i, o) {
    var l = je,
      d = zt(),
      p = o(),
      g = !Vt(d.memoizedState, p);
    if (
      (g && ((d.memoizedState = p), (xt = !0)),
      (d = d.queue),
      Pu(Oh.bind(null, l, d, i), [i]),
      d.getSnapshot !== o || g || (et !== null && et.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        is(9, Th.bind(null, l, d, p, o), void 0, null),
        tt === null)
      )
        throw Error(t(349));
      hr & 30 || Ph(l, o, p);
    }
    return p;
  }
  function Ph(i, o, l) {
    (i.flags |= 16384),
      (i = { getSnapshot: o, value: l }),
      (o = je.updateQueue),
      o === null
        ? ((o = { lastEffect: null, stores: null }),
          (je.updateQueue = o),
          (o.stores = [i]))
        : ((l = o.stores), l === null ? (o.stores = [i]) : l.push(i));
  }
  function Th(i, o, l, d) {
    (o.value = l), (o.getSnapshot = d), Mh(o) && Rh(i);
  }
  function Oh(i, o, l) {
    return l(function () {
      Mh(o) && Rh(i);
    });
  }
  function Mh(i) {
    var o = i.getSnapshot;
    i = i.value;
    try {
      var l = o();
      return !Vt(i, l);
    } catch {
      return !0;
    }
  }
  function Rh(i) {
    var o = kn(i, 1);
    o !== null && Gt(o, i, 1, -1);
  }
  function Dh(i) {
    var o = nn();
    return (
      typeof i == "function" && (i = i()),
      (o.memoizedState = o.baseState = i),
      (i = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: rs,
        lastRenderedState: i,
      }),
      (o.queue = i),
      (i = i.dispatch = dv.bind(null, je, i)),
      [o.memoizedState, i]
    );
  }
  function is(i, o, l, d) {
    return (
      (i = { tag: i, create: o, destroy: l, deps: d, next: null }),
      (o = je.updateQueue),
      o === null
        ? ((o = { lastEffect: null, stores: null }),
          (je.updateQueue = o),
          (o.lastEffect = i.next = i))
        : ((l = o.lastEffect),
          l === null
            ? (o.lastEffect = i.next = i)
            : ((d = l.next), (l.next = i), (i.next = d), (o.lastEffect = i))),
      i
    );
  }
  function Lh() {
    return zt().memoizedState;
  }
  function Uo(i, o, l, d) {
    var p = nn();
    (je.flags |= i),
      (p.memoizedState = is(1 | o, l, void 0, d === void 0 ? null : d));
  }
  function $o(i, o, l, d) {
    var p = zt();
    d = d === void 0 ? null : d;
    var g = void 0;
    if (Ze !== null) {
      var _ = Ze.memoizedState;
      if (((g = _.destroy), d !== null && ku(d, _.deps))) {
        p.memoizedState = is(o, l, g, d);
        return;
      }
    }
    (je.flags |= i), (p.memoizedState = is(1 | o, l, g, d));
  }
  function Ih(i, o) {
    return Uo(8390656, 8, i, o);
  }
  function Pu(i, o) {
    return $o(2048, 8, i, o);
  }
  function Nh(i, o) {
    return $o(4, 2, i, o);
  }
  function zh(i, o) {
    return $o(4, 4, i, o);
  }
  function Fh(i, o) {
    if (typeof o == "function")
      return (
        (i = i()),
        o(i),
        function () {
          o(null);
        }
      );
    if (o != null)
      return (
        (i = i()),
        (o.current = i),
        function () {
          o.current = null;
        }
      );
  }
  function Ah(i, o, l) {
    return (
      (l = l != null ? l.concat([i]) : null), $o(4, 4, Fh.bind(null, o, i), l)
    );
  }
  function Tu() {}
  function jh(i, o) {
    var l = zt();
    o = o === void 0 ? null : o;
    var d = l.memoizedState;
    return d !== null && o !== null && ku(o, d[1])
      ? d[0]
      : ((l.memoizedState = [i, o]), i);
  }
  function Wh(i, o) {
    var l = zt();
    o = o === void 0 ? null : o;
    var d = l.memoizedState;
    return d !== null && o !== null && ku(o, d[1])
      ? d[0]
      : ((i = i()), (l.memoizedState = [i, o]), i);
  }
  function Hh(i, o, l) {
    return hr & 21
      ? (Vt(l, o) ||
          ((l = yf()), (je.lanes |= l), (pr |= l), (i.baseState = !0)),
        o)
      : (i.baseState && ((i.baseState = !1), (xt = !0)), (i.memoizedState = l));
  }
  function uv(i, o) {
    var l = Pe;
    (Pe = l !== 0 && 4 > l ? l : 4), i(!0);
    var d = _u.transition;
    _u.transition = {};
    try {
      i(!1), o();
    } finally {
      (Pe = l), (_u.transition = d);
    }
  }
  function Bh() {
    return zt().memoizedState;
  }
  function cv(i, o, l) {
    var d = qn(i);
    if (
      ((l = {
        lane: d,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Uh(i))
    )
      $h(o, l);
    else if (((l = xh(i, o, l, d)), l !== null)) {
      var p = yt();
      Gt(l, i, d, p), Vh(l, o, d);
    }
  }
  function dv(i, o, l) {
    var d = qn(i),
      p = {
        lane: d,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Uh(i)) $h(o, p);
    else {
      var g = i.alternate;
      if (
        i.lanes === 0 &&
        (g === null || g.lanes === 0) &&
        ((g = o.lastRenderedReducer), g !== null)
      )
        try {
          var _ = o.lastRenderedState,
            E = g(_, l);
          if (((p.hasEagerState = !0), (p.eagerState = E), Vt(E, _))) {
            var P = o.interleaved;
            P === null
              ? ((p.next = p), mu(o))
              : ((p.next = P.next), (P.next = p)),
              (o.interleaved = p);
            return;
          }
        } catch {
        } finally {
        }
      (l = xh(i, o, p, d)),
        l !== null && ((p = yt()), Gt(l, i, d, p), Vh(l, o, d));
    }
  }
  function Uh(i) {
    var o = i.alternate;
    return i === je || (o !== null && o === je);
  }
  function $h(i, o) {
    ts = Bo = !0;
    var l = i.pending;
    l === null ? (o.next = o) : ((o.next = l.next), (l.next = o)),
      (i.pending = o);
  }
  function Vh(i, o, l) {
    if (l & 4194240) {
      var d = o.lanes;
      (d &= i.pendingLanes), (l |= d), (o.lanes = l), Ml(i, l);
    }
  }
  var Vo = {
      readContext: Nt,
      useCallback: ut,
      useContext: ut,
      useEffect: ut,
      useImperativeHandle: ut,
      useInsertionEffect: ut,
      useLayoutEffect: ut,
      useMemo: ut,
      useReducer: ut,
      useRef: ut,
      useState: ut,
      useDebugValue: ut,
      useDeferredValue: ut,
      useTransition: ut,
      useMutableSource: ut,
      useSyncExternalStore: ut,
      useId: ut,
      unstable_isNewReconciler: !1,
    },
    fv = {
      readContext: Nt,
      useCallback: function (i, o) {
        return (nn().memoizedState = [i, o === void 0 ? null : o]), i;
      },
      useContext: Nt,
      useEffect: Ih,
      useImperativeHandle: function (i, o, l) {
        return (
          (l = l != null ? l.concat([i]) : null),
          Uo(4194308, 4, Fh.bind(null, o, i), l)
        );
      },
      useLayoutEffect: function (i, o) {
        return Uo(4194308, 4, i, o);
      },
      useInsertionEffect: function (i, o) {
        return Uo(4, 2, i, o);
      },
      useMemo: function (i, o) {
        var l = nn();
        return (
          (o = o === void 0 ? null : o),
          (i = i()),
          (l.memoizedState = [i, o]),
          i
        );
      },
      useReducer: function (i, o, l) {
        var d = nn();
        return (
          (o = l !== void 0 ? l(o) : o),
          (d.memoizedState = d.baseState = o),
          (i = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: i,
            lastRenderedState: o,
          }),
          (d.queue = i),
          (i = i.dispatch = cv.bind(null, je, i)),
          [d.memoizedState, i]
        );
      },
      useRef: function (i) {
        var o = nn();
        return (i = { current: i }), (o.memoizedState = i);
      },
      useState: Dh,
      useDebugValue: Tu,
      useDeferredValue: function (i) {
        return (nn().memoizedState = i);
      },
      useTransition: function () {
        var i = Dh(!1),
          o = i[0];
        return (i = uv.bind(null, i[1])), (nn().memoizedState = i), [o, i];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (i, o, l) {
        var d = je,
          p = nn();
        if (Fe) {
          if (l === void 0) throw Error(t(407));
          l = l();
        } else {
          if (((l = o()), tt === null)) throw Error(t(349));
          hr & 30 || Ph(d, o, l);
        }
        p.memoizedState = l;
        var g = { value: l, getSnapshot: o };
        return (
          (p.queue = g),
          Ih(Oh.bind(null, d, g, i), [i]),
          (d.flags |= 2048),
          is(9, Th.bind(null, d, g, l, o), void 0, null),
          l
        );
      },
      useId: function () {
        var i = nn(),
          o = tt.identifierPrefix;
        if (Fe) {
          var l = _n,
            d = xn;
          (l = (d & ~(1 << (32 - $t(d) - 1))).toString(32) + l),
            (o = ":" + o + "R" + l),
            (l = ns++),
            0 < l && (o += "H" + l.toString(32)),
            (o += ":");
        } else (l = lv++), (o = ":" + o + "r" + l.toString(32) + ":");
        return (i.memoizedState = o);
      },
      unstable_isNewReconciler: !1,
    },
    hv = {
      readContext: Nt,
      useCallback: jh,
      useContext: Nt,
      useEffect: Pu,
      useImperativeHandle: Ah,
      useInsertionEffect: Nh,
      useLayoutEffect: zh,
      useMemo: Wh,
      useReducer: Eu,
      useRef: Lh,
      useState: function () {
        return Eu(rs);
      },
      useDebugValue: Tu,
      useDeferredValue: function (i) {
        var o = zt();
        return Hh(o, Ze.memoizedState, i);
      },
      useTransition: function () {
        var i = Eu(rs)[0],
          o = zt().memoizedState;
        return [i, o];
      },
      useMutableSource: Eh,
      useSyncExternalStore: Ch,
      useId: Bh,
      unstable_isNewReconciler: !1,
    },
    pv = {
      readContext: Nt,
      useCallback: jh,
      useContext: Nt,
      useEffect: Pu,
      useImperativeHandle: Ah,
      useInsertionEffect: Nh,
      useLayoutEffect: zh,
      useMemo: Wh,
      useReducer: Cu,
      useRef: Lh,
      useState: function () {
        return Cu(rs);
      },
      useDebugValue: Tu,
      useDeferredValue: function (i) {
        var o = zt();
        return Ze === null ? (o.memoizedState = i) : Hh(o, Ze.memoizedState, i);
      },
      useTransition: function () {
        var i = Cu(rs)[0],
          o = zt().memoizedState;
        return [i, o];
      },
      useMutableSource: Eh,
      useSyncExternalStore: Ch,
      useId: Bh,
      unstable_isNewReconciler: !1,
    };
  function Kt(i, o) {
    if (i && i.defaultProps) {
      (o = Z({}, o)), (i = i.defaultProps);
      for (var l in i) o[l] === void 0 && (o[l] = i[l]);
      return o;
    }
    return o;
  }
  function Ou(i, o, l, d) {
    (o = i.memoizedState),
      (l = l(d, o)),
      (l = l == null ? o : Z({}, o, l)),
      (i.memoizedState = l),
      i.lanes === 0 && (i.updateQueue.baseState = l);
  }
  var Yo = {
    isMounted: function (i) {
      return (i = i._reactInternals) ? or(i) === i : !1;
    },
    enqueueSetState: function (i, o, l) {
      i = i._reactInternals;
      var d = yt(),
        p = qn(i),
        g = bn(d, p);
      (g.payload = o),
        l != null && (g.callback = l),
        (o = Vn(i, g, p)),
        o !== null && (Gt(o, i, p, d), Ao(o, i, p));
    },
    enqueueReplaceState: function (i, o, l) {
      i = i._reactInternals;
      var d = yt(),
        p = qn(i),
        g = bn(d, p);
      (g.tag = 1),
        (g.payload = o),
        l != null && (g.callback = l),
        (o = Vn(i, g, p)),
        o !== null && (Gt(o, i, p, d), Ao(o, i, p));
    },
    enqueueForceUpdate: function (i, o) {
      i = i._reactInternals;
      var l = yt(),
        d = qn(i),
        p = bn(l, d);
      (p.tag = 2),
        o != null && (p.callback = o),
        (o = Vn(i, p, d)),
        o !== null && (Gt(o, i, d, l), Ao(o, i, d));
    },
  };
  function Yh(i, o, l, d, p, g, _) {
    return (
      (i = i.stateNode),
      typeof i.shouldComponentUpdate == "function"
        ? i.shouldComponentUpdate(d, g, _)
        : o.prototype && o.prototype.isPureReactComponent
        ? !$i(l, d) || !$i(p, g)
        : !0
    );
  }
  function Kh(i, o, l) {
    var d = !1,
      p = Bn,
      g = o.contextType;
    return (
      typeof g == "object" && g !== null
        ? (g = Nt(g))
        : ((p = vt(o) ? lr : lt.current),
          (d = o.contextTypes),
          (g = (d = d != null) ? Qr(i, p) : Bn)),
      (o = new o(l, g)),
      (i.memoizedState =
        o.state !== null && o.state !== void 0 ? o.state : null),
      (o.updater = Yo),
      (i.stateNode = o),
      (o._reactInternals = i),
      d &&
        ((i = i.stateNode),
        (i.__reactInternalMemoizedUnmaskedChildContext = p),
        (i.__reactInternalMemoizedMaskedChildContext = g)),
      o
    );
  }
  function Xh(i, o, l, d) {
    (i = o.state),
      typeof o.componentWillReceiveProps == "function" &&
        o.componentWillReceiveProps(l, d),
      typeof o.UNSAFE_componentWillReceiveProps == "function" &&
        o.UNSAFE_componentWillReceiveProps(l, d),
      o.state !== i && Yo.enqueueReplaceState(o, o.state, null);
  }
  function Mu(i, o, l, d) {
    var p = i.stateNode;
    (p.props = l), (p.state = i.memoizedState), (p.refs = {}), gu(i);
    var g = o.contextType;
    typeof g == "object" && g !== null
      ? (p.context = Nt(g))
      : ((g = vt(o) ? lr : lt.current), (p.context = Qr(i, g))),
      (p.state = i.memoizedState),
      (g = o.getDerivedStateFromProps),
      typeof g == "function" && (Ou(i, o, g, l), (p.state = i.memoizedState)),
      typeof o.getDerivedStateFromProps == "function" ||
        typeof p.getSnapshotBeforeUpdate == "function" ||
        (typeof p.UNSAFE_componentWillMount != "function" &&
          typeof p.componentWillMount != "function") ||
        ((o = p.state),
        typeof p.componentWillMount == "function" && p.componentWillMount(),
        typeof p.UNSAFE_componentWillMount == "function" &&
          p.UNSAFE_componentWillMount(),
        o !== p.state && Yo.enqueueReplaceState(p, p.state, null),
        jo(i, l, p, d),
        (p.state = i.memoizedState)),
      typeof p.componentDidMount == "function" && (i.flags |= 4194308);
  }
  function si(i, o) {
    try {
      var l = "",
        d = o;
      do (l += me(d)), (d = d.return);
      while (d);
      var p = l;
    } catch (g) {
      p =
        `
Error generating stack: ` +
        g.message +
        `
` +
        g.stack;
    }
    return { value: i, source: o, stack: p, digest: null };
  }
  function Ru(i, o, l) {
    return { value: i, source: null, stack: l ?? null, digest: o ?? null };
  }
  function Du(i, o) {
    try {
      console.error(o.value);
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  var mv = typeof WeakMap == "function" ? WeakMap : Map;
  function qh(i, o, l) {
    (l = bn(-1, l)), (l.tag = 3), (l.payload = { element: null });
    var d = o.value;
    return (
      (l.callback = function () {
        Jo || ((Jo = !0), (Ku = d)), Du(i, o);
      }),
      l
    );
  }
  function Gh(i, o, l) {
    (l = bn(-1, l)), (l.tag = 3);
    var d = i.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var p = o.value;
      (l.payload = function () {
        return d(p);
      }),
        (l.callback = function () {
          Du(i, o);
        });
    }
    var g = i.stateNode;
    return (
      g !== null &&
        typeof g.componentDidCatch == "function" &&
        (l.callback = function () {
          Du(i, o),
            typeof d != "function" &&
              (Kn === null ? (Kn = new Set([this])) : Kn.add(this));
          var _ = o.stack;
          this.componentDidCatch(o.value, {
            componentStack: _ !== null ? _ : "",
          });
        }),
      l
    );
  }
  function Qh(i, o, l) {
    var d = i.pingCache;
    if (d === null) {
      d = i.pingCache = new mv();
      var p = new Set();
      d.set(o, p);
    } else (p = d.get(o)), p === void 0 && ((p = new Set()), d.set(o, p));
    p.has(l) || (p.add(l), (i = Ov.bind(null, i, o, l)), o.then(i, i));
  }
  function Zh(i) {
    do {
      var o;
      if (
        ((o = i.tag === 13) &&
          ((o = i.memoizedState),
          (o = o !== null ? o.dehydrated !== null : !0)),
        o)
      )
        return i;
      i = i.return;
    } while (i !== null);
    return null;
  }
  function Jh(i, o, l, d, p) {
    return i.mode & 1
      ? ((i.flags |= 65536), (i.lanes = p), i)
      : (i === o
          ? (i.flags |= 65536)
          : ((i.flags |= 128),
            (l.flags |= 131072),
            (l.flags &= -52805),
            l.tag === 1 &&
              (l.alternate === null
                ? (l.tag = 17)
                : ((o = bn(-1, 1)), (o.tag = 2), Vn(l, o, 1))),
            (l.lanes |= 1)),
        i);
  }
  var gv = R.ReactCurrentOwner,
    xt = !1;
  function gt(i, o, l, d) {
    o.child = i === null ? vh(o, null, l, d) : ti(o, i.child, l, d);
  }
  function ep(i, o, l, d, p) {
    l = l.render;
    var g = o.ref;
    return (
      ri(o, p),
      (d = bu(i, o, l, d, g, p)),
      (l = Su()),
      i !== null && !xt
        ? ((o.updateQueue = i.updateQueue),
          (o.flags &= -2053),
          (i.lanes &= ~p),
          Sn(i, o, p))
        : (Fe && l && ou(o), (o.flags |= 1), gt(i, o, d, p), o.child)
    );
  }
  function tp(i, o, l, d, p) {
    if (i === null) {
      var g = l.type;
      return typeof g == "function" &&
        !ec(g) &&
        g.defaultProps === void 0 &&
        l.compare === null &&
        l.defaultProps === void 0
        ? ((o.tag = 15), (o.type = g), np(i, o, g, d, p))
        : ((i = sa(l.type, null, d, o, o.mode, p)),
          (i.ref = o.ref),
          (i.return = o),
          (o.child = i));
    }
    if (((g = i.child), !(i.lanes & p))) {
      var _ = g.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : $i), l(_, d) && i.ref === o.ref)
      )
        return Sn(i, o, p);
    }
    return (
      (o.flags |= 1),
      (i = Qn(g, d)),
      (i.ref = o.ref),
      (i.return = o),
      (o.child = i)
    );
  }
  function np(i, o, l, d, p) {
    if (i !== null) {
      var g = i.memoizedProps;
      if ($i(g, d) && i.ref === o.ref)
        if (((xt = !1), (o.pendingProps = d = g), (i.lanes & p) !== 0))
          i.flags & 131072 && (xt = !0);
        else return (o.lanes = i.lanes), Sn(i, o, p);
    }
    return Lu(i, o, l, d, p);
  }
  function rp(i, o, l) {
    var d = o.pendingProps,
      p = d.children,
      g = i !== null ? i.memoizedState : null;
    if (d.mode === "hidden")
      if (!(o.mode & 1))
        (o.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Re(ai, Rt),
          (Rt |= l);
      else {
        if (!(l & 1073741824))
          return (
            (i = g !== null ? g.baseLanes | l : l),
            (o.lanes = o.childLanes = 1073741824),
            (o.memoizedState = {
              baseLanes: i,
              cachePool: null,
              transitions: null,
            }),
            (o.updateQueue = null),
            Re(ai, Rt),
            (Rt |= i),
            null
          );
        (o.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (d = g !== null ? g.baseLanes : l),
          Re(ai, Rt),
          (Rt |= d);
      }
    else
      g !== null ? ((d = g.baseLanes | l), (o.memoizedState = null)) : (d = l),
        Re(ai, Rt),
        (Rt |= d);
    return gt(i, o, p, l), o.child;
  }
  function ip(i, o) {
    var l = o.ref;
    ((i === null && l !== null) || (i !== null && i.ref !== l)) &&
      ((o.flags |= 512), (o.flags |= 2097152));
  }
  function Lu(i, o, l, d, p) {
    var g = vt(l) ? lr : lt.current;
    return (
      (g = Qr(o, g)),
      ri(o, p),
      (l = bu(i, o, l, d, g, p)),
      (d = Su()),
      i !== null && !xt
        ? ((o.updateQueue = i.updateQueue),
          (o.flags &= -2053),
          (i.lanes &= ~p),
          Sn(i, o, p))
        : (Fe && d && ou(o), (o.flags |= 1), gt(i, o, l, p), o.child)
    );
  }
  function sp(i, o, l, d, p) {
    if (vt(l)) {
      var g = !0;
      Mo(o);
    } else g = !1;
    if ((ri(o, p), o.stateNode === null))
      Xo(i, o), Kh(o, l, d), Mu(o, l, d, p), (d = !0);
    else if (i === null) {
      var _ = o.stateNode,
        E = o.memoizedProps;
      _.props = E;
      var P = _.context,
        F = l.contextType;
      typeof F == "object" && F !== null
        ? (F = Nt(F))
        : ((F = vt(l) ? lr : lt.current), (F = Qr(o, F)));
      var K = l.getDerivedStateFromProps,
        X =
          typeof K == "function" ||
          typeof _.getSnapshotBeforeUpdate == "function";
      X ||
        (typeof _.UNSAFE_componentWillReceiveProps != "function" &&
          typeof _.componentWillReceiveProps != "function") ||
        ((E !== d || P !== F) && Xh(o, _, d, F)),
        ($n = !1);
      var Y = o.memoizedState;
      (_.state = Y),
        jo(o, d, _, p),
        (P = o.memoizedState),
        E !== d || Y !== P || wt.current || $n
          ? (typeof K == "function" && (Ou(o, l, K, d), (P = o.memoizedState)),
            (E = $n || Yh(o, l, E, d, Y, P, F))
              ? (X ||
                  (typeof _.UNSAFE_componentWillMount != "function" &&
                    typeof _.componentWillMount != "function") ||
                  (typeof _.componentWillMount == "function" &&
                    _.componentWillMount(),
                  typeof _.UNSAFE_componentWillMount == "function" &&
                    _.UNSAFE_componentWillMount()),
                typeof _.componentDidMount == "function" &&
                  (o.flags |= 4194308))
              : (typeof _.componentDidMount == "function" &&
                  (o.flags |= 4194308),
                (o.memoizedProps = d),
                (o.memoizedState = P)),
            (_.props = d),
            (_.state = P),
            (_.context = F),
            (d = E))
          : (typeof _.componentDidMount == "function" && (o.flags |= 4194308),
            (d = !1));
    } else {
      (_ = o.stateNode),
        _h(i, o),
        (E = o.memoizedProps),
        (F = o.type === o.elementType ? E : Kt(o.type, E)),
        (_.props = F),
        (X = o.pendingProps),
        (Y = _.context),
        (P = l.contextType),
        typeof P == "object" && P !== null
          ? (P = Nt(P))
          : ((P = vt(l) ? lr : lt.current), (P = Qr(o, P)));
      var J = l.getDerivedStateFromProps;
      (K =
        typeof J == "function" ||
        typeof _.getSnapshotBeforeUpdate == "function") ||
        (typeof _.UNSAFE_componentWillReceiveProps != "function" &&
          typeof _.componentWillReceiveProps != "function") ||
        ((E !== X || Y !== P) && Xh(o, _, d, P)),
        ($n = !1),
        (Y = o.memoizedState),
        (_.state = Y),
        jo(o, d, _, p);
      var te = o.memoizedState;
      E !== X || Y !== te || wt.current || $n
        ? (typeof J == "function" && (Ou(o, l, J, d), (te = o.memoizedState)),
          (F = $n || Yh(o, l, F, d, Y, te, P) || !1)
            ? (K ||
                (typeof _.UNSAFE_componentWillUpdate != "function" &&
                  typeof _.componentWillUpdate != "function") ||
                (typeof _.componentWillUpdate == "function" &&
                  _.componentWillUpdate(d, te, P),
                typeof _.UNSAFE_componentWillUpdate == "function" &&
                  _.UNSAFE_componentWillUpdate(d, te, P)),
              typeof _.componentDidUpdate == "function" && (o.flags |= 4),
              typeof _.getSnapshotBeforeUpdate == "function" &&
                (o.flags |= 1024))
            : (typeof _.componentDidUpdate != "function" ||
                (E === i.memoizedProps && Y === i.memoizedState) ||
                (o.flags |= 4),
              typeof _.getSnapshotBeforeUpdate != "function" ||
                (E === i.memoizedProps && Y === i.memoizedState) ||
                (o.flags |= 1024),
              (o.memoizedProps = d),
              (o.memoizedState = te)),
          (_.props = d),
          (_.state = te),
          (_.context = P),
          (d = F))
        : (typeof _.componentDidUpdate != "function" ||
            (E === i.memoizedProps && Y === i.memoizedState) ||
            (o.flags |= 4),
          typeof _.getSnapshotBeforeUpdate != "function" ||
            (E === i.memoizedProps && Y === i.memoizedState) ||
            (o.flags |= 1024),
          (d = !1));
    }
    return Iu(i, o, l, d, g, p);
  }
  function Iu(i, o, l, d, p, g) {
    ip(i, o);
    var _ = (o.flags & 128) !== 0;
    if (!d && !_) return p && ch(o, l, !1), Sn(i, o, g);
    (d = o.stateNode), (gv.current = o);
    var E =
      _ && typeof l.getDerivedStateFromError != "function" ? null : d.render();
    return (
      (o.flags |= 1),
      i !== null && _
        ? ((o.child = ti(o, i.child, null, g)), (o.child = ti(o, null, E, g)))
        : gt(i, o, E, g),
      (o.memoizedState = d.state),
      p && ch(o, l, !0),
      o.child
    );
  }
  function op(i) {
    var o = i.stateNode;
    o.pendingContext
      ? lh(i, o.pendingContext, o.pendingContext !== o.context)
      : o.context && lh(i, o.context, !1),
      yu(i, o.containerInfo);
  }
  function ap(i, o, l, d, p) {
    return ei(), cu(p), (o.flags |= 256), gt(i, o, l, d), o.child;
  }
  var Nu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zu(i) {
    return { baseLanes: i, cachePool: null, transitions: null };
  }
  function lp(i, o, l) {
    var d = o.pendingProps,
      p = Ae.current,
      g = !1,
      _ = (o.flags & 128) !== 0,
      E;
    if (
      ((E = _) ||
        (E = i !== null && i.memoizedState === null ? !1 : (p & 2) !== 0),
      E
        ? ((g = !0), (o.flags &= -129))
        : (i === null || i.memoizedState !== null) && (p |= 1),
      Re(Ae, p & 1),
      i === null)
    )
      return (
        uu(o),
        (i = o.memoizedState),
        i !== null && ((i = i.dehydrated), i !== null)
          ? (o.mode & 1
              ? i.data === "$!"
                ? (o.lanes = 8)
                : (o.lanes = 1073741824)
              : (o.lanes = 1),
            null)
          : ((_ = d.children),
            (i = d.fallback),
            g
              ? ((d = o.mode),
                (g = o.child),
                (_ = { mode: "hidden", children: _ }),
                !(d & 1) && g !== null
                  ? ((g.childLanes = 0), (g.pendingProps = _))
                  : (g = oa(_, d, 0, null)),
                (i = wr(i, d, l, null)),
                (g.return = o),
                (i.return = o),
                (g.sibling = i),
                (o.child = g),
                (o.child.memoizedState = zu(l)),
                (o.memoizedState = Nu),
                i)
              : Fu(o, _))
      );
    if (((p = i.memoizedState), p !== null && ((E = p.dehydrated), E !== null)))
      return yv(i, o, _, d, E, p, l);
    if (g) {
      (g = d.fallback), (_ = o.mode), (p = i.child), (E = p.sibling);
      var P = { mode: "hidden", children: d.children };
      return (
        !(_ & 1) && o.child !== p
          ? ((d = o.child),
            (d.childLanes = 0),
            (d.pendingProps = P),
            (o.deletions = null))
          : ((d = Qn(p, P)), (d.subtreeFlags = p.subtreeFlags & 14680064)),
        E !== null ? (g = Qn(E, g)) : ((g = wr(g, _, l, null)), (g.flags |= 2)),
        (g.return = o),
        (d.return = o),
        (d.sibling = g),
        (o.child = d),
        (d = g),
        (g = o.child),
        (_ = i.child.memoizedState),
        (_ =
          _ === null
            ? zu(l)
            : {
                baseLanes: _.baseLanes | l,
                cachePool: null,
                transitions: _.transitions,
              }),
        (g.memoizedState = _),
        (g.childLanes = i.childLanes & ~l),
        (o.memoizedState = Nu),
        d
      );
    }
    return (
      (g = i.child),
      (i = g.sibling),
      (d = Qn(g, { mode: "visible", children: d.children })),
      !(o.mode & 1) && (d.lanes = l),
      (d.return = o),
      (d.sibling = null),
      i !== null &&
        ((l = o.deletions),
        l === null ? ((o.deletions = [i]), (o.flags |= 16)) : l.push(i)),
      (o.child = d),
      (o.memoizedState = null),
      d
    );
  }
  function Fu(i, o) {
    return (
      (o = oa({ mode: "visible", children: o }, i.mode, 0, null)),
      (o.return = i),
      (i.child = o)
    );
  }
  function Ko(i, o, l, d) {
    return (
      d !== null && cu(d),
      ti(o, i.child, null, l),
      (i = Fu(o, o.pendingProps.children)),
      (i.flags |= 2),
      (o.memoizedState = null),
      i
    );
  }
  function yv(i, o, l, d, p, g, _) {
    if (l)
      return o.flags & 256
        ? ((o.flags &= -257), (d = Ru(Error(t(422)))), Ko(i, o, _, d))
        : o.memoizedState !== null
        ? ((o.child = i.child), (o.flags |= 128), null)
        : ((g = d.fallback),
          (p = o.mode),
          (d = oa({ mode: "visible", children: d.children }, p, 0, null)),
          (g = wr(g, p, _, null)),
          (g.flags |= 2),
          (d.return = o),
          (g.return = o),
          (d.sibling = g),
          (o.child = d),
          o.mode & 1 && ti(o, i.child, null, _),
          (o.child.memoizedState = zu(_)),
          (o.memoizedState = Nu),
          g);
    if (!(o.mode & 1)) return Ko(i, o, _, null);
    if (p.data === "$!") {
      if (((d = p.nextSibling && p.nextSibling.dataset), d)) var E = d.dgst;
      return (
        (d = E), (g = Error(t(419))), (d = Ru(g, d, void 0)), Ko(i, o, _, d)
      );
    }
    if (((E = (_ & i.childLanes) !== 0), xt || E)) {
      if (((d = tt), d !== null)) {
        switch (_ & -_) {
          case 4:
            p = 2;
            break;
          case 16:
            p = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            p = 32;
            break;
          case 536870912:
            p = 268435456;
            break;
          default:
            p = 0;
        }
        (p = p & (d.suspendedLanes | _) ? 0 : p),
          p !== 0 &&
            p !== g.retryLane &&
            ((g.retryLane = p), kn(i, p), Gt(d, i, p, -1));
      }
      return Ju(), (d = Ru(Error(t(421)))), Ko(i, o, _, d);
    }
    return p.data === "$?"
      ? ((o.flags |= 128),
        (o.child = i.child),
        (o = Mv.bind(null, i)),
        (p._reactRetry = o),
        null)
      : ((i = g.treeContext),
        (Mt = Wn(p.nextSibling)),
        (Ot = o),
        (Fe = !0),
        (Yt = null),
        i !== null &&
          ((Lt[It++] = xn),
          (Lt[It++] = _n),
          (Lt[It++] = ur),
          (xn = i.id),
          (_n = i.overflow),
          (ur = o)),
        (o = Fu(o, d.children)),
        (o.flags |= 4096),
        o);
  }
  function up(i, o, l) {
    i.lanes |= o;
    var d = i.alternate;
    d !== null && (d.lanes |= o), pu(i.return, o, l);
  }
  function Au(i, o, l, d, p) {
    var g = i.memoizedState;
    g === null
      ? (i.memoizedState = {
          isBackwards: o,
          rendering: null,
          renderingStartTime: 0,
          last: d,
          tail: l,
          tailMode: p,
        })
      : ((g.isBackwards = o),
        (g.rendering = null),
        (g.renderingStartTime = 0),
        (g.last = d),
        (g.tail = l),
        (g.tailMode = p));
  }
  function cp(i, o, l) {
    var d = o.pendingProps,
      p = d.revealOrder,
      g = d.tail;
    if ((gt(i, o, d.children, l), (d = Ae.current), d & 2))
      (d = (d & 1) | 2), (o.flags |= 128);
    else {
      if (i !== null && i.flags & 128)
        e: for (i = o.child; i !== null; ) {
          if (i.tag === 13) i.memoizedState !== null && up(i, l, o);
          else if (i.tag === 19) up(i, l, o);
          else if (i.child !== null) {
            (i.child.return = i), (i = i.child);
            continue;
          }
          if (i === o) break e;
          for (; i.sibling === null; ) {
            if (i.return === null || i.return === o) break e;
            i = i.return;
          }
          (i.sibling.return = i.return), (i = i.sibling);
        }
      d &= 1;
    }
    if ((Re(Ae, d), !(o.mode & 1))) o.memoizedState = null;
    else
      switch (p) {
        case "forwards":
          for (l = o.child, p = null; l !== null; )
            (i = l.alternate),
              i !== null && Wo(i) === null && (p = l),
              (l = l.sibling);
          (l = p),
            l === null
              ? ((p = o.child), (o.child = null))
              : ((p = l.sibling), (l.sibling = null)),
            Au(o, !1, p, l, g);
          break;
        case "backwards":
          for (l = null, p = o.child, o.child = null; p !== null; ) {
            if (((i = p.alternate), i !== null && Wo(i) === null)) {
              o.child = p;
              break;
            }
            (i = p.sibling), (p.sibling = l), (l = p), (p = i);
          }
          Au(o, !0, l, null, g);
          break;
        case "together":
          Au(o, !1, null, null, void 0);
          break;
        default:
          o.memoizedState = null;
      }
    return o.child;
  }
  function Xo(i, o) {
    !(o.mode & 1) &&
      i !== null &&
      ((i.alternate = null), (o.alternate = null), (o.flags |= 2));
  }
  function Sn(i, o, l) {
    if (
      (i !== null && (o.dependencies = i.dependencies),
      (pr |= o.lanes),
      !(l & o.childLanes))
    )
      return null;
    if (i !== null && o.child !== i.child) throw Error(t(153));
    if (o.child !== null) {
      for (
        i = o.child, l = Qn(i, i.pendingProps), o.child = l, l.return = o;
        i.sibling !== null;

      )
        (i = i.sibling),
          (l = l.sibling = Qn(i, i.pendingProps)),
          (l.return = o);
      l.sibling = null;
    }
    return o.child;
  }
  function wv(i, o, l) {
    switch (o.tag) {
      case 3:
        op(o), ei();
        break;
      case 5:
        Sh(o);
        break;
      case 1:
        vt(o.type) && Mo(o);
        break;
      case 4:
        yu(o, o.stateNode.containerInfo);
        break;
      case 10:
        var d = o.type._context,
          p = o.memoizedProps.value;
        Re(zo, d._currentValue), (d._currentValue = p);
        break;
      case 13:
        if (((d = o.memoizedState), d !== null))
          return d.dehydrated !== null
            ? (Re(Ae, Ae.current & 1), (o.flags |= 128), null)
            : l & o.child.childLanes
            ? lp(i, o, l)
            : (Re(Ae, Ae.current & 1),
              (i = Sn(i, o, l)),
              i !== null ? i.sibling : null);
        Re(Ae, Ae.current & 1);
        break;
      case 19:
        if (((d = (l & o.childLanes) !== 0), i.flags & 128)) {
          if (d) return cp(i, o, l);
          o.flags |= 128;
        }
        if (
          ((p = o.memoizedState),
          p !== null &&
            ((p.rendering = null), (p.tail = null), (p.lastEffect = null)),
          Re(Ae, Ae.current),
          d)
        )
          break;
        return null;
      case 22:
      case 23:
        return (o.lanes = 0), rp(i, o, l);
    }
    return Sn(i, o, l);
  }
  var dp, ju, fp, hp;
  (dp = function (i, o) {
    for (var l = o.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) i.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        (l.child.return = l), (l = l.child);
        continue;
      }
      if (l === o) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === o) return;
        l = l.return;
      }
      (l.sibling.return = l.return), (l = l.sibling);
    }
  }),
    (ju = function () {}),
    (fp = function (i, o, l, d) {
      var p = i.memoizedProps;
      if (p !== d) {
        (i = o.stateNode), fr(tn.current);
        var g = null;
        switch (l) {
          case "input":
            (p = pl(i, p)), (d = pl(i, d)), (g = []);
            break;
          case "select":
            (p = Z({}, p, { value: void 0 })),
              (d = Z({}, d, { value: void 0 })),
              (g = []);
            break;
          case "textarea":
            (p = yl(i, p)), (d = yl(i, d)), (g = []);
            break;
          default:
            typeof p.onClick != "function" &&
              typeof d.onClick == "function" &&
              (i.onclick = Po);
        }
        vl(l, d);
        var _;
        l = null;
        for (F in p)
          if (!d.hasOwnProperty(F) && p.hasOwnProperty(F) && p[F] != null)
            if (F === "style") {
              var E = p[F];
              for (_ in E) E.hasOwnProperty(_) && (l || (l = {}), (l[_] = ""));
            } else
              F !== "dangerouslySetInnerHTML" &&
                F !== "children" &&
                F !== "suppressContentEditableWarning" &&
                F !== "suppressHydrationWarning" &&
                F !== "autoFocus" &&
                (s.hasOwnProperty(F)
                  ? g || (g = [])
                  : (g = g || []).push(F, null));
        for (F in d) {
          var P = d[F];
          if (
            ((E = p != null ? p[F] : void 0),
            d.hasOwnProperty(F) && P !== E && (P != null || E != null))
          )
            if (F === "style")
              if (E) {
                for (_ in E)
                  !E.hasOwnProperty(_) ||
                    (P && P.hasOwnProperty(_)) ||
                    (l || (l = {}), (l[_] = ""));
                for (_ in P)
                  P.hasOwnProperty(_) &&
                    E[_] !== P[_] &&
                    (l || (l = {}), (l[_] = P[_]));
              } else l || (g || (g = []), g.push(F, l)), (l = P);
            else
              F === "dangerouslySetInnerHTML"
                ? ((P = P ? P.__html : void 0),
                  (E = E ? E.__html : void 0),
                  P != null && E !== P && (g = g || []).push(F, P))
                : F === "children"
                ? (typeof P != "string" && typeof P != "number") ||
                  (g = g || []).push(F, "" + P)
                : F !== "suppressContentEditableWarning" &&
                  F !== "suppressHydrationWarning" &&
                  (s.hasOwnProperty(F)
                    ? (P != null && F === "onScroll" && De("scroll", i),
                      g || E === P || (g = []))
                    : (g = g || []).push(F, P));
        }
        l && (g = g || []).push("style", l);
        var F = g;
        (o.updateQueue = F) && (o.flags |= 4);
      }
    }),
    (hp = function (i, o, l, d) {
      l !== d && (o.flags |= 4);
    });
  function ss(i, o) {
    if (!Fe)
      switch (i.tailMode) {
        case "hidden":
          o = i.tail;
          for (var l = null; o !== null; )
            o.alternate !== null && (l = o), (o = o.sibling);
          l === null ? (i.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = i.tail;
          for (var d = null; l !== null; )
            l.alternate !== null && (d = l), (l = l.sibling);
          d === null
            ? o || i.tail === null
              ? (i.tail = null)
              : (i.tail.sibling = null)
            : (d.sibling = null);
      }
  }
  function ct(i) {
    var o = i.alternate !== null && i.alternate.child === i.child,
      l = 0,
      d = 0;
    if (o)
      for (var p = i.child; p !== null; )
        (l |= p.lanes | p.childLanes),
          (d |= p.subtreeFlags & 14680064),
          (d |= p.flags & 14680064),
          (p.return = i),
          (p = p.sibling);
    else
      for (p = i.child; p !== null; )
        (l |= p.lanes | p.childLanes),
          (d |= p.subtreeFlags),
          (d |= p.flags),
          (p.return = i),
          (p = p.sibling);
    return (i.subtreeFlags |= d), (i.childLanes = l), o;
  }
  function vv(i, o, l) {
    var d = o.pendingProps;
    switch ((au(o), o.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ct(o), null;
      case 1:
        return vt(o.type) && Oo(), ct(o), null;
      case 3:
        return (
          (d = o.stateNode),
          ii(),
          Le(wt),
          Le(lt),
          xu(),
          d.pendingContext &&
            ((d.context = d.pendingContext), (d.pendingContext = null)),
          (i === null || i.child === null) &&
            (Io(o)
              ? (o.flags |= 4)
              : i === null ||
                (i.memoizedState.isDehydrated && !(o.flags & 256)) ||
                ((o.flags |= 1024), Yt !== null && (Gu(Yt), (Yt = null)))),
          ju(i, o),
          ct(o),
          null
        );
      case 5:
        wu(o);
        var p = fr(es.current);
        if (((l = o.type), i !== null && o.stateNode != null))
          fp(i, o, l, d, p),
            i.ref !== o.ref && ((o.flags |= 512), (o.flags |= 2097152));
        else {
          if (!d) {
            if (o.stateNode === null) throw Error(t(166));
            return ct(o), null;
          }
          if (((i = fr(tn.current)), Io(o))) {
            (d = o.stateNode), (l = o.type);
            var g = o.memoizedProps;
            switch (((d[en] = o), (d[qi] = g), (i = (o.mode & 1) !== 0), l)) {
              case "dialog":
                De("cancel", d), De("close", d);
                break;
              case "iframe":
              case "object":
              case "embed":
                De("load", d);
                break;
              case "video":
              case "audio":
                for (p = 0; p < Yi.length; p++) De(Yi[p], d);
                break;
              case "source":
                De("error", d);
                break;
              case "img":
              case "image":
              case "link":
                De("error", d), De("load", d);
                break;
              case "details":
                De("toggle", d);
                break;
              case "input":
                Yd(d, g), De("invalid", d);
                break;
              case "select":
                (d._wrapperState = { wasMultiple: !!g.multiple }),
                  De("invalid", d);
                break;
              case "textarea":
                qd(d, g), De("invalid", d);
            }
            vl(l, g), (p = null);
            for (var _ in g)
              if (g.hasOwnProperty(_)) {
                var E = g[_];
                _ === "children"
                  ? typeof E == "string"
                    ? d.textContent !== E &&
                      (g.suppressHydrationWarning !== !0 &&
                        Co(d.textContent, E, i),
                      (p = ["children", E]))
                    : typeof E == "number" &&
                      d.textContent !== "" + E &&
                      (g.suppressHydrationWarning !== !0 &&
                        Co(d.textContent, E, i),
                      (p = ["children", "" + E]))
                  : s.hasOwnProperty(_) &&
                    E != null &&
                    _ === "onScroll" &&
                    De("scroll", d);
              }
            switch (l) {
              case "input":
                no(d), Xd(d, g, !0);
                break;
              case "textarea":
                no(d), Qd(d);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof g.onClick == "function" && (d.onclick = Po);
            }
            (d = p), (o.updateQueue = d), d !== null && (o.flags |= 4);
          } else {
            (_ = p.nodeType === 9 ? p : p.ownerDocument),
              i === "http://www.w3.org/1999/xhtml" && (i = Zd(l)),
              i === "http://www.w3.org/1999/xhtml"
                ? l === "script"
                  ? ((i = _.createElement("div")),
                    (i.innerHTML = "<script></script>"),
                    (i = i.removeChild(i.firstChild)))
                  : typeof d.is == "string"
                  ? (i = _.createElement(l, { is: d.is }))
                  : ((i = _.createElement(l)),
                    l === "select" &&
                      ((_ = i),
                      d.multiple
                        ? (_.multiple = !0)
                        : d.size && (_.size = d.size)))
                : (i = _.createElementNS(i, l)),
              (i[en] = o),
              (i[qi] = d),
              dp(i, o, !1, !1),
              (o.stateNode = i);
            e: {
              switch (((_ = xl(l, d)), l)) {
                case "dialog":
                  De("cancel", i), De("close", i), (p = d);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  De("load", i), (p = d);
                  break;
                case "video":
                case "audio":
                  for (p = 0; p < Yi.length; p++) De(Yi[p], i);
                  p = d;
                  break;
                case "source":
                  De("error", i), (p = d);
                  break;
                case "img":
                case "image":
                case "link":
                  De("error", i), De("load", i), (p = d);
                  break;
                case "details":
                  De("toggle", i), (p = d);
                  break;
                case "input":
                  Yd(i, d), (p = pl(i, d)), De("invalid", i);
                  break;
                case "option":
                  p = d;
                  break;
                case "select":
                  (i._wrapperState = { wasMultiple: !!d.multiple }),
                    (p = Z({}, d, { value: void 0 })),
                    De("invalid", i);
                  break;
                case "textarea":
                  qd(i, d), (p = yl(i, d)), De("invalid", i);
                  break;
                default:
                  p = d;
              }
              vl(l, p), (E = p);
              for (g in E)
                if (E.hasOwnProperty(g)) {
                  var P = E[g];
                  g === "style"
                    ? tf(i, P)
                    : g === "dangerouslySetInnerHTML"
                    ? ((P = P ? P.__html : void 0), P != null && Jd(i, P))
                    : g === "children"
                    ? typeof P == "string"
                      ? (l !== "textarea" || P !== "") && Pi(i, P)
                      : typeof P == "number" && Pi(i, "" + P)
                    : g !== "suppressContentEditableWarning" &&
                      g !== "suppressHydrationWarning" &&
                      g !== "autoFocus" &&
                      (s.hasOwnProperty(g)
                        ? P != null && g === "onScroll" && De("scroll", i)
                        : P != null && O(i, g, P, _));
                }
              switch (l) {
                case "input":
                  no(i), Xd(i, d, !1);
                  break;
                case "textarea":
                  no(i), Qd(i);
                  break;
                case "option":
                  d.value != null && i.setAttribute("value", "" + Ce(d.value));
                  break;
                case "select":
                  (i.multiple = !!d.multiple),
                    (g = d.value),
                    g != null
                      ? jr(i, !!d.multiple, g, !1)
                      : d.defaultValue != null &&
                        jr(i, !!d.multiple, d.defaultValue, !0);
                  break;
                default:
                  typeof p.onClick == "function" && (i.onclick = Po);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  d = !!d.autoFocus;
                  break e;
                case "img":
                  d = !0;
                  break e;
                default:
                  d = !1;
              }
            }
            d && (o.flags |= 4);
          }
          o.ref !== null && ((o.flags |= 512), (o.flags |= 2097152));
        }
        return ct(o), null;
      case 6:
        if (i && o.stateNode != null) hp(i, o, i.memoizedProps, d);
        else {
          if (typeof d != "string" && o.stateNode === null) throw Error(t(166));
          if (((l = fr(es.current)), fr(tn.current), Io(o))) {
            if (
              ((d = o.stateNode),
              (l = o.memoizedProps),
              (d[en] = o),
              (g = d.nodeValue !== l) && ((i = Ot), i !== null))
            )
              switch (i.tag) {
                case 3:
                  Co(d.nodeValue, l, (i.mode & 1) !== 0);
                  break;
                case 5:
                  i.memoizedProps.suppressHydrationWarning !== !0 &&
                    Co(d.nodeValue, l, (i.mode & 1) !== 0);
              }
            g && (o.flags |= 4);
          } else
            (d = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(d)),
              (d[en] = o),
              (o.stateNode = d);
        }
        return ct(o), null;
      case 13:
        if (
          (Le(Ae),
          (d = o.memoizedState),
          i === null ||
            (i.memoizedState !== null && i.memoizedState.dehydrated !== null))
        ) {
          if (Fe && Mt !== null && o.mode & 1 && !(o.flags & 128))
            gh(), ei(), (o.flags |= 98560), (g = !1);
          else if (((g = Io(o)), d !== null && d.dehydrated !== null)) {
            if (i === null) {
              if (!g) throw Error(t(318));
              if (
                ((g = o.memoizedState),
                (g = g !== null ? g.dehydrated : null),
                !g)
              )
                throw Error(t(317));
              g[en] = o;
            } else
              ei(),
                !(o.flags & 128) && (o.memoizedState = null),
                (o.flags |= 4);
            ct(o), (g = !1);
          } else Yt !== null && (Gu(Yt), (Yt = null)), (g = !0);
          if (!g) return o.flags & 65536 ? o : null;
        }
        return o.flags & 128
          ? ((o.lanes = l), o)
          : ((d = d !== null),
            d !== (i !== null && i.memoizedState !== null) &&
              d &&
              ((o.child.flags |= 8192),
              o.mode & 1 &&
                (i === null || Ae.current & 1 ? Je === 0 && (Je = 3) : Ju())),
            o.updateQueue !== null && (o.flags |= 4),
            ct(o),
            null);
      case 4:
        return (
          ii(),
          ju(i, o),
          i === null && Ki(o.stateNode.containerInfo),
          ct(o),
          null
        );
      case 10:
        return hu(o.type._context), ct(o), null;
      case 17:
        return vt(o.type) && Oo(), ct(o), null;
      case 19:
        if ((Le(Ae), (g = o.memoizedState), g === null)) return ct(o), null;
        if (((d = (o.flags & 128) !== 0), (_ = g.rendering), _ === null))
          if (d) ss(g, !1);
          else {
            if (Je !== 0 || (i !== null && i.flags & 128))
              for (i = o.child; i !== null; ) {
                if (((_ = Wo(i)), _ !== null)) {
                  for (
                    o.flags |= 128,
                      ss(g, !1),
                      d = _.updateQueue,
                      d !== null && ((o.updateQueue = d), (o.flags |= 4)),
                      o.subtreeFlags = 0,
                      d = l,
                      l = o.child;
                    l !== null;

                  )
                    (g = l),
                      (i = d),
                      (g.flags &= 14680066),
                      (_ = g.alternate),
                      _ === null
                        ? ((g.childLanes = 0),
                          (g.lanes = i),
                          (g.child = null),
                          (g.subtreeFlags = 0),
                          (g.memoizedProps = null),
                          (g.memoizedState = null),
                          (g.updateQueue = null),
                          (g.dependencies = null),
                          (g.stateNode = null))
                        : ((g.childLanes = _.childLanes),
                          (g.lanes = _.lanes),
                          (g.child = _.child),
                          (g.subtreeFlags = 0),
                          (g.deletions = null),
                          (g.memoizedProps = _.memoizedProps),
                          (g.memoizedState = _.memoizedState),
                          (g.updateQueue = _.updateQueue),
                          (g.type = _.type),
                          (i = _.dependencies),
                          (g.dependencies =
                            i === null
                              ? null
                              : {
                                  lanes: i.lanes,
                                  firstContext: i.firstContext,
                                })),
                      (l = l.sibling);
                  return Re(Ae, (Ae.current & 1) | 2), o.child;
                }
                i = i.sibling;
              }
            g.tail !== null &&
              Ye() > li &&
              ((o.flags |= 128), (d = !0), ss(g, !1), (o.lanes = 4194304));
          }
        else {
          if (!d)
            if (((i = Wo(_)), i !== null)) {
              if (
                ((o.flags |= 128),
                (d = !0),
                (l = i.updateQueue),
                l !== null && ((o.updateQueue = l), (o.flags |= 4)),
                ss(g, !0),
                g.tail === null &&
                  g.tailMode === "hidden" &&
                  !_.alternate &&
                  !Fe)
              )
                return ct(o), null;
            } else
              2 * Ye() - g.renderingStartTime > li &&
                l !== 1073741824 &&
                ((o.flags |= 128), (d = !0), ss(g, !1), (o.lanes = 4194304));
          g.isBackwards
            ? ((_.sibling = o.child), (o.child = _))
            : ((l = g.last),
              l !== null ? (l.sibling = _) : (o.child = _),
              (g.last = _));
        }
        return g.tail !== null
          ? ((o = g.tail),
            (g.rendering = o),
            (g.tail = o.sibling),
            (g.renderingStartTime = Ye()),
            (o.sibling = null),
            (l = Ae.current),
            Re(Ae, d ? (l & 1) | 2 : l & 1),
            o)
          : (ct(o), null);
      case 22:
      case 23:
        return (
          Zu(),
          (d = o.memoizedState !== null),
          i !== null && (i.memoizedState !== null) !== d && (o.flags |= 8192),
          d && o.mode & 1
            ? Rt & 1073741824 &&
              (ct(o), o.subtreeFlags & 6 && (o.flags |= 8192))
            : ct(o),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(t(156, o.tag));
  }
  function xv(i, o) {
    switch ((au(o), o.tag)) {
      case 1:
        return (
          vt(o.type) && Oo(),
          (i = o.flags),
          i & 65536 ? ((o.flags = (i & -65537) | 128), o) : null
        );
      case 3:
        return (
          ii(),
          Le(wt),
          Le(lt),
          xu(),
          (i = o.flags),
          i & 65536 && !(i & 128) ? ((o.flags = (i & -65537) | 128), o) : null
        );
      case 5:
        return wu(o), null;
      case 13:
        if (
          (Le(Ae), (i = o.memoizedState), i !== null && i.dehydrated !== null)
        ) {
          if (o.alternate === null) throw Error(t(340));
          ei();
        }
        return (
          (i = o.flags), i & 65536 ? ((o.flags = (i & -65537) | 128), o) : null
        );
      case 19:
        return Le(Ae), null;
      case 4:
        return ii(), null;
      case 10:
        return hu(o.type._context), null;
      case 22:
      case 23:
        return Zu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var qo = !1,
    dt = !1,
    _v = typeof WeakSet == "function" ? WeakSet : Set,
    ee = null;
  function oi(i, o) {
    var l = i.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (d) {
          Be(i, o, d);
        }
      else l.current = null;
  }
  function Wu(i, o, l) {
    try {
      l();
    } catch (d) {
      Be(i, o, d);
    }
  }
  var pp = !1;
  function kv(i, o) {
    if (((Zl = mo), (i = Yf()), $l(i))) {
      if ("selectionStart" in i)
        var l = { start: i.selectionStart, end: i.selectionEnd };
      else
        e: {
          l = ((l = i.ownerDocument) && l.defaultView) || window;
          var d = l.getSelection && l.getSelection();
          if (d && d.rangeCount !== 0) {
            l = d.anchorNode;
            var p = d.anchorOffset,
              g = d.focusNode;
            d = d.focusOffset;
            try {
              l.nodeType, g.nodeType;
            } catch {
              l = null;
              break e;
            }
            var _ = 0,
              E = -1,
              P = -1,
              F = 0,
              K = 0,
              X = i,
              Y = null;
            t: for (;;) {
              for (
                var J;
                X !== l || (p !== 0 && X.nodeType !== 3) || (E = _ + p),
                  X !== g || (d !== 0 && X.nodeType !== 3) || (P = _ + d),
                  X.nodeType === 3 && (_ += X.nodeValue.length),
                  (J = X.firstChild) !== null;

              )
                (Y = X), (X = J);
              for (;;) {
                if (X === i) break t;
                if (
                  (Y === l && ++F === p && (E = _),
                  Y === g && ++K === d && (P = _),
                  (J = X.nextSibling) !== null)
                )
                  break;
                (X = Y), (Y = X.parentNode);
              }
              X = J;
            }
            l = E === -1 || P === -1 ? null : { start: E, end: P };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      Jl = { focusedElem: i, selectionRange: l }, mo = !1, ee = o;
      ee !== null;

    )
      if (
        ((o = ee), (i = o.child), (o.subtreeFlags & 1028) !== 0 && i !== null)
      )
        (i.return = o), (ee = i);
      else
        for (; ee !== null; ) {
          o = ee;
          try {
            var te = o.alternate;
            if (o.flags & 1024)
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (te !== null) {
                    var ie = te.memoizedProps,
                      Ke = te.memoizedState,
                      L = o.stateNode,
                      T = L.getSnapshotBeforeUpdate(
                        o.elementType === o.type ? ie : Kt(o.type, ie),
                        Ke
                      );
                    L.__reactInternalSnapshotBeforeUpdate = T;
                  }
                  break;
                case 3:
                  var I = o.stateNode.containerInfo;
                  I.nodeType === 1
                    ? (I.textContent = "")
                    : I.nodeType === 9 &&
                      I.documentElement &&
                      I.removeChild(I.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(t(163));
              }
          } catch (q) {
            Be(o, o.return, q);
          }
          if (((i = o.sibling), i !== null)) {
            (i.return = o.return), (ee = i);
            break;
          }
          ee = o.return;
        }
    return (te = pp), (pp = !1), te;
  }
  function os(i, o, l) {
    var d = o.updateQueue;
    if (((d = d !== null ? d.lastEffect : null), d !== null)) {
      var p = (d = d.next);
      do {
        if ((p.tag & i) === i) {
          var g = p.destroy;
          (p.destroy = void 0), g !== void 0 && Wu(o, l, g);
        }
        p = p.next;
      } while (p !== d);
    }
  }
  function Go(i, o) {
    if (
      ((o = o.updateQueue), (o = o !== null ? o.lastEffect : null), o !== null)
    ) {
      var l = (o = o.next);
      do {
        if ((l.tag & i) === i) {
          var d = l.create;
          l.destroy = d();
        }
        l = l.next;
      } while (l !== o);
    }
  }
  function Hu(i) {
    var o = i.ref;
    if (o !== null) {
      var l = i.stateNode;
      switch (i.tag) {
        case 5:
          i = l;
          break;
        default:
          i = l;
      }
      typeof o == "function" ? o(i) : (o.current = i);
    }
  }
  function mp(i) {
    var o = i.alternate;
    o !== null && ((i.alternate = null), mp(o)),
      (i.child = null),
      (i.deletions = null),
      (i.sibling = null),
      i.tag === 5 &&
        ((o = i.stateNode),
        o !== null &&
          (delete o[en],
          delete o[qi],
          delete o[ru],
          delete o[iv],
          delete o[sv])),
      (i.stateNode = null),
      (i.return = null),
      (i.dependencies = null),
      (i.memoizedProps = null),
      (i.memoizedState = null),
      (i.pendingProps = null),
      (i.stateNode = null),
      (i.updateQueue = null);
  }
  function gp(i) {
    return i.tag === 5 || i.tag === 3 || i.tag === 4;
  }
  function yp(i) {
    e: for (;;) {
      for (; i.sibling === null; ) {
        if (i.return === null || gp(i.return)) return null;
        i = i.return;
      }
      for (
        i.sibling.return = i.return, i = i.sibling;
        i.tag !== 5 && i.tag !== 6 && i.tag !== 18;

      ) {
        if (i.flags & 2 || i.child === null || i.tag === 4) continue e;
        (i.child.return = i), (i = i.child);
      }
      if (!(i.flags & 2)) return i.stateNode;
    }
  }
  function Bu(i, o, l) {
    var d = i.tag;
    if (d === 5 || d === 6)
      (i = i.stateNode),
        o
          ? l.nodeType === 8
            ? l.parentNode.insertBefore(i, o)
            : l.insertBefore(i, o)
          : (l.nodeType === 8
              ? ((o = l.parentNode), o.insertBefore(i, l))
              : ((o = l), o.appendChild(i)),
            (l = l._reactRootContainer),
            l != null || o.onclick !== null || (o.onclick = Po));
    else if (d !== 4 && ((i = i.child), i !== null))
      for (Bu(i, o, l), i = i.sibling; i !== null; )
        Bu(i, o, l), (i = i.sibling);
  }
  function Uu(i, o, l) {
    var d = i.tag;
    if (d === 5 || d === 6)
      (i = i.stateNode), o ? l.insertBefore(i, o) : l.appendChild(i);
    else if (d !== 4 && ((i = i.child), i !== null))
      for (Uu(i, o, l), i = i.sibling; i !== null; )
        Uu(i, o, l), (i = i.sibling);
  }
  var ot = null,
    Xt = !1;
  function Yn(i, o, l) {
    for (l = l.child; l !== null; ) wp(i, o, l), (l = l.sibling);
  }
  function wp(i, o, l) {
    if (Jt && typeof Jt.onCommitFiberUnmount == "function")
      try {
        Jt.onCommitFiberUnmount(lo, l);
      } catch {}
    switch (l.tag) {
      case 5:
        dt || oi(l, o);
      case 6:
        var d = ot,
          p = Xt;
        (ot = null),
          Yn(i, o, l),
          (ot = d),
          (Xt = p),
          ot !== null &&
            (Xt
              ? ((i = ot),
                (l = l.stateNode),
                i.nodeType === 8
                  ? i.parentNode.removeChild(l)
                  : i.removeChild(l))
              : ot.removeChild(l.stateNode));
        break;
      case 18:
        ot !== null &&
          (Xt
            ? ((i = ot),
              (l = l.stateNode),
              i.nodeType === 8
                ? nu(i.parentNode, l)
                : i.nodeType === 1 && nu(i, l),
              Ai(i))
            : nu(ot, l.stateNode));
        break;
      case 4:
        (d = ot),
          (p = Xt),
          (ot = l.stateNode.containerInfo),
          (Xt = !0),
          Yn(i, o, l),
          (ot = d),
          (Xt = p);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !dt &&
          ((d = l.updateQueue), d !== null && ((d = d.lastEffect), d !== null))
        ) {
          p = d = d.next;
          do {
            var g = p,
              _ = g.destroy;
            (g = g.tag),
              _ !== void 0 && (g & 2 || g & 4) && Wu(l, o, _),
              (p = p.next);
          } while (p !== d);
        }
        Yn(i, o, l);
        break;
      case 1:
        if (
          !dt &&
          (oi(l, o),
          (d = l.stateNode),
          typeof d.componentWillUnmount == "function")
        )
          try {
            (d.props = l.memoizedProps),
              (d.state = l.memoizedState),
              d.componentWillUnmount();
          } catch (E) {
            Be(l, o, E);
          }
        Yn(i, o, l);
        break;
      case 21:
        Yn(i, o, l);
        break;
      case 22:
        l.mode & 1
          ? ((dt = (d = dt) || l.memoizedState !== null), Yn(i, o, l), (dt = d))
          : Yn(i, o, l);
        break;
      default:
        Yn(i, o, l);
    }
  }
  function vp(i) {
    var o = i.updateQueue;
    if (o !== null) {
      i.updateQueue = null;
      var l = i.stateNode;
      l === null && (l = i.stateNode = new _v()),
        o.forEach(function (d) {
          var p = Rv.bind(null, i, d);
          l.has(d) || (l.add(d), d.then(p, p));
        });
    }
  }
  function qt(i, o) {
    var l = o.deletions;
    if (l !== null)
      for (var d = 0; d < l.length; d++) {
        var p = l[d];
        try {
          var g = i,
            _ = o,
            E = _;
          e: for (; E !== null; ) {
            switch (E.tag) {
              case 5:
                (ot = E.stateNode), (Xt = !1);
                break e;
              case 3:
                (ot = E.stateNode.containerInfo), (Xt = !0);
                break e;
              case 4:
                (ot = E.stateNode.containerInfo), (Xt = !0);
                break e;
            }
            E = E.return;
          }
          if (ot === null) throw Error(t(160));
          wp(g, _, p), (ot = null), (Xt = !1);
          var P = p.alternate;
          P !== null && (P.return = null), (p.return = null);
        } catch (F) {
          Be(p, o, F);
        }
      }
    if (o.subtreeFlags & 12854)
      for (o = o.child; o !== null; ) xp(o, i), (o = o.sibling);
  }
  function xp(i, o) {
    var l = i.alternate,
      d = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((qt(o, i), rn(i), d & 4)) {
          try {
            os(3, i, i.return), Go(3, i);
          } catch (ie) {
            Be(i, i.return, ie);
          }
          try {
            os(5, i, i.return);
          } catch (ie) {
            Be(i, i.return, ie);
          }
        }
        break;
      case 1:
        qt(o, i), rn(i), d & 512 && l !== null && oi(l, l.return);
        break;
      case 5:
        if (
          (qt(o, i),
          rn(i),
          d & 512 && l !== null && oi(l, l.return),
          i.flags & 32)
        ) {
          var p = i.stateNode;
          try {
            Pi(p, "");
          } catch (ie) {
            Be(i, i.return, ie);
          }
        }
        if (d & 4 && ((p = i.stateNode), p != null)) {
          var g = i.memoizedProps,
            _ = l !== null ? l.memoizedProps : g,
            E = i.type,
            P = i.updateQueue;
          if (((i.updateQueue = null), P !== null))
            try {
              E === "input" && g.type === "radio" && g.name != null && Kd(p, g),
                xl(E, _);
              var F = xl(E, g);
              for (_ = 0; _ < P.length; _ += 2) {
                var K = P[_],
                  X = P[_ + 1];
                K === "style"
                  ? tf(p, X)
                  : K === "dangerouslySetInnerHTML"
                  ? Jd(p, X)
                  : K === "children"
                  ? Pi(p, X)
                  : O(p, K, X, F);
              }
              switch (E) {
                case "input":
                  ml(p, g);
                  break;
                case "textarea":
                  Gd(p, g);
                  break;
                case "select":
                  var Y = p._wrapperState.wasMultiple;
                  p._wrapperState.wasMultiple = !!g.multiple;
                  var J = g.value;
                  J != null
                    ? jr(p, !!g.multiple, J, !1)
                    : Y !== !!g.multiple &&
                      (g.defaultValue != null
                        ? jr(p, !!g.multiple, g.defaultValue, !0)
                        : jr(p, !!g.multiple, g.multiple ? [] : "", !1));
              }
              p[qi] = g;
            } catch (ie) {
              Be(i, i.return, ie);
            }
        }
        break;
      case 6:
        if ((qt(o, i), rn(i), d & 4)) {
          if (i.stateNode === null) throw Error(t(162));
          (p = i.stateNode), (g = i.memoizedProps);
          try {
            p.nodeValue = g;
          } catch (ie) {
            Be(i, i.return, ie);
          }
        }
        break;
      case 3:
        if (
          (qt(o, i), rn(i), d & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Ai(o.containerInfo);
          } catch (ie) {
            Be(i, i.return, ie);
          }
        break;
      case 4:
        qt(o, i), rn(i);
        break;
      case 13:
        qt(o, i),
          rn(i),
          (p = i.child),
          p.flags & 8192 &&
            ((g = p.memoizedState !== null),
            (p.stateNode.isHidden = g),
            !g ||
              (p.alternate !== null && p.alternate.memoizedState !== null) ||
              (Yu = Ye())),
          d & 4 && vp(i);
        break;
      case 22:
        if (
          ((K = l !== null && l.memoizedState !== null),
          i.mode & 1 ? ((dt = (F = dt) || K), qt(o, i), (dt = F)) : qt(o, i),
          rn(i),
          d & 8192)
        ) {
          if (
            ((F = i.memoizedState !== null),
            (i.stateNode.isHidden = F) && !K && i.mode & 1)
          )
            for (ee = i, K = i.child; K !== null; ) {
              for (X = ee = K; ee !== null; ) {
                switch (((Y = ee), (J = Y.child), Y.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    os(4, Y, Y.return);
                    break;
                  case 1:
                    oi(Y, Y.return);
                    var te = Y.stateNode;
                    if (typeof te.componentWillUnmount == "function") {
                      (d = Y), (l = Y.return);
                      try {
                        (o = d),
                          (te.props = o.memoizedProps),
                          (te.state = o.memoizedState),
                          te.componentWillUnmount();
                      } catch (ie) {
                        Be(d, l, ie);
                      }
                    }
                    break;
                  case 5:
                    oi(Y, Y.return);
                    break;
                  case 22:
                    if (Y.memoizedState !== null) {
                      bp(X);
                      continue;
                    }
                }
                J !== null ? ((J.return = Y), (ee = J)) : bp(X);
              }
              K = K.sibling;
            }
          e: for (K = null, X = i; ; ) {
            if (X.tag === 5) {
              if (K === null) {
                K = X;
                try {
                  (p = X.stateNode),
                    F
                      ? ((g = p.style),
                        typeof g.setProperty == "function"
                          ? g.setProperty("display", "none", "important")
                          : (g.display = "none"))
                      : ((E = X.stateNode),
                        (P = X.memoizedProps.style),
                        (_ =
                          P != null && P.hasOwnProperty("display")
                            ? P.display
                            : null),
                        (E.style.display = ef("display", _)));
                } catch (ie) {
                  Be(i, i.return, ie);
                }
              }
            } else if (X.tag === 6) {
              if (K === null)
                try {
                  X.stateNode.nodeValue = F ? "" : X.memoizedProps;
                } catch (ie) {
                  Be(i, i.return, ie);
                }
            } else if (
              ((X.tag !== 22 && X.tag !== 23) ||
                X.memoizedState === null ||
                X === i) &&
              X.child !== null
            ) {
              (X.child.return = X), (X = X.child);
              continue;
            }
            if (X === i) break e;
            for (; X.sibling === null; ) {
              if (X.return === null || X.return === i) break e;
              K === X && (K = null), (X = X.return);
            }
            K === X && (K = null),
              (X.sibling.return = X.return),
              (X = X.sibling);
          }
        }
        break;
      case 19:
        qt(o, i), rn(i), d & 4 && vp(i);
        break;
      case 21:
        break;
      default:
        qt(o, i), rn(i);
    }
  }
  function rn(i) {
    var o = i.flags;
    if (o & 2) {
      try {
        e: {
          for (var l = i.return; l !== null; ) {
            if (gp(l)) {
              var d = l;
              break e;
            }
            l = l.return;
          }
          throw Error(t(160));
        }
        switch (d.tag) {
          case 5:
            var p = d.stateNode;
            d.flags & 32 && (Pi(p, ""), (d.flags &= -33));
            var g = yp(i);
            Uu(i, g, p);
            break;
          case 3:
          case 4:
            var _ = d.stateNode.containerInfo,
              E = yp(i);
            Bu(i, E, _);
            break;
          default:
            throw Error(t(161));
        }
      } catch (P) {
        Be(i, i.return, P);
      }
      i.flags &= -3;
    }
    o & 4096 && (i.flags &= -4097);
  }
  function bv(i, o, l) {
    (ee = i), _p(i);
  }
  function _p(i, o, l) {
    for (var d = (i.mode & 1) !== 0; ee !== null; ) {
      var p = ee,
        g = p.child;
      if (p.tag === 22 && d) {
        var _ = p.memoizedState !== null || qo;
        if (!_) {
          var E = p.alternate,
            P = (E !== null && E.memoizedState !== null) || dt;
          E = qo;
          var F = dt;
          if (((qo = _), (dt = P) && !F))
            for (ee = p; ee !== null; )
              (_ = ee),
                (P = _.child),
                _.tag === 22 && _.memoizedState !== null
                  ? Sp(p)
                  : P !== null
                  ? ((P.return = _), (ee = P))
                  : Sp(p);
          for (; g !== null; ) (ee = g), _p(g), (g = g.sibling);
          (ee = p), (qo = E), (dt = F);
        }
        kp(i);
      } else
        p.subtreeFlags & 8772 && g !== null
          ? ((g.return = p), (ee = g))
          : kp(i);
    }
  }
  function kp(i) {
    for (; ee !== null; ) {
      var o = ee;
      if (o.flags & 8772) {
        var l = o.alternate;
        try {
          if (o.flags & 8772)
            switch (o.tag) {
              case 0:
              case 11:
              case 15:
                dt || Go(5, o);
                break;
              case 1:
                var d = o.stateNode;
                if (o.flags & 4 && !dt)
                  if (l === null) d.componentDidMount();
                  else {
                    var p =
                      o.elementType === o.type
                        ? l.memoizedProps
                        : Kt(o.type, l.memoizedProps);
                    d.componentDidUpdate(
                      p,
                      l.memoizedState,
                      d.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var g = o.updateQueue;
                g !== null && bh(o, g, d);
                break;
              case 3:
                var _ = o.updateQueue;
                if (_ !== null) {
                  if (((l = null), o.child !== null))
                    switch (o.child.tag) {
                      case 5:
                        l = o.child.stateNode;
                        break;
                      case 1:
                        l = o.child.stateNode;
                    }
                  bh(o, _, l);
                }
                break;
              case 5:
                var E = o.stateNode;
                if (l === null && o.flags & 4) {
                  l = E;
                  var P = o.memoizedProps;
                  switch (o.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      P.autoFocus && l.focus();
                      break;
                    case "img":
                      P.src && (l.src = P.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (o.memoizedState === null) {
                  var F = o.alternate;
                  if (F !== null) {
                    var K = F.memoizedState;
                    if (K !== null) {
                      var X = K.dehydrated;
                      X !== null && Ai(X);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(t(163));
            }
          dt || (o.flags & 512 && Hu(o));
        } catch (Y) {
          Be(o, o.return, Y);
        }
      }
      if (o === i) {
        ee = null;
        break;
      }
      if (((l = o.sibling), l !== null)) {
        (l.return = o.return), (ee = l);
        break;
      }
      ee = o.return;
    }
  }
  function bp(i) {
    for (; ee !== null; ) {
      var o = ee;
      if (o === i) {
        ee = null;
        break;
      }
      var l = o.sibling;
      if (l !== null) {
        (l.return = o.return), (ee = l);
        break;
      }
      ee = o.return;
    }
  }
  function Sp(i) {
    for (; ee !== null; ) {
      var o = ee;
      try {
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            var l = o.return;
            try {
              Go(4, o);
            } catch (P) {
              Be(o, l, P);
            }
            break;
          case 1:
            var d = o.stateNode;
            if (typeof d.componentDidMount == "function") {
              var p = o.return;
              try {
                d.componentDidMount();
              } catch (P) {
                Be(o, p, P);
              }
            }
            var g = o.return;
            try {
              Hu(o);
            } catch (P) {
              Be(o, g, P);
            }
            break;
          case 5:
            var _ = o.return;
            try {
              Hu(o);
            } catch (P) {
              Be(o, _, P);
            }
        }
      } catch (P) {
        Be(o, o.return, P);
      }
      if (o === i) {
        ee = null;
        break;
      }
      var E = o.sibling;
      if (E !== null) {
        (E.return = o.return), (ee = E);
        break;
      }
      ee = o.return;
    }
  }
  var Sv = Math.ceil,
    Qo = R.ReactCurrentDispatcher,
    $u = R.ReactCurrentOwner,
    Ft = R.ReactCurrentBatchConfig,
    _e = 0,
    tt = null,
    Qe = null,
    at = 0,
    Rt = 0,
    ai = Hn(0),
    Je = 0,
    as = null,
    pr = 0,
    Zo = 0,
    Vu = 0,
    ls = null,
    _t = null,
    Yu = 0,
    li = 1 / 0,
    En = null,
    Jo = !1,
    Ku = null,
    Kn = null,
    ea = !1,
    Xn = null,
    ta = 0,
    us = 0,
    Xu = null,
    na = -1,
    ra = 0;
  function yt() {
    return _e & 6 ? Ye() : na !== -1 ? na : (na = Ye());
  }
  function qn(i) {
    return i.mode & 1
      ? _e & 2 && at !== 0
        ? at & -at
        : av.transition !== null
        ? (ra === 0 && (ra = yf()), ra)
        : ((i = Pe),
          i !== 0 || ((i = window.event), (i = i === void 0 ? 16 : Cf(i.type))),
          i)
      : 1;
  }
  function Gt(i, o, l, d) {
    if (50 < us) throw ((us = 0), (Xu = null), Error(t(185)));
    Li(i, l, d),
      (!(_e & 2) || i !== tt) &&
        (i === tt && (!(_e & 2) && (Zo |= l), Je === 4 && Gn(i, at)),
        kt(i, d),
        l === 1 &&
          _e === 0 &&
          !(o.mode & 1) &&
          ((li = Ye() + 500), Ro && Un()));
  }
  function kt(i, o) {
    var l = i.callbackNode;
    aw(i, o);
    var d = fo(i, i === tt ? at : 0);
    if (d === 0)
      l !== null && pf(l), (i.callbackNode = null), (i.callbackPriority = 0);
    else if (((o = d & -d), i.callbackPriority !== o)) {
      if ((l != null && pf(l), o === 1))
        i.tag === 0 ? ov(Cp.bind(null, i)) : dh(Cp.bind(null, i)),
          nv(function () {
            !(_e & 6) && Un();
          }),
          (l = null);
      else {
        switch (wf(d)) {
          case 1:
            l = Pl;
            break;
          case 4:
            l = mf;
            break;
          case 16:
            l = ao;
            break;
          case 536870912:
            l = gf;
            break;
          default:
            l = ao;
        }
        l = Ip(l, Ep.bind(null, i));
      }
      (i.callbackPriority = o), (i.callbackNode = l);
    }
  }
  function Ep(i, o) {
    if (((na = -1), (ra = 0), _e & 6)) throw Error(t(327));
    var l = i.callbackNode;
    if (ui() && i.callbackNode !== l) return null;
    var d = fo(i, i === tt ? at : 0);
    if (d === 0) return null;
    if (d & 30 || d & i.expiredLanes || o) o = ia(i, d);
    else {
      o = d;
      var p = _e;
      _e |= 2;
      var g = Tp();
      (tt !== i || at !== o) && ((En = null), (li = Ye() + 500), gr(i, o));
      do
        try {
          Pv();
          break;
        } catch (E) {
          Pp(i, E);
        }
      while (!0);
      fu(),
        (Qo.current = g),
        (_e = p),
        Qe !== null ? (o = 0) : ((tt = null), (at = 0), (o = Je));
    }
    if (o !== 0) {
      if (
        (o === 2 && ((p = Tl(i)), p !== 0 && ((d = p), (o = qu(i, p)))),
        o === 1)
      )
        throw ((l = as), gr(i, 0), Gn(i, d), kt(i, Ye()), l);
      if (o === 6) Gn(i, d);
      else {
        if (
          ((p = i.current.alternate),
          !(d & 30) &&
            !Ev(p) &&
            ((o = ia(i, d)),
            o === 2 && ((g = Tl(i)), g !== 0 && ((d = g), (o = qu(i, g)))),
            o === 1))
        )
          throw ((l = as), gr(i, 0), Gn(i, d), kt(i, Ye()), l);
        switch (((i.finishedWork = p), (i.finishedLanes = d), o)) {
          case 0:
          case 1:
            throw Error(t(345));
          case 2:
            yr(i, _t, En);
            break;
          case 3:
            if (
              (Gn(i, d),
              (d & 130023424) === d && ((o = Yu + 500 - Ye()), 10 < o))
            ) {
              if (fo(i, 0) !== 0) break;
              if (((p = i.suspendedLanes), (p & d) !== d)) {
                yt(), (i.pingedLanes |= i.suspendedLanes & p);
                break;
              }
              i.timeoutHandle = tu(yr.bind(null, i, _t, En), o);
              break;
            }
            yr(i, _t, En);
            break;
          case 4:
            if ((Gn(i, d), (d & 4194240) === d)) break;
            for (o = i.eventTimes, p = -1; 0 < d; ) {
              var _ = 31 - $t(d);
              (g = 1 << _), (_ = o[_]), _ > p && (p = _), (d &= ~g);
            }
            if (
              ((d = p),
              (d = Ye() - d),
              (d =
                (120 > d
                  ? 120
                  : 480 > d
                  ? 480
                  : 1080 > d
                  ? 1080
                  : 1920 > d
                  ? 1920
                  : 3e3 > d
                  ? 3e3
                  : 4320 > d
                  ? 4320
                  : 1960 * Sv(d / 1960)) - d),
              10 < d)
            ) {
              i.timeoutHandle = tu(yr.bind(null, i, _t, En), d);
              break;
            }
            yr(i, _t, En);
            break;
          case 5:
            yr(i, _t, En);
            break;
          default:
            throw Error(t(329));
        }
      }
    }
    return kt(i, Ye()), i.callbackNode === l ? Ep.bind(null, i) : null;
  }
  function qu(i, o) {
    var l = ls;
    return (
      i.current.memoizedState.isDehydrated && (gr(i, o).flags |= 256),
      (i = ia(i, o)),
      i !== 2 && ((o = _t), (_t = l), o !== null && Gu(o)),
      i
    );
  }
  function Gu(i) {
    _t === null ? (_t = i) : _t.push.apply(_t, i);
  }
  function Ev(i) {
    for (var o = i; ; ) {
      if (o.flags & 16384) {
        var l = o.updateQueue;
        if (l !== null && ((l = l.stores), l !== null))
          for (var d = 0; d < l.length; d++) {
            var p = l[d],
              g = p.getSnapshot;
            p = p.value;
            try {
              if (!Vt(g(), p)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((l = o.child), o.subtreeFlags & 16384 && l !== null))
        (l.return = o), (o = l);
      else {
        if (o === i) break;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === i) return !0;
          o = o.return;
        }
        (o.sibling.return = o.return), (o = o.sibling);
      }
    }
    return !0;
  }
  function Gn(i, o) {
    for (
      o &= ~Vu,
        o &= ~Zo,
        i.suspendedLanes |= o,
        i.pingedLanes &= ~o,
        i = i.expirationTimes;
      0 < o;

    ) {
      var l = 31 - $t(o),
        d = 1 << l;
      (i[l] = -1), (o &= ~d);
    }
  }
  function Cp(i) {
    if (_e & 6) throw Error(t(327));
    ui();
    var o = fo(i, 0);
    if (!(o & 1)) return kt(i, Ye()), null;
    var l = ia(i, o);
    if (i.tag !== 0 && l === 2) {
      var d = Tl(i);
      d !== 0 && ((o = d), (l = qu(i, d)));
    }
    if (l === 1) throw ((l = as), gr(i, 0), Gn(i, o), kt(i, Ye()), l);
    if (l === 6) throw Error(t(345));
    return (
      (i.finishedWork = i.current.alternate),
      (i.finishedLanes = o),
      yr(i, _t, En),
      kt(i, Ye()),
      null
    );
  }
  function Qu(i, o) {
    var l = _e;
    _e |= 1;
    try {
      return i(o);
    } finally {
      (_e = l), _e === 0 && ((li = Ye() + 500), Ro && Un());
    }
  }
  function mr(i) {
    Xn !== null && Xn.tag === 0 && !(_e & 6) && ui();
    var o = _e;
    _e |= 1;
    var l = Ft.transition,
      d = Pe;
    try {
      if (((Ft.transition = null), (Pe = 1), i)) return i();
    } finally {
      (Pe = d), (Ft.transition = l), (_e = o), !(_e & 6) && Un();
    }
  }
  function Zu() {
    (Rt = ai.current), Le(ai);
  }
  function gr(i, o) {
    (i.finishedWork = null), (i.finishedLanes = 0);
    var l = i.timeoutHandle;
    if ((l !== -1 && ((i.timeoutHandle = -1), tv(l)), Qe !== null))
      for (l = Qe.return; l !== null; ) {
        var d = l;
        switch ((au(d), d.tag)) {
          case 1:
            (d = d.type.childContextTypes), d != null && Oo();
            break;
          case 3:
            ii(), Le(wt), Le(lt), xu();
            break;
          case 5:
            wu(d);
            break;
          case 4:
            ii();
            break;
          case 13:
            Le(Ae);
            break;
          case 19:
            Le(Ae);
            break;
          case 10:
            hu(d.type._context);
            break;
          case 22:
          case 23:
            Zu();
        }
        l = l.return;
      }
    if (
      ((tt = i),
      (Qe = i = Qn(i.current, null)),
      (at = Rt = o),
      (Je = 0),
      (as = null),
      (Vu = Zo = pr = 0),
      (_t = ls = null),
      dr !== null)
    ) {
      for (o = 0; o < dr.length; o++)
        if (((l = dr[o]), (d = l.interleaved), d !== null)) {
          l.interleaved = null;
          var p = d.next,
            g = l.pending;
          if (g !== null) {
            var _ = g.next;
            (g.next = p), (d.next = _);
          }
          l.pending = d;
        }
      dr = null;
    }
    return i;
  }
  function Pp(i, o) {
    do {
      var l = Qe;
      try {
        if ((fu(), (Ho.current = Vo), Bo)) {
          for (var d = je.memoizedState; d !== null; ) {
            var p = d.queue;
            p !== null && (p.pending = null), (d = d.next);
          }
          Bo = !1;
        }
        if (
          ((hr = 0),
          (et = Ze = je = null),
          (ts = !1),
          (ns = 0),
          ($u.current = null),
          l === null || l.return === null)
        ) {
          (Je = 1), (as = o), (Qe = null);
          break;
        }
        e: {
          var g = i,
            _ = l.return,
            E = l,
            P = o;
          if (
            ((o = at),
            (E.flags |= 32768),
            P !== null && typeof P == "object" && typeof P.then == "function")
          ) {
            var F = P,
              K = E,
              X = K.tag;
            if (!(K.mode & 1) && (X === 0 || X === 11 || X === 15)) {
              var Y = K.alternate;
              Y
                ? ((K.updateQueue = Y.updateQueue),
                  (K.memoizedState = Y.memoizedState),
                  (K.lanes = Y.lanes))
                : ((K.updateQueue = null), (K.memoizedState = null));
            }
            var J = Zh(_);
            if (J !== null) {
              (J.flags &= -257),
                Jh(J, _, E, g, o),
                J.mode & 1 && Qh(g, F, o),
                (o = J),
                (P = F);
              var te = o.updateQueue;
              if (te === null) {
                var ie = new Set();
                ie.add(P), (o.updateQueue = ie);
              } else te.add(P);
              break e;
            } else {
              if (!(o & 1)) {
                Qh(g, F, o), Ju();
                break e;
              }
              P = Error(t(426));
            }
          } else if (Fe && E.mode & 1) {
            var Ke = Zh(_);
            if (Ke !== null) {
              !(Ke.flags & 65536) && (Ke.flags |= 256),
                Jh(Ke, _, E, g, o),
                cu(si(P, E));
              break e;
            }
          }
          (g = P = si(P, E)),
            Je !== 4 && (Je = 2),
            ls === null ? (ls = [g]) : ls.push(g),
            (g = _);
          do {
            switch (g.tag) {
              case 3:
                (g.flags |= 65536), (o &= -o), (g.lanes |= o);
                var L = qh(g, P, o);
                kh(g, L);
                break e;
              case 1:
                E = P;
                var T = g.type,
                  I = g.stateNode;
                if (
                  !(g.flags & 128) &&
                  (typeof T.getDerivedStateFromError == "function" ||
                    (I !== null &&
                      typeof I.componentDidCatch == "function" &&
                      (Kn === null || !Kn.has(I))))
                ) {
                  (g.flags |= 65536), (o &= -o), (g.lanes |= o);
                  var q = Gh(g, E, o);
                  kh(g, q);
                  break e;
                }
            }
            g = g.return;
          } while (g !== null);
        }
        Mp(l);
      } catch (se) {
        (o = se), Qe === l && l !== null && (Qe = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Tp() {
    var i = Qo.current;
    return (Qo.current = Vo), i === null ? Vo : i;
  }
  function Ju() {
    (Je === 0 || Je === 3 || Je === 2) && (Je = 4),
      tt === null || (!(pr & 268435455) && !(Zo & 268435455)) || Gn(tt, at);
  }
  function ia(i, o) {
    var l = _e;
    _e |= 2;
    var d = Tp();
    (tt !== i || at !== o) && ((En = null), gr(i, o));
    do
      try {
        Cv();
        break;
      } catch (p) {
        Pp(i, p);
      }
    while (!0);
    if ((fu(), (_e = l), (Qo.current = d), Qe !== null)) throw Error(t(261));
    return (tt = null), (at = 0), Je;
  }
  function Cv() {
    for (; Qe !== null; ) Op(Qe);
  }
  function Pv() {
    for (; Qe !== null && !Z0(); ) Op(Qe);
  }
  function Op(i) {
    var o = Lp(i.alternate, i, Rt);
    (i.memoizedProps = i.pendingProps),
      o === null ? Mp(i) : (Qe = o),
      ($u.current = null);
  }
  function Mp(i) {
    var o = i;
    do {
      var l = o.alternate;
      if (((i = o.return), o.flags & 32768)) {
        if (((l = xv(l, o)), l !== null)) {
          (l.flags &= 32767), (Qe = l);
          return;
        }
        if (i !== null)
          (i.flags |= 32768), (i.subtreeFlags = 0), (i.deletions = null);
        else {
          (Je = 6), (Qe = null);
          return;
        }
      } else if (((l = vv(l, o, Rt)), l !== null)) {
        Qe = l;
        return;
      }
      if (((o = o.sibling), o !== null)) {
        Qe = o;
        return;
      }
      Qe = o = i;
    } while (o !== null);
    Je === 0 && (Je = 5);
  }
  function yr(i, o, l) {
    var d = Pe,
      p = Ft.transition;
    try {
      (Ft.transition = null), (Pe = 1), Tv(i, o, l, d);
    } finally {
      (Ft.transition = p), (Pe = d);
    }
    return null;
  }
  function Tv(i, o, l, d) {
    do ui();
    while (Xn !== null);
    if (_e & 6) throw Error(t(327));
    l = i.finishedWork;
    var p = i.finishedLanes;
    if (l === null) return null;
    if (((i.finishedWork = null), (i.finishedLanes = 0), l === i.current))
      throw Error(t(177));
    (i.callbackNode = null), (i.callbackPriority = 0);
    var g = l.lanes | l.childLanes;
    if (
      (lw(i, g),
      i === tt && ((Qe = tt = null), (at = 0)),
      (!(l.subtreeFlags & 2064) && !(l.flags & 2064)) ||
        ea ||
        ((ea = !0),
        Ip(ao, function () {
          return ui(), null;
        })),
      (g = (l.flags & 15990) !== 0),
      l.subtreeFlags & 15990 || g)
    ) {
      (g = Ft.transition), (Ft.transition = null);
      var _ = Pe;
      Pe = 1;
      var E = _e;
      (_e |= 4),
        ($u.current = null),
        kv(i, l),
        xp(l, i),
        Xw(Jl),
        (mo = !!Zl),
        (Jl = Zl = null),
        (i.current = l),
        bv(l),
        J0(),
        (_e = E),
        (Pe = _),
        (Ft.transition = g);
    } else i.current = l;
    if (
      (ea && ((ea = !1), (Xn = i), (ta = p)),
      (g = i.pendingLanes),
      g === 0 && (Kn = null),
      nw(l.stateNode),
      kt(i, Ye()),
      o !== null)
    )
      for (d = i.onRecoverableError, l = 0; l < o.length; l++)
        (p = o[l]), d(p.value, { componentStack: p.stack, digest: p.digest });
    if (Jo) throw ((Jo = !1), (i = Ku), (Ku = null), i);
    return (
      ta & 1 && i.tag !== 0 && ui(),
      (g = i.pendingLanes),
      g & 1 ? (i === Xu ? us++ : ((us = 0), (Xu = i))) : (us = 0),
      Un(),
      null
    );
  }
  function ui() {
    if (Xn !== null) {
      var i = wf(ta),
        o = Ft.transition,
        l = Pe;
      try {
        if (((Ft.transition = null), (Pe = 16 > i ? 16 : i), Xn === null))
          var d = !1;
        else {
          if (((i = Xn), (Xn = null), (ta = 0), _e & 6)) throw Error(t(331));
          var p = _e;
          for (_e |= 4, ee = i.current; ee !== null; ) {
            var g = ee,
              _ = g.child;
            if (ee.flags & 16) {
              var E = g.deletions;
              if (E !== null) {
                for (var P = 0; P < E.length; P++) {
                  var F = E[P];
                  for (ee = F; ee !== null; ) {
                    var K = ee;
                    switch (K.tag) {
                      case 0:
                      case 11:
                      case 15:
                        os(8, K, g);
                    }
                    var X = K.child;
                    if (X !== null) (X.return = K), (ee = X);
                    else
                      for (; ee !== null; ) {
                        K = ee;
                        var Y = K.sibling,
                          J = K.return;
                        if ((mp(K), K === F)) {
                          ee = null;
                          break;
                        }
                        if (Y !== null) {
                          (Y.return = J), (ee = Y);
                          break;
                        }
                        ee = J;
                      }
                  }
                }
                var te = g.alternate;
                if (te !== null) {
                  var ie = te.child;
                  if (ie !== null) {
                    te.child = null;
                    do {
                      var Ke = ie.sibling;
                      (ie.sibling = null), (ie = Ke);
                    } while (ie !== null);
                  }
                }
                ee = g;
              }
            }
            if (g.subtreeFlags & 2064 && _ !== null) (_.return = g), (ee = _);
            else
              e: for (; ee !== null; ) {
                if (((g = ee), g.flags & 2048))
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      os(9, g, g.return);
                  }
                var L = g.sibling;
                if (L !== null) {
                  (L.return = g.return), (ee = L);
                  break e;
                }
                ee = g.return;
              }
          }
          var T = i.current;
          for (ee = T; ee !== null; ) {
            _ = ee;
            var I = _.child;
            if (_.subtreeFlags & 2064 && I !== null) (I.return = _), (ee = I);
            else
              e: for (_ = T; ee !== null; ) {
                if (((E = ee), E.flags & 2048))
                  try {
                    switch (E.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Go(9, E);
                    }
                  } catch (se) {
                    Be(E, E.return, se);
                  }
                if (E === _) {
                  ee = null;
                  break e;
                }
                var q = E.sibling;
                if (q !== null) {
                  (q.return = E.return), (ee = q);
                  break e;
                }
                ee = E.return;
              }
          }
          if (
            ((_e = p),
            Un(),
            Jt && typeof Jt.onPostCommitFiberRoot == "function")
          )
            try {
              Jt.onPostCommitFiberRoot(lo, i);
            } catch {}
          d = !0;
        }
        return d;
      } finally {
        (Pe = l), (Ft.transition = o);
      }
    }
    return !1;
  }
  function Rp(i, o, l) {
    (o = si(l, o)),
      (o = qh(i, o, 1)),
      (i = Vn(i, o, 1)),
      (o = yt()),
      i !== null && (Li(i, 1, o), kt(i, o));
  }
  function Be(i, o, l) {
    if (i.tag === 3) Rp(i, i, l);
    else
      for (; o !== null; ) {
        if (o.tag === 3) {
          Rp(o, i, l);
          break;
        } else if (o.tag === 1) {
          var d = o.stateNode;
          if (
            typeof o.type.getDerivedStateFromError == "function" ||
            (typeof d.componentDidCatch == "function" &&
              (Kn === null || !Kn.has(d)))
          ) {
            (i = si(l, i)),
              (i = Gh(o, i, 1)),
              (o = Vn(o, i, 1)),
              (i = yt()),
              o !== null && (Li(o, 1, i), kt(o, i));
            break;
          }
        }
        o = o.return;
      }
  }
  function Ov(i, o, l) {
    var d = i.pingCache;
    d !== null && d.delete(o),
      (o = yt()),
      (i.pingedLanes |= i.suspendedLanes & l),
      tt === i &&
        (at & l) === l &&
        (Je === 4 || (Je === 3 && (at & 130023424) === at && 500 > Ye() - Yu)
          ? gr(i, 0)
          : (Vu |= l)),
      kt(i, o);
  }
  function Dp(i, o) {
    o === 0 &&
      (i.mode & 1
        ? ((o = co), (co <<= 1), !(co & 130023424) && (co = 4194304))
        : (o = 1));
    var l = yt();
    (i = kn(i, o)), i !== null && (Li(i, o, l), kt(i, l));
  }
  function Mv(i) {
    var o = i.memoizedState,
      l = 0;
    o !== null && (l = o.retryLane), Dp(i, l);
  }
  function Rv(i, o) {
    var l = 0;
    switch (i.tag) {
      case 13:
        var d = i.stateNode,
          p = i.memoizedState;
        p !== null && (l = p.retryLane);
        break;
      case 19:
        d = i.stateNode;
        break;
      default:
        throw Error(t(314));
    }
    d !== null && d.delete(o), Dp(i, l);
  }
  var Lp;
  Lp = function (i, o, l) {
    if (i !== null)
      if (i.memoizedProps !== o.pendingProps || wt.current) xt = !0;
      else {
        if (!(i.lanes & l) && !(o.flags & 128)) return (xt = !1), wv(i, o, l);
        xt = !!(i.flags & 131072);
      }
    else (xt = !1), Fe && o.flags & 1048576 && fh(o, Lo, o.index);
    switch (((o.lanes = 0), o.tag)) {
      case 2:
        var d = o.type;
        Xo(i, o), (i = o.pendingProps);
        var p = Qr(o, lt.current);
        ri(o, l), (p = bu(null, o, d, i, p, l));
        var g = Su();
        return (
          (o.flags |= 1),
          typeof p == "object" &&
          p !== null &&
          typeof p.render == "function" &&
          p.$$typeof === void 0
            ? ((o.tag = 1),
              (o.memoizedState = null),
              (o.updateQueue = null),
              vt(d) ? ((g = !0), Mo(o)) : (g = !1),
              (o.memoizedState =
                p.state !== null && p.state !== void 0 ? p.state : null),
              gu(o),
              (p.updater = Yo),
              (o.stateNode = p),
              (p._reactInternals = o),
              Mu(o, d, i, l),
              (o = Iu(null, o, d, !0, g, l)))
            : ((o.tag = 0), Fe && g && ou(o), gt(null, o, p, l), (o = o.child)),
          o
        );
      case 16:
        d = o.elementType;
        e: {
          switch (
            (Xo(i, o),
            (i = o.pendingProps),
            (p = d._init),
            (d = p(d._payload)),
            (o.type = d),
            (p = o.tag = Lv(d)),
            (i = Kt(d, i)),
            p)
          ) {
            case 0:
              o = Lu(null, o, d, i, l);
              break e;
            case 1:
              o = sp(null, o, d, i, l);
              break e;
            case 11:
              o = ep(null, o, d, i, l);
              break e;
            case 14:
              o = tp(null, o, d, Kt(d.type, i), l);
              break e;
          }
          throw Error(t(306, d, ""));
        }
        return o;
      case 0:
        return (
          (d = o.type),
          (p = o.pendingProps),
          (p = o.elementType === d ? p : Kt(d, p)),
          Lu(i, o, d, p, l)
        );
      case 1:
        return (
          (d = o.type),
          (p = o.pendingProps),
          (p = o.elementType === d ? p : Kt(d, p)),
          sp(i, o, d, p, l)
        );
      case 3:
        e: {
          if ((op(o), i === null)) throw Error(t(387));
          (d = o.pendingProps),
            (g = o.memoizedState),
            (p = g.element),
            _h(i, o),
            jo(o, d, null, l);
          var _ = o.memoizedState;
          if (((d = _.element), g.isDehydrated))
            if (
              ((g = {
                element: d,
                isDehydrated: !1,
                cache: _.cache,
                pendingSuspenseBoundaries: _.pendingSuspenseBoundaries,
                transitions: _.transitions,
              }),
              (o.updateQueue.baseState = g),
              (o.memoizedState = g),
              o.flags & 256)
            ) {
              (p = si(Error(t(423)), o)), (o = ap(i, o, d, l, p));
              break e;
            } else if (d !== p) {
              (p = si(Error(t(424)), o)), (o = ap(i, o, d, l, p));
              break e;
            } else
              for (
                Mt = Wn(o.stateNode.containerInfo.firstChild),
                  Ot = o,
                  Fe = !0,
                  Yt = null,
                  l = vh(o, null, d, l),
                  o.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
          else {
            if ((ei(), d === p)) {
              o = Sn(i, o, l);
              break e;
            }
            gt(i, o, d, l);
          }
          o = o.child;
        }
        return o;
      case 5:
        return (
          Sh(o),
          i === null && uu(o),
          (d = o.type),
          (p = o.pendingProps),
          (g = i !== null ? i.memoizedProps : null),
          (_ = p.children),
          eu(d, p) ? (_ = null) : g !== null && eu(d, g) && (o.flags |= 32),
          ip(i, o),
          gt(i, o, _, l),
          o.child
        );
      case 6:
        return i === null && uu(o), null;
      case 13:
        return lp(i, o, l);
      case 4:
        return (
          yu(o, o.stateNode.containerInfo),
          (d = o.pendingProps),
          i === null ? (o.child = ti(o, null, d, l)) : gt(i, o, d, l),
          o.child
        );
      case 11:
        return (
          (d = o.type),
          (p = o.pendingProps),
          (p = o.elementType === d ? p : Kt(d, p)),
          ep(i, o, d, p, l)
        );
      case 7:
        return gt(i, o, o.pendingProps, l), o.child;
      case 8:
        return gt(i, o, o.pendingProps.children, l), o.child;
      case 12:
        return gt(i, o, o.pendingProps.children, l), o.child;
      case 10:
        e: {
          if (
            ((d = o.type._context),
            (p = o.pendingProps),
            (g = o.memoizedProps),
            (_ = p.value),
            Re(zo, d._currentValue),
            (d._currentValue = _),
            g !== null)
          )
            if (Vt(g.value, _)) {
              if (g.children === p.children && !wt.current) {
                o = Sn(i, o, l);
                break e;
              }
            } else
              for (g = o.child, g !== null && (g.return = o); g !== null; ) {
                var E = g.dependencies;
                if (E !== null) {
                  _ = g.child;
                  for (var P = E.firstContext; P !== null; ) {
                    if (P.context === d) {
                      if (g.tag === 1) {
                        (P = bn(-1, l & -l)), (P.tag = 2);
                        var F = g.updateQueue;
                        if (F !== null) {
                          F = F.shared;
                          var K = F.pending;
                          K === null
                            ? (P.next = P)
                            : ((P.next = K.next), (K.next = P)),
                            (F.pending = P);
                        }
                      }
                      (g.lanes |= l),
                        (P = g.alternate),
                        P !== null && (P.lanes |= l),
                        pu(g.return, l, o),
                        (E.lanes |= l);
                      break;
                    }
                    P = P.next;
                  }
                } else if (g.tag === 10) _ = g.type === o.type ? null : g.child;
                else if (g.tag === 18) {
                  if (((_ = g.return), _ === null)) throw Error(t(341));
                  (_.lanes |= l),
                    (E = _.alternate),
                    E !== null && (E.lanes |= l),
                    pu(_, l, o),
                    (_ = g.sibling);
                } else _ = g.child;
                if (_ !== null) _.return = g;
                else
                  for (_ = g; _ !== null; ) {
                    if (_ === o) {
                      _ = null;
                      break;
                    }
                    if (((g = _.sibling), g !== null)) {
                      (g.return = _.return), (_ = g);
                      break;
                    }
                    _ = _.return;
                  }
                g = _;
              }
          gt(i, o, p.children, l), (o = o.child);
        }
        return o;
      case 9:
        return (
          (p = o.type),
          (d = o.pendingProps.children),
          ri(o, l),
          (p = Nt(p)),
          (d = d(p)),
          (o.flags |= 1),
          gt(i, o, d, l),
          o.child
        );
      case 14:
        return (
          (d = o.type),
          (p = Kt(d, o.pendingProps)),
          (p = Kt(d.type, p)),
          tp(i, o, d, p, l)
        );
      case 15:
        return np(i, o, o.type, o.pendingProps, l);
      case 17:
        return (
          (d = o.type),
          (p = o.pendingProps),
          (p = o.elementType === d ? p : Kt(d, p)),
          Xo(i, o),
          (o.tag = 1),
          vt(d) ? ((i = !0), Mo(o)) : (i = !1),
          ri(o, l),
          Kh(o, d, p),
          Mu(o, d, p, l),
          Iu(null, o, d, !0, i, l)
        );
      case 19:
        return cp(i, o, l);
      case 22:
        return rp(i, o, l);
    }
    throw Error(t(156, o.tag));
  };
  function Ip(i, o) {
    return hf(i, o);
  }
  function Dv(i, o, l, d) {
    (this.tag = i),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = o),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = d),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function At(i, o, l, d) {
    return new Dv(i, o, l, d);
  }
  function ec(i) {
    return (i = i.prototype), !(!i || !i.isReactComponent);
  }
  function Lv(i) {
    if (typeof i == "function") return ec(i) ? 1 : 0;
    if (i != null) {
      if (((i = i.$$typeof), i === re)) return 11;
      if (i === we) return 14;
    }
    return 2;
  }
  function Qn(i, o) {
    var l = i.alternate;
    return (
      l === null
        ? ((l = At(i.tag, o, i.key, i.mode)),
          (l.elementType = i.elementType),
          (l.type = i.type),
          (l.stateNode = i.stateNode),
          (l.alternate = i),
          (i.alternate = l))
        : ((l.pendingProps = o),
          (l.type = i.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = i.flags & 14680064),
      (l.childLanes = i.childLanes),
      (l.lanes = i.lanes),
      (l.child = i.child),
      (l.memoizedProps = i.memoizedProps),
      (l.memoizedState = i.memoizedState),
      (l.updateQueue = i.updateQueue),
      (o = i.dependencies),
      (l.dependencies =
        o === null ? null : { lanes: o.lanes, firstContext: o.firstContext }),
      (l.sibling = i.sibling),
      (l.index = i.index),
      (l.ref = i.ref),
      l
    );
  }
  function sa(i, o, l, d, p, g) {
    var _ = 2;
    if (((d = i), typeof i == "function")) ec(i) && (_ = 1);
    else if (typeof i == "string") _ = 5;
    else
      e: switch (i) {
        case H:
          return wr(l.children, p, g, o);
        case N:
          (_ = 8), (p |= 8);
          break;
        case B:
          return (
            (i = At(12, l, o, p | 2)), (i.elementType = B), (i.lanes = g), i
          );
        case he:
          return (i = At(13, l, o, p)), (i.elementType = he), (i.lanes = g), i;
        case Ee:
          return (i = At(19, l, o, p)), (i.elementType = Ee), (i.lanes = g), i;
        case ye:
          return oa(l, p, g, o);
        default:
          if (typeof i == "object" && i !== null)
            switch (i.$$typeof) {
              case G:
                _ = 10;
                break e;
              case ne:
                _ = 9;
                break e;
              case re:
                _ = 11;
                break e;
              case we:
                _ = 14;
                break e;
              case ve:
                (_ = 16), (d = null);
                break e;
            }
          throw Error(t(130, i == null ? i : typeof i, ""));
      }
    return (
      (o = At(_, l, o, p)), (o.elementType = i), (o.type = d), (o.lanes = g), o
    );
  }
  function wr(i, o, l, d) {
    return (i = At(7, i, d, o)), (i.lanes = l), i;
  }
  function oa(i, o, l, d) {
    return (
      (i = At(22, i, d, o)),
      (i.elementType = ye),
      (i.lanes = l),
      (i.stateNode = { isHidden: !1 }),
      i
    );
  }
  function tc(i, o, l) {
    return (i = At(6, i, null, o)), (i.lanes = l), i;
  }
  function nc(i, o, l) {
    return (
      (o = At(4, i.children !== null ? i.children : [], i.key, o)),
      (o.lanes = l),
      (o.stateNode = {
        containerInfo: i.containerInfo,
        pendingChildren: null,
        implementation: i.implementation,
      }),
      o
    );
  }
  function Iv(i, o, l, d, p) {
    (this.tag = o),
      (this.containerInfo = i),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Ol(0)),
      (this.expirationTimes = Ol(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ol(0)),
      (this.identifierPrefix = d),
      (this.onRecoverableError = p),
      (this.mutableSourceEagerHydrationData = null);
  }
  function rc(i, o, l, d, p, g, _, E, P) {
    return (
      (i = new Iv(i, o, l, E, P)),
      o === 1 ? ((o = 1), g === !0 && (o |= 8)) : (o = 0),
      (g = At(3, null, null, o)),
      (i.current = g),
      (g.stateNode = i),
      (g.memoizedState = {
        element: d,
        isDehydrated: l,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      gu(g),
      i
    );
  }
  function Nv(i, o, l) {
    var d =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: W,
      key: d == null ? null : "" + d,
      children: i,
      containerInfo: o,
      implementation: l,
    };
  }
  function Np(i) {
    if (!i) return Bn;
    i = i._reactInternals;
    e: {
      if (or(i) !== i || i.tag !== 1) throw Error(t(170));
      var o = i;
      do {
        switch (o.tag) {
          case 3:
            o = o.stateNode.context;
            break e;
          case 1:
            if (vt(o.type)) {
              o = o.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        o = o.return;
      } while (o !== null);
      throw Error(t(171));
    }
    if (i.tag === 1) {
      var l = i.type;
      if (vt(l)) return uh(i, l, o);
    }
    return o;
  }
  function zp(i, o, l, d, p, g, _, E, P) {
    return (
      (i = rc(l, d, !0, i, p, g, _, E, P)),
      (i.context = Np(null)),
      (l = i.current),
      (d = yt()),
      (p = qn(l)),
      (g = bn(d, p)),
      (g.callback = o ?? null),
      Vn(l, g, p),
      (i.current.lanes = p),
      Li(i, p, d),
      kt(i, d),
      i
    );
  }
  function aa(i, o, l, d) {
    var p = o.current,
      g = yt(),
      _ = qn(p);
    return (
      (l = Np(l)),
      o.context === null ? (o.context = l) : (o.pendingContext = l),
      (o = bn(g, _)),
      (o.payload = { element: i }),
      (d = d === void 0 ? null : d),
      d !== null && (o.callback = d),
      (i = Vn(p, o, _)),
      i !== null && (Gt(i, p, _, g), Ao(i, p, _)),
      _
    );
  }
  function la(i) {
    if (((i = i.current), !i.child)) return null;
    switch (i.child.tag) {
      case 5:
        return i.child.stateNode;
      default:
        return i.child.stateNode;
    }
  }
  function Fp(i, o) {
    if (((i = i.memoizedState), i !== null && i.dehydrated !== null)) {
      var l = i.retryLane;
      i.retryLane = l !== 0 && l < o ? l : o;
    }
  }
  function ic(i, o) {
    Fp(i, o), (i = i.alternate) && Fp(i, o);
  }
  var Ap =
    typeof reportError == "function"
      ? reportError
      : function (i) {
          console.error(i);
        };
  function sc(i) {
    this._internalRoot = i;
  }
  (ua.prototype.render = sc.prototype.render =
    function (i) {
      var o = this._internalRoot;
      if (o === null) throw Error(t(409));
      aa(i, o, null, null);
    }),
    (ua.prototype.unmount = sc.prototype.unmount =
      function () {
        var i = this._internalRoot;
        if (i !== null) {
          this._internalRoot = null;
          var o = i.containerInfo;
          mr(function () {
            aa(null, i, null, null);
          }),
            (o[wn] = null);
        }
      });
  function ua(i) {
    this._internalRoot = i;
  }
  ua.prototype.unstable_scheduleHydration = function (i) {
    if (i) {
      var o = _f();
      i = { blockedOn: null, target: i, priority: o };
      for (var l = 0; l < Fn.length && o !== 0 && o < Fn[l].priority; l++);
      Fn.splice(l, 0, i), l === 0 && Sf(i);
    }
  };
  function oc(i) {
    return !(!i || (i.nodeType !== 1 && i.nodeType !== 9 && i.nodeType !== 11));
  }
  function ca(i) {
    return !(
      !i ||
      (i.nodeType !== 1 &&
        i.nodeType !== 9 &&
        i.nodeType !== 11 &&
        (i.nodeType !== 8 || i.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function jp() {}
  function zv(i, o, l, d, p) {
    if (p) {
      if (typeof d == "function") {
        var g = d;
        d = function () {
          var F = la(_);
          g.call(F);
        };
      }
      var _ = zp(o, d, i, 0, null, !1, !1, "", jp);
      return (
        (i._reactRootContainer = _),
        (i[wn] = _.current),
        Ki(i.nodeType === 8 ? i.parentNode : i),
        mr(),
        _
      );
    }
    for (; (p = i.lastChild); ) i.removeChild(p);
    if (typeof d == "function") {
      var E = d;
      d = function () {
        var F = la(P);
        E.call(F);
      };
    }
    var P = rc(i, 0, !1, null, null, !1, !1, "", jp);
    return (
      (i._reactRootContainer = P),
      (i[wn] = P.current),
      Ki(i.nodeType === 8 ? i.parentNode : i),
      mr(function () {
        aa(o, P, l, d);
      }),
      P
    );
  }
  function da(i, o, l, d, p) {
    var g = l._reactRootContainer;
    if (g) {
      var _ = g;
      if (typeof p == "function") {
        var E = p;
        p = function () {
          var P = la(_);
          E.call(P);
        };
      }
      aa(o, _, i, p);
    } else _ = zv(l, o, i, p, d);
    return la(_);
  }
  (vf = function (i) {
    switch (i.tag) {
      case 3:
        var o = i.stateNode;
        if (o.current.memoizedState.isDehydrated) {
          var l = Di(o.pendingLanes);
          l !== 0 &&
            (Ml(o, l | 1), kt(o, Ye()), !(_e & 6) && ((li = Ye() + 500), Un()));
        }
        break;
      case 13:
        mr(function () {
          var d = kn(i, 1);
          if (d !== null) {
            var p = yt();
            Gt(d, i, 1, p);
          }
        }),
          ic(i, 1);
    }
  }),
    (Rl = function (i) {
      if (i.tag === 13) {
        var o = kn(i, 134217728);
        if (o !== null) {
          var l = yt();
          Gt(o, i, 134217728, l);
        }
        ic(i, 134217728);
      }
    }),
    (xf = function (i) {
      if (i.tag === 13) {
        var o = qn(i),
          l = kn(i, o);
        if (l !== null) {
          var d = yt();
          Gt(l, i, o, d);
        }
        ic(i, o);
      }
    }),
    (_f = function () {
      return Pe;
    }),
    (kf = function (i, o) {
      var l = Pe;
      try {
        return (Pe = i), o();
      } finally {
        Pe = l;
      }
    }),
    (bl = function (i, o, l) {
      switch (o) {
        case "input":
          if ((ml(i, l), (o = l.name), l.type === "radio" && o != null)) {
            for (l = i; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                "input[name=" + JSON.stringify("" + o) + '][type="radio"]'
              ),
                o = 0;
              o < l.length;
              o++
            ) {
              var d = l[o];
              if (d !== i && d.form === i.form) {
                var p = To(d);
                if (!p) throw Error(t(90));
                Vd(d), ml(d, p);
              }
            }
          }
          break;
        case "textarea":
          Gd(i, l);
          break;
        case "select":
          (o = l.value), o != null && jr(i, !!l.multiple, o, !1);
      }
    }),
    (of = Qu),
    (af = mr);
  var Fv = { usingClientEntryPoint: !1, Events: [Gi, qr, To, rf, sf, Qu] },
    cs = {
      findFiberByHostInstance: ar,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Av = {
      bundleType: cs.bundleType,
      version: cs.version,
      rendererPackageName: cs.rendererPackageName,
      rendererConfig: cs.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: R.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (i) {
        return (i = df(i)), i === null ? null : i.stateNode;
      },
      findFiberByHostInstance: cs.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fa.isDisabled && fa.supportsFiber)
      try {
        (lo = fa.inject(Av)), (Jt = fa);
      } catch {}
  }
  return (
    (bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fv),
    (bt.createPortal = function (i, o) {
      var l =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!oc(o)) throw Error(t(200));
      return Nv(i, o, null, l);
    }),
    (bt.createRoot = function (i, o) {
      if (!oc(i)) throw Error(t(299));
      var l = !1,
        d = "",
        p = Ap;
      return (
        o != null &&
          (o.unstable_strictMode === !0 && (l = !0),
          o.identifierPrefix !== void 0 && (d = o.identifierPrefix),
          o.onRecoverableError !== void 0 && (p = o.onRecoverableError)),
        (o = rc(i, 1, !1, null, null, l, !1, d, p)),
        (i[wn] = o.current),
        Ki(i.nodeType === 8 ? i.parentNode : i),
        new sc(o)
      );
    }),
    (bt.findDOMNode = function (i) {
      if (i == null) return null;
      if (i.nodeType === 1) return i;
      var o = i._reactInternals;
      if (o === void 0)
        throw typeof i.render == "function"
          ? Error(t(188))
          : ((i = Object.keys(i).join(",")), Error(t(268, i)));
      return (i = df(o)), (i = i === null ? null : i.stateNode), i;
    }),
    (bt.flushSync = function (i) {
      return mr(i);
    }),
    (bt.hydrate = function (i, o, l) {
      if (!ca(o)) throw Error(t(200));
      return da(null, i, o, !0, l);
    }),
    (bt.hydrateRoot = function (i, o, l) {
      if (!oc(i)) throw Error(t(405));
      var d = (l != null && l.hydratedSources) || null,
        p = !1,
        g = "",
        _ = Ap;
      if (
        (l != null &&
          (l.unstable_strictMode === !0 && (p = !0),
          l.identifierPrefix !== void 0 && (g = l.identifierPrefix),
          l.onRecoverableError !== void 0 && (_ = l.onRecoverableError)),
        (o = zp(o, null, i, 1, l ?? null, p, !1, g, _)),
        (i[wn] = o.current),
        Ki(i),
        d)
      )
        for (i = 0; i < d.length; i++)
          (l = d[i]),
            (p = l._getVersion),
            (p = p(l._source)),
            o.mutableSourceEagerHydrationData == null
              ? (o.mutableSourceEagerHydrationData = [l, p])
              : o.mutableSourceEagerHydrationData.push(l, p);
      return new ua(o);
    }),
    (bt.render = function (i, o, l) {
      if (!ca(o)) throw Error(t(200));
      return da(null, i, o, !1, l);
    }),
    (bt.unmountComponentAtNode = function (i) {
      if (!ca(i)) throw Error(t(40));
      return i._reactRootContainer
        ? (mr(function () {
            da(null, null, i, !1, function () {
              (i._reactRootContainer = null), (i[wn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (bt.unstable_batchedUpdates = Qu),
    (bt.unstable_renderSubtreeIntoContainer = function (i, o, l, d) {
      if (!ca(l)) throw Error(t(200));
      if (i == null || i._reactInternals === void 0) throw Error(t(38));
      return da(i, o, l, !1, d);
    }),
    (bt.version = "18.3.1-next-f1338f8080-20240426"),
    bt
  );
}
var Kp;
function qv() {
  if (Kp) return uc.exports;
  Kp = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (e) {
        console.error(e);
      }
  }
  return n(), (uc.exports = Xv()), uc.exports;
}
var Xp;
function Gv() {
  if (Xp) return ha;
  Xp = 1;
  var n = qv();
  return (ha.createRoot = n.createRoot), (ha.hydrateRoot = n.hydrateRoot), ha;
}
var Qv = Gv();
const Zv = "/assets/heroimg-BtKeWVx5.jpg",
  Jv = "/assets/hkimg-CuAnlCpM.jpg";
var Ic = function (n, e) {
  return (
    (Ic =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, r) {
          t.__proto__ = r;
        }) ||
      function (t, r) {
        for (var s in r)
          Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
      }),
    Ic(n, e)
  );
};
function ex(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Class extends value " + String(e) + " is not a constructor or null"
    );
  Ic(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
var rt = function () {
  return (
    (rt =
      Object.assign ||
      function (e) {
        for (var t, r = 1, s = arguments.length; r < s; r++) {
          t = arguments[r];
          for (var a in t)
            Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        }
        return e;
      }),
    rt.apply(this, arguments)
  );
};
function tx(n, e) {
  var t = {};
  for (var r in n)
    Object.prototype.hasOwnProperty.call(n, r) &&
      e.indexOf(r) < 0 &&
      (t[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(n); s < r.length; s++)
      e.indexOf(r[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, r[s]) &&
        (t[r[s]] = n[r[s]]);
  return t;
}
function ci(n, e, t, r) {
  function s(a) {
    return a instanceof t
      ? a
      : new t(function (u) {
          u(a);
        });
  }
  return new (t || (t = Promise))(function (a, u) {
    function c(m) {
      try {
        h(r.next(m));
      } catch (y) {
        u(y);
      }
    }
    function f(m) {
      try {
        h(r.throw(m));
      } catch (y) {
        u(y);
      }
    }
    function h(m) {
      m.done ? a(m.value) : s(m.value).then(c, f);
    }
    h((r = r.apply(n, [])).next());
  });
}
function di(n, e) {
  var t = {
      label: 0,
      sent: function () {
        if (a[0] & 1) throw a[1];
        return a[1];
      },
      trys: [],
      ops: [],
    },
    r,
    s,
    a,
    u = Object.create(
      (typeof Iterator == "function" ? Iterator : Object).prototype
    );
  return (
    (u.next = c(0)),
    (u.throw = c(1)),
    (u.return = c(2)),
    typeof Symbol == "function" &&
      (u[Symbol.iterator] = function () {
        return this;
      }),
    u
  );
  function c(h) {
    return function (m) {
      return f([h, m]);
    };
  }
  function f(h) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; u && ((u = 0), h[0] && (t = 0)), t; )
      try {
        if (
          ((r = 1),
          s &&
            (a =
              h[0] & 2
                ? s.return
                : h[0]
                ? s.throw || ((a = s.return) && a.call(s), 0)
                : s.next) &&
            !(a = a.call(s, h[1])).done)
        )
          return a;
        switch (((s = 0), a && (h = [h[0] & 2, a.value]), h[0])) {
          case 0:
          case 1:
            a = h;
            break;
          case 4:
            return t.label++, { value: h[1], done: !1 };
          case 5:
            t.label++, (s = h[1]), (h = [0]);
            continue;
          case 7:
            (h = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((a = t.trys),
              !(a = a.length > 0 && a[a.length - 1]) &&
                (h[0] === 6 || h[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (h[0] === 3 && (!a || (h[1] > a[0] && h[1] < a[3]))) {
              t.label = h[1];
              break;
            }
            if (h[0] === 6 && t.label < a[1]) {
              (t.label = a[1]), (a = h);
              break;
            }
            if (a && t.label < a[2]) {
              (t.label = a[2]), t.ops.push(h);
              break;
            }
            a[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        h = e.call(n, t);
      } catch (m) {
        (h = [6, m]), (s = 0);
      } finally {
        r = a = 0;
      }
    if (h[0] & 5) throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}
function cn(n, e) {
  var t = {};
  for (var r in n)
    Object.prototype.hasOwnProperty.call(n, r) &&
      e.indexOf(r) < 0 &&
      (t[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") {
    var s = 0;
    for (r = Object.getOwnPropertySymbols(n); s < r.length; s++)
      e.indexOf(r[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, r[s]) &&
        (t[r[s]] = n[r[s]]);
  }
  return t;
}
var Cr =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function ld(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
function ud(n, e) {
  return n((e = { exports: {} }), e.exports), e.exports;
}
var kr = ud(function (n, e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = (function () {
    function r() {
      var s = this;
      (this.locked = new Map()),
        (this.addToLocked = function (a, u) {
          var c = s.locked.get(a);
          c === void 0
            ? u === void 0
              ? s.locked.set(a, [])
              : s.locked.set(a, [u])
            : u !== void 0 && (c.unshift(u), s.locked.set(a, c));
        }),
        (this.isLocked = function (a) {
          return s.locked.has(a);
        }),
        (this.lock = function (a) {
          return new Promise(function (u, c) {
            s.isLocked(a) ? s.addToLocked(a, u) : (s.addToLocked(a), u());
          });
        }),
        (this.unlock = function (a) {
          var u = s.locked.get(a);
          if (u !== void 0 && u.length !== 0) {
            var c = u.pop();
            s.locked.set(a, u), c !== void 0 && setTimeout(c, 0);
          } else s.locked.delete(a);
        });
    }
    return (
      (r.getInstance = function () {
        return r.instance === void 0 && (r.instance = new r()), r.instance;
      }),
      r
    );
  })();
  e.default = function () {
    return t.getInstance();
  };
});
ld(kr);
var nx = ld(
  ud(function (n, e) {
    var t =
        (Cr && Cr.__awaiter) ||
        function (m, y, w, v) {
          return new (w || (w = Promise))(function (x, b) {
            function k(O) {
              try {
                C(v.next(O));
              } catch (R) {
                b(R);
              }
            }
            function S(O) {
              try {
                C(v.throw(O));
              } catch (R) {
                b(R);
              }
            }
            function C(O) {
              O.done
                ? x(O.value)
                : new w(function (R) {
                    R(O.value);
                  }).then(k, S);
            }
            C((v = v.apply(m, y || [])).next());
          });
        },
      r =
        (Cr && Cr.__generator) ||
        function (m, y) {
          var w,
            v,
            x,
            b,
            k = {
              label: 0,
              sent: function () {
                if (1 & x[0]) throw x[1];
                return x[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (b = { next: S(0), throw: S(1), return: S(2) }),
            typeof Symbol == "function" &&
              (b[Symbol.iterator] = function () {
                return this;
              }),
            b
          );
          function S(C) {
            return function (O) {
              return (function (R) {
                if (w) throw new TypeError("Generator is already executing.");
                for (; k; )
                  try {
                    if (
                      ((w = 1),
                      v &&
                        (x =
                          2 & R[0]
                            ? v.return
                            : R[0]
                            ? v.throw || ((x = v.return) && x.call(v), 0)
                            : v.next) &&
                        !(x = x.call(v, R[1])).done)
                    )
                      return x;
                    switch (((v = 0), x && (R = [2 & R[0], x.value]), R[0])) {
                      case 0:
                      case 1:
                        x = R;
                        break;
                      case 4:
                        return k.label++, { value: R[1], done: !1 };
                      case 5:
                        k.label++, (v = R[1]), (R = [0]);
                        continue;
                      case 7:
                        (R = k.ops.pop()), k.trys.pop();
                        continue;
                      default:
                        if (
                          ((x = k.trys),
                          !(
                            (x = x.length > 0 && x[x.length - 1]) ||
                            (R[0] !== 6 && R[0] !== 2)
                          ))
                        ) {
                          k = 0;
                          continue;
                        }
                        if (
                          R[0] === 3 &&
                          (!x || (R[1] > x[0] && R[1] < x[3]))
                        ) {
                          k.label = R[1];
                          break;
                        }
                        if (R[0] === 6 && k.label < x[1]) {
                          (k.label = x[1]), (x = R);
                          break;
                        }
                        if (x && k.label < x[2]) {
                          (k.label = x[2]), k.ops.push(R);
                          break;
                        }
                        x[2] && k.ops.pop(), k.trys.pop();
                        continue;
                    }
                    R = y.call(m, k);
                  } catch (A) {
                    (R = [6, A]), (v = 0);
                  } finally {
                    w = x = 0;
                  }
                if (5 & R[0]) throw R[1];
                return { value: R[0] ? R[1] : void 0, done: !0 };
              })([C, O]);
            };
          }
        },
      s = Cr;
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = "browser-tabs-lock-key",
      u = {
        key: function (m) {
          return t(s, void 0, void 0, function () {
            return r(this, function (y) {
              throw new Error("Unsupported");
            });
          });
        },
        getItem: function (m) {
          return t(s, void 0, void 0, function () {
            return r(this, function (y) {
              throw new Error("Unsupported");
            });
          });
        },
        clear: function () {
          return t(s, void 0, void 0, function () {
            return r(this, function (m) {
              return [2, window.localStorage.clear()];
            });
          });
        },
        removeItem: function (m) {
          return t(s, void 0, void 0, function () {
            return r(this, function (y) {
              throw new Error("Unsupported");
            });
          });
        },
        setItem: function (m, y) {
          return t(s, void 0, void 0, function () {
            return r(this, function (w) {
              throw new Error("Unsupported");
            });
          });
        },
        keySync: function (m) {
          return window.localStorage.key(m);
        },
        getItemSync: function (m) {
          return window.localStorage.getItem(m);
        },
        clearSync: function () {
          return window.localStorage.clear();
        },
        removeItemSync: function (m) {
          return window.localStorage.removeItem(m);
        },
        setItemSync: function (m, y) {
          return window.localStorage.setItem(m, y);
        },
      };
    function c(m) {
      return new Promise(function (y) {
        return setTimeout(y, m);
      });
    }
    function f(m) {
      for (
        var y = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",
          w = "",
          v = 0;
        v < m;
        v++
      )
        w += y[Math.floor(Math.random() * y.length)];
      return w;
    }
    var h = (function () {
      function m(y) {
        (this.acquiredIatSet = new Set()),
          (this.storageHandler = void 0),
          (this.id = Date.now().toString() + f(15)),
          (this.acquireLock = this.acquireLock.bind(this)),
          (this.releaseLock = this.releaseLock.bind(this)),
          (this.releaseLock__private__ =
            this.releaseLock__private__.bind(this)),
          (this.waitForSomethingToChange =
            this.waitForSomethingToChange.bind(this)),
          (this.refreshLockWhileAcquired =
            this.refreshLockWhileAcquired.bind(this)),
          (this.storageHandler = y),
          m.waiters === void 0 && (m.waiters = []);
      }
      return (
        (m.prototype.acquireLock = function (y, w) {
          return (
            w === void 0 && (w = 5e3),
            t(this, void 0, void 0, function () {
              var v, x, b, k, S, C, O;
              return r(this, function (R) {
                switch (R.label) {
                  case 0:
                    (v = Date.now() + f(4)),
                      (x = Date.now() + w),
                      (b = a + "-" + y),
                      (k =
                        this.storageHandler === void 0
                          ? u
                          : this.storageHandler),
                      (R.label = 1);
                  case 1:
                    return Date.now() < x ? [4, c(30)] : [3, 8];
                  case 2:
                    return (
                      R.sent(),
                      k.getItemSync(b) !== null
                        ? [3, 5]
                        : ((S = this.id + "-" + y + "-" + v),
                          [4, c(Math.floor(25 * Math.random()))])
                    );
                  case 3:
                    return (
                      R.sent(),
                      k.setItemSync(
                        b,
                        JSON.stringify({
                          id: this.id,
                          iat: v,
                          timeoutKey: S,
                          timeAcquired: Date.now(),
                          timeRefreshed: Date.now(),
                        })
                      ),
                      [4, c(30)]
                    );
                  case 4:
                    return (
                      R.sent(),
                      (C = k.getItemSync(b)) !== null &&
                      (O = JSON.parse(C)).id === this.id &&
                      O.iat === v
                        ? (this.acquiredIatSet.add(v),
                          this.refreshLockWhileAcquired(b, v),
                          [2, !0])
                        : [3, 7]
                    );
                  case 5:
                    return (
                      m.lockCorrector(
                        this.storageHandler === void 0 ? u : this.storageHandler
                      ),
                      [4, this.waitForSomethingToChange(x)]
                    );
                  case 6:
                    R.sent(), (R.label = 7);
                  case 7:
                    return (v = Date.now() + f(4)), [3, 1];
                  case 8:
                    return [2, !1];
                }
              });
            })
          );
        }),
        (m.prototype.refreshLockWhileAcquired = function (y, w) {
          return t(this, void 0, void 0, function () {
            var v = this;
            return r(this, function (x) {
              return (
                setTimeout(function () {
                  return t(v, void 0, void 0, function () {
                    var b, k, S;
                    return r(this, function (C) {
                      switch (C.label) {
                        case 0:
                          return [4, kr.default().lock(w)];
                        case 1:
                          return (
                            C.sent(),
                            this.acquiredIatSet.has(w)
                              ? ((b =
                                  this.storageHandler === void 0
                                    ? u
                                    : this.storageHandler),
                                (k = b.getItemSync(y)) === null
                                  ? (kr.default().unlock(w), [2])
                                  : (((S = JSON.parse(k)).timeRefreshed =
                                      Date.now()),
                                    b.setItemSync(y, JSON.stringify(S)),
                                    kr.default().unlock(w),
                                    this.refreshLockWhileAcquired(y, w),
                                    [2]))
                              : (kr.default().unlock(w), [2])
                          );
                      }
                    });
                  });
                }, 1e3),
                [2]
              );
            });
          });
        }),
        (m.prototype.waitForSomethingToChange = function (y) {
          return t(this, void 0, void 0, function () {
            return r(this, function (w) {
              switch (w.label) {
                case 0:
                  return [
                    4,
                    new Promise(function (v) {
                      var x = !1,
                        b = Date.now(),
                        k = !1;
                      function S() {
                        if (
                          (k ||
                            (window.removeEventListener("storage", S),
                            m.removeFromWaiting(S),
                            clearTimeout(C),
                            (k = !0)),
                          !x)
                        ) {
                          x = !0;
                          var O = 50 - (Date.now() - b);
                          O > 0 ? setTimeout(v, O) : v(null);
                        }
                      }
                      window.addEventListener("storage", S), m.addToWaiting(S);
                      var C = setTimeout(S, Math.max(0, y - Date.now()));
                    }),
                  ];
                case 1:
                  return w.sent(), [2];
              }
            });
          });
        }),
        (m.addToWaiting = function (y) {
          this.removeFromWaiting(y), m.waiters !== void 0 && m.waiters.push(y);
        }),
        (m.removeFromWaiting = function (y) {
          m.waiters !== void 0 &&
            (m.waiters = m.waiters.filter(function (w) {
              return w !== y;
            }));
        }),
        (m.notifyWaiters = function () {
          m.waiters !== void 0 &&
            m.waiters.slice().forEach(function (y) {
              return y();
            });
        }),
        (m.prototype.releaseLock = function (y) {
          return t(this, void 0, void 0, function () {
            return r(this, function (w) {
              switch (w.label) {
                case 0:
                  return [4, this.releaseLock__private__(y)];
                case 1:
                  return [2, w.sent()];
              }
            });
          });
        }),
        (m.prototype.releaseLock__private__ = function (y) {
          return t(this, void 0, void 0, function () {
            var w, v, x, b;
            return r(this, function (k) {
              switch (k.label) {
                case 0:
                  return (
                    (w =
                      this.storageHandler === void 0 ? u : this.storageHandler),
                    (v = a + "-" + y),
                    (x = w.getItemSync(v)) === null
                      ? [2]
                      : (b = JSON.parse(x)).id !== this.id
                      ? [3, 2]
                      : [4, kr.default().lock(b.iat)]
                  );
                case 1:
                  k.sent(),
                    this.acquiredIatSet.delete(b.iat),
                    w.removeItemSync(v),
                    kr.default().unlock(b.iat),
                    m.notifyWaiters(),
                    (k.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        }),
        (m.lockCorrector = function (y) {
          for (var w = Date.now() - 5e3, v = y, x = [], b = 0; ; ) {
            var k = v.keySync(b);
            if (k === null) break;
            x.push(k), b++;
          }
          for (var S = !1, C = 0; C < x.length; C++) {
            var O = x[C];
            if (O.includes(a)) {
              var R = v.getItemSync(O);
              if (R !== null) {
                var A = JSON.parse(R);
                ((A.timeRefreshed === void 0 && A.timeAcquired < w) ||
                  (A.timeRefreshed !== void 0 && A.timeRefreshed < w)) &&
                  (v.removeItemSync(O), (S = !0));
              }
            }
          }
          S && m.notifyWaiters();
        }),
        (m.waiters = void 0),
        m
      );
    })();
    e.default = h;
  })
);
const rx = { timeoutInSeconds: 60 },
  $g = { name: "auth0-spa-js", version: "2.1.3" },
  Vg = () => Date.now();
class ht extends Error {
  constructor(e, t) {
    super(t),
      (this.error = e),
      (this.error_description = t),
      Object.setPrototypeOf(this, ht.prototype);
  }
  static fromPayload({ error: e, error_description: t }) {
    return new ht(e, t);
  }
}
class cd extends ht {
  constructor(e, t, r, s = null) {
    super(e, t),
      (this.state = r),
      (this.appState = s),
      Object.setPrototypeOf(this, cd.prototype);
  }
}
class zs extends ht {
  constructor() {
    super("timeout", "Timeout"), Object.setPrototypeOf(this, zs.prototype);
  }
}
class dd extends zs {
  constructor(e) {
    super(), (this.popup = e), Object.setPrototypeOf(this, dd.prototype);
  }
}
class fd extends ht {
  constructor(e) {
    super("cancelled", "Popup closed"),
      (this.popup = e),
      Object.setPrototypeOf(this, fd.prototype);
  }
}
class hd extends ht {
  constructor(e, t, r) {
    super(e, t),
      (this.mfa_token = r),
      Object.setPrototypeOf(this, hd.prototype);
  }
}
class el extends ht {
  constructor(e, t) {
    super(
      "missing_refresh_token",
      `Missing Refresh Token (audience: '${qp(e, ["default"])}', scope: '${qp(
        t
      )}')`
    ),
      (this.audience = e),
      (this.scope = t),
      Object.setPrototypeOf(this, el.prototype);
  }
}
function qp(n, e = []) {
  return n && !e.includes(n) ? n : "";
}
const Ra = () => window.crypto,
  fc = () => {
    const n =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.";
    let e = "";
    return (
      Array.from(Ra().getRandomValues(new Uint8Array(43))).forEach(
        (t) => (e += n[t % n.length])
      ),
      e
    );
  },
  Gp = (n) => btoa(n),
  Nc = (n) => {
    var { clientId: e } = n,
      t = cn(n, ["clientId"]);
    return new URLSearchParams(
      ((r) =>
        Object.keys(r)
          .filter((s) => r[s] !== void 0)
          .reduce(
            (s, a) => Object.assign(Object.assign({}, s), { [a]: r[a] }),
            {}
          ))(Object.assign({ client_id: e }, t))
    ).toString();
  },
  Qp = (n) =>
    ((e) =>
      decodeURIComponent(
        atob(e)
          .split("")
          .map((t) => "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      ))(n.replace(/_/g, "/").replace(/-/g, "+")),
  ix = async (n, e) => {
    const t = await fetch(n, e);
    return { ok: t.ok, json: await t.json() };
  },
  sx = async (n, e, t) => {
    const r = new AbortController();
    let s;
    return (
      (e.signal = r.signal),
      Promise.race([
        ix(n, e),
        new Promise((a, u) => {
          s = setTimeout(() => {
            r.abort(), u(new Error("Timeout when executing 'fetch'"));
          }, t);
        }),
      ]).finally(() => {
        clearTimeout(s);
      })
    );
  },
  ox = async (n, e, t, r, s, a, u) => {
    return (
      (c = {
        auth: { audience: e, scope: t },
        timeout: s,
        fetchUrl: n,
        fetchOptions: r,
        useFormData: u,
      }),
      (f = a),
      new Promise(function (h, m) {
        const y = new MessageChannel();
        (y.port1.onmessage = function (w) {
          w.data.error ? m(new Error(w.data.error)) : h(w.data),
            y.port1.close();
        }),
          f.postMessage(c, [y.port2]);
      })
    );
    var c, f;
  },
  ax = async (n, e, t, r, s, a, u = 1e4) =>
    s ? ox(n, e, t, r, u, s, a) : sx(n, r, u);
async function lx(n, e) {
  var {
      baseUrl: t,
      timeout: r,
      audience: s,
      scope: a,
      auth0Client: u,
      useFormData: c,
    } = n,
    f = cn(n, [
      "baseUrl",
      "timeout",
      "audience",
      "scope",
      "auth0Client",
      "useFormData",
    ]);
  const h = c ? Nc(f) : JSON.stringify(f);
  return await (async function (m, y, w, v, x, b, k) {
    let S,
      C = null;
    for (let N = 0; N < 3; N++)
      try {
        (S = await ax(m, w, v, x, b, k, y)), (C = null);
        break;
      } catch (B) {
        C = B;
      }
    if (C) throw C;
    const O = S.json,
      { error: R, error_description: A } = O,
      W = cn(O, ["error", "error_description"]),
      { ok: H } = S;
    if (!H) {
      const N = A || `HTTP error. Unable to fetch ${m}`;
      throw R === "mfa_required"
        ? new hd(R, N, W.mfa_token)
        : R === "missing_refresh_token"
        ? new el(w, v)
        : new ht(R || "request_error", N);
    }
    return W;
  })(
    `${t}/oauth/token`,
    r,
    s || "default",
    a,
    {
      method: "POST",
      body: h,
      headers: {
        "Content-Type": c
          ? "application/x-www-form-urlencoded"
          : "application/json",
        "Auth0-Client": btoa(JSON.stringify(u || $g)),
      },
    },
    e,
    c
  );
}
const pa = (...n) => {
  return ((e = n.filter(Boolean).join(" ").trim().split(/\s+/)),
  Array.from(new Set(e))).join(" ");
  var e;
};
class hn {
  constructor(e, t = "@@auth0spajs@@", r) {
    (this.prefix = t),
      (this.suffix = r),
      (this.clientId = e.clientId),
      (this.scope = e.scope),
      (this.audience = e.audience);
  }
  toKey() {
    return [this.prefix, this.clientId, this.audience, this.scope, this.suffix]
      .filter(Boolean)
      .join("::");
  }
  static fromKey(e) {
    const [t, r, s, a] = e.split("::");
    return new hn({ clientId: r, scope: a, audience: s }, t);
  }
  static fromCacheEntry(e) {
    const { scope: t, audience: r, client_id: s } = e;
    return new hn({ scope: t, audience: r, clientId: s });
  }
}
class ux {
  set(e, t) {
    localStorage.setItem(e, JSON.stringify(t));
  }
  get(e) {
    const t = window.localStorage.getItem(e);
    if (t)
      try {
        return JSON.parse(t);
      } catch {
        return;
      }
  }
  remove(e) {
    localStorage.removeItem(e);
  }
  allKeys() {
    return Object.keys(window.localStorage).filter((e) =>
      e.startsWith("@@auth0spajs@@")
    );
  }
}
class Yg {
  constructor() {
    this.enclosedCache = (function () {
      let e = {};
      return {
        set(t, r) {
          e[t] = r;
        },
        get(t) {
          const r = e[t];
          if (r) return r;
        },
        remove(t) {
          delete e[t];
        },
        allKeys: () => Object.keys(e),
      };
    })();
  }
}
class cx {
  constructor(e, t, r) {
    (this.cache = e), (this.keyManifest = t), (this.nowProvider = r || Vg);
  }
  async setIdToken(e, t, r) {
    var s;
    const a = this.getIdTokenCacheKey(e);
    await this.cache.set(a, { id_token: t, decodedToken: r }),
      await ((s = this.keyManifest) === null || s === void 0
        ? void 0
        : s.add(a));
  }
  async getIdToken(e) {
    const t = await this.cache.get(this.getIdTokenCacheKey(e.clientId));
    if (!t && e.scope && e.audience) {
      const r = await this.get(e);
      return !r || !r.id_token || !r.decodedToken
        ? void 0
        : { id_token: r.id_token, decodedToken: r.decodedToken };
    }
    if (t) return { id_token: t.id_token, decodedToken: t.decodedToken };
  }
  async get(e, t = 0) {
    var r;
    let s = await this.cache.get(e.toKey());
    if (!s) {
      const c = await this.getCacheKeys();
      if (!c) return;
      const f = this.matchExistingCacheKey(e, c);
      f && (s = await this.cache.get(f));
    }
    if (!s) return;
    const a = await this.nowProvider(),
      u = Math.floor(a / 1e3);
    return s.expiresAt - t < u
      ? s.body.refresh_token
        ? ((s.body = { refresh_token: s.body.refresh_token }),
          await this.cache.set(e.toKey(), s),
          s.body)
        : (await this.cache.remove(e.toKey()),
          void (await ((r = this.keyManifest) === null || r === void 0
            ? void 0
            : r.remove(e.toKey()))))
      : s.body;
  }
  async set(e) {
    var t;
    const r = new hn({
        clientId: e.client_id,
        scope: e.scope,
        audience: e.audience,
      }),
      s = await this.wrapCacheEntry(e);
    await this.cache.set(r.toKey(), s),
      await ((t = this.keyManifest) === null || t === void 0
        ? void 0
        : t.add(r.toKey()));
  }
  async clear(e) {
    var t;
    const r = await this.getCacheKeys();
    r &&
      (await r
        .filter((s) => !e || s.includes(e))
        .reduce(async (s, a) => {
          await s, await this.cache.remove(a);
        }, Promise.resolve()),
      await ((t = this.keyManifest) === null || t === void 0
        ? void 0
        : t.clear()));
  }
  async wrapCacheEntry(e) {
    const t = await this.nowProvider();
    return { body: e, expiresAt: Math.floor(t / 1e3) + e.expires_in };
  }
  async getCacheKeys() {
    var e;
    return this.keyManifest
      ? (e = await this.keyManifest.get()) === null || e === void 0
        ? void 0
        : e.keys
      : this.cache.allKeys
      ? this.cache.allKeys()
      : void 0;
  }
  getIdTokenCacheKey(e) {
    return new hn({ clientId: e }, "@@auth0spajs@@", "@@user@@").toKey();
  }
  matchExistingCacheKey(e, t) {
    return t.filter((r) => {
      var s;
      const a = hn.fromKey(r),
        u = new Set(a.scope && a.scope.split(" ")),
        c =
          ((s = e.scope) === null || s === void 0 ? void 0 : s.split(" ")) ||
          [],
        f = a.scope && c.reduce((h, m) => h && u.has(m), !0);
      return (
        a.prefix === "@@auth0spajs@@" &&
        a.clientId === e.clientId &&
        a.audience === e.audience &&
        f
      );
    })[0];
  }
}
class dx {
  constructor(e, t, r) {
    (this.storage = e),
      (this.clientId = t),
      (this.cookieDomain = r),
      (this.storageKey = `a0.spajs.txs.${this.clientId}`);
  }
  create(e) {
    this.storage.save(this.storageKey, e, {
      daysUntilExpire: 1,
      cookieDomain: this.cookieDomain,
    });
  }
  get() {
    return this.storage.get(this.storageKey);
  }
  remove() {
    this.storage.remove(this.storageKey, { cookieDomain: this.cookieDomain });
  }
}
const fs = (n) => typeof n == "number",
  fx = [
    "iss",
    "aud",
    "exp",
    "nbf",
    "iat",
    "jti",
    "azp",
    "nonce",
    "auth_time",
    "at_hash",
    "c_hash",
    "acr",
    "amr",
    "sub_jwk",
    "cnf",
    "sip_from_tag",
    "sip_date",
    "sip_callid",
    "sip_cseq_num",
    "sip_via_branch",
    "orig",
    "dest",
    "mky",
    "events",
    "toe",
    "txn",
    "rph",
    "sid",
    "vot",
    "vtm",
  ],
  hx = (n) => {
    if (!n.id_token) throw new Error("ID token is required but missing");
    const e = ((a) => {
      const u = a.split("."),
        [c, f, h] = u;
      if (u.length !== 3 || !c || !f || !h)
        throw new Error("ID token could not be decoded");
      const m = JSON.parse(Qp(f)),
        y = { __raw: a },
        w = {};
      return (
        Object.keys(m).forEach((v) => {
          (y[v] = m[v]), fx.includes(v) || (w[v] = m[v]);
        }),
        {
          encoded: { header: c, payload: f, signature: h },
          header: JSON.parse(Qp(c)),
          claims: y,
          user: w,
        }
      );
    })(n.id_token);
    if (!e.claims.iss)
      throw new Error(
        "Issuer (iss) claim must be a string present in the ID token"
      );
    if (e.claims.iss !== n.iss)
      throw new Error(
        `Issuer (iss) claim mismatch in the ID token; expected "${n.iss}", found "${e.claims.iss}"`
      );
    if (!e.user.sub)
      throw new Error(
        "Subject (sub) claim must be a string present in the ID token"
      );
    if (e.header.alg !== "RS256")
      throw new Error(
        `Signature algorithm of "${e.header.alg}" is not supported. Expected the ID token to be signed with "RS256".`
      );
    if (
      !e.claims.aud ||
      (typeof e.claims.aud != "string" && !Array.isArray(e.claims.aud))
    )
      throw new Error(
        "Audience (aud) claim must be a string or array of strings present in the ID token"
      );
    if (Array.isArray(e.claims.aud)) {
      if (!e.claims.aud.includes(n.aud))
        throw new Error(
          `Audience (aud) claim mismatch in the ID token; expected "${
            n.aud
          }" but was not one of "${e.claims.aud.join(", ")}"`
        );
      if (e.claims.aud.length > 1) {
        if (!e.claims.azp)
          throw new Error(
            "Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values"
          );
        if (e.claims.azp !== n.aud)
          throw new Error(
            `Authorized Party (azp) claim mismatch in the ID token; expected "${n.aud}", found "${e.claims.azp}"`
          );
      }
    } else if (e.claims.aud !== n.aud)
      throw new Error(
        `Audience (aud) claim mismatch in the ID token; expected "${n.aud}" but found "${e.claims.aud}"`
      );
    if (n.nonce) {
      if (!e.claims.nonce)
        throw new Error(
          "Nonce (nonce) claim must be a string present in the ID token"
        );
      if (e.claims.nonce !== n.nonce)
        throw new Error(
          `Nonce (nonce) claim mismatch in the ID token; expected "${n.nonce}", found "${e.claims.nonce}"`
        );
    }
    if (n.max_age && !fs(e.claims.auth_time))
      throw new Error(
        "Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified"
      );
    if (e.claims.exp == null || !fs(e.claims.exp))
      throw new Error(
        "Expiration Time (exp) claim must be a number present in the ID token"
      );
    if (!fs(e.claims.iat))
      throw new Error(
        "Issued At (iat) claim must be a number present in the ID token"
      );
    const t = n.leeway || 60,
      r = new Date(n.now || Date.now()),
      s = new Date(0);
    if ((s.setUTCSeconds(e.claims.exp + t), r > s))
      throw new Error(
        `Expiration Time (exp) claim error in the ID token; current time (${r}) is after expiration time (${s})`
      );
    if (e.claims.nbf != null && fs(e.claims.nbf)) {
      const a = new Date(0);
      if ((a.setUTCSeconds(e.claims.nbf - t), r < a))
        throw new Error(
          `Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${r}) is before ${a}`
        );
    }
    if (e.claims.auth_time != null && fs(e.claims.auth_time)) {
      const a = new Date(0);
      if (
        (a.setUTCSeconds(parseInt(e.claims.auth_time) + n.max_age + t), r > a)
      )
        throw new Error(
          `Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (${r}) is after last auth at ${a}`
        );
    }
    if (n.organization) {
      const a = n.organization.trim();
      if (a.startsWith("org_")) {
        const u = a;
        if (!e.claims.org_id)
          throw new Error(
            "Organization ID (org_id) claim must be a string present in the ID token"
          );
        if (u !== e.claims.org_id)
          throw new Error(
            `Organization ID (org_id) claim mismatch in the ID token; expected "${u}", found "${e.claims.org_id}"`
          );
      } else {
        const u = a.toLowerCase();
        if (!e.claims.org_name)
          throw new Error(
            "Organization Name (org_name) claim must be a string present in the ID token"
          );
        if (u !== e.claims.org_name)
          throw new Error(
            `Organization Name (org_name) claim mismatch in the ID token; expected "${u}", found "${e.claims.org_name}"`
          );
      }
    }
    return e;
  };
var Pr = ud(function (n, e) {
  var t =
    (Cr && Cr.__assign) ||
    function () {
      return (
        (t =
          Object.assign ||
          function (f) {
            for (var h, m = 1, y = arguments.length; m < y; m++)
              for (var w in (h = arguments[m]))
                Object.prototype.hasOwnProperty.call(h, w) && (f[w] = h[w]);
            return f;
          }),
        t.apply(this, arguments)
      );
    };
  function r(f, h) {
    if (!h) return "";
    var m = "; " + f;
    return h === !0 ? m : m + "=" + h;
  }
  function s(f, h, m) {
    return (
      encodeURIComponent(f)
        .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29") +
      "=" +
      encodeURIComponent(h).replace(
        /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
        decodeURIComponent
      ) +
      (function (y) {
        if (typeof y.expires == "number") {
          var w = new Date();
          w.setMilliseconds(w.getMilliseconds() + 864e5 * y.expires),
            (y.expires = w);
        }
        return (
          r("Expires", y.expires ? y.expires.toUTCString() : "") +
          r("Domain", y.domain) +
          r("Path", y.path) +
          r("Secure", y.secure) +
          r("SameSite", y.sameSite)
        );
      })(m)
    );
  }
  function a(f) {
    for (
      var h = {}, m = f ? f.split("; ") : [], y = /(%[\dA-F]{2})+/gi, w = 0;
      w < m.length;
      w++
    ) {
      var v = m[w].split("="),
        x = v.slice(1).join("=");
      x.charAt(0) === '"' && (x = x.slice(1, -1));
      try {
        h[v[0].replace(y, decodeURIComponent)] = x.replace(
          y,
          decodeURIComponent
        );
      } catch {}
    }
    return h;
  }
  function u() {
    return a(document.cookie);
  }
  function c(f, h, m) {
    document.cookie = s(f, h, t({ path: "/" }, m));
  }
  (e.__esModule = !0),
    (e.encode = s),
    (e.parse = a),
    (e.getAll = u),
    (e.get = function (f) {
      return u()[f];
    }),
    (e.set = c),
    (e.remove = function (f, h) {
      c(f, "", t(t({}, h), { expires: -1 }));
    });
});
ld(Pr), Pr.encode, Pr.parse, Pr.getAll;
var px = Pr.get,
  Kg = Pr.set,
  Xg = Pr.remove;
const pi = {
    get(n) {
      const e = px(n);
      if (e !== void 0) return JSON.parse(e);
    },
    save(n, e, t) {
      let r = {};
      window.location.protocol === "https:" &&
        (r = { secure: !0, sameSite: "none" }),
        t != null && t.daysUntilExpire && (r.expires = t.daysUntilExpire),
        t != null && t.cookieDomain && (r.domain = t.cookieDomain),
        Kg(n, JSON.stringify(e), r);
    },
    remove(n, e) {
      let t = {};
      e != null && e.cookieDomain && (t.domain = e.cookieDomain), Xg(n, t);
    },
  },
  mx = {
    get(n) {
      return pi.get(n) || pi.get(`_legacy_${n}`);
    },
    save(n, e, t) {
      let r = {};
      window.location.protocol === "https:" && (r = { secure: !0 }),
        t != null && t.daysUntilExpire && (r.expires = t.daysUntilExpire),
        t != null && t.cookieDomain && (r.domain = t.cookieDomain),
        Kg(`_legacy_${n}`, JSON.stringify(e), r),
        pi.save(n, e, t);
    },
    remove(n, e) {
      let t = {};
      e != null && e.cookieDomain && (t.domain = e.cookieDomain),
        Xg(n, t),
        pi.remove(n, e),
        pi.remove(`_legacy_${n}`, e);
    },
  },
  gx = {
    get(n) {
      if (typeof sessionStorage > "u") return;
      const e = sessionStorage.getItem(n);
      return e != null ? JSON.parse(e) : void 0;
    },
    save(n, e) {
      sessionStorage.setItem(n, JSON.stringify(e));
    },
    remove(n) {
      sessionStorage.removeItem(n);
    },
  };
function yx(n, e, t) {
  var r = e === void 0 ? null : e,
    s = (function (f, h) {
      var m = atob(f);
      if (h) {
        for (var y = new Uint8Array(m.length), w = 0, v = m.length; w < v; ++w)
          y[w] = m.charCodeAt(w);
        return String.fromCharCode.apply(null, new Uint16Array(y.buffer));
      }
      return m;
    })(n, t !== void 0 && t),
    a =
      s.indexOf(
        `
`,
        10
      ) + 1,
    u = s.substring(a) + (r ? "//# sourceMappingURL=" + r : ""),
    c = new Blob([u], { type: "application/javascript" });
  return URL.createObjectURL(c);
}
var Zp,
  Jp,
  em,
  hc,
  wx =
    ((Zp =
      "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9ImZ1bmN0aW9uIj09dHlwZW9mIFN1cHByZXNzZWRFcnJvciYmU3VwcHJlc3NlZEVycm9yO2NvbnN0IHM9ZT0+e3ZhcntjbGllbnRJZDp0fT1lLHI9ZnVuY3Rpb24oZSx0KXt2YXIgcj17fTtmb3IodmFyIHMgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxzKSYmdC5pbmRleE9mKHMpPDAmJihyW3NdPWVbc10pO2lmKG51bGwhPWUmJiJmdW5jdGlvbiI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxzLmxlbmd0aDtvKyspdC5pbmRleE9mKHNbb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLHNbb10pJiYocltzW29dXT1lW3Nbb11dKX1yZXR1cm4gcn0oZSxbImNsaWVudElkIl0pO3JldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKChlPT5PYmplY3Qua2V5cyhlKS5maWx0ZXIoKHQ9PnZvaWQgMCE9PWVbdF0pKS5yZWR1Y2UoKCh0LHIpPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse1tyXTplW3JdfSkpLHt9KSkoT2JqZWN0LmFzc2lnbih7Y2xpZW50X2lkOnR9LHIpKSkudG9TdHJpbmcoKX07bGV0IG89e307Y29uc3Qgbj0oZSx0KT0+YCR7ZX18JHt0fWA7YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGFzeW5jKHtkYXRhOnt0aW1lb3V0OmUsYXV0aDpyLGZldGNoVXJsOmksZmV0Y2hPcHRpb25zOmMsdXNlRm9ybURhdGE6YX0scG9ydHM6W3BdfSk9PntsZXQgZjtjb25zdHthdWRpZW5jZTp1LHNjb3BlOmx9PXJ8fHt9O3RyeXtjb25zdCByPWE/KGU9Pntjb25zdCB0PW5ldyBVUkxTZWFyY2hQYXJhbXMoZSkscj17fTtyZXR1cm4gdC5mb3JFYWNoKCgoZSx0KT0+e3JbdF09ZX0pKSxyfSkoYy5ib2R5KTpKU09OLnBhcnNlKGMuYm9keSk7aWYoIXIucmVmcmVzaF90b2tlbiYmInJlZnJlc2hfdG9rZW4iPT09ci5ncmFudF90eXBlKXtjb25zdCBlPSgoZSx0KT0+b1tuKGUsdCldKSh1LGwpO2lmKCFlKXRocm93IG5ldyB0KHUsbCk7Yy5ib2R5PWE/cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKTpKU09OLnN0cmluZ2lmeShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKX1sZXQgaCxnOyJmdW5jdGlvbiI9PXR5cGVvZiBBYm9ydENvbnRyb2xsZXImJihoPW5ldyBBYm9ydENvbnRyb2xsZXIsYy5zaWduYWw9aC5zaWduYWwpO3RyeXtnPWF3YWl0IFByb21pc2UucmFjZShbKGQ9ZSxuZXcgUHJvbWlzZSgoZT0+c2V0VGltZW91dChlLGQpKSkpLGZldGNoKGksT2JqZWN0LmFzc2lnbih7fSxjKSldKX1jYXRjaChlKXtyZXR1cm4gdm9pZCBwLnBvc3RNZXNzYWdlKHtlcnJvcjplLm1lc3NhZ2V9KX1pZighZylyZXR1cm4gaCYmaC5hYm9ydCgpLHZvaWQgcC5wb3N0TWVzc2FnZSh7ZXJyb3I6IlRpbWVvdXQgd2hlbiBleGVjdXRpbmcgJ2ZldGNoJyJ9KTtmPWF3YWl0IGcuanNvbigpLGYucmVmcmVzaF90b2tlbj8oKChlLHQscik9PntvW24odCxyKV09ZX0pKGYucmVmcmVzaF90b2tlbix1LGwpLGRlbGV0ZSBmLnJlZnJlc2hfdG9rZW4pOigoZSx0KT0+e2RlbGV0ZSBvW24oZSx0KV19KSh1LGwpLHAucG9zdE1lc3NhZ2Uoe29rOmcub2ssanNvbjpmfSl9Y2F0Y2goZSl7cC5wb3N0TWVzc2FnZSh7b2s6ITEsanNvbjp7ZXJyb3I6ZS5lcnJvcixlcnJvcl9kZXNjcmlwdGlvbjplLm1lc3NhZ2V9fSl9dmFyIGR9KSl9KCk7Cgo="),
    (Jp = null),
    (em = !1),
    function (n) {
      return (hc = hc || yx(Zp, Jp, em)), new Worker(hc, n);
    });
const pc = {};
class vx {
  constructor(e, t) {
    (this.cache = e),
      (this.clientId = t),
      (this.manifestKey = this.createManifestKeyFrom(this.clientId));
  }
  async add(e) {
    var t;
    const r = new Set(
      ((t = await this.cache.get(this.manifestKey)) === null || t === void 0
        ? void 0
        : t.keys) || []
    );
    r.add(e), await this.cache.set(this.manifestKey, { keys: [...r] });
  }
  async remove(e) {
    const t = await this.cache.get(this.manifestKey);
    if (t) {
      const r = new Set(t.keys);
      return (
        r.delete(e),
        r.size > 0
          ? await this.cache.set(this.manifestKey, { keys: [...r] })
          : await this.cache.remove(this.manifestKey)
      );
    }
  }
  get() {
    return this.cache.get(this.manifestKey);
  }
  clear() {
    return this.cache.remove(this.manifestKey);
  }
  createManifestKeyFrom(e) {
    return `@@auth0spajs@@::${e}`;
  }
}
const xx = {
    memory: () => new Yg().enclosedCache,
    localstorage: () => new ux(),
  },
  tm = (n) => xx[n],
  nm = (n) => {
    const { openUrl: e, onRedirect: t } = n,
      r = cn(n, ["openUrl", "onRedirect"]);
    return Object.assign(Object.assign({}, r), {
      openUrl: e === !1 || e ? e : t,
    });
  },
  mc = new nx();
class _x {
  constructor(e) {
    let t, r;
    if (
      ((this.userCache = new Yg().enclosedCache),
      (this.defaultOptions = {
        authorizationParams: { scope: "openid profile email" },
        useRefreshTokensFallback: !1,
        useFormData: !0,
      }),
      (this._releaseLockOnPageHide = async () => {
        await mc.releaseLock("auth0.lock.getTokenSilently"),
          window.removeEventListener("pagehide", this._releaseLockOnPageHide);
      }),
      (this.options = Object.assign(
        Object.assign(Object.assign({}, this.defaultOptions), e),
        {
          authorizationParams: Object.assign(
            Object.assign({}, this.defaultOptions.authorizationParams),
            e.authorizationParams
          ),
        }
      )),
      typeof window < "u" &&
        (() => {
          if (!Ra())
            throw new Error(
              "For security reasons, `window.crypto` is required to run `auth0-spa-js`."
            );
          if (Ra().subtle === void 0)
            throw new Error(`
      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/main/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.
    `);
        })(),
      e.cache &&
        e.cacheLocation &&
        console.warn(
          "Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."
        ),
      e.cache)
    )
      r = e.cache;
    else {
      if (((t = e.cacheLocation || "memory"), !tm(t)))
        throw new Error(`Invalid cache location "${t}"`);
      r = tm(t)();
    }
    (this.httpTimeoutMs = e.httpTimeoutInSeconds
      ? 1e3 * e.httpTimeoutInSeconds
      : 1e4),
      (this.cookieStorage = e.legacySameSiteCookie === !1 ? pi : mx),
      (this.orgHintCookieName = `auth0.${this.options.clientId}.organization_hint`),
      (this.isAuthenticatedCookieName = ((u) => `auth0.${u}.is.authenticated`)(
        this.options.clientId
      )),
      (this.sessionCheckExpiryDays = e.sessionCheckExpiryDays || 1);
    const s = e.useCookiesForTransactions ? this.cookieStorage : gx;
    var a;
    (this.scope = pa(
      "openid",
      this.options.authorizationParams.scope,
      this.options.useRefreshTokens ? "offline_access" : ""
    )),
      (this.transactionManager = new dx(
        s,
        this.options.clientId,
        this.options.cookieDomain
      )),
      (this.nowProvider = this.options.nowProvider || Vg),
      (this.cacheManager = new cx(
        r,
        r.allKeys ? void 0 : new vx(r, this.options.clientId),
        this.nowProvider
      )),
      (this.domainUrl =
        ((a = this.options.domain),
        /^https?:\/\//.test(a) ? a : `https://${a}`)),
      (this.tokenIssuer = ((u, c) =>
        u ? (u.startsWith("https://") ? u : `https://${u}/`) : `${c}/`)(
        this.options.issuer,
        this.domainUrl
      )),
      typeof window < "u" &&
        window.Worker &&
        this.options.useRefreshTokens &&
        t === "memory" &&
        (this.options.workerUrl
          ? (this.worker = new Worker(this.options.workerUrl))
          : (this.worker = new wx()));
  }
  _url(e) {
    const t = encodeURIComponent(
      btoa(JSON.stringify(this.options.auth0Client || $g))
    );
    return `${this.domainUrl}${e}&auth0Client=${t}`;
  }
  _authorizeUrl(e) {
    return this._url(`/authorize?${Nc(e)}`);
  }
  async _verifyIdToken(e, t, r) {
    const s = await this.nowProvider();
    return hx({
      iss: this.tokenIssuer,
      aud: this.options.clientId,
      id_token: e,
      nonce: t,
      organization: r,
      leeway: this.options.leeway,
      max_age:
        ((a = this.options.authorizationParams.max_age),
        typeof a != "string" ? a : parseInt(a, 10) || void 0),
      now: s,
    });
    var a;
  }
  _processOrgHint(e) {
    e
      ? this.cookieStorage.save(this.orgHintCookieName, e, {
          daysUntilExpire: this.sessionCheckExpiryDays,
          cookieDomain: this.options.cookieDomain,
        })
      : this.cookieStorage.remove(this.orgHintCookieName, {
          cookieDomain: this.options.cookieDomain,
        });
  }
  async _prepareAuthorizeUrl(e, t, r) {
    const s = Gp(fc()),
      a = Gp(fc()),
      u = fc(),
      c = ((m) => {
        const y = new Uint8Array(m);
        return ((w) => {
          const v = { "+": "-", "/": "_", "=": "" };
          return w.replace(/[+/=]/g, (x) => v[x]);
        })(window.btoa(String.fromCharCode(...Array.from(y))));
      })(
        await (async (m) =>
          await Ra().subtle.digest(
            { name: "SHA-256" },
            new TextEncoder().encode(m)
          ))(u)
      ),
      f = ((m, y, w, v, x, b, k, S) =>
        Object.assign(
          Object.assign(
            Object.assign({ client_id: m.clientId }, m.authorizationParams),
            w
          ),
          {
            scope: pa(y, w.scope),
            response_type: "code",
            response_mode: S || "query",
            state: v,
            nonce: x,
            redirect_uri: k || m.authorizationParams.redirect_uri,
            code_challenge: b,
            code_challenge_method: "S256",
          }
        ))(
        this.options,
        this.scope,
        e,
        s,
        a,
        c,
        e.redirect_uri || this.options.authorizationParams.redirect_uri || r,
        t == null ? void 0 : t.response_mode
      ),
      h = this._authorizeUrl(f);
    return {
      nonce: a,
      code_verifier: u,
      scope: f.scope,
      audience: f.audience || "default",
      redirect_uri: f.redirect_uri,
      state: s,
      url: h,
    };
  }
  async loginWithPopup(e, t) {
    var r;
    if (
      ((e = e || {}),
      !(t = t || {}).popup &&
        ((t.popup = ((c) => {
          const f = window.screenX + (window.innerWidth - 400) / 2,
            h = window.screenY + (window.innerHeight - 600) / 2;
          return window.open(
            c,
            "auth0:authorize:popup",
            `left=${f},top=${h},width=400,height=600,resizable,scrollbars=yes,status=1`
          );
        })("")),
        !t.popup))
    )
      throw new Error(
        "Unable to open a popup for loginWithPopup - window.open returned `null`"
      );
    const s = await this._prepareAuthorizeUrl(
      e.authorizationParams || {},
      { response_mode: "web_message" },
      window.location.origin
    );
    t.popup.location.href = s.url;
    const a = await ((c) =>
      new Promise((f, h) => {
        let m;
        const y = setInterval(() => {
            c.popup &&
              c.popup.closed &&
              (clearInterval(y),
              clearTimeout(w),
              window.removeEventListener("message", m, !1),
              h(new fd(c.popup)));
          }, 1e3),
          w = setTimeout(() => {
            clearInterval(y),
              h(new dd(c.popup)),
              window.removeEventListener("message", m, !1);
          }, 1e3 * (c.timeoutInSeconds || 60));
        (m = function (v) {
          if (v.data && v.data.type === "authorization_response") {
            if (
              (clearTimeout(w),
              clearInterval(y),
              window.removeEventListener("message", m, !1),
              c.popup.close(),
              v.data.response.error)
            )
              return h(ht.fromPayload(v.data.response));
            f(v.data.response);
          }
        }),
          window.addEventListener("message", m);
      }))(
      Object.assign(Object.assign({}, t), {
        timeoutInSeconds:
          t.timeoutInSeconds || this.options.authorizeTimeoutInSeconds || 60,
      })
    );
    if (s.state !== a.state) throw new ht("state_mismatch", "Invalid state");
    const u =
      ((r = e.authorizationParams) === null || r === void 0
        ? void 0
        : r.organization) || this.options.authorizationParams.organization;
    await this._requestToken(
      {
        audience: s.audience,
        scope: s.scope,
        code_verifier: s.code_verifier,
        grant_type: "authorization_code",
        code: a.code,
        redirect_uri: s.redirect_uri,
      },
      { nonceIn: s.nonce, organization: u }
    );
  }
  async getUser() {
    var e;
    const t = await this._getIdTokenFromCache();
    return (e = t == null ? void 0 : t.decodedToken) === null || e === void 0
      ? void 0
      : e.user;
  }
  async getIdTokenClaims() {
    var e;
    const t = await this._getIdTokenFromCache();
    return (e = t == null ? void 0 : t.decodedToken) === null || e === void 0
      ? void 0
      : e.claims;
  }
  async loginWithRedirect(e = {}) {
    var t;
    const r = nm(e),
      { openUrl: s, fragment: a, appState: u } = r,
      c = cn(r, ["openUrl", "fragment", "appState"]),
      f =
        ((t = c.authorizationParams) === null || t === void 0
          ? void 0
          : t.organization) || this.options.authorizationParams.organization,
      h = await this._prepareAuthorizeUrl(c.authorizationParams || {}),
      { url: m } = h,
      y = cn(h, ["url"]);
    this.transactionManager.create(
      Object.assign(
        Object.assign(Object.assign({}, y), { appState: u }),
        f && { organization: f }
      )
    );
    const w = a ? `${m}#${a}` : m;
    s ? await s(w) : window.location.assign(w);
  }
  async handleRedirectCallback(e = window.location.href) {
    const t = e.split("?").slice(1);
    if (t.length === 0)
      throw new Error("There are no query params available for parsing.");
    const {
        state: r,
        code: s,
        error: a,
        error_description: u,
      } = ((y) => {
        y.indexOf("#") > -1 && (y = y.substring(0, y.indexOf("#")));
        const w = new URLSearchParams(y);
        return {
          state: w.get("state"),
          code: w.get("code") || void 0,
          error: w.get("error") || void 0,
          error_description: w.get("error_description") || void 0,
        };
      })(t.join("")),
      c = this.transactionManager.get();
    if (!c) throw new ht("missing_transaction", "Invalid state");
    if ((this.transactionManager.remove(), a))
      throw new cd(a, u || a, r, c.appState);
    if (!c.code_verifier || (c.state && c.state !== r))
      throw new ht("state_mismatch", "Invalid state");
    const f = c.organization,
      h = c.nonce,
      m = c.redirect_uri;
    return (
      await this._requestToken(
        Object.assign(
          {
            audience: c.audience,
            scope: c.scope,
            code_verifier: c.code_verifier,
            grant_type: "authorization_code",
            code: s,
          },
          m ? { redirect_uri: m } : {}
        ),
        { nonceIn: h, organization: f }
      ),
      { appState: c.appState }
    );
  }
  async checkSession(e) {
    if (!this.cookieStorage.get(this.isAuthenticatedCookieName)) {
      if (!this.cookieStorage.get("auth0.is.authenticated")) return;
      this.cookieStorage.save(this.isAuthenticatedCookieName, !0, {
        daysUntilExpire: this.sessionCheckExpiryDays,
        cookieDomain: this.options.cookieDomain,
      }),
        this.cookieStorage.remove("auth0.is.authenticated");
    }
    try {
      await this.getTokenSilently(e);
    } catch {}
  }
  async getTokenSilently(e = {}) {
    var t;
    const r = Object.assign(Object.assign({ cacheMode: "on" }, e), {
        authorizationParams: Object.assign(
          Object.assign(
            Object.assign({}, this.options.authorizationParams),
            e.authorizationParams
          ),
          {
            scope: pa(
              this.scope,
              (t = e.authorizationParams) === null || t === void 0
                ? void 0
                : t.scope
            ),
          }
        ),
      }),
      s = await ((a, u) => {
        let c = pc[u];
        return (
          c ||
            ((c = a().finally(() => {
              delete pc[u], (c = null);
            })),
            (pc[u] = c)),
          c
        );
      })(
        () => this._getTokenSilently(r),
        `${this.options.clientId}::${r.authorizationParams.audience}::${r.authorizationParams.scope}`
      );
    return e.detailedResponse ? s : s == null ? void 0 : s.access_token;
  }
  async _getTokenSilently(e) {
    const { cacheMode: t } = e,
      r = cn(e, ["cacheMode"]);
    if (t !== "off") {
      const s = await this._getEntryFromCache({
        scope: r.authorizationParams.scope,
        audience: r.authorizationParams.audience || "default",
        clientId: this.options.clientId,
      });
      if (s) return s;
    }
    if (t !== "cache-only") {
      if (
        !(await (async (s, a = 3) => {
          for (let u = 0; u < a; u++) if (await s()) return !0;
          return !1;
        })(() => mc.acquireLock("auth0.lock.getTokenSilently", 5e3), 10))
      )
        throw new zs();
      try {
        if (
          (window.addEventListener("pagehide", this._releaseLockOnPageHide),
          t !== "off")
        ) {
          const h = await this._getEntryFromCache({
            scope: r.authorizationParams.scope,
            audience: r.authorizationParams.audience || "default",
            clientId: this.options.clientId,
          });
          if (h) return h;
        }
        const s = this.options.useRefreshTokens
            ? await this._getTokenUsingRefreshToken(r)
            : await this._getTokenFromIFrame(r),
          {
            id_token: a,
            access_token: u,
            oauthTokenScope: c,
            expires_in: f,
          } = s;
        return Object.assign(
          Object.assign(
            { id_token: a, access_token: u },
            c ? { scope: c } : null
          ),
          { expires_in: f }
        );
      } finally {
        await mc.releaseLock("auth0.lock.getTokenSilently"),
          window.removeEventListener("pagehide", this._releaseLockOnPageHide);
      }
    }
  }
  async getTokenWithPopup(e = {}, t = {}) {
    var r;
    const s = Object.assign(Object.assign({}, e), {
      authorizationParams: Object.assign(
        Object.assign(
          Object.assign({}, this.options.authorizationParams),
          e.authorizationParams
        ),
        {
          scope: pa(
            this.scope,
            (r = e.authorizationParams) === null || r === void 0
              ? void 0
              : r.scope
          ),
        }
      ),
    });
    return (
      (t = Object.assign(Object.assign({}, rx), t)),
      await this.loginWithPopup(s, t),
      (
        await this.cacheManager.get(
          new hn({
            scope: s.authorizationParams.scope,
            audience: s.authorizationParams.audience || "default",
            clientId: this.options.clientId,
          })
        )
      ).access_token
    );
  }
  async isAuthenticated() {
    return !!(await this.getUser());
  }
  _buildLogoutUrl(e) {
    e.clientId !== null
      ? (e.clientId = e.clientId || this.options.clientId)
      : delete e.clientId;
    const t = e.logoutParams || {},
      { federated: r } = t,
      s = cn(t, ["federated"]),
      a = r ? "&federated" : "";
    return (
      this._url(
        `/v2/logout?${Nc(Object.assign({ clientId: e.clientId }, s))}`
      ) + a
    );
  }
  async logout(e = {}) {
    const t = nm(e),
      { openUrl: r } = t,
      s = cn(t, ["openUrl"]);
    e.clientId === null
      ? await this.cacheManager.clear()
      : await this.cacheManager.clear(e.clientId || this.options.clientId),
      this.cookieStorage.remove(this.orgHintCookieName, {
        cookieDomain: this.options.cookieDomain,
      }),
      this.cookieStorage.remove(this.isAuthenticatedCookieName, {
        cookieDomain: this.options.cookieDomain,
      }),
      this.userCache.remove("@@user@@");
    const a = this._buildLogoutUrl(s);
    r ? await r(a) : r !== !1 && window.location.assign(a);
  }
  async _getTokenFromIFrame(e) {
    const t = Object.assign(Object.assign({}, e.authorizationParams), {
        prompt: "none",
      }),
      r = this.cookieStorage.get(this.orgHintCookieName);
    r && !t.organization && (t.organization = r);
    const {
      url: s,
      state: a,
      nonce: u,
      code_verifier: c,
      redirect_uri: f,
      scope: h,
      audience: m,
    } = await this._prepareAuthorizeUrl(
      t,
      { response_mode: "web_message" },
      window.location.origin
    );
    try {
      if (window.crossOriginIsolated)
        throw new ht(
          "login_required",
          "The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible."
        );
      const y = e.timeoutInSeconds || this.options.authorizeTimeoutInSeconds,
        w = await ((x, b, k = 60) =>
          new Promise((S, C) => {
            const O = window.document.createElement("iframe");
            O.setAttribute("width", "0"),
              O.setAttribute("height", "0"),
              (O.style.display = "none");
            const R = () => {
              window.document.body.contains(O) &&
                (window.document.body.removeChild(O),
                window.removeEventListener("message", A, !1));
            };
            let A;
            const W = setTimeout(() => {
              C(new zs()), R();
            }, 1e3 * k);
            (A = function (H) {
              if (
                H.origin != b ||
                !H.data ||
                H.data.type !== "authorization_response"
              )
                return;
              const N = H.source;
              N && N.close(),
                H.data.response.error
                  ? C(ht.fromPayload(H.data.response))
                  : S(H.data.response),
                clearTimeout(W),
                window.removeEventListener("message", A, !1),
                setTimeout(R, 2e3);
            }),
              window.addEventListener("message", A, !1),
              window.document.body.appendChild(O),
              O.setAttribute("src", x);
          }))(s, this.domainUrl, y);
      if (a !== w.state) throw new ht("state_mismatch", "Invalid state");
      const v = await this._requestToken(
        Object.assign(Object.assign({}, e.authorizationParams), {
          code_verifier: c,
          code: w.code,
          grant_type: "authorization_code",
          redirect_uri: f,
          timeout: e.authorizationParams.timeout || this.httpTimeoutMs,
        }),
        { nonceIn: u, organization: t.organization }
      );
      return Object.assign(Object.assign({}, v), {
        scope: h,
        oauthTokenScope: v.scope,
        audience: m,
      });
    } catch (y) {
      throw (y.error === "login_required" && this.logout({ openUrl: !1 }), y);
    }
  }
  async _getTokenUsingRefreshToken(e) {
    const t = await this.cacheManager.get(
      new hn({
        scope: e.authorizationParams.scope,
        audience: e.authorizationParams.audience || "default",
        clientId: this.options.clientId,
      })
    );
    if (!((t && t.refresh_token) || this.worker)) {
      if (this.options.useRefreshTokensFallback)
        return await this._getTokenFromIFrame(e);
      throw new el(
        e.authorizationParams.audience || "default",
        e.authorizationParams.scope
      );
    }
    const r =
        e.authorizationParams.redirect_uri ||
        this.options.authorizationParams.redirect_uri ||
        window.location.origin,
      s =
        typeof e.timeoutInSeconds == "number" ? 1e3 * e.timeoutInSeconds : null;
    try {
      const a = await this._requestToken(
        Object.assign(
          Object.assign(Object.assign({}, e.authorizationParams), {
            grant_type: "refresh_token",
            refresh_token: t && t.refresh_token,
            redirect_uri: r,
          }),
          s && { timeout: s }
        )
      );
      return Object.assign(Object.assign({}, a), {
        scope: e.authorizationParams.scope,
        oauthTokenScope: a.scope,
        audience: e.authorizationParams.audience || "default",
      });
    } catch (a) {
      if (
        (a.message.indexOf("Missing Refresh Token") > -1 ||
          (a.message && a.message.indexOf("invalid refresh token") > -1)) &&
        this.options.useRefreshTokensFallback
      )
        return await this._getTokenFromIFrame(e);
      throw a;
    }
  }
  async _saveEntryInCache(e) {
    const { id_token: t, decodedToken: r } = e,
      s = cn(e, ["id_token", "decodedToken"]);
    this.userCache.set("@@user@@", { id_token: t, decodedToken: r }),
      await this.cacheManager.setIdToken(
        this.options.clientId,
        e.id_token,
        e.decodedToken
      ),
      await this.cacheManager.set(s);
  }
  async _getIdTokenFromCache() {
    const e = this.options.authorizationParams.audience || "default",
      t = await this.cacheManager.getIdToken(
        new hn({
          clientId: this.options.clientId,
          audience: e,
          scope: this.scope,
        })
      ),
      r = this.userCache.get("@@user@@");
    return t && t.id_token === (r == null ? void 0 : r.id_token)
      ? r
      : (this.userCache.set("@@user@@", t), t);
  }
  async _getEntryFromCache({ scope: e, audience: t, clientId: r }) {
    const s = await this.cacheManager.get(
      new hn({ scope: e, audience: t, clientId: r }),
      60
    );
    if (s && s.access_token) {
      const { access_token: a, oauthTokenScope: u, expires_in: c } = s,
        f = await this._getIdTokenFromCache();
      return (
        f &&
        Object.assign(
          Object.assign(
            { id_token: f.id_token, access_token: a },
            u ? { scope: u } : null
          ),
          { expires_in: c }
        )
      );
    }
  }
  async _requestToken(e, t) {
    const { nonceIn: r, organization: s } = t || {},
      a = await lx(
        Object.assign(
          {
            baseUrl: this.domainUrl,
            client_id: this.options.clientId,
            auth0Client: this.options.auth0Client,
            useFormData: this.options.useFormData,
            timeout: this.httpTimeoutMs,
          },
          e
        ),
        this.worker
      ),
      u = await this._verifyIdToken(a.id_token, r, s);
    return (
      await this._saveEntryInCache(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, a), {
              decodedToken: u,
              scope: e.scope,
              audience: e.audience || "default",
            }),
            a.scope ? { oauthTokenScope: a.scope } : null
          ),
          { client_id: this.options.clientId }
        )
      ),
      this.cookieStorage.save(this.isAuthenticatedCookieName, !0, {
        daysUntilExpire: this.sessionCheckExpiryDays,
        cookieDomain: this.options.cookieDomain,
      }),
      this._processOrgHint(s || u.claims.org_id),
      Object.assign(Object.assign({}, a), { decodedToken: u })
    );
  }
}
var qg = { isAuthenticated: !1, isLoading: !0 },
  Cn = function () {
    throw new Error("You forgot to wrap your component in <Auth0Provider>.");
  },
  kx = rt(rt({}, qg), {
    buildAuthorizeUrl: Cn,
    buildLogoutUrl: Cn,
    getAccessTokenSilently: Cn,
    getAccessTokenWithPopup: Cn,
    getIdTokenClaims: Cn,
    loginWithRedirect: Cn,
    loginWithPopup: Cn,
    logout: Cn,
    handleRedirectCallback: Cn,
  }),
  Gg = D.createContext(kx),
  rm = (function (n) {
    ex(e, n);
    function e(t, r) {
      var s = n.call(this, r || t) || this;
      return (
        (s.error = t),
        (s.error_description = r),
        Object.setPrototypeOf(s, e.prototype),
        s
      );
    }
    return e;
  })(Error),
  bx = /[?&]code=[^&]+/,
  Sx = /[?&]state=[^&]+/,
  Ex = /[?&]error=[^&]+/,
  Cx = function (n) {
    return (
      n === void 0 && (n = window.location.search),
      (bx.test(n) || Ex.test(n)) && Sx.test(n)
    );
  },
  Qg = function (n) {
    return function (e) {
      return e instanceof Error
        ? e
        : e !== null &&
          typeof e == "object" &&
          "error" in e &&
          typeof e.error == "string"
        ? "error_description" in e && typeof e.error_description == "string"
          ? new rm(e.error, e.error_description)
          : new rm(e.error)
        : new Error(n);
    };
  },
  im = Qg("Login failed"),
  gc = Qg("Get access token failed"),
  Zg = function (n) {
    var e;
    n != null &&
      n.redirectUri &&
      (console.warn(
        "Using `redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `redirectUri` will be no longer supported in a future version"
      ),
      (n.authorizationParams = n.authorizationParams || {}),
      (n.authorizationParams.redirect_uri = n.redirectUri),
      delete n.redirectUri),
      !(
        (e = n == null ? void 0 : n.authorizationParams) === null ||
        e === void 0
      ) &&
        e.redirectUri &&
        (console.warn(
          "Using `authorizationParams.redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `authorizationParams.redirectUri` will be removed in a future version"
        ),
        (n.authorizationParams.redirect_uri =
          n.authorizationParams.redirectUri),
        delete n.authorizationParams.redirectUri);
  },
  Px = function (n, e) {
    switch (e.type) {
      case "LOGIN_POPUP_STARTED":
        return rt(rt({}, n), { isLoading: !0 });
      case "LOGIN_POPUP_COMPLETE":
      case "INITIALISED":
        return rt(rt({}, n), {
          isAuthenticated: !!e.user,
          user: e.user,
          isLoading: !1,
          error: void 0,
        });
      case "HANDLE_REDIRECT_COMPLETE":
      case "GET_ACCESS_TOKEN_COMPLETE":
        return n.user === e.user
          ? n
          : rt(rt({}, n), { isAuthenticated: !!e.user, user: e.user });
      case "LOGOUT":
        return rt(rt({}, n), { isAuthenticated: !1, user: void 0 });
      case "ERROR":
        return rt(rt({}, n), { isLoading: !1, error: e.error });
    }
  },
  Tx = function (n) {
    return (
      Zg(n),
      rt(rt({}, n), { auth0Client: { name: "auth0-react", version: "2.3.0" } })
    );
  },
  Ox = function (n) {
    window.history.replaceState(
      {},
      document.title,
      (n == null ? void 0 : n.returnTo) || window.location.pathname
    );
  },
  Mx = function (n) {
    var e = n.children,
      t = n.skipRedirectCallback,
      r = n.onRedirectCallback,
      s = r === void 0 ? Ox : r,
      a = n.context,
      u = a === void 0 ? Gg : a,
      c = tx(n, [
        "children",
        "skipRedirectCallback",
        "onRedirectCallback",
        "context",
      ]),
      f = D.useState(function () {
        return new _x(Tx(c));
      })[0],
      h = D.useReducer(Px, qg),
      m = h[0],
      y = h[1],
      w = D.useRef(!1),
      v = D.useCallback(function (W) {
        return y({ type: "ERROR", error: W }), W;
      }, []);
    D.useEffect(
      function () {
        w.current ||
          ((w.current = !0),
          (function () {
            return ci(void 0, void 0, void 0, function () {
              var W, H, N;
              return di(this, function (B) {
                switch (B.label) {
                  case 0:
                    return (
                      B.trys.push([0, 7, , 8]),
                      (W = void 0),
                      Cx() && !t ? [4, f.handleRedirectCallback()] : [3, 3]
                    );
                  case 1:
                    return (H = B.sent().appState), [4, f.getUser()];
                  case 2:
                    return (W = B.sent()), s(H, W), [3, 6];
                  case 3:
                    return [4, f.checkSession()];
                  case 4:
                    return B.sent(), [4, f.getUser()];
                  case 5:
                    (W = B.sent()), (B.label = 6);
                  case 6:
                    return y({ type: "INITIALISED", user: W }), [3, 8];
                  case 7:
                    return (N = B.sent()), v(im(N)), [3, 8];
                  case 8:
                    return [2];
                }
              });
            });
          })());
      },
      [f, s, t, v]
    );
    var x = D.useCallback(
        function (W) {
          return Zg(W), f.loginWithRedirect(W);
        },
        [f]
      ),
      b = D.useCallback(
        function (W, H) {
          return ci(void 0, void 0, void 0, function () {
            var N, B;
            return di(this, function (G) {
              switch (G.label) {
                case 0:
                  y({ type: "LOGIN_POPUP_STARTED" }), (G.label = 1);
                case 1:
                  return G.trys.push([1, 3, , 4]), [4, f.loginWithPopup(W, H)];
                case 2:
                  return G.sent(), [3, 4];
                case 3:
                  return (N = G.sent()), v(im(N)), [2];
                case 4:
                  return [4, f.getUser()];
                case 5:
                  return (
                    (B = G.sent()),
                    y({ type: "LOGIN_POPUP_COMPLETE", user: B }),
                    [2]
                  );
              }
            });
          });
        },
        [f]
      ),
      k = D.useCallback(
        function (W) {
          return (
            W === void 0 && (W = {}),
            ci(void 0, void 0, void 0, function () {
              return di(this, function (H) {
                switch (H.label) {
                  case 0:
                    return [4, f.logout(W)];
                  case 1:
                    return (
                      H.sent(),
                      (W.openUrl || W.openUrl === !1) && y({ type: "LOGOUT" }),
                      [2]
                    );
                }
              });
            })
          );
        },
        [f]
      ),
      S = D.useCallback(
        function (W) {
          return ci(void 0, void 0, void 0, function () {
            var H, N, B, G;
            return di(this, function (ne) {
              switch (ne.label) {
                case 0:
                  return ne.trys.push([0, 2, 3, 5]), [4, f.getTokenSilently(W)];
                case 1:
                  return (H = ne.sent()), [3, 5];
                case 2:
                  throw ((N = ne.sent()), gc(N));
                case 3:
                  return (
                    (B = y),
                    (G = { type: "GET_ACCESS_TOKEN_COMPLETE" }),
                    [4, f.getUser()]
                  );
                case 4:
                  return B.apply(void 0, [((G.user = ne.sent()), G)]), [7];
                case 5:
                  return [2, H];
              }
            });
          });
        },
        [f]
      ),
      C = D.useCallback(
        function (W, H) {
          return ci(void 0, void 0, void 0, function () {
            var N, B, G, ne;
            return di(this, function (re) {
              switch (re.label) {
                case 0:
                  return (
                    re.trys.push([0, 2, 3, 5]), [4, f.getTokenWithPopup(W, H)]
                  );
                case 1:
                  return (N = re.sent()), [3, 5];
                case 2:
                  throw ((B = re.sent()), gc(B));
                case 3:
                  return (
                    (G = y),
                    (ne = { type: "GET_ACCESS_TOKEN_COMPLETE" }),
                    [4, f.getUser()]
                  );
                case 4:
                  return G.apply(void 0, [((ne.user = re.sent()), ne)]), [7];
                case 5:
                  return [2, N];
              }
            });
          });
        },
        [f]
      ),
      O = D.useCallback(
        function () {
          return f.getIdTokenClaims();
        },
        [f]
      ),
      R = D.useCallback(
        function (W) {
          return ci(void 0, void 0, void 0, function () {
            var H, N, B;
            return di(this, function (G) {
              switch (G.label) {
                case 0:
                  return (
                    G.trys.push([0, 2, 3, 5]), [4, f.handleRedirectCallback(W)]
                  );
                case 1:
                  return [2, G.sent()];
                case 2:
                  throw ((H = G.sent()), gc(H));
                case 3:
                  return (
                    (N = y),
                    (B = { type: "HANDLE_REDIRECT_COMPLETE" }),
                    [4, f.getUser()]
                  );
                case 4:
                  return N.apply(void 0, [((B.user = G.sent()), B)]), [7];
                case 5:
                  return [2];
              }
            });
          });
        },
        [f]
      ),
      A = D.useMemo(
        function () {
          return rt(rt({}, m), {
            getAccessTokenSilently: S,
            getAccessTokenWithPopup: C,
            getIdTokenClaims: O,
            loginWithRedirect: x,
            loginWithPopup: b,
            logout: k,
            handleRedirectCallback: R,
          });
        },
        [m, S, C, O, x, b, k, R]
      );
    return ad.createElement(u.Provider, { value: A }, e);
  },
  gi = function (n) {
    return n === void 0 && (n = Gg), D.useContext(n);
  };
function pd({ type: n }) {
  const { loginWithRedirect: e } = gi();
  return z.jsx("button", {
    className: n,
    onClick: () =>
      e({
        authorizationParams: {
          screen_hint: "signup",
          redirect_uri: window.location.origin + "/training",
        },
      }),
    children: "Sign Up",
  });
}
const Rx = () => {
  const [n, e] = D.useState(!0),
    [t, r] = D.useState(0),
    s = () => {
      window.scrollY > t ? e(!1) : e(!0), r(window.scrollY);
    };
  return (
    D.useEffect(
      () => (
        window.addEventListener("scroll", s),
        () => {
          window.removeEventListener("scroll", s);
        }
      ),
      [t]
    ),
    z.jsx("nav", {
      className: `hero-navbar-container active ${n && "hidden"}`,
      children: z.jsx(pd, { type: "hero-button" }),
    })
  );
};
var hs = {},
  sm;
function Dx() {
  if (sm) return hs;
  (sm = 1),
    Object.defineProperty(hs, "__esModule", { value: !0 }),
    (hs.parse = u),
    (hs.serialize = h);
  const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    e = /^[\u0021-\u003A\u003C-\u007E]*$/,
    t =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    r = /^[\u0020-\u003A\u003D-\u007E]*$/,
    s = Object.prototype.toString,
    a = (() => {
      const w = function () {};
      return (w.prototype = Object.create(null)), w;
    })();
  function u(w, v) {
    const x = new a(),
      b = w.length;
    if (b < 2) return x;
    const k = (v == null ? void 0 : v.decode) || m;
    let S = 0;
    do {
      const C = w.indexOf("=", S);
      if (C === -1) break;
      const O = w.indexOf(";", S),
        R = O === -1 ? b : O;
      if (C > R) {
        S = w.lastIndexOf(";", C - 1) + 1;
        continue;
      }
      const A = c(w, S, C),
        W = f(w, C, A),
        H = w.slice(A, W);
      if (x[H] === void 0) {
        let N = c(w, C + 1, R),
          B = f(w, R, N);
        const G = k(w.slice(N, B));
        x[H] = G;
      }
      S = R + 1;
    } while (S < b);
    return x;
  }
  function c(w, v, x) {
    do {
      const b = w.charCodeAt(v);
      if (b !== 32 && b !== 9) return v;
    } while (++v < x);
    return x;
  }
  function f(w, v, x) {
    for (; v > x; ) {
      const b = w.charCodeAt(--v);
      if (b !== 32 && b !== 9) return v + 1;
    }
    return x;
  }
  function h(w, v, x) {
    const b = (x == null ? void 0 : x.encode) || encodeURIComponent;
    if (!n.test(w)) throw new TypeError(`argument name is invalid: ${w}`);
    const k = b(v);
    if (!e.test(k)) throw new TypeError(`argument val is invalid: ${v}`);
    let S = w + "=" + k;
    if (!x) return S;
    if (x.maxAge !== void 0) {
      if (!Number.isInteger(x.maxAge))
        throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);
      S += "; Max-Age=" + x.maxAge;
    }
    if (x.domain) {
      if (!t.test(x.domain))
        throw new TypeError(`option domain is invalid: ${x.domain}`);
      S += "; Domain=" + x.domain;
    }
    if (x.path) {
      if (!r.test(x.path))
        throw new TypeError(`option path is invalid: ${x.path}`);
      S += "; Path=" + x.path;
    }
    if (x.expires) {
      if (!y(x.expires) || !Number.isFinite(x.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${x.expires}`);
      S += "; Expires=" + x.expires.toUTCString();
    }
    if (
      (x.httpOnly && (S += "; HttpOnly"),
      x.secure && (S += "; Secure"),
      x.partitioned && (S += "; Partitioned"),
      x.priority)
    )
      switch (
        typeof x.priority == "string" ? x.priority.toLowerCase() : void 0
      ) {
        case "low":
          S += "; Priority=Low";
          break;
        case "medium":
          S += "; Priority=Medium";
          break;
        case "high":
          S += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${x.priority}`);
      }
    if (x.sameSite)
      switch (
        typeof x.sameSite == "string" ? x.sameSite.toLowerCase() : x.sameSite
      ) {
        case !0:
        case "strict":
          S += "; SameSite=Strict";
          break;
        case "lax":
          S += "; SameSite=Lax";
          break;
        case "none":
          S += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${x.sameSite}`);
      }
    return S;
  }
  function m(w) {
    if (w.indexOf("%") === -1) return w;
    try {
      return decodeURIComponent(w);
    } catch {
      return w;
    }
  }
  function y(w) {
    return s.call(w) === "[object Date]";
  }
  return hs;
}
Dx();
/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var om = "popstate";
function Lx(n = {}) {
  function e(r, s) {
    let { pathname: a, search: u, hash: c } = r.location;
    return zc(
      "",
      { pathname: a, search: u, hash: c },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    );
  }
  function t(r, s) {
    return typeof s == "string" ? s : Fs(s);
  }
  return Nx(e, t, null, n);
}
function He(n, e) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(e);
}
function mn(n, e) {
  if (!n) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function Ix() {
  return Math.random().toString(36).substring(2, 10);
}
function am(n, e) {
  return { usr: n.state, key: n.key, idx: e };
}
function zc(n, e, t = null, r) {
  return {
    pathname: typeof n == "string" ? n : n.pathname,
    search: "",
    hash: "",
    ...(typeof e == "string" ? _i(e) : e),
    state: t,
    key: (e && e.key) || r || Ix(),
  };
}
function Fs({ pathname: n = "/", search: e = "", hash: t = "" }) {
  return (
    e && e !== "?" && (n += e.charAt(0) === "?" ? e : "?" + e),
    t && t !== "#" && (n += t.charAt(0) === "#" ? t : "#" + t),
    n
  );
}
function _i(n) {
  let e = {};
  if (n) {
    let t = n.indexOf("#");
    t >= 0 && ((e.hash = n.substring(t)), (n = n.substring(0, t)));
    let r = n.indexOf("?");
    r >= 0 && ((e.search = n.substring(r)), (n = n.substring(0, r))),
      n && (e.pathname = n);
  }
  return e;
}
function Nx(n, e, t, r = {}) {
  let { window: s = document.defaultView, v5Compat: a = !1 } = r,
    u = s.history,
    c = "POP",
    f = null,
    h = m();
  h == null && ((h = 0), u.replaceState({ ...u.state, idx: h }, ""));
  function m() {
    return (u.state || { idx: null }).idx;
  }
  function y() {
    c = "POP";
    let k = m(),
      S = k == null ? null : k - h;
    (h = k), f && f({ action: c, location: b.location, delta: S });
  }
  function w(k, S) {
    c = "PUSH";
    let C = zc(b.location, k, S);
    h = m() + 1;
    let O = am(C, h),
      R = b.createHref(C);
    try {
      u.pushState(O, "", R);
    } catch (A) {
      if (A instanceof DOMException && A.name === "DataCloneError") throw A;
      s.location.assign(R);
    }
    a && f && f({ action: c, location: b.location, delta: 1 });
  }
  function v(k, S) {
    c = "REPLACE";
    let C = zc(b.location, k, S);
    h = m();
    let O = am(C, h),
      R = b.createHref(C);
    u.replaceState(O, "", R),
      a && f && f({ action: c, location: b.location, delta: 0 });
  }
  function x(k) {
    let S = s.location.origin !== "null" ? s.location.origin : s.location.href,
      C = typeof k == "string" ? k : Fs(k);
    return (
      (C = C.replace(/ $/, "%20")),
      He(
        S,
        `No window.location.(origin|href) available to create URL for href: ${C}`
      ),
      new URL(C, S)
    );
  }
  let b = {
    get action() {
      return c;
    },
    get location() {
      return n(s, u);
    },
    listen(k) {
      if (f) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(om, y),
        (f = k),
        () => {
          s.removeEventListener(om, y), (f = null);
        }
      );
    },
    createHref(k) {
      return e(s, k);
    },
    createURL: x,
    encodeLocation(k) {
      let S = x(k);
      return { pathname: S.pathname, search: S.search, hash: S.hash };
    },
    push: w,
    replace: v,
    go(k) {
      return u.go(k);
    },
  };
  return b;
}
function Jg(n, e, t = "/") {
  return zx(n, e, t, !1);
}
function zx(n, e, t, r) {
  let s = typeof e == "string" ? _i(e) : e,
    a = ir(s.pathname || "/", t);
  if (a == null) return null;
  let u = ey(n);
  Fx(u);
  let c = null;
  for (let f = 0; c == null && f < u.length; ++f) {
    let h = Xx(a);
    c = Yx(u[f], h, r);
  }
  return c;
}
function ey(n, e = [], t = [], r = "") {
  let s = (a, u, c) => {
    let f = {
      relativePath: c === void 0 ? a.path || "" : c,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: u,
      route: a,
    };
    f.relativePath.startsWith("/") &&
      (He(
        f.relativePath.startsWith(r),
        `Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (f.relativePath = f.relativePath.slice(r.length)));
    let h = Rn([r, f.relativePath]),
      m = t.concat(f);
    a.children &&
      a.children.length > 0 &&
      (He(
        a.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${h}".`
      ),
      ey(a.children, e, m, h)),
      !(a.path == null && !a.index) &&
        e.push({ path: h, score: $x(h, a.index), routesMeta: m });
  };
  return (
    n.forEach((a, u) => {
      var c;
      if (a.path === "" || !((c = a.path) != null && c.includes("?"))) s(a, u);
      else for (let f of ty(a.path)) s(a, u, f);
    }),
    e
  );
}
function ty(n) {
  let e = n.split("/");
  if (e.length === 0) return [];
  let [t, ...r] = e,
    s = t.endsWith("?"),
    a = t.replace(/\?$/, "");
  if (r.length === 0) return s ? [a, ""] : [a];
  let u = ty(r.join("/")),
    c = [];
  return (
    c.push(...u.map((f) => (f === "" ? a : [a, f].join("/")))),
    s && c.push(...u),
    c.map((f) => (n.startsWith("/") && f === "" ? "/" : f))
  );
}
function Fx(n) {
  n.sort((e, t) =>
    e.score !== t.score
      ? t.score - e.score
      : Vx(
          e.routesMeta.map((r) => r.childrenIndex),
          t.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
var Ax = /^:[\w-]+$/,
  jx = 3,
  Wx = 2,
  Hx = 1,
  Bx = 10,
  Ux = -2,
  lm = (n) => n === "*";
function $x(n, e) {
  let t = n.split("/"),
    r = t.length;
  return (
    t.some(lm) && (r += Ux),
    e && (r += Wx),
    t
      .filter((s) => !lm(s))
      .reduce((s, a) => s + (Ax.test(a) ? jx : a === "" ? Hx : Bx), r)
  );
}
function Vx(n, e) {
  return n.length === e.length && n.slice(0, -1).every((r, s) => r === e[s])
    ? n[n.length - 1] - e[e.length - 1]
    : 0;
}
function Yx(n, e, t = !1) {
  let { routesMeta: r } = n,
    s = {},
    a = "/",
    u = [];
  for (let c = 0; c < r.length; ++c) {
    let f = r[c],
      h = c === r.length - 1,
      m = a === "/" ? e : e.slice(a.length) || "/",
      y = Ba(
        { path: f.relativePath, caseSensitive: f.caseSensitive, end: h },
        m
      ),
      w = f.route;
    if (
      (!y &&
        h &&
        t &&
        !r[r.length - 1].route.index &&
        (y = Ba(
          { path: f.relativePath, caseSensitive: f.caseSensitive, end: !1 },
          m
        )),
      !y)
    )
      return null;
    Object.assign(s, y.params),
      u.push({
        params: s,
        pathname: Rn([a, y.pathname]),
        pathnameBase: Zx(Rn([a, y.pathnameBase])),
        route: w,
      }),
      y.pathnameBase !== "/" && (a = Rn([a, y.pathnameBase]));
  }
  return u;
}
function Ba(n, e) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [t, r] = Kx(n.path, n.caseSensitive, n.end),
    s = e.match(t);
  if (!s) return null;
  let a = s[0],
    u = a.replace(/(.)\/+$/, "$1"),
    c = s.slice(1);
  return {
    params: r.reduce((h, { paramName: m, isOptional: y }, w) => {
      if (m === "*") {
        let x = c[w] || "";
        u = a.slice(0, a.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const v = c[w];
      return (
        y && !v ? (h[m] = void 0) : (h[m] = (v || "").replace(/%2F/g, "/")), h
      );
    }, {}),
    pathname: a,
    pathnameBase: u,
    pattern: n,
  };
}
function Kx(n, e = !1, t = !0) {
  mn(
    n === "*" || !n.endsWith("*") || n.endsWith("/*"),
    `Route path "${n}" will be treated as if it were "${n.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let r = [],
    s =
      "^" +
      n
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (u, c, f) => (
            r.push({ paramName: c, isOptional: f != null }),
            f ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    n.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (s += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : t
      ? (s += "\\/*$")
      : n !== "" && n !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, e ? void 0 : "i"), r]
  );
}
function Xx(n) {
  try {
    return n
      .split("/")
      .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
      .join("/");
  } catch (e) {
    return (
      mn(
        !1,
        `The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`
      ),
      n
    );
  }
}
function ir(n, e) {
  if (e === "/") return n;
  if (!n.toLowerCase().startsWith(e.toLowerCase())) return null;
  let t = e.endsWith("/") ? e.length - 1 : e.length,
    r = n.charAt(t);
  return r && r !== "/" ? null : n.slice(t) || "/";
}
function qx(n, e = "/") {
  let {
    pathname: t,
    search: r = "",
    hash: s = "",
  } = typeof n == "string" ? _i(n) : n;
  return {
    pathname: t ? (t.startsWith("/") ? t : Gx(t, e)) : e,
    search: Jx(r),
    hash: e_(s),
  };
}
function Gx(n, e) {
  let t = e.replace(/\/+$/, "").split("/");
  return (
    n.split("/").forEach((s) => {
      s === ".." ? t.length > 1 && t.pop() : s !== "." && t.push(s);
    }),
    t.length > 1 ? t.join("/") : "/"
  );
}
function yc(n, e, t, r) {
  return `Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(
    r
  )}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Qx(n) {
  return n.filter(
    (e, t) => t === 0 || (e.route.path && e.route.path.length > 0)
  );
}
function ny(n) {
  let e = Qx(n);
  return e.map((t, r) => (r === e.length - 1 ? t.pathname : t.pathnameBase));
}
function ry(n, e, t, r = !1) {
  let s;
  typeof n == "string"
    ? (s = _i(n))
    : ((s = { ...n }),
      He(
        !s.pathname || !s.pathname.includes("?"),
        yc("?", "pathname", "search", s)
      ),
      He(
        !s.pathname || !s.pathname.includes("#"),
        yc("#", "pathname", "hash", s)
      ),
      He(!s.search || !s.search.includes("#"), yc("#", "search", "hash", s)));
  let a = n === "" || s.pathname === "",
    u = a ? "/" : s.pathname,
    c;
  if (u == null) c = t;
  else {
    let y = e.length - 1;
    if (!r && u.startsWith("..")) {
      let w = u.split("/");
      for (; w[0] === ".."; ) w.shift(), (y -= 1);
      s.pathname = w.join("/");
    }
    c = y >= 0 ? e[y] : "/";
  }
  let f = qx(s, c),
    h = u && u !== "/" && u.endsWith("/"),
    m = (a || u === ".") && t.endsWith("/");
  return !f.pathname.endsWith("/") && (h || m) && (f.pathname += "/"), f;
}
var Rn = (n) => n.join("/").replace(/\/\/+/g, "/"),
  Zx = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Jx = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
  e_ = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n);
function t_(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  );
}
var iy = ["POST", "PUT", "PATCH", "DELETE"];
new Set(iy);
var n_ = ["GET", ...iy];
new Set(n_);
var ki = D.createContext(null);
ki.displayName = "DataRouter";
var tl = D.createContext(null);
tl.displayName = "DataRouterState";
var sy = D.createContext({ isTransitioning: !1 });
sy.displayName = "ViewTransition";
var r_ = D.createContext(new Map());
r_.displayName = "Fetchers";
var i_ = D.createContext(null);
i_.displayName = "Await";
var yn = D.createContext(null);
yn.displayName = "Navigation";
var Ys = D.createContext(null);
Ys.displayName = "Location";
var Ln = D.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Ln.displayName = "Route";
var md = D.createContext(null);
md.displayName = "RouteError";
function s_(n, { relative: e } = {}) {
  He(
    Ks(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: t, navigator: r } = D.useContext(yn),
    { hash: s, pathname: a, search: u } = Xs(n, { relative: e }),
    c = a;
  return (
    t !== "/" && (c = a === "/" ? t : Rn([t, a])),
    r.createHref({ pathname: c, search: u, hash: s })
  );
}
function Ks() {
  return D.useContext(Ys) != null;
}
function Nr() {
  return (
    He(
      Ks(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    D.useContext(Ys).location
  );
}
var oy =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ay(n) {
  D.useContext(yn).static || D.useLayoutEffect(n);
}
function o_() {
  let { isDataRoute: n } = D.useContext(Ln);
  return n ? v_() : a_();
}
function a_() {
  He(
    Ks(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let n = D.useContext(ki),
    { basename: e, navigator: t } = D.useContext(yn),
    { matches: r } = D.useContext(Ln),
    { pathname: s } = Nr(),
    a = JSON.stringify(ny(r)),
    u = D.useRef(!1);
  return (
    ay(() => {
      u.current = !0;
    }),
    D.useCallback(
      (f, h = {}) => {
        if ((mn(u.current, oy), !u.current)) return;
        if (typeof f == "number") {
          t.go(f);
          return;
        }
        let m = ry(f, JSON.parse(a), s, h.relative === "path");
        n == null &&
          e !== "/" &&
          (m.pathname = m.pathname === "/" ? e : Rn([e, m.pathname])),
          (h.replace ? t.replace : t.push)(m, h.state, h);
      },
      [e, t, a, s, n]
    )
  );
}
D.createContext(null);
function Xs(n, { relative: e } = {}) {
  let { matches: t } = D.useContext(Ln),
    { pathname: r } = Nr(),
    s = JSON.stringify(ny(t));
  return D.useMemo(() => ry(n, JSON.parse(s), r, e === "path"), [n, s, r, e]);
}
function l_(n, e) {
  return ly(n, e);
}
function ly(n, e, t, r) {
  var S;
  He(
    Ks(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: s } = D.useContext(yn),
    { matches: a } = D.useContext(Ln),
    u = a[a.length - 1],
    c = u ? u.params : {},
    f = u ? u.pathname : "/",
    h = u ? u.pathnameBase : "/",
    m = u && u.route;
  {
    let C = (m && m.path) || "";
    uy(
      f,
      !m || C.endsWith("*") || C.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${
        C === "/" ? "*" : `${C}/*`
      }">.`
    );
  }
  let y = Nr(),
    w;
  if (e) {
    let C = typeof e == "string" ? _i(e) : e;
    He(
      h === "/" || ((S = C.pathname) == null ? void 0 : S.startsWith(h)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${C.pathname}" was given in the \`location\` prop.`
    ),
      (w = C);
  } else w = y;
  let v = w.pathname || "/",
    x = v;
  if (h !== "/") {
    let C = h.replace(/^\//, "").split("/");
    x = "/" + v.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let b = Jg(n, { pathname: x });
  mn(
    m || b != null,
    `No routes matched location "${w.pathname}${w.search}${w.hash}" `
  ),
    mn(
      b == null ||
        b[b.length - 1].route.element !== void 0 ||
        b[b.length - 1].route.Component !== void 0 ||
        b[b.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let k = h_(
    b &&
      b.map((C) =>
        Object.assign({}, C, {
          params: Object.assign({}, c, C.params),
          pathname: Rn([
            h,
            s.encodeLocation
              ? s.encodeLocation(C.pathname).pathname
              : C.pathname,
          ]),
          pathnameBase:
            C.pathnameBase === "/"
              ? h
              : Rn([
                  h,
                  s.encodeLocation
                    ? s.encodeLocation(C.pathnameBase).pathname
                    : C.pathnameBase,
                ]),
        })
      ),
    a,
    t,
    r
  );
  return e && k
    ? D.createElement(
        Ys.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...w,
            },
            navigationType: "POP",
          },
        },
        k
      )
    : k;
}
function u_() {
  let n = w_(),
    e = t_(n)
      ? `${n.status} ${n.statusText}`
      : n instanceof Error
      ? n.message
      : JSON.stringify(n),
    t = n instanceof Error ? n.stack : null,
    r = "rgba(200,200,200, 0.5)",
    s = { padding: "0.5rem", backgroundColor: r },
    a = { padding: "2px 4px", backgroundColor: r },
    u = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", n),
    (u = D.createElement(
      D.Fragment,
      null,
      D.createElement("p", null, "💿 Hey developer 👋"),
      D.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        D.createElement("code", { style: a }, "ErrorBoundary"),
        " or",
        " ",
        D.createElement("code", { style: a }, "errorElement"),
        " prop on your route."
      )
    )),
    D.createElement(
      D.Fragment,
      null,
      D.createElement("h2", null, "Unexpected Application Error!"),
      D.createElement("h3", { style: { fontStyle: "italic" } }, e),
      t ? D.createElement("pre", { style: s }, t) : null,
      u
    )
  );
}
var c_ = D.createElement(u_, null),
  d_ = class extends D.Component {
    constructor(n) {
      super(n),
        (this.state = {
          location: n.location,
          revalidation: n.revalidation,
          error: n.error,
        });
    }
    static getDerivedStateFromError(n) {
      return { error: n };
    }
    static getDerivedStateFromProps(n, e) {
      return e.location !== n.location ||
        (e.revalidation !== "idle" && n.revalidation === "idle")
        ? { error: n.error, location: n.location, revalidation: n.revalidation }
        : {
            error: n.error !== void 0 ? n.error : e.error,
            location: e.location,
            revalidation: n.revalidation || e.revalidation,
          };
    }
    componentDidCatch(n, e) {
      console.error(
        "React Router caught the following error during render",
        n,
        e
      );
    }
    render() {
      return this.state.error !== void 0
        ? D.createElement(
            Ln.Provider,
            { value: this.props.routeContext },
            D.createElement(md.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function f_({ routeContext: n, match: e, children: t }) {
  let r = D.useContext(ki);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (e.route.errorElement || e.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = e.route.id),
    D.createElement(Ln.Provider, { value: n }, t)
  );
}
function h_(n, e = [], t = null, r = null) {
  if (n == null) {
    if (!t) return null;
    if (t.errors) n = t.matches;
    else if (e.length === 0 && !t.initialized && t.matches.length > 0)
      n = t.matches;
    else return null;
  }
  let s = n,
    a = t == null ? void 0 : t.errors;
  if (a != null) {
    let f = s.findIndex(
      (h) => h.route.id && (a == null ? void 0 : a[h.route.id]) !== void 0
    );
    He(
      f >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        a
      ).join(",")}`
    ),
      (s = s.slice(0, Math.min(s.length, f + 1)));
  }
  let u = !1,
    c = -1;
  if (t)
    for (let f = 0; f < s.length; f++) {
      let h = s[f];
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (c = f),
        h.route.id)
      ) {
        let { loaderData: m, errors: y } = t,
          w =
            h.route.loader &&
            !m.hasOwnProperty(h.route.id) &&
            (!y || y[h.route.id] === void 0);
        if (h.route.lazy || w) {
          (u = !0), c >= 0 ? (s = s.slice(0, c + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((f, h, m) => {
    let y,
      w = !1,
      v = null,
      x = null;
    t &&
      ((y = a && h.route.id ? a[h.route.id] : void 0),
      (v = h.route.errorElement || c_),
      u &&
        (c < 0 && m === 0
          ? (uy(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (w = !0),
            (x = null))
          : c === m &&
            ((w = !0), (x = h.route.hydrateFallbackElement || null))));
    let b = e.concat(s.slice(0, m + 1)),
      k = () => {
        let S;
        return (
          y
            ? (S = v)
            : w
            ? (S = x)
            : h.route.Component
            ? (S = D.createElement(h.route.Component, null))
            : h.route.element
            ? (S = h.route.element)
            : (S = f),
          D.createElement(f_, {
            match: h,
            routeContext: { outlet: f, matches: b, isDataRoute: t != null },
            children: S,
          })
        );
      };
    return t && (h.route.ErrorBoundary || h.route.errorElement || m === 0)
      ? D.createElement(d_, {
          location: t.location,
          revalidation: t.revalidation,
          component: v,
          error: y,
          children: k(),
          routeContext: { outlet: null, matches: b, isDataRoute: !0 },
        })
      : k();
  }, null);
}
function gd(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function p_(n) {
  let e = D.useContext(ki);
  return He(e, gd(n)), e;
}
function m_(n) {
  let e = D.useContext(tl);
  return He(e, gd(n)), e;
}
function g_(n) {
  let e = D.useContext(Ln);
  return He(e, gd(n)), e;
}
function yd(n) {
  let e = g_(n),
    t = e.matches[e.matches.length - 1];
  return (
    He(
      t.route.id,
      `${n} can only be used on routes that contain a unique "id"`
    ),
    t.route.id
  );
}
function y_() {
  return yd("useRouteId");
}
function w_() {
  var r;
  let n = D.useContext(md),
    e = m_("useRouteError"),
    t = yd("useRouteError");
  return n !== void 0 ? n : (r = e.errors) == null ? void 0 : r[t];
}
function v_() {
  let { router: n } = p_("useNavigate"),
    e = yd("useNavigate"),
    t = D.useRef(!1);
  return (
    ay(() => {
      t.current = !0;
    }),
    D.useCallback(
      async (s, a = {}) => {
        mn(t.current, oy),
          t.current &&
            (typeof s == "number"
              ? n.navigate(s)
              : await n.navigate(s, { fromRouteId: e, ...a }));
      },
      [n, e]
    )
  );
}
var um = {};
function uy(n, e, t) {
  !e && !um[n] && ((um[n] = !0), mn(!1, t));
}
D.memo(x_);
function x_({ routes: n, future: e, state: t }) {
  return ly(n, void 0, t, e);
}
function Da(n) {
  He(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function __({
  basename: n = "/",
  children: e = null,
  location: t,
  navigationType: r = "POP",
  navigator: s,
  static: a = !1,
}) {
  He(
    !Ks(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let u = n.replace(/^\/*/, "/"),
    c = D.useMemo(
      () => ({ basename: u, navigator: s, static: a, future: {} }),
      [u, s, a]
    );
  typeof t == "string" && (t = _i(t));
  let {
      pathname: f = "/",
      search: h = "",
      hash: m = "",
      state: y = null,
      key: w = "default",
    } = t,
    v = D.useMemo(() => {
      let x = ir(f, u);
      return x == null
        ? null
        : {
            location: { pathname: x, search: h, hash: m, state: y, key: w },
            navigationType: r,
          };
    }, [u, f, h, m, y, w, r]);
  return (
    mn(
      v != null,
      `<Router basename="${u}"> is not able to match the URL "${f}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    v == null
      ? null
      : D.createElement(
          yn.Provider,
          { value: c },
          D.createElement(Ys.Provider, { children: e, value: v })
        )
  );
}
function k_({ children: n, location: e }) {
  return l_(Fc(n), e);
}
function Fc(n, e = []) {
  let t = [];
  return (
    D.Children.forEach(n, (r, s) => {
      if (!D.isValidElement(r)) return;
      let a = [...e, s];
      if (r.type === D.Fragment) {
        t.push.apply(t, Fc(r.props.children, a));
        return;
      }
      He(
        r.type === Da,
        `[${
          typeof r.type == "string" ? r.type : r.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        He(
          !r.props.index || !r.props.children,
          "An index route cannot have child routes."
        );
      let u = {
        id: r.props.id || a.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 ||
          r.props.ErrorBoundary != null ||
          r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (u.children = Fc(r.props.children, a)), t.push(u);
    }),
    t
  );
}
var La = "get",
  Ia = "application/x-www-form-urlencoded";
function nl(n) {
  return n != null && typeof n.tagName == "string";
}
function b_(n) {
  return nl(n) && n.tagName.toLowerCase() === "button";
}
function S_(n) {
  return nl(n) && n.tagName.toLowerCase() === "form";
}
function E_(n) {
  return nl(n) && n.tagName.toLowerCase() === "input";
}
function C_(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function P_(n, e) {
  return n.button === 0 && (!e || e === "_self") && !C_(n);
}
var ma = null;
function T_() {
  if (ma === null)
    try {
      new FormData(document.createElement("form"), 0), (ma = !1);
    } catch {
      ma = !0;
    }
  return ma;
}
var O_ = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function wc(n) {
  return n != null && !O_.has(n)
    ? (mn(
        !1,
        `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ia}"`
      ),
      null)
    : n;
}
function M_(n, e) {
  let t, r, s, a, u;
  if (S_(n)) {
    let c = n.getAttribute("action");
    (r = c ? ir(c, e) : null),
      (t = n.getAttribute("method") || La),
      (s = wc(n.getAttribute("enctype")) || Ia),
      (a = new FormData(n));
  } else if (b_(n) || (E_(n) && (n.type === "submit" || n.type === "image"))) {
    let c = n.form;
    if (c == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let f = n.getAttribute("formaction") || c.getAttribute("action");
    if (
      ((r = f ? ir(f, e) : null),
      (t = n.getAttribute("formmethod") || c.getAttribute("method") || La),
      (s =
        wc(n.getAttribute("formenctype")) ||
        wc(c.getAttribute("enctype")) ||
        Ia),
      (a = new FormData(c, n)),
      !T_())
    ) {
      let { name: h, type: m, value: y } = n;
      if (m === "image") {
        let w = h ? `${h}.` : "";
        a.append(`${w}x`, "0"), a.append(`${w}y`, "0");
      } else h && a.append(h, y);
    }
  } else {
    if (nl(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (t = La), (r = null), (s = Ia), (u = n);
  }
  return (
    a && s === "text/plain" && ((u = a), (a = void 0)),
    { action: r, method: t.toLowerCase(), encType: s, formData: a, body: u }
  );
}
function wd(n, e) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(e);
}
async function R_(n, e) {
  if (n.id in e) return e[n.id];
  try {
    let t = await import(n.module);
    return (e[n.id] = t), t;
  } catch (t) {
    return (
      console.error(
        `Error loading route module \`${n.module}\`, reloading page...`
      ),
      console.error(t),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function D_(n) {
  return n == null
    ? !1
    : n.href == null
    ? n.rel === "preload" &&
      typeof n.imageSrcSet == "string" &&
      typeof n.imageSizes == "string"
    : typeof n.rel == "string" && typeof n.href == "string";
}
async function L_(n, e, t) {
  let r = await Promise.all(
    n.map(async (s) => {
      let a = e.routes[s.route.id];
      if (a) {
        let u = await R_(a, t);
        return u.links ? u.links() : [];
      }
      return [];
    })
  );
  return F_(
    r
      .flat(1)
      .filter(D_)
      .filter((s) => s.rel === "stylesheet" || s.rel === "preload")
      .map((s) =>
        s.rel === "stylesheet"
          ? { ...s, rel: "prefetch", as: "style" }
          : { ...s, rel: "prefetch" }
      )
  );
}
function cm(n, e, t, r, s, a) {
  let u = (f, h) => (t[h] ? f.route.id !== t[h].route.id : !0),
    c = (f, h) => {
      var m;
      return (
        t[h].pathname !== f.pathname ||
        (((m = t[h].route.path) == null ? void 0 : m.endsWith("*")) &&
          t[h].params["*"] !== f.params["*"])
      );
    };
  return a === "assets"
    ? e.filter((f, h) => u(f, h) || c(f, h))
    : a === "data"
    ? e.filter((f, h) => {
        var y;
        let m = r.routes[f.route.id];
        if (!m || !m.hasLoader) return !1;
        if (u(f, h) || c(f, h)) return !0;
        if (f.route.shouldRevalidate) {
          let w = f.route.shouldRevalidate({
            currentUrl: new URL(s.pathname + s.search + s.hash, window.origin),
            currentParams: ((y = t[0]) == null ? void 0 : y.params) || {},
            nextUrl: new URL(n, window.origin),
            nextParams: f.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof w == "boolean") return w;
        }
        return !0;
      })
    : [];
}
function I_(n, e) {
  return N_(
    n
      .map((t) => {
        let r = e.routes[t.route.id];
        if (!r) return [];
        let s = [r.module];
        return r.imports && (s = s.concat(r.imports)), s;
      })
      .flat(1)
  );
}
function N_(n) {
  return [...new Set(n)];
}
function z_(n) {
  let e = {},
    t = Object.keys(n).sort();
  for (let r of t) e[r] = n[r];
  return e;
}
function F_(n, e) {
  let t = new Set();
  return (
    new Set(e),
    n.reduce((r, s) => {
      let a = JSON.stringify(z_(s));
      return t.has(a) || (t.add(a), r.push({ key: a, link: s })), r;
    }, [])
  );
}
function A_(n) {
  let e =
    typeof n == "string"
      ? new URL(
          n,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : n;
  return (
    e.pathname === "/"
      ? (e.pathname = "_root.data")
      : (e.pathname = `${e.pathname.replace(/\/$/, "")}.data`),
    e
  );
}
function j_() {
  let n = D.useContext(ki);
  return (
    wd(
      n,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    n
  );
}
function W_() {
  let n = D.useContext(tl);
  return (
    wd(
      n,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    n
  );
}
var vd = D.createContext(void 0);
vd.displayName = "FrameworkContext";
function cy() {
  let n = D.useContext(vd);
  return (
    wd(n, "You must render this element inside a <HydratedRouter> element"), n
  );
}
function H_(n, e) {
  let t = D.useContext(vd),
    [r, s] = D.useState(!1),
    [a, u] = D.useState(!1),
    {
      onFocus: c,
      onBlur: f,
      onMouseEnter: h,
      onMouseLeave: m,
      onTouchStart: y,
    } = e,
    w = D.useRef(null);
  D.useEffect(() => {
    if ((n === "render" && u(!0), n === "viewport")) {
      let b = (S) => {
          S.forEach((C) => {
            u(C.isIntersecting);
          });
        },
        k = new IntersectionObserver(b, { threshold: 0.5 });
      return (
        w.current && k.observe(w.current),
        () => {
          k.disconnect();
        }
      );
    }
  }, [n]),
    D.useEffect(() => {
      if (r) {
        let b = setTimeout(() => {
          u(!0);
        }, 100);
        return () => {
          clearTimeout(b);
        };
      }
    }, [r]);
  let v = () => {
      s(!0);
    },
    x = () => {
      s(!1), u(!1);
    };
  return t
    ? n !== "intent"
      ? [a, w, {}]
      : [
          a,
          w,
          {
            onFocus: ps(c, v),
            onBlur: ps(f, x),
            onMouseEnter: ps(h, v),
            onMouseLeave: ps(m, x),
            onTouchStart: ps(y, v),
          },
        ]
    : [!1, w, {}];
}
function ps(n, e) {
  return (t) => {
    n && n(t), t.defaultPrevented || e(t);
  };
}
function B_({ page: n, ...e }) {
  let { router: t } = j_(),
    r = D.useMemo(() => Jg(t.routes, n, t.basename), [t.routes, n, t.basename]);
  return r ? D.createElement($_, { page: n, matches: r, ...e }) : null;
}
function U_(n) {
  let { manifest: e, routeModules: t } = cy(),
    [r, s] = D.useState([]);
  return (
    D.useEffect(() => {
      let a = !1;
      return (
        L_(n, e, t).then((u) => {
          a || s(u);
        }),
        () => {
          a = !0;
        }
      );
    }, [n, e, t]),
    r
  );
}
function $_({ page: n, matches: e, ...t }) {
  let r = Nr(),
    { manifest: s, routeModules: a } = cy(),
    { loaderData: u, matches: c } = W_(),
    f = D.useMemo(() => cm(n, e, c, s, r, "data"), [n, e, c, s, r]),
    h = D.useMemo(() => cm(n, e, c, s, r, "assets"), [n, e, c, s, r]),
    m = D.useMemo(() => {
      if (n === r.pathname + r.search + r.hash) return [];
      let v = new Set(),
        x = !1;
      if (
        (e.forEach((k) => {
          var C;
          let S = s.routes[k.route.id];
          !S ||
            !S.hasLoader ||
            ((!f.some((O) => O.route.id === k.route.id) &&
              k.route.id in u &&
              (C = a[k.route.id]) != null &&
              C.shouldRevalidate) ||
            S.hasClientLoader
              ? (x = !0)
              : v.add(k.route.id));
        }),
        v.size === 0)
      )
        return [];
      let b = A_(n);
      return (
        x &&
          v.size > 0 &&
          b.searchParams.set(
            "_routes",
            e
              .filter((k) => v.has(k.route.id))
              .map((k) => k.route.id)
              .join(",")
          ),
        [b.pathname + b.search]
      );
    }, [u, r, s, f, e, n, a]),
    y = D.useMemo(() => I_(h, s), [h, s]),
    w = U_(h);
  return D.createElement(
    D.Fragment,
    null,
    m.map((v) =>
      D.createElement("link", {
        key: v,
        rel: "prefetch",
        as: "fetch",
        href: v,
        ...t,
      })
    ),
    y.map((v) =>
      D.createElement("link", { key: v, rel: "modulepreload", href: v, ...t })
    ),
    w.map(({ key: v, link: x }) => D.createElement("link", { key: v, ...x }))
  );
}
function V_(...n) {
  return (e) => {
    n.forEach((t) => {
      typeof t == "function" ? t(e) : t != null && (t.current = e);
    });
  };
}
var dy =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  dy && (window.__reactRouterVersion = "7.1.1");
} catch {}
function Y_({ basename: n, children: e, window: t }) {
  let r = D.useRef();
  r.current == null && (r.current = Lx({ window: t, v5Compat: !0 }));
  let s = r.current,
    [a, u] = D.useState({ action: s.action, location: s.location }),
    c = D.useCallback(
      (f) => {
        D.startTransition(() => u(f));
      },
      [u]
    );
  return (
    D.useLayoutEffect(() => s.listen(c), [s, c]),
    D.createElement(__, {
      basename: n,
      children: e,
      location: a.location,
      navigationType: a.action,
      navigator: s,
    })
  );
}
var fy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  rl = D.forwardRef(function (
    {
      onClick: e,
      discover: t = "render",
      prefetch: r = "none",
      relative: s,
      reloadDocument: a,
      replace: u,
      state: c,
      target: f,
      to: h,
      preventScrollReset: m,
      viewTransition: y,
      ...w
    },
    v
  ) {
    let { basename: x } = D.useContext(yn),
      b = typeof h == "string" && fy.test(h),
      k,
      S = !1;
    if (typeof h == "string" && b && ((k = h), dy))
      try {
        let B = new URL(window.location.href),
          G = h.startsWith("//") ? new URL(B.protocol + h) : new URL(h),
          ne = ir(G.pathname, x);
        G.origin === B.origin && ne != null
          ? (h = ne + G.search + G.hash)
          : (S = !0);
      } catch {
        mn(
          !1,
          `<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let C = s_(h, { relative: s }),
      [O, R, A] = H_(r, w),
      W = G_(h, {
        replace: u,
        state: c,
        target: f,
        preventScrollReset: m,
        relative: s,
        viewTransition: y,
      });
    function H(B) {
      e && e(B), B.defaultPrevented || W(B);
    }
    let N = D.createElement("a", {
      ...w,
      ...A,
      href: k || C,
      onClick: S || a ? e : H,
      ref: V_(v, R),
      target: f,
      "data-discover": !b && t === "render" ? "true" : void 0,
    });
    return O && !b
      ? D.createElement(D.Fragment, null, N, D.createElement(B_, { page: C }))
      : N;
  });
rl.displayName = "Link";
var K_ = D.forwardRef(function (
  {
    "aria-current": e = "page",
    caseSensitive: t = !1,
    className: r = "",
    end: s = !1,
    style: a,
    to: u,
    viewTransition: c,
    children: f,
    ...h
  },
  m
) {
  let y = Xs(u, { relative: h.relative }),
    w = Nr(),
    v = D.useContext(tl),
    { navigator: x, basename: b } = D.useContext(yn),
    k = v != null && t1(y) && c === !0,
    S = x.encodeLocation ? x.encodeLocation(y).pathname : y.pathname,
    C = w.pathname,
    O =
      v && v.navigation && v.navigation.location
        ? v.navigation.location.pathname
        : null;
  t ||
    ((C = C.toLowerCase()),
    (O = O ? O.toLowerCase() : null),
    (S = S.toLowerCase())),
    O && b && (O = ir(O, b) || O);
  const R = S !== "/" && S.endsWith("/") ? S.length - 1 : S.length;
  let A = C === S || (!s && C.startsWith(S) && C.charAt(R) === "/"),
    W =
      O != null &&
      (O === S || (!s && O.startsWith(S) && O.charAt(S.length) === "/")),
    H = { isActive: A, isPending: W, isTransitioning: k },
    N = A ? e : void 0,
    B;
  typeof r == "function"
    ? (B = r(H))
    : (B = [
        r,
        A ? "active" : null,
        W ? "pending" : null,
        k ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let G = typeof a == "function" ? a(H) : a;
  return D.createElement(
    rl,
    {
      ...h,
      "aria-current": N,
      className: B,
      ref: m,
      style: G,
      to: u,
      viewTransition: c,
    },
    typeof f == "function" ? f(H) : f
  );
});
K_.displayName = "NavLink";
var X_ = D.forwardRef(
  (
    {
      discover: n = "render",
      fetcherKey: e,
      navigate: t,
      reloadDocument: r,
      replace: s,
      state: a,
      method: u = La,
      action: c,
      onSubmit: f,
      relative: h,
      preventScrollReset: m,
      viewTransition: y,
      ...w
    },
    v
  ) => {
    let x = J_(),
      b = e1(c, { relative: h }),
      k = u.toLowerCase() === "get" ? "get" : "post",
      S = typeof c == "string" && fy.test(c),
      C = (O) => {
        if ((f && f(O), O.defaultPrevented)) return;
        O.preventDefault();
        let R = O.nativeEvent.submitter,
          A = (R == null ? void 0 : R.getAttribute("formmethod")) || u;
        x(R || O.currentTarget, {
          fetcherKey: e,
          method: A,
          navigate: t,
          replace: s,
          state: a,
          relative: h,
          preventScrollReset: m,
          viewTransition: y,
        });
      };
    return D.createElement("form", {
      ref: v,
      method: k,
      action: b,
      onSubmit: r ? f : C,
      ...w,
      "data-discover": !S && n === "render" ? "true" : void 0,
    });
  }
);
X_.displayName = "Form";
function q_(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function hy(n) {
  let e = D.useContext(ki);
  return He(e, q_(n)), e;
}
function G_(
  n,
  {
    target: e,
    replace: t,
    state: r,
    preventScrollReset: s,
    relative: a,
    viewTransition: u,
  } = {}
) {
  let c = o_(),
    f = Nr(),
    h = Xs(n, { relative: a });
  return D.useCallback(
    (m) => {
      if (P_(m, e)) {
        m.preventDefault();
        let y = t !== void 0 ? t : Fs(f) === Fs(h);
        c(n, {
          replace: y,
          state: r,
          preventScrollReset: s,
          relative: a,
          viewTransition: u,
        });
      }
    },
    [f, c, h, t, r, e, n, s, a, u]
  );
}
var Q_ = 0,
  Z_ = () => `__${String(++Q_)}__`;
function J_() {
  let { router: n } = hy("useSubmit"),
    { basename: e } = D.useContext(yn),
    t = y_();
  return D.useCallback(
    async (r, s = {}) => {
      let { action: a, method: u, encType: c, formData: f, body: h } = M_(r, e);
      if (s.navigate === !1) {
        let m = s.fetcherKey || Z_();
        await n.fetch(m, t, s.action || a, {
          preventScrollReset: s.preventScrollReset,
          formData: f,
          body: h,
          formMethod: s.method || u,
          formEncType: s.encType || c,
          flushSync: s.flushSync,
        });
      } else
        await n.navigate(s.action || a, {
          preventScrollReset: s.preventScrollReset,
          formData: f,
          body: h,
          formMethod: s.method || u,
          formEncType: s.encType || c,
          replace: s.replace,
          state: s.state,
          fromRouteId: t,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition,
        });
    },
    [n, e, t]
  );
}
function e1(n, { relative: e } = {}) {
  let { basename: t } = D.useContext(yn),
    r = D.useContext(Ln);
  He(r, "useFormAction must be used inside a RouteContext");
  let [s] = r.matches.slice(-1),
    a = { ...Xs(n || ".", { relative: e }) },
    u = Nr();
  if (n == null) {
    a.search = u.search;
    let c = new URLSearchParams(a.search),
      f = c.getAll("index");
    if (f.some((m) => m === "")) {
      c.delete("index"),
        f.filter((y) => y).forEach((y) => c.append("index", y));
      let m = c.toString();
      a.search = m ? `?${m}` : "";
    }
  }
  return (
    (!n || n === ".") &&
      s.route.index &&
      (a.search = a.search ? a.search.replace(/^\?/, "?index&") : "?index"),
    t !== "/" && (a.pathname = a.pathname === "/" ? t : Rn([t, a.pathname])),
    Fs(a)
  );
}
function t1(n, e = {}) {
  let t = D.useContext(sy);
  He(
    t != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = hy("useViewTransitionState"),
    s = Xs(n, { relative: e.relative });
  if (!t.isTransitioning) return !1;
  let a = ir(t.currentLocation.pathname, r) || t.currentLocation.pathname,
    u = ir(t.nextLocation.pathname, r) || t.nextLocation.pathname;
  return Ba(s.pathname, u) != null || Ba(s.pathname, a) != null;
}
new TextEncoder();
function n1() {
  const [n, e] = D.useState(!1),
    [t, r] = D.useState(0),
    s = () => {
      window.scrollY > t ? e(!0) : e(!1), r(window.scrollY);
    };
  D.useEffect(
    () => (
      window.addEventListener("scroll", s),
      () => {
        window.removeEventListener("scroll", s);
      }
    ),
    [t]
  );
  const a = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };
  return z.jsxs(z.Fragment, {
    children: [
      z.jsx(Rx, {}),
      z.jsxs("div", {
        className: "hero-page",
        children: [
          z.jsxs("section", {
            className: "hero-section",
            children: [
              z.jsxs("div", {
                className: "hero-container",
                children: [
                  z.jsxs("div", {
                    className: "hero-left",
                    children: [
                      z.jsx("h1", {
                        className: "hero-title",
                        children: "ToneSifu",
                      }),
                      z.jsx("h2", {
                        className: "hero-subtitle",
                        children: "Chinese tone trainer",
                      }),
                      z.jsxs("div", {
                        className: "button-container",
                        children: [
                          z.jsx(pd, { type: "hero-button" }),
                          z.jsx(rl, {
                            className: "secondary-button",
                            to: "/training",
                            children: "Start Now",
                          }),
                        ],
                      }),
                    ],
                  }),
                  z.jsx("div", {
                    className: "hero-right",
                    children: z.jsx("img", {
                      className: "hero-image",
                      src: Zv,
                    }),
                  }),
                ],
              }),
              z.jsxs("div", {
                className: `hero-arrow show ${n && "hidden"}`,
                onClick: a,
                children: [
                  z.jsx("h3", { children: "Learn more" }),
                  z.jsx("h3", { children: "↓" }),
                ],
              }),
            ],
          }),
          z.jsx("section", {
            className: "hero-section",
            children: z.jsxs("div", {
              className: "hero-container",
              children: [
                z.jsx("div", {
                  className: "hero-right",
                  children: z.jsx("img", { className: "info-image", src: Jv }),
                }),
                z.jsxs("div", {
                  className: "hero-left",
                  children: [
                    z.jsx("h1", { className: "hero-title", children: "Info" }),
                    z.jsx("h2", {
                      className: "hero-subtitle",
                      children: "How it works",
                    }),
                    z.jsxs("p", {
                      className: "hero-text",
                      children: [
                        "Learn to tell apart tones in either ",
                        z.jsx("span", {
                          className: "bold",
                          children: "Mandarin",
                        }),
                        " or ",
                        z.jsx("span", {
                          className: "bold",
                          children: "Cantonese",
                        }),
                        ". ToneSifu uses audio-based training to help you practice your tone recognition and master a new language!",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function sn({ setter: n, tone: e }) {
  return z.jsxs("div", {
    className: "checkbox",
    children: [
      z.jsx("h1", { children: e }),
      z.jsx("input", {
        className: "pointer-hover",
        type: "checkbox",
        defaultChecked: !0,
        onChange: (t) => n(t, e),
        name: e,
      }),
    ],
  });
}
function py(n, e) {
  return function () {
    return n.apply(e, arguments);
  };
}
const { toString: r1 } = Object.prototype,
  { getPrototypeOf: xd } = Object,
  il = ((n) => (e) => {
    const t = r1.call(e);
    return n[t] || (n[t] = t.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Zt = (n) => ((n = n.toLowerCase()), (e) => il(e) === n),
  sl = (n) => (e) => typeof e === n,
  { isArray: bi } = Array,
  As = sl("undefined");
function i1(n) {
  return (
    n !== null &&
    !As(n) &&
    n.constructor !== null &&
    !As(n.constructor) &&
    Dt(n.constructor.isBuffer) &&
    n.constructor.isBuffer(n)
  );
}
const my = Zt("ArrayBuffer");
function s1(n) {
  let e;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (e = ArrayBuffer.isView(n))
      : (e = n && n.buffer && my(n.buffer)),
    e
  );
}
const o1 = sl("string"),
  Dt = sl("function"),
  gy = sl("number"),
  ol = (n) => n !== null && typeof n == "object",
  a1 = (n) => n === !0 || n === !1,
  Na = (n) => {
    if (il(n) !== "object") return !1;
    const e = xd(n);
    return (
      (e === null ||
        e === Object.prototype ||
        Object.getPrototypeOf(e) === null) &&
      !(Symbol.toStringTag in n) &&
      !(Symbol.iterator in n)
    );
  },
  l1 = Zt("Date"),
  u1 = Zt("File"),
  c1 = Zt("Blob"),
  d1 = Zt("FileList"),
  f1 = (n) => ol(n) && Dt(n.pipe),
  h1 = (n) => {
    let e;
    return (
      n &&
      ((typeof FormData == "function" && n instanceof FormData) ||
        (Dt(n.append) &&
          ((e = il(n)) === "formdata" ||
            (e === "object" &&
              Dt(n.toString) &&
              n.toString() === "[object FormData]"))))
    );
  },
  p1 = Zt("URLSearchParams"),
  [m1, g1, y1, w1] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Zt
  ),
  v1 = (n) =>
    n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function qs(n, e, { allOwnKeys: t = !1 } = {}) {
  if (n === null || typeof n > "u") return;
  let r, s;
  if ((typeof n != "object" && (n = [n]), bi(n)))
    for (r = 0, s = n.length; r < s; r++) e.call(null, n[r], r, n);
  else {
    const a = t ? Object.getOwnPropertyNames(n) : Object.keys(n),
      u = a.length;
    let c;
    for (r = 0; r < u; r++) (c = a[r]), e.call(null, n[c], c, n);
  }
}
function yy(n, e) {
  e = e.toLowerCase();
  const t = Object.keys(n);
  let r = t.length,
    s;
  for (; r-- > 0; ) if (((s = t[r]), e === s.toLowerCase())) return s;
  return null;
}
const Tr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  wy = (n) => !As(n) && n !== Tr;
function Ac() {
  const { caseless: n } = (wy(this) && this) || {},
    e = {},
    t = (r, s) => {
      const a = (n && yy(e, s)) || s;
      Na(e[a]) && Na(r)
        ? (e[a] = Ac(e[a], r))
        : Na(r)
        ? (e[a] = Ac({}, r))
        : bi(r)
        ? (e[a] = r.slice())
        : (e[a] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && qs(arguments[r], t);
  return e;
}
const x1 = (n, e, t, { allOwnKeys: r } = {}) => (
    qs(
      e,
      (s, a) => {
        t && Dt(s) ? (n[a] = py(s, t)) : (n[a] = s);
      },
      { allOwnKeys: r }
    ),
    n
  ),
  _1 = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
  k1 = (n, e, t, r) => {
    (n.prototype = Object.create(e.prototype, r)),
      (n.prototype.constructor = n),
      Object.defineProperty(n, "super", { value: e.prototype }),
      t && Object.assign(n.prototype, t);
  },
  b1 = (n, e, t, r) => {
    let s, a, u;
    const c = {};
    if (((e = e || {}), n == null)) return e;
    do {
      for (s = Object.getOwnPropertyNames(n), a = s.length; a-- > 0; )
        (u = s[a]), (!r || r(u, n, e)) && !c[u] && ((e[u] = n[u]), (c[u] = !0));
      n = t !== !1 && xd(n);
    } while (n && (!t || t(n, e)) && n !== Object.prototype);
    return e;
  },
  S1 = (n, e, t) => {
    (n = String(n)),
      (t === void 0 || t > n.length) && (t = n.length),
      (t -= e.length);
    const r = n.indexOf(e, t);
    return r !== -1 && r === t;
  },
  E1 = (n) => {
    if (!n) return null;
    if (bi(n)) return n;
    let e = n.length;
    if (!gy(e)) return null;
    const t = new Array(e);
    for (; e-- > 0; ) t[e] = n[e];
    return t;
  },
  C1 = (
    (n) => (e) =>
      n && e instanceof n
  )(typeof Uint8Array < "u" && xd(Uint8Array)),
  P1 = (n, e) => {
    const r = (n && n[Symbol.iterator]).call(n);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const a = s.value;
      e.call(n, a[0], a[1]);
    }
  },
  T1 = (n, e) => {
    let t;
    const r = [];
    for (; (t = n.exec(e)) !== null; ) r.push(t);
    return r;
  },
  O1 = Zt("HTMLFormElement"),
  M1 = (n) =>
    n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (t, r, s) {
      return r.toUpperCase() + s;
    }),
  dm = (
    ({ hasOwnProperty: n }) =>
    (e, t) =>
      n.call(e, t)
  )(Object.prototype),
  R1 = Zt("RegExp"),
  vy = (n, e) => {
    const t = Object.getOwnPropertyDescriptors(n),
      r = {};
    qs(t, (s, a) => {
      let u;
      (u = e(s, a, n)) !== !1 && (r[a] = u || s);
    }),
      Object.defineProperties(n, r);
  },
  D1 = (n) => {
    vy(n, (e, t) => {
      if (Dt(n) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
        return !1;
      const r = n[t];
      if (Dt(r)) {
        if (((e.enumerable = !1), "writable" in e)) {
          e.writable = !1;
          return;
        }
        e.set ||
          (e.set = () => {
            throw Error("Can not rewrite read-only method '" + t + "'");
          });
      }
    });
  },
  L1 = (n, e) => {
    const t = {},
      r = (s) => {
        s.forEach((a) => {
          t[a] = !0;
        });
      };
    return bi(n) ? r(n) : r(String(n).split(e)), t;
  },
  I1 = () => {},
  N1 = (n, e) => (n != null && Number.isFinite((n = +n)) ? n : e),
  vc = "abcdefghijklmnopqrstuvwxyz",
  fm = "0123456789",
  xy = { DIGIT: fm, ALPHA: vc, ALPHA_DIGIT: vc + vc.toUpperCase() + fm },
  z1 = (n = 16, e = xy.ALPHA_DIGIT) => {
    let t = "";
    const { length: r } = e;
    for (; n--; ) t += e[(Math.random() * r) | 0];
    return t;
  };
function F1(n) {
  return !!(
    n &&
    Dt(n.append) &&
    n[Symbol.toStringTag] === "FormData" &&
    n[Symbol.iterator]
  );
}
const A1 = (n) => {
    const e = new Array(10),
      t = (r, s) => {
        if (ol(r)) {
          if (e.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            e[s] = r;
            const a = bi(r) ? [] : {};
            return (
              qs(r, (u, c) => {
                const f = t(u, s + 1);
                !As(f) && (a[c] = f);
              }),
              (e[s] = void 0),
              a
            );
          }
        }
        return r;
      };
    return t(n, 0);
  },
  j1 = Zt("AsyncFunction"),
  W1 = (n) => n && (ol(n) || Dt(n)) && Dt(n.then) && Dt(n.catch),
  _y = ((n, e) =>
    n
      ? setImmediate
      : e
      ? ((t, r) => (
          Tr.addEventListener(
            "message",
            ({ source: s, data: a }) => {
              s === Tr && a === t && r.length && r.shift()();
            },
            !1
          ),
          (s) => {
            r.push(s), Tr.postMessage(t, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (t) => setTimeout(t))(
    typeof setImmediate == "function",
    Dt(Tr.postMessage)
  ),
  H1 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Tr)
      : (typeof process < "u" && process.nextTick) || _y,
  j = {
    isArray: bi,
    isArrayBuffer: my,
    isBuffer: i1,
    isFormData: h1,
    isArrayBufferView: s1,
    isString: o1,
    isNumber: gy,
    isBoolean: a1,
    isObject: ol,
    isPlainObject: Na,
    isReadableStream: m1,
    isRequest: g1,
    isResponse: y1,
    isHeaders: w1,
    isUndefined: As,
    isDate: l1,
    isFile: u1,
    isBlob: c1,
    isRegExp: R1,
    isFunction: Dt,
    isStream: f1,
    isURLSearchParams: p1,
    isTypedArray: C1,
    isFileList: d1,
    forEach: qs,
    merge: Ac,
    extend: x1,
    trim: v1,
    stripBOM: _1,
    inherits: k1,
    toFlatObject: b1,
    kindOf: il,
    kindOfTest: Zt,
    endsWith: S1,
    toArray: E1,
    forEachEntry: P1,
    matchAll: T1,
    isHTMLForm: O1,
    hasOwnProperty: dm,
    hasOwnProp: dm,
    reduceDescriptors: vy,
    freezeMethods: D1,
    toObjectSet: L1,
    toCamelCase: M1,
    noop: I1,
    toFiniteNumber: N1,
    findKey: yy,
    global: Tr,
    isContextDefined: wy,
    ALPHABET: xy,
    generateString: z1,
    isSpecCompliantForm: F1,
    toJSONObject: A1,
    isAsyncFn: j1,
    isThenable: W1,
    setImmediate: _y,
    asap: H1,
  };
function fe(n, e, t, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = n),
    (this.name = "AxiosError"),
    e && (this.code = e),
    t && (this.config = t),
    r && (this.request = r),
    s && ((this.response = s), (this.status = s.status ? s.status : null));
}
j.inherits(fe, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: j.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const ky = fe.prototype,
  by = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((n) => {
  by[n] = { value: n };
});
Object.defineProperties(fe, by);
Object.defineProperty(ky, "isAxiosError", { value: !0 });
fe.from = (n, e, t, r, s, a) => {
  const u = Object.create(ky);
  return (
    j.toFlatObject(
      n,
      u,
      function (f) {
        return f !== Error.prototype;
      },
      (c) => c !== "isAxiosError"
    ),
    fe.call(u, n.message, e, t, r, s),
    (u.cause = n),
    (u.name = n.name),
    a && Object.assign(u, a),
    u
  );
};
const B1 = null;
function jc(n) {
  return j.isPlainObject(n) || j.isArray(n);
}
function Sy(n) {
  return j.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function hm(n, e, t) {
  return n
    ? n
        .concat(e)
        .map(function (s, a) {
          return (s = Sy(s)), !t && a ? "[" + s + "]" : s;
        })
        .join(t ? "." : "")
    : e;
}
function U1(n) {
  return j.isArray(n) && !n.some(jc);
}
const $1 = j.toFlatObject(j, {}, null, function (e) {
  return /^is[A-Z]/.test(e);
});
function al(n, e, t) {
  if (!j.isObject(n)) throw new TypeError("target must be an object");
  (e = e || new FormData()),
    (t = j.toFlatObject(
      t,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (b, k) {
        return !j.isUndefined(k[b]);
      }
    ));
  const r = t.metaTokens,
    s = t.visitor || m,
    a = t.dots,
    u = t.indexes,
    f = (t.Blob || (typeof Blob < "u" && Blob)) && j.isSpecCompliantForm(e);
  if (!j.isFunction(s)) throw new TypeError("visitor must be a function");
  function h(x) {
    if (x === null) return "";
    if (j.isDate(x)) return x.toISOString();
    if (!f && j.isBlob(x))
      throw new fe("Blob is not supported. Use a Buffer instead.");
    return j.isArrayBuffer(x) || j.isTypedArray(x)
      ? f && typeof Blob == "function"
        ? new Blob([x])
        : Buffer.from(x)
      : x;
  }
  function m(x, b, k) {
    let S = x;
    if (x && !k && typeof x == "object") {
      if (j.endsWith(b, "{}"))
        (b = r ? b : b.slice(0, -2)), (x = JSON.stringify(x));
      else if (
        (j.isArray(x) && U1(x)) ||
        ((j.isFileList(x) || j.endsWith(b, "[]")) && (S = j.toArray(x)))
      )
        return (
          (b = Sy(b)),
          S.forEach(function (O, R) {
            !(j.isUndefined(O) || O === null) &&
              e.append(
                u === !0 ? hm([b], R, a) : u === null ? b : b + "[]",
                h(O)
              );
          }),
          !1
        );
    }
    return jc(x) ? !0 : (e.append(hm(k, b, a), h(x)), !1);
  }
  const y = [],
    w = Object.assign($1, {
      defaultVisitor: m,
      convertValue: h,
      isVisitable: jc,
    });
  function v(x, b) {
    if (!j.isUndefined(x)) {
      if (y.indexOf(x) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
      y.push(x),
        j.forEach(x, function (S, C) {
          (!(j.isUndefined(S) || S === null) &&
            s.call(e, S, j.isString(C) ? C.trim() : C, b, w)) === !0 &&
            v(S, b ? b.concat(C) : [C]);
        }),
        y.pop();
    }
  }
  if (!j.isObject(n)) throw new TypeError("data must be an object");
  return v(n), e;
}
function pm(n) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function (r) {
    return e[r];
  });
}
function _d(n, e) {
  (this._pairs = []), n && al(n, this, e);
}
const Ey = _d.prototype;
Ey.append = function (e, t) {
  this._pairs.push([e, t]);
};
Ey.toString = function (e) {
  const t = e
    ? function (r) {
        return e.call(this, r, pm);
      }
    : pm;
  return this._pairs
    .map(function (s) {
      return t(s[0]) + "=" + t(s[1]);
    }, "")
    .join("&");
};
function V1(n) {
  return encodeURIComponent(n)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Cy(n, e, t) {
  if (!e) return n;
  const r = (t && t.encode) || V1;
  j.isFunction(t) && (t = { serialize: t });
  const s = t && t.serialize;
  let a;
  if (
    (s
      ? (a = s(e, t))
      : (a = j.isURLSearchParams(e) ? e.toString() : new _d(e, t).toString(r)),
    a)
  ) {
    const u = n.indexOf("#");
    u !== -1 && (n = n.slice(0, u)),
      (n += (n.indexOf("?") === -1 ? "?" : "&") + a);
  }
  return n;
}
class mm {
  constructor() {
    this.handlers = [];
  }
  use(e, t, r) {
    return (
      this.handlers.push({
        fulfilled: e,
        rejected: t,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(e) {
    j.forEach(this.handlers, function (r) {
      r !== null && e(r);
    });
  }
}
const Py = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Y1 = typeof URLSearchParams < "u" ? URLSearchParams : _d,
  K1 = typeof FormData < "u" ? FormData : null,
  X1 = typeof Blob < "u" ? Blob : null,
  q1 = {
    isBrowser: !0,
    classes: { URLSearchParams: Y1, FormData: K1, Blob: X1 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  kd = typeof window < "u" && typeof document < "u",
  Wc = (typeof navigator == "object" && navigator) || void 0,
  G1 =
    kd &&
    (!Wc || ["ReactNative", "NativeScript", "NS"].indexOf(Wc.product) < 0),
  Q1 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Z1 = (kd && window.location.href) || "http://localhost",
  J1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: kd,
        hasStandardBrowserEnv: G1,
        hasStandardBrowserWebWorkerEnv: Q1,
        navigator: Wc,
        origin: Z1,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  pt = { ...J1, ...q1 };
function ek(n, e) {
  return al(
    n,
    new pt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (t, r, s, a) {
          return pt.isNode && j.isBuffer(t)
            ? (this.append(r, t.toString("base64")), !1)
            : a.defaultVisitor.apply(this, arguments);
        },
      },
      e
    )
  );
}
function tk(n) {
  return j
    .matchAll(/\w+|\[(\w*)]/g, n)
    .map((e) => (e[0] === "[]" ? "" : e[1] || e[0]));
}
function nk(n) {
  const e = {},
    t = Object.keys(n);
  let r;
  const s = t.length;
  let a;
  for (r = 0; r < s; r++) (a = t[r]), (e[a] = n[a]);
  return e;
}
function Ty(n) {
  function e(t, r, s, a) {
    let u = t[a++];
    if (u === "__proto__") return !0;
    const c = Number.isFinite(+u),
      f = a >= t.length;
    return (
      (u = !u && j.isArray(s) ? s.length : u),
      f
        ? (j.hasOwnProp(s, u) ? (s[u] = [s[u], r]) : (s[u] = r), !c)
        : ((!s[u] || !j.isObject(s[u])) && (s[u] = []),
          e(t, r, s[u], a) && j.isArray(s[u]) && (s[u] = nk(s[u])),
          !c)
    );
  }
  if (j.isFormData(n) && j.isFunction(n.entries)) {
    const t = {};
    return (
      j.forEachEntry(n, (r, s) => {
        e(tk(r), s, t, 0);
      }),
      t
    );
  }
  return null;
}
function rk(n, e, t) {
  if (j.isString(n))
    try {
      return (e || JSON.parse)(n), j.trim(n);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(n);
}
const Gs = {
  transitional: Py,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (e, t) {
      const r = t.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        a = j.isObject(e);
      if ((a && j.isHTMLForm(e) && (e = new FormData(e)), j.isFormData(e)))
        return s ? JSON.stringify(Ty(e)) : e;
      if (
        j.isArrayBuffer(e) ||
        j.isBuffer(e) ||
        j.isStream(e) ||
        j.isFile(e) ||
        j.isBlob(e) ||
        j.isReadableStream(e)
      )
        return e;
      if (j.isArrayBufferView(e)) return e.buffer;
      if (j.isURLSearchParams(e))
        return (
          t.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          e.toString()
        );
      let c;
      if (a) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return ek(e, this.formSerializer).toString();
        if ((c = j.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
          const f = this.env && this.env.FormData;
          return al(
            c ? { "files[]": e } : e,
            f && new f(),
            this.formSerializer
          );
        }
      }
      return a || s ? (t.setContentType("application/json", !1), rk(e)) : e;
    },
  ],
  transformResponse: [
    function (e) {
      const t = this.transitional || Gs.transitional,
        r = t && t.forcedJSONParsing,
        s = this.responseType === "json";
      if (j.isResponse(e) || j.isReadableStream(e)) return e;
      if (e && j.isString(e) && ((r && !this.responseType) || s)) {
        const u = !(t && t.silentJSONParsing) && s;
        try {
          return JSON.parse(e);
        } catch (c) {
          if (u)
            throw c.name === "SyntaxError"
              ? fe.from(c, fe.ERR_BAD_RESPONSE, this, null, this.response)
              : c;
        }
      }
      return e;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: pt.classes.FormData, Blob: pt.classes.Blob },
  validateStatus: function (e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
j.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  Gs.headers[n] = {};
});
const ik = j.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  sk = (n) => {
    const e = {};
    let t, r, s;
    return (
      n &&
        n
          .split(
            `
`
          )
          .forEach(function (u) {
            (s = u.indexOf(":")),
              (t = u.substring(0, s).trim().toLowerCase()),
              (r = u.substring(s + 1).trim()),
              !(!t || (e[t] && ik[t])) &&
                (t === "set-cookie"
                  ? e[t]
                    ? e[t].push(r)
                    : (e[t] = [r])
                  : (e[t] = e[t] ? e[t] + ", " + r : r));
          }),
      e
    );
  },
  gm = Symbol("internals");
function ms(n) {
  return n && String(n).trim().toLowerCase();
}
function za(n) {
  return n === !1 || n == null ? n : j.isArray(n) ? n.map(za) : String(n);
}
function ok(n) {
  const e = Object.create(null),
    t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = t.exec(n)); ) e[r[1]] = r[2];
  return e;
}
const ak = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function xc(n, e, t, r, s) {
  if (j.isFunction(r)) return r.call(this, e, t);
  if ((s && (e = t), !!j.isString(e))) {
    if (j.isString(r)) return e.indexOf(r) !== -1;
    if (j.isRegExp(r)) return r.test(e);
  }
}
function lk(n) {
  return n
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (e, t, r) => t.toUpperCase() + r);
}
function uk(n, e) {
  const t = j.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(n, r + t, {
      value: function (s, a, u) {
        return this[r].call(this, e, s, a, u);
      },
      configurable: !0,
    });
  });
}
class Ct {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, r) {
    const s = this;
    function a(c, f, h) {
      const m = ms(f);
      if (!m) throw new Error("header name must be a non-empty string");
      const y = j.findKey(s, m);
      (!y || s[y] === void 0 || h === !0 || (h === void 0 && s[y] !== !1)) &&
        (s[y || f] = za(c));
    }
    const u = (c, f) => j.forEach(c, (h, m) => a(h, m, f));
    if (j.isPlainObject(e) || e instanceof this.constructor) u(e, t);
    else if (j.isString(e) && (e = e.trim()) && !ak(e)) u(sk(e), t);
    else if (j.isHeaders(e)) for (const [c, f] of e.entries()) a(f, c, r);
    else e != null && a(t, e, r);
    return this;
  }
  get(e, t) {
    if (((e = ms(e)), e)) {
      const r = j.findKey(this, e);
      if (r) {
        const s = this[r];
        if (!t) return s;
        if (t === !0) return ok(s);
        if (j.isFunction(t)) return t.call(this, s, r);
        if (j.isRegExp(t)) return t.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (((e = ms(e)), e)) {
      const r = j.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!t || xc(this, this[r], r, t)));
    }
    return !1;
  }
  delete(e, t) {
    const r = this;
    let s = !1;
    function a(u) {
      if (((u = ms(u)), u)) {
        const c = j.findKey(r, u);
        c && (!t || xc(r, r[c], c, t)) && (delete r[c], (s = !0));
      }
    }
    return j.isArray(e) ? e.forEach(a) : a(e), s;
  }
  clear(e) {
    const t = Object.keys(this);
    let r = t.length,
      s = !1;
    for (; r--; ) {
      const a = t[r];
      (!e || xc(this, this[a], a, e, !0)) && (delete this[a], (s = !0));
    }
    return s;
  }
  normalize(e) {
    const t = this,
      r = {};
    return (
      j.forEach(this, (s, a) => {
        const u = j.findKey(r, a);
        if (u) {
          (t[u] = za(s)), delete t[a];
          return;
        }
        const c = e ? lk(a) : String(a).trim();
        c !== a && delete t[a], (t[c] = za(s)), (r[c] = !0);
      }),
      this
    );
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = Object.create(null);
    return (
      j.forEach(this, (r, s) => {
        r != null && r !== !1 && (t[s] = e && j.isArray(r) ? r.join(", ") : r);
      }),
      t
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...t) {
    const r = new this(e);
    return t.forEach((s) => r.set(s)), r;
  }
  static accessor(e) {
    const r = (this[gm] = this[gm] = { accessors: {} }).accessors,
      s = this.prototype;
    function a(u) {
      const c = ms(u);
      r[c] || (uk(s, u), (r[c] = !0));
    }
    return j.isArray(e) ? e.forEach(a) : a(e), this;
  }
}
Ct.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
j.reduceDescriptors(Ct.prototype, ({ value: n }, e) => {
  let t = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => n,
    set(r) {
      this[t] = r;
    },
  };
});
j.freezeMethods(Ct);
function _c(n, e) {
  const t = this || Gs,
    r = e || t,
    s = Ct.from(r.headers);
  let a = r.data;
  return (
    j.forEach(n, function (c) {
      a = c.call(t, a, s.normalize(), e ? e.status : void 0);
    }),
    s.normalize(),
    a
  );
}
function Oy(n) {
  return !!(n && n.__CANCEL__);
}
function Si(n, e, t) {
  fe.call(this, n ?? "canceled", fe.ERR_CANCELED, e, t),
    (this.name = "CanceledError");
}
j.inherits(Si, fe, { __CANCEL__: !0 });
function My(n, e, t) {
  const r = t.config.validateStatus;
  !t.status || !r || r(t.status)
    ? n(t)
    : e(
        new fe(
          "Request failed with status code " + t.status,
          [fe.ERR_BAD_REQUEST, fe.ERR_BAD_RESPONSE][
            Math.floor(t.status / 100) - 4
          ],
          t.config,
          t.request,
          t
        )
      );
}
function ck(n) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return (e && e[1]) || "";
}
function dk(n, e) {
  n = n || 10;
  const t = new Array(n),
    r = new Array(n);
  let s = 0,
    a = 0,
    u;
  return (
    (e = e !== void 0 ? e : 1e3),
    function (f) {
      const h = Date.now(),
        m = r[a];
      u || (u = h), (t[s] = f), (r[s] = h);
      let y = a,
        w = 0;
      for (; y !== s; ) (w += t[y++]), (y = y % n);
      if (((s = (s + 1) % n), s === a && (a = (a + 1) % n), h - u < e)) return;
      const v = m && h - m;
      return v ? Math.round((w * 1e3) / v) : void 0;
    }
  );
}
function fk(n, e) {
  let t = 0,
    r = 1e3 / e,
    s,
    a;
  const u = (h, m = Date.now()) => {
    (t = m), (s = null), a && (clearTimeout(a), (a = null)), n.apply(null, h);
  };
  return [
    (...h) => {
      const m = Date.now(),
        y = m - t;
      y >= r
        ? u(h, m)
        : ((s = h),
          a ||
            (a = setTimeout(() => {
              (a = null), u(s);
            }, r - y)));
    },
    () => s && u(s),
  ];
}
const Ua = (n, e, t = 3) => {
    let r = 0;
    const s = dk(50, 250);
    return fk((a) => {
      const u = a.loaded,
        c = a.lengthComputable ? a.total : void 0,
        f = u - r,
        h = s(f),
        m = u <= c;
      r = u;
      const y = {
        loaded: u,
        total: c,
        progress: c ? u / c : void 0,
        bytes: f,
        rate: h || void 0,
        estimated: h && c && m ? (c - u) / h : void 0,
        event: a,
        lengthComputable: c != null,
        [e ? "download" : "upload"]: !0,
      };
      n(y);
    }, t);
  },
  ym = (n, e) => {
    const t = n != null;
    return [(r) => e[0]({ lengthComputable: t, total: n, loaded: r }), e[1]];
  },
  wm =
    (n) =>
    (...e) =>
      j.asap(() => n(...e)),
  hk = pt.hasStandardBrowserEnv
    ? ((n, e) => (t) => (
        (t = new URL(t, pt.origin)),
        n.protocol === t.protocol &&
          n.host === t.host &&
          (e || n.port === t.port)
      ))(
        new URL(pt.origin),
        pt.navigator && /(msie|trident)/i.test(pt.navigator.userAgent)
      )
    : () => !0,
  pk = pt.hasStandardBrowserEnv
    ? {
        write(n, e, t, r, s, a) {
          const u = [n + "=" + encodeURIComponent(e)];
          j.isNumber(t) && u.push("expires=" + new Date(t).toGMTString()),
            j.isString(r) && u.push("path=" + r),
            j.isString(s) && u.push("domain=" + s),
            a === !0 && u.push("secure"),
            (document.cookie = u.join("; "));
        },
        read(n) {
          const e = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return e ? decodeURIComponent(e[3]) : null;
        },
        remove(n) {
          this.write(n, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function mk(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function gk(n, e) {
  return e ? n.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : n;
}
function Ry(n, e) {
  return n && !mk(e) ? gk(n, e) : e;
}
const vm = (n) => (n instanceof Ct ? { ...n } : n);
function Lr(n, e) {
  e = e || {};
  const t = {};
  function r(h, m, y, w) {
    return j.isPlainObject(h) && j.isPlainObject(m)
      ? j.merge.call({ caseless: w }, h, m)
      : j.isPlainObject(m)
      ? j.merge({}, m)
      : j.isArray(m)
      ? m.slice()
      : m;
  }
  function s(h, m, y, w) {
    if (j.isUndefined(m)) {
      if (!j.isUndefined(h)) return r(void 0, h, y, w);
    } else return r(h, m, y, w);
  }
  function a(h, m) {
    if (!j.isUndefined(m)) return r(void 0, m);
  }
  function u(h, m) {
    if (j.isUndefined(m)) {
      if (!j.isUndefined(h)) return r(void 0, h);
    } else return r(void 0, m);
  }
  function c(h, m, y) {
    if (y in e) return r(h, m);
    if (y in n) return r(void 0, h);
  }
  const f = {
    url: a,
    method: a,
    data: a,
    baseURL: u,
    transformRequest: u,
    transformResponse: u,
    paramsSerializer: u,
    timeout: u,
    timeoutMessage: u,
    withCredentials: u,
    withXSRFToken: u,
    adapter: u,
    responseType: u,
    xsrfCookieName: u,
    xsrfHeaderName: u,
    onUploadProgress: u,
    onDownloadProgress: u,
    decompress: u,
    maxContentLength: u,
    maxBodyLength: u,
    beforeRedirect: u,
    transport: u,
    httpAgent: u,
    httpsAgent: u,
    cancelToken: u,
    socketPath: u,
    responseEncoding: u,
    validateStatus: c,
    headers: (h, m, y) => s(vm(h), vm(m), y, !0),
  };
  return (
    j.forEach(Object.keys(Object.assign({}, n, e)), function (m) {
      const y = f[m] || s,
        w = y(n[m], e[m], m);
      (j.isUndefined(w) && y !== c) || (t[m] = w);
    }),
    t
  );
}
const Dy = (n) => {
    const e = Lr({}, n);
    let {
      data: t,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: a,
      headers: u,
      auth: c,
    } = e;
    (e.headers = u = Ct.from(u)),
      (e.url = Cy(Ry(e.baseURL, e.url), n.params, n.paramsSerializer)),
      c &&
        u.set(
          "Authorization",
          "Basic " +
            btoa(
              (c.username || "") +
                ":" +
                (c.password ? unescape(encodeURIComponent(c.password)) : "")
            )
        );
    let f;
    if (j.isFormData(t)) {
      if (pt.hasStandardBrowserEnv || pt.hasStandardBrowserWebWorkerEnv)
        u.setContentType(void 0);
      else if ((f = u.getContentType()) !== !1) {
        const [h, ...m] = f
          ? f
              .split(";")
              .map((y) => y.trim())
              .filter(Boolean)
          : [];
        u.setContentType([h || "multipart/form-data", ...m].join("; "));
      }
    }
    if (
      pt.hasStandardBrowserEnv &&
      (r && j.isFunction(r) && (r = r(e)), r || (r !== !1 && hk(e.url)))
    ) {
      const h = s && a && pk.read(a);
      h && u.set(s, h);
    }
    return e;
  },
  yk = typeof XMLHttpRequest < "u",
  wk =
    yk &&
    function (n) {
      return new Promise(function (t, r) {
        const s = Dy(n);
        let a = s.data;
        const u = Ct.from(s.headers).normalize();
        let { responseType: c, onUploadProgress: f, onDownloadProgress: h } = s,
          m,
          y,
          w,
          v,
          x;
        function b() {
          v && v(),
            x && x(),
            s.cancelToken && s.cancelToken.unsubscribe(m),
            s.signal && s.signal.removeEventListener("abort", m);
        }
        let k = new XMLHttpRequest();
        k.open(s.method.toUpperCase(), s.url, !0), (k.timeout = s.timeout);
        function S() {
          if (!k) return;
          const O = Ct.from(
              "getAllResponseHeaders" in k && k.getAllResponseHeaders()
            ),
            A = {
              data:
                !c || c === "text" || c === "json"
                  ? k.responseText
                  : k.response,
              status: k.status,
              statusText: k.statusText,
              headers: O,
              config: n,
              request: k,
            };
          My(
            function (H) {
              t(H), b();
            },
            function (H) {
              r(H), b();
            },
            A
          ),
            (k = null);
        }
        "onloadend" in k
          ? (k.onloadend = S)
          : (k.onreadystatechange = function () {
              !k ||
                k.readyState !== 4 ||
                (k.status === 0 &&
                  !(k.responseURL && k.responseURL.indexOf("file:") === 0)) ||
                setTimeout(S);
            }),
          (k.onabort = function () {
            k &&
              (r(new fe("Request aborted", fe.ECONNABORTED, n, k)), (k = null));
          }),
          (k.onerror = function () {
            r(new fe("Network Error", fe.ERR_NETWORK, n, k)), (k = null);
          }),
          (k.ontimeout = function () {
            let R = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const A = s.transitional || Py;
            s.timeoutErrorMessage && (R = s.timeoutErrorMessage),
              r(
                new fe(
                  R,
                  A.clarifyTimeoutError ? fe.ETIMEDOUT : fe.ECONNABORTED,
                  n,
                  k
                )
              ),
              (k = null);
          }),
          a === void 0 && u.setContentType(null),
          "setRequestHeader" in k &&
            j.forEach(u.toJSON(), function (R, A) {
              k.setRequestHeader(A, R);
            }),
          j.isUndefined(s.withCredentials) ||
            (k.withCredentials = !!s.withCredentials),
          c && c !== "json" && (k.responseType = s.responseType),
          h && (([w, x] = Ua(h, !0)), k.addEventListener("progress", w)),
          f &&
            k.upload &&
            (([y, v] = Ua(f)),
            k.upload.addEventListener("progress", y),
            k.upload.addEventListener("loadend", v)),
          (s.cancelToken || s.signal) &&
            ((m = (O) => {
              k &&
                (r(!O || O.type ? new Si(null, n, k) : O),
                k.abort(),
                (k = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(m),
            s.signal &&
              (s.signal.aborted ? m() : s.signal.addEventListener("abort", m)));
        const C = ck(s.url);
        if (C && pt.protocols.indexOf(C) === -1) {
          r(new fe("Unsupported protocol " + C + ":", fe.ERR_BAD_REQUEST, n));
          return;
        }
        k.send(a || null);
      });
    },
  vk = (n, e) => {
    const { length: t } = (n = n ? n.filter(Boolean) : []);
    if (e || t) {
      let r = new AbortController(),
        s;
      const a = function (h) {
        if (!s) {
          (s = !0), c();
          const m = h instanceof Error ? h : this.reason;
          r.abort(
            m instanceof fe ? m : new Si(m instanceof Error ? m.message : m)
          );
        }
      };
      let u =
        e &&
        setTimeout(() => {
          (u = null), a(new fe(`timeout ${e} of ms exceeded`, fe.ETIMEDOUT));
        }, e);
      const c = () => {
        n &&
          (u && clearTimeout(u),
          (u = null),
          n.forEach((h) => {
            h.unsubscribe
              ? h.unsubscribe(a)
              : h.removeEventListener("abort", a);
          }),
          (n = null));
      };
      n.forEach((h) => h.addEventListener("abort", a));
      const { signal: f } = r;
      return (f.unsubscribe = () => j.asap(c)), f;
    }
  },
  xk = function* (n, e) {
    let t = n.byteLength;
    if (t < e) {
      yield n;
      return;
    }
    let r = 0,
      s;
    for (; r < t; ) (s = r + e), yield n.slice(r, s), (r = s);
  },
  _k = async function* (n, e) {
    for await (const t of kk(n)) yield* xk(t, e);
  },
  kk = async function* (n) {
    if (n[Symbol.asyncIterator]) {
      yield* n;
      return;
    }
    const e = n.getReader();
    try {
      for (;;) {
        const { done: t, value: r } = await e.read();
        if (t) break;
        yield r;
      }
    } finally {
      await e.cancel();
    }
  },
  xm = (n, e, t, r) => {
    const s = _k(n, e);
    let a = 0,
      u,
      c = (f) => {
        u || ((u = !0), r && r(f));
      };
    return new ReadableStream(
      {
        async pull(f) {
          try {
            const { done: h, value: m } = await s.next();
            if (h) {
              c(), f.close();
              return;
            }
            let y = m.byteLength;
            if (t) {
              let w = (a += y);
              t(w);
            }
            f.enqueue(new Uint8Array(m));
          } catch (h) {
            throw (c(h), h);
          }
        },
        cancel(f) {
          return c(f), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  ll =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Ly = ll && typeof ReadableStream == "function",
  bk =
    ll &&
    (typeof TextEncoder == "function"
      ? (
          (n) => (e) =>
            n.encode(e)
        )(new TextEncoder())
      : async (n) => new Uint8Array(await new Response(n).arrayBuffer())),
  Iy = (n, ...e) => {
    try {
      return !!n(...e);
    } catch {
      return !1;
    }
  },
  Sk =
    Ly &&
    Iy(() => {
      let n = !1;
      const e = new Request(pt.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (n = !0), "half";
        },
      }).headers.has("Content-Type");
      return n && !e;
    }),
  _m = 64 * 1024,
  Hc = Ly && Iy(() => j.isReadableStream(new Response("").body)),
  $a = { stream: Hc && ((n) => n.body) };
ll &&
  ((n) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
      !$a[e] &&
        ($a[e] = j.isFunction(n[e])
          ? (t) => t[e]()
          : (t, r) => {
              throw new fe(
                `Response type '${e}' is not supported`,
                fe.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const Ek = async (n) => {
    if (n == null) return 0;
    if (j.isBlob(n)) return n.size;
    if (j.isSpecCompliantForm(n))
      return (
        await new Request(pt.origin, { method: "POST", body: n }).arrayBuffer()
      ).byteLength;
    if (j.isArrayBufferView(n) || j.isArrayBuffer(n)) return n.byteLength;
    if ((j.isURLSearchParams(n) && (n = n + ""), j.isString(n)))
      return (await bk(n)).byteLength;
  },
  Ck = async (n, e) => {
    const t = j.toFiniteNumber(n.getContentLength());
    return t ?? Ek(e);
  },
  Pk =
    ll &&
    (async (n) => {
      let {
        url: e,
        method: t,
        data: r,
        signal: s,
        cancelToken: a,
        timeout: u,
        onDownloadProgress: c,
        onUploadProgress: f,
        responseType: h,
        headers: m,
        withCredentials: y = "same-origin",
        fetchOptions: w,
      } = Dy(n);
      h = h ? (h + "").toLowerCase() : "text";
      let v = vk([s, a && a.toAbortSignal()], u),
        x;
      const b =
        v &&
        v.unsubscribe &&
        (() => {
          v.unsubscribe();
        });
      let k;
      try {
        if (
          f &&
          Sk &&
          t !== "get" &&
          t !== "head" &&
          (k = await Ck(m, r)) !== 0
        ) {
          let A = new Request(e, { method: "POST", body: r, duplex: "half" }),
            W;
          if (
            (j.isFormData(r) &&
              (W = A.headers.get("content-type")) &&
              m.setContentType(W),
            A.body)
          ) {
            const [H, N] = ym(k, Ua(wm(f)));
            r = xm(A.body, _m, H, N);
          }
        }
        j.isString(y) || (y = y ? "include" : "omit");
        const S = "credentials" in Request.prototype;
        x = new Request(e, {
          ...w,
          signal: v,
          method: t.toUpperCase(),
          headers: m.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: S ? y : void 0,
        });
        let C = await fetch(x);
        const O = Hc && (h === "stream" || h === "response");
        if (Hc && (c || (O && b))) {
          const A = {};
          ["status", "statusText", "headers"].forEach((B) => {
            A[B] = C[B];
          });
          const W = j.toFiniteNumber(C.headers.get("content-length")),
            [H, N] = (c && ym(W, Ua(wm(c), !0))) || [];
          C = new Response(
            xm(C.body, _m, H, () => {
              N && N(), b && b();
            }),
            A
          );
        }
        h = h || "text";
        let R = await $a[j.findKey($a, h) || "text"](C, n);
        return (
          !O && b && b(),
          await new Promise((A, W) => {
            My(A, W, {
              data: R,
              headers: Ct.from(C.headers),
              status: C.status,
              statusText: C.statusText,
              config: n,
              request: x,
            });
          })
        );
      } catch (S) {
        throw (
          (b && b(),
          S && S.name === "TypeError" && /fetch/i.test(S.message)
            ? Object.assign(new fe("Network Error", fe.ERR_NETWORK, n, x), {
                cause: S.cause || S,
              })
            : fe.from(S, S && S.code, n, x))
        );
      }
    }),
  Bc = { http: B1, xhr: wk, fetch: Pk };
j.forEach(Bc, (n, e) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: e });
    } catch {}
    Object.defineProperty(n, "adapterName", { value: e });
  }
});
const km = (n) => `- ${n}`,
  Tk = (n) => j.isFunction(n) || n === null || n === !1,
  Ny = {
    getAdapter: (n) => {
      n = j.isArray(n) ? n : [n];
      const { length: e } = n;
      let t, r;
      const s = {};
      for (let a = 0; a < e; a++) {
        t = n[a];
        let u;
        if (
          ((r = t),
          !Tk(t) && ((r = Bc[(u = String(t)).toLowerCase()]), r === void 0))
        )
          throw new fe(`Unknown adapter '${u}'`);
        if (r) break;
        s[u || "#" + a] = r;
      }
      if (!r) {
        const a = Object.entries(s).map(
          ([c, f]) =>
            `adapter ${c} ` +
            (f === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let u = e
          ? a.length > 1
            ? `since :
` +
              a.map(km).join(`
`)
            : " " + km(a[0])
          : "as no adapter specified";
        throw new fe(
          "There is no suitable adapter to dispatch the request " + u,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Bc,
  };
function kc(n) {
  if (
    (n.cancelToken && n.cancelToken.throwIfRequested(),
    n.signal && n.signal.aborted)
  )
    throw new Si(null, n);
}
function bm(n) {
  return (
    kc(n),
    (n.headers = Ct.from(n.headers)),
    (n.data = _c.call(n, n.transformRequest)),
    ["post", "put", "patch"].indexOf(n.method) !== -1 &&
      n.headers.setContentType("application/x-www-form-urlencoded", !1),
    Ny.getAdapter(n.adapter || Gs.adapter)(n).then(
      function (r) {
        return (
          kc(n),
          (r.data = _c.call(n, n.transformResponse, r)),
          (r.headers = Ct.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Oy(r) ||
            (kc(n),
            r &&
              r.response &&
              ((r.response.data = _c.call(n, n.transformResponse, r.response)),
              (r.response.headers = Ct.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const zy = "1.7.9",
  ul = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (n, e) => {
    ul[n] = function (r) {
      return typeof r === n || "a" + (e < 1 ? "n " : " ") + n;
    };
  }
);
const Sm = {};
ul.transitional = function (e, t, r) {
  function s(a, u) {
    return (
      "[Axios v" +
      zy +
      "] Transitional option '" +
      a +
      "'" +
      u +
      (r ? ". " + r : "")
    );
  }
  return (a, u, c) => {
    if (e === !1)
      throw new fe(
        s(u, " has been removed" + (t ? " in " + t : "")),
        fe.ERR_DEPRECATED
      );
    return (
      t &&
        !Sm[u] &&
        ((Sm[u] = !0),
        console.warn(
          s(
            u,
            " has been deprecated since v" +
              t +
              " and will be removed in the near future"
          )
        )),
      e ? e(a, u, c) : !0
    );
  };
};
ul.spelling = function (e) {
  return (t, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0);
};
function Ok(n, e, t) {
  if (typeof n != "object")
    throw new fe("options must be an object", fe.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(n);
  let s = r.length;
  for (; s-- > 0; ) {
    const a = r[s],
      u = e[a];
    if (u) {
      const c = n[a],
        f = c === void 0 || u(c, a, n);
      if (f !== !0)
        throw new fe("option " + a + " must be " + f, fe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0) throw new fe("Unknown option " + a, fe.ERR_BAD_OPTION);
  }
}
const Fa = { assertOptions: Ok, validators: ul },
  on = Fa.validators;
class Rr {
  constructor(e) {
    (this.defaults = e),
      (this.interceptors = { request: new mm(), response: new mm() });
  }
  async request(e, t) {
    try {
      return await this._request(e, t);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(s)
          : (s = new Error());
        const a = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? a &&
              !String(r.stack).endsWith(a.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + a)
            : (r.stack = a);
        } catch {}
      }
      throw r;
    }
  }
  _request(e, t) {
    typeof e == "string" ? ((t = t || {}), (t.url = e)) : (t = e || {}),
      (t = Lr(this.defaults, t));
    const { transitional: r, paramsSerializer: s, headers: a } = t;
    r !== void 0 &&
      Fa.assertOptions(
        r,
        {
          silentJSONParsing: on.transitional(on.boolean),
          forcedJSONParsing: on.transitional(on.boolean),
          clarifyTimeoutError: on.transitional(on.boolean),
        },
        !1
      ),
      s != null &&
        (j.isFunction(s)
          ? (t.paramsSerializer = { serialize: s })
          : Fa.assertOptions(
              s,
              { encode: on.function, serialize: on.function },
              !0
            )),
      Fa.assertOptions(
        t,
        {
          baseUrl: on.spelling("baseURL"),
          withXsrfToken: on.spelling("withXSRFToken"),
        },
        !0
      ),
      (t.method = (t.method || this.defaults.method || "get").toLowerCase());
    let u = a && j.merge(a.common, a[t.method]);
    a &&
      j.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (x) => {
          delete a[x];
        }
      ),
      (t.headers = Ct.concat(u, a));
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function (b) {
      (typeof b.runWhen == "function" && b.runWhen(t) === !1) ||
        ((f = f && b.synchronous), c.unshift(b.fulfilled, b.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function (b) {
      h.push(b.fulfilled, b.rejected);
    });
    let m,
      y = 0,
      w;
    if (!f) {
      const x = [bm.bind(this), void 0];
      for (
        x.unshift.apply(x, c),
          x.push.apply(x, h),
          w = x.length,
          m = Promise.resolve(t);
        y < w;

      )
        m = m.then(x[y++], x[y++]);
      return m;
    }
    w = c.length;
    let v = t;
    for (y = 0; y < w; ) {
      const x = c[y++],
        b = c[y++];
      try {
        v = x(v);
      } catch (k) {
        b.call(this, k);
        break;
      }
    }
    try {
      m = bm.call(this, v);
    } catch (x) {
      return Promise.reject(x);
    }
    for (y = 0, w = h.length; y < w; ) m = m.then(h[y++], h[y++]);
    return m;
  }
  getUri(e) {
    e = Lr(this.defaults, e);
    const t = Ry(e.baseURL, e.url);
    return Cy(t, e.params, e.paramsSerializer);
  }
}
j.forEach(["delete", "get", "head", "options"], function (e) {
  Rr.prototype[e] = function (t, r) {
    return this.request(
      Lr(r || {}, { method: e, url: t, data: (r || {}).data })
    );
  };
});
j.forEach(["post", "put", "patch"], function (e) {
  function t(r) {
    return function (a, u, c) {
      return this.request(
        Lr(c || {}, {
          method: e,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: a,
          data: u,
        })
      );
    };
  }
  (Rr.prototype[e] = t()), (Rr.prototype[e + "Form"] = t(!0));
});
class bd {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function (a) {
      t = a;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let a = r._listeners.length;
      for (; a-- > 0; ) r._listeners[a](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let a;
        const u = new Promise((c) => {
          r.subscribe(c), (a = c);
        }).then(s);
        return (
          (u.cancel = function () {
            r.unsubscribe(a);
          }),
          u
        );
      }),
      e(function (a, u, c) {
        r.reason || ((r.reason = new Si(a, u, c)), t(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
  }
  unsubscribe(e) {
    if (!this._listeners) return;
    const t = this._listeners.indexOf(e);
    t !== -1 && this._listeners.splice(t, 1);
  }
  toAbortSignal() {
    const e = new AbortController(),
      t = (r) => {
        e.abort(r);
      };
    return (
      this.subscribe(t),
      (e.signal.unsubscribe = () => this.unsubscribe(t)),
      e.signal
    );
  }
  static source() {
    let e;
    return {
      token: new bd(function (s) {
        e = s;
      }),
      cancel: e,
    };
  }
}
function Mk(n) {
  return function (t) {
    return n.apply(null, t);
  };
}
function Rk(n) {
  return j.isObject(n) && n.isAxiosError === !0;
}
const Uc = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Uc).forEach(([n, e]) => {
  Uc[e] = n;
});
function Fy(n) {
  const e = new Rr(n),
    t = py(Rr.prototype.request, e);
  return (
    j.extend(t, Rr.prototype, e, { allOwnKeys: !0 }),
    j.extend(t, e, null, { allOwnKeys: !0 }),
    (t.create = function (s) {
      return Fy(Lr(n, s));
    }),
    t
  );
}
const Ne = Fy(Gs);
Ne.Axios = Rr;
Ne.CanceledError = Si;
Ne.CancelToken = bd;
Ne.isCancel = Oy;
Ne.VERSION = zy;
Ne.toFormData = al;
Ne.AxiosError = fe;
Ne.Cancel = Ne.CanceledError;
Ne.all = function (e) {
  return Promise.all(e);
};
Ne.spread = Mk;
Ne.isAxiosError = Rk;
Ne.mergeConfig = Lr;
Ne.AxiosHeaders = Ct;
Ne.formToJSON = (n) => Ty(j.isHTMLForm(n) ? new FormData(n) : n);
Ne.getAdapter = Ny.getAdapter;
Ne.HttpStatusCode = Uc;
Ne.default = Ne;
function Dk({
  length: n,
  setLength: e,
  setScore: t,
  setTotal: r,
  setQuestionLog: s,
  testStateSetter: a,
  wordListSetter: u,
  filterList: c,
  setFilterList: f,
  setLanguage: h,
  language: m,
}) {
  const [y, w] = D.useState(1),
    v = (S, C) => {
      S.target.checked ? f([...c, C]) : f(c.filter((O) => O != C));
    },
    x = async () => {
      try {
        return (
          await Ne({
            method: "GET",
            url: `https://tonesifu.onrender.com/words/${m}/random/${n}`,
            params: { tones: c },
          })
        ).data;
      } catch (S) {
        console.error("Error fetching data from backend:", S);
      }
    },
    b = async () => {
      if (c.length < 2) alert("Please select at least 2 tones.");
      else {
        const S = await x();
        u(S), s([]), t([0, 0, 0, 0, 0, 0, 0]), r([0, 0, 0, 0, 0, 0, 0]), a(1);
      }
    },
    k = (S) => {
      e(S.target.value);
    };
  return z.jsx(z.Fragment, {
    children:
      y == 1 &&
      z.jsxs("div", {
        className: "test-settings-container",
        children: [
          z.jsx("div", {
            className: "settings-button-container",
            children: z.jsx("button", {
              className: "start-button",
              onClick: b,
              children: "Start",
            }),
          }),
          z.jsx("h1", {
            className: "settings-info-text",
            children: "Select Tones",
          }),
          m == "yue" &&
            z.jsxs("div", {
              className: "checkbox-container",
              children: [
                z.jsx(sn, { setter: v, tone: 1 }),
                z.jsx(sn, { setter: v, tone: 2 }),
                z.jsx(sn, { setter: v, tone: 3 }),
                z.jsx(sn, { setter: v, tone: 4 }),
                z.jsx(sn, { setter: v, tone: 5 }),
                z.jsx(sn, { setter: v, tone: 6 }),
              ],
            }),
          m == "cmn" &&
            z.jsxs("div", {
              className: "checkbox-container",
              children: [
                z.jsx(sn, { setter: v, tone: 1 }),
                z.jsx(sn, { setter: v, tone: 2 }),
                z.jsx(sn, { setter: v, tone: 3 }),
                z.jsx(sn, { setter: v, tone: 4 }),
              ],
            }),
          z.jsx("h1", { className: "grey-text", children: "Test Length" }),
          z.jsx("input", {
            className: "length-slider",
            type: "range",
            min: "5",
            max: "50",
            onChange: k,
            value: n,
          }),
          z.jsxs("h1", {
            children: [
              n,
              " ",
              z.jsx("span", { className: "grey-text", children: "words" }),
            ],
          }),
        ],
      }),
  });
}
function Lk({
  length: n,
  score: e,
  setScore: t,
  total: r,
  setTotal: s,
  testStateSetter: a,
  words: u,
  tones: c,
  language: f,
  questionLog: h,
  setQuestionLog: m,
}) {
  const [y, w] = D.useState(0),
    [v, x] = D.useState(0),
    [b, k] = D.useState({}),
    [S, C] = D.useState(!1),
    [O, R] = D.useState(!1),
    [A, W] = D.useState(0),
    H = ["", "ā", "á", "ǎ", "à"],
    N = D.useRef([]),
    { user: B, isAuthenticated: G } = gi();
  (N.current = c.map(($, Q) => N.current[Q] ?? D.createRef())),
    D.useEffect(() => {
      k(u[v]), y >= n && (G && (ve(), ye()), a(2));
    }, [y]),
    D.useEffect(() => {
      const $ = (Q) => {
        ne(Q);
      };
      return (
        window.addEventListener("keydown", $),
        () => {
          window.removeEventListener("keydown", $);
        }
      );
    }),
    D.useEffect(() => {
      new Audio(
        "https://tonesifu.onrender.com/audio/" + b.romanization + ".mp3"
      ).play();
    }, [b]);
  const ne = ($) => {
      switch ($.code) {
        case "Digit1":
          he(
            re.findIndex((Q) => Q == 1),
            1
          );
          break;
        case "Digit2":
          he(
            re.findIndex((Q) => Q == 2),
            2
          );
          break;
        case "Digit3":
          he(
            re.findIndex((Q) => Q == 3),
            3
          );
          break;
        case "Digit4":
          he(
            re.findIndex((Q) => Q == 4),
            4
          );
          break;
        case "Digit5":
          he(
            re.findIndex((Q) => Q == 5),
            5
          );
          break;
        case "Digit6":
          he(
            re.findIndex((Q) => Q == 6),
            6
          );
          break;
        case "Space":
          S && Ee();
          break;
        case "Enter":
          S && Ee();
          break;
        case "KeyR":
          we();
          break;
      }
    },
    re = c.sort(),
    he = ($, Q) => {
      if (!S && c.includes(Q)) {
        W($);
        const Z = r.map((M, U) => (U == 0 || U == b.tone ? M + 1 : M));
        if ((s(Z), Q == b.tone)) {
          R(!0);
          const M = e.map((U, le) => (le == 0 || le == b.tone ? U + 1 : U));
          t(M), N.current[$].current.classList.add("answer-button-correct");
        } else
          R(!1),
            N.current[$].current.classList.add("answer-button-incorrect"),
            N.current[re.findIndex((M) => M == b.tone)].current.classList.add(
              "answer-button-correct"
            );
        C(!0);
      }
    },
    Ee = () => {
      S &&
        (m([
          ...h,
          { romanization: b.romanization, honzi: b.honzi, correct: O },
        ]),
        w(($) => $ + 1),
        v < u.length - 1 ? x(($) => $ + 1) : x(0),
        C(!1),
        O
          ? N.current[A].current.classList.remove("answer-button-correct")
          : (N.current[A].current.classList.remove("answer-button-incorrect"),
            N.current[
              re.findIndex(($) => $ == b.tone)
            ].current.classList.remove("answer-button-correct")));
    },
    we = () => {
      new Audio(
        "https://tonesifu.onrender.com/audio/" + b.romanization + ".mp3"
      ).play();
    },
    ve = async () => {
      try {
        return (
          await Ne({
            method: "POST",
            url: `https://tonesifu.onrender.com/log/${f}/${B.sub}`,
            params: { score: e, total: r },
          })
        ).data;
      } catch ($) {
        console.error("Error saving log data", $);
      }
    },
    ye = async () => {
      try {
        return (
          await Ne({
            method: "PUT",
            url: `https://tonesifu.onrender.com/users/${B.sub}`,
            data: { expAdded: e[0], language: f },
          })
        ).data;
      } catch ($) {
        console.error("Error adding exp", $);
      }
    };
  return z.jsxs("div", {
    className: "test-screen-container",
    children: [
      z.jsxs("h1", { className: "question-counter", children: [y, " / ", n] }),
      z.jsx("button", {
        className: "play-next-button play-button",
        onClick: we,
        children: z.jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "48",
          height: "48",
          viewBox: "0 0 24 24",
          children: z.jsx("path", { d: "M8 5v14l11-7z" }),
        }),
      }),
      S &&
        z.jsx("button", {
          className: "play-next-button next-button",
          onClick: Ee,
          children: "Next",
        }),
      z.jsxs("div", {
        className: "answer-button-container",
        children: [
          f == "cmn" &&
            re.map(($, Q) =>
              z.jsx(
                "button",
                {
                  ref: N.current[Q],
                  className: "answer-button",
                  onClick: () => he(Q, $),
                  children: H[$],
                },
                Q
              )
            ),
          f == "yue" &&
            re.map(($, Q) =>
              z.jsx(
                "button",
                {
                  ref: N.current[Q],
                  className: "answer-button",
                  onClick: () => he(Q, $),
                  children: $,
                },
                Q
              )
            ),
        ],
      }),
    ],
  });
}
function Ik({ score: n, total: e, questionLog: t, testStateSetter: r }) {
  return z.jsxs(z.Fragment, {
    children: [
      z.jsxs("div", {
        className: "score-container",
        children: [
          z.jsxs("div", {
            className: "score-display",
            children: [
              "Score: ",
              n[0],
              " / ",
              e[0],
              z.jsx("div", {
                children: e.map((s, a) =>
                  z.jsx(z.Fragment, {
                    children:
                      a !== 0 && e[a] !== 0
                        ? z.jsxs("div", {
                            className: "tone-score",
                            children: ["Tone ", a, ": ", n[a], " / ", s],
                          })
                        : z.jsx(z.Fragment, {}),
                  })
                ),
              }),
            ],
          }),
          z.jsx("button", {
            className: "retry-button",
            onClick: () => r(0),
            children: "Retry",
          }),
        ],
      }),
      z.jsx("div", {
        className: "results-container",
        children: t.map((s) =>
          z.jsxs("div", {
            className: "result-card",
            children: [
              z.jsx("h1", { className: "results-honzi", children: s.honzi }),
              z.jsx("h1", {
                className: "translucent-box",
                children: s.romanization,
              }),
              z.jsx("h1", {
                className: "translucent-box",
                children: s.correct ? "Correct" : "Incorrect",
              }),
            ],
          })
        ),
      }),
    ],
  });
}
function Em({ destination: n, title: e, resetTraining: t }) {
  return z.jsx(rl, { onClick: t, className: "navbutton", to: n, children: e });
}
function $c({ language: n, setLanguage: e, testState: t, setTestState: r }) {
  const { isAuthenticated: s } = gi(),
    a = (c) => {
      e(c.target.value);
    },
    u = () => {
      r(0);
    };
  return z.jsxs("div", {
    className: "navbar-container",
    children: [
      t == 0 &&
        z.jsxs("select", {
          className: "language-dropdown",
          value: n,
          onChange: a,
          children: [
            z.jsx("option", {
              className: "language-dropdown-option",
              value: "cmn",
              children: "Mandarin",
            }),
            z.jsx("option", {
              className: "language-dropdown-option",
              value: "yue",
              children: "Cantonese",
            }),
          ],
        }),
      z.jsx(Em, {
        resetTraining: u,
        destination: "/training",
        title: "Training",
      }),
      s &&
        z.jsx(Em, {
          resetTraining: u,
          destination: "/profile",
          title: "Profile",
        }),
      !s && z.jsx(pd, { type: "navbutton" }),
    ],
  });
}
function Nk({ language: n, setLanguage: e, testState: t, setTestState: r }) {
  const s = { cmn: [1, 2, 3, 4], yue: [1, 2, 3, 4, 5, 6] },
    [a, u] = D.useState([]),
    [c, f] = D.useState(s[n]),
    [h, m] = D.useState([]),
    [y, w] = D.useState(0),
    [v, x] = D.useState([]),
    [b, k] = D.useState(10);
  return (
    D.useEffect(() => {
      f(s[n]);
    }, [n]),
    z.jsxs(z.Fragment, {
      children: [
        z.jsx($c, {
          language: n,
          setLanguage: e,
          testState: t,
          setTestState: r,
        }),
        z.jsxs("div", {
          className: "training-page",
          children: [
            t == 0 &&
              z.jsx(Dk, {
                length: b,
                setLength: k,
                setScore: w,
                setTotal: x,
                setQuestionLog: m,
                testStateSetter: r,
                wordListSetter: u,
                filterList: c,
                setFilterList: f,
                setLanguage: e,
                language: n,
              }),
            t == 1 &&
              z.jsx(Lk, {
                length: b,
                score: y,
                setScore: w,
                total: v,
                setTotal: x,
                testStateSetter: r,
                words: a,
                tones: c,
                language: n,
                questionLog: h,
                setQuestionLog: m,
              }),
            t == 2 &&
              z.jsx(Ik, {
                score: y,
                total: v,
                questionLog: h,
                testStateSetter: r,
              }),
          ],
        }),
      ],
    })
  );
}
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */ function Qs(n) {
  return (n + 0.5) | 0;
}
const nr = (n, e, t) => Math.max(Math.min(n, t), e);
function Ss(n) {
  return nr(Qs(n * 2.55), 0, 255);
}
function rr(n) {
  return nr(Qs(n * 255), 0, 255);
}
function Mn(n) {
  return nr(Qs(n / 2.55) / 100, 0, 1);
}
function Cm(n) {
  return nr(Qs(n * 100), 0, 100);
}
const jt = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  Vc = [..."0123456789ABCDEF"],
  zk = (n) => Vc[n & 15],
  Fk = (n) => Vc[(n & 240) >> 4] + Vc[n & 15],
  ga = (n) => (n & 240) >> 4 === (n & 15),
  Ak = (n) => ga(n.r) && ga(n.g) && ga(n.b) && ga(n.a);
function jk(n) {
  var e = n.length,
    t;
  return (
    n[0] === "#" &&
      (e === 4 || e === 5
        ? (t = {
            r: 255 & (jt[n[1]] * 17),
            g: 255 & (jt[n[2]] * 17),
            b: 255 & (jt[n[3]] * 17),
            a: e === 5 ? jt[n[4]] * 17 : 255,
          })
        : (e === 7 || e === 9) &&
          (t = {
            r: (jt[n[1]] << 4) | jt[n[2]],
            g: (jt[n[3]] << 4) | jt[n[4]],
            b: (jt[n[5]] << 4) | jt[n[6]],
            a: e === 9 ? (jt[n[7]] << 4) | jt[n[8]] : 255,
          })),
    t
  );
}
const Wk = (n, e) => (n < 255 ? e(n) : "");
function Hk(n) {
  var e = Ak(n) ? zk : Fk;
  return n ? "#" + e(n.r) + e(n.g) + e(n.b) + Wk(n.a, e) : void 0;
}
const Bk =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Ay(n, e, t) {
  const r = e * Math.min(t, 1 - t),
    s = (a, u = (a + n / 30) % 12) =>
      t - r * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  return [s(0), s(8), s(4)];
}
function Uk(n, e, t) {
  const r = (s, a = (s + n / 60) % 6) =>
    t - t * e * Math.max(Math.min(a, 4 - a, 1), 0);
  return [r(5), r(3), r(1)];
}
function $k(n, e, t) {
  const r = Ay(n, 1, 0.5);
  let s;
  for (e + t > 1 && ((s = 1 / (e + t)), (e *= s), (t *= s)), s = 0; s < 3; s++)
    (r[s] *= 1 - e - t), (r[s] += e);
  return r;
}
function Vk(n, e, t, r, s) {
  return n === s
    ? (e - t) / r + (e < t ? 6 : 0)
    : e === s
    ? (t - n) / r + 2
    : (n - e) / r + 4;
}
function Sd(n) {
  const t = n.r / 255,
    r = n.g / 255,
    s = n.b / 255,
    a = Math.max(t, r, s),
    u = Math.min(t, r, s),
    c = (a + u) / 2;
  let f, h, m;
  return (
    a !== u &&
      ((m = a - u),
      (h = c > 0.5 ? m / (2 - a - u) : m / (a + u)),
      (f = Vk(t, r, s, m, a)),
      (f = f * 60 + 0.5)),
    [f | 0, h || 0, c]
  );
}
function Ed(n, e, t, r) {
  return (Array.isArray(e) ? n(e[0], e[1], e[2]) : n(e, t, r)).map(rr);
}
function Cd(n, e, t) {
  return Ed(Ay, n, e, t);
}
function Yk(n, e, t) {
  return Ed($k, n, e, t);
}
function Kk(n, e, t) {
  return Ed(Uk, n, e, t);
}
function jy(n) {
  return ((n % 360) + 360) % 360;
}
function Xk(n) {
  const e = Bk.exec(n);
  let t = 255,
    r;
  if (!e) return;
  e[5] !== r && (t = e[6] ? Ss(+e[5]) : rr(+e[5]));
  const s = jy(+e[2]),
    a = +e[3] / 100,
    u = +e[4] / 100;
  return (
    e[1] === "hwb"
      ? (r = Yk(s, a, u))
      : e[1] === "hsv"
      ? (r = Kk(s, a, u))
      : (r = Cd(s, a, u)),
    { r: r[0], g: r[1], b: r[2], a: t }
  );
}
function qk(n, e) {
  var t = Sd(n);
  (t[0] = jy(t[0] + e)), (t = Cd(t)), (n.r = t[0]), (n.g = t[1]), (n.b = t[2]);
}
function Gk(n) {
  if (!n) return;
  const e = Sd(n),
    t = e[0],
    r = Cm(e[1]),
    s = Cm(e[2]);
  return n.a < 255
    ? `hsla(${t}, ${r}%, ${s}%, ${Mn(n.a)})`
    : `hsl(${t}, ${r}%, ${s}%)`;
}
const Pm = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  Tm = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function Qk() {
  const n = {},
    e = Object.keys(Tm),
    t = Object.keys(Pm);
  let r, s, a, u, c;
  for (r = 0; r < e.length; r++) {
    for (u = c = e[r], s = 0; s < t.length; s++)
      (a = t[s]), (c = c.replace(a, Pm[a]));
    (a = parseInt(Tm[u], 16)),
      (n[c] = [(a >> 16) & 255, (a >> 8) & 255, a & 255]);
  }
  return n;
}
let ya;
function Zk(n) {
  ya || ((ya = Qk()), (ya.transparent = [0, 0, 0, 0]));
  const e = ya[n.toLowerCase()];
  return e && { r: e[0], g: e[1], b: e[2], a: e.length === 4 ? e[3] : 255 };
}
const Jk =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function eb(n) {
  const e = Jk.exec(n);
  let t = 255,
    r,
    s,
    a;
  if (e) {
    if (e[7] !== r) {
      const u = +e[7];
      t = e[8] ? Ss(u) : nr(u * 255, 0, 255);
    }
    return (
      (r = +e[1]),
      (s = +e[3]),
      (a = +e[5]),
      (r = 255 & (e[2] ? Ss(r) : nr(r, 0, 255))),
      (s = 255 & (e[4] ? Ss(s) : nr(s, 0, 255))),
      (a = 255 & (e[6] ? Ss(a) : nr(a, 0, 255))),
      { r, g: s, b: a, a: t }
    );
  }
}
function tb(n) {
  return (
    n &&
    (n.a < 255
      ? `rgba(${n.r}, ${n.g}, ${n.b}, ${Mn(n.a)})`
      : `rgb(${n.r}, ${n.g}, ${n.b})`)
  );
}
const bc = (n) =>
    n <= 0.0031308 ? n * 12.92 : Math.pow(n, 1 / 2.4) * 1.055 - 0.055,
  fi = (n) => (n <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4));
function nb(n, e, t) {
  const r = fi(Mn(n.r)),
    s = fi(Mn(n.g)),
    a = fi(Mn(n.b));
  return {
    r: rr(bc(r + t * (fi(Mn(e.r)) - r))),
    g: rr(bc(s + t * (fi(Mn(e.g)) - s))),
    b: rr(bc(a + t * (fi(Mn(e.b)) - a))),
    a: n.a + t * (e.a - n.a),
  };
}
function wa(n, e, t) {
  if (n) {
    let r = Sd(n);
    (r[e] = Math.max(0, Math.min(r[e] + r[e] * t, e === 0 ? 360 : 1))),
      (r = Cd(r)),
      (n.r = r[0]),
      (n.g = r[1]),
      (n.b = r[2]);
  }
}
function Wy(n, e) {
  return n && Object.assign(e || {}, n);
}
function Om(n) {
  var e = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(n)
      ? n.length >= 3 &&
        ((e = { r: n[0], g: n[1], b: n[2], a: 255 }),
        n.length > 3 && (e.a = rr(n[3])))
      : ((e = Wy(n, { r: 0, g: 0, b: 0, a: 1 })), (e.a = rr(e.a))),
    e
  );
}
function rb(n) {
  return n.charAt(0) === "r" ? eb(n) : Xk(n);
}
class js {
  constructor(e) {
    if (e instanceof js) return e;
    const t = typeof e;
    let r;
    t === "object"
      ? (r = Om(e))
      : t === "string" && (r = jk(e) || Zk(e) || rb(e)),
      (this._rgb = r),
      (this._valid = !!r);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var e = Wy(this._rgb);
    return e && (e.a = Mn(e.a)), e;
  }
  set rgb(e) {
    this._rgb = Om(e);
  }
  rgbString() {
    return this._valid ? tb(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Hk(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Gk(this._rgb) : void 0;
  }
  mix(e, t) {
    if (e) {
      const r = this.rgb,
        s = e.rgb;
      let a;
      const u = t === a ? 0.5 : t,
        c = 2 * u - 1,
        f = r.a - s.a,
        h = ((c * f === -1 ? c : (c + f) / (1 + c * f)) + 1) / 2;
      (a = 1 - h),
        (r.r = 255 & (h * r.r + a * s.r + 0.5)),
        (r.g = 255 & (h * r.g + a * s.g + 0.5)),
        (r.b = 255 & (h * r.b + a * s.b + 0.5)),
        (r.a = u * r.a + (1 - u) * s.a),
        (this.rgb = r);
    }
    return this;
  }
  interpolate(e, t) {
    return e && (this._rgb = nb(this._rgb, e._rgb, t)), this;
  }
  clone() {
    return new js(this.rgb);
  }
  alpha(e) {
    return (this._rgb.a = rr(e)), this;
  }
  clearer(e) {
    const t = this._rgb;
    return (t.a *= 1 - e), this;
  }
  greyscale() {
    const e = this._rgb,
      t = Qs(e.r * 0.3 + e.g * 0.59 + e.b * 0.11);
    return (e.r = e.g = e.b = t), this;
  }
  opaquer(e) {
    const t = this._rgb;
    return (t.a *= 1 + e), this;
  }
  negate() {
    const e = this._rgb;
    return (e.r = 255 - e.r), (e.g = 255 - e.g), (e.b = 255 - e.b), this;
  }
  lighten(e) {
    return wa(this._rgb, 2, e), this;
  }
  darken(e) {
    return wa(this._rgb, 2, -e), this;
  }
  saturate(e) {
    return wa(this._rgb, 1, e), this;
  }
  desaturate(e) {
    return wa(this._rgb, 1, -e), this;
  }
  rotate(e) {
    return qk(this._rgb, e), this;
  }
}
/*!
 * Chart.js v4.4.7
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ function Pn() {}
const ib = (() => {
  let n = 0;
  return () => n++;
})();
function Ue(n) {
  return n == null;
}
function it(n) {
  if (Array.isArray && Array.isArray(n)) return !0;
  const e = Object.prototype.toString.call(n);
  return e.slice(0, 7) === "[object" && e.slice(-6) === "Array]";
}
function be(n) {
  return n !== null && Object.prototype.toString.call(n) === "[object Object]";
}
function Bt(n) {
  return (typeof n == "number" || n instanceof Number) && isFinite(+n);
}
function an(n, e) {
  return Bt(n) ? n : e;
}
function xe(n, e) {
  return typeof n > "u" ? e : n;
}
const sb = (n, e) =>
  typeof n == "string" && n.endsWith("%") ? (parseFloat(n) / 100) * e : +n;
function Ie(n, e, t) {
  if (n && typeof n.call == "function") return n.apply(t, e);
}
function Oe(n, e, t, r) {
  let s, a, u;
  if (it(n)) for (a = n.length, s = 0; s < a; s++) e.call(t, n[s], s);
  else if (be(n))
    for (u = Object.keys(n), a = u.length, s = 0; s < a; s++)
      e.call(t, n[u[s]], u[s]);
}
function Va(n, e) {
  let t, r, s, a;
  if (!n || !e || n.length !== e.length) return !1;
  for (t = 0, r = n.length; t < r; ++t)
    if (
      ((s = n[t]),
      (a = e[t]),
      s.datasetIndex !== a.datasetIndex || s.index !== a.index)
    )
      return !1;
  return !0;
}
function Ya(n) {
  if (it(n)) return n.map(Ya);
  if (be(n)) {
    const e = Object.create(null),
      t = Object.keys(n),
      r = t.length;
    let s = 0;
    for (; s < r; ++s) e[t[s]] = Ya(n[t[s]]);
    return e;
  }
  return n;
}
function Hy(n) {
  return ["__proto__", "prototype", "constructor"].indexOf(n) === -1;
}
function ob(n, e, t, r) {
  if (!Hy(n)) return;
  const s = e[n],
    a = t[n];
  be(s) && be(a) ? Ws(s, a, r) : (e[n] = Ya(a));
}
function Ws(n, e, t) {
  const r = it(e) ? e : [e],
    s = r.length;
  if (!be(n)) return n;
  t = t || {};
  const a = t.merger || ob;
  let u;
  for (let c = 0; c < s; ++c) {
    if (((u = r[c]), !be(u))) continue;
    const f = Object.keys(u);
    for (let h = 0, m = f.length; h < m; ++h) a(f[h], n, u, t);
  }
  return n;
}
function Os(n, e) {
  return Ws(n, e, { merger: ab });
}
function ab(n, e, t) {
  if (!Hy(n)) return;
  const r = e[n],
    s = t[n];
  be(r) && be(s)
    ? Os(r, s)
    : Object.prototype.hasOwnProperty.call(e, n) || (e[n] = Ya(s));
}
const Mm = { "": (n) => n, x: (n) => n.x, y: (n) => n.y };
function lb(n) {
  const e = n.split("."),
    t = [];
  let r = "";
  for (const s of e)
    (r += s),
      r.endsWith("\\") ? (r = r.slice(0, -1) + ".") : (t.push(r), (r = ""));
  return t;
}
function ub(n) {
  const e = lb(n);
  return (t) => {
    for (const r of e) {
      if (r === "") break;
      t = t && t[r];
    }
    return t;
  };
}
function Ka(n, e) {
  return (Mm[e] || (Mm[e] = ub(e)))(n);
}
function Pd(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
const Xa = (n) => typeof n < "u",
  sr = (n) => typeof n == "function",
  Rm = (n, e) => {
    if (n.size !== e.size) return !1;
    for (const t of n) if (!e.has(t)) return !1;
    return !0;
  };
function cb(n) {
  return n.type === "mouseup" || n.type === "click" || n.type === "contextmenu";
}
const st = Math.PI,
  pn = 2 * st,
  db = pn + st,
  qa = Number.POSITIVE_INFINITY,
  fb = st / 180,
  Qt = st / 2,
  vr = st / 4,
  Dm = (st * 2) / 3,
  Yc = Math.log10,
  yi = Math.sign;
function Ms(n, e, t) {
  return Math.abs(n - e) < t;
}
function Lm(n) {
  const e = Math.round(n);
  n = Ms(n, e, n / 1e3) ? e : n;
  const t = Math.pow(10, Math.floor(Yc(n))),
    r = n / t;
  return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * t;
}
function hb(n) {
  const e = [],
    t = Math.sqrt(n);
  let r;
  for (r = 1; r < t; r++) n % r === 0 && (e.push(r), e.push(n / r));
  return t === (t | 0) && e.push(t), e.sort((s, a) => s - a).pop(), e;
}
function Hs(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function pb(n, e) {
  const t = Math.round(n);
  return t - e <= n && t + e >= n;
}
function mb(n, e, t) {
  let r, s, a;
  for (r = 0, s = n.length; r < s; r++)
    (a = n[r][t]),
      isNaN(a) || ((e.min = Math.min(e.min, a)), (e.max = Math.max(e.max, a)));
}
function Or(n) {
  return n * (st / 180);
}
function gb(n) {
  return n * (180 / st);
}
function Im(n) {
  if (!Bt(n)) return;
  let e = 1,
    t = 0;
  for (; Math.round(n * e) / e !== n; ) (e *= 10), t++;
  return t;
}
function yb(n, e) {
  const t = e.x - n.x,
    r = e.y - n.y,
    s = Math.sqrt(t * t + r * r);
  let a = Math.atan2(r, t);
  return a < -0.5 * st && (a += pn), { angle: a, distance: s };
}
function Kc(n, e) {
  return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2));
}
function wb(n, e) {
  return ((n - e + db) % pn) - st;
}
function tr(n) {
  return ((n % pn) + pn) % pn;
}
function By(n, e, t, r) {
  const s = tr(n),
    a = tr(e),
    u = tr(t),
    c = tr(a - s),
    f = tr(u - s),
    h = tr(s - a),
    m = tr(s - u);
  return s === a || s === u || (r && a === u) || (c > f && h < m);
}
function Wt(n, e, t) {
  return Math.max(e, Math.min(t, n));
}
function vb(n) {
  return Wt(n, -32768, 32767);
}
function Es(n, e, t, r = 1e-6) {
  return n >= Math.min(e, t) - r && n <= Math.max(e, t) + r;
}
function Td(n, e, t) {
  t = t || ((u) => n[u] < e);
  let r = n.length - 1,
    s = 0,
    a;
  for (; r - s > 1; ) (a = (s + r) >> 1), t(a) ? (s = a) : (r = a);
  return { lo: s, hi: r };
}
const Mr = (n, e, t, r) =>
    Td(
      n,
      t,
      r
        ? (s) => {
            const a = n[s][e];
            return a < t || (a === t && n[s + 1][e] === t);
          }
        : (s) => n[s][e] < t
    ),
  xb = (n, e, t) => Td(n, t, (r) => n[r][e] >= t);
function _b(n, e, t) {
  let r = 0,
    s = n.length;
  for (; r < s && n[r] < e; ) r++;
  for (; s > r && n[s - 1] > t; ) s--;
  return r > 0 || s < n.length ? n.slice(r, s) : n;
}
const Uy = ["push", "pop", "shift", "splice", "unshift"];
function kb(n, e) {
  if (n._chartjs) {
    n._chartjs.listeners.push(e);
    return;
  }
  Object.defineProperty(n, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [e] },
  }),
    Uy.forEach((t) => {
      const r = "_onData" + Pd(t),
        s = n[t];
      Object.defineProperty(n, t, {
        configurable: !0,
        enumerable: !1,
        value(...a) {
          const u = s.apply(this, a);
          return (
            n._chartjs.listeners.forEach((c) => {
              typeof c[r] == "function" && c[r](...a);
            }),
            u
          );
        },
      });
    });
}
function Nm(n, e) {
  const t = n._chartjs;
  if (!t) return;
  const r = t.listeners,
    s = r.indexOf(e);
  s !== -1 && r.splice(s, 1),
    !(r.length > 0) &&
      (Uy.forEach((a) => {
        delete n[a];
      }),
      delete n._chartjs);
}
function bb(n) {
  const e = new Set(n);
  return e.size === n.length ? n : Array.from(e);
}
const $y = (function () {
  return typeof window > "u"
    ? function (n) {
        return n();
      }
    : window.requestAnimationFrame;
})();
function Vy(n, e) {
  let t = [],
    r = !1;
  return function (...s) {
    (t = s),
      r ||
        ((r = !0),
        $y.call(window, () => {
          (r = !1), n.apply(e, t);
        }));
  };
}
function Sb(n, e) {
  let t;
  return function (...r) {
    return (
      e ? (clearTimeout(t), (t = setTimeout(n, e, r))) : n.apply(this, r), e
    );
  };
}
const Od = (n) => (n === "start" ? "left" : n === "end" ? "right" : "center"),
  ft = (n, e, t) => (n === "start" ? e : n === "end" ? t : (e + t) / 2),
  Eb = (n, e, t, r) =>
    n === (r ? "left" : "right") ? t : n === "center" ? (e + t) / 2 : e;
function Cb(n, e, t) {
  const r = e.length;
  let s = 0,
    a = r;
  if (n._sorted) {
    const { iScale: u, _parsed: c } = n,
      f = u.axis,
      { min: h, max: m, minDefined: y, maxDefined: w } = u.getUserBounds();
    y &&
      (s = Wt(
        Math.min(Mr(c, f, h).lo, t ? r : Mr(e, f, u.getPixelForValue(h)).lo),
        0,
        r - 1
      )),
      w
        ? (a =
            Wt(
              Math.max(
                Mr(c, u.axis, m, !0).hi + 1,
                t ? 0 : Mr(e, f, u.getPixelForValue(m), !0).hi + 1
              ),
              s,
              r
            ) - s)
        : (a = r - s);
  }
  return { start: s, count: a };
}
function Pb(n) {
  const { xScale: e, yScale: t, _scaleRanges: r } = n,
    s = { xmin: e.min, xmax: e.max, ymin: t.min, ymax: t.max };
  if (!r) return (n._scaleRanges = s), !0;
  const a =
    r.xmin !== e.min ||
    r.xmax !== e.max ||
    r.ymin !== t.min ||
    r.ymax !== t.max;
  return Object.assign(r, s), a;
}
const va = (n) => n === 0 || n === 1,
  zm = (n, e, t) =>
    -(Math.pow(2, 10 * (n -= 1)) * Math.sin(((n - e) * pn) / t)),
  Fm = (n, e, t) => Math.pow(2, -10 * n) * Math.sin(((n - e) * pn) / t) + 1,
  Rs = {
    linear: (n) => n,
    easeInQuad: (n) => n * n,
    easeOutQuad: (n) => -n * (n - 2),
    easeInOutQuad: (n) =>
      (n /= 0.5) < 1 ? 0.5 * n * n : -0.5 * (--n * (n - 2) - 1),
    easeInCubic: (n) => n * n * n,
    easeOutCubic: (n) => (n -= 1) * n * n + 1,
    easeInOutCubic: (n) =>
      (n /= 0.5) < 1 ? 0.5 * n * n * n : 0.5 * ((n -= 2) * n * n + 2),
    easeInQuart: (n) => n * n * n * n,
    easeOutQuart: (n) => -((n -= 1) * n * n * n - 1),
    easeInOutQuart: (n) =>
      (n /= 0.5) < 1 ? 0.5 * n * n * n * n : -0.5 * ((n -= 2) * n * n * n - 2),
    easeInQuint: (n) => n * n * n * n * n,
    easeOutQuint: (n) => (n -= 1) * n * n * n * n + 1,
    easeInOutQuint: (n) =>
      (n /= 0.5) < 1
        ? 0.5 * n * n * n * n * n
        : 0.5 * ((n -= 2) * n * n * n * n + 2),
    easeInSine: (n) => -Math.cos(n * Qt) + 1,
    easeOutSine: (n) => Math.sin(n * Qt),
    easeInOutSine: (n) => -0.5 * (Math.cos(st * n) - 1),
    easeInExpo: (n) => (n === 0 ? 0 : Math.pow(2, 10 * (n - 1))),
    easeOutExpo: (n) => (n === 1 ? 1 : -Math.pow(2, -10 * n) + 1),
    easeInOutExpo: (n) =>
      va(n)
        ? n
        : n < 0.5
        ? 0.5 * Math.pow(2, 10 * (n * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (n * 2 - 1)) + 2),
    easeInCirc: (n) => (n >= 1 ? n : -(Math.sqrt(1 - n * n) - 1)),
    easeOutCirc: (n) => Math.sqrt(1 - (n -= 1) * n),
    easeInOutCirc: (n) =>
      (n /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - n * n) - 1)
        : 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1),
    easeInElastic: (n) => (va(n) ? n : zm(n, 0.075, 0.3)),
    easeOutElastic: (n) => (va(n) ? n : Fm(n, 0.075, 0.3)),
    easeInOutElastic(n) {
      return va(n)
        ? n
        : n < 0.5
        ? 0.5 * zm(n * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * Fm(n * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(n) {
      return n * n * ((1.70158 + 1) * n - 1.70158);
    },
    easeOutBack(n) {
      return (n -= 1) * n * ((1.70158 + 1) * n + 1.70158) + 1;
    },
    easeInOutBack(n) {
      let e = 1.70158;
      return (n /= 0.5) < 1
        ? 0.5 * (n * n * (((e *= 1.525) + 1) * n - e))
        : 0.5 * ((n -= 2) * n * (((e *= 1.525) + 1) * n + e) + 2);
    },
    easeInBounce: (n) => 1 - Rs.easeOutBounce(1 - n),
    easeOutBounce(n) {
      return n < 1 / 2.75
        ? 7.5625 * n * n
        : n < 2 / 2.75
        ? 7.5625 * (n -= 1.5 / 2.75) * n + 0.75
        : n < 2.5 / 2.75
        ? 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375
        : 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375;
    },
    easeInOutBounce: (n) =>
      n < 0.5
        ? Rs.easeInBounce(n * 2) * 0.5
        : Rs.easeOutBounce(n * 2 - 1) * 0.5 + 0.5,
  };
function Md(n) {
  if (n && typeof n == "object") {
    const e = n.toString();
    return e === "[object CanvasPattern]" || e === "[object CanvasGradient]";
  }
  return !1;
}
function Am(n) {
  return Md(n) ? n : new js(n);
}
function Sc(n) {
  return Md(n) ? n : new js(n).saturate(0.5).darken(0.1).hexString();
}
const Tb = ["x", "y", "borderWidth", "radius", "tension"],
  Ob = ["color", "borderColor", "backgroundColor"];
function Mb(n) {
  n.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    n.describe("animation", {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (e) =>
        e !== "onProgress" && e !== "onComplete" && e !== "fn",
    }),
    n.set("animations", {
      colors: { type: "color", properties: Ob },
      numbers: { type: "number", properties: Tb },
    }),
    n.describe("animations", { _fallback: "animation" }),
    n.set("transitions", {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: "transparent" },
          visible: { type: "boolean", duration: 0 },
        },
      },
      hide: {
        animations: {
          colors: { to: "transparent" },
          visible: { type: "boolean", easing: "linear", fn: (e) => e | 0 },
        },
      },
    });
}
function Rb(n) {
  n.set("layout", {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });
}
const jm = new Map();
function Db(n, e) {
  e = e || {};
  const t = n + JSON.stringify(e);
  let r = jm.get(t);
  return r || ((r = new Intl.NumberFormat(n, e)), jm.set(t, r)), r;
}
function Yy(n, e, t) {
  return Db(e, t).format(n);
}
const Ky = {
  values(n) {
    return it(n) ? n : "" + n;
  },
  numeric(n, e, t) {
    if (n === 0) return "0";
    const r = this.chart.options.locale;
    let s,
      a = n;
    if (t.length > 1) {
      const h = Math.max(Math.abs(t[0].value), Math.abs(t[t.length - 1].value));
      (h < 1e-4 || h > 1e15) && (s = "scientific"), (a = Lb(n, t));
    }
    const u = Yc(Math.abs(a)),
      c = isNaN(u) ? 1 : Math.max(Math.min(-1 * Math.floor(u), 20), 0),
      f = { notation: s, minimumFractionDigits: c, maximumFractionDigits: c };
    return Object.assign(f, this.options.ticks.format), Yy(n, r, f);
  },
  logarithmic(n, e, t) {
    if (n === 0) return "0";
    const r = t[e].significand || n / Math.pow(10, Math.floor(Yc(n)));
    return [1, 2, 3, 5, 10, 15].includes(r) || e > 0.8 * t.length
      ? Ky.numeric.call(this, n, e, t)
      : "";
  },
};
function Lb(n, e) {
  let t = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
  return Math.abs(t) >= 1 && n !== Math.floor(n) && (t = n - Math.floor(n)), t;
}
var Xy = { formatters: Ky };
function Ib(n) {
  n.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (e, t) => t.lineWidth,
      tickColor: (e, t) => t.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Xy.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2,
    },
  }),
    n.route("scale.ticks", "color", "", "color"),
    n.route("scale.grid", "color", "", "borderColor"),
    n.route("scale.border", "color", "", "borderColor"),
    n.route("scale.title", "color", "", "color"),
    n.describe("scale", {
      _fallback: !1,
      _scriptable: (e) =>
        !e.startsWith("before") &&
        !e.startsWith("after") &&
        e !== "callback" &&
        e !== "parser",
      _indexable: (e) =>
        e !== "borderDash" && e !== "tickBorderDash" && e !== "dash",
    }),
    n.describe("scales", { _fallback: "scale" }),
    n.describe("scale.ticks", {
      _scriptable: (e) => e !== "backdropPadding" && e !== "callback",
      _indexable: (e) => e !== "backdropPadding",
    });
}
const Ir = Object.create(null),
  Xc = Object.create(null);
function Ds(n, e) {
  if (!e) return n;
  const t = e.split(".");
  for (let r = 0, s = t.length; r < s; ++r) {
    const a = t[r];
    n = n[a] || (n[a] = Object.create(null));
  }
  return n;
}
function Ec(n, e, t) {
  return typeof e == "string" ? Ws(Ds(n, e), t) : Ws(Ds(n, ""), e);
}
class Nb {
  constructor(e, t) {
    (this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (r) => r.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (r, s) => Sc(s.backgroundColor)),
      (this.hoverBorderColor = (r, s) => Sc(s.borderColor)),
      (this.hoverColor = (r, s) => Sc(s.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(e),
      this.apply(t);
  }
  set(e, t) {
    return Ec(this, e, t);
  }
  get(e) {
    return Ds(this, e);
  }
  describe(e, t) {
    return Ec(Xc, e, t);
  }
  override(e, t) {
    return Ec(Ir, e, t);
  }
  route(e, t, r, s) {
    const a = Ds(this, e),
      u = Ds(this, r),
      c = "_" + t;
    Object.defineProperties(a, {
      [c]: { value: a[t], writable: !0 },
      [t]: {
        enumerable: !0,
        get() {
          const f = this[c],
            h = u[s];
          return be(f) ? Object.assign({}, h, f) : xe(f, h);
        },
        set(f) {
          this[c] = f;
        },
      },
    });
  }
  apply(e) {
    e.forEach((t) => t(this));
  }
}
var Xe = new Nb(
  {
    _scriptable: (n) => !n.startsWith("on"),
    _indexable: (n) => n !== "events",
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [Mb, Rb, Ib]
);
function zb(n) {
  return !n || Ue(n.size) || Ue(n.family)
    ? null
    : (n.style ? n.style + " " : "") +
        (n.weight ? n.weight + " " : "") +
        n.size +
        "px " +
        n.family;
}
function Wm(n, e, t, r, s) {
  let a = e[s];
  return (
    a || ((a = e[s] = n.measureText(s).width), t.push(s)), a > r && (r = a), r
  );
}
function xr(n, e, t) {
  const r = n.currentDevicePixelRatio,
    s = t !== 0 ? Math.max(t / 2, 0.5) : 0;
  return Math.round((e - s) * r) / r + s;
}
function Hm(n, e) {
  (!e && !n) ||
    ((e = e || n.getContext("2d")),
    e.save(),
    e.resetTransform(),
    e.clearRect(0, 0, n.width, n.height),
    e.restore());
}
function qc(n, e, t, r) {
  qy(n, e, t, r, null);
}
function qy(n, e, t, r, s) {
  let a, u, c, f, h, m, y, w;
  const v = e.pointStyle,
    x = e.rotation,
    b = e.radius;
  let k = (x || 0) * fb;
  if (
    v &&
    typeof v == "object" &&
    ((a = v.toString()),
    a === "[object HTMLImageElement]" || a === "[object HTMLCanvasElement]")
  ) {
    n.save(),
      n.translate(t, r),
      n.rotate(k),
      n.drawImage(v, -v.width / 2, -v.height / 2, v.width, v.height),
      n.restore();
    return;
  }
  if (!(isNaN(b) || b <= 0)) {
    switch ((n.beginPath(), v)) {
      default:
        s ? n.ellipse(t, r, s / 2, b, 0, 0, pn) : n.arc(t, r, b, 0, pn),
          n.closePath();
        break;
      case "triangle":
        (m = s ? s / 2 : b),
          n.moveTo(t + Math.sin(k) * m, r - Math.cos(k) * b),
          (k += Dm),
          n.lineTo(t + Math.sin(k) * m, r - Math.cos(k) * b),
          (k += Dm),
          n.lineTo(t + Math.sin(k) * m, r - Math.cos(k) * b),
          n.closePath();
        break;
      case "rectRounded":
        (h = b * 0.516),
          (f = b - h),
          (u = Math.cos(k + vr) * f),
          (y = Math.cos(k + vr) * (s ? s / 2 - h : f)),
          (c = Math.sin(k + vr) * f),
          (w = Math.sin(k + vr) * (s ? s / 2 - h : f)),
          n.arc(t - y, r - c, h, k - st, k - Qt),
          n.arc(t + w, r - u, h, k - Qt, k),
          n.arc(t + y, r + c, h, k, k + Qt),
          n.arc(t - w, r + u, h, k + Qt, k + st),
          n.closePath();
        break;
      case "rect":
        if (!x) {
          (f = Math.SQRT1_2 * b),
            (m = s ? s / 2 : f),
            n.rect(t - m, r - f, 2 * m, 2 * f);
          break;
        }
        k += vr;
      case "rectRot":
        (y = Math.cos(k) * (s ? s / 2 : b)),
          (u = Math.cos(k) * b),
          (c = Math.sin(k) * b),
          (w = Math.sin(k) * (s ? s / 2 : b)),
          n.moveTo(t - y, r - c),
          n.lineTo(t + w, r - u),
          n.lineTo(t + y, r + c),
          n.lineTo(t - w, r + u),
          n.closePath();
        break;
      case "crossRot":
        k += vr;
      case "cross":
        (y = Math.cos(k) * (s ? s / 2 : b)),
          (u = Math.cos(k) * b),
          (c = Math.sin(k) * b),
          (w = Math.sin(k) * (s ? s / 2 : b)),
          n.moveTo(t - y, r - c),
          n.lineTo(t + y, r + c),
          n.moveTo(t + w, r - u),
          n.lineTo(t - w, r + u);
        break;
      case "star":
        (y = Math.cos(k) * (s ? s / 2 : b)),
          (u = Math.cos(k) * b),
          (c = Math.sin(k) * b),
          (w = Math.sin(k) * (s ? s / 2 : b)),
          n.moveTo(t - y, r - c),
          n.lineTo(t + y, r + c),
          n.moveTo(t + w, r - u),
          n.lineTo(t - w, r + u),
          (k += vr),
          (y = Math.cos(k) * (s ? s / 2 : b)),
          (u = Math.cos(k) * b),
          (c = Math.sin(k) * b),
          (w = Math.sin(k) * (s ? s / 2 : b)),
          n.moveTo(t - y, r - c),
          n.lineTo(t + y, r + c),
          n.moveTo(t + w, r - u),
          n.lineTo(t - w, r + u);
        break;
      case "line":
        (u = s ? s / 2 : Math.cos(k) * b),
          (c = Math.sin(k) * b),
          n.moveTo(t - u, r - c),
          n.lineTo(t + u, r + c);
        break;
      case "dash":
        n.moveTo(t, r),
          n.lineTo(t + Math.cos(k) * (s ? s / 2 : b), r + Math.sin(k) * b);
        break;
      case !1:
        n.closePath();
        break;
    }
    n.fill(), e.borderWidth > 0 && n.stroke();
  }
}
function Bs(n, e, t) {
  return (
    (t = t || 0.5),
    !e ||
      (n &&
        n.x > e.left - t &&
        n.x < e.right + t &&
        n.y > e.top - t &&
        n.y < e.bottom + t)
  );
}
function Rd(n, e) {
  n.save(),
    n.beginPath(),
    n.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
    n.clip();
}
function Dd(n) {
  n.restore();
}
function Fb(n, e, t, r, s) {
  if (!e) return n.lineTo(t.x, t.y);
  if (s === "middle") {
    const a = (e.x + t.x) / 2;
    n.lineTo(a, e.y), n.lineTo(a, t.y);
  } else (s === "after") != !!r ? n.lineTo(e.x, t.y) : n.lineTo(t.x, e.y);
  n.lineTo(t.x, t.y);
}
function Ab(n, e, t, r) {
  if (!e) return n.lineTo(t.x, t.y);
  n.bezierCurveTo(
    r ? e.cp1x : e.cp2x,
    r ? e.cp1y : e.cp2y,
    r ? t.cp2x : t.cp1x,
    r ? t.cp2y : t.cp1y,
    t.x,
    t.y
  );
}
function jb(n, e) {
  e.translation && n.translate(e.translation[0], e.translation[1]),
    Ue(e.rotation) || n.rotate(e.rotation),
    e.color && (n.fillStyle = e.color),
    e.textAlign && (n.textAlign = e.textAlign),
    e.textBaseline && (n.textBaseline = e.textBaseline);
}
function Wb(n, e, t, r, s) {
  if (s.strikethrough || s.underline) {
    const a = n.measureText(r),
      u = e - a.actualBoundingBoxLeft,
      c = e + a.actualBoundingBoxRight,
      f = t - a.actualBoundingBoxAscent,
      h = t + a.actualBoundingBoxDescent,
      m = s.strikethrough ? (f + h) / 2 : h;
    (n.strokeStyle = n.fillStyle),
      n.beginPath(),
      (n.lineWidth = s.decorationWidth || 2),
      n.moveTo(u, m),
      n.lineTo(c, m),
      n.stroke();
  }
}
function Hb(n, e) {
  const t = n.fillStyle;
  (n.fillStyle = e.color),
    n.fillRect(e.left, e.top, e.width, e.height),
    (n.fillStyle = t);
}
function Us(n, e, t, r, s, a = {}) {
  const u = it(e) ? e : [e],
    c = a.strokeWidth > 0 && a.strokeColor !== "";
  let f, h;
  for (n.save(), n.font = s.string, jb(n, a), f = 0; f < u.length; ++f)
    (h = u[f]),
      a.backdrop && Hb(n, a.backdrop),
      c &&
        (a.strokeColor && (n.strokeStyle = a.strokeColor),
        Ue(a.strokeWidth) || (n.lineWidth = a.strokeWidth),
        n.strokeText(h, t, r, a.maxWidth)),
      n.fillText(h, t, r, a.maxWidth),
      Wb(n, t, r, h, a),
      (r += Number(s.lineHeight));
  n.restore();
}
function Gc(n, e) {
  const { x: t, y: r, w: s, h: a, radius: u } = e;
  n.arc(t + u.topLeft, r + u.topLeft, u.topLeft, 1.5 * st, st, !0),
    n.lineTo(t, r + a - u.bottomLeft),
    n.arc(t + u.bottomLeft, r + a - u.bottomLeft, u.bottomLeft, st, Qt, !0),
    n.lineTo(t + s - u.bottomRight, r + a),
    n.arc(
      t + s - u.bottomRight,
      r + a - u.bottomRight,
      u.bottomRight,
      Qt,
      0,
      !0
    ),
    n.lineTo(t + s, r + u.topRight),
    n.arc(t + s - u.topRight, r + u.topRight, u.topRight, 0, -Qt, !0),
    n.lineTo(t + u.topLeft, r);
}
const Bb = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  Ub = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function $b(n, e) {
  const t = ("" + n).match(Bb);
  if (!t || t[1] === "normal") return e * 1.2;
  switch (((n = +t[2]), t[3])) {
    case "px":
      return n;
    case "%":
      n /= 100;
      break;
  }
  return e * n;
}
const Vb = (n) => +n || 0;
function Gy(n, e) {
  const t = {},
    r = be(e),
    s = r ? Object.keys(e) : e,
    a = be(n) ? (r ? (u) => xe(n[u], n[e[u]]) : (u) => n[u]) : () => n;
  for (const u of s) t[u] = Vb(a(u));
  return t;
}
function Yb(n) {
  return Gy(n, { top: "y", right: "x", bottom: "y", left: "x" });
}
function Ls(n) {
  return Gy(n, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function Ut(n) {
  const e = Yb(n);
  return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
}
function mt(n, e) {
  (n = n || {}), (e = e || Xe.font);
  let t = xe(n.size, e.size);
  typeof t == "string" && (t = parseInt(t, 10));
  let r = xe(n.style, e.style);
  r &&
    !("" + r).match(Ub) &&
    (console.warn('Invalid font style specified: "' + r + '"'), (r = void 0));
  const s = {
    family: xe(n.family, e.family),
    lineHeight: $b(xe(n.lineHeight, e.lineHeight), t),
    size: t,
    style: r,
    weight: xe(n.weight, e.weight),
    string: "",
  };
  return (s.string = zb(s)), s;
}
function xa(n, e, t, r) {
  let s, a, u;
  for (s = 0, a = n.length; s < a; ++s)
    if (((u = n[s]), u !== void 0 && u !== void 0)) return u;
}
function Kb(n, e, t) {
  const { min: r, max: s } = n,
    a = sb(e, (s - r) / 2),
    u = (c, f) => (t && c === 0 ? 0 : c + f);
  return { min: u(r, -Math.abs(a)), max: u(s, a) };
}
function zr(n, e) {
  return Object.assign(Object.create(n), e);
}
function Ld(n, e = [""], t, r, s = () => n[0]) {
  const a = t || n;
  typeof r > "u" && (r = e0("_fallback", n));
  const u = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: n,
    _rootScopes: a,
    _fallback: r,
    _getTarget: s,
    override: (c) => Ld([c, ...n], e, a, r),
  };
  return new Proxy(u, {
    deleteProperty(c, f) {
      return delete c[f], delete c._keys, delete n[0][f], !0;
    },
    get(c, f) {
      return Zy(c, f, () => tS(f, e, n, c));
    },
    getOwnPropertyDescriptor(c, f) {
      return Reflect.getOwnPropertyDescriptor(c._scopes[0], f);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(n[0]);
    },
    has(c, f) {
      return Um(c).includes(f);
    },
    ownKeys(c) {
      return Um(c);
    },
    set(c, f, h) {
      const m = c._storage || (c._storage = s());
      return (c[f] = m[f] = h), delete c._keys, !0;
    },
  });
}
function wi(n, e, t, r) {
  const s = {
    _cacheable: !1,
    _proxy: n,
    _context: e,
    _subProxy: t,
    _stack: new Set(),
    _descriptors: Qy(n, r),
    setContext: (a) => wi(n, a, t, r),
    override: (a) => wi(n.override(a), e, t, r),
  };
  return new Proxy(s, {
    deleteProperty(a, u) {
      return delete a[u], delete n[u], !0;
    },
    get(a, u, c) {
      return Zy(a, u, () => qb(a, u, c));
    },
    getOwnPropertyDescriptor(a, u) {
      return a._descriptors.allKeys
        ? Reflect.has(n, u)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(n, u);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(n);
    },
    has(a, u) {
      return Reflect.has(n, u);
    },
    ownKeys() {
      return Reflect.ownKeys(n);
    },
    set(a, u, c) {
      return (n[u] = c), delete a[u], !0;
    },
  });
}
function Qy(n, e = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: t = e.scriptable,
    _indexable: r = e.indexable,
    _allKeys: s = e.allKeys,
  } = n;
  return {
    allKeys: s,
    scriptable: t,
    indexable: r,
    isScriptable: sr(t) ? t : () => t,
    isIndexable: sr(r) ? r : () => r,
  };
}
const Xb = (n, e) => (n ? n + Pd(e) : e),
  Id = (n, e) =>
    be(e) &&
    n !== "adapters" &&
    (Object.getPrototypeOf(e) === null || e.constructor === Object);
function Zy(n, e, t) {
  if (Object.prototype.hasOwnProperty.call(n, e) || e === "constructor")
    return n[e];
  const r = t();
  return (n[e] = r), r;
}
function qb(n, e, t) {
  const { _proxy: r, _context: s, _subProxy: a, _descriptors: u } = n;
  let c = r[e];
  return (
    sr(c) && u.isScriptable(e) && (c = Gb(e, c, n, t)),
    it(c) && c.length && (c = Qb(e, c, n, u.isIndexable)),
    Id(e, c) && (c = wi(c, s, a && a[e], u)),
    c
  );
}
function Gb(n, e, t, r) {
  const { _proxy: s, _context: a, _subProxy: u, _stack: c } = t;
  if (c.has(n))
    throw new Error(
      "Recursion detected: " + Array.from(c).join("->") + "->" + n
    );
  c.add(n);
  let f = e(a, u || r);
  return c.delete(n), Id(n, f) && (f = Nd(s._scopes, s, n, f)), f;
}
function Qb(n, e, t, r) {
  const { _proxy: s, _context: a, _subProxy: u, _descriptors: c } = t;
  if (typeof a.index < "u" && r(n)) return e[a.index % e.length];
  if (be(e[0])) {
    const f = e,
      h = s._scopes.filter((m) => m !== f);
    e = [];
    for (const m of f) {
      const y = Nd(h, s, n, m);
      e.push(wi(y, a, u && u[n], c));
    }
  }
  return e;
}
function Jy(n, e, t) {
  return sr(n) ? n(e, t) : n;
}
const Zb = (n, e) => (n === !0 ? e : typeof n == "string" ? Ka(e, n) : void 0);
function Jb(n, e, t, r, s) {
  for (const a of e) {
    const u = Zb(t, a);
    if (u) {
      n.add(u);
      const c = Jy(u._fallback, t, s);
      if (typeof c < "u" && c !== t && c !== r) return c;
    } else if (u === !1 && typeof r < "u" && t !== r) return null;
  }
  return !1;
}
function Nd(n, e, t, r) {
  const s = e._rootScopes,
    a = Jy(e._fallback, t, r),
    u = [...n, ...s],
    c = new Set();
  c.add(r);
  let f = Bm(c, u, t, a || t, r);
  return f === null ||
    (typeof a < "u" && a !== t && ((f = Bm(c, u, a, f, r)), f === null))
    ? !1
    : Ld(Array.from(c), [""], s, a, () => eS(e, t, r));
}
function Bm(n, e, t, r, s) {
  for (; t; ) t = Jb(n, e, t, r, s);
  return t;
}
function eS(n, e, t) {
  const r = n._getTarget();
  e in r || (r[e] = {});
  const s = r[e];
  return it(s) && be(t) ? t : s || {};
}
function tS(n, e, t, r) {
  let s;
  for (const a of e)
    if (((s = e0(Xb(a, n), t)), typeof s < "u"))
      return Id(n, s) ? Nd(t, r, n, s) : s;
}
function e0(n, e) {
  for (const t of e) {
    if (!t) continue;
    const r = t[n];
    if (typeof r < "u") return r;
  }
}
function Um(n) {
  let e = n._keys;
  return e || (e = n._keys = nS(n._scopes)), e;
}
function nS(n) {
  const e = new Set();
  for (const t of n)
    for (const r of Object.keys(t).filter((s) => !s.startsWith("_"))) e.add(r);
  return Array.from(e);
}
const rS = Number.EPSILON || 1e-14,
  vi = (n, e) => e < n.length && !n[e].skip && n[e],
  t0 = (n) => (n === "x" ? "y" : "x");
function iS(n, e, t, r) {
  const s = n.skip ? e : n,
    a = e,
    u = t.skip ? e : t,
    c = Kc(a, s),
    f = Kc(u, a);
  let h = c / (c + f),
    m = f / (c + f);
  (h = isNaN(h) ? 0 : h), (m = isNaN(m) ? 0 : m);
  const y = r * h,
    w = r * m;
  return {
    previous: { x: a.x - y * (u.x - s.x), y: a.y - y * (u.y - s.y) },
    next: { x: a.x + w * (u.x - s.x), y: a.y + w * (u.y - s.y) },
  };
}
function sS(n, e, t) {
  const r = n.length;
  let s,
    a,
    u,
    c,
    f,
    h = vi(n, 0);
  for (let m = 0; m < r - 1; ++m)
    if (((f = h), (h = vi(n, m + 1)), !(!f || !h))) {
      if (Ms(e[m], 0, rS)) {
        t[m] = t[m + 1] = 0;
        continue;
      }
      (s = t[m] / e[m]),
        (a = t[m + 1] / e[m]),
        (c = Math.pow(s, 2) + Math.pow(a, 2)),
        !(c <= 9) &&
          ((u = 3 / Math.sqrt(c)),
          (t[m] = s * u * e[m]),
          (t[m + 1] = a * u * e[m]));
    }
}
function oS(n, e, t = "x") {
  const r = t0(t),
    s = n.length;
  let a,
    u,
    c,
    f = vi(n, 0);
  for (let h = 0; h < s; ++h) {
    if (((u = c), (c = f), (f = vi(n, h + 1)), !c)) continue;
    const m = c[t],
      y = c[r];
    u &&
      ((a = (m - u[t]) / 3),
      (c[`cp1${t}`] = m - a),
      (c[`cp1${r}`] = y - a * e[h])),
      f &&
        ((a = (f[t] - m) / 3),
        (c[`cp2${t}`] = m + a),
        (c[`cp2${r}`] = y + a * e[h]));
  }
}
function aS(n, e = "x") {
  const t = t0(e),
    r = n.length,
    s = Array(r).fill(0),
    a = Array(r);
  let u,
    c,
    f,
    h = vi(n, 0);
  for (u = 0; u < r; ++u)
    if (((c = f), (f = h), (h = vi(n, u + 1)), !!f)) {
      if (h) {
        const m = h[e] - f[e];
        s[u] = m !== 0 ? (h[t] - f[t]) / m : 0;
      }
      a[u] = c
        ? h
          ? yi(s[u - 1]) !== yi(s[u])
            ? 0
            : (s[u - 1] + s[u]) / 2
          : s[u - 1]
        : s[u];
    }
  sS(n, s, a), oS(n, a, e);
}
function _a(n, e, t) {
  return Math.max(Math.min(n, t), e);
}
function lS(n, e) {
  let t,
    r,
    s,
    a,
    u,
    c = Bs(n[0], e);
  for (t = 0, r = n.length; t < r; ++t)
    (u = a),
      (a = c),
      (c = t < r - 1 && Bs(n[t + 1], e)),
      a &&
        ((s = n[t]),
        u &&
          ((s.cp1x = _a(s.cp1x, e.left, e.right)),
          (s.cp1y = _a(s.cp1y, e.top, e.bottom))),
        c &&
          ((s.cp2x = _a(s.cp2x, e.left, e.right)),
          (s.cp2y = _a(s.cp2y, e.top, e.bottom))));
}
function uS(n, e, t, r, s) {
  let a, u, c, f;
  if (
    (e.spanGaps && (n = n.filter((h) => !h.skip)),
    e.cubicInterpolationMode === "monotone")
  )
    aS(n, s);
  else {
    let h = r ? n[n.length - 1] : n[0];
    for (a = 0, u = n.length; a < u; ++a)
      (c = n[a]),
        (f = iS(h, c, n[Math.min(a + 1, u - (r ? 0 : 1)) % u], e.tension)),
        (c.cp1x = f.previous.x),
        (c.cp1y = f.previous.y),
        (c.cp2x = f.next.x),
        (c.cp2y = f.next.y),
        (h = c);
  }
  e.capBezierPoints && lS(n, t);
}
function zd() {
  return typeof window < "u" && typeof document < "u";
}
function Fd(n) {
  let e = n.parentNode;
  return e && e.toString() === "[object ShadowRoot]" && (e = e.host), e;
}
function Ga(n, e, t) {
  let r;
  return (
    typeof n == "string"
      ? ((r = parseInt(n, 10)),
        n.indexOf("%") !== -1 && (r = (r / 100) * e.parentNode[t]))
      : (r = n),
    r
  );
}
const cl = (n) => n.ownerDocument.defaultView.getComputedStyle(n, null);
function cS(n, e) {
  return cl(n).getPropertyValue(e);
}
const dS = ["top", "right", "bottom", "left"];
function Dr(n, e, t) {
  const r = {};
  t = t ? "-" + t : "";
  for (let s = 0; s < 4; s++) {
    const a = dS[s];
    r[a] = parseFloat(n[e + "-" + a + t]) || 0;
  }
  return (r.width = r.left + r.right), (r.height = r.top + r.bottom), r;
}
const fS = (n, e, t) => (n > 0 || e > 0) && (!t || !t.shadowRoot);
function hS(n, e) {
  const t = n.touches,
    r = t && t.length ? t[0] : n,
    { offsetX: s, offsetY: a } = r;
  let u = !1,
    c,
    f;
  if (fS(s, a, n.target)) (c = s), (f = a);
  else {
    const h = e.getBoundingClientRect();
    (c = r.clientX - h.left), (f = r.clientY - h.top), (u = !0);
  }
  return { x: c, y: f, box: u };
}
function br(n, e) {
  if ("native" in n) return n;
  const { canvas: t, currentDevicePixelRatio: r } = e,
    s = cl(t),
    a = s.boxSizing === "border-box",
    u = Dr(s, "padding"),
    c = Dr(s, "border", "width"),
    { x: f, y: h, box: m } = hS(n, t),
    y = u.left + (m && c.left),
    w = u.top + (m && c.top);
  let { width: v, height: x } = e;
  return (
    a && ((v -= u.width + c.width), (x -= u.height + c.height)),
    {
      x: Math.round((((f - y) / v) * t.width) / r),
      y: Math.round((((h - w) / x) * t.height) / r),
    }
  );
}
function pS(n, e, t) {
  let r, s;
  if (e === void 0 || t === void 0) {
    const a = n && Fd(n);
    if (!a) (e = n.clientWidth), (t = n.clientHeight);
    else {
      const u = a.getBoundingClientRect(),
        c = cl(a),
        f = Dr(c, "border", "width"),
        h = Dr(c, "padding");
      (e = u.width - h.width - f.width),
        (t = u.height - h.height - f.height),
        (r = Ga(c.maxWidth, a, "clientWidth")),
        (s = Ga(c.maxHeight, a, "clientHeight"));
    }
  }
  return { width: e, height: t, maxWidth: r || qa, maxHeight: s || qa };
}
const ka = (n) => Math.round(n * 10) / 10;
function mS(n, e, t, r) {
  const s = cl(n),
    a = Dr(s, "margin"),
    u = Ga(s.maxWidth, n, "clientWidth") || qa,
    c = Ga(s.maxHeight, n, "clientHeight") || qa,
    f = pS(n, e, t);
  let { width: h, height: m } = f;
  if (s.boxSizing === "content-box") {
    const w = Dr(s, "border", "width"),
      v = Dr(s, "padding");
    (h -= v.width + w.width), (m -= v.height + w.height);
  }
  return (
    (h = Math.max(0, h - a.width)),
    (m = Math.max(0, r ? h / r : m - a.height)),
    (h = ka(Math.min(h, u, f.maxWidth))),
    (m = ka(Math.min(m, c, f.maxHeight))),
    h && !m && (m = ka(h / 2)),
    (e !== void 0 || t !== void 0) &&
      r &&
      f.height &&
      m > f.height &&
      ((m = f.height), (h = ka(Math.floor(m * r)))),
    { width: h, height: m }
  );
}
function $m(n, e, t) {
  const r = e || 1,
    s = Math.floor(n.height * r),
    a = Math.floor(n.width * r);
  (n.height = Math.floor(n.height)), (n.width = Math.floor(n.width));
  const u = n.canvas;
  return (
    u.style &&
      (t || (!u.style.height && !u.style.width)) &&
      ((u.style.height = `${n.height}px`), (u.style.width = `${n.width}px`)),
    n.currentDevicePixelRatio !== r || u.height !== s || u.width !== a
      ? ((n.currentDevicePixelRatio = r),
        (u.height = s),
        (u.width = a),
        n.ctx.setTransform(r, 0, 0, r, 0, 0),
        !0)
      : !1
  );
}
const gS = (function () {
  let n = !1;
  try {
    const e = {
      get passive() {
        return (n = !0), !1;
      },
    };
    zd() &&
      (window.addEventListener("test", null, e),
      window.removeEventListener("test", null, e));
  } catch {}
  return n;
})();
function Vm(n, e) {
  const t = cS(n, e),
    r = t && t.match(/^(\d+)(\.\d+)?px$/);
  return r ? +r[1] : void 0;
}
function Sr(n, e, t, r) {
  return { x: n.x + t * (e.x - n.x), y: n.y + t * (e.y - n.y) };
}
function yS(n, e, t, r) {
  return {
    x: n.x + t * (e.x - n.x),
    y:
      r === "middle"
        ? t < 0.5
          ? n.y
          : e.y
        : r === "after"
        ? t < 1
          ? n.y
          : e.y
        : t > 0
        ? e.y
        : n.y,
  };
}
function wS(n, e, t, r) {
  const s = { x: n.cp2x, y: n.cp2y },
    a = { x: e.cp1x, y: e.cp1y },
    u = Sr(n, s, t),
    c = Sr(s, a, t),
    f = Sr(a, e, t),
    h = Sr(u, c, t),
    m = Sr(c, f, t);
  return Sr(h, m, t);
}
const vS = function (n, e) {
    return {
      x(t) {
        return n + n + e - t;
      },
      setWidth(t) {
        e = t;
      },
      textAlign(t) {
        return t === "center" ? t : t === "right" ? "left" : "right";
      },
      xPlus(t, r) {
        return t - r;
      },
      leftForLtr(t, r) {
        return t - r;
      },
    };
  },
  xS = function () {
    return {
      x(n) {
        return n;
      },
      setWidth(n) {},
      textAlign(n) {
        return n;
      },
      xPlus(n, e) {
        return n + e;
      },
      leftForLtr(n, e) {
        return n;
      },
    };
  };
function mi(n, e, t) {
  return n ? vS(e, t) : xS();
}
function n0(n, e) {
  let t, r;
  (e === "ltr" || e === "rtl") &&
    ((t = n.canvas.style),
    (r = [t.getPropertyValue("direction"), t.getPropertyPriority("direction")]),
    t.setProperty("direction", e, "important"),
    (n.prevTextDirection = r));
}
function r0(n, e) {
  e !== void 0 &&
    (delete n.prevTextDirection,
    n.canvas.style.setProperty("direction", e[0], e[1]));
}
function i0(n) {
  return n === "angle"
    ? { between: By, compare: wb, normalize: tr }
    : { between: Es, compare: (e, t) => e - t, normalize: (e) => e };
}
function Ym({ start: n, end: e, count: t, loop: r, style: s }) {
  return {
    start: n % t,
    end: e % t,
    loop: r && (e - n + 1) % t === 0,
    style: s,
  };
}
function _S(n, e, t) {
  const { property: r, start: s, end: a } = t,
    { between: u, normalize: c } = i0(r),
    f = e.length;
  let { start: h, end: m, loop: y } = n,
    w,
    v;
  if (y) {
    for (h += f, m += f, w = 0, v = f; w < v && u(c(e[h % f][r]), s, a); ++w)
      h--, m--;
    (h %= f), (m %= f);
  }
  return m < h && (m += f), { start: h, end: m, loop: y, style: n.style };
}
function kS(n, e, t) {
  if (!t) return [n];
  const { property: r, start: s, end: a } = t,
    u = e.length,
    { compare: c, between: f, normalize: h } = i0(r),
    { start: m, end: y, loop: w, style: v } = _S(n, e, t),
    x = [];
  let b = !1,
    k = null,
    S,
    C,
    O;
  const R = () => f(s, O, S) && c(s, O) !== 0,
    A = () => c(a, S) === 0 || f(a, O, S),
    W = () => b || R(),
    H = () => !b || A();
  for (let N = m, B = m; N <= y; ++N)
    (C = e[N % u]),
      !C.skip &&
        ((S = h(C[r])),
        S !== O &&
          ((b = f(S, s, a)),
          k === null && W() && (k = c(S, s) === 0 ? N : B),
          k !== null &&
            H() &&
            (x.push(Ym({ start: k, end: N, loop: w, count: u, style: v })),
            (k = null)),
          (B = N),
          (O = S)));
  return (
    k !== null && x.push(Ym({ start: k, end: y, loop: w, count: u, style: v })),
    x
  );
}
function bS(n, e) {
  const t = [],
    r = n.segments;
  for (let s = 0; s < r.length; s++) {
    const a = kS(r[s], n.points, e);
    a.length && t.push(...a);
  }
  return t;
}
function SS(n, e, t, r) {
  let s = 0,
    a = e - 1;
  if (t && !r) for (; s < e && !n[s].skip; ) s++;
  for (; s < e && n[s].skip; ) s++;
  for (s %= e, t && (a += s); a > s && n[a % e].skip; ) a--;
  return (a %= e), { start: s, end: a };
}
function ES(n, e, t, r) {
  const s = n.length,
    a = [];
  let u = e,
    c = n[e],
    f;
  for (f = e + 1; f <= t; ++f) {
    const h = n[f % s];
    h.skip || h.stop
      ? c.skip ||
        ((r = !1),
        a.push({ start: e % s, end: (f - 1) % s, loop: r }),
        (e = u = h.stop ? f : null))
      : ((u = f), c.skip && (e = f)),
      (c = h);
  }
  return u !== null && a.push({ start: e % s, end: u % s, loop: r }), a;
}
function CS(n, e) {
  const t = n.points,
    r = n.options.spanGaps,
    s = t.length;
  if (!s) return [];
  const a = !!n._loop,
    { start: u, end: c } = SS(t, s, a, r);
  if (r === !0) return Km(n, [{ start: u, end: c, loop: a }], t, e);
  const f = c < u ? c + s : c,
    h = !!n._fullLoop && u === 0 && c === s - 1;
  return Km(n, ES(t, u, f, h), t, e);
}
function Km(n, e, t, r) {
  return !r || !r.setContext || !t ? e : PS(n, e, t, r);
}
function PS(n, e, t, r) {
  const s = n._chart.getContext(),
    a = Xm(n.options),
    {
      _datasetIndex: u,
      options: { spanGaps: c },
    } = n,
    f = t.length,
    h = [];
  let m = a,
    y = e[0].start,
    w = y;
  function v(x, b, k, S) {
    const C = c ? -1 : 1;
    if (x !== b) {
      for (x += f; t[x % f].skip; ) x -= C;
      for (; t[b % f].skip; ) b += C;
      x % f !== b % f &&
        (h.push({ start: x % f, end: b % f, loop: k, style: S }),
        (m = S),
        (y = b % f));
    }
  }
  for (const x of e) {
    y = c ? y : x.start;
    let b = t[y % f],
      k;
    for (w = y + 1; w <= x.end; w++) {
      const S = t[w % f];
      (k = Xm(
        r.setContext(
          zr(s, {
            type: "segment",
            p0: b,
            p1: S,
            p0DataIndex: (w - 1) % f,
            p1DataIndex: w % f,
            datasetIndex: u,
          })
        )
      )),
        TS(k, m) && v(y, w - 1, x.loop, m),
        (b = S),
        (m = k);
    }
    y < w - 1 && v(y, w - 1, x.loop, m);
  }
  return h;
}
function Xm(n) {
  return {
    backgroundColor: n.backgroundColor,
    borderCapStyle: n.borderCapStyle,
    borderDash: n.borderDash,
    borderDashOffset: n.borderDashOffset,
    borderJoinStyle: n.borderJoinStyle,
    borderWidth: n.borderWidth,
    borderColor: n.borderColor,
  };
}
function TS(n, e) {
  if (!e) return !1;
  const t = [],
    r = function (s, a) {
      return Md(a) ? (t.includes(a) || t.push(a), t.indexOf(a)) : a;
    };
  return JSON.stringify(n, r) !== JSON.stringify(e, r);
}
/*!
 * Chart.js v4.4.7
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ class OS {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(e, t, r, s) {
    const a = t.listeners[s],
      u = t.duration;
    a.forEach((c) =>
      c({
        chart: e,
        initial: t.initial,
        numSteps: u,
        currentStep: Math.min(r - t.start, u),
      })
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = $y.call(window, () => {
        this._update(),
          (this._request = null),
          this._running && this._refresh();
      })));
  }
  _update(e = Date.now()) {
    let t = 0;
    this._charts.forEach((r, s) => {
      if (!r.running || !r.items.length) return;
      const a = r.items;
      let u = a.length - 1,
        c = !1,
        f;
      for (; u >= 0; --u)
        (f = a[u]),
          f._active
            ? (f._total > r.duration && (r.duration = f._total),
              f.tick(e),
              (c = !0))
            : ((a[u] = a[a.length - 1]), a.pop());
      c && (s.draw(), this._notify(s, r, e, "progress")),
        a.length ||
          ((r.running = !1),
          this._notify(s, r, e, "complete"),
          (r.initial = !1)),
        (t += a.length);
    }),
      (this._lastDate = e),
      t === 0 && (this._running = !1);
  }
  _getAnims(e) {
    const t = this._charts;
    let r = t.get(e);
    return (
      r ||
        ((r = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        t.set(e, r)),
      r
    );
  }
  listen(e, t, r) {
    this._getAnims(e).listeners[t].push(r);
  }
  add(e, t) {
    !t || !t.length || this._getAnims(e).items.push(...t);
  }
  has(e) {
    return this._getAnims(e).items.length > 0;
  }
  start(e) {
    const t = this._charts.get(e);
    t &&
      ((t.running = !0),
      (t.start = Date.now()),
      (t.duration = t.items.reduce((r, s) => Math.max(r, s._duration), 0)),
      this._refresh());
  }
  running(e) {
    if (!this._running) return !1;
    const t = this._charts.get(e);
    return !(!t || !t.running || !t.items.length);
  }
  stop(e) {
    const t = this._charts.get(e);
    if (!t || !t.items.length) return;
    const r = t.items;
    let s = r.length - 1;
    for (; s >= 0; --s) r[s].cancel();
    (t.items = []), this._notify(e, t, Date.now(), "complete");
  }
  remove(e) {
    return this._charts.delete(e);
  }
}
var Tn = new OS();
const qm = "transparent",
  MS = {
    boolean(n, e, t) {
      return t > 0.5 ? e : n;
    },
    color(n, e, t) {
      const r = Am(n || qm),
        s = r.valid && Am(e || qm);
      return s && s.valid ? s.mix(r, t).hexString() : e;
    },
    number(n, e, t) {
      return n + (e - n) * t;
    },
  };
class RS {
  constructor(e, t, r, s) {
    const a = t[r];
    s = xa([e.to, s, a, e.from]);
    const u = xa([e.from, a, s]);
    (this._active = !0),
      (this._fn = e.fn || MS[e.type || typeof u]),
      (this._easing = Rs[e.easing] || Rs.linear),
      (this._start = Math.floor(Date.now() + (e.delay || 0))),
      (this._duration = this._total = Math.floor(e.duration)),
      (this._loop = !!e.loop),
      (this._target = t),
      (this._prop = r),
      (this._from = u),
      (this._to = s),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(e, t, r) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop],
        a = r - this._start,
        u = this._duration - a;
      (this._start = r),
        (this._duration = Math.floor(Math.max(u, e.duration))),
        (this._total += a),
        (this._loop = !!e.loop),
        (this._to = xa([e.to, t, s, e.from])),
        (this._from = xa([e.from, s, t]));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(e) {
    const t = e - this._start,
      r = this._duration,
      s = this._prop,
      a = this._from,
      u = this._loop,
      c = this._to;
    let f;
    if (((this._active = a !== c && (u || t < r)), !this._active)) {
      (this._target[s] = c), this._notify(!0);
      return;
    }
    if (t < 0) {
      this._target[s] = a;
      return;
    }
    (f = (t / r) % 2),
      (f = u && f > 1 ? 2 - f : f),
      (f = this._easing(Math.min(1, Math.max(0, f)))),
      (this._target[s] = this._fn(a, c, f));
  }
  wait() {
    const e = this._promises || (this._promises = []);
    return new Promise((t, r) => {
      e.push({ res: t, rej: r });
    });
  }
  _notify(e) {
    const t = e ? "res" : "rej",
      r = this._promises || [];
    for (let s = 0; s < r.length; s++) r[s][t]();
  }
}
class s0 {
  constructor(e, t) {
    (this._chart = e), (this._properties = new Map()), this.configure(t);
  }
  configure(e) {
    if (!be(e)) return;
    const t = Object.keys(Xe.animation),
      r = this._properties;
    Object.getOwnPropertyNames(e).forEach((s) => {
      const a = e[s];
      if (!be(a)) return;
      const u = {};
      for (const c of t) u[c] = a[c];
      ((it(a.properties) && a.properties) || [s]).forEach((c) => {
        (c === s || !r.has(c)) && r.set(c, u);
      });
    });
  }
  _animateOptions(e, t) {
    const r = t.options,
      s = LS(e, r);
    if (!s) return [];
    const a = this._createAnimations(s, r);
    return (
      r.$shared &&
        DS(e.options.$animations, r).then(
          () => {
            e.options = r;
          },
          () => {}
        ),
      a
    );
  }
  _createAnimations(e, t) {
    const r = this._properties,
      s = [],
      a = e.$animations || (e.$animations = {}),
      u = Object.keys(t),
      c = Date.now();
    let f;
    for (f = u.length - 1; f >= 0; --f) {
      const h = u[f];
      if (h.charAt(0) === "$") continue;
      if (h === "options") {
        s.push(...this._animateOptions(e, t));
        continue;
      }
      const m = t[h];
      let y = a[h];
      const w = r.get(h);
      if (y)
        if (w && y.active()) {
          y.update(w, m, c);
          continue;
        } else y.cancel();
      if (!w || !w.duration) {
        e[h] = m;
        continue;
      }
      (a[h] = y = new RS(w, e, h, m)), s.push(y);
    }
    return s;
  }
  update(e, t) {
    if (this._properties.size === 0) {
      Object.assign(e, t);
      return;
    }
    const r = this._createAnimations(e, t);
    if (r.length) return Tn.add(this._chart, r), !0;
  }
}
function DS(n, e) {
  const t = [],
    r = Object.keys(e);
  for (let s = 0; s < r.length; s++) {
    const a = n[r[s]];
    a && a.active() && t.push(a.wait());
  }
  return Promise.all(t);
}
function LS(n, e) {
  if (!e) return;
  let t = n.options;
  if (!t) {
    n.options = e;
    return;
  }
  return (
    t.$shared &&
      (n.options = t = Object.assign({}, t, { $shared: !1, $animations: {} })),
    t
  );
}
function Gm(n, e) {
  const t = (n && n.options) || {},
    r = t.reverse,
    s = t.min === void 0 ? e : 0,
    a = t.max === void 0 ? e : 0;
  return { start: r ? a : s, end: r ? s : a };
}
function IS(n, e, t) {
  if (t === !1) return !1;
  const r = Gm(n, t),
    s = Gm(e, t);
  return { top: s.end, right: r.end, bottom: s.start, left: r.start };
}
function NS(n) {
  let e, t, r, s;
  return (
    be(n)
      ? ((e = n.top), (t = n.right), (r = n.bottom), (s = n.left))
      : (e = t = r = s = n),
    { top: e, right: t, bottom: r, left: s, disabled: n === !1 }
  );
}
function o0(n, e) {
  const t = [],
    r = n._getSortedDatasetMetas(e);
  let s, a;
  for (s = 0, a = r.length; s < a; ++s) t.push(r[s].index);
  return t;
}
function Qm(n, e, t, r = {}) {
  const s = n.keys,
    a = r.mode === "single";
  let u, c, f, h;
  if (e === null) return;
  let m = !1;
  for (u = 0, c = s.length; u < c; ++u) {
    if (((f = +s[u]), f === t)) {
      if (((m = !0), r.all)) continue;
      break;
    }
    (h = n.values[f]), Bt(h) && (a || e === 0 || yi(e) === yi(h)) && (e += h);
  }
  return !m && !r.all ? 0 : e;
}
function zS(n, e) {
  const { iScale: t, vScale: r } = e,
    s = t.axis === "x" ? "x" : "y",
    a = r.axis === "x" ? "x" : "y",
    u = Object.keys(n),
    c = new Array(u.length);
  let f, h, m;
  for (f = 0, h = u.length; f < h; ++f)
    (m = u[f]), (c[f] = { [s]: m, [a]: n[m] });
  return c;
}
function Cc(n, e) {
  const t = n && n.options.stacked;
  return t || (t === void 0 && e.stack !== void 0);
}
function FS(n, e, t) {
  return `${n.id}.${e.id}.${t.stack || t.type}`;
}
function AS(n) {
  const { min: e, max: t, minDefined: r, maxDefined: s } = n.getUserBounds();
  return {
    min: r ? e : Number.NEGATIVE_INFINITY,
    max: s ? t : Number.POSITIVE_INFINITY,
  };
}
function jS(n, e, t) {
  const r = n[e] || (n[e] = {});
  return r[t] || (r[t] = {});
}
function Zm(n, e, t, r) {
  for (const s of e.getMatchingVisibleMetas(r).reverse()) {
    const a = n[s.index];
    if ((t && a > 0) || (!t && a < 0)) return s.index;
  }
  return null;
}
function Jm(n, e) {
  const { chart: t, _cachedMeta: r } = n,
    s = t._stacks || (t._stacks = {}),
    { iScale: a, vScale: u, index: c } = r,
    f = a.axis,
    h = u.axis,
    m = FS(a, u, r),
    y = e.length;
  let w;
  for (let v = 0; v < y; ++v) {
    const x = e[v],
      { [f]: b, [h]: k } = x,
      S = x._stacks || (x._stacks = {});
    (w = S[h] = jS(s, m, b)),
      (w[c] = k),
      (w._top = Zm(w, u, !0, r.type)),
      (w._bottom = Zm(w, u, !1, r.type));
    const C = w._visualValues || (w._visualValues = {});
    C[c] = k;
  }
}
function Pc(n, e) {
  const t = n.scales;
  return Object.keys(t)
    .filter((r) => t[r].axis === e)
    .shift();
}
function WS(n, e) {
  return zr(n, {
    active: !1,
    dataset: void 0,
    datasetIndex: e,
    index: e,
    mode: "default",
    type: "dataset",
  });
}
function HS(n, e, t) {
  return zr(n, {
    active: !1,
    dataIndex: e,
    parsed: void 0,
    raw: void 0,
    element: t,
    index: e,
    mode: "default",
    type: "data",
  });
}
function gs(n, e) {
  const t = n.controller.index,
    r = n.vScale && n.vScale.axis;
  if (r) {
    e = e || n._parsed;
    for (const s of e) {
      const a = s._stacks;
      if (!a || a[r] === void 0 || a[r][t] === void 0) return;
      delete a[r][t],
        a[r]._visualValues !== void 0 &&
          a[r]._visualValues[t] !== void 0 &&
          delete a[r]._visualValues[t];
    }
  }
}
const Tc = (n) => n === "reset" || n === "none",
  eg = (n, e) => (e ? n : Object.assign({}, n)),
  BS = (n, e, t) =>
    n && !e.hidden && e._stacked && { keys: o0(t, !0), values: null };
class Is {
  constructor(e, t) {
    (this.chart = e),
      (this._ctx = e.ctx),
      (this.index = t),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize();
  }
  initialize() {
    const e = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (e._stacked = Cc(e.vScale, e)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled("filler") &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
        );
  }
  updateIndex(e) {
    this.index !== e && gs(this._cachedMeta), (this.index = e);
  }
  linkScales() {
    const e = this.chart,
      t = this._cachedMeta,
      r = this.getDataset(),
      s = (y, w, v, x) => (y === "x" ? w : y === "r" ? x : v),
      a = (t.xAxisID = xe(r.xAxisID, Pc(e, "x"))),
      u = (t.yAxisID = xe(r.yAxisID, Pc(e, "y"))),
      c = (t.rAxisID = xe(r.rAxisID, Pc(e, "r"))),
      f = t.indexAxis,
      h = (t.iAxisID = s(f, a, u, c)),
      m = (t.vAxisID = s(f, u, a, c));
    (t.xScale = this.getScaleForId(a)),
      (t.yScale = this.getScaleForId(u)),
      (t.rScale = this.getScaleForId(c)),
      (t.iScale = this.getScaleForId(h)),
      (t.vScale = this.getScaleForId(m));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(e) {
    return this.chart.scales[e];
  }
  _getOtherScale(e) {
    const t = this._cachedMeta;
    return e === t.iScale ? t.vScale : t.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const e = this._cachedMeta;
    this._data && Nm(this._data, this), e._stacked && gs(e);
  }
  _dataCheck() {
    const e = this.getDataset(),
      t = e.data || (e.data = []),
      r = this._data;
    if (be(t)) {
      const s = this._cachedMeta;
      this._data = zS(t, s);
    } else if (r !== t) {
      if (r) {
        Nm(r, this);
        const s = this._cachedMeta;
        gs(s), (s._parsed = []);
      }
      t && Object.isExtensible(t) && kb(t, this),
        (this._syncList = []),
        (this._data = t);
    }
  }
  addElements() {
    const e = this._cachedMeta;
    this._dataCheck(),
      this.datasetElementType && (e.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(e) {
    const t = this._cachedMeta,
      r = this.getDataset();
    let s = !1;
    this._dataCheck();
    const a = t._stacked;
    (t._stacked = Cc(t.vScale, t)),
      t.stack !== r.stack && ((s = !0), gs(t), (t.stack = r.stack)),
      this._resyncElements(e),
      (s || a !== t._stacked) &&
        (Jm(this, t._parsed), (t._stacked = Cc(t.vScale, t)));
  }
  configure() {
    const e = this.chart.config,
      t = e.datasetScopeKeys(this._type),
      r = e.getOptionScopes(this.getDataset(), t, !0);
    (this.options = e.createResolver(r, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(e, t) {
    const { _cachedMeta: r, _data: s } = this,
      { iScale: a, _stacked: u } = r,
      c = a.axis;
    let f = e === 0 && t === s.length ? !0 : r._sorted,
      h = e > 0 && r._parsed[e - 1],
      m,
      y,
      w;
    if (this._parsing === !1) (r._parsed = s), (r._sorted = !0), (w = s);
    else {
      it(s[e])
        ? (w = this.parseArrayData(r, s, e, t))
        : be(s[e])
        ? (w = this.parseObjectData(r, s, e, t))
        : (w = this.parsePrimitiveData(r, s, e, t));
      const v = () => y[c] === null || (h && y[c] < h[c]);
      for (m = 0; m < t; ++m)
        (r._parsed[m + e] = y = w[m]), f && (v() && (f = !1), (h = y));
      r._sorted = f;
    }
    u && Jm(this, w);
  }
  parsePrimitiveData(e, t, r, s) {
    const { iScale: a, vScale: u } = e,
      c = a.axis,
      f = u.axis,
      h = a.getLabels(),
      m = a === u,
      y = new Array(s);
    let w, v, x;
    for (w = 0, v = s; w < v; ++w)
      (x = w + r),
        (y[w] = { [c]: m || a.parse(h[x], x), [f]: u.parse(t[x], x) });
    return y;
  }
  parseArrayData(e, t, r, s) {
    const { xScale: a, yScale: u } = e,
      c = new Array(s);
    let f, h, m, y;
    for (f = 0, h = s; f < h; ++f)
      (m = f + r),
        (y = t[m]),
        (c[f] = { x: a.parse(y[0], m), y: u.parse(y[1], m) });
    return c;
  }
  parseObjectData(e, t, r, s) {
    const { xScale: a, yScale: u } = e,
      { xAxisKey: c = "x", yAxisKey: f = "y" } = this._parsing,
      h = new Array(s);
    let m, y, w, v;
    for (m = 0, y = s; m < y; ++m)
      (w = m + r),
        (v = t[w]),
        (h[m] = { x: a.parse(Ka(v, c), w), y: u.parse(Ka(v, f), w) });
    return h;
  }
  getParsed(e) {
    return this._cachedMeta._parsed[e];
  }
  getDataElement(e) {
    return this._cachedMeta.data[e];
  }
  applyStack(e, t, r) {
    const s = this.chart,
      a = this._cachedMeta,
      u = t[e.axis],
      c = { keys: o0(s, !0), values: t._stacks[e.axis]._visualValues };
    return Qm(c, u, a.index, { mode: r });
  }
  updateRangeFromParsed(e, t, r, s) {
    const a = r[t.axis];
    let u = a === null ? NaN : a;
    const c = s && r._stacks[t.axis];
    s && c && ((s.values = c), (u = Qm(s, a, this._cachedMeta.index))),
      (e.min = Math.min(e.min, u)),
      (e.max = Math.max(e.max, u));
  }
  getMinMax(e, t) {
    const r = this._cachedMeta,
      s = r._parsed,
      a = r._sorted && e === r.iScale,
      u = s.length,
      c = this._getOtherScale(e),
      f = BS(t, r, this.chart),
      h = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: m, max: y } = AS(c);
    let w, v;
    function x() {
      v = s[w];
      const b = v[c.axis];
      return !Bt(v[e.axis]) || m > b || y < b;
    }
    for (
      w = 0;
      w < u && !(!x() && (this.updateRangeFromParsed(h, e, v, f), a));
      ++w
    );
    if (a) {
      for (w = u - 1; w >= 0; --w)
        if (!x()) {
          this.updateRangeFromParsed(h, e, v, f);
          break;
        }
    }
    return h;
  }
  getAllParsedValues(e) {
    const t = this._cachedMeta._parsed,
      r = [];
    let s, a, u;
    for (s = 0, a = t.length; s < a; ++s)
      (u = t[s][e.axis]), Bt(u) && r.push(u);
    return r;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(e) {
    const t = this._cachedMeta,
      r = t.iScale,
      s = t.vScale,
      a = this.getParsed(e);
    return {
      label: r ? "" + r.getLabelForValue(a[r.axis]) : "",
      value: s ? "" + s.getLabelForValue(a[s.axis]) : "",
    };
  }
  _update(e) {
    const t = this._cachedMeta;
    this.update(e || "default"),
      (t._clip = NS(
        xe(this.options.clip, IS(t.xScale, t.yScale, this.getMaxOverflow()))
      ));
  }
  update(e) {}
  draw() {
    const e = this._ctx,
      t = this.chart,
      r = this._cachedMeta,
      s = r.data || [],
      a = t.chartArea,
      u = [],
      c = this._drawStart || 0,
      f = this._drawCount || s.length - c,
      h = this.options.drawActiveElementsOnTop;
    let m;
    for (r.dataset && r.dataset.draw(e, a, c, f), m = c; m < c + f; ++m) {
      const y = s[m];
      y.hidden || (y.active && h ? u.push(y) : y.draw(e, a));
    }
    for (m = 0; m < u.length; ++m) u[m].draw(e, a);
  }
  getStyle(e, t) {
    const r = t ? "active" : "default";
    return e === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(r)
      : this.resolveDataElementOptions(e || 0, r);
  }
  getContext(e, t, r) {
    const s = this.getDataset();
    let a;
    if (e >= 0 && e < this._cachedMeta.data.length) {
      const u = this._cachedMeta.data[e];
      (a = u.$context || (u.$context = HS(this.getContext(), e, u))),
        (a.parsed = this.getParsed(e)),
        (a.raw = s.data[e]),
        (a.index = a.dataIndex = e);
    } else
      (a =
        this.$context ||
        (this.$context = WS(this.chart.getContext(), this.index))),
        (a.dataset = s),
        (a.index = a.datasetIndex = this.index);
    return (a.active = !!t), (a.mode = r), a;
  }
  resolveDatasetElementOptions(e) {
    return this._resolveElementOptions(this.datasetElementType.id, e);
  }
  resolveDataElementOptions(e, t) {
    return this._resolveElementOptions(this.dataElementType.id, t, e);
  }
  _resolveElementOptions(e, t = "default", r) {
    const s = t === "active",
      a = this._cachedDataOpts,
      u = e + "-" + t,
      c = a[u],
      f = this.enableOptionSharing && Xa(r);
    if (c) return eg(c, f);
    const h = this.chart.config,
      m = h.datasetElementScopeKeys(this._type, e),
      y = s ? [`${e}Hover`, "hover", e, ""] : [e, ""],
      w = h.getOptionScopes(this.getDataset(), m),
      v = Object.keys(Xe.elements[e]),
      x = () => this.getContext(r, s, t),
      b = h.resolveNamedOptions(w, v, x, y);
    return b.$shared && ((b.$shared = f), (a[u] = Object.freeze(eg(b, f)))), b;
  }
  _resolveAnimations(e, t, r) {
    const s = this.chart,
      a = this._cachedDataOpts,
      u = `animation-${t}`,
      c = a[u];
    if (c) return c;
    let f;
    if (s.options.animation !== !1) {
      const m = this.chart.config,
        y = m.datasetAnimationScopeKeys(this._type, t),
        w = m.getOptionScopes(this.getDataset(), y);
      f = m.createResolver(w, this.getContext(e, r, t));
    }
    const h = new s0(s, f && f.animations);
    return f && f._cacheable && (a[u] = Object.freeze(h)), h;
  }
  getSharedOptions(e) {
    if (e.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, e))
      );
  }
  includeOptions(e, t) {
    return !t || Tc(e) || this.chart._animationsDisabled;
  }
  _getSharedOptions(e, t) {
    const r = this.resolveDataElementOptions(e, t),
      s = this._sharedOptions,
      a = this.getSharedOptions(r),
      u = this.includeOptions(t, a) || a !== s;
    return (
      this.updateSharedOptions(a, t, r), { sharedOptions: a, includeOptions: u }
    );
  }
  updateElement(e, t, r, s) {
    Tc(s) ? Object.assign(e, r) : this._resolveAnimations(t, s).update(e, r);
  }
  updateSharedOptions(e, t, r) {
    e && !Tc(t) && this._resolveAnimations(void 0, t).update(e, r);
  }
  _setStyle(e, t, r, s) {
    e.active = s;
    const a = this.getStyle(t, s);
    this._resolveAnimations(t, r, s).update(e, {
      options: (!s && this.getSharedOptions(a)) || a,
    });
  }
  removeHoverStyle(e, t, r) {
    this._setStyle(e, r, "active", !1);
  }
  setHoverStyle(e, t, r) {
    this._setStyle(e, r, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const e = this._cachedMeta.dataset;
    e && this._setStyle(e, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const e = this._cachedMeta.dataset;
    e && this._setStyle(e, void 0, "active", !0);
  }
  _resyncElements(e) {
    const t = this._data,
      r = this._cachedMeta.data;
    for (const [c, f, h] of this._syncList) this[c](f, h);
    this._syncList = [];
    const s = r.length,
      a = t.length,
      u = Math.min(a, s);
    u && this.parse(0, u),
      a > s
        ? this._insertElements(s, a - s, e)
        : a < s && this._removeElements(a, s - a);
  }
  _insertElements(e, t, r = !0) {
    const s = this._cachedMeta,
      a = s.data,
      u = e + t;
    let c;
    const f = (h) => {
      for (h.length += t, c = h.length - 1; c >= u; c--) h[c] = h[c - t];
    };
    for (f(a), c = e; c < u; ++c) a[c] = new this.dataElementType();
    this._parsing && f(s._parsed),
      this.parse(e, t),
      r && this.updateElements(a, e, t, "reset");
  }
  updateElements(e, t, r, s) {}
  _removeElements(e, t) {
    const r = this._cachedMeta;
    if (this._parsing) {
      const s = r._parsed.splice(e, t);
      r._stacked && gs(r, s);
    }
    r.data.splice(e, t);
  }
  _sync(e) {
    if (this._parsing) this._syncList.push(e);
    else {
      const [t, r, s] = e;
      this[t](r, s);
    }
    this.chart._dataChanges.push([this.index, ...e]);
  }
  _onDataPush() {
    const e = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - e, e]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(e, t) {
    t && this._sync(["_removeElements", e, t]);
    const r = arguments.length - 2;
    r && this._sync(["_insertElements", e, r]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
V(Is, "defaults", {}),
  V(Is, "datasetElementType", null),
  V(Is, "dataElementType", null);
class Aa extends Is {
  initialize() {
    (this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize();
  }
  update(e) {
    const t = this._cachedMeta,
      { dataset: r, data: s = [], _dataset: a } = t,
      u = this.chart._animationsDisabled;
    let { start: c, count: f } = Cb(t, s, u);
    (this._drawStart = c),
      (this._drawCount = f),
      Pb(t) && ((c = 0), (f = s.length)),
      (r._chart = this.chart),
      (r._datasetIndex = this.index),
      (r._decimated = !!a._decimated),
      (r.points = s);
    const h = this.resolveDatasetElementOptions(e);
    this.options.showLine || (h.borderWidth = 0),
      (h.segment = this.options.segment),
      this.updateElement(r, void 0, { animated: !u, options: h }, e),
      this.updateElements(s, c, f, e);
  }
  updateElements(e, t, r, s) {
    const a = s === "reset",
      { iScale: u, vScale: c, _stacked: f, _dataset: h } = this._cachedMeta,
      { sharedOptions: m, includeOptions: y } = this._getSharedOptions(t, s),
      w = u.axis,
      v = c.axis,
      { spanGaps: x, segment: b } = this.options,
      k = Hs(x) ? x : Number.POSITIVE_INFINITY,
      S = this.chart._animationsDisabled || a || s === "none",
      C = t + r,
      O = e.length;
    let R = t > 0 && this.getParsed(t - 1);
    for (let A = 0; A < O; ++A) {
      const W = e[A],
        H = S ? W : {};
      if (A < t || A >= C) {
        H.skip = !0;
        continue;
      }
      const N = this.getParsed(A),
        B = Ue(N[v]),
        G = (H[w] = u.getPixelForValue(N[w], A)),
        ne = (H[v] =
          a || B
            ? c.getBasePixel()
            : c.getPixelForValue(f ? this.applyStack(c, N, f) : N[v], A));
      (H.skip = isNaN(G) || isNaN(ne) || B),
        (H.stop = A > 0 && Math.abs(N[w] - R[w]) > k),
        b && ((H.parsed = N), (H.raw = h.data[A])),
        y &&
          (H.options =
            m || this.resolveDataElementOptions(A, W.active ? "active" : s)),
        S || this.updateElement(W, A, H, s),
        (R = N);
    }
  }
  getMaxOverflow() {
    const e = this._cachedMeta,
      t = e.dataset,
      r = (t.options && t.options.borderWidth) || 0,
      s = e.data || [];
    if (!s.length) return r;
    const a = s[0].size(this.resolveDataElementOptions(0)),
      u = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
    return Math.max(r, a, u) / 2;
  }
  draw() {
    const e = this._cachedMeta;
    e.dataset.updateControlPoints(this.chart.chartArea, e.iScale.axis),
      super.draw();
  }
}
V(Aa, "id", "line"),
  V(Aa, "defaults", {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1,
  }),
  V(Aa, "overrides", {
    scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
  });
function _r() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided."
  );
}
class Ad {
  constructor(e) {
    V(this, "options");
    this.options = e || {};
  }
  static override(e) {
    Object.assign(Ad.prototype, e);
  }
  init() {}
  formats() {
    return _r();
  }
  parse() {
    return _r();
  }
  format() {
    return _r();
  }
  add() {
    return _r();
  }
  diff() {
    return _r();
  }
  startOf() {
    return _r();
  }
  endOf() {
    return _r();
  }
}
var a0 = { _date: Ad };
function US(n, e, t, r) {
  const { controller: s, data: a, _sorted: u } = n,
    c = s._cachedMeta.iScale;
  if (c && e === c.axis && e !== "r" && u && a.length) {
    const f = c._reversePixels ? xb : Mr;
    if (r) {
      if (s._sharedOptions) {
        const h = a[0],
          m = typeof h.getRange == "function" && h.getRange(e);
        if (m) {
          const y = f(a, e, t - m),
            w = f(a, e, t + m);
          return { lo: y.lo, hi: w.hi };
        }
      }
    } else return f(a, e, t);
  }
  return { lo: 0, hi: a.length - 1 };
}
function Zs(n, e, t, r, s) {
  const a = n.getSortedVisibleDatasetMetas(),
    u = t[e];
  for (let c = 0, f = a.length; c < f; ++c) {
    const { index: h, data: m } = a[c],
      { lo: y, hi: w } = US(a[c], e, u, s);
    for (let v = y; v <= w; ++v) {
      const x = m[v];
      x.skip || r(x, h, v);
    }
  }
}
function $S(n) {
  const e = n.indexOf("x") !== -1,
    t = n.indexOf("y") !== -1;
  return function (r, s) {
    const a = e ? Math.abs(r.x - s.x) : 0,
      u = t ? Math.abs(r.y - s.y) : 0;
    return Math.sqrt(Math.pow(a, 2) + Math.pow(u, 2));
  };
}
function Oc(n, e, t, r, s) {
  const a = [];
  return (
    (!s && !n.isPointInArea(e)) ||
      Zs(
        n,
        t,
        e,
        function (c, f, h) {
          (!s && !Bs(c, n.chartArea, 0)) ||
            (c.inRange(e.x, e.y, r) &&
              a.push({ element: c, datasetIndex: f, index: h }));
        },
        !0
      ),
    a
  );
}
function VS(n, e, t, r) {
  let s = [];
  function a(u, c, f) {
    const { startAngle: h, endAngle: m } = u.getProps(
        ["startAngle", "endAngle"],
        r
      ),
      { angle: y } = yb(u, { x: e.x, y: e.y });
    By(y, h, m) && s.push({ element: u, datasetIndex: c, index: f });
  }
  return Zs(n, t, e, a), s;
}
function YS(n, e, t, r, s, a) {
  let u = [];
  const c = $S(t);
  let f = Number.POSITIVE_INFINITY;
  function h(m, y, w) {
    const v = m.inRange(e.x, e.y, s);
    if (r && !v) return;
    const x = m.getCenterPoint(s);
    if (!(!!a || n.isPointInArea(x)) && !v) return;
    const k = c(e, x);
    k < f
      ? ((u = [{ element: m, datasetIndex: y, index: w }]), (f = k))
      : k === f && u.push({ element: m, datasetIndex: y, index: w });
  }
  return Zs(n, t, e, h), u;
}
function Mc(n, e, t, r, s, a) {
  return !a && !n.isPointInArea(e)
    ? []
    : t === "r" && !r
    ? VS(n, e, t, s)
    : YS(n, e, t, r, s, a);
}
function tg(n, e, t, r, s) {
  const a = [],
    u = t === "x" ? "inXRange" : "inYRange";
  let c = !1;
  return (
    Zs(n, t, e, (f, h, m) => {
      f[u] &&
        f[u](e[t], s) &&
        (a.push({ element: f, datasetIndex: h, index: m }),
        (c = c || f.inRange(e.x, e.y, s)));
    }),
    r && !c ? [] : a
  );
}
var KS = {
  evaluateInteractionItems: Zs,
  modes: {
    index(n, e, t, r) {
      const s = br(e, n),
        a = t.axis || "x",
        u = t.includeInvisible || !1,
        c = t.intersect ? Oc(n, s, a, r, u) : Mc(n, s, a, !1, r, u),
        f = [];
      return c.length
        ? (n.getSortedVisibleDatasetMetas().forEach((h) => {
            const m = c[0].index,
              y = h.data[m];
            y &&
              !y.skip &&
              f.push({ element: y, datasetIndex: h.index, index: m });
          }),
          f)
        : [];
    },
    dataset(n, e, t, r) {
      const s = br(e, n),
        a = t.axis || "xy",
        u = t.includeInvisible || !1;
      let c = t.intersect ? Oc(n, s, a, r, u) : Mc(n, s, a, !1, r, u);
      if (c.length > 0) {
        const f = c[0].datasetIndex,
          h = n.getDatasetMeta(f).data;
        c = [];
        for (let m = 0; m < h.length; ++m)
          c.push({ element: h[m], datasetIndex: f, index: m });
      }
      return c;
    },
    point(n, e, t, r) {
      const s = br(e, n),
        a = t.axis || "xy",
        u = t.includeInvisible || !1;
      return Oc(n, s, a, r, u);
    },
    nearest(n, e, t, r) {
      const s = br(e, n),
        a = t.axis || "xy",
        u = t.includeInvisible || !1;
      return Mc(n, s, a, t.intersect, r, u);
    },
    x(n, e, t, r) {
      const s = br(e, n);
      return tg(n, s, "x", t.intersect, r);
    },
    y(n, e, t, r) {
      const s = br(e, n);
      return tg(n, s, "y", t.intersect, r);
    },
  },
};
const l0 = ["left", "top", "right", "bottom"];
function ys(n, e) {
  return n.filter((t) => t.pos === e);
}
function ng(n, e) {
  return n.filter((t) => l0.indexOf(t.pos) === -1 && t.box.axis === e);
}
function ws(n, e) {
  return n.sort((t, r) => {
    const s = e ? r : t,
      a = e ? t : r;
    return s.weight === a.weight ? s.index - a.index : s.weight - a.weight;
  });
}
function XS(n) {
  const e = [];
  let t, r, s, a, u, c;
  for (t = 0, r = (n || []).length; t < r; ++t)
    (s = n[t]),
      ({
        position: a,
        options: { stack: u, stackWeight: c = 1 },
      } = s),
      e.push({
        index: t,
        box: s,
        pos: a,
        horizontal: s.isHorizontal(),
        weight: s.weight,
        stack: u && a + u,
        stackWeight: c,
      });
  return e;
}
function qS(n) {
  const e = {};
  for (const t of n) {
    const { stack: r, pos: s, stackWeight: a } = t;
    if (!r || !l0.includes(s)) continue;
    const u = e[r] || (e[r] = { count: 0, placed: 0, weight: 0, size: 0 });
    u.count++, (u.weight += a);
  }
  return e;
}
function GS(n, e) {
  const t = qS(n),
    { vBoxMaxWidth: r, hBoxMaxHeight: s } = e;
  let a, u, c;
  for (a = 0, u = n.length; a < u; ++a) {
    c = n[a];
    const { fullSize: f } = c.box,
      h = t[c.stack],
      m = h && c.stackWeight / h.weight;
    c.horizontal
      ? ((c.width = m ? m * r : f && e.availableWidth), (c.height = s))
      : ((c.width = r), (c.height = m ? m * s : f && e.availableHeight));
  }
  return t;
}
function QS(n) {
  const e = XS(n),
    t = ws(
      e.filter((h) => h.box.fullSize),
      !0
    ),
    r = ws(ys(e, "left"), !0),
    s = ws(ys(e, "right")),
    a = ws(ys(e, "top"), !0),
    u = ws(ys(e, "bottom")),
    c = ng(e, "x"),
    f = ng(e, "y");
  return {
    fullSize: t,
    leftAndTop: r.concat(a),
    rightAndBottom: s.concat(f).concat(u).concat(c),
    chartArea: ys(e, "chartArea"),
    vertical: r.concat(s).concat(f),
    horizontal: a.concat(u).concat(c),
  };
}
function rg(n, e, t, r) {
  return Math.max(n[t], e[t]) + Math.max(n[r], e[r]);
}
function u0(n, e) {
  (n.top = Math.max(n.top, e.top)),
    (n.left = Math.max(n.left, e.left)),
    (n.bottom = Math.max(n.bottom, e.bottom)),
    (n.right = Math.max(n.right, e.right));
}
function ZS(n, e, t, r) {
  const { pos: s, box: a } = t,
    u = n.maxPadding;
  if (!be(s)) {
    t.size && (n[s] -= t.size);
    const y = r[t.stack] || { size: 0, count: 1 };
    (y.size = Math.max(y.size, t.horizontal ? a.height : a.width)),
      (t.size = y.size / y.count),
      (n[s] += t.size);
  }
  a.getPadding && u0(u, a.getPadding());
  const c = Math.max(0, e.outerWidth - rg(u, n, "left", "right")),
    f = Math.max(0, e.outerHeight - rg(u, n, "top", "bottom")),
    h = c !== n.w,
    m = f !== n.h;
  return (
    (n.w = c),
    (n.h = f),
    t.horizontal ? { same: h, other: m } : { same: m, other: h }
  );
}
function JS(n) {
  const e = n.maxPadding;
  function t(r) {
    const s = Math.max(e[r] - n[r], 0);
    return (n[r] += s), s;
  }
  (n.y += t("top")), (n.x += t("left")), t("right"), t("bottom");
}
function eE(n, e) {
  const t = e.maxPadding;
  function r(s) {
    const a = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      s.forEach((u) => {
        a[u] = Math.max(e[u], t[u]);
      }),
      a
    );
  }
  return r(n ? ["left", "right"] : ["top", "bottom"]);
}
function Cs(n, e, t, r) {
  const s = [];
  let a, u, c, f, h, m;
  for (a = 0, u = n.length, h = 0; a < u; ++a) {
    (c = n[a]),
      (f = c.box),
      f.update(c.width || e.w, c.height || e.h, eE(c.horizontal, e));
    const { same: y, other: w } = ZS(e, t, c, r);
    (h |= y && s.length), (m = m || w), f.fullSize || s.push(c);
  }
  return (h && Cs(s, e, t, r)) || m;
}
function ba(n, e, t, r, s) {
  (n.top = t),
    (n.left = e),
    (n.right = e + r),
    (n.bottom = t + s),
    (n.width = r),
    (n.height = s);
}
function ig(n, e, t, r) {
  const s = t.padding;
  let { x: a, y: u } = e;
  for (const c of n) {
    const f = c.box,
      h = r[c.stack] || { count: 1, placed: 0, weight: 1 },
      m = c.stackWeight / h.weight || 1;
    if (c.horizontal) {
      const y = e.w * m,
        w = h.size || f.height;
      Xa(h.start) && (u = h.start),
        f.fullSize
          ? ba(f, s.left, u, t.outerWidth - s.right - s.left, w)
          : ba(f, e.left + h.placed, u, y, w),
        (h.start = u),
        (h.placed += y),
        (u = f.bottom);
    } else {
      const y = e.h * m,
        w = h.size || f.width;
      Xa(h.start) && (a = h.start),
        f.fullSize
          ? ba(f, a, s.top, w, t.outerHeight - s.bottom - s.top)
          : ba(f, a, e.top + h.placed, w, y),
        (h.start = a),
        (h.placed += y),
        (a = f.right);
    }
  }
  (e.x = a), (e.y = u);
}
var Ht = {
  addBox(n, e) {
    n.boxes || (n.boxes = []),
      (e.fullSize = e.fullSize || !1),
      (e.position = e.position || "top"),
      (e.weight = e.weight || 0),
      (e._layers =
        e._layers ||
        function () {
          return [
            {
              z: 0,
              draw(t) {
                e.draw(t);
              },
            },
          ];
        }),
      n.boxes.push(e);
  },
  removeBox(n, e) {
    const t = n.boxes ? n.boxes.indexOf(e) : -1;
    t !== -1 && n.boxes.splice(t, 1);
  },
  configure(n, e, t) {
    (e.fullSize = t.fullSize), (e.position = t.position), (e.weight = t.weight);
  },
  update(n, e, t, r) {
    if (!n) return;
    const s = Ut(n.options.layout.padding),
      a = Math.max(e - s.width, 0),
      u = Math.max(t - s.height, 0),
      c = QS(n.boxes),
      f = c.vertical,
      h = c.horizontal;
    Oe(n.boxes, (b) => {
      typeof b.beforeLayout == "function" && b.beforeLayout();
    });
    const m =
        f.reduce(
          (b, k) => (k.box.options && k.box.options.display === !1 ? b : b + 1),
          0
        ) || 1,
      y = Object.freeze({
        outerWidth: e,
        outerHeight: t,
        padding: s,
        availableWidth: a,
        availableHeight: u,
        vBoxMaxWidth: a / 2 / m,
        hBoxMaxHeight: u / 2,
      }),
      w = Object.assign({}, s);
    u0(w, Ut(r));
    const v = Object.assign(
        { maxPadding: w, w: a, h: u, x: s.left, y: s.top },
        s
      ),
      x = GS(f.concat(h), y);
    Cs(c.fullSize, v, y, x),
      Cs(f, v, y, x),
      Cs(h, v, y, x) && Cs(f, v, y, x),
      JS(v),
      ig(c.leftAndTop, v, y, x),
      (v.x += v.w),
      (v.y += v.h),
      ig(c.rightAndBottom, v, y, x),
      (n.chartArea = {
        left: v.left,
        top: v.top,
        right: v.left + v.w,
        bottom: v.top + v.h,
        height: v.h,
        width: v.w,
      }),
      Oe(c.chartArea, (b) => {
        const k = b.box;
        Object.assign(k, n.chartArea),
          k.update(v.w, v.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class c0 {
  acquireContext(e, t) {}
  releaseContext(e) {
    return !1;
  }
  addEventListener(e, t, r) {}
  removeEventListener(e, t, r) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(e, t, r, s) {
    return (
      (t = Math.max(0, t || e.width)),
      (r = r || e.height),
      { width: t, height: Math.max(0, s ? Math.floor(t / s) : r) }
    );
  }
  isAttached(e) {
    return !0;
  }
  updateConfig(e) {}
}
class tE extends c0 {
  acquireContext(e) {
    return (e && e.getContext && e.getContext("2d")) || null;
  }
  updateConfig(e) {
    e.options.animation = !1;
  }
}
const ja = "$chartjs",
  nE = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  sg = (n) => n === null || n === "";
function rE(n, e) {
  const t = n.style,
    r = n.getAttribute("height"),
    s = n.getAttribute("width");
  if (
    ((n[ja] = {
      initial: {
        height: r,
        width: s,
        style: { display: t.display, height: t.height, width: t.width },
      },
    }),
    (t.display = t.display || "block"),
    (t.boxSizing = t.boxSizing || "border-box"),
    sg(s))
  ) {
    const a = Vm(n, "width");
    a !== void 0 && (n.width = a);
  }
  if (sg(r))
    if (n.style.height === "") n.height = n.width / (e || 2);
    else {
      const a = Vm(n, "height");
      a !== void 0 && (n.height = a);
    }
  return n;
}
const d0 = gS ? { passive: !0 } : !1;
function iE(n, e, t) {
  n && n.addEventListener(e, t, d0);
}
function sE(n, e, t) {
  n && n.canvas && n.canvas.removeEventListener(e, t, d0);
}
function oE(n, e) {
  const t = nE[n.type] || n.type,
    { x: r, y: s } = br(n, e);
  return {
    type: t,
    chart: e,
    native: n,
    x: r !== void 0 ? r : null,
    y: s !== void 0 ? s : null,
  };
}
function Qa(n, e) {
  for (const t of n) if (t === e || t.contains(e)) return !0;
}
function aE(n, e, t) {
  const r = n.canvas,
    s = new MutationObserver((a) => {
      let u = !1;
      for (const c of a)
        (u = u || Qa(c.addedNodes, r)), (u = u && !Qa(c.removedNodes, r));
      u && t();
    });
  return s.observe(document, { childList: !0, subtree: !0 }), s;
}
function lE(n, e, t) {
  const r = n.canvas,
    s = new MutationObserver((a) => {
      let u = !1;
      for (const c of a)
        (u = u || Qa(c.removedNodes, r)), (u = u && !Qa(c.addedNodes, r));
      u && t();
    });
  return s.observe(document, { childList: !0, subtree: !0 }), s;
}
const $s = new Map();
let og = 0;
function f0() {
  const n = window.devicePixelRatio;
  n !== og &&
    ((og = n),
    $s.forEach((e, t) => {
      t.currentDevicePixelRatio !== n && e();
    }));
}
function uE(n, e) {
  $s.size || window.addEventListener("resize", f0), $s.set(n, e);
}
function cE(n) {
  $s.delete(n), $s.size || window.removeEventListener("resize", f0);
}
function dE(n, e, t) {
  const r = n.canvas,
    s = r && Fd(r);
  if (!s) return;
  const a = Vy((c, f) => {
      const h = s.clientWidth;
      t(c, f), h < s.clientWidth && t();
    }, window),
    u = new ResizeObserver((c) => {
      const f = c[0],
        h = f.contentRect.width,
        m = f.contentRect.height;
      (h === 0 && m === 0) || a(h, m);
    });
  return u.observe(s), uE(n, a), u;
}
function Rc(n, e, t) {
  t && t.disconnect(), e === "resize" && cE(n);
}
function fE(n, e, t) {
  const r = n.canvas,
    s = Vy((a) => {
      n.ctx !== null && t(oE(a, n));
    }, n);
  return iE(r, e, s), s;
}
class hE extends c0 {
  acquireContext(e, t) {
    const r = e && e.getContext && e.getContext("2d");
    return r && r.canvas === e ? (rE(e, t), r) : null;
  }
  releaseContext(e) {
    const t = e.canvas;
    if (!t[ja]) return !1;
    const r = t[ja].initial;
    ["height", "width"].forEach((a) => {
      const u = r[a];
      Ue(u) ? t.removeAttribute(a) : t.setAttribute(a, u);
    });
    const s = r.style || {};
    return (
      Object.keys(s).forEach((a) => {
        t.style[a] = s[a];
      }),
      (t.width = t.width),
      delete t[ja],
      !0
    );
  }
  addEventListener(e, t, r) {
    this.removeEventListener(e, t);
    const s = e.$proxies || (e.$proxies = {}),
      u = { attach: aE, detach: lE, resize: dE }[t] || fE;
    s[t] = u(e, t, r);
  }
  removeEventListener(e, t) {
    const r = e.$proxies || (e.$proxies = {}),
      s = r[t];
    if (!s) return;
    (({ attach: Rc, detach: Rc, resize: Rc })[t] || sE)(e, t, s),
      (r[t] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(e, t, r, s) {
    return mS(e, t, r, s);
  }
  isAttached(e) {
    const t = e && Fd(e);
    return !!(t && t.isConnected);
  }
}
function pE(n) {
  return !zd() || (typeof OffscreenCanvas < "u" && n instanceof OffscreenCanvas)
    ? tE
    : hE;
}
class Dn {
  constructor() {
    V(this, "x");
    V(this, "y");
    V(this, "active", !1);
    V(this, "options");
    V(this, "$animations");
  }
  tooltipPosition(e) {
    const { x: t, y: r } = this.getProps(["x", "y"], e);
    return { x: t, y: r };
  }
  hasValue() {
    return Hs(this.x) && Hs(this.y);
  }
  getProps(e, t) {
    const r = this.$animations;
    if (!t || !r) return this;
    const s = {};
    return (
      e.forEach((a) => {
        s[a] = r[a] && r[a].active() ? r[a]._to : this[a];
      }),
      s
    );
  }
}
V(Dn, "defaults", {}), V(Dn, "defaultRoutes");
function mE(n, e) {
  const t = n.options.ticks,
    r = gE(n),
    s = Math.min(t.maxTicksLimit || r, r),
    a = t.major.enabled ? wE(e) : [],
    u = a.length,
    c = a[0],
    f = a[u - 1],
    h = [];
  if (u > s) return vE(e, h, a, u / s), h;
  const m = yE(a, e, s);
  if (u > 0) {
    let y, w;
    const v = u > 1 ? Math.round((f - c) / (u - 1)) : null;
    for (Sa(e, h, m, Ue(v) ? 0 : c - v, c), y = 0, w = u - 1; y < w; y++)
      Sa(e, h, m, a[y], a[y + 1]);
    return Sa(e, h, m, f, Ue(v) ? e.length : f + v), h;
  }
  return Sa(e, h, m), h;
}
function gE(n) {
  const e = n.options.offset,
    t = n._tickSize(),
    r = n._length / t + (e ? 0 : 1),
    s = n._maxLength / t;
  return Math.floor(Math.min(r, s));
}
function yE(n, e, t) {
  const r = xE(n),
    s = e.length / t;
  if (!r) return Math.max(s, 1);
  const a = hb(r);
  for (let u = 0, c = a.length - 1; u < c; u++) {
    const f = a[u];
    if (f > s) return f;
  }
  return Math.max(s, 1);
}
function wE(n) {
  const e = [];
  let t, r;
  for (t = 0, r = n.length; t < r; t++) n[t].major && e.push(t);
  return e;
}
function vE(n, e, t, r) {
  let s = 0,
    a = t[0],
    u;
  for (r = Math.ceil(r), u = 0; u < n.length; u++)
    u === a && (e.push(n[u]), s++, (a = t[s * r]));
}
function Sa(n, e, t, r, s) {
  const a = xe(r, 0),
    u = Math.min(xe(s, n.length), n.length);
  let c = 0,
    f,
    h,
    m;
  for (
    t = Math.ceil(t), s && ((f = s - r), (t = f / Math.floor(f / t))), m = a;
    m < 0;

  )
    c++, (m = Math.round(a + c * t));
  for (h = Math.max(a, 0); h < u; h++)
    h === m && (e.push(n[h]), c++, (m = Math.round(a + c * t)));
}
function xE(n) {
  const e = n.length;
  let t, r;
  if (e < 2) return !1;
  for (r = n[0], t = 1; t < e; ++t) if (n[t] - n[t - 1] !== r) return !1;
  return r;
}
const _E = (n) => (n === "left" ? "right" : n === "right" ? "left" : n),
  ag = (n, e, t) => (e === "top" || e === "left" ? n[e] + t : n[e] - t),
  lg = (n, e) => Math.min(e || n, n);
function ug(n, e) {
  const t = [],
    r = n.length / e,
    s = n.length;
  let a = 0;
  for (; a < s; a += r) t.push(n[Math.floor(a)]);
  return t;
}
function kE(n, e, t) {
  const r = n.ticks.length,
    s = Math.min(e, r - 1),
    a = n._startPixel,
    u = n._endPixel,
    c = 1e-6;
  let f = n.getPixelForTick(s),
    h;
  if (
    !(
      t &&
      (r === 1
        ? (h = Math.max(f - a, u - f))
        : e === 0
        ? (h = (n.getPixelForTick(1) - f) / 2)
        : (h = (f - n.getPixelForTick(s - 1)) / 2),
      (f += s < e ? h : -h),
      f < a - c || f > u + c)
    )
  )
    return f;
}
function bE(n, e) {
  Oe(n, (t) => {
    const r = t.gc,
      s = r.length / 2;
    let a;
    if (s > e) {
      for (a = 0; a < s; ++a) delete t.data[r[a]];
      r.splice(0, s);
    }
  });
}
function vs(n) {
  return n.drawTicks ? n.tickLength : 0;
}
function cg(n, e) {
  if (!n.display) return 0;
  const t = mt(n.font, e),
    r = Ut(n.padding);
  return (it(n.text) ? n.text.length : 1) * t.lineHeight + r.height;
}
function SE(n, e) {
  return zr(n, { scale: e, type: "scale" });
}
function EE(n, e, t) {
  return zr(n, { tick: t, index: e, type: "tick" });
}
function CE(n, e, t) {
  let r = Od(n);
  return ((t && e !== "right") || (!t && e === "right")) && (r = _E(r)), r;
}
function PE(n, e, t, r) {
  const { top: s, left: a, bottom: u, right: c, chart: f } = n,
    { chartArea: h, scales: m } = f;
  let y = 0,
    w,
    v,
    x;
  const b = u - s,
    k = c - a;
  if (n.isHorizontal()) {
    if (((v = ft(r, a, c)), be(t))) {
      const S = Object.keys(t)[0],
        C = t[S];
      x = m[S].getPixelForValue(C) + b - e;
    } else
      t === "center" ? (x = (h.bottom + h.top) / 2 + b - e) : (x = ag(n, t, e));
    w = c - a;
  } else {
    if (be(t)) {
      const S = Object.keys(t)[0],
        C = t[S];
      v = m[S].getPixelForValue(C) - k + e;
    } else
      t === "center" ? (v = (h.left + h.right) / 2 - k + e) : (v = ag(n, t, e));
    (x = ft(r, u, s)), (y = t === "left" ? -Qt : Qt);
  }
  return { titleX: v, titleY: x, maxWidth: w, rotation: y };
}
class Ei extends Dn {
  constructor(e) {
    super(),
      (this.id = e.id),
      (this.type = e.type),
      (this.options = void 0),
      (this.ctx = e.ctx),
      (this.chart = e.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(e) {
    (this.options = e.setContext(this.getContext())),
      (this.axis = e.axis),
      (this._userMin = this.parse(e.min)),
      (this._userMax = this.parse(e.max)),
      (this._suggestedMin = this.parse(e.suggestedMin)),
      (this._suggestedMax = this.parse(e.suggestedMax));
  }
  parse(e, t) {
    return e;
  }
  getUserBounds() {
    let { _userMin: e, _userMax: t, _suggestedMin: r, _suggestedMax: s } = this;
    return (
      (e = an(e, Number.POSITIVE_INFINITY)),
      (t = an(t, Number.NEGATIVE_INFINITY)),
      (r = an(r, Number.POSITIVE_INFINITY)),
      (s = an(s, Number.NEGATIVE_INFINITY)),
      { min: an(e, r), max: an(t, s), minDefined: Bt(e), maxDefined: Bt(t) }
    );
  }
  getMinMax(e) {
    let { min: t, max: r, minDefined: s, maxDefined: a } = this.getUserBounds(),
      u;
    if (s && a) return { min: t, max: r };
    const c = this.getMatchingVisibleMetas();
    for (let f = 0, h = c.length; f < h; ++f)
      (u = c[f].controller.getMinMax(this, e)),
        s || (t = Math.min(t, u.min)),
        a || (r = Math.max(r, u.max));
    return (
      (t = a && t > r ? r : t),
      (r = s && t > r ? t : r),
      { min: an(t, an(r, t)), max: an(r, an(t, r)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const e = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? e.xLabels : e.yLabels) ||
      e.labels ||
      []
    );
  }
  getLabelItems(e = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(e));
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    Ie(this.options.beforeUpdate, [this]);
  }
  update(e, t, r) {
    const { beginAtZero: s, grace: a, ticks: u } = this.options,
      c = u.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = e),
      (this.maxHeight = t),
      (this._margins = r =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, r)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + r.left + r.right
        : this.height + r.top + r.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = Kb(this, a, s)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const f = c < this.ticks.length;
    this._convertTicksToLabels(f ? ug(this.ticks, c) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      u.display &&
        (u.autoSkip || u.source === "auto") &&
        ((this.ticks = mE(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      f && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let e = this.options.reverse,
      t,
      r;
    this.isHorizontal()
      ? ((t = this.left), (r = this.right))
      : ((t = this.top), (r = this.bottom), (e = !e)),
      (this._startPixel = t),
      (this._endPixel = r),
      (this._reversePixels = e),
      (this._length = r - t),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    Ie(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    Ie(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    Ie(this.options.afterSetDimensions, [this]);
  }
  _callHooks(e) {
    this.chart.notifyPlugins(e, this.getContext()), Ie(this.options[e], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    Ie(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(e) {
    const t = this.options.ticks;
    let r, s, a;
    for (r = 0, s = e.length; r < s; r++)
      (a = e[r]), (a.label = Ie(t.callback, [a.value, r, e], this));
  }
  afterTickToLabelConversion() {
    Ie(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    Ie(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const e = this.options,
      t = e.ticks,
      r = lg(this.ticks.length, e.ticks.maxTicksLimit),
      s = t.minRotation || 0,
      a = t.maxRotation;
    let u = s,
      c,
      f,
      h;
    if (
      !this._isVisible() ||
      !t.display ||
      s >= a ||
      r <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = s;
      return;
    }
    const m = this._getLabelSizes(),
      y = m.widest.width,
      w = m.highest.height,
      v = Wt(this.chart.width - y, 0, this.maxWidth);
    (c = e.offset ? this.maxWidth / r : v / (r - 1)),
      y + 6 > c &&
        ((c = v / (r - (e.offset ? 0.5 : 1))),
        (f =
          this.maxHeight -
          vs(e.grid) -
          t.padding -
          cg(e.title, this.chart.options.font)),
        (h = Math.sqrt(y * y + w * w)),
        (u = gb(
          Math.min(
            Math.asin(Wt((m.highest.height + 6) / c, -1, 1)),
            Math.asin(Wt(f / h, -1, 1)) - Math.asin(Wt(w / h, -1, 1))
          )
        )),
        (u = Math.max(s, Math.min(a, u)))),
      (this.labelRotation = u);
  }
  afterCalculateLabelRotation() {
    Ie(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    Ie(this.options.beforeFit, [this]);
  }
  fit() {
    const e = { width: 0, height: 0 },
      {
        chart: t,
        options: { ticks: r, title: s, grid: a },
      } = this,
      u = this._isVisible(),
      c = this.isHorizontal();
    if (u) {
      const f = cg(s, t.options.font);
      if (
        (c
          ? ((e.width = this.maxWidth), (e.height = vs(a) + f))
          : ((e.height = this.maxHeight), (e.width = vs(a) + f)),
        r.display && this.ticks.length)
      ) {
        const {
            first: h,
            last: m,
            widest: y,
            highest: w,
          } = this._getLabelSizes(),
          v = r.padding * 2,
          x = Or(this.labelRotation),
          b = Math.cos(x),
          k = Math.sin(x);
        if (c) {
          const S = r.mirror ? 0 : k * y.width + b * w.height;
          e.height = Math.min(this.maxHeight, e.height + S + v);
        } else {
          const S = r.mirror ? 0 : b * y.width + k * w.height;
          e.width = Math.min(this.maxWidth, e.width + S + v);
        }
        this._calculatePadding(h, m, k, b);
      }
    }
    this._handleMargins(),
      c
        ? ((this.width = this._length =
            t.width - this._margins.left - this._margins.right),
          (this.height = e.height))
        : ((this.width = e.width),
          (this.height = this._length =
            t.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(e, t, r, s) {
    const {
        ticks: { align: a, padding: u },
        position: c,
      } = this.options,
      f = this.labelRotation !== 0,
      h = c !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const m = this.getPixelForTick(0) - this.left,
        y = this.right - this.getPixelForTick(this.ticks.length - 1);
      let w = 0,
        v = 0;
      f
        ? h
          ? ((w = s * e.width), (v = r * t.height))
          : ((w = r * e.height), (v = s * t.width))
        : a === "start"
        ? (v = t.width)
        : a === "end"
        ? (w = e.width)
        : a !== "inner" && ((w = e.width / 2), (v = t.width / 2)),
        (this.paddingLeft = Math.max(
          ((w - m + u) * this.width) / (this.width - m),
          0
        )),
        (this.paddingRight = Math.max(
          ((v - y + u) * this.width) / (this.width - y),
          0
        ));
    } else {
      let m = t.height / 2,
        y = e.height / 2;
      a === "start"
        ? ((m = 0), (y = e.height))
        : a === "end" && ((m = t.height), (y = 0)),
        (this.paddingTop = m + u),
        (this.paddingBottom = y + u);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom
      )));
  }
  afterFit() {
    Ie(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: e, position: t } = this.options;
    return t === "top" || t === "bottom" || e === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(e) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(e);
    let t, r;
    for (t = 0, r = e.length; t < r; t++)
      Ue(e[t].label) && (e.splice(t, 1), r--, t--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let e = this._labelSizes;
    if (!e) {
      const t = this.options.ticks.sampleSize;
      let r = this.ticks;
      t < r.length && (r = ug(r, t)),
        (this._labelSizes = e =
          this._computeLabelSizes(
            r,
            r.length,
            this.options.ticks.maxTicksLimit
          ));
    }
    return e;
  }
  _computeLabelSizes(e, t, r) {
    const { ctx: s, _longestTextCache: a } = this,
      u = [],
      c = [],
      f = Math.floor(t / lg(t, r));
    let h = 0,
      m = 0,
      y,
      w,
      v,
      x,
      b,
      k,
      S,
      C,
      O,
      R,
      A;
    for (y = 0; y < t; y += f) {
      if (
        ((x = e[y].label),
        (b = this._resolveTickFontOptions(y)),
        (s.font = k = b.string),
        (S = a[k] = a[k] || { data: {}, gc: [] }),
        (C = b.lineHeight),
        (O = R = 0),
        !Ue(x) && !it(x))
      )
        (O = Wm(s, S.data, S.gc, O, x)), (R = C);
      else if (it(x))
        for (w = 0, v = x.length; w < v; ++w)
          (A = x[w]),
            !Ue(A) && !it(A) && ((O = Wm(s, S.data, S.gc, O, A)), (R += C));
      u.push(O), c.push(R), (h = Math.max(O, h)), (m = Math.max(R, m));
    }
    bE(a, t);
    const W = u.indexOf(h),
      H = c.indexOf(m),
      N = (B) => ({ width: u[B] || 0, height: c[B] || 0 });
    return {
      first: N(0),
      last: N(t - 1),
      widest: N(W),
      highest: N(H),
      widths: u,
      heights: c,
    };
  }
  getLabelForValue(e) {
    return e;
  }
  getPixelForValue(e, t) {
    return NaN;
  }
  getValueForPixel(e) {}
  getPixelForTick(e) {
    const t = this.ticks;
    return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e].value);
  }
  getPixelForDecimal(e) {
    this._reversePixels && (e = 1 - e);
    const t = this._startPixel + e * this._length;
    return vb(this._alignToPixels ? xr(this.chart, t, 0) : t);
  }
  getDecimalForPixel(e) {
    const t = (e - this._startPixel) / this._length;
    return this._reversePixels ? 1 - t : t;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: e, max: t } = this;
    return e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0;
  }
  getContext(e) {
    const t = this.ticks || [];
    if (e >= 0 && e < t.length) {
      const r = t[e];
      return r.$context || (r.$context = EE(this.getContext(), e, r));
    }
    return this.$context || (this.$context = SE(this.chart.getContext(), this));
  }
  _tickSize() {
    const e = this.options.ticks,
      t = Or(this.labelRotation),
      r = Math.abs(Math.cos(t)),
      s = Math.abs(Math.sin(t)),
      a = this._getLabelSizes(),
      u = e.autoSkipPadding || 0,
      c = a ? a.widest.width + u : 0,
      f = a ? a.highest.height + u : 0;
    return this.isHorizontal()
      ? f * r > c * s
        ? c / r
        : f / s
      : f * s < c * r
      ? f / r
      : c / s;
  }
  _isVisible() {
    const e = this.options.display;
    return e !== "auto" ? !!e : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(e) {
    const t = this.axis,
      r = this.chart,
      s = this.options,
      { grid: a, position: u, border: c } = s,
      f = a.offset,
      h = this.isHorizontal(),
      y = this.ticks.length + (f ? 1 : 0),
      w = vs(a),
      v = [],
      x = c.setContext(this.getContext()),
      b = x.display ? x.width : 0,
      k = b / 2,
      S = function (ve) {
        return xr(r, ve, b);
      };
    let C, O, R, A, W, H, N, B, G, ne, re, he;
    if (u === "top")
      (C = S(this.bottom)),
        (H = this.bottom - w),
        (B = C - k),
        (ne = S(e.top) + k),
        (he = e.bottom);
    else if (u === "bottom")
      (C = S(this.top)),
        (ne = e.top),
        (he = S(e.bottom) - k),
        (H = C + k),
        (B = this.top + w);
    else if (u === "left")
      (C = S(this.right)),
        (W = this.right - w),
        (N = C - k),
        (G = S(e.left) + k),
        (re = e.right);
    else if (u === "right")
      (C = S(this.left)),
        (G = e.left),
        (re = S(e.right) - k),
        (W = C + k),
        (N = this.left + w);
    else if (t === "x") {
      if (u === "center") C = S((e.top + e.bottom) / 2 + 0.5);
      else if (be(u)) {
        const ve = Object.keys(u)[0],
          ye = u[ve];
        C = S(this.chart.scales[ve].getPixelForValue(ye));
      }
      (ne = e.top), (he = e.bottom), (H = C + k), (B = H + w);
    } else if (t === "y") {
      if (u === "center") C = S((e.left + e.right) / 2);
      else if (be(u)) {
        const ve = Object.keys(u)[0],
          ye = u[ve];
        C = S(this.chart.scales[ve].getPixelForValue(ye));
      }
      (W = C - k), (N = W - w), (G = e.left), (re = e.right);
    }
    const Ee = xe(s.ticks.maxTicksLimit, y),
      we = Math.max(1, Math.ceil(y / Ee));
    for (O = 0; O < y; O += we) {
      const ve = this.getContext(O),
        ye = a.setContext(ve),
        $ = c.setContext(ve),
        Q = ye.lineWidth,
        Z = ye.color,
        M = $.dash || [],
        U = $.dashOffset,
        le = ye.tickWidth,
        ce = ye.tickColor,
        me = ye.tickBorderDash || [],
        pe = ye.tickBorderDashOffset;
      (R = kE(this, O, f)),
        R !== void 0 &&
          ((A = xr(r, R, Q)),
          h ? (W = N = G = re = A) : (H = B = ne = he = A),
          v.push({
            tx1: W,
            ty1: H,
            tx2: N,
            ty2: B,
            x1: G,
            y1: ne,
            x2: re,
            y2: he,
            width: Q,
            color: Z,
            borderDash: M,
            borderDashOffset: U,
            tickWidth: le,
            tickColor: ce,
            tickBorderDash: me,
            tickBorderDashOffset: pe,
          }));
    }
    return (this._ticksLength = y), (this._borderValue = C), v;
  }
  _computeLabelItems(e) {
    const t = this.axis,
      r = this.options,
      { position: s, ticks: a } = r,
      u = this.isHorizontal(),
      c = this.ticks,
      { align: f, crossAlign: h, padding: m, mirror: y } = a,
      w = vs(r.grid),
      v = w + m,
      x = y ? -m : v,
      b = -Or(this.labelRotation),
      k = [];
    let S,
      C,
      O,
      R,
      A,
      W,
      H,
      N,
      B,
      G,
      ne,
      re,
      he = "middle";
    if (s === "top")
      (W = this.bottom - x), (H = this._getXAxisLabelAlignment());
    else if (s === "bottom")
      (W = this.top + x), (H = this._getXAxisLabelAlignment());
    else if (s === "left") {
      const we = this._getYAxisLabelAlignment(w);
      (H = we.textAlign), (A = we.x);
    } else if (s === "right") {
      const we = this._getYAxisLabelAlignment(w);
      (H = we.textAlign), (A = we.x);
    } else if (t === "x") {
      if (s === "center") W = (e.top + e.bottom) / 2 + v;
      else if (be(s)) {
        const we = Object.keys(s)[0],
          ve = s[we];
        W = this.chart.scales[we].getPixelForValue(ve) + v;
      }
      H = this._getXAxisLabelAlignment();
    } else if (t === "y") {
      if (s === "center") A = (e.left + e.right) / 2 - v;
      else if (be(s)) {
        const we = Object.keys(s)[0],
          ve = s[we];
        A = this.chart.scales[we].getPixelForValue(ve);
      }
      H = this._getYAxisLabelAlignment(w).textAlign;
    }
    t === "y" &&
      (f === "start" ? (he = "top") : f === "end" && (he = "bottom"));
    const Ee = this._getLabelSizes();
    for (S = 0, C = c.length; S < C; ++S) {
      (O = c[S]), (R = O.label);
      const we = a.setContext(this.getContext(S));
      (N = this.getPixelForTick(S) + a.labelOffset),
        (B = this._resolveTickFontOptions(S)),
        (G = B.lineHeight),
        (ne = it(R) ? R.length : 1);
      const ve = ne / 2,
        ye = we.color,
        $ = we.textStrokeColor,
        Q = we.textStrokeWidth;
      let Z = H;
      u
        ? ((A = N),
          H === "inner" &&
            (S === C - 1
              ? (Z = this.options.reverse ? "left" : "right")
              : S === 0
              ? (Z = this.options.reverse ? "right" : "left")
              : (Z = "center")),
          s === "top"
            ? h === "near" || b !== 0
              ? (re = -ne * G + G / 2)
              : h === "center"
              ? (re = -Ee.highest.height / 2 - ve * G + G)
              : (re = -Ee.highest.height + G / 2)
            : h === "near" || b !== 0
            ? (re = G / 2)
            : h === "center"
            ? (re = Ee.highest.height / 2 - ve * G)
            : (re = Ee.highest.height - ne * G),
          y && (re *= -1),
          b !== 0 && !we.showLabelBackdrop && (A += (G / 2) * Math.sin(b)))
        : ((W = N), (re = ((1 - ne) * G) / 2));
      let M;
      if (we.showLabelBackdrop) {
        const U = Ut(we.backdropPadding),
          le = Ee.heights[S],
          ce = Ee.widths[S];
        let me = re - U.top,
          pe = 0 - U.left;
        switch (he) {
          case "middle":
            me -= le / 2;
            break;
          case "bottom":
            me -= le;
            break;
        }
        switch (H) {
          case "center":
            pe -= ce / 2;
            break;
          case "right":
            pe -= ce;
            break;
          case "inner":
            S === C - 1 ? (pe -= ce) : S > 0 && (pe -= ce / 2);
            break;
        }
        M = {
          left: pe,
          top: me,
          width: ce + U.width,
          height: le + U.height,
          color: we.backdropColor,
        };
      }
      k.push({
        label: R,
        font: B,
        textOffset: re,
        options: {
          rotation: b,
          color: ye,
          strokeColor: $,
          strokeWidth: Q,
          textAlign: Z,
          textBaseline: he,
          translation: [A, W],
          backdrop: M,
        },
      });
    }
    return k;
  }
  _getXAxisLabelAlignment() {
    const { position: e, ticks: t } = this.options;
    if (-Or(this.labelRotation)) return e === "top" ? "left" : "right";
    let s = "center";
    return (
      t.align === "start"
        ? (s = "left")
        : t.align === "end"
        ? (s = "right")
        : t.align === "inner" && (s = "inner"),
      s
    );
  }
  _getYAxisLabelAlignment(e) {
    const {
        position: t,
        ticks: { crossAlign: r, mirror: s, padding: a },
      } = this.options,
      u = this._getLabelSizes(),
      c = e + a,
      f = u.widest.width;
    let h, m;
    return (
      t === "left"
        ? s
          ? ((m = this.right + a),
            r === "near"
              ? (h = "left")
              : r === "center"
              ? ((h = "center"), (m += f / 2))
              : ((h = "right"), (m += f)))
          : ((m = this.right - c),
            r === "near"
              ? (h = "right")
              : r === "center"
              ? ((h = "center"), (m -= f / 2))
              : ((h = "left"), (m = this.left)))
        : t === "right"
        ? s
          ? ((m = this.left + a),
            r === "near"
              ? (h = "right")
              : r === "center"
              ? ((h = "center"), (m -= f / 2))
              : ((h = "left"), (m -= f)))
          : ((m = this.left + c),
            r === "near"
              ? (h = "left")
              : r === "center"
              ? ((h = "center"), (m += f / 2))
              : ((h = "right"), (m = this.right)))
        : (h = "right"),
      { textAlign: h, x: m }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const e = this.chart,
      t = this.options.position;
    if (t === "left" || t === "right")
      return { top: 0, left: this.left, bottom: e.height, right: this.right };
    if (t === "top" || t === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: e.width };
  }
  drawBackground() {
    const {
      ctx: e,
      options: { backgroundColor: t },
      left: r,
      top: s,
      width: a,
      height: u,
    } = this;
    t && (e.save(), (e.fillStyle = t), e.fillRect(r, s, a, u), e.restore());
  }
  getLineWidthForValue(e) {
    const t = this.options.grid;
    if (!this._isVisible() || !t.display) return 0;
    const s = this.ticks.findIndex((a) => a.value === e);
    return s >= 0 ? t.setContext(this.getContext(s)).lineWidth : 0;
  }
  drawGrid(e) {
    const t = this.options.grid,
      r = this.ctx,
      s =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(e));
    let a, u;
    const c = (f, h, m) => {
      !m.width ||
        !m.color ||
        (r.save(),
        (r.lineWidth = m.width),
        (r.strokeStyle = m.color),
        r.setLineDash(m.borderDash || []),
        (r.lineDashOffset = m.borderDashOffset),
        r.beginPath(),
        r.moveTo(f.x, f.y),
        r.lineTo(h.x, h.y),
        r.stroke(),
        r.restore());
    };
    if (t.display)
      for (a = 0, u = s.length; a < u; ++a) {
        const f = s[a];
        t.drawOnChartArea && c({ x: f.x1, y: f.y1 }, { x: f.x2, y: f.y2 }, f),
          t.drawTicks &&
            c(
              { x: f.tx1, y: f.ty1 },
              { x: f.tx2, y: f.ty2 },
              {
                color: f.tickColor,
                width: f.tickWidth,
                borderDash: f.tickBorderDash,
                borderDashOffset: f.tickBorderDashOffset,
              }
            );
      }
  }
  drawBorder() {
    const {
        chart: e,
        ctx: t,
        options: { border: r, grid: s },
      } = this,
      a = r.setContext(this.getContext()),
      u = r.display ? a.width : 0;
    if (!u) return;
    const c = s.setContext(this.getContext(0)).lineWidth,
      f = this._borderValue;
    let h, m, y, w;
    this.isHorizontal()
      ? ((h = xr(e, this.left, u) - u / 2),
        (m = xr(e, this.right, c) + c / 2),
        (y = w = f))
      : ((y = xr(e, this.top, u) - u / 2),
        (w = xr(e, this.bottom, c) + c / 2),
        (h = m = f)),
      t.save(),
      (t.lineWidth = a.width),
      (t.strokeStyle = a.color),
      t.beginPath(),
      t.moveTo(h, y),
      t.lineTo(m, w),
      t.stroke(),
      t.restore();
  }
  drawLabels(e) {
    if (!this.options.ticks.display) return;
    const r = this.ctx,
      s = this._computeLabelArea();
    s && Rd(r, s);
    const a = this.getLabelItems(e);
    for (const u of a) {
      const c = u.options,
        f = u.font,
        h = u.label,
        m = u.textOffset;
      Us(r, h, 0, m, f, c);
    }
    s && Dd(r);
  }
  drawTitle() {
    const {
      ctx: e,
      options: { position: t, title: r, reverse: s },
    } = this;
    if (!r.display) return;
    const a = mt(r.font),
      u = Ut(r.padding),
      c = r.align;
    let f = a.lineHeight / 2;
    t === "bottom" || t === "center" || be(t)
      ? ((f += u.bottom),
        it(r.text) && (f += a.lineHeight * (r.text.length - 1)))
      : (f += u.top);
    const {
      titleX: h,
      titleY: m,
      maxWidth: y,
      rotation: w,
    } = PE(this, f, t, c);
    Us(e, r.text, 0, 0, a, {
      color: r.color,
      maxWidth: y,
      rotation: w,
      textAlign: CE(c, t, s),
      textBaseline: "middle",
      translation: [h, m],
    });
  }
  draw(e) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(e),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(e));
  }
  _layers() {
    const e = this.options,
      t = (e.ticks && e.ticks.z) || 0,
      r = xe(e.grid && e.grid.z, -1),
      s = xe(e.border && e.border.z, 0);
    return !this._isVisible() || this.draw !== Ei.prototype.draw
      ? [
          {
            z: t,
            draw: (a) => {
              this.draw(a);
            },
          },
        ]
      : [
          {
            z: r,
            draw: (a) => {
              this.drawBackground(), this.drawGrid(a), this.drawTitle();
            },
          },
          {
            z: s,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: t,
            draw: (a) => {
              this.drawLabels(a);
            },
          },
        ];
  }
  getMatchingVisibleMetas(e) {
    const t = this.chart.getSortedVisibleDatasetMetas(),
      r = this.axis + "AxisID",
      s = [];
    let a, u;
    for (a = 0, u = t.length; a < u; ++a) {
      const c = t[a];
      c[r] === this.id && (!e || c.type === e) && s.push(c);
    }
    return s;
  }
  _resolveTickFontOptions(e) {
    const t = this.options.ticks.setContext(this.getContext(e));
    return mt(t.font);
  }
  _maxDigits() {
    const e = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / e;
  }
}
class Ea {
  constructor(e, t, r) {
    (this.type = e),
      (this.scope = t),
      (this.override = r),
      (this.items = Object.create(null));
  }
  isForType(e) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      e.prototype
    );
  }
  register(e) {
    const t = Object.getPrototypeOf(e);
    let r;
    ME(t) && (r = this.register(t));
    const s = this.items,
      a = e.id,
      u = this.scope + "." + a;
    if (!a) throw new Error("class does not have id: " + e);
    return (
      a in s ||
        ((s[a] = e),
        TE(e, u, r),
        this.override && Xe.override(e.id, e.overrides)),
      u
    );
  }
  get(e) {
    return this.items[e];
  }
  unregister(e) {
    const t = this.items,
      r = e.id,
      s = this.scope;
    r in t && delete t[r],
      s && r in Xe[s] && (delete Xe[s][r], this.override && delete Ir[r]);
  }
}
function TE(n, e, t) {
  const r = Ws(Object.create(null), [
    t ? Xe.get(t) : {},
    Xe.get(e),
    n.defaults,
  ]);
  Xe.set(e, r),
    n.defaultRoutes && OE(e, n.defaultRoutes),
    n.descriptors && Xe.describe(e, n.descriptors);
}
function OE(n, e) {
  Object.keys(e).forEach((t) => {
    const r = t.split("."),
      s = r.pop(),
      a = [n].concat(r).join("."),
      u = e[t].split("."),
      c = u.pop(),
      f = u.join(".");
    Xe.route(a, s, f, c);
  });
}
function ME(n) {
  return "id" in n && "defaults" in n;
}
class RE {
  constructor() {
    (this.controllers = new Ea(Is, "datasets", !0)),
      (this.elements = new Ea(Dn, "elements")),
      (this.plugins = new Ea(Object, "plugins")),
      (this.scales = new Ea(Ei, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...e) {
    this._each("register", e);
  }
  remove(...e) {
    this._each("unregister", e);
  }
  addControllers(...e) {
    this._each("register", e, this.controllers);
  }
  addElements(...e) {
    this._each("register", e, this.elements);
  }
  addPlugins(...e) {
    this._each("register", e, this.plugins);
  }
  addScales(...e) {
    this._each("register", e, this.scales);
  }
  getController(e) {
    return this._get(e, this.controllers, "controller");
  }
  getElement(e) {
    return this._get(e, this.elements, "element");
  }
  getPlugin(e) {
    return this._get(e, this.plugins, "plugin");
  }
  getScale(e) {
    return this._get(e, this.scales, "scale");
  }
  removeControllers(...e) {
    this._each("unregister", e, this.controllers);
  }
  removeElements(...e) {
    this._each("unregister", e, this.elements);
  }
  removePlugins(...e) {
    this._each("unregister", e, this.plugins);
  }
  removeScales(...e) {
    this._each("unregister", e, this.scales);
  }
  _each(e, t, r) {
    [...t].forEach((s) => {
      const a = r || this._getRegistryForType(s);
      r || a.isForType(s) || (a === this.plugins && s.id)
        ? this._exec(e, a, s)
        : Oe(s, (u) => {
            const c = r || this._getRegistryForType(u);
            this._exec(e, c, u);
          });
    });
  }
  _exec(e, t, r) {
    const s = Pd(e);
    Ie(r["before" + s], [], r), t[e](r), Ie(r["after" + s], [], r);
  }
  _getRegistryForType(e) {
    for (let t = 0; t < this._typedRegistries.length; t++) {
      const r = this._typedRegistries[t];
      if (r.isForType(e)) return r;
    }
    return this.plugins;
  }
  _get(e, t, r) {
    const s = t.get(e);
    if (s === void 0)
      throw new Error('"' + e + '" is not a registered ' + r + ".");
    return s;
  }
}
var un = new RE();
class DE {
  constructor() {
    this._init = [];
  }
  notify(e, t, r, s) {
    t === "beforeInit" &&
      ((this._init = this._createDescriptors(e, !0)),
      this._notify(this._init, e, "install"));
    const a = s ? this._descriptors(e).filter(s) : this._descriptors(e),
      u = this._notify(a, e, t, r);
    return (
      t === "afterDestroy" &&
        (this._notify(a, e, "stop"), this._notify(this._init, e, "uninstall")),
      u
    );
  }
  _notify(e, t, r, s) {
    s = s || {};
    for (const a of e) {
      const u = a.plugin,
        c = u[r],
        f = [t, s, a.options];
      if (Ie(c, f, u) === !1 && s.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    Ue(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(e) {
    if (this._cache) return this._cache;
    const t = (this._cache = this._createDescriptors(e));
    return this._notifyStateChanges(e), t;
  }
  _createDescriptors(e, t) {
    const r = e && e.config,
      s = xe(r.options && r.options.plugins, {}),
      a = LE(r);
    return s === !1 && !t ? [] : NE(e, a, s, t);
  }
  _notifyStateChanges(e) {
    const t = this._oldCache || [],
      r = this._cache,
      s = (a, u) =>
        a.filter((c) => !u.some((f) => c.plugin.id === f.plugin.id));
    this._notify(s(t, r), e, "stop"), this._notify(s(r, t), e, "start");
  }
}
function LE(n) {
  const e = {},
    t = [],
    r = Object.keys(un.plugins.items);
  for (let a = 0; a < r.length; a++) t.push(un.getPlugin(r[a]));
  const s = n.plugins || [];
  for (let a = 0; a < s.length; a++) {
    const u = s[a];
    t.indexOf(u) === -1 && (t.push(u), (e[u.id] = !0));
  }
  return { plugins: t, localIds: e };
}
function IE(n, e) {
  return !e && n === !1 ? null : n === !0 ? {} : n;
}
function NE(n, { plugins: e, localIds: t }, r, s) {
  const a = [],
    u = n.getContext();
  for (const c of e) {
    const f = c.id,
      h = IE(r[f], s);
    h !== null &&
      a.push({
        plugin: c,
        options: zE(n.config, { plugin: c, local: t[f] }, h, u),
      });
  }
  return a;
}
function zE(n, { plugin: e, local: t }, r, s) {
  const a = n.pluginScopeKeys(e),
    u = n.getOptionScopes(r, a);
  return (
    t && e.defaults && u.push(e.defaults),
    n.createResolver(u, s, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function Qc(n, e) {
  const t = Xe.datasets[n] || {};
  return (
    ((e.datasets || {})[n] || {}).indexAxis || e.indexAxis || t.indexAxis || "x"
  );
}
function FE(n, e) {
  let t = n;
  return (
    n === "_index_" ? (t = e) : n === "_value_" && (t = e === "x" ? "y" : "x"),
    t
  );
}
function AE(n, e) {
  return n === e ? "_index_" : "_value_";
}
function dg(n) {
  if (n === "x" || n === "y" || n === "r") return n;
}
function jE(n) {
  if (n === "top" || n === "bottom") return "x";
  if (n === "left" || n === "right") return "y";
}
function Zc(n, ...e) {
  if (dg(n)) return n;
  for (const t of e) {
    const r =
      t.axis || jE(t.position) || (n.length > 1 && dg(n[0].toLowerCase()));
    if (r) return r;
  }
  throw new Error(
    `Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`
  );
}
function fg(n, e, t) {
  if (t[e + "AxisID"] === n) return { axis: e };
}
function WE(n, e) {
  if (e.data && e.data.datasets) {
    const t = e.data.datasets.filter((r) => r.xAxisID === n || r.yAxisID === n);
    if (t.length) return fg(n, "x", t[0]) || fg(n, "y", t[0]);
  }
  return {};
}
function HE(n, e) {
  const t = Ir[n.type] || { scales: {} },
    r = e.scales || {},
    s = Qc(n.type, e),
    a = Object.create(null);
  return (
    Object.keys(r).forEach((u) => {
      const c = r[u];
      if (!be(c))
        return console.error(`Invalid scale configuration for scale: ${u}`);
      if (c._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${u}`
        );
      const f = Zc(u, c, WE(u, n), Xe.scales[c.type]),
        h = AE(f, s),
        m = t.scales || {};
      a[u] = Os(Object.create(null), [{ axis: f }, c, m[f], m[h]]);
    }),
    n.data.datasets.forEach((u) => {
      const c = u.type || n.type,
        f = u.indexAxis || Qc(c, e),
        m = (Ir[c] || {}).scales || {};
      Object.keys(m).forEach((y) => {
        const w = FE(y, f),
          v = u[w + "AxisID"] || w;
        (a[v] = a[v] || Object.create(null)),
          Os(a[v], [{ axis: w }, r[v], m[y]]);
      });
    }),
    Object.keys(a).forEach((u) => {
      const c = a[u];
      Os(c, [Xe.scales[c.type], Xe.scale]);
    }),
    a
  );
}
function h0(n) {
  const e = n.options || (n.options = {});
  (e.plugins = xe(e.plugins, {})), (e.scales = HE(n, e));
}
function p0(n) {
  return (
    (n = n || {}),
    (n.datasets = n.datasets || []),
    (n.labels = n.labels || []),
    n
  );
}
function BE(n) {
  return (n = n || {}), (n.data = p0(n.data)), h0(n), n;
}
const hg = new Map(),
  m0 = new Set();
function Ca(n, e) {
  let t = hg.get(n);
  return t || ((t = e()), hg.set(n, t), m0.add(t)), t;
}
const xs = (n, e, t) => {
  const r = Ka(e, t);
  r !== void 0 && n.add(r);
};
class UE {
  constructor(e) {
    (this._config = BE(e)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(e) {
    this._config.type = e;
  }
  get data() {
    return this._config.data;
  }
  set data(e) {
    this._config.data = p0(e);
  }
  get options() {
    return this._config.options;
  }
  set options(e) {
    this._config.options = e;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const e = this._config;
    this.clearCache(), h0(e);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(e) {
    return Ca(e, () => [[`datasets.${e}`, ""]]);
  }
  datasetAnimationScopeKeys(e, t) {
    return Ca(`${e}.transition.${t}`, () => [
      [`datasets.${e}.transitions.${t}`, `transitions.${t}`],
      [`datasets.${e}`, ""],
    ]);
  }
  datasetElementScopeKeys(e, t) {
    return Ca(`${e}-${t}`, () => [
      [`datasets.${e}.elements.${t}`, `datasets.${e}`, `elements.${t}`, ""],
    ]);
  }
  pluginScopeKeys(e) {
    const t = e.id,
      r = this.type;
    return Ca(`${r}-plugin-${t}`, () => [
      [`plugins.${t}`, ...(e.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(e, t) {
    const r = this._scopeCache;
    let s = r.get(e);
    return (!s || t) && ((s = new Map()), r.set(e, s)), s;
  }
  getOptionScopes(e, t, r) {
    const { options: s, type: a } = this,
      u = this._cachedScopes(e, r),
      c = u.get(t);
    if (c) return c;
    const f = new Set();
    t.forEach((m) => {
      e && (f.add(e), m.forEach((y) => xs(f, e, y))),
        m.forEach((y) => xs(f, s, y)),
        m.forEach((y) => xs(f, Ir[a] || {}, y)),
        m.forEach((y) => xs(f, Xe, y)),
        m.forEach((y) => xs(f, Xc, y));
    });
    const h = Array.from(f);
    return (
      h.length === 0 && h.push(Object.create(null)), m0.has(t) && u.set(t, h), h
    );
  }
  chartOptionScopes() {
    const { options: e, type: t } = this;
    return [e, Ir[t] || {}, Xe.datasets[t] || {}, { type: t }, Xe, Xc];
  }
  resolveNamedOptions(e, t, r, s = [""]) {
    const a = { $shared: !0 },
      { resolver: u, subPrefixes: c } = pg(this._resolverCache, e, s);
    let f = u;
    if (VE(u, t)) {
      (a.$shared = !1), (r = sr(r) ? r() : r);
      const h = this.createResolver(e, r, c);
      f = wi(u, r, h);
    }
    for (const h of t) a[h] = f[h];
    return a;
  }
  createResolver(e, t, r = [""], s) {
    const { resolver: a } = pg(this._resolverCache, e, r);
    return be(t) ? wi(a, t, void 0, s) : a;
  }
}
function pg(n, e, t) {
  let r = n.get(e);
  r || ((r = new Map()), n.set(e, r));
  const s = t.join();
  let a = r.get(s);
  return (
    a ||
      ((a = {
        resolver: Ld(e, t),
        subPrefixes: t.filter((c) => !c.toLowerCase().includes("hover")),
      }),
      r.set(s, a)),
    a
  );
}
const $E = (n) => be(n) && Object.getOwnPropertyNames(n).some((e) => sr(n[e]));
function VE(n, e) {
  const { isScriptable: t, isIndexable: r } = Qy(n);
  for (const s of e) {
    const a = t(s),
      u = r(s),
      c = (u || a) && n[s];
    if ((a && (sr(c) || $E(c))) || (u && it(c))) return !0;
  }
  return !1;
}
var YE = "4.4.7";
const KE = ["top", "bottom", "left", "right", "chartArea"];
function mg(n, e) {
  return n === "top" || n === "bottom" || (KE.indexOf(n) === -1 && e === "x");
}
function gg(n, e) {
  return function (t, r) {
    return t[n] === r[n] ? t[e] - r[e] : t[n] - r[n];
  };
}
function yg(n) {
  const e = n.chart,
    t = e.options.animation;
  e.notifyPlugins("afterRender"), Ie(t && t.onComplete, [n], e);
}
function XE(n) {
  const e = n.chart,
    t = e.options.animation;
  Ie(t && t.onProgress, [n], e);
}
function g0(n) {
  return (
    zd() && typeof n == "string"
      ? (n = document.getElementById(n))
      : n && n.length && (n = n[0]),
    n && n.canvas && (n = n.canvas),
    n
  );
}
const Wa = {},
  wg = (n) => {
    const e = g0(n);
    return Object.values(Wa)
      .filter((t) => t.canvas === e)
      .pop();
  };
function qE(n, e, t) {
  const r = Object.keys(n);
  for (const s of r) {
    const a = +s;
    if (a >= e) {
      const u = n[s];
      delete n[s], (t > 0 || a > e) && (n[a + t] = u);
    }
  }
}
function GE(n, e, t, r) {
  return !t || n.type === "mouseout" ? null : r ? e : n;
}
function Pa(n, e, t) {
  return n.options.clip ? n[t] : e[t];
}
function QE(n, e) {
  const { xScale: t, yScale: r } = n;
  return t && r
    ? {
        left: Pa(t, e, "left"),
        right: Pa(t, e, "right"),
        top: Pa(r, e, "top"),
        bottom: Pa(r, e, "bottom"),
      }
    : e;
}
var er;
let dl =
  ((er = class {
    static register(...e) {
      un.add(...e), vg();
    }
    static unregister(...e) {
      un.remove(...e), vg();
    }
    constructor(e, t) {
      const r = (this.config = new UE(t)),
        s = g0(e),
        a = wg(s);
      if (a)
        throw new Error(
          "Canvas is already in use. Chart with ID '" +
            a.id +
            "' must be destroyed before the canvas with ID '" +
            a.canvas.id +
            "' can be reused."
        );
      const u = r.createResolver(r.chartOptionScopes(), this.getContext());
      (this.platform = new (r.platform || pE(s))()),
        this.platform.updateConfig(r);
      const c = this.platform.acquireContext(s, u.aspectRatio),
        f = c && c.canvas,
        h = f && f.height,
        m = f && f.width;
      if (
        ((this.id = ib()),
        (this.ctx = c),
        (this.canvas = f),
        (this.width = m),
        (this.height = h),
        (this._options = u),
        (this._aspectRatio = this.aspectRatio),
        (this._layers = []),
        (this._metasets = []),
        (this._stacks = void 0),
        (this.boxes = []),
        (this.currentDevicePixelRatio = void 0),
        (this.chartArea = void 0),
        (this._active = []),
        (this._lastEvent = void 0),
        (this._listeners = {}),
        (this._responsiveListeners = void 0),
        (this._sortedMetasets = []),
        (this.scales = {}),
        (this._plugins = new DE()),
        (this.$proxies = {}),
        (this._hiddenIndices = {}),
        (this.attached = !1),
        (this._animationsDisabled = void 0),
        (this.$context = void 0),
        (this._doResize = Sb((y) => this.update(y), u.resizeDelay || 0)),
        (this._dataChanges = []),
        (Wa[this.id] = this),
        !c || !f)
      ) {
        console.error(
          "Failed to create chart: can't acquire context from the given item"
        );
        return;
      }
      Tn.listen(this, "complete", yg),
        Tn.listen(this, "progress", XE),
        this._initialize(),
        this.attached && this.update();
    }
    get aspectRatio() {
      const {
        options: { aspectRatio: e, maintainAspectRatio: t },
        width: r,
        height: s,
        _aspectRatio: a,
      } = this;
      return Ue(e) ? (t && a ? a : s ? r / s : null) : e;
    }
    get data() {
      return this.config.data;
    }
    set data(e) {
      this.config.data = e;
    }
    get options() {
      return this._options;
    }
    set options(e) {
      this.config.options = e;
    }
    get registry() {
      return un;
    }
    _initialize() {
      return (
        this.notifyPlugins("beforeInit"),
        this.options.responsive
          ? this.resize()
          : $m(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins("afterInit"),
        this
      );
    }
    clear() {
      return Hm(this.canvas, this.ctx), this;
    }
    stop() {
      return Tn.stop(this), this;
    }
    resize(e, t) {
      Tn.running(this)
        ? (this._resizeBeforeDraw = { width: e, height: t })
        : this._resize(e, t);
    }
    _resize(e, t) {
      const r = this.options,
        s = this.canvas,
        a = r.maintainAspectRatio && this.aspectRatio,
        u = this.platform.getMaximumSize(s, e, t, a),
        c = r.devicePixelRatio || this.platform.getDevicePixelRatio(),
        f = this.width ? "resize" : "attach";
      (this.width = u.width),
        (this.height = u.height),
        (this._aspectRatio = this.aspectRatio),
        $m(this, c, !0) &&
          (this.notifyPlugins("resize", { size: u }),
          Ie(r.onResize, [this, u], this),
          this.attached && this._doResize(f) && this.render());
    }
    ensureScalesHaveIDs() {
      const t = this.options.scales || {};
      Oe(t, (r, s) => {
        r.id = s;
      });
    }
    buildOrUpdateScales() {
      const e = this.options,
        t = e.scales,
        r = this.scales,
        s = Object.keys(r).reduce((u, c) => ((u[c] = !1), u), {});
      let a = [];
      t &&
        (a = a.concat(
          Object.keys(t).map((u) => {
            const c = t[u],
              f = Zc(u, c),
              h = f === "r",
              m = f === "x";
            return {
              options: c,
              dposition: h ? "chartArea" : m ? "bottom" : "left",
              dtype: h ? "radialLinear" : m ? "category" : "linear",
            };
          })
        )),
        Oe(a, (u) => {
          const c = u.options,
            f = c.id,
            h = Zc(f, c),
            m = xe(c.type, u.dtype);
          (c.position === void 0 || mg(c.position, h) !== mg(u.dposition)) &&
            (c.position = u.dposition),
            (s[f] = !0);
          let y = null;
          if (f in r && r[f].type === m) y = r[f];
          else {
            const w = un.getScale(m);
            (y = new w({ id: f, type: m, ctx: this.ctx, chart: this })),
              (r[y.id] = y);
          }
          y.init(c, e);
        }),
        Oe(s, (u, c) => {
          u || delete r[c];
        }),
        Oe(r, (u) => {
          Ht.configure(this, u, u.options), Ht.addBox(this, u);
        });
    }
    _updateMetasets() {
      const e = this._metasets,
        t = this.data.datasets.length,
        r = e.length;
      if ((e.sort((s, a) => s.index - a.index), r > t)) {
        for (let s = t; s < r; ++s) this._destroyDatasetMeta(s);
        e.splice(t, r - t);
      }
      this._sortedMetasets = e.slice(0).sort(gg("order", "index"));
    }
    _removeUnreferencedMetasets() {
      const {
        _metasets: e,
        data: { datasets: t },
      } = this;
      e.length > t.length && delete this._stacks,
        e.forEach((r, s) => {
          t.filter((a) => a === r._dataset).length === 0 &&
            this._destroyDatasetMeta(s);
        });
    }
    buildOrUpdateControllers() {
      const e = [],
        t = this.data.datasets;
      let r, s;
      for (
        this._removeUnreferencedMetasets(), r = 0, s = t.length;
        r < s;
        r++
      ) {
        const a = t[r];
        let u = this.getDatasetMeta(r);
        const c = a.type || this.config.type;
        if (
          (u.type &&
            u.type !== c &&
            (this._destroyDatasetMeta(r), (u = this.getDatasetMeta(r))),
          (u.type = c),
          (u.indexAxis = a.indexAxis || Qc(c, this.options)),
          (u.order = a.order || 0),
          (u.index = r),
          (u.label = "" + a.label),
          (u.visible = this.isDatasetVisible(r)),
          u.controller)
        )
          u.controller.updateIndex(r), u.controller.linkScales();
        else {
          const f = un.getController(c),
            { datasetElementType: h, dataElementType: m } = Xe.datasets[c];
          Object.assign(f, {
            dataElementType: un.getElement(m),
            datasetElementType: h && un.getElement(h),
          }),
            (u.controller = new f(this, r)),
            e.push(u.controller);
        }
      }
      return this._updateMetasets(), e;
    }
    _resetElements() {
      Oe(
        this.data.datasets,
        (e, t) => {
          this.getDatasetMeta(t).controller.reset();
        },
        this
      );
    }
    reset() {
      this._resetElements(), this.notifyPlugins("reset");
    }
    update(e) {
      const t = this.config;
      t.update();
      const r = (this._options = t.createResolver(
          t.chartOptionScopes(),
          this.getContext()
        )),
        s = (this._animationsDisabled = !r.animation);
      if (
        (this._updateScales(),
        this._checkEventBindings(),
        this._updateHiddenIndices(),
        this._plugins.invalidate(),
        this.notifyPlugins("beforeUpdate", { mode: e, cancelable: !0 }) === !1)
      )
        return;
      const a = this.buildOrUpdateControllers();
      this.notifyPlugins("beforeElementsUpdate");
      let u = 0;
      for (let h = 0, m = this.data.datasets.length; h < m; h++) {
        const { controller: y } = this.getDatasetMeta(h),
          w = !s && a.indexOf(y) === -1;
        y.buildOrUpdateElements(w), (u = Math.max(+y.getMaxOverflow(), u));
      }
      (u = this._minPadding = r.layout.autoPadding ? u : 0),
        this._updateLayout(u),
        s ||
          Oe(a, (h) => {
            h.reset();
          }),
        this._updateDatasets(e),
        this.notifyPlugins("afterUpdate", { mode: e }),
        this._layers.sort(gg("z", "_idx"));
      const { _active: c, _lastEvent: f } = this;
      f
        ? this._eventHandler(f, !0)
        : c.length && this._updateHoverStyles(c, c, !0),
        this.render();
    }
    _updateScales() {
      Oe(this.scales, (e) => {
        Ht.removeBox(this, e);
      }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const e = this.options,
        t = new Set(Object.keys(this._listeners)),
        r = new Set(e.events);
      (!Rm(t, r) || !!this._responsiveListeners !== e.responsive) &&
        (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: e } = this,
        t = this._getUniformDataChanges() || [];
      for (const { method: r, start: s, count: a } of t) {
        const u = r === "_removeElements" ? -a : a;
        qE(e, s, u);
      }
    }
    _getUniformDataChanges() {
      const e = this._dataChanges;
      if (!e || !e.length) return;
      this._dataChanges = [];
      const t = this.data.datasets.length,
        r = (a) =>
          new Set(
            e
              .filter((u) => u[0] === a)
              .map((u, c) => c + "," + u.splice(1).join(","))
          ),
        s = r(0);
      for (let a = 1; a < t; a++) if (!Rm(s, r(a))) return;
      return Array.from(s)
        .map((a) => a.split(","))
        .map((a) => ({ method: a[1], start: +a[2], count: +a[3] }));
    }
    _updateLayout(e) {
      if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
      Ht.update(this, this.width, this.height, e);
      const t = this.chartArea,
        r = t.width <= 0 || t.height <= 0;
      (this._layers = []),
        Oe(
          this.boxes,
          (s) => {
            (r && s.position === "chartArea") ||
              (s.configure && s.configure(), this._layers.push(...s._layers()));
          },
          this
        ),
        this._layers.forEach((s, a) => {
          s._idx = a;
        }),
        this.notifyPlugins("afterLayout");
    }
    _updateDatasets(e) {
      if (
        this.notifyPlugins("beforeDatasetsUpdate", {
          mode: e,
          cancelable: !0,
        }) !== !1
      ) {
        for (let t = 0, r = this.data.datasets.length; t < r; ++t)
          this.getDatasetMeta(t).controller.configure();
        for (let t = 0, r = this.data.datasets.length; t < r; ++t)
          this._updateDataset(t, sr(e) ? e({ datasetIndex: t }) : e);
        this.notifyPlugins("afterDatasetsUpdate", { mode: e });
      }
    }
    _updateDataset(e, t) {
      const r = this.getDatasetMeta(e),
        s = { meta: r, index: e, mode: t, cancelable: !0 };
      this.notifyPlugins("beforeDatasetUpdate", s) !== !1 &&
        (r.controller._update(t),
        (s.cancelable = !1),
        this.notifyPlugins("afterDatasetUpdate", s));
    }
    render() {
      this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
        (Tn.has(this)
          ? this.attached && !Tn.running(this) && Tn.start(this)
          : (this.draw(), yg({ chart: this })));
    }
    draw() {
      let e;
      if (this._resizeBeforeDraw) {
        const { width: r, height: s } = this._resizeBeforeDraw;
        (this._resizeBeforeDraw = null), this._resize(r, s);
      }
      if (
        (this.clear(),
        this.width <= 0 ||
          this.height <= 0 ||
          this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
      )
        return;
      const t = this._layers;
      for (e = 0; e < t.length && t[e].z <= 0; ++e) t[e].draw(this.chartArea);
      for (this._drawDatasets(); e < t.length; ++e) t[e].draw(this.chartArea);
      this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(e) {
      const t = this._sortedMetasets,
        r = [];
      let s, a;
      for (s = 0, a = t.length; s < a; ++s) {
        const u = t[s];
        (!e || u.visible) && r.push(u);
      }
      return r;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
      if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
        return;
      const e = this.getSortedVisibleDatasetMetas();
      for (let t = e.length - 1; t >= 0; --t) this._drawDataset(e[t]);
      this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(e) {
      const t = this.ctx,
        r = e._clip,
        s = !r.disabled,
        a = QE(e, this.chartArea),
        u = { meta: e, index: e.index, cancelable: !0 };
      this.notifyPlugins("beforeDatasetDraw", u) !== !1 &&
        (s &&
          Rd(t, {
            left: r.left === !1 ? 0 : a.left - r.left,
            right: r.right === !1 ? this.width : a.right + r.right,
            top: r.top === !1 ? 0 : a.top - r.top,
            bottom: r.bottom === !1 ? this.height : a.bottom + r.bottom,
          }),
        e.controller.draw(),
        s && Dd(t),
        (u.cancelable = !1),
        this.notifyPlugins("afterDatasetDraw", u));
    }
    isPointInArea(e) {
      return Bs(e, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(e, t, r, s) {
      const a = KS.modes[t];
      return typeof a == "function" ? a(this, e, r, s) : [];
    }
    getDatasetMeta(e) {
      const t = this.data.datasets[e],
        r = this._metasets;
      let s = r.filter((a) => a && a._dataset === t).pop();
      return (
        s ||
          ((s = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: (t && t.order) || 0,
            index: e,
            _dataset: t,
            _parsed: [],
            _sorted: !1,
          }),
          r.push(s)),
        s
      );
    }
    getContext() {
      return (
        this.$context ||
        (this.$context = zr(null, { chart: this, type: "chart" }))
      );
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(e) {
      const t = this.data.datasets[e];
      if (!t) return !1;
      const r = this.getDatasetMeta(e);
      return typeof r.hidden == "boolean" ? !r.hidden : !t.hidden;
    }
    setDatasetVisibility(e, t) {
      const r = this.getDatasetMeta(e);
      r.hidden = !t;
    }
    toggleDataVisibility(e) {
      this._hiddenIndices[e] = !this._hiddenIndices[e];
    }
    getDataVisibility(e) {
      return !this._hiddenIndices[e];
    }
    _updateVisibility(e, t, r) {
      const s = r ? "show" : "hide",
        a = this.getDatasetMeta(e),
        u = a.controller._resolveAnimations(void 0, s);
      Xa(t)
        ? ((a.data[t].hidden = !r), this.update())
        : (this.setDatasetVisibility(e, r),
          u.update(a, { visible: r }),
          this.update((c) => (c.datasetIndex === e ? s : void 0)));
    }
    hide(e, t) {
      this._updateVisibility(e, t, !1);
    }
    show(e, t) {
      this._updateVisibility(e, t, !0);
    }
    _destroyDatasetMeta(e) {
      const t = this._metasets[e];
      t && t.controller && t.controller._destroy(), delete this._metasets[e];
    }
    _stop() {
      let e, t;
      for (
        this.stop(), Tn.remove(this), e = 0, t = this.data.datasets.length;
        e < t;
        ++e
      )
        this._destroyDatasetMeta(e);
    }
    destroy() {
      this.notifyPlugins("beforeDestroy");
      const { canvas: e, ctx: t } = this;
      this._stop(),
        this.config.clearCache(),
        e &&
          (this.unbindEvents(),
          Hm(e, t),
          this.platform.releaseContext(t),
          (this.canvas = null),
          (this.ctx = null)),
        delete Wa[this.id],
        this.notifyPlugins("afterDestroy");
    }
    toBase64Image(...e) {
      return this.canvas.toDataURL(...e);
    }
    bindEvents() {
      this.bindUserEvents(),
        this.options.responsive
          ? this.bindResponsiveEvents()
          : (this.attached = !0);
    }
    bindUserEvents() {
      const e = this._listeners,
        t = this.platform,
        r = (a, u) => {
          t.addEventListener(this, a, u), (e[a] = u);
        },
        s = (a, u, c) => {
          (a.offsetX = u), (a.offsetY = c), this._eventHandler(a);
        };
      Oe(this.options.events, (a) => r(a, s));
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {});
      const e = this._responsiveListeners,
        t = this.platform,
        r = (f, h) => {
          t.addEventListener(this, f, h), (e[f] = h);
        },
        s = (f, h) => {
          e[f] && (t.removeEventListener(this, f, h), delete e[f]);
        },
        a = (f, h) => {
          this.canvas && this.resize(f, h);
        };
      let u;
      const c = () => {
        s("attach", c),
          (this.attached = !0),
          this.resize(),
          r("resize", a),
          r("detach", u);
      };
      (u = () => {
        (this.attached = !1),
          s("resize", a),
          this._stop(),
          this._resize(0, 0),
          r("attach", c);
      }),
        t.isAttached(this.canvas) ? c() : u();
    }
    unbindEvents() {
      Oe(this._listeners, (e, t) => {
        this.platform.removeEventListener(this, t, e);
      }),
        (this._listeners = {}),
        Oe(this._responsiveListeners, (e, t) => {
          this.platform.removeEventListener(this, t, e);
        }),
        (this._responsiveListeners = void 0);
    }
    updateHoverStyle(e, t, r) {
      const s = r ? "set" : "remove";
      let a, u, c, f;
      for (
        t === "dataset" &&
          ((a = this.getDatasetMeta(e[0].datasetIndex)),
          a.controller["_" + s + "DatasetHoverStyle"]()),
          c = 0,
          f = e.length;
        c < f;
        ++c
      ) {
        u = e[c];
        const h = u && this.getDatasetMeta(u.datasetIndex).controller;
        h && h[s + "HoverStyle"](u.element, u.datasetIndex, u.index);
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(e) {
      const t = this._active || [],
        r = e.map(({ datasetIndex: a, index: u }) => {
          const c = this.getDatasetMeta(a);
          if (!c) throw new Error("No dataset found at index " + a);
          return { datasetIndex: a, element: c.data[u], index: u };
        });
      !Va(r, t) &&
        ((this._active = r),
        (this._lastEvent = null),
        this._updateHoverStyles(r, t));
    }
    notifyPlugins(e, t, r) {
      return this._plugins.notify(this, e, t, r);
    }
    isPluginEnabled(e) {
      return this._plugins._cache.filter((t) => t.plugin.id === e).length === 1;
    }
    _updateHoverStyles(e, t, r) {
      const s = this.options.hover,
        a = (f, h) =>
          f.filter(
            (m) =>
              !h.some(
                (y) => m.datasetIndex === y.datasetIndex && m.index === y.index
              )
          ),
        u = a(t, e),
        c = r ? e : a(e, t);
      u.length && this.updateHoverStyle(u, s.mode, !1),
        c.length && s.mode && this.updateHoverStyle(c, s.mode, !0);
    }
    _eventHandler(e, t) {
      const r = {
          event: e,
          replay: t,
          cancelable: !0,
          inChartArea: this.isPointInArea(e),
        },
        s = (u) =>
          (u.options.events || this.options.events).includes(e.native.type);
      if (this.notifyPlugins("beforeEvent", r, s) === !1) return;
      const a = this._handleEvent(e, t, r.inChartArea);
      return (
        (r.cancelable = !1),
        this.notifyPlugins("afterEvent", r, s),
        (a || r.changed) && this.render(),
        this
      );
    }
    _handleEvent(e, t, r) {
      const { _active: s = [], options: a } = this,
        u = t,
        c = this._getActiveElements(e, s, r, u),
        f = cb(e),
        h = GE(e, this._lastEvent, r, f);
      r &&
        ((this._lastEvent = null),
        Ie(a.onHover, [e, c, this], this),
        f && Ie(a.onClick, [e, c, this], this));
      const m = !Va(c, s);
      return (
        (m || t) && ((this._active = c), this._updateHoverStyles(c, s, t)),
        (this._lastEvent = h),
        m
      );
    }
    _getActiveElements(e, t, r, s) {
      if (e.type === "mouseout") return [];
      if (!r) return t;
      const a = this.options.hover;
      return this.getElementsAtEventForMode(e, a.mode, a, s);
    }
  }),
  V(er, "defaults", Xe),
  V(er, "instances", Wa),
  V(er, "overrides", Ir),
  V(er, "registry", un),
  V(er, "version", YE),
  V(er, "getChart", wg),
  er);
function vg() {
  return Oe(dl.instances, (n) => n._plugins.invalidate());
}
function y0(n, e, t = e) {
  (n.lineCap = xe(t.borderCapStyle, e.borderCapStyle)),
    n.setLineDash(xe(t.borderDash, e.borderDash)),
    (n.lineDashOffset = xe(t.borderDashOffset, e.borderDashOffset)),
    (n.lineJoin = xe(t.borderJoinStyle, e.borderJoinStyle)),
    (n.lineWidth = xe(t.borderWidth, e.borderWidth)),
    (n.strokeStyle = xe(t.borderColor, e.borderColor));
}
function ZE(n, e, t) {
  n.lineTo(t.x, t.y);
}
function JE(n) {
  return n.stepped
    ? Fb
    : n.tension || n.cubicInterpolationMode === "monotone"
    ? Ab
    : ZE;
}
function w0(n, e, t = {}) {
  const r = n.length,
    { start: s = 0, end: a = r - 1 } = t,
    { start: u, end: c } = e,
    f = Math.max(s, u),
    h = Math.min(a, c),
    m = (s < u && a < u) || (s > c && a > c);
  return {
    count: r,
    start: f,
    loop: e.loop,
    ilen: h < f && !m ? r + h - f : h - f,
  };
}
function eC(n, e, t, r) {
  const { points: s, options: a } = e,
    { count: u, start: c, loop: f, ilen: h } = w0(s, t, r),
    m = JE(a);
  let { move: y = !0, reverse: w } = r || {},
    v,
    x,
    b;
  for (v = 0; v <= h; ++v)
    (x = s[(c + (w ? h - v : v)) % u]),
      !x.skip &&
        (y ? (n.moveTo(x.x, x.y), (y = !1)) : m(n, b, x, w, a.stepped),
        (b = x));
  return f && ((x = s[(c + (w ? h : 0)) % u]), m(n, b, x, w, a.stepped)), !!f;
}
function tC(n, e, t, r) {
  const s = e.points,
    { count: a, start: u, ilen: c } = w0(s, t, r),
    { move: f = !0, reverse: h } = r || {};
  let m = 0,
    y = 0,
    w,
    v,
    x,
    b,
    k,
    S;
  const C = (R) => (u + (h ? c - R : R)) % a,
    O = () => {
      b !== k && (n.lineTo(m, k), n.lineTo(m, b), n.lineTo(m, S));
    };
  for (f && ((v = s[C(0)]), n.moveTo(v.x, v.y)), w = 0; w <= c; ++w) {
    if (((v = s[C(w)]), v.skip)) continue;
    const R = v.x,
      A = v.y,
      W = R | 0;
    W === x
      ? (A < b ? (b = A) : A > k && (k = A), (m = (y * m + R) / ++y))
      : (O(), n.lineTo(R, A), (x = W), (y = 0), (b = k = A)),
      (S = A);
  }
  O();
}
function Jc(n) {
  const e = n.options,
    t = e.borderDash && e.borderDash.length;
  return !n._decimated &&
    !n._loop &&
    !e.tension &&
    e.cubicInterpolationMode !== "monotone" &&
    !e.stepped &&
    !t
    ? tC
    : eC;
}
function nC(n) {
  return n.stepped
    ? yS
    : n.tension || n.cubicInterpolationMode === "monotone"
    ? wS
    : Sr;
}
function rC(n, e, t, r) {
  let s = e._path;
  s || ((s = e._path = new Path2D()), e.path(s, t, r) && s.closePath()),
    y0(n, e.options),
    n.stroke(s);
}
function iC(n, e, t, r) {
  const { segments: s, options: a } = e,
    u = Jc(e);
  for (const c of s)
    y0(n, a, c.style),
      n.beginPath(),
      u(n, e, c, { start: t, end: t + r - 1 }) && n.closePath(),
      n.stroke();
}
const sC = typeof Path2D == "function";
function oC(n, e, t, r) {
  sC && !e.options.segment ? rC(n, e, t, r) : iC(n, e, t, r);
}
class Ps extends Dn {
  constructor(e) {
    super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      e && Object.assign(this, e);
  }
  updateControlPoints(e, t) {
    const r = this.options;
    if (
      (r.tension || r.cubicInterpolationMode === "monotone") &&
      !r.stepped &&
      !this._pointsUpdated
    ) {
      const s = r.spanGaps ? this._loop : this._fullLoop;
      uS(this._points, r, e, s, t), (this._pointsUpdated = !0);
    }
  }
  set points(e) {
    (this._points = e),
      delete this._segments,
      delete this._path,
      (this._pointsUpdated = !1);
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = CS(this, this.options.segment));
  }
  first() {
    const e = this.segments,
      t = this.points;
    return e.length && t[e[0].start];
  }
  last() {
    const e = this.segments,
      t = this.points,
      r = e.length;
    return r && t[e[r - 1].end];
  }
  interpolate(e, t) {
    const r = this.options,
      s = e[t],
      a = this.points,
      u = bS(this, { property: t, start: s, end: s });
    if (!u.length) return;
    const c = [],
      f = nC(r);
    let h, m;
    for (h = 0, m = u.length; h < m; ++h) {
      const { start: y, end: w } = u[h],
        v = a[y],
        x = a[w];
      if (v === x) {
        c.push(v);
        continue;
      }
      const b = Math.abs((s - v[t]) / (x[t] - v[t])),
        k = f(v, x, b, r.stepped);
      (k[t] = e[t]), c.push(k);
    }
    return c.length === 1 ? c[0] : c;
  }
  pathSegment(e, t, r) {
    return Jc(this)(e, this, t, r);
  }
  path(e, t, r) {
    const s = this.segments,
      a = Jc(this);
    let u = this._loop;
    (t = t || 0), (r = r || this.points.length - t);
    for (const c of s) u &= a(e, this, c, { start: t, end: t + r - 1 });
    return !!u;
  }
  draw(e, t, r, s) {
    const a = this.options || {};
    (this.points || []).length &&
      a.borderWidth &&
      (e.save(), oC(e, this, r, s), e.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
  }
}
V(Ps, "id", "line"),
  V(Ps, "defaults", {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  }),
  V(Ps, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  }),
  V(Ps, "descriptors", {
    _scriptable: !0,
    _indexable: (e) => e !== "borderDash" && e !== "fill",
  });
function xg(n, e, t, r) {
  const s = n.options,
    { [t]: a } = n.getProps([t], r);
  return Math.abs(e - a) < s.radius + s.hitRadius;
}
class Ha extends Dn {
  constructor(t) {
    super();
    V(this, "parsed");
    V(this, "skip");
    V(this, "stop");
    (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      t && Object.assign(this, t);
  }
  inRange(t, r, s) {
    const a = this.options,
      { x: u, y: c } = this.getProps(["x", "y"], s);
    return (
      Math.pow(t - u, 2) + Math.pow(r - c, 2) <
      Math.pow(a.hitRadius + a.radius, 2)
    );
  }
  inXRange(t, r) {
    return xg(this, t, "x", r);
  }
  inYRange(t, r) {
    return xg(this, t, "y", r);
  }
  getCenterPoint(t) {
    const { x: r, y: s } = this.getProps(["x", "y"], t);
    return { x: r, y: s };
  }
  size(t) {
    t = t || this.options || {};
    let r = t.radius || 0;
    r = Math.max(r, (r && t.hoverRadius) || 0);
    const s = (r && t.borderWidth) || 0;
    return (r + s) * 2;
  }
  draw(t, r) {
    const s = this.options;
    this.skip ||
      s.radius < 0.1 ||
      !Bs(this, r, this.size(s) / 2) ||
      ((t.strokeStyle = s.borderColor),
      (t.lineWidth = s.borderWidth),
      (t.fillStyle = s.backgroundColor),
      qc(t, s, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
V(Ha, "id", "point"),
  V(Ha, "defaults", {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0,
  }),
  V(Ha, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  });
const _g = (n, e) => {
    let { boxHeight: t = e, boxWidth: r = e } = n;
    return (
      n.usePointStyle &&
        ((t = Math.min(t, e)), (r = n.pointStyleWidth || Math.min(r, e))),
      { boxWidth: r, boxHeight: t, itemHeight: Math.max(e, t) }
    );
  },
  aC = (n, e) =>
    n !== null &&
    e !== null &&
    n.datasetIndex === e.datasetIndex &&
    n.index === e.index;
class kg extends Dn {
  constructor(e) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = e.chart),
      (this.options = e.options),
      (this.ctx = e.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(e, t, r) {
    (this.maxWidth = e),
      (this.maxHeight = t),
      (this._margins = r),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const e = this.options.labels || {};
    let t = Ie(e.generateLabels, [this.chart], this) || [];
    e.filter && (t = t.filter((r) => e.filter(r, this.chart.data))),
      e.sort && (t = t.sort((r, s) => e.sort(r, s, this.chart.data))),
      this.options.reverse && t.reverse(),
      (this.legendItems = t);
  }
  fit() {
    const { options: e, ctx: t } = this;
    if (!e.display) {
      this.width = this.height = 0;
      return;
    }
    const r = e.labels,
      s = mt(r.font),
      a = s.size,
      u = this._computeTitleHeight(),
      { boxWidth: c, itemHeight: f } = _g(r, a);
    let h, m;
    (t.font = s.string),
      this.isHorizontal()
        ? ((h = this.maxWidth), (m = this._fitRows(u, a, c, f) + 10))
        : ((m = this.maxHeight), (h = this._fitCols(u, s, c, f) + 10)),
      (this.width = Math.min(h, e.maxWidth || this.maxWidth)),
      (this.height = Math.min(m, e.maxHeight || this.maxHeight));
  }
  _fitRows(e, t, r, s) {
    const {
        ctx: a,
        maxWidth: u,
        options: {
          labels: { padding: c },
        },
      } = this,
      f = (this.legendHitBoxes = []),
      h = (this.lineWidths = [0]),
      m = s + c;
    let y = e;
    (a.textAlign = "left"), (a.textBaseline = "middle");
    let w = -1,
      v = -m;
    return (
      this.legendItems.forEach((x, b) => {
        const k = r + t / 2 + a.measureText(x.text).width;
        (b === 0 || h[h.length - 1] + k + 2 * c > u) &&
          ((y += m), (h[h.length - (b > 0 ? 0 : 1)] = 0), (v += m), w++),
          (f[b] = { left: 0, top: v, row: w, width: k, height: s }),
          (h[h.length - 1] += k + c);
      }),
      y
    );
  }
  _fitCols(e, t, r, s) {
    const {
        ctx: a,
        maxHeight: u,
        options: {
          labels: { padding: c },
        },
      } = this,
      f = (this.legendHitBoxes = []),
      h = (this.columnSizes = []),
      m = u - e;
    let y = c,
      w = 0,
      v = 0,
      x = 0,
      b = 0;
    return (
      this.legendItems.forEach((k, S) => {
        const { itemWidth: C, itemHeight: O } = lC(r, t, a, k, s);
        S > 0 &&
          v + O + 2 * c > m &&
          ((y += w + c),
          h.push({ width: w, height: v }),
          (x += w + c),
          b++,
          (w = v = 0)),
          (f[S] = { left: x, top: v, col: b, width: C, height: O }),
          (w = Math.max(w, C)),
          (v += O + c);
      }),
      (y += w),
      h.push({ width: w, height: v }),
      y
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const e = this._computeTitleHeight(),
      {
        legendHitBoxes: t,
        options: {
          align: r,
          labels: { padding: s },
          rtl: a,
        },
      } = this,
      u = mi(a, this.left, this.width);
    if (this.isHorizontal()) {
      let c = 0,
        f = ft(r, this.left + s, this.right - this.lineWidths[c]);
      for (const h of t)
        c !== h.row &&
          ((c = h.row),
          (f = ft(r, this.left + s, this.right - this.lineWidths[c]))),
          (h.top += this.top + e + s),
          (h.left = u.leftForLtr(u.x(f), h.width)),
          (f += h.width + s);
    } else {
      let c = 0,
        f = ft(r, this.top + e + s, this.bottom - this.columnSizes[c].height);
      for (const h of t)
        h.col !== c &&
          ((c = h.col),
          (f = ft(
            r,
            this.top + e + s,
            this.bottom - this.columnSizes[c].height
          ))),
          (h.top = f),
          (h.left += this.left + s),
          (h.left = u.leftForLtr(u.x(h.left), h.width)),
          (f += h.height + s);
    }
  }
  isHorizontal() {
    return (
      this.options.position === "top" || this.options.position === "bottom"
    );
  }
  draw() {
    if (this.options.display) {
      const e = this.ctx;
      Rd(e, this), this._draw(), Dd(e);
    }
  }
  _draw() {
    const { options: e, columnSizes: t, lineWidths: r, ctx: s } = this,
      { align: a, labels: u } = e,
      c = Xe.color,
      f = mi(e.rtl, this.left, this.width),
      h = mt(u.font),
      { padding: m } = u,
      y = h.size,
      w = y / 2;
    let v;
    this.drawTitle(),
      (s.textAlign = f.textAlign("left")),
      (s.textBaseline = "middle"),
      (s.lineWidth = 0.5),
      (s.font = h.string);
    const { boxWidth: x, boxHeight: b, itemHeight: k } = _g(u, y),
      S = function (W, H, N) {
        if (isNaN(x) || x <= 0 || isNaN(b) || b < 0) return;
        s.save();
        const B = xe(N.lineWidth, 1);
        if (
          ((s.fillStyle = xe(N.fillStyle, c)),
          (s.lineCap = xe(N.lineCap, "butt")),
          (s.lineDashOffset = xe(N.lineDashOffset, 0)),
          (s.lineJoin = xe(N.lineJoin, "miter")),
          (s.lineWidth = B),
          (s.strokeStyle = xe(N.strokeStyle, c)),
          s.setLineDash(xe(N.lineDash, [])),
          u.usePointStyle)
        ) {
          const G = {
              radius: (b * Math.SQRT2) / 2,
              pointStyle: N.pointStyle,
              rotation: N.rotation,
              borderWidth: B,
            },
            ne = f.xPlus(W, x / 2),
            re = H + w;
          qy(s, G, ne, re, u.pointStyleWidth && x);
        } else {
          const G = H + Math.max((y - b) / 2, 0),
            ne = f.leftForLtr(W, x),
            re = Ls(N.borderRadius);
          s.beginPath(),
            Object.values(re).some((he) => he !== 0)
              ? Gc(s, { x: ne, y: G, w: x, h: b, radius: re })
              : s.rect(ne, G, x, b),
            s.fill(),
            B !== 0 && s.stroke();
        }
        s.restore();
      },
      C = function (W, H, N) {
        Us(s, N.text, W, H + k / 2, h, {
          strikethrough: N.hidden,
          textAlign: f.textAlign(N.textAlign),
        });
      },
      O = this.isHorizontal(),
      R = this._computeTitleHeight();
    O
      ? (v = {
          x: ft(a, this.left + m, this.right - r[0]),
          y: this.top + m + R,
          line: 0,
        })
      : (v = {
          x: this.left + m,
          y: ft(a, this.top + R + m, this.bottom - t[0].height),
          line: 0,
        }),
      n0(this.ctx, e.textDirection);
    const A = k + m;
    this.legendItems.forEach((W, H) => {
      (s.strokeStyle = W.fontColor), (s.fillStyle = W.fontColor);
      const N = s.measureText(W.text).width,
        B = f.textAlign(W.textAlign || (W.textAlign = u.textAlign)),
        G = x + w + N;
      let ne = v.x,
        re = v.y;
      f.setWidth(this.width),
        O
          ? H > 0 &&
            ne + G + m > this.right &&
            ((re = v.y += A),
            v.line++,
            (ne = v.x = ft(a, this.left + m, this.right - r[v.line])))
          : H > 0 &&
            re + A > this.bottom &&
            ((ne = v.x = ne + t[v.line].width + m),
            v.line++,
            (re = v.y =
              ft(a, this.top + R + m, this.bottom - t[v.line].height)));
      const he = f.x(ne);
      if (
        (S(he, re, W),
        (ne = Eb(B, ne + x + w, O ? ne + G : this.right, e.rtl)),
        C(f.x(ne), re, W),
        O)
      )
        v.x += G + m;
      else if (typeof W.text != "string") {
        const Ee = h.lineHeight;
        v.y += v0(W, Ee) + m;
      } else v.y += A;
    }),
      r0(this.ctx, e.textDirection);
  }
  drawTitle() {
    const e = this.options,
      t = e.title,
      r = mt(t.font),
      s = Ut(t.padding);
    if (!t.display) return;
    const a = mi(e.rtl, this.left, this.width),
      u = this.ctx,
      c = t.position,
      f = r.size / 2,
      h = s.top + f;
    let m,
      y = this.left,
      w = this.width;
    if (this.isHorizontal())
      (w = Math.max(...this.lineWidths)),
        (m = this.top + h),
        (y = ft(e.align, y, this.right - w));
    else {
      const x = this.columnSizes.reduce((b, k) => Math.max(b, k.height), 0);
      m =
        h +
        ft(
          e.align,
          this.top,
          this.bottom - x - e.labels.padding - this._computeTitleHeight()
        );
    }
    const v = ft(c, y, y + w);
    (u.textAlign = a.textAlign(Od(c))),
      (u.textBaseline = "middle"),
      (u.strokeStyle = t.color),
      (u.fillStyle = t.color),
      (u.font = r.string),
      Us(u, t.text, v, m, r);
  }
  _computeTitleHeight() {
    const e = this.options.title,
      t = mt(e.font),
      r = Ut(e.padding);
    return e.display ? t.lineHeight + r.height : 0;
  }
  _getLegendItemAt(e, t) {
    let r, s, a;
    if (Es(e, this.left, this.right) && Es(t, this.top, this.bottom)) {
      for (a = this.legendHitBoxes, r = 0; r < a.length; ++r)
        if (
          ((s = a[r]),
          Es(e, s.left, s.left + s.width) && Es(t, s.top, s.top + s.height))
        )
          return this.legendItems[r];
    }
    return null;
  }
  handleEvent(e) {
    const t = this.options;
    if (!dC(e.type, t)) return;
    const r = this._getLegendItemAt(e.x, e.y);
    if (e.type === "mousemove" || e.type === "mouseout") {
      const s = this._hoveredItem,
        a = aC(s, r);
      s && !a && Ie(t.onLeave, [e, s, this], this),
        (this._hoveredItem = r),
        r && !a && Ie(t.onHover, [e, r, this], this);
    } else r && Ie(t.onClick, [e, r, this], this);
  }
}
function lC(n, e, t, r, s) {
  const a = uC(r, n, e, t),
    u = cC(s, r, e.lineHeight);
  return { itemWidth: a, itemHeight: u };
}
function uC(n, e, t, r) {
  let s = n.text;
  return (
    s &&
      typeof s != "string" &&
      (s = s.reduce((a, u) => (a.length > u.length ? a : u))),
    e + t.size / 2 + r.measureText(s).width
  );
}
function cC(n, e, t) {
  let r = n;
  return typeof e.text != "string" && (r = v0(e, t)), r;
}
function v0(n, e) {
  const t = n.text ? n.text.length : 0;
  return e * t;
}
function dC(n, e) {
  return !!(
    ((n === "mousemove" || n === "mouseout") && (e.onHover || e.onLeave)) ||
    (e.onClick && (n === "click" || n === "mouseup"))
  );
}
var fC = {
  id: "legend",
  _element: kg,
  start(n, e, t) {
    const r = (n.legend = new kg({ ctx: n.ctx, options: t, chart: n }));
    Ht.configure(n, r, t), Ht.addBox(n, r);
  },
  stop(n) {
    Ht.removeBox(n, n.legend), delete n.legend;
  },
  beforeUpdate(n, e, t) {
    const r = n.legend;
    Ht.configure(n, r, t), (r.options = t);
  },
  afterUpdate(n) {
    const e = n.legend;
    e.buildLabels(), e.adjustHitBoxes();
  },
  afterEvent(n, e) {
    e.replay || n.legend.handleEvent(e.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(n, e, t) {
      const r = e.datasetIndex,
        s = t.chart;
      s.isDatasetVisible(r)
        ? (s.hide(r), (e.hidden = !0))
        : (s.show(r), (e.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (n) => n.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(n) {
        const e = n.data.datasets,
          {
            labels: {
              usePointStyle: t,
              pointStyle: r,
              textAlign: s,
              color: a,
              useBorderRadius: u,
              borderRadius: c,
            },
          } = n.legend.options;
        return n._getSortedDatasetMetas().map((f) => {
          const h = f.controller.getStyle(t ? 0 : void 0),
            m = Ut(h.borderWidth);
          return {
            text: e[f.index].label,
            fillStyle: h.backgroundColor,
            fontColor: a,
            hidden: !f.visible,
            lineCap: h.borderCapStyle,
            lineDash: h.borderDash,
            lineDashOffset: h.borderDashOffset,
            lineJoin: h.borderJoinStyle,
            lineWidth: (m.width + m.height) / 4,
            strokeStyle: h.borderColor,
            pointStyle: r || h.pointStyle,
            rotation: h.rotation,
            textAlign: s || h.textAlign,
            borderRadius: u && (c || h.borderRadius),
            datasetIndex: f.index,
          };
        }, this);
      },
    },
    title: {
      color: (n) => n.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (n) => !n.startsWith("on"),
    labels: {
      _scriptable: (n) => !["generateLabels", "filter", "sort"].includes(n),
    },
  },
};
class x0 extends Dn {
  constructor(e) {
    super(),
      (this.chart = e.chart),
      (this.options = e.options),
      (this.ctx = e.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(e, t) {
    const r = this.options;
    if (((this.left = 0), (this.top = 0), !r.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    (this.width = this.right = e), (this.height = this.bottom = t);
    const s = it(r.text) ? r.text.length : 1;
    this._padding = Ut(r.padding);
    const a = s * mt(r.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = a) : (this.width = a);
  }
  isHorizontal() {
    const e = this.options.position;
    return e === "top" || e === "bottom";
  }
  _drawArgs(e) {
    const { top: t, left: r, bottom: s, right: a, options: u } = this,
      c = u.align;
    let f = 0,
      h,
      m,
      y;
    return (
      this.isHorizontal()
        ? ((m = ft(c, r, a)), (y = t + e), (h = a - r))
        : (u.position === "left"
            ? ((m = r + e), (y = ft(c, s, t)), (f = st * -0.5))
            : ((m = a - e), (y = ft(c, t, s)), (f = st * 0.5)),
          (h = s - t)),
      { titleX: m, titleY: y, maxWidth: h, rotation: f }
    );
  }
  draw() {
    const e = this.ctx,
      t = this.options;
    if (!t.display) return;
    const r = mt(t.font),
      a = r.lineHeight / 2 + this._padding.top,
      { titleX: u, titleY: c, maxWidth: f, rotation: h } = this._drawArgs(a);
    Us(e, t.text, 0, 0, r, {
      color: t.color,
      maxWidth: f,
      rotation: h,
      textAlign: Od(t.align),
      textBaseline: "middle",
      translation: [u, c],
    });
  }
}
function hC(n, e) {
  const t = new x0({ ctx: n.ctx, options: e, chart: n });
  Ht.configure(n, t, e), Ht.addBox(n, t), (n.titleBlock = t);
}
var pC = {
  id: "title",
  _element: x0,
  start(n, e, t) {
    hC(n, t);
  },
  stop(n) {
    const e = n.titleBlock;
    Ht.removeBox(n, e), delete n.titleBlock;
  },
  beforeUpdate(n, e, t) {
    const r = n.titleBlock;
    Ht.configure(n, r, t), (r.options = t);
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "bold" },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const Ts = {
  average(n) {
    if (!n.length) return !1;
    let e,
      t,
      r = new Set(),
      s = 0,
      a = 0;
    for (e = 0, t = n.length; e < t; ++e) {
      const c = n[e].element;
      if (c && c.hasValue()) {
        const f = c.tooltipPosition();
        r.add(f.x), (s += f.y), ++a;
      }
    }
    return a === 0 || r.size === 0
      ? !1
      : { x: [...r].reduce((c, f) => c + f) / r.size, y: s / a };
  },
  nearest(n, e) {
    if (!n.length) return !1;
    let t = e.x,
      r = e.y,
      s = Number.POSITIVE_INFINITY,
      a,
      u,
      c;
    for (a = 0, u = n.length; a < u; ++a) {
      const f = n[a].element;
      if (f && f.hasValue()) {
        const h = f.getCenterPoint(),
          m = Kc(e, h);
        m < s && ((s = m), (c = f));
      }
    }
    if (c) {
      const f = c.tooltipPosition();
      (t = f.x), (r = f.y);
    }
    return { x: t, y: r };
  },
};
function ln(n, e) {
  return e && (it(e) ? Array.prototype.push.apply(n, e) : n.push(e)), n;
}
function On(n) {
  return (typeof n == "string" || n instanceof String) &&
    n.indexOf(`
`) > -1
    ? n.split(`
`)
    : n;
}
function mC(n, e) {
  const { element: t, datasetIndex: r, index: s } = e,
    a = n.getDatasetMeta(r).controller,
    { label: u, value: c } = a.getLabelAndValue(s);
  return {
    chart: n,
    label: u,
    parsed: a.getParsed(s),
    raw: n.data.datasets[r].data[s],
    formattedValue: c,
    dataset: a.getDataset(),
    dataIndex: s,
    datasetIndex: r,
    element: t,
  };
}
function bg(n, e) {
  const t = n.chart.ctx,
    { body: r, footer: s, title: a } = n,
    { boxWidth: u, boxHeight: c } = e,
    f = mt(e.bodyFont),
    h = mt(e.titleFont),
    m = mt(e.footerFont),
    y = a.length,
    w = s.length,
    v = r.length,
    x = Ut(e.padding);
  let b = x.height,
    k = 0,
    S = r.reduce(
      (R, A) => R + A.before.length + A.lines.length + A.after.length,
      0
    );
  if (
    ((S += n.beforeBody.length + n.afterBody.length),
    y &&
      (b += y * h.lineHeight + (y - 1) * e.titleSpacing + e.titleMarginBottom),
    S)
  ) {
    const R = e.displayColors ? Math.max(c, f.lineHeight) : f.lineHeight;
    b += v * R + (S - v) * f.lineHeight + (S - 1) * e.bodySpacing;
  }
  w && (b += e.footerMarginTop + w * m.lineHeight + (w - 1) * e.footerSpacing);
  let C = 0;
  const O = function (R) {
    k = Math.max(k, t.measureText(R).width + C);
  };
  return (
    t.save(),
    (t.font = h.string),
    Oe(n.title, O),
    (t.font = f.string),
    Oe(n.beforeBody.concat(n.afterBody), O),
    (C = e.displayColors ? u + 2 + e.boxPadding : 0),
    Oe(r, (R) => {
      Oe(R.before, O), Oe(R.lines, O), Oe(R.after, O);
    }),
    (C = 0),
    (t.font = m.string),
    Oe(n.footer, O),
    t.restore(),
    (k += x.width),
    { width: k, height: b }
  );
}
function gC(n, e) {
  const { y: t, height: r } = e;
  return t < r / 2 ? "top" : t > n.height - r / 2 ? "bottom" : "center";
}
function yC(n, e, t, r) {
  const { x: s, width: a } = r,
    u = t.caretSize + t.caretPadding;
  if ((n === "left" && s + a + u > e.width) || (n === "right" && s - a - u < 0))
    return !0;
}
function wC(n, e, t, r) {
  const { x: s, width: a } = t,
    {
      width: u,
      chartArea: { left: c, right: f },
    } = n;
  let h = "center";
  return (
    r === "center"
      ? (h = s <= (c + f) / 2 ? "left" : "right")
      : s <= a / 2
      ? (h = "left")
      : s >= u - a / 2 && (h = "right"),
    yC(h, n, e, t) && (h = "center"),
    h
  );
}
function Sg(n, e, t) {
  const r = t.yAlign || e.yAlign || gC(n, t);
  return { xAlign: t.xAlign || e.xAlign || wC(n, e, t, r), yAlign: r };
}
function vC(n, e) {
  let { x: t, width: r } = n;
  return e === "right" ? (t -= r) : e === "center" && (t -= r / 2), t;
}
function xC(n, e, t) {
  let { y: r, height: s } = n;
  return (
    e === "top" ? (r += t) : e === "bottom" ? (r -= s + t) : (r -= s / 2), r
  );
}
function Eg(n, e, t, r) {
  const { caretSize: s, caretPadding: a, cornerRadius: u } = n,
    { xAlign: c, yAlign: f } = t,
    h = s + a,
    { topLeft: m, topRight: y, bottomLeft: w, bottomRight: v } = Ls(u);
  let x = vC(e, c);
  const b = xC(e, f, h);
  return (
    f === "center"
      ? c === "left"
        ? (x += h)
        : c === "right" && (x -= h)
      : c === "left"
      ? (x -= Math.max(m, w) + s)
      : c === "right" && (x += Math.max(y, v) + s),
    { x: Wt(x, 0, r.width - e.width), y: Wt(b, 0, r.height - e.height) }
  );
}
function Ta(n, e, t) {
  const r = Ut(t.padding);
  return e === "center"
    ? n.x + n.width / 2
    : e === "right"
    ? n.x + n.width - r.right
    : n.x + r.left;
}
function Cg(n) {
  return ln([], On(n));
}
function _C(n, e, t) {
  return zr(n, { tooltip: e, tooltipItems: t, type: "tooltip" });
}
function Pg(n, e) {
  const t = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
  return t ? n.override(t) : n;
}
const _0 = {
  beforeTitle: Pn,
  title(n) {
    if (n.length > 0) {
      const e = n[0],
        t = e.chart.data.labels,
        r = t ? t.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return e.dataset.label || "";
      if (e.label) return e.label;
      if (r > 0 && e.dataIndex < r) return t[e.dataIndex];
    }
    return "";
  },
  afterTitle: Pn,
  beforeBody: Pn,
  beforeLabel: Pn,
  label(n) {
    if (this && this.options && this.options.mode === "dataset")
      return n.label + ": " + n.formattedValue || n.formattedValue;
    let e = n.dataset.label || "";
    e && (e += ": ");
    const t = n.formattedValue;
    return Ue(t) || (e += t), e;
  },
  labelColor(n) {
    const t = n.chart
      .getDatasetMeta(n.datasetIndex)
      .controller.getStyle(n.dataIndex);
    return {
      borderColor: t.borderColor,
      backgroundColor: t.backgroundColor,
      borderWidth: t.borderWidth,
      borderDash: t.borderDash,
      borderDashOffset: t.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(n) {
    const t = n.chart
      .getDatasetMeta(n.datasetIndex)
      .controller.getStyle(n.dataIndex);
    return { pointStyle: t.pointStyle, rotation: t.rotation };
  },
  afterLabel: Pn,
  afterBody: Pn,
  beforeFooter: Pn,
  footer: Pn,
  afterFooter: Pn,
};
function St(n, e, t, r) {
  const s = n[e].call(t, r);
  return typeof s > "u" ? _0[e].call(t, r) : s;
}
class ed extends Dn {
  constructor(e) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = e.chart),
      (this.options = e.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(e) {
    (this.options = e),
      (this._cachedAnimations = void 0),
      (this.$context = void 0);
  }
  _resolveAnimations() {
    const e = this._cachedAnimations;
    if (e) return e;
    const t = this.chart,
      r = this.options.setContext(this.getContext()),
      s = r.enabled && t.options.animation && r.animations,
      a = new s0(this.chart, s);
    return s._cacheable && (this._cachedAnimations = Object.freeze(a)), a;
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = _C(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(e, t) {
    const { callbacks: r } = t,
      s = St(r, "beforeTitle", this, e),
      a = St(r, "title", this, e),
      u = St(r, "afterTitle", this, e);
    let c = [];
    return (c = ln(c, On(s))), (c = ln(c, On(a))), (c = ln(c, On(u))), c;
  }
  getBeforeBody(e, t) {
    return Cg(St(t.callbacks, "beforeBody", this, e));
  }
  getBody(e, t) {
    const { callbacks: r } = t,
      s = [];
    return (
      Oe(e, (a) => {
        const u = { before: [], lines: [], after: [] },
          c = Pg(r, a);
        ln(u.before, On(St(c, "beforeLabel", this, a))),
          ln(u.lines, St(c, "label", this, a)),
          ln(u.after, On(St(c, "afterLabel", this, a))),
          s.push(u);
      }),
      s
    );
  }
  getAfterBody(e, t) {
    return Cg(St(t.callbacks, "afterBody", this, e));
  }
  getFooter(e, t) {
    const { callbacks: r } = t,
      s = St(r, "beforeFooter", this, e),
      a = St(r, "footer", this, e),
      u = St(r, "afterFooter", this, e);
    let c = [];
    return (c = ln(c, On(s))), (c = ln(c, On(a))), (c = ln(c, On(u))), c;
  }
  _createItems(e) {
    const t = this._active,
      r = this.chart.data,
      s = [],
      a = [],
      u = [];
    let c = [],
      f,
      h;
    for (f = 0, h = t.length; f < h; ++f) c.push(mC(this.chart, t[f]));
    return (
      e.filter && (c = c.filter((m, y, w) => e.filter(m, y, w, r))),
      e.itemSort && (c = c.sort((m, y) => e.itemSort(m, y, r))),
      Oe(c, (m) => {
        const y = Pg(e.callbacks, m);
        s.push(St(y, "labelColor", this, m)),
          a.push(St(y, "labelPointStyle", this, m)),
          u.push(St(y, "labelTextColor", this, m));
      }),
      (this.labelColors = s),
      (this.labelPointStyles = a),
      (this.labelTextColors = u),
      (this.dataPoints = c),
      c
    );
  }
  update(e, t) {
    const r = this.options.setContext(this.getContext()),
      s = this._active;
    let a,
      u = [];
    if (!s.length) this.opacity !== 0 && (a = { opacity: 0 });
    else {
      const c = Ts[r.position].call(this, s, this._eventPosition);
      (u = this._createItems(r)),
        (this.title = this.getTitle(u, r)),
        (this.beforeBody = this.getBeforeBody(u, r)),
        (this.body = this.getBody(u, r)),
        (this.afterBody = this.getAfterBody(u, r)),
        (this.footer = this.getFooter(u, r));
      const f = (this._size = bg(this, r)),
        h = Object.assign({}, c, f),
        m = Sg(this.chart, r, h),
        y = Eg(r, h, m, this.chart);
      (this.xAlign = m.xAlign),
        (this.yAlign = m.yAlign),
        (a = {
          opacity: 1,
          x: y.x,
          y: y.y,
          width: f.width,
          height: f.height,
          caretX: c.x,
          caretY: c.y,
        });
    }
    (this._tooltipItems = u),
      (this.$context = void 0),
      a && this._resolveAnimations().update(this, a),
      e &&
        r.external &&
        r.external.call(this, { chart: this.chart, tooltip: this, replay: t });
  }
  drawCaret(e, t, r, s) {
    const a = this.getCaretPosition(e, r, s);
    t.lineTo(a.x1, a.y1), t.lineTo(a.x2, a.y2), t.lineTo(a.x3, a.y3);
  }
  getCaretPosition(e, t, r) {
    const { xAlign: s, yAlign: a } = this,
      { caretSize: u, cornerRadius: c } = r,
      { topLeft: f, topRight: h, bottomLeft: m, bottomRight: y } = Ls(c),
      { x: w, y: v } = e,
      { width: x, height: b } = t;
    let k, S, C, O, R, A;
    return (
      a === "center"
        ? ((R = v + b / 2),
          s === "left"
            ? ((k = w), (S = k - u), (O = R + u), (A = R - u))
            : ((k = w + x), (S = k + u), (O = R - u), (A = R + u)),
          (C = k))
        : (s === "left"
            ? (S = w + Math.max(f, m) + u)
            : s === "right"
            ? (S = w + x - Math.max(h, y) - u)
            : (S = this.caretX),
          a === "top"
            ? ((O = v), (R = O - u), (k = S - u), (C = S + u))
            : ((O = v + b), (R = O + u), (k = S + u), (C = S - u)),
          (A = O)),
      { x1: k, x2: S, x3: C, y1: O, y2: R, y3: A }
    );
  }
  drawTitle(e, t, r) {
    const s = this.title,
      a = s.length;
    let u, c, f;
    if (a) {
      const h = mi(r.rtl, this.x, this.width);
      for (
        e.x = Ta(this, r.titleAlign, r),
          t.textAlign = h.textAlign(r.titleAlign),
          t.textBaseline = "middle",
          u = mt(r.titleFont),
          c = r.titleSpacing,
          t.fillStyle = r.titleColor,
          t.font = u.string,
          f = 0;
        f < a;
        ++f
      )
        t.fillText(s[f], h.x(e.x), e.y + u.lineHeight / 2),
          (e.y += u.lineHeight + c),
          f + 1 === a && (e.y += r.titleMarginBottom - c);
    }
  }
  _drawColorBox(e, t, r, s, a) {
    const u = this.labelColors[r],
      c = this.labelPointStyles[r],
      { boxHeight: f, boxWidth: h } = a,
      m = mt(a.bodyFont),
      y = Ta(this, "left", a),
      w = s.x(y),
      v = f < m.lineHeight ? (m.lineHeight - f) / 2 : 0,
      x = t.y + v;
    if (a.usePointStyle) {
      const b = {
          radius: Math.min(h, f) / 2,
          pointStyle: c.pointStyle,
          rotation: c.rotation,
          borderWidth: 1,
        },
        k = s.leftForLtr(w, h) + h / 2,
        S = x + f / 2;
      (e.strokeStyle = a.multiKeyBackground),
        (e.fillStyle = a.multiKeyBackground),
        qc(e, b, k, S),
        (e.strokeStyle = u.borderColor),
        (e.fillStyle = u.backgroundColor),
        qc(e, b, k, S);
    } else {
      (e.lineWidth = be(u.borderWidth)
        ? Math.max(...Object.values(u.borderWidth))
        : u.borderWidth || 1),
        (e.strokeStyle = u.borderColor),
        e.setLineDash(u.borderDash || []),
        (e.lineDashOffset = u.borderDashOffset || 0);
      const b = s.leftForLtr(w, h),
        k = s.leftForLtr(s.xPlus(w, 1), h - 2),
        S = Ls(u.borderRadius);
      Object.values(S).some((C) => C !== 0)
        ? (e.beginPath(),
          (e.fillStyle = a.multiKeyBackground),
          Gc(e, { x: b, y: x, w: h, h: f, radius: S }),
          e.fill(),
          e.stroke(),
          (e.fillStyle = u.backgroundColor),
          e.beginPath(),
          Gc(e, { x: k, y: x + 1, w: h - 2, h: f - 2, radius: S }),
          e.fill())
        : ((e.fillStyle = a.multiKeyBackground),
          e.fillRect(b, x, h, f),
          e.strokeRect(b, x, h, f),
          (e.fillStyle = u.backgroundColor),
          e.fillRect(k, x + 1, h - 2, f - 2));
    }
    e.fillStyle = this.labelTextColors[r];
  }
  drawBody(e, t, r) {
    const { body: s } = this,
      {
        bodySpacing: a,
        bodyAlign: u,
        displayColors: c,
        boxHeight: f,
        boxWidth: h,
        boxPadding: m,
      } = r,
      y = mt(r.bodyFont);
    let w = y.lineHeight,
      v = 0;
    const x = mi(r.rtl, this.x, this.width),
      b = function (N) {
        t.fillText(N, x.x(e.x + v), e.y + w / 2), (e.y += w + a);
      },
      k = x.textAlign(u);
    let S, C, O, R, A, W, H;
    for (
      t.textAlign = u,
        t.textBaseline = "middle",
        t.font = y.string,
        e.x = Ta(this, k, r),
        t.fillStyle = r.bodyColor,
        Oe(this.beforeBody, b),
        v = c && k !== "right" ? (u === "center" ? h / 2 + m : h + 2 + m) : 0,
        R = 0,
        W = s.length;
      R < W;
      ++R
    ) {
      for (
        S = s[R],
          C = this.labelTextColors[R],
          t.fillStyle = C,
          Oe(S.before, b),
          O = S.lines,
          c &&
            O.length &&
            (this._drawColorBox(t, e, R, x, r),
            (w = Math.max(y.lineHeight, f))),
          A = 0,
          H = O.length;
        A < H;
        ++A
      )
        b(O[A]), (w = y.lineHeight);
      Oe(S.after, b);
    }
    (v = 0), (w = y.lineHeight), Oe(this.afterBody, b), (e.y -= a);
  }
  drawFooter(e, t, r) {
    const s = this.footer,
      a = s.length;
    let u, c;
    if (a) {
      const f = mi(r.rtl, this.x, this.width);
      for (
        e.x = Ta(this, r.footerAlign, r),
          e.y += r.footerMarginTop,
          t.textAlign = f.textAlign(r.footerAlign),
          t.textBaseline = "middle",
          u = mt(r.footerFont),
          t.fillStyle = r.footerColor,
          t.font = u.string,
          c = 0;
        c < a;
        ++c
      )
        t.fillText(s[c], f.x(e.x), e.y + u.lineHeight / 2),
          (e.y += u.lineHeight + r.footerSpacing);
    }
  }
  drawBackground(e, t, r, s) {
    const { xAlign: a, yAlign: u } = this,
      { x: c, y: f } = e,
      { width: h, height: m } = r,
      {
        topLeft: y,
        topRight: w,
        bottomLeft: v,
        bottomRight: x,
      } = Ls(s.cornerRadius);
    (t.fillStyle = s.backgroundColor),
      (t.strokeStyle = s.borderColor),
      (t.lineWidth = s.borderWidth),
      t.beginPath(),
      t.moveTo(c + y, f),
      u === "top" && this.drawCaret(e, t, r, s),
      t.lineTo(c + h - w, f),
      t.quadraticCurveTo(c + h, f, c + h, f + w),
      u === "center" && a === "right" && this.drawCaret(e, t, r, s),
      t.lineTo(c + h, f + m - x),
      t.quadraticCurveTo(c + h, f + m, c + h - x, f + m),
      u === "bottom" && this.drawCaret(e, t, r, s),
      t.lineTo(c + v, f + m),
      t.quadraticCurveTo(c, f + m, c, f + m - v),
      u === "center" && a === "left" && this.drawCaret(e, t, r, s),
      t.lineTo(c, f + y),
      t.quadraticCurveTo(c, f, c + y, f),
      t.closePath(),
      t.fill(),
      s.borderWidth > 0 && t.stroke();
  }
  _updateAnimationTarget(e) {
    const t = this.chart,
      r = this.$animations,
      s = r && r.x,
      a = r && r.y;
    if (s || a) {
      const u = Ts[e.position].call(this, this._active, this._eventPosition);
      if (!u) return;
      const c = (this._size = bg(this, e)),
        f = Object.assign({}, u, this._size),
        h = Sg(t, e, f),
        m = Eg(e, f, h, t);
      (s._to !== m.x || a._to !== m.y) &&
        ((this.xAlign = h.xAlign),
        (this.yAlign = h.yAlign),
        (this.width = c.width),
        (this.height = c.height),
        (this.caretX = u.x),
        (this.caretY = u.y),
        this._resolveAnimations().update(this, m));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(e) {
    const t = this.options.setContext(this.getContext());
    let r = this.opacity;
    if (!r) return;
    this._updateAnimationTarget(t);
    const s = { width: this.width, height: this.height },
      a = { x: this.x, y: this.y };
    r = Math.abs(r) < 0.001 ? 0 : r;
    const u = Ut(t.padding),
      c =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    t.enabled &&
      c &&
      (e.save(),
      (e.globalAlpha = r),
      this.drawBackground(a, e, s, t),
      n0(e, t.textDirection),
      (a.y += u.top),
      this.drawTitle(a, e, t),
      this.drawBody(a, e, t),
      this.drawFooter(a, e, t),
      r0(e, t.textDirection),
      e.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(e, t) {
    const r = this._active,
      s = e.map(({ datasetIndex: c, index: f }) => {
        const h = this.chart.getDatasetMeta(c);
        if (!h) throw new Error("Cannot find a dataset at index " + c);
        return { datasetIndex: c, element: h.data[f], index: f };
      }),
      a = !Va(r, s),
      u = this._positionChanged(s, t);
    (a || u) &&
      ((this._active = s),
      (this._eventPosition = t),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(e, t, r = !0) {
    if (t && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options,
      a = this._active || [],
      u = this._getActiveElements(e, a, t, r),
      c = this._positionChanged(u, e),
      f = t || !Va(u, a) || c;
    return (
      f &&
        ((this._active = u),
        (s.enabled || s.external) &&
          ((this._eventPosition = { x: e.x, y: e.y }), this.update(!0, t))),
      f
    );
  }
  _getActiveElements(e, t, r, s) {
    const a = this.options;
    if (e.type === "mouseout") return [];
    if (!s)
      return t.filter(
        (c) =>
          this.chart.data.datasets[c.datasetIndex] &&
          this.chart
            .getDatasetMeta(c.datasetIndex)
            .controller.getParsed(c.index) !== void 0
      );
    const u = this.chart.getElementsAtEventForMode(e, a.mode, a, r);
    return a.reverse && u.reverse(), u;
  }
  _positionChanged(e, t) {
    const { caretX: r, caretY: s, options: a } = this,
      u = Ts[a.position].call(this, e, t);
    return u !== !1 && (r !== u.x || s !== u.y);
  }
}
V(ed, "positioners", Ts);
var kC = {
  id: "tooltip",
  _element: ed,
  positioners: Ts,
  afterInit(n, e, t) {
    t && (n.tooltip = new ed({ chart: n, options: t }));
  },
  beforeUpdate(n, e, t) {
    n.tooltip && n.tooltip.initialize(t);
  },
  reset(n, e, t) {
    n.tooltip && n.tooltip.initialize(t);
  },
  afterDraw(n) {
    const e = n.tooltip;
    if (e && e._willRender()) {
      const t = { tooltip: e };
      if (n.notifyPlugins("beforeTooltipDraw", { ...t, cancelable: !0 }) === !1)
        return;
      e.draw(n.ctx), n.notifyPlugins("afterTooltipDraw", t);
    }
  },
  afterEvent(n, e) {
    if (n.tooltip) {
      const t = e.replay;
      n.tooltip.handleEvent(e.event, t, e.inChartArea) && (e.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: { weight: "bold" },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: "bold" },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (n, e) => e.bodyFont.size,
    boxWidth: (n, e) => e.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: { duration: 400, easing: "easeOutQuart" },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "width", "height", "caretX", "caretY"],
      },
      opacity: { easing: "linear", duration: 200 },
    },
    callbacks: _0,
  },
  defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
  descriptors: {
    _scriptable: (n) => n !== "filter" && n !== "itemSort" && n !== "external",
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: "animation" },
  },
  additionalOptionScopes: ["interaction"],
};
const bC = (n, e, t, r) => (
  typeof e == "string"
    ? ((t = n.push(e) - 1), r.unshift({ index: t, label: e }))
    : isNaN(e) && (t = null),
  t
);
function SC(n, e, t, r) {
  const s = n.indexOf(e);
  if (s === -1) return bC(n, e, t, r);
  const a = n.lastIndexOf(e);
  return s !== a ? t : s;
}
const EC = (n, e) => (n === null ? null : Wt(Math.round(n), 0, e));
function Tg(n) {
  const e = this.getLabels();
  return n >= 0 && n < e.length ? e[n] : n;
}
class td extends Ei {
  constructor(e) {
    super(e),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []);
  }
  init(e) {
    const t = this._addedLabels;
    if (t.length) {
      const r = this.getLabels();
      for (const { index: s, label: a } of t) r[s] === a && r.splice(s, 1);
      this._addedLabels = [];
    }
    super.init(e);
  }
  parse(e, t) {
    if (Ue(e)) return null;
    const r = this.getLabels();
    return (
      (t =
        isFinite(t) && r[t] === e ? t : SC(r, e, xe(t, e), this._addedLabels)),
      EC(t, r.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: e, maxDefined: t } = this.getUserBounds();
    let { min: r, max: s } = this.getMinMax(!0);
    this.options.bounds === "ticks" &&
      (e || (r = 0), t || (s = this.getLabels().length - 1)),
      (this.min = r),
      (this.max = s);
  }
  buildTicks() {
    const e = this.min,
      t = this.max,
      r = this.options.offset,
      s = [];
    let a = this.getLabels();
    (a = e === 0 && t === a.length - 1 ? a : a.slice(e, t + 1)),
      (this._valueRange = Math.max(a.length - (r ? 0 : 1), 1)),
      (this._startValue = this.min - (r ? 0.5 : 0));
    for (let u = e; u <= t; u++) s.push({ value: u });
    return s;
  }
  getLabelForValue(e) {
    return Tg.call(this, e);
  }
  configure() {
    super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(e) {
    return (
      typeof e != "number" && (e = this.parse(e)),
      e === null
        ? NaN
        : this.getPixelForDecimal((e - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(e) {
    const t = this.ticks;
    return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e].value);
  }
  getValueForPixel(e) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(e) * this._valueRange
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
V(td, "id", "category"), V(td, "defaults", { ticks: { callback: Tg } });
function CC(n, e) {
  const t = [],
    {
      bounds: s,
      step: a,
      min: u,
      max: c,
      precision: f,
      count: h,
      maxTicks: m,
      maxDigits: y,
      includeBounds: w,
    } = n,
    v = a || 1,
    x = m - 1,
    { min: b, max: k } = e,
    S = !Ue(u),
    C = !Ue(c),
    O = !Ue(h),
    R = (k - b) / (y + 1);
  let A = Lm((k - b) / x / v) * v,
    W,
    H,
    N,
    B;
  if (A < 1e-14 && !S && !C) return [{ value: b }, { value: k }];
  (B = Math.ceil(k / A) - Math.floor(b / A)),
    B > x && (A = Lm((B * A) / x / v) * v),
    Ue(f) || ((W = Math.pow(10, f)), (A = Math.ceil(A * W) / W)),
    s === "ticks"
      ? ((H = Math.floor(b / A) * A), (N = Math.ceil(k / A) * A))
      : ((H = b), (N = k)),
    S && C && a && pb((c - u) / a, A / 1e3)
      ? ((B = Math.round(Math.min((c - u) / A, m))),
        (A = (c - u) / B),
        (H = u),
        (N = c))
      : O
      ? ((H = S ? u : H), (N = C ? c : N), (B = h - 1), (A = (N - H) / B))
      : ((B = (N - H) / A),
        Ms(B, Math.round(B), A / 1e3)
          ? (B = Math.round(B))
          : (B = Math.ceil(B)));
  const G = Math.max(Im(A), Im(H));
  (W = Math.pow(10, Ue(f) ? G : f)),
    (H = Math.round(H * W) / W),
    (N = Math.round(N * W) / W);
  let ne = 0;
  for (
    S &&
    (w && H !== u
      ? (t.push({ value: u }),
        H < u && ne++,
        Ms(Math.round((H + ne * A) * W) / W, u, Og(u, R, n)) && ne++)
      : H < u && ne++);
    ne < B;
    ++ne
  ) {
    const re = Math.round((H + ne * A) * W) / W;
    if (C && re > c) break;
    t.push({ value: re });
  }
  return (
    C && w && N !== c
      ? t.length && Ms(t[t.length - 1].value, c, Og(c, R, n))
        ? (t[t.length - 1].value = c)
        : t.push({ value: c })
      : (!C || N === c) && t.push({ value: N }),
    t
  );
}
function Og(n, e, { horizontal: t, minRotation: r }) {
  const s = Or(r),
    a = (t ? Math.sin(s) : Math.cos(s)) || 0.001,
    u = 0.75 * e * ("" + n).length;
  return Math.min(e / a, u);
}
class PC extends Ei {
  constructor(e) {
    super(e),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(e, t) {
    return Ue(e) ||
      ((typeof e == "number" || e instanceof Number) && !isFinite(+e))
      ? null
      : +e;
  }
  handleTickRangeOptions() {
    const { beginAtZero: e } = this.options,
      { minDefined: t, maxDefined: r } = this.getUserBounds();
    let { min: s, max: a } = this;
    const u = (f) => (s = t ? s : f),
      c = (f) => (a = r ? a : f);
    if (e) {
      const f = yi(s),
        h = yi(a);
      f < 0 && h < 0 ? c(0) : f > 0 && h > 0 && u(0);
    }
    if (s === a) {
      let f = a === 0 ? 1 : Math.abs(a * 0.05);
      c(a + f), e || u(s - f);
    }
    (this.min = s), (this.max = a);
  }
  getTickLimit() {
    const e = this.options.ticks;
    let { maxTicksLimit: t, stepSize: r } = e,
      s;
    return (
      r
        ? ((s = Math.ceil(this.max / r) - Math.floor(this.min / r) + 1),
          s > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${s} ticks. Limiting to 1000.`
            ),
            (s = 1e3)))
        : ((s = this.computeTickLimit()), (t = t || 11)),
      t && (s = Math.min(t, s)),
      s
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const e = this.options,
      t = e.ticks;
    let r = this.getTickLimit();
    r = Math.max(2, r);
    const s = {
        maxTicks: r,
        bounds: e.bounds,
        min: e.min,
        max: e.max,
        precision: t.precision,
        step: t.stepSize,
        count: t.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: t.minRotation || 0,
        includeBounds: t.includeBounds !== !1,
      },
      a = this._range || this,
      u = CC(s, a);
    return (
      e.bounds === "ticks" && mb(u, this, "value"),
      e.reverse
        ? (u.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      u
    );
  }
  configure() {
    const e = this.ticks;
    let t = this.min,
      r = this.max;
    if ((super.configure(), this.options.offset && e.length)) {
      const s = (r - t) / Math.max(e.length - 1, 1) / 2;
      (t -= s), (r += s);
    }
    (this._startValue = t), (this._endValue = r), (this._valueRange = r - t);
  }
  getLabelForValue(e) {
    return Yy(e, this.chart.options.locale, this.options.ticks.format);
  }
}
class nd extends PC {
  determineDataLimits() {
    const { min: e, max: t } = this.getMinMax(!0);
    (this.min = Bt(e) ? e : 0),
      (this.max = Bt(t) ? t : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const e = this.isHorizontal(),
      t = e ? this.width : this.height,
      r = Or(this.options.ticks.minRotation),
      s = (e ? Math.sin(r) : Math.cos(r)) || 0.001,
      a = this._resolveTickFontOptions(0);
    return Math.ceil(t / Math.min(40, a.lineHeight / s));
  }
  getPixelForValue(e) {
    return e === null
      ? NaN
      : this.getPixelForDecimal((e - this._startValue) / this._valueRange);
  }
  getValueForPixel(e) {
    return this._startValue + this.getDecimalForPixel(e) * this._valueRange;
  }
}
V(nd, "id", "linear"),
  V(nd, "defaults", { ticks: { callback: Xy.formatters.numeric } });
const fl = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  Et = Object.keys(fl);
function Mg(n, e) {
  return n - e;
}
function Rg(n, e) {
  if (Ue(e)) return null;
  const t = n._adapter,
    { parser: r, round: s, isoWeekday: a } = n._parseOpts;
  let u = e;
  return (
    typeof r == "function" && (u = r(u)),
    Bt(u) || (u = typeof r == "string" ? t.parse(u, r) : t.parse(u)),
    u === null
      ? null
      : (s &&
          (u =
            s === "week" && (Hs(a) || a === !0)
              ? t.startOf(u, "isoWeek", a)
              : t.startOf(u, s)),
        +u)
  );
}
function Dg(n, e, t, r) {
  const s = Et.length;
  for (let a = Et.indexOf(n); a < s - 1; ++a) {
    const u = fl[Et[a]],
      c = u.steps ? u.steps : Number.MAX_SAFE_INTEGER;
    if (u.common && Math.ceil((t - e) / (c * u.size)) <= r) return Et[a];
  }
  return Et[s - 1];
}
function TC(n, e, t, r, s) {
  for (let a = Et.length - 1; a >= Et.indexOf(t); a--) {
    const u = Et[a];
    if (fl[u].common && n._adapter.diff(s, r, u) >= e - 1) return u;
  }
  return Et[t ? Et.indexOf(t) : 0];
}
function OC(n) {
  for (let e = Et.indexOf(n) + 1, t = Et.length; e < t; ++e)
    if (fl[Et[e]].common) return Et[e];
}
function Lg(n, e, t) {
  if (!t) n[e] = !0;
  else if (t.length) {
    const { lo: r, hi: s } = Td(t, e),
      a = t[r] >= e ? t[r] : t[s];
    n[a] = !0;
  }
}
function MC(n, e, t, r) {
  const s = n._adapter,
    a = +s.startOf(e[0].value, r),
    u = e[e.length - 1].value;
  let c, f;
  for (c = a; c <= u; c = +s.add(c, 1, r))
    (f = t[c]), f >= 0 && (e[f].major = !0);
  return e;
}
function Ig(n, e, t) {
  const r = [],
    s = {},
    a = e.length;
  let u, c;
  for (u = 0; u < a; ++u)
    (c = e[u]), (s[c] = u), r.push({ value: c, major: !1 });
  return a === 0 || !t ? r : MC(n, r, s, t);
}
class Vs extends Ei {
  constructor(e) {
    super(e),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(e, t = {}) {
    const r = e.time || (e.time = {}),
      s = (this._adapter = new a0._date(e.adapters.date));
    s.init(t),
      Os(r.displayFormats, s.formats()),
      (this._parseOpts = {
        parser: r.parser,
        round: r.round,
        isoWeekday: r.isoWeekday,
      }),
      super.init(e),
      (this._normalized = t.normalized);
  }
  parse(e, t) {
    return e === void 0 ? null : Rg(this, e);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const e = this.options,
      t = this._adapter,
      r = e.time.unit || "day";
    let { min: s, max: a, minDefined: u, maxDefined: c } = this.getUserBounds();
    function f(h) {
      !u && !isNaN(h.min) && (s = Math.min(s, h.min)),
        !c && !isNaN(h.max) && (a = Math.max(a, h.max));
    }
    (!u || !c) &&
      (f(this._getLabelBounds()),
      (e.bounds !== "ticks" || e.ticks.source !== "labels") &&
        f(this.getMinMax(!1))),
      (s = Bt(s) && !isNaN(s) ? s : +t.startOf(Date.now(), r)),
      (a = Bt(a) && !isNaN(a) ? a : +t.endOf(Date.now(), r) + 1),
      (this.min = Math.min(s, a - 1)),
      (this.max = Math.max(s + 1, a));
  }
  _getLabelBounds() {
    const e = this.getLabelTimestamps();
    let t = Number.POSITIVE_INFINITY,
      r = Number.NEGATIVE_INFINITY;
    return e.length && ((t = e[0]), (r = e[e.length - 1])), { min: t, max: r };
  }
  buildTicks() {
    const e = this.options,
      t = e.time,
      r = e.ticks,
      s = r.source === "labels" ? this.getLabelTimestamps() : this._generate();
    e.bounds === "ticks" &&
      s.length &&
      ((this.min = this._userMin || s[0]),
      (this.max = this._userMax || s[s.length - 1]));
    const a = this.min,
      u = this.max,
      c = _b(s, a, u);
    return (
      (this._unit =
        t.unit ||
        (r.autoSkip
          ? Dg(t.minUnit, this.min, this.max, this._getLabelCapacity(a))
          : TC(this, c.length, t.minUnit, this.min, this.max))),
      (this._majorUnit =
        !r.major.enabled || this._unit === "year" ? void 0 : OC(this._unit)),
      this.initOffsets(s),
      e.reverse && c.reverse(),
      Ig(this, c, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((e) => +e.value));
  }
  initOffsets(e = []) {
    let t = 0,
      r = 0,
      s,
      a;
    this.options.offset &&
      e.length &&
      ((s = this.getDecimalForValue(e[0])),
      e.length === 1
        ? (t = 1 - s)
        : (t = (this.getDecimalForValue(e[1]) - s) / 2),
      (a = this.getDecimalForValue(e[e.length - 1])),
      e.length === 1
        ? (r = a)
        : (r = (a - this.getDecimalForValue(e[e.length - 2])) / 2));
    const u = e.length < 3 ? 0.5 : 0.25;
    (t = Wt(t, 0, u)),
      (r = Wt(r, 0, u)),
      (this._offsets = { start: t, end: r, factor: 1 / (t + 1 + r) });
  }
  _generate() {
    const e = this._adapter,
      t = this.min,
      r = this.max,
      s = this.options,
      a = s.time,
      u = a.unit || Dg(a.minUnit, t, r, this._getLabelCapacity(t)),
      c = xe(s.ticks.stepSize, 1),
      f = u === "week" ? a.isoWeekday : !1,
      h = Hs(f) || f === !0,
      m = {};
    let y = t,
      w,
      v;
    if (
      (h && (y = +e.startOf(y, "isoWeek", f)),
      (y = +e.startOf(y, h ? "day" : u)),
      e.diff(r, t, u) > 1e5 * c)
    )
      throw new Error(
        t + " and " + r + " are too far apart with stepSize of " + c + " " + u
      );
    const x = s.ticks.source === "data" && this.getDataTimestamps();
    for (w = y, v = 0; w < r; w = +e.add(w, c, u), v++) Lg(m, w, x);
    return (
      (w === r || s.bounds === "ticks" || v === 1) && Lg(m, w, x),
      Object.keys(m)
        .sort(Mg)
        .map((b) => +b)
    );
  }
  getLabelForValue(e) {
    const t = this._adapter,
      r = this.options.time;
    return r.tooltipFormat
      ? t.format(e, r.tooltipFormat)
      : t.format(e, r.displayFormats.datetime);
  }
  format(e, t) {
    const s = this.options.time.displayFormats,
      a = this._unit,
      u = t || s[a];
    return this._adapter.format(e, u);
  }
  _tickFormatFunction(e, t, r, s) {
    const a = this.options,
      u = a.ticks.callback;
    if (u) return Ie(u, [e, t, r], this);
    const c = a.time.displayFormats,
      f = this._unit,
      h = this._majorUnit,
      m = f && c[f],
      y = h && c[h],
      w = r[t],
      v = h && y && w && w.major;
    return this._adapter.format(e, s || (v ? y : m));
  }
  generateTickLabels(e) {
    let t, r, s;
    for (t = 0, r = e.length; t < r; ++t)
      (s = e[t]), (s.label = this._tickFormatFunction(s.value, t, e));
  }
  getDecimalForValue(e) {
    return e === null ? NaN : (e - this.min) / (this.max - this.min);
  }
  getPixelForValue(e) {
    const t = this._offsets,
      r = this.getDecimalForValue(e);
    return this.getPixelForDecimal((t.start + r) * t.factor);
  }
  getValueForPixel(e) {
    const t = this._offsets,
      r = this.getDecimalForPixel(e) / t.factor - t.end;
    return this.min + r * (this.max - this.min);
  }
  _getLabelSize(e) {
    const t = this.options.ticks,
      r = this.ctx.measureText(e).width,
      s = Or(this.isHorizontal() ? t.maxRotation : t.minRotation),
      a = Math.cos(s),
      u = Math.sin(s),
      c = this._resolveTickFontOptions(0).size;
    return { w: r * a + c * u, h: r * u + c * a };
  }
  _getLabelCapacity(e) {
    const t = this.options.time,
      r = t.displayFormats,
      s = r[t.unit] || r.millisecond,
      a = this._tickFormatFunction(e, 0, Ig(this, [e], this._majorUnit), s),
      u = this._getLabelSize(a),
      c =
        Math.floor(this.isHorizontal() ? this.width / u.w : this.height / u.h) -
        1;
    return c > 0 ? c : 1;
  }
  getDataTimestamps() {
    let e = this._cache.data || [],
      t,
      r;
    if (e.length) return e;
    const s = this.getMatchingVisibleMetas();
    if (this._normalized && s.length)
      return (this._cache.data = s[0].controller.getAllParsedValues(this));
    for (t = 0, r = s.length; t < r; ++t)
      e = e.concat(s[t].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(e));
  }
  getLabelTimestamps() {
    const e = this._cache.labels || [];
    let t, r;
    if (e.length) return e;
    const s = this.getLabels();
    for (t = 0, r = s.length; t < r; ++t) e.push(Rg(this, s[t]));
    return (this._cache.labels = this._normalized ? e : this.normalize(e));
  }
  normalize(e) {
    return bb(e.sort(Mg));
  }
}
V(Vs, "id", "time"),
  V(Vs, "defaults", {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {},
    },
    ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
  });
function Oa(n, e, t) {
  let r = 0,
    s = n.length - 1,
    a,
    u,
    c,
    f;
  t
    ? (e >= n[r].pos && e <= n[s].pos && ({ lo: r, hi: s } = Mr(n, "pos", e)),
      ({ pos: a, time: c } = n[r]),
      ({ pos: u, time: f } = n[s]))
    : (e >= n[r].time &&
        e <= n[s].time &&
        ({ lo: r, hi: s } = Mr(n, "time", e)),
      ({ time: a, pos: c } = n[r]),
      ({ time: u, pos: f } = n[s]));
  const h = u - a;
  return h ? c + ((f - c) * (e - a)) / h : c;
}
class Ng extends Vs {
  constructor(e) {
    super(e),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0);
  }
  initOffsets() {
    const e = this._getTimestampsForTable(),
      t = (this._table = this.buildLookupTable(e));
    (this._minPos = Oa(t, this.min)),
      (this._tableRange = Oa(t, this.max) - this._minPos),
      super.initOffsets(e);
  }
  buildLookupTable(e) {
    const { min: t, max: r } = this,
      s = [],
      a = [];
    let u, c, f, h, m;
    for (u = 0, c = e.length; u < c; ++u)
      (h = e[u]), h >= t && h <= r && s.push(h);
    if (s.length < 2)
      return [
        { time: t, pos: 0 },
        { time: r, pos: 1 },
      ];
    for (u = 0, c = s.length; u < c; ++u)
      (m = s[u + 1]),
        (f = s[u - 1]),
        (h = s[u]),
        Math.round((m + f) / 2) !== h && a.push({ time: h, pos: u / (c - 1) });
    return a;
  }
  _generate() {
    const e = this.min,
      t = this.max;
    let r = super.getDataTimestamps();
    return (
      (!r.includes(e) || !r.length) && r.splice(0, 0, e),
      (!r.includes(t) || r.length === 1) && r.push(t),
      r.sort((s, a) => s - a)
    );
  }
  _getTimestampsForTable() {
    let e = this._cache.all || [];
    if (e.length) return e;
    const t = this.getDataTimestamps(),
      r = this.getLabelTimestamps();
    return (
      t.length && r.length
        ? (e = this.normalize(t.concat(r)))
        : (e = t.length ? t : r),
      (e = this._cache.all = e),
      e
    );
  }
  getDecimalForValue(e) {
    return (Oa(this._table, e) - this._minPos) / this._tableRange;
  }
  getValueForPixel(e) {
    const t = this._offsets,
      r = this.getDecimalForPixel(e) / t.factor - t.end;
    return Oa(this._table, r * this._tableRange + this._minPos, !0);
  }
}
V(Ng, "id", "timeseries"), V(Ng, "defaults", Vs.defaults);
const k0 = "label";
function zg(n, e) {
  typeof n == "function" ? n(e) : n && (n.current = e);
}
function RC(n, e) {
  const t = n.options;
  t && e && Object.assign(t, e);
}
function b0(n, e) {
  n.labels = e;
}
function S0(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : k0;
  const r = [];
  n.datasets = e.map((s) => {
    const a = n.datasets.find((u) => u[t] === s[t]);
    return !a || !s.data || r.includes(a)
      ? { ...s }
      : (r.push(a), Object.assign(a, s), a);
  });
}
function DC(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : k0;
  const t = { labels: [], datasets: [] };
  return b0(t, n.labels), S0(t, n.datasets, e), t;
}
function LC(n, e) {
  const {
      height: t = 150,
      width: r = 300,
      redraw: s = !1,
      datasetIdKey: a,
      type: u,
      data: c,
      options: f,
      plugins: h = [],
      fallbackContent: m,
      updateMode: y,
      ...w
    } = n,
    v = D.useRef(null),
    x = D.useRef(null),
    b = () => {
      v.current &&
        ((x.current = new dl(v.current, {
          type: u,
          data: DC(c, a),
          options: f && { ...f },
          plugins: h,
        })),
        zg(e, x.current));
    },
    k = () => {
      zg(e, null), x.current && (x.current.destroy(), (x.current = null));
    };
  return (
    D.useEffect(() => {
      !s && x.current && f && RC(x.current, f);
    }, [s, f]),
    D.useEffect(() => {
      !s && x.current && b0(x.current.config.data, c.labels);
    }, [s, c.labels]),
    D.useEffect(() => {
      !s && x.current && c.datasets && S0(x.current.config.data, c.datasets, a);
    }, [s, c.datasets]),
    D.useEffect(() => {
      x.current && (s ? (k(), setTimeout(b)) : x.current.update(y));
    }, [s, f, c.labels, c.datasets, y]),
    D.useEffect(() => {
      x.current && (k(), setTimeout(b));
    }, [u]),
    D.useEffect(() => (b(), () => k()), []),
    ad.createElement(
      "canvas",
      { ref: v, role: "img", height: t, width: r, ...w },
      m
    )
  );
}
const IC = D.forwardRef(LC);
function NC(n, e) {
  return (
    dl.register(e),
    D.forwardRef((t, r) => ad.createElement(IC, { ...t, ref: r, type: n }))
  );
}
const zC = NC("line", Aa),
  E0 = 6048e5,
  FC = 864e5,
  Js = 6e4,
  eo = 36e5,
  AC = 1e3,
  Fg = Symbol.for("constructDateFrom");
function $e(n, e) {
  return typeof n == "function"
    ? n(e)
    : n && typeof n == "object" && Fg in n
    ? n[Fg](e)
    : n instanceof Date
    ? new n.constructor(e)
    : new Date(e);
}
function de(n, e) {
  return $e(e || n, n);
}
function hl(n, e, t) {
  const r = de(n, t == null ? void 0 : t.in);
  return isNaN(e)
    ? $e((t == null ? void 0 : t.in) || n, NaN)
    : (e && r.setDate(r.getDate() + e), r);
}
function jd(n, e, t) {
  const r = de(n, t == null ? void 0 : t.in);
  if (isNaN(e)) return $e(n, NaN);
  if (!e) return r;
  const s = r.getDate(),
    a = $e(n, r.getTime());
  a.setMonth(r.getMonth() + e + 1, 0);
  const u = a.getDate();
  return s >= u ? a : (r.setFullYear(a.getFullYear(), a.getMonth(), s), r);
}
function Wd(n, e, t) {
  return $e(n, +de(n) + e);
}
function jC(n, e, t) {
  return Wd(n, e * eo);
}
let WC = {};
function Fr() {
  return WC;
}
function gn(n, e) {
  var c, f, h, m;
  const t = Fr(),
    r =
      (e == null ? void 0 : e.weekStartsOn) ??
      ((f = (c = e == null ? void 0 : e.locale) == null ? void 0 : c.options) ==
      null
        ? void 0
        : f.weekStartsOn) ??
      t.weekStartsOn ??
      ((m = (h = t.locale) == null ? void 0 : h.options) == null
        ? void 0
        : m.weekStartsOn) ??
      0,
    s = de(n, e == null ? void 0 : e.in),
    a = s.getDay(),
    u = (a < r ? 7 : 0) + a - r;
  return s.setDate(s.getDate() - u), s.setHours(0, 0, 0, 0), s;
}
function xi(n, e) {
  return gn(n, { ...e, weekStartsOn: 1 });
}
function C0(n, e) {
  const t = de(n, e == null ? void 0 : e.in),
    r = t.getFullYear(),
    s = $e(t, 0);
  s.setFullYear(r + 1, 0, 4), s.setHours(0, 0, 0, 0);
  const a = xi(s),
    u = $e(t, 0);
  u.setFullYear(r, 0, 4), u.setHours(0, 0, 0, 0);
  const c = xi(u);
  return t.getTime() >= a.getTime()
    ? r + 1
    : t.getTime() >= c.getTime()
    ? r
    : r - 1;
}
function Za(n) {
  const e = de(n),
    t = new Date(
      Date.UTC(
        e.getFullYear(),
        e.getMonth(),
        e.getDate(),
        e.getHours(),
        e.getMinutes(),
        e.getSeconds(),
        e.getMilliseconds()
      )
    );
  return t.setUTCFullYear(e.getFullYear()), +n - +t;
}
function Ar(n, ...e) {
  const t = $e.bind(
    null,
    e.find((r) => typeof r == "object")
  );
  return e.map(t);
}
function rd(n, e) {
  const t = de(n, e == null ? void 0 : e.in);
  return t.setHours(0, 0, 0, 0), t;
}
function P0(n, e, t) {
  const [r, s] = Ar(t == null ? void 0 : t.in, n, e),
    a = rd(r),
    u = rd(s),
    c = +a - Za(a),
    f = +u - Za(u);
  return Math.round((c - f) / FC);
}
function HC(n, e) {
  const t = C0(n, e),
    r = $e(n, 0);
  return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), xi(r);
}
function BC(n, e, t) {
  const r = de(n, t == null ? void 0 : t.in);
  return r.setTime(r.getTime() + e * Js), r;
}
function UC(n, e, t) {
  return jd(n, e * 3, t);
}
function $C(n, e, t) {
  return Wd(n, e * 1e3);
}
function VC(n, e, t) {
  return hl(n, e * 7, t);
}
function YC(n, e, t) {
  return jd(n, e * 12, t);
}
function Ns(n, e) {
  const t = +de(n) - +de(e);
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function KC(n) {
  return (
    n instanceof Date ||
    (typeof n == "object" &&
      Object.prototype.toString.call(n) === "[object Date]")
  );
}
function T0(n) {
  return !((!KC(n) && typeof n != "number") || isNaN(+de(n)));
}
function XC(n, e, t) {
  const [r, s] = Ar(t == null ? void 0 : t.in, n, e),
    a = r.getFullYear() - s.getFullYear(),
    u = r.getMonth() - s.getMonth();
  return a * 12 + u;
}
function qC(n, e, t) {
  const [r, s] = Ar(t == null ? void 0 : t.in, n, e);
  return r.getFullYear() - s.getFullYear();
}
function O0(n, e, t) {
  const [r, s] = Ar(t == null ? void 0 : t.in, n, e),
    a = Ag(r, s),
    u = Math.abs(P0(r, s));
  r.setDate(r.getDate() - a * u);
  const c = +(Ag(r, s) === -a),
    f = a * (u - c);
  return f === 0 ? 0 : f;
}
function Ag(n, e) {
  const t =
    n.getFullYear() - e.getFullYear() ||
    n.getMonth() - e.getMonth() ||
    n.getDate() - e.getDate() ||
    n.getHours() - e.getHours() ||
    n.getMinutes() - e.getMinutes() ||
    n.getSeconds() - e.getSeconds() ||
    n.getMilliseconds() - e.getMilliseconds();
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function to(n) {
  return (e) => {
    const r = (n ? Math[n] : Math.trunc)(e);
    return r === 0 ? 0 : r;
  };
}
function GC(n, e, t) {
  const [r, s] = Ar(t == null ? void 0 : t.in, n, e),
    a = (+r - +s) / eo;
  return to(t == null ? void 0 : t.roundingMethod)(a);
}
function Hd(n, e) {
  return +de(n) - +de(e);
}
function QC(n, e, t) {
  const r = Hd(n, e) / Js;
  return to(t == null ? void 0 : t.roundingMethod)(r);
}
function M0(n, e) {
  const t = de(n, e == null ? void 0 : e.in);
  return t.setHours(23, 59, 59, 999), t;
}
function R0(n, e) {
  const t = de(n, e == null ? void 0 : e.in),
    r = t.getMonth();
  return (
    t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(23, 59, 59, 999), t
  );
}
function ZC(n, e) {
  const t = de(n, e == null ? void 0 : e.in);
  return +M0(t, e) == +R0(t, e);
}
function D0(n, e, t) {
  const [r, s, a] = Ar(t == null ? void 0 : t.in, n, n, e),
    u = Ns(s, a),
    c = Math.abs(XC(s, a));
  if (c < 1) return 0;
  s.getMonth() === 1 && s.getDate() > 27 && s.setDate(30),
    s.setMonth(s.getMonth() - u * c);
  let f = Ns(s, a) === -u;
  ZC(r) && c === 1 && Ns(r, a) === 1 && (f = !1);
  const h = u * (c - +f);
  return h === 0 ? 0 : h;
}
function JC(n, e, t) {
  const r = D0(n, e, t) / 3;
  return to(t == null ? void 0 : t.roundingMethod)(r);
}
function eP(n, e, t) {
  const r = Hd(n, e) / 1e3;
  return to(t == null ? void 0 : t.roundingMethod)(r);
}
function tP(n, e, t) {
  const r = O0(n, e, t) / 7;
  return to(t == null ? void 0 : t.roundingMethod)(r);
}
function nP(n, e, t) {
  const [r, s] = Ar(t == null ? void 0 : t.in, n, e),
    a = Ns(r, s),
    u = Math.abs(qC(r, s));
  r.setFullYear(1584), s.setFullYear(1584);
  const c = Ns(r, s) === -a,
    f = a * (u - +c);
  return f === 0 ? 0 : f;
}
function rP(n, e) {
  const t = de(n, e == null ? void 0 : e.in),
    r = t.getMonth(),
    s = r - (r % 3);
  return t.setMonth(s, 1), t.setHours(0, 0, 0, 0), t;
}
function iP(n, e) {
  const t = de(n, e == null ? void 0 : e.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function sP(n, e) {
  const t = de(n, e == null ? void 0 : e.in),
    r = t.getFullYear();
  return t.setFullYear(r + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function L0(n, e) {
  const t = de(n, e == null ? void 0 : e.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function oP(n, e) {
  const t = de(n, e == null ? void 0 : e.in);
  return t.setMinutes(59, 59, 999), t;
}
function aP(n, e) {
  var c, f;
  const t = Fr(),
    r =
      t.weekStartsOn ??
      ((f = (c = t.locale) == null ? void 0 : c.options) == null
        ? void 0
        : f.weekStartsOn) ??
      0,
    s = de(n, e == null ? void 0 : e.in),
    a = s.getDay(),
    u = (a < r ? -7 : 0) + 6 - (a - r);
  return s.setDate(s.getDate() + u), s.setHours(23, 59, 59, 999), s;
}
function lP(n, e) {
  const t = de(n, e == null ? void 0 : e.in);
  return t.setSeconds(59, 999), t;
}
function uP(n, e) {
  const t = de(n, e == null ? void 0 : e.in),
    r = t.getMonth(),
    s = r - (r % 3) + 3;
  return t.setMonth(s, 0), t.setHours(23, 59, 59, 999), t;
}
function cP(n, e) {
  const t = de(n, e == null ? void 0 : e.in);
  return t.setMilliseconds(999), t;
}
const dP = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  fP = (n, e, t) => {
    let r;
    const s = dP[n];
    return (
      typeof s == "string"
        ? (r = s)
        : e === 1
        ? (r = s.one)
        : (r = s.other.replace("{{count}}", e.toString())),
      t != null && t.addSuffix
        ? t.comparison && t.comparison > 0
          ? "in " + r
          : r + " ago"
        : r
    );
  };
function Dc(n) {
  return (e = {}) => {
    const t = e.width ? String(e.width) : n.defaultWidth;
    return n.formats[t] || n.formats[n.defaultWidth];
  };
}
const hP = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  pP = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  mP = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  gP = {
    date: Dc({ formats: hP, defaultWidth: "full" }),
    time: Dc({ formats: pP, defaultWidth: "full" }),
    dateTime: Dc({ formats: mP, defaultWidth: "full" }),
  },
  yP = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  wP = (n, e, t, r) => yP[n];
function _s(n) {
  return (e, t) => {
    const r = t != null && t.context ? String(t.context) : "standalone";
    let s;
    if (r === "formatting" && n.formattingValues) {
      const u = n.defaultFormattingWidth || n.defaultWidth,
        c = t != null && t.width ? String(t.width) : u;
      s = n.formattingValues[c] || n.formattingValues[u];
    } else {
      const u = n.defaultWidth,
        c = t != null && t.width ? String(t.width) : n.defaultWidth;
      s = n.values[c] || n.values[u];
    }
    const a = n.argumentCallback ? n.argumentCallback(e) : e;
    return s[a];
  };
}
const vP = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  xP = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  _P = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  kP = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  bP = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  SP = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  EP = (n, e) => {
    const t = Number(n),
      r = t % 100;
    if (r > 20 || r < 10)
      switch (r % 10) {
        case 1:
          return t + "st";
        case 2:
          return t + "nd";
        case 3:
          return t + "rd";
      }
    return t + "th";
  },
  CP = {
    ordinalNumber: EP,
    era: _s({ values: vP, defaultWidth: "wide" }),
    quarter: _s({
      values: xP,
      defaultWidth: "wide",
      argumentCallback: (n) => n - 1,
    }),
    month: _s({ values: _P, defaultWidth: "wide" }),
    day: _s({ values: kP, defaultWidth: "wide" }),
    dayPeriod: _s({
      values: bP,
      defaultWidth: "wide",
      formattingValues: SP,
      defaultFormattingWidth: "wide",
    }),
  };
function ks(n) {
  return (e, t = {}) => {
    const r = t.width,
      s = (r && n.matchPatterns[r]) || n.matchPatterns[n.defaultMatchWidth],
      a = e.match(s);
    if (!a) return null;
    const u = a[0],
      c = (r && n.parsePatterns[r]) || n.parsePatterns[n.defaultParseWidth],
      f = Array.isArray(c) ? TP(c, (y) => y.test(u)) : PP(c, (y) => y.test(u));
    let h;
    (h = n.valueCallback ? n.valueCallback(f) : f),
      (h = t.valueCallback ? t.valueCallback(h) : h);
    const m = e.slice(u.length);
    return { value: h, rest: m };
  };
}
function PP(n, e) {
  for (const t in n)
    if (Object.prototype.hasOwnProperty.call(n, t) && e(n[t])) return t;
}
function TP(n, e) {
  for (let t = 0; t < n.length; t++) if (e(n[t])) return t;
}
function OP(n) {
  return (e, t = {}) => {
    const r = e.match(n.matchPattern);
    if (!r) return null;
    const s = r[0],
      a = e.match(n.parsePattern);
    if (!a) return null;
    let u = n.valueCallback ? n.valueCallback(a[0]) : a[0];
    u = t.valueCallback ? t.valueCallback(u) : u;
    const c = e.slice(s.length);
    return { value: u, rest: c };
  };
}
const MP = /^(\d+)(th|st|nd|rd)?/i,
  RP = /\d+/i,
  DP = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  LP = { any: [/^b/i, /^(a|c)/i] },
  IP = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  NP = { any: [/1/i, /2/i, /3/i, /4/i] },
  zP = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  FP = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  AP = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  jP = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  WP = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  HP = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  BP = {
    ordinalNumber: OP({
      matchPattern: MP,
      parsePattern: RP,
      valueCallback: (n) => parseInt(n, 10),
    }),
    era: ks({
      matchPatterns: DP,
      defaultMatchWidth: "wide",
      parsePatterns: LP,
      defaultParseWidth: "any",
    }),
    quarter: ks({
      matchPatterns: IP,
      defaultMatchWidth: "wide",
      parsePatterns: NP,
      defaultParseWidth: "any",
      valueCallback: (n) => n + 1,
    }),
    month: ks({
      matchPatterns: zP,
      defaultMatchWidth: "wide",
      parsePatterns: FP,
      defaultParseWidth: "any",
    }),
    day: ks({
      matchPatterns: AP,
      defaultMatchWidth: "wide",
      parsePatterns: jP,
      defaultParseWidth: "any",
    }),
    dayPeriod: ks({
      matchPatterns: WP,
      defaultMatchWidth: "any",
      parsePatterns: HP,
      defaultParseWidth: "any",
    }),
  },
  I0 = {
    code: "en-US",
    formatDistance: fP,
    formatLong: gP,
    formatRelative: wP,
    localize: CP,
    match: BP,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function UP(n, e) {
  const t = de(n, e == null ? void 0 : e.in);
  return P0(t, L0(t)) + 1;
}
function N0(n, e) {
  const t = de(n, e == null ? void 0 : e.in),
    r = +xi(t) - +HC(t);
  return Math.round(r / E0) + 1;
}
function Bd(n, e) {
  var m, y, w, v;
  const t = de(n, e == null ? void 0 : e.in),
    r = t.getFullYear(),
    s = Fr(),
    a =
      (e == null ? void 0 : e.firstWeekContainsDate) ??
      ((y = (m = e == null ? void 0 : e.locale) == null ? void 0 : m.options) ==
      null
        ? void 0
        : y.firstWeekContainsDate) ??
      s.firstWeekContainsDate ??
      ((v = (w = s.locale) == null ? void 0 : w.options) == null
        ? void 0
        : v.firstWeekContainsDate) ??
      1,
    u = $e((e == null ? void 0 : e.in) || n, 0);
  u.setFullYear(r + 1, 0, a), u.setHours(0, 0, 0, 0);
  const c = gn(u, e),
    f = $e((e == null ? void 0 : e.in) || n, 0);
  f.setFullYear(r, 0, a), f.setHours(0, 0, 0, 0);
  const h = gn(f, e);
  return +t >= +c ? r + 1 : +t >= +h ? r : r - 1;
}
function $P(n, e) {
  var c, f, h, m;
  const t = Fr(),
    r =
      (e == null ? void 0 : e.firstWeekContainsDate) ??
      ((f = (c = e == null ? void 0 : e.locale) == null ? void 0 : c.options) ==
      null
        ? void 0
        : f.firstWeekContainsDate) ??
      t.firstWeekContainsDate ??
      ((m = (h = t.locale) == null ? void 0 : h.options) == null
        ? void 0
        : m.firstWeekContainsDate) ??
      1,
    s = Bd(n, e),
    a = $e((e == null ? void 0 : e.in) || n, 0);
  return a.setFullYear(s, 0, r), a.setHours(0, 0, 0, 0), gn(a, e);
}
function z0(n, e) {
  const t = de(n, e == null ? void 0 : e.in),
    r = +gn(t, e) - +$P(t, e);
  return Math.round(r / E0) + 1;
}
function Te(n, e) {
  const t = n < 0 ? "-" : "",
    r = Math.abs(n).toString().padStart(e, "0");
  return t + r;
}
const Jn = {
    y(n, e) {
      const t = n.getFullYear(),
        r = t > 0 ? t : 1 - t;
      return Te(e === "yy" ? r % 100 : r, e.length);
    },
    M(n, e) {
      const t = n.getMonth();
      return e === "M" ? String(t + 1) : Te(t + 1, 2);
    },
    d(n, e) {
      return Te(n.getDate(), e.length);
    },
    a(n, e) {
      const t = n.getHours() / 12 >= 1 ? "pm" : "am";
      switch (e) {
        case "a":
        case "aa":
          return t.toUpperCase();
        case "aaa":
          return t;
        case "aaaaa":
          return t[0];
        case "aaaa":
        default:
          return t === "am" ? "a.m." : "p.m.";
      }
    },
    h(n, e) {
      return Te(n.getHours() % 12 || 12, e.length);
    },
    H(n, e) {
      return Te(n.getHours(), e.length);
    },
    m(n, e) {
      return Te(n.getMinutes(), e.length);
    },
    s(n, e) {
      return Te(n.getSeconds(), e.length);
    },
    S(n, e) {
      const t = e.length,
        r = n.getMilliseconds(),
        s = Math.trunc(r * Math.pow(10, t - 3));
      return Te(s, e.length);
    },
  },
  hi = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  jg = {
    G: function (n, e, t) {
      const r = n.getFullYear() > 0 ? 1 : 0;
      switch (e) {
        case "G":
        case "GG":
        case "GGG":
          return t.era(r, { width: "abbreviated" });
        case "GGGGG":
          return t.era(r, { width: "narrow" });
        case "GGGG":
        default:
          return t.era(r, { width: "wide" });
      }
    },
    y: function (n, e, t) {
      if (e === "yo") {
        const r = n.getFullYear(),
          s = r > 0 ? r : 1 - r;
        return t.ordinalNumber(s, { unit: "year" });
      }
      return Jn.y(n, e);
    },
    Y: function (n, e, t, r) {
      const s = Bd(n, r),
        a = s > 0 ? s : 1 - s;
      if (e === "YY") {
        const u = a % 100;
        return Te(u, 2);
      }
      return e === "Yo"
        ? t.ordinalNumber(a, { unit: "year" })
        : Te(a, e.length);
    },
    R: function (n, e) {
      const t = C0(n);
      return Te(t, e.length);
    },
    u: function (n, e) {
      const t = n.getFullYear();
      return Te(t, e.length);
    },
    Q: function (n, e, t) {
      const r = Math.ceil((n.getMonth() + 1) / 3);
      switch (e) {
        case "Q":
          return String(r);
        case "QQ":
          return Te(r, 2);
        case "Qo":
          return t.ordinalNumber(r, { unit: "quarter" });
        case "QQQ":
          return t.quarter(r, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return t.quarter(r, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return t.quarter(r, { width: "wide", context: "formatting" });
      }
    },
    q: function (n, e, t) {
      const r = Math.ceil((n.getMonth() + 1) / 3);
      switch (e) {
        case "q":
          return String(r);
        case "qq":
          return Te(r, 2);
        case "qo":
          return t.ordinalNumber(r, { unit: "quarter" });
        case "qqq":
          return t.quarter(r, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return t.quarter(r, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return t.quarter(r, { width: "wide", context: "standalone" });
      }
    },
    M: function (n, e, t) {
      const r = n.getMonth();
      switch (e) {
        case "M":
        case "MM":
          return Jn.M(n, e);
        case "Mo":
          return t.ordinalNumber(r + 1, { unit: "month" });
        case "MMM":
          return t.month(r, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return t.month(r, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return t.month(r, { width: "wide", context: "formatting" });
      }
    },
    L: function (n, e, t) {
      const r = n.getMonth();
      switch (e) {
        case "L":
          return String(r + 1);
        case "LL":
          return Te(r + 1, 2);
        case "Lo":
          return t.ordinalNumber(r + 1, { unit: "month" });
        case "LLL":
          return t.month(r, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return t.month(r, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return t.month(r, { width: "wide", context: "standalone" });
      }
    },
    w: function (n, e, t, r) {
      const s = z0(n, r);
      return e === "wo"
        ? t.ordinalNumber(s, { unit: "week" })
        : Te(s, e.length);
    },
    I: function (n, e, t) {
      const r = N0(n);
      return e === "Io"
        ? t.ordinalNumber(r, { unit: "week" })
        : Te(r, e.length);
    },
    d: function (n, e, t) {
      return e === "do"
        ? t.ordinalNumber(n.getDate(), { unit: "date" })
        : Jn.d(n, e);
    },
    D: function (n, e, t) {
      const r = UP(n);
      return e === "Do"
        ? t.ordinalNumber(r, { unit: "dayOfYear" })
        : Te(r, e.length);
    },
    E: function (n, e, t) {
      const r = n.getDay();
      switch (e) {
        case "E":
        case "EE":
        case "EEE":
          return t.day(r, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return t.day(r, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return t.day(r, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return t.day(r, { width: "wide", context: "formatting" });
      }
    },
    e: function (n, e, t, r) {
      const s = n.getDay(),
        a = (s - r.weekStartsOn + 8) % 7 || 7;
      switch (e) {
        case "e":
          return String(a);
        case "ee":
          return Te(a, 2);
        case "eo":
          return t.ordinalNumber(a, { unit: "day" });
        case "eee":
          return t.day(s, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return t.day(s, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return t.day(s, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return t.day(s, { width: "wide", context: "formatting" });
      }
    },
    c: function (n, e, t, r) {
      const s = n.getDay(),
        a = (s - r.weekStartsOn + 8) % 7 || 7;
      switch (e) {
        case "c":
          return String(a);
        case "cc":
          return Te(a, e.length);
        case "co":
          return t.ordinalNumber(a, { unit: "day" });
        case "ccc":
          return t.day(s, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return t.day(s, { width: "narrow", context: "standalone" });
        case "cccccc":
          return t.day(s, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return t.day(s, { width: "wide", context: "standalone" });
      }
    },
    i: function (n, e, t) {
      const r = n.getDay(),
        s = r === 0 ? 7 : r;
      switch (e) {
        case "i":
          return String(s);
        case "ii":
          return Te(s, e.length);
        case "io":
          return t.ordinalNumber(s, { unit: "day" });
        case "iii":
          return t.day(r, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return t.day(r, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return t.day(r, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return t.day(r, { width: "wide", context: "formatting" });
      }
    },
    a: function (n, e, t) {
      const s = n.getHours() / 12 >= 1 ? "pm" : "am";
      switch (e) {
        case "a":
        case "aa":
          return t.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return t
            .dayPeriod(s, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return t.dayPeriod(s, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return t.dayPeriod(s, { width: "wide", context: "formatting" });
      }
    },
    b: function (n, e, t) {
      const r = n.getHours();
      let s;
      switch (
        (r === 12
          ? (s = hi.noon)
          : r === 0
          ? (s = hi.midnight)
          : (s = r / 12 >= 1 ? "pm" : "am"),
        e)
      ) {
        case "b":
        case "bb":
          return t.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return t
            .dayPeriod(s, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return t.dayPeriod(s, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return t.dayPeriod(s, { width: "wide", context: "formatting" });
      }
    },
    B: function (n, e, t) {
      const r = n.getHours();
      let s;
      switch (
        (r >= 17
          ? (s = hi.evening)
          : r >= 12
          ? (s = hi.afternoon)
          : r >= 4
          ? (s = hi.morning)
          : (s = hi.night),
        e)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return t.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return t.dayPeriod(s, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return t.dayPeriod(s, { width: "wide", context: "formatting" });
      }
    },
    h: function (n, e, t) {
      if (e === "ho") {
        let r = n.getHours() % 12;
        return r === 0 && (r = 12), t.ordinalNumber(r, { unit: "hour" });
      }
      return Jn.h(n, e);
    },
    H: function (n, e, t) {
      return e === "Ho"
        ? t.ordinalNumber(n.getHours(), { unit: "hour" })
        : Jn.H(n, e);
    },
    K: function (n, e, t) {
      const r = n.getHours() % 12;
      return e === "Ko"
        ? t.ordinalNumber(r, { unit: "hour" })
        : Te(r, e.length);
    },
    k: function (n, e, t) {
      let r = n.getHours();
      return (
        r === 0 && (r = 24),
        e === "ko" ? t.ordinalNumber(r, { unit: "hour" }) : Te(r, e.length)
      );
    },
    m: function (n, e, t) {
      return e === "mo"
        ? t.ordinalNumber(n.getMinutes(), { unit: "minute" })
        : Jn.m(n, e);
    },
    s: function (n, e, t) {
      return e === "so"
        ? t.ordinalNumber(n.getSeconds(), { unit: "second" })
        : Jn.s(n, e);
    },
    S: function (n, e) {
      return Jn.S(n, e);
    },
    X: function (n, e, t) {
      const r = n.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (e) {
        case "X":
          return Hg(r);
        case "XXXX":
        case "XX":
          return Er(r);
        case "XXXXX":
        case "XXX":
        default:
          return Er(r, ":");
      }
    },
    x: function (n, e, t) {
      const r = n.getTimezoneOffset();
      switch (e) {
        case "x":
          return Hg(r);
        case "xxxx":
        case "xx":
          return Er(r);
        case "xxxxx":
        case "xxx":
        default:
          return Er(r, ":");
      }
    },
    O: function (n, e, t) {
      const r = n.getTimezoneOffset();
      switch (e) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Wg(r, ":");
        case "OOOO":
        default:
          return "GMT" + Er(r, ":");
      }
    },
    z: function (n, e, t) {
      const r = n.getTimezoneOffset();
      switch (e) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Wg(r, ":");
        case "zzzz":
        default:
          return "GMT" + Er(r, ":");
      }
    },
    t: function (n, e, t) {
      const r = Math.trunc(+n / 1e3);
      return Te(r, e.length);
    },
    T: function (n, e, t) {
      return Te(+n, e.length);
    },
  };
function Wg(n, e = "") {
  const t = n > 0 ? "-" : "+",
    r = Math.abs(n),
    s = Math.trunc(r / 60),
    a = r % 60;
  return a === 0 ? t + String(s) : t + String(s) + e + Te(a, 2);
}
function Hg(n, e) {
  return n % 60 === 0
    ? (n > 0 ? "-" : "+") + Te(Math.abs(n) / 60, 2)
    : Er(n, e);
}
function Er(n, e = "") {
  const t = n > 0 ? "-" : "+",
    r = Math.abs(n),
    s = Te(Math.trunc(r / 60), 2),
    a = Te(r % 60, 2);
  return t + s + e + a;
}
const Bg = (n, e) => {
    switch (n) {
      case "P":
        return e.date({ width: "short" });
      case "PP":
        return e.date({ width: "medium" });
      case "PPP":
        return e.date({ width: "long" });
      case "PPPP":
      default:
        return e.date({ width: "full" });
    }
  },
  F0 = (n, e) => {
    switch (n) {
      case "p":
        return e.time({ width: "short" });
      case "pp":
        return e.time({ width: "medium" });
      case "ppp":
        return e.time({ width: "long" });
      case "pppp":
      default:
        return e.time({ width: "full" });
    }
  },
  VP = (n, e) => {
    const t = n.match(/(P+)(p+)?/) || [],
      r = t[1],
      s = t[2];
    if (!s) return Bg(n, e);
    let a;
    switch (r) {
      case "P":
        a = e.dateTime({ width: "short" });
        break;
      case "PP":
        a = e.dateTime({ width: "medium" });
        break;
      case "PPP":
        a = e.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        a = e.dateTime({ width: "full" });
        break;
    }
    return a.replace("{{date}}", Bg(r, e)).replace("{{time}}", F0(s, e));
  },
  id = { p: F0, P: VP },
  YP = /^D+$/,
  KP = /^Y+$/,
  XP = ["D", "DD", "YY", "YYYY"];
function A0(n) {
  return YP.test(n);
}
function j0(n) {
  return KP.test(n);
}
function sd(n, e, t) {
  const r = qP(n, e, t);
  if ((console.warn(r), XP.includes(n))) throw new RangeError(r);
}
function qP(n, e, t) {
  const r = n[0] === "Y" ? "years" : "days of the month";
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${e}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const GP = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  QP = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  ZP = /^'([^]*?)'?$/,
  JP = /''/g,
  eT = /[a-zA-Z]/;
function tT(n, e, t) {
  var m, y, w, v, x, b, k, S;
  const r = Fr(),
    s = (t == null ? void 0 : t.locale) ?? r.locale ?? I0,
    a =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((y = (m = t == null ? void 0 : t.locale) == null ? void 0 : m.options) ==
      null
        ? void 0
        : y.firstWeekContainsDate) ??
      r.firstWeekContainsDate ??
      ((v = (w = r.locale) == null ? void 0 : w.options) == null
        ? void 0
        : v.firstWeekContainsDate) ??
      1,
    u =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((b = (x = t == null ? void 0 : t.locale) == null ? void 0 : x.options) ==
      null
        ? void 0
        : b.weekStartsOn) ??
      r.weekStartsOn ??
      ((S = (k = r.locale) == null ? void 0 : k.options) == null
        ? void 0
        : S.weekStartsOn) ??
      0,
    c = de(n, t == null ? void 0 : t.in);
  if (!T0(c)) throw new RangeError("Invalid time value");
  let f = e
    .match(QP)
    .map((C) => {
      const O = C[0];
      if (O === "p" || O === "P") {
        const R = id[O];
        return R(C, s.formatLong);
      }
      return C;
    })
    .join("")
    .match(GP)
    .map((C) => {
      if (C === "''") return { isToken: !1, value: "'" };
      const O = C[0];
      if (O === "'") return { isToken: !1, value: nT(C) };
      if (jg[O]) return { isToken: !0, value: C };
      if (O.match(eT))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            O +
            "`"
        );
      return { isToken: !1, value: C };
    });
  s.localize.preprocessor && (f = s.localize.preprocessor(c, f));
  const h = { firstWeekContainsDate: a, weekStartsOn: u, locale: s };
  return f
    .map((C) => {
      if (!C.isToken) return C.value;
      const O = C.value;
      ((!(t != null && t.useAdditionalWeekYearTokens) && j0(O)) ||
        (!(t != null && t.useAdditionalDayOfYearTokens) && A0(O))) &&
        sd(O, e, String(n));
      const R = jg[O[0]];
      return R(c, O, s.localize, h);
    })
    .join("");
}
function nT(n) {
  const e = n.match(ZP);
  return e ? e[1].replace(JP, "'") : n;
}
function rT() {
  return Object.assign({}, Fr());
}
function iT(n, e) {
  const t = de(n, e == null ? void 0 : e.in).getDay();
  return t === 0 ? 7 : t;
}
function sT(n, e) {
  const t = oT(e) ? new e(0) : $e(e, 0);
  return (
    t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()),
    t.setHours(
      n.getHours(),
      n.getMinutes(),
      n.getSeconds(),
      n.getMilliseconds()
    ),
    t
  );
}
function oT(n) {
  var e;
  return (
    typeof n == "function" &&
    ((e = n.prototype) == null ? void 0 : e.constructor) === n
  );
}
const aT = 10;
class W0 {
  constructor() {
    V(this, "subPriority", 0);
  }
  validate(e, t) {
    return !0;
  }
}
class lT extends W0 {
  constructor(e, t, r, s, a) {
    super(),
      (this.value = e),
      (this.validateValue = t),
      (this.setValue = r),
      (this.priority = s),
      a && (this.subPriority = a);
  }
  validate(e, t) {
    return this.validateValue(e, this.value, t);
  }
  set(e, t, r) {
    return this.setValue(e, t, this.value, r);
  }
}
class uT extends W0 {
  constructor(t, r) {
    super();
    V(this, "priority", aT);
    V(this, "subPriority", -1);
    this.context = t || ((s) => $e(r, s));
  }
  set(t, r) {
    return r.timestampIsSet ? t : $e(t, sT(t, this.context));
  }
}
class Se {
  run(e, t, r, s) {
    const a = this.parse(e, t, r, s);
    return a
      ? {
          setter: new lT(
            a.value,
            this.validate,
            this.set,
            this.priority,
            this.subPriority
          ),
          rest: a.rest,
        }
      : null;
  }
  validate(e, t, r) {
    return !0;
  }
}
class cT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 140);
    V(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(t, r, s) {
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return (
          s.era(t, { width: "abbreviated" }) || s.era(t, { width: "narrow" })
        );
      case "GGGGG":
        return s.era(t, { width: "narrow" });
      case "GGGG":
      default:
        return (
          s.era(t, { width: "wide" }) ||
          s.era(t, { width: "abbreviated" }) ||
          s.era(t, { width: "narrow" })
        );
    }
  }
  set(t, r, s) {
    return (r.era = s), t.setFullYear(s, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
const qe = {
    month: /^(1[0-2]|0?\d)/,
    date: /^(3[0-1]|[0-2]?\d)/,
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    week: /^(5[0-3]|[0-4]?\d)/,
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    hour11h: /^(1[0-1]|0?\d)/,
    hour12h: /^(1[0-2]|0?\d)/,
    minute: /^[0-5]?\d/,
    second: /^[0-5]?\d/,
    singleDigit: /^\d/,
    twoDigits: /^\d{1,2}/,
    threeDigits: /^\d{1,3}/,
    fourDigits: /^\d{1,4}/,
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    twoDigitsSigned: /^-?\d{1,2}/,
    threeDigitsSigned: /^-?\d{1,3}/,
    fourDigitsSigned: /^-?\d{1,4}/,
  },
  dn = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
  };
function Ge(n, e) {
  return n && { value: e(n.value), rest: n.rest };
}
function We(n, e) {
  const t = e.match(n);
  return t ? { value: parseInt(t[0], 10), rest: e.slice(t[0].length) } : null;
}
function fn(n, e) {
  const t = e.match(n);
  if (!t) return null;
  if (t[0] === "Z") return { value: 0, rest: e.slice(1) };
  const r = t[1] === "+" ? 1 : -1,
    s = t[2] ? parseInt(t[2], 10) : 0,
    a = t[3] ? parseInt(t[3], 10) : 0,
    u = t[5] ? parseInt(t[5], 10) : 0;
  return { value: r * (s * eo + a * Js + u * AC), rest: e.slice(t[0].length) };
}
function H0(n) {
  return We(qe.anyDigitsSigned, n);
}
function Ve(n, e) {
  switch (n) {
    case 1:
      return We(qe.singleDigit, e);
    case 2:
      return We(qe.twoDigits, e);
    case 3:
      return We(qe.threeDigits, e);
    case 4:
      return We(qe.fourDigits, e);
    default:
      return We(new RegExp("^\\d{1," + n + "}"), e);
  }
}
function Ja(n, e) {
  switch (n) {
    case 1:
      return We(qe.singleDigitSigned, e);
    case 2:
      return We(qe.twoDigitsSigned, e);
    case 3:
      return We(qe.threeDigitsSigned, e);
    case 4:
      return We(qe.fourDigitsSigned, e);
    default:
      return We(new RegExp("^-?\\d{1," + n + "}"), e);
  }
}
function Ud(n) {
  switch (n) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function B0(n, e) {
  const t = e > 0,
    r = t ? e : 1 - e;
  let s;
  if (r <= 50) s = n || 100;
  else {
    const a = r + 50,
      u = Math.trunc(a / 100) * 100,
      c = n >= a % 100;
    s = n + u - (c ? 100 : 0);
  }
  return t ? s : 1 - s;
}
function U0(n) {
  return n % 400 === 0 || (n % 4 === 0 && n % 100 !== 0);
}
class dT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 130);
    V(this, "incompatibleTokens", [
      "Y",
      "R",
      "u",
      "w",
      "I",
      "i",
      "e",
      "c",
      "t",
      "T",
    ]);
  }
  parse(t, r, s) {
    const a = (u) => ({ year: u, isTwoDigitYear: r === "yy" });
    switch (r) {
      case "y":
        return Ge(Ve(4, t), a);
      case "yo":
        return Ge(s.ordinalNumber(t, { unit: "year" }), a);
      default:
        return Ge(Ve(r.length, t), a);
    }
  }
  validate(t, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(t, r, s) {
    const a = t.getFullYear();
    if (s.isTwoDigitYear) {
      const c = B0(s.year, a);
      return t.setFullYear(c, 0, 1), t.setHours(0, 0, 0, 0), t;
    }
    const u = !("era" in r) || r.era === 1 ? s.year : 1 - s.year;
    return t.setFullYear(u, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class fT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 130);
    V(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T",
    ]);
  }
  parse(t, r, s) {
    const a = (u) => ({ year: u, isTwoDigitYear: r === "YY" });
    switch (r) {
      case "Y":
        return Ge(Ve(4, t), a);
      case "Yo":
        return Ge(s.ordinalNumber(t, { unit: "year" }), a);
      default:
        return Ge(Ve(r.length, t), a);
    }
  }
  validate(t, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(t, r, s, a) {
    const u = Bd(t, a);
    if (s.isTwoDigitYear) {
      const f = B0(s.year, u);
      return (
        t.setFullYear(f, 0, a.firstWeekContainsDate),
        t.setHours(0, 0, 0, 0),
        gn(t, a)
      );
    }
    const c = !("era" in r) || r.era === 1 ? s.year : 1 - s.year;
    return (
      t.setFullYear(c, 0, a.firstWeekContainsDate),
      t.setHours(0, 0, 0, 0),
      gn(t, a)
    );
  }
}
class hT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 130);
    V(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T",
    ]);
  }
  parse(t, r) {
    return Ja(r === "R" ? 4 : r.length, t);
  }
  set(t, r, s) {
    const a = $e(t, 0);
    return a.setFullYear(s, 0, 4), a.setHours(0, 0, 0, 0), xi(a);
  }
}
class pT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 130);
    V(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "R",
      "w",
      "I",
      "i",
      "e",
      "c",
      "t",
      "T",
    ]);
  }
  parse(t, r) {
    return Ja(r === "u" ? 4 : r.length, t);
  }
  set(t, r, s) {
    return t.setFullYear(s, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class mT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 120);
    V(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T",
    ]);
  }
  parse(t, r, s) {
    switch (r) {
      case "Q":
      case "QQ":
        return Ve(r.length, t);
      case "Qo":
        return s.ordinalNumber(t, { unit: "quarter" });
      case "QQQ":
        return (
          s.quarter(t, { width: "abbreviated", context: "formatting" }) ||
          s.quarter(t, { width: "narrow", context: "formatting" })
        );
      case "QQQQQ":
        return s.quarter(t, { width: "narrow", context: "formatting" });
      case "QQQQ":
      default:
        return (
          s.quarter(t, { width: "wide", context: "formatting" }) ||
          s.quarter(t, { width: "abbreviated", context: "formatting" }) ||
          s.quarter(t, { width: "narrow", context: "formatting" })
        );
    }
  }
  validate(t, r) {
    return r >= 1 && r <= 4;
  }
  set(t, r, s) {
    return t.setMonth((s - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class gT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 120);
    V(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T",
    ]);
  }
  parse(t, r, s) {
    switch (r) {
      case "q":
      case "qq":
        return Ve(r.length, t);
      case "qo":
        return s.ordinalNumber(t, { unit: "quarter" });
      case "qqq":
        return (
          s.quarter(t, { width: "abbreviated", context: "standalone" }) ||
          s.quarter(t, { width: "narrow", context: "standalone" })
        );
      case "qqqqq":
        return s.quarter(t, { width: "narrow", context: "standalone" });
      case "qqqq":
      default:
        return (
          s.quarter(t, { width: "wide", context: "standalone" }) ||
          s.quarter(t, { width: "abbreviated", context: "standalone" }) ||
          s.quarter(t, { width: "narrow", context: "standalone" })
        );
    }
  }
  validate(t, r) {
    return r >= 1 && r <= 4;
  }
  set(t, r, s) {
    return t.setMonth((s - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class yT extends Se {
  constructor() {
    super(...arguments);
    V(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T",
    ]);
    V(this, "priority", 110);
  }
  parse(t, r, s) {
    const a = (u) => u - 1;
    switch (r) {
      case "M":
        return Ge(We(qe.month, t), a);
      case "MM":
        return Ge(Ve(2, t), a);
      case "Mo":
        return Ge(s.ordinalNumber(t, { unit: "month" }), a);
      case "MMM":
        return (
          s.month(t, { width: "abbreviated", context: "formatting" }) ||
          s.month(t, { width: "narrow", context: "formatting" })
        );
      case "MMMMM":
        return s.month(t, { width: "narrow", context: "formatting" });
      case "MMMM":
      default:
        return (
          s.month(t, { width: "wide", context: "formatting" }) ||
          s.month(t, { width: "abbreviated", context: "formatting" }) ||
          s.month(t, { width: "narrow", context: "formatting" })
        );
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 11;
  }
  set(t, r, s) {
    return t.setMonth(s, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class wT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 110);
    V(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T",
    ]);
  }
  parse(t, r, s) {
    const a = (u) => u - 1;
    switch (r) {
      case "L":
        return Ge(We(qe.month, t), a);
      case "LL":
        return Ge(Ve(2, t), a);
      case "Lo":
        return Ge(s.ordinalNumber(t, { unit: "month" }), a);
      case "LLL":
        return (
          s.month(t, { width: "abbreviated", context: "standalone" }) ||
          s.month(t, { width: "narrow", context: "standalone" })
        );
      case "LLLLL":
        return s.month(t, { width: "narrow", context: "standalone" });
      case "LLLL":
      default:
        return (
          s.month(t, { width: "wide", context: "standalone" }) ||
          s.month(t, { width: "abbreviated", context: "standalone" }) ||
          s.month(t, { width: "narrow", context: "standalone" })
        );
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 11;
  }
  set(t, r, s) {
    return t.setMonth(s, 1), t.setHours(0, 0, 0, 0), t;
  }
}
function vT(n, e, t) {
  const r = de(n, t == null ? void 0 : t.in),
    s = z0(r, t) - e;
  return r.setDate(r.getDate() - s * 7), de(r, t == null ? void 0 : t.in);
}
class xT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 100);
    V(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T",
    ]);
  }
  parse(t, r, s) {
    switch (r) {
      case "w":
        return We(qe.week, t);
      case "wo":
        return s.ordinalNumber(t, { unit: "week" });
      default:
        return Ve(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 1 && r <= 53;
  }
  set(t, r, s, a) {
    return gn(vT(t, s, a), a);
  }
}
function _T(n, e, t) {
  const r = de(n, t == null ? void 0 : t.in),
    s = N0(r, t) - e;
  return r.setDate(r.getDate() - s * 7), r;
}
class kT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 100);
    V(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T",
    ]);
  }
  parse(t, r, s) {
    switch (r) {
      case "I":
        return We(qe.week, t);
      case "Io":
        return s.ordinalNumber(t, { unit: "week" });
      default:
        return Ve(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 1 && r <= 53;
  }
  set(t, r, s) {
    return xi(_T(t, s));
  }
}
const bT = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  ST = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
class ET extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 90);
    V(this, "subPriority", 1);
    V(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T",
    ]);
  }
  parse(t, r, s) {
    switch (r) {
      case "d":
        return We(qe.date, t);
      case "do":
        return s.ordinalNumber(t, { unit: "date" });
      default:
        return Ve(r.length, t);
    }
  }
  validate(t, r) {
    const s = t.getFullYear(),
      a = U0(s),
      u = t.getMonth();
    return a ? r >= 1 && r <= ST[u] : r >= 1 && r <= bT[u];
  }
  set(t, r, s) {
    return t.setDate(s), t.setHours(0, 0, 0, 0), t;
  }
}
class CT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 90);
    V(this, "subpriority", 1);
    V(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T",
    ]);
  }
  parse(t, r, s) {
    switch (r) {
      case "D":
      case "DD":
        return We(qe.dayOfYear, t);
      case "Do":
        return s.ordinalNumber(t, { unit: "date" });
      default:
        return Ve(r.length, t);
    }
  }
  validate(t, r) {
    const s = t.getFullYear();
    return U0(s) ? r >= 1 && r <= 366 : r >= 1 && r <= 365;
  }
  set(t, r, s) {
    return t.setMonth(0, s), t.setHours(0, 0, 0, 0), t;
  }
}
function $d(n, e, t) {
  var y, w, v, x;
  const r = Fr(),
    s =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((w = (y = t == null ? void 0 : t.locale) == null ? void 0 : y.options) ==
      null
        ? void 0
        : w.weekStartsOn) ??
      r.weekStartsOn ??
      ((x = (v = r.locale) == null ? void 0 : v.options) == null
        ? void 0
        : x.weekStartsOn) ??
      0,
    a = de(n, t == null ? void 0 : t.in),
    u = a.getDay(),
    f = ((e % 7) + 7) % 7,
    h = 7 - s,
    m = e < 0 || e > 6 ? e - ((u + h) % 7) : ((f + h) % 7) - ((u + h) % 7);
  return hl(a, m, t);
}
class PT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 90);
    V(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(t, r, s) {
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return (
          s.day(t, { width: "abbreviated", context: "formatting" }) ||
          s.day(t, { width: "short", context: "formatting" }) ||
          s.day(t, { width: "narrow", context: "formatting" })
        );
      case "EEEEE":
        return s.day(t, { width: "narrow", context: "formatting" });
      case "EEEEEE":
        return (
          s.day(t, { width: "short", context: "formatting" }) ||
          s.day(t, { width: "narrow", context: "formatting" })
        );
      case "EEEE":
      default:
        return (
          s.day(t, { width: "wide", context: "formatting" }) ||
          s.day(t, { width: "abbreviated", context: "formatting" }) ||
          s.day(t, { width: "short", context: "formatting" }) ||
          s.day(t, { width: "narrow", context: "formatting" })
        );
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 6;
  }
  set(t, r, s, a) {
    return (t = $d(t, s, a)), t.setHours(0, 0, 0, 0), t;
  }
}
class TT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 90);
    V(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T",
    ]);
  }
  parse(t, r, s, a) {
    const u = (c) => {
      const f = Math.floor((c - 1) / 7) * 7;
      return ((c + a.weekStartsOn + 6) % 7) + f;
    };
    switch (r) {
      case "e":
      case "ee":
        return Ge(Ve(r.length, t), u);
      case "eo":
        return Ge(s.ordinalNumber(t, { unit: "day" }), u);
      case "eee":
        return (
          s.day(t, { width: "abbreviated", context: "formatting" }) ||
          s.day(t, { width: "short", context: "formatting" }) ||
          s.day(t, { width: "narrow", context: "formatting" })
        );
      case "eeeee":
        return s.day(t, { width: "narrow", context: "formatting" });
      case "eeeeee":
        return (
          s.day(t, { width: "short", context: "formatting" }) ||
          s.day(t, { width: "narrow", context: "formatting" })
        );
      case "eeee":
      default:
        return (
          s.day(t, { width: "wide", context: "formatting" }) ||
          s.day(t, { width: "abbreviated", context: "formatting" }) ||
          s.day(t, { width: "short", context: "formatting" }) ||
          s.day(t, { width: "narrow", context: "formatting" })
        );
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 6;
  }
  set(t, r, s, a) {
    return (t = $d(t, s, a)), t.setHours(0, 0, 0, 0), t;
  }
}
class OT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 90);
    V(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T",
    ]);
  }
  parse(t, r, s, a) {
    const u = (c) => {
      const f = Math.floor((c - 1) / 7) * 7;
      return ((c + a.weekStartsOn + 6) % 7) + f;
    };
    switch (r) {
      case "c":
      case "cc":
        return Ge(Ve(r.length, t), u);
      case "co":
        return Ge(s.ordinalNumber(t, { unit: "day" }), u);
      case "ccc":
        return (
          s.day(t, { width: "abbreviated", context: "standalone" }) ||
          s.day(t, { width: "short", context: "standalone" }) ||
          s.day(t, { width: "narrow", context: "standalone" })
        );
      case "ccccc":
        return s.day(t, { width: "narrow", context: "standalone" });
      case "cccccc":
        return (
          s.day(t, { width: "short", context: "standalone" }) ||
          s.day(t, { width: "narrow", context: "standalone" })
        );
      case "cccc":
      default:
        return (
          s.day(t, { width: "wide", context: "standalone" }) ||
          s.day(t, { width: "abbreviated", context: "standalone" }) ||
          s.day(t, { width: "short", context: "standalone" }) ||
          s.day(t, { width: "narrow", context: "standalone" })
        );
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 6;
  }
  set(t, r, s, a) {
    return (t = $d(t, s, a)), t.setHours(0, 0, 0, 0), t;
  }
}
function MT(n, e, t) {
  const r = de(n, t == null ? void 0 : t.in),
    s = iT(r, t),
    a = e - s;
  return hl(r, a, t);
}
class RT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 90);
    V(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T",
    ]);
  }
  parse(t, r, s) {
    const a = (u) => (u === 0 ? 7 : u);
    switch (r) {
      case "i":
      case "ii":
        return Ve(r.length, t);
      case "io":
        return s.ordinalNumber(t, { unit: "day" });
      case "iii":
        return Ge(
          s.day(t, { width: "abbreviated", context: "formatting" }) ||
            s.day(t, { width: "short", context: "formatting" }) ||
            s.day(t, { width: "narrow", context: "formatting" }),
          a
        );
      case "iiiii":
        return Ge(s.day(t, { width: "narrow", context: "formatting" }), a);
      case "iiiiii":
        return Ge(
          s.day(t, { width: "short", context: "formatting" }) ||
            s.day(t, { width: "narrow", context: "formatting" }),
          a
        );
      case "iiii":
      default:
        return Ge(
          s.day(t, { width: "wide", context: "formatting" }) ||
            s.day(t, { width: "abbreviated", context: "formatting" }) ||
            s.day(t, { width: "short", context: "formatting" }) ||
            s.day(t, { width: "narrow", context: "formatting" }),
          a
        );
    }
  }
  validate(t, r) {
    return r >= 1 && r <= 7;
  }
  set(t, r, s) {
    return (t = MT(t, s)), t.setHours(0, 0, 0, 0), t;
  }
}
class DT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 80);
    V(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(t, r, s) {
    switch (r) {
      case "a":
      case "aa":
      case "aaa":
        return (
          s.dayPeriod(t, { width: "abbreviated", context: "formatting" }) ||
          s.dayPeriod(t, { width: "narrow", context: "formatting" })
        );
      case "aaaaa":
        return s.dayPeriod(t, { width: "narrow", context: "formatting" });
      case "aaaa":
      default:
        return (
          s.dayPeriod(t, { width: "wide", context: "formatting" }) ||
          s.dayPeriod(t, { width: "abbreviated", context: "formatting" }) ||
          s.dayPeriod(t, { width: "narrow", context: "formatting" })
        );
    }
  }
  set(t, r, s) {
    return t.setHours(Ud(s), 0, 0, 0), t;
  }
}
class LT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 80);
    V(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(t, r, s) {
    switch (r) {
      case "b":
      case "bb":
      case "bbb":
        return (
          s.dayPeriod(t, { width: "abbreviated", context: "formatting" }) ||
          s.dayPeriod(t, { width: "narrow", context: "formatting" })
        );
      case "bbbbb":
        return s.dayPeriod(t, { width: "narrow", context: "formatting" });
      case "bbbb":
      default:
        return (
          s.dayPeriod(t, { width: "wide", context: "formatting" }) ||
          s.dayPeriod(t, { width: "abbreviated", context: "formatting" }) ||
          s.dayPeriod(t, { width: "narrow", context: "formatting" })
        );
    }
  }
  set(t, r, s) {
    return t.setHours(Ud(s), 0, 0, 0), t;
  }
}
class IT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 80);
    V(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(t, r, s) {
    switch (r) {
      case "B":
      case "BB":
      case "BBB":
        return (
          s.dayPeriod(t, { width: "abbreviated", context: "formatting" }) ||
          s.dayPeriod(t, { width: "narrow", context: "formatting" })
        );
      case "BBBBB":
        return s.dayPeriod(t, { width: "narrow", context: "formatting" });
      case "BBBB":
      default:
        return (
          s.dayPeriod(t, { width: "wide", context: "formatting" }) ||
          s.dayPeriod(t, { width: "abbreviated", context: "formatting" }) ||
          s.dayPeriod(t, { width: "narrow", context: "formatting" })
        );
    }
  }
  set(t, r, s) {
    return t.setHours(Ud(s), 0, 0, 0), t;
  }
}
class NT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 70);
    V(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(t, r, s) {
    switch (r) {
      case "h":
        return We(qe.hour12h, t);
      case "ho":
        return s.ordinalNumber(t, { unit: "hour" });
      default:
        return Ve(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 1 && r <= 12;
  }
  set(t, r, s) {
    const a = t.getHours() >= 12;
    return (
      a && s < 12
        ? t.setHours(s + 12, 0, 0, 0)
        : !a && s === 12
        ? t.setHours(0, 0, 0, 0)
        : t.setHours(s, 0, 0, 0),
      t
    );
  }
}
class zT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 70);
    V(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(t, r, s) {
    switch (r) {
      case "H":
        return We(qe.hour23h, t);
      case "Ho":
        return s.ordinalNumber(t, { unit: "hour" });
      default:
        return Ve(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 23;
  }
  set(t, r, s) {
    return t.setHours(s, 0, 0, 0), t;
  }
}
class FT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 70);
    V(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(t, r, s) {
    switch (r) {
      case "K":
        return We(qe.hour11h, t);
      case "Ko":
        return s.ordinalNumber(t, { unit: "hour" });
      default:
        return Ve(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 11;
  }
  set(t, r, s) {
    return (
      t.getHours() >= 12 && s < 12
        ? t.setHours(s + 12, 0, 0, 0)
        : t.setHours(s, 0, 0, 0),
      t
    );
  }
}
class AT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 70);
    V(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(t, r, s) {
    switch (r) {
      case "k":
        return We(qe.hour24h, t);
      case "ko":
        return s.ordinalNumber(t, { unit: "hour" });
      default:
        return Ve(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 1 && r <= 24;
  }
  set(t, r, s) {
    const a = s <= 24 ? s % 24 : s;
    return t.setHours(a, 0, 0, 0), t;
  }
}
class jT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 60);
    V(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, r, s) {
    switch (r) {
      case "m":
        return We(qe.minute, t);
      case "mo":
        return s.ordinalNumber(t, { unit: "minute" });
      default:
        return Ve(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 59;
  }
  set(t, r, s) {
    return t.setMinutes(s, 0, 0), t;
  }
}
class WT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 50);
    V(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, r, s) {
    switch (r) {
      case "s":
        return We(qe.second, t);
      case "so":
        return s.ordinalNumber(t, { unit: "second" });
      default:
        return Ve(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 59;
  }
  set(t, r, s) {
    return t.setSeconds(s, 0), t;
  }
}
class HT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 30);
    V(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, r) {
    const s = (a) => Math.trunc(a * Math.pow(10, -r.length + 3));
    return Ge(Ve(r.length, t), s);
  }
  set(t, r, s) {
    return t.setMilliseconds(s), t;
  }
}
class BT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 10);
    V(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(t, r) {
    switch (r) {
      case "X":
        return fn(dn.basicOptionalMinutes, t);
      case "XX":
        return fn(dn.basic, t);
      case "XXXX":
        return fn(dn.basicOptionalSeconds, t);
      case "XXXXX":
        return fn(dn.extendedOptionalSeconds, t);
      case "XXX":
      default:
        return fn(dn.extended, t);
    }
  }
  set(t, r, s) {
    return r.timestampIsSet ? t : $e(t, t.getTime() - Za(t) - s);
  }
}
class UT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 10);
    V(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(t, r) {
    switch (r) {
      case "x":
        return fn(dn.basicOptionalMinutes, t);
      case "xx":
        return fn(dn.basic, t);
      case "xxxx":
        return fn(dn.basicOptionalSeconds, t);
      case "xxxxx":
        return fn(dn.extendedOptionalSeconds, t);
      case "xxx":
      default:
        return fn(dn.extended, t);
    }
  }
  set(t, r, s) {
    return r.timestampIsSet ? t : $e(t, t.getTime() - Za(t) - s);
  }
}
class $T extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 40);
    V(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return H0(t);
  }
  set(t, r, s) {
    return [$e(t, s * 1e3), { timestampIsSet: !0 }];
  }
}
class VT extends Se {
  constructor() {
    super(...arguments);
    V(this, "priority", 20);
    V(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return H0(t);
  }
  set(t, r, s) {
    return [$e(t, s), { timestampIsSet: !0 }];
  }
}
const YT = {
    G: new cT(),
    y: new dT(),
    Y: new fT(),
    R: new hT(),
    u: new pT(),
    Q: new mT(),
    q: new gT(),
    M: new yT(),
    L: new wT(),
    w: new xT(),
    I: new kT(),
    d: new ET(),
    D: new CT(),
    E: new PT(),
    e: new TT(),
    c: new OT(),
    i: new RT(),
    a: new DT(),
    b: new LT(),
    B: new IT(),
    h: new NT(),
    H: new zT(),
    K: new FT(),
    k: new AT(),
    m: new jT(),
    s: new WT(),
    S: new HT(),
    X: new BT(),
    x: new UT(),
    t: new $T(),
    T: new VT(),
  },
  KT = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  XT = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  qT = /^'([^]*?)'?$/,
  GT = /''/g,
  QT = /\S/,
  ZT = /[a-zA-Z]/;
function JT(n, e, t, r) {
  var k, S, C, O, R, A, W, H;
  const s = () => $e((r == null ? void 0 : r.in) || t, NaN),
    a = rT(),
    u = (r == null ? void 0 : r.locale) ?? a.locale ?? I0,
    c =
      (r == null ? void 0 : r.firstWeekContainsDate) ??
      ((S = (k = r == null ? void 0 : r.locale) == null ? void 0 : k.options) ==
      null
        ? void 0
        : S.firstWeekContainsDate) ??
      a.firstWeekContainsDate ??
      ((O = (C = a.locale) == null ? void 0 : C.options) == null
        ? void 0
        : O.firstWeekContainsDate) ??
      1,
    f =
      (r == null ? void 0 : r.weekStartsOn) ??
      ((A = (R = r == null ? void 0 : r.locale) == null ? void 0 : R.options) ==
      null
        ? void 0
        : A.weekStartsOn) ??
      a.weekStartsOn ??
      ((H = (W = a.locale) == null ? void 0 : W.options) == null
        ? void 0
        : H.weekStartsOn) ??
      0;
  if (!e) return n ? s() : de(t, r == null ? void 0 : r.in);
  const h = { firstWeekContainsDate: c, weekStartsOn: f, locale: u },
    m = [new uT(r == null ? void 0 : r.in, t)],
    y = e
      .match(XT)
      .map((N) => {
        const B = N[0];
        if (B in id) {
          const G = id[B];
          return G(N, u.formatLong);
        }
        return N;
      })
      .join("")
      .match(KT),
    w = [];
  for (let N of y) {
    !(r != null && r.useAdditionalWeekYearTokens) && j0(N) && sd(N, e, n),
      !(r != null && r.useAdditionalDayOfYearTokens) && A0(N) && sd(N, e, n);
    const B = N[0],
      G = YT[B];
    if (G) {
      const { incompatibleTokens: ne } = G;
      if (Array.isArray(ne)) {
        const he = w.find((Ee) => ne.includes(Ee.token) || Ee.token === B);
        if (he)
          throw new RangeError(
            `The format string mustn't contain \`${he.fullToken}\` and \`${N}\` at the same time`
          );
      } else if (G.incompatibleTokens === "*" && w.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${N}\` and any other token at the same time`
        );
      w.push({ token: B, fullToken: N });
      const re = G.run(n, N, u.match, h);
      if (!re) return s();
      m.push(re.setter), (n = re.rest);
    } else {
      if (B.match(ZT))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            B +
            "`"
        );
      if (
        (N === "''" ? (N = "'") : B === "'" && (N = e2(N)), n.indexOf(N) === 0)
      )
        n = n.slice(N.length);
      else return s();
    }
  }
  if (n.length > 0 && QT.test(n)) return s();
  const v = m
    .map((N) => N.priority)
    .sort((N, B) => B - N)
    .filter((N, B, G) => G.indexOf(N) === B)
    .map((N) =>
      m
        .filter((B) => B.priority === N)
        .sort((B, G) => G.subPriority - B.subPriority)
    )
    .map((N) => N[0]);
  let x = de(t, r == null ? void 0 : r.in);
  if (isNaN(+x)) return s();
  const b = {};
  for (const N of v) {
    if (!N.validate(x, h)) return s();
    const B = N.set(x, b, h);
    Array.isArray(B) ? ((x = B[0]), Object.assign(b, B[1])) : (x = B);
  }
  return x;
}
function e2(n) {
  return n.match(qT)[1].replace(GT, "'");
}
function t2(n, e) {
  const t = de(n, e == null ? void 0 : e.in);
  return t.setMinutes(0, 0, 0), t;
}
function n2(n, e) {
  const t = de(n, e == null ? void 0 : e.in);
  return t.setSeconds(0, 0), t;
}
function r2(n, e) {
  const t = de(n, e == null ? void 0 : e.in);
  return t.setMilliseconds(0), t;
}
function i2(n, e) {
  const t = () => $e(e == null ? void 0 : e.in, NaN),
    r = (e == null ? void 0 : e.additionalDigits) ?? 2,
    s = l2(n);
  let a;
  if (s.date) {
    const h = u2(s.date, r);
    a = c2(h.restDateString, h.year);
  }
  if (!a || isNaN(+a)) return t();
  const u = +a;
  let c = 0,
    f;
  if (s.time && ((c = d2(s.time)), isNaN(c))) return t();
  if (s.timezone) {
    if (((f = f2(s.timezone)), isNaN(f))) return t();
  } else {
    const h = new Date(u + c),
      m = de(0, e == null ? void 0 : e.in);
    return (
      m.setFullYear(h.getUTCFullYear(), h.getUTCMonth(), h.getUTCDate()),
      m.setHours(
        h.getUTCHours(),
        h.getUTCMinutes(),
        h.getUTCSeconds(),
        h.getUTCMilliseconds()
      ),
      m
    );
  }
  return de(u + c + f, e == null ? void 0 : e.in);
}
const Ma = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/,
  },
  s2 = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
  o2 =
    /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
  a2 = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function l2(n) {
  const e = {},
    t = n.split(Ma.dateTimeDelimiter);
  let r;
  if (t.length > 2) return e;
  if (
    (/:/.test(t[0])
      ? (r = t[0])
      : ((e.date = t[0]),
        (r = t[1]),
        Ma.timeZoneDelimiter.test(e.date) &&
          ((e.date = n.split(Ma.timeZoneDelimiter)[0]),
          (r = n.substr(e.date.length, n.length)))),
    r)
  ) {
    const s = Ma.timezone.exec(r);
    s ? ((e.time = r.replace(s[1], "")), (e.timezone = s[1])) : (e.time = r);
  }
  return e;
}
function u2(n, e) {
  const t = new RegExp(
      "^(?:(\\d{4}|[+-]\\d{" +
        (4 + e) +
        "})|(\\d{2}|[+-]\\d{" +
        (2 + e) +
        "})$)"
    ),
    r = n.match(t);
  if (!r) return { year: NaN, restDateString: "" };
  const s = r[1] ? parseInt(r[1]) : null,
    a = r[2] ? parseInt(r[2]) : null;
  return {
    year: a === null ? s : a * 100,
    restDateString: n.slice((r[1] || r[2]).length),
  };
}
function c2(n, e) {
  if (e === null) return new Date(NaN);
  const t = n.match(s2);
  if (!t) return new Date(NaN);
  const r = !!t[4],
    s = bs(t[1]),
    a = bs(t[2]) - 1,
    u = bs(t[3]),
    c = bs(t[4]),
    f = bs(t[5]) - 1;
  if (r) return y2(e, c, f) ? h2(e, c, f) : new Date(NaN);
  {
    const h = new Date(0);
    return !m2(e, a, u) || !g2(e, s)
      ? new Date(NaN)
      : (h.setUTCFullYear(e, a, Math.max(s, u)), h);
  }
}
function bs(n) {
  return n ? parseInt(n) : 1;
}
function d2(n) {
  const e = n.match(o2);
  if (!e) return NaN;
  const t = Lc(e[1]),
    r = Lc(e[2]),
    s = Lc(e[3]);
  return w2(t, r, s) ? t * eo + r * Js + s * 1e3 : NaN;
}
function Lc(n) {
  return (n && parseFloat(n.replace(",", "."))) || 0;
}
function f2(n) {
  if (n === "Z") return 0;
  const e = n.match(a2);
  if (!e) return 0;
  const t = e[1] === "+" ? -1 : 1,
    r = parseInt(e[2]),
    s = (e[3] && parseInt(e[3])) || 0;
  return v2(r, s) ? t * (r * eo + s * Js) : NaN;
}
function h2(n, e, t) {
  const r = new Date(0);
  r.setUTCFullYear(n, 0, 4);
  const s = r.getUTCDay() || 7,
    a = (e - 1) * 7 + t + 1 - s;
  return r.setUTCDate(r.getUTCDate() + a), r;
}
const p2 = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function $0(n) {
  return n % 400 === 0 || (n % 4 === 0 && n % 100 !== 0);
}
function m2(n, e, t) {
  return e >= 0 && e <= 11 && t >= 1 && t <= (p2[e] || ($0(n) ? 29 : 28));
}
function g2(n, e) {
  return e >= 1 && e <= ($0(n) ? 366 : 365);
}
function y2(n, e, t) {
  return e >= 1 && e <= 53 && t >= 0 && t <= 6;
}
function w2(n, e, t) {
  return n === 24
    ? e === 0 && t === 0
    : t >= 0 && t < 60 && e >= 0 && e < 60 && n >= 0 && n < 25;
}
function v2(n, e) {
  return e >= 0 && e <= 59;
}
/*!
 * chartjs-adapter-date-fns v3.0.0
 * https://www.chartjs.org
 * (c) 2022 chartjs-adapter-date-fns Contributors
 * Released under the MIT license
 */ const x2 = {
  datetime: "MMM d, yyyy, h:mm:ss aaaa",
  millisecond: "h:mm:ss.SSS aaaa",
  second: "h:mm:ss aaaa",
  minute: "h:mm aaaa",
  hour: "ha",
  day: "MMM d",
  week: "PP",
  month: "MMM yyyy",
  quarter: "qqq - yyyy",
  year: "yyyy",
};
a0._date.override({
  _id: "date-fns",
  formats: function () {
    return x2;
  },
  parse: function (n, e) {
    if (n === null || typeof n > "u") return null;
    const t = typeof n;
    return (
      t === "number" || n instanceof Date
        ? (n = de(n))
        : t === "string" &&
          (typeof e == "string"
            ? (n = JT(n, e, new Date(), this.options))
            : (n = i2(n, this.options))),
      T0(n) ? n.getTime() : null
    );
  },
  format: function (n, e) {
    return tT(n, e, this.options);
  },
  add: function (n, e, t) {
    switch (t) {
      case "millisecond":
        return Wd(n, e);
      case "second":
        return $C(n, e);
      case "minute":
        return BC(n, e);
      case "hour":
        return jC(n, e);
      case "day":
        return hl(n, e);
      case "week":
        return VC(n, e);
      case "month":
        return jd(n, e);
      case "quarter":
        return UC(n, e);
      case "year":
        return YC(n, e);
      default:
        return n;
    }
  },
  diff: function (n, e, t) {
    switch (t) {
      case "millisecond":
        return Hd(n, e);
      case "second":
        return eP(n, e);
      case "minute":
        return QC(n, e);
      case "hour":
        return GC(n, e);
      case "day":
        return O0(n, e);
      case "week":
        return tP(n, e);
      case "month":
        return D0(n, e);
      case "quarter":
        return JC(n, e);
      case "year":
        return nP(n, e);
      default:
        return 0;
    }
  },
  startOf: function (n, e, t) {
    switch (e) {
      case "second":
        return r2(n);
      case "minute":
        return n2(n);
      case "hour":
        return t2(n);
      case "day":
        return rd(n);
      case "week":
        return gn(n);
      case "isoWeek":
        return gn(n, { weekStartsOn: +t });
      case "month":
        return iP(n);
      case "quarter":
        return rP(n);
      case "year":
        return L0(n);
      default:
        return n;
    }
  },
  endOf: function (n, e) {
    switch (e) {
      case "second":
        return cP(n);
      case "minute":
        return lP(n);
      case "hour":
        return oP(n);
      case "day":
        return M0(n);
      case "week":
        return aP(n);
      case "month":
        return R0(n);
      case "quarter":
        return uP(n);
      case "year":
        return sP(n);
      default:
        return n;
    }
  },
});
dl.register(td, nd, Ha, Ps, pC, kC, fC, Vs);
function _2({ language: n, logData: e }) {
  const r = { cmn: [1, 2, 3, 4], yue: [1, 2, 3, 4, 5, 6] }[n],
    s = [
      "",
      "rgb(81, 185, 255)",
      "rgb(179, 0, 0)",
      "rgb(213, 123, 255)",
      "rgb(226, 210, 69)",
      "rgb(45, 204, 117)",
      "rgb(90, 49, 236)",
    ],
    a = [];
  r.forEach((h) => {
    const m = [];
    e.forEach((y) => m.push((y.total_correct[h] / y.total_answered[h]) * 100)),
      a.push({ label: h, data: m, borderColor: s[h] });
  }),
    console.log(a);
  const u = {
      responsive: !0,
      plugins: {
        legend: { position: "bottom" },
        title: { display: !0, text: n },
      },
      layout: { padding: { right: 20 } },
      scales: {
        x: {
          type: "time",
          time: { unit: "day", tooltipFormat: "ll" },
          title: { display: !0, text: "Date" },
        },
      },
    },
    c = [];
  e.forEach((h) => {
    c.push(h.date);
  });
  const f = { labels: c, datasets: a };
  return z.jsx(zC, {
    options: u,
    data: f,
    style: { height: "100%", width: "100%" },
  });
}
const Ug = ({ exp: n }) => {
  let e = 1;
  n != 0 && (e = Math.ceil(n / 100));
  const r = ((n - (e - 1) * 100) / 100) * 100;
  return z.jsxs("div", {
    style: { marginBottom: "20px" },
    children: [
      z.jsxs("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
        },
        children: [
          z.jsxs("span", { children: ["Level ", e] }),
          z.jsxs("span", { children: [Math.floor(r), "%"] }),
        ],
      }),
      z.jsx("div", {
        style: {
          height: "20px",
          width: "100%",
          backgroundColor: "#e0e0e0",
          borderRadius: "5px",
          overflow: "hidden",
        },
        children: z.jsx("div", {
          style: {
            height: "100%",
            width: `${r}%`,
            backgroundColor: "rgb(139, 0, 0)",
          },
        }),
      }),
    ],
  });
};
function k2({ language: n, setLanguage: e, testState: t, setTestState: r }) {
  const { user: s, isAuthenticated: a } = gi(),
    [u, c] = D.useState([]),
    [f, h] = D.useState([]),
    [m, y] = D.useState(30),
    [w, v] = D.useState(!1),
    [x, b] = D.useState(!1),
    { logout: k } = gi();
  D.useEffect(() => {
    a &&
      (async () => {
        try {
          const O = await Ne({
            method: "GET",
            url: `https://tonesifu.onrender.com/users/${s.sub}`,
          });
          h(O.data), b(!0);
        } catch (O) {
          console.error("Error getting exp data", O);
        }
      })();
  }, [a]),
    D.useEffect(() => {
      a &&
        (async () => {
          try {
            const O = await Ne({
              method: "GET",
              url: `https://tonesifu.onrender.com/log/${n}/${s.sub}`,
              params: { timePeriod: m },
            });
            c(O.data), v(!0);
          } catch (O) {
            console.error("Error getting log data", O);
          }
        })();
    }, [a, n, m]);
  const S = (C) => {
    y(C.target.value);
  };
  return !a || !w || !x
    ? z.jsxs(z.Fragment, {
        children: [
          z.jsx($c, {}),
          z.jsx("div", {
            className: "profile-container",
            children: z.jsx("h1", { children: "loading..." }),
          }),
        ],
      })
    : z.jsxs(z.Fragment, {
        children: [
          z.jsx($c, {
            language: n,
            setLanguage: e,
            testState: t,
            setTestState: r,
          }),
          z.jsxs("div", {
            className: "profile-container",
            children: [
              z.jsxs("div", {
                className: "profile-information-container",
                children: [
                  z.jsx("h1", { children: "Name" }),
                  z.jsx("p", { children: s.name }),
                  z.jsx(z.Fragment, {
                    children: z.jsxs("p", {
                      children: ["Total Exp: ", f[0].exp],
                    }),
                  }),
                ],
              }),
              z.jsxs("div", {
                className: "graph-container",
                children: [
                  z.jsx("div", {
                    className: "graph-button-container",
                    children: z.jsx(_2, { language: n, logData: u }),
                  }),
                  n == "cmn" &&
                    z.jsxs("h1", { children: ["Exp: ", f[0].exp_cmn] }),
                  n == "cmn" && z.jsx(Ug, { exp: f[0].exp_cmn }),
                  n == "yue" &&
                    z.jsxs("h1", { children: ["Exp: ", f[0].exp_yue] }),
                  n == "yue" && z.jsx(Ug, { exp: f[0].exp_yue }),
                ],
              }),
              z.jsx("label", { children: "Time Frame:" }),
              z.jsxs("select", {
                value: m,
                onChange: S,
                children: [
                  z.jsx("option", { value: 7, children: "Week" }),
                  z.jsx("option", { value: 30, children: "Month" }),
                  z.jsx("option", { value: 365, children: " Year" }),
                ],
              }),
              z.jsx("button", {
                onClick: () => k({ returnTo: window.location.origin }),
                children: "Logout",
              }),
            ],
          }),
        ],
      });
}
function b2() {
  const { user: n, isAuthenticated: e } = gi();
  return (
    (async () => {
      if ((console.log("CREATING USER"), !e)) return z.jsx(z.Fragment, {});
      try {
        return (
          await Ne({
            method: "POST",
            url: `https://tonesifu.onrender.com/users/${n.sub}`,
          })
        ).data;
      } catch (r) {
        console.error("Error creating user:", r);
      }
    })(),
    z.jsx(z.Fragment, {})
  );
}
function S2() {
  const [n, e] = D.useState("cmn"),
    [t, r] = D.useState(0);
  return z.jsxs(z.Fragment, {
    children: [
      z.jsx(b2, {}),
      z.jsxs(k_, {
        children: [
          z.jsx(Da, { path: "/", element: z.jsx(n1, {}) }),
          z.jsx(Da, {
            path: "/training",
            element: z.jsx(Nk, {
              language: n,
              setLanguage: e,
              testState: t,
              setTestState: r,
            }),
          }),
          z.jsx(Da, {
            path: "/profile",
            element: z.jsx(k2, {
              language: n,
              setLanguage: e,
              testState: t,
              setTestState: r,
            }),
          }),
        ],
      }),
    ],
  });
}
Qv.createRoot(document.getElementById("root")).render(
  z.jsx(D.StrictMode, {
    children: z.jsx(Mx, {
      domain: "dev-2bsrdkyx62y56035.uk.auth0.com",
      clientId: "Yr7YpCYMMeiQEOqitovxdw7RwCbUiS8Y",
      authorizationParams: { redirect_uri: window.location.origin },
      children: z.jsx(Y_, { children: z.jsx(S2, {}) }),
    }),
  })
);
