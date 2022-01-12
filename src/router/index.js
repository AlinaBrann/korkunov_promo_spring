import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ComingSoon from "../views/ComingSoon.vue";

import { isPortrait, isMobile, getOffset } from "../utils/device";

Vue.use(VueRouter);

const titlePrefix = "Поздравьте того, кто важен — ";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: titlePrefix + "Главная",
    },
  },
  {
    path: "/coming-soon",
    name: "ComingSoon",
    component: ComingSoon,
    meta: {
      title: titlePrefix + "Акция скоро начнется",
    },
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
