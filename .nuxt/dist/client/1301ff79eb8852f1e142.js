(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    540: function(t, e, n) {},
    978: function(t, e, n) {
      "use strict";
      var c = n(540);
      n.n(c).a;
    },
    983: function(t, e, n) {
      "use strict";
      n.r(e);
      var c = {
          data: function() {
            return {};
          },
          mounted: function() {
            this.$store.dispatch("fetchUserAndMenuList");
          },
          methods: {}
        },
        o = (n(978), n(5)),
        component = Object(o.a)(
          c,
          function() {
            var t = this.$createElement,
              e = this._self._c || t;
            return e("div", { staticClass: "index" }, [
              e("img", {
                staticClass: "home-img",
                attrs: {
                  src: this.$store.state.meta.homePageImg,
                  alt: "homeImg"
                }
              })
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    }
  }
]);
