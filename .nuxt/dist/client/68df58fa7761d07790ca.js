(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1: function(t, e, n) {
      "use strict";
      n.d(e, "i", function() {
        return m;
      }),
        n.d(e, "j", function() {
          return v;
        }),
        n.d(e, "a", function() {
          return y;
        }),
        n.d(e, "o", function() {
          return x;
        }),
        n.d(e, "e", function() {
          return w;
        }),
        n.d(e, "f", function() {
          return _;
        }),
        n.d(e, "c", function() {
          return O;
        }),
        n.d(e, "n", function() {
          return k;
        }),
        n.d(e, "h", function() {
          return j;
        }),
        n.d(e, "p", function() {
          return C;
        }),
        n.d(e, "k", function() {
          return R;
        }),
        n.d(e, "m", function() {
          return P;
        }),
        n.d(e, "d", function() {
          return T;
        }),
        n.d(e, "b", function() {
          return A;
        }),
        n.d(e, "g", function() {
          return S;
        }),
        n.d(e, "l", function() {
          return I;
        });
      n(75), n(28);
      var r = n(72),
        o = (n(86), n(258), n(259), n(49)),
        c = (n(215), n(216), n(231), n(232), n(55), n(26), n(3)),
        l = (n(109), n(22), n(21), n(51), n(53), n(23)),
        f = n(0);
      function d(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function h(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? d(source, !0).forEach(function(e) {
                Object(l.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : d(source).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      function m(t) {
        f.default.config.errorHandler && f.default.config.errorHandler(t);
      }
      function v(t) {
        return t.then(function(t) {
          return t.default || t;
        });
      }
      function y(t, e) {
        if (e || !t.options.__hasNuxtData) {
          var n =
            t.options._originDataFn ||
            t.options.data ||
            function() {
              return {};
            };
          (t.options._originDataFn = n),
            (t.options.data = function() {
              var data = n.call(this);
              return (
                this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]),
                h({}, data, {}, e)
              );
            }),
            (t.options.__hasNuxtData = !0),
            t._Ctor &&
              t._Ctor.options &&
              (t._Ctor.options.data = t.options.data);
        }
      }
      function x(t) {
        return t.options && t._Ctor === t
          ? t
          : (t.options
              ? ((t._Ctor = t), (t.extendOptions = t.options))
              : ((t = f.default.extend(t))._Ctor = t),
            !t.options.name &&
              t.options.__file &&
              (t.options.name = t.options.__file),
            t);
      }
      function w(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function(t, n) {
            return Object.keys(t.components).map(function(r) {
              return e && e.push(n), t.components[r];
            });
          })
        );
      }
      function _(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function(t, n) {
            return Object.keys(t.instances).map(function(r) {
              return e && e.push(n), t.instances[r];
            });
          })
        );
      }
      function O(t, e) {
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function(t, n) {
            return Object.keys(t.components).reduce(function(r, o) {
              return (
                t.components[o]
                  ? r.push(e(t.components[o], t.instances[o], t, o, n))
                  : delete t.components[o],
                r
              );
            }, []);
          })
        );
      }
      function k(t, e) {
        return Promise.all(
          O(
            t,
            (function() {
              var t = Object(c.a)(
                regeneratorRuntime.mark(function t(n, r, o, c) {
                  return regeneratorRuntime.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ("function" != typeof n || n.options) {
                            t.next = 4;
                            break;
                          }
                          return (t.next = 3), n();
                        case 3:
                          n = t.sent;
                        case 4:
                          return (
                            (o.components[c] = n = x(n)),
                            t.abrupt(
                              "return",
                              "function" == typeof e ? e(n, r, o, c) : n
                            )
                          );
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function(e, n, r, o) {
                return t.apply(this, arguments);
              };
            })()
          )
        );
      }
      function j(t) {
        return $.apply(this, arguments);
      }
      function $() {
        return ($ = Object(c.a)(
          regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (e) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    return (t.next = 4), k(e);
                  case 4:
                    return t.abrupt(
                      "return",
                      h({}, e, {
                        meta: w(e).map(function(t, n) {
                          return h(
                            {},
                            t.options.meta,
                            {},
                            (e.matched[n] || {}).meta
                          );
                        })
                      })
                    );
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function C(t, e) {
        return E.apply(this, arguments);
      }
      function E() {
        return (E = Object(c.a)(
          regeneratorRuntime.mark(function t(e, n) {
            var c, l, f, d;
            return regeneratorRuntime.wrap(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      e.context ||
                        ((e.context = {
                          isStatic: !0,
                          isDev: !1,
                          isHMR: !1,
                          app: e,
                          store: e.store,
                          payload: n.payload,
                          error: n.error,
                          base: "/",
                          env: { COOKIE_PATH: "/", BUILD_TYPE: "development" }
                        }),
                        n.req && (e.context.req = n.req),
                        n.res && (e.context.res = n.res),
                        n.ssrContext && (e.context.ssrContext = n.ssrContext),
                        (e.context.redirect = function(t, path, n) {
                          if (t) {
                            e.context._redirected = !0;
                            var r = Object(o.a)(path);
                            if (
                              ("number" == typeof t ||
                                ("undefined" !== r && "object" !== r) ||
                                ((n = path || {}),
                                (path = t),
                                (r = Object(o.a)(path)),
                                (t = 302)),
                              "object" === r &&
                                (path = e.router.resolve(path).route.fullPath),
                              !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                            )
                              throw ((path = M(path, n)),
                              window.location.replace(path),
                              new Error("ERR_REDIRECT"));
                            e.context.next({ path: path, query: n, status: t });
                          }
                        }),
                        (e.context.nuxtState = window.__NUXT__)),
                      (t.next = 3),
                      Promise.all([j(n.route), j(n.from)])
                    );
                  case 3:
                    (c = t.sent),
                      (l = Object(r.a)(c, 2)),
                      (f = l[0]),
                      (d = l[1]),
                      n.route && (e.context.route = f),
                      n.from && (e.context.from = d),
                      (e.context.next = n.next),
                      (e.context._redirected = !1),
                      (e.context._errored = !1),
                      (e.context.isHMR = Boolean(n.isHMR)),
                      (e.context.params = e.context.route.params || {}),
                      (e.context.query = e.context.route.query || {});
                  case 15:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function R(t, e) {
        return !t.length || e._redirected || e._errored
          ? Promise.resolve()
          : P(t[0], e).then(function() {
              return R(t.slice(1), e);
            });
      }
      function P(t, e) {
        var n;
        return (
          ((n =
            2 === t.length
              ? new Promise(function(n) {
                  t(e, function(t, data) {
                    t && e.error(t), n((data = data || {}));
                  });
                })
              : t(e)) &&
            (n instanceof Promise || "function" == typeof n.then)) ||
            (n = Promise.resolve(n)),
          n
        );
      }
      function T(base, t) {
        var path = decodeURI(window.location.pathname);
        return "hash" === t
          ? window.location.hash.replace(/^#\//, "")
          : (base &&
              0 === path.indexOf(base) &&
              (path = path.slice(base.length)),
            (path || "/") + window.location.search + window.location.hash);
      }
      function A(t, e) {
        return (function(t) {
          for (var e = new Array(t.length), i = 0; i < t.length; i++)
            "object" === Object(o.a)(t[i]) &&
              (e[i] = new RegExp("^(?:" + t[i].pattern + ")$"));
          return function(n, r) {
            for (
              var path = "",
                data = n || {},
                o = (r || {}).pretty ? N : encodeURIComponent,
                c = 0;
              c < t.length;
              c++
            ) {
              var l = t[c];
              if ("string" != typeof l) {
                var f = data[l.name || "pathMatch"],
                  d = void 0;
                if (null == f) {
                  if (l.optional) {
                    l.partial && (path += l.prefix);
                    continue;
                  }
                  throw new TypeError(
                    'Expected "' + l.name + '" to be defined'
                  );
                }
                if (Array.isArray(f)) {
                  if (!l.repeat)
                    throw new TypeError(
                      'Expected "' +
                        l.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(f) +
                        "`"
                    );
                  if (0 === f.length) {
                    if (l.optional) continue;
                    throw new TypeError(
                      'Expected "' + l.name + '" to not be empty'
                    );
                  }
                  for (var h = 0; h < f.length; h++) {
                    if (((d = o(f[h])), !e[c].test(d)))
                      throw new TypeError(
                        'Expected all "' +
                          l.name +
                          '" to match "' +
                          l.pattern +
                          '", but received `' +
                          JSON.stringify(d) +
                          "`"
                      );
                    path += (0 === h ? l.prefix : l.delimiter) + d;
                  }
                } else {
                  if (
                    ((d = l.asterisk
                      ? encodeURI(f).replace(/[?#]/g, function(t) {
                          return (
                            "%" +
                            t
                              .charCodeAt(0)
                              .toString(16)
                              .toUpperCase()
                          );
                        })
                      : o(f)),
                    !e[c].test(d))
                  )
                    throw new TypeError(
                      'Expected "' +
                        l.name +
                        '" to match "' +
                        l.pattern +
                        '", but received "' +
                        d +
                        '"'
                    );
                  path += l.prefix + d;
                }
              } else path += l;
            }
            return path;
          };
        })(
          (function(t, e) {
            var n,
              r = [],
              o = 0,
              c = 0,
              path = "",
              l = (e && e.delimiter) || "/";
            for (; null != (n = D.exec(t)); ) {
              var f = n[0],
                d = n[1],
                h = n.index;
              if (((path += t.slice(c, h)), (c = h + f.length), d))
                path += d[1];
              else {
                var m = t[c],
                  v = n[2],
                  y = n[3],
                  x = n[4],
                  w = n[5],
                  _ = n[6],
                  O = n[7];
                path && (r.push(path), (path = ""));
                var k = null != v && null != m && m !== v,
                  j = "+" === _ || "*" === _,
                  $ = "?" === _ || "*" === _,
                  C = n[2] || l,
                  pattern = x || w;
                r.push({
                  name: y || o++,
                  prefix: v || "",
                  delimiter: C,
                  optional: $,
                  repeat: j,
                  partial: k,
                  asterisk: Boolean(O),
                  pattern: pattern ? B(pattern) : O ? ".*" : "[^" + L(C) + "]+?"
                });
              }
            }
            c < t.length && (path += t.substr(c));
            path && r.push(path);
            return r;
          })(t, e)
        );
      }
      function S(t, e) {
        var n = {},
          r = h({}, t, {}, e);
        for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
        return n;
      }
      function I(t) {
        var e;
        if (t.message || "string" == typeof t) e = t.message || t;
        else
          try {
            e = JSON.stringify(t, null, 2);
          } catch (n) {
            e = "[".concat(t.constructor.name, "]");
          }
        return h({}, t, {
          message: e,
          statusCode:
            t.statusCode || t.status || (t.response && t.response.status) || 500
        });
      }
      (window.onNuxtReadyCbs = []),
        (window.onNuxtReady = function(t) {
          window.onNuxtReadyCbs.push(t);
        });
      var D = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
        ].join("|"),
        "g"
      );
      function N(t) {
        return encodeURI(t).replace(/[/?#]/g, function(t) {
          return (
            "%" +
            t
              .charCodeAt(0)
              .toString(16)
              .toUpperCase()
          );
        });
      }
      function L(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function B(t) {
        return t.replace(/([=!:$/()])/g, "\\$1");
      }
      function M(t, e) {
        var n,
          o = t.indexOf("://");
        -1 !== o
          ? ((n = t.substring(0, o)), (t = t.substring(o + 3)))
          : t.startsWith("//") && (t = t.substring(2));
        var c,
          l = t.split("/"),
          f = (n ? n + "://" : "//") + l.shift(),
          path = l.filter(Boolean).join("/");
        if (2 === (l = path.split("#")).length) {
          var d = l,
            h = Object(r.a)(d, 2);
          (path = h[0]), (c = h[1]);
        }
        return (
          (f += path ? "/" + path : ""),
          e &&
            "{}" !== JSON.stringify(e) &&
            (f +=
              (2 === t.split("?").length ? "&" : "?") +
              (function(t) {
                return Object.keys(t)
                  .sort()
                  .map(function(e) {
                    var n = t[e];
                    return null == n
                      ? ""
                      : Array.isArray(n)
                      ? n
                          .slice()
                          .map(function(t) {
                            return [e, "=", t].join("");
                          })
                          .join("&")
                      : e + "=" + n;
                  })
                  .filter(Boolean)
                  .join("&");
              })(e)),
          (f += c ? "#" + c : "")
        );
      }
    },
    100: function(t, e, n) {},
    101: function(t, e, n) {},
    102: function(t, e, n) {},
    103: function(t, e, n) {},
    105: function(t, e, n) {
      "use strict";
      n(21), n(113), n(28), n(22), n(116), n(157);
      var r = n(0),
        o =
          window.requestIdleCallback ||
          function(t) {
            var e = Date.now();
            return setTimeout(function() {
              t({
                didTimeout: !1,
                timeRemaining: function() {
                  return Math.max(0, 50 - (Date.now() - e));
                }
              });
            }, 1);
          },
        c =
          window.IntersectionObserver &&
          new window.IntersectionObserver(function(t) {
            t.forEach(function(t) {
              var e = t.intersectionRatio,
                link = t.target;
              e <= 0 || link.__prefetch();
            });
          });
      e.a = {
        name: "NuxtLink",
        extends: r.default.component("RouterLink"),
        props: { noPrefetch: { type: Boolean, default: !1 } },
        mounted: function() {
          this.noPrefetch || o(this.observe, { timeout: 2e3 });
        },
        beforeDestroy: function() {
          this.__observed &&
            (c.unobserve(this.$el), delete this.$el.__prefetch);
        },
        methods: {
          observe: function() {
            c &&
              this.shouldPrefetch() &&
              ((this.$el.__prefetch = this.prefetch.bind(this)),
              c.observe(this.$el),
              (this.__observed = !0));
          },
          shouldPrefetch: function() {
            return this.getPrefetchComponents().length > 0;
          },
          canPrefetch: function() {
            var t = navigator.connection;
            return !(
              this.$nuxt.isOffline ||
              (t && ((t.effectiveType || "").includes("2g") || t.saveData))
            );
          },
          getPrefetchComponents: function() {
            return this.$router
              .resolve(this.to, this.$route, this.append)
              .resolved.matched.map(function(t) {
                return t.components.default;
              })
              .filter(function(t) {
                return "function" == typeof t && !t.options && !t.__prefetched;
              });
          },
          prefetch: function() {
            if (this.canPrefetch()) {
              c.unobserve(this.$el);
              var t = this.getPrefetchComponents(),
                e = !0,
                n = !1,
                r = void 0;
              try {
                for (
                  var o, l = t[Symbol.iterator]();
                  !(e = (o = l.next()).done);
                  e = !0
                ) {
                  var f = o.value,
                    d = f();
                  d instanceof Promise && d.catch(function() {}),
                    (f.__prefetched = !0);
                }
              } catch (t) {
                (n = !0), (r = t);
              } finally {
                try {
                  e || null == l.return || l.return();
                } finally {
                  if (n) throw r;
                }
              }
            }
          }
        }
      };
    },
    106: function(t, e, n) {
      "use strict";
      var r = {};
      n.r(r),
        n.d(r, "login", function() {
          return d;
        });
      var o = {};
      n.r(o),
        n.d(o, "categoriesTree", function() {
          return h;
        }),
        n.d(o, "createActivity", function() {
          return m;
        }),
        n.d(o, "addOne", function() {
          return v;
        }),
        n.d(o, "findAll", function() {
          return y;
        }),
        n.d(o, "activityJoinList", function() {
          return x;
        }),
        n.d(o, "findOneByCondition", function() {
          return w;
        }),
        n.d(o, "updateByCondition", function() {
          return _;
        }),
        n.d(o, "getFunnerData", function() {
          return O;
        }),
        n.d(o, "syncActivity", function() {
          return k;
        }),
        n.d(o, "getGoodsAnalyseData", function() {
          return j;
        }),
        n.d(o, "getFunner", function() {
          return $;
        });
      var c = n(164),
        l = n(69),
        f = "http://39.100.141.76:3000/mock/116/security".concat(l.a),
        d = "".concat(f, "/users/login"),
        h = "http://39.100.141.76:3000:3000/mock/116/categories/tree",
        m = "http://39.100.141.76:3000:3000/mock/116/activity",
        v = "".concat("/poc", "/api/v1/common/addOne"),
        y = "".concat("/poc", "/api/v1/common/findAllByCondition"),
        x = function(t) {
          return "http://39.100.141.76:3000/mock/116/activity/join/".concat(t);
        },
        w = "".concat("/poc", "/api/v1/common/findOneByCondition"),
        _ = "".concat("/poc", "/api/v1/common/updateByCondition"),
        O = "".concat("/poc", "/api/v1/report/getActivityAnalyseData"),
        k = "".concat("/poc", "/api/v1/report/addActivity"),
        j = "".concat("/poc", "/api/v1/report/getGoodAnalyseData"),
        $ = "http://39.105.18.216:8083/api/v1/dashboard/";
      n.d(e, "a", function() {
        return c;
      }),
        n.d(e, "b", function() {
          return r;
        }),
        n.d(e, "c", function() {
          return o;
        });
    },
    138: function(t, e, n) {
      "use strict";
      var r = {};
      (r.auth = n(253)),
        (r.auth = r.auth.default || r.auth),
        (r.meta = n(254)),
        (r.meta = r.meta.default || r.meta),
        (e.a = r);
    },
    164: function(t, e, n) {
      "use strict";
      n.r(e),
        function(t) {
          n.d(e, "config", function() {
            return o;
          }),
            n.d(e, "menuResource", function() {
              return c;
            }),
            n.d(e, "userDetail", function() {
              return l;
            });
          var r = "http://39.100.141.76:3000/mock/116/security" + n(69).a,
            o =
              "prod" === t.env.buildEnv
                ? "//bucket-showyu.oss-cn-beijing.aliyuncs.com/console/config.json"
                : "".concat(r, "/configs"),
            c = function(e) {
              return (
                console.log(e),
                "prod" === t.env.buildEnv
                  ? "//bucket-showyu.oss-cn-beijing.aliyuncs.com/console/menuResources.json"
                  : "".concat(r, "/users/").concat(e, "/menuResources")
              );
            },
            l = function(e) {
              return "prod" === t.env.buildEnv
                ? "//bucket-showyu.oss-cn-beijing.aliyuncs.com/console/userDetail.json"
                : "".concat(r, "/users/").concat(e);
            };
        }.call(this, n(87));
    },
    234: function(t, e, n) {
      t.exports = n(235);
    },
    235: function(t, e, n) {
      "use strict";
      n.r(e),
        function(t) {
          n(109), n(113), n(28);
          var e = n(49),
            r = (n(26), n(225), n(3)),
            o =
              (n(116),
              n(157),
              n(22),
              n(21),
              n(51),
              n(53),
              n(160),
              n(245),
              n(250),
              n(252),
              n(0)),
            c = n(185),
            l = n(138),
            f = n(1),
            d = n(40),
            h = n(105);
          o.default.component(h.a.name, h.a),
            o.default.component("NLink", h.a),
            t.fetch || (t.fetch = c.a);
          var m,
            v,
            y = [],
            x = window.__NUXT__ || {};
          Object.assign(o.default.config, { silent: !0, performance: !1 });
          var w = o.default.config.errorHandler || console.error;
          function _(t, e, n) {
            var r = function(component) {
              var t =
                (function(component, t) {
                  if (!component || !component.options || !component.options[t])
                    return {};
                  var option = component.options[t];
                  if ("function" == typeof option) {
                    for (
                      var e = arguments.length,
                        n = new Array(e > 2 ? e - 2 : 0),
                        r = 2;
                      r < e;
                      r++
                    )
                      n[r - 2] = arguments[r];
                    return option.apply(void 0, n);
                  }
                  return option;
                })(component, "transition", e, n) || {};
              return "string" == typeof t ? { name: t } : t;
            };
            return t.map(function(t) {
              var e = Object.assign({}, r(t));
              if (n && n.matched.length && n.matched[0].components.default) {
                var o = r(n.matched[0].components.default);
                Object.keys(o)
                  .filter(function(t) {
                    return o[t] && t.toLowerCase().includes("leave");
                  })
                  .forEach(function(t) {
                    e[t] = o[t];
                  });
              }
              return e;
            });
          }
          function O(t, e, n) {
            return k.apply(this, arguments);
          }
          function k() {
            return (k = Object(r.a)(
              regeneratorRuntime.mark(function t(e, n, r) {
                var o,
                  c,
                  l,
                  d,
                  h = this;
                return regeneratorRuntime.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (this._pathChanged =
                              Boolean(m.nuxt.err) || n.path !== e.path),
                            (this._queryChanged =
                              JSON.stringify(e.query) !==
                              JSON.stringify(n.query)),
                            (this._diffQuery = this._queryChanged
                              ? Object(f.g)(e.query, n.query)
                              : []),
                            this._pathChanged &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start(),
                            (t.prev = 4),
                            (t.next = 7),
                            Object(f.n)(e, function(t, e) {
                              return { Component: t, instance: e };
                            })
                          );
                        case 7:
                          (o = t.sent),
                            !this._pathChanged &&
                              this._queryChanged &&
                              o.some(function(t) {
                                var r = t.Component,
                                  o = t.instance,
                                  c = r.options.watchQuery;
                                return (
                                  !0 === c ||
                                  (Array.isArray(c)
                                    ? c.some(function(t) {
                                        return h._diffQuery[t];
                                      })
                                    : "function" == typeof c &&
                                      c.apply(o, [e.query, n.query]))
                                );
                              }) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start(),
                            r(),
                            (t.next = 23);
                          break;
                        case 12:
                          if (
                            ((t.prev = 12),
                            (t.t0 = t.catch(4)),
                            (c = t.t0 || {}),
                            (l =
                              c.statusCode ||
                              c.status ||
                              (c.response && c.response.status) ||
                              500),
                            (d = c.message || ""),
                            !/^Loading( CSS)? chunk (\d)+ failed\./.test(d))
                          ) {
                            t.next = 20;
                            break;
                          }
                          return window.location.reload(!0), t.abrupt("return");
                        case 20:
                          this.error({ statusCode: l, message: d }),
                            this.$nuxt.$emit("routeChanged", e, n, c),
                            r();
                        case 23:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[4, 12]]
                );
              })
            )).apply(this, arguments);
          }
          function j(t, e) {
            return x.serverRendered && e && Object(f.a)(t, e), (t._Ctor = t), t;
          }
          function $(t) {
            var path = Object(f.d)(t.options.base, t.options.mode);
            return Object(f.c)(
              t.match(path),
              (function() {
                var t = Object(r.a)(
                  regeneratorRuntime.mark(function t(e, n, r, o, c) {
                    var l;
                    return regeneratorRuntime.wrap(function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ("function" != typeof e || e.options) {
                              t.next = 4;
                              break;
                            }
                            return (t.next = 3), e();
                          case 3:
                            e = t.sent;
                          case 4:
                            return (
                              (l = j(
                                Object(f.o)(e),
                                x.data ? x.data[c] : null
                              )),
                              (r.components[o] = l),
                              t.abrupt("return", l)
                            );
                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function(e, n, r, o, c) {
                  return t.apply(this, arguments);
                };
              })()
            );
          }
          function C(t, e, n) {
            var r = this,
              o = ["meta"],
              c = !1;
            if (
              (void 0 !== n &&
                ((o = []),
                (n = Object(f.o)(n)).options.middleware &&
                  (o = o.concat(n.options.middleware)),
                t.forEach(function(t) {
                  t.options.middleware && (o = o.concat(t.options.middleware));
                })),
              (o = o.map(function(t) {
                return "function" == typeof t
                  ? t
                  : ("function" != typeof l.a[t] &&
                      ((c = !0),
                      r.error({
                        statusCode: 500,
                        message: "Unknown middleware " + t
                      })),
                    l.a[t]);
              })),
              !c)
            )
              return Object(f.k)(o, e);
          }
          function E(t, e, n) {
            return R.apply(this, arguments);
          }
          function R() {
            return (R = Object(r.a)(
              regeneratorRuntime.mark(function t(e, n, r) {
                var o,
                  c,
                  l,
                  h,
                  v,
                  x,
                  w,
                  O,
                  k,
                  j,
                  $,
                  E,
                  R,
                  P,
                  T,
                  A,
                  S = this;
                return regeneratorRuntime.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            !1 !== this._pathChanged ||
                            !1 !== this._queryChanged
                          ) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt("return", r());
                        case 2:
                          return (
                            e === n
                              ? (y = [])
                              : ((o = []),
                                (y = Object(f.e)(n, o).map(function(t, i) {
                                  return Object(
                                    f.b
                                  )(n.matched[o[i]].path)(n.params);
                                }))),
                            (c = !1),
                            (l = function(path) {
                              n.path === path.path &&
                                S.$loading.finish &&
                                S.$loading.finish(),
                                n.path !== path.path &&
                                  S.$loading.pause &&
                                  S.$loading.pause(),
                                c || ((c = !0), r(path));
                            }),
                            (t.next = 7),
                            Object(f.p)(m, {
                              route: e,
                              from: n,
                              next: l.bind(this)
                            })
                          );
                        case 7:
                          if (
                            ((this._dateLastError = m.nuxt.dateErr),
                            (this._hadError = Boolean(m.nuxt.err)),
                            (h = []),
                            (v = Object(f.e)(e, h)).length)
                          ) {
                            t.next = 25;
                            break;
                          }
                          return (t.next = 14), C.call(this, v, m.context);
                        case 14:
                          if (!c) {
                            t.next = 16;
                            break;
                          }
                          return t.abrupt("return");
                        case 16:
                          return (
                            (t.next = 18),
                            this.loadLayout(
                              "function" == typeof d.a.layout
                                ? d.a.layout(m.context)
                                : d.a.layout
                            )
                          );
                        case 18:
                          return (
                            (x = t.sent),
                            (t.next = 21),
                            C.call(this, v, m.context, x)
                          );
                        case 21:
                          if (!c) {
                            t.next = 23;
                            break;
                          }
                          return t.abrupt("return");
                        case 23:
                          return (
                            m.context.error({
                              statusCode: 404,
                              message: "This page could not be found"
                            }),
                            t.abrupt("return", r())
                          );
                        case 25:
                          return (
                            v.forEach(function(t) {
                              t._Ctor &&
                                t._Ctor.options &&
                                ((t.options.asyncData =
                                  t._Ctor.options.asyncData),
                                (t.options.fetch = t._Ctor.options.fetch));
                            }),
                            this.setTransitions(_(v, e, n)),
                            (t.prev = 27),
                            (t.next = 30),
                            C.call(this, v, m.context)
                          );
                        case 30:
                          if (!c) {
                            t.next = 32;
                            break;
                          }
                          return t.abrupt("return");
                        case 32:
                          if (!m.context._errored) {
                            t.next = 34;
                            break;
                          }
                          return t.abrupt("return", r());
                        case 34:
                          return (
                            "function" == typeof (w = v[0].options.layout) &&
                              (w = w(m.context)),
                            (t.next = 38),
                            this.loadLayout(w)
                          );
                        case 38:
                          return (
                            (w = t.sent),
                            (t.next = 41),
                            C.call(this, v, m.context, w)
                          );
                        case 41:
                          if (!c) {
                            t.next = 43;
                            break;
                          }
                          return t.abrupt("return");
                        case 43:
                          if (!m.context._errored) {
                            t.next = 45;
                            break;
                          }
                          return t.abrupt("return", r());
                        case 45:
                          (O = !0),
                            (t.prev = 46),
                            (k = !0),
                            (j = !1),
                            ($ = void 0),
                            (t.prev = 50),
                            (E = v[Symbol.iterator]());
                        case 52:
                          if ((k = (R = E.next()).done)) {
                            t.next = 64;
                            break;
                          }
                          if (
                            "function" == typeof (P = R.value).options.validate
                          ) {
                            t.next = 56;
                            break;
                          }
                          return t.abrupt("continue", 61);
                        case 56:
                          return (t.next = 58), P.options.validate(m.context);
                        case 58:
                          if ((O = t.sent)) {
                            t.next = 61;
                            break;
                          }
                          return t.abrupt("break", 64);
                        case 61:
                          (k = !0), (t.next = 52);
                          break;
                        case 64:
                          t.next = 70;
                          break;
                        case 66:
                          (t.prev = 66),
                            (t.t0 = t.catch(50)),
                            (j = !0),
                            ($ = t.t0);
                        case 70:
                          (t.prev = 70),
                            (t.prev = 71),
                            k || null == E.return || E.return();
                        case 73:
                          if (((t.prev = 73), !j)) {
                            t.next = 76;
                            break;
                          }
                          throw $;
                        case 76:
                          return t.finish(73);
                        case 77:
                          return t.finish(70);
                        case 78:
                          t.next = 84;
                          break;
                        case 80:
                          return (
                            (t.prev = 80),
                            (t.t1 = t.catch(46)),
                            this.error({
                              statusCode: t.t1.statusCode || "500",
                              message: t.t1.message
                            }),
                            t.abrupt("return", r())
                          );
                        case 84:
                          if (O) {
                            t.next = 87;
                            break;
                          }
                          return (
                            this.error({
                              statusCode: 404,
                              message: "This page could not be found"
                            }),
                            t.abrupt("return", r())
                          );
                        case 87:
                          return (
                            (t.next = 89),
                            Promise.all(
                              v.map(function(t, i) {
                                if (
                                  ((t._path = Object(f.b)(e.matched[h[i]].path)(
                                    e.params
                                  )),
                                  (t._dataRefresh = !1),
                                  (S._pathChanged && S._queryChanged) ||
                                    t._path !== y[i])
                                )
                                  t._dataRefresh = !0;
                                else if (!S._pathChanged && S._queryChanged) {
                                  var n = t.options.watchQuery;
                                  !0 === n
                                    ? (t._dataRefresh = !0)
                                    : Array.isArray(n) &&
                                      (t._dataRefresh = n.some(function(t) {
                                        return S._diffQuery[t];
                                      }));
                                }
                                if (
                                  !S._hadError &&
                                  S._isMounted &&
                                  !t._dataRefresh
                                )
                                  return Promise.resolve();
                                var r = [],
                                  o =
                                    t.options.asyncData &&
                                    "function" == typeof t.options.asyncData,
                                  c = Boolean(t.options.fetch),
                                  l = o && c ? 30 : 45;
                                if (o) {
                                  var d = Object(f.m)(
                                    t.options.asyncData,
                                    m.context
                                  ).then(function(e) {
                                    Object(f.a)(t, e),
                                      S.$loading.increase &&
                                        S.$loading.increase(l);
                                  });
                                  r.push(d);
                                }
                                if (
                                  ((S.$loading.manual =
                                    !1 === t.options.loading),
                                  c)
                                ) {
                                  var p = t.options.fetch(m.context);
                                  (p &&
                                    (p instanceof Promise ||
                                      "function" == typeof p.then)) ||
                                    (p = Promise.resolve(p)),
                                    p.then(function(t) {
                                      S.$loading.increase &&
                                        S.$loading.increase(l);
                                    }),
                                    r.push(p);
                                }
                                return Promise.all(r);
                              })
                            )
                          );
                        case 89:
                          c ||
                            (this.$loading.finish &&
                              !this.$loading.manual &&
                              this.$loading.finish(),
                            r()),
                            (t.next = 106);
                          break;
                        case 92:
                          if (
                            ((t.prev = 92),
                            (t.t2 = t.catch(27)),
                            "ERR_REDIRECT" !== (T = t.t2 || {}).message)
                          ) {
                            t.next = 97;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            this.$nuxt.$emit("routeChanged", e, n, T)
                          );
                        case 97:
                          return (
                            (y = []),
                            Object(f.i)(T),
                            "function" == typeof (A = d.a.layout) &&
                              (A = A(m.context)),
                            (t.next = 103),
                            this.loadLayout(A)
                          );
                        case 103:
                          this.error(T),
                            this.$nuxt.$emit("routeChanged", e, n, T),
                            r();
                        case 106:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[27, 92], [46, 80], [50, 66, 70, 78], [71, , 73, 77]]
                );
              })
            )).apply(this, arguments);
          }
          function P(t, n) {
            Object(f.c)(t, function(t, n, r, c) {
              return (
                "object" !== Object(e.a)(t) ||
                  t.options ||
                  (((t = o.default.extend(t))._Ctor = t),
                  (r.components[c] = t)),
                t
              );
            });
          }
          function T(t) {
            this._hadError &&
              this._dateLastError === this.$options.nuxt.dateErr &&
              this.error();
            var e = this.$options.nuxt.err
              ? d.a.layout
              : t.matched[0].components.default.options.layout;
            "function" == typeof e && (e = e(m.context)), this.setLayout(e);
          }
          function A(t, e) {
            var n = this;
            if (!1 !== this._pathChanged || !1 !== this._queryChanged) {
              var r = [],
                c = Object(f.f)(t, r),
                l = Object(f.e)(t, r);
              o.default.nextTick(function() {
                c.forEach(function(t, i) {
                  if (
                    t &&
                    !t._isDestroyed &&
                    t.constructor._dataRefresh &&
                    l[i] === t.constructor &&
                    !0 !== t.$vnode.data.keepAlive &&
                    "function" == typeof t.constructor.options.data
                  ) {
                    var e = t.constructor.options.data.call(t);
                    for (var n in e) o.default.set(t.$data, n, e[n]);
                    window.$nuxt.$nextTick(function() {
                      window.$nuxt.$emit("triggerScroll");
                    });
                  }
                }),
                  T.call(n, t);
              });
            }
          }
          function S(t) {
            window.onNuxtReadyCbs.forEach(function(e) {
              "function" == typeof e && e(t);
            }),
              "function" == typeof window._onNuxtLoaded &&
                window._onNuxtLoaded(t),
              v.afterEach(function(e, n) {
                o.default.nextTick(function() {
                  return t.$nuxt.$emit("routeChanged", e, n);
                });
              });
          }
          function I() {
            return (I = Object(r.a)(
              regeneratorRuntime.mark(function t(e) {
                var n, r, c, l;
                return regeneratorRuntime.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (m = e.app),
                          (v = e.router),
                          e.store,
                          (t.next = 5),
                          Promise.all($(v))
                        );
                      case 5:
                        if (
                          ((n = t.sent),
                          (r = new o.default(m)),
                          (c = function() {
                            r.$mount("#__nuxt"),
                              v.afterEach(P),
                              v.afterEach(A.bind(r)),
                              o.default.nextTick(function() {
                                S(r);
                              });
                          }),
                          (r.setTransitions = r.$options.nuxt.setTransitions.bind(
                            r
                          )),
                          n.length &&
                            (r.setTransitions(_(n, v.currentRoute)),
                            (y = v.currentRoute.matched.map(function(t) {
                              return Object(f.b)(t.path)(v.currentRoute.params);
                            }))),
                          (r.$loading = {}),
                          x.error && r.error(x.error),
                          v.beforeEach(O.bind(r)),
                          v.beforeEach(E.bind(r)),
                          !x.serverRendered)
                        ) {
                          t.next = 17;
                          break;
                        }
                        return c(), t.abrupt("return");
                      case 17:
                        (l = function() {
                          P(v.currentRoute, v.currentRoute),
                            T.call(r, v.currentRoute),
                            c();
                        }),
                          E.call(r, v.currentRoute, v.currentRoute, function(
                            path
                          ) {
                            if (path) {
                              var t = v.afterEach(function(e, n) {
                                t(), l();
                              });
                              v.push(path, void 0, function(t) {
                                t && w(t);
                              });
                            } else l();
                          });
                      case 19:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
          }
          Object(d.b)()
            .then(function(t) {
              return I.apply(this, arguments);
            })
            .catch(w);
        }.call(this, n(17));
    },
    253: function(t, e, n) {
      "use strict";
      n.r(e);
      n(53), n(86), n(26);
      var r = n(3);
      function o() {
        return (o = Object(r.a)(
          regeneratorRuntime.mark(function t(e) {
            var n, r, o, c, l, p;
            return regeneratorRuntime.wrap(
              function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      t.next = 2;
                      break;
                    case 2:
                      (n = e.store),
                        e.route,
                        (r = e.redirect),
                        (o = e.req),
                        (c = function(t, e) {
                          var n = ("; " + t).split("; " + e + "=");
                          if (2 == n.length)
                            return n
                              .pop()
                              .split(";")
                              .shift();
                        }),
                        (t.next = 20);
                      break;
                    case 8:
                      return (
                        n.commit("update", {
                          token: c(o.headers.cookie, "token"),
                          userId: l
                        }),
                        (t.prev = 9),
                        (t.next = 12),
                        n.dispatch("fetchUserAndMenuList", { userId: l })
                      );
                    case 12:
                      return (p = t.sent), t.abrupt("return", p);
                    case 16:
                      (t.prev = 16),
                        (t.t0 = t.catch(9)),
                        console.log("auth error: ", t.t0),
                        r("/login");
                    case 20:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[9, 16]]
            );
          })
        )).apply(this, arguments);
      }
      e.default = function(t) {
        return o.apply(this, arguments);
      };
    },
    254: function(t, e, n) {
      "use strict";
      n.r(e),
        function(t) {
          n(255), n(26);
          var r = n(3);
          function o() {
            return (o = Object(r.a)(
              regeneratorRuntime.mark(function e(n) {
                var r, o, meta, head, c, link, i;
                return regeneratorRuntime.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((r = n.store), (o = n.app), r.state.meta.appName)
                          ) {
                            e.next = 24;
                            break;
                          }
                          return (
                            (e.prev = 2),
                            (e.next = 5),
                            r.dispatch("fetchMetaInfo", {
                              projectNo: t.env.PROJECT_NO
                            })
                          );
                        case 5:
                          e.next = 10;
                          break;
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(2)),
                            console.log("meta error: ", e.t0);
                        case 10:
                          (meta = r.state.meta),
                            (head = o.head),
                            (c = head.link),
                            (link = {}),
                            (i = 0);
                        case 15:
                          if (!(i < c.length)) {
                            e.next = 22;
                            break;
                          }
                          if ("icon" != c[i].rel) {
                            e.next = 19;
                            break;
                          }
                          return (link = c[i]), e.abrupt("break", 22);
                        case 19:
                          i++, (e.next = 15);
                          break;
                        case 22:
                          (head.title = meta.htmlTitle),
                            (link.href = meta.favicon);
                        case 24:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 7]]
                );
              })
            )).apply(this, arguments);
          }
          e.default = function(t) {
            return o.apply(this, arguments);
          };
        }.call(this, n(87));
    },
    266: function(t, e, n) {
      "use strict";
      var r = n(97);
      n.n(r).a;
    },
    267: function(t, e, n) {
      "use strict";
      var r = n(98);
      n.n(r).a;
    },
    268: function(t, e, n) {},
    269: function(t, e, n) {
      "use strict";
      var r = n(99);
      n.n(r).a;
    },
    270: function(t, e, n) {
      "use strict";
      var r = n(100);
      n.n(r).a;
    },
    271: function(t, e, n) {
      "use strict";
      var r = n(101);
      n.n(r).a;
    },
    272: function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "state", function() {
          return w;
        }),
        n.d(e, "mutations", function() {
          return _;
        }),
        n.d(e, "actions", function() {
          return O;
        });
      n(75), n(28);
      var r = n(23),
        o = (n(26), n(3)),
        c = (n(22), n(21), n(51), n(37)),
        l = n.n(c),
        f = n(38),
        d = n(106);
      function h(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function m(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? h(source, !0).forEach(function(e) {
                Object(r.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : h(source).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var v,
        y,
        x,
        w = function() {
          return {
            userId: "",
            token: "",
            tenantId: "afiona",
            meta: {},
            user: {
              userId: "16e577069ac44399b73d45e2acbf3b66",
              id: "16e577069ac44399b73d45e2acbf3b66",
              tenantId: "620e80bfd862423d9299620038f94a45",
              createdBy: null,
              createdAt: 946656e6,
              updatedBy: "admin",
              updatedAt: 1548300528e3,
              dr: 0,
              accountId: "798b9812d3f4408e83b9399d09d1758c",
              password: null,
              token: null,
              username: "admin",
              usernumber: null,
              nickname: "管理员",
              email: "admin@deepexi.com",
              avatar:
                "//deepexi-moby.oss-cn-shenzhen.aliyuncs.com/me的副本-1545201407351.jpg",
              gender: null,
              phone: "13555555555",
              status: "1",
              type: "1",
              ext1: null,
              ext2: null,
              ext3: null,
              ext4: null,
              ext5: null,
              extJson: null,
              roles: []
            },
            menuList: [
              {
                id: 91942,
                parentId: null,
                name: "活动",
                nameEn: "activity",
                url: "/activity/list",
                remark: null,
                icon:
                  "https://deepexi.oss-cn-shenzhen.aliyuncs.com/deepexi-services/%E5%B7%A6%E4%BE%A7%E8%8F%9C%E5%8D%95/computer.svg",
                sort: 152,
                tag: "system"
              },
              {
                id: 91942,
                parentId: null,
                name: "数据",
                nameEn: "charts",
                url: "/charts",
                remark: null,
                icon:
                  "https://deepexi.oss-cn-shenzhen.aliyuncs.com/deepexi-services/%E5%B7%A6%E4%BE%A7%E8%8F%9C%E5%8D%95/computer.svg",
                sort: 152,
                tag: "system"
              }
            ],
            permission: {}
          };
        },
        _ = {
          login: function(t, e) {
            f.a.forEach(function(n) {
              (t[n] = e[n]), l.a.set(n, e[n], { path: "/" });
            });
          },
          logout: function(t) {
            f.a.forEach(function(e) {
              "tenantId" !== e && (t[e] = ""), l.a.remove(e, { path: "/" });
            });
          },
          update: function(t, e) {
            Object.keys(e).forEach(function(n) {
              t[n] = e[n];
            });
          }
        },
        O = {
          login:
            ((x = Object(o.a)(
              regeneratorRuntime.mark(function t(e, n) {
                var r, o, c, l;
                return regeneratorRuntime.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (r = e.commit),
                            (o = e.state),
                            (c = e.dispatch),
                            (t.next = 3),
                            this.$axios.$post(
                              d.b.login,
                              m({}, n, { channel: "showyu", code: o.tenantId })
                            )
                          );
                        case 3:
                          (l = t.sent),
                            r("login", l.payload),
                            c("fetchUserAndMenuList", {
                              userId: l.payload.userId
                            });
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            )),
            function(t, e) {
              return x.apply(this, arguments);
            }),
          fetchUserAndMenuList:
            ((y = Object(o.a)(
              regeneratorRuntime.mark(function t(e, n) {
                var r, o;
                return regeneratorRuntime.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (r = e.commit),
                          n.userId,
                          r("update", {
                            user: {
                              userId: "16e577069ac44399b73d45e2acbf3b66",
                              id: "16e577069ac44399b73d45e2acbf3b66",
                              tenantId: "620e80bfd862423d9299620038f94a45",
                              createdBy: null,
                              createdAt: 946656e6,
                              updatedBy: "mifei",
                              updatedAt: 1548300528e3,
                              dr: 0,
                              accountId: "798b9812d3f4408e83b9399d09d1758c",
                              password: null,
                              token: null,
                              username: "miffy",
                              usernumber: null,
                              nickname: "米肥",
                              email: "mi_ffy@yeah.net",
                              avatar:
                                "//deepexi-moby.oss-cn-shenzhen.aliyuncs.com/me的副本-1545201407351.jpg",
                              gender: null,
                              phone: "15521198999",
                              status: "1",
                              type: "1",
                              ext1: null,
                              ext2: null,
                              ext3: null,
                              ext4: null,
                              ext5: null,
                              extJson: null,
                              roles: []
                            }
                          }),
                          r("update", {
                            menuList: (o = {
                              payload: {
                                permission: {},
                                menu: [
                                  {
                                    id: 91939,
                                    parentId: null,
                                    name: "会员管理",
                                    nameEn: "member-list",
                                    url: "/member/list",
                                    remark: null,
                                    icon:
                                      "https://deepexi.oss-cn-shenzhen.aliyuncs.com/deepexi-services/%E5%B7%A6%E4%BE%A7%E8%8F%9C%E5%8D%95/computer.svg",
                                    sort: 149,
                                    tag: "system"
                                  },
                                  {
                                    id: 91940,
                                    parentId: null,
                                    name: "订单管理",
                                    nameEn: "order-list",
                                    url: "/order/list",
                                    remark: null,
                                    icon:
                                      "https://deepexi.oss-cn-shenzhen.aliyuncs.com/deepexi-services/%E5%B7%A6%E4%BE%A7%E8%8F%9C%E5%8D%95/computer.svg",
                                    sort: 150,
                                    tag: "system"
                                  },
                                  {
                                    id: 91942,
                                    parentId: null,
                                    name: "周年庆",
                                    nameEn: "anniversary",
                                    url: "/anniversary/activity",
                                    remark: null,
                                    icon:
                                      "https://deepexi.oss-cn-shenzhen.aliyuncs.com/deepexi-services/%E5%B7%A6%E4%BE%A7%E8%8F%9C%E5%8D%95/computer.svg",
                                    sort: 152,
                                    tag: "system"
                                  },
                                  {
                                    id: 91943,
                                    parentId: null,
                                    name: "资讯管理",
                                    nameEn: "article",
                                    url: "",
                                    remark: null,
                                    icon: "",
                                    sort: 153,
                                    tag: "system",
                                    children: [
                                      {
                                        id: 919431,
                                        parentId: 91943,
                                        name: "文章列表",
                                        nameEn: "articleList",
                                        url: "/article/list",
                                        remark: null,
                                        icon: "",
                                        sort: 0,
                                        tag: "system",
                                        children: null,
                                        operators: ["GET"],
                                        projectNo: null
                                      },
                                      {
                                        id: 919432,
                                        parentId: 91943,
                                        name: "分类管理",
                                        nameEn: "articleCategory",
                                        url: "/article/category",
                                        remark: null,
                                        icon: "",
                                        sort: 0,
                                        tag: "system",
                                        children: null,
                                        operators: ["GET"],
                                        projectNo: null
                                      },
                                      {
                                        id: 919433,
                                        parentId: 91944,
                                        name: "奖励规则",
                                        nameEn: "articleRewardList",
                                        url: "/article/reward/list",
                                        remark: null,
                                        icon: "",
                                        sort: 0,
                                        tag: "system",
                                        children: null,
                                        operators: ["GET"],
                                        projectNo: null
                                      }
                                    ],
                                    operators: ["GET"]
                                  },
                                  {
                                    id: 91946,
                                    parentId: null,
                                    name: "数据中心",
                                    nameEn: "data-center",
                                    url: "/dataCenter/chart",
                                    remark: null,
                                    icon:
                                      "https://bucket-showyu.oss-cn-beijing.aliyuncs.com/console/icon/data.svg",
                                    sort: 150,
                                    tag: "system"
                                  }
                                ]
                              },
                              request_id: "706f8cb5-98c0-4d62-8f63-ad8a14a97ecc"
                            }).payload.menu,
                            permission: o.payload.permission
                          });
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )),
            function(t, e) {
              return y.apply(this, arguments);
            }),
          fetchMetaInfo:
            ((v = Object(o.a)(
              regeneratorRuntime.mark(function t(e) {
                var n, r, meta;
                return regeneratorRuntime.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (n = e.commit),
                            (t.next = 3),
                            this.$axios.$get(d.a.config)
                          );
                        case 3:
                          (r = t.sent),
                            (meta = {}),
                            r.payload.forEach(function(t) {
                              meta[t.key] = t.value;
                            }),
                            n("update", { meta: meta });
                        case 7:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            )),
            function(t) {
              return v.apply(this, arguments);
            })
        };
    },
    377: function(t, e, n) {
      "use strict";
      var r = n(102);
      n.n(r).a;
    },
    378: function(t, e, n) {
      "use strict";
      var r = n(103);
      n.n(r).a;
    },
    38: function(t, e, n) {
      "use strict";
      e.a = ["token", "userId", "tenantId"];
    },
    40: function(t, e, n) {
      "use strict";
      n(26), n(75), n(28), n(22), n(21), n(51);
      var r = n(3),
        o = n(23),
        c = (n(53), n(0)),
        l = n(186),
        f = n(139),
        d = n.n(f),
        h = n(50),
        m = n.n(h),
        v = n(140),
        y = n(1);
      "scrollRestoration" in window.history &&
        ((window.history.scrollRestoration = "manual"),
        window.addEventListener("beforeunload", function() {
          window.history.scrollRestoration = "auto";
        }),
        window.addEventListener("load", function() {
          window.history.scrollRestoration = "manual";
        }));
      c.default.use(v.a);
      var x = {
        mode: "hash",
        base: decodeURI("/"),
        linkActiveClass: "nuxt-link-active",
        linkExactActiveClass: "nuxt-link-exact-active",
        scrollBehavior: function(t, e, n) {
          var r = !1,
            o = Object(y.e)(t);
          o.length < 2 &&
          o.every(function(t) {
            return !1 !== t.options.scrollToTop;
          })
            ? (r = { x: 0, y: 0 })
            : o.some(function(t) {
                return t.options.scrollToTop;
              }) && (r = { x: 0, y: 0 }),
            n && (r = n);
          var c = window.$nuxt;
          return (
            t.path === e.path &&
              t.hash !== e.hash &&
              c.$nextTick(function() {
                return c.$emit("triggerScroll");
              }),
            new Promise(function(e) {
              c.$once("triggerScroll", function() {
                if (t.hash) {
                  var n = t.hash;
                  void 0 !== window.CSS &&
                    void 0 !== window.CSS.escape &&
                    (n = "#" + window.CSS.escape(n.substr(1)));
                  try {
                    document.querySelector(n) && (r = { selector: n });
                  } catch (t) {
                    console.warn(
                      "Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape)."
                    );
                  }
                }
                e(r);
              });
            })
          );
        },
        routes: [
          {
            path: "/charts",
            component: function() {
              return Object(y.j)(
                Promise.all([n.e(10), n.e(3)]).then(n.bind(null, 980))
              );
            },
            name: "charts"
          },
          {
            path: "/login",
            component: function() {
              return Object(y.j)(n.e(5).then(n.bind(null, 982)));
            },
            name: "login"
          },
          {
            path: "/activity/list",
            component: function() {
              return Object(y.j)(
                Promise.all([n.e(9), n.e(2)]).then(n.bind(null, 981))
              );
            },
            name: "activity-list"
          },
          {
            path: "/activity/:type?",
            component: function() {
              return Object(y.j)(
                Promise.all([n.e(8), n.e(1)]).then(n.bind(null, 979))
              );
            },
            name: "activity-type"
          },
          {
            path: "/",
            component: function() {
              return Object(y.j)(n.e(4).then(n.bind(null, 983)));
            },
            name: "index"
          }
        ],
        fallback: !1
      };
      var w,
        _ = {
          name: "NuxtChild",
          functional: !0,
          props: {
            nuxtChildKey: { type: String, default: "" },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 }
          },
          render: function(t, e) {
            var n = e.parent,
              data = e.data,
              r = e.props;
            data.nuxtChild = !0;
            for (
              var o = n,
                c = n.$nuxt.nuxt.transitions,
                l = n.$nuxt.nuxt.defaultTransition,
                f = 0;
              n;

            )
              n.$vnode && n.$vnode.data.nuxtChild && f++, (n = n.$parent);
            data.nuxtChildDepth = f;
            var d = c[f] || l,
              h = {};
            O.forEach(function(t) {
              void 0 !== d[t] && (h[t] = d[t]);
            });
            var m = {};
            k.forEach(function(t) {
              "function" == typeof d[t] && (m[t] = d[t].bind(o));
            });
            var v = m.beforeEnter;
            if (
              ((m.beforeEnter = function(t) {
                if (
                  (window.$nuxt.$nextTick(function() {
                    window.$nuxt.$emit("triggerScroll");
                  }),
                  v)
                )
                  return v.call(o, t);
              }),
              !1 === d.css)
            ) {
              var y = m.leave;
              (!y || y.length < 2) &&
                (m.leave = function(t, e) {
                  y && y.call(o, t), o.$nextTick(e);
                });
            }
            var x = t("routerView", data);
            return (
              r.keepAlive &&
                (x = t("keep-alive", { props: r.keepAliveProps }, [x])),
              t("transition", { props: h, on: m }, [x])
            );
          }
        },
        O = [
          "name",
          "mode",
          "appear",
          "css",
          "type",
          "duration",
          "enterClass",
          "leaveClass",
          "appearClass",
          "enterActiveClass",
          "enterActiveClass",
          "leaveActiveClass",
          "appearActiveClass",
          "enterToClass",
          "leaveToClass",
          "appearToClass"
        ],
        k = [
          "beforeEnter",
          "enter",
          "afterEnter",
          "enterCancelled",
          "beforeLeave",
          "leave",
          "afterLeave",
          "leaveCancelled",
          "beforeAppear",
          "appear",
          "afterAppear",
          "appearCancelled"
        ],
        j = {
          name: "NuxtError",
          props: { error: { type: Object, default: null } },
          head: function() {
            return {
              title: this.message,
              meta: [
                {
                  name: "viewport",
                  content:
                    "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
                }
              ]
            };
          },
          computed: {
            statusCode: function() {
              return (this.error && this.error.statusCode) || 500;
            },
            message: function() {
              return this.error.message || "Error";
            }
          }
        },
        $ = (n(266), n(5)),
        C = Object($.a)(
          j,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", { staticClass: "__nuxt-error-page" }, [
              n("div", { staticClass: "error" }, [
                n(
                  "svg",
                  {
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "90",
                      height: "90",
                      fill: "#DBE1EC",
                      viewBox: "0 0 48 48"
                    }
                  },
                  [
                    n("path", {
                      attrs: {
                        d:
                          "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                      }
                    })
                  ]
                ),
                t._v(" "),
                n("div", { staticClass: "title" }, [t._v(t._s(t.message))]),
                t._v(" "),
                404 === t.statusCode
                  ? n(
                      "p",
                      { staticClass: "description" },
                      [
                        n(
                          "NuxtLink",
                          { staticClass: "error-link", attrs: { to: "/" } },
                          [t._v("Back to the home page")]
                        )
                      ],
                      1
                    )
                  : t._e(),
                t._v(" "),
                t._m(0)
              ])
            ]);
          },
          [
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "logo" }, [
                e(
                  "a",
                  {
                    attrs: {
                      href: "https://nuxtjs.org",
                      target: "_blank",
                      rel: "noopener"
                    }
                  },
                  [this._v("Nuxt.js")]
                )
              ]);
            }
          ],
          !1,
          null,
          null,
          null
        ).exports,
        E = (n(55), n(72)),
        R = {
          name: "Nuxt",
          components: { NuxtChild: _, NuxtError: C },
          props: {
            nuxtChildKey: { type: String, default: void 0 },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 },
            name: { type: String, default: "default" }
          },
          computed: {
            routerViewKey: function() {
              if (
                void 0 !== this.nuxtChildKey ||
                this.$route.matched.length > 1
              )
                return (
                  this.nuxtChildKey ||
                  Object(y.b)(this.$route.matched[0].path)(this.$route.params)
                );
              var t = Object(E.a)(this.$route.matched, 1)[0];
              if (!t) return this.$route.path;
              var e = t.components.default;
              if (e && e.options) {
                var n = e.options;
                if (n.key)
                  return "function" == typeof n.key
                    ? n.key(this.$route)
                    : n.key;
              }
              return /\/$/.test(t.path)
                ? this.$route.path
                : this.$route.path.replace(/\/$/, "");
            }
          },
          beforeCreate: function() {
            c.default.util.defineReactive(
              this,
              "nuxt",
              this.$root.$options.nuxt
            );
          },
          render: function(t) {
            return this.nuxt.err
              ? t("NuxtError", { props: { error: this.nuxt.err } })
              : t("NuxtChild", { key: this.routerViewKey, props: this.$props });
          }
        },
        P =
          (n(109),
          {
            name: "NuxtLoading",
            data: function() {
              return {
                percent: 0,
                show: !1,
                canSucceed: !0,
                reversed: !1,
                skipTimerCount: 0,
                rtl: !1,
                throttle: 200,
                duration: 5e3,
                continuous: !1
              };
            },
            computed: {
              left: function() {
                return (
                  !(!this.continuous && !this.rtl) &&
                  (this.rtl
                    ? this.reversed
                      ? "0px"
                      : "auto"
                    : this.reversed
                    ? "auto"
                    : "0px")
                );
              }
            },
            beforeDestroy: function() {
              this.clear();
            },
            methods: {
              clear: function() {
                clearInterval(this._timer),
                  clearTimeout(this._throttle),
                  (this._timer = null);
              },
              start: function() {
                var t = this;
                return (
                  this.clear(),
                  (this.percent = 0),
                  (this.reversed = !1),
                  (this.skipTimerCount = 0),
                  (this.canSucceed = !0),
                  this.throttle
                    ? (this._throttle = setTimeout(function() {
                        return t.startTimer();
                      }, this.throttle))
                    : this.startTimer(),
                  this
                );
              },
              set: function(t) {
                return (
                  (this.show = !0),
                  (this.canSucceed = !0),
                  (this.percent = Math.min(100, Math.max(0, Math.floor(t)))),
                  this
                );
              },
              get: function() {
                return this.percent;
              },
              increase: function(t) {
                return (
                  (this.percent = Math.min(100, Math.floor(this.percent + t))),
                  this
                );
              },
              decrease: function(t) {
                return (
                  (this.percent = Math.max(0, Math.floor(this.percent - t))),
                  this
                );
              },
              pause: function() {
                return clearInterval(this._timer), this;
              },
              resume: function() {
                return this.startTimer(), this;
              },
              finish: function() {
                return (
                  (this.percent = this.reversed ? 0 : 100), this.hide(), this
                );
              },
              hide: function() {
                var t = this;
                return (
                  this.clear(),
                  setTimeout(function() {
                    (t.show = !1),
                      t.$nextTick(function() {
                        (t.percent = 0), (t.reversed = !1);
                      });
                  }, 500),
                  this
                );
              },
              fail: function() {
                return (this.canSucceed = !1), this;
              },
              startTimer: function() {
                var t = this;
                this.show || (this.show = !0),
                  void 0 === this._cut &&
                    (this._cut = 1e4 / Math.floor(this.duration)),
                  (this._timer = setInterval(function() {
                    t.skipTimerCount > 0
                      ? t.skipTimerCount--
                      : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut),
                        t.continuous &&
                          (t.percent >= 100
                            ? ((t.skipTimerCount = 1),
                              (t.reversed = !t.reversed))
                            : t.percent <= 0 &&
                              ((t.skipTimerCount = 1),
                              (t.reversed = !t.reversed))));
                  }, 100));
              }
            },
            render: function(t) {
              var e = t(!1);
              return (
                this.show &&
                  (e = t("div", {
                    staticClass: "nuxt-progress",
                    class: {
                      "nuxt-progress-notransition": this.skipTimerCount > 0,
                      "nuxt-progress-failed": !this.canSucceed
                    },
                    style: { width: this.percent + "%", left: this.left }
                  })),
                e
              );
            }
          }),
        T =
          (n(267),
          Object($.a)(P, void 0, void 0, !1, null, null, null).exports),
        A = (n(268), { name: "CopyRight" }),
        S =
          (n(269),
          Object($.a)(
            A,
            function() {
              var t = this.$createElement;
              return (this._self._c || t)("div", { staticClass: "copyright" }, [
                this._v(
                  "\n  Copyright ©\n  " +
                    this._s(
                      new Date().getFullYear() +
                        " " +
                        this.$store.state.meta.copyright
                    ) +
                    "\n"
                )
              ]);
            },
            [],
            !1,
            null,
            "04975640",
            null
          ).exports),
        I = { name: "IconFont", props: { icon: { type: String } } },
        D = {
          name: "MenuItem",
          components: {
            IconFont: Object($.a)(
              I,
              function() {
                var t = this.$createElement;
                return (this._self._c || t)("i", {
                  class: "iconfont " + this.icon
                });
              },
              [],
              !1,
              null,
              null,
              null
            ).exports
          },
          props: { menuList: { type: Array } }
        },
        N = Object($.a)(
          D,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              t._l(t.menuList, function(e) {
                return n(
                  "div",
                  { key: e.id, staticClass: "menu-item" },
                  [
                    e.children
                      ? n(
                          "el-submenu",
                          { attrs: { index: e.id + "" } },
                          [
                            n(
                              "template",
                              { slot: "title" },
                              [
                                n("icon-font", { attrs: { icon: e.icon } }),
                                t._v(" "),
                                n("span", { staticClass: "sub-menu-title" }, [
                                  t._v(t._s(e.name))
                                ])
                              ],
                              1
                            ),
                            t._v(" "),
                            n("menu-item", { attrs: { menuList: e.children } })
                          ],
                          2
                        )
                      : n(
                          "el-menu-item",
                          { attrs: { index: e.url } },
                          [
                            n("icon-font", { attrs: { icon: e.icon } }),
                            t._v(" "),
                            n(
                              "span",
                              { attrs: { slot: "title" }, slot: "title" },
                              [t._v(t._s(e.name))]
                            )
                          ],
                          1
                        )
                  ],
                  1
                );
              }),
              0
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        L = n(70),
        B = n(37),
        M = n.n(B),
        U = n(38),
        F = {
          created:
            ((w = Object(r.a)(
              regeneratorRuntime.mark(function t() {
                var e;
                return regeneratorRuntime.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          t.next = 2;
                          break;
                        case 2:
                          if (
                            ((e = {}),
                            U.a.forEach(function(t) {
                              e[t] = M.a.get(t);
                            }),
                            e.userId && e.token)
                          ) {
                            t.next = 8;
                            break;
                          }
                          this.$router.replace("/activity/list"), (t.next = 19);
                          break;
                        case 8:
                          if (this.$store.state.userId) {
                            t.next = 19;
                            break;
                          }
                          return (
                            this.$store.commit("update", e),
                            (t.prev = 10),
                            console.log(e),
                            (t.next = 14),
                            this.$store.dispatch("fetchUserAndMenuList", {
                              userId: e.userId
                            })
                          );
                        case 14:
                          t.next = 19;
                          break;
                        case 16:
                          (t.prev = 16),
                            (t.t0 = t.catch(10)),
                            console.error("auth error: ", t.t0);
                        case 19:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[10, 16]]
                );
              })
            )),
            function() {
              return w.apply(this, arguments);
            })
        },
        z = { charts: { background: "transparent" } };
      function J(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      var H,
        K = {
          mixins: [F],
          components: { Copyright: S, MenuItem: N },
          data: function() {
            return { collapse: !1 };
          },
          methods: {
            handleDropdown: function(t) {
              this.$store.commit(t), this.$router.replace("/login");
            }
          },
          computed: (function(t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? J(source, !0).forEach(function(e) {
                    Object(o.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : J(source).forEach(function(e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e)
                    );
                  });
            }
            return t;
          })({}, Object(L.b)(["menuList"]), {
            mainStyle: function() {
              return z[this.$route.name] || {};
            }
          })
        },
        G =
          (n(270),
          Object($.a)(
            K,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "el-container",
                { staticStyle: { background: "#f0f2f5" } },
                [
                  n(
                    "el-menu",
                    {
                      staticClass: "aside-menu",
                      attrs: {
                        collapse: t.collapse,
                        "default-active": t.$route.path,
                        router: "",
                        "background-color": "#001529",
                        "text-color": "hsla(0,0%,100%,.67)"
                      }
                    },
                    [
                      n(
                        "div",
                        { staticClass: "logo" },
                        [
                          n("nuxt-link", { attrs: { to: "/" } }, [
                            n("img", {
                              staticClass: "logo-img",
                              attrs: {
                                src: t.$store.state.meta.logo,
                                alt: "logo"
                              }
                            })
                          ])
                        ],
                        1
                      ),
                      t._v(" "),
                      n("menu-item", { attrs: { menuList: t.menuList } })
                    ],
                    1
                  ),
                  t._v(" "),
                  n(
                    "el-container",
                    { staticClass: "main-container" },
                    [
                      n(
                        "el-header",
                        [
                          n(
                            "el-row",
                            {
                              attrs: {
                                type: "flex",
                                justify: "space-between",
                                align: "middle"
                              }
                            },
                            [
                              n(
                                "el-col",
                                [
                                  n(
                                    "el-button",
                                    {
                                      on: {
                                        click: function(e) {
                                          t.collapse = !t.collapse;
                                        }
                                      }
                                    },
                                    [n("i", { staticClass: "el-icon-sort" })]
                                  )
                                ],
                                1
                              ),
                              t._v(" "),
                              n(
                                "el-col",
                                { staticStyle: { "text-align": "right" } },
                                [
                                  n(
                                    "el-dropdown",
                                    { on: { command: t.handleDropdown } },
                                    [
                                      n(
                                        "span",
                                        { staticClass: "el-dropdown-link" },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(
                                                t.$store.state.user.nickname
                                              ) +
                                              "\n              "
                                          ),
                                          n("i", {
                                            staticClass:
                                              "el-icon-arrow-down el-icon--right"
                                          })
                                        ]
                                      ),
                                      t._v(" "),
                                      n(
                                        "el-dropdown-menu",
                                        {
                                          attrs: { slot: "dropdown" },
                                          slot: "dropdown"
                                        },
                                        [
                                          n(
                                            "el-dropdown-item",
                                            { attrs: { command: "logout" } },
                                            [t._v("退出")]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      t._v(" "),
                      n(
                        "el-main",
                        { staticClass: "nuxt-main", style: t.mainStyle },
                        [n("nuxt")],
                        1
                      ),
                      t._v(" "),
                      n("el-footer", [n("copyright")], 1)
                    ],
                    1
                  )
                ],
                1
              );
            },
            [],
            !1,
            null,
            null,
            null
          ).exports),
        Q = {
          name: "login",
          components: { Copyright: S },
          data: function() {
            return {};
          },
          methods: {}
        },
        X =
          (n(271),
          {
            _default: G,
            _login: Object($.a)(
              Q,
              function() {
                var t = this.$createElement,
                  e = this._self._c || t;
                return e(
                  "div",
                  {
                    staticClass: "layout-login",
                    style: {
                      backgroundImage:
                        "url(" + this.$store.state.meta.loginBgImg + ")"
                    }
                  },
                  [
                    e("h1", { staticClass: "title" }, [
                      this._v(this._s(this.$store.state.meta.htmlTitle))
                    ]),
                    this._v(" "),
                    e("nuxt"),
                    this._v(" "),
                    e("copyright")
                  ],
                  1
                );
              },
              [],
              !1,
              null,
              null,
              null
            ).exports
          }),
        V = {
          head: {
            title: "Optimus",
            meta: [
              { charset: "utf-8" },
              {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
              },
              { "http-equiv": "x-ua-compatible", content: "IE=edge, chrome=1" },
              { hid: "description", name: "description", content: "开发平台" }
            ],
            link: [
              {
                rel: "icon",
                type: "image/x-icon",
                href:
                  "https://deepexi.oss-cn-shenzhen.aliyuncs.com/deepexi-services/favicon32x32.png"
              },
              {
                rel: "stylesheet",
                type: "text/css",
                href: "//at.alicdn.com/t/font_1210772_8nqvqets5wg.css"
              },
              {}
            ],
            style: [],
            script: []
          },
          render: function(t, e) {
            var n = t("NuxtLoading", { ref: "loading" }),
              r = t(this.layout || "nuxt"),
              o = t(
                "div",
                { domProps: { id: "__layout" }, key: this.layoutName },
                [r]
              ),
              c = t(
                "transition",
                {
                  props: { name: "layout", mode: "out-in" },
                  on: {
                    beforeEnter: function(t) {
                      window.$nuxt.$nextTick(function() {
                        window.$nuxt.$emit("triggerScroll");
                      });
                    }
                  }
                },
                [o]
              );
            return t("div", { domProps: { id: "__nuxt" } }, [n, c]);
          },
          data: function() {
            return { isOnline: !0, layout: null, layoutName: "" };
          },
          beforeCreate: function() {
            c.default.util.defineReactive(this, "nuxt", this.$options.nuxt);
          },
          created: function() {
            (c.default.prototype.$nuxt = this),
              (window.$nuxt = this),
              this.refreshOnlineStatus(),
              window.addEventListener("online", this.refreshOnlineStatus),
              window.addEventListener("offline", this.refreshOnlineStatus),
              (this.error = this.nuxt.error),
              (this.context = this.$options.context);
          },
          mounted: function() {
            this.$loading = this.$refs.loading;
          },
          watch: { "nuxt.err": "errorChanged" },
          computed: {
            isOffline: function() {
              return !this.isOnline;
            }
          },
          methods: {
            refreshOnlineStatus: function() {
              void 0 === window.navigator.onLine
                ? (this.isOnline = !0)
                : (this.isOnline = window.navigator.onLine);
            },
            refresh:
              ((H = Object(r.a)(
                regeneratorRuntime.mark(function t() {
                  var e,
                    n,
                    o = this;
                  return regeneratorRuntime.wrap(
                    function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ((e = Object(y.f)(this.$route)).length) {
                              t.next = 3;
                              break;
                            }
                            return t.abrupt("return");
                          case 3:
                            return (
                              this.$loading.start(),
                              (n = e.map(
                                (function() {
                                  var t = Object(r.a)(
                                    regeneratorRuntime.mark(function t(e) {
                                      var p;
                                      return regeneratorRuntime.wrap(function(
                                        t
                                      ) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              return (
                                                (p = []),
                                                e.$options.fetch &&
                                                  p.push(
                                                    Object(y.m)(
                                                      e.$options.fetch,
                                                      o.context
                                                    )
                                                  ),
                                                e.$options.asyncData &&
                                                  p.push(
                                                    Object(y.m)(
                                                      e.$options.asyncData,
                                                      o.context
                                                    ).then(function(t) {
                                                      for (var n in t)
                                                        c.default.set(
                                                          e.$data,
                                                          n,
                                                          t[n]
                                                        );
                                                    })
                                                  ),
                                                t.abrupt(
                                                  "return",
                                                  Promise.all(p)
                                                )
                                              );
                                            case 4:
                                            case "end":
                                              return t.stop();
                                          }
                                      },
                                      t);
                                    })
                                  );
                                  return function(e) {
                                    return t.apply(this, arguments);
                                  };
                                })()
                              )),
                              (t.prev = 5),
                              (t.next = 8),
                              Promise.all(n)
                            );
                          case 8:
                            t.next = 15;
                            break;
                          case 10:
                            (t.prev = 10),
                              (t.t0 = t.catch(5)),
                              this.$loading.fail(),
                              Object(y.i)(t.t0),
                              this.error(t.t0);
                          case 15:
                            this.$loading.finish();
                          case 16:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this,
                    [[5, 10]]
                  );
                })
              )),
              function() {
                return H.apply(this, arguments);
              }),
            errorChanged: function() {
              this.nuxt.err &&
                this.$loading &&
                (this.$loading.fail && this.$loading.fail(),
                this.$loading.finish && this.$loading.finish());
            },
            setLayout: function(t) {
              return (
                (t && X["_" + t]) || (t = "default"),
                (this.layoutName = t),
                (this.layout = X["_" + t]),
                this.layout
              );
            },
            loadLayout: function(t) {
              return (
                (t && X["_" + t]) || (t = "default"),
                Promise.resolve(X["_" + t])
              );
            }
          },
          components: { NuxtLoading: T }
        };
      n(116), n(86);
      c.default.use(L.a);
      var Y = {};
      (Y = (function(t, e) {
        if ((t = t.default || t).commit)
          throw new Error(
            "[nuxt] ".concat(
              e,
              " should export a method that returns a Vuex instance."
            )
          );
        return "function" != typeof t && (t = Object.assign({}, t)), Z(t, e);
      })(n(272), "store/index.js")).modules = Y.modules || {};
      var W =
        Y instanceof Function
          ? Y
          : function() {
              return new L.a.Store(Object.assign({ strict: !1 }, Y));
            };
      function Z(t, e) {
        if (t.state && "function" != typeof t.state) {
          console.warn(
            "'state' should be a method that returns an object in ".concat(e)
          );
          var n = Object.assign({}, t.state);
          t = Object.assign({}, t, {
            state: function() {
              return n;
            }
          });
        }
        return t;
      }
      n(113);
      for (
        var tt = n(188),
          et = n.n(tt),
          nt = {
            setHeader: function(t, e) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "common",
                r = !0,
                o = !1,
                c = void 0;
              try {
                for (
                  var l, f = (Array.isArray(n) ? n : [n])[Symbol.iterator]();
                  !(r = (l = f.next()).done);
                  r = !0
                ) {
                  var d = l.value;
                  if (!e) return void delete this.defaults.headers[d][t];
                  this.defaults.headers[d][t] = e;
                }
              } catch (t) {
                (o = !0), (c = t);
              } finally {
                try {
                  r || null == f.return || f.return();
                } finally {
                  if (o) throw c;
                }
              }
            },
            setToken: function(t, e) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "common",
                r = t ? (e ? e + " " : "") + t : null;
              this.setHeader("Authorization", r, n);
            },
            onRequest: function(t) {
              this.interceptors.request.use(function(e) {
                return t(e) || e;
              });
            },
            onResponse: function(t) {
              this.interceptors.response.use(function(e) {
                return t(e) || e;
              });
            },
            onRequestError: function(t) {
              this.interceptors.request.use(void 0, function(e) {
                return t(e) || Promise.reject(e);
              });
            },
            onResponseError: function(t) {
              this.interceptors.response.use(void 0, function(e) {
                return t(e) || Promise.reject(e);
              });
            },
            onError: function(t) {
              this.onRequestError(t), this.onResponseError(t);
            }
          },
          ot = function() {
            var t = it[at];
            nt["$" + t] = function() {
              return this[t].apply(this, arguments).then(function(t) {
                return t && t.data;
              });
            };
          },
          at = 0,
          it = [
            "request",
            "delete",
            "get",
            "head",
            "options",
            "post",
            "put",
            "patch"
          ];
        at < it.length;
        at++
      )
        ot();
      var st = function(t, e) {
          var n = {
            baseURL: "http://39.105.0.116/poctest/poc",
            headers: {
              common: { Accept: "application/json, text/plain, */*" },
              delete: {},
              get: {},
              head: {},
              post: {},
              put: {},
              patch: {}
            }
          };
          (n.headers.common =
            t.req && t.req.headers ? Object.assign({}, t.req.headers) : {}),
            delete n.headers.common.accept,
            delete n.headers.common.host,
            delete n.headers.common["cf-ray"],
            delete n.headers.common["cf-connecting-ip"],
            delete n.headers.common["content-length"];
          var r = et.a.create(n);
          !(function(t) {
            for (var e in nt) t[e] = nt[e].bind(t);
          })(r),
            (function(t, e) {
              var n = {
                  finish: function() {},
                  start: function() {},
                  fail: function() {},
                  set: function() {}
                },
                r = function() {
                  return window.$nuxt &&
                    window.$nuxt.$loading &&
                    window.$nuxt.$loading.set
                    ? window.$nuxt.$loading
                    : n;
                },
                o = 0;
              t.onRequest(function(t) {
                (t && !1 === t.progress) || o++;
              }),
                t.onResponse(function(t) {
                  (t && t.config && !1 === t.config.progress) ||
                    (--o <= 0 && ((o = 0), r().finish()));
                }),
                t.onError(function(t) {
                  (t && t.config && !1 === t.config.progress) ||
                    (o--, r().fail(), r().finish());
                });
              var c = function(t) {
                if (o) {
                  var progress = (100 * t.loaded) / (t.total * o);
                  r().set(Math.min(100, progress));
                }
              };
              (t.defaults.onUploadProgress = c),
                (t.defaults.onDownloadProgress = c);
            })(r),
            (t.$axios = r),
            e("axios", r);
        },
        ut = [
          { key: "name" },
          {
            key: "status",
            format: function(t) {
              return +t;
            }
          },
          {
            key: "stock",
            format: function(t) {
              return +t;
            }
          }
        ],
        ct = function(t) {
          var e = t.$axios,
            n = t.store,
            r = (t.app, t.redirect);
          e.onRequest(function(t) {
            var e = t.url;
            (e += e.indexOf("?") > -1 ? "&" : "?"),
              (e += "tenantId="
                .concat(n.state.tenantId, "&userId=")
                .concat(n.state.userId, "&_=")
                .concat(new Date().getTime()));
            var data = {};
            if (
              (e
                .split("?")[1]
                .split("&")
                .forEach(function(i) {
                  var t = i.split("=");
                  data[t[0]] = decodeURI(t[1]);
                }),
              data.clean)
            ) {
              var r = {};
              (e = e.split("?")[0] + "?collection=" + data.collection),
                ut.forEach(function(i, t) {
                  data[i.key] &&
                    (r[i.key] = i.format ? i.format(data[i.key]) : data[i.key]);
                }),
                (e += "&json=".concat(JSON.stringify(r))),
                (e = encodeURI(e));
            }
            return (t.url = e), t;
          }),
            e.onError(function(t) {
              var e = t.response,
                data = e.data;
              c.default.$notify.error({
                title: e.status,
                message: data.payload || data.msg
              }),
                401 == e.status &&
                  (U.a.forEach(function(t) {
                    M.a.remove(t, { path: "/" });
                  }),
                  r("/login"));
            });
        },
        lt = (n(289), n(2), n(189)),
        ft = n.n(lt),
        pt = (n(292), n(73)),
        ht = n.n(pt),
        mt = (n(298), n(141)),
        vt = n.n(mt),
        yt = (n(299), n(190)),
        bt = n.n(yt),
        gt = (n(233), n(88)),
        xt = n.n(gt),
        wt = (n(301), n(191)),
        _t = n.n(wt),
        Ot = (n(302), n(192)),
        kt = n.n(Ot),
        jt = (n(304), n(68)),
        $t = n.n(jt),
        Ct = (n(305), n(193)),
        Et = n.n(Ct),
        Rt = (n(306), n(194)),
        Pt = n.n(Rt),
        Tt = (n(307), n(195)),
        At = n.n(Tt),
        St = (n(308), n(196)),
        It = n.n(St),
        Dt = (n(309), n(197)),
        Nt = n.n(Dt),
        Lt = (n(310), n(198)),
        qt = n.n(Lt),
        Bt = (n(311), n(199)),
        Mt = n.n(Bt),
        Ut = (n(313), n(200)),
        Ft = n.n(Ut),
        zt = (n(314), n(201)),
        Jt = n.n(zt),
        Ht = (n(315), n(202)),
        Kt = n.n(Ht),
        Gt = (n(316), n(203)),
        Qt = n.n(Gt),
        Xt = (n(317), n(204)),
        Vt = n.n(Xt),
        Yt = (n(318), n(35)),
        Wt = n.n(Yt),
        Zt = (n(319), n(205)),
        te = n.n(Zt),
        ee = (n(352), n(71)),
        ne = n.n(ee),
        re = (n(353), n(206)),
        oe = n.n(re),
        ae = (n(354), n(207)),
        ie = n.n(ae),
        se = (n(355), n(208)),
        ue = n.n(se),
        ce = (n(356), n(209)),
        le = n.n(ce),
        fe = (n(357), n(210)),
        pe = n.n(fe),
        de = (n(366), n(211)),
        he = n.n(de),
        me = (n(368), n(212)),
        ve = n.n(me),
        ye = (n(371), n(137)),
        be = n.n(ye),
        ge = (n(372), n(136)),
        xe = n.n(ge),
        we = (n(373), n(67)),
        _e = n.n(we),
        Oe = n(213),
        ke = n(214),
        je = { name: "SubTitle", props: { title: { type: String } } },
        $e =
          (n(377),
          Object($.a)(
            je,
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "div",
                { staticClass: "sub-title-box" },
                [
                  e(
                    "div",
                    { staticClass: "sub-title" },
                    [
                      this._v("\n    " + this._s(this.title) + "\n    "),
                      this._t("default")
                    ],
                    2
                  ),
                  this._v(" "),
                  this._t("content")
                ],
                2
              );
            },
            [],
            !1,
            null,
            null,
            null
          ).exports);
      (c.default.prototype.$ELEMENT = { size: "medium" }),
        c.default.use(_e.a),
        c.default.use(xe.a),
        c.default.use(be.a),
        c.default.use(ve.a),
        c.default.use(he.a),
        c.default.use(pe.a),
        c.default.use(le.a),
        c.default.use(ue.a),
        c.default.use(ie.a),
        c.default.use(oe.a),
        c.default.use(ne.a),
        c.default.use(te.a),
        c.default.use(Wt.a),
        c.default.use(Vt.a),
        c.default.use(Qt.a),
        c.default.use(Kt.a),
        c.default.use(Jt.a),
        c.default.use(Ft.a),
        c.default.use(Mt.a),
        c.default.use(qt.a),
        c.default.use(Nt.a),
        c.default.use(It.a),
        c.default.use(At.a),
        c.default.use(Pt.a),
        c.default.use(Et.a),
        c.default.use($t.a),
        c.default.use(kt.a.directive),
        c.default.use(_t.a),
        c.default.use(xt.a),
        c.default.use(bt.a),
        c.default.component("el-form-renderer", Oe.a),
        c.default.component("el-data-table", ke.a),
        c.default.component("sub-title", $e),
        (c.default.prototype.$notify = vt.a),
        (c.default.$notify = vt.a),
        (c.default.prototype.$msgbox = ht.a),
        (c.default.prototype.$alert = ht.a.alert),
        (c.default.prototype.$confirm = ht.a.confirm),
        (c.default.prototype.$prompt = ht.a.prompt),
        (c.default.prototype.$message = ft.a);
      var Ce = { name: "GoBack" },
        Ee =
          (n(378),
          Object($.a)(
            Ce,
            function() {
              var t = this,
                e = t.$createElement;
              return (t._self._c || e)(
                "el-button",
                {
                  staticClass: "back-button",
                  attrs: { icon: "el-icon-arrow-left", type: "text" },
                  on: {
                    click: function(e) {
                      return t.$router.back();
                    }
                  }
                },
                [t._v("返回")]
              );
            },
            [],
            !1,
            null,
            null,
            null
          ).exports);
      function Re(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function Pe(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? Re(source, !0).forEach(function(e) {
                Object(o.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : Re(source).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      c.default.component("sub-title", $e),
        c.default.component("go-back", Ee),
        n.d(e, "b", function() {
          return Ae;
        }),
        n.d(e, "a", function() {
          return C;
        }),
        c.default.component(d.a.name, d.a),
        c.default.component(
          m.a.name,
          Pe({}, m.a, {
            render: function(t, e) {
              return (
                m.a._warned ||
                  ((m.a._warned = !0),
                  console.warn(
                    "<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead"
                  )),
                m.a.render(t, e)
              );
            }
          })
        ),
        c.default.component(_.name, _),
        c.default.component("NChild", _),
        c.default.component(R.name, R),
        c.default.use(l.a, {
          keyName: "head",
          attribute: "data-n-head",
          ssrAttribute: "data-n-head-ssr",
          tagIDKeyName: "hid"
        });
      var Te = {
        name: "page",
        mode: "out-in",
        appear: !0,
        appearClass: "appear",
        appearActiveClass: "appear-active",
        appearToClass: "appear-to"
      };
      function Ae(t) {
        return Se.apply(this, arguments);
      }
      function Se() {
        return (Se = Object(r.a)(
          regeneratorRuntime.mark(function t(e) {
            var n, r, o, l, f, path, d;
            return regeneratorRuntime.wrap(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), new v.a(x);
                  case 2:
                    return (
                      (n = t.sent),
                      ((r = W(e)).$router = n),
                      (o = Pe(
                        {
                          router: n,
                          store: r,
                          nuxt: {
                            defaultTransition: Te,
                            transitions: [Te],
                            setTransitions: function(t) {
                              return (
                                Array.isArray(t) || (t = [t]),
                                (t = t.map(function(t) {
                                  return (t = t
                                    ? "string" == typeof t
                                      ? Object.assign({}, Te, { name: t })
                                      : Object.assign({}, Te, t)
                                    : Te);
                                })),
                                (this.$options.nuxt.transitions = t),
                                t
                              );
                            },
                            err: null,
                            dateErr: null,
                            error: function(t) {
                              (t = t || null),
                                (o.context._errored = Boolean(t)),
                                (t = t ? Object(y.l)(t) : null);
                              var n = this.nuxt || this.$options.nuxt;
                              return (
                                (n.dateErr = Date.now()),
                                (n.err = t),
                                e && (e.nuxt.error = t),
                                t
                              );
                            }
                          }
                        },
                        V
                      )),
                      (r.app = o),
                      (l = e
                        ? e.next
                        : function(t) {
                            return o.router.push(t);
                          }),
                      e
                        ? (f = n.resolve(e.url).route)
                        : ((path = Object(y.d)(n.options.base)),
                          (f = n.resolve(path).route)),
                      (t.next = 11),
                      Object(y.p)(o, {
                        route: f,
                        next: l,
                        error: o.nuxt.error.bind(o),
                        store: r,
                        payload: e ? e.payload : void 0,
                        req: e ? e.req : void 0,
                        res: e ? e.res : void 0,
                        beforeRenderFns: e ? e.beforeRenderFns : void 0,
                        ssrContext: e
                      })
                    );
                  case 11:
                    if (
                      ((d = function(t, e) {
                        if (!t)
                          throw new Error(
                            "inject(key, value) has no key provided"
                          );
                        if (void 0 === e)
                          throw new Error(
                            "inject(key, value) has no value provided"
                          );
                        (o[(t = "$" + t)] = e), (r[t] = o[t]);
                        var n = "__nuxt_" + t + "_installed__";
                        c.default[n] ||
                          ((c.default[n] = !0),
                          c.default.use(function() {
                            c.default.prototype.hasOwnProperty(t) ||
                              Object.defineProperty(c.default.prototype, t, {
                                get: function() {
                                  return this.$root.$options[t];
                                }
                              });
                          }));
                      }),
                      window.__NUXT__ &&
                        window.__NUXT__.state &&
                        r.replaceState(window.__NUXT__.state),
                      "function" != typeof st)
                    ) {
                      t.next = 16;
                      break;
                    }
                    return (t.next = 16), st(o.context, d);
                  case 16:
                    if ("function" != typeof ct) {
                      t.next = 19;
                      break;
                    }
                    return (t.next = 19), ct(o.context, d);
                  case 19:
                    t.next = 22;
                    break;
                  case 22:
                    t.next = 25;
                    break;
                  case 25:
                    t.next = 28;
                    break;
                  case 28:
                    return t.abrupt("return", { app: o, store: r, router: n });
                  case 29:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
    },
    69: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return r;
      });
      var r = "/api/v1";
    },
    97: function(t, e, n) {},
    98: function(t, e, n) {},
    99: function(t, e, n) {}
  },
  [[234, 6, 7]]
]);
