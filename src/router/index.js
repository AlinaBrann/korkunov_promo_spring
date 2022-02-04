import Vue from "vue";
import VueRouter from "vue-router";
import Constructor from "../views/Constructor.vue";
import VideoGreeting from "../views/VideoGreeting.vue";
import EnterPincode from "../views/EnterPincode.vue";
import GreetingPreview from "../views/GreetingPreview.vue";
import VideoPage from "../views/VideoPage.vue";
import PlaceholderPage from "../views/PlaceholderPage.vue";

import { isPortrait, isMobile, getOffset } from "../utils/device";

Vue.use(VueRouter);

const titlePrefix = "Поздравьте того, кто важен — ";

const routes = [
  {
    path: "/",
    name: "Constructor",
    component: Constructor,
    meta: {
      title: titlePrefix + "Создайте персональное видеопоздравление",
    },
  },
  {
    path: "/video-greeting",
    name: "VideoGreeting",
    component: VideoGreeting,
    meta: {
      title: "Тому, кто важен. Создавайте видеопоздравления от Коркунов",
    },
  },
  {
    path: "/greeting-preview",
    name: "GreetingPreview",
    component: GreetingPreview,
    meta: {
      title: titlePrefix + "Просмотр видеопоздравления",
    },
  },
  {
    path: "/enter-pincode",
    name: "EnterPincode",
    component: EnterPincode,
    meta: {
      title: titlePrefix + "Посмотреть видеопоздравление",
    },
  },
  {
    path: "/video",
    name: "VideoPage",
    component: VideoPage,
    meta: {
      title: titlePrefix + "Посмотреть видеопоздравление",
    },
  },
  {
    path: "/placeholder",
    name: "PlaceholderPage",
    component: PlaceholderPage,
    meta: {
      title: titlePrefix + "Сайт доступен для просмотра со смартфона",
    },
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
