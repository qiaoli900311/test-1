(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    400: function(t, e, n) {
      "use strict";
      n.d(e, "l", function() {
        return d;
      }),
        n.d(e, "c", function() {
          return f;
        }),
        n.d(e, "h", function() {
          return m;
        }),
        n.d(e, "k", function() {
          return h;
        }),
        n.d(e, "j", function() {
          return v;
        }),
        n.d(e, "i", function() {
          return y;
        }),
        n.d(e, "a", function() {
          return _;
        }),
        n.d(e, "b", function() {
          return O;
        }),
        n.d(e, "g", function() {
          return w;
        }),
        n.d(e, "e", function() {
          return x;
        }),
        n.d(e, "f", function() {
          return C;
        }),
        n.d(e, "d", function() {
          return P;
        });
      var r,
        o,
        l = n(23),
        c =
          (n(22),
          n(21),
          n(51),
          function(t) {
            return Object.keys(t).map(function(e) {
              return { label: t[e], value: e };
            });
          }),
        d = { activity: "activity", product: "product" },
        f = { add: "add", edit: "edit", view: "view" },
        m = { doing: 0, stop: 1, finish: 2 },
        h =
          ((r = {}),
          Object(l.a)(r, m.doing, "success"),
          Object(l.a)(r, m.stop, "danger"),
          Object(l.a)(r, m.finish, "danger"),
          r),
        v =
          ((o = {}),
          Object(l.a)(o, m.doing, "进行中"),
          Object(l.a)(o, m.stop, "已暂停"),
          Object(l.a)(o, m.finish, "已结束"),
          o),
        y = c(v),
        _ = { 0: "日常促销", 1: "节假日促销", 2: "其他促销" },
        O = c(_),
        w = { 0: "提升业绩", 1: "降低库存" },
        x = {
          sendLow: "0",
          deduction: "1",
          sendOne: "2",
          discount: "3",
          direct_discount: "4"
        },
        C = {
          0: "买高送低",
          1: "满额减价",
          2: "单品买送",
          3: "满额打折",
          4: "单品打折"
        },
        P = [
          { name: C[0], desc: "任意挑选x件</br>最低价商品免费", type: 0 },
          { name: C[1], desc: "满x元减x元", type: 1 },
          { name: C[2], desc: "单品买x件送x件", type: 2 },
          { name: C[3], desc: "满x元享受指定折扣", type: 3 },
          { name: C[4], desc: "单品享受x折", type: 4 }
        ];
    },
    407: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return c;
      }),
        n.d(e, "b", function() {
          return d;
        });
      n(215), n(216), n(21), n(395), n(450);
      var r = n(437),
        o = n.n(r),
        l = function(t) {
          return null == t;
        };
      function c(time) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "YYYY-MM-DD";
        return time ? o()(time).format(t) : "";
      }
      function d(t, e) {
        if (!l(t) && !isNaN(t)) {
          var n = Number.parseFloat(t).toLocaleString(),
            r = n.toString().indexOf(".");
          return (
            -1 !== r || e || (n += ".00"),
            1 !== n.toString().substring(r + 1).length || e || (n += "0"),
            n
          );
        }
      }
    },
    525: function(t, e, n) {},
    526: function(t, e, n) {},
    527: function(t, e, n) {},
    528: function(t, e, n) {},
    529: function(t, e, n) {},
    530: function(t, e, n) {},
    531: function(t, e, n) {},
    532: function(t, e, n) {},
    533: function(t, e, n) {},
    534: function(t, e, n) {},
    535: function(t, e, n) {},
    536: function(t, e, n) {},
    537: function(t, e, n) {},
    538: function(t, e, n) {},
    539: function(t, e, n) {},
    956: function(t, e, n) {
      "use strict";
      var r = n(525);
      n.n(r).a;
    },
    959: function(t, e, n) {
      "use strict";
      var r = n(526);
      n.n(r).a;
    },
    960: function(t, e, n) {
      "use strict";
      var r = n(527);
      n.n(r).a;
    },
    961: function(t, e, n) {
      "use strict";
      var r = n(528);
      n.n(r).a;
    },
    962: function(t, e, n) {
      "use strict";
      var r = n(529);
      n.n(r).a;
    },
    963: function(t, e, n) {
      "use strict";
      var r = n(530);
      n.n(r).a;
    },
    965: function(t, e, n) {
      "use strict";
      var r = n(531);
      n.n(r).a;
    },
    966: function(t, e, n) {
      "use strict";
      var r = n(532);
      n.n(r).a;
    },
    967: function(t, e, n) {
      "use strict";
      var r = n(533);
      n.n(r).a;
    },
    968: function(t, e, n) {
      "use strict";
      var r = n(534);
      n.n(r).a;
    },
    973: function(t, e, n) {
      "use strict";
      var r = n(535);
      n.n(r).a;
    },
    974: function(t, e, n) {
      "use strict";
      var r = n(536);
      n.n(r).a;
    },
    975: function(t, e, n) {
      "use strict";
      var r = n(537);
      n.n(r).a;
    },
    976: function(t, e, n) {
      "use strict";
      var r = n(538);
      n.n(r).a;
    },
    977: function(t, e, n) {
      "use strict";
      var r = n(539);
      n.n(r).a;
    },
    979: function(t, e, n) {
      "use strict";
      n.r(e);
      n(75), n(28), n(51);
      var r = n(23),
        o = (n(22), n(21), n(627), n(109), n(629), n(952), n(2), n(953)),
        l = n.n(o),
        c = (n(954), n(955)),
        d = n.n(c),
        f = n(400),
        filter = n(407),
        m = {
          name: "BasicSetting",
          props: {
            data: {
              type: Object,
              default: function() {
                return {};
              }
            },
            readonly: { type: Boolean, default: !1 }
          },
          data: function() {
            var t = this;
            return {
              ACTIVITY_TYPE: f.a,
              ACTIVITY_TYPE_LIST: f.b,
              PURPOSE_MAP: f.g,
              pickerOptions: {
                disabledDate: function(time) {
                  return time.getTime() < Date.now() - 864e5;
                }
              },
              dateTime: [],
              form: {
                name: "",
                type: "0",
                purpose: "",
                userType: "1",
                users: [],
                startTime: "",
                endTime: "",
                description: "",
                minStock: ""
              },
              rules: {
                name: {
                  required: !0,
                  message: "请输入活动名称",
                  trigger: "blur"
                },
                type: {
                  required: !0,
                  message: "请选择活动类型",
                  trigger: "change"
                },
                purpose: [
                  {
                    required: !0,
                    message: "请选择活动目的",
                    trigger: "change"
                  },
                  {
                    validator: function(e, n, r) {
                      if ("" == t.form.minStock)
                        return r(new Error("请输入库存限制"));
                      r();
                    },
                    trigger: "change"
                  }
                ],
                userType: {
                  required: !0,
                  message: "请选择活动对象",
                  trigger: "change"
                },
                startTime: {
                  required: !0,
                  message: "请选择活动时间",
                  trigger: "change"
                }
              }
            };
          },
          watch: {
            dateTime: function(t) {
              if (t) {
                var e = +new Date(t[0]),
                  n = +new Date(t[1]);
                (this.form.startTime = e), (this.form.endTime = n);
              } else (this.form.startTime = ""), (this.form.endTime = "");
            }
          },
          methods: {
            formatDate: filter.a,
            onSubmit: function() {
              var t = this;
              this.$refs.form.validate(function(e) {
                if (!e) return !1;
                t.$emit("handleStepChange", Object.assign({}, t.form));
              });
            }
          }
        },
        h = (n(956), n(5)),
        v = Object(h.a)(
          m,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              { staticClass: "basic-setting" },
              [
                n(
                  "el-form",
                  {
                    ref: "form",
                    staticClass: "form",
                    attrs: {
                      model: t.form,
                      rules: t.rules,
                      "label-width": "100px",
                      "label-suffix": "："
                    }
                  },
                  [
                    n(
                      "el-form-item",
                      { attrs: { label: "活动名称", prop: "name" } },
                      [
                        t.readonly
                          ? n("span", [t._v(t._s(t.data.name))])
                          : n("el-input", {
                              attrs: { placeholder: "请输入活动名称" },
                              model: {
                                value: t.form.name,
                                callback: function(e) {
                                  t.$set(t.form, "name", e);
                                },
                                expression: "form.name"
                              }
                            })
                      ],
                      1
                    ),
                    t._v(" "),
                    n(
                      "el-form-item",
                      { attrs: { label: "活动类型", prop: "type" } },
                      [
                        t.readonly
                          ? n("span", [
                              t._v(t._s(t.ACTIVITY_TYPE[t.data.type]))
                            ])
                          : n(
                              "el-radio-group",
                              {
                                model: {
                                  value: t.form.type,
                                  callback: function(e) {
                                    t.$set(t.form, "type", e);
                                  },
                                  expression: "form.type"
                                }
                              },
                              t._l(t.ACTIVITY_TYPE_LIST, function(e) {
                                return n(
                                  "el-radio",
                                  { key: e.value, attrs: { label: e.value } },
                                  [t._v(t._s(e.label))]
                                );
                              }),
                              1
                            )
                      ],
                      1
                    ),
                    t._v(" "),
                    n(
                      "el-form-item",
                      { attrs: { label: "活动目的", prop: "purpose" } },
                      [
                        t.readonly
                          ? n("span", { staticClass: "mr10" }, [
                              t._v(t._s(t.PURPOSE_MAP[t.data.purpose]))
                            ])
                          : n(
                              "el-select",
                              {
                                staticClass: "mr10",
                                attrs: { placeholder: "请选择活动目的" },
                                model: {
                                  value: t.form.purpose,
                                  callback: function(e) {
                                    t.$set(t.form, "purpose", e);
                                  },
                                  expression: "form.purpose"
                                }
                              },
                              [
                                n("el-option", {
                                  attrs: {
                                    label: "提升业绩",
                                    value: "0",
                                    disabled: ""
                                  }
                                }),
                                t._v(" "),
                                n("el-option", {
                                  attrs: { label: "降低库存", value: "1" }
                                })
                              ],
                              1
                            ),
                        t._v(" "),
                        1 == t.form.purpose || t.readonly
                          ? [
                              t._v("\n        库存范围：库存大于\n        "),
                              t.readonly
                                ? n("span", { staticClass: "ml10 mr10" }, [
                                    t._v(t._s(t.data.minStock))
                                  ])
                                : n("el-input-number", {
                                    staticClass: "aim-input ml10 mr10",
                                    attrs: {
                                      "controls-position": "right",
                                      min: 0
                                    },
                                    model: {
                                      value: t.form.minStock,
                                      callback: function(e) {
                                        t.$set(t.form, "minStock", e);
                                      },
                                      expression: "form.minStock"
                                    }
                                  }),
                              t._v("\n        个以上的商品\n        "),
                              n(
                                "el-button",
                                {
                                  staticClass: "ml10",
                                  attrs: { icon: "el-icon-search" }
                                },
                                [t._v("查看库存")]
                              )
                            ]
                          : t._e()
                      ],
                      2
                    ),
                    t._v(" "),
                    n(
                      "el-form-item",
                      { attrs: { label: "活动范围" } },
                      [
                        t.readonly
                          ? t._e()
                          : n(
                              "el-radio-group",
                              { attrs: { disabled: "" } },
                              [
                                n("el-radio", { attrs: { label: "1" } }, [
                                  t._v("提定区域")
                                ]),
                                t._v(" "),
                                n("el-radio", { attrs: { label: "2" } }, [
                                  t._v("指定门店")
                                ])
                              ],
                              1
                            )
                      ],
                      1
                    ),
                    t._v(" "),
                    n(
                      "el-form-item",
                      { attrs: { label: "活动对象", prop: "userType" } },
                      [
                        t.readonly
                          ? n("span", [t._v("所有人")])
                          : n(
                              "el-radio-group",
                              {
                                model: {
                                  value: t.form.userType,
                                  callback: function(e) {
                                    t.$set(t.form, "userType", e);
                                  },
                                  expression: "form.userType"
                                }
                              },
                              [
                                n("el-radio", { attrs: { label: "1" } }, [
                                  t._v("所有人")
                                ]),
                                t._v(" "),
                                n("el-radio", { attrs: { label: "2" } }, [
                                  t._v("指定")
                                ])
                              ],
                              1
                            )
                      ],
                      1
                    ),
                    t._v(" "),
                    n(
                      "el-form-item",
                      { attrs: { label: "活动时间", prop: "startTime" } },
                      [
                        t.readonly
                          ? n("span", [
                              t._v(
                                t._s(
                                  t.formatDate(
                                    t.data.startTime,
                                    "YYYY-MM-DD HH:mm:ss"
                                  ) +
                                    " - " +
                                    t.formatDate(
                                      t.data.endTime,
                                      "YYYY-MM-DD HH:mm:ss"
                                    )
                                )
                              )
                            ])
                          : n("el-date-picker", {
                              attrs: {
                                "picker-options": t.pickerOptions,
                                type: "datetimerange",
                                "start-placeholder": "活动开始日期",
                                "end-placeholder": "活动结束日期"
                              },
                              model: {
                                value: t.dateTime,
                                callback: function(e) {
                                  t.dateTime = e;
                                },
                                expression: "dateTime"
                              }
                            })
                      ],
                      1
                    ),
                    t._v(" "),
                    n(
                      "el-form-item",
                      { attrs: { label: "活动描述", prop: "description" } },
                      [
                        t.readonly
                          ? n("span", [t._v(t._s(t.data.description))])
                          : n("el-input", {
                              attrs: {
                                type: "textarea",
                                rows: 4,
                                placeholder: "请输入活动描述"
                              },
                              model: {
                                value: t.form.description,
                                callback: function(e) {
                                  t.$set(t.form, "description", e);
                                },
                                expression: "form.description"
                              }
                            })
                      ],
                      1
                    )
                  ],
                  1
                ),
                t._v(" "),
                t.readonly
                  ? t._e()
                  : n(
                      "div",
                      { staticClass: "btn-control" },
                      [
                        n(
                          "el-button",
                          {
                            attrs: { type: "primary" },
                            on: { click: t.onSubmit }
                          },
                          [t._v("下一步")]
                        )
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
          "6591a95a",
          null
        ).exports,
        y = (n(452), n(395), n(957), n(958)),
        _ = n.n(y);
      function O(object, t) {
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
      function w(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? O(source, !0).forEach(function(e) {
                Object(r.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : O(source).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var x = { quantity: 0, policyName: "" },
        C = {
          name: "SendLow",
          components: {},
          data: function() {
            return { rules: [] };
          },
          methods: {
            resetData: function() {
              this.rules = [w({}, x, { id: +new Date() })];
            },
            valid: function() {
              var t = this;
              return new Promise(function(e, n) {
                for (var i = 0; i < t.rules.length; i++) {
                  if (t.rules[i].quantity <= 0)
                    return n("件数请输入大于0的数字");
                  t.rules[i].policyName = "买".concat(
                    t.rules[i].quantity,
                    "件不同价，“免”一件低价"
                  );
                }
                e(JSON.parse(JSON.stringify(t.rules)));
              });
            }
          }
        },
        P =
          (n(959),
          Object(h.a)(
            C,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                { staticClass: "send-low" },
                t._l(t.rules, function(e, r) {
                  return n(
                    "div",
                    { staticClass: "item" },
                    [
                      t._v("\n    买\n    "),
                      n("el-input-number", {
                        staticClass: "limit-input",
                        attrs: { min: 0, "controls-position": "right" },
                        model: {
                          value: e.quantity,
                          callback: function(n) {
                            t.$set(e, "quantity", n);
                          },
                          expression: "item.quantity"
                        }
                      }),
                      t._v("\n    件不同价，最低价商品免费\n  ")
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
            "1e200b03",
            null
          ).exports);
      function D(object, t) {
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
      function k(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? D(source, !0).forEach(function(e) {
                Object(r.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : D(source).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var S = { limit: 0, preferential: 0, policyName: "" },
        j = {
          name: "Deduction",
          components: {},
          data: function() {
            return { rules: [] };
          },
          methods: {
            resetData: function() {
              this.rules = [k({}, S, { id: +new Date() })];
            },
            add: function() {
              this.rules.push(k({}, S, { id: +new Date() }));
            },
            delHandle: function(t) {
              this.rules.splice(t, 1);
            },
            valid: function() {
              var t = this;
              return new Promise(function(e, n) {
                for (var i = 0; i < t.rules.length; i++) {
                  var r = t.rules[i];
                  if (r.limit <= 0 || r.preferential <= 0)
                    return n("金额请输入大于0的数字");
                  if (r.limit < r.preferential)
                    return n("减额设置不能大于满额设置");
                  t.rules[i].policyName = "满"
                    .concat(r.limit, "元减")
                    .concat(r.preferential, "元");
                }
                e(JSON.parse(JSON.stringify(t.rules)));
              });
            }
          }
        },
        T =
          (n(960),
          Object(h.a)(
            j,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                { staticClass: "deduction" },
                [
                  t._l(t.rules, function(e, r) {
                    return n(
                      "div",
                      { staticClass: "mb10 item" },
                      [
                        t._v("\n    满\n    "),
                        n("el-input-number", {
                          staticClass: "limit-input",
                          attrs: { min: 0, "controls-position": "right" },
                          model: {
                            value: e.limit,
                            callback: function(n) {
                              t.$set(e, "limit", n);
                            },
                            expression: "item.limit"
                          }
                        }),
                        t._v("\n    元，减\n    "),
                        n("el-input-number", {
                          staticClass: "limit-input",
                          attrs: { min: 0, "controls-position": "right" },
                          model: {
                            value: e.preferential,
                            callback: function(n) {
                              t.$set(e, "preferential", n);
                            },
                            expression: "item.preferential"
                          }
                        }),
                        t._v("\n    元\n\n    "),
                        r > 0
                          ? n(
                              "el-button",
                              {
                                staticClass: "ml10",
                                attrs: { type: "text" },
                                on: {
                                  click: function(e) {
                                    return t.delHandle(r);
                                  }
                                }
                              },
                              [t._v("删除")]
                            )
                          : t._e()
                      ],
                      1
                    );
                  }),
                  t._v(" "),
                  n(
                    "el-button",
                    {
                      attrs: { type: "text", icon: "el-icon-plus" },
                      on: { click: t.add }
                    },
                    [t._v("添加级")]
                  )
                ],
                2
              );
            },
            [],
            !1,
            null,
            "5c2cada0",
            null
          ).exports);
      function N(object, t) {
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
      function E(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? N(source, !0).forEach(function(e) {
                Object(r.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : N(source).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var $ = { limit: "", preferential: "", policyName: "" },
        L = {
          name: "SendOne",
          components: {},
          data: function() {
            return { rules: [] };
          },
          methods: {
            resetData: function() {
              this.rules = [E({}, $, { id: +new Date() })];
            },
            add: function() {
              this.rules.push(E({}, $, { id: +new Date() }));
            },
            delHandle: function(t) {
              this.rules.splice(t, 1);
            },
            valid: function() {
              var t = this;
              return new Promise(function(e, n) {
                for (var i = 0; i < t.rules.length; i++) {
                  var r = t.rules[i];
                  if (r.limit <= 0 || r.preferential <= 0)
                    return n("件数请输入大于0的数字");
                  t.rules[i].policyName = "买"
                    .concat(r.limit, "送")
                    .concat(r.preferential);
                }
                e(JSON.parse(JSON.stringify(t.rules)));
              });
            }
          }
        },
        Y =
          (n(961),
          Object(h.a)(
            L,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                { staticClass: "send-one" },
                [
                  t._l(t.rules, function(e, r) {
                    return n(
                      "div",
                      { staticClass: "mb10 item" },
                      [
                        t._v("\n    买\n    "),
                        n("el-input-number", {
                          staticClass: "limit-input",
                          attrs: { min: 0, "controls-position": "right" },
                          model: {
                            value: e.limit,
                            callback: function(n) {
                              t.$set(e, "limit", n);
                            },
                            expression: "item.limit"
                          }
                        }),
                        t._v("\n    件，送\n    "),
                        n("el-input-number", {
                          staticClass: "limit-input",
                          attrs: { min: 0, "controls-position": "right" },
                          model: {
                            value: e.preferential,
                            callback: function(n) {
                              t.$set(e, "preferential", n);
                            },
                            expression: "item.preferential"
                          }
                        }),
                        t._v("\n    件\n\n    "),
                        r > 0
                          ? n(
                              "el-button",
                              {
                                staticClass: "ml10",
                                attrs: { type: "text" },
                                on: {
                                  click: function(e) {
                                    return t.delHandle(r);
                                  }
                                }
                              },
                              [t._v("删除")]
                            )
                          : t._e()
                      ],
                      1
                    );
                  }),
                  t._v(" "),
                  n(
                    "el-button",
                    {
                      attrs: { type: "text", icon: "el-icon-plus" },
                      on: { click: t.add }
                    },
                    [t._v("添加级")]
                  )
                ],
                2
              );
            },
            [],
            !1,
            null,
            "58a4f833",
            null
          ).exports);
      function A(object, t) {
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
      function I(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? A(source, !0).forEach(function(e) {
                Object(r.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : A(source).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var K = { limit: "", discount: "", policyName: "" },
        B = {
          name: "Discount",
          components: {},
          data: function() {
            return { rules: [] };
          },
          methods: {
            resetData: function() {
              this.rules = [I({}, K, { id: +new Date() })];
            },
            add: function() {
              this.rules.push(I({}, K, { id: +new Date() }));
            },
            delHandle: function(t) {
              this.rules.splice(t, 1);
            },
            valid: function() {
              var t = this;
              return new Promise(function(e, n) {
                for (var i = 0; i < t.rules.length; i++) {
                  var r = t.rules[i];
                  if (r.limit <= 0) return n("满额设置请输入大于0的数字");
                  t.rules[i].policyName = "满"
                    .concat(r.limit, "元")
                    .concat(r.discount, "折");
                }
                e(JSON.parse(JSON.stringify(t.rules)));
              });
            }
          }
        },
        M =
          (n(962),
          Object(h.a)(
            B,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                { staticClass: "discount" },
                [
                  t._l(t.rules, function(e, r) {
                    return n(
                      "div",
                      { staticClass: "mb10 item" },
                      [
                        t._v("\n    满\n    "),
                        n("el-input-number", {
                          staticClass: "limit-input",
                          attrs: { min: 0, "controls-position": "right" },
                          model: {
                            value: e.limit,
                            callback: function(n) {
                              t.$set(e, "limit", n);
                            },
                            expression: "item.limit"
                          }
                        }),
                        t._v("\n    元，打\n    "),
                        n("el-input-number", {
                          staticClass: "limit-input",
                          attrs: {
                            "controls-position": "right",
                            precision: 1,
                            step: 1,
                            max: 10,
                            min: 1
                          },
                          model: {
                            value: e.discount,
                            callback: function(n) {
                              t.$set(e, "discount", n);
                            },
                            expression: "item.discount"
                          }
                        }),
                        t._v("\n    折\n\n    "),
                        r > 0
                          ? n(
                              "el-button",
                              {
                                staticClass: "ml10",
                                attrs: { min: 0, type: "text" },
                                on: {
                                  click: function(e) {
                                    return t.delHandle(r);
                                  }
                                }
                              },
                              [t._v("删除")]
                            )
                          : t._e()
                      ],
                      1
                    );
                  }),
                  t._v(" "),
                  n(
                    "el-button",
                    {
                      attrs: { type: "text", icon: "el-icon-plus" },
                      on: { click: t.add }
                    },
                    [t._v("添加级")]
                  )
                ],
                2
              );
            },
            [],
            !1,
            null,
            "49ec1128",
            null
          ).exports);
      function V(object, t) {
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
      function F(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? V(source, !0).forEach(function(e) {
                Object(r.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : V(source).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var H = { limit: 0, discount: "", policyName: "" },
        J = {
          name: "Discount",
          data: function() {
            return { rules: [] };
          },
          methods: {
            resetData: function() {
              this.rules = [F({}, H, { id: +new Date() })];
            },
            valid: function() {
              var t = this;
              return new Promise(function(e, n) {
                for (var i = 0; i < t.rules.length; i++) {
                  var r = t.rules[i];
                  t.rules[i].policyName = "单品打".concat(r.discount, "折");
                }
                e(JSON.parse(JSON.stringify(t.rules)));
              });
            }
          }
        },
        U =
          (n(963),
          Object(h.a)(
            J,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                { staticClass: "direct-discount" },
                t._l(t.rules, function(e, r) {
                  return n(
                    "div",
                    { staticClass: "mb10 item" },
                    [
                      t._v("\n    打\n    "),
                      n("el-input-number", {
                        staticClass: "limit-input",
                        attrs: {
                          "controls-position": "right",
                          precision: 1,
                          step: 1,
                          max: 10,
                          min: 1
                        },
                        model: {
                          value: e.discount,
                          callback: function(n) {
                            t.$set(e, "discount", n);
                          },
                          expression: "item.discount"
                        }
                      }),
                      t._v("\n    折\n\n    "),
                      r > 0
                        ? n(
                            "el-button",
                            {
                              staticClass: "ml10",
                              attrs: { min: 0, type: "text" },
                              on: {
                                click: function(e) {
                                  return t.delHandle(r);
                                }
                              }
                            },
                            [t._v("删除")]
                          )
                        : t._e()
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
            "73682d74",
            null
          ).exports),
        G = (n(53), n(233), n(88)),
        z = n.n(G),
        R = (n(55), n(36)),
        Q = n.n(R),
        W = n(964),
        X = n.n(W),
        Z = {
          highlightCurrent: !0,
          props: { children: "children", label: "name" },
          nodeKey: "id"
        },
        tt = /-(\w)/g,
        et = {
          name: "ElDataTree",
          components: { "el-tooltip": z.a },
          props: {
            title: { type: String, default: "" },
            hasBorder: { type: Boolean, default: !0 },
            treeAttrs: {
              type: Object,
              default: function() {
                return {};
              }
            },
            url: { type: String, default: "" },
            parentKey: { type: String, default: "parentId" },
            dataPath: { type: String, default: "payload.content" },
            showFilter: { type: Boolean, default: !1 },
            checkedKeys: {
              type: Array,
              default: function() {
                return [];
              }
            },
            extraButtons: {
              type: Array,
              default: function() {
                return [];
              }
            },
            extraButtonsType: { type: String, default: "dropdown" },
            form: {
              type: Array,
              default: function() {
                return [];
              }
            },
            formAttrs: {
              type: Object,
              default: function() {
                return {};
              }
            },
            extraParams: {
              type: Object,
              default: function() {
                return {};
              }
            },
            customQuery: {
              type: Object,
              default: function() {
                return {};
              }
            },
            hasOperation: { type: Boolean, default: !0 },
            hasTitle: { type: Boolean, default: !1 },
            hasHeader: { type: Boolean, default: !1 },
            hasDelete: { type: Boolean, default: !0 },
            hasNew: { type: Boolean, default: !0 },
            hasEdit: { type: Boolean, default: !0 },
            transform: { type: Function },
            onNew: { type: Function },
            onEdit: { type: Function },
            onDelete: { type: Function },
            beforeConfirm: {
              type: Function,
              default: function() {
                return Promise.resolve();
              }
            },
            newText: { type: String, default: "新增" },
            editText: { type: String, default: "修改" },
            deleteText: { type: String, default: "删除" }
          },
          data: function() {
            return {
              treeData: [],
              filterText: "",
              loading: !1,
              dialogTitle: "",
              dialogVisible: !1,
              isNew: !0,
              isEdit: !1,
              confirmLoading: !1,
              row: {},
              expandedKeys: [],
              allTreeData: []
            };
          },
          computed: {
            camelizeTreeAttrs: function() {
              var t = this.treeAttrs;
              return Object.keys(t).reduce(function(e, n) {
                return (
                  (e[
                    n.replace(tt, function(t, e) {
                      return e ? e.toUpperCase() : "";
                    })
                  ] = t[n]),
                  e
                );
              }, {});
            },
            treeAttributes: function() {
              return Object.assign({}, Z, this.camelizeTreeAttrs);
            }
          },
          watch: {
            url: {
              handler: function() {
                this.fetchData();
              },
              immediate: !0
            },
            filterText: function(t) {
              this.$refs.tree.filter(t);
            },
            checkedKeys: function(t) {
              this.updateCheckedKeys(t);
            }
          },
          mounted: function() {
            this.treeAttributes.defaultExpandedKeys &&
              (this.expandedKeys = this.expandedKeys.concat(
                this.treeAttributes.defaultExpandedKeys
              ));
          },
          methods: {
            filterTreeData: function(t) {
              var e = this;
              X()(function() {
                var n = JSON.parse(JSON.stringify(e.allTreeData));
                if (t) {
                  var data = e.getDataByKeyword(n, t);
                  e.updateTreeData(data);
                } else e.updateTreeData(n);
              }, 50)();
            },
            getDataByKeyword: function(t, e) {
              var n = this;
              return t.filter(function(t) {
                return (
                  t.children &&
                    (t.children = n.getDataByKeyword(t.children, e)),
                  t.name.toLowerCase().indexOf(e.toLowerCase()) > -1 ||
                    (t.children && t.children.length > 0)
                );
              });
            },
            updateTreeData: function(data) {
              this.treeData = data;
            },
            fetchData: function() {
              var t = this;
              if (!this.url)
                return console.warn("ELDataTree: url 为空, 不发送请求"), !1;
              (this.loading = !0),
                this.$axios
                  .get(this.url, { params: this.customQuery })
                  .then(function(e) {
                    var n = Q()(e, t.dataPath) || [];
                    (t.treeData = (t.transform && t.transform(n)) || n),
                      t.updateCheckedKeys(t.checkedKeys),
                      t.$emit("loaded", t.treeData, e),
                      (t.allTreeData = t.treeData);
                  })
                  .catch(function(e) {
                    t.$emit("error", e);
                  })
                  .finally(function() {
                    t.loading = !1;
                  });
            },
            filterNode: function(t, data) {
              return (
                !t || -1 !== data[this.treeAttributes.props.label].indexOf(t)
              );
            },
            getTree: function() {
              return this.$refs.tree;
            },
            handleCheckChange: function() {
              var t = this.$refs.tree.getCheckedNodes(!1, !0),
                e = this.treeAttributes.nodeKey;
              this.$emit(
                "update:checkedKeys",
                t.map(function(t) {
                  return t[e];
                })
              );
            },
            updateCheckedKeys: function(t) {
              var e = this.treeAttributes,
                n = (function t(e, n) {
                  return e.reduce(function(e, r) {
                    return e.concat(r[n] ? t(r[n]) : r);
                  }, []);
                })(this.treeData, e.props.children)
                  .filter(function(n) {
                    return t.indexOf(n[e.nodeKey]) > -1;
                  })
                  .map(function(t) {
                    return t[e.nodeKey];
                  });
              this.$refs.tree.setCheckedKeys(n);
            },
            handleCommand: function(t, data, e) {
              var n = {
                new: this.onDefaultNew,
                edit: this.onDefaultEdit,
                delete: this.onDefaultDelete
              };
              if (n[t]) n[t](data, e);
              else {
                var r = this.extraButtons.find(function(e) {
                  return e.text === t;
                });
                r && "function" == typeof r.atClick && r.atClick(data, e);
              }
            },
            onDefaultNew: function() {
              var data =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              (this.row = data),
                (this.isNew = !0),
                (this.isEdit = !1),
                (this.dialogTitle = this.newText),
                (this.dialogVisible = !0);
            },
            onDefaultEdit: function(data) {
              var t = this;
              (this.row = data),
                (this.isNew = !1),
                (this.isEdit = !0),
                (this.dialogTitle = this.editText),
                (this.dialogVisible = !0),
                this.$nextTick(function() {
                  t.$refs.dialogForm.updateForm(data);
                });
            },
            onDefaultDelete: function(data, t) {
              var e = this;
              this.$confirm("确认删除吗", "提示", {
                type: "warning",
                beforeClose: function(n, r, o) {
                  "confirm" === n
                    ? ((r.confirmButtonLoading = !0),
                      (
                        (e.onDelete && e.onDelete(data, t)) ||
                        e.$axios.delete(
                          e.url + "/" + data[e.treeAttributes.nodeKey]
                        )
                      )
                        .then(function() {
                          o(), e.showMessage(), e.fetchData();
                        })
                        .catch(function(t) {
                          e.$emit("error", t);
                        })
                        .finally(function() {
                          r.confirmButtonLoading = !1;
                        }))
                    : o();
                }
              }).catch(function(t) {
                e.$emit("error", t);
              });
            },
            handleNodeExpand: function(data) {
              var t = this.treeAttributes.nodeKey;
              this.expandedKeys.push(data[t]);
            },
            handleNodeCollapse: function(data) {
              var t = this.treeAttributes.nodeKey;
              this.expandedKeys = this.expandedKeys.filter(function(e) {
                return e !== data[t];
              });
            },
            cancel: function() {
              this.dialogVisible = !1;
            },
            confirm: function() {
              var t = this;
              this.$refs.dialogForm.validate(function(e) {
                if (!e) return !1;
                var n = t.isNew ? t.treeAttributes.nodeKey : t.parentKey,
                  data = Object.assign(
                    { parentId: t.row[n] },
                    t.$refs.dialogForm.getFormValue(),
                    t.extraParams
                  );
                t.beforeConfirm(data, t.isNew)
                  .then(function() {
                    var e = "isNew",
                      n = "onNew";
                    if (
                      (t.isEdit && ((e = "isEdit"), (n = "onEdit")),
                      t[e] && t[n])
                    )
                      return (
                        (t.confirmLoading = !0),
                        void t[n](data, t.row)
                          .then(function(e) {
                            t.fetchData(), t.showMessage(!0), t.cancel();
                          })
                          .catch(function(e) {
                            t.$emit("error", e);
                          })
                          .finally(function(e) {
                            t.confirmLoading = !1;
                          })
                      );
                    var r = "post",
                      o = t.url;
                    t.isEdit &&
                      ((r = "put"),
                      (o += "/".concat(t.row[t.treeAttributes.nodeKey]))),
                      (t.confirmLoading = !0),
                      t.$axios[r](o, data, { params: t.customQuery })
                        .then(function(e) {
                          t.showMessage(), t.fetchData(), t.cancel();
                        })
                        .catch(function(e) {
                          t.$emit("error", e);
                        })
                        .finally(function(e) {
                          t.confirmLoading = !1;
                        });
                  })
                  .catch(function(t) {});
              });
            },
            closeDialog: function() {
              (this.isNew = !1),
                (this.isEdit = !1),
                (this.confirmLoading = !1),
                this.$refs.dialogForm.resetFields();
            },
            showMessage: function() {
              var t =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              t
                ? this.$message({ type: "success", message: "操作成功" })
                : this.$message({ type: "error", message: "操作失败" });
            }
          }
        },
        nt =
          (n(965),
          Object(h.a)(
            et,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                {
                  staticClass: "el-data-tree",
                  class: { "has-border": t.hasBorder }
                },
                [
                  t.hasTitle || t.hasHeader
                    ? n("header", { staticClass: "header" }, [
                        n(
                          "div",
                          { staticClass: "header-left" },
                          [
                            t._t("title", [
                              n("p", { staticClass: "header-title" }, [
                                t._v(t._s(t.title))
                              ])
                            ])
                          ],
                          2
                        ),
                        t._v(" "),
                        n("div", { staticClass: "header-right" }, [
                          n(
                            "span",
                            {
                              staticClass: "header-new-btn",
                              on: { click: t.onDefaultNew }
                            },
                            [
                              t._t("header-new-btn", [
                                n(
                                  "el-button",
                                  { attrs: { type: "text", size: "mini" } },
                                  [n("i", { staticClass: "el-icon-plus" })]
                                )
                              ])
                            ],
                            2
                          ),
                          t._v(" "),
                          n(
                            "span",
                            { staticClass: "header-extra-block" },
                            [t._t("header-extra-block")],
                            2
                          )
                        ])
                      ])
                    : t._e(),
                  t._v(" "),
                  n(
                    "section",
                    { staticClass: "body" },
                    [
                      t.showFilter
                        ? n("el-input", {
                            attrs: {
                              placeholder: "查询",
                              "suffix-icon": "el-icon-search",
                              clearable: ""
                            },
                            model: {
                              value: t.filterText,
                              callback: function(e) {
                                t.filterText = e;
                              },
                              expression: "filterText"
                            }
                          })
                        : t._e(),
                      t._v(" "),
                      n(
                        "el-tree",
                        t._g(
                          t._b(
                            {
                              directives: [
                                {
                                  name: "loading",
                                  rawName: "v-loading",
                                  value: t.loading,
                                  expression: "loading"
                                }
                              ],
                              ref: "tree",
                              staticClass: "data-tree",
                              attrs: {
                                data: t.treeData,
                                filterNodeMethod: t.filterNode,
                                defaultExpandedKeys: t.expandedKeys
                              },
                              on: {
                                "node-expand": t.handleNodeExpand,
                                "node-collapse": t.handleNodeCollapse,
                                "check-change": t.handleCheckChange
                              },
                              scopedSlots: t._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(e) {
                                      var r = e.node,
                                        data = e.data;
                                      return n(
                                        "span",
                                        { staticClass: "custom-tree-node" },
                                        [
                                          n(
                                            "el-tooltip",
                                            {
                                              staticClass: "item",
                                              attrs: {
                                                effect: "dark",
                                                content: r.label,
                                                placement: "top"
                                              }
                                            },
                                            [
                                              n(
                                                "span",
                                                {
                                                  staticClass:
                                                    "custom-tree-node-label"
                                                },
                                                [
                                                  t._t(
                                                    "node-label",
                                                    [t._v(t._s(r.label))],
                                                    { data: data }
                                                  )
                                                ],
                                                2
                                              )
                                            ]
                                          ),
                                          t._v(" "),
                                          t.hasOperation
                                            ? n(
                                                "span",
                                                {
                                                  on: {
                                                    click: function(t) {
                                                      return t.stopPropagation();
                                                    }
                                                  }
                                                },
                                                [
                                                  "text" === t.extraButtonsType
                                                    ? [
                                                        t.hasNew
                                                          ? n(
                                                              "el-button",
                                                              {
                                                                attrs: {
                                                                  type: "text"
                                                                },
                                                                on: {
                                                                  click: function(
                                                                    e
                                                                  ) {
                                                                    return t.handleCommand(
                                                                      "new",
                                                                      r,
                                                                      data
                                                                    );
                                                                  }
                                                                }
                                                              },
                                                              [
                                                                t._v(
                                                                  t._s(
                                                                    t.newText
                                                                  )
                                                                )
                                                              ]
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        t.hasEdit
                                                          ? n(
                                                              "el-button",
                                                              {
                                                                attrs: {
                                                                  type: "text"
                                                                },
                                                                on: {
                                                                  click: function(
                                                                    e
                                                                  ) {
                                                                    return t.handleCommand(
                                                                      "edit",
                                                                      r,
                                                                      data
                                                                    );
                                                                  }
                                                                }
                                                              },
                                                              [
                                                                t._v(
                                                                  t._s(
                                                                    t.editText
                                                                  )
                                                                )
                                                              ]
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        t._l(
                                                          t.extraButtons.filter(
                                                            function(t) {
                                                              return (
                                                                !t.show ||
                                                                t.show(data, r)
                                                              );
                                                            }
                                                          ),
                                                          function(e, i) {
                                                            return n(
                                                              "el-button",
                                                              t._b(
                                                                {
                                                                  key: i,
                                                                  attrs: {
                                                                    type: "text"
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      n
                                                                    ) {
                                                                      return t.handleCommand(
                                                                        e.text,
                                                                        r,
                                                                        data
                                                                      );
                                                                    }
                                                                  }
                                                                },
                                                                "el-button",
                                                                e,
                                                                !1
                                                              ),
                                                              [
                                                                t._v(
                                                                  t._s(e.text)
                                                                )
                                                              ]
                                                            );
                                                          }
                                                        ),
                                                        t._v(" "),
                                                        t.hasDelete
                                                          ? n(
                                                              "el-button",
                                                              {
                                                                staticClass:
                                                                  "delete-button",
                                                                attrs: {
                                                                  type: "text"
                                                                },
                                                                on: {
                                                                  click: function(
                                                                    e
                                                                  ) {
                                                                    return t.handleCommand(
                                                                      "delete",
                                                                      r,
                                                                      data
                                                                    );
                                                                  }
                                                                }
                                                              },
                                                              [
                                                                t._v(
                                                                  t._s(
                                                                    t.deleteText
                                                                  )
                                                                )
                                                              ]
                                                            )
                                                          : t._e()
                                                      ]
                                                    : n(
                                                        "el-dropdown",
                                                        {
                                                          attrs: {
                                                            trigger: "click"
                                                          },
                                                          on: {
                                                            command: function(
                                                              e
                                                            ) {
                                                              return t.handleCommand(
                                                                e,
                                                                data,
                                                                r
                                                              );
                                                            }
                                                          }
                                                        },
                                                        [
                                                          n(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "el-dropdown-link"
                                                            },
                                                            [
                                                              n("i", {
                                                                staticClass:
                                                                  "el-icon-more"
                                                              })
                                                            ]
                                                          ),
                                                          t._v(" "),
                                                          n(
                                                            "el-dropdown-menu",
                                                            {
                                                              attrs: {
                                                                slot: "dropdown"
                                                              },
                                                              slot: "dropdown"
                                                            },
                                                            [
                                                              t.hasNew
                                                                ? n(
                                                                    "el-dropdown-item",
                                                                    {
                                                                      attrs: {
                                                                        command:
                                                                          "new"
                                                                      }
                                                                    },
                                                                    [
                                                                      t._v(
                                                                        t._s(
                                                                          t.newText
                                                                        )
                                                                      )
                                                                    ]
                                                                  )
                                                                : t._e(),
                                                              t._v(" "),
                                                              t.hasEdit
                                                                ? n(
                                                                    "el-dropdown-item",
                                                                    {
                                                                      attrs: {
                                                                        command:
                                                                          "edit"
                                                                      }
                                                                    },
                                                                    [
                                                                      t._v(
                                                                        t._s(
                                                                          t.editText
                                                                        )
                                                                      )
                                                                    ]
                                                                  )
                                                                : t._e(),
                                                              t._v(" "),
                                                              t._l(
                                                                t.extraButtons.filter(
                                                                  function(t) {
                                                                    return (
                                                                      !t.show ||
                                                                      t.show(
                                                                        data,
                                                                        r
                                                                      )
                                                                    );
                                                                  }
                                                                ),
                                                                function(e, i) {
                                                                  return n(
                                                                    "el-dropdown-item",
                                                                    t._b(
                                                                      {
                                                                        key: i,
                                                                        attrs: {
                                                                          command:
                                                                            e.text
                                                                        }
                                                                      },
                                                                      "el-dropdown-item",
                                                                      e,
                                                                      !1
                                                                    ),
                                                                    [
                                                                      t._v(
                                                                        t._s(
                                                                          e.text
                                                                        )
                                                                      )
                                                                    ]
                                                                  );
                                                                }
                                                              ),
                                                              t._v(" "),
                                                              t.hasDelete
                                                                ? n(
                                                                    "el-dropdown-item",
                                                                    {
                                                                      attrs: {
                                                                        command:
                                                                          "delete"
                                                                      }
                                                                    },
                                                                    [
                                                                      t._v(
                                                                        t._s(
                                                                          t.deleteText
                                                                        )
                                                                      )
                                                                    ]
                                                                  )
                                                                : t._e()
                                                            ],
                                                            2
                                                          )
                                                        ],
                                                        1
                                                      )
                                                ],
                                                2
                                              )
                                            : t._e()
                                        ],
                                        1
                                      );
                                    }
                                  }
                                ],
                                null,
                                !0
                              )
                            },
                            "el-tree",
                            t.treeAttributes,
                            !1
                          ),
                          t.$listeners
                        )
                      )
                    ],
                    1
                  ),
                  t._v(" "),
                  n(
                    "el-dialog",
                    {
                      attrs: { title: t.dialogTitle, visible: t.dialogVisible },
                      on: {
                        "update:visible": function(e) {
                          t.dialogVisible = e;
                        },
                        close: t.closeDialog
                      }
                    },
                    [
                      n(
                        "el-form-renderer",
                        t._b(
                          { ref: "dialogForm", attrs: { content: t.form } },
                          "el-form-renderer",
                          t.formAttrs,
                          !1
                        ),
                        [t._t("form")],
                        2
                      ),
                      t._v(" "),
                      n(
                        "div",
                        { attrs: { slot: "footer" }, slot: "footer" },
                        [
                          n(
                            "el-button",
                            {
                              attrs: { size: "small" },
                              on: { click: t.cancel }
                            },
                            [t._v("取 消")]
                          ),
                          t._v(" "),
                          n(
                            "el-button",
                            {
                              attrs: {
                                type: "primary",
                                loading: t.confirmLoading,
                                size: "small"
                              },
                              on: { click: t.confirm }
                            },
                            [t._v("确 定")]
                          )
                        ],
                        1
                      )
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
        it = n(106);
      function at(object, t) {
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
      function ot(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? at(source, !0).forEach(function(e) {
                Object(r.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : at(source).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var st = {
          name: "GoodsSelect",
          components: { ElDataTree: nt },
          props: {
            minStock: { type: Number, default: 0 },
            removeSpecialProduce: { type: Boolean, default: !1 }
          },
          data: function() {
            return {
              data: [],
              dialogVisible: !1,
              treeConfig: {
                url: "".concat(it.c.findAll, "?collection=goods&clean=true"),
                dataPath: "data.payload",
                showFilter: !0,
                hasOperation: !1,
                hasBorder: !1,
                treeAttrs: {
                  "show-checkbox": !0,
                  nodeKey: "id",
                  defaultExpandAll: !0
                }
              },
              columns: [
                { prop: "code", label: "商品编号" },
                { prop: "name", label: "商品名称" },
                { prop: "brandName", label: "品牌" },
                { prop: "categoryName", label: "分类" },
                { prop: "price", label: "价格" },
                { prop: "stock", label: "库存" }
              ]
            };
          },
          methods: {
            resetChecked: function() {
              (this.$refs.tree.$data.filterText = ""),
                this.$refs.tree.$children.forEach(function(t) {
                  t.setChecked && t.setCheckedKeys([]);
                });
            },
            customQuery: function() {
              return { stock: 1e3 };
            },
            show: function() {
              (this.dialogVisible = !0),
                (this.data = []),
                this.$nextTick(function() {
                  this.resetChecked();
                });
            },
            nextStep: function() {
              0 != this.data.length
                ? (this.$emit("onSelectGoods", this.data.slice(0)),
                  (this.dialogVisible = !1))
                : this.$message.error("请选择商品范围");
            },
            formatTreeData: function(data) {
              for (var i = 0; i < data.length; i++)
                data[i].children
                  ? ((data[i].children = this.formatTreeData(data[i].children)),
                    0 == data[i].children.length && (data.splice(i, 1), --i))
                  : data[i].stock < this.minStock && (data.splice(i, 1), --i);
              return data;
            },
            data2Tree: function(data) {
              var t = [],
                e = {},
                n = 0,
                o = 1e3;
              return (
                data.forEach(function(l) {
                  var c = l.categoryName,
                    d = l.brandName;
                  if ((delete l._id, e[c])) {
                    var f = e[c].index,
                      m = t[f],
                      h = e[c].brandMap[d];
                    if (h) {
                      var v = h.index;
                      t[f].children[v].children.push(ot({}, l));
                    } else
                      (e[c].brandMap[d] = { index: m.children.length }),
                        t[f].children.push({
                          id: ++o,
                          name: d,
                          parentId: n,
                          children: [ot({}, l)]
                        });
                  } else (e[c] = { index: t.length, brandMap: Object(r.a)({}, d, { index: 0 }) }), t.push({ id: ++n, name: c, children: [{ id: ++o, name: d, parentId: n, children: [ot({}, l)] }] });
                }),
                t
              );
            },
            onLoaded: function(data, t) {
              var e = this.data2Tree(JSON.parse(JSON.stringify(data)));
              this.formatTreeData(e).filter(function(i) {
                return i.children.length > 0;
              }),
                this.$refs.tree.updateTreeData(e);
            },
            onCheck: function(data, t) {
              this.data = t.checkedNodes.filter(function(t) {
                return void 0 === t.children;
              });
            },
            onDelete: function(t) {
              (this.data = this.data.filter(function(e) {
                return e.id !== t.id;
              })),
                this.$refs.tree.$children.forEach(function(e) {
                  e.setChecked && e.setChecked(t.id, !1);
                });
            },
            getValue: function() {
              return this.data;
            }
          }
        },
        lt =
          (n(966),
          Object(h.a)(
            st,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                { staticClass: "goods-select" },
                [
                  n(
                    "el-dialog",
                    {
                      attrs: {
                        title: "设置活动商品范围",
                        visible: t.dialogVisible,
                        "show-close": !1,
                        "close-on-press-escape": !1,
                        "close-on-click-modal": !1,
                        width: "1100px"
                      },
                      on: {
                        "update:visible": function(e) {
                          t.dialogVisible = e;
                        }
                      }
                    },
                    [
                      n(
                        "div",
                        { staticClass: "left-container" },
                        [
                          n(
                            "el-data-tree",
                            t._b(
                              {
                                ref: "tree",
                                attrs: { "node-key": "id" },
                                on: { check: t.onCheck, loaded: t.onLoaded }
                              },
                              "el-data-tree",
                              t.treeConfig,
                              !1
                            )
                          )
                        ],
                        1
                      ),
                      t._v(" "),
                      n("div", { staticClass: "right-container" }, [
                        n("p", [t._v("已选择商品")]),
                        t._v(" "),
                        n(
                          "div",
                          { staticClass: "table" },
                          [
                            n(
                              "el-table",
                              { attrs: { data: t.data, border: "" } },
                              [
                                t._l(t.columns, function(e, r) {
                                  return n(
                                    "el-table-column",
                                    t._b({ key: r }, "el-table-column", e, !1)
                                  );
                                }),
                                t._v(" "),
                                n("el-table-column", {
                                  attrs: { label: "操作" },
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function(e) {
                                        return [
                                          n(
                                            "el-button",
                                            {
                                              attrs: {
                                                type: "text",
                                                size: "mini"
                                              },
                                              on: {
                                                click: function(n) {
                                                  return t.onDelete(e.row);
                                                }
                                              }
                                            },
                                            [t._v("移除")]
                                          )
                                        ];
                                      }
                                    }
                                  ])
                                })
                              ],
                              2
                            )
                          ],
                          1
                        )
                      ]),
                      t._v(" "),
                      n(
                        "span",
                        {
                          staticClass: "dialog-footer",
                          attrs: { slot: "footer" },
                          slot: "footer"
                        },
                        [
                          n(
                            "el-button",
                            {
                              on: {
                                click: function(e) {
                                  t.dialogVisible = !1;
                                }
                              }
                            },
                            [t._v("取 消")]
                          ),
                          t._v(" "),
                          n(
                            "el-button",
                            {
                              attrs: { type: "primary" },
                              on: { click: t.nextStep }
                            },
                            [t._v("下一步")]
                          )
                        ],
                        1
                      )
                    ]
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
          ).exports);
      function ct(object, t) {
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
      function ut(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ct(source, !0).forEach(function(e) {
                Object(r.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : ct(source).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var ft = {
          limitTimes: !1,
          maxTimes: "",
          isOriginPrice: !1,
          useUserDiscount: !1,
          removeSpecialProduce: !1,
          title: "",
          fusion: null
        },
        pt = {
          name: "PolicyDialog",
          components: {
            "el-alert": _.a,
            SendLow: P,
            "t-deduction": T,
            SendOne: Y,
            "t-discount": M,
            GoodsSelect: lt,
            DirectDiscount: U
          },
          props: {
            type: { type: [Number, String], default: 0 },
            minStock: { type: Number }
          },
          data: function() {
            return {
              POLICY_TYPE: f.e,
              dialogVisible: !1,
              form: ut({}, ft),
              snapData: {},
              errorMsg: "",
              showErrorMsg: !1,
              refName: "policy",
              timer: null,
              timerWait: 3e3
            };
          },
          computed: {
            title: function() {
              return f.f[this.type] || "";
            },
            isSendLow: function() {
              return this.type == f.e.sendLow;
            },
            isDeduction: function() {
              return this.type == f.e.deduction;
            },
            activeRef: function() {
              return this.$refs[this.refName + this.type];
            }
          },
          methods: {
            onSelectGoods: function(data) {
              this.$emit(
                "handleUpdateData",
                Object.assign({}, this.snapData, {
                  goods: data,
                  strategyId: +new Date()
                })
              ),
                (this.dialogVisible = !1);
            },
            nextStep: function() {
              var t = this;
              if ("" == this.form.title) return this.alert("请输入促销标题");
              this.activeRef
                .valid()
                .then(function(e) {
                  (t.snapData = Object.assign({}, t.form, {
                    rules: e,
                    type: t.type
                  })),
                    t.$refs.goodsSelect.show();
                })
                .catch(function(e) {
                  t.alert(e), t.setTimer();
                });
            },
            resetData: function() {
              this.form = ut({}, ft);
            },
            setTimer: function() {
              window.clearTimeout(this.timer),
                (this.timer = setTimeout(this.msgClose, this.timerWait));
            },
            msgClose: function() {
              this.showErrorMsg = !1;
            },
            alert: function(t) {
              this.msgClose(),
                this.$nextTick(function() {
                  (this.errorMsg = t), (this.showErrorMsg = !0);
                });
            },
            show: function() {
              this.resetData(),
                (this.dialogVisible = !0),
                this.$nextTick(function() {
                  this.activeRef.resetData();
                });
            }
          }
        },
        mt =
          (n(967),
          {
            name: "AddPolicy",
            components: {
              PolicyDialog: Object(h.a)(
                pt,
                function() {
                  var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                  return n(
                    "div",
                    { staticClass: "policy-dialog" },
                    [
                      n(
                        "el-dialog",
                        {
                          attrs: {
                            title: t.title,
                            visible: t.dialogVisible,
                            "show-close": !1,
                            "close-on-press-escape": !1,
                            "close-on-click-modal": !1,
                            width: "750px"
                          },
                          on: {
                            "update:visible": function(e) {
                              t.dialogVisible = e;
                            }
                          }
                        },
                        [
                          n(
                            "transition",
                            { attrs: { name: "fade" } },
                            [
                              t.showErrorMsg
                                ? n("el-alert", {
                                    staticClass: "error-tip",
                                    attrs: { title: t.errorMsg, type: "error" },
                                    on: { close: t.msgClose }
                                  })
                                : t._e()
                            ],
                            1
                          ),
                          t._v(" "),
                          n(
                            "div",
                            { staticClass: "content-box" },
                            [
                              n(
                                "el-form",
                                {
                                  ref: "form",
                                  attrs: {
                                    model: t.form,
                                    "label-width": "100px"
                                  }
                                },
                                [
                                  n(
                                    "el-form-item",
                                    { attrs: { label: "促销标题：" } },
                                    [
                                      n("el-input", {
                                        staticClass: "title",
                                        attrs: {
                                          placeholder: "请输入促销标题"
                                        },
                                        model: {
                                          value: t.form.title,
                                          callback: function(e) {
                                            t.$set(t.form, "title", e);
                                          },
                                          expression: "form.title"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  t._v(" "),
                                  n(
                                    "el-form-item",
                                    { attrs: { label: "优惠设置：" } },
                                    [
                                      t.type == t.POLICY_TYPE.sendLow
                                        ? n("send-low", {
                                            ref:
                                              t.refName + t.POLICY_TYPE.sendLow
                                          })
                                        : t._e(),
                                      t._v(" "),
                                      t.type == t.POLICY_TYPE.deduction
                                        ? n("t-deduction", {
                                            ref:
                                              t.refName +
                                              t.POLICY_TYPE.deduction
                                          })
                                        : t._e(),
                                      t._v(" "),
                                      t.type == t.POLICY_TYPE.sendOne
                                        ? n("send-one", {
                                            ref:
                                              t.refName + t.POLICY_TYPE.sendOne
                                          })
                                        : t._e(),
                                      t._v(" "),
                                      t.type == t.POLICY_TYPE.discount
                                        ? n("t-discount", {
                                            ref:
                                              t.refName + t.POLICY_TYPE.discount
                                          })
                                        : t._e(),
                                      t._v(" "),
                                      t.type == t.POLICY_TYPE.direct_discount
                                        ? n("direct-discount", {
                                            ref:
                                              t.refName +
                                              t.POLICY_TYPE.direct_discount
                                          })
                                        : t._e()
                                    ],
                                    1
                                  ),
                                  t._v(" "),
                                  n(
                                    "el-form-item",
                                    { attrs: { label: "其他要求：" } },
                                    [
                                      n(
                                        "p",
                                        [
                                          n(
                                            "el-checkbox",
                                            { attrs: { value: !0 } },
                                            [t._v("不与会员折扣同享")]
                                          )
                                        ],
                                        1
                                      ),
                                      t._v(" "),
                                      n(
                                        "p",
                                        [
                                          n(
                                            "el-checkbox",
                                            { attrs: { value: !0 } },
                                            [t._v("特价商品不参与此优惠")]
                                          )
                                        ],
                                        1
                                      ),
                                      t._v(" "),
                                      n(
                                        "p",
                                        [
                                          t._v(
                                            "\n            参与次数：\n            "
                                          ),
                                          n(
                                            "el-radio-group",
                                            { attrs: { value: 0 } },
                                            [
                                              n(
                                                "el-radio",
                                                { attrs: { label: 0 } },
                                                [t._v("不限定")]
                                              ),
                                              t._v(" "),
                                              n(
                                                "el-radio",
                                                { attrs: { label: 1 } },
                                                [t._v("按人限定")]
                                              ),
                                              t._v(" "),
                                              n(
                                                "el-radio",
                                                { attrs: { label: 2 } },
                                                [t._v("按订单限定")]
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          t._v(" "),
                          n(
                            "span",
                            {
                              staticClass: "dialog-footer",
                              attrs: { slot: "footer" },
                              slot: "footer"
                            },
                            [
                              n(
                                "el-button",
                                {
                                  on: {
                                    click: function(e) {
                                      t.dialogVisible = !1;
                                    }
                                  }
                                },
                                [t._v("取 消")]
                              ),
                              t._v(" "),
                              n(
                                "el-button",
                                {
                                  attrs: { type: "primary" },
                                  on: { click: t.nextStep }
                                },
                                [t._v("下一步")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      t._v(" "),
                      n("goods-select", {
                        ref: "goodsSelect",
                        attrs: {
                          minStock: t.minStock,
                          removeSpecialProduce: t.form.removeSpecialProduce
                        },
                        on: { onSelectGoods: t.onSelectGoods }
                      })
                    ],
                    1
                  );
                },
                [],
                !1,
                null,
                "1d769444",
                null
              ).exports
            },
            props: {
              disabled: { type: Boolean, default: !1 },
              minStock: { type: Number }
            },
            data: function() {
              return { POLICY_LIST: f.d, POLICY_TYPE: f.e, selectType: 0 };
            },
            methods: {
              addHandle: function(t) {
                (this.selectType = t), this.$refs.policyDialog.show();
              },
              handleUpdateData: function(data) {
                this.$emit("handleUpdateData", data);
              }
            }
          }),
        ht =
          (n(968),
          Object(h.a)(
            mt,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                { staticClass: "add-policy" },
                [
                  n(
                    "div",
                    { staticClass: "policy-list" },
                    t._l(t.POLICY_LIST, function(e) {
                      return n("div", { key: e.type, staticClass: "item" }, [
                        n("p", { staticClass: "name" }, [t._v(t._s(e.name))]),
                        t._v(" "),
                        n("p", {
                          staticClass: "desc",
                          domProps: { innerHTML: t._s(e.desc) }
                        }),
                        t._v(" "),
                        n(
                          "p",
                          [
                            n(
                              "el-button",
                              {
                                attrs: { type: "primary", size: "mini" },
                                on: {
                                  click: function(n) {
                                    return t.addHandle(e.type);
                                  }
                                }
                              },
                              [t._v("添加")]
                            )
                          ],
                          1
                        )
                      ]);
                    }),
                    0
                  ),
                  t._v(" "),
                  n("policy-dialog", {
                    ref: "policyDialog",
                    attrs: { type: t.selectType, minStock: t.minStock },
                    on: { handleUpdateData: t.handleUpdateData }
                  })
                ],
                1
              );
            },
            [],
            !1,
            null,
            "d711808a",
            null
          ).exports),
        vt = (n(523), n(224)),
        yt = n.n(vt),
        bt = (n(969), n(970)),
        gt = n.n(bt),
        _t = (n(971), n(972)),
        Ot = n.n(_t);
      function wt(object, t) {
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
      var xt = {
          name: "PolicyItem",
          props: {
            data: {
              type: Object,
              default: function() {
                return { goods: [] };
              }
            },
            cateList: {
              type: Object,
              default: function() {
                return {};
              }
            },
            list: {
              type: Array,
              default: function() {
                return [];
              }
            },
            index: { type: Number },
            readonly: { type: Boolean, default: !1 }
          },
          watch: {
            fusion: function(t) {
              this.$emit("fusionChange", t, this.index);
            }
          },
          data: function() {
            return { POLICY_TYPE: f.e, fusion: "" };
          },
          computed: {
            selectList: function() {
              var t = this;
              return this.list
                .filter(function(t) {
                  return t.type == f.e.deduction;
                })
                .map(function(e) {
                  var n = e.goods.map(function(g) {
                      return g.id;
                    }),
                    o = t.data.goods.map(function(g) {
                      return g.id;
                    }),
                    l =
                      Array.from(new Set([].concat(n, o))).length ===
                      n.length + o.length;
                  return (function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                      var source = null != arguments[i] ? arguments[i] : {};
                      i % 2
                        ? wt(source, !0).forEach(function(e) {
                            Object(r.a)(t, e, source[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(source)
                          )
                        : wt(source).forEach(function(e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(source, e)
                            );
                          });
                    }
                    return t;
                  })({}, e, {
                    title: ""
                      .concat(e.title)
                      .concat(l ? " 【商品范围不满足】" : ""),
                    disabled: l
                  });
                });
            }
          }
        },
        Ct =
          (n(973),
          {
            name: "PolicyList",
            components: {
              PolicyItem: Object(h.a)(
                xt,
                function() {
                  var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                  return n(
                    "div",
                    { staticClass: "policy-item" },
                    [
                      n(
                        "el-form",
                        {
                          attrs: {
                            "label-suffix": "：",
                            size: "mini",
                            "label-width": "100px",
                            "label-position": "left"
                          }
                        },
                        [
                          n(
                            "el-form-item",
                            { attrs: { label: "优惠内容" } },
                            t._l(t.data.rules, function(e, r) {
                              return n(
                                "span",
                                { key: r, staticClass: "mr10" },
                                [t._v(t._s(e.policyName))]
                              );
                            }),
                            0
                          ),
                          t._v(" "),
                          n(
                            "el-form-item",
                            { attrs: { label: "参与范围" } },
                            t._l(t.cateList, function(e, r, o) {
                              return n(
                                "span",
                                { key: o },
                                t._l(e, function(e, o, l) {
                                  return n(
                                    "div",
                                    { key: l, staticClass: "box-item" },
                                    [
                                      n(
                                        "el-tooltip",
                                        {
                                          staticClass: "item",
                                          attrs: {
                                            effect: "dark",
                                            content: e.goods
                                              .map(function(t) {
                                                return t.name;
                                              })
                                              .join(","),
                                            placement: "top-end"
                                          }
                                        },
                                        [
                                          n("span", [
                                            n(
                                              "span",
                                              { staticClass: "box-label" },
                                              [t._v("分类：")]
                                            ),
                                            t._v(t._s(r) + "\n              "),
                                            n(
                                              "span",
                                              { staticClass: "box-label ml10" },
                                              [t._v("品牌：")]
                                            ),
                                            t._v(
                                              t._s(e.name) + "\n            "
                                            )
                                          ])
                                        ]
                                      )
                                    ],
                                    1
                                  );
                                }),
                                0
                              );
                            }),
                            0
                          ),
                          t._v(" "),
                          n(
                            "el-form-item",
                            { attrs: { label: "不参与范围" } },
                            [t._v("\n      -\n    ")]
                          ),
                          t._v(" "),
                          t.POLICY_TYPE.deduction != t.data.type &&
                          t.selectList.length > 0
                            ? n(
                                "el-form-item",
                                { attrs: { label: "叠加策略" } },
                                [
                                  t.readonly
                                    ? n("div", [
                                        t._v(
                                          "\n        " +
                                            t._s(
                                              (t.data.fusion &&
                                                t.data.fusion.title) ||
                                                "-"
                                            ) +
                                            "\n      "
                                        )
                                      ])
                                    : n(
                                        "el-select",
                                        {
                                          attrs: {
                                            placeholder: "请选择叠加策略",
                                            clearable: ""
                                          },
                                          model: {
                                            value: t.fusion,
                                            callback: function(e) {
                                              t.fusion = e;
                                            },
                                            expression: "fusion"
                                          }
                                        },
                                        [
                                          n("el-option", {
                                            attrs: {
                                              label: "不叠加",
                                              value: null
                                            }
                                          }),
                                          t._v(" "),
                                          t._l(t.selectList, function(t, e) {
                                            return n("el-option", {
                                              key: e,
                                              attrs: {
                                                disabled: t.disabled,
                                                label: t.title,
                                                value: t.strategyId
                                              }
                                            });
                                          })
                                        ],
                                        2
                                      )
                                ],
                                1
                              )
                            : t._e()
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
                "439b48f8",
                null
              ).exports,
              "el-collapse": Ot.a,
              "el-collapse-item": gt.a,
              "el-tag": yt.a
            },
            props: {
              list: {
                type: Array,
                default: function() {
                  return [];
                }
              },
              isExpandAll: { type: Boolean, default: !1 },
              readonly: { type: Boolean, default: !1 }
            },
            data: function() {
              return { activeNames: [], POLICY_TYPE_MAP: f.f };
            },
            watch: {
              isExpandAll: {
                handler: function(t) {
                  t &&
                    (this.activeNames = this.list.map(function(t, i) {
                      return i;
                    }));
                },
                immediate: !0
              }
            },
            methods: {
              fusionChange: function(t, e) {
                this.$emit("fusionChange", t, e);
              },
              getCateList: function(data) {
                return data.reduce(function(t, e) {
                  return (
                    t[e.categoryName]
                      ? t[e.categoryName][e.brandName]
                        ? (t[e.categoryName][e.brandName].goods = t[
                            e.categoryName
                          ][e.brandName].goods.concat(e))
                        : (t[e.categoryName][e.brandName] = {
                            name: e.brandName,
                            goods: [e]
                          })
                      : (t[e.categoryName] = Object(r.a)({}, e.brandName, {
                          name: e.brandName,
                          goods: [e]
                        })),
                    t
                  );
                }, {});
              },
              onDelete: function(t) {
                var e = this;
                this.$confirm("确认移除该活动策略吗？")
                  .then(function(n) {
                    "confirm" == n && e.$emit("onDelete", t);
                  })
                  .catch(function() {});
              },
              expandAll: function() {
                this.activeNames.length == this.list.length
                  ? (this.activeNames = [])
                  : (this.activeNames = this.list.map(function(t, i) {
                      return i;
                    }));
              }
            }
          }),
        Pt =
          (n(974),
          Object(h.a)(
            Ct,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                { staticClass: "policy-list" },
                [
                  n(
                    "el-collapse",
                    {
                      model: {
                        value: t.activeNames,
                        callback: function(e) {
                          t.activeNames = e;
                        },
                        expression: "activeNames"
                      }
                    },
                    [
                      t._l(t.list, function(e, r) {
                        return [
                          n(
                            "el-collapse-item",
                            {
                              key: r,
                              staticClass: "col-item",
                              attrs: { name: r }
                            },
                            [
                              n(
                                "template",
                                { slot: "title" },
                                [
                                  n("el-tag", [
                                    t._v(t._s(t.POLICY_TYPE_MAP[e.type]))
                                  ]),
                                  t._v(" "),
                                  n(
                                    "span",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: -1 == t.activeNames.indexOf(r),
                                          expression:
                                            "activeNames.indexOf(index) == -1"
                                        }
                                      ],
                                      staticClass: "title"
                                    },
                                    [
                                      n(
                                        "span",
                                        { staticClass: "policy-name" },
                                        [
                                          e.isOriginPrice
                                            ? n("span", [t._v("【正价商品】")])
                                            : t._e(),
                                          t._v(" "),
                                          t._l(e.rules, function(e, r) {
                                            return n(
                                              "span",
                                              { key: r, staticClass: "mr10" },
                                              [t._v(t._s(e.policyName))]
                                            );
                                          })
                                        ],
                                        2
                                      ),
                                      t._v(" "),
                                      n(
                                        "span",
                                        { staticClass: "brand-name" },
                                        t._l(t.getCateList(e.goods), function(
                                          e,
                                          r,
                                          o
                                        ) {
                                          return n(
                                            "span",
                                            { key: o },
                                            t._l(e, function(e, o, l) {
                                              return n("span", { key: l }, [
                                                t._v(
                                                  "\n                  【分类：" +
                                                    t._s(r) +
                                                    "  品牌：" +
                                                    t._s(e.name) +
                                                    "】\n                "
                                                )
                                              ]);
                                            }),
                                            0
                                          );
                                        }),
                                        0
                                      )
                                    ]
                                  ),
                                  t._v(" "),
                                  e.fusion && -1 != t.activeNames.indexOf(r)
                                    ? n(
                                        "span",
                                        {
                                          staticClass: "expand-item",
                                          staticStyle: {
                                            "padding-left": "20px"
                                          }
                                        },
                                        [
                                          t._v(
                                            "\n            此策略享受后，还可享受: 【" +
                                              t._s(
                                                e.fusion.rules
                                                  .map(function(i) {
                                                    return i.policyName;
                                                  })
                                                  .join("，")
                                              ) +
                                              "】优惠\n          "
                                          )
                                        ]
                                      )
                                    : t._e()
                                ],
                                1
                              ),
                              t._v(" "),
                              n("policy-item", {
                                attrs: {
                                  readonly: t.readonly,
                                  data: e,
                                  list: t.list,
                                  index: r,
                                  cateList: t.getCateList(e.goods)
                                },
                                on: { fusionChange: t.fusionChange }
                              }),
                              t._v(" "),
                              t.readonly
                                ? t._e()
                                : n("el-button", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: t.activeNames.indexOf(r) > -1,
                                        expression:
                                          "activeNames.indexOf(index) > -1"
                                      }
                                    ],
                                    staticClass: "delete",
                                    attrs: {
                                      type: "danger",
                                      icon: "el-icon-delete",
                                      circle: ""
                                    },
                                    on: {
                                      click: function(e) {
                                        return t.onDelete(r);
                                      }
                                    }
                                  })
                            ],
                            2
                          ),
                          t._v(" "),
                          e.fusion && -1 == t.activeNames.indexOf(r)
                            ? n("div", { staticClass: "expand-item" }, [
                                t._v(
                                  "\n        此策略享受后，还可享受: 【" +
                                    t._s(
                                      e.fusion.rules
                                        .map(function(i) {
                                          return i.policyName;
                                        })
                                        .join("，")
                                    ) +
                                    "】优惠\n      "
                                )
                              ])
                            : t._e()
                        ];
                      })
                    ],
                    2
                  )
                ],
                1
              );
            },
            [],
            !1,
            null,
            "16294de2",
            null
          ).exports),
        Dt = {
          name: "PolicySetting",
          components: { AddPolicy: ht, PolicyList: Pt },
          props: { minStock: { type: [Number, String] } },
          data: function() {
            return { strategies: [] };
          },
          methods: {
            fusionChange: function(t, e) {
              var data =
                this.strategies.find(function(e) {
                  return e.strategyId == t;
                }) || null;
              this.strategies[e].fusion = data;
            },
            onSubmit: function() {
              0 != this.strategies.length
                ? this.handleStepChange()
                : this.$message.error("请添加优惠策略");
            },
            onDelete: function(t) {
              this.strategies.splice(t, 1);
            },
            handleUpdateData: function(t) {
              this.strategies.push(t);
            },
            handleStepChange: function() {
              this.$emit("handleStepChange", { strategies: this.strategies });
            },
            prevStep: function() {
              this.$emit("prevStep");
            }
          }
        },
        kt =
          (n(975),
          Object(h.a)(
            Dt,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                { staticClass: "policy-setting" },
                [
                  n("sub-title", { attrs: { title: "添加优惠策略" } }),
                  t._v(" "),
                  n("add-policy", {
                    attrs: {
                      disabled: 2 == t.strategies.length,
                      minStock: t.minStock
                    },
                    on: {
                      handleUpdateData: t.handleUpdateData,
                      onDelete: t.onDelete
                    }
                  }),
                  t._v(" "),
                  n(
                    "sub-title",
                    [
                      n("span", [
                        t._v("\n      已添加的策略\n      "),
                        n("span", { staticClass: "sub-text" }, [
                          t._v(
                            "针对库存高于" + t._s(t.minStock) + "件以上的商品"
                          )
                        ])
                      ]),
                      t._v(" "),
                      n(
                        "el-button",
                        {
                          attrs: { type: "text" },
                          on: {
                            click: function(e) {
                              return t.$refs.policyList.expandAll();
                            }
                          }
                        },
                        [t._v("全部展开")]
                      )
                    ],
                    1
                  ),
                  t._v(" "),
                  n("policy-list", {
                    ref: "policyList",
                    staticClass: "mb10",
                    attrs: { list: t.strategies },
                    on: { onDelete: t.onDelete, fusionChange: t.fusionChange }
                  }),
                  t._v(" "),
                  n(
                    "div",
                    { staticClass: "btn-control" },
                    [
                      n(
                        "el-button",
                        {
                          attrs: { type: "primary" },
                          on: { click: t.onSubmit }
                        },
                        [t._v("下一步")]
                      )
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
            "468a7ebe",
            null
          ).exports),
        St = {
          name: "ActivityConfirm",
          components: { BasicSetting: v, PolicyList: Pt },
          props: {
            data: {
              type: Object,
              default: function() {
                return {};
              }
            },
            pageType: { type: String, default: f.c.add }
          },
          data: function() {
            return { PAGE_TYPE: f.c };
          },
          methods: {
            onSubmit: function() {
              this.$emit("submit");
            },
            prevStep: function() {
              this.$emit("prevStep");
            }
          }
        },
        jt =
          (n(976),
          Object(h.a)(
            St,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                { staticClass: "activity-confirm" },
                [
                  n("sub-title", { attrs: { title: "活动设置：" } }),
                  t._v(" "),
                  n("basic-setting", { attrs: { readonly: "", data: t.data } }),
                  t._v(" "),
                  n("sub-title", { attrs: { title: "促销策略：" } }),
                  t._v(" "),
                  n("policy-list", {
                    staticClass: "mb10",
                    attrs: {
                      readonly: "",
                      list: t.data.strategies,
                      "is-expand-all": "",
                      readonly: ""
                    }
                  }),
                  t._v(" "),
                  t.pageType != t.PAGE_TYPE.view
                    ? n(
                        "div",
                        { staticClass: "btn-control" },
                        [
                          n(
                            "el-button",
                            {
                              attrs: { type: "primary" },
                              on: { click: t.onSubmit }
                            },
                            [t._v("创建完成")]
                          )
                        ],
                        1
                      )
                    : t._e()
                ],
                1
              );
            },
            [],
            !1,
            null,
            "e2747f9a",
            null
          ).exports);
      function Tt(object, t) {
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
      var Nt = {
          validate: function(t) {
            var e = t.params;
            return !!f.c[e.type];
          },
          components: {
            "el-steps": d.a,
            "el-step": l.a,
            BasicSetting: v,
            PolicySetting: kt,
            ActivityConfirm: jt
          },
          data: function() {
            return {
              form: {},
              PAGE_TYPE: f.c,
              pageType: null,
              activeStep: 0,
              stepList: [
                { label: "活动设置" },
                { label: "策略设置" },
                { label: "确认活动内容" }
              ],
              loading: !1
            };
          },
          mounted: function() {
            (this.pageType = this.$route.params.type),
              this.pageType != f.c.add && this.getActivityInfo();
          },
          computed: {
            activeTitle: function() {
              return this.stepList[this.activeStep].label || "活动设置";
            }
          },
          methods: {
            getActivityInfo: function() {
              var t = this;
              (this.loading = !0),
                this.$axios
                  .$post(
                    ""
                      .concat(it.c.findOneByCondition, "?collection=")
                      .concat(f.l.activity),
                    { activityId: +this.$route.query.id }
                  )
                  .then(function(e) {
                    (t.loading = !1),
                      0 == e.code
                        ? (t.form = e.payload || {})
                        : t.$message.error(e.msg);
                  })
                  .catch(function(e) {
                    (t.loading = !1),
                      t.$message.error(e.msg || "服务器繁忙，请稍后再试");
                  });
            },
            syncActivityData: function(data) {
              this.$axios
                .$post(it.c.syncActivity, data)
                .then(function(t) {})
                .catch(function(t) {});
            },
            submit: function() {
              var t = this;
              this.loading = !0;
              var e = this.form.strategies.reduce(function(t, e) {
                  return t.concat(
                    e.goods.map(function(g) {
                      return g.id;
                    })
                  );
                }, []),
                n = Array.from(new Set(e)).length,
                o = this.form.strategies.reduce(function(t, e) {
                  return (
                    t +
                    e.goods.reduce(function(p, i) {
                      return p + i.stock;
                    }, 0)
                  );
                }, 0),
                l = +new Date();
              this.form.strategies.forEach(function(i) {
                return (i.activityId = l);
              }),
                this.syncActivityData({
                  activityId: l,
                  goodId: e,
                  singleDiscount: this.form.strategies
                    .filter(function(t) {
                      return t.type == f.e.direct_discount;
                    })
                    .reduce(function(t, e) {
                      var data = e.goods.map(function(t) {
                        return t.id;
                      });
                      return t.concat(
                        data.map(function(g) {
                          return {
                            id: g,
                            discount:
                              e.rules && e.rules[0] && e.rules[0].discount
                          };
                        })
                      );
                    }, [])
                }),
                this.$axios
                  .$post(
                    "".concat(it.c.addOne, "?collection=").concat(f.l.activity),
                    (function(t) {
                      for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2
                          ? Tt(source, !0).forEach(function(e) {
                              Object(r.a)(t, e, source[e]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              t,
                              Object.getOwnPropertyDescriptors(source)
                            )
                          : Tt(source).forEach(function(e) {
                              Object.defineProperty(
                                t,
                                e,
                                Object.getOwnPropertyDescriptor(source, e)
                              );
                            });
                      }
                      return t;
                    })(
                      {
                        status: f.h.doing,
                        createdTime: +new Date(),
                        activityId: l,
                        totalStock: o,
                        goodsNumber: n
                      },
                      this.form
                    )
                  )
                  .then(function(e) {
                    (t.loading = !1),
                      0 == e.code
                        ? (t.$message.success("创建成功"), t.$router.back())
                        : t.$message.error(e.msg);
                  })
                  .catch(function(e) {
                    t.loading = !1;
                  });
            },
            handleUpdateData: function(t) {
              this.form = Object.assign(this.form, t);
            },
            handleStepChange: function(t) {
              this.handleUpdateData(t), ++this.activeStep;
            },
            prevStep: function() {
              --this.activeStep;
            }
          }
        },
        Et =
          (n(977),
          Object(h.a)(
            Nt,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: t.loading,
                      expression: "loading"
                    }
                  ],
                  staticClass: "activity-create"
                },
                [
                  n("go-back"),
                  t._v(" "),
                  t.pageType == t.PAGE_TYPE.add
                    ? n(
                        "el-steps",
                        {
                          staticClass: "steps",
                          attrs: {
                            active: t.activeStep + 1,
                            "process-status": "wait",
                            "align-center": ""
                          }
                        },
                        t._l(t.stepList, function(t, e) {
                          return n("el-step", {
                            key: e,
                            attrs: { title: t.label }
                          });
                        }),
                        1
                      )
                    : t._e(),
                  t._v(" "),
                  t.pageType == t.PAGE_TYPE.add
                    ? n("basic-setting", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: 0 == t.activeStep,
                            expression: "activeStep == 0"
                          }
                        ],
                        on: { handleStepChange: t.handleStepChange }
                      })
                    : t._e(),
                  t._v(" "),
                  t.pageType == t.PAGE_TYPE.add
                    ? n("policy-setting", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: 1 == t.activeStep,
                            expression: "activeStep == 1"
                          }
                        ],
                        attrs: { minStock: t.form.minStock },
                        on: {
                          handleUpdateData: t.handleUpdateData,
                          handleStepChange: t.handleStepChange,
                          prevStep: t.prevStep
                        }
                      })
                    : t._e(),
                  t._v(" "),
                  2 == t.activeStep || t.pageType == t.PAGE_TYPE.view
                    ? n("activity-confirm", {
                        attrs: { data: t.form, "page-type": t.pageType },
                        on: { prevStep: t.prevStep, submit: t.submit }
                      })
                    : t._e()
                ],
                1
              );
            },
            [],
            !1,
            null,
            "935d4cec",
            null
          ));
      e.default = Et.exports;
    }
  }
]);
