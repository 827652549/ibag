import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home"),
  },
  {
    path: "/a",
    name: "A",
    component: () => import("../pages/A"),
  },
  {
    path: "/b",
    name: "B",
    component: () => import("../pages/B"),
  },
  {
    path: "/*",
    name: "404",
    component: () => import("../pages/404"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
