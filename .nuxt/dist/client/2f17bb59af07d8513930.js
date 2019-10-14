(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    400: function(t, e, n) {
      "use strict";
      n.d(e, "l", function() {
        return d;
      }),
        n.d(e, "c", function() {
          return v;
        }),
        n.d(e, "h", function() {
          return h;
        }),
        n.d(e, "k", function() {
          return f;
        }),
        n.d(e, "j", function() {
          return m;
        }),
        n.d(e, "i", function() {
          return y;
        }),
        n.d(e, "a", function() {
          return _;
        }),
        n.d(e, "b", function() {
          return C;
        }),
        n.d(e, "g", function() {
          return O;
        }),
        n.d(e, "e", function() {
          return x;
        }),
        n.d(e, "f", function() {
          return w;
        }),
        n.d(e, "d", function() {
          return D;
        });
      var r,
        o,
        c = n(23),
        l =
          (n(22),
          n(21),
          n(51),
          function(t) {
            return Object.keys(t).map(function(e) {
              return { label: t[e], value: e };
            });
          }),
        d = { activity: "activity", product: "product" },
        v = { add: "add", edit: "edit", view: "view" },
        h = { doing: 0, stop: 1, finish: 2 },
        f =
          ((r = {}),
          Object(c.a)(r, h.doing, "success"),
          Object(c.a)(r, h.stop, "danger"),
          Object(c.a)(r, h.finish, "danger"),
          r),
        m =
          ((o = {}),
          Object(c.a)(o, h.doing, "进行中"),
          Object(c.a)(o, h.stop, "已暂停"),
          Object(c.a)(o, h.finish, "已结束"),
          o),
        y = l(m),
        _ = { 0: "日常促销", 1: "节假日促销", 2: "其他促销" },
        C = l(_),
        O = { 0: "提升业绩", 1: "降低库存" },
        x = {
          sendLow: "0",
          deduction: "1",
          sendOne: "2",
          discount: "3",
          direct_discount: "4"
        },
        w = {
          0: "买高送低",
          1: "满额减价",
          2: "单品买送",
          3: "满额打折",
          4: "单品打折"
        },
        D = [
          { name: w[0], desc: "任意挑选x件</br>最低价商品免费", type: 0 },
          { name: w[1], desc: "满x元减x元", type: 1 },
          { name: w[2], desc: "单品买x件送x件", type: 2 },
          { name: w[3], desc: "满x元享受指定折扣", type: 3 },
          { name: w[4], desc: "单品享受x折", type: 4 }
        ];
    },
    407: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return l;
      }),
        n.d(e, "b", function() {
          return d;
        });
      n(215), n(216), n(21), n(395), n(450);
      var r = n(437),
        o = n.n(r),
        c = function(t) {
          return null == t;
        };
      function l(time) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "YYYY-MM-DD";
        return time ? o()(time).format(t) : "";
      }
      function d(t, e) {
        if (!c(t) && !isNaN(t)) {
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
    473: function(t, e, n) {},
    474: function(t, e, n) {},
    511: function(t, e, n) {},
    512: function(t, e, n) {},
    513: function(t, e, n) {},
    514: function(t, e, n) {},
    515: function(t, e, n) {},
    519: function(t, e, n) {},
    520: function(t, e, n) {},
    521: function(t, e, n) {},
    522: function(t, e, n) {},
    630: function(t, e, n) {
      "use strict";
      var r = n(473);
      n.n(r).a;
    },
    631: function(t, e, n) {
      "use strict";
      var r = n(474);
      n.n(r).a;
    },
    935: function(t, e, n) {
      "use strict";
      var r = n(511);
      n.n(r).a;
    },
    936: function(t, e, n) {
      "use strict";
      var r = n(512);
      n.n(r).a;
    },
    937: function(t, e, n) {
      "use strict";
      var r = n(513);
      n.n(r).a;
    },
    938: function(t, e, n) {
      "use strict";
      var r = n(514);
      n.n(r).a;
    },
    939: function(t, e, n) {
      "use strict";
      var r = n(515);
      n.n(r).a;
    },
    942: function(t, e, n) {
      "use strict";
      var r = n(519);
      n.n(r).a;
    },
    943: function(t, e, n) {
      "use strict";
      var r = n(520);
      n.n(r).a;
    },
    944: function(t, e, n) {
      "use strict";
      var r = n(521);
      n.n(r).a;
    },
    945: function(t, e, n) {
      "use strict";
      var r = n(522);
      n.n(r).a;
    },
    980: function(t, e, n) {
      "use strict";
      n.r(e);
      n(75), n(28), n(22), n(21), n(51);
      var r = n(23);
      n(395);
      function o(object, t) {
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
      var c = {
          name: "transition-arrow",
          data: function() {
            return {};
          },
          props: {
            position: {
              type: Object,
              default: function() {
                return { top: 0, left: 0 };
              }
            },
            size: {
              type: Object,
              default: function() {
                return { width: "25px", height: "25px" };
              }
            }
          },
          computed: {
            squareClass: function() {
              var style = (function(t) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? o(source, !0).forEach(function(e) {
                        Object(r.a)(t, e, source[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : o(source).forEach(function(e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(source, e)
                        );
                      });
                }
                return t;
              })({}, this.position, {}, this.size);
              return (style.position = "absolute"), this.getInnerClass(style);
            }
          },
          methods: {
            getInnerClass: function(t) {
              return Object.keys(t).reduce(function(e, n) {
                return (e += "".concat(n, ":").concat(t[n], ";"));
              }, "");
            }
          }
        },
        l = (n(630), n(5)),
        d = Object(l.a)(
          c,
          function() {
            var t = this.$createElement,
              e = this._self._c || t;
            return e("div", { staticClass: "transition-arrow" }, [
              e(
                "div",
                { staticClass: "square", style: this.squareClass },
                [
                  this._t("transition-num"),
                  this._v(" "),
                  e("i", { staticClass: "arrow el-icon-caret-right" })
                ],
                2
              )
            ]);
          },
          [],
          !1,
          null,
          "579b6c47",
          null
        ).exports,
        v = {
          0: "#576DE7",
          1: "#8B74F2",
          2: "#A37EEF",
          3: "#C289EB",
          4: "#D691E8"
        },
        h = {
          product: "商品总访客",
          login: "访客总数",
          shopCart: "加入购物车人数",
          order: "下单人数",
          pay: "支付人数"
        },
        f = {
          receive: "el-icon-s-opportunity",
          participate: "el-icon-user",
          product: "el-icon-wallet",
          verification: "el-icon-s-claim"
        },
        m = function(t) {
          return {
            totalCount: "".concat(t),
            averageCount: "日均".concat(t, "人数"),
            percent: "与历史“日均".concat(t, "人数”平均水平相比"),
            yesterday: "昨日".concat(t, "人数")
          };
        },
        y = { 0: "el-icon-top", 1: "el-icon-minus", 2: "el-icon-bottom" },
        _ = {
          name: "trapezoid-summary",
          components: { "transition-arrow": d },
          props: {
            minWidth: {
              type: Number,
              default: function() {
                return 100;
              }
            },
            maxWidth: {
              type: Number,
              default: function() {
                return 130;
              }
            },
            data: { type: Object, required: !0 },
            rowHeight: { type: Number, default: 60 }
          },
          data: function() {
            return {
              topSize: { width: "100px", height: "300px" },
              topPosition: { left: 0, top: 0 }
            };
          },
          computed: {
            dataLength: function() {
              return Object.keys(this.data).length;
            },
            triangleWidth: function() {
              var t = this.dataLength,
                e = this.minWidth;
              return ((this.maxWidth - e) / t) * 5;
            },
            initSize: function() {
              var t = this;
              return function(e, n) {
                return {
                  width: (e || t.rowHeight) + "px",
                  height: (n || t.rowHeight) + "px"
                };
              };
            },
            initPosition: function() {
              var t = this;
              return function(e, n) {
                return {
                  right: (e || 1.4 * t.triangleWidth) + "px",
                  top: (n || 1.5 * -t.rowHeight) + "px"
                };
              };
            },
            calssCenter: function() {
              var t = this;
              return function(e) {
                var n = v[e],
                  r = t.dataLength - (e + 1);
                return {
                  width: t.minWidth + 2 * r * t.triangleWidth + "px",
                  minHeight: t.rowHeight + "px",
                  backgroundColor: n
                };
              };
            },
            classLigthRigth: function() {
              var t = this;
              return function(e, n) {
                var r = v[e],
                  style = {
                    width: 0,
                    height: 0,
                    borderTop: t.rowHeight + "px solid " + r
                  },
                  o = "left" == n ? "borderLeft" : "borderRight",
                  c = t.triangleWidth + "px solid transparent";
                return (style[o] = c), t.getInnerClass(style);
              };
            }
          },
          created: function() {
            (this.COLOR_EUM = v),
              (this.KIND_EUM = h),
              (this.KIND_KEY_SHOW = m),
              (this.STATE_ARROW_CALSS = y),
              (this.ICON_KEY = f);
          },
          methods: {
            getInnerClass: function(t) {
              return Object.keys(t).reduce(function(e, n) {
                return (e += "".concat(n, ":").concat(t[n], ";"));
              }, "");
            }
          }
        },
        C =
          (n(631),
          Object(l.a)(
            _,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                { staticClass: "trapezoid-summary" },
                t._l(t.data, function(e, r, o) {
                  return n(
                    "el-row",
                    { key: o, staticClass: "trapezoid-row" },
                    [
                      n(
                        "el-col",
                        {
                          staticClass: "row-right",
                          attrs: { span: 10, offset: 2 }
                        },
                        [
                          n("p", {
                            staticClass: "line",
                            style: { width: "50%" }
                          }),
                          t._v(" "),
                          n("div", { staticClass: "content-box" }, [
                            n(
                              "div",
                              {
                                staticClass: "triangle-left",
                                style: t.classLigthRigth(o, "left")
                              },
                              [
                                0 !== o
                                  ? n(
                                      "transition-arrow",
                                      {
                                        attrs: {
                                          size: t.initSize(),
                                          position: t.initPosition()
                                        }
                                      },
                                      [
                                        n(
                                          "div",
                                          {
                                            staticClass: "transition-num",
                                            attrs: { slot: "transition-num" },
                                            slot: "transition-num"
                                          },
                                          [
                                            n("p", [t._v("转化率")]),
                                            t._v(" "),
                                            n("p", [
                                              t._v(t._s(e.conversionRate) + "%")
                                            ])
                                          ]
                                        )
                                      ]
                                    )
                                  : t._e(),
                                t._v(" "),
                                0 == o && 2 !== t.dataLength
                                  ? n(
                                      "transition-arrow",
                                      {
                                        attrs: {
                                          size: t.initSize(
                                            1.6 * t.rowHeight,
                                            t.dataLength * t.rowHeight
                                          ),
                                          position: t.initPosition(
                                            15,
                                            -t.rowHeight
                                          )
                                        }
                                      },
                                      [
                                        n(
                                          "div",
                                          {
                                            staticStyle: { color: "#000" },
                                            attrs: { slot: "transition-num" },
                                            slot: "transition-num"
                                          },
                                          [
                                            n(
                                              "div",
                                              {
                                                staticClass: "transition-num",
                                                attrs: {
                                                  slot: "transition-num"
                                                },
                                                slot: "transition-num"
                                              },
                                              [
                                                n("p", [t._v("转化率")]),
                                                t._v(" "),
                                                n("p", [
                                                  t._v(
                                                    t._s(e.conversionRate) + "%"
                                                  )
                                                ])
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : t._e()
                              ],
                              1
                            ),
                            t._v(" "),
                            n(
                              "div",
                              {
                                staticClass: "rectan-center",
                                style: t.calssCenter(o)
                              },
                              [n("span", [t._v(t._s("" + t.KIND_EUM[r]))])]
                            ),
                            t._v(" "),
                            n("div", {
                              staticClass: "triangle-right",
                              style: t.classLigthRigth(o, "right")
                            })
                          ])
                        ]
                      ),
                      t._v(" "),
                      n(
                        "el-col",
                        { staticClass: "row-left", attrs: { span: 10 } },
                        t._l(e, function(e, o) {
                          return "conversionRate" != o && "state" != o
                            ? n("div", { key: o, staticClass: "key-base" }, [
                                n(
                                  "p",
                                  {
                                    staticStyle: {
                                      color: "rgba(174, 174, 174, 0.8)"
                                    }
                                  },
                                  [
                                    t._v(
                                      "\n          " +
                                        t._s(
                                          t.KIND_EUM[r] &&
                                            t.KIND_KEY_SHOW(t.KIND_EUM[r])[o]
                                        ) +
                                        "\n        "
                                    )
                                  ]
                                ),
                                t._v(" "),
                                n("p", [t._v(t._s(e))])
                              ])
                            : t._e();
                        }),
                        0
                      )
                    ],
                    1
                  );
                }),
                1
              );
            },
            [],
            !1,
            null,
            "3e8d8efb",
            null
          ).exports),
        O = n(453),
        x = n.n(O),
        w = n(926),
        D = n.n(w),
        filter = n(407);
      n(510);
      var S = {
          props: { targetData: { type: Object, default: function(t) {} } },
          computed: {
            activityInfo: function() {
              var t = this.targetData,
                e = t.afterCount,
                n = t.afterCountPercent,
                r = t.isCartCount,
                o = t.isCartPercent,
                c = t.initCount;
              return {
                before: {
                  label: "活动前",
                  value: Object(filter.b)(c, !0),
                  unit: "个"
                },
                carts: {
                  label: "活动中有加购物车",
                  value: Object(filter.b)(r, !0),
                  unit: "个（占比：".concat((100 * o).toFixed(2), "%）")
                },
                lost: {
                  label: "活动后库存超100还剩下",
                  value: Object(filter.b)(e, !0),
                  unit: "个",
                  icon: "".concat((100 * n).toFixed(2), "%"),
                  type: "yldown"
                }
              };
            },
            datas: function() {
              var t = this.targetData,
                e = t.activityPrice,
                n = t.subStockPercent,
                r = t.targetGoods,
                o = t.tradingGoods;
              return {
                totalAmount: {
                  label: "活动交易总金额",
                  value: Object(filter.b)(e, !0) || 0,
                  unit: "元"
                },
                saleRatio: {
                  label: "活动交易总商品数",
                  value: Object(filter.b)(o, !0) || 0,
                  unit: "个"
                },
                stockAmount: {
                  label: "活动目标商品总数",
                  value: Object(filter.b)(r, !0) || 0,
                  unit: ""
                },
                stockRatio: {
                  label: "降低库存比率",
                  value: (100 * n || 0).toFixed(2),
                  unit: "%"
                }
              };
            }
          },
          data: function() {
            return { chart: null };
          },
          mounted: function() {
            this.initChart(),
              window.addEventListener("resize", this.resizeHandler);
          },
          beforeDestroy: function() {
            this.chart &&
              (window.removeEventListener("resize", this.resizeHandler),
              this.chart.dispose(),
              (this.chart = null));
          },
          methods: {
            resizeHandler: D()(function() {
              this.chart.resize();
            }, 100),
            initChart: function() {
              (this.chart = x.a.init(this.$refs.lineChart, "macarons")),
                this.setOptions();
            },
            setOptions: function() {
              this.chart.setOption({
                tooltip: { trigger: "axis" },
                grid: {
                  left: "3%",
                  right: "4%",
                  bottom: "3%",
                  containLabel: !0
                },
                xAxis: {
                  type: "category",
                  boundaryGap: !1,
                  data: [
                    "2019-5-1",
                    "2019-5-2",
                    "2019-5-3",
                    "2019-5-4",
                    "2019-5-5"
                  ],
                  axisLabel: { interval: "auto", color: "#000" },
                  axisLine: { lineStyle: { color: "#000" } }
                },
                yAxis: [
                  {
                    type: "value",
                    name: "交易金额",
                    nameLocation: "end",
                    nameGap: 20,
                    max: 5e4,
                    axisLabel: { color: "#000" },
                    axisTick: { show: !1 },
                    axisLine: { show: !1, lineStyle: { color: "#000" } },
                    splitLine: { show: !0, lineStyle: { type: "dashed" } },
                    splitArea: { show: !1 }
                  },
                  {
                    type: "value",
                    name: "交易数量",
                    nameLocation: "end",
                    nameGap: 20,
                    max: 5e3,
                    axisLabel: { color: "#000" },
                    axisTick: { show: !1 },
                    axisLine: { show: !1, lineStyle: { color: "#000" } },
                    splitLine: { show: !1 },
                    splitArea: { show: !1 }
                  }
                ],
                series: [
                  {
                    name: "交易金额",
                    type: "line",
                    smooth: !0,
                    lineStyle: { color: "#1890FF" },
                    itemStyle: { normal: { color: "#1890FF" } },
                    data: [1e4, 15e3, 1e4, 2e4, 5e4]
                  },
                  {
                    name: "交易数量",
                    type: "line",
                    yAxisIndex: 1,
                    smooth: !0,
                    lineStyle: { color: "#2FC25B" },
                    itemStyle: { normal: { color: "#2FC25B" } },
                    data: [500, 3e3, 200, 4e3, 5e3]
                  }
                ]
              });
            }
          }
        },
        L =
          (n(935),
          Object(l.a)(
            S,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n("div", { staticClass: "kpi-result" }, [
                n(
                  "div",
                  { staticClass: "data-column" },
                  t._l(t.datas, function(e, r, o) {
                    return n("div", { key: o, staticClass: "data-item" }, [
                      n("p", { staticClass: "title" }, [t._v(t._s(e.label))]),
                      t._v(" "),
                      n("p", { staticClass: "value" }, [
                        t._v("\n        " + t._s(e.value)),
                        n("span", { staticClass: "unit" }, [t._v(t._s(e.unit))])
                      ])
                    ]);
                  }),
                  0
                ),
                t._v(" "),
                n("div", { ref: "lineChart", staticClass: "line-chart" })
              ]);
            },
            [],
            !1,
            null,
            null,
            null
          ).exports),
        j = n(106),
        P = n(400),
        $ = { 1: "银卡会员", 3: "金卡会员", 4: "白金卡会员" },
        I = {
          props: {
            userList: {
              type: Array,
              default: function(t) {
                return [];
              }
            }
          },
          data: function() {
            return {
              tableConfig: {
                firstPage: 1,
                dataPath: "payload.content",
                totalPath: "payload.totalPath",
                hasDialog: !1,
                hasPagination: !1,
                hasOperation: !1,
                isTree: !1,
                url: "",
                customQuery: { collection: P.l.activity },
                hasNew: !1,
                hasEdit: !1,
                hasView: !1,
                hasDelete: !1,
                single: !1,
                columns: [
                  { prop: "name", label: "会员昵称" },
                  {
                    prop: "level",
                    label: "会员等级",
                    formatter: function(t) {
                      var e = t.level;
                      return $[e];
                    }
                  },
                  {
                    prop: "amount",
                    label: "活动交易金额",
                    formatter: function(t) {
                      var e = t.amount;
                      return "￥".concat(e.toFixed(2));
                    }
                  },
                  {
                    prop: "date",
                    label: "参与活动时间",
                    formatter: function(t) {
                      var e = t.date;
                      return Object(filter.a)(e, "YYYY-MM-DD HH:mm:ss");
                    }
                  }
                ]
              }
            };
          },
          methods: {
            setData: function(data) {
              this.$nextTick(function() {
                this.$refs.table.data = data;
              });
            }
          }
        },
        k = Object(l.a)(
          I,
          function() {
            var t = this.$createElement,
              e = this._self._c || t;
            return e(
              "div",
              { staticClass: "join-info" },
              [
                e(
                  "el-data-table",
                  this._b(
                    { ref: "table" },
                    "el-data-table",
                    this.tableConfig,
                    !1
                  )
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
        ).exports,
        E = n(36),
        T = n.n(E),
        A = n(437),
        z = n.n(A);
      function H(object, t) {
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
      var M = {
          components: { trapezoidSummary: C, KpiResult: L, JoinInfo: k },
          watch: {
            timer: function(t) {
              this.getFunner();
            }
          },
          computed: {
            ID: function() {
              return +this.$route.query.id;
            },
            searchTime: function() {
              var t = this.$route.query,
                e = t.startTime,
                n = t.endTime;
              return {
                minTime: Object(filter.a)(new Date(+e), "YYYY-MM-DD HH:mm:ss"),
                maxTime: Object(filter.a)(new Date(+n), "YYYY-MM-DD HH:mm:ss")
              };
            },
            timeByDays: function() {
              var t = this.$route.query,
                e = t.startTime,
                n = t.endTime,
                r = z()(+e),
                o = z()(+n),
                c = z()(new Date());
              return c.isBefore(o) ? r.diff(c, "day") : r.diff(o, "day");
            }
          },
          data: function() {
            return {
              timer: null,
              data: {
                login: { totalCount: 0 },
                product: { totalCount: 0 },
                shopCart: { totalCount: 0 },
                order: { totalCount: 0 },
                pay: { totalCount: 0 }
              },
              funnerData: {},
              targetData: {},
              loading: !1,
              userList: []
            };
          },
          mounted: function() {},
          methods: {
            resetData: function() {},
            getLoginData: function() {
              var t = this;
              this.$axios
                .$get("".concat(j.c.getFunner), {
                  params: {
                    minTime: this.searchTime.minTime || "",
                    maxTime: this.searchTime.maxTime || "",
                    activityId: ""
                  }
                })
                .then(function(e) {
                  if (200 == e.status) {
                    var data =
                      T()(
                        e,
                        "data.total.login.results[0].series[0].values[0][1]"
                      ) || 0;
                    T()(
                      e,
                      "data.lastDay.login.results[0].series[0].values[0][1]"
                    );
                    (t.data.login.totalCount = data), t.getFunner();
                  }
                })
                .catch(function(e) {
                  t.$message.error("服务器繁忙,请稍后再试");
                });
            },
            getFunner: function() {
              var t = this;
              this.$axios
                .$get("".concat(j.c.getFunner), {
                  params: {
                    minTime: this.searchTime.minTime || "",
                    maxTime: this.searchTime.maxTime || "",
                    activityId: this.ID
                  }
                })
                .then(function(e) {
                  if (200 == e.status) {
                    for (var i in t.data)
                      if ("login" != i) {
                        var n = "pay" == i ? "order" : i,
                          data =
                            T()(
                              e,
                              "data.total.".concat(
                                n,
                                ".results[0].series[0].values[0][1]"
                              )
                            ) || 0;
                        T()(
                          e,
                          "data.lastDay.".concat(
                            n,
                            ".results[0].series[0].values[0][1]"
                          )
                        );
                        t.data[i].totalCount = data;
                      }
                    (t.data.login.conversionRate =
                      parseInt(
                        (t.data.pay.totalCount / t.data.login.totalCount) * 100
                      ) || 0),
                      (t.data.product.conversionRate =
                        parseInt(
                          (t.data.product.totalCount /
                            t.data.login.totalCount) *
                            100
                        ) || 0),
                      (t.data.shopCart.conversionRate =
                        parseInt(
                          (t.data.shopCart.totalCount /
                            t.data.product.totalCount) *
                            100
                        ) || 0),
                      (t.data.order.conversionRate =
                        parseInt(
                          (t.data.order.totalCount /
                            t.data.shopCart.totalCount) *
                            100
                        ) || 0),
                      (t.data.pay.conversionRate =
                        t.data.order.conversionRate > 0 ? 100 : 0);
                  } else t.$message.error(e.msg || "服务器繁忙，请稍后再试");
                })
                .catch(function(e) {
                  t.$message.error("服务器繁忙,请稍后再试");
                });
            },
            getFunnerData: function() {
              var t = this;
              (this.loading = !0),
                this.$axios
                  .$post(
                    "".concat(j.c.getFunnerData, "?activityId=").concat(this.ID)
                  )
                  .then(function(e) {
                    if (((t.loading = !1), 0 == e.code)) {
                      t.userList = e.payload.userParticipateDetail || [];
                      var n = e.payload || {};
                      (t.targetData = (function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                          var source = null != arguments[i] ? arguments[i] : {};
                          i % 2
                            ? H(source, !0).forEach(function(e) {
                                Object(r.a)(t, e, source[e]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                t,
                                Object.getOwnPropertyDescriptors(source)
                              )
                            : H(source).forEach(function(e) {
                                Object.defineProperty(
                                  t,
                                  e,
                                  Object.getOwnPropertyDescriptor(source, e)
                                );
                              });
                        }
                        return t;
                      })({}, n, {
                        subStockPercent:
                          0 === n.subStockPercent
                            ? 0
                            : n.subStockPercent < 1e-4
                            ? 1e-4
                            : n.subStockPercent
                      })),
                        t.$refs.joinInfo.setData(t.userList);
                    } else t.$message.error(e.msg || "服务器繁忙，请稍后再试");
                  })
                  .catch(function(e) {
                    (t.loading = !1), t.$message.error("服务器繁忙,请稍后再试");
                  });
            }
          }
        },
        N =
          (n(936),
          Object(l.a)(
            M,
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
                  staticClass: "activity"
                },
                [
                  n(
                    "div",
                    { staticClass: "funner" },
                    [
                      n("sub-title", [n("span", [t._v("活动漏斗")])]),
                      t._v(" "),
                      n("trapezoid-summary", { attrs: { data: t.data } })
                    ],
                    1
                  ),
                  t._v(" "),
                  n(
                    "div",
                    { staticClass: "kpi-result" },
                    [
                      n("sub-title", { attrs: { title: "活动目标完成情况" } }),
                      t._v(" "),
                      n("kpi-result", { attrs: { targetData: t.targetData } })
                    ],
                    1
                  ),
                  t._v(" "),
                  n(
                    "div",
                    { staticClass: "activityInfo" },
                    [
                      n("sub-title", { attrs: { title: "活动参与明细" } }),
                      t._v(" "),
                      n("join-info", {
                        ref: "joinInfo",
                        attrs: { list: t.userList }
                      })
                    ],
                    1
                  )
                ]
              );
            },
            [],
            !1,
            null,
            "b6373b0c",
            null
          ).exports),
        F = {
          name: "header-control",
          data: function() {
            return {
              POLICY_LIST: P.d,
              activeTab: 0,
              tabList: [{ label: "活动分析" }, { label: "商品分析" }],
              form: { type: 0, activityId: 0 }
            };
          },
          props: { value: { type: [String, Number] } },
          watch: {
            form: { handler: function(t) {}, immediate: !0, deep: !0 },
            value: {
              handler: function(t) {
                this.activeTab = t;
              },
              immediate: !0
            },
            activeTab: function(t) {
              this.$emit("input", t);
            }
          }
        },
        Y =
          (n(937),
          Object(l.a)(
            F,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n("div", { staticClass: "header-control" }, [
                n("div", { staticClass: "left-side" }, [
                  n(
                    "div",
                    { staticClass: "tabs" },
                    t._l(t.tabList, function(i, e) {
                      return n(
                        "div",
                        {
                          key: e,
                          staticClass: "tab",
                          class: { active: t.activeTab == e },
                          on: {
                            click: function(n) {
                              t.activeTab = e;
                            }
                          }
                        },
                        [t._v("\n        " + t._s(i.label) + "\n      ")]
                      );
                    }),
                    0
                  )
                ]),
                t._v(" "),
                n("div", { staticClass: "right-side" })
              ]);
            },
            [],
            !1,
            null,
            "cc478ad2",
            null
          ).exports),
        R = (n(53), [String, Number]),
        W = {
          props: {
            halfSaleOver: R,
            halfSaleOverPercent: R,
            singleSaleOver: R,
            singleSaleOverPercent: R,
            thirtySaleOver: R,
            thirtySaleOverPercent: R
          },
          filters: {
            percent: function(t) {
              return parseInt(100 * t) || 0;
            }
          }
        },
        K =
          (n(938),
          Object(l.a)(
            W,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n("div", { staticClass: "stock-sale" }, [
                n("div", { staticClass: "data" }, [
                  n("div", { staticClass: "data-box" }, [
                    n("div", { staticClass: "top-box" }, [
                      n("div", { staticClass: "top-item" }, [
                        n("p", [t._v("单品售罄")]),
                        t._v(" "),
                        n("p", [t._v(t._s(t.singleSaleOver))])
                      ]),
                      t._v(" "),
                      n("div", { staticClass: "top-item" }, [
                        n("p", [t._v("单商品库存已降至30%")]),
                        t._v(" "),
                        n("p", [t._v(t._s(t.thirtySaleOver))])
                      ]),
                      t._v(" "),
                      n("div", { staticClass: "top-item" }, [
                        n("p", [t._v("单商品库存已降至50%")]),
                        t._v(" "),
                        n("p", [t._v(t._s(t.halfSaleOver))])
                      ])
                    ]),
                    t._v(" "),
                    n("div", { staticClass: "bottom-box" }, [
                      n("p", { staticClass: "bottom-item" }, [
                        t._v(
                          "\n          活动总库占比：" +
                            t._s(t._f("percent")(t.singleSaleOverPercent)) +
                            "%\n        "
                        )
                      ]),
                      t._v(" "),
                      n("p", { staticClass: "bottom-item" }, [
                        t._v(
                          "\n          活动总库占比：" +
                            t._s(t._f("percent")(t.thirtySaleOverPercent)) +
                            "%\n        "
                        )
                      ]),
                      t._v(" "),
                      n("p", { staticClass: "bottom-item" }, [
                        t._v(
                          "\n          活动总库占比：" +
                            t._s(t._f("percent")(t.halfSaleOverPercent)) +
                            "%\n        "
                        )
                      ])
                    ])
                  ])
                ])
              ]);
            },
            [],
            !1,
            null,
            "0bce8457",
            null
          ).exports),
        G = {
          props: {
            name: { type: String },
            list: {
              type: Array,
              default: function(t) {
                return [];
              }
            }
          }
        },
        B =
          (n(939),
          Object(l.a)(
            G,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                {
                  staticClass: "sales-list",
                  class: { empty: 0 == t.list.length }
                },
                [
                  n("div", { staticClass: "title" }, [t._v(t._s(t.name))]),
                  t._v(" "),
                  n(
                    "div",
                    { staticClass: "list-box" },
                    [
                      t._l(t.list, function(e, r) {
                        return n("div", { key: r, staticClass: "item" }, [
                          n(
                            "span",
                            { staticClass: "index", class: { light: r < 3 } },
                            [t._v(t._s(r + 1))]
                          ),
                          t._v(" "),
                          n("span", { staticClass: "goods-name" }, [
                            t._v(t._s(e.name))
                          ]),
                          t._v(" "),
                          n("span", { staticClass: "unit" }, [
                            t._v(t._s(e.formatter ? e.formatter(e) : e.value))
                          ])
                        ]);
                      }),
                      t._v(" "),
                      0 == t.list.length
                        ? n("div", { staticClass: "no-result" }, [
                            t._v("\n      - 暂无数据 -\n    ")
                          ])
                        : t._e()
                    ],
                    2
                  )
                ]
              );
            },
            [],
            !1,
            null,
            "dd9c8438",
            null
          ).exports),
        U = (n(452), n(940), n(2), n(941)),
        J = n.n(U),
        Q = {
          props: {
            name: { type: String },
            amount: { type: [String, Number] },
            subAmount: { type: [String, Number] }
          }
        };
      n(942),
        Object(l.a)(
          Q,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", { staticClass: "charts-box" }, [
              n("p", { staticClass: "title" }, [
                n("span", [t._v(t._s(t.name))]),
                t._v(" "),
                n("span", [t._v("1")])
              ]),
              t._v(" "),
              n("p", { staticClass: "main-amount" }, [
                t._v("\n    " + t._s(t.amount) + "\n  ")
              ]),
              t._v(" "),
              n("p", { staticClass: "chart" }, [t._t("default")], 2),
              t._v(" "),
              n("p", { staticClass: "sub-amount" }, [
                t._v("\n    " + t._s(t.subAmount) + "\n  ")
              ])
            ]);
          },
          [],
          !1,
          null,
          "c62664dc",
          null
        ).exports;
      n(510);
      var V = {
          components: { "el-radio-button": J.a },
          props: {
            totalMoney: { type: [String, Number], default: 0 },
            brandList: {
              type: Array,
              default: function(t) {
                return [];
              }
            },
            categoryList: {
              type: Array,
              default: function(t) {
                return [];
              }
            }
          },
          watch: {
            categoryList: {
              handler: function() {
                this.change(1);
              }
            }
          },
          data: function() {
            return { chart: null, displayData: "1" };
          },
          mounted: function() {
            this.initChart();
          },
          beforeDestroy: function() {
            this.chart && (this.chart.dispose(), (this.chart = null));
          },
          methods: {
            change: function(t) {
              var data = [].concat(1 == t ? this.categoryList : this.brandList);
              if (data.length > 5) {
                var e = data.splice(0, 5),
                  n = data.reduce(
                    function(t, e) {
                      return (t.value += e.value), (t.percent += e.percent), t;
                    },
                    { name: "其他", value: 0, percent: 0 }
                  );
                data = e.concat(n);
              }
              this.setOptions(data);
            },
            initChart: function() {
              (this.chart = x.a.init(this.$refs.chart, "macarons")),
                this.setOptions(this.categoryList);
            },
            setOptions: function(data) {
              var t = {
                title: {
                  text: "销售额",
                  subtext: "¥".concat(this.totalMoney),
                  textAlign: "center",
                  top: "42%",
                  left: "24%",
                  textStyle: { fontSize: 12, color: "#929292" },
                  subtextStyle: { fontSize: 18, color: "#272727" }
                },
                tooltip: {
                  trigger: "item",
                  formatter: "{a} <br/>{b}: ￥{c} ({d}%)"
                },
                legend: {
                  show: data.length > 0,
                  type: "plain",
                  orient: "vertical",
                  right: 10,
                  top: "middle",
                  formatter: function(t) {
                    var e = data.find(function(i) {
                      return i.name == t;
                    });
                    return (
                      (t =
                        t.length > 5 ? "".concat(t.substring(0, 5), "…") : t),
                      e
                        ? "{title|"
                            .concat(t, "} {value|| ")
                            .concat(parseInt(100 * e.percent), "%} {unit|￥")
                            .concat(Object(filter.b)(e.value, !0), "}")
                        : ""
                    );
                  },
                  textStyle: {
                    color: "#272727",
                    lineHeight: 30,
                    rich: {
                      title: { width: 100, fontSize: 14 },
                      value: { width: 30, color: "#bbb", fontSize: 14 },
                      unit: { width: 100, align: "right", fontSize: 14 }
                    }
                  },
                  icon: "circle"
                },
                series: [
                  {
                    name: "商品金额占比",
                    type: "pie",
                    radius: ["50%", "70%"],
                    center: ["25%", "50%"],
                    avoidLabelOverlap: !1,
                    label: {
                      normal: {
                        show: !1,
                        position: "inside",
                        formatter: "{b} \n {d}%"
                      }
                    },
                    data: data
                  }
                ]
              };
              this.chart.setOption(t);
            }
          }
        },
        X =
          (n(943),
          Object(l.a)(
            V,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                { staticClass: "amount-chart" },
                [
                  n("sub-title", { staticClass: "subtitle" }, [
                    n("span", [t._v("商品金额占比")]),
                    t._v(" "),
                    n(
                      "div",
                      [
                        n(
                          "el-radio-group",
                          {
                            on: { change: t.change },
                            model: {
                              value: t.displayData,
                              callback: function(e) {
                                t.displayData = e;
                              },
                              expression: "displayData"
                            }
                          },
                          [
                            n("el-radio-button", { attrs: { label: "1" } }, [
                              t._v("品类")
                            ]),
                            t._v(" "),
                            n("el-radio-button", { attrs: { label: "2" } }, [
                              t._v("品牌")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  t._v(" "),
                  n("div", { ref: "chart", staticClass: "chart" })
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
      n(510);
      var Z = {
          props: {
            list: {
              type: Array,
              default: function(t) {
                return [];
              }
            }
          },
          watch: {
            list: {
              handler: function(t) {
                var data = t.map(function(i) {
                  return { name: i.name, value: parseInt(i.value) };
                });
                if (data.length > 5) {
                  var e = data.splice(0, 5),
                    n = data.reduce(
                      function(t, e) {
                        return (t.value += e.value), t;
                      },
                      { name: "其他", value: 0 }
                    );
                  data = e.concat(n);
                }
                t.length > 0 && this.setOptions(data);
              }
            }
          },
          computed: {
            totalLength: function() {
              return this.list.reduce(function(t, e) {
                return t + parseInt(e.value);
              }, 0);
            }
          },
          data: function() {
            return { chart: null };
          },
          mounted: function() {
            this.initChart();
          },
          methods: {
            initChart: function() {
              this.chart = x.a.init(this.$refs.chart, "macarons");
            },
            setOptions: function(data) {
              var t = this,
                e = {
                  title: {
                    text: "总件数",
                    subtext: "".concat(this.totalLength, "件"),
                    textAlign: "center",
                    top: "42%",
                    left: "24%",
                    textStyle: { fontSize: 12, color: "#929292" },
                    subtextStyle: { fontSize: 18, color: "#272727" }
                  },
                  tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b}: {c}件 ({d}%)"
                  },
                  legend: {
                    show: data.length > 0,
                    type: "plain",
                    orient: "vertical",
                    right: 10,
                    top: "middle",
                    formatter: function(e) {
                      var n = data.find(function(i) {
                        return i.name == e;
                      });
                      e = e.length > 5 ? "".concat(e.substring(0, 5), "…") : e;
                      var r = parseInt(
                        (parseInt(n.value) / t.totalLength) * 100
                      );
                      return n
                        ? "{title|"
                            .concat(e, "} {value|| ")
                            .concat(r, "%} {unit|")
                            .concat(n.value, "件}")
                        : "";
                    },
                    textStyle: {
                      color: "#272727",
                      lineHeight: 30,
                      rich: {
                        title: { width: 100, fontSize: 14 },
                        value: { width: 40, color: "#bbb", fontSize: 14 },
                        unit: { width: 60, align: "right", fontSize: 14 }
                      }
                    },
                    icon: "circle"
                  },
                  series: [
                    {
                      name: "商品件数占比",
                      type: "pie",
                      radius: ["50%", "70%"],
                      center: ["25%", "50%"],
                      avoidLabelOverlap: !1,
                      label: {
                        normal: {
                          show: !1,
                          position: "inside",
                          formatter: "{b} \n {d}%"
                        }
                      },
                      data: data
                    }
                  ]
                };
              this.chart.setOption(e);
            }
          }
        },
        tt =
          (n(944),
          Object(l.a)(
            Z,
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "div",
                { staticClass: "goods-chart" },
                [
                  e("sub-title", { staticClass: "subtitle" }, [
                    this._v("商品件数占比")
                  ]),
                  this._v(" "),
                  e("div", { ref: "chart", staticClass: "chart" })
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
        et = [
          "迪奥小姐花漾淡香氛50MLEDT",
          "范思哲晶钻女士香水30MLEDT",
          "古驰花悦女士香水30MLEDP",
          "科颜氏亚马逊白泥净肤面膜125ml",
          "贝佳斯矿物营养泥浆膜（绿泥）",
          "★DHC蝶翠诗橄榄卸妆油200ML",
          "蝶翠诗草莓果香护唇膏1.5g",
          "伊丽莎白雅顿绿茶蜜滴身体霜",
          "伊丽莎白雅顿复合水凝霜",
          "兰蔻新精华肌底液50ML"
        ],
        at = {
          components: {
            StockSale: K,
            SalesList: B,
            AmountChart: X,
            GoodsChart: tt
          },
          data: function() {
            return {
              GrossProfitData: et.map(function(t) {
                return { name: t, value: "48.53%" };
              }),
              timer: [],
              productData: {},
              sellWellList: [],
              saleAmountList: [],
              loading: !1
            };
          },
          computed: {
            ID: function() {
              return +this.$route.query.id;
            }
          },
          mounted: function() {},
          methods: {
            resetData: function() {},
            getProductData: function() {
              var t = this;
              (this.loading = !0),
                this.$axios
                  .$post(
                    ""
                      .concat(j.c.getGoodsAnalyseData, "?activityId=")
                      .concat(this.ID)
                  )
                  .then(function(e) {
                    if (((t.loading = !1), 0 == e.code)) {
                      t.productData = e.payload;
                      try {
                        t.sellWellList = e.payload.sellWellList.map(function(
                          i
                        ) {
                          return {
                            name: i.name,
                            value: "".concat(i.value, "件")
                          };
                        });
                      } catch (e) {
                        t.sellWellList = [];
                      }
                      try {
                        t.saleAmountList = e.payload.saleAmountList.map(
                          function(i) {
                            return {
                              name: i.name,
                              value: "￥".concat(Object(filter.b)(i.value))
                            };
                          }
                        );
                      } catch (e) {
                        t.saleAmountList = [];
                      }
                    } else t.$message.error(e.msg || "服务器繁忙，请稍后再试");
                  })
                  .catch(function(e) {
                    (t.loading = !1), t.$message.error("服务器繁忙,请稍后再试");
                  });
            }
          }
        },
        nt =
          (n(945),
          {
            components: {
              ActivityAnalysis: N,
              HeaderControl: Y,
              CommoditySales: Object(l.a)(
                at,
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
                      staticClass: "commodity-sales"
                    },
                    [
                      n(
                        "div",
                        { staticClass: "sale" },
                        [
                          n("sub-title", [n("span", [t._v("商品库存销量")])]),
                          t._v(" "),
                          n(
                            "stock-sale",
                            t._b({}, "stock-sale", t.productData, !1)
                          )
                        ],
                        1
                      ),
                      t._v(" "),
                      n("div", { staticClass: "sale-box" }, [
                        n(
                          "div",
                          { staticClass: "sale-rank" },
                          [
                            n("goods-chart", {
                              attrs: { list: t.sellWellList }
                            }),
                            t._v(" "),
                            n("sales-list", {
                              attrs: {
                                name: "畅销商品排行",
                                list: t.sellWellList
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      t._v(" "),
                      n("div", { staticClass: "chart-box" }, [
                        n(
                          "div",
                          { staticClass: "chart-inner" },
                          [
                            n("amount-chart", {
                              attrs: {
                                totalMoney: t.productData.totalMoney,
                                categoryList: t.productData.categoryList,
                                brandList: t.productData.brandList
                              }
                            }),
                            t._v(" "),
                            n("sales-list", {
                              attrs: {
                                name: "商品总销售金额排行",
                                list: t.saleAmountList
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ]
                  );
                },
                [],
                !1,
                null,
                null,
                null
              ).exports
            },
            data: function() {
              return { active: 0 };
            },
            mounted: function() {
              this.$store.dispatch("fetchUserAndMenuList");
            }
          }),
        it = Object(l.a)(
          nt,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              { staticClass: "charts" },
              [
                n("go-back"),
                t._v(" "),
                n("header-control", {
                  model: {
                    value: t.active,
                    callback: function(e) {
                      t.active = e;
                    },
                    expression: "active"
                  }
                }),
                t._v(" "),
                0 == t.active ? n("activity-analysis") : t._e(),
                t._v(" "),
                1 == t.active ? n("commodity-sales") : t._e()
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = it.exports;
    }
  }
]);
