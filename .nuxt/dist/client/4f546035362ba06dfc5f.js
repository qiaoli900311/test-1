(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    982: function(e, r, t) {
      "use strict";
      t.r(r);
      t(55);
      var o = {
          layout: "login",
          name: "login",
          components: {},
          data: function() {
            return {
              loading: !1,
              form: { username: "", password: "" },
              rules: {
                username: [
                  { required: !0, message: "请输入账号", trigger: "blur" },
                  {
                    validator: function(e, r, t) {
                      "admin" != r && t(new Error("账号输入错误")), t();
                    },
                    trigger: "blur"
                  }
                ],
                password: [
                  { required: !0, message: "请输入密码", trigger: "blur" },
                  {
                    validator: function(e, r, t) {
                      "abcd1234" != r && t(new Error("密码输入错误")), t();
                    },
                    trigger: "blur"
                  }
                ]
              }
            };
          },
          methods: {
            login: function() {
              var e = this;
              this.$refs.loginForm.validate(function(r) {
                if (!r) return !1;
                (e.loading = !0),
                  e.$store
                    .dispatch("login", e.form)
                    .then(function() {
                      (e.loading = !1), e.$router.replace("/");
                    })
                    .catch(function(r) {
                      e.loading = !1;
                    });
              });
            }
          }
        },
        n = t(5),
        component = Object(n.a)(
          o,
          function() {
            var e = this,
              r = e.$createElement,
              t = e._self._c || r;
            return t("div", { staticClass: "login" }, [
              t(
                "div",
                { staticClass: "main" },
                [
                  t(
                    "el-form",
                    {
                      ref: "loginForm",
                      attrs: {
                        model: e.form,
                        "status-icon": "",
                        rules: e.rules
                      }
                    },
                    [
                      t(
                        "el-form-item",
                        { attrs: { label: "", prop: "username" } },
                        [
                          t("el-input", {
                            attrs: { placeholder: "账号" },
                            model: {
                              value: e.form.username,
                              callback: function(r) {
                                e.$set(
                                  e.form,
                                  "username",
                                  "string" == typeof r ? r.trim() : r
                                );
                              },
                              expression: "form.username"
                            }
                          })
                        ],
                        1
                      ),
                      e._v(" "),
                      t(
                        "el-form-item",
                        { attrs: { label: "", prop: "password" } },
                        [
                          t("el-input", {
                            attrs: {
                              placeholder: "密码",
                              type: "password",
                              "auto-complete": "off"
                            },
                            nativeOn: {
                              keyup: function(r) {
                                return !r.type.indexOf("key") &&
                                  e._k(r.keyCode, "enter", 13, r.key, "Enter")
                                  ? null
                                  : e.login(r);
                              }
                            },
                            model: {
                              value: e.form.password,
                              callback: function(r) {
                                e.$set(
                                  e.form,
                                  "password",
                                  "string" == typeof r ? r.trim() : r
                                );
                              },
                              expression: "form.password"
                            }
                          })
                        ],
                        1
                      ),
                      e._v(" "),
                      t(
                        "el-form-item",
                        [
                          t(
                            "el-button",
                            {
                              attrs: {
                                type: "primary",
                                loading: e.loading,
                                size: "medium"
                              },
                              on: { click: e.login }
                            },
                            [e._v("登录")]
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
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      r.default = component.exports;
    }
  }
]);
