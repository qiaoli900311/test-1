(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    400: function(t, e, n) {
      "use strict";
      n.d(e, "l", function() {
        return d;
      }),
        n.d(e, "c", function() {
          return h;
        }),
        n.d(e, "h", function() {
          return f;
        }),
        n.d(e, "k", function() {
          return m;
        }),
        n.d(e, "j", function() {
          return y;
        }),
        n.d(e, "i", function() {
          return v;
        }),
        n.d(e, "a", function() {
          return w;
        }),
        n.d(e, "b", function() {
          return _;
        }),
        n.d(e, "g", function() {
          return x;
        }),
        n.d(e, "e", function() {
          return $;
        }),
        n.d(e, "f", function() {
          return S;
        }),
        n.d(e, "d", function() {
          return k;
        });
      var o,
        r,
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
        h = { add: "add", edit: "edit", view: "view" },
        f = { doing: 0, stop: 1, finish: 2 },
        m =
          ((o = {}),
          Object(l.a)(o, f.doing, "success"),
          Object(l.a)(o, f.stop, "danger"),
          Object(l.a)(o, f.finish, "danger"),
          o),
        y =
          ((r = {}),
          Object(l.a)(r, f.doing, "进行中"),
          Object(l.a)(r, f.stop, "已暂停"),
          Object(l.a)(r, f.finish, "已结束"),
          r),
        v = c(y),
        w = { 0: "日常促销", 1: "节假日促销", 2: "其他促销" },
        _ = c(w),
        x = { 0: "提升业绩", 1: "降低库存" },
        $ = {
          sendLow: "0",
          deduction: "1",
          sendOne: "2",
          discount: "3",
          direct_discount: "4"
        },
        S = {
          0: "买高送低",
          1: "满额减价",
          2: "单品买送",
          3: "满额打折",
          4: "单品打折"
        },
        k = [
          { name: S[0], desc: "任意挑选x件</br>最低价商品免费", type: 0 },
          { name: S[1], desc: "满x元减x元", type: 1 },
          { name: S[2], desc: "单品买x件送x件", type: 2 },
          { name: S[3], desc: "满x元享受指定折扣", type: 3 },
          { name: S[4], desc: "单品享受x折", type: 4 }
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
      var o = n(437),
        r = n.n(o),
        l = function(t) {
          return null == t;
        };
      function c(time) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "YYYY-MM-DD";
        return time ? r()(time).format(t) : "";
      }
      function d(t, e) {
        if (!l(t) && !isNaN(t)) {
          var n = Number.parseFloat(t).toLocaleString(),
            o = n.toString().indexOf(".");
          return (
            -1 !== o || e || (n += ".00"),
            1 !== n.toString().substring(o + 1).length || e || (n += "0"),
            n
          );
        }
      }
    },
    524: function(t, e, n) {},
    949: function(t, e, n) {
      "use strict";
      var o = n(524);
      n.n(o).a;
    },
    981: function(t, e, n) {
      "use strict";
      n.r(e);
      n(21), n(523), n(2);
      var o = n(224),
        r = n.n(o),
        l = n(106),
        filter = n(407),
        c =
          (n(232),
          n(215),
          n(216),
          n(22),
          n(51),
          n(55),
          n(225),
          n(395),
          n(231),
          n(36)),
        d = n.n(c),
        h = n(946),
        f = n.n(h),
        m = /=/g,
        y = new RegExp("~", "g"),
        v = new RegExp("q=.*,"),
        w = {
          name: "ElDataTable",
          props: {
            url: { type: String, default: "" },
            id: { type: String, default: "id" },
            firstPage: { type: Number, default: 1 },
            dataPath: { type: String, default: "payload.content" },
            totalPath: { type: String, default: "payload.totalElements" },
            columns: {
              type: Array,
              default: function() {
                return [];
              }
            },
            searchForm: {
              type: Array,
              default: function() {
                return [];
              }
            },
            beforeSearch: {
              type: Function,
              default: function() {
                return Promise.resolve();
              }
            },
            routerMode: { type: String, default: "hash" },
            single: { type: Boolean, default: !1 },
            hasOperation: { type: Boolean, default: !0 },
            extraButtons: {
              type: Array,
              default: function() {
                return [];
              }
            },
            headerButtons: {
              type: Array,
              default: function() {
                return [];
              }
            },
            hasNew: { type: Boolean, default: !0 },
            hasEdit: { type: Boolean, default: !0 },
            hasView: { type: Boolean, default: !1 },
            hasDelete: { type: Boolean, default: !0 },
            canDelete: {
              type: Function,
              default: function() {
                return !0;
              }
            },
            onNew: { type: Function },
            onEdit: { type: Function },
            onDelete: { type: Function },
            hasPagination: { type: Boolean, default: !0 },
            paginationLayout: {
              type: String,
              default: "total, sizes, prev, pager, next, jumper"
            },
            paginationSizes: {
              type: Array,
              default: function() {
                return [10, 20, 30, 40, 50];
              }
            },
            paginationSize: { type: Number, default: 10 },
            noPaginationSize: { type: Number, default: 999 },
            isTree: { type: Boolean, default: !1 },
            treeChildKey: { type: String, default: "children" },
            treeParentKey: { type: String, default: "parentId" },
            treeParentValue: { type: String, default: "id" },
            expandAll: { type: Boolean, default: !1 },
            tableAttrs: {
              type: Object,
              default: function() {
                return {};
              }
            },
            operationAttrs: {
              type: Object,
              default: function() {
                return { width: "", fixed: "right" };
              }
            },
            hasDialog: { type: Boolean, default: !0 },
            dialogNewTitle: { type: String, default: "新增" },
            dialogEditTitle: { type: String, default: "修改" },
            dialogViewTitle: { type: String, default: "查看" },
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
            extraParams: { type: Object },
            beforeConfirm: {
              type: Function,
              default: function() {
                return Promise.resolve();
              }
            },
            customQuery: {
              type: Object,
              default: function() {
                return {};
              }
            },
            transform: { type: Function }
          },
          data: function() {
            return {
              data: [],
              hasSelect:
                this.columns.length && "selection" == this.columns[0].type,
              size: this.paginationSize || this.paginationSizes[0],
              page: 1,
              total: null,
              loading: !1,
              selected: [],
              customButtonsLoading: !1,
              dialogTitle: this.dialogNewTitle,
              dialogVisible: !1,
              isNew: !0,
              isEdit: !1,
              isView: !1,
              confirmLoading: !1,
              row: {},
              initCustomQuery: JSON.stringify(this.customQuery)
            };
          },
          watch: {
            url: function(t, e) {
              (this.page = 1), this.getList();
            },
            dialogVisible: function(t, e) {
              t ||
                ((this.isNew = !1),
                (this.isEdit = !1),
                (this.isView = !1),
                (this.confirmLoading = !1),
                this.$refs.dialogForm.resetFields());
            }
          },
          mounted: function() {
            var t = this,
              e = this.$refs.searchForm;
            if (e) {
              e.$el.setAttribute("action", "javascript:;");
              var n = location.href.match(v);
              if (n) {
                var o = n[0].substr(2).replace(y, "="),
                  r = f.a.parse(o, { delimiter: "," });
                (this.page = 1 * r.page),
                  (this.size = 1 * r.size),
                  e.updateForm(
                    Object.keys(r).reduce(function(t, e) {
                      return "page" !== e && "size" !== e && (t[e] = r[e]), t;
                    }, {})
                  );
              }
            }
            this.$nextTick(function() {
              t.getList();
            });
          },
          methods: {
            getList: function(t) {
              var e = this,
                n = this.$refs.searchForm,
                o = n ? n.getFormValue() : {},
                r = Object.assign({}, o, this.customQuery),
                l = this.url,
                c = "",
                h = this.hasPagination ? this.size : this.noPaginationSize;
              if (l) {
                l.indexOf("?") > -1 ? (l += "&") : (l += "?"),
                  (c += "size=".concat(h)),
                  (c += Object.keys(r)
                    .filter(function(t) {
                      return "" !== r[t] && null !== r[t] && void 0 !== r[t];
                    })
                    .reduce(function(t, e) {
                      return (
                        t +
                        "&"
                          .concat(e, "=")
                          .concat(encodeURIComponent(r[e].toString().trim()))
                      );
                    }, ""));
                var f = this.firstPage - 1,
                  y = this.page + f;
                if (
                  ((this.loading = !0),
                  this.$axios
                    .get(l + c + "&page=".concat(y))
                    .then(function(t) {
                      var n = t.data,
                        data = [];
                      e.hasPagination
                        ? ((data = d()(n, e.dataPath) || []),
                          (e.total = d()(n, e.totalPath)))
                        : (data =
                            d()(n, e.dataPath) || d()(n, "payload") || []),
                        (data = (e.transform && e.transform(data)) || data),
                        (e.data = data),
                        e.isTree && (e.data = e.tree2Array(data, e.expandAll)),
                        (e.loading = !1),
                        e.$emit("update", data, n);
                    })
                    .catch(function(t) {
                      e.$emit("error", t), (e.loading = !1);
                    }),
                  this.routerMode && t > 0)
                ) {
                  var w = "",
                    _ =
                      "q=" +
                      (c + "&page=".concat(this.page))
                        .replace(/&/g, ",")
                        .replace(m, "~") +
                      ",";
                  if (location.href.indexOf("q=") > -1)
                    w = location.href.replace(v, _);
                  else if ("hash" == this.routerMode) {
                    var x =
                      location.hash.indexOf("?") > -1
                        ? "&".concat(_)
                        : "?".concat(_);
                    w =
                      location.origin +
                      location.pathname +
                      location.search +
                      location.hash +
                      x;
                  } else {
                    var $ = location.search ? "&".concat(_) : "?".concat(_);
                    w =
                      location.origin +
                      location.pathname +
                      location.search +
                      $ +
                      location.hash;
                  }
                  history.pushState(history.state, "el-data-table search", w);
                }
              } else console.warn("DataTable: url 为空, 不发送请求");
            },
            search: function() {
              var t = this;
              this.$refs.searchForm.validate(function(e) {
                e &&
                  t
                    .beforeSearch()
                    .then(function() {
                      (t.page = 1), t.getList(!0);
                    })
                    .catch(function(e) {
                      t.$emit("error", e);
                    });
              });
            },
            resetSearch: function() {
              var t = this;
              this.$refs.searchForm.resetFields(),
                (this.page = 1),
                history.replaceState(
                  history.state,
                  "",
                  location.href.replace(v, "")
                ),
                this.$nextTick(function() {
                  t.getList();
                }),
                this.$emit("reset"),
                this.$emit(
                  "update:customQuery",
                  Object.assign(
                    this.customQuery,
                    JSON.parse(this.initCustomQuery)
                  )
                );
            },
            handleSizeChange: function(t) {
              this.size !== t &&
                ((this.page = 1), (this.size = t), this.getList(!0));
            },
            handleCurrentChange: function(t) {
              this.page !== t && ((this.page = t), this.getList(!0));
            },
            handleSelectionChange: function(t) {
              (this.selected = t), this.$emit("selection-change", t);
            },
            onDefaultNew: function() {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              (this.row = t),
                (this.isNew = !0),
                (this.isEdit = !1),
                (this.isView = !1),
                (this.dialogTitle = this.dialogNewTitle),
                (this.dialogVisible = !0);
            },
            onDefaultView: function(t) {
              var e = this;
              (this.row = t),
                (this.isView = !0),
                (this.isNew = !1),
                (this.isEdit = !1),
                (this.dialogTitle = this.dialogViewTitle),
                (this.dialogVisible = !0),
                this.$nextTick(function() {
                  e.$refs.dialogForm.updateForm(t);
                });
            },
            onDefaultEdit: function(t) {
              var e = this;
              (this.row = t),
                (this.isEdit = !0),
                (this.isNew = !1),
                (this.isView = !1),
                (this.dialogTitle = this.dialogEditTitle),
                (this.dialogVisible = !0),
                this.$nextTick(function() {
                  e.$refs.dialogForm.updateForm(t);
                });
            },
            cancel: function() {
              this.dialogVisible = !1;
            },
            confirm: function() {
              var t = this;
              this.isView
                ? this.cancel()
                : this.$refs.dialogForm.validate(function(e) {
                    if (!e) return !1;
                    var data = Object.assign(
                      {},
                      t.$refs.dialogForm.getFormValue(),
                      t.extraParams
                    );
                    t.isTree &&
                      (t.isNew
                        ? (data[t.treeParentKey] = t.row[t.treeParentValue])
                        : (data[t.treeParentKey] = t.row[t.treeParentKey])),
                      t
                        .beforeConfirm(data, t.isNew)
                        .then(function(e) {
                          var n = "isNew",
                            o = "onNew";
                          if (
                            (t.isEdit && ((n = "isEdit"), (o = "onEdit")),
                            t[n] && t[o])
                          )
                            t[o](data, t.row)
                              .then(function(e) {
                                t.getList(), t.showMessage(!0), t.cancel();
                              })
                              .catch(function(t) {});
                          else {
                            var r = "post",
                              l = t.url + "";
                            t.isEdit &&
                              ((r = "put"), (l += "/".concat(t.row[t.id]))),
                              (t.confirmLoading = !0),
                              t.$axios[r](l, data)
                                .then(function(e) {
                                  t.getList(), t.showMessage(!0), t.cancel();
                                })
                                .catch(function(e) {
                                  t.confirmLoading = !1;
                                });
                          }
                        })
                        .catch(function(t) {});
                  });
            },
            onDefaultDelete: function(t) {
              var e = this;
              this.$confirm("确认删除吗", "提示", {
                type: "warning",
                beforeClose: function(n, o, r) {
                  if ("confirm" == n) {
                    if (((o.confirmButtonLoading = !0), e.onDelete))
                      return void e
                        .onDelete(
                          e.hasSelect
                            ? e.single
                              ? e.selected[0]
                              : e.selected
                            : t
                        )
                        .then(function(t) {
                          e.showMessage(!0), r(), e.getList();
                        })
                        .catch(function(t) {})
                        .finally(function(t) {
                          o.confirmButtonLoading = !1;
                        });
                    e.hasSelect
                      ? e.$axios
                          .delete(
                            e.url +
                              "/" +
                              e.selected
                                .map(function(t) {
                                  return t[e.id];
                                })
                                .toString()
                          )
                          .then(function(t) {
                            (o.confirmButtonLoading = !1),
                              r(),
                              e.showMessage(!0),
                              e.getList();
                          })
                          .catch(function(t) {
                            o.confirmButtonLoading = !1;
                          })
                      : e.$axios
                          .delete(e.url + "/" + t[e.id])
                          .then(function(t) {
                            (o.confirmButtonLoading = !1),
                              r(),
                              e.showMessage(!0),
                              e.getList();
                          })
                          .catch(function(t) {
                            o.confirmButtonLoading = !1;
                          });
                  } else r();
                }
              }).catch(function(t) {});
            },
            onCustomButtonsClick: function(t, e) {
              var n = this;
              t &&
                ((this.customButtonsLoading = !0),
                t(e)
                  .then(function(t) {
                    !1 !== t && n.getList();
                  })
                  .catch(function(t) {})
                  .finally(function(t) {
                    n.customButtonsLoading = !1;
                  }));
            },
            tree2Array: function(data, t) {
              var e = this,
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : null,
                o =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : null,
                r = [];
              return (
                data.forEach(function(l) {
                  void 0 === l._expanded && e.$set(l, "_expanded", t);
                  var c = 0;
                  if (
                    (null != o && (c = o + 1),
                    e.$set(l, "_level", c),
                    n && e.$set(l, "parent", n),
                    r.push(l),
                    l[e.treeChildKey] && l[e.treeChildKey].length > 0)
                  ) {
                    var d = e.tree2Array(l[e.treeChildKey], t, l, c);
                    r = r.concat(d);
                  }
                }),
                r
              );
            },
            showRow: function(t) {
              var e =
                !t.row.parent || (t.row.parent._expanded && t.row.parent._show);
              return (
                (t.row._show = e),
                e
                  ? "animation:treeTableShow 1s-webkit-animation:treeTableShow 1s"
                  : "display:none"
              );
            },
            toggleExpanded: function(t) {
              var e = this.data[t];
              e._expanded = !e._expanded;
            },
            iconShow: function(t, e) {
              return e[this.treeChildKey] && e[this.treeChildKey].length > 0;
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
        _ = (n(949), n(5)),
        x = Object(_.a)(
          w,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              { staticClass: "el-data-table" },
              [
                t.searchForm.length > 0 || t.$slots.search
                  ? n(
                      "el-form-renderer",
                      {
                        ref: "searchForm",
                        attrs: { inline: "", content: t.searchForm }
                      },
                      [
                        t._t("search"),
                        t._v(" "),
                        n(
                          "el-form-item",
                          [
                            n(
                              "el-button",
                              {
                                attrs: {
                                  "native-type": "submit",
                                  type: "primary",
                                  size: "small"
                                },
                                on: { click: t.search }
                              },
                              [t._v("查询")]
                            ),
                            t._v(" "),
                            n(
                              "el-button",
                              {
                                attrs: { size: "small" },
                                on: { click: t.resetSearch }
                              },
                              [t._v("重置")]
                            )
                          ],
                          1
                        )
                      ],
                      2
                    )
                  : t._e(),
                t._v(" "),
                t.hasNew || t.hasDelete || t.headerButtons.length > 0
                  ? n(
                      "el-form",
                      [
                        n(
                          "el-form-item",
                          [
                            t.hasNew
                              ? n(
                                  "el-button",
                                  {
                                    attrs: { type: "primary", size: "small" },
                                    on: { click: t.onDefaultNew }
                                  },
                                  [t._v("新增")]
                                )
                              : t._e(),
                            t._v(" "),
                            t._l(t.headerButtons, function(e, i) {
                              return "show" in e && !e.show(t.selected)
                                ? t._e()
                                : n(
                                    "el-button",
                                    t._b(
                                      {
                                        directives: [
                                          {
                                            name: "loading",
                                            rawName: "v-loading",
                                            value: t.customButtonsLoading,
                                            expression: "customButtonsLoading"
                                          }
                                        ],
                                        key: i,
                                        attrs: {
                                          disabled:
                                            "disabled" in e &&
                                            e.disabled(t.selected),
                                          size: "small"
                                        },
                                        on: {
                                          click: function(n) {
                                            return t.onCustomButtonsClick(
                                              e.atClick,
                                              t.selected
                                            );
                                          }
                                        }
                                      },
                                      "el-button",
                                      e,
                                      !1
                                    ),
                                    [t._v(t._s(e.text))]
                                  );
                            }),
                            t._v(" "),
                            t.hasSelect && t.hasDelete
                              ? n(
                                  "el-button",
                                  {
                                    attrs: {
                                      type: "danger",
                                      size: "small",
                                      disabled: t.single
                                        ? !t.selected.length ||
                                          t.selected.length > 1
                                        : !t.selected.length
                                    },
                                    on: {
                                      click: function(e) {
                                        return t.onDefaultDelete(e);
                                      }
                                    }
                                  },
                                  [t._v("删除")]
                                )
                              : t._e()
                          ],
                          2
                        )
                      ],
                      1
                    )
                  : t._e(),
                t._v(" "),
                n(
                  "el-table",
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
                      ref: "table",
                      attrs: { data: t.data, "row-style": t.showRow },
                      on: { "selection-change": t.handleSelectionChange }
                    },
                    "el-table",
                    t.tableAttrs,
                    !1
                  ),
                  [
                    t.isTree
                      ? [
                          t.hasSelect
                            ? [
                                n(
                                  "el-table-column",
                                  t._b(
                                    { key: "selection-key" },
                                    "el-table-column",
                                    t.columns[0],
                                    !1
                                  )
                                ),
                                t._v(" "),
                                n(
                                  "el-table-column",
                                  t._b(
                                    {
                                      key: "tree-ctrl",
                                      scopedSlots: t._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(e) {
                                              return [
                                                t._l(e.row._level, function(e) {
                                                  return t.isTree
                                                    ? n("span", {
                                                        key: e,
                                                        staticClass:
                                                          "ms-tree-space"
                                                      })
                                                    : t._e();
                                                }),
                                                t._v(" "),
                                                t.isTree &&
                                                t.iconShow(e.$index, e.row)
                                                  ? n(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "tree-ctrl",
                                                        on: {
                                                          click: function(n) {
                                                            return t.toggleExpanded(
                                                              e.$index
                                                            );
                                                          }
                                                        }
                                                      },
                                                      [
                                                        e.row._expanded
                                                          ? n("i", {
                                                              staticClass:
                                                                "el-icon-minus"
                                                            })
                                                          : n("i", {
                                                              staticClass:
                                                                "el-icon-plus"
                                                            })
                                                      ]
                                                    )
                                                  : t._e(),
                                                t._v(
                                                  "\n            " +
                                                    t._s(
                                                      e.row[t.columns[1].prop]
                                                    ) +
                                                    "\n          "
                                                )
                                              ];
                                            }
                                          }
                                        ],
                                        null,
                                        !1,
                                        1667431242
                                      )
                                    },
                                    "el-table-column",
                                    t.columns[1],
                                    !1
                                  )
                                ),
                                t._v(" "),
                                t._l(
                                  t.columns.filter(function(t, i) {
                                    return 0 !== i && 1 !== i;
                                  }),
                                  function(col) {
                                    return n(
                                      "el-table-column",
                                      t._b(
                                        { key: col.prop },
                                        "el-table-column",
                                        col,
                                        !1
                                      )
                                    );
                                  }
                                )
                              ]
                            : [
                                n(
                                  "el-table-column",
                                  t._b(
                                    {
                                      key: "tree-ctrl",
                                      scopedSlots: t._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(e) {
                                              return [
                                                t._l(e.row._level, function(e) {
                                                  return t.isTree
                                                    ? n("span", {
                                                        key: e,
                                                        staticClass:
                                                          "ms-tree-space"
                                                      })
                                                    : t._e();
                                                }),
                                                t._v(" "),
                                                t.isTree &&
                                                t.iconShow(e.$index, e.row)
                                                  ? n(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "tree-ctrl",
                                                        on: {
                                                          click: function(n) {
                                                            return t.toggleExpanded(
                                                              e.$index
                                                            );
                                                          }
                                                        }
                                                      },
                                                      [
                                                        e.row._expanded
                                                          ? n("i", {
                                                              staticClass:
                                                                "el-icon-minus"
                                                            })
                                                          : n("i", {
                                                              staticClass:
                                                                "el-icon-plus"
                                                            })
                                                      ]
                                                    )
                                                  : t._e(),
                                                t._v(
                                                  "\n            " +
                                                    t._s(
                                                      e.row[t.columns[0].prop]
                                                    ) +
                                                    "\n          "
                                                )
                                              ];
                                            }
                                          }
                                        ],
                                        null,
                                        !1,
                                        1528062795
                                      )
                                    },
                                    "el-table-column",
                                    t.columns[0],
                                    !1
                                  )
                                ),
                                t._v(" "),
                                t._l(
                                  t.columns.filter(function(t, i) {
                                    return 0 !== i;
                                  }),
                                  function(col) {
                                    return n(
                                      "el-table-column",
                                      t._b(
                                        { key: col.prop },
                                        "el-table-column",
                                        col,
                                        !1
                                      )
                                    );
                                  }
                                )
                              ]
                        ]
                      : t._l(t.columns, function(col) {
                          return n(
                            "el-table-column",
                            t._b({ key: col.prop }, "el-table-column", col, !1)
                          );
                        }),
                    t._v(" "),
                    t.hasOperation
                      ? n(
                          "el-table-column",
                          t._b(
                            {
                              attrs: { label: "操作" },
                              scopedSlots: t._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(e) {
                                      return [
                                        t.isTree && t.hasNew
                                          ? n(
                                              "el-button",
                                              {
                                                attrs: {
                                                  type: "primary",
                                                  size: "small"
                                                },
                                                on: {
                                                  click: function(n) {
                                                    return t.onDefaultNew(
                                                      e.row
                                                    );
                                                  }
                                                }
                                              },
                                              [t._v("新增")]
                                            )
                                          : t._e(),
                                        t._v(" "),
                                        t.hasEdit
                                          ? n(
                                              "el-button",
                                              {
                                                attrs: { size: "small" },
                                                on: {
                                                  click: function(n) {
                                                    return t.onDefaultEdit(
                                                      e.row
                                                    );
                                                  }
                                                }
                                              },
                                              [
                                                t._v(
                                                  "\n          修改\n        "
                                                )
                                              ]
                                            )
                                          : t._e(),
                                        t._v(" "),
                                        t.hasView
                                          ? n(
                                              "el-button",
                                              {
                                                attrs: {
                                                  type: "info",
                                                  size: "small"
                                                },
                                                on: {
                                                  click: function(n) {
                                                    return t.onDefaultView(
                                                      e.row
                                                    );
                                                  }
                                                }
                                              },
                                              [
                                                t._v(
                                                  "\n          查看\n        "
                                                )
                                              ]
                                            )
                                          : t._e(),
                                        t._v(" "),
                                        t._l(t.extraButtons, function(o, i) {
                                          return "show" in o && !o.show(e.row)
                                            ? t._e()
                                            : n(
                                                "el-button",
                                                t._b(
                                                  {
                                                    directives: [
                                                      {
                                                        name: "loading",
                                                        rawName: "v-loading",
                                                        value:
                                                          t.customButtonsLoading,
                                                        expression:
                                                          "customButtonsLoading"
                                                      }
                                                    ],
                                                    key: i,
                                                    attrs: { size: "small" },
                                                    on: {
                                                      click: function(n) {
                                                        return t.onCustomButtonsClick(
                                                          o.atClick,
                                                          e.row
                                                        );
                                                      }
                                                    }
                                                  },
                                                  "el-button",
                                                  o,
                                                  !1
                                                ),
                                                [
                                                  t._v(
                                                    "\n          " +
                                                      t._s(o.text) +
                                                      "\n        "
                                                  )
                                                ]
                                              );
                                        }),
                                        t._v(" "),
                                        !t.hasSelect &&
                                        t.hasDelete &&
                                        t.canDelete(e.row)
                                          ? n(
                                              "el-button",
                                              {
                                                attrs: {
                                                  type: "danger",
                                                  size: "small"
                                                },
                                                on: {
                                                  click: function(n) {
                                                    return t.onDefaultDelete(
                                                      e.row
                                                    );
                                                  }
                                                }
                                              },
                                              [
                                                t._v(
                                                  "\n          删除\n        "
                                                )
                                              ]
                                            )
                                          : t._e()
                                      ];
                                    }
                                  }
                                ],
                                null,
                                !1,
                                3281852495
                              )
                            },
                            "el-table-column",
                            t.operationAttrs,
                            !1
                          )
                        )
                      : t._e(),
                    t._v(" "),
                    t._t("default")
                  ],
                  2
                ),
                t._v(" "),
                t.hasPagination
                  ? n("el-pagination", {
                      staticStyle: { "text-align": "right", padding: "10px 0" },
                      attrs: {
                        "current-page": t.page,
                        "page-sizes": t.paginationSizes,
                        "page-size": t.size,
                        total: t.total,
                        layout: t.paginationLayout
                      },
                      on: {
                        "size-change": t.handleSizeChange,
                        "current-change": t.handleCurrentChange
                      }
                    })
                  : t._e(),
                t._v(" "),
                t.hasDialog
                  ? n(
                      "el-dialog",
                      {
                        attrs: {
                          title: t.dialogTitle,
                          visible: t.dialogVisible
                        },
                        on: {
                          "update:visible": function(e) {
                            t.dialogVisible = e;
                          }
                        }
                      },
                      [
                        n(
                          "el-form-renderer",
                          t._b(
                            {
                              ref: "dialogForm",
                              attrs: { content: t.form, disabled: t.isView }
                            },
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
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !t.isView,
                                expression: "!isView"
                              }
                            ],
                            attrs: { slot: "footer" },
                            slot: "footer"
                          },
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
                                directives: [
                                  {
                                    name: "loading",
                                    rawName: "v-loading",
                                    value: t.confirmLoading,
                                    expression: "confirmLoading"
                                  }
                                ],
                                attrs: { type: "primary", size: "small" },
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
                  : t._e()
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
        $ = n(400),
        S = function(t) {
          return "/activity/".concat(t);
        },
        k = {
          components: { "el-tag": r.a, ElDataTable: x },
          data: function() {
            var t = this,
              e = this.$createElement;
            return {
              tableConfig: {
                firstPage: 1,
                dataPath: "payload",
                totalPath: "payload.totalPath",
                hasDialog: !1,
                hasPagination: !0,
                hasOperation: !0,
                isTree: !1,
                url: l.c.findAll,
                customQuery: { collection: $.l.activity, clean: !0 },
                hasNew: !1,
                hasEdit: !1,
                hasView: !1,
                hasDelete: !1,
                single: !1,
                operationAttrs: { width: "200px" },
                transform: this.transform,
                headerButtons: [
                  {
                    text: "新建活动",
                    type: "primary",
                    atClick: function() {
                      return t.$router.push(S($.c.add)), Promise.resolve(!1);
                    }
                  }
                ],
                extraButtons: [
                  {
                    text: "查看活动",
                    type: "text",
                    atClick: function(e) {
                      var n = e.activityId;
                      return (
                        t.$router.push({ path: S($.c.view), query: { id: n } }),
                        Promise.resolve(!1)
                      );
                    }
                  },
                  {
                    text: "活动分析",
                    type: "text",
                    atClick: function(e) {
                      return (
                        t.$router.push({
                          path: "/charts",
                          query: {
                            id: e.activityId,
                            startTime: e.startTime,
                            endTime: e.endTime
                          }
                        }),
                        Promise.resolve(!1)
                      );
                    }
                  },
                  {
                    text: "暂停",
                    type: "text",
                    show: function(t) {
                      return 0 === t.status;
                    },
                    atClick: function(e) {
                      return t.$axios.$post(
                        l.c.updateByCondition + "?collection=activity",
                        {
                          args: { activityId: e.activityId },
                          update: { status: 1 }
                        }
                      );
                    }
                  },
                  {
                    text: "开始",
                    type: "text",
                    show: function(t) {
                      return 1 === t.status;
                    },
                    atClick: function(e) {
                      return t.$axios.$post(
                        l.c.updateByCondition + "?collection=activity",
                        {
                          args: { activityId: e.activityId },
                          update: { status: 0 }
                        }
                      );
                    }
                  }
                ],
                columns: [
                  { type: "index", label: "序号" },
                  { prop: "name", label: "活动名称" },
                  {
                    prop: "type",
                    label: "类型",
                    formatter: function(t) {
                      var e = t.type;
                      return $.a[e];
                    }
                  },
                  {
                    prop: "status",
                    label: "促销状态",
                    formatter: function(t) {
                      var n = t.status;
                      return e("el-tag", { attrs: { type: $.k[n] } }, [$.j[n]]);
                    }
                  },
                  {
                    prop: "startTime",
                    label: "促销时间",
                    width: "295px",
                    formatter: function(t) {
                      return ""
                        .concat(
                          Object(filter.a)(t.startTime, "YYYY-MM-DD HH:mm"),
                          " 至 "
                        )
                        .concat(
                          Object(filter.a)(t.endTime, "YYYY-MM-DD HH:mm")
                        );
                    }
                  },
                  {
                    prop: "createdTime",
                    label: "创建时间",
                    width: "150px",
                    formatter: function(t) {
                      var e = t.createdTime;
                      return Object(filter.a)(e, "YYYY-MM-DD HH:mm");
                    }
                  },
                  { prop: "goodsNumber", label: "活动商品" }
                ],
                searchForm: [
                  {
                    $type: "input",
                    $id: "name",
                    label: "活动名称",
                    $el: { placeholder: "请输入活动名称" }
                  },
                  {
                    $type: "select",
                    $id: "status",
                    label: "活动状态",
                    $el: { placeholder: "请选择活动状态" },
                    $options: $.i
                  }
                ]
              }
            };
          },
          methods: {
            transform: function(data) {
              return data.sort(function(a, b) {
                return b.createdTime - a.createdTime;
              });
            }
          }
        },
        C = Object(_.a)(
          k,
          function() {
            var t = this.$createElement,
              e = this._self._c || t;
            return e(
              "div",
              { staticClass: "activity-list" },
              [
                e("sub-title", { attrs: { title: "活动管理" } }),
                this._v(" "),
                e(
                  "el-data-table",
                  this._b({}, "el-data-table", this.tableConfig, !1)
                )
              ],
              1
            );
          },
          [],
          !1,
          null,
          "47f626c3",
          null
        );
      e.default = C.exports;
    }
  }
]);
