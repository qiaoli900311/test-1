import Vue from "vue";
import Router from "vue-router";
import { interopDefault } from "./utils";
import scrollBehavior from "./router.scrollBehavior.js";

const _5a874af0 = () =>
  interopDefault(
    import(
      "..\\src\\pages\\charts\\index.vue" /* webpackChunkName: "pages_charts_index" */
    )
  );
const _bc072008 = () =>
  interopDefault(
    import("..\\src\\pages\\login.vue" /* webpackChunkName: "pages_login" */)
  );
const _9cffe82c = () =>
  interopDefault(
    import(
      "..\\src\\pages\\activity\\list.vue" /* webpackChunkName: "pages_activity_list" */
    )
  );
const _b1a5d606 = () =>
  interopDefault(
    import(
      "..\\src\\pages\\activity\\_type.vue" /* webpackChunkName: "pages_activity__type" */
    )
  );
const _4f566636 = () =>
  interopDefault(
    import("..\\src\\pages\\index.vue" /* webpackChunkName: "pages_index" */)
  );

Vue.use(Router);

export const routerOptions = {
  mode: "hash",
  base: decodeURI("/"),
  linkActiveClass: "nuxt-link-active",
  linkExactActiveClass: "nuxt-link-exact-active",
  scrollBehavior,

  routes: [
    {
      path: "/charts",
      component: _5a874af0,
      name: "charts"
    },
    {
      path: "/login",
      component: _bc072008,
      name: "login"
    },
    {
      path: "/activity/list",
      component: _9cffe82c,
      name: "activity-list"
    },
    {
      path: "/activity/:type?",
      component: _b1a5d606,
      name: "activity-type"
    },
    {
      path: "/",
      component: _4f566636,
      name: "index"
    }
  ],

  fallback: false
};

export function createRouter() {
  return new Router(routerOptions);
}
